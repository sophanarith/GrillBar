function calculate() {
    var str = "";
    var subTotal = 0;
    var elements = document.getElementsByTagName("input");
   
    for (var i = 0; i < elements.length; i++) {
        
        if (elements[i].value != 0) {
            str += (elements[i].id + "=" + elements[i].value + "="
                + (elements[i].value * parseFloat(document.getElementById(elements[i].id).innerHTML)) + "|");
            
            subTotal += (elements[i].value * parseFloat(document.getElementById(elements[i].id).innerHTML));
           
        }
    }
    var tax = subTotal * 0.15;
    var total = subTotal + tax;
    localStorage.setItem("checkOut", str); 
    
    localStorage.setItem("amount", "subTotal:" + subTotal + "|" + "tax: " + tax + "|" + "total: " + total);
   
}


function loadProduct() {
    var product = localStorage.getItem("checkOut");
    var str = "";
   
    if (product == "") {
        alert("No product is selected. Please select a product to check out.");
    }
    else {
        
        var products = product.split("|");
        for (var i = 0; i < products.length - 1; i++) {
            var ap = products[i].split("="); 
            str += ("Dish: " + ap[0] + "<br>Quantity: " + ap[1] + "<br>");
        }
        var amount = localStorage.getItem("amount");
        var prices = amount.split("|");
        str += "<hr>"; 
        str = str +  prices[0];
        str += "<br>";
        str = str +  prices[1];
        str += "<br>";
        str = str +  prices[2];
        document.getElementById("products").innerHTML = str;
    }
}


        
   