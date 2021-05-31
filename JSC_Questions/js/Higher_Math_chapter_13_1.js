function chapter_16_4_Q_8(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var pointE =  new Point(pointA.x,pointA.y-60);
	var pointF =  new Point(pointB.x,pointB.y-60);
	var pointG =  new Point(pointC.x,pointC.y-60);
	var pointH =  new Point(pointD.x,pointD.y-60);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	var retangle2 = new Rectangle(pointE,pointF,pointG,pointH);
	drawRectangle(context, retangle);
	drawRectangle(context, retangle2);
	drawLineBetweenTwoPoints(context,pointA,pointE,"red");
	drawLineBetweenTwoPoints(context,pointB,pointF,"red");
	drawLineBetweenTwoPoints(context,pointC,pointG,"red");
	drawLineBetweenTwoPoints(context,pointD,pointH,"red");
	drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
	drawLineBetweenTwoPoints(context,pointA,pointG,"green");
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context,pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x+5,pointD.y-5);
	
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	setPointName(pointG,"G");
	setPointName(pointH,"H");
	displayPointName(context,pointE,pointE.x-15,pointE.y);
	displayPointName(context,pointF,pointF.x+5,pointF.y+15);
	displayPointName(context,pointG,pointG.x+5,pointG.y);
	displayPointName(context,pointH,pointH.x,pointH.y-5);
	
}

function chapter_16_4_Q_9(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var pointE =  new Point(pointA.x,pointA.y-60);
	var pointF =  new Point(pointB.x,pointB.y-60);
	var pointG =  new Point(pointC.x,pointC.y-60);
	var pointH =  new Point(pointD.x,pointD.y-60);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	var retangle2 = new Rectangle(pointE,pointF,pointG,pointH);
	drawRectangle(context, retangle);
	drawRectangle(context, retangle2);
	drawLineBetweenTwoPoints(context,pointA,pointE,"red");
	drawLineBetweenTwoPoints(context,pointB,pointF,"red");
	drawLineBetweenTwoPoints(context,pointC,pointG,"red");
	drawLineBetweenTwoPoints(context,pointD,pointH,"red");
	drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
	drawLineBetweenTwoPoints(context,pointA,pointG,"green");
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context,pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x+5,pointD.y-5);
	
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	setPointName(pointG,"G");
	setPointName(pointH,"H");
	displayPointName(context,pointE,pointE.x-15,pointE.y);
	displayPointName(context,pointF,pointF.x+5,pointF.y+15);
	displayPointName(context,pointG,pointG.x+5,pointG.y);
	displayPointName(context,pointH,pointH.x,pointH.y-5);

}

function Higher_Math_chapter_13_Q_7(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var pointE =  new Point(pointA.x,pointA.y-60);
	var pointF =  new Point(pointB.x,pointB.y-60);
	var pointG =  new Point(pointC.x,pointC.y-60);
	var pointH =  new Point(pointD.x,pointD.y-60);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	var retangle2 = new Rectangle(pointE,pointF,pointG,pointH);
	drawRectangle(context, retangle);
	drawRectangle(context, retangle2);
	drawLineBetweenTwoPoints(context,pointA,pointE,"red");
	drawLineBetweenTwoPoints(context,pointB,pointF,"red");
	drawLineBetweenTwoPoints(context,pointC,pointG,"red");
	drawLineBetweenTwoPoints(context,pointD,pointH,"red");
	drawLineBetweenTwoPoints(context,pointB,pointD,"blue");
	drawLineBetweenTwoPoints(context,pointB,pointH,"green");
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context,pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x+5,pointD.y-5);
	
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	setPointName(pointG,"G");
	setPointName(pointH,"H");
	displayPointName(context,pointE,pointE.x-15,pointE.y);
	displayPointName(context,pointF,pointF.x+5,pointF.y+15);
	displayPointName(context,pointG,pointG.x+5,pointG.y);
	displayPointName(context,pointH,pointH.x,pointH.y-5);

}

