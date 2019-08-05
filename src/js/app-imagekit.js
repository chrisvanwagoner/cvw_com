var clients = [
  {
    name: "City Parks Alliance",
    class: "cityparks",
    summary: "A new website build with custom masonry layout of featured content for the nation's only independent nonprofit organization for urban parks.",
    category: "National Nonprofit",
    url: "https://cityparksalliance.org",
    imgPlc: "https://ik.imagekit.io/cvw/city-parks-alliance_B6KZP_9ms.jpg",
    imgSrc: "https://ik.imagekit.io/cvw/city-parks-alliance_1x_ek51d-_AU.jpg",
    imgSrcSet: "https://ik.imagekit.io/cvw/city-parks-alliance_2x_Gg90VIf2M.jpg 2x",
    imgAlt: "Screenshot of the City Parks Alliance homepage header",
    bgColor: "#E5F4ED"
  },
  {
    name: "Anheuser-Busch",
    class: "anheuser",
    summary: "Site maintenance for Anheuser-Busch's platform for updates on their nationwide outreach.",
    category: "Outreach",
    url: "https://www.purposebeyondbrewing.com/index.html",
    imgPlc: "https://ik.imagekit.io/cvw/anheuser-busch_yvYiD2kIQ.jpg",
    imgSrc: "https://ik.imagekit.io/cvw/anheuser-busch_1x_B23xwweowI.jpg",
    imgSrcSet: "https://ik.imagekit.io/cvw/anheuser-busch_2x_zz3oBN76it.jpg 2x",
    imgAlt: "Screenshot of an Anheuser-Busch Purpose Beyond Brewing initiative page",
    bgColor: "rgb(249, 245, 229)"
  },
  {
    name: "Federal City Council",
    class: "fedcity",
    summary: "For over 60 years, Federal City Council has sought to improve civic life in Washington, D.C.",
    category: "DC Nonrofit",
    url: "https://www.federalcitycouncil.org",
    imgPlc: "https://ik.imagekit.io/cvw/federal-city-council_5xK9OaN-4.jpg",
    imgSrc: "https://ik.imagekit.io/cvw/federal-city-council_1x_BCm4nxwN1.jpg",
    imgSrcSet: "https://ik.imagekit.io/cvw/federal-city-council_2x_kSqpqiNj-n.jpg 2x",
    imgAlt: "Screenshot of the Federal City Council homepage header",
    bgColor: "#DFE4F0"
  },
  {
    name: "Fike",
    class: "fike",
    summary: "A complete site rebuild to showcase Fike's world renown industrial safety equipment.",
    category: "Industial Safety",
    url: "https://www.fike.com",
    imgPlc: "https://ik.imagekit.io/cvw/fike_BoGFbf_e1c.jpg",
    imgSrc: "https://ik.imagekit.io/cvw/fike_1x_zJcnYMCL2g.jpg",
    imgSrcSet: "https://ik.imagekit.io/cvw/fike_2x_iIxqx0Fca.jpg 2x",
    imgAlt: "Screenshot of the Fike homepage header",
    bgColor: "rgb(244, 232, 224)"
  },
  {
    name: "VEDA Data",
    class: "veda",
    summary: "Harnessing machine learning, VEDA's services examine healthcare data and provide solutions to the industry's complex problems.",
    category: "Data + Machine Learning",
    url: "https://vedadata.com",
    imgPlc: "https://ik.imagekit.io/cvw/veda-data_ZvpD9A7Msk.jpg",
    imgSrc: "https://ik.imagekit.io/cvw/veda-data_1x_vc3wUTWOk.jpg",
    imgSrcSet: "https://ik.imagekit.io/cvw/veda-data_2x_lDms49XN6.jpg 2x",
    imgAlt: "Screenshot of the Veda Data homepage header",
    bgColor: "#E9E5F4"
  }
];

var main = new Vue({
  el: '#main',
  data: {
    clients: clients,
  }
});
