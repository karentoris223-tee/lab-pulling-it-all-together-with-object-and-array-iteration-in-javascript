function gameObject() {
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
                "Reggie Evens": {
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
                "Bismack Biyombo": {
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
                "Brendan Hayword": {
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
}

function numPointsScored(playerName) {

const game = gameObject();
  const teams = [game.home, game.away];
  for (const team of teams) {
    const players = team.players;
    if (playerName in players) {
        const player = players[playerName];
return player.points;
}

}
}
console.log(numPointsScored("Ben Gordon"));


function shoeSize(playerName) {
    const game = gameObject();
    const teams = [game.home, game.away];

    for (const team of teams) {
        const players = team.players;

        if (playerName in players) {
            const player = players[playerName];
            return player.shoe;
        }
    }
}


function teamColors(teamName) {
    const game = gameObject();
    const teams = [game.home, game.away];

    for (const team of teams) {
        if (team.teamName === teamName) {
            return team.colors;
        }
    }
}


function teamNames() {
    const game = gameObject();

    return [game.home.teamName, game.away.teamName];
}


function playerNumbers(teamName) {
    const game = gameObject();
    const teams = [game.home, game.away];

    for (const team of teams) {
        if (team.teamName === teamName) {
            const players = team.players;
            const numbers = [];

            for (const playerName in players) {
                numbers.push(players[playerName].number);
            }

            return numbers;
        }
    }
}


function playerStats(playerName) {
    const game = gameObject();
    const teams = [game.home, game.away];

    for (const team of teams) {
        const players = team.players;

        if (playerName in players) {
            return players[playerName];
        }
    }
}


function bigShoeRebounds() {
    const game = gameObject();
    const teams = [game.home, game.away];

    let biggestShoe = 0;
    let rebounds = 0;

    for (const team of teams) {
        const players = team.players;

        for (const playerName in players) {
            const player = players[playerName];

            if (player.shoe > biggestShoe) {
                biggestShoe = player.shoe;
                rebounds = player.rebounds;
            }
        }
    }

    return rebounds;
}


function mostPointsScored() {
    const game = gameObject();
    const teams = [game.home, game.away];

    let highestPoints = 0;
    let topPlayer = "";

    for (const team of teams) {
        const players = team.players;

        for (const playerName in players) {
            const player = players[playerName];

            if (player.points > highestPoints) {
                highestPoints = player.points;
                topPlayer = playerName;
            }
        }
    }

    return topPlayer;
}


function winningTeam() {
    const game = gameObject();

    let homePoints = 0;
    let awayPoints = 0;

    for (const playerName in game.home.players) {
        homePoints += game.home.players[playerName].points;
    }

    for (const playerName in game.away.players) {
        awayPoints += game.away.players[playerName].points;
    }

    if (homePoints > awayPoints) {
        return game.home.teamName;
    } else {
        return game.away.teamName;
    }
}


function playerWithLongestName() {
    const game = gameObject();
    const teams = [game.home, game.away];

    let longestName = "";

    for (const team of teams) {
        const players = team.players;

        for (const playerName in players) {
            if (playerName.length > longestName.length) {
                longestName = playerName;
            }
        }
    }

    return longestName;
}


function doesLongNameStealATon() {
    const game = gameObject();
    const teams = [game.home, game.away];

    let longestName = "";
    let longestNameSteals = 0;
    let mostSteals = 0;

    for (const team of teams) {
        const players = team.players;

        for (const playerName in players) {
            const player = players[playerName];

            if (playerName.length > longestName.length) {
                longestName = playerName;
                longestNameSteals = player.steals;
            }

            if (player.steals > mostSteals) {
                mostSteals = player.steals;
            }
        }
    }

    return longestNameSteals === mostSteals;
}