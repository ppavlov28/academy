/**
 * Created by PPavlov on 25.02.2016.
 */


/*
var startNum; /!*Начальное число*!/
var qNum; /!*Количество чисел*!/
var a;
var b;
var leftSum = 0; /!*Сумма цифр слева*!/
var rightSum = 0; /!*Сумма цифр справа*!/
var strLenght; /!*Длина строки (введенного числа)*!/
var strNum; /!*Строка из цифр*!/
var e = 1; /!*Для проверки четности*!/
var i = 0; /!*Счетчик оновного цикла*!/
var l = 0; /!*Счетчик для подчета суммы цифр слева*!/
var r = 0; /!*Счетчик для подчета суммы цифр справа*!/
var lucky = [];
*/

var numStart;
var numEnd;
var numQnt;
var a;
var b;
var c;
var d;
var i = 0;

numStart = prompt('Enter first number'); /*Задаем начальное число*/
numEnd = prompt('Enter last number'); /*Задаем конечное число*/
numQnt = numEnd - numStart;

while(i < numQnt) {
    a = Math.floor(numStart / 1000);
    b = Math.floor((numStart - 1000 * a) / 100);
    c = Math.floor(((numStart - 1000 * a) - 100 * b) / 10);
    d = Math.floor(((numStart - 1000 * a) - 100 * b) - 10 * c);
    sumLeft = a + b;
    sumRight = c + d;
    if (sumLeft == sumRight){
        document.write('Lucky ' + numStart + '<br>');
    }
    numStart++;
    i++;
}



document.write('<hr>');

document.write('<table border="1px"><tr><td>Шкала Цельсия</td><td>Шкала' +
    ' Фаренгейта</td><td>Шкала Реомюра</td></tr>');
i = 0;
for(i = 0; i <= 300; i = i + 10){
    c = i;
    f = c * 9 / 5 + 32;
    r = c * 4 / 5;
    document.write('<tr><td>' + c + '</td><td>' + f + '</td><td>' + r + '</td></tr>');
}
document.write('</table'>);




/*
startNum = prompt('Enter first number'); /!*Задаем начальное число*!/
/!*Проверяем, что введенное число содержит четное количество цифр и больше 0*!/
while ((e == 1) || (isNaN(startNum)) || (startNum <= 0)){
    strNum = String(startNum); /!*Делаем строку из введенного числа*!/
    strLenght = strNum.length; /!*Определяем его длину*!/
    e = strLenght % 2; /!*Проверяем на четность*!/
    /!*Если число не соответствует, вводим его еще раз*!/
    if ((e == 1) || (isNaN(startNum)) || (startNum <= 0)) {
        alert('Количество цифр должно быть четным и больше 0!');
        startNum = prompt('Enter first number'); /!*Еще раз задаем начальное
         число, если оно не соответствует условиям*!/
    }
}

qNum = prompt('Enter number quantity'); /!*Задаем количество чисел от
 начального числа*!/
/!*Проверяем, что введенное число больше 0*!/
while ((qNum <= 0) || (isNaN(qNum))){
    /!*Если число не соответствует, вводим его еще раз*!/
    alert('Количество цифр должно быть больше 0!');
    qNum = prompt('Enter number quantity'); /!*Еще раз задаем количество
     чисел, если оно не соответствует условиям*!/
}

//alert('Проверка прошла');

while (i < qNum) {
//    /!*Убедимся еще раз, что число содержит четное количество цифр*!/
//    strLenght = strNum.length;
//    e = strLenght % 2;
//    if (e == 0) {
        /!*Вычислить количество цифр слева и справа*!/
        var halfLenght = strLenght / 2;
        /!*Складываем цифры слева*!/
        while (l < halfLenght) {
            a = Number(strNum[l]);
            leftSum = leftSum + Number(strNum[l]);
            l++;
        }

        l = 0; /!*Обнулить счетчик*!/

        r = halfLenght; /!*Начальный элемент для сложения справа*!/

        /!*Складываем цифры справа*!/
        while (r < strLenght) {
            b = Number(startNum[r]);
            rightSum = rightSum + Number(strNum[r]);
            r++
        }

        /!*Проверяем счастье, если да, то складываем в массив*!/
        if (leftSum == rightSum) {
            lucky.push(strNum);
        }

        /!*Обнуляем суммы и переходим к следующему числу*!/
        leftSum = 0;
        rightSum = 0;
        var temp = Number(strNum);
        temp++;
        strNum = String(temp);
        i++;
//    }
}

/!*Вывод счастья*!/
alert(lucky);
*/

