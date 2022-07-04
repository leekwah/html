var table = "<table border='1'>";
var num = 1;

for(var i=1; i<=5; i++){
    table += "<tr>";
  for(var j=1; j<=5; j++){
      table += "<td>"+ num +"</td>";
      num = ++num;
  }
  table += "</tr>";
}
document.write(table);