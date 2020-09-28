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
logo.setAttribute('src', siteContent["nav"]["img-src"])

// header
let link1 = document.querySelector('a:nth-of-type(1)')
link1.textContent = siteContent['nav']['nav-item-1']
let link2 = document.querySelector('a:nth-of-type(2)')
link2.textContent = siteContent['nav']['nav-item-2']
let link3 = document.querySelector('a:nth-of-type(3)')
link3.textContent = siteContent['nav']['nav-item-3']
let link4 = document.querySelector('a:nth-of-type(4)')
link4.textContent = siteContent['nav']['nav-item-4']
let link5 = document.querySelector('a:nth-of-type(5)')
link5.textContent = siteContent['nav']['nav-item-5']
let link6 = document.querySelector('a:nth-of-type(6)')
link6.textContent = siteContent['nav']['nav-item-6']

// CTA Section
const cta = document.querySelector('.cta')
const h1 = cta.querySelector('h1')
h1.textContent = siteContent['cta']['h1']

const button = cta.querySelector('button')
button.textContent = siteContent['cta']['button']

const ctaImage = cta.querySelector('#cta-img')
ctaImage.src = siteContent['cta']['img-src']

// Main Content
const topContent = document.querySelector('.top-content')

const h4_1 = topContent.querySelector('.text-content h4')
h4_1.textContent = siteContent['main-content']['features-h4']

const textContent1 = topContent.querySelector('.text-content p')
textContent1.textContent = siteContent['main-content']['features-content']

const h4_2 = topContent.querySelector('.text-content:nth-child(2) h4')
h4_2.textContent = siteContent['main-content']['about-h4']

const textContent2 = topContent.querySelector('.text-content:nth-child(2) p')
textContent2.textContent = siteContent['main-content']['about-content']

const middleImg = document.querySelector('#middle-img')
middleImg.src = siteContent['main-content']['middle-img-src']

const bottomContent = document.querySelector('.bottom-content')

const servicesH4 = bottomContent.querySelector('.text-content h4')
servicesH4.textContent = siteContent['main-content']['services-h4']

const servicesP = bottomContent.querySelector('.text-content p')
servicesP.textContent = siteContent['main-content']['services-content']

const product = bottomContent.querySelector('.text-content:nth-child(2) h4')
product.textContent = siteContent['main-content']['product-h4']

const productText = bottomContent.querySelector('.text-content:nth-child(2) p')
productText.textContent = siteContent['main-content']['product-content']

const vision = bottomContent.querySelector('.text-content:nth-child(3) h4')
vision.textContent = siteContent['main-content']['vision-h4']

const visionText = bottomContent.querySelector('.text-content:nth-child(3) p')
visionText.textContent = siteContent['main-content']['vision-content']

// Contact Section
const contact = document.querySelector('.contact')

const contactHeader = contact.querySelector('h4')
contactHeader.textContent = siteContent['contact']['contact-h4']

contact.querySelector('p:nth-of-type(1)').textContent = siteContent['contact']['address']
contact.querySelector('p:nth-of-type(2)').textContent = siteContent['contact']['phone']
contact.querySelector('p:nth-of-type(3)').textContent = siteContent['contact']['email']

// Footer
const footer = document.querySelector('footer')
footer.querySelector('p').textContent = siteContent['footer']['copyright']