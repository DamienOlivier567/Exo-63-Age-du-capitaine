
let age = prompt("Donnez un age")
let para = document.getElementById('paragraphe');

do {
    console.log("Le capitaine est : " + age);
    para.innerHTML += age + "ans";
    age++;
}

while (age < 2);{

    if(age < 18) {
        para.innerHTML += (", le capitaine est jeune");
    }

    else if (age < 50) {
        para.innerHTML += (", le capitaine n'est pas vieux");
    }

    else if (age < 100){
        para.innerHTML += (", le capitaine est vieux");
    }

    else {
        para.innerHTML += (", euh je crois qu'il est mort a verifier mais pour moi il est en etat de decomposition");
    }
}

