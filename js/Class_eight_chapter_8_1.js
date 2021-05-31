

function class_eight_chapter_8_1_Q_5_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x,pointA.y-5);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x,pointC.y+15);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var pointO = midPointBetweenTwoPoint(pointA,pointC );
	
	
	drawPoint(context,pointO, "red");	
	setPointName(pointO,"O");	
	drawLineBetweenTwoPoints(context,pointB,pointO,"blue");
	
	displayPointName(context,pointO,pointO.x+10,pointO.y);
	var distance = distanceBetweenTwoPoints(pointO,pointB);
	var pointD = PointAtCertainDistance(pointB, pointO, distance*2);
	setPointName(pointD,"D");
	drawPoint(context,pointD, "blue");
	displayPointName(context,pointD,pointD.x-15,pointD.y-10);
	
	drawLineBetweenTwoPoints(context,pointD,pointO,"green");
	drawLineBetweenTwoPoints(context,pointD,pointC,"green");
	drawLineBetweenTwoPoints(context,pointD,pointA,"green");

	
	//displayName(context,x1+40,y1+35,"চিত্র :১");	

}


function class_eight_chapter_8_1_Q_6_pic1(context, x1,y1,x2,y2,x3,y3,x4,y4){
 var pointA = new Point(x1,y1);
 var pointB = new Point(x2,y2);
 var pointC = new Point(x3,y3);
 var pointD = new Point(x4,y4); 
 var rect= new Rectangle(pointA,pointB,pointC,pointD);
 drawRectangle(context,rect);
 drawLineBetweenTwoPoints(context,pointA,pointC,"green");

 
	 setPointName(pointA,"A");
	 setPointName(pointB,"B");
	 setPointName(pointC,"C");
	 setPointName(pointD,"D");

	displayPointName(context,pointA,pointA.x-5,pointA.y+15);
	displayPointName(context, pointB,pointB.x+5,pointB.y+10);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x-5,pointD.y-5);
	}
	
	
	
