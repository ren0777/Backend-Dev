// Lab Exercise 1: File Manager Application
// Create a command-line application that allows users to perform basic file operations including
// read, write, copy, delete, and list directory contents.

// Import file system module
const fs = require("fs");

// Take input from terminal
// Example: node fileManager.js read file.txt

const command = process.argv[2];
const fileName = process.argv[3];
const secondFile = process.argv[4];

// READ FILE
if (command === "read") {
  fs.readFile(fileName, "utf-8", function (error, data) {
    if (error) {
      console.log("Error reading file");
    } else {
      console.log("File content:");
      console.log(data);
    }
  });
}

// WRITE FILE
else if (command === "write") {
  fs.writeFile(fileName, secondFile, function (error) {
    if (error) {
      console.log("Error writing file");
    } else {
      console.log("File written successfully");
    }
  });
}

// COPY FILE
else if (command === "copy") {
  fs.copyFile(fileName, secondFile, function (error) {
    if (error) {
      console.log("Error copying file");
    } else {
      console.log("File copied successfully");
    }
  });
}

// DELETE FILE
else if (command === "delete") {
  fs.unlink(fileName, function (error) {
    if (error) {
      console.log("Error deleting file");
    } else {
      console.log("File deleted successfully");
    }
  });
}

// LIST DIRECTORY
else if (command === "list") {
  fs.readdir(fileName || ".", function (error, files) {
    if (error) {
      console.log("Error reading folder");
    } else {
      console.log("Files in folder:");
      files.forEach(function (file) {
        console.log(file);
      });
    }
  });
}

// WRONG COMMAND
else {
  console.log("Invalid command");
  console.log("Use:");
  console.log("read <file>");
  console.log("write <file> <content>");
  console.log("copy <source> <destination>");
  console.log("delete <file>");
  console.log("list <folder>");
}

// node fileManager.js write test.txt Hello
// node fileManager.js read test.txt
// node fileManager.js copy test.txt new.txt
// node fileManager.js list .
// node fileManager.js delete test.txt
