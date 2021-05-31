
function Higher_Math_chapter_14_Q_14(context, x1,y1,x2,y2,x3,y3,x4,y4){
	
	var x_move = 80;
	var y_move = 150;
	var pointA =  new Point(x1,y1+y_move);
	var pointB =  new Point(x2,y2+y_move);
	var pointC =  new Point(x3,y3+y_move);
	var pointD =  new Point(x4,y4+y_move);
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	drawRectangle(context, retangle);
	displayText3(context,pointB.x+5,pointB.y-8,"মুদ্রা  নিক্ষেপ ");
	
	
	
	x_move = 100;
	 y_move = -130;
	
	var pointA1 =  new Point(pointA.x+x_move,pointA.y+y_move);
	var pointB1 =  new Point(pointB.x+x_move,pointB.y+y_move);
	var pointC1 =  new Point(pointC.x+x_move,pointC.y+y_move);
	var pointD1 =  new Point(pointD.x+x_move,pointD.y+y_move);
	var retangle_1 = new Rectangle(pointA1,pointB1,pointC1,pointD1);
	drawRectangle(context, retangle_1);
	displayText3(context,pointB1.x+5,pointB1.y-8,"H");
	drawLineBetweenTwoPoints(context,pointD,pointB1,"red");
	displayText4(context,pointA.x+25,pointA.y-50,"প্রথম নিক্ষেপ ");

	//------------------
	
	x_move = 130;
	 y_move = -70;
	
	var pointA11 =  new Point(pointA1.x+x_move,pointA1.y+y_move);
	var pointB11 =  new Point(pointB1.x+x_move,pointB1.y+y_move);
	var pointC11 =  new Point(pointC1.x+x_move,pointC1.y+y_move);
	var pointD11 =  new Point(pointD1.x+x_move,pointD1.y+y_move);
	var retangle_11 = new Rectangle(pointA11,pointB11,pointC11,pointD11);
	drawRectangle(context, retangle_11);
	displayText3(context,pointB11.x+5,pointB11.y-8,"H");
	drawLineBetweenTwoPoints(context,pointD1,pointB11,"red");
	displayText4(context,pointA1.x+45,pointA1.y-25,"দ্বিতীয় নিক্ষেপ ");
	
	////
	x_move = 130;
	 y_move = -50;
	
	var pointA111 =  new Point(pointA11.x+x_move,pointA11.y+y_move);
	var pointB111 =  new Point(pointB11.x+x_move,pointB11.y+y_move);
	var pointC111 =  new Point(pointC11.x+x_move,pointC11.y+y_move);
	var pointD111 =  new Point(pointD11.x+x_move,pointD11.y+y_move);
	var retangle_111 = new Rectangle(pointA111,pointB111,pointC111,pointD111);
	drawRectangle(context, retangle_111);
	displayText3(context,pointB111.x+5,pointB111.y-8,"H");
	drawLineBetweenTwoPoints(context,pointD11,pointB111,"red");
	displayText4(context,pointA11.x+45,pointA11.y-15,"তৃতীয় নিক্ষেপ ");
	
	
	x_move = 130;
	 y_move = 50;
	
	var pointA112 =  new Point(pointA11.x+x_move,pointA11.y+y_move);
	var pointB112 =  new Point(pointB11.x+x_move,pointB11.y+y_move);
	var pointC112 =  new Point(pointC11.x+x_move,pointC11.y+y_move);
	var pointD112 =  new Point(pointD11.x+x_move,pointD11.y+y_move);
	var retangle_112 = new Rectangle(pointA112,pointB112,pointC112,pointD112);
	drawRectangle(context, retangle_112);
	displayText3(context,pointB112.x+5,pointB112.y-8,"T");
	drawLineBetweenTwoPoints(context,pointC11,pointA112,"red");
	displayText4(context,pointA11.x+25,pointA11.y+55,"তৃতীয় নিক্ষেপ ");
////
	
	
	
	
	
	x_move = 130;
	 y_move = 70;
	
	var pointA12 =  new Point(pointA1.x+x_move,pointA1.y+y_move);
	var pointB12 =  new Point(pointB1.x+x_move,pointB1.y+y_move);
	var pointC12 =  new Point(pointC1.x+x_move,pointC1.y+y_move);
	var pointD12 =  new Point(pointD1.x+x_move,pointD1.y+y_move);
	var retangle_12 = new Rectangle(pointA12,pointB12,pointC12,pointD12);
	drawRectangle(context, retangle_12);
	displayText3(context,pointB12.x+5,pointB12.y-8,"T");
	drawLineBetweenTwoPoints(context,pointC1,pointA12,"red");
	
	displayText4(context,pointA1.x+35,pointA1.y+70,"দ্বিতীয় নিক্ষেপ");
	
	/////
	////
	
	x_move = 130;
	 y_move = -50;
	
	var pointA121 =  new Point(pointA12.x+x_move,pointA12.y+y_move);
	var pointB121 =  new Point(pointB12.x+x_move,pointB12.y+y_move);
	var pointC121 =  new Point(pointC12.x+x_move,pointC12.y+y_move);
	var pointD121 =  new Point(pointD12.x+x_move,pointD12.y+y_move);
	var retangle_121 = new Rectangle(pointA121,pointB121,pointC121,pointD121);
	drawRectangle(context, retangle_121);
	displayText3(context,pointB121.x+5,pointB121.y-8,"H");
	drawLineBetweenTwoPoints(context,pointD12,pointB121,"red");
	displayText4(context,pointA12.x+45,pointA12.y-15,"তৃতীয় নিক্ষেপ ");
	
	
	x_move = 130;
	 y_move = 70;
	
	var pointA122 =  new Point(pointA12.x+x_move,pointA12.y+y_move);
	var pointB122 =  new Point(pointB12.x+x_move,pointB12.y+y_move);
	var pointC122 =  new Point(pointC12.x+x_move,pointC12.y+y_move);
	var pointD122 =  new Point(pointD12.x+x_move,pointD12.y+y_move);
	var retangle_122 = new Rectangle(pointA122,pointB122,pointC122,pointD122);
	drawRectangle(context, retangle_122);
	displayText3(context,pointB122.x+5,pointB122.y-8,"T");
	drawLineBetweenTwoPoints(context,pointC12,pointA122,"red");
	displayText4(context,pointA12.x+25,pointA12.y+65,"তৃতীয় নিক্ষেপ ");
	
	

	
	
	
	 x_move = 100;
	 y_move = 130;
	
	var pointA2 =  new Point(pointA.x+x_move,pointA.y+y_move);
	var pointB2 =  new Point(pointB.x+x_move,pointB.y+y_move);
	var pointC2 =  new Point(pointC.x+x_move,pointC.y+y_move);
	var pointD2 =  new Point(pointD.x+x_move,pointD.y+y_move);
	var retangle_2 = new Rectangle(pointA2,pointB2,pointC2,pointD2);
	drawRectangle(context, retangle_2);
	displayText3(context,pointB2.x+5,pointB2.y-8,"T");
	drawLineBetweenTwoPoints(context,pointC,pointA2,"red");	
	displayText4(context,pointA.x+25,pointA.y+80,"প্রথম নিক্ষেপ");
	
	
	/////
	
	x_move = 130;
	 y_move = -50;
	
	var pointA21 =  new Point(pointA2.x+x_move,pointA2.y+y_move);
	var pointB21 =  new Point(pointB2.x+x_move,pointB2.y+y_move);
	var pointC21 =  new Point(pointC2.x+x_move,pointC2.y+y_move);
	var pointD21 =  new Point(pointD2.x+x_move,pointD2.y+y_move);
	var retangle_21 = new Rectangle(pointA21,pointB21,pointC21,pointD21);
	drawRectangle(context, retangle_21);
	displayText3(context,pointB21.x+5,pointB21.y-8,"H");
	drawLineBetweenTwoPoints(context,pointD2,pointB21,"red");
	displayText4(context,pointA2.x+40,pointA2.y-25,"দ্বিতীয় নিক্ষেপ");
	
	
	////
	x_move = 130;
	 y_move = -30;
	
	var pointA211 =  new Point(pointA21.x+x_move,pointA21.y+y_move);
	var pointB211 =  new Point(pointB21.x+x_move,pointB21.y+y_move);
	var pointC211 =  new Point(pointC21.x+x_move,pointC21.y+y_move);
	var pointD211 =  new Point(pointD12.x+x_move,pointD21.y+y_move);
	var retangle_211 = new Rectangle(pointA211,pointB211,pointC211,pointD211);
	drawRectangle(context, retangle_211);
	displayText3(context,pointB211.x+5,pointB211.y-8,"H");
	drawLineBetweenTwoPoints(context,pointD21,pointA211,"red");
	displayText4(context,pointC21.x-15,pointC21.y-45,"তৃতীয় নিক্ষেপ ");
	
	x_move = 130;
	 y_move = 30;
	
	var pointA212 =  new Point(pointA21.x+x_move,pointA21.y+y_move);
	var pointB212 =  new Point(pointB21.x+x_move,pointB21.y+y_move);
	var pointC212 =  new Point(pointC21.x+x_move,pointC21.y+y_move);
	var pointD212 =  new Point(pointD12.x+x_move,pointD21.y+y_move);
	var retangle_212 = new Rectangle(pointA212,pointB212,pointC212,pointD212);
	drawRectangle(context, retangle_212);
	displayText3(context,pointB212.x+5,pointB212.y-8,"T");
	drawLineBetweenTwoPoints(context,pointC21,pointB212,"red");	
   displayText4(context,pointC21.x+15,pointC21.y+5,"তৃতীয় নিক্ষেপ ");	
	
	///
	
	
	x_move = 130;
	 y_move = 50;
	
	var pointA22 =  new Point(pointA2.x+x_move,pointA2.y+y_move);
	var pointB22 =  new Point(pointB2.x+x_move,pointB2.y+y_move);
	var pointC22 =  new Point(pointC2.x+x_move,pointC2.y+y_move);
	var pointD22 =  new Point(pointD2.x+x_move,pointD2.y+y_move);
	var retangle_22 = new Rectangle(pointA22,pointB22,pointC22,pointD22);
	drawRectangle(context, retangle_22);
	displayText3(context,pointB22.x+5,pointB22.y-8,"T");
	drawLineBetweenTwoPoints(context,pointC2,pointA22,"red");
	displayText4(context,pointA2.x+40,pointA2.y+75,"দ্বিতীয় নিক্ষেপ");
	
	x_move = 130;
	 y_move = -30;
	
	var pointA221 =  new Point(pointA22.x+x_move,pointA22.y+y_move);
	var pointB221 =  new Point(pointB22.x+x_move,pointB22.y+y_move);
	var pointC221 =  new Point(pointC22.x+x_move,pointC22.y+y_move);
	var pointD221 =  new Point(pointD22.x+x_move,pointD22.y+y_move);
	var retangle_221 = new Rectangle(pointA221,pointB221,pointC221,pointD221);
	drawRectangle(context, retangle_221);
	displayText3(context,pointB221.x+5,pointB221.y-8,"H");
	drawLineBetweenTwoPoints(context,pointD22,pointA221,"red");
	displayText4(context,pointC22.x-10,pointC22.y-45,"তৃতীয় নিক্ষেপ ");
	
	
	x_move = 130;
	 y_move = 30;
	
	var pointA222 =  new Point(pointA22.x+x_move,pointA22.y+y_move);
	var pointB222 =  new Point(pointB22.x+x_move,pointB22.y+y_move);
	var pointC222 =  new Point(pointC22.x+x_move,pointC22.y+y_move);
	var pointD222 =  new Point(pointD22.x+x_move,pointD22.y+y_move);
	var retangle_222 = new Rectangle(pointA222,pointB222,pointC222,pointD222);
	drawRectangle(context, retangle_222);
	displayText3(context,pointB222.x+5,pointB222.y-8,"T");
	drawLineBetweenTwoPoints(context,pointC22,pointB222,"red");
	displayText4(context,pointC22.x,pointC22.y+30,"তৃতীয় নিক্ষেপ ");
	
	
	
}


