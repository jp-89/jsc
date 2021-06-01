
function chapter_14_3_Q_2_pic1_1(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	drawLineBetweenTwoPoints(context,pointA,pointB,"black");
	drawLineBetweenTwoPoints(context,pointB,pointC,"black");
	drawLineBetweenTwoPoints(context,pointC,pointD,"black");
	drawLineBetweenTwoPoints(context,pointD,pointA,"black");
	drawLineBetweenTwoPoints(context,pointA,pointC,"black");
	pointFutki = new Point(pointA.x+10,pointA.y+15);
	drawPoint(context,pointFutki, "black");
	    

}

function chapter_14_3_Q_2_pic1_2(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	drawLineBetweenTwoPoints(context,pointA,pointB,"black");
	drawLineBetweenTwoPoints(context,pointB,pointC,"black");
	drawLineBetweenTwoPoints(context,pointC,pointD,"black");
	drawLineBetweenTwoPoints(context,pointD,pointA,"black");
	drawLineBetweenTwoPoints(context,pointA,pointC,"black");
	pointFutki = new Point(pointA.x+10,pointA.y+15);
	pointFutki2 = new Point(pointA.x+17,pointA.y+4);
	drawPoint(context,pointFutki, "black");
	drawPoint(context,pointFutki2, "black");
	    

}

function chapter_14_3_Q_2_pic2_1(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	drawLineBetweenTwoPoints(context,pointA,pointB,"black");
	drawLineBetweenTwoPoints(context,pointB,pointC,"black");
	drawLineBetweenTwoPoints(context,pointC,pointD,"black");
	drawLineBetweenTwoPoints(context,pointD,pointA,"black");
	pointE= midPointBetweenTwoPoint(pointA,pointB );
	pointF= midPointBetweenTwoPoint(pointC,pointD );
	drawLineBetweenTwoPoints(context,pointE,pointF,"black");
	pointFutki = new Point(pointF.x-15,pointE.y+23);
	drawPoint(context,pointFutki, "black");
	    

}

function chapter_14_3_Q_2_pic2_2(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	drawLineBetweenTwoPoints(context,pointA,pointB,"black");
	drawLineBetweenTwoPoints(context,pointB,pointC,"black");
	drawLineBetweenTwoPoints(context,pointC,pointD,"black");
	drawLineBetweenTwoPoints(context,pointD,pointA,"black");
	pointE= midPointBetweenTwoPoint(pointA,pointB );
	pointF= midPointBetweenTwoPoint(pointC,pointD );
	drawLineBetweenTwoPoints(context,pointE,pointF,"black");
	pointFutki = new Point(pointF.x-15,pointE.y+23);
	drawPoint(context,pointFutki, "black");
	
	pointFutki2 = new Point(pointF.x-15,pointE.y-23);
	drawPoint(context,pointFutki2, "black");
	    

}

function chapter_14_3_Q_2_pic3_1(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	drawLineBetweenTwoPoints(context,pointA,pointB,"black");
	drawLineBetweenTwoPoints(context,pointB,pointC,"black");
	drawLineBetweenTwoPoints(context,pointC,pointA,"black");
	pointE= midPointBetweenTwoPoint(pointB,pointC );
	drawLineBetweenTwoPoints(context,pointA,pointE,"black");
	pointFutki = new Point(pointA.x-5,pointA.y+20);
	drawPoint(context,pointFutki, "black");
	    

}

function chapter_14_3_Q_2_pic3_2(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	drawLineBetweenTwoPoints(context,pointA,pointB,"black");
	drawLineBetweenTwoPoints(context,pointB,pointC,"black");
	drawLineBetweenTwoPoints(context,pointC,pointA,"black");
	pointE= midPointBetweenTwoPoint(pointB,pointC );
	drawLineBetweenTwoPoints(context,pointA,pointE,"black");
	pointFutki = new Point(pointA.x-5,pointA.y+20);
	drawPoint(context,pointFutki, "black");
	
	pointFutki2 = new Point(pointA.x+5,pointA.y+20);
	drawPoint(context,pointFutki2, "black");
	    
	    

}

function chapter_14_3_Q_2_pic4_1(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	var circle =  new Circle(centerO,35);
	drawCircle( context,circle,"black");
	
	var pointA= getPointAtForDegree(circle,-30);
	var pointB= getPointAtForDegree(circle,-200);
	drawLineBetweenTwoPoints(context,pointA,pointB,"black");
	var pointD =PointAtCertainDistance(pointA, pointB, 15);
	var pointFutki =new Point(pointD.x, pointD.y-10);
	drawPoint(context,pointFutki, "black");
	
}

function chapter_14_3_Q_2_pic4_2(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	var circle =  new Circle(centerO,35);
	drawCircle( context,circle,"black");
	
	var pointA= getPointAtForDegree(circle,-30);
	var pointB= getPointAtForDegree(circle,-200);
	drawLineBetweenTwoPoints(context,pointA,pointB,"black");
	var pointD =PointAtCertainDistance(pointA, pointB, 15);
	var pointFutki =new Point(pointD.x, pointD.y-10);
	drawPoint(context,pointFutki, "black");
	
	var pointFutki2 =new Point(pointD.x+10, pointD.y+10);
	drawPoint(context,pointFutki2, "black");
	
}

function chapter_14_3_Q_2_pic5_1(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	var circle =  new Circle(centerO,35);
	drawCircle( context,circle,"black");
	
	var pointA= getPointAtForDegree(circle,-140);
	var pointB= getPointAtForDegree(circle,-330);
	drawLineBetweenTwoPoints(context,pointA,pointB,"black");
	var pointD =PointAtCertainDistance(pointA, pointB, 35);
	var pointFutki =new Point(pointD.x, pointD.y-15);
	drawPoint(context,pointFutki, "black");
	
	var pointFutki2 =new Point(pointD.x, pointD.y+15);
	drawPoint(context,pointFutki2, "black");
	
}

