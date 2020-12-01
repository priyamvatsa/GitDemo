describe ('Handling Java alerts', function() {
	
	
	it ('Open non anguar Website', function() {
		
		
		browser.waitForAngularEnabled(false)
		browser.get("https://rahulshettyacademy.com/AutomationPractice/");
		
		element(by.id("alertbtn")).click();
		/*browser.switchTo().alert().getText().then(function(msg){
			
			console.log(msg);
			
			
		})*/
		browser.switchTo().alert().accept().then(function(){
			
		browser.sleep(3000);
		})
		
	
		
		
	
	})
	
	
})
