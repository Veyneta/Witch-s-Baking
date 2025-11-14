// Magical Recipe Data
let recipes = [
    {
        id: 1,
        title: "Dragon Cake – Flaming Dragon Cake",
        category: "cakes",
        difficulty: 3,
        description: "A cake born from 'the flame of a dragon's heart', symbolizing courage and life force. Perfect for new beginnings or power-bestowing ceremonies.",
        concept: "This cake is born from 'the flame of a dragon's heart', representing courage and life force. Perfect for serving on days of new beginnings or power-bestowing ceremonies.",
        servings: 10,
        ingredients: [
            "Cake flour: 180g",
            "Baking powder: 1 tsp",
            "Granulated sugar: 120g",
            "Chicken eggs: 3",
            "Fresh milk: 100ml",
            "Melted butter: 100g",
            "Food coloring (red & orange)",
            "Chocolate chips: 50g"
        ],
        magicalIngredients: [
            "Dragon Flame Dust - collected from flame remnants of a dragon that just shed its scales in Emberfall Valley",
            "Dawn Dewdrop - collected only from morning dew that touches the first light of the sun",
            "Crimson Crystal Shard - crystals obtained by melting 'fire stones' with the sound of a phoenix flute"
        ],
        ingredientOrigins: {
            "Dragon Flame Dust": { magical: "Flame remnants from dragon scales in Emberfall Valley", real: "Cinnamon powder or red food coloring with a pinch of cayenne pepper" },
            "Dawn Dewdrop": { magical: "Morning dew touched by first sunlight", real: "Fresh lemon juice or orange blossom water" },
            "Crimson Crystal Shard": { magical: "Crystals from melted fire stones with phoenix flute sound", real: "Rock candy or sugar crystals with red food coloring" }
        },
        illustration: "🐉✨",
        image: "Dragon Cake.png",
        spellChant: "Ignis draconis, cor fortis, Rise with flame, shine with might! Let courage bake into light!",
        instructions: [
            "Prepare the ritual vessel (mixing bowl). Sprinkle a little Dragon Flame Dust and say 'By fire's breath, awaken!' to call warm energy into the kitchen.",
            "Mix dry ingredients: Sift cake flour, baking powder, and sugar together. Sprinkle some Crimson Crystal Shard.",
            "Mix liquids: In another bowl, add eggs, fresh milk, melted butter, and 3 drops of Dawn Dewdrop. Mix slowly while saying 'Let dawn's light blend within.'",
            "Combine both bowls. Mix until smooth. Swirl red and orange colors to create flame patterns.",
            "Bake at 180°C for 35 minutes. Before baking, raise the spatula and chant 'Ignis draconis!' while rotating it once counterclockwise.",
            "Decorate the cake with chocolate chips and crystal shards. When light hits, you'll see red sparkles like dragon scales."
        ]
    },
    {
        id: 2,
        title: "Dragon Cookies – Dragon Claw Cookies",
        category: "cookies",
        difficulty: 2,
        description: "Crispy cookies infused with dragon power. Helps summon 'courage and determination', perfect for travelers who need strength to fight despair.",
        concept: "Crispy cookies infused with dragon power. Helps summon 'courage and determination', perfect for travelers who need strength to fight despair.",
        servings: 16,
        ingredients: [
            "All-purpose flour: 200g",
            "Unsalted butter: 100g (room temperature)",
            "Brown sugar: 80g",
            "Chicken egg: 1",
            "Cocoa powder: 1 tbsp",
            "Chocolate chips: 50g",
            "Almond sticks"
        ],
        magicalIngredients: [
            "Silver Scale Dust - collected from silver dragon scales shed on moonless nights",
            "Moon's Tear - drops from forest flowers that absorb moonlight",
            "Frost Salt - from the peak of Frostspire Mountain in the northern realm"
        ],
        ingredientOrigins: {
            "Silver Scale Dust": { magical: "Silver dragon scales from moonless nights", real: "Edible silver dust or pearl dust for baking" },
            "Moon's Tear": { magical: "Drops from moonlight-absorbing forest flowers", real: "Vanilla extract or almond extract" },
            "Frost Salt": { magical: "From Frostspire Mountain peak in northern realm", real: "Sea salt flakes or Himalayan pink salt" }
        },
        illustration: "🍪🌙",
        image: "Dragon Cookies.png",
        spellChant: "Claw of courage, bite of might, Crisp as moonlight, guard my fight!",
        instructions: [
            "Mix butter, sugar, and egg together while softly chanting 'By moon's tear, blend and bind.'",
            "Add flour, cocoa powder, and Frost Salt.",
            "Mix in Silver Scale Dust, then shape into round balls.",
            "Place almond sticks on top to resemble claws.",
            "Bake at 170°C for 12-15 minutes. While baking, chant 'Rise, my courage, baked in flame!'"
        ]
    },
    {
        id: 3,
        title: "Fire Desserts – Flaming Fire Desserts",
        category: "desserts",
        difficulty: 2,
        description: "A dessert that provides fiery energy - used to summon 'courage and life force' on cold nights.",
        concept: "A dessert that provides fiery energy - used to summon 'courage and life force' on cold nights.",
        servings: 6,
        ingredients: [
            "Granulated sugar: 100g",
            "Water: 50ml",
            "Whipping cream: 50ml",
            "Butter: 30g",
            "Paprika powder: 1/4 tsp (a little for mild spiciness)"
        ],
        magicalIngredients: [
            "Cool Lava Essence - from the fire dragon cave beneath Emberfall Mountain",
            "Phoenix Ash - obtained from a phoenix that burned itself to open new eyes",
            "Dawnfire Shard - from the first flame of day in Lumina Valley"
        ],
        ingredientOrigins: {
            "Cool Lava Essence": { magical: "From fire dragon cave beneath Emberfall Mountain", real: "Caramel sauce or butterscotch extract" },
            "Phoenix Ash": { magical: "From phoenix that burned to open new eyes", real: "Edible gold dust or turmeric powder" },
            "Dawnfire Shard": { magical: "First flame of day in Lumina Valley", real: "Orange zest or orange extract" }
        },
        illustration: "🔥✨",
        image: "Fire Desserts.png",
        spellChant: "Flame of life, burn but not harm, Sweet fire, bring warmth and charm!",
        instructions: [
            "Boil sugar with water until it becomes golden caramel.",
            "Add butter, cream, and paprika powder. Mix until smooth.",
            "Drop in Cool Lava Essence and chant 'Calm the flame, sweeten the storm.'",
            "Sprinkle Phoenix Ash on the warm sauce. You'll see golden sparkles.",
            "Serve drizzled over ice cream or grilled fruits."
        ]
    },
    {
        id: 4,
        title: "Bewitched Brownies – Enchanted Brownies",
        category: "brownies",
        difficulty: 3,
        description: "Rich brownies with enchanting spells that make those who taste them feel 'confident in their own charm'.",
        concept: "Rich brownies with enchanting spells that make those who taste them feel 'confident in their own charm'.",
        servings: 12,
        ingredients: [
            "Dark chocolate: 150g",
            "Butter: 100g",
            "Granulated sugar: 120g",
            "Eggs: 2",
            "All-purpose flour: 80g",
            "Cocoa powder: 2 tbsp"
        ],
        magicalIngredients: [
            "Charmshadow Dust - from night butterflies in Moonveil Forest",
            "Midnight Essence - collected from midnight mist that passes through black jasmine flowers",
            "Dried Black Rose Petals - from the forbidden garden of the Witch of Westerfell"
        ],
        ingredientOrigins: {
            "Charmshadow Dust": { magical: "From night butterflies in Moonveil Forest", real: "Black cocoa powder or activated charcoal powder" },
            "Midnight Essence": { magical: "Midnight mist through black jasmine flowers", real: "Vanilla extract or jasmine extract" },
            "Dried Black Rose Petals": { magical: "From forbidden garden of Witch of Westerfell", real: "Edible rose petals or dried lavender" }
        },
        illustration: "✨🌙",
        image: "Bewitched Brownies.png",
        spellChant: "Sweet bewitchment, charm in bite, Dark as night, yet full of light.",
        instructions: [
            "Melt butter with chocolate while chanting 'Melt, not break, blend with grace.'",
            "Add sugar, eggs, flour, and cocoa. Mix until combined.",
            "Sprinkle Charmshadow Dust and dried black rose petals.",
            "Bake at 180°C for 25 minutes.",
            "Let cool, then cut into pieces. You may repeat the chant: 'Allure and magic, stay within!'"
        ]
    },
    {
        id: 5,
        title: "Crystal Candy – Magical Crystal Candy",
        category: "candy",
        difficulty: 2,
        description: "Candy that looks like crystal, representing 'purity and the power of light'.",
        concept: "Candy that looks like crystal, representing 'purity and the power of light'.",
        servings: 20,
        ingredients: [
            "Granulated sugar: 200g",
            "Water: 80ml",
            "Glucose syrup: 100ml",
            "Vanilla or fruit flavoring",
            "Food coloring as desired"
        ],
        magicalIngredients: [
            "Starlight Crystal - from starlight drops in clear night skies",
            "Rainbow Dust - from the tips of fairy wings that fly through rainbows",
            "Spring of Truth - from the ancient water source in the Forest of Truth"
        ],
        ingredientOrigins: {
            "Starlight Crystal": { magical: "Starlight drops in clear night skies", real: "Rock candy or clear hard candy" },
            "Rainbow Dust": { magical: "From fairy wing tips through rainbows", real: "Edible glitter or rainbow sprinkles" },
            "Spring of Truth": { magical: "Ancient water source in Forest of Truth", real: "Distilled water or spring water" }
        },
        illustration: "💎✨",
        image: "Crystal Candy.png",
        spellChant: "Shine and gleam, truth unseen, Sweet crystal, pure and clean!",
        instructions: [
            "Boil sugar, water, and glucose until it reaches 150°C.",
            "Add flavoring and food coloring.",
            "Drop in Starlight Crystal and Rainbow Dust while chanting 'Gleam within, shine without!'",
            "Pour into molds. Let cool until hard and clear."
        ]
    },
    {
        id: 6,
        title: "Starry Night Pudding – Starry Night Pudding",
        category: "puddings",
        difficulty: 2,
        description: "Smooth indigo pudding sparkling with stars, giving a feeling of peace and dreams.",
        concept: "Smooth indigo pudding sparkling with stars, giving a feeling of peace and dreams.",
        servings: 6,
        ingredients: [
            "Fresh milk: 250ml",
            "Whipping cream: 100ml",
            "Gelatin: 1 tsp",
            "Sugar: 2 tbsp",
            "Cocoa powder or vanilla"
        ],
        magicalIngredients: [
            "Star Dust Powder - from meteor tails that fall into water",
            "Dream Mist - from morning mist in the Valley of Dreams",
            "Night Sky Jelly - from fruits that grow under full moonlight"
        ],
        ingredientOrigins: {
            "Star Dust Powder": { magical: "From meteor tails falling into water", real: "Edible silver or blue glitter" },
            "Dream Mist": { magical: "Morning mist in Valley of Dreams", real: "Vanilla extract or lavender extract" },
            "Night Sky Jelly": { magical: "Fruits grown under full moonlight", real: "Blueberry jam or purple grape jelly" }
        },
        illustration: "🌙⭐",
        image: "Starry Night Pudding.png",
        spellChant: "Stars align, dreams entwine, Rest the soul, let hearts shine.",
        instructions: [
            "Warm milk, whipping cream, and sugar until hot (not boiling).",
            "Dissolve gelatin, then add cocoa powder or vanilla.",
            "Mix in Dream Mist and Star Dust while chanting 'Sleep in sweetness, shine in night.'",
            "Pour into cups. Chill for 2 hours.",
            "Sprinkle Night Sky Jelly on top."
        ]
    }
];

