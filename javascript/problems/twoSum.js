/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const comp = {};

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    
    if (comp[current] >= 0) {     
      return [comp[current], i];
    }
  
    comp[target - current] = i;
;
  }
  /*  
    const map = new Map;
    for(let i=0;i<nums.length;i++){
        let rem = target-nums[i];
        if(map.has(rem)){
            return [map.get(rem),i]
        }
        map.set(nums[i],i);
    }
    */
};

console.log(twoSum([2, 11, 15,7],9));