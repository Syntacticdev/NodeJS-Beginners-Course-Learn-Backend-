const fs = require("fs");

function fileSystem(url) {
  switch (url) {
    case "/createfile":
      fs.writeFile("./blog.txt", "Hello Syntactic 2 Dev!", (err, data) => {
        console.log("File Written or Created");
      });
      break;
    case "/deletefile":
      fs.unlink("./blog.txt", (err) => {
        if (err) return console.log("No file to delete");
        console.log("file deleted");
      });
      break;
    case "/createfolder":
      fs.mkdir("./blog1", (err) => {
        if (err) return console.log("Error creating folder");
        console.log("file created");
      });
      break;
    case "/deletefolder":
      fs.rmdir("./blog1", (err) => {
        if (err) return console.log("Error deleting folder");
        console.log("folder deleted");
      });
      break;
    case "/ifexist":
      // file or folder (Boolean)
      fs.existsSync("./blog")
        ? console.log("Folder Exist")
        : console.log("Folder does not exist");
      break;
    default:
      fs.readFile("./blog.txt", (err, data) => {
        if (err) return console.log("No file to read");
        console.log(data.toString());
      });
  }
}

module.exports = { fileSystem };
