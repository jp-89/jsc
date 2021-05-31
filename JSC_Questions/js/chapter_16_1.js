
function chapter_16_1_Q_1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	
	

	displayPointName(context,pointA,x1-15,y1+15);
	displayPointName(context, pointB,x2+5,y2+15);
	displayPointName(context,pointC,x3-10,y3-5);
	

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var rotatePoint = new Point(pointC.x+25,pointC.y+20);
	writeRotatedText(context,"25 meter",pointC,30,-10,Math.PI/4);
	//writeRotatedText(context,"25 meter",pointC,-80,-5,-Math.PI/2);
}

function chapter_16_1_Q_2(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x3,y3+40);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	

	displayPointName(context,pointA,x1-15,y1-1);
	displayPointName(context, pointB,x2+10,y2-5);
	displayPointName(context,pointC,x3-10,y3-5);
	displayPointName(context,pointD,x3-15,y3+50);
	
	
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");

	//var triangle = new Triangle(pointA,pointB,pointC);
	var triangle = new Triangle(pointA,pointB,pointD);
	drawTriangle(context, triangle);
	var rotatePoint = new Point(pointC.x+25,pointC.y+20);
	writeRotatedText(context,"4 meter",pointC,-20,-12,Math.PI/2);
	//writeRotatedText(context,"25 meter",pointC,-80,-5,-Math.PI/2);

}


function chapter_16_1_Q_3(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointB =  new Point(x1,y1);
	var pointC =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-10,pointA.y-3);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	var pointa = midPointBetweenTwoPoint(pointB,pointC );
	var pointb = midPointBetweenTwoPoint(pointC,pointA );
	var pointc = midPointBetweenTwoPoint(pointA,pointB );
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "red");
	displayName(context,pointa.x,pointa.y+15,"a");
	displayName(context,pointb.x+15,pointb.y,"b");
	displayName(context,pointc.x-15,pointc.y,"c");
	
}

function chapter_16_1_Q_4(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointB =  new Point(x1,y1);
	var pointC =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-10,pointA.y-3);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	var pointa = midPointBetweenTwoPoint(pointB,pointC );
	var pointb = midPointBetweenTwoPoint(pointC,pointA );
	var pointc = midPointBetweenTwoPoint(pointA,pointB );
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "red");
	displayName(context,pointa.x,pointa.y+15,"a");
	displayName(context,pointb.x+15,pointb.y,"b");
	displayName(context,pointc.x-15,pointc.y,"c");
	
}


function chapter_16_1_Q_5(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointB =  new Point(x1,y1);
	var pointC =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-10,pointA.y-3);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	var pointa = midPointBetweenTwoPoint(pointB,pointC );
	var pointb = midPointBetweenTwoPoint(pointC,pointA );
	var pointc = midPointBetweenTwoPoint(pointA,pointB );
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "red");
	displayName(context,pointa.x,pointa.y+15,"a");
	displayName(context,pointb.x+15,pointb.y,"b");
	displayName(context,pointc.x-15,pointc.y,"c");
	displayName(context,pointB.x+30,pointB.y+35,"চিত্র :১");
	
}

function chapter_16_1_Q_5_2(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointB =  new Point(x1,y1);
	var pointC =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	
	var pointa = midPointBetweenTwoPoint(pointB,pointC );
	var pointb = midPointBetweenTwoPoint(pointC,pointA );
	var pointc = midPointBetweenTwoPoint(pointA,pointB );
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	
	var pointB =  new Point(pointB.x-22,pointB.y+12);
	var pointC =  new Point(pointC.x+22,pointC.y+12);
	var pointA =  new Point(pointA.x,pointA.y-22);
	var triangle = new Triangle(pointA,pointB,pointC);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	
	displayPointName(context,pointA,pointA.x-15,pointA.y+5);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	
	drawTriangle(context, triangle);
	setContextColor(context, "red");
	displayName(context,pointa.x,pointa.y+10,"a");
	displayName(context,pointb.x+1,pointb.y,"a");
	displayName(context,pointc.x-10,pointc.y,"a");
	
	
	setContextColor(context, "purple");
	displayName(context,pointa.x+10,pointa.y+30,"a+2");
	displayName(context,pointb.x+25,pointb.y+10,"a+2");
	displayName(context,pointc.x-48,pointc.y+10,"a+2");
	
	
	displayName(context,pointB.x+30,pointB.y+35,"চিত্র :২");
	
}


function chapter_16_1_Q_6(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointB =  new Point(x1,y1);
	var pointC =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-10,pointA.y-3);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	var pointa = midPointBetweenTwoPoint(pointB,pointC );
	var pointb = midPointBetweenTwoPoint(pointC,pointA );
	var pointc = midPointBetweenTwoPoint(pointA,pointB );
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "red");
	displayName(context,pointa.x,pointa.y+15,"a");
	displayName(context,pointb.x+15,pointb.y,"b");
	displayName(context,pointc.x-15,pointc.y,"c");
	
}


function chapter_16_1_Q_7(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	
	

	displayPointName(context,pointA,x1-15,y1+15);
	displayPointName(context, pointB,x2+5,y2+15);
	displayPointName(context,pointC,x3-10,y3-5);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);

}


