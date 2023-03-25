import express, { Router } from 'express';

import { addNewSummary, getAllSummary, updateSummary, deleteSummary, updateKeyword } from '../controller/summary-controller.js';

const route = express.Router();

route.post('/summaries', addNewSummary)
route.get('/summaries', getAllSummary);
route.put('/summaries/:id', updateSummary);
route.delete('/summaries/:id', deleteSummary);
route.put('/summaries/:id/keyword', updateKeyword);

export default route;