
/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀

*/



// function calculateBMI(mass, height) {
//     var bmi = (mass/height)*(mass/height);
//     return bmi;
// }

// var markBmi = calculateBMI(50, 100);
// var johnBmi = calculateBMI(80, 130);
// var markIsHigher = markBmi>johnBmi;


// console.log('Mark BMI-je magasabb '+markIsHigher);





/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀


*/
/*
var Person = function(name, score) {
 this.name = name;
 this.score = score;
}

Person.prototype.calcAvgScore = function () {
    avgScore = 0;
   for (let i = 0; i < this.score.length; i++) {
       avgScore += this.score[i];
       
   }
   return avgScore;
}

function calcAvgMax(players) {
  maxAvgScore = Math.max()
}

var mark = new Person('Mark', [89, 75, 63]);
    john = new Person('Mike', [110, 85, 75]);
    mary = new Person('Mary', [97, 134, 105]);


// Ternáris operátor 3 vizsgálatra. Az utolsó végén, ha egyik se igaz, akkor is továbbmegy.
let message = (mark.calcAvgScore() > john.calcAvgScore() && mark.calcAvgScore() > mary.calcAvgScore()) ? 'Markék átlaga nagyobb' :
  (john.calcAvgScore() > mark.calcAvgScore() && john.calcAvgScore() > mary.calcAvgScore()) ? 'Johnék átlaga nagyobb!' :
  (mary.calcAvgScore() > mark.calcAvgScore() && mary.calcAvgScore() > john.calcAvgScore()) ? 'Mary-ék átlaga nagyobb!' :
  (mark.calcAvgScore() === john.calcAvgScore() === mary.calcAvgScore()) ? 'egyenlő!' :
  'Hiba!';

console.log(message)

*/



/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀

*/
/*
var bills = [124, 48, 268];

var arrayCalc = function(arr, fn){
  var arrLoad = [];
  for (let i = 0; i < arr.length; i++) {
    arrLoad.push(fn(arr[i]));
  }
  return arrLoad;
}

function calcSumOfBill(el){
  var tipVal = (el < 50) ? el+ el*.2 :
            (el > 50 && el < 200) ? el+ el*.15 :
            (el > 200) ? el+ el*.1 :
            console.log("Hiba");
            return tipVal;
}

function calcTip(el){
  var tipValue = (el < 50) ? el * .2 :
            (el > 50 && el < 200) ? el * .15 :
            (el > 200) ? el * .1 :
            console.log("Hiba");
            return tipValue;
  };


var sumSum = arrayCalc(bills, calcTip);
var sumSumSum = arrayCalc(bills, calcSumOfBill);

console.log(sumSum, sumSumSum);
 */


/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀


*/
function Man(
  name,
  mass,
  height
  ) {
    this.name = name;
    this.mass = mass;
    this.height = height;
  
}

Man.prototype.calcBMI = function () {
  bmi = this.mass/(this.height*this.height);
  return bmi;
}

var john = new Man(
  'John',
  100,
  180
)

var mark = new Man(
  'Mark',
  100,
  180
)

johnBMI = john.calcBMI();
markBMI = mark.calcBMI();

kiir = Math.max(johnBMI, markBMI);
console.log(kiir);

// biggerBMI();


/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

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

GOOD LUCK 😀
*/

/* function Guest(
  name,
  bills,
  limit1,
  limit2,
  percent1,
  percent2,
  percent3) {
  this.name = name;
  this.bills = bills;
  this.limit1 = limit1;
  this.limit2 = limit2;
  this.percent1 = percent1;
  this.percent2 = percent2;
  this.percent3 = percent3;

}

Guest.prototype.calcTip = function () {
  var arrPop = [];
  for (let i = 0; i < this.bills.length; i++) {
    tip = (this.bills[i] < this.limit1) ? this.bills[i] * this.percent1 / 100 :
      (this.bills[i] > this.limit1 && this.bills[i] < this.limit2) ? this.bills[i] * this.percent2 / 100 :
        (this.bills[i] > this.limit2) ? this.bills[i] * this.percent3 / 100 :
          console.log("Hiba");
          arrPop.push(tip);

  }
  var total = 0;
  for (let i = 0; i < arrPop.length; i++) {
    total += arrPop[i];
  }
  var avg = total/arrPop.length;
  return avg;



}


var john = new Guest(
  'John',
  [124, 48, 268, 180, 42],
  50,
  200,
  20,
  15,
  10);

var mark = new Guest(
  'Mark',
  [77, 375, 110, 45],
  100,
  300,
  20,
  10,
  25);




let markTomb = mark.calcTip();
let johnTomb = john.calcTip();

function biggestAvgTip() {
  (markTomb > johnTomb) ? console.log("biggestAvgTip -> markTomb", markTomb):
  (markTomb < johnTomb) ? console.log("biggestAvgTip -> johnTomb", johnTomb):
  console.log('Hiba');
}

biggestAvgTip(); */