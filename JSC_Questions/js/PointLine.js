function Line(x1,y1,x2,y2){
	this.x1= x1;
	this.y1= y1;
	this.x2= x2;
	this.y2 = y2;
	this.pointA = new Point(x1,y1);
	this.pointB = new Point(x2,y2);
	
	}
	
	function LineBetweenPoint(pointA,pointB){
	this.x1= pointA.x;
	this.y1= pointA.y;
	this.x2= pointB.x;
	this.y2 = pointB.y;
	
	return  new Line(this.x1,this.y1,this.x2,this.y2);
	
	}
	
	function LineWithColor(x1,x2,y1,y2,color){
		this.x1= x1;
		this.y1= y1;
		this.x2= x2;
		this.y2 = y2;
		this.color = color;
	}
	
	
function Point(x,y){
  this.x = x;
  this.y=y;
  this.name="";
  
}

function DoublePoint(pointA,pointB){
	this.pointA =pointA;
	this.pointB =pointB;
}

function setPointName(point,name){
  point.name =name;
}
function displayPointName(context,point,x,y){
  context.font = "bold 16px Arial";
  context.fillText(point.name, x, y);
  
}

function drawPoint(context,point, color){
   context.fillStyle = color;
   context.beginPath();
   context.arc(point.x, point.y,2.5, 0, 2*Math.PI,true);
   context.fill();

}
function setContextColor(context, color){
  context.fillStyle = color;
}

function drawArrow(context, from_x, from_y, to_x,to_y,headLen,linecolor){


}
function midPointOfLine(line){
  x = (line.x2+line.x1)/2;
  y = (line.y2+line.y1)/2;
  var point = new Point(x,y);
  return point;
}

function midPointBetweenTwoPoint(pointA,pointB ){
  x = (pointB.x+pointA.x)/2;
  y = (pointB.y+pointA.y)/2;
  var point = new Point(x,y);
  return point;
}

function midPointBetweenAxes(x1,y1,x2,y2 ){
  x = (x2+x1)/2;
  y = (y2+y1)/2;
  var point = new Point(x,y);
  return point;
}

function PointAtCertainDistance(pointA, pointB, distance) {
     
        // point A coordinates
       var x1 = pointA.x;
       var y1 = pointA.y;

        // point B coordinates
       var x2 = pointB.x;
       var y2 = pointB.y;

        // calculate distance between the two points
        var DT = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

        var  D = distance; // distance to point C(certaib point
        var  x;
        var  y;
        var  T = D / DT;
       
        // finding point C coordinate
        x = (1 - T) * x1 + T * x2;
        y = (1 - T) * y1 + T * y2;
		var point = new Point(parseInt(x),parseInt(y));
       
       return point;
		
    }
	
	function drawLineBetweenTwoPointsAxis(context,x1,y1,x2,y2,linecolor){
var x_offset = 0;
var lineWidth = 1;
context.beginPath();
context.lineWidth = lineWidth; // set line thickness
context.strokeStyle = linecolor; // set color
context.moveTo(x1+x_offset,y1);
context.lineTo(x2+x_offset,y2);
context.stroke();

}

function drawLineBetweenTwoPoints(context,pointA,pointB,linecolor){
var x_offset = 0;
var lineWidth = 1;
context.beginPath();
context.lineWidth = lineWidth; // set line thickness
context.strokeStyle = linecolor; // set color
context.moveTo(pointA.x+x_offset,pointA.y);
context.lineTo(pointB.x+x_offset,pointB.y);
context.stroke();

}

function distanceBetweenTwoPoints(pointA, pointB){
    
   var distance = Math.sqrt( Math.pow((pointA.x-pointB.x), 2) + Math.pow((pointA.y-pointB.y), 2) );
   return distance;
}

function displayName(context,x,y,name){
     context.font = "bold 18px Arial";
     context.fillText(name, x, y);
}

function displayNameWithFont(context,x,y,name,font){
     context.font = font;
     context.fillText(name, x, y);
}
function displaySubscript(context,x,y,name,font){
     context.font = font;
     context.fillText(name, x, y);
}

function displayText(context,x,y,text){
     context.font = "bold 18px Arial";
     context.fillText(text, x, y);
}