function chapter_14_3_Q_2_pic5_2(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	var circle =  new Circle(centerO,35);
	drawCircle( context,circle,"black");
	
	var pointA= getPointAtForDegree(circle,-140);
	var pointB= getPointAtForDegree(circle,-330);
	drawLineBetweenTwoPoints(context,pointA,pointB,"black");
	var pointD =PointAtCertainDistance(pointA, pointB, 35);
	
	var pointFutki =new Point(pointD.x, pointD.y-15);
	drawPoint(context,pointFutki, "black");
	
	var pointFutkiMirror =new Point(pointD.x-15, pointD.y+4);
	drawPoint(context,pointFutkiMirror, "black");
	
	var pointFutki2 =new Point(pointD.x, pointD.y+15);
	drawPoint(context,pointFutki2, "black");
	
	var pointFutki2Mirror =new Point(pointD.x+15, pointD.y-4);
	drawPoint(context,pointFutki2Mirror, "black");
	
}



function chapter_14_3_Q_3_pic1_1(context, x1,y1,x2,y2){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointX =  new Point(x1,y1+20);
	var pointY =  new Point(x1-45,y1+80);
	var pointZ=  new Point(x1,y1+80);
	var pointK=  new Point(x1+45,y1+80);
	
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointX,pointY,"blue");
	drawLineBetweenTwoPoints(context,pointY,pointZ,"blue");
     displayName(context,pointB.x-25,pointB.y+20,"চিত্র :১");       

}
function chapter_14_3_Q_3_pic1_2(context, x1,y1,x2,y2){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointX =  new Point(x1,y1+20);
	var pointY =  new Point(x1-45,y1+80);
	var pointZ=  new Point(x1,y1+80);
	var pointK=  new Point(x1+45,y1+80);
	
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointX,pointY,"blue");
	drawLineBetweenTwoPoints(context,pointY,pointZ,"blue");
        drawLineBetweenTwoPoints(context,pointX,pointK,"blue");
        drawLineBetweenTwoPoints(context,pointZ,pointK,"blue");	
	 displayName(context,pointB.x-25,pointB.y+20,"চিত্র :২");

}

function chapter_14_3_Q_3_pic2_1(context, x1,y1,x2,y2){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointX =  new Point(x1,y1+15);
	var pointY =  new Point(x1-40,y1+40);
	var pointZ=  new Point(x1,y1+65);
	var pointK=  new Point(x1+40,y1+40);
	
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointX,pointY,"blue");
	drawLineBetweenTwoPoints(context,pointY,pointZ,"blue");
     displayName(context,pointB.x-25,pointB.y+20,"চিত্র :৩");       

}

function chapter_14_3_Q_3_pic2_2(context, x1,y1,x2,y2){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointX =  new Point(x1,y1+15);
	var pointY =  new Point(x1-40,y1+40);
	var pointZ=  new Point(x1,y1+65);
	var pointK=  new Point(x1+40,y1+40);
	
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,pointX,pointY,"blue");
	drawLineBetweenTwoPoints(context,pointY,pointZ,"blue");
        drawLineBetweenTwoPoints(context,pointX,pointK,"blue");
        drawLineBetweenTwoPoints(context,pointZ,pointK,"blue");
    displayName(context,pointB.x-25,pointB.y+20,"চিত্র :৪");       

}


function chapter_14_3_Q_3_pic3_1(context, x1,y1,x2,y2){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var centerO =  new Point(x1,y1+45);
	var circle =  new Circle(centerO,25);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	
	drawCircleArc2( context,circle,270, 90,"blue",true);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	
    displayName(context,pointB.x-25,pointB.y+20,"চিত্র :৫");       

}

function chapter_14_3_Q_3_pic3_2(context, x1,y1,x2,y2){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var centerO =  new Point(x1,y1+45);
	var circle =  new Circle(centerO,25);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	
	drawCircleArc2( context,circle,270, 90,"blue",true);
	drawCircleArc2( context,circle,90, 270,"blue",true);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");	
    displayName(context,pointB.x-25,pointB.y+20,"চিত্র :৬");       

}

function chapter_14_3_Q_3_pic4_1(context, x1,y1,x2,y2){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var centerO =  new Point(x1,y1+45);
	var circle =  new Circle(centerO,25);
	//drawCircle( context,circle,"blue");
	var startAngle = 20;
	var pointC= getPointAtForDegree(circle,-startAngle);
	var pointD= getPointAtForDegree(circle,-(startAngle+1*72));
	var pointE= getPointAtForDegree(circle,-(startAngle+2*72));
	var pointF= getPointAtForDegree(circle,-(startAngle+3*72));
	var pointG= getPointAtForDegree(circle,-(startAngle+4*72));
	var midPointFG = midPointBetweenTwoPoint(pointF,pointG );
	
		
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	
	
	drawLineBetweenTwoPoints(context,pointD,pointE,"blue");
	drawLineBetweenTwoPoints(context,pointE,pointF,"blue");
        drawLineBetweenTwoPoints(context,pointF,midPointFG,"blue");
	
    displayName(context,pointB.x-25,pointB.y+20,"চিত্র :৭");       

}

function chapter_14_3_Q_3_pic4_2(context, x1,y1,x2,y2){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	
	var centerO =  new Point(x1,y1+45);
	var circle =  new Circle(centerO,25);
	//drawCircle( context,circle,"blue");
	var startAngle = 20;
	var angleIncrement =72;
	var pointC= getPointAtForDegree(circle,-startAngle);
	var pointD= getPointAtForDegree(circle,-(startAngle+1*angleIncrement));
	var pointE= getPointAtForDegree(circle,-(startAngle+2*angleIncrement));
	var pointF= getPointAtForDegree(circle,-(startAngle+3*angleIncrement));
	var pointG= getPointAtForDegree(circle,-(startAngle+4*angleIncrement));
	
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	
	drawLineBetweenTwoPoints(context,pointC,pointD,"blue");
	drawLineBetweenTwoPoints(context,pointD,pointE,"blue");
	drawLineBetweenTwoPoints(context,pointE,pointF,"blue");
        drawLineBetweenTwoPoints(context,pointF,pointG,"blue");
	drawLineBetweenTwoPoints(context,pointG,pointC,"blue");
    displayName(context,pointB.x-25,pointB.y+20,"চিত্র :৮");       

}

