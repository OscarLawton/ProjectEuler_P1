

function output(){
	console.log("It worked");
	var x,y,num;
	//document.writeln(" Well there it is!")
	x = document.getElementById("form");
	y = x.elements["num"].value;
	console.log(y);
}

function myFunction(){

	var num1 = parseInt(document.getElementById("num1").value)
	var num2 = parseInt(document.getElementById("num2").value)
	var max = parseInt(document.getElementById("max").value)
	var total = 0;
	for (var i = 0 ; i < max; i++) {
		if (i % num1 == 0|| i % num2 == 0){
			total += i;
		}
	}
	document.getElementById("output").innerHTML = total;

}