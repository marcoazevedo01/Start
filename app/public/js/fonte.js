function fonte(e){
	var elemento = $("body,h2,p");
	let fonte = document.querySelector('h2').css('font-size');
	//var fonte = size;

	if(e=='a'){
		elemento.css("fontSize",parseInt(fonte)+1);
		elemento.css("width",parseFloat(fonte)+'0,1%');
	}else if('d'){
		elemento.css("fontSize",parseInt(fonte)-1);
		elemento.css("width",parseFloat(fonte)-'0.1%');
	}
}	

	
	