function class_eight_chapter_8_1_Q_7_pic1(context, x1,y1,x2,y2,x3,y3,x4,y4){
 var pointA = new Point(x1,y1);
 var pointB = new Point(x2,y2);
 var pointC = new Point(x3,y3);
 var pointD = new Point(x4,y4); 
 var rect= new Rectangle(pointA,pointB,pointC,pointD);
 drawRectangle(context,rect);
 drawLineBetweenTwoPoints(context,pointA,pointC,"green");

 
	 setPointName(pointA,"A");
	 setPointName(pointB,"B");
	 setPointName(pointC,"C");
	 setPointName(pointD,"D");

	displayPointName(context,pointA,pointA.x-5,pointA.y+15);
	displayPointName(context, pointB,pointB.x+5,pointB.y+10);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x-5,pointD.y-5);
	}
	
	
	function class_eight_chapter_8_1_Q_8_pic1(context, x1,y1,x2,y2,x3,y3,x4,y4){
 var pointA = new Point(x1,y1);
 var pointB = new Point(x2,y2);
 var pointC = new Point(x3,y3);
 var pointD = new Point(x4,y4); 
 var rect= new Rectangle(pointA,pointB,pointC,pointD);
 drawRectangle(context,rect);
 drawLineBetweenTwoPoints(context,pointA,pointC,"green");
 drawLineBetweenTwoPoints(context,pointB,pointD,"green");

 
	 setPointName(pointA,"A");
	 setPointName(pointB,"B");
	 setPointName(pointC,"C");
	 setPointName(pointD,"D");

	displayPointName(context,pointA,pointA.x-5,pointA.y+15);
	displayPointName(context, pointB,pointB.x+5,pointB.y+10);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x-5,pointD.y-5);
	}

	
	function class_eight_chapter_8_1_Q_9_pic1(context, x1,y1,x2,y2,x3,y3,x4,y4){
 var pointA = new Point(x1,y1);
 var pointB = new Point(x2,y2);
 var pointC = new Point(x3,y3);
 var pointD = new Point(x4,y4); 
 var rect= new Rectangle(pointA,pointB,pointC,pointD);
 drawRectangle(context,rect);
 drawLineBetweenTwoPoints(context,pointA,pointC,"green");
 drawLineBetweenTwoPoints(context,pointB,pointD,"green");

 
	 setPointName(pointA,"A");
	 setPointName(pointB,"B");
	 setPointName(pointC,"C");
	 setPointName(pointD,"D");

	displayPointName(context,pointA,pointA.x-5,pointA.y+15);
	displayPointName(context, pointB,pointB.x+5,pointB.y+10);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x-5,pointD.y-5);
	pointO = midPointBetweenTwoPoint(pointA,pointC );
	 setPointName(pointO,"O");
	 displayPointName(context,pointO,pointO.x-5,pointO.y-5);
	}
	
	
	
	function class_eight_chapter_8_1_Q_10_pic1(context, x1,y1,x2,y2,x3,y3,x4,y4){
		 var pointD = new Point(x1,y1);
		 var pointC = new Point(x2,y2);
		 var pointB = new Point(x3,y3);
		 var pointA = new Point(x4,y4); 
		 var rect= new Rectangle(pointA,pointB,pointC,pointD);
		 drawRectangle(context,rect);
		 drawLineBetweenTwoPoints(context,pointA,pointC,"green");
		 drawLineBetweenTwoPoints(context,pointB,pointD,"green");

		 
			 setPointName(pointA,"A");
			 setPointName(pointB,"B");
			 setPointName(pointC,"C");
			 setPointName(pointD,"D");

			displayPointName(context,pointA,pointA.x-5,pointA.y-5);
			displayPointName(context, pointB,pointB.x+5,pointB.y-5);
			displayPointName(context,pointC,pointC.x+5,pointC.y+15);
			displayPointName(context,pointD,pointD.x-5,pointD.y+15);
			
			
			 var pointP = midPointBetweenTwoPoint(pointA,pointB );
			 var pointQ = midPointBetweenTwoPoint(pointB,pointC );
			 var pointR = midPointBetweenTwoPoint(pointC,pointD );
			 var pointS = midPointBetweenTwoPoint(pointD,pointA );
			 
			 drawLineBetweenTwoPoints(context,pointP,pointQ,"blue");
			 drawLineBetweenTwoPoints(context,pointQ,pointR,"blue");
			 drawLineBetweenTwoPoints(context,pointR,pointS,"blue");
			 drawLineBetweenTwoPoints(context,pointS,pointP,"blue")
			 
			 setPointName(pointP,"P");
			 displayPointName(context,pointP,pointP.x-5,pointP.y-5);
			 
			 setPointName(pointQ,"Q");
			 displayPointName(context,pointQ,pointQ.x+5,pointQ.y+5);
			 
			  setPointName(pointR,"R");
			 displayPointName(context,pointR,pointR.x-5,pointR.y+15);
			 
			 setPointName(pointS,"S");
			 displayPointName(context,pointS,pointS.x-15,pointS.y+5);
	}

	function class_eight_chapter_8_1_Q_11_pic1(context, x1,y1,x2,y2,x3,y3,x4,y4){
		 var pointA = new Point(x1,y1);
		 var pointB = new Point(x2,y2);
		 var pointC = new Point(x3,y3);
		 var pointD = new Point(x4,y4); 
		 var rect= new Rectangle(pointA,pointB,pointC,pointD);
		 drawRectangle(context,rect);
		// drawLineBetweenTwoPoints(context,pointA,pointC,"green");
		 //drawLineBetweenTwoPoints(context,pointB,pointD,"green");

		 
			 setPointName(pointA,"A");
			 setPointName(pointB,"B");
			 setPointName(pointC,"C");
			 setPointName(pointD,"D");

			displayPointName(context,pointA,pointA.x-5,pointA.y-5);
			displayPointName(context, pointB,pointB.x-5,pointB.y+15);
			displayPointName(context,pointC,pointC.x+5,pointC.y+15);
			displayPointName(context,pointD,pointD.x-1,pointD.y-5);
			var angle =  getAngle(pointA,pointB,pointC);
			var distance = 40;
			var temPoint = getPointAtAnAngle(pointB,-angle/2,distance);
			// drawPoint(context,temPoint, "red");
			var pointF = pointOfIntersectionOfPoints(pointA, pointD,pointB,temPoint);
			// drawPoint(context,pointF, "red");
             setPointName(pointF,"F")	
             displayPointName(context,pointF,pointF.x-5,pointF.y-5);			 
			 drawLineBetweenTwoPoints(context,pointB,pointF,"green");
			 
			 angle =  getAngle(pointA,pointD,pointC);
			
		     temPoint = getPointAtAnAngle(pointD,-angle/2,distance);
			// drawPoint(context,temPoint, "red");
			var pointE = pointOfIntersectionOfPoints(pointB, pointC,pointD,temPoint);
			 //drawPoint(context,pointE, "red");
			  setPointName(pointE,"E")	
             displayPointName(context,pointE,pointE.x-5,pointE.y+15);
			 
			 drawLineBetweenTwoPoints(context,pointD,pointE,"green");
			
			
	}
	
	function class_eight_chapter_8_1_Q_12_pic1(context, x1,y1,x2,y2,x3,y3,x4,y4){
		 var pointD = new Point(x1,y1);
		 var pointA = new Point(x2,y2);
		 var pointB = new Point(x3,y3);
		 var pointC = new Point(x4,y4); 
		 var rect= new Rectangle(pointA,pointB,pointC,pointD);
		 drawRectangle(context,rect);
		// drawLineBetweenTwoPoints(context,pointA,pointC,"green");
		 //drawLineBetweenTwoPoints(context,pointB,pointD,"green");

		 
			 setPointName(pointA,"A");
			 setPointName(pointB,"B");
			 setPointName(pointC,"C");
			 setPointName(pointD,"D");

			displayPointName(context,pointA,pointA.x-5,pointA.y+15);
			displayPointName(context, pointB,pointB.x-5,pointB.y+15);
			displayPointName(context,pointC,pointC.x+5,pointC.y-5);
			displayPointName(context,pointD,pointD.x-1,pointD.y-5);
			var angle =  getAngle(pointD,pointA,pointB);
			var distance = 40;
			var temPoint1 = getPointAtAnAngle(pointA,-angle/2,distance);
			// drawPoint(context,temPoint1, "red");
			
			 angle =  getAngle(pointA,pointB,pointC);			
		     temPoint2 = getPointAtAnAngle(pointB,180+angle/2,distance);
			// drawPoint(context,temPoint2, "red");
			 
			var pointO = pointOfIntersectionOfPoints(pointA, temPoint1,pointB,temPoint2);
			drawPoint(context,pointO, "red");
			  setPointName(pointO,"O")	
             displayPointName(context,pointO,pointO.x-5,pointO.y-5);
			 
			 drawLineBetweenTwoPoints(context,pointA,pointO,"green");
			 drawLineBetweenTwoPoints(context,pointB,pointO,"green");
			
			
			
	}
	
	
	function class_eight_chapter_8_1_Q_13_pic1(context, x1,y1,x2,y2,x3,y3){
		var pointA =  new Point(x1,y1);
		var pointB =  new Point(x2,y2);
		var pointC =  new Point(x3,y3);
		setPointName(pointA,"A");
		setPointName(pointB,"B");
		setPointName(pointC,"C");

		displayPointName(context,pointA,pointA.x,pointA.y-5);
		displayPointName(context, pointB,pointB.x-15,pointB.y+5);
		displayPointName(context,pointC,pointC.x+5,pointC.y+5);

		var triangle = new Triangle(pointA,pointB,pointC);
		drawTriangle(context, triangle);
		var pointD = midPointBetweenTwoPoint(pointA,pointB );
		var pointE = midPointBetweenTwoPoint(pointB,pointC );
		var pointF = midPointBetweenTwoPoint(pointA,pointC );
		
		
		 drawLineBetweenTwoPoints(context,pointD,pointE,"red");
		 drawLineBetweenTwoPoints(context,pointE,pointF,"red");
		 drawLineBetweenTwoPoints(context,pointD,pointF,"red");
		 
		 
		setPointName(pointD,"D");
		setPointName(pointE,"E");
		setPointName(pointF,"F");

		displayPointName(context,pointD,pointD.x-15,pointD.y+5);
		displayPointName(context, pointE,pointE.x-5,pointE.y+15);
		displayPointName(context,pointF,pointF.x+5,pointF.y+5);
		
	}
	
	function class_eight_chapter_8_1_Q_13_pic2(context, x1,y1,x2,y2,x3,y3){
		var pointA =  new Point(x1,y1);
		var pointB =  new Point(x2,y2);
		var pointC =  new Point(x3,y3);
		setPointName(pointA,"A");
		setPointName(pointB,"B");
		setPointName(pointC,"C");

		displayPointName(context,pointA,pointA.x,pointA.y-5);
		displayPointName(context, pointB,pointB.x-15,pointB.y+15);
		displayPointName(context,pointC,pointC.x+5,pointC.y+15);

		var triangle = new Triangle(pointA,pointB,pointC);
		drawTriangle(context, triangle);
		var pointD = midPointBetweenTwoPoint(pointA,pointB );
		var pointF = midPointBetweenTwoPoint(pointA,pointC );
		
		 drawLineBetweenTwoPoints(context,pointD,pointF,"red");
		 
		 
		setPointName(pointD,"D");
		setPointName(pointF,"F");

		displayPointName(context,pointD,pointD.x-15,pointD.y-10);
		displayPointName(context,pointF,pointF.x+5,pointF.y-10);
		
		var extensionLengeth = distanceBetweenTwoPoints(pointD,pointF);
		var pointG = PointAtCertainDistance(pointD, pointF, extensionLengeth*2);
		drawLineBetweenTwoPoints(context,pointG,pointF,"red");
		drawLineBetweenTwoPoints(context,pointG,pointC,"red");
		
		setPointName(pointG,"G");
		displayPointName(context,pointG,pointG.x+10,pointG.y+10);
		
		
		
		
	}
	
	function class_eight_chapter_8_1_Q_14_pic1(context, x1,y1,x2,y2,x3,y3,x4,y4){
		
		 var pointA = new Point(x1,y1);
		 var pointB= new Point(x2,y2);
		 var pointC= new Point(x3,y3);
		 var pointD = new Point(x4,y4); 
		 var rect= new Rectangle(pointA,pointB,pointC,pointD);
		 drawRectangle(context,rect);
		 drawLineBetweenTwoPoints(context,pointB,pointD,"green");
		 		 
			 setPointName(pointA,"A");
			 setPointName(pointB,"B");
			 setPointName(pointC,"C");
			 setPointName(pointD,"D");

			displayPointName(context,pointA,pointA.x-5,pointA.y-10);
			displayPointName(context, pointB,pointB.x-5,pointB.y-10);
			displayPointName(context,pointC,pointC.x+5,pointC.y+15);
			displayPointName(context,pointD,pointD.x-1,pointD.y+15);
			
            var pointM = perpendicularPointOnLineFromAPoint(pointD,pointB,pointA);
			var pointN = perpendicularPointOnLineFromAPoint(pointD,pointB,pointC);
			 drawLineBetweenTwoPoints(context,pointA,pointM,"blue");
			 drawLineBetweenTwoPoints(context,pointA,pointN,"blue");
			 drawLineBetweenTwoPoints(context,pointC,pointM,"blue");
			 drawLineBetweenTwoPoints(context,pointC,pointN,"blue");
			 
			 setPointName(pointM,"M");
			 setPointName(pointN,"N");
			 
			displayPointName(context,pointM,pointM.x-20,pointM.y+5);
			displayPointName(context, pointN,pointN.x+10,pointN.y+5);			
		
	}


	
	function class_eight_chapter_8_1_Q_15_pic1(context, x1,y1,x2,y2,x3,y3,x4,y4){
		 var pointD = new Point(x1,y1);
		 var pointA = new Point(x2,y2);
		 var pointB = new Point(x3,y3);
		 var pointC = new Point(x4,y4); 
		 var rect= new Rectangle(pointA,pointB,pointC,pointD);
		 drawRectangle(context,rect);
		 drawLineBetweenTwoPoints(context,pointA,pointC,"green");
		 drawLineBetweenTwoPoints(context,pointB,pointD,"green");
		 
			 setPointName(pointA,"A");
			 setPointName(pointB,"B");
			 setPointName(pointC,"C");
			 setPointName(pointD,"D");

			displayPointName(context,pointA,pointA.x-5,pointA.y+15);
			displayPointName(context, pointB,pointB.x-5,pointB.y+15);
			displayPointName(context,pointC,pointC.x+5,pointC.y-5);
			displayPointName(context,pointD,pointD.x-1,pointD.y-5);	
	
	}
	
	function class_eight_chapter_8_1_Q_15_pic2(context, x1,y1,x2,y2,x3,y3,x4,y4){
		 var pointD = new Point(x1,y1);
		 var pointA = new Point(x2,y2);
		 var pointB = new Point(x3,y3);
		 var pointC = new Point(x4,y4); 
		 var rect= new Rectangle(pointA,pointB,pointC,pointD);
		 drawRectangle(context,rect);
		 drawLineBetweenTwoPoints(context,pointA,pointC,"green");
		 //drawLineBetweenTwoPoints(context,pointB,pointD,"green");
		 
			 setPointName(pointA,"A");
			 setPointName(pointB,"B");
			 setPointName(pointC,"C");
			 setPointName(pointD,"D");

			displayPointName(context,pointA,pointA.x-5,pointA.y+15);
			displayPointName(context, pointB,pointB.x-5,pointB.y+15);
			displayPointName(context,pointC,pointC.x+5,pointC.y-5);
			displayPointName(context,pointD,pointD.x-1,pointD.y-5);	
	
	}

	
	function class_eight_chapter_8_1_Q_15_pic1(context, x1,y1,x2,y2,x3,y3,x4,y4){
		 var pointD = new Point(x1,y1);
		 var pointA = new Point(x2,y2);
		 var pointB = new Point(x3,y3);
		 var pointC = new Point(x4,y4); 
		 var rect= new Rectangle(pointA,pointB,pointC,pointD);
		 drawRectangle(context,rect);
		 drawLineBetweenTwoPoints(context,pointA,pointC,"green");
		 drawLineBetweenTwoPoints(context,pointB,pointD,"green");
		 
			 setPointName(pointA,"A");
			 setPointName(pointB,"B");
			 setPointName(pointC,"C");
			 setPointName(pointD,"D");

			displayPointName(context,pointA,pointA.x-5,pointA.y+15);
			displayPointName(context, pointB,pointB.x-5,pointB.y+15);
			displayPointName(context,pointC,pointC.x+5,pointC.y-5);
			displayPointName(context,pointD,pointD.x-1,pointD.y-5);	
	
	}
	
	function class_eight_chapter_8_1_Q_16_pic1(context, x1,y1,x2,y2,x3,y3,x4,y4){
		 var pointD = new Point(x1,y1);
		 var pointA = new Point(x2,y2);
		 var pointB = new Point(x3,y3);
		 var pointC = new Point(x4,y4); 
		 var rect= new Rectangle(pointA,pointB,pointC,pointD);
		 drawRectangle(context,rect);
		 drawLineBetweenTwoPoints(context,pointA,pointC,"green");
		 drawLineBetweenTwoPoints(context,pointB,pointD,"green");
		 
			 setPointName(pointA,"A");
			 setPointName(pointB,"B");
			 setPointName(pointC,"C");
			 setPointName(pointD,"D");

			displayPointName(context,pointA,pointA.x-5,pointA.y+15);
			displayPointName(context, pointB,pointB.x-5,pointB.y+15);
			displayPointName(context,pointC,pointC.x+5,pointC.y-5);
			displayPointName(context,pointD,pointD.x-1,pointD.y-5);	
	
	}
	
	function class_eight_chapter_8_1_Q_16_pic2(context, x1,y1,x2,y2,x3,y3,x4,y4){
		 var pointD = new Point(x1,y1);
		 var pointA = new Point(x2,y2);
		 var pointB = new Point(x3,y3);
		 var pointC = new Point(x4,y4); 
		 var rect= new Rectangle(pointA,pointB,pointC,pointD);
		 drawRectangle(context,rect);
		 drawLineBetweenTwoPoints(context,pointA,pointC,"green");
		 drawLineBetweenTwoPoints(context,pointB,pointD,"green");
		 
			 setPointName(pointA,"A");
			 setPointName(pointB,"B");
			 setPointName(pointC,"C");
			 setPointName(pointD,"D");

			displayPointName(context,pointA,pointA.x-5,pointA.y+15);
			displayPointName(context, pointB,pointB.x-5,pointB.y+15);
			displayPointName(context,pointC,pointC.x+5,pointC.y-5);
			displayPointName(context,pointD,pointD.x-1,pointD.y-5);	
			
			
	}
	
	
	function class_eight_chapter_8_1_Q_16_pic3(context, x1,y1,x2,y2,x3,y3,x4,y4){
		 var pointD = new Point(x1,y1);
		 var pointA = new Point(x2,y2);
		 var pointB = new Point(x3,y3);
		 var pointC = new Point(x4,y4); 
		 var rect= new Rectangle(pointA,pointB,pointC,pointD);
		 drawRectangle(context,rect);
		 drawLineBetweenTwoPoints(context,pointA,pointC,"green");
		 drawLineBetweenTwoPoints(context,pointB,pointD,"green");
		 
			 setPointName(pointA,"A");
			 setPointName(pointB,"B");
			 setPointName(pointC,"C");
			 setPointName(pointD,"D");

			displayPointName(context,pointA,pointA.x-5,pointA.y+15);
			displayPointName(context, pointB,pointB.x-5,pointB.y+15);
			displayPointName(context,pointC,pointC.x+5,pointC.y-5);
			displayPointName(context,pointD,pointD.x-1,pointD.y-5);	
			
			var pointO = pointOfIntersectionOfPoints(pointA, pointC,pointB,pointD);
			setPointName(pointO,"O");
			displayPointName(context,pointO,pointO.x-5,pointO.y-10);
			
			
	}
	
	
	function class_eight_chapter_8_1_Q_17_pic1(context, x1,y1,x2,y2,x3,y3,x4,y4){
		 var pointD = new Point(x1,y1);
		 var pointA = new Point(x2,y2);
		 var pointB = new Point(x3,y3);
		 var pointC = new Point(x4,y4); 
		 var rect= new Rectangle(pointA,pointB,pointC,pointD);
		 drawRectangle(context,rect);
				 
			 setPointName(pointA,"A");
			 setPointName(pointB,"B");
			 setPointName(pointC,"C");
			 setPointName(pointD,"D");
			 displayName(context,pointB.x-10,pointB.y+25,"ঘুড়ি");

			
	}
	
	function class_eight_chapter_8_1_Q_17_pic2(context, x1,y1,x2,y2,x3,y3,x4,y4){
		 var pointA = new Point(x1,y1);
		 var pointB= new Point(x2,y2);
		 var pointC= new Point(x3,y3);
		 var pointD = new Point(x4,y4); 
		 var rect= new Rectangle(pointA,pointB,pointC,pointD);
		 drawRectangle(context,rect);
		 drawLineBetweenTwoPoints(context,pointA,pointC,"green");
		 drawLineBetweenTwoPoints(context,pointB,pointD,"green");
		 
			 setPointName(pointA,"A");
			 setPointName(pointB,"B");
			 setPointName(pointC,"C");
			 setPointName(pointD,"D");

			displayPointName(context,pointA,pointA.x-5,pointA.y-10);
			displayPointName(context, pointB,pointB.x-5,pointB.y+15);
			displayPointName(context,pointC,pointC.x+5,pointC.y+15);
			displayPointName(context,pointD,pointD.x-1,pointD.y-10);	
	
	}
	
	function class_eight_chapter_8_1_Q_17_pic3(context, x1,y1,x2,y2,x3,y3,x4,y4){
		  var pointA = new Point(x1,y1);
		 var pointB= new Point(x2,y2);
		 var pointC= new Point(x3,y3);
		 var pointD = new Point(x4,y4); 
		 var rect= new Rectangle(pointA,pointB,pointC,pointD);
		 drawRectangle(context,rect);
		 drawLineBetweenTwoPoints(context,pointA,pointC,"green");
		 		 
			 setPointName(pointA,"A");
			 setPointName(pointB,"B");
			 setPointName(pointC,"C");
			 setPointName(pointD,"D");

			displayPointName(context,pointA,pointA.x-5,pointA.y-10);
			displayPointName(context, pointB,pointB.x-5,pointB.y+15);
			displayPointName(context,pointC,pointC.x+5,pointC.y+15);
			displayPointName(context,pointD,pointD.x-1,pointD.y-10);		
			
			var pointP = perpendicularPointOnLineFromAPoint(pointA,pointC,pointB);
			var pointQ = perpendicularPointOnLineFromAPoint(pointA,pointC,pointD);
			 drawLineBetweenTwoPoints(context,pointB,pointP,"blue");
			 drawLineBetweenTwoPoints(context,pointB,pointQ,"blue");
			 drawLineBetweenTwoPoints(context,pointD,pointP,"blue");
			 drawLineBetweenTwoPoints(context,pointD,pointQ,"blue");
			 
			 setPointName(pointP,"P");
			 setPointName(pointQ,"Q");
			 
			displayPointName(context,pointP,pointP.x-20,pointP.y+5);
			displayPointName(context, pointQ,pointQ.x+10,pointQ.y+5);
	
	}


