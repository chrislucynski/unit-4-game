// VARIABLES    
var rubyValue = generateGemValue();
var sapphireValue = generateGemValue()
var topazValue = generateGemValue()
var emeraldValue = generateGemValue()
var targetScore = 0;
var totalScore = 0;
var wins = 0;
var losses = 0;

// FUNCTIONS
// generate target score
function generateTargetScore(min, max) {
    targetScore = Math.floor(Math.random() * (max - min + 1) + min);
    $("#target-score").text(targetScore);
}
generateTargetScore(19, 120);

// generate Gem value
function generateGemValue(){
   return Math.ceil(Math.random() * 12)
}

// on-click events for crystals
$('#ruby').click(function(){
    totalScore += rubyValue
    console.log(rubyValue)
    console.log(totalScore)
    $('#your-score').text(totalScore);
    scoreChecker();
})

$('#sapphire').click(function(){ 
    totalScore += sapphireValue
    console.log(sapphireValue)
    console.log(totalScore)
    $('#your-score').text(totalScore);
    scoreChecker();
})

$('#topaz').click(function(){
    totalScore += topazValue
    console.log(topazValue)
    $('#your-score').text(totalScore);
    scoreChecker();
})

$('#emerald').click(function(){
    totalScore += emeraldValue
    console.log(emeraldValue)
    $('#your-score').text(totalScore);
    scoreChecker();
})

// conditions for winning, losing, and resetting
function scoreChecker(){
    if (totalScore === targetScore){
        alert("You won!!")
        wins++
        $('#wins').text(wins)
        $('#your-score').text(0);
        generateTargetScore(19, 120);
    }  if (totalScore > targetScore) {
        alert("You lost!")
        losses++
        $('#losses').text(losses);
        $('#your-score').text(0);
        generateTargetScore(19, 120);
    } 
 }






