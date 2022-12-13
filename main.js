


















function perebor () {
    let changeFill = document.getElementById('path1');
    let changeFill2 = document.getElementById('path2');
    let changeFill3 = document.getElementById('path3');
    let changeFill4 = document.getElementById('path4');
    let changeFill5 = document.getElementById('path5');


    
    // массив заливки причем сразу все стили 
    let arr = [];
arr.push(getComputedStyle(changeFill));
arr.push(getComputedStyle(changeFill2));
arr.push(getComputedStyle(changeFill3));
arr.push(getComputedStyle(changeFill4));
arr.push(getComputedStyle(changeFill5));

//перебор массива 
for (let i =0; i< arr.length; i++) {

console.log(arr[i]);
console.log( typeof arr[i]); 
console.log(arr.indexOf);
//достаем из МАССИВА стилей стиль фил 
let onlyFill = arr[i].fill;
console.log(onlyFill);
console.log(typeof onlyFill);
if (onlyFill === '"rgb(255, 0, 0)"'){ //красный на желтый 
            
    changeFill.style.fill  = "yellow";
   
}  

}

// Достаем объект со стилями 
// let allStylesPath1 = window.getComputedStyle(changeFill);

// Записываем в переменную значение стиля fill (пока что это объект)
  //  let onlyFill = allStylesPath1.fill;

// приводим переменную к строке (она равна "rgb(255, 0, 0)")
 //   let makeString = JSON.stringify(onlyFill);
 //   console.log(makeString);

}



perebor();

//arr.forEach(function(item, i, arr) {
 //   alert( i + ": " + item + " (массив:" + arr + ")" );
 // });

 //const array1 = ['a', 'b', 'c'];


