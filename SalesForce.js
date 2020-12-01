describe ('Salesforce', function() {
	
	
	it ('login', function() {
		
		browser.waitForAngularEnabled(false)
		
	//	var url = browser.get("https://frwdemo-developer-edition.na139.force.com/protiviti/s/login/");
      //  browser.wait(url, 9 * 1000, 'Server should start within 5 seconds');
      //  browser.get(url);
		browser.get("https://frwdemo-developer-edition.na139.force.com/protiviti/s/login/").then(function(){
			browser.sleep(8000);
		})
		element(by.id('sfdc_username_container')).element(by.tagName('input')).sendKeys('ajay.kumar@protiviti.co.in.frwprotiviti').then(function(){
			browser.sleep(8000);
		})
		element(by.id('sfdc_password_container')).element(by.tagName('input')).sendKeys('ajay@12345');
		element(by.tagName('button')).click();
		
	//	element(by.id("sfdc_username_container")).element(by.css("div[class='*uiInputText']")).sendKeys("avc");
	//	element(by.id("sfdc_password_container")).sendKeys("avc");

		
	})
	
	
})
