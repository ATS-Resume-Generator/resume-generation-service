module.exports = {
  formatDate: (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  },

  formatSkills: (skills) => {
    if (!Array.isArray(skills)) return '';
    return skills.map(skill => skill.trim()).filter(skill => skill).join(', ');
  },

  formatExperience: (experience) => {
    return experience.map(job => ({
      title: job.title,
      company: job.company,
      startDate: module.exports.formatDate(job.startDate),
      endDate: job.endDate ? module.exports.formatDate(job.endDate) : 'Present',
      description: job.description,
    }));
  },

  formatEducation: (education) => {
    return education.map(edu => ({
      degree: edu.degree,
      institution: edu.institution,
      graduationDate: module.exports.formatDate(edu.graduationDate),
    }));
  },

  formatSummary: (summary) => {
    return summary ? summary.trim() : '';
  },
};