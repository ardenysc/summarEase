import Connection from './database/db.js';
import "./chatgpt/chatgpt.js";
import app from "./server.js";
import axios from 'axios';

const PORT = 8000;
const handleListening = () => {
    console.log(`🌟 Server listening on port http://localhost:${PORT}  🌟`);
}


app.listen(PORT, handleListening);
Connection();


  