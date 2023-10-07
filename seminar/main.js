// const num1 = Number.parseFloat(prompt("Введите первое число : "));
// const num2 = Number.parseFloat(prompt("Введите второе число : "));

// alert(`Результат сложения чисел ${num1} и ${num2} равен ${Math.round((num1 + num2) * 10)/10}`);
// alert(`Результат сложения чисел ${num1} и ${num2} равен ${sumNumbers(num1,num2)}`);
// function sumNumbers(num1, num2){
//    const result = num1 + num2;
//    return result;
// }

// //Задание 2


// const chek = confirm("Вам хорошо живется?");

// if(chek){
//    alert("Тогда мы идем к вам!");
// }else{
//    alert("Ну вы держитесь там!")
// }

// задание 3

// const product = prompt("Введите наименование фрукта :" , "бананы");
// switch (product.toLocaleLowerCase("ru-RU")) {
//    case "мандарины":
//       alert("Мандарины стоят 100 руб/кг")
//       break;
//    case "бананы":
//       // alert("Бананы и груши стоят по 70 руб/кг");
//       // break;
//    case "груши":
//       alert("Бананы и груши стоят по 70 руб/кг");
//       break;
//    default:
//       alert("Продукт не найден");
//       break;
// }


// //задание 4
// const num1 = 5;
// const num2 = "5";

// console.log(num1==num2);
// console.log(num1===num2);

//задача 5 

// function getMaxEventElement(arr){
//    let max = arr[0];
//    for(let index = 0 ; index < arr.length;index++){
//       const element = arr[index];
//       if(element>max && index%2==0){
//          max = arr[index];
//       }
//    }
//    return max;
// }

// console.log(getMaxEventElement([5,7,-1,10,3,0])); //5
// console.log(getMaxEventElement([4,-12,29,6,31,92,-50])); //31

//залача 6

const cels = +prompt("Введите температуру в градусах Цельсия");

const far = cels * 9/5 +32;
alert(`Цельсия ${cels} Фаренгейт ${Math.round(far *100)/100}`);