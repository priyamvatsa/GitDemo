var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
		
		// if you dont want to start the selenium server then skip the below statement , 
		//protrator fill find selenium folder/location
		// but script might not run in other browser.
//  seleniumAddress: 'http://localhost:4444/wd/hub',

  //specs: ['Spec1.js']
  //specs: ['ProtractorTest1.js'],
  specs: ['chainLocators.js'],
 // specs: ['SalesForce.js'],
  //specs:['OperatorSelectorPractice.js']
  //specs:['All.js']
  //  specs:['OperatorSelectorPractice.js']
  //  specs:['actions.js']
  //  specs:['HandlingJavaAlert.js']
  /*   specs:['Frames.js'],
  
capabilities: {
    browserName: 'chrome',
    'goog:chromeOptions': {
      w3c: false
     },
     
}, */
/*  specs:['synchronization.js'],
  
capabilities: {
    browserName: 'chrome',
    'goog:chromeOptions': {
      w3c: false
     },
     
}, */
  
 // specs:['Demo1.js']
//  specs:['Demo2Practice.js']
  
  /*  capabilities: {
	  'browserName': 'internet explorer'
	//'ignoreProtectedModeSettings': true;
	  
	}*/

onPrepare : function()
{
	  browser.driver.manage().window().maximize(),
	  jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		          savePath: 'target/screenshots'
		        })
	    );
	  
},
suites :
	{
	smoke : ['OperatorSelectorPractice.js','All.js'],
	Regression : 'chainLocators.js'
	},

jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};