
# SendAnywhere Clone

SendAnywhere Clone is a web application that allows users to seamlessly share files between devices using unique, one-time-use codes, ensuring privacy and convenience.

---

## Features
- **Secure File Transfer**: Files are shared using unique codes for each transfer.
- **Cross-Platform Compatibility**: Share files between any devices with a web browser.
- **Real-Time File Sharing**: Instant file sharing without the need for registration or login.
- **Multi-File Support**: Upload and transfer multiple files simultaneously.

---

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js

---

## Prerequisites
Ensure you have the following installed:
- Node.js
- npm or Yarn

---

## Getting Started

### 1. Clone the Repositories
#### Backend Repository:
```bash
git clone https://github.com/vickydecodes/sendanywhere_backend.git
```
#### Frontend Repository:
```bash
git clone https://github.com/vickydecodess/sendanywhere_frontend.git
```

### 2. Install Dependencies
Navigate to each project directory and run:
#### For Backend:
```bash
cd sendanywhere-backend
npm install
```
#### For Frontend:
```bash
cd sendanywhere-frontend
npm install
```

### 3. Environment Variables
#### For Backend:
Create a `.env` file in the `sendanywhere-backend` directory and configure the following:
```env
PORT=5000
```

### 4. Start the Application
#### Backend:
Navigate to the backend directory and run:
```bash
npm start
```
#### Frontend:
Navigate to the frontend directory and run:
```bash
npm start
```

---

## Usage
1. Open the application in a web browser.
2. Upload the files you want to share.
3. The files are uploaded to the server.
4. Share the generated unique code with the recipient.
5. The recipient enters the code to download the files from server.

---

## Project Structure

### Backend Repository:
```
backend
├── uploads
├── app.js
└── .env
```

### Frontend Repository:
```
frontend
├── src
│   ├── app
│   ├── context
│   ├── assets
│   ├── pages
│   └── utils
├── public
└── package.json
```

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments
Inspired by the original **SendAnywhere** application for seamless file sharing.


