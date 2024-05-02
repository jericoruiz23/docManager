import Document from "../models/Document";

export const createDocument = async (req, res) => {
    try {
        const { name, content, pageNumber, state, authorityName, documentType, dateVigency, dateDerog, dateReform } = req.body;
        const newDocument = new Document({ name, content, pageNumber, state, authorityName, documentType, dateVigency, dateDerog, dateReform });
        const documentSaved = await newDocument.save();
        res.status(201).json(documentSaved);
    } catch (error) {
        console.error("Error creating document:", error);
        res.status(500).json({ message: "Error creating document" });
    }
};


export const getDocuments = async (req, res) => {
    try {
        const documents = await Document.find();
        res.json(documents);
    } catch (error) {
        console.error("Error fetching documents:", error);
        res.status(500).json({ message: "Error fetching documents" });
    }
};

export const getDocumentsById = async (req, res) => {
    try {
        const document = await Document.findById(req.params.documentId);
        if (!document) {
            return res.status(404).json({ message: "Document not found" });
        }
        res.status(200).json(document);
    } catch (error) {
        console.error("Error fetching document by ID:", error);
        res.status(500).json({ message: "Error fetching document by ID" });
    }
};

export const updateDocumentById = async (req, res) => {
    try {
        const updatedDocument = await Document.findByIdAndUpdate(req.params.documentId, req.body, {
            new: true
        });
        if (!updatedDocument) {
            return res.status(404).json({ message: "Document not found" });
        }
        res.status(200).json(updatedDocument);
    } catch (error) {
        console.error("Error updating document by ID:", error);
        res.status(500).json({ message: "Error updating document by ID" });
    }
};

export const deleteDocumentById = async (req, res) => {
    try {
        const { documentId } = req.params;
        const deletedDocument = await Document.findByIdAndDelete(documentId);
        if (!deletedDocument) {
            return res.status(404).json({ message: "Document not found" });
        }
        res.status(200).json({ message: "Document deleted successfully" });
    } catch (error) {
        console.error("Error deleting document by ID:", error);
        res.status(500).json({ message: "Error deleting document by ID" });
    }
};
