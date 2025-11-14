// Admin/Content Management Functions
let editingRecipeId = null;

// Load recipes from localStorage or use default
function loadRecipes() {
    const saved = localStorage.getItem('magicalRecipes');
    if (saved) {
        return JSON.parse(saved);
    }
    return recipes; // Use recipes from script.js
}

// Save recipes to localStorage
function saveRecipes(recipesToSave) {
    localStorage.setItem('magicalRecipes', JSON.stringify(recipesToSave));
}

// Display recipes in admin panel
function displayAdminRecipes() {
    const recipes = loadRecipes();
    const container = document.getElementById('adminRecipesList');
    
    if (recipes.length === 0) {
        container.innerHTML = '<div class="no-results">No recipes found. Add your first recipe!</div>';
        return;
    }
    
    container.innerHTML = recipes.map(recipe => `
        <div class="admin-recipe-card">
            <div class="admin-recipe-header">
                <div class="admin-recipe-icon">
                    ${recipe.image ? `<img src="img/${recipe.image}" alt="${recipe.title}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 10px;">` : (recipe.illustration || getEmoji(recipe.category))}
                </div>
                <div class="admin-recipe-info">
                    <h3>${recipe.title}</h3>
                    <div class="admin-recipe-meta">
                        <span class="recipe-category">${getCategoryName(recipe.category)}</span>
                        <span class="recipe-difficulty">${getDifficultyStars(recipe.difficulty)} ${getDifficultyName(recipe.difficulty)}</span>
                    </div>
                </div>
            </div>
            <div class="admin-recipe-actions">
                <button class="edit-btn" onclick="editRecipe(${recipe.id})">✏️ Edit</button>
                <button class="delete-btn" onclick="deleteRecipe(${recipe.id})">🗑️ Delete</button>
            </div>
        </div>
    `).join('');
}

// Show add recipe form
function showAddRecipeForm() {
    editingRecipeId = null;
    showRecipeForm();
}

// Show edit recipe form
function editRecipe(id) {
    const recipes = loadRecipes();
    editingRecipeId = id;
    showRecipeForm(recipes.find(r => r.id === id));
}

