import TotalDocuments from "../models/TotalDocument";


export const createDocumentGDC = async (req, res) => {
  try {
    const { name, pdfBase64 } = req.body;
    const newDocument = new TotalDocuments({ name, pdfBase64 });
    const documentSaved = await newDocument.save();
    res.status(201).json(documentSaved);
  } catch (error) {
    console.error('Error al guardar el documento:', error);
    res.status(500).json({ error: 'Error al guardar el documento' });
  }
};


export const getAllDocuments = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    const documents = await TotalDocuments.find().skip(skip).limit(limit);
    res.json(documents);
  } catch (error) {
    console.error('Error al obtener los documentos:', error);
    res.status(500).json({ error: 'Error al obtener los documentos' });
  }
};