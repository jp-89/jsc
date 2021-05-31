function chapter_2_2_Q_19_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,10);
	 writeOriginAxisPoints(context,graphGrid);
	 var pointA = new GraphPoint(graphGrid,-3,2);
	 var pointB = new GraphPoint(graphGrid,0,-5);
var pointC = new GraphPoint(graphGrid,.5,-.83);

	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x-15,pointA.y-10,graphPointText(pointA));
	 displayText2(context,pointB.x+10,pointB.y+5,graphPointText(pointB));
	 displayText2(context,pointC.x+5,pointC.y+10,graphPointText(pointC));
	  displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");
	  //displayText2(context,intersectGraphPoint.x+10,intersectGraphPoint.y+5,graphPointText(intersectGraphPoint));
	
	 
}

function chapter_2_2_Q_20_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid(context,width,height,10);
	 writeOriginAxisPoints(context,graphGrid);
	 var pointA = new GraphPoint(graphGrid,1,2);
	 var pointB = new GraphPoint(graphGrid,-1,1);
var pointC = new GraphPoint(graphGrid,11,7);

	 drawPoint(context,pointA, "blue");
	 drawPoint(context,pointB, "blue");
	 drawPoint(context,pointC, "blue");
	 displayText2(context,pointA.x-25,pointA.y-10,graphPointText(pointA));
	 displayText2(context,pointB.x+10,pointB.y+5,graphPointText(pointB));
	 displayText2(context,pointC.x-15,pointC.y-10,graphPointText(pointC));
	  displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");
	  drawLineBetweenTwoPoints(context,pointA,pointC,"red");
	   drawLineBetweenTwoPoints(context,pointB,pointC,"red");
	 
}



function chapter_2_2_Q_22(context, x1,y1,x2,y2,x3,y3,x4,y4){

var rectangle = new RectangleWithAxes(x1,y1,x2,y2,x3,y3,x4,y4);
drawRectangle(context,rectangle);
var centerO =  new Point(x1+80,y1+110);
var circle =  new Circle(centerO,55);
// A
var fillcolor ='rgba(255,0,255,0.5)';
setCircleFillStyle(circle,fillcolor);
setCircleFill(circle,"yes");
drawCircle( context,circle,"green");

// B
setCentre(circle,circle.centerX+70,circle.centerY);
fillcolor ='rgba(0,155,155,0.5)';
setCircleFillStyle(circle,fillcolor);
drawCircle( context,circle,"red");


// C
setCentre(circle,circle.centerX-30,circle.centerY-50);
fillcolor ='rgba(50,205,50,0.5)';
setCircleFillStyle(circle,fillcolor);
drawCircle( context,circle,"red");

var font= "12px Arial";
context.fillStyle="blue";
/*
displayName(context,x1+30,y1+30,"F");

displayName(context,circle.centerX-90,circle.centerY-20,"P");
displaySubscript(context,circle.centerX-87,circle.centerY-15,"1",font);
displayName(context,circle.centerX-90,circle.centerY+20,"10");

displayName(context,circle.centerX-40,circle.centerY-20,"P");
displaySubscript(context,circle.centerX-33,circle.centerY-15,"2",font);
displayName(context,circle.centerX-40,circle.centerY+20,"10");

displayName(context,circle.centerX+20,circle.centerY-20,"P");
displaySubscript(context,circle.centerX+27,circle.centerY-15,"3",font);
displayName(context,circle.centerX+20,circle.centerY+20,"5");

displayName(context,circle.centerX-40,circle.centerY+85,"P");
displaySubscript(context,circle.centerX-31,circle.centerY+87,"4",font);
displayName(context,circle.centerX-15,circle.centerY+85," = 5");
*/
displayName(context,x1+10,y1+140,"A");
displayName(context,x1+210,y1+140,"B");
displayName(context,x1+180,y1+40,"C");
displayName(context,x1+200,y1+20,"U");

//
displayName(context,x1+130,y1+45,"6");
displayName(context,x1+20,y1+70,"8");
displayName(context,x1+150,y1+75,"5");
displayName(context,x1+80,y1+80,"4");
displayName(context,x1+110,y1+95,"3");
displayName(context,x1+70,y1+120,"1");
displayName(context,x1+110,y1+135,"2");
displayName(context,x1+160,y1+130,"7");

}