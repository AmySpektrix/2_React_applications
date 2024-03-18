console.log("Hello from JavaScript");
// window.alert("Hi there this is alarming")

document.querySelector("h1").textContent = "🥗 Zoe's Cooking Blog! 🥙";

const createNewRecipe =(recipeHeading, recipeStepsArray) =>{
    const funcRecipeHeading = document.createElement("h2");
    funcRecipeHeading.textContent = recipeHeading;
    const funcRecipeSteps = document.createElement("ol");
    const funcRecipeStepsArray=recipeStepsArray;
    funcRecipeStepsArray.forEach(item => {
        const arrayItem = document.createElement("li");
        arrayItem.textContent = item;
        funcRecipeSteps.appendChild(arrayItem);
    });
    document.querySelector("body").append(funcRecipeHeading);
    document.querySelector("body").append(funcRecipeSteps);
}
newRecipeHeading = "Make Pancakes - So Yummy";
newRecipeStepsArray = ["assemble ingredients: flour 135g, 1 egg, 1/2 tsp salt, 1 tsp bicarb, 2 tbs sugar, 2 tbs melted butter 130ml milk.", "mix all in bowl - not too much a few lumps ok", "leave to rest for a little bit", "melt more butter and use brush to apply a hearty amount to hot pan", "dollop a circle of batter on pan", "leave til bubbles appear on top then try and flip gently", "when done paint with a bit more melted butter between each one and transfer to warm oven to wait"];

createNewRecipe(newRecipeHeading, newRecipeStepsArray);


// const recipeHeading = document.createElement("p");
// recipeHeading.textContent = "Make Pancakes - So Yummy";
// const newRecipeSteps = document.createElement("ol");
// const recipeStepsArray=["assemble ingredients: flour 135g, 1 egg, 1/2 tsp salt, 1 tsp bicarb, 2 tbs sugar, 2 tbs melted butter 130ml milk.", "mix all in bowl - not too much a few lumps ok", "leave to rest for a little bit", "melt more butter and use brush to apply a hearty amount to hot pan", "dollop a circle of batter on pan", "leave til bubbles appear on top then try and flip gently", "when done paint with a bit more melted butter between each one and transfer to warm oven to wait"];
// recipeStepsArray.forEach(item => {
//     const arrayItem = document.createElement("li");
//     arrayItem.textContent = item;
//     newRecipeSteps.appendChild(arrayItem);
// });
// document.querySelector("body").append(recipeHeading);
// document.querySelector("body").append(newRecipeSteps);