

function chapter_9_1_Q_2_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointB =  new Point(x1,y1);
	var pointC =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");	
	
	displayPointName(context,pointA,pointA.x,pointA.y-5);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x,pointC.y+15);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	
}

function chapter_9_1_Q_3_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointB =  new Point(x1,y1);
	var pointC =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");	
	
	displayPointName(context,pointA,pointA.x,pointA.y-5);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x,pointC.y+15);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	
}

function chapter_9_1_Q_4_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointC =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");	
	
	displayPointName(context,pointA,pointA.x,pointA.y-5);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x,pointC.y+15);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	displayName(context,pointB.x-30,pointB.y-3,"θ");
	
}

function chapter_9_1_Q_5_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointB =  new Point(x1,y1);
	var pointA =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");	
	
	displayPointName(context,pointA,pointA.x,pointA.y+10);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y-5);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	displayName(context,pointB.x-30,pointB.y-3,"θ");
	
}
function chapter_9_2_Q_27(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	
	

	displayPointName(context,pointA,x1-10,y1-5);
	displayPointName(context, pointB,x2-15,y2+5);
	displayPointName(context,pointC,x3+5,y3+5);
	
	// display arm length
	displayText(context,pointA.x-12,pointA.y+60,"1");
	displayText(context,pointB.x+55,pointB.y+20,"√3");
	
	// display angles
	displayText(context,pointA.x+4,pointA.y+40,"x+y");
	displayText(context,pointC.x-50,pointC.y-5,"x-y");
	

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
			

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
	
	
	



