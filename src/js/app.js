var clients = [
  {
    name: "City Parks Alliance",
    class: "cityparks",
    summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    category: "Non-profit",
    url: "https://cityparksalliance.org",
    imgSrc: "images/city-parks-alliance.jpg",
    imgSrc2x: "images/city-parks-alliance@2x.jpg 2x",
    imgAlt: "Screenshot of the City Parks Alliance homepage header"
  },
  {
    name: "Federal City Council",
    class: "fedcity",
    summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    category: "Non-profit",
    url: "https://www.federalcitycouncil.org",
    imgSrc: "images/federal-city-council.jpg",
    imgSrc2x: "images/federal-city-council@2x.jpg 2x",
    imgAlt: "Screenshot of the Federal City Council homepage header"
  },
  {
    name: "Fike",
    class: "fike",
    summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    category: "Industial Safety Equipment",
    url: "https://www.fike.com",
    imgSrc: "images/fike.jpg",
    imgSrc2x: "images/fike@2x.jpg 2x",
    imgAlt: "Screenshot of the Fike homepage header"
  },
  {
    name: "Veda Data",
    class: "veda",
    summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
    category: "Healthcare Data",
    url: "https://vedadata.com",
    imgSrc: "images/veda-data.jpg",
    imgSrc2x: "images/veda-data@2x.jpg 2x",
    imgAlt: "Screenshot of the Veda Data homepage header"
  }
];

var main = new Vue({
  el: '#main',
  data: {
    clients: clients,
  }
});
