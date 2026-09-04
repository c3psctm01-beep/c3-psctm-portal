/**
 * PEA Transmission Line & Substation Portal Application
 * Interactivity: Live Thai Clock, Energy Grid Canvas, Filter/Search, Modal Preview, Copy URL Toast
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Data Store for the 3 Main Applications
  const APPS_DATA = {
    dashboard: {
      id: 'dashboard',
      type: 'LIVE DASHBOARD / EXECUTIVE REPORT',
      title: 'Dashboard สถานะงานก่อสร้างสายส่งและสถานีไฟฟ้า',
      url: 'https://dashboard-constrution-report.vercel.app/',
      image: 'assets/dashboard_card.jpg',
      category: 'monitoring',
      description: 'ศูนย์รวมรายงานภาพรวมและสถิติความก้าวหน้าโครงการก่อสร้างสายส่งไฟฟ้าแรงสูงและสถานีไฟฟ้าของการไฟฟ้าส่วนภูมิภาคทั่วประเทศ รองรับการประมวลผลข้อมูลเปรียบเทียบ S-Curve วิเคราะห์ระยะเวลางานก่อสร้าง แผนที่สารสนเทศภูมิศาสตร์ (GIS) และการติดตามผลการเบิกจ่ายงบประมาณโครงการเพื่อผู้บริหารและวิศวกรโครงการ',
      features: [
        'ติดตามสถานะความก้าวหน้ารายโครงการและรายสัญญาแบบ Real-Time',
        'กราฟวิเคราะห์ S-Curve (เปรียบเทียบแผนงาน Actual vs Planned)',
        'ระบบแผนที่ GIS Network แสดงแนวสายส่งและพิกัดที่ตั้งสถานีไฟฟ้า',
        'สรุปยอดงบประมาณการลงทุนและคาดการณ์วันแล้วเสร็จโครงการ',
        'ระบบคัดกรองข้อมูลตามเขตการไฟฟ้าส่วนภูมิภาค (ภาคเหนือ, อีสาน, กลาง, ใต้)'
      ]
    },
    pcts: {
      id: 'pcts',
      type: 'FIELD TRACKING / OPERATIONAL SYSTEM',
      title: 'PCTS (PEA Construction Tracking System)',
      url: 'https://pcts-psctm.vercel.app/',
      image: 'assets/pcts_card.jpg',
      category: 'field',
      description: 'ระบบบริหารและติดตามงานก่อสร้างระบบส่งและสถานีไฟฟ้า (PSCTM) พัฒนาขึ้นเพื่อสนับสนุนการทำงานของวิศวกร ผู้ควบคุมงาน และคณะกรรมการตรวจรับพัสดุหน้างาน บันทึกและตรวจสอบขั้นตอนการก่อสร้างเสาโครงเหล็ก ฐานราก อุปกรณ์แรงดันสูง และการส่งมอบงานในแต่ละงวดงานตามสัญญาจ้างอย่างเป็นระบบ',
      features: [
        'ระบบบันทึก Inspection Checklist งานฐานราก โครงสร้าง และระบบไฟฟ้า',
        'ตรวจสอบและติดตามสถานะการส่งมอบงานและการตรวจรับงวดงาน',
        'ระบบแนบภาพถ่ายหน้างานพร้อมพิกัด GPS และ Timestamp ยืนยันความถูกต้อง',
        'เชื่อมโยงสถานะงานก่อสร้างเข้ากับระบบศูนย์กลาง การไฟฟ้าส่วนภูมิภาค ได้ทันที',
        'ลดการใช้เอกสารกระดาษ (Paperless Workflow) และเพิ่มความโปร่งใส'
      ]
    },
    scrap: {
      id: 'scrap',
      type: 'SMART UTILITY / CALCULATION TOOL',
      title: 'ระบบคำนวณการคืนพัสดุประเภทเศษเหล็ก',
      url: 'https://pea-scrap-calculator.vercel.app/',
      image: 'assets/scrap_card.svg',
      category: 'calculation',
      description: 'เครื่องมือคำนวณน้ำหนักและประเมินมูลค่าพัสดุประเภทเศษเหล็ก สายส่งอลูมิเนียม และอุปกรณ์โครงข่ายรื้อถอน เพื่อการส่งคืนคลังพัสดุตามระเบียบการไฟฟ้าส่วนภูมิภาค ช่วยเพิ่มความถูกต้องตามหลักวิศวกรรม ลดความคลาดเคลื่อนในการชั่งตวงวัด และสร้างรายงานสรุปเพื่อแนบเรื่องส่งคืนพัสดุได้อย่างรวดเร็ว',
      features: [
        'สูตรคำนวณมาตรฐานตามขนาดและชนิดเหล็กฉาก เสาโครงเหล็ก และสายไฟ ACSR',
        'ระบบแปลงหน่วยน้ำหนักและประเมินราคากลางการส่งคืนพัสดุอัตโนมัติ',
        'สรุปรายการวัสดุและพิมพ์แบบฟอร์มเอกสารส่งคืนคลังพัสดุ การไฟฟ้าส่วนภูมิภาค',
        'สืบค้นข้อมูลย้อนหลังและตรวจสอบความถูกต้องของรายการคืนพัสดุ',
        'ใช้งานง่าย รองรับการคำนวณผ่านสมาร์ทโฟนและแท็บเล็ตหน้างาน'
      ]
    }
  };

  // 2. Real-Time Thai Digital Clock & Calendar
  function initLiveClock() {
    const thaiDateEl = document.getElementById('liveThaiDate');
    const thaiTimeEl = document.getElementById('liveThaiTime');
    const currentYearEl = document.getElementById('currentYear');

    const thaiDays = ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'];
    const thaiMonths = [
      'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
      'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
    ];

    function updateTime() {
      const now = new Date();
      const dayName = thaiDays[now.getDay()];
      const dateNum = now.getDate();
      const monthName = thaiMonths[now.getMonth()];
      const thaiYear = now.getFullYear() + 543;

      if (thaiDateEl) {
        thaiDateEl.textContent = `${dayName}ที่ ${dateNum} ${monthName} ${thaiYear}`;
      }

      if (thaiTimeEl) {
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        thaiTimeEl.textContent = `${hours}:${minutes}:${seconds} น.`;
      }

      if (currentYearEl) {
        currentYearEl.textContent = `${thaiYear} (ค.ศ. ${now.getFullYear()})`;
      }
    }

    updateTime();
    setInterval(updateTime, 1000);
  }

  // 3. Theme Toggle (Dark Mode / Light Mode)
  function initTheme() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const savedTheme = localStorage.getItem('pea_portal_theme') || 'dark';
    
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('pea_portal_theme', newTheme);
      });
    }
  }

  // 4. Interactive Energy Grid Canvas (Power Grid Nodes & High-Voltage Electric Lines)
  function initEnergyCanvas() {
    const canvas = document.getElementById('energyCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    });

    const mouse = { x: null, y: null, maxDist: 160 };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    let nodes = [];
    const NODE_COUNT = Math.min(Math.floor((width * height) / 18000), 55);

    function initNodes() {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius: Math.random() * 2 + 1.5,
          colorType: Math.random() > 0.4 ? 'purple' : 'gold'
        });
      }
    }

    initNodes();

    function renderCanvas() {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const purpleColor = isDark ? 'rgba(184, 53, 212, ' : 'rgba(116, 31, 132, ';
      const goldColor = isDark ? 'rgba(253, 185, 19, ' : 'rgba(212, 149, 0, ';

      // Update & Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.colorType === 'purple' ? `${purpleColor}0.8)` : `${goldColor}0.9)`;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.28;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = node.colorType === 'purple' ? `${purpleColor}${alpha})` : `${goldColor}${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Connect to mouse cursor
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = node.x - mouse.x;
          const mdy = node.y - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < mouse.maxDist) {
            const mAlpha = (1 - mDist / mouse.maxDist) * 0.45;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `${goldColor}${mAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(renderCanvas);
    }

    renderCanvas();
  }

  // 5. Search & Filter Functionality
  function initSearchAndFilter() {
    const searchInput = document.getElementById('appSearchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const filterPills = document.querySelectorAll('.filter-tag');
    const appCards = document.querySelectorAll('.app-card');
    const noResultsBox = document.getElementById('noResultsBox');
    const resetSearchBtn = document.getElementById('resetSearchBtn');

    let currentFilter = 'all';
    let currentQuery = '';

    function filterApps() {
      let visibleCount = 0;

      appCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const keywords = card.getAttribute('data-keywords') || '';
        const title = card.querySelector('.app-title')?.textContent || '';
        const desc = card.querySelector('.app-description')?.textContent || '';

        const fullText = (keywords + ' ' + title + ' ' + desc).toLowerCase();
        const matchesFilter = currentFilter === 'all' || category === currentFilter;
        const matchesQuery = !currentQuery || fullText.includes(currentQuery.toLowerCase().trim());

        if (matchesFilter && matchesQuery) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (noResultsBox) {
        noResultsBox.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentQuery = e.target.value;
        if (clearSearchBtn) {
          clearSearchBtn.style.display = currentQuery ? 'block' : 'none';
        }
        filterApps();
      });
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentQuery = '';
        clearSearchBtn.style.display = 'none';
        filterApps();
        searchInput.focus();
      });
    }

    filterPills.forEach(btn => {
      btn.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        filterApps();
      });
    });

    if (resetSearchBtn) {
      resetSearchBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        currentQuery = '';
        currentFilter = 'all';
        if (clearSearchBtn) clearSearchBtn.style.display = 'none';
        filterPills.forEach(p => {
          if (p.getAttribute('data-filter') === 'all') p.classList.add('active');
          else p.classList.remove('active');
        });
        filterApps();
      });
    }
  }

  // 6. Toast Notification Manager
  let toastTimer = null;
  function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const toastMsg = document.getElementById('toastMessage');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // 7. Clipboard Copy Handler
  function initCopyButtons() {
    const copyBtns = document.querySelectorAll('.btn-copy-url');

    copyBtns.forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const url = btn.getAttribute('data-url');
        if (!url) return;

        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(url);
          } else {
            // Fallback for older contexts
            const textArea = document.createElement('textarea');
            textArea.value = url;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
          }
          showToast(`คัดลอกลิงก์เรียบร้อยแล้ว: ${url}`);
        } catch (err) {
          console.error('Failed to copy: ', err);
          showToast('ไม่สามารถคัดลอกลิงก์ได้โดยอัตโนมัติ');
        }
      });
    });
  }

  // 8. Quick Preview Modal Logic
  function initPreviewModal() {
    const modal = document.getElementById('previewModal');
    const closeBtn = document.getElementById('modalCloseBtn');
    const dismissBtn = document.getElementById('modalDismissBtn');
    const modalCopyBtn = document.getElementById('modalCopyBtn');
    const previewButtons = document.querySelectorAll('.btn-preview');

    const modalAppType = document.getElementById('modalAppType');
    const modalAppTitle = document.getElementById('modalAppTitle');
    const modalPreviewImg = document.getElementById('modalPreviewImg');
    const modalAppUrl = document.getElementById('modalAppUrl');
    const modalAppDesc = document.getElementById('modalAppDesc');
    const modalFeaturesList = document.getElementById('modalFeaturesList');
    const modalLaunchBtn = document.getElementById('modalLaunchBtn');

    let currentModalUrl = '';

    function openModal(appId) {
      const app = APPS_DATA[appId];
      if (!app) return;

      currentModalUrl = app.url;
      if (modalAppType) modalAppType.textContent = app.type;
      if (modalAppTitle) modalAppTitle.textContent = app.title;
      if (modalPreviewImg) {
        modalPreviewImg.src = app.image;
        modalPreviewImg.alt = app.title;
      }
      if (modalAppUrl) modalAppUrl.textContent = app.url;
      if (modalAppDesc) modalAppDesc.textContent = app.description;

      if (modalFeaturesList) {
        modalFeaturesList.innerHTML = '';
        app.features.forEach(feat => {
          const li = document.createElement('li');
          li.textContent = feat;
          modalFeaturesList.appendChild(li);
        });
      }

      if (modalLaunchBtn) {
        modalLaunchBtn.href = app.url;
      }

      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    previewButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const appId = btn.getAttribute('data-app-id');
        openModal(appId);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (dismissBtn) dismissBtn.addEventListener('click', closeModal);

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
      }
    });

    if (modalCopyBtn) {
      modalCopyBtn.addEventListener('click', () => {
        if (currentModalUrl) {
          navigator.clipboard.writeText(currentModalUrl);
          showToast(`คัดลอกลิงก์สำเร็จ: ${currentModalUrl}`);
        }
      });
    }
  }

  // 9. Interactive Card 3D Subtle Tilt
  function initCardTilt() {
    const cards = document.querySelectorAll('.app-card');

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // Initialize all application subsystems
  initLiveClock();
  initTheme();
  initEnergyCanvas();
  initSearchAndFilter();
  initCopyButtons();
  initPreviewModal();
  initCardTilt();
});
