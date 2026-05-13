// api/test.js — buka /api/test di browser untuk cek apakah function jalan
module.exports = function handler(req, res) {
  res.status(200).json({
    ok: true,
    message: 'Vercel function berjalan normal',
    time: new Date().toISOString(),
    node: process.version,
  });
};
