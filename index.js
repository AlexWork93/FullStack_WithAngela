// Use qr-emage and inquirer node modules to prompt user to enter url, then save it as an image

import qrImage from "qr-image";
import inquirer from "inquirer";
import fs from "fs";

inquirer
  .prompt([
    {
        message: "asd",
        name: "url"
    }
  ])
  .then((answers) => {
    const urlCode = qrImage.image(answers.url);
    urlCode.pipe(fs.createWriteStream("i_love_qr.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
