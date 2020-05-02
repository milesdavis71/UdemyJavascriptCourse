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


var johnTeamAverage, mikeTeamAverage, maryTeamAverage,
    johnTeamScore1, johnTeamScore2, johnTeamScore3,
    mikeTeamScore1, mikeTeamScore2, mikeTeamScore3,
    maryTeamScore1, maryTeamScore2, maryTeamScore3;

johnTeamScore1 = 89;
johnTeamScore2 = 2000;
johnTeamScore3 = 103;

mikeTeamScore1 = 500;
mikeTeamScore2 = 94;
mikeTeamScore3 = 123;

maryTeamScore1 = 97;
maryTeamScore2 = 1000;
maryTeamScore3 = 105;

johnTeamAverage = (johnTeamScore1 + johnTeamScore2 + johnTeamScore3)/3;
mikeTeamAverage = (mikeTeamScore1 + mikeTeamScore2 + mikeTeamScore3)/3;
maryTeamAverage = (maryTeamScore1 + maryTeamScore2+ maryTeamScore3)/3;


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

