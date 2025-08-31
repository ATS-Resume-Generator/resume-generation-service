const puppeteer = require('puppeteer');

async function generatePDF(resumeData, outputPath) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Create HTML content for the resume
    const htmlContent = `
        <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; }
                    h1 { color: #333; }
                    .section { margin-bottom: 20px; }
                </style>
            </head>
            <body>
                <h1>${resumeData.name}</h1>
                <div class="section">
                    <h2>Professional Summary</h2>
                    <p>${resumeData.summary}</p>
                </div>
                <div class="section">
                    <h2>Experience</h2>
                    ${resumeData.experience.map(job => `
                        <div>
                            <h3>${job.title} at ${job.company}</h3>
                            <p>${job.description}</p>
                        </div>
                    `).join('')}
                </div>
                <div class="section">
                    <h2>Education</h2>
                    ${resumeData.education.map(edu => `
                        <div>
                            <h3>${edu.degree} from ${edu.institution}</h3>
                            <p>${edu.year}</p>
                        </div>
                    `).join('')}
                </div>
                <div class="section">
                    <h2>Skills</h2>
                    <p>${resumeData.skills.join(', ')}</p>
                </div>
            </body>
        </html>
    `;

    await page.setContent(htmlContent);
    await page.pdf({ path: outputPath, format: 'A4' });

    await browser.close();
}

module.exports = {
    generatePDF,
};