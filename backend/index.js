const express = require('express');
const http = require('http');
const { Server } = require('ws');
const usbDetect = require('usb-detection');

const app = express();
const server = http.createServer(app);
const wss = new Server({ server });

// Start USB detection
usbDetect.startMonitoring();

// Serve the frontend
app.use(express.static('frontend/build'));

// WebSocket communication
wss.on('connection', (ws) => {
    console.log('Client connected');

    // Notify when a USB device is added
    usbDetect.on('add', (device) => {
        const timestamp = new Date().toLocaleString();
        const deviceInfo = {
            event: 'connected',
            timestamp,
            device: {
                productName: device.deviceName || 'Unknown Device',
                manufacturer: device.manufacturer || 'Unknown Manufacturer',
                serialNumber: device.serialNumber || 'N/A',
            },
        };
        ws.send(JSON.stringify(deviceInfo));
    });

    // Notify when a USB device is removed
    usbDetect.on('remove', (device) => {
        const timestamp = new Date().toLocaleString();
        const deviceInfo = {
            event: 'disconnected',
            timestamp,
            device: {
                productName: device.deviceName || 'Unknown Device',
            },
        };
        ws.send(JSON.stringify(deviceInfo));
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Start the server
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
