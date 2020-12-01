/**
 * http://usejsdoc.org/
 */
// declare funtions

function add(a,b)
{
return a+b;	
}

console.log(add(2,3));
console.log(add(8,3));
console.log(add(0,3));

// js arrays

var array = ["hi","1","priyam","8","WORLD"]

console.log(array.length+ " size of the array");
for (var i=0;i<5;i++)
	{

	console.log(array[i]);
	
	};
	
	// another way of declaring array, helpful when getting the dynamic data
	 var a = new Array();
	  a[0]="good";
	  a[1]="boy";
	  a[2]="bye";
	  for (var i=0;i<a.length;i++)
		  {
		  
		  console.log(a[i]);
		  }
	  console.log("Reverse order")
	  
	  for (var j=a.length-1; j>=0; j--)
		  {
		  
		  console.log(a[j]);
		  }
	 // string concepts
	  
	  var str = "Priyam ";
	  // var str1 = new string ("priya");
	  console.log(str.charAt(3));
	  console.log(str.concat(" Vatsa"));
	  console.log(str.indexOf("m"));
	  console.log(str.substr(2));
	  console.log(str.slice(1,4)); //starting index is inclusive and ending index is not exclusive
	  console.log(str.substring(1,4));
	  console.log(str.toUpperCase());
	  
	  // how to remove space
	  console.log(str+"space");
	  console.log(str.trim()+"nospace");