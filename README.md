<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Oumran Store | Premium Sourced, Habesha Inspired</title>
    <!-- Tailwind CSS for high performance UI layout -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome for modern icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .tab-content { display: none; }
        .tab-content.active { display: block; }
    </style>
</head>
<body class="bg-gray-50 text-gray-800 antialiased min-h-screen flex flex-col">

    <!-- TOP ANNOUNCEMENT BAR -->
    <div class="bg-emerald-700 text-white text-xs py-2 px-4 text-center font-medium tracking-wide">
        🇪🇹 🇪🇷 Premium Sourced from China • Exclusively Designed for the Habesha Community • Free Delivery in Select Areas!
    </div>

    <!-- MAIN HEADER NAVIGATION -->
    <header class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <!-- Brand Logo -->
            <div class="flex items-center space-x-2">
                <span class="text-3xl font-black tracking-tighter text-emerald-800">OUMRAN</span>
                <span class="bg-amber-500 text-white text-[10px] uppercase px-1.5 py-0.5 rounded font-bold">Store</span>
            </div>

            <!-- Main Menu Tabs -->
            <nav class="hidden md:flex space-x-8 font-medium text-gray-600">
                <button onclick="switchTab('shop')" class="nav-link text-emerald-700 hover:text-emerald-900 border-b-2 border-emerald-700 pb-1">Shop Collection</button>
                <button onclick="switchTab('profile')" class="nav-link hover:text-emerald-900 pb-1">My Account</button>
            </nav>

            <!-- Action Controls -->
            <div class="flex items-center space-x-6">
                <button onclick="switchTab('shop')" class="text-gray-600 hover:text-emerald-700 relative">
                    <i class="fa-solid fa-store text-xl"></i>
                </button>
                <!-- Cart Trigger -->
                <button onclick="toggleCart()" class="text-gray-600 hover:text-emerald-700 relative">
                    <i class="fa-solid fa-bag-shopping text-xl"></i>
                    <span id="cart-count" class="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">0</span>
                </button>
                <!-- Profile Avatar Trigger -->
                <button onclick="switchTab('profile')" class="flex items-center space-x-2 border border-gray-200 rounded-full p-1 pr-3 hover:bg-gray-50">
                    <img id="avatar-preview" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Profile" class="w-8 h-8 rounded-full object-cover">
                    <span id="user-display-name" class="text-sm font-medium hidden sm:inline">Selamawit K.</span>
                </button>
            </div>
        </div>
    </header>

    <!-- MAIN APP WRAPPER -->
    <main class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <!-- PAGE 1: SHOP TAB -->
        <div id="tab-shop" class="tab-content active space-y-8">
            <!-- Hero Banner Hero Section -->
            <div class="relative bg-gradient-to-r from-emerald-900 to-emerald-700 rounded-2xl overflow-hidden shadow-lg text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
                <div class="space-y-4 max-w-xl z-10">
                    <span class="bg-amber-400 text-emerald-950 font-bold text-xs uppercase px-2.5 py-1 rounded-full">New China-Habesha Transit</span>
                    <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight">Direct From Source to Your Doorstep</h1>
                    <p class="text-emerald-100 text-sm md:text-base">High-quality lifestyle apparel, traditional hybrid fabrics, and tech items sourced premium from China wholesale hubs, serving customers worldwide.</p>
                </div>
                <div class="mt-6 md:mt-0 opacity-20 md:opacity-100">
                    <i class="fa-solid fa-ship text-[120px] text-emerald-600"></i>
                </div>
            </div>

            <!-- Products Grid Section -->
            <div>
                <h2 class="text-2xl font-bold tracking-tight text-gray-900 mb-6 flex items-center">
                    <span class="w-2 h-6 bg-amber-500 rounded-full mr-2"></span> Featured Catalogue
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="products-container">
                    <!-- Products will be injected via JS here dynamically -->
                </div>
            </div>
        </div>

        <!-- PAGE 2: PROFILE & MANAGEMENT TAB -->
        <div id="tab-profile" class="tab-content space-y-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                <!-- Account Panel Side-Card -->
                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center">
                    <div class="relative group">
                        <img id="profile-card-avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="Avatar User" class="w-32 h-32 rounded-full object-cover border-4 border-emerald-500 shadow-md">
                        <label for="avatar-upload" class="absolute bottom-0 right-0 bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-full cursor-pointer shadow transition duration-200">
                            <i class="fa-solid fa-camera text-sm"></i>
                            <input type="file" id="avatar-upload" accept="image/*" class="hidden" onchange="handleAvatarUpload(event)">
                        </label>
                    </div>
                    <h3 id="profile-card-name" class="mt-4 text-xl font-bold text-gray-900">Selamawit Kebede</h3>
                    <p class="text-sm text-emerald-700 font-medium bg-emerald-50 px-3 py-1 rounded-full mt-1">Verified Habesha Member</p>
                    
                    <div class="w-full border-t border-gray-100 my-6"></div>
                    
                    <!-- Profile Dashboard Navigation Buttons -->
                    <div class="w-full space-y-2">
                        <button onclick="setProfileSubSection('details')" id="btn-sub-details" class="w-full flex items-center justify-between px-4 py-3 bg-emerald-50 text-emerald-800 rounded-xl font-medium transition-all">
                            <span class="flex items-center"><i class="fa-solid fa-user-gear mr-3 text-emerald-600"></i> Account Settings</span>
                            <i class="fa-solid fa-chevron-right text-xs"></i>
                        </button>
                        <button onclick="setProfileSubSection('orders')" id="btn-sub-orders" class="w-full flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-all">
                            <span class="flex items-center"><i class="fa-solid fa-box-archive mr-3 text-gray-400"></i> My Cargo / Orders</span>
                            <i class="fa-solid fa-chevron-right text-xs"></i>
                        </button>
                    </div>
                </div>

                <!-- Account Sub-Section Body Panels -->
                <div class="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                    
                    <!-- SUB-TAB A: PROFILE UPDATE SETTINGS -->
                    <div id="sub-profile-details" class="space-y-6">
                        <div>
                            <h3 class="text-lg font-bold text-gray-900">Account Information</h3>
                            <p class="text-sm text-gray-500">Update your shipping details and global profile options.</p>
                        </div>
                        <form id="profile-form" onsubmit="saveProfileSettings(event)" class="space-y-4">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Full Name</label>
                                    <input type="text" id="input-name" value="Selamawit Kebede" required class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                                </div>
                                <div>
                                    <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Phone Number</label>
                                    <input type="tel" id="input-phone" value="+251 911 234 567" required class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                                </div>
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Delivery/Shipping Address</label>
                                <input type="text" id="input-address" value="Bole Subcity, Kebele 03, House #402, Addis Ababa, Ethiopia" required class="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                            </div>
                            <div class="flex justify-end pt-4">
                                <button type="submit" class="bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-6 py-2.5 rounded-xl shadow-sm transition duration-200">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>

                    <!-- SUB-TAB B: REALTIME ORDER HISTORY -->
                    <div id="sub-profile-orders" class="space-y-6 hidden">
                        <div>
                            <h3 class="text-lg font-bold text-gray-900">Shipment Tracking</h3>
                            <p class="text-sm text-gray-500">Real-time status of items importing from Guangzhou/Shenzhen warehouses to East Africa.</p>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-sm text-gray-500">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 rounded-lg">
                                    <tr>
                                        <th class="px-4 py-3">Order ID</th>
                                        <th class="px-4 py-3">China Origin</th>
                                        <th class="px-4 py-3">Est. Delivery</th>
                                        <th class="px-4 py-3">Status</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-100">
                                    <tr>
                                        <td class="px-4 py-4 font-semibold text-gray-900">#OMR-98421</td>
                                        <td class="px-4 py-4">Guangzhou Hub</td>
                                        <td class="px-4 py-4">In 4 Days</td>
                                        <td class="px-4 py-4"><span class="bg-blue-100 text-blue-800 font-medium text-xs px-2 py-1 rounded-full">Air Cargo Transit</span></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-4 font-semibold text-gray-900">#OMR-97210</td>
                                        <td class="px-4 py-4">Yiwu Market Whse</td>
                                        <td class="px-4 py-4">Delivered</td>
                                        <td class="px-4 py-4"><span class="bg-green-100 text-green-800 font-medium text-xs px-2 py-1 rounded-full">Completed</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </main>

    <!-- SLIDE-OVER SIDEBAR: CART & INTEGRATED CHECKOUT SYSTEM -->
    <div id="cart-sidebar" class="fixed inset-0 z-50 overflow-hidden hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
        <div class="absolute inset-0 overflow-hidden">
            <!-- Background Overlay -->
            <div onclick="toggleCart()" class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div class="pointer-events-auto w-screen max-w-md bg-white shadow-2xl flex flex-col">
                    
                    <!-- Cart Header -->
                    <div class="px-6 py-5 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                        <h2 class="text-lg font-bold text-gray-900 flex items-center">
                            <i class="fa-solid fa-basket-shopping text-emerald-700 mr-2"></i> Your Oumran Bag
                        </h2>
                        <button onclick="toggleCart()" class="text-gray-400 hover:text-gray-500 p-1">
                            <i class="fa-solid fa-xmark text-xl"></i>
                        </button>
                    </div>

                    <!-- Cart Content (Scrollable Container) -->
                    <div class="flex-1 overflow-y-auto px-6 py-4 space-y-4" id="cart-items-wrapper">
                        <!-- Filled dynamically by JS -->
                        <div class="text-center text-gray-400 py-12" id="empty-cart-msg">
                            <i class="fa-solid fa-bag-shopping text-4xl mb-2"></i>
                            <p class="text-sm">Your shopping bag is empty.</p>
                        </div>
                    </div>

                    <!-- Totaling and Payment Interface Checkout Frame -->
                    <div class="border-t border-gray-200 px-6 py-6 bg-gray-50 space-y-6">
                        <div class="flex justify-between text-base font-bold text-gray-900">
                            <span>Subtotal</span>
                            <span id="cart-total-price">0.00 ETB</span>
                        </div>
                        
                        <!-- PAYMENT METHOD ACCORDION SELECTION -->
                        <div class="space-y-2">
                            <label class="block text-xs font-bold text-gray-600 uppercase tracking-wider">Select Payment Gateway</label>
                            <div class="grid grid-cols-2 gap-2">
                                <label class="border border-gray-200 rounded-xl p-3 flex items-center space-x-2 cursor-pointer bg-white hover:border-emerald-500 transition-all">
                                    <input type="radio" name="payment-method" value="telebirr" checked class="text-emerald-600 focus:ring-emerald-500">
                                    <span class="text-xs font-bold tracking-tight text-blue-600">telebirr</span>
                                </label>
                                <label class="border border-gray-200 rounded-xl p-3 flex items-center space-x-2 cursor-pointer bg-white hover:border-emerald-500 transition-all">
                                    <input type="radio" name="payment-method" value="cbebirr" class="text-emerald-600 focus:ring-emerald-500">
                                    <span class="text-xs font-bold tracking-tight text-purple-700">CBE Birr</span>
                                </label>
                                <label class="border border-gray-200 rounded-xl p-3 flex items-center space-x-2 cursor-pointer bg-white hover:border-emerald-500 transition-all">
                                    <input type="radio" name="payment-method" value="chapa" class="text-emerald-600 focus:ring-emerald-500">
                                    <span class="text-xs font-bold tracking-tight text-emerald-600">Chapa Pay</span>
                                </label>
                                <label class="border border-gray-200 rounded-xl p-3 flex items-center space-x-2 cursor-pointer bg-white hover:border-emerald-500 transition-all">
                                    <input type="radio" name="payment-method" value="card" class="text-emerald-600 focus:ring-emerald-500">
                                    <span class="text-xs font-bold tracking-tight text-gray-700"><i class="fa-solid fa-credit-card mr-1"></i> Visa/Master</span>
                                </label>
                            </div>
                        </div>

                        <!-- Action Submit Button -->
                        <button onclick="processCheckout()" class="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-4 rounded-xl text-center shadow transition duration-200 flex items-center justify-center space-x-2">
                            <span>Secure Checkout Order</span>
                            <i class="fa-solid fa-arrow-right text-xs"></i>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <!-- SITE FOOTER -->
    <footer class="bg-gray-900 text-gray-400 text-sm py-8 mt-12 border-t border-gray-800">
        <div class="max-w-7xl mx-auto px-4 text-center space-y-2">
            <p class="font-semibold text-gray-300">Oumran Store - Logistics Hub</p>
            <p class="text-xs text-gray-500">Sourcing Agents in Shenzhen, Yiwu, and Guangzhou. Directly catering to global Habesha clients.</p>
            <p class="text-xs text-gray-600 pt-4">&copy; 2026 Oumran Store. All Rights Reserved.</p>
        </div>
    </footer>

    <!-- INTERACTION LOGIC & SIMULATED APPLICATION STATE -->
    <script>
        // Mock Catalogue DB (China Sourced & Habesha Fashion/Tech Preferences)
        const CATALOGUE = [
            { id: 1, name: "Premium Habesha-Design Modern T-Shirt", price: 1200, category: "Apparel", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80" },
            { id: 2, name: "Luxury Gold-Trimmed Silk Shemma Fabric", price: 4500, category: "Traditional", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=400&q=80" },
            { id: 3, name: "Wireless Active Smart Buds (Guangzhou OEM)", price: 2100, category: "Electronics", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80" },
            { id: 4, name: "Premium Leather Messenger Pack (Yiwu)", price: 3800, category: "Accessories", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=400&q=80" }
        ];

        // Global Application UI States
        let cart = [];
        let profile = {
            name: "Selamawit Kebede",
            phone: "+251 911 234 567",
            address: "Bole Subcity, Kebele 03, House #402, Addis Ababa, Ethiopia"
        };

        // Render Catalogue items inside document view state on runtime startup
        function initApp() {
            const productBox = document.getElementById('products-container');
            productBox.innerHTML = '';
            
            CATALOGUE.forEach(item => {
                productBox.innerHTML += `
                    <div class="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition duration-200 flex flex-col">
                        <div class="relative h-48 bg-gray-100 overflow-hidden">
                            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transform hover:scale-105 transition duration-300">
                            <span class="absolute top-2 left-2 bg-emerald-800 text-white text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold">Imported</span>
                        </div>
                        <div class="p-4 flex-grow flex flex-col justify-between space-y-3">
                            <div>
                                <span class="text-xs text-gray-400 uppercase tracking-widest font-semibold">${item.category}</span>
                                <h3 class="font-semibold text-gray-800 text-sm mt-0.5 line-clamp-2">${item.name}</h3>
                            </div>
                            <div class="flex items-center justify-between pt-2">
                                <span class="text-base font-bold text-gray-900">${item.price.toLocaleString()} ETB</span>
                                <button onclick="addToCart(${item.id})" class="bg-gray-100 hover:bg-emerald-700 text-gray-700 hover:text-white p-2 rounded-xl transition duration-200">
                                    <i class="fa-solid fa-plus text-sm"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
            updateProfileUI();
        }

        // Global Navigation Router
        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('text-emerald-700', 'border-b-2', 'border-emerald-700'));
            
            document.getElementById(`tab-${tabId}`).classList.add('active');
            
            // Highlight explicit source event links
            const targetedBtn = event?.currentTarget;
            if (targetedBtn && targetedBtn.classList.contains('nav-link')) {
                targetedBtn.classList.add('text-emerald-700', 'border-b-2', 'border-emerald-700');
            }
        }

        // Profile Inner Section Switching
        function setProfileSubSection(subSectionId) {
            document.getElementById('sub-profile-details').classList.add('hidden');
            document.getElementById('sub-profile-orders').classList.add('hidden');
            document.getElementById('btn-sub-details').className = "w-full flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-all";
            document.getElementById('btn-sub-orders').className = "w-full flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-all";

            document.getElementById(`sub-profile-${subSectionId}`).classList.remove('hidden');
            document.getElementById(`btn-sub-${subSectionId}`).className = "w-full flex items-center justify-between px-4 py-3 bg-emerald-50 text-emerald-800 rounded-xl font-medium transition-all";
        }

        // Add Product To Cart Array Action
        function addToCart(productId) {
            const product = CATALOGUE.find(p => p.id === productId);
            const existIndex = cart.findIndex(item => item.product.id === productId);

            if(existIndex > -1) {
                cart[existIndex].quantity += 1;
            } else {
                cart.push({ product: product, quantity: 1 });
            }
            renderCartUI();
            alert(`${product.name} added to cart bag successfully!`);
        }

        // Remove / Subtract Product Item Context Action
        function updateCartQuantity(productId, modifier) {
            const itemIndex = cart.findIndex(item => item.product.id === productId);
            if (itemIndex > -1) {
                cart[itemIndex].quantity += modifier;
                if(cart[itemIndex].quantity <= 0) {
                    cart.splice(itemIndex, 1);
                }
            }
            renderCartUI();
        }

        // Render Cart DOM element modifications tracking state mutations
        function renderCartUI() {
            const wrapper = document.getElementById('cart-items-wrapper');
            const counter = document.getElementById('cart-count');
            const totalText = document.getElementById('cart-total-price');
            
            let totalCount = 0;
            let totalPrice = 0;

            wrapper.innerHTML = '';

            if(cart.length === 0) {
                wrapper.innerHTML = `
                    <div class="text-center text-gray-400 py-12" id="empty-cart-msg">
                        <i class="fa-solid fa-bag-shopping text-4xl mb-2"></i>
                        <p class="text-sm">Your shopping bag is empty.</p>
                    </div>`;
            } else {
                cart.forEach(item => {
                    totalCount += item.quantity;
                    totalPrice += (item.product.price * item.quantity);

                    wrapper.innerHTML += `
                        <div class="flex items-center space-x-4 bg-white p-3 border border-gray-100 rounded-xl shadow-sm">
                            <img src="${item.product.image}" alt="${item.product.name}" class="w-16 h-16 object-cover rounded-lg flex-shrink-0">
                            <div class="flex-grow min-w-0">
                                <h4 class="text-xs font-bold text-gray-900 truncate">${item.product.name}</h4>
                                <p class="text-xs text-gray-500 mt-0.5">${item.product.price.toLocaleString()} ETB</p>
                                <div class="flex items-center space-x-2 mt-2">
                                    <button onclick="updateCartQuantity(${item.product.id}, -1)" class="w-6 h-6 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-600 hover:bg-gray-200 font-bold">-</button>
                                    <span class="text-xs font-semibold text-gray-800">${item.quantity}</span>
                                    <button onclick="updateCartQuantity(${item.product.id}, 1)" class="w-6 h-6 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-600 hover:bg-gray-200 font-bold">+</button>
                                </div>
                            </div>
                        </div>
                    `;
                });
            }

            counter.innerText = totalCount;
            totalText.innerText = `${totalPrice.toLocaleString()}.00 ETB`;
        }

        // Sidebar Panel Draw/Collapse Handler Toggle 
        function toggleCart() {
            const sidebar = document.getElementById('cart-sidebar');
            sidebar.classList.toggle('hidden');
        }

        // Live Profile Data Mutator Handler Actions
        function saveProfileSettings(event) {
            event.preventDefault();
            profile.name = document.getElementById('input-name').value;
            profile.phone = document.getElementById('input-phone').value;
            profile.address = document.getElementById('input-address').value;
            
            updateProfileUI();
            alert("Success! Your Oumran Customer Account Profile has been updated.");
        }

        // Avatar Upload Simulator
        function handleAvatarUpload(event) {
            const file = event.target.files[0];
            if(file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('avatar-preview').src = e.target.result;
                    document.getElementById('profile-card-avatar').src = e.target.result;
                }
                reader.readAsDataURL(file);
            }
        }

        // Update Text Nodes mirroring structural changes
        function updateProfileUI() {
            document.getElementById('user-display-name').innerText = profile.name;
            document.getElementById('profile-card-name').innerText = profile.name;
            
            document.getElementById('input-name').value = profile.name;
            document.getElementById('input-phone').value = profile.phone;
            document.getElementById('input-address').value = profile.address;
        }

        // Secure Gateway simulated processing step 
        function processCheckout() {
            if(cart.length === 0) {
                alert("Your shopping bag is empty! Please add imported cargo items before checking out.");
                return;
            }
            const gateway = document.querySelector('input[name="payment-method"]:checked').value;
            alert(`Processing Secure Gateway Request via API [${gateway.toUpperCase()}]...\n\nYour order has been routed! A secure payment link has been dispatched to ${profile.phone}.`);
            
            // Flush state tracking arrays upon transaction authorization simulation
            cart = [];
            renderCartUI();
            toggleCart();
            switchTab('profile');
            setProfileSubSection('orders');
        }

        // Trigger bootstrap configuration routines on runtime system activation
        window.onload = initApp;
    </script>
</body>
</html>
