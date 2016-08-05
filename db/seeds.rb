# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: "rbembleton", password: "whateveryouwantittobe")
User.create!(username: "evelyn", password: "pizzalady")
User.create!(username: "drake", password: "feelnoways")

User.create!(username: "guest", password: "password")

thinkin_bout_you_lyrics = <<-TXT
A tornado flew around my room before you came
Excuse the mess it made, it usually doesn't rain
In Southern California, much like Arizona
My eyes don't shed tears, but, boy, they bawl

When I'm thinkin' 'bout you
(Ooh, no, no, no)
I've been thinkin' 'bout you
(You know, know, know)
I've been thinkin' 'bout you
Do you think about me still?
Do ya, do ya?

Or do you not think so far ahead? (Ahead)
'Cause I been thinkin' 'bout forever (Oooh, oooh)

Or do you not think so far ahead? (Ahead)
'Cause I been thinkin' 'bout forever (Oooh, oooh)

No, I don't like you, I just thought you were cool
Enough to kick it
Got a beach house I could sell you in Idaho
Since you think I don't love you, I just thought you were cute
That's why I kiss you
Got a fighter jet, I don't get fly it, though

I'm lyin' down thinkin' 'bout you

I've been thinkin' 'bout you
(You know, know, know)
I've been thinkin' 'bout you
Do you think about me still?
Do ya, do ya?

Or do you not think so far ahead? (Ahead)
'Cause I been thinkin' 'bout forever (Oooh, oooh)

Or do you not think so far ahead? (Ahead)
'Cause I been thinkin' 'bout forever (Oooh, oooh)

Yes, of course
I remember, how could I forget?
How you feel?
And though you were my first time
A new feel
It won't ever get old, not in my soul
Not in my spirit, keep it alive
We'll go down this road
'Til it turns from color to black and white

Or do you not think so far ahead? (Ahead)
'Cause I been thinkin' 'bout forever (Oooh, oooh)

Or do you not think so far ahead? (Ahead)
'Cause I been thinkin' 'bout forever (Oooh, oooh)
TXT

Track.create!(
  title: "Thinkin Bout You",
  artist: "Frank Ocean",
  lyrics: thinkin_bout_you_lyrics
)

pray_you_catch_me_lyrics = <<-TXT
[Verse 1]
You can taste the dishonesty
It's all over your breath as you pass it off so cavalier
But even that's a test
Constantly aware of it all
My lonely ear
Pressed against the walls of your world

[Chorus]
Prayin' to catch you whispering
I'm prayin' you catch me listening
I'm prayin' to catch you whispering
I'm prayin' you catch me
I'm prayin' to catch you whispering
I'm prayin' you catch me listening
I'm prayin' you catch me
[Verse 2]
Nothing else ever seems to hurt
Like the smile on your face
When it's only in my memory
It don't hit me quite the same
Maybe it's a cause for concern
But I'm not at ease
Keeping my head to the curb

[Chorus]
Prayin' to catch you whispering
I'm prayin' you catch me listening
I'm prayin' to catch you whispering
I'm prayin' you catch me
I'm prayin' you catch me
I'm prayin' you catch me
I'm prayin' you catch me

[Outro]
What are you doing my love?
TXT

Track.create!(
  title: "Pray You Catch Me",
  artist: "Beyoncé",
  lyrics: pray_you_catch_me_lyrics
)

electric_lady_lyrics = <<-TXT
[Verse 1]
Ooh, you shock it, shake it, baby
Electric lady, you're a star
You got a classic kind of crazy
But you know just who you are
You got the look the Gods agree they wanna see
All the birds and the bees
Dancing with the freaks in the trees
And watch the water turn to wine
Out in space and out your mind
Ooh, shock me one good time

[Hook x2]
Electric Lady, get way down
Cause tonight we gon' do what we want to
Lady (baby)
Electric Lady

[Verse 2]
Yeah, I'll reprogram your mind, come on, get in
My spaceship leaves at 10
I'm where I wanna be, just you and me
Baby, talking on the side, as the world spins around
Can you feel your spine unwind?
And watch the water turn to wine
Ooh, shock it one good time

[Hook x2]

[Bridge]
Gloss on her lips
Glass on the ceiling
All the girls showing love
While the boys be catching feelings
Once you see her face, her eyes, you'll remember
And she'll have you falling harder than a Sunday in September
Whether in Savannah, K-Kansas or in Atlanta
She'll walk in any room, have you raising up your antennas
She can fly you straight to the moon or to the ghettos
Wearing tennis shoes or in flats or in stilettos
Illuminating all that she touches, eye on the sparrow
A modern day Joan of her Arc or Mia Farrow
Classy, sassy, put you in a razzle-dazzy
Her magnetic energy will have you coming home like Lassie
Singing, "Ooh, shock it, break it, baby"
Electro-, sophisti-, funky, lady
We the kind of girls who ain't afraid to get down
Electric ladies go on and scream out loud

[Hook x2]

[Outro]
Ooh, shock it, break it, baby
Electric Lady, Electric Lady
TXT

Track.create!(
  title: "Electric Lady",
  artist: "Janelle Monáe",
  lyrics: electric_lady_lyrics
)

so_many_details_lyrics = <<-TXT
This ain’t appropriate, now
Brush my hand off your side
There’s no one else around
I just wanna tease your eyes
Maybe we can check these locks
I just wanna go inside
Why is it so dead on a Friday night
I guess the morning’s here if you wake by five

You send my life, into somewhere
I can’t describe, so many details
What had happened to the time we had
I thought you said you won't ever
You’ll never leave me
What happened to us? (i want to try)

Ok I’ll take you back
Alright, let’s pick up where we started
Don’t think that’s in my head

I’m not a bit cold hearted
Save yourself tonight, tomorrow I'll get you back
I don’t think I have your problem
(I don't think I have a problem)
I don’t think I have a problem
I don’t think I need to fuss
I don’t wanna bother you
And there is no reason to rush

You send my life, into somewhere
I can’t describe, so many details

What had happened to a time we had
I thought you said you won't ever
You’ll never leave me
What happened to us?

You send my life, into somewhere
I can’t describe, so many details

You send my life, into somewhere
I can’t describe, so many details

You send my life, into somewhere
I can’t describe, so many details
TXT

Track.create!(
  title: "So Many Details",
  artist: "Toro Y Moi",
  lyrics: so_many_details_lyrics
)

deadbeat_summer_lyrics = <<-TXT
Come and run from the heat
In the middle of a sunlit street
Seeing thoughts in repeat
But I'd rather get something to eat
Feeling senseless and beat
And I wonder if through chance we will meet

[Hook]
Deadbeat summer
It's just a deadbeat summer
Deadbeat summer
It's just a deadbeat summer
Deadbeat summer
It's just a deadbeat summer
Deadbeat summer
It's just a deadbeat summer
You're the one that I'll miss
From my summer when I'd stolen a kiss
Hear the endless hiss
As he rolls into the starlit abyss
All my dreams reminisce
Never thought this time would be like this

[Hook]
Deadbeat summer
It's just a deadbeat summer
Deadbeat summer
It's just a deadbeat summer
Deadbeat summer
It's just a deadbeat summer
Deadbeat summer
It's just a deadbeat summer
TXT

Track.create!(
  title: "Deadbeat Summer",
  artist: "Neon Indian",
  lyrics: deadbeat_summer_lyrics
)

paranoid_lyrics = <<-TXT
[Intro: Kanye West]
[Woman]
She really thought that?
[Kanye]
Yeah
[Woman]
Yeah. She’s so paranoid
[Kanye]
Yeah, that’s good, paranoid

Why are you so paranoid?
Don't be so paranoid
Don't be so ...
[Refrain: Kanye West]
Baby, don't worry about it
Lady, don't even think about it
You worry bout the wrong things, the wrong things
You worry bout the wrong things, the wrong things
You worry bout the wrong things, the wrong things
You worry bout the wrong things, the wrong things

[Verse 1: Kanye West]
Tell me right now
You really wanna spend your whole life alone?
A little time out might do you good, might do us good
Before we be done for good
Cause I could make it good I could make it hood
I can make you come I can make you go
I can make you high I can make you fly
Make you touch the sky hey maybe so
All of the time
You be up in mine checking through my cell phone baby no
You wanna kill the vibe on another night
Here's another fight oh here we go

[Hook: Kanye West & Mr. Hudson]
Baby don't worry about it
Lady we'll go out to the floor
Anyway they don't know you like I do
They'll never know you
Anyway they don't know you like I do
They'll never know you

[Verse 2: Kanye West]
All of the time
You wanna complain about the nights alone
So now you're here with me
Show some gratitude leave the attitude way back at home
Yea you see em look
Baby let em look give us cold looks cause we look cold
Yea you heard about all the word of mouth
Don't worry about what we can't control
All the talk in the world lost in the world
Till you finally let that thing go
You wanna check in to the heartbreak hotel
But sorry we're closed

[Hook & Refrain]
Baby don't worry about it
Lady we'll go out to the floor
Anyway they don't know you like I do
They'll never know you
Anyway they don't know you like I do
They'll never know you
Baby, don't worry about it
Lady, don't even think about it
You worry bout the wrong things, the wrong things
You worry bout the wrong things, the wrong things
You worry bout the wrong things, the wrong things
You worry bout the wrong things

[Hook: Mr. Hudson]
Anyway they don't know you like I do
They'll never know you
Anyway they don't know you like I do
They'll never know you
Anyway they don't know you like I do
They'll never know you
Anyway they don't know you like I do
They'll never know you
TXT

Track.create!(
  title: "Paranoid",
  artist: "Kanye West",
  lyrics: paranoid_lyrics
)
