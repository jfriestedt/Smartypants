# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Users

User.create!(username: "scholar48", password: "whateveryouwantittobe")
User.create!(username: "billsavant", password: "pizzalady")
User.create!(username: "ProdigyJones", password: "feelnoways")

User.create!(username: "guest", password: "password")

# Tracks

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
  album: "Channel Orange",
  lyrics: thinkin_bout_you_lyrics,
  image: File.open('app/assets/images/Channel-orange.jpg')
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
  album: "Lemonade",
  lyrics: pray_you_catch_me_lyrics,
  image: File.open('app/assets/images/Lemonade.jpg')
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
  album: "The Electric Lady",
  lyrics: electric_lady_lyrics,
  image: File.open('app/assets/images/Electric-Lady.png')
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
  album: "Anything In Return",
  lyrics: so_many_details_lyrics,
  image: File.open('app/assets/images/Anything-In-Return.jpeg')
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
  album: "Psychic Chasms",
  lyrics: deadbeat_summer_lyrics,
  image: File.open('app/assets/images/Psychic-Chasms.jpg')
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
  album: "808s & Heartbreak",
  lyrics: paranoid_lyrics,
  image: File.open('app/assets/images/808s-And-Heartbreak.jpg')
)

# 0: Frank Ocean - Thinkin Bout You
# 1: Beyonce - Pray You Catch Me
# 2: Janelle Monae - Electric Lady
# 3: Toro Y Moi - So Many Details
# 4: Neon Indian - Deadbeat Summer
# 5: Kanye West - Paranoid

# Annotations

Annotation.create!(
  author_id: User.all[1].id,
  track_id: Track.all[5].id,
  body: "Kanye thinks \"paranoid\" is a good word to describe the way his partner is behaving.",
  referent_start_index: 106,
  referent_end_index: 133
)
Annotation.create!(
  author_id: User.all[1].id,
  track_id: Track.all[5].id,
  body: "Repetition breeds understanding",
  referent_start_index: 278,
  referent_end_index: 477
)
Annotation.create!(
  author_id: User.all[1].id,
  track_id: Track.all[5].id,
  body: "Kanye is capable of eliciting feelings that are appealing to his partner.",
  referent_start_index: 646,
  referent_end_index: 806
)
Annotation.create!(
  author_id: User.all[1].id,
  track_id: Track.all[4].id,
  body: "Neon Indian captures the feeling of having nothing to do by repeating a simple phrase over and over",
  referent_start_index: 201,
  referent_end_index: 376
)

