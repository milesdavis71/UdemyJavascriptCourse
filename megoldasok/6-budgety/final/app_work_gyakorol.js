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
        addItem: function (type, des, val) {
            var newItem, ID;
            if (data.allItems[type].length > 0) {
                data.allItems[type][data.allItems[type].length - 1].id + 1;
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
    var UIController = (function () {
        var DOMStrings = {
            inputType: '.add__type',
            inputDescription: '.add__description',
            inputValue: '.add__value',
            inputBtn: '.add__btn'
        };
        return {
            getInput: function () {
                return {
                    type: document.querySelector(DOMStrings.inputType).value,
                    description: document.querySelector(DOMStrings.inputDescription).value,
                    value: document.querySelector(DOMStrings.inputValue).value
                };
            },
            getDOMStrinngs: function () {
                return DOMStrings;
            }
        };
    })();

    var controller = (function (budgetCtrl, UICtrl) {
        var setupEventlisteners = function () {
            var DOM = UICtrl.getDOMStrinngs();
            document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
            document.addEventListener('keypress', function (event) {
                if (event.keyCode === 13 || event.keyCode === 13)
                    ctrlAddItem();
            });
        };
       var ctrlAddItem = function () {
           var input, newItem;
           input = UICtrl.getInput();
           newItem = budgetCtrl.addItem(input.type, input.description, input.value);
       };
        return {
            init: function () {
                setupEventlisteners();
            }
        }

    })(budgetController, UIController);
    controller.init();