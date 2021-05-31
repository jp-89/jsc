function chapter_5_7_Q_9_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){

var graphGrid = new GraphGrid2(context,width,height,15);
setOrigin(graphGrid, graphGrid.unitStep*5,graphGrid.unitStep*10);
context.stroke();
drawOriginAxesInGrid(context,graphGrid);
 context.beginPath();
 context.strokeStyle = "blue"; // set color
context.stroke();
// move to the first point
var points = [];
var pointA = new GraphPoint(graphGrid,-1,8);
var pointB = new GraphPoint(graphGrid,0,3);
var pointC = new GraphPoint(graphGrid,1,0);
	 
var pointD = new GraphPoint(graphGrid,2,-1);
var pointE = new GraphPoint(graphGrid,3,0);
var pointF = new GraphPoint(graphGrid,4,3);
var pointG = new GraphPoint(graphGrid,5,8);

points.push(pointA);
points.push(pointB);
points.push(pointC);
points.push(pointD);
points.push(pointE);
points.push(pointF);
points.push(pointG);

  drawQuadraticCurve(context, points);
  drawPoint(context,pointC, "red");
  drawPoint(context,pointE, "red");
 displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");
 //displayText(context,graphGrid.origin_x-25,graphGrid.origin_y+20,"(0,0)");
  

	 
}

function chapter_5_7_Q_10_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){

var graphGrid = new GraphGrid2(context,width,height,15);
setOrigin(graphGrid, graphGrid.unitStep*5,graphGrid.unitStep*10);
context.stroke();
drawOriginAxesInGrid(context,graphGrid);
 context.beginPath();
 context.strokeStyle = "blue"; // set color
context.stroke();
// move to the first point
var points = [];

var pointA = new GraphPoint(graphGrid,-4,5);
var pointB = new GraphPoint(graphGrid,-3,0);
var pointC = new GraphPoint(graphGrid,-2,-3);
var pointD = new GraphPoint(graphGrid,-1,-4);
	 
var pointE = new GraphPoint(graphGrid,0,-3);
var pointF= new GraphPoint(graphGrid,1,0);
var pointG = new GraphPoint(graphGrid,2,5);

points.push(pointA);
points.push(pointB);
points.push(pointC);
points.push(pointD);
points.push(pointE);
points.push(pointF);
points.push(pointG);

  drawQuadraticCurve(context, points);
  drawPoint(context,pointB, "red");
  drawPoint(context,pointF, "red");
 displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");
 //displayText(context,graphGrid.origin_x-25,graphGrid.origin_y+20,"(0,0)");
  

	 
}

function chapter_5_7_Q_11_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){

var graphGrid = new GraphGrid2(context,width,height,10);
setOrigin(graphGrid, graphGrid.unitStep*12,graphGrid.unitStep*10);
context.stroke();
drawOriginAxesInGrid(context,graphGrid);
 context.beginPath();
 context.strokeStyle = "blue"; // set color
context.stroke();

//x^2+7x
// move to the first point
var points = [];

var pointA = new GraphPoint(graphGrid,-8,8);
var pointB = new GraphPoint(graphGrid,-7,0);
var pointC = new GraphPoint(graphGrid,-6,-6);
var pointD = new GraphPoint(graphGrid,-5,-10);
	 
var pointE = new GraphPoint(graphGrid,-2,-10);
var pointF= new GraphPoint(graphGrid,0,0);
var pointG = new GraphPoint(graphGrid,1,8);

points.push(pointA);
points.push(pointB);
points.push(pointC);
points.push(pointD);
points.push(pointE);
points.push(pointF);
points.push(pointG);

  drawQuadraticCurve(context, points);
  drawPoint(context,pointB, "red");
  drawPoint(context,pointF, "red");
 displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");
 //displayText(context,graphGrid.origin_x-25,graphGrid.origin_y+20,"(0,0)");
  	 
}


