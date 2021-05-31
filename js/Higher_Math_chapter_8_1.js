


function chapter_16_3_Q_3_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1-15,y1+5);
	var circle =  new Circle(centerO,100);
	setCircleFillStyle(circle,"blue");
	drawCircleArc( context,circle,11*Math.PI/6,"blue",true);
	var pointA= getPointAtForDegree(circle,0);
	var pointB= getPointAtForDegree(circle,-30);
	
	drawLineBetweenTwoPoints(context,centerO,pointA,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointB,"blue");
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	displayPointName(context,pointA,pointA.x+4,pointA.y+5);
	displayPointName(context,pointB,pointB.x+5,pointB.y+2);
	// display angle
	displayName(context,centerO.x+30,centerO.y-2,"θ");
	var rotatePoint = new Point(centerO.x+25,centerO.y+20);
	writeRotatedText(context,"r = 21 মিটার",centerO,+5,-5,-Math.PI/6);
	
}

function chapter_16_3_Q_4_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1-15,y1+5);
	var circle =  new Circle(centerO,100);
	setCircleFillStyle(circle,"blue");
	drawCircleArc( context,circle,11*Math.PI/6,"blue",true);
	var pointA= getPointAtForDegree(circle,0);
	var pointB= getPointAtForDegree(circle,-30);
	
	drawLineBetweenTwoPoints(context,centerO,pointA,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointB,"blue");
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	displayPointName(context,pointA,pointA.x+4,pointA.y+5);
	displayPointName(context,pointB,pointB.x+5,pointB.y+2);
	// display angle
	displayName(context,centerO.x+30,centerO.y-2,"76");
	var rotatePoint = new Point(centerO.x+25,centerO.y+20);
	writeRotatedText(context,"r = 14 সে.মি",centerO,+5,-5,-Math.PI/6);
	
}

function Higher_Math_chapter_8_1_Q_7(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x-15,centerO.y+15);
	var circle =  new Circle(centerO,50);
	displayName(context,centerO.x-1,centerO.y-20,"r");
	setCircleFillStyle(circle,"blue");
	drawCircle( context,circle,"green");

	var pointA= getPointAtForDegree(circle,-10);
	var pointB= getPointAtForDegree(circle,-60);
		
	drawLineBetweenTwoPoints(context,centerO,pointA,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointB,"red");
	drawPoint(context,centerO , "red");
   
   displayText2(context,centerO.x+15, centerO.y-10,"θ = 5");
   displayText2(context,pointB.x+5, pointB.y-5,"B"); 
   displayText2(context,pointA.x+5, pointA.y-3,"A");   
 
}

function Higher_Math_chapter_8_1_Q_8(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x-15,centerO.y+15);
	var circle =  new Circle(centerO,50);
	displayName(context,centerO.x-1,centerO.y-20,"r");
	setCircleFillStyle(circle,"blue");
	drawCircle( context,circle,"green");

	var pointA= getPointAtForDegree(circle,-10);
	var pointB= getPointAtForDegree(circle,-60);
		
	drawLineBetweenTwoPoints(context,centerO,pointA,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointB,"red");
	drawPoint(context,centerO , "red");
   
   displayText2(context,centerO.x+15, centerO.y-10,"θ = 5");
   displayText2(context,pointB.x+5, pointB.y-5,"B"); 
   displayText2(context,pointA.x+5, pointA.y-3,"A");   
 
}

function Higher_Math_chapter_8_1_Q_9(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x-15,centerO.y-5);
	var circle =  new Circle(centerO,65);
	displayName(context,centerO.x+20,centerO.y-20,"r");
	setCircleFillStyle(circle,"blue");
	drawCircle( context,circle,"green");

	var pointA= getPointAtForDegree(circle,0);
	var pointB= getPointAtForDegree(circle,-30);
	var pointC= getPointAtForDegree(circle,-180);
		
	drawLineBetweenTwoPoints(context,centerO,pointA,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointB,"red");
	drawLineBetweenTwoPoints(context,centerO,pointC,"red");
	drawPoint(context,centerO , "red");
   
   displayText2(context,centerO.x+25, centerO.y-5,"θ = 30");
   displayText2(context,pointB.x+5, pointB.y-5,"B"); 
   displayText2(context,pointA.x+5, pointA.y,"A"); 
  displayText2(context,pointC.x-15, pointC.y,"C");  
 displayText2(context,centerO.x-25, centerO.y+20,"201 মিটার");   
 displayText2(context,pointA.x+5, pointA.y-15,"s মিটার");
}

function Higher_Math_chapter_8_1_Q_10(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x-15,centerO.y+15);
	var circle =  new Circle(centerO,50);
	displayName(context,centerO.x-1,centerO.y-20,"r");
	setCircleFillStyle(circle,"blue");
	drawCircle( context,circle,"green");

	var pointA= getPointAtForDegree(circle,-10);
	var pointB= getPointAtForDegree(circle,-60);
		
	drawLineBetweenTwoPoints(context,centerO,pointA,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointB,"red");
	drawPoint(context,centerO , "red");
   
   displayText2(context,centerO.x+15, centerO.y-10,"θ = 5");
   displayText2(context,pointB.x+5, pointB.y-5,"B"); 
   displayText2(context,pointA.x+5, pointA.y-3,"A");   
 
}


