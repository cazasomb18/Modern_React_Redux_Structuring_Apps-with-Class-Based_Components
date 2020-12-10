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
		//Need to get users physical location (built in function in all browsers for this!)
		//Need to determine the current month (we'll use some NPM packages/APIs to get this info)
		//Need to change text and styling based on location + month (conditional rendering)
