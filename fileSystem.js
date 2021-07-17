switch (req.url) {
    case "/createfile":
      fs.writeFile("./blog1.txt", "Hello World 1", (err, data) => {
        res.send(data);
      });
      break;
    case "/deletefile":
      fs.unlink("./blog.txt", (err) => {
        if (err) return console.log("No file to delete");
        console.log("file deleted");
      });
      break;
    case "/createfolder":
      fs.mkdir("./blog", (err) => {
        if (err) return console.log("Error creating folder");
        console.log("Folder Created");
      });
      break;
    case "/deletefolder":
      fs.rmdir("./blog", (err) => {
        if (err) {
          console.log("Error deleting folder");
        } else {
          console.log("folder deleted");
        }
      });
      break;
    case "/ifexist":
      fs.existsSync("./blog")
        ? console.log("Folder Exist")
        : console.log("folder does not exist");
      break;

    default:
      fs.readFile("./blog1.txt", (err, data) => {
        console.log(data.toString());
      });
  }