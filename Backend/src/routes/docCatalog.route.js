import { Router } from "express";
import * as docCatalogController from '../controllers/docCatalog.controller'
import { authJwt } from "../middlewares";

const router = Router()

router.get('/getCatalog', docCatalogController.getDocuments);
router.post('/postCatalog',docCatalogController.createDocument)


export default router