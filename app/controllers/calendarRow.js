var args = arguments[0] || {};

calendarCellWidth = parseInt(Ti.App.SCREEN_WIDTH/7);

rowItems = args.data;
monthCurrent = args.monthCurrent || null;
rowItemsLength = args.data.length;


for (var i = 0; i < rowItemsLength; i++) {
	var cell = Ti.UI.createLabel({
		  color: '#000',
		  font: { fontSize:'16dp' },
		  text: args.data[i],
		  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		  width: calendarCellWidth, 
		  height: 40,
		  borderColor: '#dddddd',
		});
	if(monthCurrent){
		if(monthCurrent[i] === 0){
			cell.setColor("#eaeaea");
		}
	}

	cell.addEventListener('click', function(e){
		rect = e.source.getRect();
		Ti.API.info(rect.x);
		Ti.API.info(rect.y);
	});
	$.container.add(cell);
};