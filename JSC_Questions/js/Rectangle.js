function Rectangle(pointA,pointB,pointC,pointD){
	 this.A = pointA;
	 this.B = pointB;
	 this.C = pointC;
	 this.D = pointD;
	 this.linecolor = "red";
	 this.width = 0;
     this.heigh = 0;
     this.area = this.width*this.height;
		
}

function RectangleWithAxes(x1,y1,x2,y2,x3,y3,x4,y4){
     this.x1 = x1;
	 this.y1 = y1;
	 this.x2 = x2;
	 this.y2 = y2;
	 this.x3 = x3;
	 this.y3 = y3;
	 this.x4 = x4;
	 this.y4 = y4;
	 this.A = new Point(x1,y1);
	 this.B = new Point(x2,y2);
	 this.C = new Point(x3,y3);
	 this.D = new Point(x4,y4);
	 this.linecolor = "red";
	 this.width = 0;
     this.heigh = 0;
     this.area = this.width*this.height;
	
}


function drawRectangle(context,rectangle){

  drawLineBetweenTwoPoints(context,rectangle.A,rectangle.B,rectangle.linecolor);
  drawLineBetweenTwoPoints(context,rectangle.B,rectangle.C,rectangle.linecolor);
  drawLineBetweenTwoPoints(context,rectangle.C,rectangle.D,rectangle.linecolor);
  drawLineBetweenTwoPoints(context,rectangle.D,rectangle.A,rectangle.linecolor);
}

function drawRectangleWithFillColor(context,rectangle,fillcolor){

 context.beginPath();
context.moveTo(rectangle.A.x,rectangle.A.y);
context.lineTo(rectangle.B.x, rectangle.B.y);
context.lineTo(rectangle.C.x, rectangle.C.y);
context.lineTo(rectangle.D.x, rectangle.D.y);
context.closePath(); 
context.fillStyle = fillcolor;
context.fill();

}


function setRectangleLineColor(rectangle,linecolor){
  rectangle.linecolor = linecolor;
}

function RectangleHW(height,width){
 this.height = height;
 this.width = width;
 this.area = height * width;
}

