


var date = moment("2014-03-01", "YYYY-MM-DD");
var month = date.month();
var year = date.year();
var daysInMonth = date.daysInMonth();
var monthName = cal_months_labels[month];

var week = date.week();

$.monthLabel.text = monthName + " " + year;

var monthLabels = {
	"data" : cal_days_labels,
};

var monthRow = Alloy.createController("calendarRow", monthLabels).getView();
$.calendar.add(monthRow);

var rowItems;
date.startOf('week');

for (var j = 0; j < 6; j++) {
	rowItems = [];
	monthCurrent = [];
	for (var i = 0; i < 7; i++) {
		rowItems[i] = date.date();
		if(date.month() === month){
			monthCurrent[i] = 1;
		}
		else{
			monthCurrent[i] = 0;
		}
		date.add('days', 1);
	};

	var rowLabels = {
		"data" : rowItems,
		"monthCurrent" :  monthCurrent
	};

	Ti.API.info(rowItems);
	var calendarRow = Alloy.createController("calendarRow", rowLabels).getView();
	$.calendar.add(calendarRow);
	
	if(date.month() != month){
		break;
	}

};

$.index.open();
