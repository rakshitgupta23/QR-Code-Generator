import inquirer from 'inquirer';
import fs from "fs";
import qr from "qr-image";
inquirer
    .prompt([
        {
            "message": "Enter your URL",
            "name": "URL"
        }
    ])
    .then((answers) => {
        var qr_svg = qr.image(answers.URL);
        qr_svg.pipe(fs.createWriteStream('qr_img.png'));
        fs.writeFile("text.txt", answers.URL, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });