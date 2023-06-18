import { Component } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';

interface Caption {
  category: string;
  image: string;
  captions: string[];
}

@Component({
  selector: 'app-captions',
  templateUrl: './captions.component.html',
  styleUrls: ['./captions.component.scss']
})
export class CaptionsComponent {

  // constructor(private _snackBar: MatSnackBar) { }


  captionCategories: Caption[] = [
    {
      category: "Travel",
      image: "assets/travel.png",
      captions: [
        "Adventure awaits.",
        "Wanderlust and city dust.",
        "Not all who wander are lost.",
        "Travel far, travel wide, travel deep.",
        "Life is short, and the world is wide.",
        "Travel is the only thing you can buy that makes you richer.",
        "Collect moments, not things.",
        "Traveling—it leaves you speechless, then turns you into a storyteller.",
        "The world is a book, and those who do not travel read only one page.",
        "Traveling is a rebellion against routine.",
        "To travel is to live.",
        "Travel makes one modest. You see what a tiny place you occupy in the world.",
        "The journey, not the arrival, matters.",
        "Travel is my therapy.",
        "Travel far enough to meet yourself.",
        "Travel and change of place impart new vigor to the mind.",
        "Traveling is like flirting with life. It's like saying, 'I would stay and love you, but I have to go; this is my station.'",
        "I haven't been everywhere, but it's on my list.",
        "Traveling is not about finding yourself, but creating yourself.",
        "Adventure is worthwhile."
      ]

    },
    {
      category: "Nature",
      image: "path-to-nature-image.jpg",
      captions: [
        "In every walk with nature, one receives far more than he seeks.",
        "The earth has music for those who listen.",
        "Nature always wears the colors of the spirit.",
        "Adopt the pace of nature: her secret is patience.",
        "Look deep into nature, and then you will understand everything better.",
        "Nature does not hurry, yet everything is accomplished.",
        "The poetry of the earth is never dead.",
        "The mountains are calling, and I must go.",
        "In nature, nothing is perfect and everything is perfect.",
        "Study nature, love nature, stay close to nature. It will never fail you.",
        "Nature is not a place to visit. It is home.",
        "Nature is the art of God.",
        "In the wilderness is the preservation of the world.",
        "The clearest way into the universe is through a forest wilderness.",
        "I go to nature to be soothed and healed, and to have my senses put in order.",
        "Choose only one master—nature.",
        "Keep close to nature's heart... and break clear away, once in a while, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
        "Look deep into nature, and then you will understand everything better.",
        "There is no WiFi in the forest, but I promise you will find a better connection.",
        "Nature is not just a place to visit. It is home."
      ]
    },
    {
      category: "Food",
      image: "path-to-food-image.jpg",
      captions: [
        "Good food is the foundation of genuine happiness.",
        "Food is not just eating energy. It's an experience.",
        "Cooking is love made visible.",
        "Food is our common ground, a universal experience.",
        "First we eat, then we do everything else.",
        "Life is uncertain. Eat dessert first.",
        "Food brings people together on many different levels. It's nourishment of the soul and body.",
        "One cannot think well, love well, sleep well, if one has not dined well.",
        "Eating good food is my favorite thing in the whole world. Nothing is more blissful.",
        "Food is for eating, and good food is to be enjoyed... I think food is, actually, very beautiful in itself.",
        "There is no love sincerer than the love of food.",
        "Food, to me, is always about cooking and eating with those you love and care for.",
        "Cooking is like love. It should be entered into with abandon or not at all.",
        "People who love to eat are always the best people.",
        "Food is symbolic of love when words are inadequate.",
        "Great food is like great sex. The more you have, the more you want.",
        "Food is the ingredient that binds us together.",
        "Food is memories.",
        "Food is art. Eat it with passion.",
        "There's no better feeling in the world than a warm pizza box on your lap."
      ]
    },
    {
      category: "Adventure",
      image: "path-to-nature-image.jpg",
      captions: [
        "Adventure awaits.",
        "Life is either a daring adventure or nothing at all.",
        "The biggest adventure you can take is to live the life of your dreams.",
        "In the middle of my adventure, I realized I was at my happiest place.",
        "To travel is to live.",
        "Adventure is worthwhile.",
        "The only trip you will regret is the one you didn't take.",
        "Live life with no excuses, travel with no regret.",
        "Jobs fill your pocket, but adventures fill your soul.",
        "Adventure is out there.",
        "Don't listen to what they say. Go see.",
        "Life is meant for spectacular adventures.",
        "Escape the ordinary.",
        "Adventure is calling, and I must go.",
        "Life is short. Travel often. Adventure always.",
        "Embrace the unknown, seek adventure, and create memories.",
        "Collect moments, not things.",
        "Live, travel, adventure, bless, and don't be sorry.",
        "Travel far, travel wide, travel deep.",
        "Life is an adventure. Take risks."
      ]
    },
    {
      category: "Love",
      image: "path-to-nature-image.jpg",
      captions: [
        "Love is not finding someone to live with, it's finding someone you can't live without.",
        "The best thing to hold onto in life is each other.",
        "You are my sun, my moon, and all my stars.",
        "In all the world, there is no heart for me like yours.",
        "Love is a friendship set to music.",
        "Love is composed of a single soul inhabiting two bodies.",
        "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.",
        "I have found the one whom my soul loves.",
        "You don't marry someone you can live with – you marry the person you cannot live without.",
        "To love is nothing. To be loved is something. But to love and be loved, that's everything.",
        "Love isn't something you find. Love is something that finds you.",
        "Love is like the wind, you can't see it but you can feel it.",
        "Love is the bridge between two hearts.",
        "Love is the greatest adventure.",
        "You are the reason I believe in love.",
        "Love is a language spoken by everyone, but understood only by the heart.",
        "Love is when you look into someone's eyes and see everything you need.",
        "Love is the key that unlocks the heart.",
        "True love stories never have endings.",
        "Love is not about how much you say 'I love you', but how much you prove that it's true."
      ]
    },
    {
      category: "Friendship",
      image: "path-to-nature-image.jpg",
      captions: [
        "A true friend is one soul in two bodies.",
        "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'",
        "Friendship is the only cement that will ever hold the world together.",
        "A friend is someone who knows all about you and still loves you.",
        "Friendship is a wildly underrated medication.",
        "A true friend is the greatest of all blessings.",
        "Friendship is the sweetest form of love.",
        "A good friend knows all your best stories. A best friend has lived them with you.",
        "A friend is someone who gives you total freedom to be yourself.",
        "Friends are the family we choose for ourselves.",
        "A real friend is one who walks in when the rest of the world walks out.",
        "Friendship isn't about whom you have known the longest; it's about who came and never left your side.",
        "A friend is someone who understands your past, believes in your future, and accepts you just the way you are.",
        "Friends are like stars. You don't always see them, but you know they're always there.",
        "A true friend is someone who is there for you when they would rather be somewhere else.",
        "A friend is someone who makes it easy to believe in yourself.",
        "A true friend is someone who is always there during the ups and downs, joys and sorrows.",
        "Friendship is the comfort of knowing that even when you feel alone, you're not.",
        "A friend is one of the nicest things you can have and one of the best things you can be.",
        "Friendship is not about who you have known the longest, but about who came into your life and never left."
      ]
    },
    {
      category: "Selfie",
      image: "path-to-nature-image.jpg",
      captions: [
        "Selfie mode: ON",
        "But first, let me take a selfie.",
        "Capture the moment.",
        "Selfie game strong.",
        "Selfie time!",
        "Smile, it's selfie time.",
        "Selfie queen/king.",
        "Happiness is taking a selfie.",
        "Life is better with a selfie.",
        "When nothing goes right, take a selfie.",
        "Selfies are my favorite.",
        "Selfie mode activated.",
        "Say cheese!",
        "Strike a pose.",
        "Embrace the selfie life.",
        "Selfies and sunshine.",
        "Selfie game on point.",
        "Confidence level: Selfie with no filter.",
        "Selfie lover since day one.",
        "Selfie and repeat."
      ]
    },
    {
      category: "Fitness",
      image: "path-to-nature-image.jpg",
      captions: [
        "Your body can do it. It's time to convince your mind.",
        "Train like a beast, look like a beauty.",
        "Fitness is not about being better than someone else. It's about being better than you used to be.",
        "Sweat is just fat crying.",
        "The only bad workout is the one that didn't happen.",
        "Fitness is not a destination, it's a way of life.",
        "The harder you work, the better you get.",
        "Don't stop until you're proud.",
        "Success starts with self-discipline.",
        "Push yourself, because no one else is going to do it for you.",
        "Fitness is not about being perfect. It's about effort and progress.",
        "The pain you feel today will be the strength you feel tomorrow.",
        "Train insane or remain the same.",
        "Wake up. Work out. Kick ass. Repeat.",
        "Fitness is not just about the body. It's also about the mind.",
        "Your body is your most priceless possession. Take care of it.",
        "Be stronger than your excuses.",
        "It's a slow process, but quitting won't speed it up.",
        "Fitness is not a one-time thing. It's a lifelong journey.",
        "You don't have to be great to start, but you have to start to be great."
      ]
    },
    {
      category: "Inspiration",
      image: "path-to-nature-image.jpg",
      captions: [
        "Believe you can and you're halfway there.",
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Don't watch the clock; do what it does. Keep going.",
        "The secret of getting ahead is getting started.",
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "You are never too old to set another goal or to dream a new dream.",
        "In the middle of every difficulty lies opportunity.",
        "The only way to do great work is to love what you do.",
        "Your time is limited, don't waste it living someone else's life.",
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "The harder you work for something, the greater you'll feel when you achieve it.",
        "It does not matter how slowly you go, as long as you do not stop.",
        "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "The future depends on what you do today.",
        "Dream big and dare to fail.",
        "Believe in the power of your dreams.",
        "Don't wait for opportunity. Create it.",
        "Success is not just about making money. It's about making a difference."
      ]
    },
    {
      category: "Beach",
      image: "path-to-nature-image.jpg",
      captions: [
        "Life's a beach. Enjoy the waves.",
        "Keep calm and think of the beach.",
        "Sun, sand, and sea - the perfect recipe for happiness.",
        "Take me to the beach and let my soul unwind.",
        "Let the waves hit your feet and the sand be your seat.",
        "Beach days are the best days.",
        "Life is better in flip-flops.",
        "Find your paradise and never let it go.",
        "In need of Vitamin Sea.",
        "Saltwater heals everything.",
        "The beach is my happy place.",
        "Dreams are made of sun and sand.",
        "Escape to the beach and leave your worries behind.",
        "Every day is a beach day if you believe it to be.",
        "Breathe in the salty air and let your worries drift away.",
        "Life is short. Go to the beach and make memories.",
        "Take me where the palm trees sway and the ocean breeze kisses my skin.",
        "The beach is calling, and I must go.",
        "Sun, sand, and a smile - the perfect combination.",
        "Life is a beach, enjoy the waves.",
        "Happiness comes in waves."
      ]
    },
    {
      category: "Sunset",
      image: "path-to-nature-image.jpg",
      captions: [
        "Sunsets and palm trees.",
        "Salty air, sun-kissed hair.",
        "Let the waves hit your feet and the sand be your seat.",
        "Sunsets are proof that there is beauty at the end of the day.",
        "Chase the sunset.",
        "Every sunset is an opportunity to reset.",
        "Sandy toes, ocean breeze, and sunsets on the beach.",
        "Life is better at the beach, especially during sunset.",
        "Sunsets, the most beautiful paintings in the sky.",
        "The beach is calling, and I must go.",
        "Watch more sunsets than Netflix.",
        "Beach vibes and sunset tides.",
        "Sunsets and palm trees, please.",
        "Sunsets, flip-flops, and sandy beaches.",
        "As free as the ocean at sunset.",
        "Life's a beach, enjoy the sunset.",
        "Sunkissed and sunset obsessed.",
        "The beach is my happy place, especially at sunset.",
        "Sunsets are proof that there is beauty in letting go.",
        "Catch the sunset and ride the wave."
      ]
    },
    {
      category: "Fashion",
      image: "path-to-nature-image.jpg",
      captions: [
        "Fashion is about dressing according to what's fashionable. Style is more about being yourself.",
        "Style is a way to say who you are without having to speak.",
        "Fashion is art and you are the canvas.",
        "Dress like you're already famous.",
        "Fashion is what you buy, style is what you do with it.",
        "Fashion is about expressing your true self.",
        "Clothes aren't going to change the world, the women who wear them will.",
        "Life is too short to wear boring clothes.",
        "Fashion is like eating. You shouldn't stick to the same menu.",
        "Fashion is a language that creates itself in clothes to interpret reality.",
        "Style is knowing who you are, what you want to say, and not giving a damn.",
        "Fashion is about dreaming and making other people dream.",
        "In a world full of trends, I want to remain classic.",
        "Fashion is a way to say who you are without having to speak.",
        "Elegance is the only beauty that never fades.",
        "Fashion is about dressing according to what's fashionable. Style is more about being yourself.",
        "I like my money right where I can see it: hanging in my closet.",
        "Fashion is not necessarily about labels. It's not about brands. It's about something else that comes from within you.",
        "Fashion is about dressing according to what's fashionable. Style is more about being yourself.",
        "Fashion is not something that exists in dresses only. Fashion is in the sky, in the street; fashion has to do with ideas, the way we live, what is happening."
      ]
    },
    {
      category: "Music",
      image: "path-to-nature-image.jpg",
      captions: [
        "Music is life.",
        "Where words fail, music speaks.",
        "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.",
        "Without music, life would be a mistake.",
        "Music expresses that which cannot be put into words and that which cannot remain silent.",
        "One good thing about music, when it hits you, you feel no pain.",
        "Music is the universal language of mankind.",
        "Music is the strongest form of magic.",
        "When words fail, music speaks.",
        "Music is the soundtrack of your life.",
        "Music washes away from the soul the dust of everyday life.",
        "Music is the art of thinking with sounds.",
        "Music is the great uniter. An incredible force. Something that people who differ on everything and anything else can have in common.",
        "Music is the wine that fills the cup of silence.",
        "Where words leave off, music begins.",
        "Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.",
        "Music is the poetry of the air.",
        "Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.",
        "Music is the divine way to tell beautiful, poetic things to the heart.",
        "Music is the moonlight in the gloomy night of life."
      ]
    },
    {
      category: "Art",
      image: "path-to-nature-image.jpg",
      captions: [
        "Every artist was first an amateur.",
        "Art is freedom made visible.",
        "The purpose of art is washing the dust of daily life off our souls.",
        "Art enables us to find ourselves and lose ourselves at the same time.",
        "Art speaks where words are unable to explain.",
        "Art is the lie that enables us to realize the truth.",
        "Creativity takes courage.",
        "Every artist dips their brush in their own soul and paints their own nature into their pictures.",
        "Art is not what you see, but what you make others see.",
        "Art is the most intense mode of individualism that the world has known.",
        "The artist is nothing without the gift, but the gift is nothing without work.",
        "Art is the only way to run away without leaving home.",
        "Art is the most beautiful of all lies.",
        "Art should disturb the comfortable and comfort the disturbed.",
        "Art is the lie that reveals the truth.",
        "Every artist was first an amateur.",
        "Art is the lie that makes us realize the truth.",
        "Art is the only way to escape without leaving home.",
        "Art is the most intense mode of individualism that the world has known.",
        "The essence of all beautiful art, all great art, is gratitude."
      ]
    },
    {
      category: "Family",
      image: "path-to-nature-image.jpg",
      captions: [
        "Family is not an important thing, it's everything.",
        "Family is where life begins and love never ends.",
        "The love of a family is life's greatest blessing.",
        "Family is a little world created with love.",
        "Family is the anchor that holds us through life's storms.",
        "Family is like branches on a tree, we all grow in different directions yet our roots remain as one.",
        "In family life, love is the oil that eases friction, the cement that binds us together, and the music that brings us joy.",
        "Family is the heart of a home.",
        "Family: where life begins and love never ends.",
        "Family is not just an important thing, it's everything.",
        "The love of a family makes life beautiful.",
        "Family is where our story begins.",
        "Family is the most important thing in the world.",
        "Home is where your family is.",
        "Family is a gift that lasts forever.",
        "Family is the key to happiness.",
        "Family is the ultimate source of strength and love.",
        "A happy family is a reflection of a happy life.",
        "Family is like music, some high notes, some low notes, but always a beautiful song.",
        "Family is the greatest blessing you can have in life."
      ]
    },
    {
      category: "Happiness",
      image: "path-to-nature-image.jpg",
      captions: [
        "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
        "Happiness is not something ready-made. It comes from your own actions.",
        "The only thing that will make you happy is being happy with who you are.",
        "Happiness is a direction, not a place.",
        "The key to being happy is knowing you have the power to choose what to accept and what to let go.",
        "Happiness is not the absence of problems, it's the ability to deal with them.",
        "The secret of happiness is not in doing what one likes, but in liking what one does.",
        "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
        "The happiness of your life depends upon the quality of your thoughts.",
        "Happiness is not a goal; it is a by-product.",
        "Happiness is the art of never holding in your mind the memory of any unpleasant thing that has passed.",
        "The greatest happiness comes from the smallest acts of kindness.",
        "Happiness is a choice, not a result.",
        "The happiness of your life depends on the quality of your thoughts.",
        "Happiness is not something you postpone for the future; it is something you design for the present.",
        "Happiness is not something you find, it's something you create.",
        "Happiness is a state of mind. It's just according to the way you look at things.",
        "Happiness is letting go of what you think your life is supposed to look like and celebrating it for everything that it is.",
        "Happiness is not having what you want. It is wanting what you have.",
        "Happiness is a butterfly, which when pursued, is always just beyond your grasp, but which, if you will sit down quietly, may alight upon you."
      ]
    },
    {
      category: "Celebration",
      image: "path-to-nature-image.jpg",
      captions: [
        "Cheers to a new beginning!",
        "Let's celebrate this moment!",
        "Party like there's no tomorrow!",
        "It's time to pop the champagne!",
        "Here's to the good times!",
        "Celebrate every small victory.",
        "Dance the night away!",
        "Live, laugh, celebrate!",
        "Raise your glass to success!",
        "Today is a day worth celebrating!",
        "Enjoy the festivities!",
        "Make memories that last a lifetime.",
        "Celebrate the journey, not just the destination.",
        "Cheers to love, laughter, and happiness!",
        "Celebrate the little joys in life.",
        "Let's make this a night to remember!",
        "Celebrate your achievements with pride.",
        "May the celebration never end!",
        "Toast to friendship and good times!",
        "Here's to a bright and beautiful future!"
      ]
    },
    {
      category: "Pets",
      image: "path-to-nature-image.jpg",
      captions: [
        "Pets are not our whole life, but they make our lives whole. - Roger Caras",
        "The more I learn about people, the more I like my dog. - Mark Twain",
        "A house is not a home without a pet.",
        "Dogs are not our whole life, but they make our lives whole. - Roger Caras",
        "Happiness is a warm puppy. - Charles M. Schulz",
        "Pets leave paw prints on our hearts.",
        "All you need is love and a dog.",
        "Until one has loved an animal, a part of one's soul remains unawakened. - Anatole France",
        "Dogs are not our whole life, but they make our lives whole. - Roger Caras",
        "Cats are connoisseurs of comfort. - James Herriot",
        "The greatness of a nation can be judged by the way its animals are treated. - Mahatma Gandhi",
        "Pets are like family members with fur.",
        "A dog is the only thing on earth that loves you more than he loves himself. - Josh Billings",
        "In a perfect world, every dog would have a home and every home would have a dog.",
        "Cats choose us; we don't own them. - Kristin Cast",
        "The only creatures that are evolved enough to convey pure love are dogs and infants. - Johnny Depp",
        "Pets understand the language of love.",
        "Animals are such agreeable friends - they ask no questions; they pass no criticisms. - George Eliot",
        "Cats are like potato chips. You can't have just one.",
        "Dogs do speak, but only to those who know how to listen. - Orhan Pamuk"
      ]
    },
    {
      category: "Life",
      image: "path-to-nature-image.jpg",
      captions: [
        "Life is 10% what happens to us and 90% how we react to it.",
        "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
        "Life is really simple, but we insist on making it complicated.",
        "In the end, it's not the years in your life that count. It's the life in your years.",
        "Life is a journey that must be traveled no matter how bad the roads and accommodations.",
        "Life is short, and it's up to you to make it sweet.",
        "Life is either a daring adventure or nothing at all.",
        "Life is not about waiting for the storm to pass but learning to dance in the rain.",
        "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        "The biggest adventure you can take is to live the life of your dreams.",
        "Life is 10% what happens to us and 90% how we react to it.",
        "The best way to predict the future is to create it.",
        "Life is too important to be taken seriously.",
        "Life isn't about finding yourself. It's about creating yourself.",
        "Life is really simple, but we insist on making it complicated.",
        "The purpose of our lives is to be happy.",
        "Life is either a daring adventure or nothing at all.",
        "The good life is one inspired by love and guided by knowledge.",
        "Life is a long lesson in humility.",
        "Life is short, and it's up to you to make it sweet."
      ]
    },
  ];
  selectedCategory: Caption | undefined;


  // {
  //   category: "Food",
  //   image: "path-to-nature-image.jpg",
  //   captions: []
  // }

  onCategorySelect(category: Caption): void {
    this.selectedCategory = category;
  }

  openSnackBar() {
    // this._snackBar.open('Caption copied to clipboard!','',
    // {duration: 2000}
    // );

  }


}
