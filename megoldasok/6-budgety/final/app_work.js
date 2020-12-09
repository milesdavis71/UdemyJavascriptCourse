
var budgetController = (function () {
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            // Különbség az „else” és az „else if” között.
            // Az else akkor lép életbe, ha az if NEM igaz.
            // Az else if olyan, mint egy switch, azaz ha az egyik
            // dolog éppen nem igaz, akkor továbbmegy,
            // és megnézi, hogy hogy igaz-e a következő feltétel. 

            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            data.allItems[type].push(newItem);
            return newItem;
            

        },
        testing: function () {
            console.log(data);
        }
    };


})();
// Ez egy IFEE
var UIController = (function () {

    // ez az objektum arra jó, hogy ha a html-ben lévő DOM stringek (osztály nevek) megváltoznak,
    // akkor a DOM stringek neve könnyen megváltoztatható legyen itt, a js kódban is.
    // 3 DOM string van az UIController függvényben, és 1 a controller függvényben.
    // Ez az objektum viszont az UIControllerben van. Valahogy meg kell mutatni a másik függvénynek is.
    // Ezt az objekutmot át kell adni az egyik osztályból a másikba. --> a getDOMSstrings függvéy adja át
    // a DOMStrings objektumot.

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value, //Lehet növekedés vagy csökkenés
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value

            };
        }, // <-- Ide kell egy vessző, nézz utána, miért.
        // ez a return megmutatja a privát DOMStrings objektumot a többi (publikus) függvénynek
        getDOMStrings: function () {
            return DOMStrings;
        }

    };
})();
// Ez maga a kontroller, itt lesz meghívva a többi modul.
// kontroller függvény egy IIFE, de a benne lévő setupEventListeners és ctrlAddItem
// függvényeket az inicializálás során kell meghívni.
// a paraméterként megadott két függvény zárójelben, azoknak a tulajdonságai így használhatók a kontrollerben.
var controller = (function (budgetCtrl, UICtrl) {
    // privát függvény. Itt kerül  be a UIControllerből az inputBtn
    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMStrings();
        // Itt mennek be az értékek a UI-ból a kontrollerbe.
        // A 'click' után annak a függvénynek a neve kerül, ami végrehajtódik a gomb megnyomásának hatására.
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypass', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };
    // privát függvény
    var ctrlAddItem = function () {
        // Ezek publikusak, elérhetők kívülről.
        // 1. beolvasni az UI-ról mező adatokat
        var input, newItem;
        input = UICtrl.getInput();
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

    };

    // meghívja a setupEventListeners-t, arra jó, hogy az eseménykezelők (eventlisteners) csak akkor indulnak el, amikor az init-tel meghívjuk. És ezt a meghívást a kontrolleren kívül fogjuk csinálni.
    return {
        init: function () {
            setupEventListeners();
        }
    };
 })(budgetController, UIController);
// Az init kívül került a kontrolleren, ezzel elérhetővé vált, hogy amíg nincs inicializálás, addig nincsnenek eseménykezelők, anélkül meg nincs bevitt adat se. 
controller.init();