// ================== Nutrition Analysis Helpers ==================

const DEFAULT_SERVINGS = 8;
const unitMultipliers = {
    g: 1,
    gram: 1,
    grams: 1,
    ml: 1,
    milliliter: 1,
    milliliters: 1,
    tbsp: 15,
    tablespoon: 15,
    tablespoons: 15,
    tsp: 5,
    teaspoon: 5,
    teaspoons: 5,
    cup: 240,
    cups: 240,
    stick: 113,
    sticks: 113
};

const nutritionReference = [
    { aliases: ['flour', 'cake flour', 'all-purpose flour'], per100g: { calories: 364, carbs: 76, protein: 10, fat: 1, sugar: 0 } },
    { aliases: ['sugar', 'granulated sugar', 'brown sugar', 'rock candy'], per100g: { calories: 387, carbs: 100, protein: 0, fat: 0, sugar: 100 } },
    { aliases: ['butter'], per100g: { calories: 717, carbs: 0.1, protein: 1, fat: 81, sugar: 0 } },
    { aliases: ['milk', 'fresh milk'], per100g: { calories: 64, carbs: 5, protein: 3.4, fat: 3.5, sugar: 5 } },
    { aliases: ['egg', 'eggs', 'chicken egg'], per100g: { calories: 155, carbs: 1.1, protein: 13, fat: 11, sugar: 1.1 }, portion: 50 },
    { aliases: ['chocolate', 'dark chocolate', 'chocolate chips'], per100g: { calories: 546, carbs: 61, protein: 4.9, fat: 31, sugar: 48 } },
    { aliases: ['cocoa powder'], per100g: { calories: 228, carbs: 58, protein: 20, fat: 14, sugar: 1.8 } },
    { aliases: ['cream', 'whipping cream'], per100g: { calories: 345, carbs: 3, protein: 2, fat: 37, sugar: 3 } },
    { aliases: ['gelatin'], per100g: { calories: 335, carbs: 0, protein: 82, fat: 0, sugar: 0 } },
    { aliases: ['vanilla', 'vanilla extract'], per100g: { calories: 288, carbs: 13, protein: 0, fat: 0, sugar: 13 } },
    { aliases: ['paprika'], per100g: { calories: 289, carbs: 54, protein: 14, fat: 13, sugar: 10 } },
    { aliases: ['almond', 'almond sticks'], per100g: { calories: 579, carbs: 22, protein: 21, fat: 50, sugar: 4 } },
    { aliases: ['glucose syrup'], per100g: { calories: 316, carbs: 79, protein: 0, fat: 0, sugar: 79 } },
    { aliases: ['lemon juice', 'orange juice'], per100g: { calories: 22, carbs: 7, protein: 0.4, fat: 0.2, sugar: 2 } },
    { aliases: ['caramel', 'syrup'], per100g: { calories: 382, carbs: 95, protein: 0, fat: 0, sugar: 95 } },
    { aliases: ['oil'], per100g: { calories: 884, carbs: 0, protein: 0, fat: 100, sugar: 0 } }
];