function chapter_14_3_Q_3_pic5_1(context, x1,y1,x2,y2){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var centerO =  new Point(x1,y1+45);
	var circle =  new Circle(centerO,25);
	//drawCircle( context,circle,"blue");
	var startAngle = 0;
	var angleIncrement = 60;
	var pointC= getPointAtForDegree(circle,-startAngle);
	var pointD= getPointAtForDegree(circle,-(startAngle+1*angleIncrement));
	var pointE= getPointAtForDegree(circle,-(startAngle+2*angleIncrement));
	var pointF= getPointAtForDegree(circle,-(startAngle+3*angleIncrement));
	var pointG= getPointAtForDegree(circle,-(startAngle+4*angleIncrement));
	var pointH= getPointAtForDegree(circle,-(startAngle+5*angleIncrement));
	var midPointDE = midPointBetweenTwoPoint(pointD,pointE );
	var midPointGH = midPointBetweenTwoPoint(pointG,pointH );
		
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	drawLineBetweenTwoPoints(context,midPointDE,pointE,"blue");
	drawLineBetweenTwoPoints(context,pointE,pointF,"blue");
	drawLineBetweenTwoPoints(context,pointF,pointG,"blue");
	drawLineBetweenTwoPoints(context,pointG,midPointGH,"blue");
    displayName(context,pointB.x-25,pointB.y+20,"চিত্র :৯");       

}

function chapter_14_3_Q_3_pic5_2(context, x1,y1,x2,y2){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var centerO =  new Point(x1,y1+45);
	var circle =  new Circle(centerO,25);
	//drawCircle( context,circle,"blue");
	var startAngle = 0;
	var angleIncrement = 60;
	var pointC= getPointAtForDegree(circle,-startAngle);
	var pointD= getPointAtForDegree(circle,-(startAngle+1*angleIncrement));
	var pointE= getPointAtForDegree(circle,-(startAngle+2*angleIncrement));
	var pointF= getPointAtForDegree(circle,-(startAngle+3*angleIncrement));
	var pointG= getPointAtForDegree(circle,-(startAngle+4*angleIncrement));
	var pointH= getPointAtForDegree(circle,-(startAngle+5*angleIncrement));
	var midPointFG = midPointBetweenTwoPoint(pointF,pointG );
			
	drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	
	drawLineBetweenTwoPoints(context,pointC,pointD,"blue");
	drawLineBetweenTwoPoints(context,pointD,pointE,"blue");
	drawLineBetweenTwoPoints(context,pointE,pointF,"blue");
    drawLineBetweenTwoPoints(context,pointF,pointG,"blue");
	drawLineBetweenTwoPoints(context,pointG,pointH,"blue");
	drawLineBetweenTwoPoints(context,pointH,pointC,"blue");
	
    displayName(context,pointB.x-25,pointB.y+20,"চিত্র :১০");       

}

function chapter_14_3_Q_4_pic1_1(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	
	var midPointAB = midPointBetweenTwoPoint(pointA,pointB );
	var radiusA = distanceBetweenTwoPoints(pointA, midPointAB);
	var circle1 =  new Circle(pointA,radiusA);
	drawCircle( context,circle1,"black");
	
	var circle2 =  new Circle(pointB,radiusA);
	drawCircle( context,circle2,"black");
	
	var midPointAC = midPointBetweenTwoPoint(pointA,pointC );
	var radiusC = distanceBetweenTwoPoints(pointA, midPointAC);
	
	var circle3 =  new Circle(pointC,radiusC);
	drawCircle( context,circle3,"black");
	drawTriangleWithFillColor(context, triangle,"white");
	    

}

function chapter_14_3_Q_4_pic1_2(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	
	var midPointAB = midPointBetweenTwoPoint(pointA,pointB );
	var radiusA = distanceBetweenTwoPoints(pointA, midPointAB);
	var circle1 =  new Circle(pointA,radiusA);
	drawCircle( context,circle1,"black");
	
	var midPointBC = midPointBetweenTwoPoint(pointB,pointC );
	var circle2 =  new Circle(pointB,radiusA);
	drawCircle( context,circle2,"black");
	
	var midPointAC = midPointBetweenTwoPoint(pointA,pointC );
	var radiusC = distanceBetweenTwoPoints(pointA, midPointAC);
	
	var circle3 =  new Circle(pointC,radiusC);
	drawCircle( context,circle3,"black");
	drawTriangleWithFillColor(context, triangle,"white");

    var pointA1 =PointAtCertainDistance(midPointBC, pointA, 47);
    var pointA2 =PointAtCertainDistance(midPointBC, pointA, -35);	
	drawLineBetweenTwoPoints(context,pointA1,pointA2,"red");
	
	var pointB1 =PointAtCertainDistance(midPointAC, pointB, 47);
    var pointB2 =PointAtCertainDistance(midPointAC, pointB, -35);	
	drawLineBetweenTwoPoints(context,pointB1,pointB2,"red");
	
	var pointC1 =PointAtCertainDistance(midPointAB, pointC, 47);
    var pointC2 =PointAtCertainDistance(midPointAB, pointC, -35);	
	drawLineBetweenTwoPoints(context,pointC1,pointC2,"red");
}

function chapter_14_3_Q_4_pic2_1(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	retangle.linecolor = "black";
	drawRectangle(context, retangle);
	
	var midPointAB = midPointBetweenTwoPoint(pointA,pointB );
	var radiusA = distanceBetweenTwoPoints(pointA, midPointAB);
	var circle1 =  new Circle(midPointAB,radiusA);
	drawHalfCircle( context,circle1,270,90,"black");

	
	var midPointCD = midPointBetweenTwoPoint(pointC,pointD );
	var radiusC = distanceBetweenTwoPoints(pointC, midPointCD);	
	var circle3 =  new Circle(midPointCD,radiusC);
	drawHalfCircle( context,circle3,90,270,"black");   

}

