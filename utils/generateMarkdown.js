// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderBadge(data.license)}

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

${renderSection(data.license)}

## Contributing

${data.contributing}

Contributions, issues and feature requests are welcome!

## Tests

${data.tests}

## Questions

If you have any questions feel free to contact me at ${data.email} or find me on <a href="https://github.com/${data.username}">GitHub</a>
`;
}

// Function to render badge
function renderBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  } else { 
  }
}

// Function to render section
function renderSection(license) {
  if (license !== "None") {
    return (`Copyright © ${license}. All rights reserved.
Licensed under the ${license} license.`
    )
  }
}

module.exports = generateMarkdown;