function normalizeText(text) {
    return (text || '').toLowerCase();
}

function findNutritionEntry(text) {
    const normalized = normalizeText(text);
    return nutritionReference.find(entry =>
        entry.aliases.some(alias => normalized.includes(alias))
    );
}

function parseIngredientAmount(text) {
    const normalized = normalizeText(text);
    const numberMatch = normalized.match(/([\d\.\/]+)\s*(g|gram|grams|ml|milliliter|milliliters|tbsp|tablespoon|tablespoons|tsp|teaspoon|teaspoons|cup|cups|stick|sticks)/);
    if (numberMatch) {
        const valueRaw = numberMatch[1];
        const unit = numberMatch[2];
        const value = valueRaw.includes('/') ? evalFraction(valueRaw) : parseFloat(valueRaw);
        const multiplier = unitMultipliers[unit] || 1;
        return value * multiplier;
    }

    const pieceMatch = normalized.match(/(\d+)\s*(egg|eggs|piece|pieces)/);
    if (pieceMatch) {
        const count = parseFloat(pieceMatch[1]);
        return count * 50; // average egg weight
    }

    const defaultMatch = normalized.match(/(\d+)\s*(?:[a-z]+)/);
    if (defaultMatch) {
        return parseFloat(defaultMatch[1]) * 10;
    }

    return 100; // default assumption
}

function evalFraction(value) {
    if (value.includes('/')) {
        const [num, den] = value.split('/').map(parseFloat);
        if (!isNaN(num) && !isNaN(den) && den !== 0) {
            return num / den;
        }
    }
    return parseFloat(value) || 0;
}

function analyzeNutrition(recipe) {
    if (!recipe || !recipe.ingredients) {
        return {
            total: { calories: 0, carbs: 0, protein: 0, fat: 0, sugar: 0 },
            perServing: { calories: 0, carbs: 0, protein: 0, fat: 0, sugar: 0 },
            confidence: 0
        };
    }

    const totals = { calories: 0, carbs: 0, protein: 0, fat: 0, sugar: 0 };
    let matched = 0;

    recipe.ingredients.forEach(ingredient => {
        const entry = findNutritionEntry(ingredient);
        if (!entry) return;
        matched++;

        const amount = entry.portion || parseIngredientAmount(ingredient);
        const factor = amount / 100;
        totals.calories += entry.per100g.calories * factor;
        totals.carbs += entry.per100g.carbs * factor;
        totals.protein += entry.per100g.protein * factor;
        totals.fat += entry.per100g.fat * factor;
        totals.sugar += entry.per100g.sugar * factor;
    });

    const servings = recipe.servings || DEFAULT_SERVINGS;
    const perServing = {
        calories: totals.calories / servings,
        carbs: totals.carbs / servings,
        protein: totals.protein / servings,
        fat: totals.fat / servings,
        sugar: totals.sugar / servings
    };

    const roundValues = obj => Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, Math.round(value || 0)])
    );

    const confidence = recipe.ingredients.length
        ? Math.round((matched / recipe.ingredients.length) * 100)
        : 0;

    return {
        total: roundValues(totals),
        perServing: roundValues(perServing),
        confidence
    };
}

function enrichRecipeWithNutrition(recipe) {
    if (!recipe) return recipe;
    if (recipe.nutrition && recipe.nutrition.perServing) {
        return recipe;
    }
    const nutrition = analyzeNutrition(recipe);
    return { ...recipe, nutrition };
}

