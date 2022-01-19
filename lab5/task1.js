let procent = document.getElementById("procent")
let true1 = document.getElementById("true")
let all = document.getElementById("all")
let $button1 = document.getElementById('button1')
let res = document.getElementById('result')
let $one = document.getElementById('one')
let $two = document.getElementById('two')
let $three = document.getElementById('three')
let $four = document.getElementById('four')
let numb1 = document.getElementById('numb1')
let numb2 = document.getElementById('numb2')


function random1(min , max){
    return Math.floor(Math.random() * (max - min)) + min
}
generateAnswer()

let task = 1
let trueans = 0

function turn_on(){
    $one.disabled = false
    $two.disabled = false
    $three.disabled = false
    $four.disabled = false
}

function disable(){
    $one.disabled = true
    $two.disabled = true
    $three.disabled = true
    $four.disabled = true

}
function change(){
    all.innerHTML = task.toString()
    true1.innerHTML = trueans.toString()
    procent.innerHTML = (trueans * 10).toString() + "%"
}


$one.addEventListener("mousedown", () => {
    if (parseInt(document.getElementById('one').value) === parseInt(numb1.innerHTML * numb2.innerHTML)) {
        result.innerHTML = "Результат: Відповідь вірна"
        trueans++
        disable()
        change()
    }
    else{
        result.innerHTML = "Результат: Помилка! Правильна відповідь - " + parseInt(numb1.innerHTML * numb2.innerHTML)
        disable()
        change()
    }
})
$two.addEventListener("mousedown", () => {
    if (parseInt(document.getElementById('two').value) === parseInt(numb1.innerHTML * numb2.innerHTML)) {
        result.innerHTML = "Результат: Відповідь вірна"
        trueans++
        disable()
        change()
    }
    else{
        result.innerHTML = "Результат: Помилка! Правильна відповідь - " + parseInt(numb1.innerHTML * numb2.innerHTML)
        disable()
        change()
    }
})
$three.addEventListener("mousedown", () => {
    if (parseInt(document.getElementById('three').value) === parseInt(numb1.innerHTML * numb2.innerHTML)) {
        result.innerHTML = "Результат: Відповідь вірна"
        trueans++
        disable()
        change()
    }
    else{
        result.innerHTML = "Результат: Помилка! Правильна відповідь - " + parseInt(numb1.innerHTML * numb2.innerHTML)
        disable()
        change()
    }
})
$four.addEventListener("mousedown", () => {
    if (parseInt(document.getElementById('four').value) === parseInt(numb1.innerHTML * numb2.innerHTML)) {
        result.innerHTML = "Результат: Відповідь вірна"
        trueans++
        disable()
        change()
    }
    else{
        result.innerHTML = "Результат: Помилка! Правильна відповідь - " + parseInt(numb1.innerHTML * numb2.innerHTML)
        disable()
        change()
    }
})
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
function generateAnswer(){
    numb1.innerHTML = random1(0, 9)
    numb2.innerHTML = random1(0, 9)
    let arr = [random1(1,100) , random1(1,100) , random1(1,100)]
    arr.push(parseInt(numb1.innerHTML * numb2.innerHTML))
    shuffle(arr)
    document.getElementById('one').value = arr[0]
    document.getElementById('one_1').innerHTML = arr[0]
    document.getElementById('two').value = arr[1]
    document.getElementById('two_1').innerHTML = arr[1]
    document.getElementById('three').value = arr[2]
    document.getElementById('three_1').innerHTML = arr[2]
    document.getElementById('four').value = arr[3]
    document.getElementById('four_1').innerHTML = arr[3]
}
$button1.addEventListener("mousedown", () => {
    task++
    if(task !== 11) {
        generateAnswer()
        turn_on()
        button1.disabled = false
        result.innerHTML = ""
        all.innerHTML = task.toString()
    }
    else {
        button1.disabled = true
        disable()
    }
})










