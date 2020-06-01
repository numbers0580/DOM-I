const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//I originally wanted to use querySelectorAll, create an array, then use a for-loop.
//But I noticed the keys in 'nav' are all unique, so there's no point.
let navLink1 = document.getElementsByTagName('a')[0];
let navLink2 = document.getElementsByTagName('a')[1];
let navLink3 = document.getElementsByTagName('a')[2];
let navLink4 = document.getElementsByTagName('a')[3];
let navLink5 = document.getElementsByTagName('a')[4];
let navLink6 = document.getElementsByTagName('a')[5];

navLink1.textContent = siteContent.nav['nav-item-1'];
navLink2.textContent = siteContent.nav['nav-item-2'];
navLink3.textContent = siteContent.nav['nav-item-3'];
navLink4.textContent = siteContent.nav['nav-item-4'];
navLink5.textContent = siteContent.nav['nav-item-5'];
navLink6.textContent = siteContent.nav['nav-item-6'];

//The following code takes a string and breaks it up to individual words
//and recombines them using <br> instead
let domTitleSplit = siteContent.cta.h1.split(' ');
let domTitleJoined = domTitleSplit[0];
for(let i = 1; i < domTitleSplit.length; i++) {
  domTitleJoined = domTitleJoined.concat('<br /> ' + domTitleSplit[i]);
}
let hOne = document.getElementsByTagName('h1')[0];
hOne.innerHTML = domTitleJoined;

//Labeling the button
let ctaButtonText = document.getElementsByTagName('button')[0];
ctaButtonText.textContent = siteContent.cta.button;

//Getting src for circular-shaped image
let circleImg = document.getElementById('cta-img');
circleImg.setAttribute('src', siteContent.cta['img-src']);

//Again, can't use for-loop due to unique keys. These are for all the <h4>s
let h4Text1 = document.getElementsByTagName('h4')[0];
let h4Text2 = document.getElementsByTagName('h4')[1];
let h4Text3 = document.getElementsByTagName('h4')[2];
let h4Text4 = document.getElementsByTagName('h4')[3];
let h4Text5 = document.getElementsByTagName('h4')[4];
let h4Text6 = document.getElementsByTagName('h4')[5];

h4Text1.textContent = siteContent['main-content']['features-h4'];
h4Text2.textContent = siteContent['main-content']['about-h4'];
h4Text3.textContent = siteContent['main-content']['services-h4'];
h4Text4.textContent = siteContent['main-content']['product-h4'];
h4Text5.textContent = siteContent['main-content']['vision-h4'];
h4Text6.textContent = siteContent.contact['contact-h4'];

//Same issue with lack of for-loops for the <p> tags
let pText1 = document.getElementsByTagName('p')[0];
let pText2 = document.getElementsByTagName('p')[1];
let pText3 = document.getElementsByTagName('p')[2];
let pText4 = document.getElementsByTagName('p')[3];
let pText5 = document.getElementsByTagName('p')[4];
let pText6 = document.getElementsByTagName('p')[5];
let pText7 = document.getElementsByTagName('p')[6];
let pText8 = document.getElementsByTagName('p')[7];
let pText9 = document.getElementsByTagName('p')[8];

pText1.textContent = siteContent['main-content']['features-content'];
pText2.textContent = siteContent['main-content']['about-content'];
pText3.textContent = siteContent['main-content']['services-content'];
pText4.textContent = siteContent['main-content']['product-content'];
pText5.textContent = siteContent['main-content']['vision-content'];
pText6.textContent = siteContent.contact.address;
pText7.textContent = siteContent.contact.phone;
pText8.textContent = siteContent.contact.email;
pText9.textContent = siteContent.footer.copyright;

//Getting src for the middle image
let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
