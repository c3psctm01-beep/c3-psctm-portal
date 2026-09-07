/**
 * PEA Transmission Line & Substation Portal
 * Internationalization (i18n) Engine - Thai (ไทย) & English (EN)
 */

const TRANSLATIONS = {
  th: {
    // Header & Brand
    brand_aria: "หน้าหลัก แผนกจัดการงานก่อสร้างระบบส่งและสถานีไฟฟ้า",
    brand_org: "การไฟฟ้าส่วนภูมิภาค เขต 3 (ภาคกลาง) จังหวัดนครปฐม",
    brand_dept: "แผนกจัดการงานก่อสร้างระบบส่งและสถานีไฟฟ้า",
    brand_subdept: "กองก่อสร้างระบบไฟฟ้าและงานโยธา • ฝ่ายวิศวกรรมและบริการ",
    status_text: "ระบบงานออนไลน์ 100%",
    status_tooltip: "ระบบสารสนเทศออนไลน์ปกติ 100%",
    header_nav_apps: "5 ระบบงานหลัก",
    theme_toggle_aria: "สลับโหมดแสงสว่าง/โหมดมืด",
    theme_toggle_title: "สลับโหมดแสงสว่าง/โหมดมืด",

    // Hero Section
    hero_capsule: "การไฟฟ้าส่วนภูมิภาค เขต 3 (ภาคกลาง) จังหวัดนครปฐม • ฝ่ายวิศวกรรมและบริการ",
    breadcrumb_dept: "ฝ่ายวิศวกรรมและบริการ",
    breadcrumb_div: "กองก่อสร้างระบบไฟฟ้าและงานโยธา",
    breadcrumb_sect: "แผนกจัดการงานก่อสร้างระบบส่งและสถานีไฟฟ้า",
    hero_title: 'แผนกจัดการงานก่อสร้าง<br class="mobile-hide"><span class="text-gradient-pea">ระบบส่งและสถานีไฟฟ้า</span>',
    hero_subtitle: '<span class="inline-phrase">กองก่อสร้างระบบไฟฟ้าและงานโยธา</span> <span class="inline-phrase">ฝ่ายวิศวกรรมและบริการ</span> <span class="inline-phrase">การไฟฟ้าส่วนภูมิภาค&nbsp;เขต&nbsp;3&nbsp;(ภาคกลาง)&nbsp;จังหวัดนครปฐม</span><br class="desktop-only"><span class="inline-phrase">ศูนย์กลางเชื่อมโยงระบบสารสนเทศ</span> <span class="inline-phrase">การกำกับดูแล</span> <span class="inline-phrase">ควบคุม</span> <span class="inline-phrase">และติดตามงานก่อสร้างระบบโครงข่ายไฟฟ้าแรงสูง</span> <span class="inline-phrase">สถานีไฟฟ้า</span> <span class="inline-phrase">และการบริหารจัดการพัสดุ</span>',
    
    // Search & Filters
    search_placeholder: "ค้นหาระบบงาน เช่น Dashboard, PCTS, คืนเศษเหล็ก, ตรวจรับงาน...",
    search_aria: "ค้นหาระบบงาน",
    clear_search_aria: "ล้างการค้นหา",
    filter_all: "ทั้งหมด (5)",
    filter_monitoring: "ติดตามความก้าวหน้า",
    filter_field: "งานตรวจรับหน้างาน",
    filter_material: "คู่มือ & พัสดุอุปกรณ์ 115 kV",
    filter_calculation: "การเงิน & คืนพัสดุ",
    filter_procurement: "งานจัดซื้อจัดจ้าง (พ.ร.บ. 2560)",

    // Hero Stats Counter
    stat_systems_val: "5 / 5",
    stat_systems_label: "ระบบงานออนไลน์พร้อมใช้",
    stat_voltage_val: "115 kV",
    stat_voltage_label: "มาตรฐานโครงข่ายสายส่ง",
    stat_sync_val: "100% Sync",
    stat_sync_label: "เชื่อมต่อข้อมูลแบบเรียลไทม์",

    // Apps Section Header
    apps_section_tag: "CORE WEB APPLICATIONS",
    apps_section_title: "ระบบสารสนเทศหลักประจำแผนก",
    apps_section_sub: '<span class="inline-phrase">เลือกเปิดใช้งานระบบงานที่ต้องการได้โดยตรง</span> <span class="inline-phrase">ผ่านปุ่มเข้าสู่ระบบ</span> <span class="inline-phrase">หรือกดดูตัวอย่างข้อมูลและรายละเอียดหน้าจอ</span>',

    // Card 1: Dashboard
    app_dashboard_badge_sub: "กฟก.3 (ภาคกลาง)",
    app_dashboard_title: "Dashboard สถานะงานก่อสร้างสายส่งและสถานีไฟฟ้า",
    app_dashboard_desc: "ระบบรายงานภาพรวมสถานะงานก่อสร้างสายส่ง 115 kV และสถานีไฟฟ้า ในพื้นที่ความรับผิดชอบของ การไฟฟ้าส่วนภูมิภาค เขต 3 (ภาคกลาง) ติดตามความก้าวหน้าโครงการ สถานะงานขออนุญาตหน่วยงานภายนอก และการเบิกจ่ายงบประมาณสถานีไฟฟ้าชั่วคราว",
    app_dashboard_feat1: "รายงานสถานะงานก่อสร้างสายส่ง 115 kV และสถานีไฟฟ้า กฟก.3",
    app_dashboard_feat2: "ตรวจสอบสถานะงานขออนุญาตหน่วยงานภายนอก (Permit)",
    app_dashboard_feat3: "ติดตามความก้าวหน้าและการเบิกจ่ายงบประมาณสถานีไฟฟ้าชั่วคราว",
    app_dashboard_launch: "เข้าสู่ระบบ Dashboard",

    // Card 2: PCTS
    app_pcts_title: "PCTS (PEA Construction Tracking System)",
    app_pcts_desc: "ระบบบันทึกและติดตามสถานะโครงการก่อสร้างระบบส่งและสถานีไฟฟ้า ช่วยให้ผู้ควบคุมงานและผู้เกี่ยวข้องตรวจสอบสถานะโครงการ อัปเดตความก้าวหน้า และแนบภาพถ่ายการปฏิบัติงานหน้างานจริง",
    app_pcts_feat1: "ติดตามสถานะโครงการตั้งแต่ขั้นตอนออกแบบ จัดจ้าง จนถึงแล้วเสร็จ",
    app_pcts_feat2: "บันทึกรายงานความก้าวหน้าโครงการพร้อมแนบภาพถ่ายหน้างานจริง",
    app_pcts_feat3: "แสดงผลในรูปแบบการ์ด ตาราง ปฏิทินงาน และแผนภูมิ Gantt Chart",
    app_pcts_launch: "เข้าสู่ระบบ PCTS",

    // Card 3: Scrap Calculator
    app_scrap_title: "ระบบคำนวณการคืนพัสดุประเภทเศษเหล็ก",
    app_scrap_desc: "เครื่องมือช่วยคำนวณน้ำหนักพัสดุประเภทเศษเหล็กและสายไฟฟ้าจากการรื้อถอน โดยนำเข้าข้อมูลจากรายงานปิดงาน SAP (ZPSR018) และคำนวณตามเกณฑ์น้ำหนักมาตรฐาน เพื่อจัดทำเอกสารส่งคืนคลังพัสดุ กฟภ.",
    app_scrap_feat1: "นำเข้าข้อมูลจากรายงานปิดงาน SAP ZPSR018 (ไฟล์ PDF / Excel)",
    app_scrap_feat2: "คำนวณน้ำหนักเศษเหล็กและสายไฟฟ้าอัตโนมัติตามฐานข้อมูลมาตรฐาน กฟภ. (71 รายการ)",
    app_scrap_feat3: "สรุปรายการและพิมพ์แบบฟอร์มเอกสารส่งคืนคลังพัสดุตามระเบียบ กฟภ.",
    app_scrap_launch: "เข้าสู่ระบบคำนวณเศษเหล็ก",

    // Card 4: Material 115 kV Manual
    app_mat115_title: "คู่มืออุปกรณ์ไฟฟ้าสำหรับการก่อสร้างสายส่งแรงสูง 115 kV",
    app_mat115_desc: "ระบบสืบค้นข้อมูลพัสดุอุปกรณ์มาตรฐานสำหรับการก่อสร้างสายส่ง 115 kV จัดทำโดย กมฟ. และ กคพ.4 รวบรวมรหัสพัสดุ SAP สเปกทางเทคนิค แบบมาตรฐาน และแผ่นคู่มือมาตรฐาน 111 หน้า เพื่อความสะดวกในการเบิกจ่ายและติดตั้ง",
    app_mat115_feat1: "ค้นหารหัสพัสดุ SAP สเปก และแบบมาตรฐานอุปกรณ์สายส่ง 115 kV (9 หมวด 98 รายการ)",
    app_mat115_feat2: "เปิดดูแผ่นคู่มือมาตรฐาน กฟภ. ครบทั้ง 111 หน้า",
    app_mat115_feat3: "ระบบเปรียบเทียบสเปกอุปกรณ์ และสร้างรายการขอเบิกพัสดุ (BOM)",
    app_mat115_launch: "เข้าสู่ระบบคู่มืออุปกรณ์ 115 kV",

    // Card 5: Smart Procurement
    app_procurement_badge_sub: "พ.ร.บ. 2560",
    app_procurement_title: "ระบบผู้ช่วยจัดซื้อจัดจ้าง กฟภ. (PEA Smart Procurement)",
    app_procurement_desc: "ระบบผู้ช่วยบริหารจัดการงานจัดซื้อจัดจ้างตามระเบียบ พ.ร.บ. การจัดซื้อจัดจ้างภาครัฐ พ.ศ. 2560 ช่วยติดตามขั้นตอน To-do list 7 ขั้นตอนหลัก ร่างเอกสารและหนังสือราชการ พร้อมระบบแจ้งเตือนข้อกำหนดตามระเบียบกฎหมาย",
    app_procurement_feat1: "ติดตามขั้นตอนการจัดซื้อจัดจ้างภาครัฐแบบเป็นลำดับ (7 ขั้นตอนหลัก)",
    app_procurement_feat2: "ระบบช่วยร่างหนังสือราชการ บันทึกข้อความ และเอกสารขออนุมัติซื้อจ้าง",
    app_procurement_feat3: "ตรวจสอบเงื่อนไขวงเงินและวิธีจัดซื้อจัดจ้างตามเกณฑ์ พ.ร.บ. 2560",
    app_procurement_launch: "เข้าสู่ระบบจัดซื้อจัดจ้าง",

    // Card Actions
    btn_preview: "ตัวอย่าง",
    btn_preview_tooltip: "ดูตัวอย่างและข้อมูลระบบ",
    btn_copy_tooltip: "คัดลอกลิงก์ URL",

    // No Results
    no_results_title: "ไม่พบระบบงานที่ตรงกับคำค้นหา",
    no_results_desc: 'ลองค้นหาด้วยคำสำคัญ เช่น "Dashboard", "PCTS", หรือ "เศษเหล็ก"',
    no_results_reset: "รีเซ็ตการค้นหา",

    // 7 Missions Section
    missions_tag: "RESPONSIBILITIES & MISSIONS",
    missions_title: "7 ภารกิจหลัก แผนกจัดการงานก่อสร้างระบบส่งและสถานีไฟฟ้า",
    missions_sub: "กองก่อสร้างระบบไฟฟ้าและงานโยธา ฝ่ายวิศวกรรมและบริการ การไฟฟ้าส่วนภูมิภาค เขต 3 (ภาคกลาง) จังหวัดนครปฐม",
    missions_role_badge: "การไฟฟ้าส่วนภูมิภาค เขต 3 (ภาคกลาง) จังหวัดนครปฐม",
    mission_1: '<span class="mission-highlight">วางแผนงาน ประสานงาน ติดตาม เร่งรัด งานก่อสร้าง ย้ายแนวสายส่ง</span> <span class="inline-phrase">ให้เป็นไปตามแผนงาน/โครงการ</span>',
    mission_2: '<span class="mission-highlight">ประสานงาน ติดตาม เร่งรัด ควบคุมงานก่อสร้างสถานีไฟฟ้า</span> <span class="inline-phrase">สถานีไฟฟ้าชั่วคราว</span> <span class="inline-phrase">โรงจักรพลังงานน้ำ</span> และ<span class="inline-phrase">สถานีพลังงานทดแทน</span> <span class="inline-phrase">ให้เป็นไปตามแผนงาน/โครงการ</span>',
    mission_3: '<span class="mission-highlight">จัดการงานก่อสร้างสถานีไฟฟ้าชั่วคราว</span>',
    mission_4: '<span class="mission-highlight">ประสานงาน ตรวจสอบและทดสอบก่อนการจ่ายไฟ&nbsp;(Commissioning)</span>',
    mission_5: '<span class="mission-highlight">วิเคราะห์ประเมินผลความสำเร็จของแผนงาน/โครงการ</span> <span class="inline-phrase">ปัญหาอุปสรรคและนำเสนอหน่วยงานที่เกี่ยวข้อง</span> <span class="inline-phrase">เพื่อนำไปปรับปรุง พัฒนา</span>',
    mission_6: '<span class="mission-highlight">ประสานงาน ติดตาม เร่งรัด การปิดงานก่อสร้าง</span>',
    mission_7: '<span class="mission-highlight">จัดทำรายงานสถานะงานโครงการ</span>',

    // Organization Structure Card
    org_title: "โครงสร้างสายงานสังกัด",
    org_sub: "Provincial Electricity Authority Area 3 (Central) Nakhon Pathom",
    org_desc: "หน่วยงานรับผิดชอบหลักในสังกัด <strong>กองก่อสร้างระบบไฟฟ้าและงานโยธา ฝ่ายวิศวกรรมและบริการ การไฟฟ้าส่วนภูมิภาค เขต 3 (ภาคกลาง) จังหวัดนครปฐม</strong> มุ่งเน้นการขับเคลื่อนระบบสายส่งและสถานีไฟฟ้าด้วยเทคโนโลยีสารสนเทศที่ทันสมัย เพื่อตอบสนองทั้ง 7 ภารกิจหลักอย่างมีประสิทธิภาพสูงสุด",

    // System Guidelines Card
    guide_title: "คำแนะนำการเข้าใช้งานระบบ",
    guide_sub: "System Usage Guidelines",
    guide_sec_title: "ความปลอดภัย:",
    guide_sec_desc: "รองรับการเข้าใช้งานผ่านโครงข่ายอินทราเน็ต การไฟฟ้าส่วนภูมิภาค (PEA Intranet) หรือเครือข่ายภายนอกที่มีสิทธิการเข้าถึง",
    guide_browser_title: "เบราว์เซอร์แนะนำ:",
    guide_browser_desc: "แนะนำให้ใช้งานผ่าน Google Chrome, Microsoft Edge หรือ Safari เวอร์ชันล่าสุดเพื่อประสิทธิภาพสูงสุด",
    guide_support_title: "การรายงานปัญหา:",
    guide_support_desc: "ติดต่อผู้ดูแลระบบแผนกจัดการงานก่อสร้างระบบส่งและสถานีไฟฟ้า การไฟฟ้าส่วนภูมิภาค เขต 3 (ภาคกลาง) จังหวัดนครปฐม",

    // Footer
    footer_brand_title: "การไฟฟ้าส่วนภูมิภาค เขต 3 (ภาคกลาง) จังหวัดนครปฐม",
    footer_brand_dept: "แผนกจัดการงานก่อสร้างระบบส่งและสถานีไฟฟ้า กองก่อสร้างระบบไฟฟ้าและงานโยธา ฝ่ายวิศวกรรมและบริการ",
    footer_brand_desc: "มุ่งมั่นพัฒนาระบบโครงข่ายไฟฟ้าอัจฉริยะ สายส่ง และสถานีไฟฟ้า เพื่อเสริมสร้างความมั่นคงด้านพลังงานในพื้นที่ภาคกลาง",
    footer_col_links: "ระบบงานหลักที่เชื่อมโยง",
    footer_link_dash: "Dashboard สถานะงานก่อสร้าง",
    footer_link_pcts: "PCTS Construction Tracking",
    footer_link_scrap: "ระบบคำนวณการคืนพัสดุเศษเหล็ก",
    footer_link_mat: "คู่มืออุปกรณ์ก่อสร้างสายส่ง 115 kV",
    footer_link_procure: "ระบบผู้ช่วยจัดซื้อจัดจ้าง (พ.ร.บ. 2560)",
    footer_col_contact: "สำนักงาน & ช่องทางติดต่อ",
    footer_contact_address: "9/1 หมู่ 1 ตำบลไทยาวาส อำเภอนครชัยศรี จังหวัดนครปฐม 73120",
    footer_contact_phone: "โทรศัพท์: 034 339 140",
    footer_contact_callcenter: "PEA Contact Center: 1129",
    footer_copyright: "การไฟฟ้าส่วนภูมิภาค (Provincial Electricity Authority). All rights reserved.",
    footer_version: "Portal Version 2.5 (Smart Grid Hub)",

    // Modal Preview
    modal_tag: "SYSTEM PREVIEW",
    modal_close_aria: "ปิดหน้าต่าง",
    modal_url_label: "URL ปลายทาง:",
    modal_features_title: "ฟังก์ชันสำคัญประจำระบบ:",
    modal_btn_close: "ปิด",
    modal_btn_copy: "คัดลอกลิงก์",
    modal_btn_launch: "เปิดใช้งานระบบ",

    // Toast
    toast_copied_text: "คัดลอกลิงก์เรียบร้อยแล้ว: ",
    toast_copied_success: "คัดลอกลิงก์สำเร็จแล้ว!",
    toast_copied_error: "ไม่สามารถคัดลอกลิงก์ได้โดยอัตโนมัติ"
  },

  en: {
    // Header & Brand
    brand_aria: "Home - Transmission Line & Substation Construction Management Department",
    brand_org: "Provincial Electricity Authority Area 3 (Central) Nakhon Pathom",
    brand_dept: "Transmission Line & Substation Construction Management Department",
    brand_subdept: "Electrical & Civil Construction Division • Engineering & Services Department",
    status_text: "All Systems Operational 100%",
    status_tooltip: "Information systems fully operational 100%",
    header_nav_apps: "5 Core Applications",
    theme_toggle_aria: "Switch Light / Dark Theme",
    theme_toggle_title: "Switch Light / Dark Theme",

    // Hero Section
    hero_capsule: "Provincial Electricity Authority Area 3 (Central) • Engineering & Services",
    breadcrumb_dept: "Engineering & Services",
    breadcrumb_div: "Electrical & Civil Construction Division",
    breadcrumb_sect: "Transmission Line & Substation Construction Management",
    hero_title: 'Transmission Line & Substation<br class="mobile-hide"><span class="text-gradient-pea">Construction Management</span>',
    hero_subtitle: '<span class="inline-phrase">Electrical & Civil Construction Division</span> <span class="inline-phrase">Engineering & Services Department</span> <span class="inline-phrase">PEA Area 3 (Central) Nakhon Pathom</span><br class="desktop-only"><span class="inline-phrase">Central gateway connecting information systems</span> <span class="inline-phrase">for supervision</span> <span class="inline-phrase">control</span> <span class="inline-phrase">and tracking of 115 kV transmission grid construction</span> <span class="inline-phrase">substations</span> <span class="inline-phrase">and warehouse material management</span>',

    // Search & Filters
    search_placeholder: "Search systems e.g. Dashboard, PCTS, Scrap return, Procurement...",
    search_aria: "Search systems",
    clear_search_aria: "Clear search query",
    filter_all: "All Systems (5)",
    filter_monitoring: "Progress Tracking",
    filter_field: "Field Inspection",
    filter_material: "115 kV Material Hub",
    filter_calculation: "Calculation & Return",
    filter_procurement: "Procurement (Act 2017)",

    // Hero Stats Counter
    stat_systems_val: "5 / 5",
    stat_systems_label: "Online & Operational Systems",
    stat_voltage_val: "115 kV",
    stat_voltage_label: "Transmission Grid Standard",
    stat_sync_val: "100% Sync",
    stat_sync_label: "Real-Time Data Integration",

    // Apps Section Header
    apps_section_tag: "CORE WEB APPLICATIONS",
    apps_section_title: "Core Departmental Web Applications",
    apps_section_sub: '<span class="inline-phrase">Access any operational system directly</span> <span class="inline-phrase">via the launch button</span> <span class="inline-phrase">or explore feature previews and documentation</span>',

    // Card 1: Dashboard
    app_dashboard_badge_sub: "PEA Area 3 (Central)",
    app_dashboard_title: "Transmission Line & Substation Construction Dashboard",
    app_dashboard_desc: "Executive dashboard reporting construction progress for 115 kV transmission lines and substations across PEA Area 3 (Central). Tracks project milestones, external agency permits, and temporary substation disbursements.",
    app_dashboard_feat1: "Status reports for 115 kV transmission lines and substations across Central 3",
    app_dashboard_feat2: "Permit tracking across external authorities (Highways, Railways, Marine Dept.)",
    app_dashboard_feat3: "Track progress and budget disbursements for temporary substations",
    app_dashboard_launch: "Launch Dashboard",

    // Card 2: PCTS
    app_pcts_title: "PCTS (PEA Construction Tracking System)",
    app_pcts_desc: "Field-level tracking and project management platform for transmission line and substation construction. Enables project supervisors to log progress, record photographic proof of work, and review timelines via Gantt charts.",
    app_pcts_feat1: "End-to-end lifecycle tracking from design and contracting to commissioning",
    app_pcts_feat2: "Daily progress logging with geo-referenced on-site photographic records",
    app_pcts_feat3: "Multi-view interface: Kanban cards, data tables, calendars, and Gantt charts",
    app_pcts_launch: "Launch PCTS",

    // Card 3: Scrap Calculator
    app_scrap_title: "PEA Scrap Material Return Calculator",
    app_scrap_desc: "Automated calculation tool for dismantled steel and conductor scrap. Ingests SAP ZPSR018 completion reports and applies certified PEA weight algorithms to generate compliant warehouse return documentation.",
    app_scrap_feat1: "Direct data ingestion from SAP ZPSR018 completion reports (PDF / Excel)",
    app_scrap_feat2: "Automated scrap steel and conductor weight calculation (71 PEA standard items)",
    app_scrap_feat3: "Instant generation of official warehouse return forms compliant with PEA regulations",
    app_scrap_launch: "Launch Scrap Calculator",

    // Card 4: Material 115 kV Manual
    app_mat115_title: "PEA 115 kV Transmission Material Manual & Hub",
    app_mat115_desc: "Centralized knowledge base and material handbook for 115 kV high-voltage transmission lines, developed jointly by Standards (KMF) and Warehouse (KKP4). Features SAP codes, specifications, drawings, and an interactive 111-page manual.",
    app_mat115_feat1: "Search SAP material codes, technical specs, and blueprints (9 categories, 98 items)",
    app_mat115_feat2: "Browse the complete 111-page official PEA standard construction handbook",
    app_mat115_feat3: "Side-by-side equipment comparison and Bill of Materials (BOM) requisition builder",
    app_mat115_launch: "Launch 115 kV Hub",

    // Card 5: Smart Procurement
    app_procurement_badge_sub: "Act B.E. 2560",
    app_procurement_title: "PEA Smart Procurement Assistant (Act 2017)",
    app_procurement_desc: "Procurement management assistant designed under the Public Procurement and Supplies Administration Act B.E. 2560. Guides officers through a 7-step To-do workflow, auto-drafts official memos, and provides legal compliance alerts.",
    app_procurement_feat1: "Sequential 7-step guidance for public procurement workflows",
    app_procurement_feat2: "Assisted drafting of official government memorandums and purchase approvals",
    app_procurement_feat3: "Budget threshold verification and procurement method advisor (Specific / e-Bidding)",
    app_procurement_launch: "Launch Procurement",

    // Card Actions
    btn_preview: "Preview",
    btn_preview_tooltip: "View system preview and technical details",
    btn_copy_tooltip: "Copy system URL to clipboard",

    // No Results
    no_results_title: "No applications found matching your search",
    no_results_desc: 'Try searching with keywords such as "Dashboard", "PCTS", "Scrap", or "115 kV"',
    no_results_reset: "Reset Search",

    // 7 Missions Section
    missions_tag: "RESPONSIBILITIES & MISSIONS",
    missions_title: "7 Core Missions of Transmission Line & Substation Construction Management",
    missions_sub: "Electrical & Civil Construction Division, Engineering & Services Department, PEA Area 3 (Central) Nakhon Pathom",
    missions_role_badge: "PEA Area 3 (Central) Nakhon Pathom",
    mission_1: '<span class="mission-highlight">Plan, coordinate, monitor, and expedite transmission line construction and relocation</span> <span class="inline-phrase">in full accordance with master project plans.</span>',
    mission_2: '<span class="mission-highlight">Coordinate, monitor, expedite, and supervise construction of substations,</span> <span class="inline-phrase">mobile/temporary substations,</span> <span class="inline-phrase">hydroelectric plants,</span> and <span class="inline-phrase">renewable energy stations.</span>',
    mission_3: '<span class="mission-highlight">Manage and execute construction of temporary and mobile substations.</span>',
    mission_4: '<span class="mission-highlight">Coordinate, inspect, and perform pre-energization testing and commissioning.</span>',
    mission_5: '<span class="mission-highlight">Analyze and evaluate project success metrics and operational challenges,</span> <span class="inline-phrase">reporting findings to relevant stakeholders for continuous refinement.</span>',
    mission_6: '<span class="mission-highlight">Coordinate, monitor, and expedite construction close-outs and project completion.</span>',
    mission_7: '<span class="mission-highlight">Compile, maintain, and publish comprehensive project status reports.</span>',

    // Organization Structure Card
    org_title: "Organizational Hierarchy",
    org_sub: "Provincial Electricity Authority Area 3 (Central) Nakhon Pathom",
    org_desc: "Operating under the <strong>Electrical & Civil Construction Division, Engineering & Services Department, PEA Area 3 (Central) Nakhon Pathom</strong>, our department drives smart transmission and substation infrastructure with modern digital tools to fulfill all 7 core missions.",

    // System Guidelines Card
    guide_title: "System Usage Guidelines",
    guide_sub: "System Usage Guidelines",
    guide_sec_title: "Security & Access:",
    guide_sec_desc: "Accessible via PEA Internal Network (Intranet) or authorized external network credentials.",
    guide_browser_title: "Recommended Browsers:",
    guide_browser_desc: "Google Chrome, Microsoft Edge, or Safari (latest releases) recommended for optimal performance.",
    guide_support_title: "Technical Support:",
    guide_support_desc: "Contact the administrator at Transmission Line & Substation Construction Management Department, PEA Area 3 (Central) Nakhon Pathom.",

    // Footer
    footer_brand_title: "Provincial Electricity Authority Area 3 (Central) Nakhon Pathom",
    footer_brand_dept: "Transmission Line & Substation Construction Management Department, Electrical & Civil Construction Division",
    footer_brand_desc: "Committed to developing smart transmission grids, high-voltage lines, and substations to ensure premier energy reliability across Central Thailand.",
    footer_col_links: "Connected Systems",
    footer_link_dash: "Construction Status Dashboard",
    footer_link_pcts: "PCTS Construction Tracking",
    footer_link_scrap: "Scrap Return Calculator",
    footer_link_mat: "115 kV Material Manual & Hub",
    footer_link_procure: "Smart Procurement Assistant",
    footer_col_contact: "Office & Contact",
    footer_contact_address: "9/1 Moo 1, Thaiyawat, Nakhon Chai Si, Nakhon Pathom 73120, Thailand",
    footer_contact_phone: "Telephone: +66 34 339 140",
    footer_contact_callcenter: "PEA Contact Center: 1129",
    footer_copyright: "Provincial Electricity Authority (PEA). All rights reserved.",
    footer_version: "Portal Version 2.5 (Smart Grid Hub)",

    // Modal Preview
    modal_tag: "SYSTEM PREVIEW",
    modal_close_aria: "Close preview modal",
    modal_url_label: "Target URL:",
    modal_features_title: "Key System Capabilities:",
    modal_btn_close: "Close",
    modal_btn_copy: "Copy URL",
    modal_btn_launch: "Launch System",

    // Toast
    toast_copied_text: "URL copied to clipboard: ",
    toast_copied_success: "URL copied to clipboard!",
    toast_copied_error: "Unable to copy URL automatically"
  }
};

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('pea_portal_lang') || 'th';
    this.translations = TRANSLATIONS;
  }

  init() {
    this.bindEvents();
    this.setLanguage(this.currentLang, false);
  }

  bindEvents() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const selectedLang = btn.getAttribute('data-lang');
        if (selectedLang && selectedLang !== this.currentLang) {
          this.setLanguage(selectedLang);
        }
      });
    });
  }

  setLanguage(lang, persist = true) {
    if (!this.translations[lang]) return;
    this.currentLang = lang;
    if (persist) {
      try {
        localStorage.setItem('pea_portal_lang', lang);
      } catch (e) {
        console.warn('LocalStorage unavailable', e);
      }
    }

    document.documentElement.lang = lang;

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isCurrent = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isCurrent);
      btn.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
    });

    const dict = this.translations[lang];

    // 1. Text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // 2. HTML elements
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // 3. Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.placeholder = dict[key];
      }
    });

    // 4. Titles / Tooltips
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) {
        el.title = dict[key];
      }
    });

    // 5. ARIA labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) {
        el.setAttribute('aria-label', dict[key]);
      }
    });

    // Notify listeners (e.g. clock & modal)
    window.dispatchEvent(new CustomEvent('portalLanguageChanged', { detail: { lang } }));
  }

  t(key) {
    return this.translations[this.currentLang]?.[key] || key;
  }

  getLanguage() {
    return this.currentLang;
  }
}

// Instantiate global instance
window.i18n = new I18nManager();
document.addEventListener('DOMContentLoaded', () => {
  window.i18n.init();
});
