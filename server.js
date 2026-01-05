const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Stark Search Engine</title>
            <style>
                body { background: #000; color: #00ffcc; font-family: 'Courier New', monospace; text-align: center; margin: 0; padding: 50px 20px; }
                .stark-header { font-size: 3.5em; font-weight: bold; color: #ff0000; text-shadow: 0 0 15px #ff0000; margin-bottom: 10px; }
                .orbit-status { color: #00ffcc; font-size: 1em; margin-bottom: 30px; letter-spacing: 2px; }
                .search-box { position: relative; max-width: 600px; margin: 0 auto; }
                input[type="text"] { width: 100%; padding: 15px 20px; font-size: 1.2em; border: 2px solid #00ffcc; background: rgba(0, 255, 204, 0.1); color: #fff; border-radius: 30px; outline: none; transition: 0.3s; }
                input[type="text"]:focus { box-shadow: 0 0 20px #00ffcc; }
                button { margin-top: 20px; padding: 12px 30px; background: #ff0000; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 1em; font-weight: bold; }
                button:hover { background: #cc0000; transform: scale(1.05); }
                .footer { margin-top: 50px; font-size: 0.7em; color: #444; }
            </style>
        </head>
        <body>
            <div class="stark-header">STARK SEARCH</div>
            <div class="orbit-status">🛰️ SATELLITE UPLINK: STARK-SAT-01 | STATUS: ALL GREEN</div>
            
            <div class="search-box">
                <form action="https://www.google.com/search" method="GET">
                    <input type="text" name="q" placeholder="Scanning global database..." autocomplete="off">
                    <br>
                    <button type="submit">INITIATE SEARCH</button>
                </form>
            </div>

            <div class="footer">
                SECURE SERVER ID: srv-d5djgkkhg0os73fa13pg | PROPERTY OF STARK INDUSTRIES
            </div>
        </body>
        </html>
    `);
});

// Telemetry API for health checks
app.get('/api/telemetry', (req, res) => {
    res.json({
        id: "STARK-SAT-01",
        orbit: "Low Earth Orbit",
        last_ping: new Date().toISOString(),
        systems: "All Green"
    });
});

app.listen(port, () => {
    console.log('Stark Engine online on port ' + port);
});
