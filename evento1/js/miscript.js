function suma(){
	var num1=document.getElementById("num1");
	var num2=document.getElementById("num2");
	var resultado=document.getElementById("resultado");
	var operacion=0;
	
	operacion=Number(num1.value)+Number(num2.value);
	resultado.innerHTML=operacion;
}
function resta(){
	var num1=document.getElementById("num1");
	var num2=document.getElementById("num2");
	var resultado=document.getElementById("resultado");
	var operacion=0;
	
	operacion=Number(num1.value)-Number(num2.value);
	resultado.innerHTML=operacion;
}
function multiplica(){
	var num1=document.getElementById("num1");
	var num2=document.getElementById("num2");
	var resultado=document.getElementById("resultado");
	var operacion=0;
	
	operacion=Number(num1.value)*Number(num2.value);
	resultado.innerHTML=operacion;
}
function divide(){
	var num1=document.getElementById("num1");
	var num2=document.getElementById("num2");
	var resultado=document.getElementById("resultado");
	var operacion=0;
	
	operacion=Number(num1.value)/Number(num2.value);
	resultado.innerHTML=operacion;
	
	if (num2.value==0){
	alert("Tu eres loco");
}
else{
	operacion=Number(num1.value)/Number(num2.value);
}
	
	if ((num1.value=="")||(num2.value=="")){
	alert("compila i campi");
}
else {
	operacion=Number(num1.value)/Number(num2.value);
}
}