function Higher_Math_chapter_14_Q_15(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	drawRectangle(context, retangle);
	displayText3(context,pointB.x+15,pointB.y-8,"ঢাকা ");
	DrawFractionNumber(context,pointA.x+40,pointA.y-20,0,5,9);
	displayText4(context,pointA.x+20,pointA.y-10,"ট্রেনে");
	
	var y_length=y2-y2;
	var x_length=x3-x2;
	var x_move = 80;
	var y_move = -60;
	
	var pointA1 =  new Point(pointA.x+x_move,pointA.y+y_move);
	var pointB1 =  new Point(pointB.x+x_move,pointB.y+y_move);
	var pointC1 =  new Point(pointC.x+x_move,pointC.y+y_move);
	var pointD1 =  new Point(pointD.x+x_move,pointD.y+y_move);
	var retangle_1 = new Rectangle(pointA1,pointB1,pointC1,pointD1);
	drawRectangle(context, retangle_1);
	displayText3(context,pointB1.x+15,pointB1.y-8,"রাজশাহী");
	drawLineBetweenTwoPoints(context,pointD,pointB1,"red");
	DrawFractionNumber(context,pointA1.x+50,pointA1.y-25,0,2,7);
	displayText4(context,pointA1.x+30,pointA1.y-15,"বাসে");
	
	 x_move = 180;
	 y_move = -115;
	 
	 DrawFractionNumber(context,pointA1.x+60,pointA1.y+60,0,5,7);
	displayText4(context,pointA1.x+20,pointA1.y+60,"বাসে নয়");
	
	var pointA2 =  new Point(pointA.x+x_move,pointA.y+y_move);
	var pointB2 =  new Point(pointB.x+x_move,pointB.y+y_move);
	var pointC2 =  new Point(pointC.x+x_move,pointC.y+y_move);
	var pointD2 =  new Point(pointD.x+x_move,pointD.y+y_move);
	var retangle_2 = new Rectangle(pointA2,pointB2,pointC2,pointD2);
	drawRectangle(context, retangle_2);
	displayText3(context,pointB2.x+15,pointB2.y-8,"খুলনা");
	drawLineBetweenTwoPoints(context,pointD1,pointB2,"red");
	
	
	 x_move = 180;
	 y_move = -35;
	
	var pointA3 =  new Point(pointA.x+x_move,pointA.y+y_move);
	var pointB3 =  new Point(pointB.x+x_move,pointB.y+y_move);
	var pointC3 =  new Point(pointC.x+x_move,pointC.y+y_move);
	var pointD3 =  new Point(pointD.x+x_move,pointD.y+y_move);
	var retangle_3 = new Rectangle(pointA3,pointB3,pointC3,pointD3);
	drawRectangle(context, retangle_3);
	displayText3(context,pointB3.x+15,pointB3.y-8,"খুলনা");
	drawLineBetweenTwoPoints(context,pointC1,pointB3,"red");
	
	
	
	
	 x_move = 80;
	 y_move = 60;
	 
	 DrawFractionNumber(context,pointA.x+45,pointA.y+55,0,4,9);
	displayText4(context,pointA.x+5,pointA.y+55,"ট্রেনে নয়");
	
	var pointA5 =  new Point(pointA.x+x_move,pointA.y+y_move);
	var pointB5 =  new Point(pointB.x+x_move,pointB.y+y_move);
	var pointC5 =  new Point(pointC.x+x_move,pointC.y+y_move);
	var pointD5 =  new Point(pointD.x+x_move,pointD.y+y_move);
	var retangle_5 = new Rectangle(pointA5,pointB5,pointC5,pointD5);
	drawRectangle(context, retangle_5);
	displayText3(context,pointB5.x+15,pointB5.y-8,"রাজশাহী");
	drawLineBetweenTwoPoints(context,pointC,pointA5,"red");
	DrawFractionNumber(context,pointA5.x+80,pointA5.y+5,0,2,7);
	displayText4(context,pointA5.x+60,pointA5.y-10,"বাসে ");
	
	
	
	 x_move = 180;
	 y_move = 115;
	 DrawFractionNumber(context,pointA5.x+70,pointA5.y+65,0,5,7);
	displayText4(context,pointA5.x+25,pointA5.y+70,"বাসে  নয়");
	
	
	var pointA6 =  new Point(pointA.x+x_move,pointA.y+y_move);
	var pointB6 =  new Point(pointB.x+x_move,pointB.y+y_move);
	var pointC6 =  new Point(pointC.x+x_move,pointC.y+y_move);
	var pointD6 =  new Point(pointD.x+x_move,pointD.y+y_move);
	var retangle_6 = new Rectangle(pointA6,pointB6,pointC6,pointD6);
	drawRectangle(context, retangle_6);
	displayText3(context,pointB6.x+15,pointB6.y-8,"খুলনা");
	drawLineBetweenTwoPoints(context,pointC5,pointA6,"red");
	
	
	
	 x_move = 180;
	 y_move = 15;
	
	var pointA7 =  new Point(pointA.x+x_move,pointA.y+y_move);
	var pointB7 =  new Point(pointB.x+x_move,pointB.y+y_move);
	var pointC7 =  new Point(pointC.x+x_move,pointC.y+y_move);
	var pointD7 =  new Point(pointD.x+x_move,pointD.y+y_move);
	var retangle_7 = new Rectangle(pointA7,pointB7,pointC7,pointD7);
	drawRectangle(context, retangle_7);
	displayText3(context,pointB7.x+15,pointB7.y-8,"খুলনা");
	drawLineBetweenTwoPoints(context,pointD5,pointB7,"red");
	
	
	
}



