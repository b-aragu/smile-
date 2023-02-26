// Select the smiley image and the quote element
const smile = document.getElementById("smile");
const quote = document.getElementById("quote");

// Add event listener for when the smiley is clicked
smile.addEventListener("click", function() {
	// Add class to animate the smiley
	smile.classList.add("animate");

	// Generate a random positive quote and display it
	const quotes = ["You are awesome!", "Keep shining!", "Believe in yourself!", "Stay positive!", "You can do it!", "Believe you can and you're halfway there", "You are never too old to set another goal or to dream a new dream", "In the middle of every difficulty lies opportunity", "Be the change you wish to see in the world", "The only way to do great work is to love what you do"];
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
