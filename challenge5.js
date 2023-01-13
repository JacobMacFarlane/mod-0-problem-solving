var travelDestination = ["Italy", "Japan", "Germany"] 
    
travelDestination.sort().forEach(travelDestination => {
    console.log(`The next place I want to visit is ${travelDestination}!`)
});

// For challenge 5 i had to make a list of vacation destinations 
// I was stuck on this for a while and researched forEach and it made it way more easy to understand for me
// I start the whole code with .sort because i want my final output to be in alphabetical order
// then the forEach which i found will complete an action for each element
// then i use the => which makes everything onm the left of it the input and everything after is the output. Thats how i understood it at least
// then i do console.log and add my interpolation and i am interpolating my variable(travelDestinations) each time

