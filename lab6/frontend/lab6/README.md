Chloe Jepson lab6

for this lab, I spent a lot of time figuring out the first part.My API was pokemon, so there is not too much other stuff that goes along well with it relationally. I chose to go with animals because I thought it would be easy to save similar names and properties- as well as the theme of finding animals with a pokedex. One API that I use generates cats, and the other generates dogs and their pictures. I created separate schemas for these so they would have a unique document, but one that still went together with the pokemon. For my third API I tried to get some creatvity points, and I made the weather api choose a new random location every time thenode server is started up, and add all of the weather data to a new schema and put it in a document in the mongodb. I recalled talking about using python for data scraping in class, so  I wanted to try and do that for this lab. one of the most challenging parts of this lab was being able to get the python file to work with the js files and node. For each of the four api calls I used app.put and http requests for the url to parse the data that I wanted, put it in the schema model that I created, and then pushed it to lab6 mongodb. For the etl portion of the lab I tried to write a bit of code in the server.js file that allowed the user to submit a json doc or a csv doc that they wanted to put into the database, but unfortunately this part of my ab is not fully working. I don't get any errors with this part when I try to submit, but nothing actually uploads to the database. The only other part of my lab that is also partially working is the part where I am using a get request to try and find the id of a certain pokemon. I am getting it to return some json in the console like I had wanted, but it is not always correct. Halfway through the  lab I decided to change the _id key of the pokemon to match the name of it, so when the user went to do the put request(which I had to implement with post- see server.js), they were able to keep the id of the pokemon as its actual species and change the name to something more specific. so, if you are confused as to why there are different keys for some of the pokemon halfway through loading the db, it is because I wanted to implement this idea.

Here is my security scan with spider and active scan. sorry if the formatting is off, it wouldn't let me export to another file first:

19	Fri Apr 01 02:46:36 EDT 2022	Fri Apr 01 02:46:36 EDT 2022	GET	http://localhost:3000/9132157686628943516	404	Not Found	4	272	158
21	Fri Apr 01 02:46:36 EDT 2022	Fri Apr 01 02:46:36 EDT 2022	GET	http://localhost:3000/WEB-INF/web.xml	404	Not Found	3	272	154
22	Fri Apr 01 02:46:36 EDT 2022	Fri Apr 01 02:46:36 EDT 2022	GET	http://localhost:3000/WEB-INF/applicationContext.xml	404	Not Found	4	272	169
23	Fri Apr 01 02:46:36 EDT 2022	Fri Apr 01 02:46:36 EDT 2022	GET	http://localhost:3000/WEB-INF/classes/web/xml.class	404	Not Found	3	272	168
24	Fri Apr 01 02:46:36 EDT 2022	Fri Apr 01 02:46:36 EDT 2022	GET	http://localhost:3000/WEB-INF/classes/applicationContext/xml.class	404	Not Found	4	272	183
25	Fri Apr 01 02:46:37 EDT 2022	Fri Apr 01 02:46:37 EDT 2022	GET	http://localhost:3000	200	OK	10	316	540
26	Fri Apr 01 02:46:37 EDT 2022	Fri Apr 01 02:46:37 EDT 2022	GET	http://localhost:3000/favicon.ico	200	OK	11	304	948
27	Fri Apr 01 02:46:37 EDT 2022	Fri Apr 01 02:46:37 EDT 2022	GET	http://localhost:3000/polyfills.351f9fd1647865be.js	200	OK	13	332	33802
28	Fri Apr 01 02:46:37 EDT 2022	Fri Apr 01 02:46:37 EDT 2022	GET	http://localhost:3000/main.9e37d1c728ac7182.js	200	OK	17	334	266917
29	Fri Apr 01 02:46:37 EDT 2022	Fri Apr 01 02:46:37 EDT 2022	GET	http://localhost:3000/robots.txt	404	Not Found	5	272	149
30	Fri Apr 01 02:46:37 EDT 2022	Fri Apr 01 02:46:37 EDT 2022	GET	http://localhost:3000/runtime.4dc4ff41cd2f2fec.js	200	OK	4	330	1073
31	Fri Apr 01 02:46:38 EDT 2022	Fri Apr 01 02:46:38 EDT 2022	GET	http://localhost:3000/sitemap.xml	404	Not Found	4	272	150
32	Fri Apr 01 02:46:38 EDT 2022	Fri Apr 01 02:46:38 EDT 2022	GET	http://localhost:3000/styles.ef46db3751d8e999.css	200	OK	4	311	0
33	Fri Apr 01 02:46:38 EDT 2022	Fri Apr 01 02:46:38 EDT 2022	GET	http://localhost:3000/favicon.ico/	404	Not Found	3	272	151
34	Fri Apr 01 02:46:38 EDT 2022	Fri Apr 01 02:46:38 EDT 2022	GET	http://localhost:3000/	200	OK	5	316	540
35	Fri Apr 01 02:46:38 EDT 2022	Fri Apr 01 02:46:38 EDT 2022	GET	http://localhost:3000/main.9e37d1c728ac7182.js/	404	Not Found	3	272	164
36	Fri Apr 01 02:46:38 EDT 2022	Fri Apr 01 02:46:38 EDT 2022	GET	http://localhost:3000/polyfills.351f9fd1647865be.js/	404	Not Found	3	272	169
37	Fri Apr 01 02:46:38 EDT 2022	Fri Apr 01 02:46:39 EDT 2022	GET	http://localhost:3000/robots.txt/	404	Not Found	6	272	150
38	Fri Apr 01 02:46:39 EDT 2022	Fri Apr 01 02:46:39 EDT 2022	GET	http://localhost:3000/runtime.4dc4ff41cd2f2fec.js/	404	Not Found	8	272	167
39	Fri Apr 01 02:46:39 EDT 2022	Fri Apr 01 02:46:39 EDT 2022	GET	http://localhost:3000/sitemap.xml/	404	Not Found	3	272	151
40	Fri Apr 01 02:46:39 EDT 2022	Fri Apr 01 02:46:39 EDT 2022	GET	http://localhost:3000/styles.ef46db3751d8e999.css/	404	Not Found	3	272	167
41	Fri Apr 01 02:46:39 EDT 2022	Fri Apr 01 02:46:39 EDT 2022	GET	http://localhost:3000/elmah.axd	404	Not Found	3	272	148

false	GET	http://www.w3.org/1999/xlink	Out of Scope
false	GET	http://www.w3.org/XML/1998/namespace	Out of Scope
false	GET	http://www.w3.org/2000/xmlns/	Out of Scope
false	GET	https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css	Out of Scope
false	GET	https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css	Out of Scope
false	GET	https://fonts.googleapis.com/	Out of Scope
false	GET	https://fonts.gstatic.com/	Out of Scope
false	GET	https://fonts.googleapis.com/css2?display=swap&family=Outfit:wght@100;200;300;400&family=Poppins&family=Press+Start+2P&family=Red+Hat+Mono:wght@300&family=Source+Code+Pro:wght@200&family=Space+Mono	Out of Scope
false	GET	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png	Out of Scope
false	GET	https://pokeapi.co/api/v2/pokemon/	Out of Scope