function chapter_14_3_Q_4_pic2_2(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	retangle.linecolor = "black";
	drawRectangle(context, retangle);
	
	var midPointAB = midPointBetweenTwoPoint(pointA,pointB );
	var radiusA = distanceBetweenTwoPoints(pointA, midPointAB);
	var circle1 =  new Circle(midPointAB,radiusA);
	drawHalfCircle( context,circle1,270,90,"black");

	
	var midPointCD = midPointBetweenTwoPoint(pointC,pointD );
	var radiusC = distanceBetweenTwoPoints(pointC, midPointCD);	
	var circle3 =  new Circle(midPointCD,radiusC);
	drawHalfCircle( context,circle3,90,270,"black"); 

	var pointA1 =PointAtCertainDistance(midPointAB, midPointCD, 57);
    var pointA2 =PointAtCertainDistance(midPointAB, midPointCD, -35);	
	drawLineBetweenTwoPoints(context,pointA1,pointA2,"red");
   
    var midPointBC = midPointBetweenTwoPoint(pointB,pointC );
    var midPointCA = midPointBetweenTwoPoint(pointC,pointA );
	
    var pointC1 =PointAtCertainDistance(midPointBC, midPointCA, 57);
    var pointC2 =PointAtCertainDistance(midPointBC, midPointCA, -35);	
	drawLineBetweenTwoPoints(context,pointC1,pointC2,"red");

}


function chapter_14_3_Q_4_pic3_1(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	
	var midPointAB = midPointBetweenTwoPoint(pointA,pointB );
	var radiusA = distanceBetweenTwoPoints(pointA, midPointAB);
	var circle1 =  new Circle(pointA,radiusA);
	drawHalfCircle( context,circle1,55,120,"black"); 
	
	var circle2 =  new Circle(pointB,radiusA);
	drawHalfCircle( context,circle2,305,0,"black");
	
	var midPointAC = midPointBetweenTwoPoint(pointA,pointC );
	var radiusC = distanceBetweenTwoPoints(pointA, midPointAC);
	var circle3 =  new Circle(pointC,radiusC);
	drawHalfCircle( context,circle3,180,239,"black");
}

function chapter_14_3_Q_4_pic3_2(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	
	var midPointAB = midPointBetweenTwoPoint(pointA,pointB );
	var radiusA = distanceBetweenTwoPoints(pointA, midPointAB);
	var circle1 =  new Circle(pointA,radiusA);
	drawHalfCircle( context,circle1,55,120,"black"); 
	
	var midPointBC = midPointBetweenTwoPoint(pointB,pointC );
	
	var circle2 =  new Circle(pointB,radiusA);
	drawHalfCircle( context,circle2,305,0,"black");
	
	var midPointAC = midPointBetweenTwoPoint(pointA,pointC );
	var radiusC = distanceBetweenTwoPoints(pointA, midPointAC);
	var circle3 =  new Circle(pointC,radiusC);
	drawHalfCircle( context,circle3,180,239,"black");
	
	 var pointA1 =PointAtCertainDistance(midPointBC, pointA, 62);
    var pointA2 =PointAtCertainDistance(midPointBC, pointA, -35);	
	drawLineBetweenTwoPoints(context,pointA1,pointA2,"red");
	
	var pointB1 =PointAtCertainDistance(midPointAC, pointB, 62);
    var pointB2 =PointAtCertainDistance(midPointAC, pointB, -30);	
	drawLineBetweenTwoPoints(context,pointB1,pointB2,"red");
	
	var pointC1 =PointAtCertainDistance(midPointAB, pointC, 67);
    var pointC2 =PointAtCertainDistance(midPointAB, pointC, -25);	
	drawLineBetweenTwoPoints(context,pointC1,pointC2,"red");	

}

function chapter_14_3_Q_4_pic4_1(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	retangle.linecolor = "black";
	drawRectangle(context, retangle);
	
	var midPointAB = midPointBetweenTwoPoint(pointA,pointB );
	var radiusB = distanceBetweenTwoPoints(pointA, midPointAB);
	var circle1 =  new Circle(pointB,radiusB);
	drawHalfCircle( context,circle1,270,0,"black");

	
	var midPointCD = midPointBetweenTwoPoint(pointC,pointD );
	var radiusD = distanceBetweenTwoPoints(pointC, midPointCD);	
	var circle3 =  new Circle(pointD,radiusD);
	drawHalfCircle( context,circle3,90,180,"black");  
	
	var radiusA = distanceBetweenTwoPoints(pointA, midPointCD);	
	var circle2 =  new Circle(pointA,radiusA);
	drawHalfCircle( context,circle2,25,65,"black"); 

    var radiusC = distanceBetweenTwoPoints(pointC, midPointAB);	
	var circle4 =  new Circle(pointC,radiusC);
	drawHalfCircle( context,circle4,205,245,"black"); 
}

function chapter_14_3_Q_4_pic4_2(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	retangle.linecolor = "black";
	drawRectangle(context, retangle);
	
	var midPointAB = midPointBetweenTwoPoint(pointA,pointB );
	var radiusB = distanceBetweenTwoPoints(pointA, midPointAB);
	var circle1 =  new Circle(pointB,radiusB);
	drawHalfCircle( context,circle1,270,0,"black");

	
	var midPointCD = midPointBetweenTwoPoint(pointC,pointD );
	var radiusD = distanceBetweenTwoPoints(pointC, midPointCD);	
	var circle3 =  new Circle(pointD,radiusD);
	drawHalfCircle( context,circle3,90,180,"black");  
	
	var radiusA = distanceBetweenTwoPoints(pointA, midPointCD);	
	var circle2 =  new Circle(pointA,radiusA);
	drawHalfCircle( context,circle2,25,65,"black"); 

    var radiusC = distanceBetweenTwoPoints(pointC, midPointAB);	
	var circle4 =  new Circle(pointC,radiusC);
	drawHalfCircle( context,circle4,205,245,"black"); 
	
	var pointB1 =PointAtCertainDistance(pointB, pointD, 80);
    var pointB2 =PointAtCertainDistance(pointB, pointD, -10);	
	drawLineBetweenTwoPoints(context,pointB1,pointB2,"red");
	
	var pointC1 =PointAtCertainDistance(pointA, pointC, 80);
    var pointC2 =PointAtCertainDistance(pointA, pointC, -10);	
	drawLineBetweenTwoPoints(context,pointC1,pointC2,"red");
}


