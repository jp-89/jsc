
function chapter_8_1_Q_1_pic1(context, x1,y1){

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
    centerO.x= centerO.x;
    centerO.y= centerO.y-2;
	drawPoint(context,centerO , "red");	
	displayName(context,80,150,"চিত্র :১");	
}

function chapter_8_1_Q_1_pic2(context, x1,y1){

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


function chapter_8_1_Q_2_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1+10,y1-5);
	var circle =  new Circle(centerO,50);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointB= getPointAtForDegree(circle,-35);
	var pointA= getPointAtForDegree(circle,-145);
	var pointC= getPointAtForDegree(circle,-210);
	var pointD= getPointAtForDegree(circle,-330);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-20,pointA.y);
	displayPointName(context,pointB,pointB.x+10,pointB.y);
	displayPointName(context,pointC,pointC.x-20,pointC.y);
	displayPointName(context,pointD,pointD.x+10,pointD.y);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	var midpointAB= midPointBetweenTwoPoint(pointA,pointB );
	var midpointCD= midPointBetweenTwoPoint(pointC,pointD );
	drawPoint(context,midpointAB, "red");
	drawPoint(context,midpointCD, "red");
	drawPoint(context,centerO , "red");
	
	setPointName(midpointAB,"P");
	setPointName(midpointCD,"Q");
	displayPointName(context,midpointAB,midpointAB.x,midpointAB.y-5);
	displayPointName(context,midpointCD,midpointCD.x,midpointCD.y+15);
	
	 displayName(context,80,150,"চিত্র :১");

	
}

function chapter_8_1_Q_2_pic2(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1+10,y1+2);
	var circle =  new Circle(centerO,50);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointB= getPointAtForDegree(circle,-35);
	var pointA= getPointAtForDegree(circle,-145);
	var pointC= getPointAtForDegree(circle,-210);
	var pointD= getPointAtForDegree(circle,-330);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-20,pointA.y);
	displayPointName(context,pointB,pointB.x+10,pointB.y);
	displayPointName(context,pointC,pointC.x-20,pointC.y);
	displayPointName(context,pointD,pointD.x+10,pointD.y);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	var midpointAB= midPointBetweenTwoPoint(pointA,pointB );
	var midpointCD= midPointBetweenTwoPoint(pointC,pointD );
	drawPoint(context,midpointAB, "red");
	drawPoint(context,midpointCD, "red");
	drawPoint(context,centerO , "red");
	
	setPointName(midpointAB,"P");
	setPointName(midpointCD,"Q");
	displayPointName(context,midpointAB,midpointAB.x,midpointAB.y-5);
	displayPointName(context,midpointCD,midpointCD.x,midpointCD.y+15);
	
	drawLineBetweenTwoPoints(context,midpointAB,midpointCD,"blue");
    drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
	drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	
	 displayName(context,80,150,"চিত্র :২");

}

function chapter_8_1_Q_3_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1-5,y1+20);
	var circle =  new Circle(centerO,65);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-90);
	var pointC= getPointAtForDegree(circle,-336);
	var pointB= getPointAtForDegree(circle,-205);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	
	displayPointName(context,pointA,pointA.x-18,pointA.y);
	displayPointName(context,pointB,pointB.x-15,pointB.y+15);
	displayPointName(context,pointC,pointC.x+8,pointC.y+15);
	

	centerO.y = centerO.y-3;
	drawPoint(context,centerO , "red");
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointA,"blue");
	
	
	 displayName(context,80,198,"চিত্র :১");
}

function chapter_8_1_Q_3_pic2(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1-5,y1+20);
	var circle =  new Circle(centerO,65);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-90);
	var pointC= getPointAtForDegree(circle,-336);
	var pointB= getPointAtForDegree(circle,-205);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	
	displayPointName(context,pointA,pointA.x-18,pointA.y);
	displayPointName(context,pointB,pointB.x-15,pointB.y+15);
	displayPointName(context,pointC,pointC.x+8,pointC.y+15);
	

	centerO.y = centerO.y-3;
	drawPoint(context,centerO , "red");
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointA,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointB,"purple");
	drawLineBetweenTwoPoints(context,centerO,pointC,"purple");
	
	
	 displayName(context,80,198,"চিত্র :২");
}

function chapter_8_1_Q_4_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1-5,y1+20);
	var circle =  new Circle(centerO,65);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-90);
	var pointC= getPointAtForDegree(circle,-336);
	var pointB= getPointAtForDegree(circle,-205);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	
	displayPointName(context,pointA,pointA.x-18,pointA.y);
	displayPointName(context,pointB,pointB.x-15,pointB.y+15);
	displayPointName(context,pointC,pointC.x+8,pointC.y+15);
	

	centerO.y = centerO.y-3;
	drawPoint(context,centerO , "red");
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointA,"blue");
	
	
	 displayName(context,80,198,"চিত্র :১");
}

