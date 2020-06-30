
var budgetController = (function () {
    // Some code
})();
// Ez egy IFEE
var UIController = (function () {
    
    // ez az objektum arra jó, hogy ha a html-ben lévő DOM stringek (osztály nevek) megváltoznak, akkor a DOM stringek könnyen megváltoztathatók legyenek itt, a js kódban is.
    // 3 DOM string van az UIController függvényben, és 1 a controller függvényben. Ez az objektum viszont az UIControllerben van. Valahogy meg kell mutatni a másik függvénynek is.
    // Ezt az objekutmot át kell adni az egyik osztályból a másikba.

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    // a returnben három változót akarunk egyszerre visszakapni, erre az a legjobb
    // módszer, ha egy objektumba rakjuk őket.

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //Lehet növekedés vagy csökkenés
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value

            };
        }, // <-- Ide kell egy vessző, nézz utána, miért.
        // ez a return megmutatja a privát DOMStrings objektumot a többi (publikus) függvénynek
        getDOMStrings: function() {
            return DOMstrings;
        }

    };
})();
// Ez maga a kontroller, itt lesz meghívva a többi modul.
var controller = (function (budgetCtrl, UICtrl) {
    var DOM = UIController.getDOMStrings();
    var ctrlAdditem = function () {
        // Ez publikus, ez érhető el kívülről.
        // 1. beolvasni az UI-ról mező adatokat
        var input = UICtrl.getInput();
        console.log(input); 

        var input = UICtrl.getInput();

    }
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAdditem);
    document.addEventListener('keypass', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(budgetController, UIController);
