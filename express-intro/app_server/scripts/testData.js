
db.dropDatabase();

db.recipes.save(
  {
    name: "test",
    ingredients: [
      {
        name: "flour",
        amount: 2
      },
      {
        name: "sugar",
        amount: 3
      }
    ]
  }
);

db.recipes.save(
  {
    name: "test 2",
    ingredients: [
      {
        name: "eggs",
        amount: 2
      },
      {
        name: "milk",
        amount: 5
      },
      {
        name: "baking powder",
        amount: 1
      }
    ]
  }
);
