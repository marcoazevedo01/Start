function fonte(e){
	var elemento = $("body,h2,p");
	var fonte = elemento.css('font-size');

	if(e=='a'){
		elemento.css("fontSize",parseInt(fonte)+1);
		elemento.css("width",parseFloat(fonte)+'0,1%');
	}else if('d'){
		elemento.css("fontSize",parseInt(fonte)-1);
		elemento.css("width",parseFloat(fonte)-'0.1%');
	}
}	

	
	