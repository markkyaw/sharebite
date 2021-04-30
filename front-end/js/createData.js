function initDatabase(db) {
  // Populate initial data
  let s1 = new Section("Lunch Specials");
  let s2 = new Section("Dinner Specials");

  let i1 = new Item("Burrito", 10);
  let i2 = new Item("Chinese Takeout", 9);
  let i3 = new Item("Pizza", 8);
  let i4 = new Item("Sushi", 10);

  let o1 = new IOption("Meat");
  let o2 = new IOption("Veggies");
  let o3 = new IOption("Cheese");
  let o4 = new IOption("Rice");

  let c1 = new Choice("Chicken", 0);
  let c2 = new Choice("Beef", 3);
  let c3 = new Choice("Toro", 5);
  let c4 = new Choice("Salmon", 3);
  let c5 = new Choice("Mozarella", 2);
  let c6 = new Choice("Jack", 3);
  let c7 = new Choice("White", 0);
  let c8 = new Choice("Brown", 1);
  let c9 = new Choice("Lettuce", 0);
  let c10 = new Choice("Avocado", 4);

  db.addSection(s1);
  db.addSection(s2);
  db.addItem(i1);
  db.addItem(i2);
  db.addItem(i3);
  db.addItem(i4);
  db.addOption(o1);
  db.addOption(o2);
  db.addOption(o3);
  db.addOption(o4);
  db.addChoice(c1);
  db.addChoice(c2);
  db.addChoice(c3);
  db.addChoice(c4);
  db.addChoice(c5);
  db.addChoice(c6);
  db.addChoice(c7);
  db.addChoice(c8);
  db.addChoice(c9);
  db.addChoice(c10);

  // lunch - burrito, pizza
  db.addSectionItems(s1, i1);
  db.addSectionItems(s1, i3);
  // dinner - chinese takeout, sushi
  db.addSectionItems(s2, i2);
  db.addSectionItems(s2, i4);

  // burrito - meat, veggies, rice, cheese
  db.addItemOptions(i1, o1);
  db.addItemOptions(i1, o2);
  db.addItemOptions(i1, o3);
  db.addItemOptions(i1, o4);

  // chinese takeout - meat, veggies, rice
  db.addItemOptions(i2, o1);
  db.addItemOptions(i2, o2);
  db.addItemOptions(i2, o4);

  // pizza - meat veggies, cheese
  db.addItemOptions(i3, o1);
  db.addItemOptions(i3, o2);
  db.addItemOptions(i3, o3);

  // sushi - meat, rice
  db.addItemOptions(i4, o1);
  db.addItemOptions(i4, o4);

  // meat - chicken, beef, toro, salmon
  db.addOptionChoices(o1, c1);
  db.addOptionChoices(o1, c2);
  db.addOptionChoices(o1, c3);
  db.addOptionChoices(o1, c4);

  // veggies - lettuce, avocado
  db.addOptionChoices(o2, c9);
  db.addOptionChoices(o2, c10);

  // cheese - mozarella, jack
  db.addOptionChoices(o3, c5);
  db.addOptionChoices(o3, c6);

  // rice - white, brown
  db.addOptionChoices(o4, c7);
  db.addOptionChoices(o4, c8);
}
