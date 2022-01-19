let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")

let ans = document.getElementById("ans")

let numb1 = document.getElementById("numb1")
let numb2 = document.getElementById("numb2")
let result = document.getElementById("result")

function random1(min , max){
    return Math.floor(Math.random() * (max - min)) + min
}

numb1.innerHTML = random1(0 , 9)
numb2.innerHTML = random1(0 , 9)
let task = 1

button1.addEventListener("mousedown", () => {
    ans.value = null
    task++
    if(task !== 11) {
        numb1.innerHTML = random1(0, 9)
        numb2.innerHTML = random1(0, 9)
        button1.disabled = false
        button2.disabled = false
        ans.disabled = false
        result.innerHTML = ""


    }
    else {
        button1.disabled = true
        button2.disabled = true
    }
})

let trueans = 0
button2.addEventListener("mousedown", () => {
    if(parseInt(numb1.innerHTML * numb2.innerHTML) === parseInt(ans.value)){
        trueans++
        ans.disabled = true
        button2.disabled = true
        result.innerHTML = "Результат: Відповідь вірна"
        document.getElementById("all").innerHTML = task.toString()
        document.getElementById("true").innerHTML = trueans.toString()
        document.getElementById("procent").innerHTML = (trueans * 10).toString()+ "%"

    }
    else {
        ans.disabled = true
        button2.disabled = true
        result.innerHTML = "Результат: Помилка! Правильна відповідь - " + parseInt(numb1.innerHTML * numb2.innerHTML)
        document.getElementById("all").innerHTML = task.toString()
        document.getElementById("true").innerHTML = trueans.toString()
        document.getElementById("procent").innerHTML = (trueans * 10).toString() + "%"
    }
})

