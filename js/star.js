function init() {
  var style = ["style1", "style2", "style3", "style4"];
  var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
  var opacity = [
    "opacity1",
    "opacity1",
    "opacity1",
    "opacity2",
    "opacity2",
    "opacity3",
  ];

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var fragment = document.createDocumentFragment();
  var qtdeEstrelas = 250;
  var widthWindow = window.innerWidth;
  var heightWindow = window.innerHeight;

  for (var i = 0; i < qtdeEstrelas; i++) {
    var estrela = document.createElement("span");
    estrela.className =
      "estrela " +
      style[getRandomArbitrary(0, style.length)] + // 배열 길이를 최대값으로 설정
      " " +
      opacity[getRandomArbitrary(0, opacity.length)] + // 배열 길이를 최대값으로 설정
      " " +
      tam[getRandomArbitrary(0, tam.length)]; // 배열 길이를 최대값으로 설정
    estrela.style.left = getRandomArbitrary(0, widthWindow + 1) + "px"; // window.innerWidth를 포함하도록 수정
    estrela.style.top = getRandomArbitrary(0, heightWindow + 1) + "px"; // window.innerHeight를 포함하도록 수정
    fragment.appendChild(estrela);
  }

  var noite = document.querySelector(".constelacao");
  noite.appendChild(fragment);
}

window.onload = init;
