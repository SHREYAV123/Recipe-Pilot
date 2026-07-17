export function validateRecipe(recipe) {

    if (!recipe.title) return false;

    if (!recipe.ingredients) return false;

    if (!recipe.steps) return false;

    return true;
}