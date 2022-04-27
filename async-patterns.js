const {readFile, writeFile } = require('fs').promises;
// console.log("Starting the task");

// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile(
            './content/util-promisify.txt',
            `This is Promisified: ${first} ${second}`,
            {flag: 'a'}
        )
        console.log(first, second); 
    } catch (error) {
        console.log(error);   
    }
}

start()

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//                 return;
//             } else {
//                 resolve(data);
//             }
//         }
//         )
//     });
// }

// const start = async() => {
//     try {
//         const first = await getText('./content/first.txt')
//         const second = await getText('./content/second.txt')
//         console.log(first, second); 
//     } catch (error) {
//         console.log(error);   
//     }
// }

// start()
//  -------------------------------------
// getText('./content/first.txt').then((result) => {
    //     console.log(result);    
    // }).catch((err) => {
        //     console.log(err);
        // });
        
        
        
        // console.log("we can run next task now.");