function chapter_6_3_Q_10_pic2(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,x1,y1+15);
	displayPointName(context, pointB,x2-5,y2+15);
	displayPointName(context,pointC,x3,y3-5);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var pointD = midPointBetweenTwoPoint(pointB,pointC );
	extensionLengeth = distanceBetweenTwoPoints(pointA,pointD);
	var pointG = PointAtCertainDistance(pointA, pointD, extensionLengeth*2);
	
	drawPoint(context,pointD, "red");
	drawPoint(context,pointG, "red");
	
	setPointName(pointD,"D");
	setPointName(pointG,"G");	
	
	drawLineBetweenTwoPoints(context,pointA,pointG,"red");
	drawLineBetweenTwoPoints(context,pointC,pointG,"red");
	
	displayPointName(context,pointD,pointD.x+15,pointD.y+10);
	displayPointName(context,pointG,pointG.x-10,pointG.y-5);
	displayName(context,x1+40,y1+35,"চিত্র :২");	

}




function chapter_6_3_Q_11_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointB =  new Point(x1,y1);
	var pointA =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-5,pointA.y+20);
	displayPointName(context, pointB,pointB.x-10,pointB.y+20);
	displayPointName(context,pointC,pointC.x-20,pointC.y+5);

	var triangle = new Triangle(pointB,pointA,pointC);
	drawTriangle(context, triangle);
	
	var extensionLengeth =195;     
	var pointD = PointAtCertainDistance(pointB, pointA, extensionLengeth);	
	setPointName(pointD,"D");	
    displayPointName(context,pointD,pointD.x-5,pointD.y+20);
	
	drawLineBetweenTwoPoints(context,pointA,pointD,"red");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	displayName(context,x2+10,y2+35,"চিত্র :১");	
	//This Demonstration plots the graphs of the equations of two lines in the form , ,
	//along with their two angle bisectors if the lines intersect.
	//http://demonstrations.wolfram.com/AngleBisectorsOfTwoIntersectingLines/

}

