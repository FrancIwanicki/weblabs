function addDate(){

    let now = new Date()
    let dd = now.getDate()
    let mm = now.getMonth()
    let yy = now.getFullYear()
    let weekday = now.getDay()

    switch (weekday) {
        case 0:
            weekday = "Неділя"
            break
        case 1:
            weekday = "Понеділок"
            break
        case 2:
            weekday = "Вівторок"
            break
        case 3:
            weekday = "Середа"
            break
        case 4:
            weekday = "Четвер"
            break
        case 5:
            weekday = "П'ятниця"
            break
        case 6:
            weekday = "Субота"
            break
    }
    switch (mm){
        case 0: mm = "Січня"
            break
        case 1: mm = "Лютого"
            break
        case 2: mm = "Березня"
            break
        case 3: mm = "Квітня"
            break
        case 4: mm = "Травня"
            break
        case 5: mm = "Червня"
            break
        case 6: mm = "Липня"
            break
        case 7: mm = "Серпня"
            break
        case 8: mm = "Вересня"
            break
        case 9: mm = "Жовтня"
            break
        case 10: mm = "Листопада"
            break
        case 11: mm = "Грудня"
            break
    }
    document.getElementById('task1').innerHTML = "Дата: " + dd + " " + mm + " " + yy + " року" + '<br>' + "День: "
        + weekday + '<br>' + "Час: " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()

}
function addDay(now){
    now = new Date()
    let weekday = now.getDay()
    switch (weekday) {
        case 0:
            weekday = "Неділя"
            break
        case 1:
            weekday = "Понеділок"
            break
        case 2:
            weekday = "Вівторок"
            break
        case 3:
            weekday = "Середа"
            break
        case 4:
            weekday = "Четвер"
            break
        case 5:
            weekday = "П'ятниця"
            break
        case 6:
            weekday = "Субота"
            break
    }
    let w = now.getDay()
    if(w === 0){
        w = 7
    }
    let obj =
        {dayNumber : w , dayName: weekday}

    document.getElementById('task2').innerHTML = "Номер дня: " + obj.dayNumber.toString() + "<br>" + "Назва дня: " + obj.dayName.toString()

    return obj
}
function getDateAgo() {
    let date = new Date()
    let n = document.getElementById('n').value;
    date.setDate(date.getDate() - n);
    document.getElementById('task3').innerHTML = date.toLocaleDateString("ukr", date);

}
function lastdaymonth() {
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    let date1 = new Date(year, +month + 1, 0);
    date1.setDate(0)
    document.getElementById('task4').innerHTML = date1.getDate()
}
function Seconds(){
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;
    let resVID = Math.round(diff / 1000);
    let resDO = 86400 - resVID;

    document.getElementById('task5').innerHTML = "Від початку дня: " + resVID + "<br>" + "До наступного дня: " + resDO;
}
function History(){
    let X , C , M
    let Age = document.getElementById('age').value;
    let arr1 = String(String(Age).padStart(4, '0')).split('')
    M = Number(arr1[0]) + 1
    C = Number(arr1[0] + arr1[1]) + 1
    if (Number(arr1[2]) < 5) {
        X = 1
    } else {
        X = 2
    }
    if (Age % 1000 == 0){
        X += 1
        M -= 1
        C -= 1
    }
    else if(Age % 100 == 0){
        X += 1
        C -= 1
    }
    document.getElementById('task6').innerHTML = "Половина " + X + ", століття " + C + ", тисячоліття " + M
}

function Duration(){
    let D1 = Date.parse(document.getElementById('year1').value.replace(/(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(\d{4})/g ,'$3-$2-$1'))
    let D2 = Date.parse(document.getElementById('year2').value.replace(/(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(\d{4})/g ,'$3-$2-$1'))
    D1 = new Date(D1).getFullYear()
    D2 = new Date(D2).getFullYear()
    document.getElementById('task7').innerHTML = D2 - D1
}
function Clock(){
    let cl1 , cl2 , cl3 , cl4 , res
    cl1 = parseInt(document.getElementById('clock1').value)
    cl2 = parseInt(document.getElementById('clock11').value)
    cl3 = parseInt(document.getElementById('clock2').value)
    cl4 = parseInt(document.getElementById('clock22').value)
    res = (cl1 + cl3) * 30 + (cl2 + cl4) / 2 - 720;
    document.getElementById('task8').innerHTML = Math.trunc(res / 60).toString() + "  " + (res % 60).toString() + " хв."
}


