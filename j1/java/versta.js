/**
 * Created by PPavlov on 25.02.2016.
 */
var oldvalue = prompt('Что пересчитываем:\n1 – верста.\n2 – сажень.\n3 –' +
    ' аршин.\n4 – вершок.');
var numvalue = prompt('Сколько?');
var newvalue = prompt('Во что пересчитываем:\n1 – километры.\n2 – метры.\n3' +
    ' –' + ' сантиметры.\n4 – миллиметры.');

switch (oldvalue){
    case "1":{
        switch (newvalue){
            case "1": {
                alert(numvalue / 0.0009374 / 1000 + ' км.');
                break;
            }
            case "2": {
                alert(numvalue / 0.0009374 + ' м.');
                break;
            }
            case "3": {
                alert(numvalue / 0.0009374 * 100 + ' см.');
                break;
            }
            case "4":{
                alert(numvalue / 0.0009374 * 1000 + ' мм.');
                break;
            }
        }
    }
    case "2":{
        switch (newvalue){
            case "1": {
                alert(numvalue / 0.4687 / 1000 + ' км.');
                break;
            }
            case "2": {
                alert(numvalue / 0.4687 + ' м.');
                break;
            }
            case "3": {
                alert(numvalue / 0.4687 * 100 + ' см.');
                break;
            }
            case "4":{
                alert(numvalue / 0.4687 * 1000 + ' мм.');
                break;
            }
        }
    }
}