function chapter_14_3_Q_4_pic5_1(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	retangle.linecolor = "black";
	drawRectangle(context, retangle);
	
	var radiusAB = distanceBetweenTwoPoints(pointA, pointB);
	var circle1 =  new Circle(pointA,radiusAB);
	drawHalfCircle( context,circle1,360,90,"black");
	
	var circle2 =  new Circle(pointB,radiusAB);
	drawHalfCircle( context,circle2,270,0,"black");
	
	var radiusCD = distanceBetweenTwoPoints(pointC, pointD);	
	var circle3 =  new Circle(pointC,radiusCD);
	drawHalfCircle( context,circle3,180,270,"black");  
	
	var circle4 =  new Circle(pointD,radiusCD);
	drawHalfCircle( context,circle4,90,180,"black"); 
	
}

function chapter_14_3_Q_4_pic5_2(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	var midPointAB = midPointBetweenTwoPoint(pointA,pointB );
	var midPointBC = midPointBetweenTwoPoint(pointB,pointC );
	var midPointCD = midPointBetweenTwoPoint(pointC,pointD );
	var midPointDA = midPointBetweenTwoPoint(pointD,pointA );

	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	retangle.linecolor = "black";
	drawRectangle(context, retangle);
	
	var radiusAB = distanceBetweenTwoPoints(pointA, pointB);
	var circle1 =  new Circle(pointA,radiusAB);
	drawHalfCircle( context,circle1,360,90,"black");
	
	var circle2 =  new Circle(pointB,radiusAB);
	drawHalfCircle( context,circle2,270,0,"black");
	
	var radiusCD = distanceBetweenTwoPoints(pointC, pointD);	
	var circle3 =  new Circle(pointC,radiusCD);
	drawHalfCircle( context,circle3,180,270,"black");  
	
	var circle4 =  new Circle(pointD,radiusCD);
	drawHalfCircle( context,circle4,90,180,"black"); 
	
	var pointA1 =PointAtCertainDistance(pointA, pointC, 80);
    var pointA2 =PointAtCertainDistance(pointA, pointC, -10);
	drawLineBetweenTwoPoints(context,pointA1,pointA2,"red");
	
	var pointB1 =PointAtCertainDistance(pointB, pointD, 80);
    var pointB2 =PointAtCertainDistance(pointB, pointD, -10);
	drawLineBetweenTwoPoints(context,pointB1,pointB2,"red");
	
	var midPointAB1 =PointAtCertainDistance(midPointAB, midPointCD, 70);
    var midPointAB2 =PointAtCertainDistance(midPointAB, midPointCD, -10);
	drawLineBetweenTwoPoints(context,midPointAB1,midPointAB2,"red");
	
	var midPointAD1 =PointAtCertainDistance(midPointDA, midPointBC, 70);
    var midPointAD2 =PointAtCertainDistance(midPointDA, midPointBC, -10);
	drawLineBetweenTwoPoints(context,midPointAD1,midPointAD2,"red");
		
}

function chapter_14_3_Q_4_pic6_1(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	retangle.linecolor = "black";
	//drawRectangle(context, retangle);
	
	var midPointAB = midPointBetweenTwoPoint(pointA,pointB );
	drawLineBetweenTwoPoints(context,pointA,midPointAB,"black");
	
	
	var midPointCD = midPointBetweenTwoPoint(pointC,pointD );
	drawLineBetweenTwoPoints(context,pointD,midPointCD,"black");
	drawLineBetweenTwoPoints(context,midPointAB,midPointCD,"black");
	var midPointABCD = midPointBetweenTwoPoint(midPointAB,midPointCD );
	var radius1 = distanceBetweenTwoPoints(midPointAB, midPointABCD);	
	var circle1 =  new Circle(midPointAB,radius1);
	drawHalfCircle( context,circle1,270,0,"black");
	
	var circle2 =  new Circle(midPointCD,radius1);
	drawHalfCircle( context,circle2,180,270,"black");
	
		
	var circle3 =  new Circle(midPointABCD,radius1);
	drawHalfCircle( context,circle3,0,180,"black");  
	
}

function chapter_14_3_Q_4_pic6_2(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	retangle.linecolor = "black";

	var midPointAB = midPointBetweenTwoPoint(pointA,pointB );
	drawLineBetweenTwoPoints(context,pointA,midPointAB,"black");
	
	
	var midPointCD = midPointBetweenTwoPoint(pointC,pointD );
	drawLineBetweenTwoPoints(context,pointD,midPointCD,"black");
	drawLineBetweenTwoPoints(context,midPointAB,midPointCD,"black");
	var midPointABCD = midPointBetweenTwoPoint(midPointAB,midPointCD );
	var radius1 = distanceBetweenTwoPoints(midPointAB, midPointABCD);	
	var circle1 =  new Circle(midPointAB,radius1);
	drawHalfCircle( context,circle1,270,0,"black");
	
	var circle2 =  new Circle(midPointCD,radius1);
	drawHalfCircle( context,circle2,180,270,"black");
	
		
	var circle3 =  new Circle(midPointABCD,radius1);
	drawHalfCircle( context,circle3,0,180,"black");  
	
	var midPointAD = midPointBetweenTwoPoint(pointA,pointD );
	
	var pointD1 =PointAtCertainDistance(midPointAD, midPointABCD, 80);
    var pointD2 =PointAtCertainDistance(midPointAD, midPointABCD, -10);	
	drawLineBetweenTwoPoints(context,pointD1,pointD2,"red");
	 
}

function chapter_14_3_Q_4_pic7_1(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	
	var midPointAB = midPointBetweenTwoPoint(pointA,pointB );
	var midPointBC = midPointBetweenTwoPoint(pointB,pointC );
	var midPointCD = midPointBetweenTwoPoint(pointC,pointD );
	var midPointAD = midPointBetweenTwoPoint(pointD,pointA );
	var radiusAB = distanceBetweenTwoPoints(pointA, midPointAB);
	var radiusAD = distanceBetweenTwoPoints(pointA, midPointAD);

	var rectangle = new Rectangle(pointA,pointB,pointC,pointD);
	rectangle.linecolor = "black";
	drawRectangle(context, rectangle);
	
	var circle1 =  new Circle(pointA,radiusAB);
	drawCircle( context,circle1,"black");
	
	var circle2 =  new Circle(pointB,radiusAB);
	drawCircle( context,circle2,"black");
	
	var circle3 =  new Circle(pointC,radiusAD);
	drawCircle( context,circle3,"black");
	
	var circle4 =  new Circle(pointD,radiusAD);
	drawCircle( context,circle4,"black");
	drawRectangleWithFillColor(context, rectangle,"white");
	
}