function displayText2(context,x,y,text){
     context.font = "normal 12px Arial";
     context.fillText(text, x, y);
}
function displayText3(context,x,y,text){
     context.font = "normal 16px Arial";
     context.fillText(text, x, y);
}

function displayAlphabet(context,x,y,name){
     context.font = "bold 20px Arial";
     context.fillText(name, x, y);
}

function writeRotatedText(context,texToWrite,rotatePoint,labelx,labely, angle){
	context.translate(rotatePoint.x, rotatePoint.y);
	context.rotate(angle);
	displayName(context,labelx,labely,texToWrite);
	context.restore();
	context.rotate(-angle);
}

function writeRotatedText2(context,texToWrite,rotatePoint,labelx,labely, angle){
	context.translate(rotatePoint.x, rotatePoint.y);
	context.rotate(angle);
	displayName(context,labelx,labely,texToWrite);
	context.restore();
	context.rotate(-angle);
	context.restore();
	context.setTransform(1, 0, 0, 1, 0, 0);

}
function writeRotatedText3(context,texToWrite,rotatePoint,labelx,labely, angle){
	context.translate(rotatePoint.x, rotatePoint.y);
	context.rotate(angle);
	displayText2(context,labelx,labely,texToWrite);
	context.restore();
	context.rotate(-angle);
	context.restore();
	context.setTransform(1, 0, 0, 1, 0, 0);

}

function pointOfIntersectionOfAxies(x1,y1,x2,y2, x3,y3,x4,y4){
  var lineASlope = slope(x1,y1,x2,y2);
  var lineBSlope = slope(x3,y3,x4,y4);
 ////alert(lineASlope +" slope " +lineBSlope);
  var coefB1=  coefficientB(x1,y1,x2,y2, lineASlope);
  var coefB2=  coefficientB(x3,y3,x4,y4, lineBSlope);
  //// alert(coefB1 +" coef" +coefB2);
  
  var x =  intersectX(lineASlope, lineBSlope,coefB1,coefB2);
  var y= intersectY(lineASlope,x,coefB1);

		var intersectPoint = new Point(x,y);
		return intersectPoint;

}


function pointOfIntersectionOfPoints(pointA, pointB,pointC,pointD){
	var lineA = new LineBetweenPoint(pointA,pointB);
	var lineB = new LineBetweenPoint(pointC,pointD);
  var lineASlope = slope(lineA.x1,lineA.y1,lineA.x2,lineA.y2);
  var lineBSlope = slope(lineB.x1,lineB.y1,lineB.x2,lineB.y2);
 ////alert(lineASlope +" slope " +lineBSlope);
  var coefB1=  coefficientB(lineA.x1,lineA.y1,lineA.x2,lineA.y2, lineASlope);
  var coefB2=  coefficientB(lineB.x1,lineB.y1,lineB.x2,lineB.y2, lineBSlope);
  //// alert(coefB1 +" coef" +coefB2);
  
  var x =  intersectX(lineASlope, lineBSlope,coefB1,coefB2);
  var y= intersectY(lineASlope,x,coefB1);

		var intersectPoint = new Point(x,y);
		return intersectPoint;

}
function pointOfIntersectionOfTwolIne(lineA, lineB){
  var lineASlope = slope(lineA.x1,lineA.y1,lineA.x2,lineA.y2);
  var lineBSlope = slope(lineB.x1,lineB.y1,lineB.x2,lineB.y2);
 ////alert(lineASlope +" slope " +lineBSlope);
  var coefB1=  coefficientB(lineA.x1,lineA.y1,lineA.x2,lineA.y2, lineASlope);
  var coefB2=  coefficientB(lineB.x1,lineB.y1,lineB.x2,lineB.y2, lineBSlope);
  //// alert(coefB1 +" coef" +coefB2);
  
  var x =  intersectX(lineASlope, lineBSlope,coefB1,coefB2);
  var y= intersectY(lineASlope,x,coefB1);

		var intersectPoint = new Point(x,y);
		return intersectPoint;

}
function coefficientB(x1,y1,x2,y2, slope){
  var coefB = y1-slope*x1; 
  return coefB;
}

function intersectX(slope1, slope2,coefB1,coefB2){
  var x = (coefB2-coefB1)/(slope1-slope2); 
  return x;
}
function intersectY(slope1,intersectPointX,coefB1){
  var y =  slope1*intersectPointX + coefB1; 
  return y;
}