function chapter_8_1_Q_4_pic2(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1-5,y1+20);
	var circle =  new Circle(centerO,65);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-90);
	var pointC= getPointAtForDegree(circle,-336);
	var pointB= getPointAtForDegree(circle,-205);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	
	displayPointName(context,pointA,pointA.x-18,pointA.y);
	displayPointName(context,pointB,pointB.x-15,pointB.y+15);
	displayPointName(context,pointC,pointC.x+8,pointC.y+15);
	

	centerO.y = centerO.y-3;
	drawPoint(context,centerO , "red");
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointA,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointB,"purple");
	drawLineBetweenTwoPoints(context,centerO,pointC,"purple");
	
	
	 displayName(context,80,198,"চিত্র :২");
}




function chapter_8_1_Q_5_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1+5,y1-3);
	var circle =  new Circle(centerO,75);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-145);
	var pointB= getPointAtForDegree(circle,-210);
	var pointC= getPointAtForDegree(circle,-330);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	displayPointName(context,pointA,pointA.x-18,pointA.y);
	displayPointName(context,pointB,pointB.x-18,pointB.y+5);
	displayPointName(context,pointC,pointC.x+10,pointC.y+5);
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");

	centerO.y = centerO.y-3;
	drawPoint(context,centerO , "red");
	//drawLineBetweenTwoPoints(context,centerO,pointB,"red");
	drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	
	 displayName(context,115,198,"চিত্র :১");
}

function chapter_8_1_Q_5_pic2(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1+5,y1-3);
	var circle =  new Circle(centerO,75);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-145);
	var pointB= getPointAtForDegree(circle,-210);
	var pointC= getPointAtForDegree(circle,-330);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	displayPointName(context,pointA,pointA.x-18,pointA.y);
	displayPointName(context,pointB,pointB.x-18,pointB.y+5);
	displayPointName(context,pointC,pointC.x+10,pointC.y+5);
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");

	centerO.y = centerO.y-3;
	drawPoint(context,centerO , "red");
	drawLineBetweenTwoPoints(context,centerO,pointB,"red");
	drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	
	 displayName(context,115,198,"চিত্র :২");
}

function chapter_8_1_Q_6_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1+5,y1-3);
	var circle =  new Circle(centerO,75);
	
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var circle2 =  new Circle(centerO,55);
	drawCircle( context,circle2,"blue");
	
	
	var pointA= getPointAtForDegree(circle,-210);
	var pointB= getPointAtForDegree(circle,-330);
	var pointC= getPointAtForDegree(circle2,-223);
	var pointD= getPointAtForDegree(circle2,-317);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-18,pointA.y+5);
	displayPointName(context,pointB,pointB.x+10,pointB.y+5);
	displayPointName(context,pointC,pointC.x-5,pointC.y+20);
	displayPointName(context,pointD,pointD.x-3,pointD.y+20);
	

	centerO.y = centerO.y-3;
	drawPoint(context,centerO , "red");
   //drawLineBetweenTwoPoints(context,centerO,pointA,"red");
	//drawLineBetweenTwoPoints(context,centerO,pointB,"red");
	//drawLineBetweenTwoPoints(context,centerO,pointC,"blue");
	//drawLineBetweenTwoPoints(context,centerO,pointD,"blue");
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	drawLineBetweenTwoPoints(context,pointB,pointD,"blue");
	
	 displayName(context,115,198,"চিত্র :১");
}
function chapter_8_1_Q_6_pic2(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1+5,y1-3);
	var circle =  new Circle(centerO,75);
	
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var circle2 =  new Circle(centerO,55);
	drawCircle( context,circle2,"blue");
	
	
	var pointA= getPointAtForDegree(circle,-210);
	var pointB= getPointAtForDegree(circle,-330);
	var pointC= getPointAtForDegree(circle2,-223);
	var pointD= getPointAtForDegree(circle2,-317);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-18,pointA.y+5);
	displayPointName(context,pointB,pointB.x+10,pointB.y+5);
	displayPointName(context,pointC,pointC.x-5,pointC.y+20);
	displayPointName(context,pointD,pointD.x-3,pointD.y+20);
	

	centerO.y = centerO.y-3;
	drawPoint(context,centerO , "red");
	drawLineBetweenTwoPoints(context,centerO,pointA,"red");
	drawLineBetweenTwoPoints(context,centerO,pointB,"red");
	drawLineBetweenTwoPoints(context,centerO,pointC,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointD,"blue");
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	//drawLineBetweenTwoPoints(context,pointB,pointD,"blue");
	
	 displayName(context,115,198,"চিত্র :২");
}


