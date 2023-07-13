
var randomQuote = function () {
    const quotes = [{
        quote: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
        author: `' Albert Einstein'`
    },

    {
        quote: `"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."`,
        author: `' Bernard M. Baruch'`
    },

    {
        quote: `"You've gotta dance like there's nobody watching,Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth"`,
        author: `' William W. Purkey'`
    },

    {
        quote: `"In three words I can sum up everything I've learned about life: it goes on."`,
        author: `' Robert Frost'`
    },

    {
        quote: `"Dont walk in front of me… I may not follow Dont walk behind me… I may not lead Walk beside me… just be my friend"`,
        author: `'Albert Camus'`
    },

    {
        quote: `"It is better to be hated for what you are than to be loved for what you are not"`,
        author: `' Andre Gide'`
    },
    {
        quote: `"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."`,
        author: `'Ralph Waldo Emerson'`
    },

    {
        quote: `"We accept the love we think we deserve."`,
        author: `'Stephen Chbosky'`
    },

    {
        quote: `"Always forgive your enemies; nothing annoys them so much."`,
        author: `' Oscar Wilde'`
    },

    {
        quote: `"A friend is someone who knows all about you and still loves you."`,
        author: `'Elbert Hubbard'`
    },

    {
        quote: `"Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself."`,
        author: `'C.S. Lewis'`
    },


    ];
  
var arrayIndex = Math.floor(Math.random() * quotes.length);
document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
document.getElementById("author").innerHTML = quotes[arrayIndex].author;


}

 