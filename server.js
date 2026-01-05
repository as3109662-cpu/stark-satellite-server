const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Stark Search Engine</title>
                <style>
                    body { background: #000; color: #00ffcc; font-family: 'Courier New', monospace; text-align: center; padding-top: 50px; }
                    .stark-logo { font-size: 3em; font-weight: bold; color: #ff0000; text-shadow: 0 0 10px #ff0000; }
                    input { padding: 10px; width: 60%; border: 1px solid #00ffcc; background: #111; color: #fff; border-radius: 5px; }
                    button { padding: 10px 20px; background: #ff0000; color: #fff; border: none; cursor: pointer; border-radius: 5px; font-weight: bold; }
                    .status { margin-top: 20px; font-size: 0.8em; color: #888; }
                </style>
            </head>
            <body>
                <div class="stark-logo">STARK SEARCH</div>
                <p>🛰️ Satellite Uplink: ACTIVE</p>
                <form action="https://www.google.com/search" method="GET">
                    <input type="text" name="q" placeholder="Enter coordinates or search term...">
                    <button type="submit">SEARCH</button>
                </form>
                <div class="status">Server ID: srv-d5djgkkhg0os73fa13pg | Region: Virginia (US East)</div>
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log('Stark Engine running on port ' + port);
});