function Higher_Math_chapter_8_1_Q_12(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,centerO.x-15,centerO.y-5);
	var circle =  new Circle(centerO,65);
	displayName(context,centerO.x+20,centerO.y-20,"r");
	setCircleFillStyle(circle,"blue");
	drawCircle( context,circle,"green");

	var pointA= getPointAtForDegree(circle,0);
	var pointB= getPointAtForDegree(circle,-60);
	var pointC= getPointAtForDegree(circle,-180);
		
	drawLineBetweenTwoPoints(context,centerO,pointA,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointB,"red");
	drawLineBetweenTwoPoints(context,centerO,pointC,"red");
	drawPoint(context,centerO , "red");
   
   displayText2(context,centerO.x+25, centerO.y-5,"θ = 60");
   displayText2(context,pointB.x+5, pointB.y-5,"B"); 
   displayText2(context,pointA.x+5, pointA.y,"A"); 
  displayText2(context,pointC.x-15, pointC.y,"C");  
 displayText2(context,centerO.x-25, centerO.y+20,"201 মিটার");   
 displayText2(context,pointA.x+5, pointA.y-15,"s মিটার");
}
function Higher_Math_chapter_8_1_Q_13(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1-15,y1+5);
	var circle =  new Circle(centerO,100);
	setCircleFillStyle(circle,"blue");
	drawCircleArc( context,circle,11*Math.PI/6,"blue",true);
	var pointA= getPointAtForDegree(circle,0);
	var pointB= getPointAtForDegree(circle,-30);
	
	drawLineBetweenTwoPoints(context,centerO,pointA,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointB,"blue");
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	displayPointName(context,pointA,pointA.x+4,pointA.y+5);
	displayPointName(context,pointB,pointB.x+5,pointB.y+2);
	// display angle
	displayName(context,centerO.x+30,centerO.y-2,"8'");
	
	var rotatePoint = new Point(centerO.x+25,centerO.y+20);
	displayText2(context,centerO.x+25, centerO.y+15,"750 কি.মি.");
	//writeRotatedText(context,"r = 63 সে.মি",centerO,+5,-5,-Math.PI/6);
	
}



function chapter_16_3_Q_6_pic1(context, x1,y1){

	var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1-5,y1+15);
	var circle =  new Circle(centerO,60);
	displayName(context,centerO.x-10,centerO.y-10,"r");
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	
	   var circle_2 =  new Circle(centerO,40);	
	 drawCircle( context,circle_2,"purple");
	 displayName(context,centerO.x,centerO.y-40,"পথ ");
	
	
	var pointD= getPointAtForDegree(circle,-35);
	var pointA= getPointAtForDegree(circle_2,-85);
		
	drawLineBetweenTwoPoints(context,centerO,pointA,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointD,"red");
    centerO.x= centerO.x;
    centerO.y= centerO.y-2;
	drawPoint(context,centerO , "red");	
	 displayName(context,centerO.x+15,centerO.y+5,"r+2");
 
}


function chapter_16_3_Q_8_pic1(context, x1,y1){
var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	
	displayPointName(context,centerO,x1+5,y1-5);
	var circle =  new Circle(centerO,50);
	setCircleFillStyle(circle,"blue");
	//setCircleFill(circle,"yes");
	drawCircle( context,circle,"green");
	var pointB= getPointAtForDegree(circle,0);
	var pointC= getPointAtForDegree(circle,-90);
	var pointD= getPointAtForDegree(circle,-180);
	var pointA= getPointAtForDegree(circle,-270);
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context,pointB,pointB.x+10,pointB.y+5);
	displayPointName(context,pointC,pointC.x,pointC.y-5);
	displayPointName(context,pointD,pointD.x-15,pointD.y+5);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	
	drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
	drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
	drawLineBetweenTwoPoints(context,pointB,pointD,"blue");
	drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointC,"red");
	drawLineBetweenTwoPoints(context,centerO,pointD,"red");
    centerO.x= centerO.x;
    centerO.y= centerO.y-2;
	drawPoint(context,centerO , "red");	
 
}


function chapter_16_3_Q_9_pic1(context, x1,y1){
var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");
	var radius = 50;
	displayPointName(context,centerO,x1,y1+15);
	var circle =  new Circle(centerO,radius);
	drawCircle( context,circle,"green");
	centerO.x= centerO.x;
    centerO.y= centerO.y;
	drawPoint(context,centerO , "red");
    var pointD= getPointAtForDegree(circle,-35);	
	drawLineBetweenTwoPoints(context,centerO,pointD,"red");
	 displayName(context,centerO.x+5,centerO.y-15,"r");
	displayName(context,centerO.x-10,centerO.y+radius+20,"চিত্র :১");
 
}
function chapter_16_3_Q_9_pic2(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointB =  new Point(x1,y1);
	var pointC =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	
	var pointa = midPointBetweenTwoPoint(pointB,pointC );
	var pointb = midPointBetweenTwoPoint(pointC,pointA );
	var pointc = midPointBetweenTwoPoint(pointA,pointB );

	displayPointName(context,pointA,pointA.x-10,pointA.y-3);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "red");
	
	displayName(context,pointa.x,pointa.y+15,"a");
	displayName(context,pointb.x+15,pointb.y,"a");
	displayName(context,pointc.x-15,pointc.y,"a");
	displayName(context,pointB.x+30,pointB.y+35,"চিত্র :২");
	
}