function Higher_Math_chapter_14_Q_16(context, x1,y1,x2,y2,x3,y3,x4,y4){
	
	var x_move = 80;
	var y_move = 150;
	var pointA =  new Point(x1,y1+y_move);
	var pointB =  new Point(x2,y2+y_move);
	var pointC =  new Point(x3,y3+y_move);
	var pointD =  new Point(x4,y4+y_move);
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	drawRectangle(context, retangle);
	displayText3(context,pointB.x+15,pointB.y-8,"ঢাকা ");
	//DrawFractionNumber(context,pointA.x+60,pointA.y-80,0,2,9);
	//displayText4(context,pointA.x+40,pointA.y-80,"ট্রেনে");
	
	
	
	
	
	
	x_move = 130;
	 y_move = -180;
	
	var pointA1 =  new Point(pointA.x+x_move,pointA.y+y_move);
	var pointB1 =  new Point(pointB.x+x_move,pointB.y+y_move);
	var pointC1 =  new Point(pointC.x+x_move,pointC.y+y_move);
	var pointD1 =  new Point(pointD.x+x_move,pointD.y+y_move);
	var retangle_1 = new Rectangle(pointA1,pointB1,pointC1,pointD1);
	drawRectangle(context, retangle_1);
	displayText3(context,pointB1.x+15,pointB1.y-8,"রাজশাহী");
	drawLineBetweenTwoPoints(context,pointD,pointB1,"red");
	
	DrawFractionNumber(context,pointA.x+60,pointA.y-80,0,2,9);
	displayText4(context,pointA.x+30,pointA.y-75,"ট্রেনে");

	//------------------
	
	x_move = 130;
	 y_move = -70;
	
	var pointA11 =  new Point(pointA1.x+x_move,pointA1.y+y_move);
	var pointB11 =  new Point(pointB1.x+x_move,pointB1.y+y_move);
	var pointC11 =  new Point(pointC1.x+x_move,pointC1.y+y_move);
	var pointD11 =  new Point(pointD1.x+x_move,pointD1.y+y_move);
	var retangle_11 = new Rectangle(pointA11,pointB11,pointC11,pointD11);
	drawRectangle(context, retangle_11);
	displayText3(context,pointB11.x+15,pointB11.y-8,"খুলনা");
	drawLineBetweenTwoPoints(context,pointD1,pointB11,"red");
	
	DrawFractionNumber(context,pointA1.x+65,pointA1.y-30,0,2,5);
	displayText4(context,pointA1.x+40,pointA1.y-25,"বাসে");
	
	
	x_move = 130;
	 y_move = 70;
	
	var pointA12 =  new Point(pointA1.x+x_move,pointA1.y+y_move);
	var pointB12 =  new Point(pointB1.x+x_move,pointB1.y+y_move);
	var pointC12 =  new Point(pointC1.x+x_move,pointC1.y+y_move);
	var pointD12 =  new Point(pointD1.x+x_move,pointD1.y+y_move);
	var retangle_12 = new Rectangle(pointA12,pointB12,pointC12,pointD12);
	drawRectangle(context, retangle_12);
	displayText3(context,pointB12.x+15,pointB12.y-8,"খুলনা");
	drawLineBetweenTwoPoints(context,pointC1,pointA12,"red");
	
	DrawFractionNumber(context,pointA1.x+65,pointA1.y+70,0,3,7);
	displayText4(context,pointA1.x+40,pointA1.y+75,"ট্রেনে");
	
	
	
	//--------------
	
	
	
	 x_move = 130;
	 y_move = 0;
	
	var pointA2 =  new Point(pointA.x+x_move,pointA.y+y_move);
	var pointB2 =  new Point(pointB.x+x_move,pointB.y+y_move);
	var pointC2 =  new Point(pointC.x+x_move,pointC.y+y_move);
	var pointD2 =  new Point(pointD.x+x_move,pointD.y+y_move);
	var retangle_2 = new Rectangle(pointA2,pointB2,pointC2,pointD2);
	drawRectangle(context, retangle_2);
	displayText3(context,pointB2.x+15,pointB2.y-8,"রাজশাহী");
	var pointB2Temp = new Point(pointB2.x,pointB2.y-15);
	var pointATemp = new Point(pointC.x,pointC.y-15);
	drawLineBetweenTwoPoints(context,pointATemp,pointB2Temp,"red");
	
	DrawFractionNumber(context,pointA.x+100,pointA.y-5,0,2,7);
	displayText4(context,pointA.x+75,pointA.y+3,"বাসে");
	
	
	/////
	
	x_move = 130;
	 y_move = -70;
	
	var pointA21 =  new Point(pointA2.x+x_move,pointA2.y+y_move);
	var pointB21 =  new Point(pointB2.x+x_move,pointB2.y+y_move);
	var pointC21 =  new Point(pointC2.x+x_move,pointC2.y+y_move);
	var pointD21 =  new Point(pointD2.x+x_move,pointD2.y+y_move);
	var retangle_21 = new Rectangle(pointA21,pointB21,pointC21,pointD21);
	drawRectangle(context, retangle_21);
	displayText3(context,pointB21.x+15,pointB21.y-8,"খুলনা");
	drawLineBetweenTwoPoints(context,pointD2,pointB21,"red");
	
	DrawFractionNumber(context,pointA2.x+65,pointA2.y-30,0,2,5);
	displayText4(context,pointA2.x+40,pointA2.y-25,"বাসে");
	
	
	x_move = 130;
	 y_move = 70;
	
	var pointA22 =  new Point(pointA2.x+x_move,pointA2.y+y_move);
	var pointB22 =  new Point(pointB2.x+x_move,pointB2.y+y_move);
	var pointC22 =  new Point(pointC2.x+x_move,pointC2.y+y_move);
	var pointD22 =  new Point(pointD2.x+x_move,pointD2.y+y_move);
	var retangle_22 = new Rectangle(pointA22,pointB22,pointC22,pointD22);
	drawRectangle(context, retangle_22);
	displayText3(context,pointB22.x+15,pointB22.y-8,"খুলনা");
	drawLineBetweenTwoPoints(context,pointC2,pointA22,"red");
	
	DrawFractionNumber(context,pointA2.x+65,pointA2.y+70,0,3,7);
	displayText4(context,pointA2.x+40,pointA2.y+75,"ট্রেনে");
	
	
	
	//--------------
	
	
	
	x_move = 130;
	 y_move = 180;
	
	var pointA3 =  new Point(pointA.x+x_move,pointA.y+y_move);
	var pointB3 =  new Point(pointB.x+x_move,pointB.y+y_move);
	var pointC3 =  new Point(pointC.x+x_move,pointC.y+y_move);
	var pointD3 =  new Point(pointD.x+x_move,pointD.y+y_move);
	var retangle_3 = new Rectangle(pointA3,pointB3,pointC3,pointD3);
	drawRectangle(context, retangle_3);
	displayText3(context,pointB3.x+15,pointB3.y-8,"রাজশাহী");
	drawLineBetweenTwoPoints(context,pointC,pointA3,"red");
	DrawFractionNumber(context,pointA.x+60,pointA.y+100,0,1,9);
	displayText4(context,pointA.x+35,pointA.y+105,"প্লেনে");
	
	
	/////
	
	x_move = 130;
	 y_move = -70;
	
	var pointA31 =  new Point(pointA3.x+x_move,pointA3.y+y_move);
	var pointB31 =  new Point(pointB3.x+x_move,pointB3.y+y_move);
	var pointC31 =  new Point(pointC3.x+x_move,pointC3.y+y_move);
	var pointD31 =  new Point(pointD3.x+x_move,pointD3.y+y_move);
	var retangle_31 = new Rectangle(pointA31,pointB31,pointC31,pointD31);
	drawRectangle(context, retangle_31);
	displayText3(context,pointB31.x+15,pointB31.y-8,"খুলনা");
	drawLineBetweenTwoPoints(context,pointD3,pointB31,"red");
	
	DrawFractionNumber(context,pointA3.x+65,pointA3.y-30,0,2,5);
	displayText4(context,pointA3.x+40,pointA3.y-25,"বাসে");
	
	
	x_move = 130;
	 y_move = 70;
	
	var pointA32 =  new Point(pointA3.x+x_move,pointA3.y+y_move);
	var pointB32 =  new Point(pointB3.x+x_move,pointB3.y+y_move);
	var pointC32 =  new Point(pointC3.x+x_move,pointC3.y+y_move);
	var pointD32 =  new Point(pointD3.x+x_move,pointD3.y+y_move);
	var retangle_32 = new Rectangle(pointA32,pointB32,pointC32,pointD32);
	drawRectangle(context, retangle_32);
	displayText3(context,pointB32.x+15,pointB32.y-8,"খুলনা");
	drawLineBetweenTwoPoints(context,pointC3,pointA32,"red");
	
	DrawFractionNumber(context,pointA3.x+65,pointA3.y+70,0,3,7);
	displayText4(context,pointA3.x+40,pointA3.y+75,"ট্রেনে");
	
	
}

