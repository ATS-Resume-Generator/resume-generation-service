const mongoose = require('mongoose');
const resumeTemplates = require('../templates/resumeTemplates');

const templateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Template = mongoose.model('Template', templateSchema);

const createTemplate = async (templateData) => {
    const template = new Template(templateData);
    return await template.save();
};

const getTemplateById = async (id) => {
    return await Template.findById(id);
};

const getAllTemplates = async () => {
    return await Template.find();
};

const updateTemplate = async (id, templateData) => {
    return await Template.findByIdAndUpdate(id, templateData, { new: true });
};

const deleteTemplate = async (id) => {
    return await Template.findByIdAndDelete(id);
};

const loadDefaultTemplates = async () => {
    const existingTemplates = await Template.countDocuments();
    if (existingTemplates === 0) {
        await Template.insertMany(resumeTemplates);
    }
};

module.exports = {
    createTemplate,
    getTemplateById,
    getAllTemplates,
    updateTemplate,
    deleteTemplate,
    loadDefaultTemplates
};