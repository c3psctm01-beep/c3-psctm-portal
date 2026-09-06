/**
 * PEA Transmission Line & Substation Portal Application
 * Interactivity: Live Thai Clock, Energy Grid Canvas, Filter/Search, Modal Preview, Copy URL Toast
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Data Store for the 5 Main Applications
  const APPS_DATA = {
    dashboard: {
      id: 'dashboard',
      type: 'PROJECT DASHBOARD / CENTRAL REGION 3',
      title: 'Dashboard สถานะงานก่อสร้างสายส่งและสถานีไฟฟ้า',
      url: 'https://dashboard-constrution-report.vercel.app/',
      image: 'assets/dashboard_card.jpg',
      category: 'monitoring',
      description: 'ระบบรายงานภาพรวมและสถิติงานก่อสร้างสายส่งและสถานีไฟฟ้า จัดทำขึ้นเพื่อสนับสนุนการติดตามงานของ กฟก.3 รวบรวมข้อมูลสถานะงานก่อสร้างสายส่ง 115 kV, สถานะงานก่อสร้างสถานีไฟฟ้า, งานขออนุญาตหน่วยงานภายนอก (ทางหลวง, รถไฟ, เจ้าท่า ฯลฯ) ตลอดจนการติดตามผลการเบิกจ่ายงบประมาณงานก่อสร้างสถานีไฟฟ้าชั่วคราว เพื่อให้การบริหารงานโครงการเป็นไปอย่างมีประสิทธิภาพ',
      features: [
        'รายงานสถานะงานก่อสร้างสายส่ง 115 kV และสถานีไฟฟ้า กฟก.3',
        'ตรวจสอบสถานะงานขออนุญาตหน่วยงานภายนอก (Permit)',
        'ติดตามความก้าวหน้าและการเบิกจ่ายงบประมาณสถานีไฟฟ้าชั่วคราว',
        'สรุปภาพรวมโครงการเพื่อสนับสนุนการติดตามงานของผู้บริหารและวิศวกร'
      ]
    },
    pcts: {
      id: 'pcts',
      type: 'FIELD TRACKING / OPERATIONAL MONITORING',
      title: 'PCTS (PEA Construction Tracking System)',
      url: 'https://pcts-psctm.vercel.app/',
      image: 'assets/pcts_card.jpg',
      category: 'field',
      description: 'ระบบติดตามงานก่อสร้างระบบส่งและสถานีไฟฟ้า พัฒนาขึ้นเพื่อเป็นเครื่องมือกลางในการติดตามสถานะโครงการก่อสร้าง ทั้งงานที่ กฟภ. ดำเนินการเอง และงานจ้างเหมา ช่วยให้ผู้ควบคุมงานสามารถรายงานความก้าวหน้ารายโครงการ แนบภาพถ่ายหน้างานเพื่อบันทึกประวัติการทำงาน และเรียกดูภาพรวมผ่านมุมมองตาราง การ์ด ปฏิทิน และแผนภูมิ Gantt Chart',
      features: [
        'ติดตามสถานะโครงการตั้งแต่ขั้นตอนออกแบบ จัดจ้าง จนถึงแล้วเสร็จ',
        'แยกประเภทการบริหารโครงการระหว่างงานดำเนินการเองและงานจ้างเหมา',
        'บันทึกรายงานความก้าวหน้าโครงการพร้อมแนบภาพถ่ายหน้างานจริง',
        'แสดงผลข้อมูลในรูปแบบการ์ด ตาราง ปฏิทินงาน และแผนภูมิ Gantt Chart'
      ]
    },
    scrap: {
      id: 'scrap',
      type: 'SMART UTILITY / CALCULATION TOOL',
      title: 'ระบบคำนวณการคืนพัสดุประเภทเศษเหล็ก',
      url: 'https://pea-scrap-calculator.vercel.app/',
      image: 'assets/scrap_card.svg',
      category: 'calculation',
      description: 'เครื่องมือช่วยปฏิบัติงานในการรื้อถอนและส่งคืนพัสดุ ช่วยลดขั้นตอนการคำนวณน้ำหนักเหล็กฉาก เสาโครงเหล็ก และสายส่งอลูมิเนียม โดยเชื่อมโยงข้อมูลจากรายงานปิดงานระบบ SAP (ZPSR018) เข้ากับฐานข้อมูลน้ำหนักมาตรฐานของอุปกรณ์ กฟภ. เพื่อสรุปเป็นแบบฟอร์มเอกสารส่งคืนคลังพัสดุได้อย่างถูกต้อง รวดเร็ว และเป็นไปตามระเบียบงานพัสดุ',
      features: [
        'นำเข้าข้อมูลจากรายงานปิดงาน SAP ZPSR018 (ไฟล์ PDF / Excel)',
        'คำนวณน้ำหนักเศษเหล็กและสายไฟฟ้าอัตโนมัติตามฐานข้อมูลมาตรฐาน กฟภ. (71 รายการ)',
        'สรุปรายการวัสดุและพิมพ์แบบฟอร์มเอกสารส่งคืนคลังพัสดุตามระเบียบ กฟภ.',
        'ช่วยลดความผิดพลาดในการกรอกข้อมูลและจัดเตรียมเอกสารส่งคืนพัสดุ'
      ]
    },
    mat115: {
      id: 'mat115',
      type: 'PEA MATERIAL HUB / 115 KV STANDARDS',
      title: 'คู่มืออุปกรณ์ไฟฟ้าสำหรับการก่อสร้างสายส่งแรงสูง 115 kV',
      url: 'https://115k-v-mat-manual.vercel.app/',
      image: 'assets/mat115_card.png',
      category: 'material',
      description: 'ศูนย์รวบรวมข้อมูลพัสดุอุปกรณ์ก่อสร้างสายส่ง 115 เควี ของ กฟภ. จัดทำขึ้นตามคู่มือมาตรฐานของกองมาตรฐานระบบไฟฟ้า (กมฟ.) ร่วมกับกองบริหารและจัดการคลังพัสดุ 4 (กคพ.4) รวบรวมข้อมูลอุปกรณ์ 9 หมวด 98 รายการ พร้อมรหัสพัสดุ SAP เลขที่แบบ สเปกทางวิศวกรรม เอกสารคู่มือ 111 หน้า ตลอดจนฟังก์ชันเปรียบเทียบอุปกรณ์และสร้างรายการเบิกพัสดุ (Material Cart)',
      features: [
        'ค้นหารหัสพัสดุ SAP สเปก และแบบมาตรฐานอุปกรณ์สายส่ง 115 kV (9 หมวด 98 รายการ)',
        'เปิดดูแผ่นคู่มือมาตรฐาน กฟภ. ครบทั้ง 111 หน้า พร้อมฟังก์ชันค้นหาหน้าอุปกรณ์',
        'ระบบเปรียบเทียบสเปกอุปกรณ์ และระบบสร้างรายการขอเบิกพัสดุ (BOM)',
        'ศูนย์ทดสอบความรู้และบัตรคำ (Flashcards / Quiz) เสริมสร้างความเข้าใจในอุปกรณ์'
      ]
    },
    procurement: {
      id: 'procurement',
      type: 'SMART PROCUREMENT / LEGAL WORKFLOW',
      title: 'ระบบผู้ช่วยจัดซื้อจัดจ้าง กฟภ. (PEA Smart Procurement Assistant)',
      url: 'https://pea-smart-procurement.vercel.app/',
      image: 'assets/procurement_card.svg',
      category: 'procurement',
      description: 'ระบบผู้ช่วยปฏิบัติงานจัดซื้อจัดจ้างของการไฟฟ้าส่วนภูมิภาค ออกแบบตามพระราชบัญญัติการจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ พ.ศ. 2560 ช่วยให้เจ้าหน้าที่และผู้ควบคุมงานสามารถจัดการโครงการตามขั้นตอน To-do list 7 ขั้นตอน ตั้งแต่ขออนุมัติหลักการ กำหนดราคากลาง/TOR ขออนุมัติซื้อจ้าง เชื่อมโยงเลข PR/e-GP จนถึงการตรวจรับและเบิกจ่าย พร้อมเครื่องมือช่วยร่างเอกสารราชการและระบบตรวจจับข้อกำหนดทางกฎหมายเพื่อความถูกต้องโปร่งใส',
      features: [
        'ติดตามขั้นตอนการจัดซื้อจัดจ้างภาครัฐแบบเป็นลำดับ (To-do list 7 ขั้นตอนหลัก)',
        'ระบบช่วยร่างหนังสือราชการ บันทึกข้อความ และเอกสารขออนุมัติซื้อจ้าง',
        'ตรวจสอบเงื่อนไขวงเงินและวิธีจัดซื้อจัดจ้างตามเกณฑ์ พ.ร.บ. 2560 (เฉพาะเจาะจง / e-Bidding / คัดเลือก)',
        'ระบบแฟ้มรวบรวมโครงการจัดซื้อจัดจ้าง แยกตามปีงบประมาณและสถานะงาน'
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