function chapter_14_3_Q_4_pic7_2(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	
	var midPointAB = midPointBetweenTwoPoint(pointA,pointB );
	var midPointBC = midPointBetweenTwoPoint(pointB,pointC );
	var midPointCD = midPointBetweenTwoPoint(pointC,pointD );
	var midPointAD = midPointBetweenTwoPoint(pointD,pointA );
	var radiusAB = distanceBetweenTwoPoints(pointA, midPointAB);
	var radiusAD = distanceBetweenTwoPoints(pointA, midPointAD);

	var rectangle = new Rectangle(pointA,pointB,pointC,pointD);
	rectangle.linecolor = "black";
	drawRectangle(context, rectangle);
	
	var circle1 =  new Circle(pointA,radiusAB);
	drawCircle( context,circle1,"black");
	
	var circle2 =  new Circle(pointB,radiusAB);
	drawCircle( context,circle2,"black");
	
	var circle3 =  new Circle(pointC,radiusAD);
	drawCircle( context,circle3,"black");
	
	var circle4 =  new Circle(pointD,radiusAD);
	drawCircle( context,circle4,"black");
	drawRectangleWithFillColor(context, rectangle,"white");
	
	var pointA1 =PointAtCertainDistance(pointA, pointC, 80);
    var pointA2 =PointAtCertainDistance(pointA, pointC, -30);
	drawLineBetweenTwoPoints(context,pointA1,pointA2,"red");
	
	var pointB1 =PointAtCertainDistance(pointB, pointD, 75);
    var pointB2 =PointAtCertainDistance(pointB, pointD, -30);
	drawLineBetweenTwoPoints(context,pointB1,pointB2,"red");
	
	var midPointAB1 =PointAtCertainDistance(midPointAB, midPointCD, 60);
    var midPointAB2 =PointAtCertainDistance(midPointAB, midPointCD, -25);
	drawLineBetweenTwoPoints(context,midPointAB1,midPointAB2,"red");
	
	var midPointAD1 =PointAtCertainDistance(midPointAD, midPointBC, 70);
    var midPointAD2 =PointAtCertainDistance(midPointAD, midPointBC, -25);
	drawLineBetweenTwoPoints(context,midPointAD1,midPointAD2,"red");
		
	
}

function chapter_14_3_Q_6_pic1_1(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var midPointBC = midPointBetweenTwoPoint(pointB,pointC );
	var pointA1 =PointAtCertainDistance(pointA, midPointBC, 70);
    var pointA2 =PointAtCertainDistance(pointA, midPointBC, -20);
	drawLineBetweenTwoPoints(context,pointA1,pointA2,"red");
		
	
}

function chapter_14_3_Q_6_pic2_1(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	
}

function chapter_14_3_Q_6_pic3_1(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	var midPointAB = midPointBetweenTwoPoint(pointA,pointB );
	var midPointBC = midPointBetweenTwoPoint(pointB,pointC );
	var midPointCD = midPointBetweenTwoPoint(pointC,pointD );
	var midPointDA = midPointBetweenTwoPoint(pointD,pointA );

	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	retangle.linecolor = "black";
	drawRectangle(context, retangle);

	var pointA1 =PointAtCertainDistance(pointA, pointC, 80);
    var pointA2 =PointAtCertainDistance(pointA, pointC, -10);
	drawLineBetweenTwoPoints(context,pointA1,pointA2,"red");
	
	var pointB1 =PointAtCertainDistance(pointB, pointD, 80);
    var pointB2 =PointAtCertainDistance(pointB, pointD, -10);
	drawLineBetweenTwoPoints(context,pointB1,pointB2,"red");
	
	var midPointAB1 =PointAtCertainDistance(midPointAB, midPointCD, 70);
    var midPointAB2 =PointAtCertainDistance(midPointAB, midPointCD, -10);
	drawLineBetweenTwoPoints(context,midPointAB1,midPointAB2,"red");
	
	var midPointAD1 =PointAtCertainDistance(midPointDA, midPointBC, 70);
    var midPointAD2 =PointAtCertainDistance(midPointDA, midPointBC, -10);
	drawLineBetweenTwoPoints(context,midPointAD1,midPointAD2,"red");
		
}


function chapter_14_3_Q_6_pic4_1(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	var midPointAB = midPointBetweenTwoPoint(pointA,pointB );
	var midPointBC = midPointBetweenTwoPoint(pointB,pointC );
	var midPointCD = midPointBetweenTwoPoint(pointC,pointD );
	var midPointDA = midPointBetweenTwoPoint(pointD,pointA );

	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	retangle.linecolor = "black";
	drawRectangle(context, retangle);

	var pointA1 =PointAtCertainDistance(pointA, pointC, 80);
    var pointA2 =PointAtCertainDistance(pointA, pointC, -10);
	drawLineBetweenTwoPoints(context,pointA1,pointA2,"red");
	
	var pointB1 =PointAtCertainDistance(pointB, pointD, 100);
    var pointB2 =PointAtCertainDistance(pointB, pointD, -10);
	drawLineBetweenTwoPoints(context,pointB1,pointB2,"red");
	
	var midPointAB1 =PointAtCertainDistance(midPointAB, midPointCD, 70);
    var midPointAB2 =PointAtCertainDistance(midPointAB, midPointCD, -10);
	drawLineBetweenTwoPoints(context,midPointAB1,midPointAB2,"red");
	
	var midPointAD1 =PointAtCertainDistance(midPointDA, midPointBC, 70);
    var midPointAD2 =PointAtCertainDistance(midPointDA, midPointBC, -10);
	drawLineBetweenTwoPoints(context,midPointAD1,midPointAD2,"red");
		
}



