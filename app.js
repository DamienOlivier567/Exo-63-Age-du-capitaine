
let age = prompt("Donnez un age")
let para = document.getElementById('paragraphe');

do {
    console.log("Le capitaine est : " + age);
    para.innerHTML += age + "ans";
    age++;
}

while (age < 2);{

    if(age < 18) {
        para.innerHTML += ("Le capitaine est jeune");
    }

    else if (age < 50) {
        para.innerHTML += ("Le capitaine n'est pas vieux");
    }

    else {
        para.innerHTML += ("Le capitaine est vieux");
    }
}