function chapter_8_1_Q_7_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1-5,y1-10);
	var circle =  new Circle(centerO,65);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-165);
	var pointC= getPointAtForDegree(circle,-235);
	var pointB= getPointAtForDegree(circle,-306);
	var pointD= getPointAtForDegree(circle,-17);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-18,pointA.y);
	displayPointName(context,pointB,pointB.x,pointB.y+15);
	displayPointName(context,pointC,pointC.x-10,pointC.y+15);
	displayPointName(context,pointD,pointD.x+10,pointD.y+5);
	

	centerO.y = centerO.y-3;
	drawPoint(context,centerO , "red");
	//drawLineBetweenTwoPoints(context,centerO,pointB,"red");
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	
	drawLineBetweenTwoPoints(context,pointC,pointD,"blue");
	drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	var pointP= pointOfIntersectionOfPoints(pointA, pointB,pointC,pointD);
	setPointName(pointP,"P");
	displayPointName(context,pointP,pointP.x-5,pointP.y+20);
	
	 displayName(context,80,198,"চিত্র :১");
}

function chapter_8_1_Q_7_pic2(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1-5,y1-10);
	var circle =  new Circle(centerO,65);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-165);
	var pointC= getPointAtForDegree(circle,-235);
	var pointB= getPointAtForDegree(circle,-306);
	var pointD= getPointAtForDegree(circle,-17);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-18,pointA.y);
	displayPointName(context,pointB,pointB.x,pointB.y+15);
	displayPointName(context,pointC,pointC.x-10,pointC.y+15);
	displayPointName(context,pointD,pointD.x+10,pointD.y+5);
	

	centerO.y = centerO.y-3;
	drawPoint(context,centerO , "red");
	//drawLineBetweenTwoPoints(context,centerO,pointB,"red");
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	
	drawLineBetweenTwoPoints(context,pointC,pointD,"blue");
	drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	var pointP= pointOfIntersectionOfPoints(pointA, pointB,pointC,pointD);
	setPointName(pointP,"P");
	displayPointName(context,pointP,pointP.x-5,pointP.y+20);
	
	var pointM = perpendicularPointOnLineFromAPoint(pointA,pointB,centerO);
	var pointN = perpendicularPointOnLineFromAPoint(pointC,pointD,centerO);
	setPointName(pointM,"M");
	setPointName(pointN,"N");
	displayPointName(context,pointM,pointM.x-20,pointM.y+10);
	displayPointName(context,pointN,pointN.x+5,pointN.y+10);
	drawLineBetweenTwoPoints(context,centerO,pointM,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointN,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointP,"red");
	
	 displayName(context,80,198,"চিত্র :২");
}


function chapter_8_1_Q_8_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1-5,y1+20);
	var circle =  new Circle(centerO,65);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-90);
	var pointC= getPointAtForDegree(circle,-333);
	var pointB= getPointAtForDegree(circle,-207);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	
	displayPointName(context,pointA,pointA.x-18,pointA.y);
	displayPointName(context,pointB,pointB.x-15,pointB.y+15);
	displayPointName(context,pointC,pointC.x+8,pointC.y+15);
	

	centerO.y = centerO.y-3;
	drawPoint(context,centerO , "red");
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
	drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	var pointM= midPointBetweenTwoPoint(pointA,pointB );
	var pointN= midPointBetweenTwoPoint(pointA,pointC );
	var pointP= midPointBetweenTwoPoint(pointB,pointC );
	
	setPointName(pointM,"M");
	setPointName(pointN,"N");
	setPointName(pointP,"P");
	
	displayPointName(context,pointM,pointM.x-18,pointM.y);
	displayPointName(context,pointN,pointN.x+5,pointN.y+5);
	displayPointName(context,pointP,pointP.x-5,pointP.y+15);
	drawPoint(context,pointM,"blue");
	drawPoint(context,pointN,"blue");
	drawPoint(context,pointP,"blue");
	
	
	var distance = distanceBetweenTwoPoints(pointM, centerO);
	var circle2 =  new Circle(centerO,distance);
	//drawCircle( context,circle2,"green");
	
	
	 displayName(context,80,198,"চিত্র :১");
}

