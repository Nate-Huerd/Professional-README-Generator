// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// watch video for guide to linking badges: https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-adding-badges-to-your-readme
// utilize shield.io for badges (also credit to :https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba for links)

function renderLicenseBadge(license) {
  let badge = '';
  // add badges to licenses (if license equals ___, (link to badge))
  if (license === 'Apache License 2.0') {
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if 
  (license === 'GNU General Public License') {
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if
  (license === 'MIT License') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if
  (license === 'BSD 2-Clause "Simplified" License') {
    badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
  } else if
  (license === 'BSD 3-Clause "New" or "Revised" License') {
    badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else if
  (license === 'Boost Software License 1.0') {
    badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } else if
  (license === 'Creative Commons Zero v1.0 Universal') {
    badge = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
  } else if
  (license === 'Eclipse Public License 2.0') {
    badge = '[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)';
  } else if
  (license === 'GNU Affero General Public License v3.0') {
    badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
  } else if
  (license === 'GNU General Public License v2.0') {
    badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
  } else if
  (license === 'GNU Lesser General Public License v2.1') {
    badge = '[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)';
  } else if
  (license === 'Mozilla Public License 2.0') {
    badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if
  (license === 'The Unlicense') {
    badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  } else if
  // need to account for "No License"
  (license === 'No License') {
    badge = '';
  }
  return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else if 
  (license === 'GNU General Public License') {
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  } else if
  (license === 'MIT License') {
    return '(https://opensource.org/licenses/MIT)';
  } else if
  (license === 'BSD 2-Clause "Simplified" License') {
    return '(https://opensource.org/licenses/BSD-2-Clause)';
  } else if
  (license === 'BSD 3-Clause "New" or "Revised" License') {
    return '(https://opensource.org/licenses/BSD-3-Clause)';
  } else if
  (license === 'Boost Software License 1.0') {
    return '(https://www.boost.org/LICENSE_1_0.txt)';
  } else if
  (license === 'Creative Commons Zero v1.0 Universal') {
    return '(http://creativecommons.org/publicdomain/zero/1.0/)';
  } else if
  (license === 'Eclipse Public License 2.0') {
    return '(https://opensource.org/licenses/EPL-2.0)';
  } else if
  (license === 'GNU Affero General Public License v3.0') {
    return '(https://www.gnu.org/licenses/agpl-3.0)';
  } else if
  (license === 'GNU General Public License v2.0') {
    return '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
  } else if
  (license === 'GNU Lesser General Public License v2.1') {
    return '(https://www.gnu.org/licenses/lgpl-2.1)';
  } else if
  (license === 'Mozilla Public License 2.0') {
    return '(https://opensource.org/licenses/MPL-2.0)';
  } else if
  (license === 'The Unlicense') {
    return '(https://img.shields.io/badge/licen(http://unlicense.org/)';
  } else if
  // need to account for "No License" again here
  (license === 'No License') {
    return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// in order for badges to show up, we need to render the license badges and links (within section of README). Some stackoverflow threads helped with this

function renderLicenseSection(license) {
  {renderLicenseBadges(data.license)}
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // reference the title of each prompt
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  Licenses are as follows:
  ${data.license}
  ${renderLicenseLinks(data.license)}

  ## Contributing
  Please reference the following if you want to contribute to this project:
  ${data.contributing}

  ## Tests
  If you want to run tests, please see the following:
  ${data.tests}

  ## Questions
  If you have any questions regarding this project, please use the following information to reach me:
  ${data.questions}
  My GitHub: [${data.username}]
  My Email: [${data.email}]
  My GitHub Repository: [${data.title}]

`;
}

module.exports = generateMarkdown;
