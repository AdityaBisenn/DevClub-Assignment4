const http = require("http");

const SECRET = "CIGAR"; // You can set any word as the secret answer

function myFunction(req, res) {
	// console.log({req}); // You can uncomment this to see the request object
	console.log(req.url);


	const GUESS = req.url.split("?q=")[1]; // Write logic to parse the word which the user guessed from the URL string
	let feedback = ""; // Write logic to compare the word with the secret, and generate the feedback string
	let secret_arr = SECRET.split("");
	if (GUESS.length != 5){
		res.end("Word should be of 5 letters");
	}
	else{
		for(let i=0;i<5;i++){
			if(GUESS[i]==SECRET[i]){
				feedback = feedback + "g"
			}
			else if (secret_arr.includes(GUESS[i])){
				feedback = feedback + "y"
			}
			else{
				feedback = feedback + "b"
			}
		}
	}

	
	res.end(feedback);
}

http.createServer(myFunction).listen(8080);
