// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;