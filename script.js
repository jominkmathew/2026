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

  // Runner particles
  const runnerParticles = document.getElementById('runnerParticles');
  let particleInterval;
  if (runnerParticles) {
    particleInterval = setInterval(() => {
      const p = document.createElement('div');
      p.className = 'runner-particle';
      p.style.setProperty('--py', (Math.random() * 40 - 20) + 'px');
      p.style.top = Math.random() * 40 + 'px';
      p.style.left = Math.random() * 10 + 'px';
      runnerParticles.appendChild(p);
      setTimeout(() => p.remove(), 600);
    }, 80);
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
    initSkillBars();
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

  // ===================== SKILL BARS =====================
  function initSkillBars() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fills = entry.target.querySelectorAll('.neon-fill');
          fills.forEach(fill => {
            fill.style.width = fill.dataset.width;
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const skillSection = document.getElementById('skills');
    if (skillSection) observer.observe(skillSection);
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

});
