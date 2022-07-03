// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license===licenseArray[0]) {
        return "[![License](https://https://img.shields.io/dub/l/Apache-2.0?style=flat-square)]"
    }
    else if (license===licenseArray[1]) {
        return "[![License](https://img.shields.io/eclipse-marketplace/l/notepad4e?style=flat-square"
    }
    else if (license===licenseArray[2]) {
        return "[![License](https://img.shields.io/eclipse-marketplace/l/notepad4e?style=flat-square"
    }
    else if (license===licenseArray[3]) {
        return "[![License](Need Link"
    }
    else if (license===licenseArray[4]) {
        return "[![License](Need Link"
    }
    else if (license===licenseArray[5]) {
        return "[![License](Need Link"
    }
    else if (license===licenseArray[6]) {
        return "[![License](Need Link"
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;