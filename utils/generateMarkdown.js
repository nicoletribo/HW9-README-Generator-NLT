// License Badge Function
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'Boost':
      return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Mozilla':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'None':
      return ''; 
  }
}



// The function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);
  return `
  ${licenseBadge} 

# ${data.title}
  
## Description 

  ${data.description}

  View the walk through video here: https://drive.google.com/file/d/1rAf8xt-6c-dfnRPdNOzn0CJMpIKkVHDw/view?usp=sharing

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing
  
  If you would like to contribute to this project please follow the following contribution guidelines:
  
  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions

  If you have any questions you can find me on Github here: [${data.github}](https://github.com/${data.github}?tab=repositories)
  
  For any additional questions plese feel free to email me here: ${data.email}

`;
}

module.exports = generateMarkdown;
