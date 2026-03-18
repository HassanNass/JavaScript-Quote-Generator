let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [{
	quote: `"He who has a thousand friends has not a friend to spare, 
	and he who has one enemy will meet him everywhere."`,
	person: ` Ali ibn Abi Talib`
}, {
	quote: `“Do not grieve. Indeed, Allah is with us.”`,
	person: ` Prophet Muhammad`
}, {
	quote: `“Knowledge enlivens the soul.”`,
	person: ` Ali ibn Abi Talib`
}, {
	quote: `“Trust in God, but tie your camel.”`,
	person: ` Prophet Muhammad`
}, {
	quote: `“The strongest among you is the one who controls his anger.”`,
	person: ` Prophet Muhammad`
}, {
	quote: `“A man’s measure is his will.”`,
	person: ` Al-Mutanabbi`
}, {
	quote: `“Silence is the best reply to a fool.”`,
	person: ` Ali ibn Abi Talib`
}, {
	quote: `“Seek knowledge from the cradle to the grave.”`,
	person: ` Prophet Muhammad`
}, {
	quote: `“If you see the lion’s teeth, do not think the lion is smiling.”`,
	person: ` Al-Mutanabbi`
}, {
	quote: `“Fear a person who has nothing to lose.”`,
	person: ` Ibn-Khaldun`
}, ];

btn.addEventListener("click", function() {

	let random_quote = Math.floor(Math.random() * quotes.length);

	quote.innerText = quotes[random_quote].quote;
	person.innerText = quotes[random_quote].person;

})