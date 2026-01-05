const express = require('express');
const app = express();
const PORT = 9090;

// Satellite Data Storage (Memory)
let satelliteStatus = {
    id: "STARK-SAT-01",
    orbit: "Low Earth Orbit",
    last_ping: new Date().toISOString(),
    systems: "All Green"
};

// API Endpoint: Satellite ka data lene ke liye
app.get('/api/telemetry', (req, res) => {
    satelliteStatus.last_ping = new Date().toISOString();
    res.json(satelliteStatus);
});

// Server Start
app.listen(PORT, () => {
    console.log('------------------------------------------');
    console.log('STARK INDUSTRIES SATELLITE SERVER ONLINE');
    console.log('Port: ' + PORT);
    console.log('Status: Monitoring Orbital Uplink...');
    console.log('------------------------------------------');
});
