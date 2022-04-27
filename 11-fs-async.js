const {readFile, writeFile } = require('fs');
console.log("Starting the task");
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the Result: ${first} ${second}`,
            (err,result) => {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log('Task is completed');
            }
        )
    })
}
)
console.log("we can run next task now.");