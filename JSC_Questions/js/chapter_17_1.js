function chapter_17_1_Q_17_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid2(context,width,height,10);
drawOriginAxes(context,0,200,290,200);
drawOriginAxes(context,40,0,40,290);
setOrigin(graphGrid, 40,200)
setXYUnitValue(graphGrid, 5,1);
var pointA = new GraphPoint3(graphGrid,35,6);
var pointB = new GraphPoint3(graphGrid,45,8);
var pointC = new GraphPoint3(graphGrid,55,10);
var pointD = new GraphPoint3(graphGrid,65,12);
var pointE = new GraphPoint3(graphGrid,75,5);
var pointF = new GraphPoint3(graphGrid,85,7);
var pointG = new GraphPoint3(graphGrid,95,2);
var pointH = new GraphPoint3(graphGrid,105,2);
 drawPoint(context,pointA, "blue");
 drawPoint(context,pointB, "blue");
 drawPoint(context,pointC, "blue");
 drawPoint(context,pointD, "blue");
 drawPoint(context,pointE, "blue");
 drawPoint(context,pointF, "blue");
 drawPoint(context,pointG, "blue");
 drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
 drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
 drawLineBetweenTwoPoints(context,pointC,pointD,"blue");
 drawLineBetweenTwoPoints(context,pointD,pointE,"blue");
 drawLineBetweenTwoPoints(context,pointE,pointF,"blue");
 drawLineBetweenTwoPoints(context,pointF,pointG,"blue");
 
 // display x axis points
 displayText2(context,pointA.x-15,graphGrid.origin_y+15,"30");
 displayText2(context,pointB.x-15,graphGrid.origin_y+15,"40");
 displayText2(context,pointC.x-15,graphGrid.origin_y+15,"50");
 displayText2(context,pointD.x-15,graphGrid.origin_y+15,"60");
 displayText2(context,pointE.x-15,graphGrid.origin_y+15,"70");
 displayText2(context,pointF.x-15,graphGrid.origin_y+15,"80");
 displayText2(context,pointG.x-15,graphGrid.origin_y+15,"90");
  displayText2(context,pointH.x-15,graphGrid.origin_y+15,"100");
  
  
  // display y axis points
 displayText2(context,graphGrid.origin_x-15,graphGrid.origin_y-15,"2");
 displayText2(context,graphGrid.origin_x-15,graphGrid.origin_y-35,"4");
 displayText2(context,graphGrid.origin_x-15,graphGrid.origin_y-55,"6");
 displayText2(context,graphGrid.origin_x-15,graphGrid.origin_y-75,"8");
 displayText2(context,graphGrid.origin_x-20,graphGrid.origin_y-95,"10");
 displayText2(context,graphGrid.origin_x-20,graphGrid.origin_y-115,"12");
 
}

function chapter_17_1_Q_18_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid2(context,width,height,10);
drawOriginAxes(context,0,250,290,250);
drawOriginAxes(context,40,0,40,290);
setOrigin(graphGrid, 40,250)
setXYUnitValue(graphGrid, 5,1);
var pointA = new GraphPoint3(graphGrid,47,1);
var pointB = new GraphPoint3(graphGrid,53,3);
var pointC = new GraphPoint3(graphGrid,57,11);
var pointD = new GraphPoint3(graphGrid,63,22);
var pointE = new GraphPoint3(graphGrid,67,7);
var pointF = new GraphPoint3(graphGrid,73,6);
var pointG = new GraphPoint3(graphGrid,95,6);
//var pointH = new GraphPoint3(graphGrid,100,2);
 drawPoint(context,pointA, "blue");
 drawPoint(context,pointB, "blue");
 drawPoint(context,pointC, "blue");
 drawPoint(context,pointD, "blue");
 drawPoint(context,pointE, "blue");
 drawPoint(context,pointF, "blue");
// drawPoint(context,pointG, "blue");
 drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
 drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
 drawLineBetweenTwoPoints(context,pointC,pointD,"blue");
 drawLineBetweenTwoPoints(context,pointD,pointE,"blue");
 drawLineBetweenTwoPoints(context,pointE,pointF,"blue");
 //drawLineBetweenTwoPoints(context,pointF,pointG,"blue");
 
 // display x axis points
 displayText2(context,pointA.x-20,graphGrid.origin_y+15,"40");
