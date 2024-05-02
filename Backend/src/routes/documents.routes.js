import { Router } from "express";
import * as documentController from '../controllers/document.controller'
import { authJwt } from "../middlewares";


const router = Router()
router.post('/',[authJwt.verifyToken,authJwt.isAdmin],documentController.createDocument)
router.get('/',documentController.getDocuments)
router.get('/:documentId',documentController.getDocumentsById)
router.put('/:documentId',[authJwt.verifyToken,authJwt.isAdmin],documentController.updateDocumentById)
router.delete('/:documentId',[authJwt.verifyToken,authJwt.isAdmin],documentController.deleteDocumentById)


export default router