const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Manifest file serve karna
app.get('/manifest.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'manifest.json'));
});

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="manifest" href="/manifest.json">
            <title>Stark Search Engine</title>
            <style>
                body { background: #000; color: #00ffcc; font-family: 'Courier New', monospace; text-align: center; margin: 0; padding: 50px 20px; }
                .stark-header { font-size: 3em; font-weight: bold; color: #ff0000; text-shadow: 0 0 15px #ff0000; }
                .status { color: #00ffcc; font-size: 0.9em; margin-bottom: 30px; }
                input { width: 90%; max-width: 500px; padding: 15px; border: 2px solid #00ffcc; background: rgba(0, 255, 204, 0.1); color: #fff; border-radius: 30px; outline: none; }
                button { margin-top: 20px; padding: 12px 30px; background: #ff0000; color: white; border: none; border-radius: 5px; font-weight: bold; cursor: pointer; }
            </style>
        </head>
        <body>
            <div class="stark-header">STARK SEARCH</div>
            <div class="status">🛰️ SATELLITE UPLINK: ACTIVE | ALL GREEN</div>
            <form action="https://www.google.com/search" method="GET">
                <input type="text" name="q" placeholder="Scanning Global Database..." required>
                <br><button type="submit">INITIATE SEARCH</button>
            </form>
            <div style="margin-top:40px; font-size:0.6em; color:#444;">SERVER ID: srv-d5djgkkhg0os73fa13pg</div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log('Stark Engine online on port ' + port);
});
