const inquirer = require('inquirer');
const licenseArray = ["Apache", "Eclipse Marketplace", "APM", "ORE","MIT", "EPL-2.0", "NPM", "None"]

// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license===licenseArray[0]) {
        return "[![License](https://https://img.shields.io/dub/l/Apache-2.0?style=flat-square)]"
    }
    else if (license===licenseArray[1]) {
        return "[![License](https://img.shields.io/eclipse-marketplace/l/notepad4e?style=flat-square)]"
    }
    else if (license===licenseArray[2]) {
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]"
    }
    else if (license===licenseArray[3]) {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]"
    }
    else if (license===licenseArray[4]) {
        return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)]"
    }
    else if (license===licenseArray[5]) {
        return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]"
        
    }
    else if (license===licenseArray[6]) {
        return "[![License](https://unlicense.org)]"
}
// If there is no license, return an empty string
else {
    return ""
    }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
    if (license===licenseArray[0]) {
        return `https://www.apache.org/licenses/LICENSE-2.0`
    }
    else if (license===licenseArray[1]) {
        return `https://www.gnu.org/licenses/gpl-3.0.en.html`
    }
    else if (license===licenseArray[2]) {
        return `https://opensource.org/licenses/BSD-3-Clause`
    }
    else if (license===licenseArray[3]) {
        return `https://opensource.org/licenses/BSL-1.0`
    }
    else if (license===licenseArray[4]) {
        return `https://www.eclipse.org/legal/epl-2.0/`
    }
    else if (license===licenseArray[5]) {
        `https://www-40.ibm.com/software/sla/sladb.nsf`
    }
    else if (license===licenseArray[6]) {
        return `https://unlicense.org`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license===licenseArray[0]) {
        return `Get More Information ${licenseArray[0]} here`
    }
    else if (license===licenseArray[1]) {
        return `Get More Information ${licenseArray[1]} here`
    }
    else if (license===licenseArray[2]) {
        return `Get More Information ${licenseArray[2]} here`
    }
    else if (license===licenseArray[3]) {
        return `Get More Information ${licenseArray[3]} here`
    }
    else if (license===licenseArray[4]) {
        return `Get More Information ${licenseArray[4]} here`
    }
    else if (license===licenseArray[5]) {
        return `Get More Information ${licenseArray[5]} here`
    }
    else if (license===licenseArray[6]) {
        return `Get More Information ${licenseArray[6]} here`
    }
      // If there is no license, return an empty string
      else {
        return ""
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ##Badges
  ${renderLicenseBadge(data.license)}

  ##Table of Contents
  * [License](#license)
  * [Title](#projectTitle)
  * [Description](#projectDescription)
  * [Installation](#projectInstallation)
  * [Usage](#usage)
  * [Description](#description)
  * [Features](#projectFeatures)
  * [Contribution](#projectContributions)
  * [Credits](#credits)
  * [Contact](#projectContact)
  * [Repo Name](#projectRepo)
  
  ##License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
  ##Title
  ${data.projectTitle}

  ##Project Description
  ${data.projectDescription}

  ##Installation
  ${data.projectInstallation}

  ##Usage
  ${data.usage}

  ##Description
  ${data.description}

  ##Features
  ${data.projectFeatures}

  ##Contribution
  ${data.projectContributions}

  ##Credits
  ${data.credits}
  
  ##Contact
  ${data.projectContact}

  ##Repo Name
  ${data.projectRepo}`;


}

module.exports = generateMarkdown;