function Higher_Math_chapter_13_Q_8(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var pointE =  new Point(pointA.x,pointA.y-60);
	var pointF =  new Point(pointB.x,pointB.y-60);
	var pointG =  new Point(pointC.x,pointC.y-60);
	var pointH =  new Point(pointD.x,pointD.y-60);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	var retangle2 = new Rectangle(pointE,pointF,pointG,pointH);
	drawRectangle(context, retangle);
	drawRectangle(context, retangle2);
	drawLineBetweenTwoPoints(context,pointA,pointE,"red");
	drawLineBetweenTwoPoints(context,pointB,pointF,"red");
	drawLineBetweenTwoPoints(context,pointC,pointG,"red");
	drawLineBetweenTwoPoints(context,pointD,pointH,"red");
	//drawLineBetweenTwoPoints(context,pointB,pointD,"blue");
	//drawLineBetweenTwoPoints(context,pointB,pointH,"green");
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context,pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x+5,pointD.y-5);
	
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	setPointName(pointG,"G");
	setPointName(pointH,"H");
	displayPointName(context,pointE,pointE.x-15,pointE.y);
	displayPointName(context,pointF,pointF.x+5,pointF.y+15);
	displayPointName(context,pointG,pointG.x+5,pointG.y);
	displayPointName(context,pointH,pointH.x,pointH.y-5);

}



function chapter_16_4_Q_11(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var pointE =  new Point(pointA.x,pointA.y-60);
	var pointF =  new Point(pointB.x,pointB.y-60);
	var pointG =  new Point(pointC.x,pointC.y-60);
	var pointH =  new Point(pointD.x,pointD.y-60);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	var retangle2 = new Rectangle(pointE,pointF,pointG,pointH);
	drawRectangle(context, retangle);
	drawRectangle(context, retangle2);
	drawLineBetweenTwoPoints(context,pointA,pointE,"red");
	drawLineBetweenTwoPoints(context,pointB,pointF,"red");
	drawLineBetweenTwoPoints(context,pointC,pointG,"red");
	drawLineBetweenTwoPoints(context,pointD,pointH,"red");
	//drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
	//drawLineBetweenTwoPoints(context,pointA,pointG,"green");
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context,pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x+5,pointD.y-5);
	
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	setPointName(pointG,"G");
	setPointName(pointH,"H");
	displayPointName(context,pointE,pointE.x-15,pointE.y);
	displayPointName(context,pointF,pointF.x+5,pointF.y+15);
	displayPointName(context,pointG,pointG.x+5,pointG.y);
	displayPointName(context,pointH,pointH.x,pointH.y-5);
	
	var fillcolor ='rgba(205,229,255,0.5)';
	var rectangle4 = new Rectangle(pointH,pointD,pointC,pointG);
	drawRectangleWithFillColor(context,rectangle4,fillcolor)
	
	
	fillcolor ='rgba(255,128,191,0.5)';
	var rectangle5 = new Rectangle(pointE,pointA,pointD,pointH);
	drawRectangleWithFillColor(context,rectangle5,fillcolor)
	
	fillcolor ='rgba(255,128,191,0.5)';
//	var rectangle5 = new Rectangle(pointE,pointA,pointD,pointH);
	drawRectangleWithFillColor(context,retangle,fillcolor)

}

function chapter_16_4_Q_12(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var pointE =  new Point(pointC.x+10,pointC.y-10);
	var pointF =  new Point(pointD.x+10,pointD.y-10);
	var pointG =  new Point(pointA.x+10,pointA.y-10);
	var pointH =  new Point(pointB.x+10,pointB.y-10);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	//displayPointName(context,pointA,pointA.x,pointA.y+15);
	//displayPointName(context,pointB,pointB.x-5,pointB.y+15);
	//displayPointName(context,pointC,pointC.x+5,pointC.y);
	//displayPointName(context,pointD,pointD.x+5,pointD.y-5);
	
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	setPointName(pointG,"G");
	setPointName(pointH,"H");
	//displayPointName(context,pointE,pointE.x-15,pointE.y);
	//displayPointName(context,pointF,pointF.x+5,pointF.y+15);
	//displayPointName(context,pointG,pointG.x+5,pointG.y);
	//displayPointName(context,pointH,pointH.x,pointH.y-5);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	drawLineBetweenTwoPoints(context,pointA,pointC,"green");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	drawLineBetweenTwoPoints(context,pointB,pointD,"red");
	drawLineBetweenTwoPoints(context,pointC,pointE,"red");
	drawLineBetweenTwoPoints(context,pointE,pointF,"red");
	drawLineBetweenTwoPoints(context,pointD,pointF,"red");
	drawLineBetweenTwoPoints(context,pointA,pointG,"red");
	drawLineBetweenTwoPoints(context,pointG,pointH,"purple");
	drawLineBetweenTwoPoints(context,pointE,pointG,"purple");
	drawLineBetweenTwoPoints(context,pointB,pointH,"purple");
	drawLineBetweenTwoPoints(context,pointF,pointH,"purple");
	var wide = pointB.x-pointA.x;
	var height = pointA.y- pointC.y;
	
	for(var i=10; i<height;i=i+10){
	 
	  drawLineBetweenTwoPointsAxis(context,pointA.x,pointC.y+i,pointB.x,pointD.y+i,"red");
	
	}
	var incr=.30;
	for(var i=17; i<wide;i=i+17){
	
	  drawLineBetweenTwoPointsAxis(context,pointC.x+i,pointC.y-incr,pointA.x+i,pointA.y-incr,"red");
	   incr=incr+.30;
	}
	
	 wide = pointF.x-pointD.x;
	 height = pointB.y- pointD.y;
	
	for(var i=10; i<height;i=i+10){
	
	  drawLineBetweenTwoPointsAxis(context,pointD.x,pointD.y+i,pointF.x,pointF.y+i,"red");
	
	}
}

