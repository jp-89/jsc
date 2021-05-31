function DrawFractionNumber(context,x1,y1,fullnumber,numerator,denominator){
	
	var numeratorLen =numerator.toString().length;
	var denominatorLen =denominator.toString().length;
	var barLength = numeratorLen;
	if(denominatorLen>numeratorLen){
		barLength = denominatorLen;
	}
	barLength = barLength*20;
	
	
	var x2 = x1+barLength;
	var y2= y1;
	var numerator_x = x1+10;
	var numerator_y = y1-5;
	
	var denominator_x = x1+10;
	var denominator_y = y1+15
	
	//displayText3(context,x1-5,y1+5,fullnumber);
	displayText4(context,numerator_x,numerator_y,numerator);
	displayText4(context,denominator_x,denominator_y,denominator);
	drawLineBetweenTwoPointsAxis(context,x1+5,y1,x2,y2,"black");
	
	}