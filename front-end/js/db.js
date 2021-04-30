class Section {
  constructor(name) {
    this.name = name;
  }

  get getName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }
}

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  get getName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }
  get getPrice() {
    return this.price;
  }
  set setPrice(price) {
    this.price = price;
  }
}

class IOption {
  constructor(name) {
    this.name = name;
  }

  get getName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }
}

class Choice {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  get getName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }
  get getPrice() {
    return this.price;
  }
  set setPrice(price) {
    this.price = price;
  }
}

class Database {
  constructor() {
    // list of all sections, items, options, choices
    this.sections = [];
    this.items = [];
    this.options = [];
    this.choices = [];
    // key: Section, value: [Item]
    this.sectionItems = new Map();
    // key: Item, value: [Option]
    this.itemOptions = new Map();
    // key: Option, value = [Choice]
    this.optionChoices = new Map();
  }

  // Add to list
  addSection(section) {
    this.sections.push(section);
  }

  addItem(item) {
    this.items.push(item);
  }

  addOption(option) {
    this.options.push(option);
  }

  addChoice(choice) {
    this.choices.push(choice);
  }

  getSection(sec) {
    for (let i = 0; i < this.sections.length; ++i) {
      if (this.sections[i].getName == sec) {
        return this.sections[i];
      }
    }
  }

  getItem(item) {
    for (let i = 0; i < this.items.length; ++i) {
      if (this.items[i].getName == item) {
        return this.items[i];
      }
    }
  }

  getOption(option) {
    for (let i = 0; i < this.options.length; ++i) {
      if (this.options[i].getName == option) {
        return this.options[i];
      }
    }
  }

  getChoice(choice) {
    for (let i = 0; i < this.choices.length; ++i) {
      if (this.choices[i].getName == choice) {
        return this.choices[i];
      }
    }
  }

  // Add to SectionItems
  addSectionItems(section, item) {
    if (this.sectionItems.size == 0 || !this.sectionItems.has(section)) {
      this.sectionItems.set(section, [item]);
      return;
    }
    let itemList = this.sectionItems.get(section);
    itemList.push(item);
    this.sectionItems.set(section, itemList);
  }

  // Given Section, return a list of all the Items
  getItemsFromSection(section) {
    return this.sectionItems.get(section);
  }

  // All functions related to ItemOptions
  addItemOptions(item, option) {
    if (this.itemOptions.size == 0 || !this.itemOptions.has(item)) {
      this.itemOptions.set(item, [option]);
      return;
    }
    let optionList = this.itemOptions.get(item);
    optionList.push(option);
    this.itemOptions.set(item, optionList);
  }

  // Given Item, return a list of all the Options
  getOptionsFromItem(item) {
    return this.itemOptions.get(item);
  }

  // All functions related to OptionChoices
  addOptionChoices(option, choice) {
    if (this.optionChoices.size == 0 || !this.optionChoices.has(option)) {
      this.optionChoices.set(option, [choice]);
      return;
    }
    let choiceList = this.optionChoices.get(option);
    choiceList.push(choice);
    this.optionChoices.set(option, choiceList);
  }

  // Given Option, return a list of all the Choices
  getChoicesFromOption(option) {
    return this.optionChoices.get(option);
  }
}
