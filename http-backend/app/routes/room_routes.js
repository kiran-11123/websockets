import express from 'express'
import Authentication_token from '../middlewares/Authentication_token.js';
const Room_Router = express.Router();


import { CreateRoomController , DeleteRoomController } from '../controllers/Room_Controller.js';

Room_Router.post("/create-room" , Authentication_token , CreateRoomController);
Room_Router.post("/delete-room" , Authentication_token , DeleteRoomController);



export default Room_Router;