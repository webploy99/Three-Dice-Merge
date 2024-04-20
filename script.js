
// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/three-dice-merge/id6475059516";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/87/d6/6c/87d66c16-239f-569f-4db2-a49c18915a9a/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;



// ======== get images URL ========
imageUrl = {
  image1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  image2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  image3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  image4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  image5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/c6/4b/54/c64b541d-8cb4-6220-8c39-6dd038e40b24/6f1c83fd-8db1-422a-9c3a-f0744455b084_1.png/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/4c/d0/38/4cd03883-3d86-259c-701b-3c5e339803fe/d8aa7ca5-c074-48cf-9f78-fbd7355d5570_2.png/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/64/c7/92/64c792d5-8f79-c392-99d7-9644a10ccb57/68941134-c606-40a9-83ca-497b1c799546_3.png/434x0w.webp",
};

var getImg = imageUrl;
document.getElementById('img1').src = getImg.image1
document.getElementById('img2').src = getImg.image2
document.getElementById('img3').src = getImg.image3
document.getElementById('img4').src = getImg.image4
document.getElementById('img5').src = getImg.image5

document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3

