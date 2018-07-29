var name=localStorage.getItem("data");
var total = localStorage.getItem("total");
let totaldata ='<td colspan=2>Total Cost</td><td>'+total+'</td>';
name+=totaldata;
//console.log(name)
document.getElementById("show").innerHTML=name;
localStorage.removeItem("data");
localStorage.removeItem("total");