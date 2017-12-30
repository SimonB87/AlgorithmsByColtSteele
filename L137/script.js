console.log("Movie DB");

/*Data for the Movie*/

var db = [
	{
	title: "LOTR1",
	type: "fantasy",
	rating: "great",
	seen: true,
	},
	{
	title: "LOTR2",
	type: "fantasy",
	rating: "good",
	seen: false,
	},
	{
	title: "Death Pool",
	type: "action",
	rating: "mediocre",
	seen: true,
	},
	{
	title: "Superman vs. Batman",
	type: "hero movie",
	rating: "so so",
	seen: false,
	},
]

/*Function for printing the database post*/

var start = "";//Starting phrase

function callDb(){
	/* For loop pulling data from the database */
	for(i = 0; i<db.length; i++ ){
		/* If statement editing the Starting phrase  */
		if(db[i].seen == true) {
			start = "You have experienced a movie called";
		} else if (db[i].seen == false){
			start = "You have not experienced so far movie called";
		}
		else {
			start = "Error";
		}
		/* variable pullling actual data from the database and adding some extra text around it  */
		var intro = db[i].title + " of genre " + db[i].type + " and you think it was " + db[i].rating;
		/* printing the inside of the variables  storing data */
		console.log(start, intro);
	}
}

callDb();