function chapter_8_1_Q_8_pic2(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1-15,y1+10);
	var circle =  new Circle(centerO,65);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-90);
	var pointC= getPointAtForDegree(circle,-333);
	var pointB= getPointAtForDegree(circle,-207);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	
	displayPointName(context,pointA,pointA.x-18,pointA.y);
	displayPointName(context,pointB,pointB.x-15,pointB.y+15);
	displayPointName(context,pointC,pointC.x+8,pointC.y+15);
	

	centerO.y = centerO.y-3;
	drawPoint(context,centerO , "red");
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
	drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	var pointM= midPointBetweenTwoPoint(pointA,pointB );
	var pointN= midPointBetweenTwoPoint(pointA,pointC );
	var pointP= midPointBetweenTwoPoint(pointB,pointC );
	
	setPointName(pointM,"M");
	setPointName(pointN,"N");
	setPointName(pointP,"P");
	
	displayPointName(context,pointM,pointM.x-18,pointM.y);
	displayPointName(context,pointN,pointN.x+5,pointN.y+5);
	displayPointName(context,pointP,pointP.x-5,pointP.y+15);
	drawPoint(context,pointM,"blue");
	drawPoint(context,pointN,"blue");
	drawPoint(context,pointP,"blue");
	
	
	var distance = distanceBetweenTwoPoints(pointM, centerO);
	var circle2 =  new Circle(centerO,distance);
	drawCircle( context,circle2,"green");
	drawLineBetweenTwoPoints(context,centerO,pointM,"red");
	drawLineBetweenTwoPoints(context,centerO,pointN,"red");
	drawLineBetweenTwoPoints(context,centerO,pointP,"red");
	
	
	 displayName(context,80,198,"চিত্র :২");
}

function chapter_8_1_Q_9_pic1(context, x1,y1){
  var drawFlag = false;
	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	drawPoint(context,centerO,"red");
	
	displayPointName(context,centerO,x1-10,y1+20);
	var circle =  new Circle(centerO,65);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-145);	
	
	var point1= PointAtCertainDistance(centerO, pointA, -80);
	var pointCirLineIntersects = circleLineIntersectionPoints(circle,point1,centerO);
	 var pointB= pointCirLineIntersects.pointA;
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	var angle=30;
	var anglePoint = getPointAtAnAngle(pointA,-.5,45);
	
	if(drawFlag){		 
		drawPoint(context,anglePoint,"red");
	 }
	
	 pointCirLineIntersects = circleLineIntersectionPoints(circle,pointA,anglePoint);
	 var pointD= pointCirLineIntersects.pointB;
	 var radius=30;
	 drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
	var arcA_1 =new ArcDrawWithAngleRadius(context,pointA.x,pointA.y,0,0,360,398,radius,false,"purple");
	 arcA_1.startArcDraw();
	
	anglePoint = getPointAtAnAngle(pointB,-.5,-45);
	if(drawFlag){		 
		 drawPoint(context,anglePoint,"red");
	 }
	
	
	 pointCirLineIntersects = circleLineIntersectionPoints(circle,pointB,anglePoint);
	 var pointC= pointCirLineIntersects.pointB;
	drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	
	var arcA_2 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,180,218,radius,false,"purple");
	 arcA_2.startArcDraw();
	
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	
	displayPointName(context,pointA,pointA.x-18,pointA.y);
	displayPointName(context,pointB,pointB.x+5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-15,pointC.y+10);
	displayPointName(context,pointD,pointD.x+8,pointD.y+10);
	displayPointName(context,pointD,pointD.x+8,pointD.y+10);
	
	 displayName(context,80,198,"চিত্র :১");
}

function chapter_8_1_Q_10_pic1(context, x1,y1){
  var drawFlag = false;
	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	drawPoint(context,centerO,"red");
	
	displayPointName(context,centerO,x1-10,y1+20);
	var circle =  new Circle(centerO,65);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-145);	
	
	var point1= PointAtCertainDistance(centerO, pointA, -80);
	var pointCirLineIntersects = circleLineIntersectionPoints(circle,point1,centerO);
	 var pointB= pointCirLineIntersects.pointA;
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	var angle=30;
	var anglePoint = getPointAtAnAngle(pointA,-.5,45);
	
	if(drawFlag){		 
		drawPoint(context,anglePoint,"red");
	 }
	
	 pointCirLineIntersects = circleLineIntersectionPoints(circle,pointA,anglePoint);
	 var pointD= pointCirLineIntersects.pointB;
	 var radius=30;
	 drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
	var arcA_1 =new ArcDrawWithAngleRadius(context,pointA.x,pointA.y,0,0,360,398,radius,false,"purple");
	 arcA_1.startArcDraw();
	
	anglePoint = getPointAtAnAngle(pointB,-.5,-45);
	if(drawFlag){		 
		 drawPoint(context,anglePoint,"red");
	 }
	
	
	 pointCirLineIntersects = circleLineIntersectionPoints(circle,pointB,anglePoint);
	 var pointC= pointCirLineIntersects.pointB;
	drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	
	var arcA_2 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,180,218,radius,false,"purple");
	 arcA_2.startArcDraw();
	
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	
	displayPointName(context,pointA,pointA.x-18,pointA.y);
	displayPointName(context,pointB,pointB.x+5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-15,pointC.y+10);
	displayPointName(context,pointD,pointD.x+8,pointD.y+10);
	displayPointName(context,pointD,pointD.x+8,pointD.y+10);
	
	 displayName(context,80,198,"চিত্র :১");
}

