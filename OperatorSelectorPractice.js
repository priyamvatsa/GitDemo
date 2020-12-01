describe ('chain locators demo', function() {
	
	function cal(a,b,c){
		
		element(by.model('first')).sendKeys(a);
		element(by.model('second')).sendKeys(b);
		
		
	/*	element.all(by.tagName("option")).each(function(rows){
			
			rows.getAttribute("value").then(function(values) {
			
				
			if(values==c)
				{
				rows.click();
				
				}
				
			});
		}) */
		
           element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
		
	    element(by.id('gobutton')).click();
		
	};
		
	it ('Open Website', function() {
		
	  	browser.get('http://juliemr.github.io/protractor-demo/');
		
	  	
        cal (2,3,"MULTIPLICATION");
        cal (2,3,"ADDITION");
        cal (6,3,"DIVISION");
        cal (3,3,"SUBTRACTION");
		
        element.all(by.repeater("result in memory")).each(function(rows){
    		
    		rows.element(by.css("td:nth-child(3)")).getText().then(function(result){
    				
    				console.log(result);
    				
    			})  
    		
    		
    		})
			
	})
	
    
	
})
