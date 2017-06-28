## At a high level, how does your system work? 

###### My system creates a Singelton INN instance and tracks rooms that are available to book. Originally my idea has been to introduce a Booking Model that you could attach to a room which could describe the booking information, but for the sake of time I attached a property to the Room.

## How would we extend your system if we had to add more rooms, more business logic constraints, more gnomes?

###### You could build endpoints out to add either rooms, or gnomes to the INN object which tracks a high-level inventory of the resources at the INN. To address more business logic contsraints, you would carefully exted the capabilites of each model to handle the business logic needed.

## What documentation, websites, papers, etc. did you consult for this assignment?
* schema.org
* stackOverflow
* Express Router Docs
* Design Patterns for Dummies (ISBN 9780470046968)

## What third-party libraries or other tools does your application use? How did you choose each library or framework you used?
###### I kept the stack as lean as I could. I used ES5 to avoid dealing with Transpilation, and wrote all my own models. Something like Sequelize could have done this for me, but especially considering a persistence layer wasn't necessary, it would have been overkill. It's a simple express-generated application that uses lodash convenience methods, and of course, Express to easily spin up the Node server.

## How long did you spend on this exercise? If you had unlimited time to spend on this, how would you spend it and how would you prioritize each item? 
###### I spent 3-4 hours on the project. I would create the Gnomes Object, and scheduling endpoint, since that was an immediate need of the spec. This would be first priority. The Gnomes endpoint would be closely followed by some sort of authentication, even if it was a naive solution, to protect the management side of the API. Finally, in the near future, I would have liked to implement an event-driven method to help decrement the Inn's inventory, whether it was Gnome-hours, or rooms, so that the Gnomes, or Rooms were always listening for certain events. Finally, it is important to introduce some concept of time. For example, check in, or checkout times, and of course, room-readiness time. This requires detailed (and thorough) planning, and the API would be functional without the concept of time (so for example, a front desk person can manually hit the API to unbook a room),so I would have set this on a lower priority compared to the items mentioned above.

## If you were going to implement a level of automated testing to prepare this for a production environment, how would you go about doing so?
###### There are 3 levels of testing I would implement for the API: unit testing, integration testing, and end-to-end testing. I would absolutely have unit tests for the models, as they handle most of the business logic. These would run on a CI system with every push. Then I would have an integration testing suite to test on our Staging process which mocks out API calls and verifies that the endpoints are returning what the tests expect, on a controller level. Finally I would implement regression tests that fully mock out a client-lifecycle, ie. have a script that books a room, and then unbooks, in this case. These 3 layers of tests ensure system-wide integrity.