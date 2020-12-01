describe ('Actions Demo', function() {
		
	it ('Open Website', function() {
		
	    browser.get('https://rahulshettyacademy.com/AutomationPractice/');

	    
	    browser.actions().mouseMove(element(by.id("autocomplete")).sendKeys("india")).perform();
	    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
	    browser.actions().sendKeys(protractor.Key.ENTER).perform();
	    
	    
	})
	
	
	
})