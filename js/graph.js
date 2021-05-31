
// this function used in graph grid
function drawOriginAxes(context,x1,y1,x2,y2){
var lineWidth = 1;
var x_offset = 0;
context.beginPath();
context.lineWidth = lineWidth; // set line thickness
context.strokeStyle = "red"; // set color

context.moveTo(x1+x_offset,y1);
context.lineTo(x2+x_offset,y2);
context.stroke();

}

function drawOriginAxesInGrid(context,graphGrid){
var lineWidth = 1;
var x_offset = 0;
context.beginPath();
context.lineWidth = lineWidth; // set line thickness
context.strokeStyle = "red"; // set color

var origin_x = graphGrid.origin_x ;
var origin_y =	graphGrid.origin_y;
var unitStep =graphGrid.unitStep ;

var horizontalLineNum = graphGrid.horizontalLineNum ;
var veriticalLineNum = 	graphGrid.veriticalLineNum;

// draw horizontal axis
context.stroke();
context.moveTo(0,origin_y);
context.lineTo(graphGrid.veriticalLineNum*unitStep,origin_y);
context.stroke();
// draw vertical axis
context.moveTo(origin_x,0);
context.lineTo(origin_x,graphGrid.horizontalLineNum*unitStep);
context.stroke();

}

// this from given graph coordinate
function GraphPoint(graphGrid,x1,y1){
// graph point
this.gx = x1;
this.gy = y1;
// canvas point
this.x = graphGrid.origin_x+x1*graphGrid.unitStep;
this.y = graphGrid.origin_y-y1*graphGrid.unitStep;

}

// this is from canvas coordinate
function GraphPoint2(graphGrid,x1,y1){
// graph point
this.gx= ((x1-graphGrid.origin_x)/graphGrid.unitStep).toFixed(2) ;
this.gy = ((graphGrid.origin_y-y1)/graphGrid.unitStep).toFixed(2);
// canvas point
this.x=x1;
this.y=y1;


}

// this convert given value into graph point
function GraphPoint3(graphGrid,x1,y1){
// graph point
var xunitnum = x1/graphGrid.x_unitvalue;
var yunitnum = y1/graphGrid.y_unitvalue;
this.gx = xunitnum;
this.gy = yunitnum;
// canvas point
this.x = graphGrid.origin_x+xunitnum*graphGrid.unitStep;
this.y = graphGrid.origin_y-yunitnum*graphGrid.unitStep;

}

function GraphGrid2(context,width,height,unitStep){
	var horizontalLineNum = height/unitStep;
	 var veriticalLineNum = width/unitStep;
	 var totalhorizontalUnitStep = this.horizontalLineNum;
	 var totalveriticalUnitStep = this.veriticalLineNum;
	 var x_offset = 0.5;
	 var y_offset = 0.5;
	 var lineWidth = 1;
	 var grid = context;
	 grid.lineWidth = lineWidth; // set line thickness
     grid.strokeStyle = "#70CAD4"; // set color
	 
	 // for vertical origin line;
	 var axix_x1 = parseInt(veriticalLineNum/2)*unitStep;
	 var axix_x2 = axix_x1;
	 var axix_y1 = y_offset;
	 var axix_y2 = horizontalLineNum*unitStep;
	 
	 // for horizontal origin line;
	 var axix_x3 = x_offset;
	 var axix_x4 = veriticalLineNum*unitStep;
	 var axix_y3 = parseInt(horizontalLineNum/2)*unitStep;;
	 var axix_y4 = axix_y3;
	
	this.origin_x = axix_x1;
	this.origin_y = axix_y3;
	this.lineWidth = lineWidth;
	this.context = context;
	this.unitStep = unitStep;
	this.x_offset = x_offset;
	this.y_offset = y_offset;
	this.horizontalLineNum = horizontalLineNum;
	this.veriticalLineNum = veriticalLineNum;
	this.width = width;
	this.height = height;
	this.unitStepValue=0;
	this.writeUnitInverval =1;
	this.x_unitvalue =0;
	this.y_unitvalue =0;
	

	for (i = 0; i < veriticalLineNum+1; i++) { // vertical lines
		grid.beginPath();
    	grid.moveTo(x_offset + i * unitStep, y_offset);
    	grid.lineTo(x_offset + i * unitStep, height);
		if( i == veriticalLineNum) {
		  grid.moveTo(0 + i * unitStep, 0);
    	  grid.lineTo(0 + i * unitStep, height);
		}
    	grid.stroke();
	}
	

	for (i = 0; i < horizontalLineNum+1; i++) { // horizontal lines
    	grid.moveTo(x_offset, i * unitStep + y_offset);
    	grid.lineTo(width, y_offset + i * unitStep);
    	if( i == horizontalLineNum) {
		  grid.moveTo(x_offset, i * unitStep + 0);
    	  grid.lineTo(width, 0 + i * unitStep);
		}
		grid.stroke();
	}
}

