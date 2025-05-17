let firstItemCollapsed = document.getElementById("collapsed-card-one");
let secondItemCollapsed = document.getElementById("collapsed-card-two");
let thirdItemCollapsed = document.getElementById("collapsed-card-three");

let firstItemExpanded = document.getElementById("expanded-card-one");
let secondItemExpanded = document.getElementById("expanded-card-two");
let thirdItemExpanded = document.getElementById("expanded-card-three");

let firstItemCollapsedRadioButton = document.getElementById(
  "first-collapsed-radio"
);

let firstItemExpandedRadioButton = document.getElementById(
  "first-expanded-radio"
);

let secondItemCollapsedRadioButton = document.getElementById(
  "second-collapsed-radio"
);

let secondItemExpandedRadioButton = document.getElementById(
  "second-expanded-radio"
);

let thirdItemCollapsedRadioButton = document.getElementById(
  "third-collapsed-radio"
);

let thirdItemExpandedRadioButton = document.getElementById(
  "third-expanded-radio"
);

closeFirstCard();
closeSecondCard();
closeThirdCard();

firstItemCollapsedRadioButton.addEventListener("change", (event) => {
  if (event.target.checked) {
    openFirstCard();
    closeSecondCard();
    closeThirdCard();
  }
});

firstItemExpandedRadioButton.addEventListener("change", (event) => {
  if (event.target.checked) {
    closeFirstCard();
  }
});

secondItemCollapsedRadioButton.addEventListener("change", (event) => {
  if (event.target.checked) {
    openSecondCard();
    closeFirstCard();
    closeThirdCard();
  }
});

secondItemExpandedRadioButton.addEventListener("change", (event) => {
  if (event.target.checked) {
    closeSecondCard();
  }
});

thirdItemCollapsedRadioButton.addEventListener("change", (event) => {
  if (event.target.checked) {
    openThirdCard();
    closeFirstCard();
    closeSecondCard();
  }
});

thirdItemExpandedRadioButton.addEventListener("change", (event) => {
  if (event.target.checked) {
    closeThirdCard();
  }
});

function selectFirstItem() {
  console.log(firstItemCollapsedRadioButton);
}

function openFirstCard() {
  firstItemCollapsed.style.display = "none";
  firstItemExpanded.style.display = "";
  firstItemExpandedRadioButton.checked = true; 
}

function closeFirstCard() {
  firstItemExpanded.style.display = "none";
  firstItemCollapsed.style.display = "";
}

function openSecondCard() {
  secondItemCollapsed.style.display = "none";
  secondItemExpanded.style.display = "";
  secondItemExpandedRadioButton.checked = true;
}

function closeSecondCard() {
  secondItemExpanded.style.display = "none";
  secondItemCollapsed.style.display = "";
}

function openThirdCard() {
  thirdItemCollapsed.style.display = "none";
  thirdItemExpanded.style.display = "";
  thirdItemExpandedRadioButton.checked = true;
}

function closeThirdCard() {
  thirdItemExpanded.style.display = "none";
  thirdItemCollapsed.style.display = "";
}
