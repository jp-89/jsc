
	
function class_eight_chapter_1_1_Q_9_pic1(context, x1,y1,x2,y2,x3,y3,x4,y4){
	 var pointA = new Point(x1,y1);
	 var pointB = new Point(x2,y2);
	 var pointC = new Point(x3,y3);
	 var pointD = new Point(x4,y4); 
	 var rect= new Rectangle(pointA,pointB,pointC,pointD);
	 drawRectangle(context,rect);
 
	 setPointName(pointA,"A");
	 setPointName(pointB,"B");
	 setPointName(pointC,"C");
	 setPointName(pointD,"D");
	 
	 var x_move = 80;
	 var pointA2 = new Point(x1+x_move,y1);
	 var pointB2 = new Point(x2+x_move,y2);
	 var pointC2 = new Point(x3+x_move,y3);
	 var pointD2 = new Point(x4+x_move,y4); 
	 var rect2= new Rectangle(pointA2,pointB2,pointC2,pointD2);
	 drawRectangle(context,rect2);

	 var x_move = 130;
	 var pointA3 = new Point(x1+x_move,y1);
	 var pointB3 = new Point(x2+x_move,y2);
	 var pointC3 = new Point(x3+x_move,y3);
	 var pointD3 = new Point(x4+x_move,y4); 
	 var rect3= new Rectangle(pointA3,pointB3,pointC3,pointD3);
	 drawRectangle(context,rect3);
	  
	  
	  var x_move = 230;
	 var pointA4 = new Point(x1+x_move,y1);
	 var pointB4 = new Point(x2+x_move,y2);
	 var pointC4 = new Point(x3+x_move,y3);
	 var pointD4 = new Point(x4+x_move,y4); 
	 var rect4= new Rectangle(pointA4,pointB4,pointC4,pointD4);
	 drawRectangle(context,rect4);
	 
	  var x_move = 280;
	 var pointA5 = new Point(x1+x_move,y1);
	 var pointB5 = new Point(x2+x_move,y2);
	 var pointC5 = new Point(x3+x_move,y3);
	 var pointD5 = new Point(x4+x_move,y4); 
	 var rect5= new Rectangle(pointA5,pointB5,pointC5,pointD5);
	 drawRectangle(context,rect5);
	 
	  var x_move = 330;
	 var pointA6 = new Point(x1+x_move,y1);
	 var pointB6 = new Point(x2+x_move,y2);
	 var pointC6 = new Point(x3+x_move,y3);
	 var pointD6 = new Point(x4+x_move,y4); 
	 var rect6= new Rectangle(pointA6,pointB6,pointC6,pointD6);
	 drawRectangle(context,rect6);
	
	}
	
	
	function class_eight_chapter_1_1_Q_9_pic2(context, x1,y1,x2,y2,x3,y3,x4,y4){
	 var pointA = new Point(x1,y1);
	 var pointB = new Point(x2,y2);
	 var pointC = new Point(x3,y3);
	 var pointD = new Point(x4,y4); 
	 var rect= new Rectangle(pointA,pointB,pointC,pointD);
	 drawRectangle(context,rect);
 
	 setPointName(pointA,"A");
	 setPointName(pointB,"B");
	 setPointName(pointC,"C");
	 setPointName(pointD,"D");
	 
	 var x_move = 50;
	 var pointA2 = new Point(x1+x_move,y1);
	 var pointB2 = new Point(x2+x_move,y2);
	 var pointC2 = new Point(x3+x_move,y3);
	 var pointD2 = new Point(x4+x_move,y4); 
	 var rect2= new Rectangle(pointA2,pointB2,pointC2,pointD2);
	 drawRectangle(context,rect2);

	 var x_move = 100;
	 var pointA3 = new Point(x1+x_move,y1);
	 var pointB3 = new Point(x2+x_move,y2);
	 var pointC3 = new Point(x3+x_move,y3);
	 var pointD3 = new Point(x4+x_move,y4); 
	 var rect3= new Rectangle(pointA3,pointB3,pointC3,pointD3);
	 drawRectangle(context,rect3);
	  
	  
	  var x_move = 150;
	 var pointA4 = new Point(x1+x_move,y1);
	 var pointB4 = new Point(x2+x_move,y2);
	 var pointC4 = new Point(x3+x_move,y3);
	 var pointD4 = new Point(x4+x_move,y4); 
	 var rect4= new Rectangle(pointA4,pointB4,pointC4,pointD4);
	 drawRectangle(context,rect4);
	
	}
	
	function class_eight_chapter_1_1_Q_10_pic1(context, x1,y1,x2,y2,x3,y3){
	 var pointA = new Point(x1,y1);
	 var pointB = new Point(x2,y2);
	 var pointC = new Point(x3,y3);
	 var rect= new Triangle(pointA,pointB,pointC);
	 drawTriangle(context,rect);
 
	 setPointName(pointA,"A");
	 setPointName(pointB,"B");
	 setPointName(pointC,"C");
	
	 
	 var x_move = 80;
	 var point_move = pointC.x - pointB.x;
	 
	 var pointA2 = new Point(pointA.x+x_move,pointA.y);
	 var pointB2 = new Point(pointB.x+x_move,pointB.y);
	 var pointC2 = new Point(pointC.x+x_move,pointC.y);
	
	 var rect2= new Triangle(pointA2,pointB2,pointC2);
	 drawTriangle(context,rect2);
	 var pointD = new Point(pointA2.x + point_move,pointA2.y);
	 drawLineBetweenTwoPoints(context,pointA2,pointD,"blue");
	 drawLineBetweenTwoPoints(context,pointC2,pointD,"blue");
	 
	 x_move = 120;
	 var pointA3 = new Point(pointA2.x+x_move,pointA2.y);
	 var pointB3 = new Point(pointB2.x+x_move,pointB2.y);
	 var pointC3 = new Point(pointC2.x+x_move,pointC2.y);
	
	 var rect3= new Triangle(pointA3,pointB3,pointC3);
	 drawTriangle(context,rect3);
	 var pointD3 = new Point(pointA3.x + point_move,pointA3.y);
	 drawLineBetweenTwoPoints(context,pointA3,pointD3,"blue");
	 drawLineBetweenTwoPoints(context,pointC3,pointD3,"blue");
	 var pointE3 = new Point(pointC3.x + point_move,pointC3.y);
	 
	  drawLineBetweenTwoPoints(context,pointC3,pointE3,"blue");
	  drawLineBetweenTwoPoints(context,pointD3,pointE3,"blue");

	}
	
	
	function class_eight_chapter_1_1_Q_10_pic2(context, x1,y1,x2,y2,x3,y3){
	 var pointA = new Point(x1,y1);
	 var pointB = new Point(x2,y2);
	 var pointC = new Point(x3,y3);
	 var rect= new Triangle(pointA,pointB,pointC);
	 drawTriangle(context,rect);
 
	 setPointName(pointA,"A");
	 setPointName(pointB,"B");
	 setPointName(pointC,"C");	
	 
	 var x_move = 80;
	 var point_move = pointC.x - pointB.x;

	 var pointD = new Point(pointA.x + point_move,pointA.y);
	 drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
	 drawLineBetweenTwoPoints(context,pointC,pointD,"blue");
	 
	 var pointE = new Point(pointC.x + point_move,pointC.y);
	 drawLineBetweenTwoPoints(context,pointC,pointE,"blue");
	 drawLineBetweenTwoPoints(context,pointD,pointE,"blue");	  
	  			 
	var pointD2 = new Point(pointD.x + point_move,pointD.y);
	drawLineBetweenTwoPoints(context,pointD,pointD2,"blue");
	drawLineBetweenTwoPoints(context,pointE,pointD2,"blue");
	
	}
	
	function class_eight_chapter_1_1_Q_SrejonShil_1_pic1(context, x1,y1,x2,y2,x3,y3,x4,y4){
		var entension_len = 40;
		var x_crementNum =3;
		var y_crementNum =2;
		var pointA = new Point(x1,y1);
		var pointB = new Point(x1,y1+entension_len*y_crementNum);
		var pointD = new Point(x1+entension_len*x_crementNum,y1);

		for (i = 0; i <= x_crementNum; i++){
		
			var tempPointA = new Point(pointA.x+i*entension_len,pointA.y);
			var tempPointB = new Point(pointB.x+i*entension_len,pointB.y);
			drawLineBetweenTwoPoints(context,tempPointA,tempPointB,"blue");
		
		}
		drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
		
		for (i = 0; i <= y_crementNum; i++){
		
			var tempPointA = new Point(pointA.x,pointA.y+i*entension_len);
			var tempPointD = new Point(pointD.x,pointD.y+i*entension_len);
			drawLineBetweenTwoPoints(context,tempPointA,tempPointD,"blue");
		
		}
		
		displayName(context,pointB.x+20,pointB.y+35,"চিত্র :৩য়  পদ ");
		
	
	}
	
	function class_eight_chapter_1_1_Q_SrejonShil_1_pic2(context, x1,y1,x2,y2,x3,y3,x4,y4){
		var entension_len = 40;
		var x_crementNum =4;
		var y_crementNum =2;
		var pointA = new Point(x1,y1);
		var pointB = new Point(x1,y1+entension_len*y_crementNum);
		var pointD = new Point(x1+entension_len*x_crementNum,y1);

		for (i = 0; i <= x_crementNum; i++){
		
			var tempPointA = new Point(pointA.x+i*entension_len,pointA.y);
			var tempPointB = new Point(pointB.x+i*entension_len,pointB.y);
			drawLineBetweenTwoPoints(context,tempPointA,tempPointB,"blue");
		
		}
		drawLineBetweenTwoPoints(context,pointA,pointD,"blue");
		
		for (i = 0; i <= y_crementNum; i++){
		
			var tempPointA = new Point(pointA.x,pointA.y+i*entension_len);
			var tempPointD = new Point(pointD.x,pointD.y+i*entension_len);
			drawLineBetweenTwoPoints(context,tempPointA,tempPointD,"blue");
		
		}
		
		displayName(context,pointB.x+20,pointB.y+35,"চিত্র :৪র্থ   পদ ");
		
	
	}








