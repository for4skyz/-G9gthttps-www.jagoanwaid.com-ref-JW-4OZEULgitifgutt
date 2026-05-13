// api/create-qris.js
const https = require('https');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')    return res.status(405).json({ error: 'Method not allowed' });

  // Parse body — Vercel kadang kirim sebagai string
  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch(e) { body = {}; } }
  if (!body) body = {};

  const { project, order_id, amount, api_key } = body;
  if (!project || !order_id || !amount || !api_key) {
    return res.status(400).json({ error: 'Missing fields', got: Object.keys(body) });
  }

  const payload = JSON.stringify({ project, order_id, amount: parseInt(amount), api_key });

  return new Promise((resolve) => {
    const options = {
      hostname: 'app.pakasir.com',
      path: '/api/transactioncreate/qris',
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) }
    };

    const reqHttp = https.request(options, (resp) => {
      let data = '';
      resp.on('data', chunk => data += chunk);
      resp.on('end', () => {
        try {
          const json = JSON.parse(data);
          res.status(resp.statusCode).json(json);
        } catch(e) {
          res.status(500).json({ error: 'Invalid JSON from Pakasir', raw: data.slice(0, 300) });
        }
        resolve();
      });
    });

    reqHttp.on('error', (e) => {
      res.status(500).json({ error: e.message });
      resolve();
    });

    reqHttp.write(payload);
    reqHttp.end();
  });
};
