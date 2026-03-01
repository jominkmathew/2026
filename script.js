/* =========================================================
   FUTURISTIC PORTFOLIO – Interactive Engine
   Three.js + GSAP + ScrollTrigger + Vanilla Tilt
   Live Animations: Dev Console, Running Character,
   CI/CD Pipeline, Floating Code, Docker Status
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ===================== LOADER – Developer Workspace Boot =====================
  const loader = document.getElementById('loader');
  const matrixCanvas = document.getElementById('matrix-canvas');
  const mCtx = matrixCanvas.getContext('2d');
  matrixCanvas.width = window.innerWidth;
  matrixCanvas.height = window.innerHeight;

  // Matrix rain
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%{}[]<>/=;:.git.push.npm.docker';
  const fontSize = 14;
  const columns = Math.floor(matrixCanvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function drawMatrix() {
    mCtx.fillStyle = 'rgba(5,5,16,0.06)';
    mCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    mCtx.fillStyle = '#00f0ff';
    mCtx.font = fontSize + 'px Share Tech Mono';

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      mCtx.fillText(char, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  const matrixInterval = setInterval(drawMatrix, 50);

  // Runner dust & spark particles
  const runnerParticles = document.getElementById('runnerParticles');
  let particleInterval;
  if (runnerParticles) {
    particleInterval = setInterval(() => {
      // Dust particle
      const dust = document.createElement('div');
      dust.className = 'runner-particle dust';
      dust.style.setProperty('--dx', (-15 - Math.random() * 25) + 'px');
      dust.style.setProperty('--dy', (-5 + Math.random() * 15) + 'px');
      dust.style.top = (40 + Math.random() * 15) + 'px';
      dust.style.left = (10 + Math.random() * 15) + 'px';
      runnerParticles.appendChild(dust);
      setTimeout(() => dust.remove(), 500);

      // Occasional spark
      if (Math.random() > 0.5) {
        const spark = document.createElement('div');
        spark.className = 'runner-particle spark';
        spark.style.setProperty('--dx', (-20 - Math.random() * 30) + 'px');
        spark.style.setProperty('--dy', (-10 + Math.random() * 20) + 'px');
        spark.style.top = (35 + Math.random() * 20) + 'px';
        spark.style.left = (5 + Math.random() * 10) + 'px';
        runnerParticles.appendChild(spark);
        setTimeout(() => spark.remove(), 400);
      }
    }, 60);
  }

  // Dev console simulation – realistic developer workflow
  const consoleBody = document.getElementById('consoleBody');
  const loaderFill = document.getElementById('loaderFill');
  const consoleLines = [
    { text: '$ whoami', cls: 'console-line-cmd' },
    { text: 'jomin@dev-station', cls: 'console-line-output' },
    { text: '$ cd ~/portfolio && git status', cls: 'console-line-cmd' },
    { text: 'On branch main — working tree clean', cls: 'console-line-success' },
    { text: '$ node -v && java --version', cls: 'console-line-cmd' },
    { text: 'v20.11.0 | openjdk 17.0.9', cls: 'console-line-output' },
    { text: '$ npm install — 847 packages', cls: 'console-line-cmd' },
    { text: '✓ dependencies resolved in 3.2s', cls: 'console-line-success' },
    { text: '$ mvn clean compile -q', cls: 'console-line-cmd' },
    { text: '[INFO] BUILD SUCCESS — 42 sources compiled', cls: 'console-line-info' },
    { text: '$ docker-compose up -d', cls: 'console-line-cmd' },
    { text: '✓ api-server     ● Running :8080', cls: 'console-line-success' },
    { text: '✓ react-frontend ● Running :3000', cls: 'console-line-success' },
    { text: '✓ oracle-db      ● Running :1521', cls: 'console-line-success' },
    { text: '$ curl -s localhost:8080/health', cls: 'console-line-cmd' },
    { text: '{ "status": "UP", "uptime": "0d 0h 2m" }', cls: 'console-line-info' },
    { text: '$ npm run build', cls: 'console-line-cmd' },
    { text: '✓ Compiled successfully — 0 errors', cls: 'console-line-success' },
    { text: '$ deploying to production...', cls: 'console-line-warn' },
    { text: '★ Portfolio is LIVE! ✦', cls: 'console-line-success' },
  ];

  let lineIdx = 0;
  function addConsoleLine() {
    if (lineIdx >= consoleLines.length) return;
    const p = document.createElement('p');
    p.textContent = consoleLines[lineIdx].text;
    p.classList.add(consoleLines[lineIdx].cls);
    consoleBody.appendChild(p);
    consoleBody.scrollTop = consoleBody.scrollHeight;

    // Update progress bar
    const progress = ((lineIdx + 1) / consoleLines.length) * 100;
    loaderFill.style.width = progress + '%';

    lineIdx++;
    const delay = consoleLines[lineIdx - 1].cls === 'console-line-cmd' ? 200 + Math.random() * 150 : 100 + Math.random() * 80;
    setTimeout(addConsoleLine, delay);
  }
  addConsoleLine();

  // Hide loader after 3.5s
  setTimeout(() => {
    clearInterval(matrixInterval);
    if (particleInterval) clearInterval(particleInterval);
    loader.classList.add('hidden');
    initAll();
  }, 3500);

  function initAll() {
    initThreeJS();
    initCursor();
    initFloatingCode();
    initGSAP();
    initTypewriter();
    initTilt();
    initCountUp();
    initHamburger();
    initSmoothScroll();
    initContactForm();
    initActiveNav();
    initPipeline();
    initAPIMonitor();
    initDockerPulse();
    initServerMetrics();
    initGitFeed();
    initDBQueries();
    initScrollProgress();
    initClickSparks();
    initTextScramble();
    initBackToTop();
    initSmartNavbar();
    initMagneticButtons();
    initScreenGlitch();
    initShootingStars();
    initFilmGrain();
    initCardFlip();
    initKonamiCode();
    initCursorTrail();
    initSectionCurtain();
    initParallaxTilt();
    initAchievementToasts();
    initMiniTerminal();
    initTimeTheme();
    initFloatingDock();
    initParticleText();
    initHoloCard();
    initChatBot();
    initPageTransition();
    initCinematicTimeline();
    initHexGrid();
    initPlayground();
    initVoiceNav();
  }

  // ===================== THREE.JS PARTICLE NETWORK =====================
  function initThreeJS() {
    const canvas = document.getElementById('bg-canvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particleCount = 250;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const t = Math.random();
      colors[i * 3]     = t * 0.69;
      colors[i * 3 + 1] = (1 - t) * 0.94 + t * 0.31;
      colors[i * 3 + 2] = (1 - t) * 1.0 + t * 1.0;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 8;

    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function animate() {
      requestAnimationFrame(animate);
      points.rotation.x += 0.0003;
      points.rotation.y += 0.0005;
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  // ===================== FLOATING CODE SNIPPETS =====================
  function initFloatingCode() {
    const container = document.getElementById('floating-code');
    const snippets = [
      '@RestController\n@RequestMapping("/api")\npublic class PaymentAPI {',
      'const [state, dispatch] =\n  useReducer(reducer, init);',
      'SELECT * FROM payments\nWHERE status = \'ACTIVE\'\nORDER BY created_at DESC;',
      'docker build -t suntec-api .\ndocker-compose up -d',
      'mvn clean install\n-DskipTests=false',
      '@Autowired\nPaymentService service;',
      'git push origin main\ngit tag v2.1.0',
      'FROM jboss/wildfly:latest\nEXPOSE 8080 9990',
      'useEffect(() => {\n  fetchData();\n}, []);',
      'CREATE TABLE transactions (\n  id NUMBER PRIMARY KEY,\n  amount DECIMAL(10,2)\n);',
      'pipeline {\n  agent any\n  stages {\n    stage("Build") {',
      'axios.post("/api/v1/pay",\n  { amount, currency });',
      '@SpringBootApplication\npublic class SuntecApp {\n  public static void main(',
      'const router =\n  createBrowserRouter([\n  { path: "/", element:',
      'server.port=8080\nspring.datasource.url=\n  jdbc:oracle:thin:@//localhost',
    ];

    function spawnSnippet() {
      const el = document.createElement('div');
      el.className = 'floating-snippet';
      el.textContent = snippets[Math.floor(Math.random() * snippets.length)];
      el.style.left = Math.random() * 90 + '%';
      el.style.animationDuration = (20 + Math.random() * 20) + 's';
      el.style.fontSize = (.5 + Math.random() * .3) + 'rem';
      el.style.opacity = 0;
      container.appendChild(el);

      setTimeout(() => el.remove(), 45000);
    }

    // Spawn initial batch
    for (let i = 0; i < 6; i++) {
      setTimeout(spawnSnippet, i * 1500);
    }

    // Keep spawning
    setInterval(spawnSnippet, 4000);
  }

  // ===================== CUSTOM CURSOR =====================
  function initCursor() {
    // Skip on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const cursor = document.getElementById('cursor');
    const trail = document.getElementById('cursor-trail');

    if (!cursor || !trail) return;

    let cx = 0, cy = 0, tx = 0, ty = 0;

    document.addEventListener('mousemove', (e) => {
      tx = e.clientX; ty = e.clientY;
    });

    function updateCursor() {
      cx += (tx - cx) * 0.15;
      cy += (ty - cy) * 0.15;

      cursor.style.transform = `translate(${tx - 6}px, ${ty - 6}px)`;
      trail.style.transform = `translate(${cx - 18}px, ${cy - 18}px)`;

      requestAnimationFrame(updateCursor);
    }
    updateCursor();

    const glow = document.getElementById('mouse-glow');
    document.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });

    const hoverElements = document.querySelectorAll('a, button, .btn, .project-card, .stat-card, .social-link, .tech-chip, .container-box, .edu-card, .skill-cat-card');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }

  // ===================== GSAP SCROLL ANIMATIONS =====================
  function initGSAP() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    const heroTL = gsap.timeline({ delay: 3.2 });
    heroTL.from('.hero-greeting', { opacity: 0, x: -50, duration: 0.8, ease: 'power3.out' })
      .from('.name-line', { opacity: 0, y: 40, duration: 0.7, stagger: 0.2, ease: 'power3.out' }, '-=0.3')
      .from('.hero-role', { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' }, '-=0.2')
      .from('.hero-terminal', { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' }, '-=0.2')
      .from('.hero-buttons', { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' }, '-=0.1')
      .from('.hero-tag', { opacity: 0, duration: 0.4, stagger: 0.1 }, '-=0.3')
      .from('.hud-element', { opacity: 0, scale: 0.8, duration: 0.5, stagger: 0.2 }, '-=0.3')
      .from('.scroll-indicator', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2');

    // Section animations
    gsap.utils.toArray('[data-animate]').forEach(el => {
      const anim = el.dataset.animate;
      let props = { opacity: 0, duration: 0.8, ease: 'power3.out' };

      if (anim === 'fade-up')    props.y = 50;
      if (anim === 'fade-right') props.x = -50;
      if (anim === 'fade-left')  props.x = 50;
      if (anim === 'fade-down')  props.y = -50;

      gsap.from(el, {
        ...props,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      });
    });

    // Project cards stagger
    gsap.from('.project-card', {
      opacity: 0, y: 60, duration: 0.7, stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.projects-grid', start: 'top 80%' }
    });

    // Parallax on sections
    gsap.utils.toArray('.section').forEach(section => {
      gsap.to(section, {
        backgroundPositionY: '30%',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });

    // Navbar background on scroll
    ScrollTrigger.create({
      start: 100,
      onUpdate: (self) => {
        const navbar = document.getElementById('navbar');
        if (self.direction === 1 && window.scrollY > 100) {
          navbar.style.background = 'rgba(5,5,16,0.95)';
          navbar.style.borderBottom = '1px solid rgba(0,240,255,0.15)';
        } else if (window.scrollY <= 100) {
          navbar.style.background = 'rgba(5,5,16,0.8)';
          navbar.style.borderBottom = '1px solid rgba(0,240,255,0.1)';
        }
      }
    });
  }

  // ===================== TYPEWRITER =====================
  function initTypewriter() {
    const el = document.querySelector('.typewriter');
    const titles = [
      'mvn clean install -DskipTests',
      'docker-compose up -d --build',
      'git push origin feature/payment-api',
      'npm start  // React dev server',
      'curl -X POST /api/v1/payments',
      'SELECT * FROM transactions WHERE status=\'ACTIVE\'',
      'java -jar suntec-api-1.0.jar',
      'kubectl get pods --namespace=prod',
      'jenkins build #142 — SUCCESS ✓',
      'echo "Full Stack Software Engineer"',
    ];
    let titleIdx = 0, charIdx = 0, deleting = false;

    function type() {
      const current = titles[titleIdx];
      if (!deleting) {
        el.textContent = current.substring(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          setTimeout(type, 2200);
          return;
        }
      } else {
        el.textContent = current.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          titleIdx = (titleIdx + 1) % titles.length;
        }
      }
      setTimeout(type, deleting ? 25 : 55);
    }
    type();
  }

  // ===================== VANILLA TILT =====================
  function initTilt() {
    // Disable tilt on touch devices — causes janky behaviour
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const tiltElements = document.querySelectorAll('[data-tilt]');
    if (typeof VanillaTilt !== 'undefined') {
      VanillaTilt.init(tiltElements, {
        max: 6,
        speed: 400,
        glare: true,
        'max-glare': 0.08,
        perspective: 1000,
      });
    }
  }

  // ===================== COUNT UP =====================
  function initCountUp() {
    const counters = document.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          let current = 0;
          const increment = target / 40;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              el.textContent = target + '+';
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(current);
            }
          }, 40);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  }

  // ===================== HAMBURGER =====================
  function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }

  // ===================== SMOOTH SCROLL =====================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ===================== CONTACT FORM – EmailJS =====================
  function initContactForm() {
    // ★ REPLACE THESE WITH YOUR OWN EmailJS IDs ★
    const EMAILJS_PUBLIC_KEY = 'pflFe-HRrK0agTpY0';   // EmailJS → Account → Public Key
    const EMAILJS_SERVICE_ID = 'service_91rc20r';    // EmailJS → Email Services → Service ID
    const EMAILJS_TEMPLATE_ID = 'template_8lebzka'; // EmailJS → Email Templates → Template ID

    emailjs.init(EMAILJS_PUBLIC_KEY);

    const form = document.getElementById('contactForm');
    const btn = document.getElementById('submitBtn');
    const status = document.getElementById('formStatus');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Prevent double-submit
      btn.disabled = true;
      btn.innerHTML = '<span><i class="fa-solid fa-spinner fa-spin"></i> TRANSMITTING...</span>';
      btn.style.borderColor = 'var(--neon-cyan)';
      btn.style.color = 'var(--neon-cyan)';
      status.textContent = '';
      status.className = 'form-status';

      emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
        .then(() => {
          btn.innerHTML = '<span>TRANSMITTED ✓</span>';
          btn.style.borderColor = '#39ff14';
          btn.style.color = '#39ff14';
          status.textContent = '✓ Message sent successfully!';
          status.className = 'form-status form-status-success';
          form.reset();

          setTimeout(() => {
            btn.innerHTML = '<span>TRANSMIT MESSAGE</span><div class="btn-glitch"></div>';
            btn.style.borderColor = '';
            btn.style.color = '';
            btn.disabled = false;
          }, 3000);
        })
        .catch((err) => {
          console.error('EmailJS error:', err);
          btn.innerHTML = '<span>FAILED ✗</span>';
          btn.style.borderColor = 'var(--neon-pink)';
          btn.style.color = 'var(--neon-pink)';
          status.textContent = '✗ Transmission failed — please email me directly.';
          status.className = 'form-status form-status-error';

          setTimeout(() => {
            btn.innerHTML = '<span>TRANSMIT MESSAGE</span><div class="btn-glitch"></div>';
            btn.style.borderColor = '';
            btn.style.color = '';
            btn.disabled = false;
          }, 3000);
        });
    });
  }

  // ===================== ACTIVE NAV =====================
  function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY + 200;
      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (link) {
          if (scrollY >= top && scrollY < top + height) {
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
          }
        }
      });
    });
  }

  // ===================== CI/CD PIPELINE ANIMATION =====================
  function initPipeline() {
    const stages = document.querySelectorAll('.pipeline-stage');
    if (!stages.length) return;

    let currentStage = 0;

    function activateStage() {
      if (currentStage < stages.length) {
        stages[currentStage].classList.add('active');
        currentStage++;
        setTimeout(activateStage, 800);
      } else {
        // Reset after a pause and run again
        setTimeout(() => {
          stages.forEach(s => s.classList.remove('active'));
          currentStage = 0;
          setTimeout(activateStage, 500);
        }, 3000);
      }
    }

    // Start pipeline when scrolled into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activateStage();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const wrapper = document.querySelector('.pipeline-wrapper');
    if (wrapper) observer.observe(wrapper);
  }

  // ===================== LIVE API MONITOR =====================
  function initAPIMonitor() {
    const apiLog = document.getElementById('apiLog');
    if (!apiLog) return;

    const endpoints = [
      { method: 'POST', url: '/api/v1/payments/process', status: '201 Created', time: '45ms' },
      { method: 'GET',  url: '/api/v1/payments?status=ACTIVE', status: '200 OK', time: '12ms' },
      { method: 'GET',  url: '/api/v1/products/list', status: '200 OK', time: '23ms' },
      { method: 'PUT',  url: '/api/v1/payments/settle/TXN-4892', status: '200 OK', time: '67ms' },
      { method: 'POST', url: '/api/v1/reports/generate', status: '201 Created', time: '134ms' },
      { method: 'GET',  url: '/api/v1/users/profile', status: '200 OK', time: '8ms' },
      { method: 'DELETE', url: '/api/v1/payments/draft/D-201', status: '204 No Content', time: '31ms' },
      { method: 'POST', url: '/api/v1/auth/refresh-token', status: '200 OK', time: '15ms' },
      { method: 'GET',  url: '/api/v1/transactions?page=1&size=20', status: '200 OK', time: '56ms' },
      { method: 'PUT',  url: '/api/v1/products/config/update', status: '200 OK', time: '42ms' },
      { method: 'POST', url: '/api/v1/payments/validate', status: '200 OK', time: '28ms' },
      { method: 'GET',  url: '/api/v1/reports/download/RPT-7721', status: '200 OK', time: '89ms' },
      { method: 'POST', url: '/api/v1/notifications/send', status: '202 Accepted', time: '19ms' },
      { method: 'GET',  url: '/api/v1/health', status: '200 OK', time: '2ms' },
      { method: 'PUT',  url: '/api/v1/users/preferences', status: '200 OK', time: '35ms' },
    ];

    let logIdx = 0;

    function addLogEntry() {
      const ep = endpoints[logIdx % endpoints.length];
      const entry = document.createElement('div');
      entry.className = 'api-entry';

      const now = new Date();
      const timestamp = now.toTimeString().split(' ')[0];

      entry.innerHTML = `
        <span class="api-time">${timestamp}</span>
        <span class="api-method ${ep.method.toLowerCase()}">${ep.method}</span>
        <span class="api-url">${ep.url}</span>
        <span class="api-status">${ep.status}</span>
        <span class="api-time">${ep.time}</span>
      `;

      apiLog.insertBefore(entry, apiLog.firstChild);

      // Keep max 8 entries
      while (apiLog.children.length > 8) {
        apiLog.removeChild(apiLog.lastChild);
      }

      logIdx++;
    }

    // Start when visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          addLogEntry();
          setInterval(addLogEntry, 2500);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const monitor = document.querySelector('.api-monitor');
    if (monitor) observer.observe(monitor);
  }

  // ===================== DOCKER CONTAINER PULSE =====================
  function initDockerPulse() {
    const containers = document.querySelectorAll('.container-box');
    if (!containers.length) return;

    setInterval(() => {
      const randomIdx = Math.floor(Math.random() * containers.length);
      const box = containers[randomIdx];
      const statusEl = box.querySelector('.c-status');
      if (!statusEl) return;

      const original = statusEl.textContent;
      statusEl.style.color = '#ffbd2e';
      statusEl.textContent = '● Syncing...';

      setTimeout(() => {
        statusEl.style.color = '';
        statusEl.textContent = original;
      }, 600);
    }, 5000);
  }

  // ===================== SERVER METRICS DASHBOARD =====================
  function initServerMetrics() {
    const cpuBar = document.getElementById('cpuBar');
    const ramBar = document.getElementById('ramBar');
    const diskBar = document.getElementById('diskBar');
    const netBar = document.getElementById('netBar');
    const cpuVal = document.getElementById('cpuVal');
    const ramVal = document.getElementById('ramVal');
    const diskVal = document.getElementById('diskVal');
    const netVal = document.getElementById('netVal');
    const uptimeVal = document.getElementById('uptimeVal');

    if (!cpuBar) return;

    // Simulated metrics that fluctuate realistically
    let cpu = 35, ram = 62, disk = 45, net = 20;
    let uptimeMins = 4320; // 3 days in minutes

    function updateMetrics() {
      cpu = Math.max(8, Math.min(95, cpu + (Math.random() - 0.48) * 12));
      ram = Math.max(40, Math.min(88, ram + (Math.random() - 0.5) * 5));
      disk = Math.max(30, Math.min(75, disk + (Math.random() - 0.5) * 2));
      net = Math.max(5, Math.min(90, net + (Math.random() - 0.45) * 18));

      cpuBar.style.width = cpu + '%';
      ramBar.style.width = ram + '%';
      diskBar.style.width = disk + '%';
      netBar.style.width = net + '%';

      cpuVal.textContent = Math.round(cpu) + '%';
      ramVal.textContent = Math.round(ram) + '%';
      diskVal.textContent = Math.round(disk) + '%';
      netVal.textContent = Math.round(net) + '%';

      uptimeMins++;
      const d = Math.floor(uptimeMins / 1440);
      const h = Math.floor((uptimeMins % 1440) / 60);
      const m = uptimeMins % 60;
      uptimeVal.textContent = d + 'd ' + h + 'h ' + m + 'm';
    }

    // Start when visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateMetrics();
          setInterval(updateMetrics, 1800);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const dash = document.querySelector('.server-dashboard');
    if (dash) observer.observe(dash);
  }

  // ===================== GIT COMMIT FEED =====================
  function initGitFeed() {
    const gitLog = document.getElementById('gitLog');
    if (!gitLog) return;

    const commits = [
      { msg: 'feat(payment): add multi-currency support', branch: 'feature/payment-api' },
      { msg: 'fix(ui): resolve Redux state race condition', branch: 'bugfix/redux-state' },
      { msg: 'refactor: migrate PaymentAction to Spring Controller', branch: 'migration/spring' },
      { msg: 'chore(docker): update JBoss base image to 7.4', branch: 'devops/docker' },
      { msg: 'feat(reports): add Jasper PDF export endpoint', branch: 'feature/jasper' },
      { msg: 'fix(db): optimize Oracle query for transactions', branch: 'bugfix/db-perf' },
      { msg: 'test: add JUnit tests for PaymentService', branch: 'test/payment' },
      { msg: 'ci(jenkins): add SonarQube quality gate', branch: 'devops/jenkins' },
      { msg: 'feat(ui): implement product config React component', branch: 'feature/product-ui' },
      { msg: 'docs: update API Swagger documentation', branch: 'docs/swagger' },
      { msg: 'refactor: extract common DTO validation logic', branch: 'refactor/dto' },
      { msg: 'fix(deploy): correct WildFly datasource config', branch: 'bugfix/wildfly' },
      { msg: 'feat(auth): add JWT refresh token rotation', branch: 'feature/auth' },
      { msg: 'perf: add Redis cache for product catalog', branch: 'perf/caching' },
    ];

    let commitIdx = 0;

    function randomHash() {
      return Math.random().toString(16).substring(2, 9);
    }

    function randomTime() {
      const mins = Math.floor(Math.random() * 55) + 1;
      return mins + 'm ago';
    }

    function addCommit() {
      const c = commits[commitIdx % commits.length];
      const entry = document.createElement('div');
      entry.className = 'git-entry';
      entry.innerHTML = `
        <span class="git-hash">${randomHash()}</span>
        <span class="git-msg">${c.msg}</span>
        <span class="git-time">${randomTime()}</span>
      `;

      gitLog.insertBefore(entry, gitLog.firstChild);
      while (gitLog.children.length > 6) {
        gitLog.removeChild(gitLog.lastChild);
      }
      commitIdx++;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          addCommit();
          addCommit();
          addCommit();
          setInterval(addCommit, 4000);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const feed = document.querySelector('.git-feed');
    if (feed) observer.observe(feed);
  }

  // ===================== LIVE DATABASE QUERIES =====================
  function initDBQueries() {
    const dbLog = document.getElementById('dbLog');
    if (!dbLog) return;

    const queries = [
      { sql: 'SELECT * FROM payments WHERE status=\'ACTIVE\'', rows: '247 rows', time: '12ms' },
      { sql: 'INSERT INTO transactions (amount, currency) VALUES (1500, \'USD\')', rows: '1 row', time: '3ms' },
      { sql: 'UPDATE products SET config=:1 WHERE id=:2', rows: '1 row', time: '5ms' },
      { sql: 'SELECT p.*, t.amount FROM payments p JOIN transactions t ON p.id=t.pay_id', rows: '89 rows', time: '34ms' },
      { sql: 'DELETE FROM draft_payments WHERE created < SYSDATE-30', rows: '15 rows', time: '8ms' },
      { sql: 'SELECT COUNT(*) FROM users WHERE role=\'ADMIN\'', rows: '1 row', time: '2ms' },
      { sql: 'ALTER INDEX idx_payments_status REBUILD', rows: '0 rows', time: '156ms' },
      { sql: 'SELECT report_data FROM jasper_cache WHERE id=:1', rows: '1 row', time: '6ms' },
      { sql: 'EXPLAIN PLAN FOR SELECT * FROM transactions WHERE amount > 10000', rows: '3 rows', time: '1ms' },
      { sql: 'MERGE INTO settlement_batch USING dual ON (id=:1)', rows: '1 row', time: '9ms' },
    ];

    let qIdx = 0;

    function addQuery() {
      const q = queries[qIdx % queries.length];
      const entry = document.createElement('div');
      entry.className = 'db-entry';
      entry.innerHTML = `
        <span class="db-query">${q.sql}</span>
        <span class="db-rows">${q.rows}</span>
        <span class="db-time-val">${q.time}</span>
      `;

      dbLog.insertBefore(entry, dbLog.firstChild);
      while (dbLog.children.length > 6) {
        dbLog.removeChild(dbLog.lastChild);
      }
      qIdx++;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          addQuery();
          addQuery();
          setInterval(addQuery, 3500);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const widget = document.querySelector('.db-query-widget');
    if (widget) observer.observe(widget);
  }

  // ===================== SCROLL PROGRESS BAR =====================
  function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      bar.style.width = progress + '%';
    }, { passive: true });
  }

  // ===================== CLICK SPARK EFFECT =====================
  function initClickSparks() {
    const container = document.getElementById('clickSparks');
    if (!container) return;

    const colors = ['#00f0ff', '#b14eff', '#ff2d75', '#39ff14', '#ff6a00', '#ffffff'];

    document.addEventListener('click', (e) => {
      const count = 8 + Math.floor(Math.random() * 8);
      for (let i = 0; i < count; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        const angle = (Math.PI * 2 / count) * i + (Math.random() * 0.5);
        const distance = 30 + Math.random() * 60;
        const sx = Math.cos(angle) * distance;
        const sy = Math.sin(angle) * distance;
        spark.style.cssText = `
          left: ${e.clientX}px;
          top: ${e.clientY}px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          --sx: ${sx}px;
          --sy: ${sy}px;
          width: ${2 + Math.random() * 4}px;
          height: ${2 + Math.random() * 4}px;
          box-shadow: 0 0 6px currentColor;
        `;
        container.appendChild(spark);
        setTimeout(() => spark.remove(), 600);
      }
    });
  }

  // ===================== TEXT SCRAMBLE ON SECTION TITLES =====================
  function initTextScramble() {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:<>?/~`01';
    const titles = document.querySelectorAll('.section-title');

    titles.forEach(title => {
      const originalHTML = title.innerHTML;
      const textContent = title.textContent;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            scrambleText(title, textContent, originalHTML);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      observer.observe(title);
    });

    function scrambleText(el, text, finalHTML) {
      let iteration = 0;
      const totalIterations = text.length * 2;

      const interval = setInterval(() => {
        let result = '';
        for (let i = 0; i < text.length; i++) {
          if (text[i] === ' ') {
            result += ' ';
          } else if (i < iteration / 2) {
            result += text[i];
          } else {
            result += `<span class="scramble-char decoding">${glitchChars[Math.floor(Math.random() * glitchChars.length)]}</span>`;
          }
        }
        el.innerHTML = result;
        iteration++;

        if (iteration > totalIterations) {
          clearInterval(interval);
          el.innerHTML = finalHTML;
        }
      }, 30);
    }
  }

  // ===================== BACK TO TOP ROCKET =====================
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      // Add launch effect
      btn.style.transform = 'translateY(-20px) scale(0.9)';
      btn.style.boxShadow = '0 0 40px rgba(0,240,255,0.6), 0 5px 30px rgba(255,106,0,0.5)';

      window.scrollTo({ top: 0, behavior: 'smooth' });

      setTimeout(() => {
        btn.style.transform = '';
        btn.style.boxShadow = '';
      }, 600);
    });
  }

  // ===================== SMART NAVBAR (hide on scroll down, show on scroll up) =====================
  function initSmartNavbar() {
    const nav = document.getElementById('navbar');
    if (!nav) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > lastScrollY && currentScrollY > 120) {
            // Scrolling down & past navbar
            nav.classList.add('nav-hidden');
          } else {
            // Scrolling up
            nav.classList.remove('nav-hidden');
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ===================== MAGNETIC BUTTONS =====================
  function initMagneticButtons() {
    // Disable magnetic effect on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const magneticEls = document.querySelectorAll('.btn, .social-link');

    magneticEls.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)';
      });
    });
  }

  // ===================== SCREEN GLITCH EFFECT =====================
  function initScreenGlitch() {
    const glitch = document.getElementById('screenGlitch');
    if (!glitch) return;

    function triggerGlitch() {
      glitch.classList.add('active');
      setTimeout(() => {
        glitch.classList.remove('active');
      }, 350);
    }

    // Random glitch every 12-25 seconds
    function scheduleGlitch() {
      const delay = 12000 + Math.random() * 13000;
      setTimeout(() => {
        triggerGlitch();
        scheduleGlitch();
      }, delay);
    }

    scheduleGlitch();
  }

  // ===================== SHOOTING STARS =====================
  function initShootingStars() {
    const container = document.getElementById('shootingStars');
    if (!container) return;

    function spawnStar() {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      star.style.top = Math.random() * 50 + '%';
      star.style.left = Math.random() * 60 + '%';
      star.style.width = (80 + Math.random() * 80) + 'px';
      container.appendChild(star);

      setTimeout(() => star.remove(), 1500);
    }

    // Spawn a shooting star every 4-9 seconds
    function scheduleStars() {
      const delay = 4000 + Math.random() * 5000;
      setTimeout(() => {
        spawnStar();
        scheduleStars();
      }, delay);
    }

    scheduleStars();
  }

  // ===================== FILM GRAIN OVERLAY =====================
  function initFilmGrain() {
    // Film grain is pure CSS — just ensure it's visible
    const grain = document.getElementById('filmGrain');
    if (grain) grain.style.display = 'block';
  }

  // ===================== PROJECT CARD FLIP =====================
  function initCardFlip() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        // Don't flip if clicking a link
        if (e.target.closest('a')) return;
        card.classList.toggle('flipped');
      });
    });
  }

  // ===================== KONAMI CODE EASTER EGG =====================
  function initKonamiCode() {
    const sequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let position = 0;
    const overlay = document.getElementById('konamiOverlay');
    const canvas = document.getElementById('konamiCanvas');
    if (!overlay || !canvas) return;

    const ctx = canvas.getContext('2d');
    let animFrame;

    document.addEventListener('keydown', (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === sequence[position]) {
        position++;
        if (position === sequence.length) {
          activateKonami();
          position = 0;
        }
      } else {
        position = 0;
      }
    });

    function activateKonami() {
      overlay.classList.add('active');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Matrix rain
      const columns = Math.floor(canvas.width / 16);
      const drops = Array(columns).fill(1);
      const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF';

      function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#39ff14';
        ctx.font = '14px monospace';

        for (let i = 0; i < drops.length; i++) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(char, i * 16, drops[i] * 16);

          if (drops[i] * 16 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }

        animFrame = requestAnimationFrame(drawMatrix);
      }

      drawMatrix();

      // Auto-close after 5 seconds
      setTimeout(() => {
        overlay.classList.remove('active');
        cancelAnimationFrame(animFrame);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 5000);
    }
  }

  // ===================== CURSOR TRAIL PARTICLES =====================
  function initCursorTrail() {
    // Skip on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const canvas = document.getElementById('cursorTrail');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    const particles = [];
    let mouseX = -100, mouseY = -100;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Spawn particles on move
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: mouseX + (Math.random() - 0.5) * 8,
          y: mouseY + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          life: 1,
          decay: 0.015 + Math.random() * 0.015,
          size: 1.5 + Math.random() * 2.5,
          hue: 180 + Math.random() * 40, // cyan range
        });
      }
    });

    function animateTrail() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${p.life * 0.6})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 60%, 0.4)`;
        ctx.fill();
      }

      // Cap particles
      if (particles.length > 120) particles.splice(0, particles.length - 120);

      requestAnimationFrame(animateTrail);
    }

    animateTrail();
  }

  // ===================== SECTION REVEAL CURTAIN =====================
  function initSectionCurtain() {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('curtain-open');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    sections.forEach(s => observer.observe(s));
  }

  // ===================== PARALLAX TILT ON SCROLL =====================
  function initParallaxTilt() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const layers = [
      { sel: '.hero-greeting', speed: 0.3 },
      { sel: '.hero-name',     speed: 0.15 },
      { sel: '.hero-role',     speed: 0.25 },
      { sel: '.hero-terminal', speed: 0.1 },
      { sel: '.hero-buttons',  speed: 0.2 },
      { sel: '.hud-element',   speed: 0.35 },
    ];

    const elements = [];
    layers.forEach(l => {
      hero.querySelectorAll(l.sel).forEach(el => {
        elements.push({ el, speed: l.speed, originalTransform: el.style.transform || '' });
      });
    });

    if (!elements.length) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const heroHeight = hero.offsetHeight;

        if (scrollY < heroHeight) {
          elements.forEach(({ el, speed }) => {
            const offset = scrollY * speed;
            el.style.transform = `translateY(${offset}px)`;
          });
        }
        ticking = false;
      });
    }, { passive: true });
  }

  // ===================== ACHIEVEMENT TOAST NOTIFICATIONS =====================
  function initAchievementToasts() {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const achievements = [
      { trigger: '#hero',       icon: 'fa-solid fa-flag',          msg: 'Welcome to the Matrix!', once: true },
      { trigger: '#about',      icon: 'fa-solid fa-user-check',    msg: 'Discovered About Section', once: true },
      { trigger: '#experience', icon: 'fa-solid fa-briefcase',     msg: 'Work Experience Unlocked', once: true },
      { trigger: '#skills',     icon: 'fa-solid fa-wand-magic-sparkles', msg: 'Tech Stack Revealed!', once: true },
      { trigger: '#projects',   icon: 'fa-solid fa-trophy',        msg: 'Achievement: Project Explorer', once: true },
      { trigger: '#contact',    icon: 'fa-solid fa-handshake',     msg: 'Final Boss: Contact Form', once: true },
    ];

    // Scroll percentage milestones
    let scrollMilestones = { 25: false, 50: false, 75: false, 100: false };

    window.addEventListener('scroll', () => {
      const pct = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      [25, 50, 75, 100].forEach(m => {
        if (pct >= m && !scrollMilestones[m]) {
          scrollMilestones[m] = true;
          showToast('fa-solid fa-chart-line', `Scrolled ${m}% of the page!`);
        }
      });
    }, { passive: true });

    achievements.forEach(a => {
      const el = document.querySelector(a.trigger);
      if (!el) return;

      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            showToast(a.icon, a.msg);
            if (a.once) obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      obs.observe(el);
    });

    function showToast(icon, msg) {
      const toast = document.createElement('div');
      toast.className = 'achievement-toast';
      toast.innerHTML = `
        <div class="toast-icon"><i class="${icon}"></i></div>
        <div class="toast-content">
          <span class="toast-label">Achievement</span>
          <span class="toast-msg">${msg}</span>
        </div>
      `;
      container.appendChild(toast);
      setTimeout(() => toast.remove(), 4200);
    }
  }

  // ===================== INTERACTIVE MINI TERMINAL =====================
  function initMiniTerminal() {
    const terminal = document.getElementById('miniTerminal');
    const input = document.getElementById('miniTermInput');
    const output = document.getElementById('miniTermOutput');
    const toggle = document.getElementById('miniTermToggle');
    if (!terminal || !input) return;

    // Start collapsed
    terminal.classList.add('collapsed');

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      terminal.classList.toggle('collapsed');
      if (!terminal.classList.contains('collapsed')) {
        setTimeout(() => input.focus(), 300);
      }
    });

    const commands = {
      help: () => `<span class="term-result">Available commands:<br>&nbsp;&nbsp;about &nbsp;- Who is Jomin?<br>&nbsp;&nbsp;skills - Tech stack<br>&nbsp;&nbsp;contact - Get in touch<br>&nbsp;&nbsp;projects - My work<br>&nbsp;&nbsp;joke &nbsp; - Dev humor<br>&nbsp;&nbsp;goto &lt;section&gt; - Jump to section<br>&nbsp;&nbsp;time &nbsp; - Current time<br>&nbsp;&nbsp;clear &nbsp;- Clear terminal</span>`,
      about: () => `<span class="term-result">Jomin K Mathew — Full Stack Software Engineer @ SunTec Business Solutions. 3+ years in Java, Spring Boot, React.js, Docker & CI/CD.</span>`,
      skills: () => `<span class="term-result">Java ██████████ 90%<br>React ████████░░ 85%<br>REST API █████████░ 88%<br>Docker ████████░░ 78%<br>Oracle ████████░░ 80%</span>`,
      contact: () => `<span class="term-result">📧 jominmathewk@gmail.com<br>📱 +91 7558805897<br>🔗 github.com/jominkmathew<br>📍 Trivandrum, Kerala</span>`,
      projects: () => `<span class="term-result">1. Payment API Development<br>2. React UI Components<br>3. Struts → Spring Migration<br>4. Jasper Reports Integration<br>5. Full Product Migration</span>`,
      joke: () => {
        const jokes = [
          '"Why do programmers prefer dark mode? Because light attracts bugs."',
          '"git commit -m \\"fixed bug\\" — narrator: he did not fix the bug."',
          '"There are 10 types of people: those who understand binary and those who don\'t."',
          '"// This code works. I don\'t know why."',
          '"It works on my machine! — Every developer ever"',
          '"A SQL query walks into a bar, sees two tables, and asks: Can I JOIN you?"',
          '"Why was the JavaScript developer sad? Because he didn\'t Node how to Express himself."',
        ];
        return `<span class="term-result">${jokes[Math.floor(Math.random() * jokes.length)]}</span>`;
      },
      time: () => `<span class="term-result">${new Date().toLocaleString()}</span>`,
      clear: () => '__CLEAR__',
      goto: (args) => {
        const section = args[0];
        const valid = ['hero','about','experience','skills','projects','contact'];
        if (valid.includes(section)) {
          document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
          return `<span class="term-result">Navigating to #${section}...</span>`;
        }
        return `<span class="term-error">Unknown section. Try: ${valid.join(', ')}</span>`;
      },
    };

    input.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;
      const raw = input.value.trim();
      if (!raw) return;

      // Echo command
      addLine(`<span class="term-cmd">$ ${raw}</span>`);

      const parts = raw.toLowerCase().split(/\s+/);
      const cmd = parts[0];
      const args = parts.slice(1);

      const handler = commands[cmd];
      if (handler) {
        const result = typeof handler === 'function' ? handler(args) : handler;
        if (result === '__CLEAR__') {
          output.innerHTML = '<div class="term-line"><span class="term-system">Terminal cleared.</span></div>';
        } else {
          addLine(result);
        }
      } else {
        addLine(`<span class="term-error">Command not found: ${cmd}. Type 'help' for commands.</span>`);
      }

      input.value = '';
    });

    function addLine(html) {
      const line = document.createElement('div');
      line.className = 'term-line';
      line.innerHTML = html;
      output.appendChild(line);
      output.scrollTop = output.scrollHeight;
    }

    // Make terminal draggable
    let isDragging = false, dragX, dragY;
    const header = terminal.querySelector('.mini-term-header');

    header.addEventListener('mousedown', (e) => {
      if (e.target === toggle || e.target.closest('.mini-term-toggle')) return;
      isDragging = true;
      dragX = e.clientX - terminal.offsetLeft;
      dragY = e.clientY - terminal.offsetTop;
      terminal.style.transition = 'none';
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      terminal.style.left = (e.clientX - dragX) + 'px';
      terminal.style.top = (e.clientY - dragY) + 'px';
      terminal.style.bottom = 'auto';
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      terminal.style.transition = '';
    });
  }

  // ===================== TIME-OF-DAY DYNAMIC THEME =====================
  function initTimeTheme() {
    const hour = new Date().getHours();
    const root = document.documentElement;

    // 6-11: Morning (warm orange/gold), 12-17: Day (cyan/blue), 18-21: Dusk (purple/pink), 22-5: Night (deep cyan/green)
    if (hour >= 6 && hour < 12) {
      root.style.setProperty('--neon-cyan', '#ff9f43');
      root.style.setProperty('--neon-purple', '#ee5a24');
      root.style.setProperty('--neon-green', '#ffc312');
    } else if (hour >= 18 && hour < 22) {
      root.style.setProperty('--neon-cyan', '#c56cf0');
      root.style.setProperty('--neon-purple', '#ff6b81');
      root.style.setProperty('--neon-green', '#7158e2');
    }
    // 12-17 and 22-5 keep the default cyberpunk cyan/purple/green
  }

  // ===================== FLOATING NAVIGATION DOCK =====================
  function initFloatingDock() {
    const dock = document.getElementById('floatingDock');
    if (!dock) return;

    // Show dock after scrolling past hero
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        dock.classList.add('visible');
      } else {
        dock.classList.remove('visible');
      }
    }, { passive: true });

    // Smooth scroll
    dock.querySelectorAll('.dock-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const href = item.getAttribute('href');
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Magnify neighbors on hover
    const items = dock.querySelectorAll('.dock-item');
    items.forEach((item, i) => {
      item.addEventListener('mouseenter', () => {
        items.forEach((it, j) => {
          const dist = Math.abs(i - j);
          if (dist === 0) {
            it.style.transform = 'translateY(-10px) scale(1.35)';
          } else if (dist === 1) {
            it.style.transform = 'translateY(-5px) scale(1.15)';
          } else if (dist === 2) {
            it.style.transform = 'translateY(-2px) scale(1.05)';
          } else {
            it.style.transform = '';
          }
        });
      });

      item.addEventListener('mouseleave', () => {
        items.forEach(it => { it.style.transform = ''; });
      });
    });
  }

  // ===================== PARTICLE TEXT HERO NAME =====================
  function initParticleText() {
    const canvas = document.getElementById('particleNameCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const heroName = canvas.closest('.hero-name');
    if (!heroName) return;

    function resize() {
      canvas.width = heroName.offsetWidth;
      canvas.height = heroName.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const particles = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: 1 + Math.random() * 2,
        hue: 180 + Math.random() * 60,
      });
    }

    let mouseX = -1000, mouseY = -1000;

    heroName.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    heroName.addEventListener('mouseleave', () => {
      mouseX = -1000;
      mouseY = -1000;
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        // Repel from mouse
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          const force = (80 - dist) / 80;
          p.vx += (dx / dist) * force * 2;
          p.vy += (dy / dist) * force * 2;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Friction
        p.vx *= 0.96;
        p.vy *= 0.96;

        // Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, 0.7)`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 60) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,240,255,${0.15 * (1 - dist / 60)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  // ===================== 3D HOLOGRAPHIC CARD =====================
  function initHoloCard() {
    const card = document.getElementById('holoCard');
    if (!card) return;
    const inner = card.querySelector('.holo-card-inner');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

      // Move shine with cursor
      const shine = card.querySelector('.holo-shine');
      if (shine) {
        shine.style.left = `${(x / rect.width) * 100 - 30}%`;
        shine.style.transition = 'none';
      }
    });

    card.addEventListener('mouseleave', () => {
      inner.style.transform = 'rotateX(0) rotateY(0) scale(1)';
      inner.style.transition = 'transform 0.5s ease';
      const shine = card.querySelector('.holo-shine');
      if (shine) {
        shine.style.left = '-100%';
        shine.style.transition = 'left 0.6s ease';
      }
    });

    card.addEventListener('mouseenter', () => {
      inner.style.transition = 'none';
    });
  }

  // ===================== AI CHAT BOT WIDGET =====================
  function initChatBot() {
    const toggle = document.getElementById('chatBotToggle');
    const win = document.getElementById('chatBotWindow');
    const close = document.getElementById('chatBotClose');
    const input = document.getElementById('chatBotInput');
    const send = document.getElementById('chatBotSend');
    const msgs = document.getElementById('chatBotMessages');
    const chips = document.querySelectorAll('.chatbot-chip');
    if (!toggle || !win) return;

    // Knowledge base
    const kb = {
      skills: "Jomin's core skills include <span class='accent'>Java, Spring Boot, React.js, REST APIs, Jenkins, Docker, Git, MySQL, Oracle, JBoss EAP, MVC</span>. He also works with JavaScript, HTML/CSS, and agile methodologies.",
      experience: "Jomin works as a <span class='accent'>Full Stack Software Engineer</span> at <span class='accent'>SunTec Business Solutions</span>, Trivandrum. He has <span class='accent'>3+ years</span> of experience building enterprise-grade banking & fintech applications.",
      projects: "Notable projects include: <span class='accent'>Xelerate Platform</span> (enterprise pricing & billing for banks), <span class='accent'>REST API Microservices</span> (Java/Spring Boot), and <span class='accent'>CI/CD Pipeline Automation</span> (Jenkins + Docker). Check the Projects section for more!",
      education: "Jomin holds an <span class='accent'>MCA (Master of Computer Applications)</span> from <span class='accent'>TKM College of Engineering</span>.",
      contact: "You can reach Jomin via email at <span class='accent'>jominachu001@gmail.com</span> or connect on <span class='accent'>LinkedIn</span> and <span class='accent'>GitHub</span>. Use the Contact section to send a message directly!",
      hello: "Hey there! 👋 Nice to meet you. I'm here to help you learn about Jomin. Try asking about his skills, experience, or projects!",
      hi: "Hello! 👋 Ask me anything about Jomin — his tech stack, work experience, or how to reach him.",
      who: "Jomin K Mathew is a <span class='accent'>Full Stack Software Engineer</span> specializing in Java, Spring Boot, React.js, and enterprise banking applications at SunTec Business Solutions.",
      java: "Jomin is highly proficient in <span class='accent'>Java (8+)</span>, including <span class='accent'>Spring Boot, Spring MVC, Hibernate/JPA</span>, and enterprise patterns. It's his primary backend language.",
      react: "Jomin builds responsive UIs with <span class='accent'>React.js</span>, including hooks, context API, component architecture, and integration with REST backends.",
      docker: "Jomin uses <span class='accent'>Docker</span> for containerized deployments and <span class='accent'>Jenkins</span> for CI/CD pipelines, ensuring smooth automated builds and releases.",
      resume: "You can download Jomin's resume from the hero section of this portfolio — look for the <span class='accent'>Download Resume</span> button at the top!",
      location: "Jomin is based in <span class='accent'>Trivandrum (Thiruvananthapuram), Kerala, India</span>.",
      hobby: "When not coding, Jomin enjoys exploring new technologies, contributing to open-source, and staying up-to-date with the latest in software architecture."
    };

    function findAnswer(q) {
      const lower = q.toLowerCase().trim();
      // Direct keyword matching
      for (const [key, val] of Object.entries(kb)) {
        if (lower.includes(key)) return val;
      }
      // Fuzzy matching
      if (/spring|boot|backend|back-end/.test(lower)) return kb.java;
      if (/front.?end|ui|html|css|javascript/.test(lower)) return kb.react;
      if (/work|job|company|suntec|banking/.test(lower)) return kb.experience;
      if (/learn|degree|college|study|university/.test(lower)) return kb.education;
      if (/reach|email|mail|linkedin|github|hire|connect/.test(lower)) return kb.contact;
      if (/tech|stack|tool|language|framework/.test(lower)) return kb.skills;
      if (/deploy|ci|cd|jenkins|pipeline|devops/.test(lower)) return kb.docker;
      if (/live|where|city|india|based/.test(lower)) return kb.location;
      if (/cv|pdf|download/.test(lower)) return kb.resume;
      if (/project|portfolio|build|app/.test(lower)) return kb.projects;
      if (/hey|hello|sup|yo/.test(lower)) return kb.hello;
      if (/hobby|fun|free time|interest/.test(lower)) return kb.hobby;
      if (/who|about|tell/.test(lower)) return kb.who;
      return "Hmm, I'm not sure about that. Try asking about Jomin's <span class='accent'>skills</span>, <span class='accent'>experience</span>, <span class='accent'>projects</span>, <span class='accent'>education</span>, or <span class='accent'>contact</span> info!";
    }

    function addMsg(text, isUser) {
      const div = document.createElement('div');
      div.className = `chat-msg ${isUser ? 'user' : 'bot'}`;
      div.innerHTML = `<div class="chat-bubble">${text}</div>`;
      msgs.appendChild(div);
      msgs.scrollTop = msgs.scrollHeight;
    }

    function showTyping() {
      const div = document.createElement('div');
      div.className = 'chat-msg bot typing-msg';
      div.innerHTML = '<div class="chat-bubble typing-indicator"><span></span><span></span><span></span></div>';
      msgs.appendChild(div);
      msgs.scrollTop = msgs.scrollHeight;
      return div;
    }

    function handleSend() {
      const q = input.value.trim();
      if (!q) return;
      addMsg(q, true);
      input.value = '';
      const typing = showTyping();
      const delay = 400 + Math.random() * 600;
      setTimeout(() => {
        typing.remove();
        addMsg(findAnswer(q), false);
      }, delay);
    }

    toggle.addEventListener('click', () => {
      win.classList.toggle('open');
      if (win.classList.contains('open')) {
        setTimeout(() => input.focus(), 400);
      }
    });

    close.addEventListener('click', () => win.classList.remove('open'));
    send.addEventListener('click', handleSend);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSend();
    });

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        input.value = chip.dataset.q;
        handleSend();
      });
    });
  }

  // ===================== PAGE TRANSITION SHATTER =====================
  function initPageTransition() {
    const overlay = document.getElementById('pageTransition');
    if (!overlay) return;

    const navLinks = document.querySelectorAll('a[href^=\"#\"]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        overlay.classList.add('active');

        setTimeout(() => {
          target.scrollIntoView({ behavior: 'auto' });
        }, 450);

        setTimeout(() => {
          overlay.classList.remove('active');
        }, 950);
      });
    });
  }

  // ===================== CINEMATIC EXPERIENCE TIMELINE =====================
  function initCinematicTimeline() {
    const cards = document.querySelectorAll('#experience .cinematic-card');
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const depth = parseFloat(card.dataset.depth || 0.5);
          const delay = depth * 0.4;
          const direction = depth < 0.5 ? -60 : 60;

          card.style.transition = `opacity 0.8s ease ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;
          card.style.opacity = '1';
          card.style.transform = 'translateX(0) translateY(0)';
          observer.unobserve(card);
        }
      });
    }, { threshold: 0.15 });

    cards.forEach(card => {
      const depth = parseFloat(card.dataset.depth || 0.5);
      const startX = depth < 0.5 ? -40 : 40;
      card.style.opacity = '0';
      card.style.transform = `translateX(${startX}px) translateY(20px)`;
      observer.observe(card);
    });

    // Glowing beam animation on scroll
    const beam = document.querySelector('.exp-timeline-beam');
    if (beam) {
      const section = document.getElementById('experience');
      window.addEventListener('scroll', () => {
        const rect = section.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
        beam.style.background = `linear-gradient(180deg, var(--neon-cyan), var(--neon-purple) ${progress * 100}%, transparent ${progress * 100 + 5}%)`;
        beam.style.opacity = progress > 0 ? '0.25' : '0.1';
      });
    }
  }

  // ===================== HEXAGONAL SKILL GRID =====================
  function initHexGrid() {
    const cells = document.querySelectorAll('.hex-cell');
    if (!cells.length) return;

    // Staggered reveal on scroll
    const hexObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cell = entry.target;
          const idx = [...cells].indexOf(cell);
          setTimeout(() => {
            cell.classList.add('hex-visible');
            // Animate the SVG stroke based on skill level
            const level = parseInt(cell.dataset.level) || 0;
            const fill = cell.querySelector('.hex-fill');
            if (fill) {
              // hex perimeter ≈ 340 units, offset based on level
              const offset = 340 - (340 * level / 100);
              fill.style.strokeDashoffset = offset;
            }
          }, idx * 80);
          hexObserver.unobserve(cell);
        }
      });
    }, { threshold: 0.15 });

    cells.forEach(c => hexObserver.observe(c));

    // Hover glow ripple: on mouseenter create a brief expanding ring
    cells.forEach(cell => {
      cell.addEventListener('mouseenter', () => {
        const ring = document.createElement('span');
        ring.className = 'hex-ring-fx';
        ring.style.setProperty('--hex-color', getComputedStyle(cell).getPropertyValue('--hex-color'));
        cell.appendChild(ring);
        ring.addEventListener('animationend', () => ring.remove());
      });
    });
  }

  // ===================== LIVE CODE PLAYGROUND =====================
  function initPlayground() {
    const codeEl = document.getElementById('playgroundCode');
    const consoleEl = document.getElementById('playgroundConsole');
    const runBtn = document.getElementById('playgroundRun');
    const clearBtn = document.getElementById('playgroundClear');
    if (!codeEl || !consoleEl || !runBtn) return;

    function escapeHtml(str) {
      return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function appendOutput(text, type) {
      const cls = type === 'error' ? 'log-error' : type === 'warn' ? 'log-warn' : '';
      consoleEl.innerHTML += `<span class="${cls}">${escapeHtml(text)}</span>\n`;
      consoleEl.scrollTop = consoleEl.scrollHeight;
    }

    runBtn.addEventListener('click', () => {
      consoleEl.innerHTML = '';
      const code = codeEl.value;

      const origLog = console.log;
      const origWarn = console.warn;
      const origError = console.error;

      console.log = (...args) => {
        appendOutput(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' '), 'log');
        origLog.apply(console, args);
      };
      console.warn = (...args) => {
        appendOutput(args.map(a => String(a)).join(' '), 'warn');
        origWarn.apply(console, args);
      };
      console.error = (...args) => {
        appendOutput(args.map(a => String(a)).join(' '), 'error');
        origError.apply(console, args);
      };

      try {
        const fn = new Function(code);
        fn();
      } catch (err) {
        appendOutput('Error: ' + err.message, 'error');
      }

      console.log = origLog;
      console.warn = origWarn;
      console.error = origError;

      // Flash run button green
      runBtn.style.background = 'var(--neon-green)';
      runBtn.style.color = 'var(--bg-deep)';
      setTimeout(() => {
        runBtn.style.background = '';
        runBtn.style.color = '';
      }, 300);
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        consoleEl.innerHTML = '// Output cleared.';
      });
    }

    // Tab key support in textarea
    codeEl.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = codeEl.selectionStart;
        const end = codeEl.selectionEnd;
        codeEl.value = codeEl.value.substring(0, start) + '  ' + codeEl.value.substring(end);
        codeEl.selectionStart = codeEl.selectionEnd = start + 2;
      }
      // Ctrl+Enter to run
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        runBtn.click();
      }
    });
  }

  // ===================== VOICE COMMAND NAVIGATION =====================
  function initVoiceNav() {
    const btn = document.getElementById('voiceBtn');
    const feedback = document.getElementById('voiceFeedback');
    if (!btn || !feedback) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      btn.title = 'Speech not supported in this browser';
      btn.style.opacity = '0.3';
      btn.style.cursor = 'not-allowed';
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    let isListening = false;

    const commands = {
      'home': '#hero', 'top': '#hero', 'hero': '#hero',
      'about': '#about', 'about me': '#about',
      'experience': '#experience', 'work': '#experience',
      'skills': '#skills', 'tech': '#skills', 'stack': '#skills',
      'projects': '#projects', 'project': '#projects',
      'contact': '#contact', 'hire': '#contact', 'touch': '#contact',
      'playground': '#playground', 'code': '#playground',
    };

    function showFeedback(html, duration) {
      feedback.innerHTML = html;
      feedback.classList.add('show');
      setTimeout(() => feedback.classList.remove('show'), duration || 3000);
    }

    btn.addEventListener('click', () => {
      if (isListening) {
        recognition.stop();
        return;
      }

      isListening = true;
      btn.classList.add('listening');
      showFeedback('<i class="fa-solid fa-ear-listen"></i> Listening... say a section name', 5000);

      try {
        recognition.start();
      } catch(e) {
        // Already started
      }
    });

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript.toLowerCase().trim();
      let matched = false;

      for (const [key, target] of Object.entries(commands)) {
        if (transcript.includes(key)) {
          const el = document.querySelector(target);
          if (el) {
            showFeedback(`<span class="voice-cmd">"${transcript}"</span> → <span class="voice-match">Navigating to ${key}!</span>`);
            setTimeout(() => {
              el.scrollIntoView({ behavior: 'smooth' });
            }, 500);
            matched = true;
            break;
          }
        }
      }

      if (!matched) {
        showFeedback(`<span class="voice-cmd">"${transcript}"</span> → <span class="voice-error">Not recognized. Try: home, about, skills, projects, contact</span>`, 4000);
      }
    };

    recognition.onerror = (e) => {
      if (e.error !== 'no-speech') {
        showFeedback(`<span class="voice-error"><i class="fa-solid fa-xmark"></i> ${e.error}</span>`);
      }
    };

    recognition.onend = () => {
      isListening = false;
      btn.classList.remove('listening');
    };
  }

});
