# massive-review

	® What is it? Massive.js, or Massive for short, is a package that acts as a bridge between our back-end and the database
		◊ What it is not:
			} It is not where we store data
			} It is not the database
			} It is not our tables
		◊ What it does
			} It creates a connection for us and sends queries that we set up
				w This connection holds information about accessing our database, not information that's in our tables 
			} We set up queries in a folder called 'db' within the top-level of our app that massive can access
			} It transports data to and from the database
					– We can receive data back and do whatever we want with it
					– Changing the data we receive does not change the database
              				- We can only change the database if we send queries that do so