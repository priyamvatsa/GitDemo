describe ('Frames', function() {
	
	
	it ('Handle frame', function() {
		
		
		browser.waitForAngularEnabled(false);
		
		browser.driver.manage().window().maximize();
		browser.get("https://rahulshettyacademy.com/AutomationPractice/");
		
		//Well there is some compatibility issue with action class and switch 
		// on chrome browser after version 75
		
		/*  capabilities: {
      browserName: 'chrome',
      'goog:chromeOptions': {
        w3c: false
       },
       
       }, */

		browser.switchTo().frame('courses-iframe');
		
		element(by.css("a[href*='sign_in']")).getText().then(function(text){
			
	     console.log(text);
		
		})
		

		
	
		
		
	
	})
	
	
})
