function getRandomCanId(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getRandomPanel(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

var count = 0;

while(count <= 100){
    console.log("Candidate ID : " + getRandomCanId(999, 10000) + "\n" + "Panel Number : " + getRandomPanel(1, 5) + "\n");
    count++;
}