recipes = recipes.map(enrichRecipeWithNutrition);

const nutritionDisplayOrder = [
    { key: 'calories', label: 'Calories', unit: 'kcal' },
    { key: 'carbs', label: 'Carbs', unit: 'g' },
    { key: 'protein', label: 'Protein', unit: 'g' },
    { key: 'fat', label: 'Fat', unit: 'g' },
    { key: 'sugar', label: 'Sugar', unit: 'g' }
];

function renderNutritionSection(recipe, nutritionData) {
    if (!nutritionData || !nutritionData.perServing) {
        return '';
    }

    const servings = recipe.servings || DEFAULT_SERVINGS;
    const footerText = nutritionData.source === 'manual'
        ? 'Provided by admin · Accurate per latest update'
        : `Confidence: ${nutritionData.confidence || 0}% · Servings considered: ${servings}`;

    return `
        <div class="detail-section nutrition-section">
            <h3>Nutrition Snapshot <span>(per serving · approx.)</span></h3>
            <div class="nutrition-grid">
                ${nutritionDisplayOrder.map(item => `
                    <div class="nutrition-item">
                        <span class="nutrition-label">${item.label}</span>
                        <span class="nutrition-value">${typeof nutritionData.perServing[item.key] === 'number' ? nutritionData.perServing[item.key] : 0} ${item.unit}</span>
                    </div>
                `).join('')}
            </div>
            <p class="nutrition-confidence">${footerText}</p>
        </div>
    `;
}

