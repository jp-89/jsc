
var moveDown = 5;
var moveRight = 0;
var downFactor = 3;
var lenMultiplier = 10;
var x_offset = 5;
var lineLenMultiplier = 20;
var divisorLenFactor = 10;
var lineWidth = 1;


function chapter_1_Q_4_KA(context,dividend,divisor, x,y){
context.font = " 14px Arial";
var startPoint = new Point(x,y);

var dividendLen = dividend.length;
var divisorLen= divisor.length;
var dividerLineLength = dividendLen* lineLenMultiplier;

// write dividend
 writeDividend(context,dividend,startPoint,"black");
 
 // divider line
 drawDividerLineWithPoint(context,startPoint, dividerLineLength);
 
 //divisor
 writeDivisor(context,divisor,startPoint,"black");
 
 // write equla sign
  movePoint(startPoint,-15,moveDown * downFactor*2);
  writeEqulaSign(context,startPoint,"black");
  
   // write divisor again
  movePoint(startPoint,15, -moveDown * downFactor);
  writeDivisor(context,divisor,startPoint,"black");
  
  // write first bracket opening
  writeFirstBracketForDivision(context,startPoint,divisorLen * divisorLenFactor,"black");
  
  // dividend
    movePoint(startPoint,divisorLen* lineLenMultiplier  ,0);
	var newDividend =  "10"; 
	var newDividendLen =  newDividend.length;
	writeDividend(context,newDividend,startPoint,"black");
	
	/// write close first bracket
	writeCloseFirstBracketForDivision(context,startPoint,newDividendLen*lenMultiplier,"black");
	
	// writing divided result
	var result = ".1666";
	writeDividedResult(context,result,startPoint, newDividendLen*lenMultiplier + x_offset,"black");
	
	// writing multiplication result with divider line
	var multiplicationResult = "6";
	movePoint(startPoint,x_offset, moveDown * downFactor);
	writeMultiplicationResult(context,multiplicationResult,startPoint,"black");
	 drawDividerLineWithPoint(context,startPoint, dividerLineLength);
	 
	 // new dividend
	 newDividend =  "40"; 
	 movePoint(startPoint,x_offset, moveDown * downFactor);
	 writeDividend(context,newDividend,startPoint,"black");
	 
	 
	 // writing multiplication result with divider line
	var multiplicationResult = "36";
	movePoint(startPoint,x_offset-2, moveDown * downFactor);
	writeMultiplicationResult(context,multiplicationResult,startPoint,"black");
	 drawDividerLineWithPoint(context,startPoint, dividerLineLength);
	 
	  // new dividend
	 newDividend =  "40"; 
	 movePoint(startPoint,x_offset, moveDown * downFactor);
	 writeDividend(context,newDividend,startPoint,"black");
	 
	  // writing multiplication result with divider line
	var multiplicationResult = "36";
	movePoint(startPoint,x_offset-2, moveDown * downFactor);
	writeMultiplicationResult(context,multiplicationResult,startPoint,"black");
	 drawDividerLineWithPoint(context,startPoint, dividerLineLength);
	 
	   // new dividend
	 newDividend =  "40"; 
	 movePoint(startPoint,x_offset, moveDown * downFactor);
	 writeDividend(context,newDividend,startPoint,"black");
	 
	 
	  // writing multiplication result with divider line
	var multiplicationResult = "36";
	movePoint(startPoint,x_offset-2, moveDown * downFactor);
	writeMultiplicationResult(context,multiplicationResult,startPoint,"black");
	 drawDividerLineWithPoint(context,startPoint, dividerLineLength);
	 
	   // new dividend
	 newDividend =  "40"; 
	 movePoint(startPoint,x_offset, moveDown * downFactor);
	 writeDividend(context,newDividend,startPoint,"black");

}



