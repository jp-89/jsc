
function doAnimation(context,x,y,radiaus,counterClockwise){
  //var animationInfo = new AnimationInfo(  context,x,y,radiaus,counterClockwise);	

for(int i= 0; i<10;i++){
//alert("nnn");
animateCurve(animationInfo);
}  
//	animateCurve(animationInfo);
	//https://jsfiddle.net/umaar/fnMvf/
}


function AnimationInfo(context,x,y,radiaus,counterClockwise){

  this.context = context;
  this.x = x;
  this.y = y;
  this.radiaus = radiaus;
  this.startAngle = 1.5 * Math.PI;
  this.endAngle = 0 * Math.PI;
  this.curVal= 0;
  this.counterClockwise = counterClockwise;
  this.lineWidth = 15;
  this.strokeStyle = 'black';
 
  
}


      
function animateCurve(animationInfo){
//alert("working10");
    if(animationInfo.curVal < 0.5){
      animationInfo.curVal+= 0.01;
    }
      animationInfo.endAngle = animationInfo.curVal * Math.PI;
	  alert(animationInfo.endAngle);
      var context = animationInfo.context;
      context.beginPath();
      context.arc(   animationInfo.x, 
	                 animationInfo.y, 
					 animationInfo.radius, 
	                 animationInfo.startAngle, 
					 animationInfo.endAngle, 
					 animationInfo.counterClockwise);
      context.lineWidth = animationInfo.lineWidth;
      // line color
      context.strokeStyle = animationInfo.strokeStyle;
      context.stroke();
	 // context.save();
      //setTimeout(animateCurve(animationInfo),30);
	}