function chapter_14_3_Q_6_pic5_1(context, x1,y1,x2,y2){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var centerO =  new Point(x1,y1+45);
	var circle =  new Circle(centerO,30);
	//drawCircle( context,circle,"blue");
	var startAngle = 0;
	var angleIncrement = 60;
	var pointC= getPointAtForDegree(circle,-startAngle);
	var pointD= getPointAtForDegree(circle,-(startAngle+1*angleIncrement));
	var pointE= getPointAtForDegree(circle,-(startAngle+2*angleIncrement));
	var pointF= getPointAtForDegree(circle,-(startAngle+3*angleIncrement));
	var pointG= getPointAtForDegree(circle,-(startAngle+4*angleIncrement));
	var pointH= getPointAtForDegree(circle,-(startAngle+5*angleIncrement));
	
	var midPointCD = midPointBetweenTwoPoint(pointC,pointD );
	var midPointDE = midPointBetweenTwoPoint(pointD,pointE );
	var midPointEF = midPointBetweenTwoPoint(pointE,pointF );
	var midPointFG = midPointBetweenTwoPoint(pointF,pointG );
	var midPointGH = midPointBetweenTwoPoint(pointG,pointH );
	var midPointHC = midPointBetweenTwoPoint(pointH,pointC);
	
	
	drawLineBetweenTwoPoints(context,pointC,pointD,"blue");
	drawLineBetweenTwoPoints(context,pointD,pointE,"blue");
	drawLineBetweenTwoPoints(context,pointE,pointF,"blue");
      
	drawLineBetweenTwoPoints(context,pointF,pointG,"blue");
	drawLineBetweenTwoPoints(context,pointG,pointH,"blue");
	drawLineBetweenTwoPoints(context,pointH,pointC,"blue");
	
	var pointC1= PointAtCertainDistance(pointC, pointF, 70);
	var pointC2= PointAtCertainDistance(pointC, pointF, -15);
	drawLineBetweenTwoPoints(context,pointC1,pointC2,"red");
	
	var pointD1= PointAtCertainDistance(pointD, pointG, 70);
	var pointD2= PointAtCertainDistance(pointD, pointG, -15);
	drawLineBetweenTwoPoints(context,pointD1,pointD2,"red");
	
	var pointE1= PointAtCertainDistance(pointE, pointH, 70);
	var pointE2= PointAtCertainDistance(pointE, pointH, -15);
	drawLineBetweenTwoPoints(context,pointE1,pointE2,"red");
	
	var pointCD1 = PointAtCertainDistance(midPointCD, midPointFG, 70);
	var pointCD2 = PointAtCertainDistance(midPointCD, midPointFG, -25);
	drawLineBetweenTwoPoints(context,pointCD1,pointCD2,"red");
	
	var pointDE1 = PointAtCertainDistance(midPointDE, midPointGH, 70);
	var pointDE2 = PointAtCertainDistance(midPointDE, midPointGH, -25);
	drawLineBetweenTwoPoints(context,pointDE1,pointDE2,"red");
	
	var pointEF1 = PointAtCertainDistance(midPointEF, midPointHC, 70);
	var pointEF2 = PointAtCertainDistance(midPointEF, midPointHC, -20);
	drawLineBetweenTwoPoints(context,pointEF1,pointEF2,"red");
	

}

function chapter_14_3_Q_6_pic6_1(context, x1,y1,x2,y2){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	
	var centerO =  new Point(x1,y1+45);
	var circle =  new Circle(centerO,35);
	//drawCircle( context,circle,"blue");
	var startAngle = -5;
	var angleIncrement =72;
	var pointC= getPointAtForDegree(circle,-startAngle);
	var pointD= getPointAtForDegree(circle,-(startAngle+1*angleIncrement));
	var pointE= getPointAtForDegree(circle,-(startAngle+2*angleIncrement));
	var pointF= getPointAtForDegree(circle,-(startAngle+3*angleIncrement));
	var pointG= getPointAtForDegree(circle,-(startAngle+4*angleIncrement));
	
	var midPointCD = midPointBetweenTwoPoint(pointC,pointD );
	var midPointDE = midPointBetweenTwoPoint(pointD,pointE );
	var midPointEF = midPointBetweenTwoPoint(pointE,pointF );
	var midPointFG = midPointBetweenTwoPoint(pointF,pointG );
	var midPointGC = midPointBetweenTwoPoint(pointG,pointC);
	
	drawLineBetweenTwoPoints(context,pointC,pointD,"blue");
	drawLineBetweenTwoPoints(context,pointD,pointE,"blue");
	drawLineBetweenTwoPoints(context,pointE,pointF,"blue");
        drawLineBetweenTwoPoints(context,pointF,pointG,"blue");
	drawLineBetweenTwoPoints(context,pointG,pointC,"blue");
	
	var pointC1= PointAtCertainDistance(pointC, midPointEF, 75);
	var pointC2= PointAtCertainDistance(pointC, midPointEF, -25);	
	drawLineBetweenTwoPoints(context,pointC1,pointC2,"red");
	
	
	var pointD1= PointAtCertainDistance(pointD, midPointFG, 75);
	var pointD2= PointAtCertainDistance(pointD, midPointFG, -25);
	drawLineBetweenTwoPoints(context,pointD1,pointD2,"red");
	
	var pointE1= PointAtCertainDistance(pointE, midPointGC, 80);
	var pointE2= PointAtCertainDistance(pointE, midPointGC, -15);
	drawLineBetweenTwoPoints(context,pointE1,pointE2,"red");
	
	var pointF1= PointAtCertainDistance(pointF, midPointCD, 80);
	var pointF2= PointAtCertainDistance(pointF, midPointCD, -15);
	drawLineBetweenTwoPoints(context,pointF1,pointF2,"red");
	
	var pointG1= PointAtCertainDistance(pointG, midPointDE, 75);
	var pointG2= PointAtCertainDistance(pointG, midPointDE, -35);
	drawLineBetweenTwoPoints(context,pointG1,pointG2,"red");
       

}


function chapter_14_3_Q_6_pic7_1(context, x1,y1,x2,y2){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	
	var centerO =  new Point(x1,y1+45);
	var circle =  new Circle(centerO,35);
	drawCircle( context,circle,"blue");
	var startAngle = 0;
	var angleIncrement =10;
	var count = 360/angleIncrement;
	for(i=0;i<count;i++){
		var pointD= getPointAtForDegree(circle,-(startAngle+i*angleIncrement));
		var pointC1= PointAtCertainDistance(centerO, pointD, 75);
	    var pointC2= PointAtCertainDistance(centerO, pointD, -25);	
	    drawLineBetweenTwoPoints(context,pointC1,pointC2,"red");
	}
	

}