function chapter_16_4_Q_13(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var pointE =  new Point(pointA.x,pointA.y-60);
	var pointF =  new Point(pointB.x,pointB.y-60);
	var pointG =  new Point(pointC.x,pointC.y-60);
	var pointH =  new Point(pointD.x,pointD.y-60);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	var retangle2 = new Rectangle(pointE,pointF,pointG,pointH);
	drawRectangle(context, retangle);
	drawRectangle(context, retangle2);
	drawLineBetweenTwoPoints(context,pointA,pointE,"red");
	drawLineBetweenTwoPoints(context,pointB,pointF,"red");
	drawLineBetweenTwoPoints(context,pointC,pointG,"red");
	drawLineBetweenTwoPoints(context,pointD,pointH,"red");
	drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
	drawLineBetweenTwoPoints(context,pointA,pointG,"green");
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context,pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x+5,pointD.y-5);
	
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	setPointName(pointG,"G");
	setPointName(pointH,"H");
	displayPointName(context,pointE,pointE.x-15,pointE.y);
	displayPointName(context,pointF,pointF.x+5,pointF.y+15);
	displayPointName(context,pointG,pointG.x+5,pointG.y);
	displayPointName(context,pointH,pointH.x,pointH.y-5);
	
}

function chapter_16_4_Q_14(context, x1,y1){

var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");	
	//displayPointName(context,centerO,centerO.x,centerO.y);
	
	var oval = new Oval(centerO,45,20);
	drawOval( context,oval,"green");
	//drawPoint(context,centerO, "blue");
	
	var pointA=  pointOnEclipseAtAnAngle(oval,0);
	//drawPoint(context,pointA, "blue");
	var pointB=  pointOnEclipseAtAnAngle(oval,180);
	drawPoint(context,pointB, "blue");
	setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x-15,pointB.y);
	var pointAB = midPointBetweenTwoPoint(pointA, pointB );
	drawPoint(context,pointAB, "blue");
	setPointName(pointAB,"E");
	displayPointName(context,pointAB,pointAB.x,pointAB.y-5);
	

	centerO =  new Point(centerO.x,centerO.y+10);
	context.translate(0,centerO.y);
	var oval2 = new Oval(centerO,45,20);
	drawOval( context,oval2,"green");
	
	var pointC=  pointOnEclipseAtAnAngle(oval2,0);
	drawPoint(context,pointC, "blue");
	
	var pointD=  pointOnEclipseAtAnAngle(oval2,180);
	drawPoint(context,pointD, "blue");
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x-15,pointD.y);
	
	var pointCD = midPointBetweenTwoPoint(pointC, pointD );
	drawPoint(context,pointCD, "blue");
	setPointName(pointCD,"F");
	displayPointName(context,pointCD,pointCD.x,pointCD.y+15);
	
	var pointD1 =  new Point(centerO.x-45,centerO.y-50);
	var pointB1 =  new Point(centerO.x-45,centerO.y-145);
	drawPoint(context,pointB1 , "red");
	drawPoint(context,pointD1 , "red");
	drawLineBetweenTwoPoints(context,pointB1,pointD1,"red");
	
		
	var centerR =  new Point(centerO.x+45,centerO.y-50);
	var centerS =  new Point(centerO.x+45,centerO.y-145);
	drawPoint(context,centerR , "red");
	drawPoint(context,centerS , "red");
	drawLineBetweenTwoPoints(context,centerR,centerS,"red");
	
	
	var centerO1 =  new Point(centerO.x,centerO.y-145);
	var centerO2 =  new Point(centerO.x,centerO.y-50);
   drawLineBetweenTwoPoints(context,centerO1,centerO2,"red");
    drawLineBetweenTwoPoints(context,centerO1,pointB1,"red");
	 drawLineBetweenTwoPoints(context,centerO2,pointD1,"red");

}

