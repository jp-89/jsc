function chapter_11_2_Q_23_pic1(context, x1,y1,x2,y2,x3,y3,extension,increaseLength){
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
	
	displayName(context,x1+40,y1+35,"চিত্র :১");	

}