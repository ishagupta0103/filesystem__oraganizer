let fs = require("fs");
let path = require("path");

function treeFn(dirPath) {
    let destPath;
    if (dirPath == undefined) {
        //if no path given then list the contents of the current working directory of the Node.js process
        treeHelper(process.cwd(), "");
        return;
    }
    else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            treeHelper(dirPath, "");
        }
        else {
            console.log("Kindly enter the correct path");
            return;
        }
    }

    organizeHelper(dirPath, destPath);
}

function treeHelper(dirPath, indent) {
    //identify whether path is File or Folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile == true) {
        let fileName = path.basename(dirPath);
        console.log(indent + "├───" + fileName);
    } else {
        let dirName = path.basename(dirPath);
        console.log(indent + "└───" + dirName);
        let children = fs.readdirSync(dirPath);
        for (let i = 0; i < children.length; i++) {
            let childPath = path.join(dirPath, children[i]);
            treeHelper(childPath, indent + "\t");

        }
    }
}

module.exports = {
    treeKey: treeFn
}