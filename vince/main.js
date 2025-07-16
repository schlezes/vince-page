/*global
 document
 window
 */
var art = {
    "d1": [
        "<figure><img id=d01 class='radius html-size' src=img/big-data-1.png height=300px width=555px alt='Presentation Slide, Title: Big Data Design Experience with DJIA API, written in large black letters upon a white board for a live audience.' title='Big Data Application Design Experience with DJIA API'><figcaption>Screenshot of DJIA Api design</figcaption></figure>",
        "<figure><img id=d02 class='radius html-size' src=img/api.png height=300px width=317px alt='Screen shot of djia api data: two columns, left column in blue color listing dates with open, high, low, close and volume. Second column listing of prices in magenta' title='Data from the DJIA API.'><figcaption>Screenshot of DJIA Api data</figcaption></figure>"
    ],
    "d2": [
        "<figure><img id=d21 class='radius html-size' src=img/testables-1.png height=300px width=475px alt='Presentation slide, Title: Monthly meetup at Testables LA. Black text on white background.This presentation was an overview of Data Con LA one day conference.' title='HTML slide set for presentation at testables LA meetup'><figure><figcaption>HTML slide set at test Meetup</figcaption></figure>",
        "<figure><img id=d22 class='radius html-size' src=img/vue-1.png height=300px width=475px alt='Presentation slide, Title: Monthly Vue meetup. Black text on white background.This presentation was an overview of a Vue design experience - food combining App.' title='HTML slide set for presentation at Vue.JS meetup.'><figure><figcaption>HTML slide set at Vue JS Meetup</figcaption></figure>",
        "<figure><img id=d23 class='radius html-size' src=img/testables-meetup-2.png height=300px width=475px alt='Presentation slide, Title: Monthly meetup at Testables LA. Black text on white background.This presentation was an overview of a Cypress Testing Experience.' title='HTML slide set for presentation at testables LA meetup.'><figure><figcaption>HTML slide set at test Meetup</figcaption></figure>",
        "<figure><img id=d24 class='radius html-size' src=img/data-con-1.png height=300px width=475px alt='Presentation slide, Title: Big Data Design Experience. Black text on white background. This presentation was submitted as  a DJIA API data extraction experience.' title='HTML slide set for presentation at Data Con 2020 (not selected).'><figure><figcaption>HTML slide set for Data Con</figcaption></figure>"
    ],
    "d3": [
        "<figure><img id=d312 class='radius html-size' src=img/foodApp-1.png height=400px width=232px alt='Cell phone image of food combining App. Title in white text on blue background. 9 yellow squares in the middle with each square black text of food type.' title='App for quick go or no-go on food consumption.'><figure><figcaption>Cell phone food APP</figcaption></figure>",
        "<figure><img id=d32 class='radius html-size' src=img/shoe-1.png height=400px width=297px alt='Cell phone image of a shoe repair app that displays 15 photos of various shoe types. At the top, 12 tiny green squares with black text representing the months.' title='App design for shoe repair shop.'><figure><figcaption>Cell APP for shoe repair</figcaption></figure>",
        "<figure><img id=d33 class='radius html-size' src=img/social.png height=400px width=219px alt='Cell phone image of a social events app. At the top, is white text on a blue background. In the middle are 10 small colored boxes with black text - the social event.' title='App design for local social events.'><figure><figcaption>App for social events</figcaption></figure>",
        "<figure><img id=d34 class='radius html-size' src=img/sports-chat-1.png height=400px width=325px alt='Cell phone image of a sports app. a chat box, streaming video and sports news. On the left side a football, baseball and basketball.' title='Page design for sports chat App.'><figure><figcaption>APP design for sports chat</figcaption></figure>"
    ],
    "d4": [
        "<figure><img id=d41 class='radius html-size' src=img/github-1.png height=400px width=429px alt='GitHub listing of schlezes/Repositories.  Blue text on white background.' title='schlezes GitHub repositories for Meetup presentations.'><figure><figcaption>schlezes GitHub page</figcaption></figure>"
    ],
    "d5": [
        "<figure><img id=d51 class='radius html-size' src=img/allergy-1.png height=300px width=431px alt='Page design for allergy business. 5 local maps across the top, followed by 4 square boxes showing hand drawn allergy symptoms.' title='Page design for allergy business.'><figure><figcaption>Page design for allergy</figcaption></figure>",
        "<figure><img id=d52 class='radius html-size' src=img/sch-tech-1.png height=300px width=395px alt='Schlezes.tech was my design for showcase of JavaScript coding, about 2700 lines of JavaScript.' title='Schlezes.tech was my design for showcase of JavaScript coding, about 2700 lines of JavaScript.'><figure><figcaption>schlezes.tech</figcaption></figure>",
        "<figure><img id=d53 class='radius html-size' src=img/sch-com-1.png height=300px width=472px alt='Schlezes.com was my the very first website. Yes, a WordPress platform. It was fast, easy and became a placeholder.' title='Schlezes.com was my the very first website. Yes, a WordPress platform. It was fast, easy and became a placeholder. I learned SEO from this design.'><figure><figcaption>old schlezes.com</figcaption></figure>"
    ],
    "d6": [
        "<figure><img id=d61 class=radius src=https://schlezes.com/img/beer.png height=100px width=200px alt='Artwork showing headache triggers: Brown canvas with red circular images of happy face and headache face - beer-beer-beer makes your want to cheer - oh no, too much cheer.' title='Artwork. Beer gives headache.'><figcaption>Artwork for slide set</figcaption><figcaption>Headache from beer</figcaption></figure>",
        "<figure><img id=d62 class=radius src=https://schlezes.com/img/dev-test.png height=100px width=200px alt='Simple and original artwork. Dark blue text and flow diagram on blue background. Title: developer tools + a flow chart for testing code.' title='Artwork. Diagram for testing code.'><figcaption>Artwork for slide set</figcaption><figcaption>Test release process</figcaption></figure>",
        "<figure><img id=d63 class=radius src=https://schlezes.com/img/face.png height=100px width=200px alt='Simple and original artwork. Blue circular outline of shining face of approval on white background + green text showing I like this page.' title='Artwork. A nice shining face of approval.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Smile of approval</figcaption></figure>",
        "<figure><img id=d64 class=radius src=https://schlezes.com/img/fast-foods.png height=100px width=200px alt='Simple and original artwork. Drive by the fast food places at 55 mph. A green block outline of auto on orange background driving by the fast foods.' title='Artwork. Drive by the fast food places.'><figcaption>Artwork for slide set</figcaption><figcaption>Drive by fast foods</figcaption></figure>",
        "<figure><img id=d65 class=radius src=https://schlezes.com/img/go-around.png height=100px width=200px alt='Simple and original artwork. Freeway data. Two images of autos on the freeway. Inside lane looks ahead and sees okay to pass on the inside lane.'  Title='Artwork. Freeway data shows okay to pass in the right lane.'><figcaption>Artwork for slide set</figcaption><figcaption>Freeway data - ok</figcaption></figure>",
        "<figure><img id=d66 class=radius src=https://schlezes.com/img/sick.png height=100px width=200px alt='Artwork showing a red outline stick figure of a person, very unhappy with the food combination of fish and beef.  All drawn on a black canvas background.' title='Artwork. Two diverse food digesting differently causing upset stomach.'><figure><figcaption>Artwork for slide set</figcaption><figcaption>Fish & beef don't mix</figcaption></figure>",
        "<figure><img id=d67 class=radius src=https://schlezes.com/img/test-code.png height=100px width=200px alt='Artwork: two code test flow diagrams + text in blue drawn on orange canvas. Two loops, retest until finished + test only exception.' title='Artwork. Two flow diagrams for code test.'><figcaption>Artwork for slide set</figcaption><figcaption>Test release process</figcaption></figure>",
        "<figure><img id=d68 class=radius src=https://schlezes.com/img/small-allergy.png height=100px width=200px alt='Page design for allergy business. 5 local maps across the top, followed by 4 square boxes showing hand drawn allergy symptoms.' title='Artwork. An allergy symptom container.'><figcaption>Artwork for slide set</figcaption><figcaption>Allergy symptoms</figcaption></figure>",
        "<figure><img id=d69 class=radius src=https://schlezes.com/img/headache.png height=100px width=200px alt='Black ink drawing of face on white background showing miserable due to headache caused by an allergy.' title='Artwork. A visual for headache symptom in allergy.'><figcaption>Artwork for slide set</figcaption><figcaption>Allergy - Headache</figcaption></figure>",
        "<figure><img id=d691 class=radius src=https://schlezes.com/img/miserable.png height=100px width=200px alt='Black ink drawing of face on white background showing miserable due to headache caused by an allergy. Eyes are glowing orange color and lips are down-turned red color.' title='Artwork. A visual for being miserable symptom in allergy.'><figcaption>Artwork for slide set</figcaption><figcaption>Allergy - Miserable</figcaption></figure>",
        "<figure><img id=d692 class=radius src=https://schlezes.com/img/pollen.png height=100px width=200px alt='Artwork in black text on white background + black and orange dots scattered on canvas to show pollen drifting in the air - a symptom in allergy.' title='Artwork. A visual for pollen symptom in allergy.'><figcaption>Artwork for slide set</figcaption><figcaption>Allergy - Pollen</figcaption></figure>",
        "<figure><img id=d693 class=radius src=https://schlezes.com/img/runny-nose.png height=100px width=200px alt='Artwork. Blue and black text on white background. A visual for runny nose symptom in allergy. Drink a fizzy decongestant to relieve the symptoms of runny nose.' title='Artwork. A visual for runny nose symptom in allergy.'><figcaption>Artwork for slide set</figcaption><figcaption>Allergy - Runny nose</figcaption></figure>",
        "<figure><img id=d694 class=radius src=https://schlezes.com/img/my-code.png height=100px width=200px alt='Two side by side face images on peach color background: left face in blue outline and text says my code is good - right face says code is not good until tested.' title='Artwork. A visual for slide set good code for testing'><figcaption>Artwork for slide set</figcaption><figcaption>Code is for testing</figcaption></figure>",
        "<figure><img id=d695 class=radius src=https://schlezes.com/img/headache-1.png height=100px width=200px alt='Artwork: Blue text on white background - Some Foods like MSG gives headache.  A sad face outline in gold color showing the misery.' title='Artwork. A visual for slide set'><figcaption>Artwork for slide set</figcaption><figcaption>Headache from MSG</figcaption></figure>",
        "<figure><img id=d696 class=radius src=https://schlezes.com/img/food-3-properties.png height=100px width=200px alt='Artwork: Blue outline circular style stacked figure on gold color background showing water and hamburger not mixing very well in digestion - fermentation.' title='Artwork. Water plus beef gives headache.'><figcaption>Artwork for slide set</figcaption><figcaption>Water & beef don't mix</figcaption></figure>"
    ],
        "d60": [
        "<figure><img id=d601 class=radius src='https://schlezes.com/img/slide-25.png' height=100px width=200px alt='Artwork:  A pizza outline in orange color onto a gold color background. Blue text proclaiming that it is not the pizza, it is the seasoning. Black granules of seasoning on top of the pizza.' title='Artwork: Headache from pizza'><figcaption>Artwork for slide set</figcaption><figcaption>Headache from pizza</figcaption></figure>",
        "<figure><img id=d602 class=radius src='https://schlezes.com/img/something-else.png' height=100px width=200px alt='Artwork. Orange sad face outline surrounded by 4 orange circles each with blue text inside - No pizza, no beer, no msg, no spice, all on gold background. Still get headaches.' title='Artwork: Still get headaches from something.'><figcaption>Artwork for slide set</figcaption><figcaption>Still get headaches</figcaption></figure>",
        "<figure><img id=d603 class=radius src=https://schlezes.com/img/research.png height=100px width=200px alt='Spreadsheet table showing vegetables in first column and sorted by protein, starch, non-starch, fat and carbs across the top row.  Some cells are green (no starch or low carb).' title='Spreadsheet - vegetables'><figcaption>Artwork for slide set</figcaption><figcaption>Spreadsheet - vegetables</figcaption></figure>",
        "<figure><img id=d604 class=radius src=https://schlezes.com/img/food-research.png height=100px width=200px alt='Spreadsheet of vegetables across the top row and down the first column are:  carbs, sugars, fiber, fat and protein.  Each cell is the gram amount per tablespoon of volume' title='Spreadsheet - veg nutrients'><figcaption>Artwork for slide set</figcaption><figcaption>Spreadsheet - veg nutrients</figcaption></figure>",
        "<figure><img id=d605 class=radius src=https://schlezes.com/img/slide-29.png height=100px width=200px alt='Artwork. Blue outlined rectangles and text inside arranged to show carbs, fat and protein combining to a result. The background is white.' title='Spreadsheet - Food: fat carbs protein'><figcaption>Artwork for slide set</figcaption><figcaption>Food: fat carbs protein</figcaption></figure>",
        "<figure><img id=d606 class=radius src=https://schlezes.com/img/data.png height=100px width=200px alt='Meetup Presentation slide: Vue.js Food combining App single click on dairy = red dialog box (attention) + listing of dairy items in data structure.' title='Vue.js Data {dairy}'><figcaption>Artwork for slide set</figcaption><figcaption>Vue.js Data {dairy}</figcaption></figure>",
        "<figure><img id=d607 class=radius src=https://schlezes.com/img/event-target.png height=100px width=200px alt ='Meetup Presentation slide: Vue.js Food combining App single click on dairy. Result is red dialog box  (attention) + listing of dairy items in data structure.' title='Vue.js - inspect element'><figcaption>Artwork for slide set</figcaption><figcaption>Vue.js - inspect element</figcaption></figure>",
        "<figure><img id=d608 class=radius src=https://schlezes.com/img/chg.png height=100px width=200px alt='Meetup presentation slide: Vue.js source code in red, blue, orange and white text on black background. 5 straight red lines to show connecting functions.' title='Vue.js v-on:click event'><figcaption>Artwork for slide set</figcaption><figcaption>Vue.js v-on:click event</figcaption></figure>",
        "<figure><img id=d609 class=radius src=https://schlezes.com/img/flex-container.png height=100px width=200px alt='Meetup presentation slide: Using Flex containers. 1 blue rectangular outline with 3 smaller rectangles inside,  All text in blue & red on white background.' title='Artwork: Vue.js flex container'><figcaption>Artwork for slide set</figcaption><figcaption>Vue.js flex container</figcaption></figure>",
        "<figure><img id=d610 class=radius src=https://schlezes.com/img/flex-container-exp-left.png height=100px width=200px alt='Meetup Presentation Slide: Vue.js source code in Blue, orange and white text on black background. Shows the v-for directive (item, index) in the HTML flex container.' title='Vue.js v-for(item, index)'><figcaption>Artwork for slide set</figcaption><figcaption>Vue.js v-for(item, index)</figcaption></figure>",
        "<figure><img id=d611 class=radius src=https://schlezes.com/img/method-if-else-list.png height=100px width=200px alt='Meetup Presentation Slide: Vue.js source code (text) in blue, orange and white on a black background. Two if statements that determines the listing in the flex container dialog box.' title='Vue.js list.includes'><figcaption>Artwork for slide set</figcaption><figcaption>Vue.js list.includes</figcaption></figure>",
        "<figure><img id=d612 class=radius src=https://schlezes.com/img/list-reason.png height=100px width=200px alt='Meetup Presentation Slide: Title: these food items all have something in common - eat by themselves. All text in red on white background.' title='Vue.js list.includes'><figcaption>Artwork for slide set</figcaption><figcaption>Vue.js list.includes</figcaption></figure>",
        "<figure><img id=d613 class=radius src=https://schlezes.com/img/exp-left-render-one-click.png height=100px width=200px alt='Meetup Presentation Slide: Vue.js App click event. Click on dairy opens Red dialog box with black text, eat alone. 9 yellow boxes open with list of dairy items.' title='Vue.js App click event'><figcaption>Artwork for slide set</figcaption><figcaption>Vue.js App click event</figcaption></figure>",
        "<figure><img id=d614 class=radius src=https://schlezes.com/img/exp-right-2nd-click-render.png height=100px width=200px alt='Meetup Presentation Slide: Vue.js click event. Click on seeds opens yellow dialog box for seeds list. Click on dairy opens red dialog box - no seeds and dairy, at same time.' title='Vue.js App click event'><figcaption>Artwork for slide set</figcaption><figcaption>Vue.js App click event</figcaption></figure>",
        "<figure><img id=d615 class=radius src=https://schlezes.com/img/color-background.png height=100px width=200px alt='Meetup Presentation Slide: Vue.js source code, data object: {dairy}.  Current properties highlighted in green background.  Optional properties listed in grey background.' title='Vue.js dairy object'><figcaption>Artwork for slide set</figcaption><figcaption>Vue.js dairy object</figcaption></figure>"
    ],
    "d7": [
        "<figure><img id=d71 class='radius html-size' src=img/lotto-1.png height=300px width=512px alt='Game Application: Title: Lotto Game (in white text) on blue background. Main content is 38 square boxes of magenta color background each with a number, 1 - 38.' title='Simple lotto game.  38 numbers and 5 random picks.'><figure><figcaption>Game design for lotto</figcaption></figure>",
        "<figure><img id=d72 class='radius html-size' src=img/tic-tac-1.png height=300px width=475px alt='Game Application: Title: Tic-Tac-Toe in white text on blue background. Main content is a tic-tac-toe image of 9 squares with alternate yellow and blue colors.  Black X and O inside.' title='Tic-tac-toe game. Pick either an X or O and play against yourself.'><figure><figcaption>Game design for tic tac toe</figcaption></figure>"
    ],
    "d8": [
        "<figure><img id=d81 class='radius html-size' src=img/2.png height=300px width=350px alt='Photo: Marina del Rey, CA.  Dark blue water in the foreground and a single dock in the background. Several sailboats at rest in the dock slips. Light blue sky.' title='A photo of a spot in Marina del Rey, CA. I used this photo as one of the images to demo an image gallery on a web page.'><figure><figcaption>Marina del Rey, CA</figcaption></figure>",
        "<figure><img id=d82 class='radius html-size' src=img/3.png height=300px width=350px alt='Photo: Truman Lake, MO. The time was about dusk and facing West as the sun was descending below the horizon. Orange sky in the background with dark water in the foreground.' title='A photo of a spot at Truman Lake, MO during a summer sunset. I used this photo as one of the images to demo an image gallery on a web page.'><figure><figcaption>Truman Lake, MO</figcaption></figure>",
        "<figure><img id=d83 class='radius html-size' src=img/4.png height=300px width=350px alt='Photo: Lake Tahoe, CA. Photo of winter scene overlooking the Lake to the Southwest. Snow on the hill in the foreground and dark clouds in the sky, lingering over the shaded Lake water.' title='A photo of a spot at Lake Tahoe, CA during a cold winter day. I used this photo as one of the images to demo an image gallery on a web page.'><figure><figcaption>Lake Tahoe, CA</figcaption></figure>"
    ],
    "d9": [
        "<figure><img id=d91 class='radius html-size' src=img/tech.png height=300px width=500px alt='Blog Page: Title, schlezes.tech (in blue text) on white background. Followed by a brief description in black text of intent to show-case JavaScript coding know-how.' title='Blog to showcase JavaScript skill sets.'><figure><figcaption>Blog to introduce Schlezes.tech</figcaption></figure>",
        "<figure><img id=d92 class='radius html-size' src=img/seo.png height=300px width=500px alt='Blog Page: Title WordPress SEO in blue text on white background. Followed by a brief description in black text on the organization of page content for search engines crawls.' title='Skill sets in SEO for website ranking.'><figure><figcaption>Blog to show skill sets in SEO</figcaption></figure>",
        "<figure><img id=d93 class='radius html-size' src=img/light.png height=300px width=500px alt='Blog Page: Title, Website Design and light (in blue text) on a white background. Followed by a brief description in black text on how engineering design can be used in another space.' title='Skill sets in marketing with the concept of web page design'><figure><figcaption>Blog to show skill sets in design</figcaption></figure>"
    ],
    "d10": [
        "<figure><img id=d101 class='radius html-size' src=img/crawl-1.png height=300px alt='Meetup Presentation Slide: Title, I want to crawl the page (in blue text) on white background. Followed by further text to explain why webpage crawl is helps rank.' width=490px title='In SEO, it is good to project yourself as the web crawler so that you can structure your code for the best outcome. For me that means flow.'><figure><figcaption>Artwork to emphasize page crawl</figcaption></figure>",
        "<figure><img id=d102 class='radius html-size' src=img/happy-client-1.png height=300px width=554px alt='Artwork Presentation slide: Title, Client - Developer in blue text on white background. Two smiley faces sketched in blue - client is happy and developer is happy - data is good.' title='In SEO, one of the factors in ranking outcome is dependent upon delivery of valid and relevant information to the query.'><figure><figcaption>Artwork to emphasize client expectations</figcaption></figure>",
        "<figure><img id=d103 class='radius html-size' src=img/ul-li-pairs-1.png height=300px width=570px alt='Artwork Presentation Slide: Title, UL  LI Pairs (in blue text) on white background. Followed by further blue text to explain why use of ul li pairs can aid web site navigation.' title='In SEO, in my opinion UL - LI pairs are a good practice for website structure, regardless of ranking or not.'><figure><figcaption>Artwork to emphasize UL LI pairs</figcaption></figure>"
    ],
    "d11": [
        "<figure><img id=d104 class='radius html-size' src=img/speed-1.png height=300px width=771px alt='Artwork Graphic Presentation slide: Page Speed Insights score of 97 (in big green text) inside green bordered circle on white background. Page speed load score of schlezes.com.' title='As part of SEO, in my opinion, as good practice speed of load is valuable for website ranking. Speed on load gets the client engaged quickly. A 97 score is valuable.'><figure><figcaption>Speed test of schlezes.com</figcaption></figure>",
        "<figure><img id=d105 class='radius html-size' src=img/speed1.png height=300px width=706px alt='Artwork Graphic Presentation slide: Page Speed Insights score of 99 (in big green text) inside green bordered circle on white background. Page speed load score of schlezes.tech.' title='As part of SEO, in my opinion, as good practice speed of load is valuable for website ranking. Speed on load gets the client engaged quickly. A 99 score is valuable'><figure><figcaption>Speed test of schlezes.tech</figcaption></figure>",
        "<figure><img id=d106 class='radius html-size' src=img/time-on-page-1.png height=300px width=524px alt='Artwork Presentation Slide:  Title, time on page (in blue text) on white background. Time on page with several bar charts. 1 sec, 10sec , 20sec and big smiley face sketched in blue.' title='As part of SEO, in my opinion, as a good practice time on the page is valuable for website ranking. More time on page indicates value for the client.'><figure><figcaption>Artwork to emphasize time on page</figcaption></figure>"
    ],
    "d12": [
        '<a href="https://schlezes.com/schlezes" target=_"blank" title="schlezes.tech webpage" id="d200" class="link-css" style="background-color: rgb(255, 128, 0)">schlezes (dot) tech <br /><br />webpage</a>',
        '<a href="https://schlezes.com/vince" target="_blank" title="about Vince Schlezes" id="d201" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(255, 255, 0);">Vince Schlezes about page</a>',
        '<a href="https://github.com/schlezes" target="_blank" title="Github schlezes home page" id="d202" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(128, 255, 0);">GitHub</a>',
        '<a href="https://schlezes.com/food" target="_blank" title="Food Combining APP" id="d203" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(0, 255, 0);">Food Combining<br /><br />APP</a>',
        '<a href="https://schlezes.com/shoe" target="_blank" title="Shoe Repair Shop APP" id="d204" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(0, 255, 128);">Shoe Shop Repair<br /><br /> APP</a>',
        '<a href="https://schlezes.com/social" target="_blank" title="Social Events APP" id="d205" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(0, 255, 255);">Social Events<br /><br /> APP</a>',
        '<a href="https://schlezes.com/sports" target="_blank" title="Sports Chat" id="d206" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(0, 128, 255);">Sports Chat<br /><br /> APP</a>',
        '<a href="https://schlezes.com/lotto" target="_black" title="lotto" id="d207" style="height: 90px; width: 90px; color: silver; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(0, 0, 255);">lotto<br /><br />Game</a>',
        '<a href="https://schlezes.com/tictac" target="_blank" title="tic tac" id="d208" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(128, 0, 255);">tic tac<br /><br />Game</a>',
        '<a href="https://schlezes.com/allergy" target="_blank" title="Allergy Solutions Locations" id="d209" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(255, 0, 255);">Allergy Solutions</a>',
        '<a href="https://schlezes.com/page-speed-load" target="_blank" title="blog - page speed load" id="d210" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(255, 0, 128);">page speed load</a>',
        '<a href="https://schlezes.com/love-seo" target="_blank" title="blog for Wordpress SEO" id="d211" style="height: 90px; width: 90px; display: inline-block; margin: 6px 5px; border-radius: 5px; background-color: rgb(255, 0, 0);">love seo</a>'
    ]

};

