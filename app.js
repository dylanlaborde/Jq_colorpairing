var colors =$(".color");
var btcolors =$(this).data("color");
$(colors).css("background",function(){
	var btcolors =$(this).data("color");
	return btcolors
});
function checked(){
	return $("#modify-texte").is(":checked");
};

$("input").click(function(){
	var btcolors =$(this).data("color");
	if (checked()){
		$(".main").css("color",btcolors)
	}else{
		$("body").css("background", function(){
			return btcolors;
		});
	}
});	






























