var arr = [[1, 2, 3],[4, 5, 6],7,8,9,[[10, 11, 12, [13, 4, 112]], 136, 14],];
console.log(arr[5][0][0],arr[3],arr[5][0][3][0],arr[5][1],arr[1][0]);
var sentence = ["javascript", "web", "Capacity Bay"];
output = `Iam a ${sentence[1]} developer at ${sentence[2]} and I love ${sentence[0]}`;
console.log(output)
var fruit = ["orange", "apple", "guava", "lemon"];
fruit.unshift("pea", "banana");
fruit.push("Avocado", "mango");
console.log(fruit)
var arr = [];
// var count = 1;
function writeNum() {
    for(var count = 1; count <= 16;   count++ ){
  if(count % 3 ===0&&count % 5 ===0){
    arr.push("fizzBuzz")
}
 else  if (count % 3 ===0){
        arr.push("fizz")

    }
    else if(count % 5 ===0){
        arr.push("buzz")
    }else{
        arr.push(count)
    }

 
    console.log(arr) 
}
}
writeNum();

