const resumeTemplates = [
    {
        id: 1,
        name: "Basic Template",
        sections: {
            summary: "Professional summary goes here.",
            experience: [
                {
                    jobTitle: "Job Title",
                    company: "Company Name",
                    startDate: "YYYY-MM",
                    endDate: "YYYY-MM",
                    responsibilities: "List of responsibilities and achievements."
                }
            ],
            education: [
                {
                    degree: "Degree",
                    institution: "Institution Name",
                    graduationYear: "YYYY"
                }
            ],
            skills: ["Skill 1", "Skill 2", "Skill 3"]
        }
    },
    {
        id: 2,
        name: "Modern Template",
        sections: {
            summary: "Dynamic and results-oriented professional.",
            experience: [
                {
                    jobTitle: "Senior Developer",
                    company: "Tech Company",
                    startDate: "2020-01",
                    endDate: "2023-01",
                    responsibilities: "Developed applications and led projects."
                }
            ],
            education: [
                {
                    degree: "Bachelor of Science in Computer Science",
                    institution: "University Name",
                    graduationYear: "2019"
                }
            ],
            skills: ["JavaScript", "Node.js", "React"]
        }
    },
    {
        id: 3,
        name: "Creative Template",
        sections: {
            summary: "Innovative thinker with a passion for design.",
            experience: [
                {
                    jobTitle: "Graphic Designer",
                    company: "Design Studio",
                    startDate: "2018-05",
                    endDate: "2020-12",
                    responsibilities: "Created visual concepts and designs."
                }
            ],
            education: [
                {
                    degree: "Bachelor of Arts in Graphic Design",
                    institution: "Art School",
                    graduationYear: "2018"
                }
            ],
            skills: ["Adobe Photoshop", "Illustrator", "Creativity"]
        }
    }
];

module.exports = resumeTemplates;