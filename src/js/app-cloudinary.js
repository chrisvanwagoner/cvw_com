var clients = [
  {
    name: "City Parks Alliance",
    class: "cityparks",
    summary: "A new website build with custom masonry layout of featured content for the nation's only independent nonprofit organization for urban parks.",
    category: "National Nonprofit",
    url: "https://cityparksalliance.org",
    imgPlc: "https://res.cloudinary.com/dlyj42rsq/image/upload/v1564970392/images/city-parks-alliance_xmstek.jpg",
    imgSrc: "https://res.cloudinary.com/dlyj42rsq/image/upload/v1564970392/images/city-parks-alliance_2x_bejbhs.jpg",
    imgSrcSet: "https://res.cloudinary.com/dlyj42rsq/image/upload/v1564970392/images/city-parks-alliance_2x_bejbhs.jpg 2x",
    imgAlt: "Screenshot of the City Parks Alliance homepage header",
    bgColor: "#E5F4ED"
  },
  {
    name: "Anheuser-Busch",
    class: "anheuser",
    summary: "Site maintenance for Anheuser-Busch's platform for updates on their nationwide outreach.",
    category: "Outreach",
    url: "https://www.purposebeyondbrewing.com/index.html",
    imgPlc: "https://res.cloudinary.com/dlyj42rsq/image/upload/v1564970391/images/anheuser-busch_quz1k7.jpg",
    imgSrc: "https://res.cloudinary.com/dlyj42rsq/image/upload/v1564970391/images/anheuser-busch_1x_ggcssm.jpg",
    imgSrcSet: "https://res.cloudinary.com/dlyj42rsq/image/upload/v1564970393/images/anheuser-busch_2x_fcifgd.jpg 2x",
    imgAlt: "Screenshot of an Anheuser-Busch Purpose Beyond Brewing initiative page",
    bgColor: "rgb(249, 245, 229)"
  },
  {
    name: "Federal City Council",
    class: "fedcity",
    summary: "For over 60 years, Federal City Council has sought to improve civic life in Washington, D.C.",
    category: "DC Nonrofit",
    url: "https://www.federalcitycouncil.org",
    imgPlc: "https://res.cloudinary.com/dlyj42rsq/image/upload/v1564970392/images/federal-city-council_ofivzt.jpg",
    imgSrc: "https://res.cloudinary.com/dlyj42rsq/image/upload/v1564970393/images/federal-city-council_1x_jufdfv.jpg",
    imgSrcSet: "https://res.cloudinary.com/dlyj42rsq/image/upload/v1564970393/images/federal-city-council_2x_e3gdkf.jpg 2x",
    imgAlt: "Screenshot of the Federal City Council homepage header",
    bgColor: "#DFE4F0"
  },
  {
    name: "Fike",
    class: "fike",
    summary: "A complete site rebuild to showcase Fike's world renown industrial safety equipment.",
    category: "Industial Safety",
    url: "https://www.fike.com",
    imgPlc: "https://res.cloudinary.com/dlyj42rsq/image/upload/v1564970393/images/fike_t2mkbs.jpg",
    imgSrc: "https://res.cloudinary.com/dlyj42rsq/image/upload/v1564970393/images/fike_1x_juz8l1.jpg",
    imgSrcSet: "https://res.cloudinary.com/dlyj42rsq/image/upload/v1564970393/images/fike_2x_dunzjb.jpg 2x",
    imgAlt: "Screenshot of the Fike homepage header",
    bgColor: "rgb(244, 232, 224)"
  },
  {
    name: "VEDA Data",
    class: "veda",
    summary: "Harnessing machine learning, VEDA's services examine healthcare data and provide solutions to the industry's complex problems.",
    category: "Data + Machine Learning",
    url: "https://vedadata.com",
    imgPlc: "https://res.cloudinary.com/dlyj42rsq/image/upload/v1564970391/images/veda-data_jqoxsn.jpg",
    imgSrc: "https://res.cloudinary.com/dlyj42rsq/image/upload/v1564970393/images/veda-data_1x_t6fyg6.jpg",
    imgSrcSet: "https://res.cloudinary.com/dlyj42rsq/image/upload/v1564970393/images/veda-data_2x_bpz6mp.jpg 2x",
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
