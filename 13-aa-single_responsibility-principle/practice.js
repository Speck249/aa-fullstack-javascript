/******************************** CONSTANTS *********************************/ 
const applePieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "apples", cost: 6.00, quantity: 7 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "cherries", cost: 12.00, quantity: 10 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe
};

/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/

function bakeAndSellPies(pieType, pieQuantity, profitMargin) {
  const recipe = recipes[pieType];
  
  bakePies(pieType, recipe, pieQuantity);
  const costOfPie = calculateCostOfPie(recipe);
  const totalCost = calculateTotalBakingCost(costOfPie, pieQuantity);
  const revenue = calculateTotalRevenue(profitMargin, totalCost)
  console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`);
}

// Bake the number of pies specified by the pieQuantity
function bakePies(pieType, recipe, pieQuantity) { 
  // Print the ingredients for each ingredient in the recipe 
  for (let i = 0; i < pieQuantity; i++) {
    let combiningMsg = `Combining ingredients for ${pieType}: `
    combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
    console.log(combiningMsg);
    // Print the nth pie that was baked
    console.log(`Baked pie ${i + 1}!`);
  }
} 

// Return the cost of each pie based on the cost of each ingredient
function calculateCostOfPie(recipe) {
  const costOfPie = recipe.reduce((prev, current) => {
    return prev + current.cost;
  }, recipe[0].cost);
  console.log(`Cost per pie: ${costOfPie}`);
  return costOfPie
}

// Calculate the total cost of all the pies
function calculateTotalBakingCost(costOfPie, pieQuantity) {
  return costOfPie * pieQuantity;
}

// Calculate the total revenue using the given profitMargin
function calculateTotalRevenue(profitMargin, totalCost) {
  return totalCost * (profitMargin || 1.2);
}

/******************************* LOCAL TESTS *******************************/
bakeAndSellPies("applePie", 5, 2.5);
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies
};