function setOrigin(grid, x,y){
	grid.origin_x = x;
	grid.origin_y = y;
}

function setXYUnitValue(grid, x,y){
	grid.x_unitvalue = x;
	grid.y_unitvalue = y;
}


function GraphGrid(context,width,height,unitStep){
     var horizontalLineNum = height/unitStep;
	 var veriticalLineNum = width/unitStep;
	 var totalhorizontalUnitStep = this.horizontalLineNum;
	 var totalveriticalUnitStep = this.veriticalLineNum;
	 var x_offset = 0.5;
	 var y_offset = 0.5;
	 var lineWidth = 1;
	 var grid = context;
	 grid.lineWidth = lineWidth; // set line thickness
     grid.strokeStyle = "#70CAD4"; // set color

	for (i = 0; i < veriticalLineNum+1; i++) { // vertical lines
		grid.beginPath();
    	grid.moveTo(x_offset + i * unitStep, y_offset);
    	grid.lineTo(x_offset + i * unitStep, height);
		if( i == veriticalLineNum) {
		  grid.moveTo(0 + i * unitStep, 0);
    	  grid.lineTo(0 + i * unitStep, height);
		}
    	grid.stroke();
	}
	

	for (i = 0; i < horizontalLineNum+1; i++) { // horizontal lines
    	grid.moveTo(x_offset, i * unitStep + y_offset);
    	grid.lineTo(width, y_offset + i * unitStep);
    	if( i == horizontalLineNum) {
		  grid.moveTo(x_offset, i * unitStep + 0);
    	  grid.lineTo(width, 0 + i * unitStep);
		}
		grid.stroke();
	}
	
	// for vertical origin line;
	 var axix_x1 = parseInt(veriticalLineNum/2)*unitStep;
	 var axix_x2 = axix_x1;
	 var axix_y1 = y_offset;
	 var axix_y2 = horizontalLineNum*unitStep;
	 
	 // for horizontal origin line;
	 var axix_x3 = x_offset;
	 var axix_x4 = veriticalLineNum*unitStep;
	 var axix_y3 = parseInt(horizontalLineNum/2)*unitStep;;
	 var axix_y4 = axix_y3;
	
	// draw vertical origin line
	drawOriginAxes(context,axix_x1, axix_y1,axix_x2,axix_y2);
	
	// draw horizontal origin line
	drawOriginAxes(context,axix_x3, axix_y3,axix_x4,axix_y4);
	this.origin_x = axix_x1;
	this.origin_y = axix_y3;
	this.lineWidth = lineWidth;
	this.context = context;
	this.unitStep = unitStep;
	this.x_offset = x_offset;
	this.y_offset = y_offset;
	this.horizontalLineNum = horizontalLineNum;
	this.veriticalLineNum = veriticalLineNum;
	this.width = width;
	this.height = height;
	this.unitStepValue=0;
	this.writeUnitInverval =1;
	//writeOriginAxisPoints(context,graphGrid);
}

function setUnitStepValue(graphGrid,unitStepValue){
  graphGrid.unitStepValue = unitStepValue;
 
}

function writeOriginAxisPoints(context,graphGrid){
 var unitStepValue = graphGrid.unitStepValue;
  var origin_x = graphGrid.origin_x;
  var origin_y = graphGrid.origin_y;
  writeOriginAxisText(context,origin_x,origin_y+13,"0")

}

function writeOriginAxisText(context,x,y,text){
     context.font = "bold 12px Arial";
     context.fillText(text, x, y);
}
function drawLineInGraphBetweenTwoPointsAxis(graphGrid,x1,y1,x2,y2,linecolor,x_unitvalue,y_unitvalue){
var x_offset = 0;
var lineWidth = 1;

x1 = graphGrid.origin_x+x1*graphGrid.unitStep;
y1 = graphGrid.origin_y-y1*graphGrid.unitStep;
x2 = graphGrid.origin_x+x2*graphGrid.unitStep;
y2 = graphGrid.origin_y-y2*graphGrid.unitStep;
var context = graphGrid.context;
context.beginPath();
context.lineWidth = lineWidth; // set line thickness
context.strokeStyle = linecolor; // set color
context.moveTo(x1+x_offset,y1);
context.lineTo(x2+x_offset,y2);
context.stroke();

}
function drawLineInGraphBetweenTwoPoints(graphGrid,x1,y1,x2,y2,linecolor,x_unitvalue,y_unitvalue){
var x_offset = 0;
var lineWidth = 1;
var context = graphGrid.context;
context.beginPath();
context.lineWidth = lineWidth; // set line thickness
context.strokeStyle = linecolor; // set color
context.moveTo(x1+x_offset,y1);
context.lineTo(x2+x_offset,y2);
context.stroke();

}


