//document.write("where is my JS code?");
//window.alert(5 + 6);
//window.alert('5 + 6');
//document.write('<h1>A heading</h1>');
//document.write('<p>A sentence.</p>');
//const x = "web";
//const y = "mapping";
//const out = x + y;
//document.write(out);
// A prompt box is used to prompt users to input a value before entering a page.
//user_name = window.prompt("Please enter your name", "Type your name here");
//document.write(user_name);
 /*x =22;
const y = 33;
document.writeln(x+y);
document.writeln("<br>");
document.writeln(x+= 33);*/
/*
document.writeln("<button onclick='condition()'>Conditional Test</button>")
function condition()
{
  x= confirm("Are you sure you want to proceed?");
  if(x)
  {
    document.writeln("You chose Okay!");
  }
  else
  {
      document.writeln("You chose Cancel!");
  }
}*/

/*user_name = window.prompt('Please enter your name', 'Type your name here');
document.write(user_name); */
var webmaps =
[
  ["The GRDC-the world-wide repositry of river discharge data",
  "https://www.bafg.de",
  "This webmap offers a dataset of river discharge. This webmap offers a dataset of river discharge. This webmap offers a dataset of river discharge."
  ],
  ["NOAA for environmental information",
   "https://www.ncdc.noaa.gov/isd",
   "This is designed for researchers and policy makers. This is designed for researchers and policy makers. This is designed for researchers and policy makers."
  ]
];

function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";

  // A prompt box is used to prompt users to input a value before entering a page.
  user_name = window.prompt(a, b);
  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>";
  return message
}

function webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
    {
      document.write("<td>" + webmaps[row] [column] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
}
