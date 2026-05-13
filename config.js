/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║               PteroFs — Konfigurasi Utama                   ║
 * ║   Edit file ini saja, berlaku untuk semua halaman!          ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const CONFIG = {

  // ─────────────────────────────────────────────────────────────
  // 💳 PAKASIR — Payment Gateway
  // Dashboard: https://app.pakasir.com
  // Ambil Slug & API Key dari halaman detail Proyek kamu
  // ─────────────────────────────────────────────────────────────
  PAKASIR_PROJECT  : 'SLUG_PROYEK_PAKASIR',
  PAKASIR_API_KEY  : 'ISI_API_KEY_PAKASIR_KAMU',

  // BASE_QRIS: static QRIS kamu dari DANA/GoPay/dll
  // Cara dapat: buka DANA > Terima > scan QR dengan decoder (zxing.org) > copy string
  // Sistem otomatis ubah jadi QRIS dinamis sesuai nominal pembayaran
  BASE_QRIS        : '000201010211GANTI_DENGAN_STATIC_QRIS_KAMU6304XXXX',

  // ─────────────────────────────────────────────────────────────
  // 🦕 PTERODACTYL APPLICATION API  (PTLA)
  // Admin Panel → Account → API Credentials → Create API Key
  // ─────────────────────────────────────────────────────────────
  PTLA     : 'https://panel.domainmu.com',   // URL panel admin (tanpa trailing slash)
  PTLA_KEY : 'ISI_APPLICATION_API_KEY',      // Application API Key

  // URL panel yang diberikan ke pembeli untuk login
  PTLC     : 'https://panel.domainmu.com',   // Biasanya sama dengan PTLA

  // ─────────────────────────────────────────────────────────────
  // ⚙️  RESOURCE — Nest, Egg, Location, Node
  // Cek ID di Admin Panel Pterodactyl kamu
  // ─────────────────────────────────────────────────────────────
  NEST_ID     : 1,   // Admin → Nests → ID nest
  EGG_ID      : 15,  // Admin → Nests → {Nest} → Eggs → ID egg
  LOCATION_ID : 1,   // Admin → Locations → ID lokasi
  NODE_ID     : 1,   // Admin → Nodes → ID node

  DOCKER_IMAGE    : 'ghcr.io/pterodactyl/yolks:nodejs_20',
  STARTUP_CMD     : 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${INSTALL_PACKAGES} ]]; then npm install ${INSTALL_PACKAGES}; fi; if [[ -f package.json ]]; then npm start; else node {{MAIN_FILE}}; fi',
  EGG_ENVIRONMENT : { MAIN_FILE: 'index.js', AUTO_UPDATE: '0', INSTALL_PACKAGES: '' },

  // ─────────────────────────────────────────────────────────────
  // 📧 EMAILJS — Kirim Kredensial ke Email Pembeli
  // Daftar di https://emailjs.com
  // Create Service → Create Template → ambil ID-nya
  //
  // Variable yang tersedia di template EmailJS:
  //   {{to_name}}        - username pembeli
  //   {{to_email}}       - email pembeli
  //   {{panel_url}}      - URL panel login
  //   {{panel_email}}    - email login panel
  //   {{panel_password}} - password yang digenerate
  //   {{paket}}          - nama paket (RAM1, RAM2, dll)
  //   {{order_id}}       - ID transaksi
  //   {{ram}}            - RAM yang didapat
  //   {{disk}}           - Disk yang didapat
  //   {{cpu}}            - CPU yang didapat
  // ─────────────────────────────────────────────────────────────
  EMAILJS_SERVICE_ID  : 'ISI_SERVICE_ID',
  EMAILJS_TEMPLATE_ID : 'ISI_TEMPLATE_ID',
  EMAILJS_PUBLIC_KEY  : 'ISI_PUBLIC_KEY',

  // ─────────────────────────────────────────────────────────────
  // 📦 SOURCE CODE — Untuk halaman /source
  // Ganti dengan link download ZIP source code kamu
  // Bisa pakai Google Drive (pastikan link direct download),
  // GitHub Release, atau hosting file lainnya
  // ─────────────────────────────────────────────────────────────
  SOURCE_PRICE    : 200000,
  SOURCE_DOWNLOAD : 'https://github.com/kamu/pterofs/archive/refs/heads/main.zip',

};
