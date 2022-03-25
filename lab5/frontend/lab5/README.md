Chloe Jepson Lab5

For the creativity on this lab I decided to rewrite all of
the js that I had for the index.component.js file into typescript. I had trouble doin this initially, but I was able to npm install some extensions: npm i --save-dev @types/jquery and then add 'jquery' to the types field in the tsconfig file. I ended up going to office hours in the beggining of the week to help get this portion of the lab set up, as well as fix some problems that I was having with the setup of angular and node.

for the first part I was able to create a database called pokemonDB in mongoDB, and in the server. js file I have an app.post function that takes the pokemon that the user enters, connects to the external api, gets the https request, and takes that pokemon data and puts it into a json format to be added to the database in the pokemonInfo collections. this collection stores all info about pokemon that the user decides to search. i have 119 documents in this collection

In this lab my main struggle was being able to differentiate between mongodb code and mongoose code. I did a lot of looking up/reading/researching/watchng videos to try and help supplement the lab, but as you may be able to see in my server.js file with all of the commented out code, I had a realy hard time coding things that were syntactically correct, and overall a really difficult time finding things/ getting them to work.

for the second part of this lab I was able to get most of it done, but I did have some problems, so I tried to include code that compiled correctly and was close to what I though it should be/ wanted it to do functionally. with the post request, I had the user input the name of their pokemon and the number of the pokemon that they wanted to store in the database/pokedex. this all updated into the mypokemon collection in my pokemonDB database. there are currently documents in there. for the get request, it does correctly use the endpoint, however dispite tryin multiple methods of reading in the information from the json file, I was unable to get the correct information from the myPokemon collection to display to the page or the console. I left some of the other code I had tried to use in this function even though it did not work, so you could see where I was trying to get with it. I had similar problems with my put and delete.I believe I did all of the correct things in terms of creating the endpoint and getting the parameters from data that the suer had submitted in the corresponding form in the html file, but even though I have code that I thought would have worked for thee two- I had to just try the best that I could to get something that made sense and was close to what I had wanted.

For the third part of the lab I created the new component called part3, and I added new html and new form elements with all of the post, put, delete, and get buttons. at this point in the lab I knew that I had not fully gotten part two to work, and I knew that I would have slim chances of getting this one to work, so I basically stopped at this point. However, if I had written more code for this portion of the lab I assume it would be very similar to the code that I already  have in the server.js file, I would just have to correspond the buttons in the html file to the app.post, app.get ... in the server.js file.

I ended up spending well over 15 hours on this lab, and I went ot office hours, reached out to professor callahan, the TA, as well as professor plotka to try and do the best of my ability on this lab. Despite it not being fully finished, I tried to the best of my ability.

