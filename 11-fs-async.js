const { readFile, writeFile } = require('fs')

//console.log("start");
//readFile('./content/first.txt', 'utf8', (err, result)=>{
//    if(err){
//        console.log(err)
//        return
//    }
//    //console.log(result)
//    const first = result
//    readFile('./content/second.txt', 'utf8',(err, result)=>{
//        if (err) {
//            console.log(err)
//            return
//        }
//        const second = result
//        writeFile('./content/result-async.txt', 
//        `Here is the result: ${first}, ${second}`, {flag: "a"},
//        (err, result) => {
//            if (err) {
//                console.log(err)
//                return
//            }
//            console.log("Done with this task")
//            
//        })
//    })
//})
//
//console.log("starting new task")

console.log("START");

readFile("./content/first.txt", "utf8", (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("1")
    const first = result
    readFile("./content/second.txt", "utf8", (err, result)=>{
        if(err) {
            console.log(err)
            return
        }
        console.log("2")
        const second = result
        writeFile("./content/result-async.txt",
        `|second result: ${first}, ${second}`, {flag: "a"},
        (err, result)=> {
            if(err) {
                console.log(err)
                return
            }
            console.log("3 - Done")
        })
    })
})

console.log("Starting new task!")
