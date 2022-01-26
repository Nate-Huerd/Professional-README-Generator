// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// watch video for guide to linking badges: https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-adding-badges-to-your-readme
function renderLicenseBadge(license) {
  let badge = '';
  // add badges to licenses (if license equals ___, (link to badge))
  if (license === 'Apache License 2.0')(//link to Apache License 2.0 badge)
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
