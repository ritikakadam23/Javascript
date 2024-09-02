// const temperaturesCelsius = [15, 23, 30, 22, 10, -5, 0, 25, 28];

// Tasks:
// 1. Convert all temperatures to Fahrenheit using map().
// 2. Filter out the temperatures that are above freezing point (0°C).
// 3. Chain methods to find all temperatures below 20°C and convert them to Fahrenheit.

// let convert = temperaturesCelsius.map(temp=>(temp*9/5)+32)
//     console.log(convert)

// let temp = temperaturesCelsius.filter(cel=>cel>0)
// console.log(temp)

// let convert = temperaturesCelsius.filter(cel=>cel<20).map(cel=>(cel*9/5)+32)
// console.log(convert)


// const userAnalytics = {
//     "user1": { posts: 120, followers: 1500 },
//     "user2": { posts: 50, followers: 2500 },
//     "user3": { posts: 200, followers: 1200 },
//     "user4": { posts: 75, followers: 3000 },
//     "user5": { posts: 100, followers: 1800 }
// };

// Tasks:
// 1. Create an array of all usernames.
// 2. Create an array of usernames with their follower count.
// 3. Filter out users with more than 1000 followers.
// 4. Filter out users who have posted more than 100 posts.
// 5. Chain methods to find all users with more than 1000 followers and more than 100 posts.

// let names = Object.keys(userAnalytics);
// console.log(names)


const playerScores = [
    ["Alice", 20, 35, 50],
    ["Bob", 30, 40, 45],
    ["Charlie", 25, 30, 40],
    ["David", 50, 60, 55],
    ["Eve", 15, 20, 25]
];

// Tasks:
// 1. Create an array of players' names.
// 2. Create an array of total scores for each player (sum of three game scores).
// 3. Filter out players with a total score above 100.
// 4. Filter out players who scored less than 30 in any game.
// 5. Chain methods to find all players with a total score above 120 and who scored above 40 in their second game.


// let names = playerScores.map(player=>player[0])
// console.log(names)

// let names = playerScores.map(player=>player[0])
// let sum = playerScores.map(score=>score[1]+score[2]+score[3])
// console.log(sum)l