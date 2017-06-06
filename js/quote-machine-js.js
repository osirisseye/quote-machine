var quote = [
      "Don't be so humble - you are not that great.",
      "Moral indignation is jealousy with a halo.",
      "Glory is fleeting, but obscurity is forever.",
      "The fundamental cause of trouble in the world is that the stupid are cocksure while the intelligent are full of doubt.",
      "Victory goes to the player who makes the next-to-last mistake.",
      "His ignorance is encyclopedic",
      "If a man does his best, what else is there?",
      "Political correctness is tyranny with manners.",
      "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
      // The last item in the list should not have a comma after it, some
      // browsers will ignore it but others will throw an error.
      "When one person suffers from a delusion it is called insanity; when many people suffer from a delusion it is called religion."
    ];




function printquote(){
	var randomquote = Math.floor(Math.random()*(quote.length));
	var quot = quote[randomquote];

	document.getElementById("quoteplace").innerHTML = quot;
    };