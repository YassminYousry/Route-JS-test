var quotes = [
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author: "― Albert Einstein"
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mae West"
    },
    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't misnd.”",
        author: "― Bernard M. Baruch"
    },
    {
        quote: `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`,
        author: "― C.S. Lewis, The Four Loves"
    },
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        author: "― Mark Twain"
    },
    {
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author: "― Dr. Seuss"
    },
    {
        quote: `“You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
        Sing like there's nobody listening,
        And live like it's heaven on earth.”`,
        author: "― William W. Purkey"
    },
    {
        quote: "“Be the change that you wish to see in the world.”",
        author: "― Mahatma Gandhi"
    },
    {
        quote: "“Don't walk in front of me… I may not follow Don't walk behind me… I may not lead Walk beside me… just be my friend”",
        author: "― Albert Camus"
    },
];

var arr = [];
function newQuote() {
    var rand = Math.floor(Math.random() * (quotes.length));
    arr.push(rand);

    for (; arr[(arr.length - 1)] == arr[(arr.length - 2)]; rand) {
        rand = Math.floor(Math.random() * (quotes.length));
        arr.push(rand);
    };

    document.getElementById("quote").innerHTML = `${quotes[rand].quote}`;
    document.getElementById("author").innerHTML = `${quotes[rand].author}`;
    console.log(arr);
};
