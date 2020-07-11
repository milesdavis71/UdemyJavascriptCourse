var UIController = (function () {
    var DOMStrinsgs = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrinsgs.inputType).value,
                description: document.querySelector(DOMStrinsgs.inputDescription).value,
                value: document.querySelector(DOMStrinsgs.inputValue).value,
            };
        },
        getDOMStrings: function () {
            return DOMStrinsgs;

        }
    };
})();

var controller = (function (UICtrl) {
    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMStrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    };

    var ctrlAddItem = function () {
        var input = UICtrl.getInput();
        console.log(input)
    };

    return {
        init: function () {
            setupEventListeners();
        }
    }
})(UIController);
controller.init();