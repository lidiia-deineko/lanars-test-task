export const createRandomArr = (n) => {
    let arr = []

    while(arr.length !== n){

        let isPrimeNumber = true;
        let isDuplicates = false
        
        let num = Math.floor(Math.random() * 60) + 1;
    
        for(let j=2; j<num; j++){
            if(num % j === 0){
                isPrimeNumber = false;
                break;
            }
        }

        if(arr.includes(num)){
            isDuplicates = true
        }

    
        if(isPrimeNumber && !isDuplicates){
            arr.push(num);
        }

    }

    let doubleArr = [...arr, ...arr]

    doubleArr.sort(() => Math.random()-0.5);

    return doubleArr
}
