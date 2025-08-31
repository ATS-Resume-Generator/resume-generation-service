const { HfInference } = require('@huggingface/inference');
const mongoose = require('mongoose');
const GeneratedResume = require('../models/GeneratedResume');
const { formatResume } = require('../utils/formatters');

const hf = new HfInference(process.env.HUGGING_FACE_API_KEY);

async function generateResume(jobRequirements) {
    try {
        const response = await hf.textGeneration({
            model: 'your-model-name', // Replace with the actual model name
            inputs: jobRequirements,
        });

        const tailoredResume = formatResume(response.generated_text);
        const newResume = new GeneratedResume({ content: tailoredResume, jobRequirements });

        await newResume.save();
        return newResume;
    } catch (error) {
        console.error('Error generating resume:', error);
        throw new Error('Failed to generate resume');
    }
}

module.exports = {
    generateResume,
};