




var colors =$(".color");

$(colors).css("background",function(){
	var btcolors =$(this).data("color");
	return btcolors

});

$(colors).click(function(){
	var btcolors =$(this).data("color");
	console.log(btcolors);
	$("body").css("background", function(){
		return btcolors;


	});



});


