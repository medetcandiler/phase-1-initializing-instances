// Write your code here
class Breakfast{
  constructor(food, drink){
    this.food = food;
    this.drink = drink;
  }
}
const breakfast = new Breakfast("eggs", "juice")
console.log(breakfast)
class Lunch{
  constructor(salad, soup, drink){
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}
const lunch = new Lunch("side salad", "broccoli cheddar soup", "iced tea")
console.log(lunch)
class Dinner{
  #dessert;
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#dessert = dessert;
  }
}

const dinner = new Dinner("balsamic salad", "consomme", "filet mignon", "cheesecake");