function chapter_16_4_Q_15(context, x1,y1){

var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");	
	//displayPointName(context,centerO,centerO.x,centerO.y);
	
	var oval = new Oval(centerO,45,20);
	drawOval( context,oval,"green");
	//drawPoint(context,centerO, "blue");
	
	var pointA=  pointOnEclipseAtAnAngle(oval,0);
	//drawPoint(context,pointA, "blue");
	var pointB=  pointOnEclipseAtAnAngle(oval,180);
	drawPoint(context,pointB, "blue");
	setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x-15,pointB.y);
	var pointAB = midPointBetweenTwoPoint(pointA, pointB );
	drawPoint(context,pointAB, "blue");
	setPointName(pointAB,"E");
	displayPointName(context,pointAB,pointAB.x,pointAB.y-5);
	

	centerO =  new Point(centerO.x,centerO.y+10);
	context.translate(0,centerO.y);
	var oval2 = new Oval(centerO,45,20);
	drawOval( context,oval2,"green");
	
	var pointC=  pointOnEclipseAtAnAngle(oval2,0);
	drawPoint(context,pointC, "blue");
	
	var pointD=  pointOnEclipseAtAnAngle(oval2,180);
	drawPoint(context,pointD, "blue");
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x-15,pointD.y);
	
	var pointCD = midPointBetweenTwoPoint(pointC, pointD );
	drawPoint(context,pointCD, "blue");
	setPointName(pointCD,"F");
	displayPointName(context,pointCD,pointCD.x,pointCD.y+15);
	
	var pointD1 =  new Point(centerO.x-45,centerO.y-50);
	var pointB1 =  new Point(centerO.x-45,centerO.y-145);
	drawPoint(context,pointB1 , "red");
	drawPoint(context,pointD1 , "red");
	drawLineBetweenTwoPoints(context,pointB1,pointD1,"red");
	
		
	var centerR =  new Point(centerO.x+45,centerO.y-50);
	var centerS =  new Point(centerO.x+45,centerO.y-145);
	drawPoint(context,centerR , "red");
	drawPoint(context,centerS , "red");
	drawLineBetweenTwoPoints(context,centerR,centerS,"red");
	
	
	var centerO1 =  new Point(centerO.x,centerO.y-145);
	var centerO2 =  new Point(centerO.x,centerO.y-50);
   drawLineBetweenTwoPoints(context,centerO1,centerO2,"red");
    drawLineBetweenTwoPoints(context,centerO1,pointB1,"red");
	 drawLineBetweenTwoPoints(context,centerO2,pointD1,"red");

}

