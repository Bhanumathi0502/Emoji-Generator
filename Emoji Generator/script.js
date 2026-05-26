let emojis = [

"😀","😂","😍","😎","🥳",
"🔥","🤖","👻","😺","🎉",
"❤️","🌟","🍕","🚀","⚽",
"🐶","🍔","🎵","💡","🌈"

];

let button =
document.getElementById("btn");

button.addEventListener("click", function(){

    let randomIndex =

    Math.floor(Math.random() * emojis.length);

    document.getElementById("emoji").innerHTML =

    emojis[randomIndex];

});