function chapter_8_1_Q_10_pic2(context, x1,y1){
  var drawFlag = false;
	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	drawPoint(context,centerO,"red");
	
	displayPointName(context,centerO,x1-10,y1+20);
	var circle =  new Circle(centerO,65);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointA= getPointAtForDegree(circle,-145);	
	
	var point1= PointAtCertainDistance(centerO, pointA, -80);
	var pointCirLineIntersects = circleLineIntersectionPoints(circle,point1,centerO);
	 var pointB= pointCirLineIntersects.pointA;
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	var angle=30;
	var anglePoint = getPointAtAnAngle(pointA,-.5,45);
	
	if(drawFlag){		 
		drawPoint(context,anglePoint,"red");
	 }
	
	 pointCirLineIntersects = circleLineIntersectionPoints(circle,pointA,anglePoint);
	 var pointD= pointCirLineIntersects.pointB;
	 var radius=30;
	 drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
	var arcA_1 =new ArcDrawWithAngleRadius(context,pointA.x,pointA.y,0,0,360,398,radius,false,"purple");
	 arcA_1.startArcDraw();
	
	anglePoint = getPointAtAnAngle(pointB,-.5,-45);
	if(drawFlag){		 
		 drawPoint(context,anglePoint,"red");
	 }
	
	
	 pointCirLineIntersects = circleLineIntersectionPoints(circle,pointB,anglePoint);
	 var pointC= pointCirLineIntersects.pointB;
	drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	drawLineBetweenTwoPoints(context,pointD,pointC,"blue");
	
	var arcA_2 =new ArcDrawWithAngleRadius(context,pointB.x,pointB.y,0,0,180,218,radius,false,"purple");
	 arcA_2.startArcDraw();
	
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	
	displayPointName(context,pointA,pointA.x-18,pointA.y);
	displayPointName(context,pointB,pointB.x+5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-15,pointC.y+10);
	displayPointName(context,pointD,pointD.x+8,pointD.y+10);
	displayPointName(context,pointD,pointD.x+8,pointD.y+10);
	
	 displayName(context,80,198,"চিত্র :২");
}

function chapter_8_1_Q_11_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1-5,y1-10);
	var circle =  new Circle(centerO,50);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	
	var pointA= getPointAtForDegree(circle,-115);	
	var pointB= getPointAtForDegree(circle,-245);
	var pointC= getPointAtForDegree(circle,-45);
	var pointD= getPointAtForDegree(circle,-318);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-20,pointA.y);
	displayPointName(context,pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x+4,pointC.y+5);
	displayPointName(context,pointD,pointD.x+5,pointD.y+10);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
    centerO.x= centerO.x;
    centerO.y= centerO.y-2;
	drawPoint(context,centerO , "red");	
	displayName(context,80,150,"চিত্র :১");	
}

function chapter_8_1_Q_11_pic2(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1-5,y1+15);
	var circle =  new Circle(centerO,50);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	
	var pointA= getPointAtForDegree(circle,-119);	
	var pointB= getPointAtForDegree(circle,-249);
	var pointC= getPointAtForDegree(circle,-52);
	var pointD= getPointAtForDegree(circle,-319);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x-20,pointA.y);
	displayPointName(context,pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x+4,pointC.y+5);
	displayPointName(context,pointD,pointD.x+5,pointD.y+10);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
    centerO.x= centerO.x;
    centerO.y= centerO.y-2;
	drawPoint(context,centerO , "red");	
	
	var pointE= midPointBetweenTwoPoint(pointA,pointB );
	var pointF= midPointBetweenTwoPoint(pointC,pointD );
	
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	displayPointName(context,pointE,pointE.x-20,pointE.y+5);
	displayPointName(context,pointF,pointF.x+5,pointF.y+5);
	
	drawLineBetweenTwoPoints(context,centerO,pointA,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointC,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointE,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointF,"blue");
	
	displayName(context,80,150,"চিত্র :২");	
}








