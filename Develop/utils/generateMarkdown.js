//license array
const licenseArray = ["Apache", "Eclipse Marketplace", "APM", "GNU","IBM", "Mozilla", "Perl", "None"]

//functions that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license===licenseArray[0]) {
        return "[![License: Apache 2.0](https://img.shields.io/aur/license/android-studio?style=flat-square)]"
    }
    else if (license===licenseArray[1]) {
        return "[![License: Eclipse Marketplace](https://img.shields.io/eclipse-marketplace/l/notepad4e?style=flat-square)]"
    }
    else if (license===licenseArray[2]) {
        return "[![License: APM](https://img.shields.io/apm/l/vim-mode?style=for-the-badge)]"
    }
    else if (license===licenseArray[3]) {
        return "[![License: GNU](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]"
    }
    else if (license===licenseArray[4]) {
        return "[![License: IPL 1.0 IBM](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]"
    }
    else if (license===licenseArray[5]) {
        return "[![License: MPL 2.0 Mozilla](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]"
    }
    else if (license===licenseArray[6]) {
        return "[![License: Artistic-2.0 Perl](https://img.shields.io/badge/License-Perl-0298c3.svg)]"
    }
    else if (license===licenseArray[7]) {
        return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
}
// If there is no license, return an empty string
else {
    return ""
    }
}

// functions that returns the license link
function renderLicenseLink(license) {
    if (license===licenseArray[0]) {
        return `https://www.apache.org/licenses/LICENSE-2.0`
    }
    else if (license===licenseArray[1]) {
        return `https://marketplace.eclipse.org/content/marketplace-client-content-inclusion-policy`
    }
    else if (license===licenseArray[2]) {
        return `https://docs.appdynamics.com/appd/22.x/latest/en/appdynamics-licensing/license-entitlements-and-restrictions`
    }
    else if (license===licenseArray[3]) {
        return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
    }
    else if (license===licenseArray[4]) {
        return `https://opensource.org/licenses/IPL-1.0`
    }
    else if (license===licenseArray[5]) {
        `https://opensource.org/licenses/MPL-2.0`
    }
    else if (license===licenseArray[6]) {
        `https://opensource.org/licenses/Artistic-2.0`
    }
    else if (license===licenseArray[7]) {
        return `https://unlicense.org`
    }
}

// functions that returns the license section of README
function renderLicenseSection(license) {
    if (license===licenseArray[0]) {
        return `Get More Information about ${licenseArray[0]} License here: `
    }
    else if (license===licenseArray[1]) {
        return `Get More Information about ${licenseArray[1]} License here: `
    }
    else if (license===licenseArray[2]) {
        return `Get More Information about ${licenseArray[2]} License here: `
    }
    else if (license===licenseArray[3]) {
        return `Get More Information about ${licenseArray[3]} License here: `
    }
    else if (license===licenseArray[4]) {
        return `Get More Information about ${licenseArray[4]} License here: `
    }
    else if (license===licenseArray[5]) {
        return `Get More Information about ${licenseArray[5]} License here: `
    }
    else if (license===licenseArray[6]) {
        return `Get More Information about ${licenseArray[6]} License here: `
    }
      // If there is no license, return an empty string
      else {
        return ""
    }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  
  ## License Badge
  ${renderLicenseBadge(data.license)}

  ## License Link

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Table of Contents
  * [Project-Title](#project-title)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Features](#features)
  * [Contribution](#contribution)
  * [Credits](#credits)
  * [Contact](#contact)
  * [Repo-Info](#repo-info)
  
  
  ## Project Title
  ${data.title}



  ## Description
  ${data.description}



  ## Installation
  ${data.installation}



  ## Usage
  ${data.usage}



  ## Features
  ${data.features}



  ## Contribution
  ${data.contributions}



  ## Credits
  ${data.credits}


  
  ## Contact
  ${data.contact}



  ## Repo Info
  ${data.repoInfo}
  `;

}

module.exports = generateMarkdown;