function chapter_16_4_Q_16(context, x1,y1){

var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");	
	//displayPointName(context,centerO,centerO.x,centerO.y);
	
	var oval = new Oval(centerO,45,20);
	drawOval( context,oval,"green");
	//drawPoint(context,centerO, "blue");
	
	var pointA=  pointOnEclipseAtAnAngle(oval,0);
	//drawPoint(context,pointA, "blue");
	var pointB=  pointOnEclipseAtAnAngle(oval,180);
	drawPoint(context,pointB, "blue");
	setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x-15,pointB.y);
	var pointAB = midPointBetweenTwoPoint(pointA, pointB );
	drawPoint(context,pointAB, "blue");
	setPointName(pointAB,"E");
	displayPointName(context,pointAB,pointAB.x,pointAB.y-5);
	

	centerO =  new Point(centerO.x,centerO.y+10);
	context.translate(0,centerO.y);
	var oval2 = new Oval(centerO,45,20);
	drawOval( context,oval2,"green");
	
	var pointC=  pointOnEclipseAtAnAngle(oval2,0);
	drawPoint(context,pointC, "blue");
	
	var pointD=  pointOnEclipseAtAnAngle(oval2,180);
	drawPoint(context,pointD, "blue");
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x-15,pointD.y);
	
	var pointCD = midPointBetweenTwoPoint(pointC, pointD );
	drawPoint(context,pointCD, "blue");
	setPointName(pointCD,"F");
	displayPointName(context,pointCD,pointCD.x,pointCD.y+15);
	
	var pointD1 =  new Point(centerO.x-45,centerO.y-50);
	var pointB1 =  new Point(centerO.x-45,centerO.y-145);
	drawPoint(context,pointB1 , "red");
	drawPoint(context,pointD1 , "red");
	drawLineBetweenTwoPoints(context,pointB1,pointD1,"red");
	
		
	var centerR =  new Point(centerO.x+45,centerO.y-50);
	var centerS =  new Point(centerO.x+45,centerO.y-145);
	drawPoint(context,centerR , "red");
	drawPoint(context,centerS , "red");
	drawLineBetweenTwoPoints(context,centerR,centerS,"red");
	
	
	var centerO1 =  new Point(centerO.x,centerO.y-145);
	var centerO2 =  new Point(centerO.x,centerO.y-50);
   drawLineBetweenTwoPoints(context,centerO1,centerO2,"red");
    drawLineBetweenTwoPoints(context,centerO1,pointB1,"red");
	 drawLineBetweenTwoPoints(context,centerO2,pointD1,"red");

}

function chapter_16_4_Q_17(context, x1,y1){

var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");	
	//displayPointName(context,centerO,centerO.x,centerO.y);
	
	var oval = new Oval(centerO,45,20);
	drawOval( context,oval,"green");
	var ovalinner = new Oval(centerO,43,18);
	drawOval( context,ovalinner,"green");
	//drawPoint(context,centerO, "blue");
	
	var pointA=  pointOnEclipseAtAnAngle(oval,0);
	//drawPoint(context,pointA, "blue");
	var pointB=  pointOnEclipseAtAnAngle(oval,180);
	drawPoint(context,pointB, "blue");
	setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x-15,pointB.y);
	var pointAB = midPointBetweenTwoPoint(pointA, pointB );
	drawPoint(context,pointAB, "blue");
	setPointName(pointAB,"E");
	displayPointName(context,pointAB,pointAB.x,pointAB.y-5);
	

	centerO =  new Point(centerO.x,centerO.y+10);
	context.translate(0,centerO.y);
	var oval2 = new Oval(centerO,45,20);
	drawOval( context,oval2,"green");
	
	var oval2inner = new Oval(centerO,43,18);
	drawOval( context,oval2inner,"green");
	
	var pointC=  pointOnEclipseAtAnAngle(oval2,0);
	drawPoint(context,pointC, "blue");
	
	var pointD=  pointOnEclipseAtAnAngle(oval2,180);
	drawPoint(context,pointD, "blue");
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x-15,pointD.y);
	
	var pointCD = midPointBetweenTwoPoint(pointC, pointD );
	drawPoint(context,pointCD, "blue");
	setPointName(pointCD,"F");
	displayPointName(context,pointCD,pointCD.x,pointCD.y+15);
	
	var pointD1 =  new Point(centerO.x-45,centerO.y-50);
	var pointB1 =  new Point(centerO.x-45,centerO.y-145);
	drawPoint(context,pointB1 , "red");
	drawPoint(context,pointD1 , "red");
	drawLineBetweenTwoPoints(context,pointB1,pointD1,"red");
	
		
	var centerR =  new Point(centerO.x+45,centerO.y-50);
	var centerS =  new Point(centerO.x+45,centerO.y-145);
	drawPoint(context,centerR , "red");
	drawPoint(context,centerS , "red");
	drawLineBetweenTwoPoints(context,centerR,centerS,"red");
	
	
	var centerO1 =  new Point(centerO.x,centerO.y-145);
	var centerO2 =  new Point(centerO.x,centerO.y-50);
   drawLineBetweenTwoPoints(context,centerO1,centerO2,"red");
    drawLineBetweenTwoPoints(context,centerO1,pointB1,"red");
	 drawLineBetweenTwoPoints(context,centerO2,pointD1,"red");

}