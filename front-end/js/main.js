let db = new Database();
$(initDatabase(db));

var currSection, currItem, currOption, currChoice;
var currSectionList, currItemList, currOptionList, currChoiceList;

function isDefined(x) {
  var undefined;
  return x !== undefined;
}

// load up menu cards
for (let i in db.sections) {
  newCard("section", db.sections[i].getName);
}

currSectionList = db.sections;

// Card change color to indicate it has been clicked
cardSectionEvents();

$("#section-add").on("click", function () {
  if ($("#section-add").hasClass("btn-click")) {
    $(".new-section-input").remove();
    document.getElementById("section-add").classList.remove("btn-click");
  } else {
    newInput("section");
    $("#new-section").submit(function (e) {
      e.preventDefault();
      let obj = new Section($("#section-name").val());
      console.log(obj);
      db.addSection(obj);
      newCard("section", obj.getName);
      $(".new-section-input").remove();
      document.getElementById("section-add").classList.remove("btn-click");
      cardSectionEvents();
    });
    document.getElementById("section-add").classList.add("btn-click");
  }
});

$("#item-add").on("click", function () {
  if (isDefined(currSection)) {
    if ($("#item-add").hasClass("btn-click")) {
      $(".new-item-input").remove();
      document.getElementById("item-add").classList.remove("btn-click");
    } else {
      newInputPrice("item");
      $("#new-item").submit(function (e) {
        e.preventDefault();
        let obj = new Item($("#item-name").val(), $("#item-price").val());
        db.addItem(obj);
        db.addSectionItems(currSection, obj);
        $(".itemCard").remove();
        $(".new-item-input").remove();
        document.getElementById("item-add").classList.remove("btn-click");
        cardItemEvents();
      });
      document.getElementById("item-add").classList.add("btn-click");
    }
  }
});

$("#option-add").on("click", function () {
  if (isDefined(currItem)) {
    if ($("#option-add").hasClass("btn-click")) {
      $(".new-option-input").remove();
      document.getElementById("option-add").classList.remove("btn-click");
    } else {
      newInput("option");
      $("#new-option").submit(function (e) {
        e.preventDefault();
        let obj = new IOption($("#option-name").val());
        db.addOption(obj);
        db.addItemOptions(currItem, obj);
        $(".optionCard").remove();
        $(".new-option-input").remove();
        document.getElementById("option-add").classList.remove("btn-click");
        cardOptionEvents();
      });
      document.getElementById("option-add").classList.add("btn-click");
    }
  }
});

$("#choice-add").on("click", function () {
  if (isDefined(currOption)) {
    if ($("#choice-add").hasClass("btn-click")) {
      $(".new-choice-input").remove();
      document.getElementById("choice-add").classList.remove("btn-click");
    } else {
      newInputPrice("choice");
      $("#new-choice").submit(function (e) {
        e.preventDefault();
        let obj = new Choice($("#choice-name").val(), $("#choice-price").val());
        db.addChoice(obj);
        db.addOptionChoices(currOption, obj);
        $(".choiceCard").remove();
        $(".new-choice-input").remove();
        document.getElementById("choice-add").classList.remove("btn-click");
        cardChoiceEvents();
      });
      document.getElementById("choice-add").classList.add("btn-click");
    }
  }
});
