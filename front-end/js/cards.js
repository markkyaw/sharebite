// sec, item, opt, choice all bool
function removeSelected(sec, item, opt, choice) {
  if (sec) {
    let s = $(".sectionCard");
    s.each(function (index, element) {
      $(this).removeClass("selected");
    });
    $(".itemCard").remove();
    $(".optionCard").remove();
    $(".choiceCard").remove();
  }

  if (item) {
    let i = $(".itemCard");
    i.each(function (index, element) {
      $(this).removeClass("selected");
    });
    $(".optionCard").remove();
    $(".choiceCard").remove();
  }

  if (opt) {
    let o = $(".optionCard");
    o.each(function (index, element) {
      $(this).removeClass("selected");
    });
    $(".choiceCard").remove();
  }

  if (choice) {
    let c = $(".choiceCard");
    c.each(function (index, element) {
      $(this).removeClass("selected");
    });
  }
}

// Create cards for columns
/*
<button type="button" class="card border sectionCard">
  <div class="card-body">
    <h5 class="card-title">Midnight Specials</h5>
    <p class="card-text">$ 10</p>
  </div>
</button>
*/
function newCard(loc, name) {
  let button = document.createElement("button");
  button.setAttribute("type", "button");
  button.classList.add("card");
  button.classList.add("border");
  button.classList.add(loc + "Card");

  let divTag = document.createElement("div");
  divTag.classList.add("card-body");

  let h5Tag = document.createElement("h5");
  h5Tag.classList.add("card-title");
  h5Tag.innerHTML = name;

  divTag.appendChild(h5Tag);
  button.appendChild(divTag);
  $("#" + loc + "-div").append(button);
  return button;
}

function newPriceCard(loc, name, price) {
  let button = document.createElement("button");
  button.setAttribute("type", "button");
  button.classList.add("card");
  button.classList.add("border");
  button.classList.add(loc + "Card");

  let divTag = document.createElement("div");
  divTag.classList.add("card-body");

  let h5Tag = document.createElement("h5");
  h5Tag.classList.add("card-title");
  h5Tag.innerHTML = name;

  let pTag = document.createElement("p");
  pTag.classList.add("card-text");
  pTag.innerHTML = "$" + price;

  divTag.appendChild(h5Tag);
  divTag.appendChild(pTag);
  button.appendChild(divTag);
  $("#" + loc + "-div").append(button);
  return button;
}

// Create input for new section
/*
<button type="button" class="card border">
  <div class="card-body">
    <form id="newSection">
      <input type="text" id="name" />
      <input type="text" id="price" />
    </form>
  </div>
</button>
*/
function newInput(loc) {
  let button = document.createElement("button");
  button.setAttribute("type", "button");
  button.classList.add("card");
  button.classList.add("border");
  button.classList.add("new-" + loc + "-input");

  let divTag = document.createElement("div");
  divTag.classList.add("card-body");

  let formTag = document.createElement("form");
  formTag.setAttribute("id", "new-" + loc);

  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", loc + "-name");
  input.setAttribute("placeholder", "Name");

  formTag.appendChild(input);
  divTag.appendChild(formTag);
  button.appendChild(divTag);

  $("#" + loc + "-div").append(button);
}

function newInputPrice(loc) {
  let button = document.createElement("button");
  button.setAttribute("type", "button");
  button.classList.add("card");
  button.classList.add("border");
  button.classList.add("new-" + loc + "-input");

  let divTag = document.createElement("div");
  divTag.classList.add("card-body");

  let formTag = document.createElement("form");
  formTag.setAttribute("id", "new-" + loc);

  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", loc + "-name");
  input.setAttribute("placeholder", "Name");

  let input1 = document.createElement("input");
  input1.setAttribute("type", "text");
  input1.setAttribute("id", loc + "-price");
  input1.setAttribute("placeholder", "Price");
  input1.classList.add("price");

  let submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.classList.add("hidden");

  formTag.appendChild(input);
  formTag.appendChild(input1);
  formTag.appendChild(submit);
  divTag.appendChild(formTag);
  button.appendChild(divTag);

  $("#" + loc + "-div").append(button);
}
