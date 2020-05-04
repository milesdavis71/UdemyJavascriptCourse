// var johnSuly, jackSuly, johnMagassag, jackMagassag, bmiJohn, bmiJack;
// johnSuly = 75;
// jackSuly = 85;
// johnMagassag = 205
// jackMagassag = 198;
//
// bmiJohn = johnSuly / (johnMagassag * johnMagassag);
// bmiJack = jackSuly / (jackMagassag * jackMagassag);
//
// johnBmiHigher = bmiJohn > bmiJack;
//
// if (bmiJohn > bmiJack) {
// console.log("John testtömegindexe magasabb, mint Jacké");
// }
// else{
//     console.log("Jack testtömegindexe magasabb, mint Jacké");
//
// }

//
// var johnTeamAverage, mikeTeamAverage, maryTeamAverage,
//     johnTeamScore1, johnTeamScore2, johnTeamScore3,
//     mikeTeamScore1, mikeTeamScore2, mikeTeamScore3,
//     maryTeamScore1, maryTeamScore2, maryTeamScore3;
//
// johnTeamScore1 = 89;
// johnTeamScore2 = 2000;
// johnTeamScore3 = 103;
//
// mikeTeamScore1 = 500;
// mikeTeamScore2 = 94;
// mikeTeamScore3 = 123;
//
// maryTeamScore1 = 97;
// maryTeamScore2 = 1000;
// maryTeamScore3 = 105;
//
// johnTeamAverage = (johnTeamScore1 + johnTeamScore2 + johnTeamScore3)/3;
// mikeTeamAverage = (mikeTeamScore1 + mikeTeamScore2 + mikeTeamScore3)/3;
// maryTeamAverage = (maryTeamScore1 + maryTeamScore2+ maryTeamScore3)/3;


// switch (true){
//     case johnTeamAverage > mikeTeamAverage && johnTeamAverage > maryTeamAverage:
//         (console.log("John csapata a legjobb "+johnTeamAverage+" ponttal"));
//         break;
//     case mikeTeamAverage > johnTeamAverage && mikeTeamAverage > maryTeamAverage:
//         (console.log("Mike csapata a legjobb " + mikeTeamAverage+ " ponttal"));
//     break;
//     case maryTeamAverage > johnTeamAverage && maryTeamAverage > mikeTeamAverage;
//     (console.log("Mary csapata a legjobb " + maryTeamAverage+ " ponttal"));
//
// }


/*
function tipCalculator(bill) {
    var percentage;
    switch (true) {
        case bill < 50:
            percentage = 0.2;
            break;
        case bill > 50 && bill< 200:
        percentage = 0.15;
            break;
        case bill > 200:
            percentage = 0.1;
        }
    return bill * percentage;

}

var bill = [124, 48, 268];
var tip = [tipCalculator(bill[0]),
                    tipCalculator(bill[1]),
                    tipCalculator(bill[2])];
var finalValues = [bill[0] + tip[0],
                   bill[1] + tip[1],
                   bill[2] + tip[2]];

console.log(tip, finalValues);
*/
/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

/*

var mark = {
    fullName: 'Mark',
    height: 10,
    mass: 85,

    calcBMI: function() {
        this.bmi = this.mass/(this.height * this.height);
    }
};

var john = {
    fullName: 'John',
    height: 50,
    mass: 76,

    calcBMI: function() {
        this.bmi = this.mass/(this.height * this.height);
    }
};

johnBMI = john.calcBMI();
marrkBMI = mark.calcBMI();

if (mark.bmi > john.bmi){
    console.log(mark.fullName +'BMI-je magasabb ('+ mark.bmi+'), mint'+ john.fullName+'-é ('+john.bmi+').');
} else{
    console.log(john.fullName +'BMI-je magasabb ('+ john.bmi+'), mint'+ mark.fullName+'-é ('+mark.bmi+').');

}

/*

/*
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

 */

var johnfamily = {
    bills: [124, 48, 268, 180, 42],

    tipCalculator: function () {
        this.tips = [];
        this.finalValues = [];
        for (let i = 0; i < this.bills.length; i++) {
            //Ebbe a változóba, kerül hogy hány százalék a plusz.
            var percent;
            // a bills tömb aktuális (bill) tagja.
            var bill = this.bills[i];
            if (bill < 50) {
                percent = 0.2;
            } else if (bill > 50 && bill < 200) {
                percent = 0.15;
            } else if (bill > 200) {
                percent = 0.1;
            }

            // Az aktuális eredményeket a fent létrehozott
            // 1-1 üres tömbbe teszi bele. A tömb elemeinek
            // száma attól függ, hogy hány számla van.
            this.tips[i] = bill[i] + percent;
            this.finalValues[i] = bill[i] + this.tips[i];

        }
    },
}
johnfamily.tipCalculator();
console.log(johnfamily);