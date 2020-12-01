describe ('chain locators demo', function() {
	
	function add(a,b){
		
		element(by.model('first')).sendKeys(a);
		element(by.model('second')).sendKeys(b);
	    element(by.id('gobutton')).click();
		
	};
		
	it ('Open Website', function() {
		
	  	browser.get('http://juliemr.github.io/protractor-demo/');
		//all method
	  	
		add(2,2);
		add(2,3);
		add(2,4);
		add(2,5);
		add(2,6);
		
		
/*		// one element 
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(result){
		
			console.log(result);
			
		})  */
		
		// all element 
	    //print count
		
		element.all(by.repeater("result in memory")).count().then(function(counts){
		
			console.log(counts);
		})
		
		//all element to run the loop till the the tag value is found and then print the result part
		
		element.all(by.repeater("result in memory")).each(function(rows){
		
		rows.element(by.css("td:nth-child(3)")).getText().then(function(result){
				
				console.log(result);
				
			})  
		
		
		})
		
			
	})
	
    
	
})
