
function chapter_5_2_Q_28_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");	
	
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y-10);
	var triangle = new Triangle(pointA,pointB,pointC);
	
   //  var trianglefillcolor ='rgba(255,0,255,0.5)';
	//drawTriangleWithFillColor(context, triangle,trianglefillcolor);
	drawTriangle(context, triangle);
	
		
}

function chapter_5_2_Q_29_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");	
	
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y-10);
	var triangle = new Triangle(pointA,pointB,pointC);
	drawTriangle(context, triangle);
	
		
}

function chapter_5_2_Q_32_pic1(context, x1,y1,x2,y2,x3,y3,x4,y4){
 
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x,pointA.y-5);
	displayPointName(context, pointB,pointB.x,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	displayPointName(context,pointD,pointD.x-5,pointD.y-5);
	var triangle = new Triangle(pointA,pointB,pointC);
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	drawRectangle(context, retangle);
drawLineBetweenTwoPoints(context,pointA,pointC,"blue");	
displayName(context,pointB.x+20,pointB.y+25,"চিত্র :১");
		
}

function chapter_5_2_Q_32_pic2(context, x1,y1,x2,y2,x3,y3,x4,y4){
 
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	setPointName(pointA,"E");
	setPointName(pointB,"F");
	setPointName(pointC,"G");
	setPointName(pointD,"H");
	displayPointName(context,pointA,pointA.x,pointA.y-5);
	displayPointName(context, pointB,pointB.x,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y+15);
	displayPointName(context,pointD,pointD.x-5,pointD.y-5);
	var triangle = new Triangle(pointA,pointB,pointC);
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	drawRectangle(context, retangle);
drawLineBetweenTwoPoints(context,pointA,pointC,"blue");	
displayName(context,pointB.x+20,pointB.y+25,"চিত্র :২");
		
}


function chapter_5_2_Q_33_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
    var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");	
	
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context, pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x-5,pointC.y-10);
	var triangle = new Triangle(pointA,pointB,pointC);
	
     var trianglefillcolor ='rgba(255,0,255,0.5)';
	drawTriangleWithFillColor(context, triangle,trianglefillcolor);
	drawTriangle(context, triangle);
	setContextColor(context, "purple");	
	
	var pointD = midPointBetweenTwoPoint(pointA,pointC );
     setPointName(pointD,"D");	
	
	//drawLineBetweenTwoPoints(context,pointD,pointB,"red");
	var squarefillcolor ='rgba(255,155,155,0.5)';
	 var pointE =  new Point(pointA.x-60,pointA.y);
	  var pointF =  new Point(pointC.x-60,pointC.y);
	  var rectangle = new Rectangle( pointF, pointE,pointA,pointC);
	  drawRectangleWithFillColor(context,rectangle,squarefillcolor);
	  drawRectangle(context,rectangle);
	  
	  var pointG =  new Point(pointB.x+60+20,pointB.y);
	  var pointK =  new Point(pointB.x+60+20,pointC.y);
	  
	   var pointH =  new Point(pointB.x,pointC.y);
	   
	   var rectanglefillcolor ='rgba(0,190,255,0.5)';
	   var rectangle2 = new Rectangle( pointH, pointB,pointG,pointK);
	  drawRectangleWithFillColor(context,rectangle2,rectanglefillcolor);
	  drawRectangle(context,rectangle2);
	
		
}