Annotation.create!(
  author_id: User.all[1].id,
  track_id: Track.all[4].id,
  body: "Neon Indian sets the scene of a hot suburban day in the summer.",
  referent_start_index: 0,
  referent_end_index: 59
)
Annotation.create!(
  author_id: User.all[1].id,
  track_id: Track.all[3].id,
  body: "The feeling Toro gets is indescribable because there's so much to discuss it would be impossible.",
  referent_start_index: 250,
  referent_end_index: 316
)
Annotation.create!(
  author_id: User.all[1].id,
  track_id: Track.all[3].id,
  body: "Clever way to get back into a second verse from the chorus. 'Let's pick up where we started', as we revisit the verse musical structure",
  referent_start_index: 448,
  referent_end_index: 509
)
Annotation.create!(
  author_id: User.all[1].id,
  track_id: Track.all[3].id,
  body: "Reconciliation may not be possible. Toro wonders what happened to the relationship.",
  referent_start_index: 870,
  referent_end_index: 981
)
Annotation.create!(
  author_id: User.all[1].id,
  track_id: Track.all[2].id,
  body: "The electric lady is sure of herself",
  referent_start_index: 105,
  referent_end_index: 134
)
Annotation.create!(
  author_id: User.all[1].id,
  track_id: Track.all[2].id,
  body: "We're in the future and we're at a party!!",
  referent_start_index: 279,
  referent_end_index: 309
)
Annotation.create!(
  author_id: User.all[1].id,
  track_id: Track.all[2].id,
  body: "Electric lady presents herself as a messianic figure",
  referent_start_index: 652,
  referent_end_index: 713
)
Annotation.create!(
  author_id: User.all[1].id,
  track_id: Track.all[1].id,
  body: "Right off the bat we know this is about someone lying",
  referent_start_index: 10,
  referent_end_index: 38
)
Annotation.create!(
  author_id: User.all[1].id,
  track_id: Track.all[1].id,
  body: "Beyonce is hoping for a sign of life from her husband and that he picks up on her needs.",
  referent_start_index: 210,
  referent_end_index: 433
)
Annotation.create!(
  author_id: User.all[1].id,
  track_id: Track.all[0].id,
  body: "Play on the \"got a bridge to sell you\" popular idiom",
  referent_start_index: 610,
  referent_end_index: 653
)
Annotation.create!(
  author_id: User.all[1].id,
  track_id: Track.all[0].id,
  body: "Reference to the song \"It never rains in Southern California\" effortlessly flows into some wordplay about Frank's emotions when he thinks about this person",
  referent_start_index: 71,
  referent_end_index: 182
)
Annotation.create!(
  author_id: User.all[1].id,
  track_id: Track.all[0].id,
  body: "Frank is in it for the long haul!",
  referent_start_index: 355,
  referent_end_index: 446
)
Annotation.create!(
  author_id: User.all[2].id,
  track_id: Track.all[5].id,
  body: "You can tell from the background noise here that Kanye is talking to a friend in a party situation, describing a story that happened with his girl",
  referent_start_index: 0,
  referent_end_index: 19
)
Annotation.create!(
  author_id: User.all[2].id,
  track_id: Track.all[5].id,
  body: "We first hear Kanye singing here - cool transition from the intro",
  referent_start_index: 135,
  referent_end_index: 196
)
Annotation.create!(
  author_id: User.all[2].id,
  track_id: Track.all[5].id,
  body: "Kanye harshly sets up the scenario of an argument by saying that no one is going to love his partner if she acts the way she's acting",
  referent_start_index: 501,
  referent_end_index: 564
)
Annotation.create!(
  author_id: User.all[2].id,
  track_id: Track.all[5].id,
  body: "Here Kanye references the 'heartbreak hotel', a running theme of the album",
  referent_start_index: 1566,
  referent_end_index: 1608
)
Annotation.create!(
  author_id: User.all[2].id,
  track_id: Track.all[4].id,
  body: "Introducing the idea of being a deadbeat by being single-minded on stuff like food",
  referent_start_index: 86,
  referent_end_index: 121
)
Annotation.create!(
  author_id: User.all[2].id,
  track_id: Track.all[4].id,
  body: "Evoking the image of a car driving away maybe?",
  referent_start_index: 445,
  referent_end_index: 501
)
Annotation.create!(
  author_id: User.all[2].id,
  track_id: Track.all[3].id,
  body: "Toro takes on the character of an aggressive lover.",
  referent_start_index: 0,
  referent_end_index: 55
)
Annotation.create!(
  author_id: User.all[2].id,
  track_id: Track.all[3].id,
  body: "Toro wonders why the club is so dead and presumably is told that it's the morning already",
  referent_start_index: 166,
  referent_end_index: 248
)
Annotation.create!(
  author_id: User.all[2].id,
  track_id: Track.all[2].id,
  body: "Part of Janelle's fictional universe that the album describes is that sexuality is discouraged. Electric Lady wants to turn that around",
  referent_start_index: 182,
  referent_end_index: 245
)
Annotation.create!(
  author_id: User.all[2].id,
  track_id: Track.all[1].id,
  body: "This is an incredible image she depicts of being physically pressed up against the emotional wall someone has put up. Great setup for the chorus.",
  referent_start_index: 146,
  referent_end_index: 199
)
Annotation.create!(
  author_id: User.all[2].id,
  track_id: Track.all[1].id,
  body: "Back to the image of the ear pressed up against a surface, listening",
  referent_start_index: 594,
  referent_end_index: 641
)
Annotation.create!(
  author_id: User.all[2].id,
  track_id: Track.all[1].id,
  body: "This whispered outro sets up the next track, \"Hold Up\"",
  referent_start_index: 864,
  referent_end_index: 891
)
Annotation.create!(
  author_id: User.all[2].id,
  track_id: Track.all[0].id,
  body: "Frank comes up with a clever way of saying his room is messy",
  referent_start_index: 0,
  referent_end_index: 69
)
Annotation.create!(
  author_id: User.all[2].id,
  track_id: Track.all[0].id,
  body: "That feeling when you're wondering if someone is thinking about you the way you're thinking about them.",
  referent_start_index: 282,
  referent_end_index: 353
)
Annotation.create!(
  author_id: User.all[2].id,
  track_id: Track.all[0].id,
  body: "Trying to play off his feelings, which are obviously intense",
  referent_start_index: 541,
  referent_end_index: 609
)
Annotation.create!(
  author_id: User.all[3].id,
  track_id: Track.all[5].id,
  body: "Picking right back up into the argument",
  referent_start_index: 1189,
  referent_end_index: 1329
)
Annotation.create!(
  author_id: User.all[3].id,
  track_id: Track.all[3].id,
  body: "Interesting spin on words here",
  referent_start_index: 618,
  referent_end_index: 684
)
Annotation.create!(
  author_id: User.all[3].id,
  track_id: Track.all[3].id,
  body: "The music sounds like it's spinning around at this point in the song and the words sort of reflect that feeling of spiraling",
  referent_start_index: 983,
  referent_end_index: 1185
)

