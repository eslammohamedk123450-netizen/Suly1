const THREE_URL = 'https://unpkg.com/three@0.170.0/build/three.module.js';

export async function initThreeScene({ canvas, fallback }) {
  if (!canvas || !window.WebGLRenderingContext) {
    showFallback(canvas, fallback);
    return;
  }
  try {
    const THREE = await import(THREE_URL);
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x11111b, 0.065);
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0.1, 0.1, 6.2);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 700 ? 1.35 : 1.8));
    renderer.setClearColor(0x11111b, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const group = new THREE.Group();
    scene.add(group);
    const materials = {
      silver: new THREE.MeshPhysicalMaterial({ color: 0xd7d4e6, metalness: 0.86, roughness: 0.2, clearcoat: 0.5, clearcoatRoughness: 0.18 }),
      violet: new THREE.MeshPhysicalMaterial({ color: 0x8b5cf6, metalness: 0.62, roughness: 0.24, clearcoat: 0.75, clearcoatRoughness: 0.12, emissive: 0x12051f, emissiveIntensity: 0.18 }),
      dark: new THREE.MeshPhysicalMaterial({ color: 0x2d2848, metalness: 0.78, roughness: 0.3, clearcoat: 0.45 })
    };

    const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(1.18, 0.19, 160, 24, 2, 3), materials.silver);
    knot.rotation.set(0.25, -0.24, 0.1);
    group.add(knot);
    const innerKnot = new THREE.Mesh(new THREE.TorusKnotGeometry(0.68, 0.08, 120, 16, 2, 3), materials.violet);
    innerKnot.rotation.set(-0.35, 0.3, 0.15);
    group.add(innerKnot);

    const ringA = new THREE.Mesh(new THREE.TorusGeometry(1.78, 0.022, 10, 160), materials.violet);
    ringA.rotation.set(0.72, 0.2, -0.28);
    const ringB = new THREE.Mesh(new THREE.TorusGeometry(2.02, 0.014, 10, 160), materials.dark);
    ringB.rotation.set(-0.48, 0.7, 0.34);
    group.add(ringA, ringB);

    const quality = window.innerWidth < 700 ? 115 : 220;
    const points = [];
    for (let i = 0; i < quality; i += 1) {
      const radius = 2.35 + Math.random() * 0.75;
      const angle = Math.random() * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(angle) * radius, (Math.random() - 0.5) * 1.9, Math.sin(angle) * radius));
    }
    const particleGeometry = new THREE.BufferGeometry().setFromPoints(points);
    const particleMaterial = new THREE.PointsMaterial({ color: 0xa78bfa, size: window.innerWidth < 700 ? 0.018 : 0.025, transparent: true, opacity: 0.6, sizeAttenuation: true });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    const keyLight = new THREE.PointLight(0xc4b5fd, 11, 7, 2);
    keyLight.position.set(3.2, 2.6, 3.7);
    const rimLight = new THREE.PointLight(0x4c1d95, 16, 6, 2);
    rimLight.position.set(-3.2, -1.2, -1.8);
    const fillLight = new THREE.AmbientLight(0x3b315f, 1.1);
    scene.add(keyLight, rimLight, fillLight);

    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;
    let frameId;
    let disposed = false;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const onPointer = (event) => {
      if (reducedMotion) return;
      targetX = (event.clientX / window.innerWidth - 0.5) * 0.35;
      targetY = (event.clientY / window.innerHeight - 0.5) * 0.22;
    };
    const onResize = () => {
      const bounds = canvas.parentElement.getBoundingClientRect();
      const width = Math.max(280, bounds.width);
      const height = Math.max(320, bounds.height);
      camera.aspect = width / height;
      camera.position.z = width < 600 ? 6.9 : 6.2;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    onResize();

    const clock = new THREE.Clock();
    const animate = () => {
      if (disposed) return;
      const elapsed = clock.getElapsedTime();
      const idle = reducedMotion ? 0 : elapsed;
      pointerX += (targetX - pointerX) * 0.035;
      pointerY += (targetY - pointerY) * 0.035;
      group.rotation.y = idle * 0.095 + pointerX;
      group.rotation.x = Math.sin(idle * 0.22) * 0.08 + pointerY;
      knot.rotation.z = Math.sin(idle * 0.16) * 0.14;
      innerKnot.rotation.z = -idle * 0.12;
      ringA.rotation.z += reducedMotion ? 0 : 0.0018;
      ringB.rotation.x += reducedMotion ? 0 : 0.0011;
      particles.rotation.y = idle * 0.018;
      keyLight.position.x = 3.2 + Math.sin(idle * 0.5) * 0.7;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    canvas.classList.add('is-ready');
    fallback.hidden = true;
    animate();

    window.addEventListener('pagehide', () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('resize', onResize);
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    }, { once: true });
  } catch (error) {
    console.warn('Three.js scene unavailable; using the CSS fallback.', error);
    showFallback(canvas, fallback);
  }
}

function showFallback(canvas, fallback) {
  canvas?.setAttribute('hidden', 'hidden');
  if (fallback) fallback.hidden = false;
}