function chapter_16_4_Q_9(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var pointE =  new Point(pointA.x,pointA.y-60);
	var pointF =  new Point(pointB.x,pointB.y-60);
	var pointG =  new Point(pointC.x,pointC.y-60);
	var pointH =  new Point(pointD.x,pointD.y-60);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	var retangle2 = new Rectangle(pointE,pointF,pointG,pointH);
	drawRectangle(context, retangle);
	drawRectangle(context, retangle2);
	drawLineBetweenTwoPoints(context,pointA,pointE,"red");
	drawLineBetweenTwoPoints(context,pointB,pointF,"red");
	drawLineBetweenTwoPoints(context,pointC,pointG,"red");
	drawLineBetweenTwoPoints(context,pointD,pointH,"red");
	drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
	drawLineBetweenTwoPoints(context,pointA,pointG,"green");
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context,pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x+5,pointD.y-5);
	
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	setPointName(pointG,"G");
	setPointName(pointH,"H");
	displayPointName(context,pointE,pointE.x-15,pointE.y);
	displayPointName(context,pointF,pointF.x+5,pointF.y+15);
	displayPointName(context,pointG,pointG.x+5,pointG.y);
	displayPointName(context,pointH,pointH.x,pointH.y-5);

}

function Higher_Math_chapter_13_Q_7(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var pointE =  new Point(pointA.x,pointA.y-60);
	var pointF =  new Point(pointB.x,pointB.y-60);
	var pointG =  new Point(pointC.x,pointC.y-60);
	var pointH =  new Point(pointD.x,pointD.y-60);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	var retangle2 = new Rectangle(pointE,pointF,pointG,pointH);
	drawRectangle(context, retangle);
	drawRectangle(context, retangle2);
	drawLineBetweenTwoPoints(context,pointA,pointE,"red");
	drawLineBetweenTwoPoints(context,pointB,pointF,"red");
	drawLineBetweenTwoPoints(context,pointC,pointG,"red");
	drawLineBetweenTwoPoints(context,pointD,pointH,"red");
	drawLineBetweenTwoPoints(context,pointB,pointD,"blue");
	drawLineBetweenTwoPoints(context,pointB,pointH,"green");
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context,pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x+5,pointD.y-5);
	
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	setPointName(pointG,"G");
	setPointName(pointH,"H");
	displayPointName(context,pointE,pointE.x-15,pointE.y);
	displayPointName(context,pointF,pointF.x+5,pointF.y+15);
	displayPointName(context,pointG,pointG.x+5,pointG.y);
	displayPointName(context,pointH,pointH.x,pointH.y-5);

}

function Higher_Math_chapter_13_Q_8(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var pointE =  new Point(pointA.x,pointA.y-60);
	var pointF =  new Point(pointB.x,pointB.y-60);
	var pointG =  new Point(pointC.x,pointC.y-60);
	var pointH =  new Point(pointD.x,pointD.y-60);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	var retangle2 = new Rectangle(pointE,pointF,pointG,pointH);
	drawRectangle(context, retangle);
	drawRectangle(context, retangle2);
	drawLineBetweenTwoPoints(context,pointA,pointE,"red");
	drawLineBetweenTwoPoints(context,pointB,pointF,"red");
	drawLineBetweenTwoPoints(context,pointC,pointG,"red");
	drawLineBetweenTwoPoints(context,pointD,pointH,"red");
	//drawLineBetweenTwoPoints(context,pointB,pointD,"blue");
	//drawLineBetweenTwoPoints(context,pointB,pointH,"green");
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context,pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x+5,pointD.y-5);
	
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	setPointName(pointG,"G");
	setPointName(pointH,"H");
	displayPointName(context,pointE,pointE.x-15,pointE.y);
	displayPointName(context,pointF,pointF.x+5,pointF.y+15);
	displayPointName(context,pointG,pointG.x+5,pointG.y);
	displayPointName(context,pointH,pointH.x,pointH.y-5);

}

function Higher_Math_chapter_13_Q_9(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var pointE =  new Point(pointA.x,pointA.y-60);
	var pointF =  new Point(pointB.x,pointB.y-60);
	var pointG =  new Point(pointC.x,pointC.y-60);
	var pointH =  new Point(pointD.x,pointD.y-60);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	var retangle2 = new Rectangle(pointE,pointF,pointG,pointH);
	drawRectangle(context, retangle);
	drawRectangle(context, retangle2);
	drawLineBetweenTwoPoints(context,pointA,pointE,"red");
	drawLineBetweenTwoPoints(context,pointB,pointF,"red");
	drawLineBetweenTwoPoints(context,pointC,pointG,"red");
	drawLineBetweenTwoPoints(context,pointD,pointH,"red");
	drawLineBetweenTwoPoints(context,pointB,pointD,"blue");
	drawLineBetweenTwoPoints(context,pointB,pointH,"green");
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context,pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x+5,pointD.y-5);
	
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	setPointName(pointG,"G");
	setPointName(pointH,"H");
	displayPointName(context,pointE,pointE.x-15,pointE.y);
	displayPointName(context,pointF,pointF.x+5,pointF.y+15);
	displayPointName(context,pointG,pointG.x+5,pointG.y);
	displayPointName(context,pointH,pointH.x,pointH.y-5);

}

function Higher_Math_chapter_13_Q_11(context, x1,y1){

var centerX =  new Point(x1,y1);
	setPointName(centerX,"X");	
	//displayPointName(context,centerX,centerX.x,centerX.y);
	
	var oval = new Oval(centerX,45,20);
	//drawOval( context,oval,"green");
	//drawPoint(context,centerX, "blue");
	
	var pointM=  pointOnEclipseAtAnAngle(oval,0);
	setPointName(pointM,"M");
	//displayPointName(context,pointM,pointM.x,pointM.y-5);
	//drawPoint(context,pointM, "blue");
	
	var pointN=  pointOnEclipseAtAnAngle(oval,180);
	//drawPoint(context,pointN, "blue");
	//setPointName(pointN,"N");
	//displayPointName(context,pointN,pointN.x-15,pointN.y);
	var pointA = midPointBetweenTwoPoint(pointM, pointN );
	drawPoint(context,pointA, "blue");
	setPointName(pointA,"A");
	//displayPointName(context,pointA,pointA.x,pointA.y-5);
	

	 centerO =  new Point(centerX.x,centerX.y+30);
	context.translate(0,centerO.y);
	var oval2 = new Oval(centerO,45,20);
	drawOval( context,oval2,"green");
	
	var pointB=  pointOnEclipseAtAnAngle(oval2,0);
	setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x+5,pointB.y);
	drawPoint(context,pointB, "blue");
	
	var pointC=  pointOnEclipseAtAnAngle(oval2,180);
	drawPoint(context,pointC, "blue");
	setPointName(pointC,"C");
	displayPointName(context,pointC,pointC.x-15,pointC.y);
	
	var pointO = midPointBetweenTwoPoint(pointC, pointB );
	drawPoint(context,pointO, "blue");
	setPointName(pointO,"O");
	displayPointName(context,pointO,pointO.x,pointO.y+15);
	
	var pointD1 =  new Point(centerO.x-45,centerO.y-50);
	var pointB1 =  new Point(centerO.x-45,centerO.y-145);
	//drawPoint(context,pointB1 , "red");
	//drawPoint(context,pointD1 , "red");
	//drawLineBetweenTwoPoints(context,pointB1,pointD1,"red");
	
		
	var centerR =  new Point(centerO.x+45,centerO.y-50);
	var centerS =  new Point(centerO.x+45,centerO.y-145);
	//drawPoint(context,centerR , "red");
