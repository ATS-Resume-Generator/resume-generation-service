const mongoose = require('mongoose');

const generatedResumeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    jobTitle: {
        type: String,
        required: true
    },
    content: {
        type: Object,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    score: {
        type: Number,
        default: 0
    },
    format: {
        type: String,
        enum: ['PDF', 'DOCX', 'HTML'],
        required: true
    }
});

generatedResumeSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const GeneratedResume = mongoose.model('GeneratedResume', generatedResumeSchema);

module.exports = GeneratedResume;