describe ('chain locators demo', function() {
	var obj = require("./JsObjectDemo.js");
	var d = require("./Data.js");
	var using = require('jasmine-data-provider');
		
	//console.log(d.datadrive.firstinput);
	
	beforeEach(function() { 
		obj.getUrl();
		});  
	
	using(d.datadriven, function (data, description) { 
		
	it ('Testing calculator funtionality '+description, function() {
		 	
		//repeater, chain locators , and css for identical tags
	  	
		obj.firstInput.sendKeys(data.firstinput);
	    obj.secondInput.sendKeys(data.secondinput);
	    obj.goButton.click();
	    
	    expect(obj.result.getText()).toBe(data.results); //jasmine handles promise
	    	
	    obj.result.getText().then(function(result){
			
			console.log(result);
			
		})
	    
		/*element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(result){
		
			console.log(result);
			
		})*/
		
			
	})
	})
	
	afterEach(function() { 
		   console.log("test is completed");  
		}); 
    
	
})
