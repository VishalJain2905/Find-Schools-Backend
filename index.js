import dotenv from 'dotenv';
dotenv.config(); // Load environment variables at the start

import http from 'http';
import { Server } from 'socket.io';
import connectDB from './db.js';
import app from './app.js';


const server = http.createServer(app);
const io = new Server(server);

connectDB();


const PORT = process.env.PORT || 6000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
});

process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
});