function getCanvasPoint(graphGrid,x1,y1){
	x1 = graphGrid.origin_x+x1*graphGrid.unitStep;
	y1 = graphGrid.origin_y-y1*graphGrid.unitStep;
	var point = new Point(x1,y1);
	return point;

}


function lineIntersect(x1,y1,x2,y2, x3,y3,x4,y4) {
    var x=((x1*y2-y1*x2)*(x3-x4)-(x1-x2)*(x3*y4-y3*x4))/((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));
    var y=((x1*y2-y1*x2)*(y3-y4)-(y1-y2)*(x3*y4-y3*x4))/((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));
    if (isNaN(x)||isNaN(y)) {
        return false;
    } else {
        if (x1>=x2) {
            if (!(x2<=x&&x<=x1)) {return false;}
        } else {
            if (!(x1<=x&&x<=x2)) {return false;}
        }
        if (y1>=y2) {
            if (!(y2<=y&&y<=y1)) {return false;}
        } else {
            if (!(y1<=y&&y<=y2)) {return false;}
        }
        if (x3>=x4) {
            if (!(x4<=x&&x<=x3)) {return false;}
        } else {
            if (!(x3<=x&&x<=x4)) {return false;}
        }
        if (y3>=y4) {
            if (!(y4<=y&&y<=y3)) {return false;}
        } else {
            if (!(y3<=y&&y<=y4)) {return false;}
        }
    }
    return true;
}

function PointOfIntersection2(x11, y11, x12, y12, x21, y21, x22, y22) {
            var slope1, slope2, yint1, yint2, intx, inty;
            if (x11 == x21 && y11 == y21) return [x11, y11];
            if (x12 == x22 && y12 == y22) return [x12, y22];

            slope1 = this.slope(x11, y11, x12, y12);
            slope2 = this.slope(x21, y21, x22, y22);
           // if (slope1 === slope2) return false;

            yint1 = this.yInt(x11, y11, x12, y12);
            yint2 = this.yInt(x21, y21, x22, y22);
           // if (yint1 === yint2) return yint1 === false ? false : [0, yint1];

            //if (slope1 === false) return [y21, slope2 * y21 + yint2];
          //  if (slope2 === false) return [y11, slope1 * y11 + yint1];
            intx = (slope1 * x11 + yint1 - yint2)/ slope2;
          //  return [intx, slope1 * intx + yint1];
		  var intersectx= intx;
		  var intersecty = slope1 * intx + yint1;
			this.x= intersectx;
			this.y = intersecty;
        }
		
		
		function PointOfIntersection(lineA, lineB) {
		
		
		    var x11=  lineA.x1;
			var y11 = lineA.y1;
			var x12 = lineA.x2;
            var y12 = lineA.y2;
			var x21 = lineB.x1;
			var y21 = lineB.y1;
			var x22 = lineB.x2;
			var y22 = lineB.y2;
            var slope1, slope2, yint1, yint2, intx, inty;
            if (x11 == x21 && y11 == y21) return [x11, y11];
            if (x12 == x22 && y12 == y22) return [x12, y22];

            slope1 = this.slope(x11, y11, x12, y12);
            slope2 = this.slope(x21, y21, x22, y22);
           // if (slope1 === slope2) return false;

            yint1 = this.yInt(x11, y11, x12, y12);
            yint2 = this.yInt(x21, y21, x22, y22);
           // if (yint1 === yint2) return yint1 === false ? false : [0, yint1];

            //if (slope1 === false) return [y21, slope2 * y21 + yint2];
          //  if (slope2 === false) return [y11, slope1 * y11 + yint1];
            intx = (slope1 * x11 + yint1 - yint2)/ slope2;
          //  return [intx, slope1 * intx + yint1];
		  var intersectx= intx;
		  var intersecty = slope1 * intx + yint1;
			this.x= intersectx;
			this.y = intersecty;
			//alert( intersectx);
        }

		function graphPointText(point){
		 var pointText ="("+ point.gx+","+point.gy+")";
		 return pointText;
		
		}
		
		function graphPointTextWithName(point){
		 var pointText = point.name+"("+ point.gx+","+point.gy+")";
		 return pointText;
		
		}
		
		
function drawQuadraticCurve(context, points){
	
context.moveTo(points[0].x, points[0].y);

var lastPoint = points.length-2;
   for (i = 1; i < points.length-2 ; i ++)
   {
      var xc = (points[i].x + points[i + 1].x) / 2;
      var yc = (points[i].y + points[i + 1].y) / 2;
      context.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
       context.stroke();
      
   }
   context.stroke();
 // curve through the last two points
 context.quadraticCurveTo(points[lastPoint].x, points[lastPoint].y, points[lastPoint+1].x,points[lastPoint+1].y);
  context.stroke();
	
}
