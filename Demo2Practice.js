/*
 * Assignment 
 * Click on checkout
 * grab price values excluding rupees
 * then add the sum 
 * n match it with total value - check
 * count of items present in the page
 * remove one item 
 * then again print no of items

 */

describe ('Test suite name A', function() {
		
	
	function selectProduct(product)
	{
		
		// click on i phone x n it can be shifted to some other place (dynamic element handling)
		
		element.all(by.tagName("app-card")).each(function(item){
			
			item.element(by.css("h4 a")).getText().then(function(text){
					
					if(text==product)
						{
						item.element(by.buttonText('Add')).click();							
											
						
						}
					
					})					
			})

}
	it ('Open Website', function() {
		         		
		        // Open the site
		        browser.get('https://rahulshettyacademy.com/angularpractice/');
		
		        // click on shop to open the shopping page
			    element(by.linkText("Shop")).click();
				
			    // call the function to select items
				selectProduct('Samsung Note 8');
				selectProduct('Blackberry');
				
				// Click on checkout button 
				element(by.partialLinkText("Checkout")).click().then(function(){
					//browser.sleep(5000);
				})
				
				// grab price values excluding the rupee 
				
						/*element.all(by.tagName('tr')).each(function(eachtag){
			
		eachtag.element(by.tagName('strong')).getText().then(function(result){
			
			console.log(result);
		
		})
		}) */ 
				
				var addition = 0;
		      	element.all(by.css("tr > td:nth-child(4) > strong")).each(function(tag){
		      		tag.getText().then(function(money){
		      			var res = money.split( '.');  
						var price = Number(res[1].trim());
						addition = addition + price ;
						console.log(money);
						//console.log(addition);
		 	      		});
		 	      		
			})	;
			
			var totalPrice = 0;
			element(by.css("h3 strong")).getText().then(function(result){
		
				var tot = result.split( '.');  
				var totalPrice = Number(tot[1].trim());		
				console.log(totalPrice);
								
				//expect(totalPrice == 0);
				expect(addition).toEqual(totalPrice);
		});
		    
			// match with total price
		  //  expect(addition).toEqual(totalPrice);
		 //  expect(addition).toBe(totalPrice);
			
             //count of items present on the page
			
			element.all(by.className("btn btn-danger")).count().then(function(counts){
			console.log("Total items "+counts);
						
			})
			
			// remove item
			/*element.all(by.css("tr > td:nth-child(1) > h4")).each(function(tag){
	      		tag.getText().then(function(productName){
	      			
					console.log("Product name "+productName);
					//console.log(addition);
	 	      		});
	 	      		
		})	;*/
           
                element(by.css("tr > td:nth-child(1) > h4")).then(function(tag){
                	console.log('tag');
                	
                });
                
				
				
			})
		})
		
		

		
		

		