Here are the security scan meessaes I recieved:
60	Fri Mar 25 03:45:21 EDT 2022	Fri Mar 25 03:45:21 EDT 2022	GET	http://localhost:3000/1260987299752633038	404	Not Found	2	272	158
62	Fri Mar 25 03:45:21 EDT 2022	Fri Mar 25 03:45:21 EDT 2022	GET	http://localhost:3000/WEB-INF/web.xml	404	Not Found	3	272	154
63	Fri Mar 25 03:45:21 EDT 2022	Fri Mar 25 03:45:21 EDT 2022	GET	http://localhost:3000/WEB-INF/applicationContext.xml	404	Not Found	2	272	169
64	Fri Mar 25 03:45:21 EDT 2022	Fri Mar 25 03:45:21 EDT 2022	GET	http://localhost:3000/WEB-INF/classes/web/xml.class	404	Not Found	2	272	168
65	Fri Mar 25 03:45:21 EDT 2022	Fri Mar 25 03:45:21 EDT 2022	GET	http://localhost:3000/WEB-INF/classes/applicationContext/xml.class	404	Not Found	2	272	183
66	Fri Mar 25 03:45:21 EDT 2022	Fri Mar 25 03:45:21 EDT 2022	GET	http://localhost:3000/favicon.ico	200	OK	3	304	948
67	Fri Mar 25 03:45:21 EDT 2022	Fri Mar 25 03:45:21 EDT 2022	GET	http://localhost:3000	200	OK	4	316	540
68	Fri Mar 25 03:45:22 EDT 2022	Fri Mar 25 03:45:22 EDT 2022	GET	http://localhost:3000/polyfills.d271287cfecdd60e.js	200	OK	3	332	33802
69	Fri Mar 25 03:45:22 EDT 2022	Fri Mar 25 03:45:22 EDT 2022	GET	http://localhost:3000/main.5cab94f028617ca4.js	200	OK	4	334	270750
70	Fri Mar 25 03:45:22 EDT 2022	Fri Mar 25 03:45:22 EDT 2022	GET	http://localhost:3000/robots.txt	404	Not Found	2	272	149
71	Fri Mar 25 03:45:22 EDT 2022	Fri Mar 25 03:45:22 EDT 2022	GET	http://localhost:3000/runtime.50c12b80945fcd4b.js	200	OK	3	330	1073
72	Fri Mar 25 03:45:22 EDT 2022	Fri Mar 25 03:45:22 EDT 2022	GET	http://localhost:3000/sitemap.xml	404	Not Found	2	272	150
73	Fri Mar 25 03:45:22 EDT 2022	Fri Mar 25 03:45:22 EDT 2022	GET	http://localhost:3000/styles.ef46db3751d8e999.css	200	OK	3	311	0
74	Fri Mar 25 03:45:22 EDT 2022	Fri Mar 25 03:45:22 EDT 2022	GET	http://localhost:3000/favicon.ico/	404	Not Found	3	272	151
75	Fri Mar 25 03:45:22 EDT 2022	Fri Mar 25 03:45:22 EDT 2022	GET	http://localhost:3000/	200	OK	3	316	540
76	Fri Mar 25 03:45:23 EDT 2022	Fri Mar 25 03:45:23 EDT 2022	GET	http://localhost:3000/main.5cab94f028617ca4.js/	404	Not Found	3	272	164
77	Fri Mar 25 03:45:23 EDT 2022	Fri Mar 25 03:45:23 EDT 2022	GET	http://localhost:3000/polyfills.d271287cfecdd60e.js/	404	Not Found	2	272	169
78	Fri Mar 25 03:45:23 EDT 2022	Fri Mar 25 03:45:23 EDT 2022	GET	http://localhost:3000/robots.txt/	404	Not Found	2	272	150
79	Fri Mar 25 03:45:23 EDT 2022	Fri Mar 25 03:45:23 EDT 2022	GET	http://localhost:3000/runtime.50c12b80945fcd4b.js/	404	Not Found	2	272	167
80	Fri Mar 25 03:45:23 EDT 2022	Fri Mar 25 03:45:23 EDT 2022	GET	http://localhost:3000/sitemap.xml/	404	Not Found	3	272	151
81	Fri Mar 25 03:45:23 EDT 2022	Fri Mar 25 03:45:23 EDT 2022	GET	http://localhost:3000/styles.ef46db3751d8e999.css/	404	Not Found	2	272	167
82	Fri Mar 25 03:45:23 EDT 2022	Fri Mar 25 03:45:23 EDT 2022	GET	http://localhost:3000/.htaccess	404	Not Found	2	272	148

here are the alerts I recieved:
CSP Wildcard Directive:
The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined: 
frame-ancestors, form-action

X-fram-options header not set:
X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.

server leave information via 'x-powered-by' http response header:
The web/application server is leaking information via one or more "X-Powered-By" HTTP response headers. Access to such information may facilitate attackers identifying other frameworks/components your web application is reliant upon and the vulnerabilities such components may be subject to.

x-content-typw-options header missing:
The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.

information disclosure- suspiciouscomments:
The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.