function constantC(slope,x1,y1,x2,y2){
var constanc = y1-slope*x1;

}

function slope(x1,y1,x2,y2){
 var slope_m = (y2-y1)/(x2-x1);
 return slope_m;
}
function perpendicularPointOnLineFromAPoint(PointA,PointB,PointC){
   var temp1= PointB.y-PointA.y;
   var temp2= PointC.x-PointA.x;
   var temp3= PointB.x-PointA.x;
   var temp4=PointC.y-PointA.y;
   var temp5=temp1*temp2-temp3*temp4;
   var temp6=Math.pow(temp1, 2) + Math.pow(temp3, 2);
   var k =temp5/temp6;
   var x = PointC.x -k*temp1;
   var y = PointC.y + k*temp3;
   var perpendiPoint = new Point(x,y);
   return perpendiPoint;
}

function getParallelLine(lineA,referrenceLine,atDistance,clockwise){
  var angleofTwoLine = angleBetweenLine(lineA,referrenceLine);
  //alert(angleofTwoLine);
  var totalangle = 0;
  if(clockwise){
     totalangle = angleofTwoLine+90;
  }else{
    totalangle = -(90-angleofTwoLine);
  }
  
  var pointK =  getPointAtAnAngle(lineA.pointA,totalangle,atDistance);
  var pointM =  getPointAtAnAngle(lineA.pointB,totalangle,atDistance);
  var line = new LineBetweenPoint(pointK,pointM);
    return  line;
	
  }


function angleBetweenLine(lineA,lineB){
  var lineASlope = slope(lineA.x1,lineA.y1,lineA.x2,lineA.y2);
  var lineBSlope = slope(lineB.x1,lineB.y1,lineB.x2,lineB.y2);
  var angle = Math.atan((lineASlope - lineBSlope) / (1 - lineASlope * lineBSlope));
  var  degreeAngle = getDegreeAngleFromRadian(angle)
  return degreeAngle;

}

function getAngle(A,B,C) {
// B is the centre point
    var AB = Math.sqrt(Math.pow(B.x-A.x,2)+ Math.pow(B.y-A.y,2));    
    var BC = Math.sqrt(Math.pow(B.x-C.x,2)+ Math.pow(B.y-C.y,2)); 
    var AC = Math.sqrt(Math.pow(C.x-A.x,2)+ Math.pow(C.y-A.y,2));
	 var angle = Math.acos((BC*BC+AB*AB-AC*AC)/(2*BC*AB));
	 var  degreeAngle = getDegreeAngleFromRadian(angle)
    return degreeAngle;
}

function getRadianAngleFromDegree(angle){
	  return (Math.PI*angle)/180;
	 
	}
	
	function getDegreeAngleFromRadian(angle){
	  return (180*angle)/Math.PI;	 
	}
	
	function getPointAtAnAngle(startPoint,angleDegree,distance){
	   var angleRadian =  getRadianAngleFromDegree(angleDegree)
	   var x = startPoint.x + distance * Math.cos(angleRadian);
       var y = startPoint.y + distance * Math.sin(angleRadian);
	   var point = new Point(x,y);
	   return point;
	}
	
	function getPointAtAnAngle2(startPoint, endPoint, angleDegree, distance){
		 var theta = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x);
       //  theta += Math.PI/2.0;
		 var  angle = getDegreeAngleFromRadian(theta);
		  if (angle < 0) {
            angle += 360;
          }
		 angleDegree = angleDegree+angle;
		
	  var angleRadian =  getRadianAngleFromDegree(angleDegree)
	   var x = startPoint.x + distance * Math.cos(angleRadian);
       var y = startPoint.y + distance * Math.sin(angleRadian);
	   var point = new Point(x,y);
	   return point;
	}
	
	function drawWall(context,x1,y1,intervalNum,intervalstep,length){
		var x2= x1-length;
		var y2= y1+intervalstep;
		for(i= 0;i<intervalNum;i++){
		  drawLineBetweenTwoPointsAxis(context,x1,y1,x2,y2,"blue");
		   y1= y2;
		   y2 = y1+intervalstep;
		 }
}

function getYIntercept(x1,y1,x2,y2){
	var slope = (y2-y1)/(x2-x1);
	var intercept_y=(-1)*slope*x1+y1;
	return intercept_y;
	
}
  
 