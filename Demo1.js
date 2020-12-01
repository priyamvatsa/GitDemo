describe ('Test suite name A', function() {
		
	
	function selectProduct(product)
	{
		
		// click on i phone x n it can be shifted to some other place (dynamic element handling)
		
		element.all(by.tagName("app-card")).each(function(item){
			
			item.element(by.css("h4 a")).getText().then(function(text){
					
					if(text==product)
						{
						item.element(by.buttonText('Add')).click();
					//	item.element(By.css("button[class*='btn-info']")).click();

									
						browser.sleep(3000);
						
						
						}
					
					})					
			})

		
		
		
	}
	it ('Open Website', function() {
				
		browser.get('https://rahulshettyacademy.com/angularpractice/');
		element(by.name("name")).sendKeys("Priyam");
		element(by.css("input[name='email']")).sendKeys("priyamvatsa.8@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("password0");
		element(by.css("input[type='checkbox']")).click;
		element(by.cssContainingText("input[class='form-control'] option","female")).click;	
		element.all(by.name("inlineRadioOptions")).first().click();
		element(by.buttonText("Submit")).click().then(function(){
			

			element(by.css("div[class*='success']")).getText().then(function(text)
					{
				console.log(text);
				browser.sleep(4000);
					})
					
		     element(by.name("name")).clear();
			element(by.name("name")).sendKeys("P").then(function(){
				
				element(by.css("div[class='alert alert-danger']")).getText().then(function(error){
					
				console.log("error");
				})
			
				/*to check if enter a char in email field error message is coming or not 
				 * to check tere is no error msg
				 * use element.all with count is 0
				 * 
				 * 
				 * 
				 */
				
				element(by.linkText("Shop")).click();
				
				selectProduct('Samsung Note 8');
				selectProduct('Blackberry');
				
				element(by.partialLinkText("Checkout")).getText().then(function(chktext){
					browser.sleep(3000);
								console.log(chktext);
							var res =chktext.split( '(');  // to split text n number
							var itemNo = res[1].trim().charAt(0); // to remove white space / 1 ) then get the first char
							expect(itemNo).toBe('2');	
					
							
						/*	var itemNo =Number(res[1].trim().charAt(0));
							expect(itemNo).toBe('2');	
							var total = itemNo+1;
							console.log(total);*/
							
					})
			
				
			})
		
		})
		
		

		
		

		
	})
	
	
})
