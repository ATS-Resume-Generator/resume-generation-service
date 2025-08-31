# AI-Powered Resume Microservice

This project is a Node.js microservice for generating AI-powered resumes tailored to specific job requirements. It includes features for optimizing resumes for ATS compliance, managing resume templates, and generating multiple output formats.

## Table of Contents

- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ai-resume-microservice.git
   cd ai-resume-microservice
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   HUGGINGFACE_API_KEY=your_huggingface_api_key
   ```

4. Start the server:
   ```
   npm start
   ```

## API Endpoints

### POST /generate
Generate a tailored resume for a specific job.

**Request Body:**
```json
{
  "jobTitle": "Software Engineer",
  "jobDescription": "Job description here...",
  "userData": {
    "name": "John Doe",
    "experience": [...],
    "skills": [...]
  }
}
```

### POST /optimize
Optimize a resume for ATS compliance.

**Request Body:**
```json
{
  "resume": "Resume content here..."
}
```

### GET /templates
List available resume templates.

### POST /templates
Create a custom resume template.

**Request Body:**
```json
{
  "templateName": "Custom Template",
  "templateContent": "Template content here..."
}
```

### GET /templates/:id
Get a specific template by ID.

### POST /customize
Customize resume sections for job requirements.

**Request Body:**
```json
{
  "resumeId": "12345",
  "customizations": {
    "summary": "Updated professional summary...",
    "experience": [...]
  }
}
```

### GET /health
Health check endpoint to verify the service is running.

## Usage

You can use tools like Postman or cURL to interact with the API endpoints. Make sure to set the appropriate headers, especially for JSON content.

## License

This project is licensed under the MIT License.