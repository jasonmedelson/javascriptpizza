function cancelOrder(){
	$(".return").css("opacity", "0");
	document.getElementById("items").innerHTML = "";
	document.getElementById("prices").innerHTML = "";
	document.getElementById("total").innerHTML = "";
	var arrays = document.getElementsByClassName("size");
	arrays[2].checked = true;
	var arrays = document.getElementsByClassName("meats");
	for (var i = 0; i < arrays.length; i++) {
		arrays[i].checked = false;
	}
	var arrays = document.getElementsByClassName("cheese");
	arrays[1].checked = true;
	var arrays = document.getElementsByClassName("crust");
	arrays[0].checked = true;
	var arrays = document.getElementsByClassName("sauce");
	arrays[1].checked = true;
	var arrays = document.getElementsByClassName("veg");
	for (var i = 0; i < arrays.length; i++) {
		arrays[i].checked = false;
	}
}
function submitOrder(){
	var runningPrice = 0;
	var sizePrice = 0;
	var col1 = "<h2>You Ordered:<h2>";
	var col2 = "<h2>Subtotal:<h2>";
	var order = ""
	var sizeArray = document.getElementsByClassName("size");
	for(var i = 0; i < sizeArray.length; i++ ){
		if (sizeArray[i].checked) {
			var size = sizeArray[i].value;
			col1 = col1 +"<h5>"  + size  + "<h5>"+ "<br>";
		}
	}
	if (size === "Personal Pizza") {
		sizePrice = 6;
	}
	else if (size === "Medium Pizza") {
		sizePrice = 10;
	}
	else if (size === "Large Pizza") {
		sizePrice = 14;
	}
	else{
		sizePrice = 16;
	}
	var strSize = sizePrice.toString();
	col2 = col2 +"<h5> $"  + strSize  + ".00<h5>"+ "<br>";

	var meatArray = document.getElementsByClassName("meats");
	var meatPrice = 0;
	var strMeat
	for (var i = 0; i < meatArray.length; i++) {
		if (meatArray[i].checked) {
			var meat = meatArray[i].value;
			meatPrice = meatPrice + 1;
			col1 = col1 +"<h5>"  + meat  + "<h5>"+ "<br>";
			if (meatPrice > 1) {
				strMeat = "$1.00"
			}
			else{
				strMeat = "$0.00"
			}
			col2 = col2 +"<h5>"  + strMeat  + "<h5>"+ "<br>";
		}
	}
	if (meatPrice > 0) {
		meatPrice = meatPrice -1;
	}
	var cheeseArray = document.getElementsByClassName("cheese");
	var cheesePrice = 0;
	for(var i = 0; i < cheeseArray.length; i++ ){
		if (cheeseArray[i].checked) {
			var cheese = cheeseArray[i].value;
			col1 = col1 +"<h5>"  + cheese + "<h5>" + "<br>";
		}
	}
	if (cheese === "Extra Cheese") {
		cheesePrice = 3;
		col2 = col2 + "<h5> $3.00 <h5>" + "<br>";
	}
	else{
		cheesePrice = 0;
		col2 = col2 + "<h5> $0.00 <h5>" + "<br>";
	}
	var crustArray = document.getElementsByClassName("crust");
	var crustPrice = 0;
	for(var i = 0; i < crustArray.length; i++ ){
		if (crustArray[i].checked) {
			var crust = crustArray[i].value;
			col1 = col1 +"<h5>"  + crust + "<h5>" + "<br>";
		}
	}
	if (crust === "Cheese Stuffed Crust") {
		crustPrice = 3;
		col2 = col2 + "<h5> $3.00 <h5>" + "<br>";
	}
	else{
		crustPrice = 0;
		col2 = col2 + "<h5> $0.00 <h5>" + "<br>";
	}
	var sauceArray = document.getElementsByClassName("sauce");
	var saucePrice = 0;
	for(var i = 0; i < sauceArray.length; i++ ){
		if (sauceArray[i].checked) {
			var sauce = sauceArray[i].value;
			col1 = col1 +"<h5>"  + sauce + "<h5>" + "<br>";
		}
	}
	col2 = col2 + "<h5> $0.00 <h5>" + "<br>";
	var vegArray = document.getElementsByClassName("veg");
	var vegPrice = 0;
	var strVeg = "";
	for (var i = 0; i < vegArray.length; i++) {
		if (vegArray[i].checked) {
			var veg = vegArray[i].value;
			vegPrice = vegPrice + 1;
			col1 = col1 +"<h5>"+ veg + "<h5>" + "<br>";
			if (vegPrice > 1) {
				strVeg = "$1.00"
			}
			else{
				strVeg = "$0.00"
			}
			col2 = col2 +"<h5>"  + strVeg  + "<h5>"+ "<br>";
		}
	}
	if (vegPrice > 0) {
		vegPrice = vegPrice -1;
	}
	var orderTotal = sizePrice + cheesePrice + meatPrice + crustPrice + vegPrice;
	var orderFinal = "<h2> Total Cost of your pizza is:     $" + orderTotal + ".00 <h2>"
	$(".return").css("opacity", "1");
	document.getElementById("items").innerHTML = col1;
	document.getElementById("prices").innerHTML = col2;
	document.getElementById("total").innerHTML = orderFinal;
}