function chapter_14_3_Q_7_pic1_1(context, x1,y1,x2,y2){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var space=18;
	
	displayAlphabet(context,pointA.x,pointA.y,"B");
	displayAlphabet(context,pointA.x+space*1,pointA.y,"C");
	displayAlphabet(context,pointA.x+space*2,pointA.y,"D");
	displayAlphabet(context,pointA.x+space*3,pointA.y,"K");
	
	
	var y_offset_up=8;
	var pointL1 =new Point(pointA.x-10,pointA.y-y_offset_up);
	var pointL2 =new Point(pointA.x+space*5,pointA.y-y_offset_up);	
	drawLineBetweenTwoPoints(context,pointL1,pointL2,"red");
	
	var y_offset=25;
	displayAlphabet(context,pointA.x+space*0,pointA.y+y_offset,"H");
	displayAlphabet(context,pointA.x+space*1,pointA.y+y_offset,"I");
	displayAlphabet(context,pointA.x+space*2,pointA.y+y_offset,"O");
	displayAlphabet(context,pointA.x+space*3,pointA.y+y_offset,"X");
	var pointL3 =new Point(pointA.x-10,pointA.y+y_offset - y_offset_up);
	var pointL4 =new Point(pointA.x+space*5,pointA.y+y_offset- y_offset_up);	
	drawLineBetweenTwoPoints(context,pointL3,pointL4,"red");
	

}


function chapter_14_3_Q_7_pic2_1(context, x1,y1,x2,y2){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var space=18;
	
	displayAlphabet(context,pointA.x,pointA.y,"A");
	displayAlphabet(context,pointA.x+space*1,pointA.y,"H");
	displayAlphabet(context,pointA.x+space*2,pointA.y,"I");
	displayAlphabet(context,pointA.x+space*3,pointA.y,"M");
	
	drawLineBetweenTwoPointsAxis(context,pointA.x+7,pointA.y-25,pointA.x+7,pointA.y+10,"red");
	drawLineBetweenTwoPointsAxis(context,pointA.x+space*1+7,pointA.y-25,pointA.x+space*1+7,pointA.y+10,"red");
	drawLineBetweenTwoPointsAxis(context,pointA.x+space*2+2.5,pointA.y-25,pointA.x+space*2+2.5,pointA.y+10,"red");
	drawLineBetweenTwoPointsAxis(context,pointA.x+space*3+8,pointA.y-25,pointA.x+space*3+8,pointA.y+10,"red");
	
	var y_offset_up=8;

	var y_offset=35;
	displayAlphabet(context,pointA.x+space*0,pointA.y+y_offset,"O");
	displayAlphabet(context,pointA.x+space*1,pointA.y+y_offset,"T");
	displayAlphabet(context,pointA.x+space*2,pointA.y+y_offset,"U");
	displayAlphabet(context,pointA.x+space*3,pointA.y+y_offset,"V");
	
	drawLineBetweenTwoPointsAxis(context,pointA.x+space*0+7,pointA.y+y_offset-25,pointA.x+space*0+7,pointA.y+y_offset+10,"red");
	drawLineBetweenTwoPointsAxis(context,pointA.x+space*1+7,pointA.y+y_offset-25,pointA.x+space*1+7,pointA.y+y_offset+10,"red");
	drawLineBetweenTwoPointsAxis(context,pointA.x+space*2+7,pointA.y+y_offset-25,pointA.x+space*2+7,pointA.y+y_offset+10,"red");
	drawLineBetweenTwoPointsAxis(context,pointA.x+space*3+7,pointA.y+y_offset-25,pointA.x+space*3+7,pointA.y+y_offset+10,"red");

	
	var y_offset=2*35;
	displayAlphabet(context,pointA.x+space*0,pointA.y+y_offset,"W");
	displayAlphabet(context,pointA.x+space*2,pointA.y+y_offset,"X");
	displayAlphabet(context,pointA.x+space*3,pointA.y+y_offset,"Y");
	drawLineBetweenTwoPointsAxis(context,pointA.x+space*0+7,pointA.y+y_offset-25,pointA.x+space*0+7,pointA.y+y_offset+10,"red");
	drawLineBetweenTwoPointsAxis(context,pointA.x+space*2+7,pointA.y+y_offset-25,pointA.x+space*2+7,pointA.y+y_offset+10,"red");
	drawLineBetweenTwoPointsAxis(context,pointA.x+space*3+7,pointA.y+y_offset-25,pointA.x+space*3+7,pointA.y+y_offset+10,"red");
	
	

}

function chapter_14_3_Q_7_pic3_1(context, x1,y1,x2,y2){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var space=18;
	
	displayAlphabet(context,pointA.x,pointA.y,"H");
	displayAlphabet(context,pointA.x+space*1,pointA.y,"I");
	displayAlphabet(context,pointA.x+space*2,pointA.y,"O");
	displayAlphabet(context,pointA.x+space*3,pointA.y,"X");
	
	drawLineBetweenTwoPointsAxis(context,pointA.x+7,pointA.y-25,pointA.x+7,pointA.y+10,"red");
	drawLineBetweenTwoPointsAxis(context,pointA.x+space*1+2.5,pointA.y-25,pointA.x+space*1+2.5,pointA.y+10,"red");
	drawLineBetweenTwoPointsAxis(context,pointA.x+space*2+7.5,pointA.y-25,pointA.x+space*2+7.5,pointA.y+10,"red");
	drawLineBetweenTwoPointsAxis(context,pointA.x+space*3+7.5,pointA.y-25,pointA.x+space*3+7.5,pointA.y+10,"red");
	
	
	
	var y_offset_up=8;
	var pointL1 =new Point(pointA.x-10,pointA.y-y_offset_up);
	var pointL2 =new Point(pointA.x+space*5,pointA.y-y_offset_up);	
	drawLineBetweenTwoPoints(context,pointL1,pointL2,"red");
	
}

function chapter_14_3_Q_8_pic1_1(context, x1,y1,x2,y2,x3,y3,x4,y4){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	
}

function chapter_14_3_Q_8_pic2_1(context, x1,y1,x2,y2){

	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var space=18;
	
	displayAlphabet(context,pointA.x,pointA.y,"P");
	displayAlphabet(context,pointA.x+space*1,pointA.y,"R");
	
}














