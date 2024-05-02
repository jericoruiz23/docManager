import { Router } from "express";
import * as totaldocumentController from '../controllers/totalDocuments.controller'
import { authJwt } from "../middlewares";

const router = Router()
router.post('/uploadGCS', totaldocumentController.createDocumentGDC);
router.get('/get64PDF', totaldocumentController.getAllDocuments);

export default router