
function chapter_16_2_Q_1(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	drawRectangle(context, retangle);
	displayText(context,x2+30,y2+20,"x মিটার ");
	writeRotatedText(context,"2x মিটার",pointB,10,-3,-Math.PI/2);

	
}
function chapter_16_2_Q_2(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	drawRectangle(context, retangle);
	displayText(context,x2+30,y2+20,"60 মিটার ");
	writeRotatedText2(context,"80 মিটার",pointB,30,-5,-Math.PI/2);
	
	// for inner area
	var pointA2 =  new Point(x1+20,y1+20);
	var pointB2 =  new Point(x2+20,y2-20);
	var pointC2 =  new Point(x3-20,y3-20);
	var pointD2 =  new Point(x4-20,y4+20);
	
	var retangle2 = new Rectangle(pointA2,pointB2,pointC2,pointD2);
	drawRectangle(context, retangle2);
	displayText(context,x1+30,y1+20,"4 মিটার ");
	writeRotatedText(context,"4 মিটার",pointD,50,18,Math.PI/2);

	
}

function chapter_16_2_Q_3(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	drawRectangle(context, retangle);
	displayText(context,x2+30,y2+20,"30 মিটার ");
	writeRotatedText2(context,"40 মিটার",pointB,30,-5,-Math.PI/2);
	
	// for inner area
	var pointA2 =  new Point(x1+20,y1+20);
	var pointB2 =  new Point(x2+20,y2-20);
	var pointC2 =  new Point(x3-20,y3-20);
	var pointD2 =  new Point(x4-20,y4+20);
	
	var retangle2 = new Rectangle(pointA2,pointB2,pointC2,pointD2);
	drawRectangle(context, retangle2);
	displayText(context,x1+30,y1+20,"a মিটার ");
	writeRotatedText(context,"a মিটার",pointD,50,18,Math.PI/2);

	
}



function chapter_16_2_Q_4(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	drawRectangle(context, retangle);
	
	// for inner area
	var pointA2 =  new Point(x1+20,y1+20);
	var pointB2 =  new Point(x2+20,y2-20);
	var pointC2 =  new Point(x3-20,y3-20);
	var pointD2 =  new Point(x4-20,y4+20);
	
	var retangle2 = new Rectangle(pointA2,pointB2,pointC2,pointD2);
	drawRectangle(context, retangle2);
	displayText(context,x1+30,y1+20," 5 মিটার ");
	writeRotatedText(context," 5 মিটার",pointD,50,18,Math.PI/2);

	
}


function chapter_16_2_Q_5(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	drawRectangle(context, retangle);
	
	// for inner area
	var pointA2 =  new Point(x1/10,y1/10);
	var pointB2 =  new Point(x2/10,y2/10);
	var pointC2 =  new Point(x3/10,y3/10);
	var pointD2 =  new Point(x4/10,y4/10);
	
	var retangle2 = new Rectangle(pointA2,pointB2,pointC2,pointD2);
	drawRectangle(context, retangle2);
}


function chapter_16_2_Q_8_pic_1(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	
	
	

	displayPointName(context,pointA,x1-5,y1-5);
	displayPointName(context, pointB,x2,y2+15);
	displayPointName(context,pointC,x3-10,y3+15);
	displayPointName(context,pointD,x4-5,y4-5);
	
	var rectangle = new Rectangle(pointA,pointB,pointC,pointD);
	 setRectangleLineColor(rectangle,"blue");
	drawRectangle(context, rectangle);
	
	var perpendiPointOnBC = perpendicularPointOnLineFromAPoint(pointB,pointC,pointA);
	setPointName(perpendiPointOnBC,"L");
	displayPointName(context,perpendiPointOnBC,perpendiPointOnBC.x,perpendiPointOnBC.y+15);
	drawLineBetweenTwoPoints(context,pointA,perpendiPointOnBC,"green");
	
	
}

function chapter_16_2_Q_8_pic_2(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"P");
	setPointName(pointB,"Q");
	setPointName(pointC,"R");
	setPointName(pointD,"S");
	
	
	

	displayPointName(context,pointA,x1-5,y1-5);
	displayPointName(context, pointB,x2,y2+15);
	displayPointName(context,pointC,x3-10,y3+15);
	displayPointName(context,pointD,x4-5,y4-5);
	
	var rectangle = new Rectangle(pointA,pointB,pointC,pointD);
	setRectangleLineColor(rectangle,"blue");
	drawRectangle(context, rectangle);
	drawLineBetweenTwoPoints(context,pointA,pointC,"red");
	
	
	
	//var retangle2 = new Rectangle(pointA2,pointB2,pointC2,pointD2);
	//drawRectangle(context, retangle2);
	//displayText(context,x1+30,y1+20," 5 মিটার ");
	//writeRotatedText(context," 5 মিটার",pointD,50,18,Math.PI/2);

	
}



