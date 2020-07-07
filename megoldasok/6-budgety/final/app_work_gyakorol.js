var UIController = (function () {
    var DOMStrings = {
        inputType: ('add__tpye'),
        inputDescription: ('add__description'),
        inputValue: ('add__Value'),
        inputBtn: ('add__btn'),
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.type).value,
                description: document.querySelector(DOMStrings.description).value,
                value: document.querySelector(DOMStrings.value).value,
            };
        },
        getDOMStrings: function () {
            return DOMStrings;
        }

};
}) ();

var controller = (function (UICtrl) {
    var setupEventListener = function () {
        var DOM = UICtrl.getDOMStrings();
        document.querySelector(getDOMStrings.inputBtn).addEventListener('click');
    }

    var ctrlAddItem = function () {
        var input = UICtrl.getInput();
        console.log(input);
    };
})(UIController);

