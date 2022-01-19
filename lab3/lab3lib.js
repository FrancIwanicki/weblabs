export function addClass(obj, cls) {
    {
        if (obj.className == "") {
            obj.className = cls
            return
        }
        var arr = obj.className.split(" ")
        if (arr.indexOf(cls) == -1) {
            arr.push(cls)
        }
        obj.className = arr.join(" ")
    }
}

export function firstFunc(subjects, idElement) {
    let sr1 = ' ';
    for (let i = 0; i < subjects.length; i++) {
            if (subjects[i].status) {
                sr1 += subjects[i].name + "  , status - " + subjects[i].status + " , grades: " + subjects[i].grades + '<br>';
            }
    }
    for (let i = 0; i < subjects.length; i++) {
            if (!subjects[i].status) {
                sr1 += subjects[i].name + "   , status - " + subjects[i].status + " , grades: " + subjects[i].grades + '<br>';
            }
    }
    let subjectTrue = document.getElementById('subjTrue');
    idElement.innerHTML = sr1;
    subjectTrue.innerHTML = sr1;
}

export function secondFunc(array, subjects, grades) {
    let flag = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i].name == subjects) {
            array[i].grades = grades;
            array[i].status = grades >= 60;
            flag = false;
            break;
        }
    }
    if (flag) {
        array.push({name: subjects, grades: grades, status: grades >= 60});
    }

}

export function thirdFunc(subjects) {
    let sub = document.getElementById('subject');
    let sr4 = ' ';
    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].name !== undefined) {
            sr4 += subjects[i].name + "   , status - " + subjects[i].status + " , grades: " + subjects[i].grades + '<br>';
        }
    }
    sub.innerHTML = sr4.toString();
    var avrg = 0;
    for (let i = 0; i < subjects.length; i++) {
        avrg += subjects[i].grades;
    }
    avrg /= subjects.length;
    document.getElementById('avrg').innerHTML = avrg;
}

export function fourthFunc(subjects) {
    let SubOfFalse = document.getElementById('SubFalse');

    let sr7 = ' ';
    for (let i in subjects) {
        if (subjects[i].name !== undefined) {
            if (!subjects[i].status) {
                sr7 += subjects[i].name + "   , status " + subjects[i].status + '<br>';
            }
        }
    }
    SubOfFalse.innerHTML = sr7.toString();

    let cnt = 0;
    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].name !== undefined) {
            if (!subjects[i].status) {
                cnt++;
            }
        }
    }
    document.getElementById('cnt').innerHTML = cnt;
}

export function fifthFunc(subjects) {
    let SubOfTrue = document.getElementById('SubTrue');
    let sr8 = " ";
    for (let i in subjects) {
        if (subjects[i].name !== undefined) {
            if (subjects[i].status) {
                sr8 += subjects[i].name + "   status - " + subjects[i].status + " , grades: " + subjects[i].grades + '<br>';
            }
        }
    }
    SubOfTrue.innerHTML = sr8.toString();


    let maxGrade = subjects[0].grades;
    let point = 0;
    for (let i in subjects) {
        if (subjects[i].grades > maxGrade) {
            maxGrade = subjects[i].grades;
            point = i;
        }
    }
    document.getElementById('Max').innerHTML = subjects[point].name + "  , grades - " + subjects[point].grades;
}
export function sixthFunc(subjects){
    document.querySelector('.SearchButt').addEventListener('click', ()=>{
        let data = document.querySelector('.Search').value
        for (let i = 0; i < subjects.length; i++) {
            if (data == subjects[i].grades) {
                document.querySelector('.ResOfSearch').innerHTML = subjects[i].name
            }
        }
    })

}

export function removeClass(object, cls) {
    var array = object.className.split(" ")
    var i = -1;
    while (i = array.indexOf(cls) >= 0) {
        array.splice(i, 1)
    }
    object.className = array.join(" ")
}

