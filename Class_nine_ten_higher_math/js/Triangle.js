
/// drawLineBetweenTwoPoints(context,pointA,pointB)-- from file
function Triangle(pointA,pointB,pointC){
 this.pointA = pointA; 
 this.pointB = pointB; 
 this.pointC = pointC; 

}



function drawTriangle(context, triangle){
 
  drawLineBetweenTwoPoints(context,triangle.pointA,triangle.pointB,"blue");
  drawLineBetweenTwoPoints(context,triangle.pointB,triangle.pointC,"blue");
  drawLineBetweenTwoPoints(context,triangle.pointC,triangle.pointA,"blue");
 
 }	
 
 function drawTriangleWithFillColor(context, triangle,color){
 
 var pointA = triangle.pointA;
 var pointB= triangle.pointB;
 var pointC= triangle.pointC;
 context.beginPath();
context.moveTo(pointA.x, pointA.y);
context.lineTo(pointB.x, pointB.y);
context.lineTo(pointC.x, pointC.y);
context.closePath();
 

context.fillStyle = color;
context.fill();
 }	
 
 function writeAngle(context, x,y, angle){
 //context.rotate(0)
 
   context.fillText(angle, x, y);
    
 
 }

	
	
	



