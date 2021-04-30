function cardSectionEvents() {
  // Card change color to indicate it has been clicked
  $(".sectionCard").each(function (index, element) {
    // Change color
    $(this).on("click", function () {
      // Remove ".selected" from child cards
      removeSelected(true, true, true, true);
      $(this).addClass("selected");

      // Retrieve current Section object
      currSection = db.getSection(this.innerText);
      // Retrieve all current Item objects from current section
      cardItemEvents();
    });
  });
}

function cardItemEvents() {
  currItemList = db.getItemsFromSection(currSection);
  for (let i in currItemList) {
    let btn = newPriceCard(
      "item",
      currItemList[i].getName,
      currItemList[i].getPrice
    );
    btn.onclick = function () {
      // Remove ".selected" from child cards
      removeSelected(false, true, true, true);
      $(this).addClass("selected");

      currItem = db.getItem(
        $(this).children(".card-body").children(".card-title")[0].innerText
      );
      cardOptionEvents();
    };
  }
}

function cardOptionEvents() {
  currOptionList = db.getOptionsFromItem(currItem);
  for (let [i] in currOptionList) {
    let btn1 = newCard("option", currOptionList[i].getName);
    btn1.onclick = function () {
      removeSelected(false, false, true, true);
      $(this).addClass("selected");

      currOption = db.getOption(this.innerText);
      cardChoiceEvents();
    };
  }
}

function cardChoiceEvents() {
  currChoiceList = db.getChoicesFromOption(currOption);
  for (let i in currChoiceList) {
    let btn2 = newPriceCard(
      "choice",
      currChoiceList[i].getName,
      currChoiceList[i].getPrice
    );
    btn2.onclick = function () {
      removeSelected(false, false, false, true);
      $(this).addClass("selected");
      currChoice = db.getChoice(
        $(this).children(".card-body").children(".card-title")[0].innerText
      );
    };
  }
}
