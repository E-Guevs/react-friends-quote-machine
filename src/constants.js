/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~START: QUOTE LIST~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const quoteList = [
  {
    quote: "Nooo!",
    author: "Rachel Green",
  },
  {
    quote: "Well, maybe I don't need your money. Wait, wait, I said maybe!",
    author: "Rachel Green",
  },
  {
    quote: "No uterus, no opinion.",
    author: "Rachel Green",
  },
  {
    quote:
      "Isn't that just kick-you-in-the-crotch, spit-on-your-neck fantastic?",
    author: "Rachel Green",
  },
  {
    quote:
      "Just so you know, it's not that common, it doesn't happen to every guy, and it is a big deal!",
    author: "Rachel Green",
  },
  {
    quote: "Just so you know… With us, it's never off the table.",
    author: "Rachel Green",
  },
  {
    quote: "Oh, I'm sorry. Did my back hurt your knife?",
    author: "Rachel Green",
  },
  {
    quote:
      "Imagine the worst things you think about yourself. Now how would you feel if the one person that you trusted the most in the world not only thinks them, too, but actually uses them as reasons not to be with you?",
    author: "Rachel Green",
  },
  {
    quote: "He's so pretty, I wanna cry.",
    author: "Rachel Green",
  },
  {
    quote: "I got off the plane.",
    author: "Rachel Green",
  },
  {
    quote: "I know!",
    author: "Monica Geller",
  },
  {
    quote: "Seven!",
    author: "Monica Geller",
  },
  {
    quote: "Okay, it's baby time. Pants off, Bing.",
    author: "Monica Geller",
  },
  {
    quote: "You know what your nickname is, mister big...",
    author: "Monica Geller",
  },
  {
    quote: "Guys can fake it? Unbelievable! The one thing that's ours!",
    author: "Monica Geller",
  },
  {
    quote: "Welcome to the real world. It sucks. You're gonna love it.",
    author: "Monica Geller",
  },
  {
    quote:
      "You know what? If you're too afraid to be in a real relationship, then don't be in one.",
    author: "Monica Geller",
  },
  {
    quote: "I've got this uncontrollable need to please people.",
    author: "Monica Geller",
  },
  {
    quote:
      "You made it so easy… And now, you have to leave. And I have to live with a boy!",
    author: "Monica Geller",
  },
  {
    quote:
      "I'm gonna love you so much that no woman is ever gonna be good enough for you.",
    author: "Monica Geller",
  },
  {
    quote: "I don't even have a pla.",
    author: "Phoebe Buffay",
  },
  {
    quote: "Oh! My eyes! My eyes!",
    author: "Phoebe Buffay",
  },
  {
    quote: "Gimme your money punk!",
    author: "Phoebe Buffay",
  },
  {
    quote: "They don't know that we know they know we know.",
    author: "Phoebe Buffay",
  },
  {
    quote: "Oh, I wish I could but I don't want to.",
    author: "Phoebe Buffay",
  },
  {
    quote:
      "Boyfriends and girlfriends are gonna come and go but this… is for life.",
    author: "Phoebe Buffay",
  },
  {
    quote: "See? He's her lobster.",
    author: "Phoebe Buffay",
  },
  {
    quote: "Oh, you like that? You should hear my phone number.",
    author: "Phoebe Buffay",
  },
  {
    quote:
      "When I was growing up, I didn't have a normal mom and dad... or a regular family like everybody else.",
    author: "Phoebe Buffay",
  },
  {
    quote:
      "If you wanna receive emails about my upcoming shows, then please give me money so I can buy a computer.",
    author: "Phoebe Buffay",
  },
  {
    quote: "Hey... How you doin'?",
    author: "Joey Tribbiani",
  },
  {
    quote: "Joey doesn't share food!",
    author: "Joey Tribbiani",
  },
  {
    quote: "Look at me! I'm Chandler! Could I BE wearing any more clothes?!",
    author: "Joey Tribbiani",
  },
  {
    quote: "Some girl ate Monica!",
    author: "Joey Tribbiani",
  },
  {
    quote: "You don't own a TV? What's all your furniture pointed at?",
    author: "Joey Tribbiani",
  },
  {
    quote: "It's like a cow's opinion. It just doesn't matter. It's “moo.”",
    author: "Joey Tribbiani",
  },
  {
    quote: "You can't just give up. Is that what a dinosaur would do?",
    author: "Joey Tribbiani",
  },
  {
    quote:
      "That's right, I stepped up! She's my friend and she needed help. If I had to, I'd pee on anyone of you.",
    author: "Joey Tribbiani",
  },
  {
    quote: "These are just feelings. They're gonna go away.",
    author: "Joey Tribbiani",
  },
  {
    quote: "Here come the meat sweats.",
    author: "Joey Tribbiani",
  },
  {
    quote: "Could I BE any more...",
    author: "Chandler Bing",
  },
  {
    quote: "I'm hopeless and awkward and desperate for love!",
    author: "Chandler Bing",
  },
  {
    quote: "Hi, I'm Chandler. I make jokes when I'm uncomfortable.",
    author: "Chandler Bing",
  },
  {
    quote:
      "I'm not great at the advice. Can I interest you in a sarcastic comment?",
    author: "Chandler Bing",
  },
  {
    quote: "And I just want a million dollars!",
    author: "Chandler Bing",
  },
  {
    quote: "I've had a very long, hard day.",
    author: "Chandler Bing",
  },
  {
    quote: "So, it seems like the internet thing is here to stay.",
    author: "Chandler Bing",
  },
  {
    quote: "I tend to keep talking until somebody stops me.",
    author: "Chandler Bing",
  },
  {
    quote:
      "I love my wife more than anything in this world. And it… it kills me that I can't give her a baby.",
    author: "Chandler Bing",
  },
  {
    quote: "I say more dumb things before 9 A.M. than most people say all day.",
    author: "Chandler Bing",
  },
  {
    quote: "We were on a break!",
    author: "Ross Geller",
  },
  {
    quote: "You threw my sandwich away… My sandwich?! MY SANDWIIICH?!",
    author: "Ross Geller",
  },
  {
    quote: "Unagi.",
    author: "Ross Geller",
  },
  {
    quote: "Pivot! Pivot! PIVOT!",
    author: "Ross Geller",
  },
  {
    quote: "I'm Fine!",
    author: "Ross Geller",
  },
  {
    quote: "You're over me? When were you... under me?",
    author: "Ross Geller",
  },
  {
    quote: "What are you doing?! Get off my sister!",
    author: "Ross Geller",
  },
  {
    quote: "I grew up with Monica. If you didn't eat fast, you didn't eat.",
    author: "Ross Geller",
  },
  {
    quote: "No more falafel for you!",
    author: "Ross Geller",
  },
  {
    quote: "I'm the holiday armadillo!",
    author: "Ross Geller",
  },
];

const quoteListToBeUsed = [];
for (let i = 0; i < quoteList.length; i++) {
  quoteListToBeUsed.push(quoteList[i]);
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~END: QUOTE LIST~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~START: RANDOM NUMBERS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const initialRandomNumber = Math.floor(Math.random() * quoteList.length);
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~END: RANDOM NUMBERS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~START: INITIAL STATE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const initialState = {
  quoteGenerated: quoteList[initialRandomNumber].quote,
  quoteGeneratedAuthor: quoteList[initialRandomNumber].author,
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~END: INITIAL STATE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

export { quoteList, quoteListToBeUsed, initialRandomNumber, initialState };