//	drawPoint(context,centerS , "red");
	//drawLineBetweenTwoPoints(context,centerR,centerS,"red");
	
	
	var centerO1 =  new Point(centerO.x,centerO.y-185);
	var centerO2 =  new Point(centerO.x,centerO.y-60);
	drawPoint(context,centerO1 , "blue")
	setPointName(centerO1,"A");
	displayPointName(context,centerO1,centerO1.x+5,centerO1.y);
	
	
	
   drawLineBetweenTwoPoints(context,centerO1,centerO2,"red");
    drawLineBetweenTwoPoints(context,centerO2,pointC,"red");
	// drawLineBetweenTwoPoints(context,centerO2,pointD1,"red");
	drawLineBetweenTwoPoints(context,centerO1,pointB,"red");
	drawLineBetweenTwoPoints(context,centerO1,pointC,"red");
	
	displayText(context,pointC.x+20,pointC.y+15,"r");
	displayText(context,pointC.x,pointC.y-45,"L");
	displayText(context,centerO2.x+5,centerO2.y-45,"h");
	

}


function Higher_Math_chapter_13_Q_12(context, x1,y1){

var centerX =  new Point(x1,y1);
	setPointName(centerX,"X");	
	//displayPointName(context,centerX,centerX.x,centerX.y);
	
	var oval = new Oval(centerX,45,20);
	//drawOval( context,oval,"green");
	//drawPoint(context,centerX, "blue");
	
	var pointM=  pointOnEclipseAtAnAngle(oval,0);
	setPointName(pointM,"M");
	//displayPointName(context,pointM,pointM.x,pointM.y-5);
	//drawPoint(context,pointM, "blue");
	
	var pointN=  pointOnEclipseAtAnAngle(oval,180);
	//drawPoint(context,pointN, "blue");
	//setPointName(pointN,"N");
	//displayPointName(context,pointN,pointN.x-15,pointN.y);
	var pointA = midPointBetweenTwoPoint(pointM, pointN );
	drawPoint(context,pointA, "blue");
	setPointName(pointA,"A");
	//displayPointName(context,pointA,pointA.x,pointA.y-5);
	

	 centerO =  new Point(centerX.x,centerX.y+30);
	context.translate(0,centerO.y);
	var oval2 = new Oval(centerO,45,20);
	drawOval( context,oval2,"green");
	
	var pointB=  pointOnEclipseAtAnAngle(oval2,0);
	setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x+5,pointB.y);
	drawPoint(context,pointB, "blue");
	
	var pointC=  pointOnEclipseAtAnAngle(oval2,180);
	drawPoint(context,pointC, "blue");
	setPointName(pointC,"C");
	displayPointName(context,pointC,pointC.x-15,pointC.y);
	
	var pointO = midPointBetweenTwoPoint(pointC, pointB );
	drawPoint(context,pointO, "blue");
	setPointName(pointO,"O");
	displayPointName(context,pointO,pointO.x,pointO.y+15);
	
	var pointD1 =  new Point(centerO.x-45,centerO.y-50);
	var pointB1 =  new Point(centerO.x-45,centerO.y-145);
	//drawPoint(context,pointB1 , "red");
	//drawPoint(context,pointD1 , "red");
	//drawLineBetweenTwoPoints(context,pointB1,pointD1,"red");
	
		
	var centerR =  new Point(centerO.x+45,centerO.y-50);
	var centerS =  new Point(centerO.x+45,centerO.y-145);
	//drawPoint(context,centerR , "red");
//	drawPoint(context,centerS , "red");
	//drawLineBetweenTwoPoints(context,centerR,centerS,"red");
	
	
	var centerO1 =  new Point(centerO.x,centerO.y-185);
	var centerO2 =  new Point(centerO.x,centerO.y-60);
	drawPoint(context,centerO1 , "blue")
	setPointName(centerO1,"A");
	displayPointName(context,centerO1,centerO1.x+5,centerO1.y);
	
	
	
   drawLineBetweenTwoPoints(context,centerO1,centerO2,"red");
    drawLineBetweenTwoPoints(context,centerO2,pointC,"red");
	// drawLineBetweenTwoPoints(context,centerO2,pointD1,"red");
	drawLineBetweenTwoPoints(context,centerO1,pointB,"red");
	drawLineBetweenTwoPoints(context,centerO1,pointC,"red");
	
	displayText(context,pointC.x+20,pointC.y+15,"r");
	displayText(context,pointC.x,pointC.y-45,"L");
	displayText(context,centerO2.x+5,centerO2.y-45,"h");
	

}

function Higher_Math_chapter_13_Q_21(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var pointE =  new Point(pointA.x,pointA.y-60);
	var pointF =  new Point(pointB.x,pointB.y-60);
	var pointG =  new Point(pointC.x,pointC.y-60);
	var pointH =  new Point(pointD.x,pointD.y-60);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	var retangle2 = new Rectangle(pointE,pointF,pointG,pointH);
	drawRectangle(context, retangle);
	drawRectangle(context, retangle2);
	drawLineBetweenTwoPoints(context,pointA,pointE,"red");
	drawLineBetweenTwoPoints(context,pointB,pointF,"red");
	drawLineBetweenTwoPoints(context,pointC,pointG,"red");
	drawLineBetweenTwoPoints(context,pointD,pointH,"red");
	//drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
	//drawLineBetweenTwoPoints(context,pointA,pointG,"green");
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context,pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x+5,pointD.y-5);
	
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	setPointName(pointG,"G");
	setPointName(pointH,"H");
	displayPointName(context,pointE,pointE.x-15,pointE.y);
	displayPointName(context,pointF,pointF.x+5,pointF.y+15);
	displayPointName(context,pointG,pointG.x+5,pointG.y);
	displayPointName(context,pointH,pointH.x,pointH.y-5);
	
	var fillcolor ='rgba(205,229,255,0.5)';
	var rectangle4 = new Rectangle(pointH,pointD,pointC,pointG);
	drawRectangleWithFillColor(context,rectangle4,fillcolor)
	
	
	fillcolor ='rgba(255,128,191,0.5)';
	var rectangle5 = new Rectangle(pointE,pointA,pointD,pointH);
	drawRectangleWithFillColor(context,rectangle5,fillcolor)
	
	fillcolor ='rgba(255,128,191,0.5)';
//	var rectangle5 = new Rectangle(pointE,pointA,pointD,pointH);
	drawRectangleWithFillColor(context,retangle,fillcolor)

}


function Higher_Math_chapter_13_Q_22(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	drawRectangle(context, retangle);
	displayText(context,x2+30,y2+20,"120 মিটার ");
	writeRotatedText2(context,"90 মিটার",pointB,30,-5,-Math.PI/2);
	
	// for inner area
	var pointA2 =  new Point(x1+20,y1+20);
	var pointB2 =  new Point(x2+20,y2-20);
	var pointC2 =  new Point(x3-20,y3-20);
	var pointD2 =  new Point(x4-20,y4+20);
	
	var retangle2 = new Rectangle(pointA2,pointB2,pointC2,pointD2);
	drawRectangle(context, retangle2);
	displayText(context,x1+30,y1+20,"25 সে.মি. ");
	writeRotatedText(context,"25 সে.মি.",pointD,50,18,Math.PI/2);

	
}


function Higher_Math_chapter_13_Q_23(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var pointE =  new Point(pointA.x,pointA.y-60);
	var pointF =  new Point(pointB.x,pointB.y-60);
	var pointG =  new Point(pointC.x,pointC.y-60);
	var pointH =  new Point(pointD.x,pointD.y-60);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	var retangle2 = new Rectangle(pointE,pointF,pointG,pointH);
	drawRectangle(context, retangle);
	drawRectangle(context, retangle2);
	drawLineBetweenTwoPoints(context,pointA,pointE,"red");
	drawLineBetweenTwoPoints(context,pointB,pointF,"red");
	drawLineBetweenTwoPoints(context,pointC,pointG,"red");
	drawLineBetweenTwoPoints(context,pointD,pointH,"red");
	drawLineBetweenTwoPoints(context,pointB,pointD,"blue");
	drawLineBetweenTwoPoints(context,pointB,pointH,"green");
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context,pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x+5,pointD.y-5);
	
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	setPointName(pointG,"G");
	setPointName(pointH,"H");
	displayPointName(context,pointE,pointE.x-15,pointE.y);
	displayPointName(context,pointF,pointF.x+5,pointF.y+15);
	displayPointName(context,pointG,pointG.x+5,pointG.y);
	displayPointName(context,pointH,pointH.x,pointH.y-5);

}


