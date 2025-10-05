// DOM Elements
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const recipeModal = document.getElementById('recipeModal');

// Recipe Data
const recipes = {
    1: {
        title: 'Dragon Cookies',
        image: 'b/Dargon.jpg',
        description: 'Dragon cookies are inspired by legendary dragons. The cookies are crispy outside and soft inside, with a sweet-tart flavor and beautiful golden-red dragon scale colors.',
        ingredients: [
            'All-purpose flour 200g',
            'Fresh butter 100g',
            'Granulated sugar 80g',
            '1 egg',
            'Golden and red food coloring',
            'Baking powder 1 tsp',
            'Salt 1/4 tsp',
            'Vanilla extract 1 tsp'
        ],
        instructions: [
            'Mix butter and sugar until fluffy',
            'Add egg and vanilla extract, mix well',
            'Sift flour, baking powder, and salt together',
            'Combine flour with other ingredients until smooth dough',
            'Divide dough into 2 parts, add golden and red coloring',
            'Shape into dragon forms as desired',
            'Bake at 180°C for 12-15 minutes',
            'Cool before serving'
        ]
    },
    2: {
        title: 'Dragon Cake',
        image: 'b/Dargonranbo.jpg',
        description: 'Dragon cake is a complex and luxurious dessert. The cake has a velvety smooth texture with diverse flavors and is beautifully decorated like a flying dragon.',
        ingredients: [
            'Cake flour 300g',
            'Fresh butter 150g',
            'Granulated sugar 120g',
            '3 eggs',
            'Cream cheese 200g',
            'Purple and gold food coloring',
            'Baking powder 2 tsp',
            'Fresh milk 100ml',
            'Vanilla extract 2 tsp'
        ],
        instructions: [
            'Preheat oven to 170°C',
            'Cream butter and sugar until light and fluffy',
            'Add eggs one at a time, beating well',
            'Mix flour and baking powder together',
            'Alternately add flour and milk, beating until combined',
            'Divide batter into 2 parts, add purple and gold coloring',
            'Pour batter into pan, bake for 25-30 minutes',
            'Make cream cheese frosting, spread and decorate',
            'Chill for 2 hours before serving'
        ]
    },
    3: {
        title: 'Fire Dessert',
        image: 'b/fier.jpg',
        description: 'Fire dessert is inspired by magical flames. The dessert is warm with a slight spiciness, offering intense and exciting flavors.',
        ingredients: [
            'Puff pastry 250g',
            'Fresh butter 120g',
            'Granulated sugar 100g',
            'Cayenne pepper 1 tsp',
            'Ground cinnamon 1 tsp',
            'Red and orange food coloring',
            '1 egg',
            'Fresh milk 50ml',
            'Baking powder 1 tsp'
        ],
        instructions: [
            'Mix butter and sugar until combined',
            'Add egg, milk, and spices',
            'Sift flour and baking powder together',
            'Combine flour with other ingredients',
            'Divide dough, add red and orange coloring',
            'Shape into flame forms',
            'Bake at 190°C for 15-18 minutes',
            'Serve while still warm'
        ]
    },
    4: {
        title: 'Enchanted Deer Dessert',
        image: 'b/randear.jpg',
        description: 'Enchanted deer dessert is inspired by deer in enchanted forests. The dessert has a soft texture with natural flavors and the fragrant aroma of wild herbs.',
        ingredients: [
            'All-purpose flour 200g',
            'Fresh butter 100g',
            'Granulated sugar 80g',
            '10 mint leaves',
            'Honey 2 tbsp',
            'Natural green food coloring',
            '1 egg',
            'Baking powder 1 tsp',
            'Salt 1/4 tsp'
        ],
        instructions: [
            'Grind mint leaves until fine',
            'Mix butter, sugar, and honey',
            'Add egg and ground mint leaves',
            'Sift flour, baking powder, and salt',
            'Combine flour with other ingredients',
            'Add natural green coloring',
            'Shape into deer forms',
            'Bake at 175°C for 20 minutes',
            'Cool and serve'
        ]
    },
    5: {
        title: 'Ice Spider Dessert',
        image: 'b/spiderice.jpg',
        description: 'Ice spider dessert is cold and crispy. The dessert resembles clear ice with sweet cold flavors and the shape of an ice spider.',
        ingredients: [
            'Crushed ice 300g',
            'Granulated sugar 150g',
            'Blue and silver food coloring',
            'Vanilla extract 1 tsp',
            'Gelatin 10g',
            'Water 200ml',
            'Fresh cream 100ml',
            'Syrup 50ml'
        ],
        instructions: [
            'Dissolve gelatin in hot water',
            'Mix sugar, syrup, and vanilla extract',
            'Divide mixture, add blue and silver coloring',
            'Pour into spider-shaped molds',
            'Freeze for 2 hours',
            'Mix crushed ice with fresh cream',
            'Remove dessert from molds',
            'Serve with crushed ice'
        ]
    },
    6: {
        title: 'Magic Wheel Dessert',
        image: 'b/whell.jpg',
        description: 'Magic wheel dessert is complex and possesses magical powers. The dessert has multiple layers with diverse flavors, like a wheel of fortune.',
        ingredients: [
            'Cake flour 400g',
            'Fresh butter 200g',
            'Granulated sugar 150g',
            '4 eggs',
            'Dark chocolate 100g',
            'Purple, gold, and silver food coloring',
            'Baking powder 2 tsp',
            'Fresh milk 150ml',
            'Fresh cream 200ml'
        ],
        instructions: [
            'Preheat oven to 160°C',
            'Cream butter and sugar until fluffy',
            'Add eggs one at a time, beating well',
            'Sift flour and baking powder',
            'Alternately add flour and milk',
            'Divide batter into 3 parts, add purple, gold, and silver coloring',
            'Pour batter in layers into round pan',
            'Bake for 30-35 minutes',
            'Make chocolate cream, frost the cake',
            'Decorate as a magic wheel'
        ]
    }
};

// Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Update active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
});

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Open recipe modal
function openRecipeModal(recipeId) {
    const recipe = recipes[recipeId];
    if (!recipe) return;
    
    // Update modal content
    document.getElementById('modalTitle').textContent = recipe.title;
    document.getElementById('modalImage').src = recipe.image;
    document.getElementById('modalImage').alt = recipe.title;
    document.getElementById('modalDescription').textContent = recipe.description;
    
    // Update ingredients
    const ingredientsList = document.getElementById('modalIngredients');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    
    // Update instructions
    const instructionsList = document.getElementById('modalInstructions');
    instructionsList.innerHTML = '';
    recipe.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });
    
    // Show modal
    recipeModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add animation
    setTimeout(() => {
        recipeModal.querySelector('.modal-content').style.transform = 'scale(1)';
        recipeModal.querySelector('.modal-content').style.opacity = '1';
    }, 10);
}

// Close recipe modal
function closeRecipeModal() {
    const modalContent = recipeModal.querySelector('.modal-content');
    modalContent.style.transform = 'scale(0.8)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        recipeModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Close modal when clicking outside
recipeModal.addEventListener('click', (e) => {
    if (e.target === recipeModal || e.target.classList.contains('modal-overlay')) {
        closeRecipeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && recipeModal.style.display === 'block') {
        closeRecipeModal();
    }
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(111, 66, 193, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const magicElements = document.querySelectorAll('.magic-circle, .magic-sparkle');
    
    if (hero && scrolled < window.innerHeight) {
        magicElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }
});

// Add hover effects to recipe cards
document.addEventListener('DOMContentLoaded', () => {
    const recipeCards = document.querySelectorAll('.recipe-card');
    
    recipeCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero elements
    const heroElements = document.querySelectorAll('.hero-text, .hero-image');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial styles for animations
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(50px)';
        heroText.style.transition = 'all 0.8s ease';
    }
    
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateY(50px)';
        heroImage.style.transition = 'all 0.8s ease 0.2s';
    }
    
    // Animate recipe cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const recipeCards = document.querySelectorAll('.recipe-card');
    recipeCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Add magic sparkle effect on click
document.addEventListener('click', (e) => {
    if (e.target.closest('.btn, .recipe-card, .social-link')) {
        createSparkle(e.pageX, e.pageY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'sparkle 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add CSS for sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);