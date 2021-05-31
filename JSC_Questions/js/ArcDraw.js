function ArcDrawWithAngleRadius(context,x1,y1,x2,y2,startAngle,endAngle,radius,counterclock,color){
 
 var posx1= x1;
  var posy1= y1;
  var posx2= posx1+10;
  var posy2= posy1+10;
  var counterClockwise= counterclock;
  
  var arcInfo = new ArcInfo(context,
                             posx1,posy1,posx2,posy2,
							 startAngle,endAngle,
							 radius,false,color);
  
  this.context =context;
  this.x=x1;
  this.y=y1;
  this.r=radius;
  this.centerX =x1;
  this.centerY=y1;
  this.radius=radius;
  this.startAngle=startAngle;
  this.endAngle=endAngle;
  this.x1=x1;
  this.y1=y1;
  this.x2=x2;
  this.y2=y2;
  
  this.startArcDraw =function(){
		 drawSimpleArc(arcInfo);
  
  };

}

function drawSimpleArc(arcInfo){
	var context = arcInfo.context;
	context.beginPath();
	
	context.arc(
	arcInfo.x,
	arcInfo.y,
	arcInfo.radius,
	arcInfo.startAngle,
	arcInfo.endAngle,
	arcInfo.counterClockwise);
	
	context.lineWidth=1;
	context.strokeStyle=arcInfo.color;
	context.stroke();
	
}


function ArcInfo(context,x1,y1,x2,y2, startAngle,endAngle, radius,counterClockwise,color){
	this.context= context;
	this.radius=radius;
	this.startAngle=(startAngle*Math.PI)/180;
	this.endAngle=(endAngle*Math.PI)/180;
	this.finalEndAngle =0;
	this.counterClockwise=counterClockwise;
	this.x=x1;
	this.y=y1;
	this.x2=x2;
	this.y2=y2;
	this.incrementx=0;
	this.incrementy=0;
	this.stepIncrementAmount =0;
	this.currentIncrement =0;
	this.numIncrement =0;
	this.animationInProcess=false;
	this.color=color;	
	
}

function findArcIntersectionPoint(circleA,circleB){
	
	var x_diff=circleB.x-circleA.x;
	var y_diff=circleB.y-circleA.y;
	
	// distance between centres
	var centerDistance= Math.sqrt( Math.pow(x_diff,2)+Math.pow(y_diff,2));
	
	// distance from centre to line which joins two intersection
	var temp1 =  Math.pow(centerDistance,2)+ Math.pow(circleA.radius,2)- Math.pow(circleB.radius,2);
	var distantJoinLine =  temp1/(2*centerDistance);
	var var1 = (x_diff*distantJoinLine)/centerDistance;
	var var2 = (y_diff*distantJoinLine)/centerDistance;
	var var3 = x_diff/centerDistance;
	var var4 = y_diff/centerDistance;
	var var5 =  Math.sqrt( Math.pow(circleA.radius,2)-Math.pow(distantJoinLine,2));
	var x  = circleA.x + var1 + var4 * var5;
	var y =  circleA.y + var2 - var3 * var5;
	
	var x1  = circleA.x + var1 - var4 * var5;
	var y1 =  circleA.y + var2 + var3 * var5;
	var point = new ArcIntersectionPoint(x,y,x1,y1);
	return point;
}

function ArcIntersectionPoint(x,y,x1,y1){
	
	this.x=x;
	this.y=y;
	this.x1=x1;
	this.y1=y1;
	this.pointA = new Point(x,y);
	this.pointB= new Point(x1,y1);
}