function chapter_6_3_Q_12_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x,pointA.y-5);
	displayPointName(context, pointB,pointB.x-15,pointB.y+5);
	displayPointName(context,pointC,pointC.x+5,pointC.y+5);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	
 var angle1 = getAngle(pointA,pointB,pointC)	; 
 var divAnglePointB= getPointAtAnAngle(pointB,-(angle1/2),50);
 ///drawPoint(context,divAnglePointB, "blue");
 
  var angle2 = getAngle(pointA,pointC,pointB); 
 var divAnglePointC= getPointAtAnAngle(pointC,(angle2/2+180),50);
 // drawPoint(context,divAnglePointC, "red"); 

// drawPoint(context,point3, "red");
var linedivAnglePointB = new LineBetweenPoint (pointB,divAnglePointB);
var linedivAnglePointC = new LineBetweenPoint (pointC,divAnglePointC);
 var pointIntersectP = pointOfIntersectionOfTwolIne(linedivAnglePointB, linedivAnglePointC);
 // drawPoint(context,pointIntersectP, "red"); 
  setPointName(pointIntersectP,"O");  
  displayPointName(context,pointIntersectP,pointIntersectP.x,pointIntersectP.y-5);
  
 drawLineBetweenTwoPoints(context,pointB,pointIntersectP,"red");
  drawLineBetweenTwoPoints(context,pointC,pointIntersectP,"red");

}


