const fs = require('fs');

const filePath = 'd:/Desktop/Backend/NODE/example.txt';
const directoryPath = 'd:/Desktop/Backend/NODE/new_directory';

// 1. Write to a file (or create if it doesn't exist)
fs.writeFile(filePath, 'Hello, this is a new file created by fs.writeFile!\n', (err) => {
    if (err) throw err;
    console.log('File "example.txt" has been written.');

    // 2. Append to the file
    fs.appendFile(filePath, 'This line was appended using fs.appendFile.\n', (err) => {
        if (err) throw err;
        console.log('Content appended to "example.txt".');

        // 3. Read from the file
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) throw err;
            console.log('Content of "example.txt":');
            console.log(data);

            // 4. Create a new directory
            fs.mkdir(directoryPath, { recursive: true }, (err) => {
                if (err) throw err;
                console.log(`Directory "${directoryPath}" created.`);

                // 5. Remove the file after a short delay to see the output
                setTimeout(() => {
                    fs.unlink(filePath, (err) => {
                        if (err) throw err;
                        console.log('File "example.txt" deleted.');

                        // 6. Remove the directory (it must be empty)
                        fs.rmdir(directoryPath, (err) => {
                            if (err) {
                                console.log(`Could not remove directory "${directoryPath}":`, err.message);
                            } else {
                                console.log(`Directory "${directoryPath}" removed.`);
                            }
                        });
                    });
                }, 2000);
            });
        });
    });
});
