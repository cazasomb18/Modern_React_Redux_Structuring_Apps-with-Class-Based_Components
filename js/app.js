//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Section 4 - Structuring Apps with Class-Based Components

//How React USED TO BE
	//Functional Components ==> 
		//Can produce JSX to show content to the user
	//Class Components ==> 
		//Can produce JSX to show content to the user
		//Can use Lifecycle Method system to run code at specific points in time.
		//Can use the 'state' system to update content on the screen.

//How React is NOW
	//Class Components
		//Can produce JSX to show content to the user
		//Can use Lifecycle Method system to run code at specific points in time.
		//Can use the 'state' system to update content on the screen.

	//HOOKS System / Function Components
		//Can produce JSX to show content to the user.
		//Can use HOOKS to run code at specific points in time.
		//Can use HOOKS to access state system and update content on screen.

//If Class-Based Components and Functional Components w/HOOKS have the same functionality...
	//WHICH ONE DO WE USE???

	//CLASS COMPONENTS => established
		//Companies with established projects are using Class-based components
	//FUNCTIONAL/CLASS COMPONENTS => newer
		//Companies with newer project may be using Class-based OR Function-based components
		//THEREFORE WE MUST BE ABLE TO USE BOTH APPROACHES!!!

//React Learning Approaches
	//REALLY HARD ==> LEARN HOOKS ==> LEARN REDUX
	//MUCH EASIER ==> LEARN CLASS COMPONENTS ==> LEARN HOOKS ==> LEARN REDUX
		//***** this is the approach we will take!!!




//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//APPLICATION OVERVIEW
	//IF USER IS
		//in northern hemisphere AND between OCT-MAR ==> DISPLAY WINTER MESSAGE
		//in southern hemisphere AND between OCT-MAR ==> DISPLAY SUMMER MESSAGE

	//APP CHALLENGES
		//Need to get users physical location (built in function in all browsers for this! NAVIGATOR)
		//Need to determine the current month (we'll use some NPM packages/APIs to get this info)
		//Need to change text and styling based on location + month (conditional rendering)




//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//SEASONS APP
	//Will most likely need 2 components
		//App Component -> determines location of user and current month (need location and time)
		//Season Display -> will show customized text/icons based on props




//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//To get our location we will use the Geolocation API
	//devloper.mozilla.org/en-US/docs/Web/API/Geolocation_API -->> documentation, TREMENDOUS AMOUNTS
		//note geolocation may be unavailable in China - we have a workaround for that.

	//Syntax: 
		window.navigator.geolocation.getCurrentPosition( 
			(position) => console.log(position),
			(err) => console.log(err)
		);

		//needs 2 function callbacks:
			//1 - SUCCESSCALLBACK: (position) => console.log(position); will be called every time navigator
																		//successfully gets user position
			//2 - FAILURECALLBACK: (err) => console.log(err); will be called every time navigator fails 
															//user position




//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//We want to develop our app to work EVEN IF OUR USER DECLINES TO SHARE THEIR LOCATION

	//We need to make sure that we get the allow/deny modal to pop up again.
		//To do this: click the i left of the URL in browser, change to ask and refresh page.




//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Handling Async Operations with Functional Components
	//How would be get the page to update and display our latitude and longitude?
		//would be VERY CHALLENGING with a FUNCTIONAL COMPONENT

		//TIMELINE: Order of events when your app is loaded into a user's browser
			//JS file loaded by browser
			//App component gets created
			//We call geolocation service
			//App return JSX, gets rendered to page as HTML
			//We get result of geolocation
				//... as a result we are waiting for the location to load while app is already rendered
				//SOLUTION IS TO USE A CLASS-BASED COMPONENT WITH REACT'S STATE SYSTEM



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Refactoring from Functional to Class Components

	//TIMELINE: Order of events when your app is loaded into a user's browser
			//JS file loaded by browser
			//App component gets created
			//We call geolocation service
			//App return JSX, gets rendered to page as HTML
			//We get result of geolocation
			//++++TELL THE COMPONENT TO RERENDER ITSELF WITH THIS NEW INFORMATION+++++

	//RULES OF CLASS COMPONENTS
		//Must be a JS Class
			//Classes introduced in ES2015
				//JS inheritance works on prototypal inheritance (slightly different than slightly inheritance from Java or Ruby)
		//Must extend (subclass) React.Component
		//Must define a 'render' method that returns some of JSX

	//When we make a class, React expects that our class component has many other methods attached to it
	//(other than render)
		//We are extending React.Component so that we can SUBCLASS our App Component
			//We are borrowing functionality into our app class.
	