function chapter_1_Q_4_KHA(context,dividend,divisor, x,y){
context.font = " 14px Arial";
var startPoint = new Point(x,y);

var dividendLen = dividend.length;
var divisorLen= divisor.length;
var dividerLineLength = dividendLen* lineLenMultiplier;

// write dividend
 writeDividend(context,dividend,startPoint,"black");
 
 // divider line
 drawDividerLineWithPoint(context,startPoint, dividerLineLength);
 
 //divisor
 writeDivisor(context,divisor,startPoint,"black");
 
 // write equla sign
  movePoint(startPoint,-15,moveDown * downFactor*2);
  writeEqulaSign(context,startPoint,"black");
  
   // write divisor again
  movePoint(startPoint,15, -moveDown * downFactor);
  writeDivisor(context,divisor,startPoint,"black");
  
  // write first bracket opening
  writeFirstBracketForDivision(context,startPoint,divisorLen * divisorLenFactor,"black");
  
  // dividend
    movePoint(startPoint,divisorLen* lineLenMultiplier  ,0);
	var newDividend =  "70"; 
	var newDividendLen =  newDividend.length;
	writeDividend(context,newDividend,startPoint,"black");
	
	/// write close first bracket
	writeCloseFirstBracketForDivision(context,startPoint,newDividendLen*lenMultiplier,"black");
	
	// writing divided result
	var result = ".6363";
	writeDividedResult(context,result,startPoint, newDividendLen*lenMultiplier + x_offset,"black");
	
	// writing multiplication result with divider line
	var multiplicationResult = "66";
	movePoint(startPoint,x_offset, moveDown * downFactor);
	writeMultiplicationResult(context,multiplicationResult,startPoint,"black");
	 drawDividerLineWithPoint(context,startPoint, dividerLineLength);
	 
	 // new dividend
	 newDividend =  "40"; 
	 movePoint(startPoint,x_offset, moveDown * downFactor);
	 writeDividend(context,newDividend,startPoint,"black");
	 
	 
	 // writing multiplication result with divider line
	var multiplicationResult = "33";
	movePoint(startPoint,x_offset-2, moveDown * downFactor);
	writeMultiplicationResult(context,multiplicationResult,startPoint,"black");
	 drawDividerLineWithPoint(context,startPoint, dividerLineLength);
	 
	  // new dividend
	 newDividend =  "70"; 
	 movePoint(startPoint,x_offset, moveDown * downFactor);
	 writeDividend(context,newDividend,startPoint,"black");
	 
	  // writing multiplication result with divider line
	var multiplicationResult = "66";
	movePoint(startPoint,x_offset-2, moveDown * downFactor);
	writeMultiplicationResult(context,multiplicationResult,startPoint,"black");
	 drawDividerLineWithPoint(context,startPoint, dividerLineLength);
	 
	   // new dividend
	 newDividend =  "40"; 
	 movePoint(startPoint,x_offset, moveDown * downFactor);
	 writeDividend(context,newDividend,startPoint,"black");
	 
	 
	  // writing multiplication result with divider line
	var multiplicationResult = "33";
	movePoint(startPoint,x_offset-2, moveDown * downFactor);
	writeMultiplicationResult(context,multiplicationResult,startPoint,"black");
	 drawDividerLineWithPoint(context,startPoint, dividerLineLength);
	 
	   // new dividend
	 newDividend =  "70"; 
	 movePoint(startPoint,x_offset, moveDown * downFactor);
	 writeDividend(context,newDividend,startPoint,"black");

}



