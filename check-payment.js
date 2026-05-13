// api/check-payment.js
const https = require('https');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET')     return res.status(405).json({ error: 'Method not allowed' });

  const { project, order_id, amount, api_key } = req.query || {};
  if (!project || !order_id || !amount || !api_key) {
    return res.status(400).json({ error: 'Missing fields', got: Object.keys(req.query || {}) });
  }

  const path = '/api/transactiondetail'
    + '?project='   + encodeURIComponent(project)
    + '&amount='    + amount
    + '&order_id='  + encodeURIComponent(order_id)
    + '&api_key='   + encodeURIComponent(api_key);

  return new Promise((resolve) => {
    const options = { hostname: 'app.pakasir.com', path, method: 'GET' };

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

    reqHttp.end();
  });
};
