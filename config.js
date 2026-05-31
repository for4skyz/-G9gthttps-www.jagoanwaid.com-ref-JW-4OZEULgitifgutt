/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║               PteroFs — Konfigurasi Utama                   ║
 * ║   Edit file ini saja, berlaku untuk semua halaman!          ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const CONFIG = {

  // ─────────────────────────────────────────────────────────────
  // 💳 NDy GATEWAY — Payment Gateway
  // Dashboard : https://gateway.ndyofficial.biz.id/dashboard
  // API Key   : https://gateway.ndyofficial.biz.id/profile
  //
  // Endpoint yang dipakai:
  //   Buat Invoice : GET /api/v1/invoice?apikey={api_key}&amount={nominal}
  //   Cek Status   : GET /api/v1/invoice/status?apikey={api_key}&invoice_id={id}
  // ─────────────────────────────────────────────────────────────
  NDY_API_KEY  : 'ndy_7b36b7da',
  NDY_BASE_URL : 'https://gateway.ndyofficial.biz.id',

  // ─────────────────────────────────────────────────────────────
  // 🦕 PTERODACTYL APPLICATION API
  // Admin Panel → Account → API Credentials → Create API Key
  // ─────────────────────────────────────────────────────────────
  PTLA     : 'https://panel.domainmu.com',   // URL panel admin (tanpa trailing slash)
  PTLA_KEY : 'ISI_APPLICATION_API_KEY',      // Application API Key
  PTLC     : 'https://panel.domainmu.com',   // URL panel untuk pembeli login

  // ─────────────────────────────────────────────────────────────
  // ⚙️  RESOURCE — Nest, Egg, Location, Node
  // ─────────────────────────────────────────────────────────────
  NEST_ID     : 1,
  EGG_ID      : 15,
  LOCATION_ID : 1,
  NODE_ID     : 1,

  DOCKER_IMAGE    : 'ghcr.io/pterodactyl/yolks:nodejs_20',
  STARTUP_CMD     : 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${INSTALL_PACKAGES} ]]; then npm install ${INSTALL_PACKAGES}; fi; if [[ -f package.json ]]; then npm start; else node {{MAIN_FILE}}; fi',
  EGG_ENVIRONMENT : { MAIN_FILE: 'index.js', AUTO_UPDATE: '0', INSTALL_PACKAGES: '' },

  // ─────────────────────────────────────────────────────────────
  // 📧 EMAILJS — Kirim Kredensial ke Email Pembeli
  // Daftar di https://emailjs.com
  // ─────────────────────────────────────────────────────────────
  EMAILJS_SERVICE_ID  : 'ISI_SERVICE_ID',
  EMAILJS_TEMPLATE_ID : 'ISI_TEMPLATE_ID',
  EMAILJS_PUBLIC_KEY  : 'ISI_PUBLIC_KEY',

  // ─────────────────────────────────────────────────────────────
  // 📦 SOURCE CODE — Untuk halaman /buy
  // Link download ZIP source code kamu
  // ─────────────────────────────────────────────────────────────
  SOURCE_PRICE    : 200000,
  SOURCE_DOWNLOAD : 'https://github.com/kamu/pterofs/archive/refs/heads/main.zip',

};
