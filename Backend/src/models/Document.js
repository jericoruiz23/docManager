import { Schema, model } from "mongoose";

const documentSchema = new Schema({
    name: { type: String, required: true },
    content: { type: String, required: true },
    pageNumber: { type: Number, required: true },
    authorityName: { type: String, required: true },
    dateVigency: { type: Date, required: true },
    documentType :{type: String, required: true},
    dateDerog: { type: Date },
    dateReform: { type: Date},
    state: { type: Boolean, required: true },



}, {
    timestamps: true,
    versionKey: false

})
export default model('Document', documentSchema)