// Show recipe form modal
function showRecipeForm(recipe = null) {
    const modal = document.getElementById('recipeFormModal');
    const formBody = document.getElementById('recipeFormBody');
    
    const isEdit = recipe !== null;
    
    formBody.innerHTML = `
        <h2>${isEdit ? 'Edit' : 'Add'} Recipe</h2>
        <form id="recipeForm" onsubmit="saveRecipe(event)">
            <div class="form-group">
                <label>Title *</label>
                <input type="text" name="title" value="${recipe?.title || ''}" required>
            </div>
            
            <div class="form-group">
                <label>Category *</label>
                <select name="category" required>
                    <option value="cakes" ${recipe?.category === 'cakes' ? 'selected' : ''}>Cakes</option>
                    <option value="cookies" ${recipe?.category === 'cookies' ? 'selected' : ''}>Cookies</option>
                    <option value="puddings" ${recipe?.category === 'puddings' ? 'selected' : ''}>Puddings</option>
                    <option value="brownies" ${recipe?.category === 'brownies' ? 'selected' : ''}>Brownies</option>
                    <option value="desserts" ${recipe?.category === 'desserts' ? 'selected' : ''}>Desserts</option>
                    <option value="candy" ${recipe?.category === 'candy' ? 'selected' : ''}>Candy</option>
                </select>
            </div>
            
            <div class="form-group">
                <label>Difficulty *</label>
                <select name="difficulty" required>
                    <option value="1" ${recipe?.difficulty === 1 ? 'selected' : ''}>⭐ Easy</option>
                    <option value="2" ${recipe?.difficulty === 2 ? 'selected' : ''}>⭐⭐ Medium</option>
                    <option value="3" ${recipe?.difficulty === 3 ? 'selected' : ''}>⭐⭐⭐ Hard</option>
                    <option value="4" ${recipe?.difficulty === 4 ? 'selected' : ''}>⭐⭐⭐⭐ Expert</option>
                </select>
            </div>

            <div class="form-group">
                <label>Servings</label>
                <input type="number" name="servings" min="1" value="${recipe?.servings || 8}">
                <small class="form-hint">Estimated number of portions this recipe makes</small>
            </div>

            <div class="form-group">
                <label>Nutrition (per serving · optional)</label>
                <div class="nutrition-admin-grid">
                    <div>
                        <label>Calories (kcal)</label>
                        <input type="number" step="1" min="0" name="nutritionCalories" value="${recipe?.nutrition?.perServing?.calories ?? ''}">
                    </div>
                    <div>
                        <label>Carbs (g)</label>
                        <input type="number" step="0.1" min="0" name="nutritionCarbs" value="${recipe?.nutrition?.perServing?.carbs ?? ''}">
                    </div>
                    <div>
                        <label>Protein (g)</label>
                        <input type="number" step="0.1" min="0" name="nutritionProtein" value="${recipe?.nutrition?.perServing?.protein ?? ''}">
                    </div>
                    <div>
                        <label>Fat (g)</label>
                        <input type="number" step="0.1" min="0" name="nutritionFat" value="${recipe?.nutrition?.perServing?.fat ?? ''}">
                    </div>
                    <div>
                        <label>Sugar (g)</label>
                        <input type="number" step="0.1" min="0" name="nutritionSugar" value="${recipe?.nutrition?.perServing?.sugar ?? ''}">
                    </div>
                </div>
                <small class="form-hint">Leave blank to auto-estimate from ingredients, or fill to override manually.</small>
            </div>
            
            <div class="form-group">
                <label>Description *</label>
                <textarea name="description" rows="2" required>${recipe?.description || ''}</textarea>
            </div>
            
            <div class="form-group">
                <label>Concept</label>
                <textarea name="concept" rows="2">${recipe?.concept || ''}</textarea>
            </div>
            
            <div class="form-group">
                <label>Illustration (Emoji)</label>
                <input type="text" name="illustration" value="${recipe?.illustration || ''}" placeholder="🐉✨">
            </div>
            
            <div class="form-group">
                <label>Image</label>
                <select name="image" id="imageSelect">
                    <option value="">None (use emoji)</option>
                    <option value="Dragon Cake.png" ${recipe?.image === 'Dragon Cake.png' ? 'selected' : ''}>Dragon Cake</option>
                    <option value="Dragon Cookies.png" ${recipe?.image === 'Dragon Cookies.png' ? 'selected' : ''}>Dragon Cookies</option>
                    <option value="Fire Desserts.png" ${recipe?.image === 'Fire Desserts.png' ? 'selected' : ''}>Fire Desserts</option>
                    <option value="Bewitched Brownies.png" ${recipe?.image === 'Bewitched Brownies.png' ? 'selected' : ''}>Bewitched Brownies</option>
                    <option value="Crystal Candy.png" ${recipe?.image === 'Crystal Candy.png' ? 'selected' : ''}>Crystal Candy</option>
                    <option value="Starry Night Pudding.png" ${recipe?.image === 'Starry Night Pudding.png' ? 'selected' : ''}>Starry Night Pudding</option>
                </select>
                <small class="form-hint">Select an image from the img folder</small>
            </div>
            
            <div class="form-group">
                <label>Spell Chant</label>
                <textarea name="spellChant" rows="2">${recipe?.spellChant || ''}</textarea>
            </div>
            
            <div class="form-group">
                <label>Ingredients (one per line) *</label>
                <textarea name="ingredients" rows="5" required>${recipe?.ingredients?.join('\n') || ''}</textarea>
            </div>
            
            <div class="form-group">
                <label>Magical Ingredients (one per line)</label>
                <textarea name="magicalIngredients" rows="3">${recipe?.magicalIngredients?.join('\n') || ''}</textarea>
            </div>
            
            <div class="form-group">
                <label>Instructions (one per line) *</label>
                <textarea name="instructions" rows="6" required>${recipe?.instructions?.join('\n') || ''}</textarea>
            </div>
            
            <div class="form-group">
                <label>Ambience</label>
                <textarea name="ambience" rows="3" placeholder="Describe the atmosphere, mood, or setting for this recipe...">${recipe?.ambience || ''}</textarea>
                <small class="form-hint">The magical atmosphere or mood this recipe creates</small>
            </div>
            
            <div class="form-group">
                <label>Sources</label>
                <textarea name="sources" rows="3" placeholder="Recipe sources, references, or credits...">${recipe?.sources || ''}</textarea>
                <small class="form-hint">Where this recipe came from or was inspired by</small>
            </div>
            
            <div class="form-actions">
                <button type="submit" class="save-btn">💾 ${isEdit ? 'Update' : 'Save'} Recipe</button>
                <button type="button" class="cancel-btn" onclick="closeRecipeForm()">Cancel</button>
            </div>
        </form>
    `;
    
    modal.style.display = 'block';
}