function chapter_16_2_Q_9_pic_1(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	
	
	

	displayPointName(context,pointA,x1-5,y1-5);
	displayPointName(context, pointB,x2,y2+15);
	displayPointName(context,pointC,x3-10,y3+15);
	displayPointName(context,pointD,x4-5,y4-5);
	
	var rectangle = new Rectangle(pointA,pointB,pointC,pointD);
	 setRectangleLineColor(rectangle,"blue");
	drawRectangle(context, rectangle);
	drawLineBetweenTwoPoints(context,pointA,pointC,"green");
	drawLineBetweenTwoPoints(context,pointB,pointD,"red");
	
	var perpendiPointOnBC = perpendicularPointOnLineFromAPoint(pointB,pointC,pointA);
	setPointName(perpendiPointOnBC,"L");
	displayPointName(context,perpendiPointOnBC,perpendiPointOnBC.x,perpendiPointOnBC.y+15);
	drawLineBetweenTwoPoints(context,pointA,perpendiPointOnBC,"purple");
	
	var pointE =  new Point(pointD.x,pointC.y);
	setPointName(pointE,"E");
	displayPointName(context,pointE,pointE.x,pointE.y+15);
	drawLineBetweenTwoPoints(context,pointD,pointE,"purple");
	drawLineBetweenTwoPoints(context,pointC,pointE,"purple");
	//var retangle2 = new Rectangle(pointA2,pointB2,pointC2,pointD2);
	//drawRectangle(context, retangle2);
	//displayText(context,x1+30,y1+20," 5 মিটার ");
	//writeRotatedText(context," 5 মিটার",pointD,50,18,Math.PI/2);

	
}

function chapter_16_2_Q_10_pic_1(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	
	
	

	displayPointName(context,pointA,x1-5,y1-5);
	displayPointName(context, pointB,x2,y2+15);
	displayPointName(context,pointC,x3-10,y3+15);
	displayPointName(context,pointD,x4-5,y4-5);
	
	var rectangle = new Rectangle(pointA,pointB,pointC,pointD);
	 setRectangleLineColor(rectangle,"blue");
	drawRectangle(context, rectangle);
	
	
	drawLineBetweenTwoPoints(context,pointA,pointC,"green");
	drawLineBetweenTwoPoints(context,pointB,pointD,"red");
	var pointO = midPointBetweenTwoPoint(pointA,pointC );
	setPointName(pointO,"O");
	displayPointName(context,pointO,pointO.x-7,pointO.y+15);
	
}

function chapter_16_2_Q_13_pic_1(context, x1,y1){
var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1-5,y1-10);
	var circle =  new Circle(centerO,50);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointD= getPointAtForDegree(circle,-35);
	var pointA= getPointAtForDegree(circle,-145);
	var pointC= getPointAtForDegree(circle,-210);
	var pointB= getPointAtForDegree(circle,-330);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-20,pointA.y);
	displayPointName(context,pointB,pointB.x+10,pointB.y);
	displayPointName(context,pointC,pointC.x-20,pointC.y);
	displayPointName(context,pointD,pointD.x+10,pointD.y);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	drawLineBetweenTwoPoints(context,pointA,pointD,"green");
	drawLineBetweenTwoPoints(context,pointB,pointC,"green");
    centerO.x= centerO.x;
    centerO.y= centerO.y-2;
	drawPoint(context,centerO , "red");
	displayName(context,80,150,"চিত্র :২");
}

function chapter_16_2_Q_11_pic_1(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	
	
	

	displayPointName(context,pointA,x1-5,y1-5);
	displayPointName(context, pointB,x2,y2+15);
	displayPointName(context,pointC,x3-10,y3+15);
	displayPointName(context,pointD,x4-5,y4-5);
	
	var rectangle = new Rectangle(pointA,pointB,pointC,pointD);
	 setRectangleLineColor(rectangle,"blue");
	drawRectangle(context, rectangle);
	
	
	var pointE =  new Point(pointD.x,pointC.y);
	setPointName(pointE,"E");
	var pointF = perpendicularPointOnLineFromAPoint(pointB,pointC,pointA);
	setPointName(pointF,"F");
	displayPointName(context,pointF,pointF.x,pointF.y+15);
	displayPointName(context,pointE,pointE.x,pointE.y+15);
	drawLineBetweenTwoPoints(context,pointD,pointE,"purple");
	drawLineBetweenTwoPoints(context,pointC,pointE,"purple");
	drawLineBetweenTwoPoints(context,pointA,pointF,"purple");
	//var retangle2 = new Rectangle(pointA2,pointB2,pointC2,pointD2);
	//drawRectangle(context, retangle2);
	//displayText(context,pointB.x+30,pointB.y+20," 30 সে.মি. ");
//	displayText(context,pointA.x+10,pointA.y-5," 11 সে.মি. ");
	//writeRotatedText2(context," 10 সে.মি. ",pointB,50,18,Math.PI/2);
	//writeRotatedText(context," 10 সে.মি. ",pointA,pointA.x-130,pointA.y-60,-Math.PI/2);
   // writeRotatedText(context," 12 সে.মি. ",pointD,pointD.x-180,pointD.y-20,Math.PI/3);

	
}


