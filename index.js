//Question 1


function deleteElement(array, n){
    const newArray = [];

    for (let i=0; i<array.length; i++){
if(array[i] !== n){
    newArray.push(array[i]);
}
    }
    return newArray;
}

const result = deleteElement([10,20,30,50,40],50);
console.log(result)



//Question 2

let myArr = [10,20,30,40,50,60];
let item = 40;

for(i=0; i<myArr.length-1; i++)
{
    if(myArr[i] === item)
    {
        index=i;
        break; 
    }
}

console.log("The element you're searching is at index : " ,index);
console.log("And the element is:" , item);



//Question 3

let myArr2 = [10,20,30,40,30,70,30];

item = 30;


// An empty array to push indexes 
let output = [];



for(i=0; i<=myArr2.length-1; i++)
{
    if(myArr2[i] === parseInt(item))
    {
        output.push(i);
        index=i;

    }
    

}
console.log(output);


