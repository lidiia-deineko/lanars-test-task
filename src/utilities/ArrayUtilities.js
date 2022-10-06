class ArrayUtilities{
    getRandomOneDimensionalArray = (n) => {
        let arr = new Array(n)
        for(let i = 0; i< arr.length; i++){
            arr[i]= Math.floor(Math.random() * 61) + 1;
        }
        return arr;
    };

    getArrayWithUniqueElem = (arr) => {
        let newArr = [];
        for (let elem of arr) {
          if (!newArr.includes(elem)) {
            newArr.push(elem);
          }
        }
        return newArr;
    };
    
    addElemToArray = (arr, n) => {
        let newLength = n - arr.length
        if(arr.length != n){
            for(let i=0; i < newLength; i++){
                arr.push(Math.floor(Math.random() * 61) + 1)
            }
        }
        return arr;
    };

    isDuplicates = (arr) => {
        return arr.some(x => arr.indexOf(x) !== arr.lastIndexOf(x));
    };

    getUniqueOneDimensionalArray = (arr, dimension) => {
        while(this.isDuplicates(arr)){
            arr = this.getArrayWithUniqueElem(arr);
            arr =  this.addElemToArray(arr, dimension);
        }
    
        return arr;  
    };
 
    shakeArray = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
          return arr
    }

    createTwoDimensionalArray = (arr, dimension) => {
        let numRow = arr.length % dimension === 0 ? arr.length/dimension : Math.floor( (arr.length/dimension) + 1);
        let result = [];
        for (let i = 0; i < numRow; i++) {
          let template = arr.slice(i*dimension, i*dimension+dimension);
          result.push(template);
        }

        return result;
    }


    getTwoDimensionalArray = (n, m) => {

        let randomAarr = this.getRandomOneDimensionalArray(n);
        let uniqueArray = this.getUniqueOneDimensionalArray(randomAarr, n);
        let doubleArray = [...uniqueArray, ...uniqueArray];
        let shakeArray = this.shakeArray(doubleArray);
        let newArr = this.createTwoDimensionalArray(shakeArray, m)

        return newArr;
    }

}

export default new ArrayUtilities();