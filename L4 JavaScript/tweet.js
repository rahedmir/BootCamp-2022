
var tweet = window.prompt("Tweet here ");

if (tweet.length > 140) {

    alert (tweet.slice(0,140));
}
else 
{
    alert(tweet);
}