function chapter_1_Q_4_GA(context,dividend,divisor, x,y){
context.font = " 14px Arial";
var startPoint = new Point(x,y);

var dividendLen = dividend.length;
var divisorLen= divisor.length;
var dividerLineLength = dividendLen* lineLenMultiplier;

// write dividend
 writeDividend(context,dividend,startPoint,"black");
 
 // divider line
 drawDividerLineWithPoint(context,startPoint, dividerLineLength);
 
 //divisor
 writeDivisor(context,divisor,startPoint,"black");
 
 // write equla sign
  movePoint(startPoint,-15,moveDown * downFactor*2);
  writeEqulaSign(context,startPoint,"black");
  
   // write divisor again
  movePoint(startPoint,15, -moveDown * downFactor);
  writeDivisor(context,divisor,startPoint,"black");
  
  // write first bracket opening
  writeFirstBracketForDivision(context,startPoint,divisorLen * divisorLenFactor,"black");
  
  // dividend
    movePoint(startPoint,divisorLen* lineLenMultiplier  ,0);
	var newDividend =  "29"; 
	var newDividendLen =  newDividend.length;
	writeDividend(context,newDividend,startPoint,"black");
	
	/// write close first bracket
	writeCloseFirstBracketForDivision(context,startPoint,newDividendLen*lenMultiplier,"black");
	
	// writing divided result
	var result = "3.222";
	writeDividedResult(context,result,startPoint, newDividendLen*lenMultiplier + x_offset,"black");
	
	// writing multiplication result with divider line
	var multiplicationResult = "27";
	movePoint(startPoint,x_offset, moveDown * downFactor);
	writeMultiplicationResult(context,multiplicationResult,startPoint,"black");
	 drawDividerLineWithPoint(context,startPoint, dividerLineLength);
	 
	 // new dividend
	 newDividend =  "20"; 
	 movePoint(startPoint,x_offset, moveDown * downFactor);
	 writeDividend(context,newDividend,startPoint,"black");
	 
	 
	 // writing multiplication result with divider line
	var multiplicationResult = "18";
	movePoint(startPoint,x_offset-2, moveDown * downFactor);
	writeMultiplicationResult(context,multiplicationResult,startPoint,"black");
	 drawDividerLineWithPoint(context,startPoint, dividerLineLength);
	 
	  // new dividend
	 newDividend =  "20"; 
	 movePoint(startPoint,x_offset, moveDown * downFactor);
	 writeDividend(context,newDividend,startPoint,"black");
	 
	  // writing multiplication result with divider line
	var multiplicationResult = "18";
	movePoint(startPoint,x_offset-2, moveDown * downFactor);
	writeMultiplicationResult(context,multiplicationResult,startPoint,"black");
	 drawDividerLineWithPoint(context,startPoint, dividerLineLength);
	 
	   // new dividend
	 newDividend =  "20"; 
	 movePoint(startPoint,x_offset, moveDown * downFactor);
	 writeDividend(context,newDividend,startPoint,"black");
	 
	 
	  // writing multiplication result with divider line
	var multiplicationResult = "18";
	movePoint(startPoint,x_offset-2, moveDown * downFactor);
	writeMultiplicationResult(context,multiplicationResult,startPoint,"black");
	 drawDividerLineWithPoint(context,startPoint, dividerLineLength);
	 
	   // new dividend
	 newDividend =  "20"; 
	 movePoint(startPoint,x_offset, moveDown * downFactor);
	 writeDividend(context,newDividend,startPoint,"black");

}


