const atsOptimizationAlgorithms = {
    keywordMatch: (resume, jobDescription) => {
        const resumeKeywords = resume.skills.concat(resume.experience.map(exp => exp.keywords)).flat();
        const jobKeywords = jobDescription.split(' ').map(word => word.toLowerCase());
        const matchedKeywords = resumeKeywords.filter(keyword => jobKeywords.includes(keyword.toLowerCase()));
        return matchedKeywords.length / jobKeywords.length;
    },
    formatReorganization: (resume) => {
        // Example of reorganizing sections based on importance
        const sortedExperience = resume.experience.sort((a, b) => b.years - a.years);
        return {
            ...resume,
            experience: sortedExperience
        };
    },
    skillsHighlighting: (resume, jobDescription) => {
        const jobKeywords = jobDescription.split(' ').map(word => word.toLowerCase());
        return {
            ...resume,
            skills: resume.skills.map(skill => ({
                name: skill,
                highlighted: jobKeywords.includes(skill.toLowerCase())
            }))
        };
    }
};

const optimizeResumeForATS = (resume, jobDescription) => {
    let optimizedResume = atsOptimizationAlgorithms.formatReorganization(resume);
    optimizedResume = atsOptimizationAlgorithms.skillsHighlighting(optimizedResume, jobDescription);
    const score = atsOptimizationAlgorithms.keywordMatch(optimizedResume, jobDescription);
    return {
        optimizedResume,
        score
    };
};

module.exports = {
    optimizeResumeForATS
};