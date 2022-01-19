import {addClass} from "./lab3lib.js";
import {firstFunc} from "./lab3lib.js";
import {secondFunc} from "./lab3lib.js";
import {thirdFunc} from "./lab3lib.js";
import {fourthFunc} from "./lab3lib.js";
import {fifthFunc} from "./lab3lib.js";
import {sixthFunc} from "./lab3lib.js";
import {removeClass} from "./lab3lib.js";
import {filterRangeInPlace} from "./lab3lib.js";
import {reverseSort} from "./lab3lib.js";
import {arraySort} from "./lab3lib.js";
import {randomSort} from "./lab3lib.js";
import {SortPeople} from "./lab3lib.js";
import {Dog} from "./lab3lib.js";
import {unique} from "./lab3lib.js";

var obj = {
    className: "red green blue"
}
document.getElementById('name').innerHTML = obj.className.toString();
addClass(obj, "black")
document.getElementById('add').innerHTML = obj.className.toString();

var object = {
    className: "red green blue black"
}
document.getElementById('str').innerHTML = object.className.toString();
removeClass(object, "green")
document.getElementById('newStr').innerHTML = object.className.toString();

var arr1 = [5, 3, 8, 1];
let a = 1;
let b = 4;

var array = [1, 2, 3, 4, 5, 6, 7];

var massiv = ["HTML", "JavaScript", "CSS"];

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

var vasya = {name: "Васька", age: 15};
var masha = {name: "Машенька", age: 17};
var vovochka = {name: "Вовочка", age: 18};

var people = [vasya, masha, vovochka];


let subjects = [
    {name: "OP", grades: 39, status: false},
    {name: "JS", grades: 99, status: true},
    {name: "Math", grades: 60, status: true},
    {name: "C", grades: 70, status: true},
    {name: "English", grades: 80, status: true},
    {name: "OOP", grades: 25, status: false},
    {name: "C#", grades: 90, status: true},
    {name: "Django", grades: 55, status: false},
]
let getElem = document.getElementById ('new' );
let $addSubject = document.getElementById ('addSubj' );
$addSubject.addEventListener ("click", function() {
    let newSubject =document.getElementById ('newSubj' );
    let newGrades = document.getElementById ('newGrade' );
    newSubject =newSubject.value;
    newGrades =parseInt(newGrades.value);
    if(!(!newSubject || isNaN(newGrades)) ) {
        secondFunc(subjects,newSubject, newGrades)
        firstFunc(subjects,getElem)
    }
})
let sr = ' ';
let urok = document.getElementById('subj');
for ( let i = 0; i < subjects.length; i++ ) {
    sr += subjects[i].name + "   , status - " + subjects[i].status +'<br>';
}
urok.innerHTML = sr;

firstFunc(subjects, getElem)
thirdFunc(subjects)
fourthFunc(subjects)
fifthFunc(subjects)
sixthFunc(subjects)
filterRangeInPlace(arr1, a, b)
reverseSort(array)
arraySort(massiv)
randomSort(arr)
SortPeople(people)
unique()
var Sem = new Dog("Sem","Huski",2);
Dog(Sem.barking())







