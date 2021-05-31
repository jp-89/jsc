	function TangentPoints(x1,y1,x2,y2){
		this.x1=x1;
		this.y1=y1;
		this.x2=x2;
		this.y2=y2;
	}
	
	function Oval(centerPoint,radiusW,radiusH){
	  this.centerPoint = centerPoint;
	  this.centerX =centerPoint.x;
	  this.centerY =centerPoint.y;
	  this.radiusW = radiusW;
	  this.radiusH = radiusH;
	  this.fillStyle="";
	  this.shouldFill ="";
	  this.strokeStyle="";
	}
	
	function drawOval(context,oval,linecolor)
	{
		  context.save();
		  context.scale(1,  oval.radiusH/oval.radiusW);
		  context.beginPath();
		  context.arc(oval.centerX, oval.centerY, oval.radiusW, 0, 2 * Math.PI);
		  context.restore();
		  context.lineWidth=2;
		  context.strokeStyle = linecolor;
		  context.stroke();  
		  //context.scale(1,  1);
		  
	}
	function pointOnEclipseAtAnAngle(oval,angleDegree){
	var tempangleDegree =(1)*angleDegree;
	var fact = oval.radiusH/oval.radiusW;
	   var angleRadian = getRadianFromDegree(angleDegree);
	   var x =0;
	   var y = 0;	  
	  x = (oval.centerX + oval.radiusW * Math.cos(angleRadian))*1;
      y = (oval.centerY -oval.radiusW * Math.sin(angleRadian))*fact;
     
	   var point = new Point(x,y);
	   return point;
	
	}
	
	function Circle(centerPoint,radius){
	  this.centerPoint = centerPoint;
	  this.centerX =centerPoint.x;
	  this.centerY =centerPoint.y;
	  this.radius = radius;
	  this.x=centerPoint.x;
	  this.y = centerPoint.y;
	  this.fillStyle="";
	  this.shouldFill ="";
	  this.strokeStyle="";
	}
	
	function setCentre(circle,x,y){
	  circle.centerX = x;
	   circle.centerY = y;
	}
	
	function setRadisu(circle,radius){
	  circle.radius = radius;
	   
	}

	function setCircleFillStyle(circle,fillStyle){
	  circle.fillStyle =fillStyle;
	}

	function setCircleFill(circle,shouldFill){
	  circle.shouldFill =shouldFill;
	}
	
	
	
	function drawCircle( context,circle,linecolor){
		context.beginPath();
		  context.arc(circle.centerX, circle.centerY, circle.radius, 0, 2 * Math.PI, false);
		  if(circle.shouldFill =="yes"){
			 if(circle.fillStyle){
			  context.fillStyle = circle.fillStyle;
			   context.fill();
			 }
		}
		 context.lineWidth = 2;
		 context.strokeStyle = linecolor;
		 context.stroke();
	}
	
	function drawHalfCircle( context,circle,startAngle,endAngle,linecolor){
		context.beginPath();
		var startAngleRad= getRadianFromDegree(startAngle);
		var endAngleRad= getRadianFromDegree(endAngle);
		  context.arc(circle.centerX, circle.centerY, circle.radius, startAngleRad, endAngleRad, false);
		  if(circle.shouldFill =="yes"){
			 if(circle.fillStyle){
			  context.fillStyle = circle.fillStyle;
			   context.fill();
			 }
		}
		 context.lineWidth = 2;
		 context.strokeStyle = linecolor;
		 context.stroke();
	}
	
	function drawCircleArc( context,circle,arcAngle,linecolor,antclockwise){
		context.beginPath();
		  context.arc(circle.centerX, circle.centerY, circle.radius, 0,  arcAngle, antclockwise);
		  if(circle.shouldFill =="yes"){
			 if(circle.fillStyle){
			  context.fillStyle = circle.fillStyle;
			   context.fill();
			 }
		}
		 context.lineWidth = 2;
		 context.strokeStyle = linecolor;
		 context.stroke();
	}
	
	function drawCircleArc2( context,circle,startAngle, arcAngle,linecolor,antclockwise){
		context.beginPath();
		  context.arc(circle.centerX, circle.centerY, circle.radius, (startAngle/180) * Math.PI,  (arcAngle/180) * Math.PI, antclockwise);
		  if(circle.shouldFill =="yes"){
			 if(circle.fillStyle){
			  context.fillStyle = circle.fillStyle;
			   context.fill();
			 }
		}
		 context.lineWidth = 2;
		 context.strokeStyle = linecolor;
		 context.stroke();
	}
	
	function getPointAtForDegree(circle,angleDegree){
	   var angleRadian = getRadianFromDegree(angleDegree)
	   var x = circle.centerX + circle.radius * Math.cos(angleRadian);
       var y = circle.centerY + circle.radius * Math.sin(angleRadian);
	   var point = new Point(x,y);
	   return point;
	}
	
	function getPointAtForRadian(circle,angleRadian){
	
	   var x = circle.centerX + circle.radius * Math.cos(angleRadian)
       var y = circle.centerY + circle.radius * Math.sin(angleRadian)
	   var point = new Point(x,y);
	   return point;
	}
	
	function getRadianFromDegree(angle){
	  return (Math.PI*angle)/180;
	 
	}
	
	function getDegreeFromRadian(angle){
	  return (180*angle)/Math.PI;	 
	}
	
	function circleLineIntersection(circle,linePointA,linePointB){
		
		var x1= linePointA.x;
		var y1= linePointA.y;
		var x2= linePointB.x;		
		var y2 = linePointB.y;
		var slope = (y2-y1)/(x2-x1);
		var intercept_y=(-1)*slope*x1+y1;
		// get a,b,c values
		var a= 1+Math.pow(slope,2);
		var b = -circle.centerX*2+(slope*(intercept_y-circle.centerY))*2;
		var c = Math.pow(circle.centerX,2)+ Math.pow((intercept_y-circle.centerY),2)-Math.pow(circle.radius,2);
		
		// get discriminant
		var d =Math.pow(b,2)-4*a*c;
		
		var intersections = [
		         (-b + Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a),
				 (-b - Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a)
		                    ];
							
		var point= new Point(intersections[0],intersections[1]);
		
		return point;
		
	}
	
	function circleLineIntersectionPoints(circle,linePointA,linePointB){
		
		
		var x1= linePointA.x;
		var y1= linePointA.y;
		var x2= linePointB.x;		
		var y2 = linePointB.y;
		// compute the euclidean distance between A and B
		var LAB = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
		
		// compute the direction vector D from A to B
		var Dx = (x2-x1)/LAB;
		var Dy = (y2-y1)/LAB;
		
		// compute the value of t of the closest point to the circle centre (Cx, Cy)
		var t= Dx*(circle.centerX-x1) + Dy*(circle.centerY-y1);
		// this is the projection of C on the line from A to B
		
		// compute the coordinates of point E on the line closest to C
		var Ex = t*Dx+x1;
		var Ey = t*Dy+y1;
		
		// compute the euclidean distance from E to C
		var LEC = Math.sqrt(Math.pow((Ex-circle.centerX),2) + Math.pow((Ey-circle.centerY),2));
		
		var intersectionPoints = 0;
		
		
		// test if the line intersects the circle
		if(LEC<circle.radius){
			
			// compute distance from t to circle intersecton point
			var dt = Math.sqrt(Math.pow(circle.radius,2) - Math.pow(LEC,2));
			// compute first intersects
			var Fx = (t-dt)*Dx+x1;
			var Fy = (t-dt)*Dy+y1;
			
			// compute second intersects
			var Gx = (t+dt)*Dx+x1;
			var Gy = (t+dt)*Dy+y1;
			var intersectPointA = new Point(Fx,Fy);
			var intersectPointB = new Point(Gx,Gy);
			intersectionPoints= new DoublePoint(intersectPointA,intersectPointB);	
			
		}	
		
		
		return intersectionPoints;
		
	}
	
	
	
	function getTangentPoint(circle, sourcePoint){
		
		var dx = circle.centerX - sourcePoint.x;
		var dy = circle.centerY - sourcePoint.y;
		var dd = Math.sqrt(dx*dx + dy*dy);
		var a = Math.asin(circle.radius/dd);
		var b = Math.atan2(dy,dx);
		var angleA = b - a;
		var angleB = b + a;
		var tangentA = {x:circle.radius* Math.sin(angleA), y:circle.radius* -Math.cos(angleA)};
		var tangentB = {x:circle.radius* - Math.sin(angleB), y:circle.radius* Math.cos(angleB)};
		var tangentPoint = new TangentPoints(circle.centerX+tangentA.x, circle.centerY+tangentA.y, 
		                                   circle.centerX+tangentB.x, circle.centerY+tangentB.y);
										   
										   
				//alert(tangentPoint.x1);						   
		return tangentPoint;
		
	}

