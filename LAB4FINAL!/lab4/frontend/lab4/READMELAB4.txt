Chloe Jepson
Lab 4

For this lab, I spent a relatively long time ettin everything up and running.
The most challenging portion that I ran into was getting both the node server
and angular running on the same port, so when I run angular, to make sure it is on 
port 3000 with the node server at the same time I have to do ng serve --port 3000. So, 
if you have to run this lab to test the code, maybe try using that if there is an issue with the
way that I set up my files. For some creativity I tried adding more to the js so that
there are more stats that read in when the user looks up a pokemon. I also tried to add some 
js that changed the font to a color that corresponded to the pokemon's type. As of now i don't have this
part fully workin so hopefuly it will be by the time I finish the lab.

Otherwise, I have my angular app fully running. In the component that I put all of my homepage
html pokemon code in I hadsome trouble linking the js and css files that are within
the same component. to ensure that everything was workin correctly I just put the js
and css code into that html component file. Once we get to class on friday, I will ask how to fix that,
but I am running out of time on this lab and have the group presentation to do, so I am going to leave
that for later.

Finally- the security scanning. Currently I am having a lot of trouble getting the security
scanner to download on my computer. I was abcent for a week of school and I missed that lecture. When I
downloaded that portion of code it put the executable file in the zip file. The website said to double click it 
to get my laptop to download it, but I was never able to do that.