var getId = function (id) {
    "use strict";
    return document.getElementById(id);
};

var expand = function (e) {
    "use strict";
    var d = e.target.id;
    var dd = getId(d);
    dd.style.borderRadius = 10 + "px";
    // dd.className = "size";
    // dd.classList.add = "size";
    dd.style.height = dd.clientHeight * 1.25 + "px";
    dd.style.width = dd.clientWidth * 1.25 + "px";
    dd.style.transition = "all 1s ease-in";
};

var demo = function (e) {
    "use strict";
    var t = e.target.id;
    var op = document.getElementById("dem");
    var zz = document.querySelectorAll("section");

    zz.forEach(function (value) {
        value.style.display = "none";
    });

    // correct header section visibility
    getId("see-me").style.display = "block";
    // correct header section visibility

    // clear last render first
    op.innerHTML = "";
    art[t].forEach(function (value) {
        var li = document.createElement("li");
        li.innerHTML = value;
        li.addEventListener("click", expand, false);
        op.appendChild(li);
    });
    window.scrollTo(0, 0);
};

var resize = function () {
    "use strict";
    var a = getId("nav-w");
    var b = getId("aside-w").clientWidth;
    a.style.width = b + "px";
};

var vis = [
    {"a1": "off"},
    {"a2": "off"},
    {"a3": "off"}
];
// show header text on click
var show = function (e) {
    "use Strict";
    var any;
    var y = e.target.id;
    var chg = document.getElementById("a" + y);

    if (vis.includes("on")) {
        any = vis.indexOf("on");
    } else {
        any = -1;
    }

    if (any === -1) {
        chg.classList.remove("off");
        chg.classList.add("on");
        e.target.style.backgroundColor = "lightblue";
        e.target.style.border = "1px lightblue solid";
        e.target.style.borderRadius = 3 + "px";
        vis[(y - 1)] = "on";
        resize();
        return;
    }
    chg.classList.remove("on");
    chg.classList.add("off");
    e.target.style.backgroundColor = "transparent";
    e.target.style.border = "none";
    vis[(y - 1)] = "off";
    resize();
};
    //  getId to remove button element
