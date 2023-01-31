// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  const licenseBadge = {
    ISC: '![License](https://img.shields.io/badge/License-ISC-blue.svg)',
    MIT: '![License](https://img.shields.io/badge/License-MIT-yellow.svg)',
    GNUGPLV3: '![License](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    Apache2: '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  }
  return licenseBadge[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    ISC: '[ISC](https://choosealicense.com/licenses/isc/)',
    MIT: '[MIT](https://choosealicense.com/licenses/mit/)',
    GNUGPLV3: '[GNUGPLV3](https://choosealicense.com/licenses/gpl-3.0/)',
    Apache2: '[Apache2](https://choosealicense.com/licenses/apache-2.0/)'
  }
  return licenseLinks[license]

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `Licensed under ${renderLicenseLink(license)} license`
  } else {
    return ''
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}

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

  If you have any questions please contact me:
  
  * Email: ${data.email}

  * GitHub: https://github.com/${data.username}

  `;
}
 module.exports = generateMarkdown;