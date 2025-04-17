//! Welcome to Codepital:

//? In this exercise, we have patients who will go to a doctor to get debugged. The doctor will diagnose them and prescribe a remedy. After that, the patients will go to the pharmacy to buy their remedy, take it, and be cured.

// ## Description of patients:

// Patients have a name, an illness, money, a pocket, a health condition, knowledge of how to go to a place, take medication, and pay. At the beginning, patients are in a waiting room.

// | Name      | Illness              | Money | Pocket | Health State | Treatment              | Go To | Take Care | Pay |
// |-----------|----------------------|-------|--------|--------------|------------------------|-------|-----------|-----|
// | Marcus    | Indentation Error    | 100   | Empty  | Ill          |                        |       |           |     |
// | Optimus   | Unsave               | 200   | Empty  | Ill          |                        |       |           |     |
// | Sangoku   | 404                  | 80    | Empty  | Ill          |                        |       |           |     |
// | DarthVader| Asthmatic            | 110   | Empty  | Ill          |                        |       |           |     |
// | Semicolon | Syntax Error         | 60    | Empty  | Ill          |                        |       |           |     |

class Patients {
    constructor(name, illness, money, pocket, healthState, treatment) {
        this.name = name
        this.illness = illness
        this.money = money
        this.pocket = pocket
        this.healthState = healthState
        this.treatment = treatment
    }
    GoTo(prevlocation, destination) {
        destination.people.push(this)
        prevlocation.people.pop(this)
        console.log(this.name + " khrej mn " + prevlocation.name);
        console.log(this.name + " mcha l " + destination.name);
        
    }
    pay(treatment) {

    }
}

let Marcus = new Patients("Marcus", "IndentationError", 100, "Empty", "Ill", []);
let Optimus = new Patients("Optimus", "Unsave", 200, "Empty", "Ill", []);
let Sangoku = new Patients("Sangoku", "404", 80, "Empty", "Ill", []);
let DarthVader = new Patients("DarthVader", "Asthmatic", 110, "Empty", "Ill", []);
let Semicolon = new Patients("Semicolon", "SyntaxError", 60, "Empty", "Ill", []);

// ## Description of the doctor:

// The doctor receives patients in his office. First, he diagnoses them and gets paid before prescribing a treatment. Note that the doctor always makes the patient leave his office before taking the next one. In his office, there is his Sphynx cat to maintain a sterile environment. The cat meows every two seconds in the console (bonus). The consultation costs 50€. Patients are in a treatment state before leaving the office.

// | Name      | Money | Office | Diagnosis | Patient In | Patient Out |
// |-----------|-------|--------|------------|------------|-------------|
// | Debugger  | 0     | [Cat]  |            |            |             |

class Doctor {
    constructor(name, money, office, waitingroom , consultationroom) {
        this.name = name
        this.money = money
        this.office = office
        this.waitingroom = waitingroom
        this.consultationroom = consultationroom
    }
    diagnosis(patient) {
        for (let i = 0; i < diagnosisGrid.length; i++) {
            if (patient.illness == diagnosisGrid[i].illnessName) {
                patient.treatment.push(diagnosisGrid[i].treatment);
                console.log("you have " + diagnosisGrid[i].illnessName);
                break;
            }
        }
    }
    PatientIn(patient) {
        if (this.consultationroom.people.length == 0) {
            this.consultationroom.people.push(patient);
            console.log(patient.name + " in the " + this.consultationroom.name);
            // this.waitingroom.people.splice(patient , 1);
        }else{
            this.waitingroom.people.push(patient);
            console.log(patient.name + " in the " + this.waitingroom.name);
        }
        
    }
    Patientout(patient) {
        this.waitingroom.people.push(patient);
        this.consultationroom.people.splice(patient , 1);
        console.log(patient.name + " out of " + this.consultationroom.name);

    }
}
let waitingroom = {
    name: "waitingroom",
    people: []
}
let office = {
    name: "doctor Debugger's office",
    people: []
}
let consultationroom = {
    name : "consultationroom",
    people: [],
}
const doctor = new Doctor("Debugger", 0, office , waitingroom , consultationroom);

// ### Diagnosis Grid:

// | Illness            | Treatment           |
// |---------------------|---------------------|
// | Indentation Error  | `Ctrl+Shift+F`      |
// | Unsave             | `SaveOnFocusChange` |
// | 404                | `CheckLinkRelation` |
// | Asthmatic          | `Ventolin`          |
// | Syntax Error       | `F12+Doc`           |

const diagnosisGrid = [
    {
        illnessName: "IndentationError",
        treatment: 'Ctrl+Shift+F',
        price: 60,
    },
    {
        illnessName: "Unsave",
        treatment: 'SaveOnFocusChange',
        price: 100,
    },
    {

        illnessName: "404",
        treatment: 'CheckLinkRelation',
        price: 35,
    },
    {
        illnessName: "Asthmatic",
        treatment: 'Ventolin',
        price: 40,
    },
    {
        illnessName: "SyntaxError",
        treatment: 'F12+Doc',
        price: 20,
    }
]
// ## The Pharmacy:
let Pharmacy = {
    name: "PharmaSphere",
    products: diagnosisGrid,
    people: [],
    box: [],

}
let home = {
    name: "home",
    people: [Marcus, Optimus, Sangoku, DarthVader, Semicolon]
}

Marcus.GoTo(home , doctor.office)
doctor.PatientIn(Marcus)

Optimus.GoTo(home , doctor.office)
doctor.PatientIn(Optimus)


// doctor.diagnosis(Optimus)
// doctor.waitingroom.people.push(Marcus)
// Patients will then go to the pharmacy and receive their treatment if they have enough money. If they have enough money, they will be in good health; otherwise, they will be dead, and you will need to push them into a cemetery.

// ### Treatment Rates:

// | Treatment           | Price |
// |---------------------|-------|
// | `Ctrl+Shift+F`      | 60€   |
// | `SaveOnFocusChange` | 100€  |
// | `CheckLinkRelation` | 35€   |
// | `Ventolin`          | 40€   |
// | `F12+Doc`           | 20€   |

// # Verification:

// Thanks to your debugger, follow the evolution of each patient. Make sure they leave the waiting room each time before entering the doctor's office, and they should leave the office before letting someone else enter.
