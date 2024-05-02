import { Schema, model } from "mongoose";

const totalDocumentSchema = new Schema({
    name: { type: String, required: true },
    pdfBase64: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false
});

export default model('TotalDocuments', totalDocumentSchema);
