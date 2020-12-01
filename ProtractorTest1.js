describe ('Protractor element demo', function() {
	
	
	it ('locators', function() {
	/*	// need to tell protractor that site is non angular to prevent it's search for angular components
		browser.waitForAngularEnabled(false);
		browser.get('http://google.com') ; 
		// use either angular or non angular , not both in same
		*/
		browser.get('http://juliemr.github.io/protractor-demo/');
			
		element(by.model('first')).sendKeys(12);
		//browser.sleep(2000);
		
		// if we don't use promise - (.then function(){}) for sleep the due to asynchronus nature of JS
		// it might not run in sequence 
		
		element(by.model('second')).sendKeys(22)
		/*.then (function(){
		browser.sleep(2000);
			
		})*/
				element(by.id('gobutton')).click();
		//browser.sleep(2000);
		
		//90% protractor API's resolve promise, rest getting attribute from site will not resolve promise so we
		//  need to resolve and capture the output in the attribute from all the promise outputs
		
		element(by.css("h2[class='ng-binding']")).getText().then(function (result){
			
			console.log(result);
		})
		
		// jasmine internally take care of promise resolve 
		
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("34");

		
	})	
	
		
		
	
	
})