function renderRatingSection(recipe) {
    const rating = getRecipeRating(recipe.id);
    const ratingScore = parseFloat(rating.score) || 0;
    const ratingCount = parseInt(rating.count) || 0;
    const userRating = parseInt(rating.userRating) || 0;
    const ratingPercent = getRatingPercentage(ratingScore);
    const ratingStars = ratingScore > 0 ? '⭐'.repeat(Math.round(ratingScore)) : '☆☆☆☆☆';

    return `
        <div class="detail-section">
            <h3>⭐ Popularity Rating</h3>
            <div class="rating-gauge-container">
                <div class="rating-gauge-header">
                    <span class="rating-gauge-title">Community Rating</span>
                    <span class="rating-gauge-score">${ratingScore.toFixed(1)} / 5.0</span>
                </div>
                <div class="rating-gauge-bar">
                    <div class="rating-gauge-fill" style="width: ${ratingPercent}%;"></div>
                </div>
                <div class="rating-gauge-stats">
                    <span>${ratingStars}</span>
                    <span>${ratingCount} review${ratingCount !== 1 ? 's' : ''}</span>
                </div>

                <div class="rating-interactive">
                    <div class="rating-interactive-title">Rate this recipe:</div>
                    <div class="rating-star-buttons">
                        ${[1, 2, 3, 4, 5].map(star => `
                            <button class="rating-star-btn ${userRating >= star ? 'active' : ''}"
                                    onclick="rateRecipe(${recipe.id}, ${star})"
                                    onmouseover="highlightStars(${recipe.id}, ${star})"
                                    onmouseout="resetStarHighlight(${recipe.id})">
                                ⭐
                            </button>
                        `).join('')}
                    </div>
                    ${userRating > 0 ? `
                        <div class="your-rating-display">
                            Your rating: ${userRating} star${userRating > 1 ? 's' : ''}
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// Get category name in English
function getCategoryName(category) {
    const names = {
        'cakes': 'Cakes',
        'cookies': 'Cookies',
        'puddings': 'Puddings',
        'pies': 'Pies',
        'ice-cream': 'Ice Cream',
        'brownies': 'Brownies',
        'desserts': 'Desserts',
        'candy': 'Candy'
    };
    return names[category] || category;
}

// Get difficulty stars
function getDifficultyStars(difficulty) {
    return '⭐'.repeat(difficulty);
}

// Get difficulty name
function getDifficultyName(difficulty) {
    const names = {
        1: 'Easy',
        2: 'Medium',
        3: 'Hard',
        4: 'Expert'
    };
    return names[difficulty] || '';
}

// Display recipes
function displayRecipes(recipesToShow) {
    const grid = document.getElementById('recipeGrid');
    
    if (recipesToShow.length === 0) {
        grid.innerHTML = '<div class="no-results">No recipes found</div>';
        return;
    }

    grid.innerHTML = recipesToShow.map(recipe => {
        const isFavorite = isRecipeFavorite(recipe.id);
        const nutritionData = recipe.nutrition || analyzeNutrition(recipe);
        const caloriesLabel = nutritionData?.perServing?.calories
            ? `${nutritionData.perServing.calories} kcal / serving`
            : 'Nutrition coming soon';
        const confidenceLabel = nutritionData?.source === 'manual'
            ? 'Admin curated'
            : (nutritionData?.confidence ? `${nutritionData.confidence}% match` : '');

        // Get rating data
        const rating = getRecipeRating(recipe.id);
        const ratingScore = parseFloat(rating.score) || 0;
        const ratingCount = parseInt(rating.count) || 0;
        const ratingPercent = getRatingPercentage(ratingScore);
        const ratingStars = ratingScore > 0 ? '⭐'.repeat(Math.round(ratingScore)) : '☆☆☆☆☆';

        return `
        <div class="recipe-card" onclick="showRecipe(${recipe.id})">
            <div class="recipe-image">
                ${recipe.image ? `<img src="img/${recipe.image}" alt="${recipe.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;">` : getEmoji(recipe.category)}
            </div>
            <div class="recipe-info">
                <div style="display: flex; justify-content: space-between; align-items: start; gap: 10px;">
                    <h3 class="recipe-title">${recipe.title}</h3>
                    <div class="recipe-actions" onclick="event.stopPropagation();">
                        <button class="bookmark-btn ${isFavorite ? 'favorited' : ''}" onclick="toggleFavorite(${recipe.id}); event.stopPropagation();" title="${isFavorite ? 'Remove from favorites' : 'Add to favorites'}">
                            ${isFavorite ? '⭐' : '☆'}
                        </button>
                        <button class="share-btn" onclick="shareRecipe(${recipe.id}); event.stopPropagation();" title="Share recipe">
                            📤
                        </button>
                    </div>
                </div>
                <div class="recipe-meta">
                    <span class="recipe-category">${getCategoryName(recipe.category)}</span>
                    <span class="recipe-difficulty">${getDifficultyStars(recipe.difficulty)} ${getDifficultyName(recipe.difficulty)}</span>
                </div>
                <p class="recipe-description">${recipe.description}</p>

                ${ratingCount > 0 ? `
                <div class="rating-gauge-container" onclick="event.stopPropagation();">
                    <div class="rating-gauge-header">
                        <span class="rating-gauge-title">Popularity Rating</span>
                        <span class="rating-gauge-score">${ratingScore.toFixed(1)} / 5.0</span>
                    </div>
                    <div class="rating-gauge-bar">
                        <div class="rating-gauge-fill" style="width: ${ratingPercent}%;"></div>
                    </div>
                    <div class="rating-gauge-stats">
                        <span>${ratingStars}</span>
                        <span>${ratingCount} review${ratingCount > 1 ? 's' : ''}</span>
                    </div>
                </div>
                ` : ''}

                <div class="nutrition-badge">
                    <strong>${caloriesLabel}</strong>
                    ${confidenceLabel ? `<span>${confidenceLabel}</span>` : ''}
                </div>
            </div>
        </div>
    `;
    }).join('');
}

// Get emoji for category
function getEmoji(category) {
    const emojis = {
        'cakes': '🐉',
        'cookies': '🍪',
        'puddings': '🌙',
        'pies': '🥧',
        'ice-cream': '🍦',
        'brownies': '✨',
        'desserts': '🔥',
        'candy': '💎'
    };
    return emojis[category] || '🍰';
}

// Show recipe details in modal
function showRecipe(id) {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    const modal = document.getElementById('recipeModal');
    const modalBody = document.getElementById('modalBody');
    const nutritionData = recipe.nutrition || analyzeNutrition(recipe);
    
    modalBody.innerHTML = `
        <div class="recipe-header-modal">
            <div class="recipe-illustration">
                ${recipe.image ? `<img src="img/${recipe.image}" alt="${recipe.title}" style="width: 120px; height: 120px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">` : (recipe.illustration || getEmoji(recipe.category))}
            </div>
            <div style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: start; gap: 10px;">
                    <div>
                        <h2>${recipe.title}</h2>
                        <div class="recipe-meta">
                            <span class="recipe-category">${getCategoryName(recipe.category)}</span>
                            <span class="recipe-difficulty">${getDifficultyStars(recipe.difficulty)} ${getDifficultyName(recipe.difficulty)}</span>
                        </div>
                    </div>
                    <div class="recipe-modal-actions" style="display: flex; gap: 10px;">
                        <button class="bookmark-btn ${isRecipeFavorite(recipe.id) ? 'favorited' : ''}" onclick="toggleFavorite(${recipe.id})" title="${isRecipeFavorite(recipe.id) ? 'Remove from favorites' : 'Add to favorites'}">
                            ${isRecipeFavorite(recipe.id) ? '⭐' : '☆'}
                        </button>
                        <button class="share-btn" onclick="shareRecipe(${recipe.id})" title="Share recipe">
                            📤 Share
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <p class="recipe-description"><strong>Concept:</strong> ${recipe.concept || recipe.description}</p>
        
        ${recipe.spellChant ? `<div class="spell-chant">✨ ${recipe.spellChant} ✨</div>` : ''}
        
        <div class="recipe-details">
            <div class="detail-section">
                <h3>Ingredients</h3>
                <ul>
                    ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
            </div>
            
            ${recipe.magicalIngredients ? `
            <div class="magical-ingredients">
                <h4>✨ Magical Ingredients ✨</h4>
                <ul>
                    ${recipe.magicalIngredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
            </div>
            ` : ''}
            
            ${recipe.ingredientOrigins ? `
            <div class="ingredient-origins">
                <h4>📖 Ingredient Origins & Real-World Equivalents</h4>
                ${Object.entries(recipe.ingredientOrigins).map(([name, origins]) => `
                    <div class="origin-item">
                        <strong>${name}:</strong>
                        <div class="origin-details">
                            <div class="origin-magical">✨ <em>Magical:</em> ${origins.magical}</div>
                            <div class="origin-real">🌍 <em>Real-World:</em> ${origins.real}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
            ` : ''}
            
            <div class="detail-section">
                <h3>Instructions (with Magic Steps)</h3>
                <ol>
                    ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
                </ol>
            </div>

            ${renderNutritionSection(recipe, nutritionData)}

            ${renderRatingSection(recipe)}

            ${recipe.ambience ? `
            <div class="detail-section">
                <h3>✨ Ambience</h3>
                <p class="ambience-text">${recipe.ambience}</p>
            </div>
            ` : ''}
            
            ${recipe.sources ? `
            <div class="detail-section">
                <h3>📚 Sources</h3>
                <p class="sources-text">${recipe.sources}</p>
            </div>
            ` : ''}
        </div>
    `;
    
    modal.style.display = 'block';
}

// Filter and Sort recipes
let currentCategory = 'all';
let currentDifficulty = 'all';
let currentSearch = '';
let currentSort = 'default';
let currentView = 'all'; // 'all' or 'favorites'

function sortRecipes(recipesToSort) {
    const sorted = [...recipesToSort];

    switch(currentSort) {
        case 'popularity':
            sorted.sort((a, b) => {
                const ratingA = getRecipeRating(a.id);
                const ratingB = getRecipeRating(b.id);

                const scoreA = parseFloat(ratingA.score) || 0;
                const scoreB = parseFloat(ratingB.score) || 0;
                const countA = parseInt(ratingA.count) || 0;
                const countB = parseInt(ratingB.count) || 0;

                // Sort by score first (higher is better)
                if (scoreB !== scoreA) {
                    return scoreB - scoreA;
                }

                // If scores are equal, sort by count (more reviews is better)
                return countB - countA;
            });
            break;
        case 'category':
            sorted.sort((a, b) => {
                const catA = getCategoryName(a.category);
                const catB = getCategoryName(b.category);
                return catA.localeCompare(catB);
            });
            break;
        case 'difficulty':
            sorted.sort((a, b) => a.difficulty - b.difficulty);
            break;
        case 'name':
            sorted.sort((a, b) => a.title.localeCompare(b.title));
            break;
        default:
            // Keep original order
            break;
    }

    return sorted;
}

function filterRecipes() {
    let filtered = recipes;

    // Filter by view (all or favorites)
    if (currentView === 'favorites') {
        const favorites = loadFavorites();
        filtered = filtered.filter(r => favorites.includes(r.id));
    }

    // Filter by category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(r => r.category === currentCategory);
    }

    // Filter by difficulty
    if (currentDifficulty !== 'all') {
        filtered = filtered.filter(r => r.difficulty === parseInt(currentDifficulty));
    }

    // Filter by search
    if (currentSearch) {
        const searchLower = currentSearch.toLowerCase();
        filtered = filtered.filter(r => 
            r.title.toLowerCase().includes(searchLower) ||
            r.description.toLowerCase().includes(searchLower) ||
            (r.concept && r.concept.toLowerCase().includes(searchLower)) ||
            getCategoryName(r.category).toLowerCase().includes(searchLower)
        );
    }

    // Sort recipes
    filtered = sortRecipes(filtered);

    displayRecipes(filtered);
}

// Set view filter (all or favorites)
function setViewFilter(view) {
    currentView = view;
    
    // Update button states
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.view === view) {
            btn.classList.add('active');
        }
    });
    
    filterRecipes();
}

// Make setViewFilter available globally
window.setViewFilter = setViewFilter;

// Load recipes from localStorage if available
function loadRecipesForDisplay() {
    const saved = localStorage.getItem('magicalRecipes');
    if (saved) {
        recipes = JSON.parse(saved).map(enrichRecipeWithNutrition);
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Load recipes from localStorage
    loadRecipesForDisplay();
    
    // Check if URL has recipe parameter and open it
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('recipe');
    if (recipeId) {
        // Wait a bit for recipes to load
        setTimeout(() => {
            showRecipe(parseInt(recipeId));
        }, 100);
    }
    
    // Display all recipes initially
    displayRecipes(recipes);

    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            filterRecipes();
        });
    });

    // Difficulty buttons
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentDifficulty = btn.dataset.difficulty;
            filterRecipes();
        });
    });

    // Sort buttons
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSort = btn.dataset.sort;
            filterRecipes();
        });
    });

    // Search
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', () => {
        currentSearch = searchInput.value;
        filterRecipes();
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            currentSearch = searchInput.value;
            filterRecipes();
        }
    });

    // Real-time search
    searchInput.addEventListener('input', () => {
        currentSearch = searchInput.value;
        filterRecipes();
    });

    // Modal close
    const modal = document.getElementById('recipeModal');
    const closeBtn = document.querySelector('.close');

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Make showRecipe available globally
window.showRecipe = showRecipe;
window.analyzeNutrition = analyzeNutrition;
window.enrichRecipeWithNutrition = enrichRecipeWithNutrition;

// ========== Favorites/Bookmark Functions ==========

// Load favorites from localStorage
function loadFavorites() {
    const saved = localStorage.getItem('favoriteRecipes');
    return saved ? JSON.parse(saved) : [];
}

// Save favorites to localStorage
function saveFavorites(favorites) {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
}

// Check if recipe is favorite
function isRecipeFavorite(recipeId) {
    const favorites = loadFavorites();
    return favorites.includes(recipeId);
}

// Toggle favorite status
function toggleFavorite(recipeId) {
    const favorites = loadFavorites();
    const index = favorites.indexOf(recipeId);
    
    if (index > -1) {
        // Remove from favorites
        favorites.splice(index, 1);
        alert('Removed from favorites');
    } else {
        // Add to favorites
        favorites.push(recipeId);
        alert('Added to favorites');
    }
    
    saveFavorites(favorites);
    
    // Refresh display
    filterRecipes();
    
    // If modal is open, refresh it
    const modal = document.getElementById('recipeModal');
    if (modal && modal.style.display === 'block') {
        showRecipe(recipeId);
    }
}

// ========== Rating Functions ==========

// Generate or get session ID (unique per tab/window)
function getSessionId() {
    if (!window.sessionStorage.getItem('sessionId')) {
        window.sessionStorage.setItem('sessionId', 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9));
    }
    return window.sessionStorage.getItem('sessionId');
}

// Load global ratings from localStorage (shared across all sessions)
function loadGlobalRatings() {
    try {
        const saved = localStorage.getItem('recipeRatings');
        console.log('loadGlobalRatings - raw data:', saved);
        const parsed = saved ? JSON.parse(saved) : {};
        console.log('loadGlobalRatings - parsed:', parsed);
        return parsed;
    } catch (e) {
        console.error('Error loading global ratings:', e);
        return {};
    }
}

// Save global ratings to localStorage
function saveGlobalRatings(ratings) {
    localStorage.setItem('recipeRatings', JSON.stringify(ratings));
}

// Load session-specific ratings from sessionStorage
function loadSessionRatings() {
    const saved = sessionStorage.getItem('sessionRatings');
    return saved ? JSON.parse(saved) : {};
}

// Save session-specific ratings to sessionStorage
function saveSessionRatings(ratings) {
    sessionStorage.setItem('sessionRatings', JSON.stringify(ratings));
}

// Get recipe rating (combines global and session data)
function getRecipeRating(recipeId) {
    const globalRatings = loadGlobalRatings();
    const sessionRatings = loadSessionRatings();
    const sessionId = getSessionId();

    let globalData = globalRatings[recipeId] || {
        totalScore: 0,
        count: 0,
        sessions: {}
    };

    // Fix old data structure if needed
    if (!globalData.sessions || typeof globalData.sessions !== 'object') {
        globalData.sessions = {};
    }

    // Fix old structure that has 'score' instead of 'totalScore'
    if (typeof globalData.totalScore !== 'number' && typeof globalData.score === 'number') {
        globalData.totalScore = globalData.score * (globalData.count || 1);
    }

    const userRating = sessionRatings[recipeId] || 0;

    // Calculate score safely, ensure no NaN
    let score = 0;
    if (globalData.count > 0 && typeof globalData.totalScore === 'number') {
        score = globalData.totalScore / globalData.count;
    }

    // Ensure score is a valid number
    if (isNaN(score) || !isFinite(score) || score < 0) {
        score = 0;
    }

    console.log('getRecipeRating:', {
        recipeId,
        globalData,
        score,
        count: globalData.count,
        userRating,
        sessionId
    });

    return {
        score: score,
        count: globalData.count || 0,
        userRating: userRating || 0
    };
}

// Rate recipe (session-based)
function rateRecipe(recipeId, rating) {
    console.log('=== rateRecipe START ===');
    console.log('Input:', { recipeId, rating });

    if (rating < 1 || rating > 5) {
        alert('Please provide a rating between 1 and 5 stars');
        return;
    }

    const sessionId = getSessionId();
    const globalRatings = loadGlobalRatings();
    const sessionRatings = loadSessionRatings();

    console.log('Session ID:', sessionId);
    console.log('Current globalRatings:', JSON.stringify(globalRatings));
    console.log('Current sessionRatings:', JSON.stringify(sessionRatings));

    // Get current global data
    let current = globalRatings[recipeId] || {
        totalScore: 0,
        count: 0,
        sessions: {}
    };

    // Fix old data structure if needed
    if (!current.sessions || typeof current.sessions !== 'object') {
        console.warn('Fixing old data structure for recipe', recipeId);
        current.sessions = {};
    }

    // Fix old structure that doesn't have totalScore
    if (typeof current.totalScore !== 'number' && typeof current.score === 'number') {
        console.warn('Converting old score format for recipe', recipeId);
        const oldScore = current.score;
        const oldCount = current.count || 1;
        current.totalScore = oldScore * oldCount;
        current.count = oldCount; // Keep the count
        delete current.score;
        delete current.userRating; // Remove from global storage

        // Save the fixed structure immediately
        globalRatings[recipeId] = current;
        saveGlobalRatings(globalRatings);
        console.log(`Converted recipe ${recipeId}: score=${oldScore}, count=${oldCount} -> totalScore=${current.totalScore}`);
    }

    // If count is 0 but we have totalScore, something went wrong - try to recover
    if (current.count === 0 && current.totalScore > 0) {
        console.warn(`Recipe ${recipeId}: count is 0 but totalScore is ${current.totalScore} - recovering`);
        // Assume it was a single rating
        current.count = 1;
        globalRatings[recipeId] = current;
        saveGlobalRatings(globalRatings);
    }

    console.log('Current recipe data:', JSON.stringify(current));

    // Get previous rating from this session
    const previousRating = sessionRatings[recipeId] || 0;
    const previousSessionRating = current.sessions[sessionId] || 0;

    console.log('Previous ratings:', {
        previousRating,
        previousSessionRating,
        hasRatedBefore: previousSessionRating > 0
    });

    if (previousSessionRating > 0) {
        // User already rated in this session - update the rating
        console.log('Updating existing rating');
        current.totalScore = current.totalScore - previousSessionRating + rating;
        current.sessions[sessionId] = rating;
    } else {
        // New rating from this session
        console.log('Adding new rating');
        current.totalScore = (current.totalScore || 0) + rating;
        current.count = (current.count || 0) + 1;
        current.sessions[sessionId] = rating;
    }

    console.log('Updated recipe data:', JSON.stringify(current));
    console.log('Calculated average:', current.totalScore / current.count);

    // Save to localStorage (global)
    globalRatings[recipeId] = current;
    saveGlobalRatings(globalRatings);

    // Save to sessionStorage (this tab only)
    sessionRatings[recipeId] = rating;
    saveSessionRatings(sessionRatings);

    console.log('After save - globalRatings:', JSON.stringify(loadGlobalRatings()));
    console.log('After save - sessionRatings:', JSON.stringify(loadSessionRatings()));
    console.log('=== rateRecipe END ===');

    // Refresh display
    filterRecipes();

    // If modal is open, refresh it
    const modal = document.getElementById('recipeModal');
    if (modal && modal.style.display === 'block') {
        showRecipe(recipeId);
    }

    if (previousRating > 0) {
        alert(`You updated your rating to ${rating} stars!`);
    } else {
        alert(`You rated this recipe ${rating} stars!`);
    }
}

// Get rating percentage (0-100) for gauge
function getRatingPercentage(rating) {
    return (rating / 5) * 100;
}

// Get rating color based on score
function getRatingColor(rating) {
    if (rating >= 4.5) return '#10b981'; // green
    if (rating >= 4.0) return '#84cc16'; // lime
    if (rating >= 3.5) return '#fbbf24'; // yellow
    if (rating >= 3.0) return '#fb923c'; // orange
    return '#ef4444'; // red
}

// ========== Share Functions ==========

// Share recipe
function shareRecipe(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    // Create share menu
    const shareMenu = document.createElement('div');
    shareMenu.className = 'share-menu';
    shareMenu.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        z-index: 10000;
        max-width: 500px;
        width: 90%;
    `;
    
    shareMenu.innerHTML = `
        <h3 style="margin-top: 0; color: #333;">Share: ${recipe.title}</h3>
        <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
            <button onclick="shareViaURL(${recipeId})" style="padding: 12px; background: #7e22ce; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px;">
                🔗 Copy Shareable Link
            </button>
            <button onclick="shareViaText(${recipeId})" style="padding: 12px; background: #2a5298; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px;">
                📋 Copy Recipe Text
            </button>
            <button onclick="shareViaJSON(${recipeId})" style="padding: 12px; background: #1e3c72; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px;">
                📄 Export as JSON
            </button>
            <button onclick="closeShareMenu()" style="padding: 12px; background: #ccc; color: #333; border: none; border-radius: 8px; cursor: pointer; font-size: 16px;">
                Cancel
            </button>
        </div>
    `;
    
    document.body.appendChild(shareMenu);
}

// Close share menu
function closeShareMenu() {
    const menu = document.querySelector('.share-menu');
    if (menu) menu.remove();
}

// Share via URL
function shareViaURL(recipeId) {
    const url = `${window.location.origin}${window.location.pathname}?recipe=${recipeId}`;
    navigator.clipboard.writeText(url).then(() => {
        alert('Shareable link copied to clipboard!');
        closeShareMenu();
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Shareable link copied to clipboard!');
        closeShareMenu();
    });
}

// Share via text
function shareViaText(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    let text = `✨ ${recipe.title} ✨\n\n`;
    text += `Category: ${getCategoryName(recipe.category)}\n`;
    text += `Difficulty: ${getDifficultyStars(recipe.difficulty)} ${getDifficultyName(recipe.difficulty)}\n\n`;
    text += `Description: ${recipe.description}\n\n`;
    
    if (recipe.concept) {
        text += `Concept: ${recipe.concept}\n\n`;
    }
    
    if (recipe.spellChant) {
        text += `Spell Chant: ${recipe.spellChant}\n\n`;
    }
    
    text += `Ingredients:\n`;
    recipe.ingredients.forEach(ing => {
        text += `- ${ing}\n`;
    });
    
    if (recipe.magicalIngredients && recipe.magicalIngredients.length > 0) {
        text += `\n✨ Magical Ingredients:\n`;
        recipe.magicalIngredients.forEach(ing => {
            text += `- ${ing}\n`;
        });
    }
    
    text += `\nInstructions:\n`;
    recipe.instructions.forEach((inst, idx) => {
        text += `${idx + 1}. ${inst}\n`;
    });
    
    if (recipe.ambience) {
        text += `\n✨ Ambience: ${recipe.ambience}\n`;
    }
    
    if (recipe.sources) {
        text += `\n📚 Sources: ${recipe.sources}\n`;
    }
    
    navigator.clipboard.writeText(text).then(() => {
        alert('Recipe text copied to clipboard!');
        closeShareMenu();
    }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Recipe text copied to clipboard!');
        closeShareMenu();
    });
}

// Share via JSON
function shareViaJSON(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    const json = JSON.stringify(recipe, null, 2);
    
    navigator.clipboard.writeText(json).then(() => {
        alert('Recipe JSON copied to clipboard!');
        closeShareMenu();
    }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = json;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Recipe JSON copied to clipboard!');
        closeShareMenu();
    });
}

// Highlight stars on hover
function highlightStars(recipeId, rating) {
    const buttons = document.querySelectorAll('.rating-star-btn');
    buttons.forEach((btn, index) => {
        if (index < rating) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Reset star highlight
function resetStarHighlight(recipeId) {
    const rating = getRecipeRating(recipeId);
    const buttons = document.querySelectorAll('.rating-star-btn');
    buttons.forEach((btn, index) => {
        if (rating.userRating > index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Detect incognito/private mode
function detectIncognitoMode() {
    return new Promise((resolve) => {
        // Check if localStorage is empty but we're trying to load ratings
        const globalRatings = loadGlobalRatings();
        const hasNoRatings = Object.keys(globalRatings).length === 0;

        // If we have no ratings, show a helpful message
        if (hasNoRatings) {
            // Try to detect private mode using various methods
            if ('storage' in navigator && 'estimate' in navigator.storage) {
                navigator.storage.estimate().then(estimate => {
                    // Private mode typically has very limited quota
                    const isLikelyPrivate = estimate.quota < 120000000; // Less than 120MB typically means private
                    resolve(isLikelyPrivate);
                });
            } else {
                resolve(false); // Can't determine
            }
        } else {
            resolve(false); // Has ratings, so probably not a fresh private session
        }
    });
}

// Show incognito mode warning if detected
function showIncognitoWarning() {
    detectIncognitoMode().then(isPrivate => {
        const warningDiv = document.getElementById('privateModeWarning');
        if (!warningDiv) return;

        const globalRatings = loadGlobalRatings();
        const hasNoRatings = Object.keys(globalRatings).length === 0;

        // Show warning if we have no ratings (regardless of whether we detected private mode)
        if (hasNoRatings) {
            warningDiv.style.display = 'block';
            warningDiv.className = 'info-banner';
            warningDiv.innerHTML = `
                <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
                            border-left: 4px solid #f59e0b;
                            padding: 15px 20px;
                            margin: 20px 0;
                            border-radius: 10px;
                            box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <strong>ℹ️ ไม่พบข้อมูลคะแนน / No Ratings Found</strong><br>
                    <div style="margin-top: 10px;">
                        ${isPrivate ?
                            '🔒 คุณอาจกำลังใช้โหมดไม่ระบุตัวตน (Incognito/Private mode)<br>' +
                            'ข้อมูลคะแนนจาก tab ปกติจะไม่แสดงในโหมดนี้ เนื่องจากเป็นการรักษาความปลอดภัย<br><br>' +
                            '<strong>วิธีแก้:</strong> คลิก "📦 Transfer Ratings" ด้านบน เพื่อย้ายข้อมูลคะแนนจาก tab ปกติมาที่โหมดนี้' :
                            'ยังไม่มีคะแนนความนิยมในระบบ<br>' +
                            'เริ่มให้คะแนนสูตรที่คุณชอบได้เลย! ⭐'
                        }
                    </div>
                    <div style="margin-top: 10px;">
                        <a href="rating-transfer.html" style="color: #667eea; font-weight: bold; text-decoration: underline;">
                            → ไปที่หน้า Transfer Ratings
                        </a>
                    </div>
                </div>
            `;
        }
    });
}

// Make functions available globally
window.toggleFavorite = toggleFavorite;
window.shareRecipe = shareRecipe;
window.shareViaURL = shareViaURL;
window.shareViaText = shareViaText;
window.shareViaJSON = shareViaJSON;
window.closeShareMenu = closeShareMenu;
window.rateRecipe = rateRecipe;
window.highlightStars = highlightStars;
window.resetStarHighlight = resetStarHighlight;

// Show incognito warning on page load if needed
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showIncognitoWarning);
} else {
    showIncognitoWarning();
}