function chapter_16_1_Q_8(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointB =  new Point(x1,y1);
	var pointC =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-10,pointA.y-3);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	var pointa = midPointBetweenTwoPoint(pointB,pointC );
	var pointb = midPointBetweenTwoPoint(pointC,pointA );
	var pointc = midPointBetweenTwoPoint(pointA,pointB );
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "red");
	displayName(context,pointa.x,pointa.y+15,"b");
	displayName(context,pointb.x+15,pointb.y,"a");
	displayName(context,pointc.x-15,pointc.y,"a");
	
}


function chapter_16_1_Q_9(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(pointC.x,pointB.y);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");

	displayPointName(context,pointA,pointA.x-10,pointA.y+15);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y-5);
	displayPointName(context,pointD,pointD.x-5,pointD.y+15);
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "red");
	
	drawLineBetweenTwoPoints(context,pointB,pointD,"red");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	displayText(context,pointB.x-30,pointB.y-5,"135");
	displayText(context,pointB.x+15,pointB.y-5,"45");
	//displayName(context,pointa.x,pointa.y+15,"b");
	//displayName(context,pointb.x+15,pointb.y,"a");
	//displayName(context,pointc.x-15,pointc.y,"a");
	
}

function chapter_16_1_Q_10_Pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointB =  new Point(x1,y1);
	var pointC =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-10,pointA.y-3);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	
	var pointa = midPointBetweenTwoPoint(pointB,pointC );
	var pointb = midPointBetweenTwoPoint(pointC,pointA );
	var pointc = midPointBetweenTwoPoint(pointA,pointB );
	
	var pointO = midPointBetweenTwoPoint(pointA,pointa );
	setPointName(pointO,"O");
	drawPoint(context,pointO, "red");
	displayPointName(context,pointO,pointO.x-15,pointO.y+12);
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "red");

	var perpendiPointOnAB = perpendicularPointOnLineFromAPoint(pointA,pointB,pointO);
	var perpendiPointOnBC = perpendicularPointOnLineFromAPoint(pointB,pointC,pointO);
	var perpendiPointOnCA = perpendicularPointOnLineFromAPoint(pointC,pointA,pointO);
	
	setPointName(perpendiPointOnBC,"D");
	setPointName(perpendiPointOnAB,"F");	
	setPointName(perpendiPointOnCA,"E");
	
	displayPointName(context,perpendiPointOnBC,perpendiPointOnBC.x-5,perpendiPointOnBC.y+15);
	displayPointName(context, perpendiPointOnAB,perpendiPointOnAB.x-15,perpendiPointOnAB.y);
	displayPointName(context,perpendiPointOnCA,perpendiPointOnCA.x+5,perpendiPointOnCA.y);
	
	drawLineBetweenTwoPoints(context,pointO,perpendiPointOnAB,"purple");
	drawLineBetweenTwoPoints(context,pointO,perpendiPointOnBC,"purple");
	drawLineBetweenTwoPoints(context,pointO,perpendiPointOnCA,"purple");
	displayName(context,pointB.x+30,pointB.y+35,"চিত্র :১");
}


function chapter_16_1_Q_10_Pic2(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointB =  new Point(x1,y1);
	var pointC =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-10,pointA.y-3);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	
	var pointa = midPointBetweenTwoPoint(pointB,pointC );
	var pointb = midPointBetweenTwoPoint(pointC,pointA );
	var pointc = midPointBetweenTwoPoint(pointA,pointB );
	
	var pointO = midPointBetweenTwoPoint(pointA,pointa );
	setPointName(pointO,"O");
	drawPoint(context,pointO, "red");
	displayPointName(context,pointO,pointO.x-12,pointO.y+20);
	
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "red");
	
	var perpendiPointOnAB = perpendicularPointOnLineFromAPoint(pointA,pointB,pointO);
	var perpendiPointOnBC = perpendicularPointOnLineFromAPoint(pointB,pointC,pointO);
	var perpendiPointOnCA = perpendicularPointOnLineFromAPoint(pointC,pointA,pointO);
	
	setPointName(perpendiPointOnBC,"D");
	setPointName(perpendiPointOnAB,"F");	
	setPointName(perpendiPointOnCA,"E");
	
	displayPointName(context,perpendiPointOnBC,perpendiPointOnBC.x-5,perpendiPointOnBC.y+15);
	displayPointName(context, perpendiPointOnAB,perpendiPointOnAB.x-15,perpendiPointOnAB.y);
	displayPointName(context,perpendiPointOnCA,perpendiPointOnCA.x+5,perpendiPointOnCA.y);

	drawLineBetweenTwoPoints(context,pointO,perpendiPointOnAB,"purple");
	drawLineBetweenTwoPoints(context,pointO,perpendiPointOnBC,"purple");
	drawLineBetweenTwoPoints(context,pointO,perpendiPointOnCA,"purple");
	displayName(context,pointB.x+30,pointB.y+35,"চিত্র :2");
	
	var triangle2 = new Triangle(pointA,pointB,pointO);
	drawTriangle(context, triangle2);
	var triangle3 = new Triangle(pointB,pointC,pointO);
	drawTriangle(context, triangle3);
	var triangle4 = new Triangle(pointC,pointA,pointO);
	
	var fillcolor ='rgba(128,255,255,0.5)';
	drawTriangleWithFillColor(context, triangle2, fillcolor);
	
	fillcolor ='rgba(255,128,223,0.5)';
	drawTriangleWithFillColor(context, triangle3, fillcolor);
	
	 fillcolor ='rgba(191,255,128,0.5)';
	drawTriangleWithFillColor(context, triangle4, fillcolor);
	
	
}

	
	
	
	



