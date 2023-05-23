let utilityObj = require("../utility");
let fs = require("fs");
let path = require("path");

function organizeFn(dirPath) {
    // 1. input -> directory path given
    let destPath;
    if (dirPath == undefined) {
        //if no path given then organize the current working directory of the Node.js process
        destPath = process.cwd();
        return;
    }
    else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {

            // 2. create -> organized_files -> directory
            destPath = path.join(dirPath, "organized_files");
            if (fs.existsSync(destPath) == false) {
                //if organized_files folder doesn't exist then create one
                fs.mkdirSync(destPath);
            }

        }
        else {
            console.log("Kindly enter the correct path");
            return;
        }
    }

    organizeHelper(dirPath, destPath);

}
function organizeHelper(src, dest) {
    // 3. identify categories of all files present in that input directory-> 
    let childNames = fs.readdirSync(src);

    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile) {

            let category = getCategory(childNames[i]);

            // 4. copy/cut files to that organized directory inside of any of category folder
            sendFiles(childAddress, dest, category);
        }
    }
}
function sendFiles(srcFilePath, dest, category) {
    let categoryPath = path.join(dest, category);
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    //console.log(fileName, " copied to ", category);
}
function getCategory(name) {
    let ext = path.extname(name);

    ext = ext.slice(1);

    for (let type in utilityObj.types) {
        let cTypeArray = utilityObj.types[type];
        for (let i = 0; i < cTypeArray.length; i++) {
            if (ext == cTypeArray[i]) {
                return type;
            }

        }
    }
    return "others";
}
module.exports = {
    organizeKey: organizeFn
}