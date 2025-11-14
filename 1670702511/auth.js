// Authentication System
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'magic123';
const AUTH_KEY = 'magicalRecipeAuth';
const CURRENT_USER_KEY = 'magicalRecipeCurrentUser';
const USERS_KEY = 'magicalRecipeUsers';

// Initialize default admin user
function initializeUsers() {
    const users = getUsers();
    if (users.length === 0) {
        // Add default admin user
        const adminUser = {
            username: ADMIN_USERNAME,
            password: ADMIN_PASSWORD,
            email: 'admin@magicalrecipes.com',
            isAdmin: true,
            createdAt: new Date().toISOString()
        };
        users.push(adminUser);
        saveUsers(users);
    }
}

// Get all users
function getUsers() {
    const usersJson = localStorage.getItem(USERS_KEY);
    return usersJson ? JSON.parse(usersJson) : [];
}

// Save users
function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Get current logged in user
function getCurrentUser() {
    const userJson = localStorage.getItem(CURRENT_USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
}

// Set current logged in user
function setCurrentUser(user) {
    if (user) {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
        localStorage.setItem(AUTH_KEY, 'true');
    } else {
        localStorage.removeItem(CURRENT_USER_KEY);
        localStorage.removeItem(AUTH_KEY);
    }
}

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem(AUTH_KEY) === 'true' && getCurrentUser() !== null;
}

// Register new user
function register(username, password, email) {
    const users = getUsers();
    
    // Check if username already exists
    if (users.find(u => u.username === username)) {
        return { success: false, message: 'Username already exists!' };
    }
    
    // Check if email already exists
    if (email && users.find(u => u.email === email)) {
        return { success: false, message: 'Email already registered!' };
    }
    
    // Validate password length
    if (password.length < 6) {
        return { success: false, message: 'Password must be at least 6 characters!' };
    }
    
    // Validate username length
    if (username.length < 3) {
        return { success: false, message: 'Username must be at least 3 characters!' };
    }
    
    // Create new user
    const newUser = {
        username: username,
        password: password, // In production, this should be hashed
        email: email || '',
        isAdmin: false,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    saveUsers(users);
    
    return { success: true, message: 'Registration successful! You can now login.' };
}

// Login function
function login(username, password) {
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        setCurrentUser(user);
        return true;
    }
    return false;
}

// Logout function
function logout() {
    setCurrentUser(null);
    window.location.href = 'index.html';
}

// Require authentication (redirect to login if not logged in)
function requireAuth() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
    }
}

// Update UI based on login status
function updateAuthUI() {
    const isLoggedIn = localStorage.getItem(AUTH_KEY) === 'true';
    const loginBtn = document.getElementById('loginBtn');
    const adminBtn = document.getElementById('adminBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (loginBtn) {
        loginBtn.style.display = isLoggedIn ? 'none' : 'inline-block';
    }
    if (adminBtn) {
        adminBtn.style.display = isLoggedIn ? 'inline-block' : 'none';
    }
    if (logoutBtn) {
        logoutBtn.style.display = isLoggedIn ? 'inline-block' : 'none';
    }
}

// Initialize users on load
initializeUsers();

// Initialize auth UI on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateAuthUI);
} else {
    updateAuthUI();
}