I realized I just had to extract the file. The scan is below:
Processed	Method	URI	Flags
TRUE	GET	http://localhost:3000	Seed
TRUE	GET	http://localhost:3000/robots.txt	Seed
TRUE	GET	http://localhost:3000/sitemap.xml	Seed
TRUE	GET	http://localhost:3000/	Seed
TRUE	GET	http://localhost:3000/favicon.ico	
TRUE	GET	http://localhost:3000/runtime.js	
TRUE	GET	http://localhost:3000/polyfills.js	
TRUE	GET	http://localhost:3000/scripts.js	
TRUE	GET	http://localhost:3000/vendor.js	
TRUE	GET	http://localhost:3000/main.js	
FALSE	GET	https://pokeapi.co/api/v2/pokemon/$	Out of Scope
FALSE	GET	https://angular.io/guide/browser-support	Out of Scope
FALSE	GET	https://github.com/sindresorhus/ansi-regex	Out of Scope
FALSE	GET	http://www.opensource.org/licenses/mit-license.php	Out of Scope
FALSE	GET	https://github.com/facebookincubator/create-react-app	Out of Scope
FALSE	GET	https://github.com/glenjamin/webpack-hot-middleware	Out of Scope
FALSE	GET	https://github.com/webpack/webpack-dev-server/pull/384	Out of Scope
FALSE	GET	https://angular.io/	Out of Scope
FALSE	GET	https://angular.io/license	Out of Scope
FALSE	GET	https://github.com/angular/zone.js/issues/778,	Out of Scope
FALSE	GET	https://github.com/angular/zone.js/issues/911,	Out of Scope
FALSE	GET	https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror	Out of Scope
FALSE	GET	https://github.com/angular/zone.js/issues/525	Out of Scope
FALSE	GET	https://bugs.webkit.org/show_bug.cgi?id=44721	Out of Scope
FALSE	GET	https://github.com/angular/zone.js/issues/190	Out of Scope
FALSE	GET	https://github.com/angular/zone.js/issues/836	Out of Scope
FALSE	GET	https://github.com/angular/angular/issues/20442	Out of Scope
FALSE	GET	https://github.com/angular/angular/issues/40387	Out of Scope
FALSE	GET	https://github.com/angular/angular/issues/38795	Out of Scope
FALSE	GET	https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css	Out of Scope
FALSE	GET	https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css	Out of Scope
FALSE	GET	https://fonts.googleapis.com/	Out of Scope
FALSE	GET	https://fonts.gstatic.com/	Out of Scope
FALSE	GET	https://fonts.googleapis.com/css2?display=swap&family=Outfit:wght@100;200;300;400&family=Poppins&family=Press+Start+2P&family=Red+Hat+Mono:wght@300&family=Source+Code+Pro:wght@200&family=Space+Mono	Out of Scope
FALSE	GET	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png	Out of Scope
TRUE	GET	http://localhost:3000/api	
FALSE	GET	http://example.com/	Out of Scope
FALSE	GET	http://example.com/foo	Out of Scope
FALSE	GET	https://en.wikipedia.org/wiki/Uniform_Resource_Locator	Out of Scope
FALSE	GET	https://tools.ietf.org/html/rfc3986	Out of Scope
FALSE	GET	https://developer.mozilla.org/en-US/docs/Web/API/History_API	Out of Scope
FALSE	GET	https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate	Out of Scope
FALSE	GET	https://angular.io/guide/i18n-overview	Out of Scope
FALSE	GET	http://cldr.unicode.org/translation/date-time-1/date-time	Out of Scope
FALSE	GET	http://cldr.unicode.org/translation/number-patterns	Out of Scope
FALSE	GET	https://www.w3.org/TR/NOTE-datetime	Out of Scope
FALSE	GET	https://github.com/angular/angular/issues/40377	Out of Scope
FALSE	GET	http://www.unicode.org/reports/tr35/tr35-dates.html	Out of Scope
FALSE	GET	http://cldr.unicode.org/translation/date-time	Out of Scope
FALSE	GET	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse	Out of Scope
FALSE	GET	https://www.ecma-international.org/ecma-262/5.1/	Out of Scope
FALSE	GET	https://en.wikipedia.org/wiki/ISO_4217	Out of Scope
FALSE	GET	https://github.com/MikeMcl/big.js/	Out of Scope
FALSE	GET	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is	Out of Scope
FALSE	GET	https://angular.io/api/common/NgForOf	Out of Scope
FALSE	GET	https://angular.io/guide/built-in-directives	Out of Scope
FALSE	GET	http://cldr.unicode.org/index/cldr-spec/plural-rules	Out of Scope
FALSE	GET	https://2ality.com/2017/07/regexp-unicode-property-escapes.html	Out of Scope
FALSE	GET	https://mothereff.in/regexpu	Out of Scope
FALSE	GET	http://userguide.icu-project.org/formatparse/messages.	Out of Scope
FALSE	GET	https://html.spec.whatwg.org/	Out of Scope
FALSE	GET	https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/focus	Out of Scope
FALSE	GET	https://en.wikipedia.org/wiki/JSONP	Out of Scope
FALSE	GET	https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS	Out of Scope
FALSE	GET	https://angular.io/errors	Out of Scope
FALSE	GET	https://github.com/angular/angular/issues/44119	Out of Scope
FALSE	GET	https://github.com/angular/angular/issues/31595.	Out of Scope
FALSE	GET	https://hackmd.io/Odw80D0pR6yfsOjg_7XCJg?view	Out of Scope
FALSE	GET	https://github.com/microsoft/TypeScript/issues/37295	Out of Scope
FALSE	GET	http://www.w3.org/2000/svg	Out of Scope
FALSE	GET	http://www.w3.org/1998/MathML/	Out of Scope
FALSE	GET	https://en.wikipedia.org/wiki/Bloom_filter	Out of Scope
FALSE	GET	http://someuri.com/test	Out of Scope
FALSE	GET	https://jsperf.com/fast-array-splice	Out of Scope
FALSE	GET	https://github.com/angular/angular/issues/38453.	Out of Scope
FALSE	GET	https://github.com/Microsoft/TypeScript/issues/12439	Out of Scope
FALSE	GET	https://github.com/w3c/webappsec-trusted-types/wiki/Trusted-Types-for-function-constructor	Out of Scope
FALSE	GET	https://g.co/ng/security	Out of Scope
FALSE	GET	https://developer.mozilla.org/en-US/docs/Web/API/DOMParser	Out of Scope
FALSE	GET	https://simon.html5.org/html-elements	Out of Scope
FALSE	GET	https://html.spec.whatwg.org/multipage/syntax.html	Out of Scope
FALSE	GET	https://en.wikipedia.org/wiki/Specials_	Out of Scope
FALSE	GET	https://jsperf.com/array-vs-monkey-patch-array	Out of Scope
FALSE	GET	https://jsperf.com/array-literal-vs-new-array-really	Out of Scope
FALSE	GET	https://github.com/angular/angular/issues/39296	Out of Scope
FALSE	GET	https://github.com/dart-lang/angular/blob/0bb611387d29d65b5af7f9d2515ab571fd3fbee4/_tests/test/compiler/preserve_whitespace_test.dart	Out of Scope
FALSE	GET	https://stackblitz.com/edit/lifecycle-hooks-vcref	Out of Scope
FALSE	GET	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map	Out of Scope
FALSE	GET	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter	Out of Scope
FALSE	GET	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find	Out of Scope
FALSE	GET	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce	Out of Scope
FALSE	GET	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach	Out of Scope
FALSE	GET	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some	Out of Scope
FALSE	GET	https://github.com/angular/angular-cli/issues/17264.	Out of Scope
FALSE	GET	https://github.com/terser/terser/issues/615	Out of Scope
FALSE	GET	https://www.w3.org/TR/DOM-Level-3-Events-key/	Out of Scope
FALSE	GET	https://someurl.com/api/user	Out of Scope
FALSE	GET	https://github.com/angular/angular/issues/36839.	Out of Scope
FALSE	GET	https://github.com/angular/zone.js/blob/master/lib/zone-spec/task-tracking.ts	Out of Scope
FALSE	GET	https://plnkr.co/edit/GC512b?p=preview	Out of Scope
FALSE	GET	https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style	Out of Scope
FALSE	GET	https://developer.mozilla.org/en-US/docs/Web/API/Element/className	Out of Scope
FALSE	GET	https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes	Out of Scope
FALSE	GET	https://code.google.com/p/dart/issues/detail?id=17406	Out of Scope
FALSE	GET	http://www.w3.org/1999/xhtml	Out of Scope
FALSE	GET	http://www.w3.org/1999/xlink	Out of Scope
FALSE	GET	http://www.w3.org/XML/1998/namespace	Out of Scope
FALSE	GET	http://www.w3.org/2000/xmlns/	Out of Scope
FALSE	GET	https://github.com/angular/angular/commit/2b9cc8503d48173492c29f5a271b61126104fbdb	Out of Scope
FALSE	GET	https://github.com/angular/angular/issues/44028	Out of Scope
FALSE	GET	https://github.com/angular/angular/issues/44883	Out of Scope
FALSE	GET	https://github.com/angular/angular/issues/7916	Out of Scope
FALSE	GET	https://angular.io/api/core/Component	Out of Scope
FALSE	GET	https://code.google.com/p/chromium/issues/detail?id=155654	Out of Scope
FALSE	GET	https://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html	Out of Scope
FALSE	GET	https://developer.mozilla.org/docs/Web/HTML/Element/meta	Out of Scope
FALSE	GET	https://developer.mozilla.org/docs/Web/API/Document/querySelector	Out of Scope
FALSE	GET	https://hammerjs.github.io/	Out of Scope
FALSE	GET	https://hammerjs.github.io/api/	Out of Scope
FALSE	GET	https://url.spec.whatwg.org./	Out of Scope
FALSE	GET	http://www.site.org/html;mk=mv?k=v	Out of Scope
FALSE	GET	http://base-path/primary-route-path	Out of Scope
FALSE	GET	https://developer.mozilla.org/en-US/docs/Web/API/History	Out of Scope
