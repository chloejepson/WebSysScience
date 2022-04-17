Chloe jepson
lab7 README

 for this lab, although I do not have the data displaying, most everythin on the backend is working correctly (which you can see where I have directed the output to the console). I struggled at the start of thislab, and I ended up going to office hours to et help from callahan, because I was having trouble grasping the best way to create an endpoint and get that data to the typescript files in my frontend.

 When i started thislab, I had to download new data into a new database, beause the stats I had on the last lab were not significant enough to pull good data from (and this was approved by prof callahan).

 I then proceeded to begin by creating an endpoint with the '/api' endpoint in my server.js file.

 I connect to my database with a get request in this endpoint, and pull all of the json data from all of the documents. At first I had some trouble correctly pullin the data out, but I was able to use a .toArray fujsonction to put each of the json elements from the documents into their own index into the array. 

 Then, in the ts files for the visualizations i chose, I fetched the link with the api endpoint http:localhost:3000/api- which returned the correct json data to me. I have it printing out in the console, which is best seen in dev toold when you are running it, because of they way it shows indexing. I also have prof callahan's old data printing out for comparison. If you look at the two there is no difference in the way that theyare structured, but i am having a lot of trouble indexing the correct value. I tried multiple ways which I found online. the first way I kept the same as prof callahan had in his coding example (just refrencing with d.'json key word'), and in the scatterplot file i tried to refrence it with d[ 'json key/variable']. However, I tried looking up different solutions and testing different ways for a couple hours and nothing worked. It really confused me because there are no errors in the project, and there was really not much of a difference in the json prof callahan already had an the json I had (both in array format with no nested arrays/terms being used). because the graphics of the tables are showing up and not the datapoints, I do believe the issue is how I am indexing it, because if you look in the dev tools console you can see that I am correctly pulling in all of the data that I need from the backend of my project. For the creativity portion of this project I tried to add a bit of an excerpt on how my info in the raphs was relevant, I tried to use different methods of refrencing the json data than what was given to us, and I spent a lot of time in office hours trying to work on this lab. As well as trying to write a goods description for the readme, so it would be apparent where I tried to get the data to fill in. I also tried to add some basic formatting to the html pages.


 Here is my security report:
 the only red flags that I was getting on the security report were from github/angular/zone.js, but i could not find this file, and I didn't think it was a file I would be able to change anyway.


 true	GET	http://localhost:3000	Seed
true	GET	http://localhost:3000/robots.txt	Seed
true	GET	http://localhost:3000/sitemap.xml	Seed
true	GET	http://localhost:3000/	Seed
true	GET	http://localhost:3000/favicon.ico	
true	GET	http://localhost:3000/styles.css	
true	GET	http://localhost:3000/runtime.js	
true	GET	http://localhost:3000/polyfills.js	
true	GET	http://localhost:3000/vendor.js	
true	GET	http://localhost:3000/main.js	
false	GET	https://angular.io/guide/browser-support	Out of Scope
false	GET	https://angular.io/	Out of Scope
false	GET	https://angular.io/license	Out of Scope
false	GET	https://github.com/angular/zone.js/issues/778,	Out of Scope
false	GET	https://github.com/angular/zone.js/issues/911,	Out of Scope
false	GET	https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror	Out of Scope
false	GET	https://github.com/angular/zone.js/issues/525	Out of Scope
false	GET	https://bugs.webkit.org/show_bug.cgi?id=44721	Out of Scope
false	GET	https://github.com/angular/zone.js/issues/190	Out of Scope
false	GET	https://github.com/angular/zone.js/issues/836	Out of Scope
false	GET	https://github.com/angular/angular/issues/20442	Out of Scope
false	GET	https://github.com/angular/angular/issues/40387	Out of Scope
false	GET	https://github.com/angular/angular/issues/38795	Out of Scope
true	GET	http://localhost:3000/api	
false	GET	https://api.jsonbin.io/b/5eee6a5397cb753b4d149343	Out of Scope


