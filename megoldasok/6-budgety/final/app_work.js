
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
        getDOMStrings: function () {
            return DOMstrings;
        }

    };
})();
// Ez maga a kontroller, itt lesz meghívva a többi modul.
// kontroller függvény egy IIFE, de a benne lévő setupEventListeners és ctrlAddItem függvényeket az inicializálás során kell meghívni.
var controller = (function (budgetCtrl, UICtrl) {
    // privát függvény
    var setupEventListeners = function () {
        var DOM = UIController.getDOMStrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        // document.addEventListener('keypass', function (event) {
        //     if (event.keyCode === 13 || event.which === 13) {
        //         ctrlAddItem();
        //     }
        // });
    };
    // privát függvény
    var ctrlAddItem = function () {
        // Ez publikus, ez érhető el kívülről.
        // 1. beolvasni az UI-ról mező adatokat
        var input = UICtrl.getInput();


    };

    // meghívja a setupEventListeners-t, arra jó, hogy az eseménykezelők (eventlisteners) csak akkor indul el, amikor az init-tel meghívjuk. És ezt a meghívást a kontrolleren kívül fogjuk csinálni.
    return {
        init: function () {
            console.log('Application has started.');
            setupEventListeners();
        }
    };

})(budgetController, UIController);
// Az init kívül került a kontrolleren, ezzel elérhetővé vált, hogy amíg nincs inicializálás, addig nincsnenek eseménykezelők, anélkül meg nincs bevitt adat se. 
controller.init();
