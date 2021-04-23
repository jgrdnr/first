// function virusPic() { 
//   picture = document.getElementsByID("image");
//   spaceW = screen.height - picture.height;
//   spaceH = screen.width - picture.width;
//   setInterval(moveIt, 500);
// }

// function moveIt() {
//   picture.style.top = math.round(Math.random() * spaceW) + "px";
//   picture.style.left = Math.round(Math.random() * spaceH) + "px";
// }

// function showImage(src, width, height, alt) {
//   var img = document.createElement("img");
//   img.src = "img/virus.png";
//   img.width = math.Random;
//   img.height = math.Random;
//   img.alt = alt;

//   // This next line will just add it to the <body> tag
//   document.body.appendChild(img);
// }

// function randomVirus() {
//   $('.img').clone().appendTo('.body');
// }

// sourceImage = new Image();
//         sourceImage.src = "img/virus.png";

//         function cloneVirus () {
//             imageVirus = new Image();
//             imageVirus.src = sourceImage.src;
//             document.getElementById("content").appendChild(imageVirus);
//         }

let infect = 2

function addVirus() {
  var src = "img/virus.png";
  for (let i=0; i<infect; i++)
  {showImage("img/virus.png", 276,110, "Virus")}
  infect = infect*2
}

function showImage(src, width, height, alt) {
  var wrapper = document.createElement("div");
  var img = document.createElement("img");
  img.addEventListener("click", addVirus);
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  img.style.position = "absolute";
  var x = document.body.offsetHeight;
  var y = document.body.offsetWidth;
  var randomx = Math.floor(Math.random()*x+1);
  var randomy = Math.floor(Math.random()*y+1);
  img.style.top = randomx + 'px';
  img.style.left = randomy + 'px';
  wrapper.appendChild(img);
  document.body.appendChild(wrapper);
}


// function showLetter() {
//   var letter = imgsArray[generateRandomForArray()];
//   $("div").append("<img src='img/virus.png'>");
//   var left = generateRandom();
//   var top = generateRandom();
//   $("div").last().css({"position":"absolute","top": top + "px", "left": left + "px"});
// }

// function Init() {
//   picture = document.getElementById("img/virus.png");
//   spaceW = screen.height - picture.height;
//   spaceH = screen.width - picture.width;
//   setInterval(moveIt, 500);
// }

// function moveIt() {
//   picture.style.top = Math.round(Math.random() * spaceW) + "100px";
//   picture.style.left = Math.round(Math.random() * spaceH) + "100px";
// }