function chapter_16_2_Q_12_pic_1(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	
	
	

	displayPointName(context,pointA,x1-5,y1-5);
	displayPointName(context, pointB,x2,y2+15);
	displayPointName(context,pointC,x3-10,y3+15);
	displayPointName(context,pointD,x4-5,y4-5);
	
	var rectangle = new Rectangle(pointA,pointB,pointC,pointD);
	 setRectangleLineColor(rectangle,"blue");
	drawRectangle(context, rectangle);
	
	
	var pointE =  new Point(pointD.x,pointC.y);
	setPointName(pointE,"E");
	var pointF = perpendicularPointOnLineFromAPoint(pointB,pointC,pointA);
	setPointName(pointF,"F");
	displayPointName(context,pointF,pointF.x,pointF.y+15);
	displayPointName(context,pointE,pointE.x,pointE.y+15);
	drawLineBetweenTwoPoints(context,pointD,pointE,"purple");
	drawLineBetweenTwoPoints(context,pointC,pointE,"purple");
	drawLineBetweenTwoPoints(context,pointA,pointF,"purple");
	//var retangle2 = new Rectangle(pointA2,pointB2,pointC2,pointD2);
	//drawRectangle(context, retangle2);
	displayText(context,pointB.x+30,pointB.y+20," 30 সে.মি. ");
	displayText(context,pointA.x+10,pointA.y-5," 11 সে.মি. ");
	//writeRotatedText2(context," 10 সে.মি. ",pointB,50,18,Math.PI/2);
	writeRotatedText(context," 10 সে.মি. ",pointA,pointA.x-130,pointA.y-60,-Math.PI/2);
    writeRotatedText(context," 12 সে.মি. ",pointD,pointD.x-180,pointD.y-20,Math.PI/3);

	
}

function chapter_16_2_Q_13_pic_2(context, x1,y1,radius){

	//var pointA =  new Point(x1,y1);
	//var pointB =  new Point(x2,y2);
	var centerO =  new Point(x1,y1);
	var circle =  new Circle(centerO,radius);
	//drawCircle( context,circle,"blue");
	var startAngle = 0;
	var angleIncrement = 45;
	var pointC= getPointAtForDegree(circle,-startAngle);
	var pointD= getPointAtForDegree(circle,-(startAngle+1*angleIncrement));
	var pointE= getPointAtForDegree(circle,-(startAngle+2*angleIncrement));
	var pointF= getPointAtForDegree(circle,-(startAngle+3*angleIncrement));
	var pointG= getPointAtForDegree(circle,-(startAngle+4*angleIncrement));
	var pointH= getPointAtForDegree(circle,-(startAngle+5*angleIncrement));
	var pointI= getPointAtForDegree(circle,-(startAngle+6*angleIncrement));
	var pointJ= getPointAtForDegree(circle,-(startAngle+7*angleIncrement));
	var midPointFG = midPointBetweenTwoPoint(pointF,pointG );
	
	//drawPoint(context,pointC , "red");
	//drawPoint(context,pointD , "red");
	//drawPoint(context,pointE , "red");
	//drawPoint(context,pointF , "red");
	//drawPoint(context,pointG , "red");
	
	//drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	
	drawLineBetweenTwoPoints(context,pointC,pointD,"blue");
	drawLineBetweenTwoPoints(context,pointD,pointE,"blue");
	drawLineBetweenTwoPoints(context,pointE,pointF,"blue");
        //drawLineBetweenTwoPoints(context,pointF,midPointFG,"blue");
	drawLineBetweenTwoPoints(context,pointF,pointG,"blue");
	drawLineBetweenTwoPoints(context,pointG,pointH,"blue");
	drawLineBetweenTwoPoints(context,pointH,pointI,"blue");
	drawLineBetweenTwoPoints(context,pointI,pointJ,"blue");
	drawLineBetweenTwoPoints(context,pointJ,pointC,"blue");
	
	drawLineBetweenTwoPoints(context,centerO,pointC,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointD,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointE,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointF,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointG,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointH,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointI,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointJ,"blue");
	
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	setPointName(centerO,"O");
	
	displayPointName(context,pointC,pointC.x+5,pointC.y+5);   
    displayPointName(context,pointD,pointD.x+5,pointD.y-5); 
   displayPointName(context,centerO,centerO.x-10,centerO.y+20);	

}

	
	
	
	
	



