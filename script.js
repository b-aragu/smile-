// Select the smiley image and the quote element
const smile = document.getElementById("smile");
const quote = document.getElementById("quote");

// Add event listener for when the smiley is clicked
smile.addEventListener("click", function() {
	// Add class to animate the smiley
	smile.classList.add("animate");

	// Generate a random positive quote and display it
	const quotes = [  "You are awesome! 😎👍",  
	"Keep shining! ✨🌟",  
	"Believe in yourself! 🙌💪",  
	"Stay positive! 😊👍", 
	"You can do it! 💪🚀",  
	"Believe you can and you're halfway there. 🌟💪",  
	"You are never too old to set another goal or to dream a new dream. 🌅💭", 
	"In the middle of every difficulty lies opportunity. 🔍💼",  "Be the change you wish to see in the world. 🌍💫",  "The only way to do great work is to love what you do. ❤️💼",  "Reality is merely an illusion, albeit a very persistent one. 🤔💭",  "The truth is rarely pure and never simple. 🤫💬",  "In three words I can sum up everything I've learned about life: it goes on. 🌍👍",  "We are all in the gutter, but some of us are looking at the stars. 🌟🌃",  "Life is a journey, not a destination. 🚶‍♂️🌅",  "The only thing we have to fear is fear itself. 🙀😱",  "The best way to predict the future is to invent it. 🔮👨‍💻",  "It always seems impossible until it's done. 🤯🏆",  "The future belongs to those who believe in the beauty of their dreams. 💭🌟",  "Success is not final, failure is not fatal: it is the courage to continue that counts. 💪🏆", "You got this! 💪🏼",
	"Be yourself; everyone else is already taken. 🌈",
	"Don't stop until you're proud. 🙌🏼",
	"Stay focused and extra sparkly. ✨",
	"The only way to have a good day is to start it with one. 🌅",
	"Take the risk or lose the chance. 🎲",
	"Chase your dreams, but always know the road that'll lead you home again. 🚀",
	"Success is not a destination, it's a journey. 🌟",
	"The future is yours. Go get it. 🔮",
	"Be the energy you want to attract. 🔋",
	"The world is full of nice people. If you can't find one, be one. 🌍",
	"Happiness is not something ready made. It comes from your own actions. 😊",
	"Don't wait for opportunity. Create it. 🌟",
	"Let your dreams be your wings. 🕊️",
	"Be fearless in the pursuit of what sets your soul on fire. 🔥",
	"Your vibe attracts your tribe. 🤙🏼",
	"Do it with passion or not at all. 💯",
	"Believe you can and you're halfway there. 🌟",
	"Stay positive, work hard, and make it happen. 🙏🏼",
	"Don't cry because it's over, smile because it happened🎶",
	"make a difference in the world, be remembered for it🌍💫",  
	"Life is a precious gift. Don't waste it being unhappy, miserable, or anything else you don't want to be🎁💭", 
	"We're all human at the end of the day, be you🙌🌟", 
	"It's hard to love yourself sometimes, but you have to know that you're worth it❤️💭",  
	"The only way to change the world is to make a little noise🌍🔊", 
	"The only thing that will make you happy is being happy with who you are 😊🎶",
	"The beauty of life is that it is so unpredictable tomorrow gonna be better 🌅💫", 
	"just want to inspire💭"];
	const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	quote.innerHTML = randomQuote;
	quote.style.display = "block";

	// Display the share button
	const shareBtn = document.getElementById("share-btn");
	shareBtn.style.display = "block";
});

// Select the share button
const shareBtn = document.getElementById("share-btn");

// Add event listener for when the share button is clicked
shareBtn.addEventListener("click", function() {
	// Redirect to social media share page
	window.location.href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
});

// Select the smiley image and the color picker
const smileColor = document.getElementById("smile");
const colorPicker = document.getElementById("color-picker");

// Add event listener for when the color picker value changes
colorPicker.addEventListener("change", function() {
	// Change the smiley border color to the selected color
	smileColor.style.borderColor = this.value;
});