// Close recipe form
function closeRecipeForm() {
    document.getElementById('recipeFormModal').style.display = 'none';
    editingRecipeId = null;
}

// Save recipe
function saveRecipe(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    const recipes = loadRecipes();
    // Get existing recipe if editing
    const existingRecipe = editingRecipeId ? recipes.find(r => r.id === editingRecipeId) : null;
    
    const recipeData = {
        id: editingRecipeId || Math.max(...recipes.map(r => r.id), 0) + 1,
        title: formData.get('title'),
        category: formData.get('category'),
        difficulty: parseInt(formData.get('difficulty')),
        servings: parseInt(formData.get('servings')) || 8,
        description: formData.get('description'),
        concept: formData.get('concept') || formData.get('description'),
        illustration: formData.get('illustration') || '',
        image: formData.get('image') || '',
        spellChant: formData.get('spellChant') || '',
        ingredients: formData.get('ingredients').split('\n').filter(i => i.trim()),
        magicalIngredients: formData.get('magicalIngredients') ? 
            formData.get('magicalIngredients').split('\n').filter(i => i.trim()) : [],
        instructions: formData.get('instructions').split('\n').filter(i => i.trim()),
        ambience: formData.get('ambience') || '',
        sources: formData.get('sources') || '',
        ingredientOrigins: existingRecipe?.ingredientOrigins || {} // Preserve existing or create new
    };

    const manualNutritionInputs = {
        calories: parseFloat(formData.get('nutritionCalories')),
        carbs: parseFloat(formData.get('nutritionCarbs')),
        protein: parseFloat(formData.get('nutritionProtein')),
        fat: parseFloat(formData.get('nutritionFat')),
        sugar: parseFloat(formData.get('nutritionSugar'))
    };

    const hasManualNutrition = Object.values(manualNutritionInputs).some(value => !isNaN(value));

    if (hasManualNutrition) {
        const perServing = {};
        const total = {};
        Object.entries(manualNutritionInputs).forEach(([key, value]) => {
            const safeValue = isNaN(value) ? 0 : value;
            perServing[key] = Math.round(safeValue);
            total[key] = Math.round(safeValue * recipeData.servings);
        });

        recipeData.nutrition = {
            perServing,
            total,
            confidence: 100,
            source: 'manual'
        };
    } else if (typeof analyzeNutrition === 'function') {
        recipeData.nutrition = analyzeNutrition(recipeData);
    } else {
        recipeData.nutrition = existingRecipe?.nutrition || null;
    }
    
    if (editingRecipeId) {
        // Update existing recipe
        const index = recipes.findIndex(r => r.id === editingRecipeId);
        if (index !== -1) {
            recipes[index] = recipeData;
        }
    } else {
        // Add new recipe
        recipes.push(recipeData);
    }
    
    saveRecipes(recipes);
    displayAdminRecipes();
    closeRecipeForm();
    
    // Update recipes in script.js if on main page
    if (typeof window.recipes !== 'undefined') {
        window.recipes = recipes;
    }
}

// Delete recipe
function deleteRecipe(id) {
    if (!confirm('Are you sure you want to delete this recipe?')) {
        return;
    }
    
    const recipes = loadRecipes();
    const filtered = recipes.filter(r => r.id !== id);
    saveRecipes(filtered);
    displayAdminRecipes();
    
    // Update recipes in script.js if on main page
    if (typeof window.recipes !== 'undefined') {
        window.recipes = filtered;
    }
}

// Initialize admin page
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        requireAuth();
        displayAdminRecipes();
    });
} else {
    requireAuth();
    displayAdminRecipes();
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('recipeFormModal');
    if (e.target === modal) {
        closeRecipeForm();
    }
});

