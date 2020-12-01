function car ()
{
	
this.firstInput=element(by.model("first"));	
this.secondInput=element(by.model("second"));

this.goButton=element(by.id("gobutton"));
this.result=element(by.css("h2[class='ng-binding']"));
	
	
this.colour = "red";
this.brand = "bmw";
this.engine = "turbo";

this.getUrl = function()
{
	browser.get('http://juliemr.github.io/protractor-demo/');
	
};
};

//to access the object ffrom another file across the protractor tutorial proj, need to export the created object 
// module.exports= new car();

module.exports= new car();
/*var a = new car();
a.getModal();
console.log(a.colour);*/