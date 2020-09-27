/* app.js */
var clients = [
  {
    name: "Greater & Greener",
    class: "gg",
    url: "https://www.greatergreener.org/",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: ""
  },
  {
    name: "State of Babies",
    class: "sob",
    url: "https://www.stateofbabies.org",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: ""
  },
  {
    name: "Smokefree Oregon",
    class: "sfo",
    url: "https://smokefreeoregon.com",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: ""
  },
  // {
  //   name: "Anheuser-Busch",
  //   class: "anheuser",
  //   summary: "Site maintenance for Anheuser-Busch's platform for updates on their nationwide outreach.",
  //   category: "Outreach",
  //   url: "https://www.purposebeyondbrewing.com/index.html",
  //   imgPlc: "images/anheuser-busch.jpg",
  //   imgSrc: "images/anheuser-busch@1x.jpg",
  //   imgSrcSet: "images/anheuser-busch@2x.jpg 2x",
  //   imgAlt: "Screenshot of an Anheuser-Busch Purpose Beyond Brewing initiative page",
  //   bgColor: "rgb(249, 245, 229)"
  // },
  {
    name: "City Parks Alliance",
    class: "cityparks",
    summary: "A new website build with custom masonry layout of featured content for the nation's only independent nonprofit organization for urban parks.",
    category: "National Nonprofit",
    url: "https://cityparksalliance.org",
    imgPlc: "images/city-parks-alliance.jpg",
    imgSrc: "images/city-parks-alliance@1x.jpg",
    imgSrcSet: "images/city-parks-alliance@2x.jpg 2x",
    imgAlt: "Screenshot of the City Parks Alliance homepage header",
    bgColor: "#E5F4ED"
  },
  {
    name: "Fike",
    class: "fike",
    summary: "A complete site rebuild to showcase Fike's world renown industrial safety equipment.",
    category: "Industial Safety",
    url: "https://www.fike.com",
    imgPlc: "images/fike.jpg",
    imgSrc: "images/fike@1x.jpg",
    imgSrcSet: "images/fike@2x.jpg 2x",
    imgAlt: "Screenshot of the Fike homepage header",
    bgColor: "rgb(244, 232, 224)"
  },
  {
    name: "Federal City Council",
    class: "fedcity",
    summary: "For over 60 years, Federal City Council has sought to improve civic life in Washington, D.C.",
    category: "DC Nonrofit",
    url: "https://www.federalcitycouncil.org",
    imgPlc: "images/federal-city-council.jpg",
    imgSrc: "images/federal-city-council@1x.jpg",
    imgSrcSet: "images/federal-city-council@2x.jpg 2x",
    imgAlt: "Screenshot of the Federal City Council homepage header",
    bgColor: "#DFE4F0"
  },
  {
    name: "America's Physician Groups",
    class: "apg",
    url: "https://www.apg.org",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: ""
  },
  {
    name: "VEDA Data",
    class: "veda",
    summary: "Harnessing machine learning, VEDA's services examine healthcare data and provide solutions to the industry's complex problems.",
    category: "Data + Machine Learning",
    url: "https://vedadata.com",
    imgPlc: "images/veda-data.jpg",
    imgSrc: "images/veda-data@1x.jpg",
    imgSrcSet: "images/veda-data@2x.jpg 2x",
    imgAlt: "Screenshot of the Veda Data homepage header",
    bgColor: "#E9E5F4"
  },
  {
    name: "National Disability Rights Network",
    class: "ndrn",
    url: "https://ndrn.org",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: ""
  },
  {
    name: "Campaign for Inclusive Care",
    class: "edf-cfic",
    url: "https://campaignforinclusivecare.elizabethdolefoundation.org/",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: ""
  },
  {
    name: "Caregiver Journey",
    class: "edf-cj",
    url: "https://caregiverjourney.elizabethdolefoundation.org/",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: ""
  },
  {
    name: "Retail Opportunity Network",
    class: "ron",
    url: "https://retailopportunitynetwork.org",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: ""
  },
  {
    name: "ACT's My Success",
    class: "act",
    url: "https://mysuccess.act.org/",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: ""
  },
  {
    name: "Kirk Humanitarian",
    class: "kirk",
    url: "https://kirkhumanitarian.org",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: ""
  },
  {
    name: "McKinley Advisors",
    class: "mckinley",
    url: "https://www.mckinley-advisors.com/",
    summary: "",
    category: "",
    imgPlc: "",
    imgSrc: "",
    imgSrcSet: " 2x",
    imgAlt: "",
    bgColor: ""
  }
];

var app = new Vue({
  el: '#app',
  data: {
    clients: clients
  }
});
