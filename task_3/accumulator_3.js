let languages = ['python', 'javascript', 'java', 'c++', 'go']

let accumulator = []


for(let i = 0; i < languages.length; i++){
    if(languages[i].length > 3){
        accumulator.push(languages[i])
    }
}

console.log(accumulator)