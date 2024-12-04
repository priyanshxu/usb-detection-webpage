Here's a sample `README.md` file for your USB detection webpage project:

---

# USB Detection Webpage

This is a simple web application built using the MERN stack (MongoDB, Express, React, Node.js) that detects when a USB drive is connected or disconnected from the system. The webpage logs the connection and disconnection events and displays the device details, such as the device name, manufacturer, and serial number (if available), along with timestamps.

---

## Features

- **USB Detection**: Automatically detects when a USB drive is plugged in or removed.
- **Real-Time Updates**: Device connection/disconnection status is shown dynamically on the webpage.
- **Event Logging**: Logs connection/disconnection events with timestamps.
- **Manual Refresh**: A button is provided to manually refresh the status.
- **Minimalistic UI**: The application uses a midnight green and off-white theme for an elegant, clean design.

---

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Real-time Communication**: WebSocket
- **Frontend Styling**: CSS, Material UI
- **USB Detection**: USB device detection through the browser (using the WebUSB API or a similar approach).
- **WebSocket Server**: To facilitate real-time communication between frontend and backend.

---

## Installation & Setup

### Prerequisites
Make sure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Git

### Steps

1. Clone the repository

   ```bash
   git clone https://github.com/priyanhsxu/usb-detection-webpage.git
   ```

2. Navigate to the project directory

   ```bash
   cd usb-detection-webpage
   ```

3. Install Dependencies for the Backend

   Navigate to the `backend` folder and install the required dependencies:

   ```bash
   cd backend
   npm install
   ```

4. Install Dependencies for the Frontend

   Navigate to the `frontend` folder and install the required dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

5. Start the Backend Server

   From the `backend` folder, run the server:

   ```bash
   npm start
   ```

   This will start the backend server on `http://localhost:5000`.

6. Start the Frontend Server

   From the `frontend` folder, run the React development server:

   ```bash
   npm start
   ```

   The frontend will be accessible on `http://localhost:3000`.

7. Open the Webpage

   Open your browser and navigate to `http://localhost:3000` to see the USB detection webpage in action.

---

## Usage

- USB Detection: When you plug in a USB device, the webpage will display details about the device such as its name, manufacturer, and serial number (if available), along with the connection time.
- Manual Refresh: Use the "Refresh" button to refresh the device list and status.
- Event Logging: All connection and disconnection events are logged with timestamps, and can be viewed on the webpage.

---

## Security Considerations

- The webpage only works on `localhost` or `https://` due to browser security restrictions around USB device access.
- You will be prompted to grant permissions before the webpage can access USB devices.
