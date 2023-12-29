// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const addn = "I'm gudd";

fs.writeFile('tistfile.txt', addn, err => {
    if(err) {
        console.error(err);
    }
})

fs.readFile('tistfile.txt', 'utf-8', function(err, data) {
    console.log(data);
})
