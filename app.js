document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
  ];

  //   Acak kartu
  cardArray.sort(() => 0.5 - Math.random());

  //   variable
  const grid = document.querySelector(".grid");
  const resultDisplay = document.getElementById("result");
  let chosenCard = [];
  let idChosenCard = [];
  let wonCards = [];

  //  membuat element untuk card board
  const cardBoard = () => {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  };

  //   Mencari kartu yang cocok
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = idChosenCard[0];
    const optionTwoId = idChosenCard[1];

    if (chosenCard[0] === chosenCard[1]) {
      alert("Ingatanmu boleh juga");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      wonCards.push(chosenCard);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("Kamu belum berhasil");
    }

    chosenCard = [];
    idChosenCard = [];
    resultDisplay.textContent = wonCards.length;

    if (wonCards.length === cardArray.length / 2) {
      resultDisplay.textContent =
        "Selamat kamu berhasil menyelesaikan game ini";
    }
  }

  // Function flip card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    chosenCard.push(cardArray[cardId].name);
    idChosenCard.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);

    if (chosenCard.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  cardBoard();
});
