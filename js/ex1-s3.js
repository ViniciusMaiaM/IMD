function f(){
    const a = "";
    var b = 1; 
    var c = a + b + "<br />"; 
    b++;
    c = c + a + b + "<br />";
    b++; 
    c = c + a + b + "<br />";
    b++; 
    c = c + a + b + "<br />";
    b++; 
    c = c + a + b + "<br />";
    document.getElementById("d").innerHTML = c;
}
