var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var moment = require("alloy/moment");

var cal_days_labels = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];

var cal_months_labels = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

var pWidth = Ti.Platform.displayCaps.platformWidth;

var pHeight = Ti.Platform.displayCaps.platformHeight;

Ti.App.SCREEN_WIDTH = pWidth > pHeight ? pHeight : pWidth;

Ti.App.SCREEN_HEIGHT = pWidth > pHeight ? pWidth : pHeight;

Alloy.createController("index");