function chapter_6_3_Q_13_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointC =  new Point(x1,y1);
	var pointA =  new Point(x2,y2);
	var pointB =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x-15,pointA.y+5);
	displayPointName(context, pointB,pointB.x-10,pointB.y+15);
	displayPointName(context,pointC,pointC.x-20,pointC.y+5);

	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	var extensionLengeth =135;     
	var pointD = PointAtCertainDistance(pointA, pointC, extensionLengeth);
	var extensionLengeth =180;   
    var pointE = PointAtCertainDistance(pointA, pointB, extensionLengeth);
	var pointO = new Point(pointC.x+80,pointC.y);
	
	//var pointE = PointAtCertainDistance(pointB, pointA, distance*2);
	setPointName(pointD,"D");
	setPointName(pointE,"E");
	setPointName(pointO,"O");
	displayPointName(context,pointD,pointD.x-20,pointD.y+10);
	displayPointName(context,pointE,pointE.x,pointE.y+15);
	displayPointName(context,pointO,pointO.x,pointO.y-3);
	
	drawLineBetweenTwoPoints(context,pointC,pointD,"blue");
	drawLineBetweenTwoPoints(context,pointB,pointE,"blue");
	drawLineBetweenTwoPoints(context,pointC,pointO,"red");
	drawLineBetweenTwoPoints(context,pointB,pointO,"red");
	
	

	displayName(context,x2+40,y2+35,"চিত্র :১");	
	//This Demonstration plots the graphs of the equations of two lines in the form , ,
	//along with their two angle bisectors if the lines intersect.
	//http://demonstrations.wolfram.com/AngleBisectorsOfTwoIntersectingLines/

}


