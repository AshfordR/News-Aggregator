const API_KEY = "0785861050bd4b8a9defb0e19f153a18";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

function reload() {
    window.location.reload();
}

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    console.log(JSON.stringify());
    /*
    const data = {
        "status": "ok",
        "totalResults": 40106,
        "articles": [
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Moti Mahal: India curry houses battle over butter chicken",
                "description": "Butter chicken - a curry popular around the world - is now in the middle of a court battle in India.",
                "url": "https://www.bbc.co.uk/news/world-asia-india-68053470",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7084/production/_132440882_58713943-a08f-40dc-a23f-65c524353a72.jpg",
                "publishedAt": "2024-01-28T01:17:04Z",
                "content": "Who invented butter chicken? \r\nThe velvety dish, made in a thick tomato-yoghurt gravy with rich notes of butter and mild spices, has inspired mystery novels, travelogues, and countless restaurant ord… [+7549 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": "Mariella Moon",
                "title": "Google changes its Play Store policy to allow more real-money games",
                "description": "There may be a lot more real-money gaming (RMG) apps available in the Google Play Store before the year ends — at least in certain locations. Google initially started allowing apps that deal with real money in its store back in 2021, but only if they fall und…",
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_784cebf3-606d-45c8-950f-5a167ef0a1c4",
                "urlToImage": null,
                "publishedAt": "2024-01-12T10:05:11Z",
                "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slashdot.org"
                },
                "author": "msmash",
                "title": "India Puts Tech Firms on Notice Over Deepfakes Inaction",
                "description": "An anonymous reader shares a report: India has warned tech companies that it is prepared to impose bans if they fail to take active measures against deepfake videos, a senior government minister said, on the heels of warning by a well-known personality over a…",
                "url": "https://tech.slashdot.org/story/24/01/17/1410231/india-puts-tech-firms-on-notice-over-deepfakes-inaction",
                "urlToImage": "https://a.fsdn.com/sd/topics/social_64.png",
                "publishedAt": "2024-01-17T16:00:00Z",
                "content": "\"Spock, did you see the looks on their faces?\"\r\n\"Yes, Captain, a sort of vacant contentment.\""
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "tips@androidcentral.com (Nickolas Diaz)",
                "title": "OnePlus Open finally grabs OxygenOS 14 (Android 14) — with a caveat",
                "description": "The OnePlus Open has started receiving its OxygenOS 14 (Android 14) update in India, but there's a catch.",
                "url": "https://www.androidcentral.com/phones/oneplus-open-android-14-rollout",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/GqkAUT7bE9vz989UH5uihD-1200-80.jpg",
                "publishedAt": "2024-01-31T18:26:01Z",
                "content": "<ul><li>The OnePlus Open has started receiving its OxygenOS 14 (Android 14) update in India but Closed Beta and Open Beta users are first in line.</li><li>The update ushers in \"Aqua Dynamics\" with mo… [+2925 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "vishnu.skar@gmail.com (Vishnu Sarangapurkar)",
                "title": "OnePlus 12's Amazon listing spills the Indian pricing and storage details",
                "description": "OnePlus 12 is all set to launch on January 23 globally, including regions like India, the U.S., and the U.K.",
                "url": "https://www.androidcentral.com/phones/oneplus-12-amazon-india-listing-leak",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/tPpEjERkYbwkSWnNxMgnf7-1200-80.jpg",
                "publishedAt": "2024-01-16T13:21:53Z",
                "content": "<ul><li>The OnePlus 12 base variant listed on Amazon India confirms the specs and pricing.</li><li>The model featuring 12GB of RAM and 256GB of onboard storage is priced at Rs 69,999 (~$843).</li><li… [+2490 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda)",
                "title": "Stuffcool Major Max power bank review: A decent choice if you use a Samsung phone in India",
                "description": "Stuffcool has a new budget power bank, and it is pretty good if you use a Samsung phone in India.",
                "url": "https://www.androidcentral.com/accessories/stuffcool-major-max-power-bank-review",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/7hazZjJz6GnnvGSChkhnfJ-1200-80.jpg",
                "publishedAt": "2024-02-02T05:49:03Z",
                "content": "If you want to buy charging accessories in India, you can't go wrong with Stuffcool. The manufacturer has plenty of great choices available, whether it's the Neutron GaN charger, Centurion 120W charg… [+4119 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "ReadWrite"
                },
                "author": "Sam Shedden",
                "title": "Nvidia will sell advanced GPUs to India after China exports blocked",
                "description": "India data center providers are purchasing tens of thousands of advanced Nvidia GPUs (graphics processing unit) in a bid to […]\nThe post Nvidia will sell advanced GPUs to India after China exports blocked appeared first on ReadWrite.",
                "url": "https://readwrite.com/nvidia-will-sell-advanced-gpus-to-india-after-china-exports-blocked/",
                "urlToImage": "https://readwrite.com/wp-content/uploads/2024/01/Untitled-design-3.jpg",
                "publishedAt": "2024-01-12T10:13:23Z",
                "content": "India data center providers are purchasing tens of thousands of advanced Nvidia GPUs (graphics processing unit) in a bid to turbocharge growth in the country’s artificial intelligence (AI) sector.\r\nT… [+2834 chars]"
            },
            {
                "source": {
                    "id": "wired",
                    "name": "Wired"
                },
                "author": "Matt Simon",
                "title": "The World’s Essential Aquifers Are in Deep Trouble",
                "description": "New research finds that the groundwater systems that hydrate your life are in rapid, sometimes accelerating decline around the globe. Here’s how to stop the retreat.",
                "url": "https://www.wired.com/story/the-worlds-essential-aquifers-are-in-deep-trouble/",
                "urlToImage": "https://media.wired.com/photos/65b035d4e25482aef816defe/191:100/w_1280,c_limit/well-aquifer-science-GettyImages-1476178277.jpg",
                "publishedAt": "2024-01-24T16:00:00Z",
                "content": "The water that pours out of your tap, or thats unnecessarily packaged in a single-use bottle, or that helped grow the produce in your fridgeall of it may well have come from aquifers somewhere. These… [+2332 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "nandika.iyerravi@futurenet.com (Nandika Ravi)",
                "title": "Note-taking gets easier as reMarkable 2 makes its debut in India",
                "description": "Note-taking on a tablet has become as good as paper with this launch",
                "url": "https://www.androidcentral.com/tablets/note-taking-gets-easier-as-remarkable-2-makes-its-debut-in-india",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/xwobG4WXkrZGMJEJ4ECCT9-1200-80.jpeg",
                "publishedAt": "2024-01-15T17:12:59Z",
                "content": "Starting today (Jan.15), reMarkable 2, a tablet designed to mimic the feel of pen and paper, is now available for purchase in India via Amazon.in.\r\nThe reMarkable 2 has a 10.3-inch monochrome digital… [+2311 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Spriha Srivastava,Polly Thompson",
                "title": "India's moment has arrived — but many hurdles remain",
                "description": "India has 1.4 billion people and Narendra Modi hopes it can become a $7 trillion economy by 2030, but it's got plenty of problems to solve first.",
                "url": "https://www.businessinsider.com/india-economy-growth-booming-modi-seize-moment-problems-davos-2024-2",
                "urlToImage": "https://i.insider.com/65bb5a2443bb77284ba25c2d?width=1200&format=jpeg",
                "publishedAt": "2024-02-04T12:27:22Z",
                "content": "Indian Prime Minister Narendra Modi.Ritesh Shukla/Getty Images\r\n<ul><li>India's economy is expected to expand by 6.5% this year, according to IMF forecasts. </li><li>The world's most populous nation … [+7303 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Huileng Tan",
                "title": "The Red Sea attacks appear to be hurting traders and suppliers across the globe — but Russia's oil trade with India is still booming",
                "description": "Russian oil cargoes typically sail through the Red Sea before reaching India and this remains the preferred route, per S&P.",
                "url": "https://www.businessinsider.com/russia-economy-oil-trade-india-booming-red-sea-houthi-attacks-2024-1",
                "urlToImage": "https://i.insider.com/659f5d90ec62ab5daf8290b7?width=1200&format=jpeg",
                "publishedAt": "2024-01-11T06:15:22Z",
                "content": "Indian Prime Minister Narendra Modi and Russian President Vladimir Putin.Mikhail Svetlov/Getty Images\r\n<ul><li>Russian oil cargoes are still sailing via the Red Sea to get to India, according to S&P … [+2636 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Matthew Loh",
                "title": "A pigeon detained for 8 months on suspicion of spying for China has finally been set free",
                "description": "The bird was found at a port with markings on its feathers that resembled Chinese characters in May 2023, PETA said.",
                "url": "https://www.businessinsider.com/pigeon-detained-8-months-spying-accusations-finally-released-india-china-2024-2",
                "urlToImage": "https://i.insider.com/65bca0087a3d27148876f988?width=1200&format=jpeg",
                "publishedAt": "2024-02-02T08:03:09Z",
                "content": "The pigeon was detained in Mumbai on suspicion of being a spy bird.Bombay Society for the Prevention of Cruelty to Animals\r\n<ul><li>A pigeon accused of spying for China has finally been cleared of su… [+2313 chars]"
            },
            {
                "source": {
                    "id": "wired",
                    "name": "Wired"
                },
                "author": "Gina Neff",
                "title": "The New Digital Dark Age",
                "description": "Online trust will reach an all-time low thanks to unchecked disinformation, AI-generated content, and social platforms pulling up their data drawbridges.",
                "url": "https://www.wired.com/story/the-new-digital-dark-age/",
                "urlToImage": "https://media.wired.com/photos/65989cbaf3aa4654cae58439/191:100/w_1280,c_limit/WW2024_1443199991_SECURITY_Gina-Neff.jpg",
                "publishedAt": "2024-01-08T12:00:00Z",
                "content": "For researchers, social media has always represented greater access to data, more democratic involvement in knowledge production, and great transparency about social behavior. Getting a sense of what… [+3757 chars]"
            },
            {
                "source": {
                    "id": "wired",
                    "name": "Wired"
                },
                "author": "Matt Burgess, Dhruv Mehrotra",
                "title": "China’s Hackers Keep Targeting US Water and Electricity Supplies",
                "description": "Plus: Russia was likely behind widespread GPS outages, Vault 7 leaker was sentenced, police claim to trace Monero cryptocurrency, and more.",
                "url": "https://www.wired.com/story/china-hackers-us-water-electricity-moreno-vault-7/",
                "urlToImage": "https://media.wired.com/photos/65bd1c471d8a9e5e83f03f22/191:100/w_1280,c_limit/China%E2%80%99s-Hackers-Keep-Targeting-US-Water-and-Electricity-Supplies-Security-GettyImages-1784871790.jpg",
                "publishedAt": "2024-02-03T14:00:00Z",
                "content": "An indictment from the US Department of Justice may have solved the mystery of how disgraced cryptocurrency exchange FTX lost over $400 million in crypto. The indictment, filed last week, alleges tha… [+3401 chars]"
            },
            {
                "source": {
                    "id": "wired",
                    "name": "Wired"
                },
                "author": "Alloysius Attah",
                "title": "Digitization Beats Deforestation",
                "description": "Geolocation, supply-chain tracking, and digital payments are the tools that will enable farmers and consumers to make better choices.",
                "url": "https://www.wired.com/story/digitization-beats-deforestation/",
                "urlToImage": "https://media.wired.com/photos/65989cb86f5b1268ca080c9c/191:100/w_1280,c_limit/WW2024_919452424_ENVIRONMENT_Alloysius-Attah.jpg",
                "publishedAt": "2024-01-08T12:00:00Z",
                "content": "If you ever had pastries at breakfast, drank soy milk, used soaps at home, or built yourself a nice flat-pack piece of furniture, you may have contributed to deforestation and climate change.\r\nEvery … [+3758 chars]"
            },
            {
                "source": {
                    "id": "wired",
                    "name": "Wired"
                },
                "author": "Andy Greenberg",
                "title": "A Startup Allegedly ‘Hacked the World.’ Then Came the Censorship—and Now the Backlash",
                "description": "A loose coalition of anti-censorship voices is working to highlight reports of one Indian company’s hacker-for-hire past—and the legal threats aimed at making them disappear.",
                "url": "https://www.wired.com/story/appin-training-centers-lawsuits-censorship/",
                "urlToImage": "https://media.wired.com/photos/65b99af46599a951c10c510b/191:100/w_1280,c_limit/security_indian_hackers_coverup.jpg",
                "publishedAt": "2024-02-01T17:30:00Z",
                "content": "Even so, a little more than two weeks after publishing its investigation into Appin Technology, on December 5, Reuters complied with the Indian court's injunction, removing its story. Soon, in a kind… [+3750 chars]"
            },
            {
                "source": {
                    "id": "wired",
                    "name": "Wired"
                },
                "author": "Hannah Ritchie",
                "title": "Global Emissions Could Peak Sooner Than You Think",
                "description": "Global deployment of solar and wind power, plus a surge in EV sales, means emissions from fossil-fuel-derived energy will finally hit the downward slope.",
                "url": "https://www.wired.com/story/global-emissions-could-peak-sooner-than-you-think/",
                "urlToImage": "https://media.wired.com/photos/65a0d4335cf413d19929974a/191:100/w_1280,c_limit/WW2024_1318038785_ENVIRONMENT_Hannah-Ritchie.jpg",
                "publishedAt": "2024-01-17T12:00:00Z",
                "content": "Every November, the Global Carbon Project publishes the years global CO2 emissions. Its never good news. At a time when the world needs to be reducing emissions, the numbers continue to climb. Howeve… [+2901 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Boing Boing"
                },
                "author": "David Pescovitz",
                "title": "Airplane passenger trapped in bathroom during flight across India",
                "description": "A passenger aboard a SpiceJet flight from Mumbai to Bengaluru, India yesterday used the airplane bathroom but then found himself trapped inside. Apparently the lock malfunctioned and the fellow was trapped inside the lavatory until the plane landed over an ho…",
                "url": "https://boingboing.net/2024/01/18/passenger-trapped-in-bathroom-during-flight-across-india.html",
                "urlToImage": "https://boingboing.net/wp-content/uploads/2024/01/shutterstock_520461745-scaled.jpg",
                "publishedAt": "2024-01-18T23:19:19Z",
                "content": "A passenger aboard a SpiceJet flight from Mumbai to Bengaluru, India yesterday used the airplane bathroom but then found himself trapped inside. Apparently the lock malfunctioned and the fellow was t… [+687 chars]"
            },
            {
                "source": {
                    "id": "time",
                    "name": "Time"
                },
                "author": "Astha Rajvanshi",
                "title": "India Is Walking a Diplomatic Tightrope in the Red Sea Conflict",
                "description": "As tensions escalate in the Red Sea, India walks a diplomatic tightrope to balance its interests with Iran.",
                "url": "https://time.com/6622151/india-yemen-houthis-iran-red-sea/",
                "urlToImage": "https://api.time.com/wp-content/uploads/2024/02/GettyImages-1796941064.jpg?quality=85",
                "publishedAt": "2024-02-02T15:52:24Z",
                "content": "Since December, Indian naval ships have acted as first responders to at least 17 incidents where pirates have hijacked vessels in the Red Sea. In the latest incident this past week, an Indian warship… [+4778 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "India navy rescues Pakistani sailors from pirates",
                "description": "This was the second anti-hijacking operation in two days by India's navy off Somalia's coast.",
                "url": "https://www.bbc.co.uk/news/world-asia-india-68091830",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13EB/production/_132499050_withpirates.jpg",
                "publishedAt": "2024-01-30T08:49:59Z",
                "content": "Indian naval forces have rescued 19 Pakistani sailors after their fishing vessel was hijacked by pirates off Somalia's coast.\r\nThis was the second rescue operation in 36 hours by Indian warship INS S… [+2152 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Slashdot.org"
                },
                "author": "msmash",
                "title": "FCC Commissioner Carr Says 'Huge Miss' If US Doesn't Ban or Divest TikTok in 2024",
                "description": "Brendan Carr, the senior Republican on the Federal Communications Commission, in a wide-ranging interview with Indian newspaper Economic Times praised the South Asian market for blocking Chinese apps in 2020 and said he hopes the U.S. will follow suit. He sai…",
                "url": "https://news.slashdot.org/story/24/01/11/1550241/fcc-commissioner-carr-says-huge-miss-if-us-doesnt-ban-or-divest-tiktok-in-2024",
                "urlToImage": "https://a.fsdn.com/sd/topics/usa_64.png",
                "publishedAt": "2024-01-11T16:00:00Z",
                "content": "Introducing, the 1010, a one-bit processor.\r\n0NOPNo Operation\r\n1JMPJump (address specified by next 2 bits)"
            },
            {
                "source": {
                    "id": null,
                    "name": "Lareviewofbooks.org"
                },
                "author": null,
                "title": "The Failed Saint: On George Orwell's India",
                "description": "Jason Christian visits George Orwell’s birthplace in India....",
                "url": "https://lareviewofbooks.org/article/the-failed-saint-on-george-orwells-india",
                "urlToImage": "https://lareviewofbooks-media.azureedge.net/unsafe/2000x0/filters:format(jpeg):quality(75)/https%3A%2F%2Fdev.lareviewofbooks.org%2Fwp-content%2Fuploads%2F2024%2F01%2FMA_I120489_TePapa_Ruins_full.jpg",
                "publishedAt": "2024-01-24T01:13:56Z",
                "content": "WE TEND TO invoke George Orwell when discussing freedom of thought, opposition to tyranny, or the rights of the working class. These were recurring subjects in the authors expansive oeuvre and preocc… [+20486 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "tips@androidcentral.com (Nickolas Diaz)",
                "title": "Google warms up to more gambling apps on the Play Store",
                "description": "Google detailed an expansion of its RMG app acceptance on the Play Store in more countries, alongside stronger rules.",
                "url": "https://www.androidcentral.com/apps-software/google-details-rmg-app-play-store-expansion",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/AhaX4oiMTLreQSzTcsAWn7-1200-80.jpg",
                "publishedAt": "2024-01-12T20:02:30Z",
                "content": "<ul><li>Google will expand its support of real-money gaming apps in June 2024 for developers in India, Mexico, and Brazil on the Play Store</li><li>The Play Store's expansion means developers can pro… [+2663 chars]"
            },
            {
                "source": {
                    "id": "time",
                    "name": "Time"
                },
                "author": "Yasmeen Serhan",
                "title": "India Is Unveiling Its Controversial Temple of Ram. Here’s What to Know",
                "description": "The Ram Mandir, a Hindu temple, will be consecrated on January 22. Indian Prime Minister Narendra Modi will play a key role in the ceremony.",
                "url": "https://time.com/6564070/india-modi-temple-ram/",
                "urlToImage": "https://api.time.com/wp-content/uploads/2024/01/GettyImages-1933528813.jpg?quality=85",
                "publishedAt": "2024-01-18T15:47:26Z",
                "content": "A decades-long flashpoint in Indias sectarian politics is poised to reach a climax next week. The Ram Mandir, a Hindu temple, will be consecrated Jan 22. on a contested holy site once home to a mosqu… [+7394 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "techkritiko@gmail.com (Jay Bonggolto)",
                "title": "The OnePlus Buds 3 are finally going global later this month",
                "description": "OnePlus has revealed when the Buds 3 are hitting store shelves worldwide.",
                "url": "https://www.androidcentral.com/accessories/headphones/oneplus-buds-3-announcement-date-revealed",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/P84tEYd3nxSDVysXNdi6xU-1200-80.jpg",
                "publishedAt": "2024-01-22T16:27:47Z",
                "content": "<ul><li>The OnePlus Buds 3 will be released globally on January 23, along with the launch of the OnePlus 12 series.</li><li>OnePlus's latest earbuds will arrive in North America, India, and Europe, r… [+2141 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "tips@androidcentral.com (Nickolas Diaz)",
                "title": "OnePlus Open still missing Android 14 as its January update rolls out",
                "description": "Several fixes arrive to smoothen its experience while OnePlus begins the device's second open beta for Android 14.",
                "url": "https://www.androidcentral.com/phones/oneplus-open-january-2024-security-patch",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/Fy7EdSSW3TzME3zjwU23HM-1200-80.jpg",
                "publishedAt": "2024-01-22T19:13:29Z",
                "content": "<ul><li>OnePlus Open has started receiving the January 2024 security patch and several fixes.</li><li>OnePlus aims to solve some frustrating touch control problems users have faced and improve the de… [+2512 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "bradypsnyder@gmail.com (Brady Snyder)",
                "title": "Google will shut down Important tab next month in Files app, delete documents",
                "description": "Google Files has an Important tab that can store critical documents like IDs and passports, but these will be deleted for good next month.",
                "url": "https://www.androidcentral.com/apps-software/google-will-shut-down-important-tab-next-month-in-files-app-delete-documents",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/iGzxb6B9zEWSkUq73kUb6U-1200-80.jpg",
                "publishedAt": "2024-01-04T16:24:12Z",
                "content": "<ul><li>The Files by Google app on Android has an \"Important\" tab in India that holds critical documents, like government IDs. </li><li>The feature was introduced last year, but will be removed on Fe… [+2423 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "ReadWrite"
                },
                "author": "Maxwell William",
                "title": "Google Play Store to welcome more real-money gaming apps in 2024",
                "description": "Google is set to broaden the horizon for real-money gaming (RMG) apps on its Play Store, according to Tom’s Guide, […]\nThe post Google Play Store to welcome more real-money gaming apps in 2024 appeared first on ReadWrite.",
                "url": "https://readwrite.com/google-play-store-to-welcome-more-real-money-gaming-apps-in-2024/",
                "urlToImage": "https://readwrite.com/wp-content/uploads/2023/10/GoogleApple-Agreement.jpg",
                "publishedAt": "2024-01-16T14:34:49Z",
                "content": "Google is set to broaden the horizon for real-money gaming (RMG) apps on its Play Store, according to Tom’s Guide, marking a significant shift in its app policy. Starting June 2024, the tech giant pl… [+2028 chars]"
            },
            {
                "source": {
                    "id": "time",
                    "name": "Time"
                },
                "author": "Koh Ewe",
                "title": "How a Social Media Spat Spiraled Into an Indian Tourism Boycott of a Tropical Island Paradise",
                "description": "Indians are posting on social media about their canceled trips to the Maldives and urging travel to Lakshadweep, a nearby Indian archipelago, instead.",
                "url": "https://time.com/6554787/india-maldives-tourism-boycott-modi-israel-lakshadweep/",
                "urlToImage": "https://api.time.com/wp-content/uploads/2024/01/Maldives-India-Boycott.jpg?quality=85",
                "publishedAt": "2024-01-12T09:50:00Z",
                "content": "The tropical beaches of the tiny archipelagic Maldives may lose one of their biggest tourist groups amid a bizarre diplomatic spat. \r\nHeres everything to know about Indian tourists boycott of the Mal… [+4466 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gizmodo.com"
                },
                "author": "George Dvorsky",
                "title": "Fate of Japan’s ‘Lunar Sniper’ in Doubt After Precision Landing Attempt",
                "description": "Japan’s SLIM is on the Moon and is sending data to Earth, but the situation looks grim. Officials with Japanese space agency JAXA say the lander’s solar cells are not generating sufficient amounts of electricity, raising uncertainties about the mission’s futu…",
                "url": "https://gizmodo.com/jaxa-slim-lunar-lander-precision-power-problems-1851179852",
                "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/f0349531f251fc840f4407364cf6f57a.jpg",
                "publishedAt": "2024-01-19T17:41:00Z",
                "content": "Japans SLIM is on the Moon and is sending data to Earth, but the situation looks grim. Officials with Japanese space agency JAXA say the landers solar cells are not generating sufficient amounts of e… [+3580 chars]"
            },
            {
                "source": {
                    "id": "ars-technica",
                    "name": "Ars Technica"
                },
                "author": "Stephen Clark",
                "title": "Japan’s “Moon sniper” mission aims for precise lunar landing",
                "description": "SLIM will attempt to land on the Moon with a precision of less than 100 meters.",
                "url": "https://arstechnica.com/space/2024/01/japans-moon-sniper-mission-aims-for-precise-lunar-landing/",
                "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/01/019351184173f1bb7942fdca743a8fb0-760x380.jpg",
                "publishedAt": "2024-01-19T13:42:26Z",
                "content": "Enlarge/ This artist's illustration shows the SLIM spacecraft descending toward the Moon and ejecting two deployable robots onto the lunar surface.\r\n6\r\nIf everything goes according to plan Friday, Ja… [+3128 chars]"
            },
            {
                "source": {
                    "id": "wired",
                    "name": "Wired"
                },
                "author": "Matt Simon",
                "title": "Fiber Optics Bring You Internet. Now They’re Also Listening to Trains",
                "description": "“Distributed acoustic sensing” looks for disturbances in fiber to detect earthquakes and even insects. Can it also improve rail safety?",
                "url": "https://www.wired.com/story/fiber-optics-bring-you-internet-now-theyre-also-listening-to-trains/",
                "urlToImage": "https://media.wired.com/photos/65b7dd6bc532d99576c2e04a/191:100/w_1280,c_limit/Trains-fiberoptics-DAS-science-GettyImages-1481866234.jpg",
                "publishedAt": "2024-01-31T12:00:00Z",
                "content": "Stretching thousands upon thousands of miles under your feet, a web of fibrous ears is listening. Whether you walk over buried fiber optics or drive a car across them, above-ground activity creates a… [+5590 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Atlantic"
                },
                "author": "Vaibhav Vats",
                "title": "What Has Happened to the Rule of Law in India?",
                "description": "A once-feisty supreme court has gone supine under Narendra Modi.",
                "url": "https://www.theatlantic.com/international/archive/2024/02/what-has-happened-rule-law-india/677337/?utm_source=feed",
                "urlToImage": null,
                "publishedAt": "2024-02-03T12:00:00Z",
                "content": "On December 11, India’s supreme court upheld ending the constitutional privileges of the Indian-controlled province of Kashmir, a disputed region claimed by both India and Pakistan. The decision was … [+14129 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Vadodara boat accident: India schoolchildren were 'not given life jackets'",
                "description": "Parents of students who died after a boat capsized in India's Gujarat state allege negligence by authorities.",
                "url": "https://www.bbc.co.uk/news/world-asia-india-68027147",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D2CE/production/_132366935_aeebaa465bf2b9c154b1b898f22daac42a7252ce.jpg",
                "publishedAt": "2024-01-19T05:08:57Z",
                "content": "Parents of school students who were on the boat that capsized in a lake in India's Gujarat state have alleged that their children were \"not given life jackets\".\r\nAt least 12 pupils and two teachers d… [+3064 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Machete attacks leave children with 'war-zone' injuries, say Leeds trauma staff",
                "description": "On-shift with the Leeds hospital team caring for young knife crime patients in West Yorkshire.",
                "url": "https://www.bbc.co.uk/news/uk-england-leeds-67832694",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3333/production/_132270131_df786e57-5df2-4484-bfaf-6a262eb1d0ad.jpg",
                "publishedAt": "2024-01-16T03:46:12Z",
                "content": "Media caption, On-shift with the Leeds hospital team caring for young knife crime patients in West Yorkshire\r\nStaff at a West Yorkshire major trauma centre say they are concerned about the number of … [+6384 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Myanmar rebel group claims control of India border town",
                "description": "The Arakan Army says it has taken control of Paletwa, in Chin State, a key trading post with India.",
                "url": "https://www.bbc.co.uk/news/world-asia-67982635",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7BD7/production/_132330713_d2bbefc44c1d8b2955a7852d9e4b7eebb3a252b60_81_5276_29682000x1125.jpg",
                "publishedAt": "2024-01-15T16:45:02Z",
                "content": "Ethnic insurgents in western Myanmar say they have captured an important town on one of the main routes to India from military forces. \r\nThe Arakan Army (AA) - one of three armed groups that launched… [+2843 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": null,
                "title": "Maldives leader says his country's small size isn't a license to bully in apparent swipe at India",
                "description": null,
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_b9763933-e974-4ba6-b308-9928b157574b",
                "urlToImage": null,
                "publishedAt": "2024-01-13T18:54:23Z",
                "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "George Glover",
                "title": "Vladimir Putin's war with Ukraine is boosting Russia's economy, IMF says",
                "description": "The IMF now expects Russia's GDP to more than double to 2.6% this year and flagged \"high military spending\" as one factor driving the expansion.",
                "url": "https://www.businessinsider.com/russia-ukraine-war-vladimir-putin-imf-growth-military-spending-economy-2024-1",
                "urlToImage": "https://i.insider.com/65b8fbb9ac2de4f17ee5b6fb?width=1200&format=jpeg",
                "publishedAt": "2024-01-30T15:56:58Z",
                "content": "Russian President Vladimir Putin.Mikhail Klimentyev/Sputnik AFP\r\n<ul><li>The International Monetary Fund raised its 2024 forecast for Russia's economy.</li><li>It now expects the economy to expand by… [+1861 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "AppleInsider"
                },
                "author": "news@appleinsider.com (William Gallagher)",
                "title": "Apple opens new office in Bengaluru, India",
                "description": "Nine months after leasing an office block in the southern Indian state of Karnataka, Apple has now officially opened its 15-storey offices there.Apple's new office in Bengaluru (Source: Apple)Bengaluru is the capital of Karnataka, and Apple originally signed …",
                "url": "https://appleinsider.com/articles/24/01/17/apple-opens-new-office-in-bengaluru-india",
                "urlToImage": "https://photos5.appleinsider.com/gallery/58151-118498-000-lead-Bengaluru-office-xl.jpg",
                "publishedAt": "2024-01-17T12:00:47Z",
                "content": "Apple's new office in Bengaluru (Source: Apple)\r\nNine months after leasing an office block in the southern Indian state of Karnataka, Apple has now officially opened its 15-storey offices there.\r\nBen… [+1539 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Canada PM Justin Trudeau's official plane breaks down, again",
                "description": "The Canadian leader's travel travails continue, four months after he was left stranded in India.",
                "url": "https://www.bbc.co.uk/news/world-67902806",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/465C/production/_132221081_53d2a4b162592a4764018875a7ce865e4a70940c0_0_5000_33331000x667.jpg",
                "publishedAt": "2024-01-06T15:59:27Z",
                "content": "Canadian Prime Minister Justin Trudeau's aircraft has broken down during a trip to Jamaica, in his second travel incident in four months. \r\nThe Canadian Armed Forces said on Friday that they were for… [+1349 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Police"
                },
                "author": "Rajesh Pandey",
                "title": "The OnePlus Open finally gets stable Android 14, but there’s a catch",
                "description": "The build is only available in India for now",
                "url": "https://www.androidpolice.com/oneplus-open-finally-gets-stable-android-14-catch/",
                "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2023/10/oneplus-open-review-27.jpg",
                "publishedAt": "2024-01-31T13:25:05Z",
                "content": "Summary\r\n<ul><li> OnePlus Open impressed as a foldable, surpassing Samsung, but lagged in software updates. </li><li> OxygenOS 14 update for the Open is now rolling out, bringing new features and imp… [+3550 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The New Yorker"
                },
                "author": "Meera Subramanian",
                "title": "Consider the Vulture",
                "description": "Meera Subramanian writes about vultures in Nepal and India, and how they clean up nature’s messes and need saving.",
                "url": "https://www.newyorker.com/news/letter-from-nepal/consider-the-vulture",
                "urlToImage": "https://media.newyorker.com/photos/65b7e404d42c048f5ac336a1/16:9/w_1280,c_limit/Subramanian-Vultures-02.jpg",
                "publishedAt": "2024-01-31T11:00:00Z",
                "content": "Two days after Nepal released its last captive vultures, I was in Dubai airport when I received a WhatsApp message from the conservationists. At least ten vultures had been found dead not far from th… [+5897 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hipertextual"
                },
                "author": "Juan Carlos Figueroa",
                "title": "La Google Play Store permitirá más juegos con dinero real en México y otros países",
                "description": "Google está modificando sus políticas para ampliar el tipo y la cantidad de juegos con dinero real disponibles en su Play Store. Lo hará poco a poco: primero implementará el cambio en México, Brasil e India. Según la tecnológica, esto brindará nuevas oportuni…",
                "url": "http://hipertextual.com/2024/01/la-google-play-store-permitira-mas-juegos-con-dinero-real-en-mexico-y-otros-paises",
                "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/09/juegos-de-azar.jpg",
                "publishedAt": "2024-01-12T18:31:18Z",
                "content": "Google está modificando sus políticas para ampliar el tipo y la cantidad de juegos con dineroreal disponibles en su Play Store. Lo hará poco a poco: primero implementará el cambio en México, Brasil e… [+3529 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Boing Boing"
                },
                "author": "David Pescovitz",
                "title": "Dead man revived when ambulance hit a pothole",
                "description": "In Haryana, India, Darshan Singh Brar, age 80, was in the hospital on a ventilator for four days when physicians reported that his heart had stopped. Declared dead, Brar was put in an ambulance to be taken back to his home where mourners were waiting and he w…",
                "url": "https://boingboing.net/2024/01/15/dead-man-revived-when-ambulance-hit-a-pothole.html",
                "urlToImage": null,
                "publishedAt": "2024-01-15T19:09:12Z",
                "content": "In Haryana, India, Darshan Singh Brar, age 80, was in the hospital on a ventilator for four days when physicians reported that his heart had stopped. Declared dead, Brar was put in an ambulance to be… [+913 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Boing Boing"
                },
                "author": "David Pescovitz",
                "title": "Job to \"impregnate women\" was—surprise—an intricate scam",
                "description": "Get paid to meet women in hotel rooms and have sex to hopefully impregnate them with no further obligation? For some men in India, the ad on Facebook was too good to be true. Of course, it was. \nBihar police arrested eight suspects and are seeking 18 others f…",
                "url": "https://boingboing.net/2024/01/11/job-to-impregnate-women-was-surprise-an-intricate-scam.html",
                "urlToImage": "https://boingboing.net/wp-content/uploads/2024/01/132257059_whatsappimage2024-01-09at2.31.45pm.jpg.webp",
                "publishedAt": "2024-01-11T18:10:42Z",
                "content": "Get paid to meet women in hotel rooms and have sex to hopefully impregnate them with no further obligation? For some men in India, the ad on Facebook was too good to be true. Of course, it was. \r\nBih… [+1031 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hipertextual"
                },
                "author": "Rubén Chicharro",
                "title": "Nuevos Realme 12 Pro y 12 Pro+: cámaras del OnePlus 12 y un diseño atrevido para intentar ser una opción en la gama alta",
                "description": "Realme ha seguido los pasos de Samsung y OnePlus y no ha querido esperar mucho para presentar los que serán sus buques insignia para este 2024. La compañía ha presentado en la India los Realme 12 Pro y 12 Pro+, que llegan para renovar a los 11 Pro y 11 Pro+ c…",
                "url": "http://hipertextual.com/2024/01/nuevos-realme-12-pro-y-12-pro-camaras-del-oneplus-12-y-un-diseno-atrevido-para-intentar-ser-una-opcion-en-la-gama-alta",
                "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/01/realme-12-pro-002.jpg",
                "publishedAt": "2024-01-29T15:21:23Z",
                "content": "Realme ha seguido los pasos de Samsung y OnePlus y no ha querido esperar mucho para presentar los que serán sus buques insignia para este 2024. La compañía ha presentado en la India los Realme 12 Pro… [+3510 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hipertextual"
                },
                "author": "Rubén Chicharro",
                "title": "Renkube: paneles solares un 20 % más eficientes gracias a una tecnología clave",
                "description": "Renkube, una startup india de investigación y desarrollo de energía solar, y más concretamente en el seguimiento solar, ha dado con una forma de evitar uno de los mayores inconvenientes de las placas solares: el movimiento continúo del sol, que cambia el ángu…",
                "url": "http://hipertextual.com/2024/01/tecnologia-paneles-solares-20-porciento-mas-eficientes",
                "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2024/01/renkube-001.jpg",
                "publishedAt": "2024-01-08T11:20:29Z",
                "content": "Renkube, una startup india de investigación y desarrollo de energía solar, y más concretamente en el seguimiento solar, ha dado con una forma de evitar uno de los mayores inconvenientes de las placas… [+2709 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": null,
                "title": "See why this long-anticipated temple has divided India",
                "description": null,
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_7d22571c-2ccb-4e1d-aac7-9ebdbe27c1d0",
                "urlToImage": null,
                "publishedAt": "2024-01-22T17:58:04Z",
                "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Police"
                },
                "author": "Krystle Vermes",
                "title": "Google wants to see more gambling apps in the Play Store",
                "description": "India, Brazil, and Mexico are getting expanded support for 'real-money gaming,' with more territories to come",
                "url": "https://www.androidpolice.com/google-gambling-play-store-apps/",
                "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/02/google-play-store-hero-generic.jpg",
                "publishedAt": "2024-01-12T17:47:06Z",
                "content": "Summary\r\n<ul><li> Google is expanding support for real-money gambling apps in certain countries beginning June 2024, including India, Mexico, and Brazil, with further expansion planned for other coun… [+3144 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Yoonji Han",
                "title": "Netflix removed an Indian film after religious viewers criticized meat-eating characters",
                "description": "A right-wing Hindu group filed a complaint accusing the film of \"intentionally\" hurting \"Hindu sentiments.\"",
                "url": "https://www.businessinsider.com/netflix-pulls-indian-film-annapoorani-after-facing-religious-backlash-2024-1",
                "urlToImage": "https://i.insider.com/65a5765b6979d737182350b0?width=1200&format=jpeg",
                "publishedAt": "2024-01-15T18:58:48Z",
                "content": "Netflix took down the Indian film 'Annapoorani: the Goddess of Food' after backlash from a Hindu nationalist group.Zee Studios\r\n<ul><li>Netflix took down an Indian film after receiving backlash from … [+3424 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Xataka.com"
                },
                "author": "Javier Marquez",
                "title": "NVIDIA ya no puede vender sus GPU de vanguardia en China, pero acaba de conseguir otro cliente potencialmente enorme: India",
                "description": "Las principales potencias del planeta participan de una carrera para liderar el desarrollo de la inteligencia artificial. En este escenario tremendamente competitivo entran en juego las GPU de NVIDIA, un componente clave para dotar a los centros de datos de l…",
                "url": "https://www.xataka.com/empresas-y-economia/nvidia-no-puede-vender-sus-gpu-vanguardia-china-acaba-conseguir-otro-cliente-potencialmente-enorme-india",
                "urlToImage": "https://i.blogs.es/d680b6/nvidia/840_560.jpeg",
                "publishedAt": "2024-01-12T20:01:30Z",
                "content": "Las principales potencias del planeta participan de una carrera para liderar el desarrollo de la inteligencia artificial. En este escenario tremendamente competitivo entran en juego las GPU de NVIDIA… [+2916 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "AppleInsider"
                },
                "author": "news@appleinsider.com (Malcolm Owen)",
                "title": "Apple removes nine cryptocurrency apps from India App Store",
                "description": "Apple has removed a number of cryptocurrency apps from the regional App Store servicing India, weeks after a financial regulator declared they were operating illegally.Representations of cryptocurrenciesOn December 28, India's Financial Intelligence Unit decl…",
                "url": "https://appleinsider.com/articles/24/01/10/apple-removes-nine-cryptocurrency-apps-from-india-app-store",
                "urlToImage": "https://photos5.appleinsider.com/gallery/58048-118232-53864-108358-bitcoin-xl-xl.jpg",
                "publishedAt": "2024-01-10T13:00:59Z",
                "content": "Representations of cryptocurrencies\r\nApple has removed a number of cryptocurrency apps from the regional App Store servicing India, weeks after a financial regulator declared they were operating ille… [+1194 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "AppleInsider"
                },
                "author": "news@appleinsider.com (Malcolm Owen)",
                "title": "Google follows Apple in pulling crypto apps in India",
                "description": "Google has followed after Apple in removing a number of major crypto exchange apps from the Google Play Store in India, after regulators deemed them as operating illegally in the country.Representations of cryptocurrenciesOn January 10, after India's Financia…",
                "url": "https://appleinsider.com/articles/24/01/15/google-follows-apple-in-pulling-crypto-apps-in-india",
                "urlToImage": "https://photos5.appleinsider.com/gallery/58105-118400-58048-118232-53864-108358-bitcoin-xl-xl-xl.jpg",
                "publishedAt": "2024-01-15T12:31:32Z",
                "content": "Representations of cryptocurrencies\r\nGoogle has followed after Apple in removing a number of major crypto exchange apps from the Google Play Store in India, after regulators deemed them as operating … [+1249 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "AppleInsider"
                },
                "author": "news@appleinsider.com (William Gallagher)",
                "title": "Apple hits India sales record as country cuts import duty",
                "description": "India has reduced its import duty on selected smartphone components, while new research says in 2023, Apple sold more iPhone in the country than ever.Mumbai, IndiaIndia has become of increasing importance to Apple as it aims to cut its dependence on China for…",
                "url": "https://appleinsider.com/articles/24/01/31/apple-hits-india-sales-record-as-country-cuts-import-duty",
                "urlToImage": "https://photos5.appleinsider.com/gallery/54637-110448-51897-102940-50774-100235-50489-99331-18914-18533-india-mumbai-xl-xl-xl-xl-xl.jpg",
                "publishedAt": "2024-01-31T12:58:15Z",
                "content": "Mumbai, India\r\nIndia has reduced its import duty on selected smartphone components, while new research says in 2023, Apple sold more iPhone in the country than ever.\r\nIndia has become of increasing i… [+1713 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "AppleInsider"
                },
                "author": "news@appleinsider.com (William Gallagher)",
                "title": "India may make it cheaper to produce iPhones",
                "description": "The Indian government is reportedly considering import duty costs on key smartphone components, including those for the iPhone.Mumbai, IndiaDespite previously introducing new import fees for assembled devices such as laptops — and then backing down again — In…",
                "url": "https://appleinsider.com/articles/24/01/11/india-may-make-it-cheaper-to-produce-iphones",
                "urlToImage": "https://photos5.appleinsider.com/gallery/54637-110448-51897-102940-50774-100235-50489-99331-18914-18533-india-mumbai-xl-xl-xl-xl-xl.jpg",
                "publishedAt": "2024-01-11T14:49:43Z",
                "content": "Mumbai, India\r\nThe Indian government is reportedly considering import duty costs on key smartphone components, including those for the iPhone.\r\nDespite previously introducing new import fees for asse… [+807 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "MarketWatch"
                },
                "author": "Christine Idzelis, Tomi Kilgore",
                "title": "India is winning over investors as Chinese stocks struggle, these charts show",
                "description": "India is capturing investors’ attention, as exchange-traded funds targeting stocks in the emerging market extend their climb in 2024.",
                "url": "https://www.marketwatch.com/story/india-is-winning-over-investors-as-chinese-stocks-struggle-these-charts-show-b2ad213f",
                "urlToImage": "https://images.mktw.net/im-94422071/social",
                "publishedAt": "2024-02-01T16:04:00Z",
                "content": "India is capturing investors attention, as exchange-traded funds targeting stocks in the emerging market extend their climb in 2024.The countrys economy, which stands to benefit from a changing globa… [+5289 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Gizmodo.com"
                },
                "author": "George Dvorsky",
                "title": "A First-of-Its-Kind 'Pinpoint' Moon Landing Could Happen This Week",
                "description": "We’re still reeling from last week’s Astrobotic failure, in which a catastrophic propellant leak rendered the Peregrine lunar lander incapable of completing its Moon landing mission. It’s not the outcome we were hoping for, but the global space community does…",
                "url": "https://gizmodo.com/japan-slim-pinpoint-precision-moon-landing-jaxa-1851172424",
                "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/dcac6a41680df77593e924fbc64e20e6.jpg",
                "publishedAt": "2024-01-17T18:26:00Z",
                "content": "Were still reeling from last weeks Astrobotic failure, in which a catastrophic propellant leak rendered the Peregrine lunar lander incapable of completing its Moon landing mission. Its not the outcom… [+4910 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Xataka.com"
                },
                "author": "Javier Marquez",
                "title": "La policía de India detuvo durante ocho meses a una paloma acusada de espiar para China. Era inocente y ha sido liberada",
                "description": "No es ningún secreto que algunos países tienen redes de inteligencia y espionaje repartidas por el mundo. Esta suele funcionar con personas que se hacen pasar por diplomáticos, agentes encubiertos que aparentan llevar una vida normal y elementos de comunicaci…",
                "url": "https://www.xataka.com/magnet/policia-india-detuvo-durante-ocho-meses-a-paloma-acusada-espiar-para-china-era-inocente-ha-sido-liberada",
                "urlToImage": "https://i.blogs.es/3db530/policia-india-detiene-paloma-portada/840_560.jpeg",
                "publishedAt": "2024-02-02T20:01:27Z",
                "content": "No es ningún secreto que algunos países tienen redes de inteligencia y espionaje repartidas por el mundo. Esta suele funcionar con personas que se hacen pasar por diplomáticos, agentes encubiertos qu… [+2925 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "MarketWatch"
                },
                "author": "Tomi Kilgore",
                "title": "Wipro’s stock having best day in 16 years amid signs IT consulting has bottomed",
                "description": "Fellow India-based IT consultant Infosys’ stock surges again, after breaking a string of disappointing earnings reports.",
                "url": "https://www.marketwatch.com/story/wipros-stock-having-best-day-in-16-years-amid-signs-it-consulting-has-bottomed-590e1643",
                "urlToImage": "https://images.mktw.net/im-09168121/social",
                "publishedAt": "2024-01-12T18:12:00Z",
                "content": "Shares of Wipro Ltd. rocketed Friday, after the India-based information-technology consultant beat fiscal third-quarter profit expectations, to snap a streak of earning misses amid a jump in large de… [+2343 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Atlantic"
                },
                "author": "Alan Taylor",
                "title": "Photos of the Week: Wrapped Shuttle, Pearl Farm, Masquerade Games",
                "description": "The world’s largest cruise ship sets sail in Miami, dolphins fleeing orcas near San Diego, widespread farmer protests in Europe, a Republic Day parade in India, and much more",
                "url": "https://www.theatlantic.com/photo/2024/02/photos-of-the-week-wrapped-shuttle-pearl-farm-masquerade-games/677323/?utm_source=feed",
                "urlToImage": null,
                "publishedAt": "2024-02-02T05:30:00Z",
                "content": "The world’s largest cruise ship sets sail in Miami, scenes from the Australian Open in Melbourne, dolphins fleeing orcas near San Diego, widespread farmer protests in Europe, a Republic Day parade in… [+91 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NPR"
                },
                "author": "Omkar Khandekar",
                "title": "India's Modi to inaugurate Hindu temple in Ayodhya, where rioters destroyed a mosque",
                "description": "Prime Minister Narendra Modi will help consecrate the unfinished temple on Monday, on the site of a 16th century mosque destroyed in 1992. Critics say the rushed ceremony is a political stunt.",
                "url": "https://www.npr.org/2024/01/21/1225395353/india-ayodhya-temple-modi-hinduism",
                "urlToImage": "https://media.npr.org/assets/img/2024/01/19/_mg_8666_wide-22f1da2f08a00d57a4a81c29303f602c821126c9-s1400-c100.jpg",
                "publishedAt": "2024-01-21T10:01:23Z",
                "content": "Building cranes tower over a new Hindu temple that will be consecrated with Indian Prime Minister Narendra Modi in attendance on Monday.\r\nDiaa Hadid/NPR\r\nAYODHYA, India More than 30 years ago, rioter… [+8808 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Lauren Crosby Medlicott",
                "title": "I invested enough money to retire at 29. I don't ever need to worry about earning a salary again.",
                "description": "Daniel George was a VP at JP Morgan and before that worked at Google X. He saved enough money to retire before 30, but started his company instead.",
                "url": "https://www.businessinsider.com/retire-early-vp-jp-morgan-invest-tax-advantaged-accounts-2024-1",
                "urlToImage": "https://i.insider.com/659fd32b6979d73718225a7a?width=1200&format=jpeg",
                "publishedAt": "2024-01-12T10:12:53Z",
                "content": "Daniel George traveling in Iceland.Courtesy of Daniel George\r\n<ul><li>Daniel George got a job at Google X with a six-figure salary after finishing his doctoral studies.</li><li>He put most of his inc… [+7340 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "techkritiko@gmail.com (Jay Bonggolto)",
                "title": "HMD Global's upcoming smartphone might ditch the Nokia branding",
                "description": "HMD could be breaking free from the Nokia nest and spreading its wings (with a new phone).",
                "url": "https://www.androidcentral.com/phones/leak-reveals-first-hmd-branded-phone",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/xqrgyUcGABrtMkJk3XnVGC-1200-80.jpg",
                "publishedAt": "2024-01-23T03:19:56Z",
                "content": "<ul><li>HMD Global, the company behind Nokia, could debut its first-ever self-branded smartphone this year.</li><li>A sneak peek of the upcoming HMD smartphone has surfaced through leaked renders.</l… [+2006 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "tips@androidcentral.com (Nickolas Diaz)",
                "title": "OnePlus 12's first update lets you use $5,000 monitor tech on a $500 phone",
                "description": "The OnePlus 12 series has started receiving its first update following a global launch.",
                "url": "https://www.androidcentral.com/phones/oneplus-12-12r-update-post-launch-rollout",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/KCXKmnbSadY63HHWnjDZ6f-1200-80.jpg",
                "publishedAt": "2024-02-01T19:24:18Z",
                "content": "<ul><li>The OnePlus 12 and 12R are receiving their first update following a global launch, bringing ProXDR to Google Photos.</li><li>The update also unlocks \"Master\" mode for the camera app, giving u… [+2377 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "tips@androidcentral.com (Nickolas Diaz)",
                "title": "OnePlus 12 might get expensive while a 12R leak suggests a cheaper device",
                "description": "A batch of rumors suggested that OnePlus could raise the price of its flagship 12 model while launching a cheaper 12R device.",
                "url": "https://www.androidcentral.com/phones/oneplus-12-12r-pricing-rumors",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/Sr5vuCqqHPeBX34em9vMGh-1200-80.jpg",
                "publishedAt": "2024-01-08T19:41:16Z",
                "content": "<ul><li>A pricing rumor claims the OnePlus 12 could see an increase with its base iteration arriving at $799 and its larger storage variant at $899.</li><li>The OnePlus 12R could become a mid-range c… [+2303 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Boing Boing"
                },
                "author": "Jason Weisberger",
                "title": "A hospital's false death announcement leads to a wife's suicide, husband is later found alive",
                "description": "A private medical college in Bhubaneswar, India, had an AC unit explode. The hospital mistakenly identified Dilip Samantray as killed in the blast, and his family was notified. Struck with grief, his wife commit suicide. Shortly thereafter, it was discovered …",
                "url": "https://boingboing.net/2024/01/06/a-hospitals-false-death-announcement-leads-to-the-wifes-suicide-husband-is-later-found-alive.html",
                "urlToImage": "https://boingboing.net/wp-content/uploads/2023/06/hospital-shutterstock_1123546664.jpg",
                "publishedAt": "2024-01-06T16:32:18Z",
                "content": "A private medical college in Bhubaneswar, India, had an AC unit explode. The hospital mistakenly identified Dilip Samantray as killed in the blast, and his family was notified. Struck with grief, his… [+1339 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yanko Design"
                },
                "author": "Srishti Mitra",
                "title": "This Resto-Bar Nestled On A Cliff’s Edge In Goa, India Has Two Massive Nests Perched On Top Of It",
                "description": "This Resto-Bar Nestled On A Cliff’s Edge In Goa, India Has Two Massive Nests Perched On Top Of ItI’ve spent much time in the beautiful beach town of Goa, India, which truly has a special place in my heart. Coconut trees, salty air,...",
                "url": "https://www.yankodesign.com/2024/02/01/this-resto-bar-nestled-on-a-cliffs-edge-in-goa-india-has-two-massive-nests-perched-on-top-of-it/",
                "urlToImage": "https://www.yankodesign.com/images/design_news/2024/01/como-agua-draft/como_agua_yanko_design_01.jpg",
                "publishedAt": "2024-02-01T23:30:14Z",
                "content": "I’ve spent much time in the beautiful beach town of Goa, India, which truly has a special place in my heart. Coconut trees, salty air, restless waves, and red sandy paths adorn the region. The archit… [+2184 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "ReadWrite"
                },
                "author": "Deanna Ritchie",
                "title": "Apple suppliers are moving from China to the tune of $16 billion so far",
                "description": "Caught off guard in the crossfire of the US-China trade wars in October, Apple has begun moving its operations to […]\nThe post Apple suppliers are moving from China to the tune of $16 billion so far appeared first on ReadWrite.",
                "url": "https://readwrite.com/apple-suppliers-are-moving-from-china-to-the-tune-of-16-billion-so-far/",
                "urlToImage": "https://readwrite.com/wp-content/uploads/2024/01/Apple-moving-from-China.jpg",
                "publishedAt": "2024-01-04T20:13:04Z",
                "content": "Caught off guard in the crossfire of the US-China trade wars in October, Apple has begun moving its operations to the tune of $16 billion so far. A high demand to assemble the iPhone and iPad took Ap… [+1685 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Police"
                },
                "author": "Rajesh Pandey",
                "title": "One of Google Pixel’s best features could expand to more countries",
                "description": "Pixel Call Screen could expand to more regions and languages soon",
                "url": "https://www.androidpolice.com/google-pixels-best-features-could-expand-more-countries/",
                "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/wm/2023/10/google-pixel-8-vs-google-pixel-6-1.jpg",
                "publishedAt": "2024-01-08T10:37:33Z",
                "content": "Summary\r\n<ul><li> Google Pixel phones have a useful Call Screening feature that automatically filters incoming calls and saves time. </li><li> A Reddit user in India successfully enabled Call Screeni… [+3074 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Googleblog.com"
                },
                "author": "Android Developers",
                "title": "A New Approach to Real-Money Games on Google Play",
                "description": "Based on the learnings from the pilots and positive feedback from users and developers, Google Play will begin supporting more RMG apps this year.",
                "url": "https://android-developers.googleblog.com/2024/01/a-new-approach-to-real-money-games-on-google-play.html",
                "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLf1-r4ZnSclRc-JuUie1CBHw6giBnM4TIfh4mT5KsnIOvDEAI1ILqydxgNszVn3RDQn8VlrLyp1lfvAVhvURhu0pOi7g0kf9ifI9t41JJpMWZVu47bSIVWf1JWPWXPJ-6GuRfOJN8iOsyYZvsBWYAwFROUtNkaXpW95W55OLpCdWzU78qo1xABl3hD18/s1600/Social-Play-Announcement-General%20%282%29.png",
                "publishedAt": "2024-01-12T01:00:00Z",
                "content": "Posted by Karan Gambhir – Director, Global Trust and Safety Partnerships\n\n\n\n\nAs a platform, we strive to help developers responsibly build new businesses and reach wider audiences across a variety of… [+3317 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Xataka.com"
                },
                "author": "Matías S. Zavia",
                "title": "Un satélite de la NASA disparó rayos láser a una nave india en la Luna. Para ello, usó un dispositivo llamado LOLA",
                "description": "La NASA y su homóloga india han estado jugando al ping-pong con láser en la Luna. En diciembre, la sonda Lunar Reconnaissance Orbiter de la NASA apuntó con su instrumento LOLA al módulo lunar Vikram de ISRO, famoso por haber sido el primero en aterrizar cerca…",
                "url": "https://www.xataka.com/espacio/satelite-nasa-disparo-rayos-laser-a-nave-india-luna-para-ello-uso-dispositivo-llamado-lola",
                "urlToImage": "https://i.blogs.es/1704ad/nasa-dispara/840_560.jpeg",
                "publishedAt": "2024-01-23T21:13:14Z",
                "content": "La NASA y su homóloga india han estado jugando al ping-pong con láser en la Luna. En diciembre, la sonda Lunar Reconnaissance Orbiter de la NASA apuntó con su instrumento LOLA al módulo lunar Vikram … [+2249 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": null,
                "title": "Modi's party set to bring contentious common civil laws in India through states",
                "description": null,
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_d900c7a1-51e7-4ed8-a7a3-49e713eff051",
                "urlToImage": null,
                "publishedAt": "2024-01-31T07:33:22Z",
                "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Boing Boing"
                },
                "author": "Rob Beschizza",
                "title": "Orders soar at Airbus, which makes jets where the side doesn't fall off",
                "description": "With post-pandemic demand for new jets growing and the competition in bad shape, Airbus is picking up the slack. The Wall Street Journal reports that the European plane maker is shattering records for orders. It can't keep up with demand and is sold out for a…",
                "url": "https://boingboing.net/2024/01/12/orders-soar-at-airbus-which-makes-jets-where-the-side-doesnt-fall-off.html",
                "urlToImage": "https://boingboing.net/wp-content/uploads/2022/02/delta.jpg",
                "publishedAt": "2024-01-12T15:42:00Z",
                "content": "With post-pandemic demand for new jets growing and the competition in bad shape, Airbus is picking up the slack. The Wall Street Journal reports that the European plane maker is shattering records fo… [+1581 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Jessica Orwig",
                "title": "Japan has landed a spacecraft on the moon for the first time, but the mission didn't go exactly according to plan",
                "description": "Japan successfully landed its SLIM spacecraft on the moon but the spacecraft is not generating solar power.",
                "url": "https://www.businessinsider.com/japan-successful-first-moon-landing-slim-spacecraft-mission-2024-1",
                "urlToImage": "https://i.insider.com/658c7a93ab6f2ebb11f72dea?width=1200&format=jpeg",
                "publishedAt": "2024-01-19T19:44:55Z",
                "content": "An illustration of JAXA's SLIM spacecraft on the moon.JAXA\r\n<ul><li>Japan successfully landed a spacecraft on the moon for the first time in the nation's history.</li><li>But the spacecraft isn't gen… [+2394 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Windows Central"
                },
                "author": "rebecca.spear@futurenet.com (Rebecca Spear)",
                "title": "Asus ROG Ally 2 FAQ: Everything we know and improvements we want in the next-gen gaming handheld",
                "description": "Asus India Vice President mentioned that a \"second generation\" ROG Ally will likely launch in 2024. Here's what to expect from the newer gaming handheld.",
                "url": "https://www.windowscentral.com/gaming/rog-ally-2-faq",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/95Z7cjKTpbLwYLziJhSByW-1200-80.jpg",
                "publishedAt": "2024-01-28T21:33:34Z",
                "content": "The ROG Ally has been out for less than a year, but that hasn't stopped Asus from planning its successor. There is some definite evidence that the ROG Ally 2 could be coming in 2024. This isn't surpr… [+5718 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Dezeen"
                },
                "author": "Saudatu Bah",
                "title": "Seven harmonious temples from Dezeen's Pinterest",
                "description": "Over the recent holiday season, many people visited temples to reflect on the passing year. We've rounded up seven projects from our popular temple board on Pinterest. Around the world, temples are a sacred place for worship, quiet contemplation and celebrati…",
                "url": "https://www.dezeen.com/2024/01/08/temples-dezeen-pinterest/",
                "urlToImage": "https://static.dezeen.com/uploads/2023/12/india-balaji-temple-of-steps-sameep-padora-nandyal-andhra-pradesh_dezeen_2364_hero_2.jpg",
                "publishedAt": "2024-01-08T10:00:04Z",
                "content": "Over the recent holiday season, many people visited temples to reflect on the passing year. We've rounded up seven projects from our popular temple board on Pinterest.\r\nAround the world, temples are … [+3546 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Ayodhya: Temple to open at India’s religious fault-line",
                "description": "The new temple in Ayodhya has stirred up memories for the community caught up in 1992's violence.",
                "url": "https://www.bbc.co.uk/news/world-asia-india-68030712",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16694/production/_132369719_95dead0d-67a3-482c-955e-86c60ca3f695.jpg",
                "publishedAt": "2024-01-21T01:50:07Z",
                "content": "Santosh Dubey says he has no regrets he helped tear down the mosque.\r\n\"It was religious work and I was put on this Earth to complete the task,\" he says. \"There is no crime or sin in it.\"\r\nMr Dubey, a… [+12026 chars]"
            },
            {
                "source": {
                    "id": "time",
                    "name": "Time"
                },
                "author": "MARI YAMAGUCHI / AP",
                "title": "Japan Becomes 5th Country to Reach the Moon",
                "description": "The Smart Lander for Investigating Moon, or SLIM, landed at about 12:20 a.m. Tokyo time on Saturday.",
                "url": "https://time.com/6564540/japan-moon-landing/",
                "urlToImage": "https://api.time.com/wp-content/uploads/2024/01/Moon-launch.jpg?quality=85",
                "publishedAt": "2024-01-19T18:01:01Z",
                "content": "TOKYO Japan became the fifth country in history to reach the moon when its spacecraft landed on the lunar surface early Saturday, officials said.\r\nBut officials still were trying to determine whether… [+1046 chars]"
            },
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Sachin Tendulkar: Indian cricket legend warns of 'disturbing' deepfake video",
                "description": "The fake video appears to show Sachin Tendulkar promoting an online gaming app.",
                "url": "https://www.bbc.co.uk/news/world-asia-india-67989930",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/184F5/production/_132337599_gettyimages-1161147027.jpg",
                "publishedAt": "2024-01-16T09:36:23Z",
                "content": "Indian cricket legend Sachin Tendulkar has criticised a deepfake video in which he seems to be promoting an online gaming app.\r\nThe video shows him praising the app as a quick way to make money.\r\n\"Th… [+2052 chars]"
            },
            {
                "source": {
                    "id": "time",
                    "name": "Time"
                },
                "author": "SIBI ARASU / AP",
                "title": "Global Renewable Energy Growth Hits 25-Year High",
                "description": "IEA executive director Fatih Birol said renewables likely to increase by 2.5 times by 2030—but that's still not enough to hit climate goals.",
                "url": "https://time.com/6554327/global-renewable-energy-growth-record-high-iea/",
                "urlToImage": "https://api.time.com/wp-content/uploads/2024/01/renewable-energy-global-growth-iea-report-2023.jpg?quality=85",
                "publishedAt": "2024-01-11T14:45:41Z",
                "content": "(BENGALURU, India) The world's renewable energy grew at its fastest rate in the past 25 years in 2023, the International Energy Agency reported Thursday in its first assessment since nations agreed i… [+3359 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "ReadWrite"
                },
                "author": "Graeme Hanna",
                "title": "China’s military and government acquire Nvidia chips despite US ban",
                "description": "Chinese military bodies and state-affiliated groups have acquired Nvidia chips despite a US ban on the export of the commodity […]\nThe post China’s military and government acquire Nvidia chips despite US ban appeared first on ReadWrite.",
                "url": "https://readwrite.com/chinas-military-and-government-acquire-nvidia-chips-despite-us-ban/",
                "urlToImage": "https://readwrite.com/wp-content/uploads/2024/01/China-military-acquire-Nvidia-chips.jpg",
                "publishedAt": "2024-01-15T18:32:54Z",
                "content": "Chinese military bodies and state-affiliated groups have acquired Nvidia chips despite a US ban on the export of the commodity to China.\r\nAs reported by Reuters, small batches of the semiconductors h… [+2119 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "ReadWrite"
                },
                "author": "Deanna Ritchie",
                "title": "The e-waste “gold mining” efforts are booming",
                "description": "The components of your antiquated desktop computer, laptop, TV, and other electronics include valuable metals like copper and gold. Tiny […]\nThe post The e-waste “gold mining” efforts are booming appeared first on ReadWrite.",
                "url": "https://readwrite.com/the-e-waste-gold-mining-efforts-are-booming/",
                "urlToImage": "https://readwrite.com/wp-content/uploads/2024/01/E-waste-gold-mining.png",
                "publishedAt": "2024-01-31T22:04:08Z",
                "content": "The components of your antiquated desktop computer, laptop, TV, and other electronics include valuable metals like copper and gold. Tiny businesses are profiting from the e-waste industry’s unrealize… [+2669 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "ReadWrite"
                },
                "author": "Ali Rees",
                "title": "US state legislators race to enact AI laws before 2024 primaries",
                "description": "US primary elections begin next week, and state legislatures are scrambling to enact laws that will prevent, or at least […]\nThe post US state legislators race to enact AI laws before 2024 primaries appeared first on ReadWrite.",
                "url": "https://readwrite.com/states-scramble-to-legislate-against-ai-before-the-primaries/",
                "urlToImage": "https://readwrite.com/wp-content/uploads/2024/01/pexels-andrew-patrick-14380163-scaled.jpg",
                "publishedAt": "2024-01-12T10:49:52Z",
                "content": "US primary elections begin next week, and state legislatures are scrambling to enact laws that will prevent, or at least limit, the impact of artificial intelligence (AI) and AI-generated deepfakes, … [+2018 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "ReadWrite"
                },
                "author": "Suswati Basu",
                "title": "Around 45k Jenkins servers still vulnerable to attacks due to critical flaw",
                "description": "Tens of thousands of Jenkins servers have been exposed to a high-severity bug after a patch update. This flaw enables […]\nThe post Around 45k Jenkins servers still vulnerable to attacks due to critical flaw appeared first on ReadWrite.",
                "url": "https://readwrite.com/around-45k-jenkins-servers-still-vulnerable-to-attacks-due-to-critical-flaw/",
                "urlToImage": "https://readwrite.com/wp-content/uploads/2024/01/Around-45k-Jenkins-servers-still-vulnerable-to-attacks-due-to-critical-flaw-900x600.png",
                "publishedAt": "2024-01-31T17:19:46Z",
                "content": "Tens of thousands of Jenkins servers have been exposed to a high-severity bug after a patch update. This flaw enables malicious actors to execute harmful code remotely on affected systems. Around 45,… [+2634 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Microsiervos.com"
                },
                "author": "wicho@microsiervos.com (Wicho)",
                "title": "El observatorio solar Aditya-L1 de la India llega su órbita de destino",
                "description": "Impresión muy artística de Aditya-L1 en órbita alrededor del punto de Lagrange L1 - ISRO\n\nLos Reyes Magos le han traído un magnífico regalo a la Agencia India de Investigación Espacial (ISRO) con la correcta inserción del observatorio solar Aditya-L1 en su ór…",
                "url": "https://www.microsiervos.com/archivo/ciencia/observatorio-solar-aditya-india-en-orbita-destino.html",
                "urlToImage": "https://img.microsiervos.com/images2024/AdityaL1enL1.webp",
                "publishedAt": "2024-01-07T19:00:00Z",
                "content": "Impresión muy artística de Aditya-L1 en órbita alrededor del punto de Lagrange L1 - ISRO\r\nLos Reyes Magos le han traído un magnífico regalo a la Agencia India de Investigación Espacial (ISRO) con la … [+1844 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Polly Thompson,Matt Weinberger",
                "title": "Satya Nadella's life and career, from computer-science student to CEO of Microsoft and turning it into a $3 trillion titan",
                "description": "Satya Nadella has been running Microsoft for a decade. Here's how the company became a $3 trillion titan under his leadership.",
                "url": "https://www.businessinsider.com/satya-nadella-life-career-microsoft-ceo-computer-science-2024-1",
                "urlToImage": "https://i.insider.com/65b3711df4b446f3be9d2c96?width=1200&format=jpeg",
                "publishedAt": "2024-01-28T09:50:01Z",
                "content": "Satya Nadella is CEO of Microsoft.Ethan Miller/Getty Images\r\n<ul>\n<li>Satya Nadella became only the third CEO of Microsoft almost a decade ago. </li>\n<li>The former engineer reformed its corporate cu… [+13670 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "bradypsnyder@gmail.com (Brady Snyder)",
                "title": "Google's experimental Project IDX now offers iOS and Android simulators for web",
                "description": "Google has updated its experimental Project IDX web-based software development platform to include iOS and Android simulators.",
                "url": "https://www.androidcentral.com/apps-software/google-project-idx-ios-android-simulator",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/FSGiuS66p7RqmQ6qq6pxNR-1200-80.jpg",
                "publishedAt": "2024-01-26T07:21:25Z",
                "content": "<ul><li>Project IDX is an experimental cloud-based workspace for software development offered by Google in a limited preview.</li><li>Google is now bringing an iOS and Android simulator to Project ID… [+2791 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Android Central"
                },
                "author": "techkritiko@gmail.com (Jay Bonggolto)",
                "title": "Forget flagships, the OnePlus Ace 3 rocks solid specs for less",
                "description": "The OnePlus Ace 3 seems like a really cool phone in the upper mid-range category.",
                "url": "https://www.androidcentral.com/phones/oneplus-ace-3-unveiled-in-china",
                "urlToImage": "https://cdn.mos.cms.futurecdn.net/JXENFThiU2oW6pNfexBUSe-1200-80.jpg",
                "publishedAt": "2024-01-07T10:20:03Z",
                "content": "<ul><li>The OnePlus Ace 3 is the first OnePlus device of 2024, succeeding the Ace 2 and boasting significant spec upgrades with up to 1TB of storage.</li><li>Powered by Qualcomm's Snapdragon 8 Gen 2 … [+2768 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
                },
                "author": null,
                "title": "India court restores life prison sentences for 11 Hindu men who raped a Muslim woman in 2002 riots",
                "description": null,
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_d526967d-f4ca-460a-b9ce-dc0f96eb0338",
                "urlToImage": null,
                "publishedAt": "2024-01-08T07:03:49Z",
                "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 243 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Theregister.com"
                },
                "author": "Laura Dobberstein",
                "title": "Foxconn’s latest Indian foray is a chip packaging JV with HCL Group",
                "description": "Fending off ransomware at home in Taiwan as it continues diversification into semiconductors\nTaiwan’s contract manufacturer to the stars, Foxconn aka Hon Hai Technology Group , has teamed with India’s HCL Group to create a semiconductor assembly and testing f…",
                "url": "https://www.theregister.com/2024/01/19/foxconn_hcl_india_osat/",
                "urlToImage": "https://regmedia.co.uk/2022/11/23/shutterstock_foxconn.jpg",
                "publishedAt": "2024-01-19T05:45:09Z",
                "content": "Taiwans contract manufacturer to the stars, Foxconn aka Hon Hai Technology Group , has teamed with Indias HCL Group to create a semiconductor assembly and testing facility in India.\r\nFoxconn looks fo… [+1740 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Grace Dean",
                "title": "5 expats who relocated to Iceland break down the biggest challenges they faced after moving",
                "description": "In the summer, when Iceland has near-constant daylight, \"it's hard to remember to eat dinner and it feels like the middle of the day even at 9 p.m.,\" one expat said.",
                "url": "https://www.businessinsider.com/iceland-expats-relocation-reykjavik-biggest-challenges-europe-daylight-groceries-transport-2024-1",
                "urlToImage": "https://i.insider.com/65b91a3c43bb77284ba1ae78?width=1200&format=jpeg",
                "publishedAt": "2024-02-04T09:31:02Z",
                "content": "Expats say that Iceland is flooded with tourists in the summer, and that it's hard to find good avocadoes.Jorge Castellanos/SOPA Images/LightRocket via Getty Images; Valiantsin Suprunovich/Getty Imag… [+6619 chars]"
            },
            {
                "source": {
                    "id": "buzzfeed",
                    "name": "Buzzfeed"
                },
                "author": "Audrey Engvalson",
                "title": "18 Five-Ingredient-Or-Less Dinner Recipes I Can't Wait To Try Because I'm Lazy",
                "description": "I can't handle six ingredients.View Entire Post ›",
                "url": "https://www.buzzfeed.com/audreyworboys/five-ingredient-dinners",
                "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2024-01/11/18/enhanced/7c31210a4f29/original-2299-1704996868-15.jpg?crop=1250:655;0,28%26downsize=1250:*",
                "publishedAt": "2024-01-13T19:15:02Z",
                "content": "\"2 cups chopped rotisserie chicken\r\n2 cups chopped fresh baby spinach\r\n1 jar (15 oz) Alfredo sauce\r\n2 cups shredded mozzarella\r\n1 can Pillsbury Grands buttermilk biscuits\r\nHeat oven to 350°F. Spray 1… [+400 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Xataka.com"
                },
                "author": "Pablo Martínez-Juarez",
                "title": "Una epidemia silenciosa está matando cada vez a más seres humanos en todo el planeta: las infecciones por hongos",
                "description": "Virus y bacterias tienden a acaparar todo el protagonismo cuando hablamos de enfermedades contagiosas (y de alguna que otra que solemos considerar como no transmisible). Sin embargo, en un mundo de pandemias víricas y superbacterias, lo hongos también están c…",
                "url": "https://www.xataka.com/medicina-y-salud/epidemia-silenciosa-esta-matando-cada-vez-a-seres-humanos-todo-planeta-infecciones-hongos",
                "urlToImage": "https://i.blogs.es/688b75/corte-infecciones-hongos/840_560.jpeg",
                "publishedAt": "2024-01-17T16:30:36Z",
                "content": "Virus y bacterias tienden a acaparar todo el protagonismo cuando hablamos de enfermedades contagiosas (y de alguna que otra que solemos considerar como no transmisible). Sin embargo, en un mundo de p… [+3893 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Xataka.com"
                },
                "author": "Matías S. Zavia",
                "title": "Japón llegó por primera vez a la Luna e inmediatamente perdió a su nave. Este es su plan para recuperarla",
                "description": "Japón se convirtió el viernes en el quinto país en aterrizar en la Luna, por detrás de la Unión Soviética, Estados Unidos, China y la India. Fue el alunizaje más preciso de la historia: la nave japonesa SLIM logró su objetivo de posarse en un punto concreto d…",
                "url": "https://www.xataka.com/espacio/japon-llego-primera-vez-a-luna-e-inmediatamente-perdio-a-su-nave-este-su-plan-para-recuperarla",
                "urlToImage": "https://i.blogs.es/7dc634/japon/840_560.jpeg",
                "publishedAt": "2024-01-22T17:01:14Z",
                "content": "Japón se convirtió el viernes en el quinto país en aterrizar en la Luna, por detrás de la Unión Soviética, Estados Unidos, China y la India. Fue el alunizaje más preciso de la historia: la nave japon… [+2773 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Xataka.com"
                },
                "author": "Juan Carlos López",
                "title": "Estos son los tres países y las cinco empresas que lideran la investigación en ordenadores cuánticos. Hay sorpresas",
                "description": "\"El desarrollo de la computación cuántica puede representar una ventaja estratégica para una economía. Tener ordenadores cuánticos, ser el poseedor de esa tecnología y que los demás dependan de ti es un poco lo que ocurría hace muchos años con la computación …",
                "url": "https://www.xataka.com/ordenadores/estos-tres-paises-cinco-empresas-que-lideran-investigacion-ordenadores-cuanticos-hay-sorpresas",
                "urlToImage": "https://i.blogs.es/17277e/ibmquantum-ap/840_560.jpeg",
                "publishedAt": "2024-02-02T09:01:27Z",
                "content": "\"El desarrollo de la computación cuántica puede representar una ventaja estratégica para una economía. Tener ordenadores cuánticos, ser el poseedor de esa tecnología y que los demás dependan de ti es… [+3595 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Xataka.com"
                },
                "author": "Andrés P. Mohorte",
                "title": "La diferencia entre los puntos más altos y más bajos de cada país, en un estupendo gráfico",
                "description": "Si así lo deseara, un chino podría recorrer los casi 2.000 kilómetros que separan el monte Everest del lago Ayding sin cruzar frontera alguna. De hacerlo, caminaría desde uno de los puntos más bajos de la Tierra (154 metros por debajo del nivel del mar) hasta…",
                "url": "https://www.xataka.com/magnet/diferencia-puntos-altos-bajos-cada-pais-estupendo-grafico-1",
                "urlToImage": "https://i.blogs.es/262d90/puntos-altos-1-/840_560.jpeg",
                "publishedAt": "2024-02-02T09:31:27Z",
                "content": "Si así lo deseara, un chino podría recorrer los casi 2.000 kilómetros que separan el monte Everest del lago Ayding sin cruzar frontera alguna. De hacerlo, caminaría desde uno de los puntos más bajos … [+3337 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Xataka.com"
                },
                "author": "Carlos Prego",
                "title": "Los países con el mayor número de tanques de combate, reunidos en este ilustrativo gráfico",
                "description": "La guerra de Ucrania ha servido para visibilizar unas cuantas realidades quizás intuidas hasta ahora, pero desde luego no experimentadas con la crudeza que ha traído el conflicto, como hasta qué punto influye Rusia en el mapa energético de Europa, lo complica…",
                "url": "https://www.xataka.com/magnet/paises-mayor-numero-tanques-combate-reunidos-este-ilustrativo-grafico-1",
                "urlToImage": "https://i.blogs.es/335ed6/portada/840_560.jpeg",
                "publishedAt": "2024-02-02T16:34:24Z",
                "content": "La guerra de Ucrania ha servido para visibilizar unas cuantas realidades quizás intuidas hasta ahora, pero desde luego no experimentadas con la crudeza que ha traído el conflicto, como hasta qué punt… [+3523 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Xataka.com"
                },
                "author": "Carlos Prego",
                "title": "El mayor proyecto de energía solar del mundo ya está en marcha y lo lleva adelante un país inesperado: Filipinas",
                "description": "El mapa mundial de la fotovoltaica se prepara para sumar un nuevo referente. La compañía Solar Philippines New Energy Corporation (SPNEC) acaba de arrancar los trabajos para crear el que reivindica como \"el mayor proyecto solar del mundo\", una gran instalació…",
                "url": "https://www.xataka.com/energia/filipinas-se-lanza-al-mayor-proyecto-solar-mundo-cinco-millones-paneles-fotovoltaicos-inversion-millonaria",
                "urlToImage": "https://i.blogs.es/2dd3aa/paneless/840_560.jpeg",
                "publishedAt": "2024-01-06T17:00:47Z",
                "content": "El mapa mundial de la fotovoltaica se prepara para sumar un nuevo referente. La compañía Solar Philippines New Energy Corporation (SPNEC) acaba de arrancar los trabajos para crear el que reivindica c… [+3639 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "MarketWatch"
                },
                "author": "Tomi Kilgore",
                "title": "Paytm woes send One 97’s stock plunging, prompting analyst’s ‘sell’ call",
                "description": "One 97 Communications’s stock continued to plunge after a bank used the company’s popular Paytm mobile-payments service was effectively shutdown by bank regulators.",
                "url": "https://www.marketwatch.com/story/paytm-woes-send-one-97s-stock-plunging-prompting-analysts-sell-call-c040dfdf",
                "urlToImage": "https://images.mktw.net/im-81811532/social",
                "publishedAt": "2024-02-02T14:58:00Z",
                "content": "Shares of One 97 Communications Ltd. continued to plunge after a bank used the companys popular Paytm mobile payments service was effectively shutdown by bank regulators.The Reserve Bank of Indias ac… [+2234 chars]"
            },
            {
                "source": {
                    "id": "time",
                    "name": "Time"
                },
                "author": "Astha Rajvanshi",
                "title": "In Photos, India’s Devotees Celebrate the Grand Opening of the Ram Temple",
                "description": "Once a dusty town, Ayodhya has transformed into a \"Hindu Vatican\" thanks to a $3.6 billion dollar makeover spearheaded by India's Prime Minister Narendra Modi.",
                "url": "https://time.com/6565245/ram-temple-modi-photos/",
                "urlToImage": "https://api.time.com/wp-content/uploads/2024/01/ayodhya-india-ram-temple-consecration-1.jpg?quality=85",
                "publishedAt": "2024-01-24T18:50:31Z",
                "content": "For centuries, Hindu pilgrims and devotees have offered prayers at thousands of temples in Ayodhya, a city in northern India believed to be the ancient birthplace of Lord Ram, one of Hinduisms most r… [+6370 chars]"
            }
        ]
       
    }
     */
     bindData(data.articles);
}

//
function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;  // If image url is not there
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    //To change date in user readable Format
    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
    });

    newsSource.innerHTML = `${article.source.name} - ${date}`;   

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

let curSelectedNav = null;
function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = navItem;
    curSelectedNav.classList.add("active");
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
    const query = searchText.value;
    if (!query) return;
    fetchNews(query);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
});