function chapter_5_7_Q_12_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){

var graphGrid = new GraphGrid2(context,width,height,10);
setOrigin(graphGrid, graphGrid.unitStep*10,graphGrid.unitStep*15);
context.stroke();
drawOriginAxesInGrid(context,graphGrid);
 context.beginPath();
 context.strokeStyle = "blue"; // set color
context.stroke();

//2x^2-7x+3
// move to the first point
var points = [];

var pointA = new GraphPoint(graphGrid,-1,12);
var pointB = new GraphPoint(graphGrid,.5,0);
var pointC = new GraphPoint(graphGrid,1,-2);
var pointD = new GraphPoint(graphGrid,1.5,-3);
	 
var pointE = new GraphPoint(graphGrid,2,-3);
var pointF= new GraphPoint(graphGrid,3,0);
var pointG = new GraphPoint(graphGrid,4,7);

points.push(pointA);
points.push(pointB);
points.push(pointC);
points.push(pointD);
points.push(pointE);
points.push(pointF);
points.push(pointG);

  drawQuadraticCurve(context, points);
  drawPoint(context,pointB, "red");
  drawPoint(context,pointF, "red");
 displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");
 //displayText(context,graphGrid.origin_x-25,graphGrid.origin_y+20,"(0,0)");
	 
}


function chapter_5_7_Q_13_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){

var graphGrid = new GraphGrid2(context,width,height,15);
setOrigin(graphGrid, graphGrid.unitStep*5,graphGrid.unitStep*10);
context.stroke();
drawOriginAxesInGrid(context,graphGrid);
 context.beginPath();
 context.strokeStyle = "blue"; // set color
context.stroke();

//2x^2-5x+2=0
// move to the first point
var points = [];

var pointA = new GraphPoint(graphGrid,-1,9);
var pointB = new GraphPoint(graphGrid,.5,0);
var pointC = new GraphPoint(graphGrid,1,-1);
var pointD = new GraphPoint(graphGrid,0,2);
	 
var pointE = new GraphPoint(graphGrid,1.5,-1);
var pointF= new GraphPoint(graphGrid,2,0);
var pointG = new GraphPoint(graphGrid,3,5);

points.push(pointA);
points.push(pointB);
points.push(pointC);
//points.push(pointD);
points.push(pointE);
points.push(pointF);
points.push(pointG);

  drawQuadraticCurve(context, points);
  drawPoint(context,pointB, "red");
  drawPoint(context,pointF, "red");
 displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");
 //displayText(context,graphGrid.origin_x-25,graphGrid.origin_y+20,"(0,0)");
	 
}

function chapter_5_7_Q_14_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){

var graphGrid = new GraphGrid2(context,width,height,10);
setOrigin(graphGrid, graphGrid.unitStep*10,graphGrid.unitStep*20);
context.stroke();
drawOriginAxesInGrid(context,graphGrid);
 context.beginPath();
 context.strokeStyle = "blue"; // set color
context.stroke();


// move to the first point
var points = [];

var pointA = new GraphPoint(graphGrid,-7,9);
var pointB = new GraphPoint(graphGrid,-4.5,.25);
var pointC = new GraphPoint(graphGrid,-4,0);
var pointD = new GraphPoint(graphGrid,-3.5,.25);
	 
var pointE = new GraphPoint(graphGrid,-3,1);
var pointF= new GraphPoint(graphGrid,-0,16);
var pointG = new GraphPoint(graphGrid,1,25);

points.push(pointA);
points.push(pointB);
points.push(pointC);
points.push(pointD);
points.push(pointE);
points.push(pointF);
//points.push(pointG);

  drawQuadraticCurve(context, points);
  drawPoint(context,pointC, "red");
  //drawPoint(context,pointF, "red");
 displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");
 //displayText(context,graphGrid.origin_x-25,graphGrid.origin_y+20,"(0,0)");
	 
}