function chapter_6_3_Q_14_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
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
	setContextColor(context, "purple");	
	
	//var pointD = midPointBetweenTwoPoint(pointA,pointC );
   //  setPointName(pointD,"D");	
//	displayPointName(context,pointD,pointD.x-15,pointD.y);	
	
	///drawLineBetweenTwoPoints(context,pointD,pointB,"red");
		
}

function chapter_6_3_Q_15_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointB =  new Point(x1,y1);
	var pointC =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x,pointA.y-5);
	displayPointName(context, pointB,pointB.x-10,pointB.y+15);
	displayPointName(context,pointC,pointC.x-10,pointC.y+15);

	var triangle = new Triangle(pointB,pointA,pointC);
	drawTriangle(context, triangle);
	
	var extensionLengeth =165;     
	var pointD = PointAtCertainDistance(pointB, pointC, extensionLengeth);	
	setPointName(pointD,"D");	
    displayPointName(context,pointD,pointD.x-5,pointD.y+20);
	
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	var pointE = new Point(pointA.x+pointC.x-pointB.x,pointA.y);
	//var pointE = new Point(pointC.x+pointA.x,pointA.y);
	setPointName(pointE,"E");	
    displayPointName(context,pointE,pointE.x-5,pointE.y-5);
	drawLineBetweenTwoPoints(context,pointC,pointE,"red");
	//displayName(context,x2+10,y2+35,"চিত্র :১");	
	//This Demonstration plots the graphs of the equations of two lines in the form , ,
	//along with their two angle bisectors if the lines intersect.
	//http://demonstrations.wolfram.com/AngleBisectorsOfTwoIntersectingLines/

}

