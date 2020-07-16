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

var controller = (function (UICtrl) {
    var setupEventlisteners = function () {
        var DOM = UICtrl.getDOMStrinngs();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function (event) {
            if(event.keyCode === 13 || event.keyCode === 13)
            ctrlAddItem();
        });
    };
    var ctrlAddItem = function () {
        var input = UICtrl.getInput();
        console.log(input);
    };

    return {
        init: function () {
            setupEventlisteners();
        }
    }
    
})(UIController);
controller.init();