// displayText2(context,pointB.x-15,graphGrid.origin_y+15,"40");
// displayText2(context,pointC.x-15,graphGrid.origin_y+15,"50");
 displayText2(context,pointD.x-15,graphGrid.origin_y+15,"60");
 //displayText2(context,pointE.x-15,graphGrid.origin_y+15,"70");
 displayText2(context,pointF.x,graphGrid.origin_y+15,"80");
 displayText2(context,pointG.x-15,graphGrid.origin_y+15,"100");
  //displayText2(context,pointH.x-15,graphGrid.origin_y+15,"100");
  
  
  // display y axis points
 displayText2(context,graphGrid.origin_x-15,graphGrid.origin_y-15,"2");
 displayText2(context,graphGrid.origin_x-15,graphGrid.origin_y-35,"4");
 displayText2(context,graphGrid.origin_x-15,graphGrid.origin_y-55,"6");
 displayText2(context,graphGrid.origin_x-15,graphGrid.origin_y-75,"8");
 displayText2(context,graphGrid.origin_x-20,graphGrid.origin_y-95,"10");
 displayText2(context,graphGrid.origin_x-20,graphGrid.origin_y-115,"12");
 
}

function chapter_17_1_Q_19_pic1(context,width,height, x1,y1,x2,y2,x3,y3,extension,increaseLength){
var graphGrid = new GraphGrid2(context,width,height,10);
drawOriginAxes(context,0,250,290,250);
drawOriginAxes(context,40,0,40,290);
setOrigin(graphGrid, 40,250)
setXYUnitValue(graphGrid, 5,5);
var pointA = new GraphPoint3(graphGrid,5,7);
var pointB = new GraphPoint3(graphGrid,15,17);
var pointC = new GraphPoint3(graphGrid,25,33);
var pointD = new GraphPoint3(graphGrid,35,51);
var pointE = new GraphPoint3(graphGrid,45,60);
//var pointF = new GraphPoint3(graphGrid,45,60);
//var pointG = new GraphPoint3(graphGrid,95,6);
//var pointH = new GraphPoint3(graphGrid,100,2);
 drawPoint(context,pointA, "blue");
 drawPoint(context,pointB, "blue");
 drawPoint(context,pointC, "blue");
 drawPoint(context,pointD, "blue");
 drawPoint(context,pointE, "blue");
// drawPoint(context,pointF, "blue");
// drawPoint(context,pointG, "blue");
 drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
 drawLineBetweenTwoPoints(context,pointB,pointC,"blue");
 drawLineBetweenTwoPoints(context,pointC,pointD,"blue");
 drawLineBetweenTwoPoints(context,pointD,pointE,"blue");
 //drawLineBetweenTwoPoints(context,pointE,pointF,"blue");
 //drawLineBetweenTwoPoints(context,pointF,pointG,"blue");
 
 // display x axis points
 displayText2(context,pointA.x,graphGrid.origin_y+15,"5");
 displayText2(context,pointB.x-5,graphGrid.origin_y+15,"15");
 displayText2(context,pointC.x-5,graphGrid.origin_y+15,"25");
 displayText2(context,pointD.x-5,graphGrid.origin_y+15,"35");
 displayText2(context,pointE.x-5,graphGrid.origin_y+15,"45");

  
  // display y axis points
 displayText2(context,graphGrid.origin_x-15,graphGrid.origin_y-15,"10");
 displayText2(context,graphGrid.origin_x-15,graphGrid.origin_y-35,"20");
 displayText2(context,graphGrid.origin_x-15,graphGrid.origin_y-55,"30");
 displayText2(context,graphGrid.origin_x-15,graphGrid.origin_y-75,"40");
 displayText2(context,graphGrid.origin_x-20,graphGrid.origin_y-95,"50");
 displayText2(context,graphGrid.origin_x-20,graphGrid.origin_y-115,"60");
 
}