function chapter_6_3_Q_16_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointB =  new Point(x1,y1);
	var pointC =  new Point(x2,y2);
	var pointA =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");

	displayPointName(context,pointA,pointA.x,pointA.y-5);
	displayPointName(context, pointB,pointB.x,pointB.y+15);
	displayPointName(context,pointC,pointC.x-10,pointC.y+15);

	var triangle = new Triangle(pointB,pointA,pointC);
	drawTriangle(context, triangle);
	
	var extensionLengeth =distanceBetweenTwoPoints(pointA, pointC);     
	var pointD = PointAtCertainDistance(pointA, pointB, extensionLengeth);	
	setPointName(pointD,"D");	
    displayPointName(context,pointD,pointD.x-15,pointD.y+1);	
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	
}

function chapter_6_3_Q_17_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
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
	setContextColor(context, "purple");	
	
	var pointD = midPointBetweenTwoPoint(pointA,pointC );
     setPointName(pointD,"D");	
	 drawPoint(context,pointD, "red");
	displayPointName(context,pointD,pointD.x+5,pointD.y+2);		
	drawLineBetweenTwoPoints(context,pointD,pointB,"red");
	displayName(context,pointB.x+40,pointB.y+25,"চিত্র :১");
		
}

function chapter_6_3_Q_17_pic2(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
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
	setContextColor(context, "purple");	
	
	var pointD = midPointBetweenTwoPoint(pointA,pointC );
     setPointName(pointD,"D");	
	 drawPoint(context,pointD, "red");
	displayPointName(context,pointD,pointD.x+5,pointD.y+2);		
	drawLineBetweenTwoPoints(context,pointD,pointB,"red");
	var pointE = midPointBetweenTwoPoint(pointB,pointC );
	var pointF = midPointBetweenTwoPoint(pointA,pointB );
	
	setPointName(pointE,"E");
	setPointName(pointF,"F");
    displayPointName(context,pointE,pointE.x,pointE.y+15);
	displayPointName(context,pointF,pointF.x-15,pointF.y+5);
	drawLineBetweenTwoPoints(context,pointE,pointF,"red");
	drawLineBetweenTwoPoints(context,pointE,pointD,"red");
    displayName(context,pointB.x+10,pointB.y+25,"চিত্র :২");
		
}

function chapter_6_3_Q_18_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
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
	setContextColor(context, "purple");	
	
	var angle = getAngle(pointB,pointA,pointC) ;
	var point1 = getPointAtAnAngle2(pointA, pointC, angle/2, 30);
	var pointD = pointOfIntersectionOfPoints(pointB, pointC,pointA,point1)
	drawPoint(context,pointD,"red");
	
	
	//var pointD = midPointBetweenTwoPoint(pointA,pointC );
     setPointName(pointD,"D");	
	 drawPoint(context,pointD, "red");
	displayPointName(context,pointD,pointD.x+5,pointD.y+15);		
	drawLineBetweenTwoPoints(context,pointD,pointA,"red");
	var distance = distanceBetweenTwoPoints(pointA, pointC);
	pointE = PointAtCertainDistance(pointA, pointB, distance);
	setPointName(pointE,"E");
    displayPointName(context,pointE,pointE.x-15,pointE.y);
	//var perpendiE = perpendicularPointOnLineFromAPoint(pointA,pointB,pointD);
	drawLineBetweenTwoPoints(context,pointD,pointE,"red");
//	setPointName(perpendiE,"E");
 //   displayPointName(context,perpendiE,perpendiE.x-15,perpendiE.y+2);
    displayName(context,pointB.x+40,pointB.y+35,"চিত্র :১");
		
}


