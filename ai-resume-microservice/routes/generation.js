const express = require('express');
const router = express.Router();
const { generateResume, optimizeResume, customizeResume } = require('../services/resumeGenerator');
const { createTemplate, getTemplate, listTemplates } = require('../services/templateEngine');
const { validateResumeGeneration, validateResumeOptimization, validateTemplateCreation } = require('../middleware/validation');

// POST /generate - Generate tailored resume for specific job
router.post('/generate', validateResumeGeneration, async (req, res) => {
    try {
        const resume = await generateResume(req.body);
        res.status(200).json(resume);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST /optimize - Optimize resume for ATS compliance
router.post('/optimize', validateResumeOptimization, async (req, res) => {
    try {
        const optimizedResume = await optimizeResume(req.body);
        res.status(200).json(optimizedResume);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /templates - List available resume templates
router.get('/templates', async (req, res) => {
    try {
        const templates = await listTemplates();
        res.status(200).json(templates);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST /templates - Create custom resume template
router.post('/templates', validateTemplateCreation, async (req, res) => {
    try {
        const newTemplate = await createTemplate(req.body);
        res.status(201).json(newTemplate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /templates/:id - Get specific template
router.get('/templates/:id', async (req, res) => {
    try {
        const template = await getTemplate(req.params.id);
        if (!template) {
            return res.status(404).json({ error: 'Template not found' });
        }
        res.status(200).json(template);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST /customize - Customize resume sections for job requirements
router.post('/customize', async (req, res) => {
    try {
        const customizedResume = await customizeResume(req.body);
        res.status(200).json(customizedResume);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /health - Health check endpoint
router.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

module.exports = router;