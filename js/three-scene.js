const THREE_URL = 'https://unpkg.com/three@0.170.0/build/three.module.js';

export async function initThreeScene({ canvas, fallback }) {
  if (!canvas || !window.WebGLRenderingContext) return showFallback(canvas, fallback);
  try {
    const THREE = await import(THREE_URL);
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070711, 0.06);
    const camera = new THREE.PerspectiveCamera(31, 1, 0.1, 100);
    camera.position.set(0, 1.25, 7.2);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 700 ? 1.35 : 1.8));
    renderer.setClearColor(0x070711, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const laptop = new THREE.Group();
    laptop.rotation.set(-0.09, 0.2, -0.06);
    scene.add(laptop);
    const metal = new THREE.MeshPhysicalMaterial({ color: 0x34334d, metalness: 0.92, roughness: 0.2, clearcoat: 0.55, clearcoatRoughness: 0.16 });
    const edge = new THREE.MeshPhysicalMaterial({ color: 0x9089ad, metalness: 0.86, roughness: 0.22, clearcoat: 0.65 });
    const dark = new THREE.MeshPhysicalMaterial({ color: 0x0b0b18, metalness: 0.38, roughness: 0.3 });
    const screenMat = new THREE.MeshPhysicalMaterial({ color: 0x10102a, emissive: 0x241052, emissiveIntensity: 0.75, metalness: 0.25, roughness: 0.22 });
    const glow = new THREE.MeshBasicMaterial({ color: 0xa78bfa, transparent: true, opacity: 0.88 });

    const base = new THREE.Mesh(new THREE.BoxGeometry(3.75, 0.18, 2.55), metal);
    base.position.y = 0;
    laptop.add(base);
    const palm = new THREE.Mesh(new THREE.BoxGeometry(3.45, 0.045, 1.2), edge);
    palm.position.set(0, 0.115, 0.47);
    laptop.add(palm);
    const trackpad = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.018, 0.65), dark);
    trackpad.position.set(0, 0.145, 0.5);
    laptop.add(trackpad);

    const keys = new THREE.Group();
    const keyMaterial = new THREE.MeshPhysicalMaterial({ color: 0x151427, metalness: 0.34, roughness: 0.26, emissive: 0x24105d, emissiveIntensity: 0.22 });
    const keyRows = 5;
    const keyCols = 12;
    for (let row = 0; row < keyRows; row += 1) {
      for (let col = 0; col < keyCols; col += 1) {
        const key = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.035, 0.13), keyMaterial);
        key.position.set(-1.33 + col * 0.24, 0.16, -0.63 + row * 0.18);
        keys.add(key);
      }
    }
    laptop.add(keys);

    const lid = new THREE.Group();
    lid.position.set(0, 0.11, -1.18);
    lid.rotation.x = -0.38;
    laptop.add(lid);
    const back = new THREE.Mesh(new THREE.BoxGeometry(3.75, 2.42, 0.12), metal);
    back.position.set(0, 1.15, 0);
    lid.add(back);
    const screen = new THREE.Mesh(new THREE.BoxGeometry(3.36, 2.02, 0.035), screenMat);
    screen.position.set(0, 1.15, -0.08);
    lid.add(screen);
    const bezel = new THREE.Mesh(new THREE.BoxGeometry(3.52, 2.18, 0.025), dark);
    bezel.position.set(0, 1.15, -0.055);
    lid.add(bezel);
    screen.position.z = -0.08;
    const codeLines = new THREE.Group();
    const codeWidths = [1.4, 1.95, 1.1, 1.6, 0.82, 1.85];
    codeWidths.forEach((width, index) => {
      const line = new THREE.Mesh(new THREE.BoxGeometry(width, 0.045, 0.018), index === 1 ? glow : new THREE.MeshBasicMaterial({ color: 0x5eead4, transparent: true, opacity: 0.72 }));
      line.position.set(-1.18 + width / 2, 1.76 - index * 0.23, -0.115);
      codeLines.add(line);
    });
    lid.add(codeLines);
    const logo = new THREE.Mesh(new THREE.TorusGeometry(0.23, 0.025, 8, 40), glow);
    logo.position.set(0, 0.55, -0.13);
    logo.rotation.x = Math.PI / 2;
    lid.add(logo);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.55, 0.012, 8, 160), new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.42 }));
    ring.rotation.set(1.12, 0.1, 0.22);
    laptop.add(ring);
    const particles = [];
    for (let i = 0; i < (window.innerWidth < 700 ? 70 : 125); i += 1) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 2.5 + Math.random() * 0.9;
      particles.push(new THREE.Vector3(Math.cos(angle) * radius, (Math.random() - 0.3) * 2, Math.sin(angle) * radius));
    }
    const particleGeometry = new THREE.BufferGeometry().setFromPoints(particles);
    const particleMaterial = new THREE.PointsMaterial({ color: 0xa78bfa, size: 0.025, transparent: true, opacity: 0.62 });
    const particleField = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleField);

    const keyLight = new THREE.PointLight(0xc4b5fd, 16, 9, 2); keyLight.position.set(3.8, 3.8, 4.4);
    const rimLight = new THREE.PointLight(0x5b21b6, 20, 8, 2); rimLight.position.set(-3.2, 1, -2.4);
    const fill = new THREE.AmbientLight(0x32245d, 1.2);
    scene.add(keyLight, rimLight, fill);

    let targetX = 0; let targetY = 0; let pointerX = 0; let pointerY = 0; let frameId; let disposed = false;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const onPointer = (event) => { if (!reducedMotion) { targetX = (event.clientX / window.innerWidth - .5) * .4; targetY = (event.clientY / window.innerHeight - .5) * .18; } };
    const onResize = () => { const box = canvas.parentElement.getBoundingClientRect(); const width = Math.max(280, box.width); const height = Math.max(320, box.height); camera.aspect = width / height; camera.updateProjectionMatrix(); camera.position.z = width < 600 ? 7.9 : 7.2; renderer.setSize(width, height, false); };
    window.addEventListener('pointermove', onPointer, { passive: true }); window.addEventListener('resize', onResize, { passive: true }); onResize();
    const clock = new THREE.Clock();
    const animate = () => {
      if (disposed) return;
      const time = clock.getElapsedTime(); const idle = reducedMotion ? 0 : time;
      pointerX += (targetX - pointerX) * .035; pointerY += (targetY - pointerY) * .035;
      laptop.rotation.y = .2 + pointerX + Math.sin(idle * .22) * .035; laptop.rotation.x = -.09 + pointerY + Math.sin(idle * .18) * .025;
      lid.rotation.x = -.38 + Math.sin(idle * .24) * .025; ring.rotation.z += reducedMotion ? 0 : .0018; particleField.rotation.y = idle * .018;
      keyLight.position.x = 3.8 + Math.sin(idle * .5) * .8; renderer.render(scene, camera); frameId = requestAnimationFrame(animate);
    };
    canvas.classList.add('is-ready'); fallback.hidden = true; animate();
    window.addEventListener('pagehide', () => { disposed = true; cancelAnimationFrame(frameId); window.removeEventListener('pointermove', onPointer); window.removeEventListener('resize', onResize); particleGeometry.dispose(); particleMaterial.dispose(); renderer.dispose(); }, { once: true });
  } catch (error) { console.warn('Three.js laptop unavailable; using CSS fallback.', error); showFallback(canvas, fallback); }
}

function showFallback(canvas, fallback) { canvas?.setAttribute('hidden', 'hidden'); if (fallback) fallback.hidden = false; }