function Higher_Math_chapter_13_Q_24(context, x1,y1){

var centerX =  new Point(x1,y1);
	setPointName(centerX,"X");	
	//displayPointName(context,centerX,centerX.x,centerX.y);
	
	var oval = new Oval(centerX,45,20);
	//drawOval( context,oval,"green");
	//drawPoint(context,centerX, "blue");
	
	var pointM=  pointOnEclipseAtAnAngle(oval,0);
	setPointName(pointM,"M");
	//displayPointName(context,pointM,pointM.x,pointM.y-5);
	//drawPoint(context,pointM, "blue");
	
	var pointN=  pointOnEclipseAtAnAngle(oval,180);
	//drawPoint(context,pointN, "blue");
	//setPointName(pointN,"N");
	//displayPointName(context,pointN,pointN.x-15,pointN.y);
	var pointA = midPointBetweenTwoPoint(pointM, pointN );
	drawPoint(context,pointA, "blue");
	setPointName(pointA,"A");
	//displayPointName(context,pointA,pointA.x,pointA.y-5);
	

	 centerO =  new Point(centerX.x,centerX.y+30);
	context.translate(0,centerO.y);
	var oval2 = new Oval(centerO,45,20);
	drawOval( context,oval2,"green");
	
	var pointB=  pointOnEclipseAtAnAngle(oval2,0);
	setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x+5,pointB.y);
	drawPoint(context,pointB, "blue");
	
	var pointC=  pointOnEclipseAtAnAngle(oval2,180);
	drawPoint(context,pointC, "blue");
	setPointName(pointC,"C");
	displayPointName(context,pointC,pointC.x-15,pointC.y);
	
	var pointO = midPointBetweenTwoPoint(pointC, pointB );
	drawPoint(context,pointO, "blue");
	setPointName(pointO,"O");
	displayPointName(context,pointO,pointO.x,pointO.y+15);
	
	var pointD1 =  new Point(centerO.x-45,centerO.y-50);
	var pointB1 =  new Point(centerO.x-45,centerO.y-145);
	//drawPoint(context,pointB1 , "red");
	//drawPoint(context,pointD1 , "red");
	//drawLineBetweenTwoPoints(context,pointB1,pointD1,"red");
	
		
	var centerR =  new Point(centerO.x+45,centerO.y-50);
	var centerS =  new Point(centerO.x+45,centerO.y-145);
	//drawPoint(context,centerR , "red");
//	drawPoint(context,centerS , "red");
	//drawLineBetweenTwoPoints(context,centerR,centerS,"red");
	
	
	var centerO1 =  new Point(centerO.x,centerO.y-185);
	var centerO2 =  new Point(centerO.x,centerO.y-60);
	drawPoint(context,centerO1 , "blue")
	setPointName(centerO1,"A");
	displayPointName(context,centerO1,centerO1.x+5,centerO1.y);
	
	
	
   drawLineBetweenTwoPoints(context,centerO1,centerO2,"red");
    drawLineBetweenTwoPoints(context,centerO2,pointC,"red");
	// drawLineBetweenTwoPoints(context,centerO2,pointD1,"red");
	drawLineBetweenTwoPoints(context,centerO1,pointB,"red");
	drawLineBetweenTwoPoints(context,centerO1,pointC,"red");
	
	displayText(context,pointC.x+20,pointC.y+15,"r");
	displayText(context,pointC.x,pointC.y-45,"L");
	displayText(context,centerO2.x+5,centerO2.y-45,"h");
	

}


function Higher_Math_chapter_13_Q_25(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var pointE =  new Point(pointA.x,pointA.y-80);
	var pointF =  new Point(pointB.x,pointB.y-80);
	var pointG =  new Point(pointC.x,pointC.y-80);
	var pointH =  new Point(pointD.x,pointD.y-80);
	
	//var pointK =  new Point(pointB.x+30,pointB.y-30);
	var pointL =  new Point(pointC.x+30,pointC.y+30);
	var pointM =  new Point(pointL.x,pointL.y-80);
	drawLineBetweenTwoPoints(context,pointC,pointL,"red");
	drawLineBetweenTwoPoints(context,pointB,pointL,"red");
	drawLineBetweenTwoPoints(context,pointG,pointM,"red");
	drawLineBetweenTwoPoints(context,pointF,pointM,"red");
	drawLineBetweenTwoPoints(context,pointL,pointM,"red");
	setPointName(pointL,"L");
	setPointName(pointM,"M");
	displayPointName(context,pointL,pointL.x+5,pointL.y-5);
	displayPointName(context,pointM,pointM.x+5,pointM.y-5);
	
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	var retangle2 = new Rectangle(pointE,pointF,pointG,pointH);
	drawRectangle(context, retangle);
	drawRectangle(context, retangle2);
	drawLineBetweenTwoPoints(context,pointA,pointE,"red");
	drawLineBetweenTwoPoints(context,pointB,pointF,"red");
	drawLineBetweenTwoPoints(context,pointC,pointG,"red");
	drawLineBetweenTwoPoints(context,pointD,pointH,"red");
	//drawLineBetweenTwoPoints(context,pointB,pointD,"blue");
	//drawLineBetweenTwoPoints(context,pointB,pointH,"green");
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context,pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x+5,pointD.y-5);
	
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	setPointName(pointG,"G");
	setPointName(pointH,"H");
	displayPointName(context,pointE,pointE.x-15,pointE.y);
	displayPointName(context,pointF,pointF.x-5,pointF.y-5);
	displayPointName(context,pointG,pointG.x+5,pointG.y);
	displayPointName(context,pointH,pointH.x,pointH.y-5);
	drawLineBetweenTwoPoints(context,pointB,pointC,"gray");
	drawLineBetweenTwoPoints(context,pointF,pointG,"gray");

}

function Higher_Math_chapter_13_Q_26(context, x1,y1,radius){

	//var pointA =  new Point(x1,y1);
	//var pointB =  new Point(x2,y2);
	var centerO =  new Point(x1,y1);
	var circle =  new Circle(centerO,radius);
	//drawCircle( context,circle,"blue");
	var startAngle = 15;
	var angleIncrement = 60;
	var pointC= getPointAtForDegree(circle,-startAngle);
	var pointD= getPointAtForDegree(circle,-(startAngle+1*angleIncrement));
	var pointE= getPointAtForDegree(circle,-(startAngle+2*angleIncrement));
	var pointF= getPointAtForDegree(circle,-(startAngle+3*angleIncrement));
	var pointG= getPointAtForDegree(circle,-(startAngle+4*angleIncrement));
	var pointH= getPointAtForDegree(circle,-(startAngle+5*angleIncrement));
	var pointI= getPointAtForDegree(circle,-(startAngle+6*angleIncrement));
	var pointJ= getPointAtForDegree(circle,-(startAngle+7*angleIncrement));
	var midPointFG = midPointBetweenTwoPoint(pointF,pointG );
	
	//drawPoint(context,pointC , "red");
	//drawPoint(context,pointD , "red");
	//drawPoint(context,pointE , "red");
	//drawPoint(context,pointF , "red");
	//drawPoint(context,pointG , "red");
	
	//drawLineBetweenTwoPoints(context,pointA,pointB,"red");
	
	drawLineBetweenTwoPoints(context,pointC,pointD,"blue");
	drawLineBetweenTwoPoints(context,pointD,pointE,"blue");
	drawLineBetweenTwoPoints(context,pointE,pointF,"blue");
        //drawLineBetweenTwoPoints(context,pointF,midPointFG,"blue");
	drawLineBetweenTwoPoints(context,pointF,pointG,"blue");
	drawLineBetweenTwoPoints(context,pointG,pointH,"blue");
	drawLineBetweenTwoPoints(context,pointH,pointI,"blue");
	drawLineBetweenTwoPoints(context,pointI,pointJ,"blue");
	drawLineBetweenTwoPoints(context,pointJ,pointC,"blue");
	
	drawLineBetweenTwoPoints(context,centerO,pointC,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointD,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointE,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointF,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointG,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointH,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointI,"blue");
	drawLineBetweenTwoPoints(context,centerO,pointJ,"blue");
	
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	setPointName(centerO,"O");
	
	displayPointName(context,pointC,pointC.x+5,pointC.y+5);   
    displayPointName(context,pointD,pointD.x+5,pointD.y-5); 
   displayPointName(context,centerO,centerO.x-10,centerO.y+20);

/////
   var pointC2= new Point(pointC.x,pointC.y-120);
	var pointD2= new Point(pointD.x,pointD.y-120);
	var pointE2= new Point(pointE.x,pointE.y-120);
	var pointF2= new Point(pointF.x,pointF.y-120);
	var pointG2= new Point(pointG.x,pointG.y-120);
	var pointH2= new Point(pointH.x,pointH.y-120);
	
	drawLineBetweenTwoPoints(context,pointC,pointC2,"blue");
	drawLineBetweenTwoPoints(context,pointD,pointD2,"blue");
	drawLineBetweenTwoPoints(context,pointE,pointE2,"blue");
	drawLineBetweenTwoPoints(context,pointF,pointF2,"blue");
	drawLineBetweenTwoPoints(context,pointG,pointG2,"blue");
	drawLineBetweenTwoPoints(context,pointH,pointH2,"blue");

///  
drawLineBetweenTwoPoints(context,pointC2,pointD2,"blue");
drawLineBetweenTwoPoints(context,pointD2,pointE2,"blue"); 
drawLineBetweenTwoPoints(context,pointE2,pointF2,"blue");
drawLineBetweenTwoPoints(context,pointF2,pointG2,"blue");
drawLineBetweenTwoPoints(context,pointG2,pointH2,"blue");
drawLineBetweenTwoPoints(context,pointH2,pointC2,"blue");

}






