const Joi = require('joi');

const resumeSchema = Joi.object({
    jobTitle: Joi.string().required(),
    jobDescription: Joi.string().required(),
    skills: Joi.array().items(Joi.string()).required(),
    experience: Joi.array().items(Joi.object({
        company: Joi.string().required(),
        role: Joi.string().required(),
        startDate: Joi.date().iso().required(),
        endDate: Joi.date().iso().required(),
        description: Joi.string().required()
    })).required(),
    education: Joi.array().items(Joi.object({
        institution: Joi.string().required(),
        degree: Joi.string().required(),
        startDate: Joi.date().iso().required(),
        endDate: Joi.date().iso().required()
    })).required(),
    summary: Joi.string().optional()
});

const templateSchema = Joi.object({
    name: Joi.string().required(),
    sections: Joi.array().items(Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required()
    })).required()
});

const validateResume = (req, res, next) => {
    const { error } = resumeSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

const validateTemplate = (req, res, next) => {
    const { error } = templateSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

module.exports = {
    validateResume,
    validateTemplate
};