function chapter_1_Q_4_GHA(context,dividend,divisor, x,y){
context.font = " 14px Arial";
var startPoint = new Point(x,y);

var dividendLen = dividend.length;
var divisorLen= divisor.length;
var dividerLineLength = dividendLen* lineLenMultiplier;

// write dividend
 writeDividend(context,dividend,startPoint,"black");
 
 // divider line
 drawDividerLineWithPoint(context,startPoint, dividerLineLength);
 
 //divisor
 writeDivisor(context,divisor,startPoint,"black");
 
 // write equla sign
  movePoint(startPoint,-15,moveDown * downFactor*2);
  writeEqulaSign(context,startPoint,"black");
  
   // write divisor again
  movePoint(startPoint,15, -moveDown * downFactor);
  writeDivisor(context,divisor,startPoint,"black");
  
  // write first bracket opening
  writeFirstBracketForDivision(context,startPoint,divisorLen * divisorLenFactor,"black");
  
  // dividend
    movePoint(startPoint,divisorLen* lineLenMultiplier  ,0);
	var newDividend =  "53"; 
	var newDividendLen =  newDividend.length;
	writeDividend(context,newDividend,startPoint,"black");
	
	/// write close first bracket
	writeCloseFirstBracketForDivision(context,startPoint,newDividendLen*lenMultiplier,"black");
	
	// writing divided result
	var result = "3.533";
	writeDividedResult(context,result,startPoint, newDividendLen*lenMultiplier + x_offset,"black");
	
	// writing multiplication result with divider line
	var multiplicationResult = "45";
	movePoint(startPoint,x_offset, moveDown * downFactor);
	writeMultiplicationResult(context,multiplicationResult,startPoint,"black");
	 drawDividerLineWithPoint(context,startPoint, dividerLineLength);
	 
	 // new dividend
	 newDividend =  "80"; 
	 movePoint(startPoint,x_offset, moveDown * downFactor);
	 writeDividend(context,newDividend,startPoint,"black");
	 
	 
	 // writing multiplication result with divider line
	var multiplicationResult = "75";
	movePoint(startPoint,x_offset-2, moveDown * downFactor);
	writeMultiplicationResult(context,multiplicationResult,startPoint,"black");
	 drawDividerLineWithPoint(context,startPoint, dividerLineLength);
	 
	  // new dividend
	 newDividend =  "50"; 
	 movePoint(startPoint,x_offset, moveDown * downFactor);
	 writeDividend(context,newDividend,startPoint,"black");
	 
	  // writing multiplication result with divider line
	var multiplicationResult = "45";
	movePoint(startPoint,x_offset-2, moveDown * downFactor);
	writeMultiplicationResult(context,multiplicationResult,startPoint,"black");
	 drawDividerLineWithPoint(context,startPoint, dividerLineLength);
	 
	   // new dividend
	 newDividend =  "50"; 
	 movePoint(startPoint,x_offset, moveDown * downFactor);
	 writeDividend(context,newDividend,startPoint,"black");
	 
	 
	  // writing multiplication result with divider line
	var multiplicationResult = "45";
	movePoint(startPoint,x_offset-2, moveDown * downFactor);
	writeMultiplicationResult(context,multiplicationResult,startPoint,"black");
	 drawDividerLineWithPoint(context,startPoint, dividerLineLength);
	 
	   // new dividend
	 newDividend =  "50"; 
	 movePoint(startPoint,x_offset, moveDown * downFactor);
	 writeDividend(context,newDividend,startPoint,"black");

}
	function writeMathText(context,textToWrite,position,textcolor){	
		context.stroke();
		context.lineWidth = lineWidth;
		context.restore();
		context.fillStyle = textcolor;
		context.fillText(textToWrite,position.x,position.y);
	}
	
	function writeMathTextWithAxis(context,textToWrite,x,y,textcolor){	
		context.stroke();
		context.lineWidth = lineWidth;
		context.restore();
		context.fillStyle = textcolor;
		context.fillText(textToWrite,x,y);
	}
	
	function writeFirstBracketForDivision(context,point,divisorLen,textcolor){
	
	  writeMathTextWithAxis(context,")",point.x + divisorLen ,point.y,textcolor);
	}
	
	function writeCloseFirstBracketForDivision(context,point,divisorLen,textcolor){
	
	  writeMathTextWithAxis(context,"(",point.x + divisorLen ,point.y,textcolor);
	}
	
	
	function writeDividend(context,dividend,point,color){
	  writeMathText(context,dividend,point,color);
	}
	
	function writeDivisor(context,divisor,point,color){
	  movePoint(point,moveRight,moveDown * downFactor);
	  writeMathText(context,divisor,point,color);
	}
	
	function writeDividedResult(context,result,point, xPosition,textcolor){
	  writeMathTextWithAxis(context,result, point.x + xPosition, point.y, textcolor);
	}
	
	function writeMultiplicationResult(context,result,point,textcolor){
	  writeMathTextWithAxis(context,result, point.x , point.y, textcolor);
	}
	
	function writeEqulaSign(context,point,color){
	  writeMathText(context,"=",point,color);
	}
	
	function drawDividerLineWithPoint(context,point, dividerLineLength){
	  movePoint(point,moveRight,moveDown);
	  context.beginPath();
	  context.moveTo(point.x - 8,point.y);
	  context.lineTo(point.x + dividerLineLength+5, point.y);
	  context.restore();
	  context.stroke();
	  
	}

	function drawPonoPunik(context, x,y,color){
		if(color) context.fillStyle=color;
		context.beginPath();
		context.fill();

	}
	function movePoint(point,x1,y1){
	    point.x = point.x + x1;
		point.y = point.y + y1;
	}