function chapter_6_3_Q_19_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointD = midPointBetweenTwoPoint(pointA,pointB );
	var pointC =  new Point(pointD.x, y3-5);
	var pointP =  new Point(pointD.x,y3+30);

	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	setPointName(pointP,"P");

	displayPointName(context,pointA,pointA.x-5,pointA.y+20);
	displayPointName(context, pointB,pointB.x-10,pointB.y+20);
	displayPointName(context,pointC,pointC.x-15,pointC.y);
	displayPointName(context,pointD,pointD.x,pointD.y+20);
	displayPointName(context,pointP,pointP.x-13,pointP.y);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	drawLineBetweenTwoPoints(context,pointA,pointP,"red");
	drawLineBetweenTwoPoints(context,pointB,pointP,"red");
	
}

function chapter_6_3_Q_20_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");	
	
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x,pointC.y-5);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "purple");	
	
	var pointD = midPointBetweenTwoPoint(pointB,pointC );
     setPointName(pointD,"D");	
	 drawPoint(context,pointD, "red");
	displayPointName(context,pointD,pointD.x+5,pointD.y+2);		
	//drawLineBetweenTwoPoints(context,pointD,pointA,"red");
	displayName(context,pointA.x+40,pointA.y+25,"চিত্র :১");
		
}

function chapter_6_3_Q_20_pic2(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");	
	
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x,pointC.y-5);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "purple");	
	
	var pointD = midPointBetweenTwoPoint(pointB,pointC );
     setPointName(pointD,"D");	
	 drawPoint(context,pointD, "red");
	displayPointName(context,pointD,pointD.x+10,pointD.y+5);		
	drawLineBetweenTwoPoints(context,pointD,pointA,"red");
	extensionLengeth = distanceBetweenTwoPoints(pointA,pointD);
	var pointE = PointAtCertainDistance(pointA, pointD, extensionLengeth*2);
	drawPoint(context,pointE, "red");
	setPointName(pointE,"E");
	displayPointName(context,pointE,pointE.x,pointE.y-5);
	drawLineBetweenTwoPoints(context,pointD,pointE,"red");
	drawLineBetweenTwoPoints(context,pointC,pointE,"red");
	
	displayName(context,pointA.x+40,pointA.y+25,"চিত্র :২");
		
}
/*
function chapter_6_3_Q_20_pic3(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");	
	
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x,pointC.y-5);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "purple");	
	
	var pointD = midPointBetweenTwoPoint(pointB,pointC );
     setPointName(pointD,"D");	
	 drawPoint(context,pointD, "red");
	displayPointName(context,pointD,pointD.x+10,pointD.y+5);		
	drawLineBetweenTwoPoints(context,pointD,pointA,"red");
	var perpendiE = perpendicularPointOnLineFromAPoint(pointA,pointC,pointD);
	drawLineBetweenTwoPoints(context,pointD,perpendiE,"red");
	setPointName(perpendiE,"E");
    displayPointName(context,perpendiE,perpendiE.x-15,perpendiE.y+2);
	
	
	//extensionLengeth = distanceBetweenTwoPoints(pointA,pointD);
	//var pointE = PointAtCertainDistance(pointA, pointD, extensionLengeth*2);
	drawPoint(context,pointE, "red");
	setPointName(pointE,"E");
	displayPointName(context,pointE,pointE.x,pointE.y-5);
	drawLineBetweenTwoPoints(context,pointD,pointE,"red");
	drawLineBetweenTwoPoints(context,pointC,pointE,"red");
	
	displayName(context,pointA.x+40,pointA.y+25,"চিত্র :৩");
		
}
*/
function chapter_6_3_Q_20_pic3(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");	
	
	displayPointName(context,pointA,pointA.x-5,pointA.y+15);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x,pointC.y-5);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "purple");	
	
	var pointD = midPointBetweenTwoPoint(pointB,pointC );
     setPointName(pointD,"D");	
	 drawPoint(context,pointD, "red");
	displayPointName(context,pointD,pointD.x+5,pointD.y+2);		
	drawLineBetweenTwoPoints(context,pointD,pointA,"red");
	displayName(context,pointA.x+40,pointA.y+25,"চিত্র :৩");
		
}

function chapter_6_3_Q_20_pic4(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");	
	
	displayPointName(context,pointA,pointA.x-5,pointA.y+15);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x,pointC.y-5);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	setContextColor(context, "purple");	
	
	var pointD = midPointBetweenTwoPoint(pointB,pointC );
     setPointName(pointD,"D");	
	 drawPoint(context,pointD, "red");
	displayPointName(context,pointD,pointD.x+5,pointD.y+2);		
	drawLineBetweenTwoPoints(context,pointD,pointA,"red");
	var pointE = midPointBetweenTwoPoint(pointA,pointB );
	var pointF = midPointBetweenTwoPoint(pointA,pointC );
	
	setPointName(pointE,"E");
	setPointName(pointF,"F");
    displayPointName(context,pointE,pointE.x,pointE.y+15);
	displayPointName(context,pointF,pointF.x-15,pointF.y+5);
	drawLineBetweenTwoPoints(context,pointE,pointF,"red");
	drawLineBetweenTwoPoints(context,pointE,pointD,"red");
    displayName(context,pointA.x+10,pointA.y+25,"চিত্র :৪");
		
}





