Annotation.create!(
  author_id: User.all[3].id,
  track_id: Track.all[2].id,
  body: "The proverbial glass ceiling that women historically couldn't get past",
  referent_start_index: 752,
  referent_end_index: 772
)
Annotation.create!(
  author_id: User.all[3].id,
  track_id: Track.all[1].id,
  body: "This song is just so hopeless sounding and sad :[",
  referent_start_index: 652,
  referent_end_index: 854
)

# Comments

Comment.create!(
  author_id: User.all[1].id,
  commentable_type: "Track",
  body: "This track is such a jam. Love the synthpop vibe.",
  commentable_id: 6
)
Comment.create!(
  author_id: User.all[2].id,
  commentable_type: "Annotation",
  body: "It's also the central thesis of the song",
  commentable_id: 2
)
Comment.create!(
  author_id: User.all[2].id,
  commentable_type: "Track",
  body: "Yeah man this one is A+",
  commentable_id: 6
)
Comment.create!(
  author_id: User.all[2].id,
  commentable_type: "Annotation",
  body: "It's also the start of a cool transition into Kanye's vocals - see my next annotation",
  commentable_id: 1
)
Comment.create!(
  author_id: User.all[2].id,
  commentable_type: "Track",
  body: "This is one of the first tracks in the \"chillwave\" genre that emerged around 2009",
  commentable_id: 5
)
Comment.create!(
  author_id: User.all[2].id,
  commentable_type: "Track",
  body: "Yo the bass on this song is NASTY!",
  commentable_id: 4
)
Comment.create!(
  author_id: User.all[2].id,
  commentable_type: "Annotation",
  body: "This album is considered to be a part of the Afrofuturism genre",
  commentable_id: 10
)
Comment.create!(
  author_id: User.all[2].id,
  commentable_type: "Track",
  body: "Solange is featured on this track!",
  commentable_id: 3
)
Comment.create!(
  author_id: User.all[2].id,
  commentable_type: "Annotation",
  body: "I'm pretty sure it's Jay-Z",
  commentable_id: 12
)
Comment.create!(
  author_id: User.all[2].id,
  commentable_type: "Track",
  body: "THIS SONG IS BLESSED!! You can definitely tell that James Blake had a hand in it from the chord structure.",
  commentable_id: 2
)
Comment.create!(
  author_id: User.all[2].id,
  commentable_type: "Annotation",
  body: "I don't think this annotation gets into specifics enough",
  commentable_id: 14
)
Comment.create!(
  author_id: User.all[2].id,
  commentable_type: "Annotation",
  body: "Downvote for captain obvious annotation. Tell us something new!",
  commentable_id: 30
)
Comment.create!(
  author_id: User.all[3].id,
  commentable_type: "Track",
  body: "MMM THAT BEAT",
  commentable_id: 6
)
Comment.create!(
  author_id: User.all[3].id,
  commentable_type: "Annotation",
  body: "I don't follow",
  commentable_id: 18
)
Comment.create!(
  author_id: User.all[3].id,
  commentable_type: "Annotation",
  body: "Dude what? What a dumb annotation",
  commentable_id: 2
)
Comment.create!(
  author_id: User.all[3].id,
  commentable_type: "Annotation",
  body: "It's also a song on the album I think",
  commentable_id: 20
)
Comment.create!(
  author_id: User.all[3].id,
  commentable_type: "Annotation",
  body: "Vibes vibes vibes",
  commentable_id: 4
)
Comment.create!(
  author_id: User.all[3].id,
  commentable_type: "Annotation",
  body: "I wonder what I'm having for dinner tonight...................",
  commentable_id: 21
)
Comment.create!(
  author_id: User.all[3].id,
  commentable_type: "Track",
  body: "Neon Indian was among the first major artists labeled as Chillwave pioneers, along with Toro Y Moi and Washed Out",
  commentable_id: 5
)
Comment.create!(
  author_id: User.all[3].id,
  commentable_type: "Track",
  body: "Also, this track is a pretty blatant Todd Rundgren sample",
  commentable_id: 5
)
Comment.create!(
  author_id: User.all[3].id,
  commentable_type: "Track",
  body: "Who raps on the bridge though?",
  commentable_id: 3
)
Comment.create!(
  author_id: User.all[3].id,
  commentable_type: "Track",
  body: "Some other guy produced it primarily tho",
  commentable_id: 2
)

