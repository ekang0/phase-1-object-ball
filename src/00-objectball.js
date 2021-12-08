function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,  
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
};

console.log(gameObject());

//player score my code
/* function numPointsScored(playerName) {
    let obj = gameObject();
    if (obj['home']['players'][`${playerName}`]){
        return obj['home']['players'][`${playerName}`].points;
    } else if (obj['away']['players'][`${playerName}`]) {
        return obj['away']['players'][`${playerName}`].points;
    }
}; */

//player score video code option 1 
/* function numPointsScored (playerInput){
    const game = gameObject();
    for (const gameKey in game){
      const teamObj = game[gameKey];
      const playerObj = teamObj.players;
      for(const playerKey in playerObj){
        if(playerKey === playerInput){
          return playerObj[playerKey].points
                }
            }
        }
}; */

//option 2 numPointsScored 
//players function allows you to reuse that code that is an object of players
function homePlayers(){
	const game = gameObject();
	return game.home.players;
};

function awayPlayers(){
	const game = gameObject();
	return game.away.players;
}

function players(){
	const game = gameObject();
	const homePlayers = game.home.players;
	const awayPlayers = game.away.players;
	return Object.assign({}, homePlayers, awayPlayers);
	//const players = {...homePlayers, ...awayPlayers};
};

/* option 2 
function numPointsScored (playerInput){
	//const players = players();
	for(const playerName in players()){
		if(playerName === playerInput){
			return players()[playerName].points
		}
	}
};*/

//option 3 
function numPointsScored (playerInput){
			return players()[playerInput].points
};

//home player test
console.log('points Reggie Evans', numPointsScored("Reggie Evans"));
//away player test
console.log('points Ben Gordon', numPointsScored("Ben Gordon"));

//player shoe size original 
/*function shoeSize(playerName) {
    const obj = gameObject();
    if (obj['home']['players'][`${playerName}`]){
        return obj['home']['players'][`${playerName}`].shoe;
    } else if (obj['away']['players'][`${playerName}`]) {
        return obj['away']['players'][`${playerName}`].shoe;
    }
};*/

//player shoe size after video
function shoeSize(playerInput) {
	return players()[playerInput].shoe;
};


//home player shoe test
console.log('shoe size Reggie Evans', shoeSize("Reggie Evans"));
//away player shoe test 
console.log('shoe size Ben Gordon', shoeSize("Ben Gordon"));

/* my code before video
function teamColors(name) {
    let obj = gameObject();
    //if(name === "Brooklyn Nets") {
        return obj['home']['colors'];
    } else if (name === "Charlotte Hornets") {
        return obj['away']['colors'];
    }
    if (obj['home']['teamName'] === name) {
        return obj['home']['colors'];
    } else if (obj['away']['teamName'] === name) {
        return obj['away']['colors'];
    };
}; */

// code after video
function teams(){
	const game = gameObject();
	const homeTeam = game.home;
	const awayTeam = game.away;
	return Object.assign({}, homeTeam, awayTeam);
};

function homeTeam(){
	const game = gameObject();
	return game.home;
};

function awayTeam(){
	const game = gameObject();
	return game.away;
};

function teamColors(teamNameInput){
	if (homeTeam().teamName === teamNameInput) {
		return homeTeam().colors;
	} else if (awayTeam().teamName === teamNameInput){
		return awayTeam().colors;
	}
};

console.log(teamColors("Brooklyn Nets"));
console.log(teamColors("Charlotte Hornets"));

function teamNames(){
	const teamNames = [homeTeam().teamName, awayTeam().teamName];
	return teamNames;
};

console.log(teamNames());

//Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.
function playerNumbers(teamNameInput) {
	if (homeTeam().teamName === teamNameInput) {
		const allHomePlayers = homePlayers();
		const numbers = [];
		for (let player in allHomePlayers){
			let playerObj = allHomePlayers[player];
			numbers.push(playerObj.number)
		}
		return numbers;
	} else if (awayTeam().teamName === teamNameInput) {
		const allAwayPlayer = awayPlayers();
		const numbers = [];
		for (let player in allAwayPlayer){
			const playerObj = allAwayPlayer[player];
			numbers.push(playerObj.number)
		}
		return numbers;
	}
};

console.log(playerNumbers("Brooklyn Nets"));

console.log(playerNumbers("Charlotte Hornets"));

//Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats.
function playerStats(playerNameInput){
	const allPlayers = players();
	//console.log(allPlayers);
	return allPlayers[playerNameInput];
};

console.log("player stats", playerStats("Alan Anderson"));

//Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size.
function bigShoeRebounds(){
	const allPlayers = players();
	//console.log(allPlayers);
	const shoeSizes = [];
	for (let player in allPlayers){
		const playerObj = allPlayers[player];
		shoeSizes.push(playerObj.shoe)
	};
	const biggestShoe = Math.max(...shoeSizes);
	//console.log(biggestShoe);
	for (let player in allPlayers){
		const playerObj = allPlayers[player];
		if(playerObj.shoe === biggestShoe){
			return playerObj.rebounds
		}
	}
};

console.log(bigShoeRebounds());

/* 
Bonus Questions
Define functions to return the answer to the following questions:

Which player has the most points? Call the function mostPointsScored.
Which team has the most points? Call the function winningTeam.
Which player has the longest name? Call the function playerWithLongestName.
Super Bonus
Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon.
*/