25	Fri Apr 08 08:11:31 EDT 2022	Fri Apr 08 08:11:31 EDT 2022	GET	http://localhost:3000/6489120923812031360	404	Not Found	2	272	158
27	Fri Apr 08 08:11:31 EDT 2022	Fri Apr 08 08:11:31 EDT 2022	GET	http://localhost:3000/WEB-INF/web.xml	404	Not Found	2	272	154
28	Fri Apr 08 08:11:31 EDT 2022	Fri Apr 08 08:11:31 EDT 2022	GET	http://localhost:3000/WEB-INF/applicationContext.xml	404	Not Found	3	272	169
29	Fri Apr 08 08:11:31 EDT 2022	Fri Apr 08 08:11:31 EDT 2022	GET	http://localhost:3000/WEB-INF/classes/web/xml.class	404	Not Found	2	272	168
30	Fri Apr 08 08:11:31 EDT 2022	Fri Apr 08 08:11:31 EDT 2022	GET	http://localhost:3000/WEB-INF/classes/applicationContext/xml.class	404	Not Found	3	272	183
31	Fri Apr 08 08:11:32 EDT 2022	Fri Apr 08 08:11:32 EDT 2022	GET	http://localhost:3000	200	OK	2	316	487
32	Fri Apr 08 08:11:32 EDT 2022	Fri Apr 08 08:11:32 EDT 2022	GET	http://localhost:3000/	200	OK	3	316	487
33	Fri Apr 08 08:11:32 EDT 2022	Fri Apr 08 08:11:32 EDT 2022	GET	http://localhost:3000/favicon.ico	200	OK	3	304	948
34	Fri Apr 08 08:11:32 EDT 2022	Fri Apr 08 08:11:35 EDT 2022	GET	http://localhost:3000/api	200	OK	3019	242	112007
35	Fri Apr 08 08:11:32 EDT 2022	Fri Apr 08 08:11:35 EDT 2022	GET	http://localhost:3000/main.js	200	OK	2816	332	31561
36	Fri Apr 08 08:11:35 EDT 2022	Fri Apr 08 08:11:35 EDT 2022	GET	http://localhost:3000/robots.txt	404	Not Found	2	272	149
37	Fri Apr 08 08:11:35 EDT 2022	Fri Apr 08 08:11:35 EDT 2022	GET	http://localhost:3000/polyfills.js	200	OK	4	334	131960
38	Fri Apr 08 08:11:35 EDT 2022	Fri Apr 08 08:11:35 EDT 2022	GET	http://localhost:3000/runtime.js	200	OK	4	331	6299
39	Fri Apr 08 08:11:35 EDT 2022	Fri Apr 08 08:11:35 EDT 2022	GET	http://localhost:3000/sitemap.xml	404	Not Found	3	272	150
40	Fri Apr 08 08:11:36 EDT 2022	Fri Apr 08 08:11:36 EDT 2022	GET	http://localhost:3000/styles.css	200	OK	6	314	119
41	Fri Apr 08 08:11:36 EDT 2022	Fri Apr 08 08:11:36 EDT 2022	GET	http://localhost:3000/vendor.js	200	OK	55	336	3809112
42	Fri Apr 08 08:11:36 EDT 2022	Fri Apr 08 08:11:36 EDT 2022	GET	http://localhost:3000/	200	OK	8	316	487
43	Fri Apr 08 08:11:36 EDT 2022	Fri Apr 08 08:11:36 EDT 2022	GET	http://localhost:3000/	200	OK	9	316	487
44	Fri Apr 08 08:11:36 EDT 2022	Fri Apr 08 08:11:36 EDT 2022	GET	http://localhost:3000/favicon.ico/	404	Not Found	5	272	151
45	Fri Apr 08 08:11:36 EDT 2022	Fri Apr 08 08:11:39 EDT 2022	GET	http://localhost:3000/api/	200	OK	2923	242	112007
46	Fri Apr 08 08:11:37 EDT 2022	Fri Apr 08 08:11:39 EDT 2022	GET	http://localhost:3000/main.js/	404	Not Found	2721	272	147