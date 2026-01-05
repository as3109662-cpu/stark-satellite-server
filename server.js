const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// OpenSearch XML - Isse Chrome aapka engine pehchanega
app.get('/opensearch.xml', (req, res) => {
    res.set('Content-Type', 'application/opensearchdescription+xml');
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>Stark Search</ShortName>
  <Description>Stark Industries Satellite Search</Description>
  <InputEncoding>UTF-8</InputEncoding>
  <Url type="text/html" template="https://stark-satellite-server.onrender.com/search?q={searchTerms}"/>
</OpenSearchDescription>`);
});

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <link rel="search" type="application/opensearchdescription+xml" title="Stark Search" href="/opensearch.xml">
            <title>Stark Search Engine</title>
            <style>
                body { background: #000; color: #00ffcc; font-family: 'Courier New', monospace; text-align: center; padding: 50px; }
                .stark-header { font-size: 3em; color: #ff0000; text-shadow: 0 0 15px #ff0000; }
                input { width: 80%; padding: 15px; border: 2px solid #00ffcc; background: #111; color: #fff; border-radius: 25px; }
                button { margin-top: 20px; padding: 10px 30px; background: #ff0000; color: #fff; border: none; border-radius: 5px; cursor: pointer; }
            </style>
        </head>
        <body>
            <div class="stark-header">STARK SEARCH</div>
            <p>🛰️ STATUS: ALL GREEN</p>
            <form action="/search" method="GET">
                <input type="text" name="q" placeholder="Scan Global Database..." required>
                <br><button type="submit">INITIATE SEARCH</button>
            </form>
        </body>
        </html>
    `);
});

app.get('/search', (req, res) => {
    res.redirect('https://www.google.com/search?q=' + encodeURIComponent(req.query.q));
});

app.listen(port, () => { console.log('Stark Engine Online'); });