function chapter_16_4_Q_12(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var pointE =  new Point(pointC.x+10,pointC.y-10);
	var pointF =  new Point(pointD.x+10,pointD.y-10);
	var pointG =  new Point(pointA.x+10,pointA.y-10);
	var pointH =  new Point(pointB.x+10,pointB.y-10);
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	//displayPointName(context,pointA,pointA.x,pointA.y+15);
	//displayPointName(context,pointB,pointB.x-5,pointB.y+15);
	//displayPointName(context,pointC,pointC.x+5,pointC.y);
	//displayPointName(context,pointD,pointD.x+5,pointD.y-5);
	
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	setPointName(pointG,"G");
	setPointName(pointH,"H");
	//displayPointName(context,pointE,pointE.x-15,pointE.y);
	//displayPointName(context,pointF,pointF.x+5,pointF.y+15);
	//displayPointName(context,pointG,pointG.x+5,pointG.y);
	//displayPointName(context,pointH,pointH.x,pointH.y-5);
	
	drawLineBetweenTwoPoints(context,pointA,pointB,"blue");
	drawLineBetweenTwoPoints(context,pointA,pointC,"green");
	drawLineBetweenTwoPoints(context,pointC,pointD,"red");
	drawLineBetweenTwoPoints(context,pointB,pointD,"red");
	drawLineBetweenTwoPoints(context,pointC,pointE,"red");
	drawLineBetweenTwoPoints(context,pointE,pointF,"red");
	drawLineBetweenTwoPoints(context,pointD,pointF,"red");
	drawLineBetweenTwoPoints(context,pointA,pointG,"red");
	drawLineBetweenTwoPoints(context,pointG,pointH,"purple");
	drawLineBetweenTwoPoints(context,pointE,pointG,"purple");
	drawLineBetweenTwoPoints(context,pointB,pointH,"purple");
	drawLineBetweenTwoPoints(context,pointF,pointH,"purple");
	var wide = pointB.x-pointA.x;
	var height = pointA.y- pointC.y;
	
	for(var i=10; i<height;i=i+10){
	 
	  drawLineBetweenTwoPointsAxis(context,pointA.x,pointC.y+i,pointB.x,pointD.y+i,"red");
	
	}
	var incr=.30;
	for(var i=17; i<wide;i=i+17){
	
	  drawLineBetweenTwoPointsAxis(context,pointC.x+i,pointC.y-incr,pointA.x+i,pointA.y-incr,"red");
	   incr=incr+.30;
	}
	
	 wide = pointF.x-pointD.x;
	 height = pointB.y- pointD.y;
	
	for(var i=10; i<height;i=i+10){
	
	  drawLineBetweenTwoPointsAxis(context,pointD.x,pointD.y+i,pointF.x,pointF.y+i,"red");
	
	}
}

function chapter_16_4_Q_13(context, x1,y1,x2,y2,x3,y3,x4,y4){
	var pointA =  new Point(x1,y1);
	var pointB =  new Point(x2,y2);
	var pointC =  new Point(x3,y3);
	var pointD =  new Point(x4,y4);
	
	var pointE =  new Point(pointA.x,pointA.y-60);
	var pointF =  new Point(pointB.x,pointB.y-60);
	var pointG =  new Point(pointC.x,pointC.y-60);
	var pointH =  new Point(pointD.x,pointD.y-60);
	
	var retangle = new Rectangle(pointA,pointB,pointC,pointD);
	var retangle2 = new Rectangle(pointE,pointF,pointG,pointH);
	drawRectangle(context, retangle);
	drawRectangle(context, retangle2);
	drawLineBetweenTwoPoints(context,pointA,pointE,"red");
	drawLineBetweenTwoPoints(context,pointB,pointF,"red");
	drawLineBetweenTwoPoints(context,pointC,pointG,"red");
	drawLineBetweenTwoPoints(context,pointD,pointH,"red");
	drawLineBetweenTwoPoints(context,pointA,pointC,"blue");
	drawLineBetweenTwoPoints(context,pointA,pointG,"green");
	
	setPointName(pointA,"A");
	setPointName(pointB,"B");
	setPointName(pointC,"C");
	setPointName(pointD,"D");
	displayPointName(context,pointA,pointA.x,pointA.y+15);
	displayPointName(context,pointB,pointB.x-5,pointB.y+15);
	displayPointName(context,pointC,pointC.x+5,pointC.y);
	displayPointName(context,pointD,pointD.x+5,pointD.y-5);
	
	setPointName(pointE,"E");
	setPointName(pointF,"F");
	setPointName(pointG,"G");
	setPointName(pointH,"H");
	displayPointName(context,pointE,pointE.x-15,pointE.y);
	displayPointName(context,pointF,pointF.x+5,pointF.y+15);
	displayPointName(context,pointG,pointG.x+5,pointG.y);
	displayPointName(context,pointH,pointH.x,pointH.y-5);
	
}

function chapter_16_4_Q_14(context, x1,y1){

var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");	
	//displayPointName(context,centerO,centerO.x,centerO.y);
	
	var oval = new Oval(centerO,45,20);
	drawOval( context,oval,"green");
	//drawPoint(context,centerO, "blue");
	
	var pointA=  pointOnEclipseAtAnAngle(oval,0);
	//drawPoint(context,pointA, "blue");
	var pointB=  pointOnEclipseAtAnAngle(oval,180);
	drawPoint(context,pointB, "blue");
	setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x-15,pointB.y);
	var pointAB = midPointBetweenTwoPoint(pointA, pointB );
	drawPoint(context,pointAB, "blue");
	setPointName(pointAB,"E");
	displayPointName(context,pointAB,pointAB.x,pointAB.y-5);
	

	centerO =  new Point(centerO.x,centerO.y+10);
	context.translate(0,centerO.y);
	var oval2 = new Oval(centerO,45,20);
	drawOval( context,oval2,"green");
	
	var pointC=  pointOnEclipseAtAnAngle(oval2,0);
	drawPoint(context,pointC, "blue");
	
	var pointD=  pointOnEclipseAtAnAngle(oval2,180);
	drawPoint(context,pointD, "blue");
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x-15,pointD.y);
	
	var pointCD = midPointBetweenTwoPoint(pointC, pointD );
	drawPoint(context,pointCD, "blue");
	setPointName(pointCD,"F");
	displayPointName(context,pointCD,pointCD.x,pointCD.y+15);
	
	var pointD1 =  new Point(centerO.x-45,centerO.y-50);
	var pointB1 =  new Point(centerO.x-45,centerO.y-145);
	drawPoint(context,pointB1 , "red");
	drawPoint(context,pointD1 , "red");
	drawLineBetweenTwoPoints(context,pointB1,pointD1,"red");
	
		
	var centerR =  new Point(centerO.x+45,centerO.y-50);
	var centerS =  new Point(centerO.x+45,centerO.y-145);
	drawPoint(context,centerR , "red");
	drawPoint(context,centerS , "red");
	drawLineBetweenTwoPoints(context,centerR,centerS,"red");
	
	
	var centerO1 =  new Point(centerO.x,centerO.y-145);
	var centerO2 =  new Point(centerO.x,centerO.y-50);
   drawLineBetweenTwoPoints(context,centerO1,centerO2,"red");
    drawLineBetweenTwoPoints(context,centerO1,pointB1,"red");
	 drawLineBetweenTwoPoints(context,centerO2,pointD1,"red");

}

