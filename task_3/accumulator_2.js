let nums = [-10,-20,-30,10,10,10,10,10,10,10]

let accumulator = 0


let count = 0

while( count < nums.length){
    if(nums[count] > 0) {
        accumulator += nums[count]
    }
    count++
}

console.log(accumulator)