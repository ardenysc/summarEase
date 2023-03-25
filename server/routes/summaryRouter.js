import express, { Router } from 'express';

import { searchSummary, addNewSummary, getAllSummary, updateSummary, deleteSummary, updateKeyword } from '../controller/summary-controller.js';

const summaryRouter = express.Router();

summaryRouter.post('/', addNewSummary);
summaryRouter.get('/', getAllSummary);
summaryRouter.put('/:id', updateSummary);
summaryRouter.put('/:id/keyword', updateKeyword);
summaryRouter.delete('/:id', deleteSummary);
summaryRouter.get('/search/:searchTerm', searchSummary);



export default summaryRouter;