function chapter_16_4_Q_15(context, x1,y1){

var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");	
	//displayPointName(context,centerO,centerO.x,centerO.y);
	
	var oval = new Oval(centerO,45,20);
	drawOval( context,oval,"green");
	//drawPoint(context,centerO, "blue");
	
	var pointA=  pointOnEclipseAtAnAngle(oval,0);
	//drawPoint(context,pointA, "blue");
	var pointB=  pointOnEclipseAtAnAngle(oval,180);
	drawPoint(context,pointB, "blue");
	setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x-15,pointB.y);
	var pointAB = midPointBetweenTwoPoint(pointA, pointB );
	drawPoint(context,pointAB, "blue");
	setPointName(pointAB,"E");
	displayPointName(context,pointAB,pointAB.x,pointAB.y-5);
	

	centerO =  new Point(centerO.x,centerO.y+10);
	context.translate(0,centerO.y);
	var oval2 = new Oval(centerO,45,20);
	drawOval( context,oval2,"green");
	
	var pointC=  pointOnEclipseAtAnAngle(oval2,0);
	drawPoint(context,pointC, "blue");
	
	var pointD=  pointOnEclipseAtAnAngle(oval2,180);
	drawPoint(context,pointD, "blue");
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x-15,pointD.y);
	
	var pointCD = midPointBetweenTwoPoint(pointC, pointD );
	drawPoint(context,pointCD, "blue");
	setPointName(pointCD,"F");
	displayPointName(context,pointCD,pointCD.x,pointCD.y+15);
	
	var pointD1 =  new Point(centerO.x-45,centerO.y-50);
	var pointB1 =  new Point(centerO.x-45,centerO.y-145);
	drawPoint(context,pointB1 , "red");
	drawPoint(context,pointD1 , "red");
	drawLineBetweenTwoPoints(context,pointB1,pointD1,"red");
	
		
	var centerR =  new Point(centerO.x+45,centerO.y-50);
	var centerS =  new Point(centerO.x+45,centerO.y-145);
	drawPoint(context,centerR , "red");
	drawPoint(context,centerS , "red");
	drawLineBetweenTwoPoints(context,centerR,centerS,"red");
	
	
	var centerO1 =  new Point(centerO.x,centerO.y-145);
	var centerO2 =  new Point(centerO.x,centerO.y-50);
   drawLineBetweenTwoPoints(context,centerO1,centerO2,"red");
    drawLineBetweenTwoPoints(context,centerO1,pointB1,"red");
	 drawLineBetweenTwoPoints(context,centerO2,pointD1,"red");

}

function chapter_16_4_Q_16(context, x1,y1){

var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");	
	//displayPointName(context,centerO,centerO.x,centerO.y);
	
	var oval = new Oval(centerO,45,20);
	drawOval( context,oval,"green");
	//drawPoint(context,centerO, "blue");
	
	var pointA=  pointOnEclipseAtAnAngle(oval,0);
	//drawPoint(context,pointA, "blue");
	var pointB=  pointOnEclipseAtAnAngle(oval,180);
	drawPoint(context,pointB, "blue");
	setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x-15,pointB.y);
	var pointAB = midPointBetweenTwoPoint(pointA, pointB );
	drawPoint(context,pointAB, "blue");
	setPointName(pointAB,"E");
	displayPointName(context,pointAB,pointAB.x,pointAB.y-5);
	

	centerO =  new Point(centerO.x,centerO.y+10);
	context.translate(0,centerO.y);
	var oval2 = new Oval(centerO,45,20);
	drawOval( context,oval2,"green");
	
	var pointC=  pointOnEclipseAtAnAngle(oval2,0);
	drawPoint(context,pointC, "blue");
	
	var pointD=  pointOnEclipseAtAnAngle(oval2,180);
	drawPoint(context,pointD, "blue");
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x-15,pointD.y);
	
	var pointCD = midPointBetweenTwoPoint(pointC, pointD );
	drawPoint(context,pointCD, "blue");
	setPointName(pointCD,"F");
	displayPointName(context,pointCD,pointCD.x,pointCD.y+15);
	
	var pointD1 =  new Point(centerO.x-45,centerO.y-50);
	var pointB1 =  new Point(centerO.x-45,centerO.y-145);
	drawPoint(context,pointB1 , "red");
	drawPoint(context,pointD1 , "red");
	drawLineBetweenTwoPoints(context,pointB1,pointD1,"red");
	
		
	var centerR =  new Point(centerO.x+45,centerO.y-50);
	var centerS =  new Point(centerO.x+45,centerO.y-145);
	drawPoint(context,centerR , "red");
	drawPoint(context,centerS , "red");
	drawLineBetweenTwoPoints(context,centerR,centerS,"red");
	
	
	var centerO1 =  new Point(centerO.x,centerO.y-145);
	var centerO2 =  new Point(centerO.x,centerO.y-50);
   drawLineBetweenTwoPoints(context,centerO1,centerO2,"red");
    drawLineBetweenTwoPoints(context,centerO1,pointB1,"red");
	 drawLineBetweenTwoPoints(context,centerO2,pointD1,"red");

}

function chapter_16_4_Q_17(context, x1,y1){

var centerO =  new Point(x1,y1);
	setPointName(centerO,"O");	
	//displayPointName(context,centerO,centerO.x,centerO.y);
	
	var oval = new Oval(centerO,45,20);
	drawOval( context,oval,"green");
	var ovalinner = new Oval(centerO,43,18);
	drawOval( context,ovalinner,"green");
	//drawPoint(context,centerO, "blue");
	
	var pointA=  pointOnEclipseAtAnAngle(oval,0);
	//drawPoint(context,pointA, "blue");
	var pointB=  pointOnEclipseAtAnAngle(oval,180);
	drawPoint(context,pointB, "blue");
	setPointName(pointB,"B");
	displayPointName(context,pointB,pointB.x-15,pointB.y);
	var pointAB = midPointBetweenTwoPoint(pointA, pointB );
	drawPoint(context,pointAB, "blue");
	setPointName(pointAB,"E");
	displayPointName(context,pointAB,pointAB.x,pointAB.y-5);
	

	centerO =  new Point(centerO.x,centerO.y+10);
	context.translate(0,centerO.y);
	var oval2 = new Oval(centerO,45,20);
	drawOval( context,oval2,"green");
	
	var oval2inner = new Oval(centerO,43,18);
	drawOval( context,oval2inner,"green");
	
	var pointC=  pointOnEclipseAtAnAngle(oval2,0);
	drawPoint(context,pointC, "blue");
	
	var pointD=  pointOnEclipseAtAnAngle(oval2,180);
	drawPoint(context,pointD, "blue");
	setPointName(pointD,"D");
	displayPointName(context,pointD,pointD.x-15,pointD.y);
	
	var pointCD = midPointBetweenTwoPoint(pointC, pointD );
	drawPoint(context,pointCD, "blue");
	setPointName(pointCD,"F");
	displayPointName(context,pointCD,pointCD.x,pointCD.y+15);
	
	var pointD1 =  new Point(centerO.x-45,centerO.y-50);
	var pointB1 =  new Point(centerO.x-45,centerO.y-145);
	drawPoint(context,pointB1 , "red");
	drawPoint(context,pointD1 , "red");
	drawLineBetweenTwoPoints(context,pointB1,pointD1,"red");
	
		
	var centerR =  new Point(centerO.x+45,centerO.y-50);
	var centerS =  new Point(centerO.x+45,centerO.y-145);
	drawPoint(context,centerR , "red");
	drawPoint(context,centerS , "red");
	drawLineBetweenTwoPoints(context,centerR,centerS,"red");
	
	
	var centerO1 =  new Point(centerO.x,centerO.y-145);
	var centerO2 =  new Point(centerO.x,centerO.y-50);
   drawLineBetweenTwoPoints(context,centerO1,centerO2,"red");
    drawLineBetweenTwoPoints(context,centerO1,pointB1,"red");
	 drawLineBetweenTwoPoints(context,centerO2,pointD1,"red");

}