// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
    Apache2: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]',
    GNUGPLV3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]',
    IBM: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]',
  }
  return licenseBadge[license]

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: '(https://opensource.org/licenses/MIT)',
    Apache2: '(https://opensource.org/licenses/Apache-2.0)',
    GNUGPLV3: '(https://www.gnu.org/licenses/gpl-3.0)',
    ISC: '(https://opensource.org/licenses/ISC)',
    IBM: '(https://opensource.org/licenses/IPL-1.0)',
  }
  return licenseLinks[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `Licensed under the ${renderLicenseLink(license)} license`
  } else {
    return ''
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${renderLicenseBadge(data.license)}
  
  #${data.title}

  ## Content 
  - [Description](#description)
  - [Installation](#install)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributor)
  - [Tests](#test)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage 
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributor}

  ## Tests
  ${data.test}

  ## Questions
  
  Email: ${data.email}

  GitHub Username: ${data.github}

  GitHub Profile: ${data.link}

`;
};

module.exports = generateMarkdown;
