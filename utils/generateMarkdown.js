// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

## Contributing

${data.contributing}

Contributions, issues and feature requests are welcome!

## Tests

${data.tests}

## Questions

If you have any questions feel free to contact me at ${data.email} or find me on <a href="https://github.com/${data.username}">GitHub</a>
`;
}

module.exports = generateMarkdown;