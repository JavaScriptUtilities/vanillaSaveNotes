
var vanillaSaveNotes = function() {
    var self = this,
        jsValues,
        items,
        editorID = 'data-hasjseditorid',
        localStorageKey = 'datajseditor';

    self.init = function() {
        self.loadValues();
        self.insertValues();
        self.setEvents();
        self.saveValues();
    };

    /* Load values */
    self.loadValues = function() {
        /* Get items with notes */
        items = document.querySelectorAll('[' + editorID + ']');

        /* JS Values from lcalstorage */
        jsValues = JSON.parse(localStorage.getItem(localStorageKey));
        if (typeof jsValues !== 'object' || jsValues === null) {
            jsValues = {};
        }
    };

    /* Insert saved values into DOM */
    self.insertValues = function() {
        items.forEach(function(item) {
            var id = item.getAttribute(editorID);
            if (jsValues[id]) {
                item.innerHTML = jsValues[id];
            }
        });
    };

    /* Watch some events */
    self.setEvents = function() {
        document.addEventListener('keyup', self.saveValues);
        document.addEventListener('blur', self.saveValues);
    };

    /* Save current values */
    self.saveValues = function() {
        jsValues = {};
        items.forEach(function(item) {
            jsValues[item.getAttribute(editorID)] = item.innerHTML;
        });
        localStorage.setItem(localStorageKey, JSON.stringify(jsValues));
    };

    /* Reset */
    self.reset = function(){
        localStorage.setItem(localStorageKey, '{}');
        window.location.reload();
    };

    self.init();
    return self;
};
