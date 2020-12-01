describe ('handling Synchronization', function() {
	
	
	it ('Open Website', function() {
		
		browser.waitForAngularEnabled(false);
		   browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html')
		   element(by.css("a[href*='loadAjax']")).click().then(function(){
			   
			//   browser.sleep(5000);
			  
		      var EC = protractor.ExpectedConditions;
	 // two args are passed , one - which element to wait for and the for how much time(it will for that much time n if the elemet appears early then it will resume

			   browser.wait(EC.invisibilityOf(element(by.id("loader"))),8000); 
			   element(by.id("results")).getText().then(function(text){
				   
			   console.log(text);
			   
			   })
			   
		   
		   
		   })

		
		
	})
	
    	
	
})
