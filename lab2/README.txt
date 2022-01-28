README Lab 2 Chloe Jepson
Sources of refrence used:
https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition 
(above was used to figure out how to get the location of the client)


Initially I tried to create a card with the bootstrap features, but when I linked in the bootstrap
script at the top of my html page it messed with the javascript file, and the json function in it, because it was unable
to fill in the ids on my html page. this was the main issue that I had for the lab, so I decided to create a card out of plain html and
css- I borrowed and then changed a template of a css card online (https://www.w3schools.com/howto/howto_css_cards.asp). I ran into a cuple small problems on
my js file, but I used devtools in chrome to parse throuh them, and most of it was stuff that I could fix by changing simple syntax errors or
general approaches to my functions.


I examined three of the applications, all of which use apis from the
UofTHacks V (https://uofthacksv.devpost.com/project-gallery). there is a gallery of student 
projects, all of which have links to their githubs, so you can examine the code.

The first project I looked at was Jukebox, which is a crowsourcing playlist application. This project used 
the spotify api (which I also looked up a tutorial on youtube about how to play music through your applications).
If you go on their github and look at the package.json file, you can see it is a client side JS wrapper for the spotify web api.
it contains information for a spotify users and info to pull together spotify accounts and music to the web app. If you look in the index.js
this is where all the main code for the project is, and you can see where they used a map to lay out the page. You can upvote, downvbote, and rank
all of the music on the page. https://devpost.com/software/jukebox-qima4b

The second project that I looked at is called Lejr, which is an application that requests money from your friends when they need to pay you back, and lists the 
status of each payent. the app will directly deposit money into your bank account after the transaction is complete. They built it with Interac's public APi and
mongoDB. they also use Node.js/Express as a REST api. This project was the winner of the Best REST API prize. app.js is the main pae where you can see the page come together.
It routes the page and sets up the engine setup, error handlin in case a resource is not found, rendering for the error page, and connections to the database and login informations.
The node modules folder is where the bulk of the code is stored. In the json files and the mongoose files, there is a lot of json that looks at all of the information that is
read in from the mongo db, and it contains all of the keywords and info for data storage and devDependencies.
https://devpost.com/software/lejrbackend

Finally I watched a youtube video that covered some apis that were interesting to use. One that it mentioned was the nasa api. the deeveloper in the video gave an example of how he used the 
api to rab some images from rovers and sattelites. the api has atronomy pictures of the day, event trackers for natural events, the mars weather service, and rover images.
On nasa's website, yo can download and browse the apis that they offer, a lot of which is mostly imagrey that is accessible for developers. it is free to 
sign up for an api key to use web services available on the data.gov developer network. ONe of the specific ones that I looked as was the EONET, which is the
earth observatory natural event tracker. a lot of this data is published in real time, which means that the images can be used to examine natural events that are 
currently ongoing. https://api.nasa.gov/
