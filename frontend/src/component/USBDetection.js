import React, { useEffect, useState } from 'react';
import './USBDetection.css';

const USBDetection = () => {
    const [events, setEvents] = useState([]);
    const [manualRefreshMessage, setManualRefreshMessage] = useState('');

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:5000');

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setEvents((prevEvents) => [data, ...prevEvents]);
        };

        socket.onclose = () => {
            console.error('WebSocket connection closed.');
        };

        return () => socket.close();
    }, []);

    const handleRefresh = () => {
        setEvents([]); // Clear the event list for simplicity
        setManualRefreshMessage('Events refreshed. Waiting for new USB activity...');
        setTimeout(() => setManualRefreshMessage(''), 3000); // Clear the message after 3 seconds
    };

    return (
        <div className="usb-detection">
            <h1>USB Event Logger</h1>
            <button className="refresh-button" onClick={handleRefresh}>
                Refresh Events
            </button>
            {manualRefreshMessage && <p className="refresh-message">{manualRefreshMessage}</p>}
            <div className="event-list">
                {events.length > 0 ? (
                    events.map((event, index) => (
                        <div key={index} className={`event ${event.event}`}>
                            <p>
                                <strong>{event.event === 'connected' ? 'Connected' : 'Disconnected'}</strong> at {event.timestamp}
                            </p>
                            {event.event === 'connected' && (
                                <ul>
                                    <li><strong>Product Name:</strong> {event.device.productName}</li>
                                    <li><strong>Manufacturer:</strong> {event.device.manufacturer}</li>
                                    <li><strong>Serial Number:</strong> {event.device.serialNumber}</li>
                                </ul>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No USB events detected yet.</p>
                )}
            </div>
        </div>
    );
};

export default USBDetection;
