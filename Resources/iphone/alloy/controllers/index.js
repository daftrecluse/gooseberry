function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.calendar = Ti.UI.createScrollView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        top: 100,
        id: "calendar"
    });
    $.__views.index.add($.__views.calendar);
    $.__views.monthLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "monthLabel"
    });
    $.__views.calendar.add($.__views.monthLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var date = moment("2014-03-01", "YYYY-MM-DD");
    var month = date.month();
    var year = date.year();
    date.daysInMonth();
    var monthName = cal_months_labels[month];
    date.week();
    $.monthLabel.text = monthName + " " + year;
    var monthLabels = {
        data: cal_days_labels
    };
    var monthRow = Alloy.createController("calendarRow", monthLabels).getView();
    $.calendar.add(monthRow);
    var rowItems;
    date.startOf("week");
    for (var j = 0; 6 > j; j++) {
        rowItems = [];
        monthCurrent = [];
        for (var i = 0; 7 > i; i++) {
            rowItems[i] = date.date();
            monthCurrent[i] = date.month() === month ? 1 : 0;
            date.add("days", 1);
        }
        var rowLabels = {
            data: rowItems,
            monthCurrent: monthCurrent
        };
        Ti.API.info(rowItems);
        var calendarRow = Alloy.createController("calendarRow", rowLabels).getView();
        $.calendar.add(calendarRow);
        if (date.month() != month) break;
    }
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;