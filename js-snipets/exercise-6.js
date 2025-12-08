//OPTIONAL: Exercise # 6

//Write a function that performs the bubble algorithm.

myArray = [3, 6, 12, 5, 100, 1]


for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < myArray.length - 1; j++) {
    if (myArray[j] > myArray[j + 1]) {
    
      let temp = myArray[j];
      myArray[j] = myArray[j + 1];
      myArray[j + 1] = temp;
    }
  }
}

console.log(myArray); 


//Agregué un extra para entender


newArray = [2,6,23,74,22,5,1]

for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray.length-1-i; j++) {
      if (newArray[j]>newArray[j+1]){

        let sort = newArray[j];
        newArray[j]=newArray[j+1];
        newArray[j+1]=sort;

    }
  }
}

console.log(newArray)
