
var budgetController = (function () {
    // Some code
})();
// Ez egy IFEE
var UIController = (function () {
    
    // ez az objektum arra jó, hogy ha a html-ben más lesz az osztály neve,
    // akkor könnyen megváltoztatható legyen itt, a js kódban is.
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value'
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
        }

    };
})();
// Ez maga a kontroller, itt lesz meghívva a többi modul.
var controller = (function (budgetCtrl, UICtrl) {
    var ctrlAdditem = function () {
        // Ez publikus, ez érhető el kívülről.
        // 1. beolvasni az UI-ról mező adatokat
        var input = UICtrl.getInput();
        console.log(input); 

        var input = UICtrl.getInput();

    }
    document.querySelector('.add__btn').addEventListener('click', ctrlAdditem);
    document.addEventListener('keypass', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });
})(budgetController, UIController);
