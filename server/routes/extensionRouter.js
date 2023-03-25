import express, { Router } from 'express';

import { handleAdd } from '../controller/gpt-controller.js';

const extensionRouter = express.Router();

extensionRouter.post('/', handleAdd);



export default extensionRouter;