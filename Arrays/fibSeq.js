function solution(n) {
    if (n === 0) return 0
    if (n === 1 || n === 2) return 1
    
    n = n - 2
    
    let vals = [0, 1, 1]
    
    while(n > 0) {
        let newNum = vals[vals.length - 1] + vals[vals.length - 2]
        vals.push(newNum)
        n--    
    }
    
    return vals[vals.length - 1]
}