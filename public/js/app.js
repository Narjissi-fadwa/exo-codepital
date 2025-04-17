//! Welcome to Codepital:
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
        prevlocation.people = prevlocation.people.filter(person => person !== this);
        console.log(`${this.name} left the ${prevlocation.name} and went to the ${destination.name}.`);

    }
    pay(treatment) {
        console.log(this.name + ' is currently in the pharmacy.');
        for (let i = 0; i < Pharmacy.products.length; i++) {
            if (this.illness == Pharmacy.products[i].illnessName) {
                if (this.money >= Pharmacy.products[i].price) {
                    this.money -= Pharmacy.products[i].price
                    Pharmacy.products[i].money += Pharmacy.products[i].price
                    this.healthState = 'well'
                    this.pocket.push(this.money)
                    console.log(`${this.name} paid €${Pharmacy.products[i].price}. Remaining money: €${this.money}`)
                    console.log(`${this.name} is now healthy and has treatment "${treatment}" in their pocket.`);
                    break;
                } else {
                    // this.GoTo(Pharmacy , cemetry )
                    cemetry.people.push(this)
                    this.healthState = 'dead'
                    console.log(`${this.name} could not afford the treatment and has passed away.`);
                    break;
                }
            }
        }
    }
    
    }

let Marcus = new Patients("Marcus", "IndentationError", 100, [], "Ill", []);
let Optimus = new Patients("Optimus", "Unsave", 200, [], "Ill", []);
let Sangoku = new Patients("Sangoku", "404", 80, [], "Ill", []);
let DarthVader = new Patients("DarthVader", "Asthmatic", 110, [], "Ill", []);
let Semicolon = new Patients("Semicolon", "SyntaxError", 60, [], "Ill", []);
class Doctor {
    constructor(name, money, office, waitingroom, consultationroom) {
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
                console.log(`${patient.name} has been diagnosed with ${diagnosisGrid[i].illnessName}.`);
                console.log(`Prescribed treatment: ${diagnosisGrid[i].treatment}`);
                break;
            }
        }
    }
    PatientIn(patient) {
        if (this.consultationroom.people.length == 0) {
            this.consultationroom.people.push(patient);
            console.log(`${patient.name} entered the ${this.consultationroom.name}.`);
        } else {
            this.waitingroom.people.push(patient);
            console.log(`${patient.name} is waiting in the ${this.waitingroom.name}.`);
        }

    }
    Patientout(patient) {
        this.money += 50
        patient.money -= 50
        console.log(`${patient.name} paid €50 for the consultation.`);
        this.consultationroom.people.splice(patient, 1);
        console.log(`${patient.name} left the ${this.consultationroom.name}.`);

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
    name: "consultationroom",
    people: [],
}
const doctor = new Doctor("Debugger", 0, office, waitingroom, consultationroom);
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
let Pharmacy = {
    name: "PharmaSphere",
    products: diagnosisGrid,
    people: [],
    box: [],

}
let home = {
    name: "home",
    people: [Marcus, Optimus , Sangoku , DarthVader , Semicolon]
}
let cemetry = {
    name: "RIP",
    people: [],
}
Marcus.GoTo(home, doctor.office)
doctor.PatientIn(Marcus)
Optimus.GoTo(home, doctor.office)
doctor.PatientIn(Optimus)
doctor.diagnosis(Marcus)
doctor.Patientout(Marcus)
Marcus.GoTo(doctor.office , Pharmacy)
Marcus.pay(Marcus.treatment[0]);
doctor.PatientIn(Optimus)
doctor.diagnosis(Optimus)
doctor.Patientout(Optimus)
Optimus.GoTo(doctor.office , Pharmacy)
Optimus.pay(Optimus.treatment[0]);

