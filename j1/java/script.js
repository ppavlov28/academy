/**
 * Created by PPavlov on 23.02.2016.
 */


var wrist = prompt('Окружность запястья');

if (isNaN(wrist)) {
    alert('Enter number');
} else if (wrist <= 5) {
    alert('Телосложение деревьев не расчитываем');
} else if (wrist >= 50) {
    alert('Вы уверены, что измерили запястье?');
} else {
    if (confirm ('You are woman?')){
        if (wrist >= 15 && wrist <= 17) {
            alert('Женщина\nОкружность запястья - ' +  wrist + ' cm.\nНормостеническое телосложение');
        }
        else if (wrist < 15) {
            alert('Женщина\nОкружность запястья - ' +  wrist + ' cm.\nАстеническое телосложение');
        }
        else if (wrist > 17) {
            alert('Женщина\nОкружность запястья - ' +  wrist + ' cm.\nГиперстеническое телосложение');
        }
    }
    else {
        if (wrist >= 18 && wrist <= 20) {
            alert('Мужчина\nОкружность запястья - ' +  wrist + ' cm.\nНормостеническое телосложение');
        }
        else if (wrist < 18) {
            alert('Мужчина\nОкружность запястья - ' +  wrist + ' cm.\nАстеническое телосложение');
        }
        else if (wrist > 20) {
            alert('Мужчина\nОкружность запястья - ' +  wrist + ' cm.\nГиперстеническое телосложение');
        }
    }
}