export function filterRangeInPlace(arr1, a, b) {
    let sr9 = " ";
    let mas = document.getElementById('massiv');
    let filtr = document.getElementById('fltr');
    for (let i in arr1) {
        if (arr1[i] != undefined) {
            sr9 += arr1[i] + '<br>';
        }
    }
    mas.innerHTML = sr9.toString();
    for (let i = arr1.length - 1; i >= 0; i--) {
        if (arr1[i] < a || arr1[i] > b) {
            arr1.splice(i, 1);
        }
    }
    filtr.innerHTML = arr1.toString();
}

export function reverseSort(array) {
    let sr10 = " ";
    let mass = document.getElementById('massiv1');
    for (let i in array) {
        if (array[i] != undefined) {
            sr10 += array[i] +'<br>';
        }
    }
    mass.innerHTML = sr10.toString();

    array.sort((a, b) => {
        return b - a
    })

    let sr11 = " ";
    let rvrsMass = document.getElementById('reverseMassiv');
    for ( let i in array ) {
        if (array[i]!=undefined) {
            sr11 += array[i] +'<br>';
        }
    }
    rvrsMass.innerHTML = sr11.toString();
}

export function arraySort(massiv) {
    let sr12 = " ";
    let ms = document.getElementById('mas12');
    for ( let i in massiv ) {
        if (massiv[i]!=undefined) {
            sr12 += massiv[i] +'<br>';
        }
    }
    ms.innerHTML = sr12.toString();

    massiv.sort();

    let sr13 = " ";
    let sortMassiv = document.getElementById('sortMas');
    for ( let i in massiv ) {
        if (massiv[i] != undefined) {
            sr13 += massiv[i] + '<br>';
        }
    }
    sortMassiv.innerHTML = sr13.toString();
}

export function randomSort(arr) {
    let sr14 = " ";
    let arrin = document.getElementById('arrIn');
    for ( let i in arr ) {
        if (arr[i]!=undefined) {
            sr14 += arr[i] + '<br>';
        }
    }
    arrin.innerHTML = sr14.toString();

    arr.sort(function () {
        return Math.random() - 0.5;
    })

    let sr15 = " ";
    let newArr = document.getElementById('newArr');
    for ( let i in arr ) {
        if (arr[i]!=undefined) {
            sr15 += arr[i] +'<br>';
        }
    }
    newArr.innerHTML = sr15.toString();
}

export function SortPeople(people) {
    let sr16 = " ";
    let peopleForSort = document.getElementById('peopleSort');
    for ( let i in people ) {
        if (people[i]!=undefined) {
            sr16 += people[i].name + "   Вік:" + people[i].age +'<br>';
        }
    }
    peopleForSort.innerHTML = sr16.toString();

    people.sort((a, b)=>a.age >b.age ? 1 : -1);

    let sr17 = " ";
    let resSort = document.getElementById('resSort');
    for ( let i in people ) {
        if (people[i]!=undefined) {
            sr17 += people[i].name + "   Вік :" + people[i].age +'<br>';
        }
    }
    resSort.innerHTML = sr17.toString();
}

export function Dog(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    let dog = document.getElementById('Dog')
    dog.innerHTML = name
    let bark = document.getElementById('Bark');
    this.barking = function () {

        if (this.age <= 1) {
            bark.innerHTML = 'тяф'
        } else if (this.age <= 3) {
            bark.innerHTML = 'гав'
        } else {
            bark.innerHTML = 'ррр'
        }
    }
}

export function unique(){
    let string1 = ["C++", "C#",  "C#", "C++", "C", "C++", "JavaScript", "C++", "JavaScript", "C#", "C#",];
    let strings1
    strings1 = document.getElementById("masnesort")
    strings1.innerHTML = string1

    let result1 = [];

    for (let str1 of string1) {
        if (!result1.includes(str1)) {
            result1.push(str1);
        }
    }


    let res1
    res1 = document.getElementById("massort")
    res1.innerHTML = result1


}