# Votes

Vote.create!(
  value: 1, voter_id: User.all[1].id, annotation_id: Annotation.all[0].id
)
Vote.create!(
  value: 1, voter_id: User.all[1].id, annotation_id: Annotation.all[1].id
)
Vote.create!(
  value: 1, voter_id: User.all[1].id, annotation_id: Annotation.all[2].id
)
Vote.create!(
  value: 1, voter_id: User.all[1].id, annotation_id: Annotation.all[3].id
)
Vote.create!(
  value: 1, voter_id: User.all[1].id, annotation_id: Annotation.all[4].id
)
Vote.create!(
  value: 1, voter_id: User.all[1].id, annotation_id: Annotation.all[10].id
)
Vote.create!(
  value: 1, voter_id: User.all[1].id, annotation_id: Annotation.all[9].id
)
Vote.create!(
  value: 1, voter_id: User.all[1].id, annotation_id: Annotation.all[8].id
)
Vote.create!(
  value: 1, voter_id: User.all[1].id, annotation_id: Annotation.all[11].id
)
Vote.create!(
  value: 1, voter_id: User.all[2].id, annotation_id: Annotation.all[1].id
)
Vote.create!(
  value: 1, voter_id: User.all[2].id, annotation_id: Annotation.all[0].id
)
Vote.create!(
  value: -1, voter_id: User.all[2].id, annotation_id: Annotation.all[18].id
)
Vote.create!(
  value: -1, voter_id: User.all[2].id, annotation_id: Annotation.all[17].id
)
Vote.create!(
  value: 1, voter_id: User.all[2].id, annotation_id: Annotation.all[20].id
)
Vote.create!(
  value: 1, voter_id: User.all[2].id, annotation_id: Annotation.all[4].id
)
Vote.create!(
  value: -1, voter_id: User.all[2].id, annotation_id: Annotation.all[21].id
)
Vote.create!(
  value: 1, voter_id: User.all[2].id, annotation_id: Annotation.all[24].id
)
Vote.create!(
  value: 1, voter_id: User.all[2].id, annotation_id: Annotation.all[8].id
)
Vote.create!(
  value: 1, voter_id: User.all[2].id, annotation_id: Annotation.all[25].id
)
Vote.create!(
  value: 1, voter_id: User.all[2].id, annotation_id: Annotation.all[26].id
)
Vote.create!(
  value: 1, voter_id: User.all[2].id, annotation_id: Annotation.all[30].id
)
Vote.create!(
  value: -1, voter_id: User.all[2].id, annotation_id: Annotation.all[13].id
)
Vote.create!(
  value: -1, voter_id: User.all[2].id, annotation_id: Annotation.all[29].id
)
Vote.create!(
  value: 1, voter_id: User.all[3].id, annotation_id: Annotation.all[0].id
)
Vote.create!(
  value: -1, voter_id: User.all[3].id, annotation_id: Annotation.all[17].id
)
Vote.create!(
  value: -1, voter_id: User.all[3].id, annotation_id: Annotation.all[1].id
)
Vote.create!(
  value: 1, voter_id: User.all[3].id, annotation_id: Annotation.all[19].id
)
Vote.create!(
  value: 1, voter_id: User.all[3].id, annotation_id: Annotation.all[3].id
)
Vote.create!(
  value: -1, voter_id: User.all[3].id, annotation_id: Annotation.all[32].id
)
Vote.create!(
  value: 1, voter_id: User.all[3].id, annotation_id: Annotation.all[33].id
)
Vote.create!(
  value: -1, voter_id: User.all[3].id, annotation_id: Annotation.all[12].id
)
Vote.create!(
  value: 1, voter_id: User.all[3].id, annotation_id: Annotation.all[26].id
)
