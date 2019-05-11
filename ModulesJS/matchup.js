

// Module Pattern
// IFEE(immediately invoked function expression)
var matchupModule = (function() { //invoking it like this this will remove the function from global namespace
    const lbj = 'James';
    const kd = 'Durant';
    
    function play(player1, player2){
        const p1 = Math.floor(Math.random() * player1.length);
        const p2 = Math.floor(Math.random() * player2.length);
        return p1 > p2 ? `${player1} wins`: `${player2} wins`
    }
    // revealing module pattern
    return {
        play: play
    }
})()

// exports for modules

export default function play(player1, player2){
    const p1 = Math.floor(Math.random() * player1.length);
    const p2 = Math.floor(Math.random() * player2.length);
    return p1 > p2 ? `${player1} wins`: `${player2} wins`
}