var son = getId("dn7");
var doc = getId("doc");
    // has to be here otherwise not working
var action = function (e) {
    "use strict";
    var getEl = e.target.tagName;
    var y = e.target.id;
    if (getEl !== "LI" || getEl === undefined) {
        return;
    }
    if (y.length > 1) {
        son.style.display = "none";
        doc.style.display = "none";
        demo(e);
    } else {
        show(e);
    }
};

// need to get the parent section id for collapse of element
// use inside function - - > up

var obj = {
    "up1": "main",
    "up2": "two",
    "up3": "third",
    "up4": "fourth",
    "up5": "fifth",
    "up6": "sixth",
    // "dn1": "main",
    "dn2": "main",
    "dn3": "two",
    "dn4": "third",
    "dn5": "fourth",
    "dn6": "fifth",
    "dn7": "sixth"
};

// set page scroll

var up = function (e) {
    "use strict";
    var id = e.target.id;
    var u = document.getElementById(obj[id]);
    u.style.opacity = 0;
    u.style.visibility = "collapse";
    u.style.height = 0;
    u.style.padding = 0;
    u.style.transition = "all 1s ease-in";
};

function dn(ev) {
    "use strict";
    var id = ev.target.id;
    var d = document.getElementById(obj[id]);
    d.style.opacity = 1;
    d.style.visibility = "visible";
    d.style.height = "auto";
    d.style.paddingTop = 4 + "%";
    // d.style.margin = 10 + "%";
    d.style.transition = "all 1s ease-in";
}

var addEv = function () {
    "use strict";
    return document.addEventListener("click", action, false);
};
function to() {
    "use strict";
    document.location.reload();
    window.scrollTo(0, 0);
}
function tw() {
    "use strict";
    window.scrollTo(0, 0);
}

var listeners = function () {
    "use strict";
    addEv();
    getId("up1").addEventListener("click", up, false);
    getId("up2").addEventListener("click", up, false);
    getId("up3").addEventListener("click", up, false);
    getId("up4").addEventListener("click", up, false);
    getId("up5").addEventListener("click", up, false);
    getId("up6").addEventListener("click", up, false);
    getId("dn2").addEventListener("click", dn, false);
    getId("dn3").addEventListener("click", dn, false);
    getId("dn4").addEventListener("click", dn, false);
    getId("dn5").addEventListener("click", dn, false);
    getId("dn6").addEventListener("click", dn, false);
    getId("dn7").addEventListener("click", dn, false);
    getId("top").addEventListener("click", to, false);
    getId("doc").addEventListener("click", tw, false);
    getId("aside-w").addEventListener('load', resize, false);
    // getId("d1").addEventListener("click", demo, false);
};
window.onload = listeners;

resize();

window.onresize = resize;