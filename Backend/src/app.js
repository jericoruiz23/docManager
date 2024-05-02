import express from "express";
import morgan from 'morgan'
import cors from 'cors';
import bodyParser from 'body-parser';
import pkg from '../package.json'
import documentsRoutes from './routes/documents.routes'
import authRoutes from './routes/auth.routes'
import { createRoles } from "./libs/intialSetup";
import userRoutes from "./routes/user.routes"
import docCatalogRoutes from "./routes/docCatalog.route"
import totalDocumentsRoutes from "./routes/totalDocuments.routes"


const app = express()
createRoles()

app.set('pkg', pkg)
app.use(express.json({ limit: '100mb' }));
app.use(cors()); // Permite todas las solicitudes CORS
app.use(morgan('dev'))
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/api/documents', documentsRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/catalog',docCatalogRoutes)
app.use('/api/upload', totalDocumentsRoutes)

export default app
