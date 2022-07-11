let nums = [1,2,3,4,5,6,7,8,9,10]


for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0) {
        console.log(nums[i])

    }
}

let count = 0
while ( count < nums.length) {
    if(nums[count] % 2 !== 0){
        console.log(nums[count])
    }
    count ++
}