function chapter_5_7_Q_15_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){

var graphGrid = new GraphGrid2(context,width,height,15);
setOrigin(graphGrid, graphGrid.unitStep*5,graphGrid.unitStep*10);
context.stroke();
drawOriginAxesInGrid(context,graphGrid);
 context.beginPath();
 context.strokeStyle = "blue"; // set color
context.stroke();

//x^2+x-3=0
// move to the first point
var points = [];

var pointA = new GraphPoint(graphGrid,-4,9);
var pointB = new GraphPoint(graphGrid,-3,3);
var pointC = new GraphPoint(graphGrid,-2.303,0);
var pointD = new GraphPoint(graphGrid,-1,-3);
	 
var pointE = new GraphPoint(graphGrid,1,-1);
var pointF= new GraphPoint(graphGrid,1.302,0);
var pointG = new GraphPoint(graphGrid,3,9);

points.push(pointA);
points.push(pointB);
points.push(pointC);
points.push(pointD);
points.push(pointE);
points.push(pointF);
points.push(pointG);

  drawQuadraticCurve(context, points);
  drawPoint(context,pointC, "red");
  drawPoint(context,pointF, "red");
 displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");
 //displayText(context,graphGrid.origin_x-25,graphGrid.origin_y+20,"(0,0)");
	 
}


function chapter_5_7_Q_16_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){

var graphGrid = new GraphGrid2(context,width,height,15);
setOrigin(graphGrid, graphGrid.unitStep*5,graphGrid.unitStep*10);
context.stroke();
drawOriginAxesInGrid(context,graphGrid);
 context.beginPath();
 context.strokeStyle = "blue"; // set color
context.stroke();

//x^2=8
// move to the first point
var points = [];

var pointA = new GraphPoint(graphGrid,-4,8);
var pointB = new GraphPoint(graphGrid,-3,1);
var pointC = new GraphPoint(graphGrid,-2.83,0);
var pointD = new GraphPoint(graphGrid,-2,-4);
	 
var pointE = new GraphPoint(graphGrid,2,-4);
var pointF= new GraphPoint(graphGrid,2.83,0);
var pointG = new GraphPoint(graphGrid,4,8);

points.push(pointA);
points.push(pointB);
points.push(pointC);
points.push(pointD);
points.push(pointE);
points.push(pointF);
points.push(pointG);

  drawQuadraticCurve(context, points);
  drawPoint(context,pointC, "red");
  drawPoint(context,pointF, "red");
 displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");
 //displayText(context,graphGrid.origin_x-25,graphGrid.origin_y+20,"(0,0)");
	 
}


function chapter_5_7_Q_17_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){

var graphGrid = new GraphGrid2(context,width,height,15);
setOrigin(graphGrid, graphGrid.unitStep*5,graphGrid.unitStep*10);
context.stroke();
drawOriginAxesInGrid(context,graphGrid);
 context.beginPath();
 context.strokeStyle = "blue"; // set color
context.stroke();

//3x^2-5x-3
// move to the first point
var points = [];

var pointA = new GraphPoint(graphGrid,-1,5);
var pointB = new GraphPoint(graphGrid,-.4683,0);
var pointC = new GraphPoint(graphGrid,0,-3);
var pointD = new GraphPoint(graphGrid,1,-5);
	 
var pointE = new GraphPoint(graphGrid,2.135,0);
var pointF= new GraphPoint(graphGrid,2.5,3.25);
var pointG = new GraphPoint(graphGrid,3,9);

points.push(pointA);
points.push(pointB);
points.push(pointC);
points.push(pointD);
points.push(pointE);
points.push(pointF);
points.push(pointG);

  drawQuadraticCurve(context, points);
  drawPoint(context,pointB, "red");
  drawPoint(context,pointE, "red");
 displayText(context,graphGrid.width/4,graphGrid.height+25,"প্রতিটি বর্গ ১ একক");
 //displayText(context,graphGrid.origin_x-25,graphGrid.origin_y+20,"(0,0)");
	 
}





