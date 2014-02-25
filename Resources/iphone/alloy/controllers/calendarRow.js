function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "calendarRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.container = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    calendarCellWidth = parseInt(Ti.App.SCREEN_WIDTH / 7);
    rowItems = args.data;
    monthCurrent = args.monthCurrent || null;
    rowItemsLength = args.data.length;
    for (var i = 0; rowItemsLength > i; i++) {
        var cell = Ti.UI.createLabel({
            color: "#000",
            font: {
                fontSize: "16dp"
            },
            text: args.data[i],
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            width: calendarCellWidth,
            height: Ti.UI.SIZE
        });
        monthCurrent && 0 === monthCurrent[i] && cell.setColor("#eaeaea");
        $.container.add(cell);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;