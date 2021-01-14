// напишите функцию coneVolume(d,h) и используйте ее так,
// так, чтобы функция solve() показывала объем ведра
// либо сообщение "Недопустимые данные".

function solve() {
	// получаем данные в виде строк из полей ввода на странице
	let d1 = document.getElementById("d1").value;
	let d2 = document.getElementById("d2").value;
	let h = document.getElementById("h").value;
	d1=d1*1;
	d2=d2*1;
	h=h*1;
	if(d1<=0 || d2<=0 || h<=0 || typeof(d1)!="number" || typeof(d2)!="number" || typeof(h)!="number" || isNaN(d1) || isNaN(d2) || isNaN(h)) alert("неверные данные")
	elsealert(coneVolume(d1, d2, h));
}
function coneVolume(d1,d2, h){
	let r2=d2/2;
	let r1=d1/2;
	return 3.14*h*(r2*r2+(r1*r1)+(r1*r2))/3;
}
