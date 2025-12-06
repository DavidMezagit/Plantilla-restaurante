// ============================================
// CONFIGURACIÓN (Fácil de cambiar por cliente)
// ============================================
const CONFIG = {
    brandName: 'Restaurante', // Nombre de la marca (se actualiza automáticamente en el sitio)
    whatsappNumber: '5491112345678', // Cambiar aquí el número
    whatsappMessage: {
        header: '*🔥 PEDIDO WEB 🔥*',
        footer: '\n\n📍 _Dirección:_ \n💳 _Pago:_'
    }
};

// ============================================
// DATOS DE PRODUCTOS
// ============================================
const menu = {
    burgers: [
        { id: 1, name: "Clásica", price: 17000, desc: "Cheddar, bacon, cebolla caramelizada, lluvia de papas.", category: "burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600" },
        { id: 2, name: "Big Classic", price: 17000, desc: "Cheddar, lechuga, pepinillo, salsa especial.", category: "burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600" },
        { id: 3, name: "New York", price: 17000, desc: "Cheddar, bacon, cebolla crispy, BBQ.", category: "burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600" },
        { id: 4, name: "Stacker", price: 17000, desc: "Cheddar, bacon, aros, salsa stacker.", category: "burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600" },
        { id: 5, name: "Cheeseburger", price: 17000, desc: "Cheddar, ketchup, mayonesa.", category: "burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600" },
        { id: 6, name: "Premium", price: 17000, desc: "Cheddar, bacon, huevo, bastón de muzza.", category: "burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600" },
        { id: 7, name: "Torre x5", price: 21000, desc: "¡La bestia! Cheddar, bacon x5 carnes.", category: "burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600" },
        { id: 8, name: "American", price: 17000, desc: "Cheddar, bacon, lechuga, tomate, salsa tasty.", category: "burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600" },
        { id: 9, name: "Mexicana", price: 17000, desc: "Cheddar, nachos, guacamole.", category: "burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600" },
        { id: 10, name: "Hawaiana", price: 17000, desc: "Dambo, tomate, cebolla caramelizada, rúcula.", category: "burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600" },
        { id: 11, name: "Provoleta", price: 17000, desc: "Provolone, bacon, cebolla crispy, salsa alioli.", category: "burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600" },
        { id: 12, name: "Chicken", price: 17000, desc: "Nuggets, cheddar, lechuga, tomate, salsa mil islas.", category: "burgers", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600" }
    ],
    pizzas: [
        { id: 13, name: "Margarita", price: 15000, desc: "Salsa, muzzarella, albahaca.", category: "pizzas", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600" },
        { id: 14, name: "Napolitana", price: 15000, desc: "Rodajas de tomate, ajo.", category: "pizzas", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600" },
        { id: 15, name: "Jamón y Morrones", price: 15000, desc: "Clásica de jamón cocido.", category: "pizzas", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600" },
        { id: 16, name: "Pepperoni", price: 15000, desc: "Con pepperoni picante.", category: "pizzas", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600" },
        { id: 17, name: "Capresse", price: 15000, desc: "Tomate, albahaca, oliva.", category: "pizzas", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600" },
        { id: 18, name: "Crudo y Rúcula", price: 15000, desc: "Jamón crudo, rúcula, parmesano.", category: "pizzas", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600" },
        { id: 19, name: "Especial", price: 15000, desc: "Especial de la casa.", category: "pizzas", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600" },
        { id: 20, name: "Cuatro Quesos", price: 15000, desc: "Muzza, roquefort, provolone, sardo.", category: "pizzas", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600" }
    ],
    milas: [
        { id: 21, name: "Cheese & Bacon", price: 14000, desc: "Cheddar, bacon, huevos fritos.", category: "milas", img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=600" },
        { id: 22, name: "Napolitana", price: 14000, desc: "Muzzarella, tomate, jamón.", category: "milas", img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=600" },
        { id: 23, name: "Classic", price: 14000, desc: "Cheddar, lechuga, tomate, huevos.", category: "milas", img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=600" },
        { id: 24, name: "Veggie", price: 14000, desc: "Medallón veggie, cheddar, lechuga, tomate.", category: "milas", img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=600" }
    ],
    snacks: [
        { id: 25, name: "Papas Especiales", price: 11000, desc: "Cheddar, bacon, verdeo.", category: "snacks", img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=600" },
        { id: 26, name: "Papas con Queso", price: 11000, desc: "Muzzarella, bacon.", category: "snacks", img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=600" },
        { id: 27, name: "Papas Burger", price: 13000, desc: "Con trocitos de burger.", category: "snacks", img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=600" },
        { id: 28, name: "Papas Tasty", price: 13000, desc: "Salsa mil islas, trocitos burger.", category: "snacks", img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=600" },
        { id: 29, name: "Nuggets", price: 12000, desc: "x10 unidades + dips.", category: "snacks", img: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=600" },
        { id: 30, name: "Aros de Cebolla", price: 12000, desc: "x10 unidades + dips.", category: "snacks", img: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=600" },
        { id: 31, name: "Hot Dog", price: 9000, desc: "Cheddar, bacon, verdeo.", category: "snacks", img: "https://images.unsplash.com/photo-1619740455993-9e612b4af65a?q=80&w=600" }
    ]
};

// Obtener todos los productos en un array plano
const products = [...menu.burgers, ...menu.pizzas, ...menu.milas, ...menu.snacks];

// ============================================
// FUNCIONES UTILITARIAS
// ============================================

/**
 * Sanitiza texto para prevenir ataques XSS
 * @param {string} text - Texto a sanitizar
 * @returns {string} - Texto sanitizado
 */
function escapeHtml(text) {
    if (!text) return '';
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return String(text).replace(/[&<>"']/g, m => map[m]);
}

// ============================================
// LÓGICA DE TEMA (DARK/LIGHT)
// ============================================

function toggleTheme() {
    try {
        const html = document.documentElement;
        const iconHome = document.getElementById('theme-icon-home');
        const iconApp = document.getElementById('theme-icon-app');
        
        if (!html) return;
        
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            // Cambiar a Icono Luna
            if (iconHome) {
                iconHome.classList.remove('fa-sun');
                iconHome.classList.add('fa-moon');
            }
            if (iconApp) {
                iconApp.classList.remove('fa-sun');
                iconApp.classList.add('fa-moon');
            }
        } else {
            html.classList.add('dark');
            // Cambiar a Icono Sol
            if (iconHome) {
                iconHome.classList.remove('fa-moon');
                iconHome.classList.add('fa-sun');
            }
            if (iconApp) {
                iconApp.classList.remove('fa-moon');
                iconApp.classList.add('fa-sun');
            }
        }
    } catch (error) {
        console.error('Error en toggleTheme:', error);
    }
}

// ============================================
// NAVEGACIÓN
// ============================================

function enterApp() {
    try {
        const landing = document.getElementById('landing-page');
        const app = document.getElementById('main-app');
        if (!landing || !app) return;
        
        landing.classList.add('hidden');
        app.classList.remove('hidden');
        window.scrollTo(0, 0);
    } catch (error) {
        console.error('Error en enterApp:', error);
    }
}

function goBackHome() {
    try {
        const landing = document.getElementById('landing-page');
        const app = document.getElementById('main-app');
        if (!landing || !app) return;
        
        app.classList.add('hidden');
        landing.classList.remove('hidden');
        window.scrollTo(0, 0);
    } catch (error) {
        console.error('Error en goBackHome:', error);
    }
}

function scrollToSection(id) {
    try {
        const element = document.getElementById(id);
        if (element) {
            const offset = 140;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    } catch (error) {
        console.error('Error en scrollToSection:', error);
    }
}

// ============================================
// FILTRADO DE MENÚ
// ============================================

function filterMenu(category, event) {
    try {
        // Clases de hover que hay que quitar/agregar
        const hoverClasses = ['hover:border-vago-pink', 'hover:text-vago-pink', 'hover:border-vago-green', 'hover:text-vago-green', 'hover:border-yellow-400', 'hover:text-yellow-500', 'dark:hover:border-vago-pink', 'dark:hover:text-vago-pink', 'dark:hover:border-vago-green', 'dark:hover:text-vago-green', 'dark:hover:border-yellow-400', 'dark:hover:text-yellow-500'];
        
        // Actualizar estado visual de los botones
        if (event && event.target) {
            document.querySelectorAll('.cat-btn').forEach(btn => {
                btn.classList.remove('bg-vago-pink', 'text-white', 'shadow-md', 'active-btn');
                btn.classList.add('bg-white', 'dark:bg-vago-card-dark', 'border', 'border-gray-200', 'dark:border-gray-700', 'text-gray-600', 'dark:text-gray-300');
                btn.setAttribute('aria-selected', 'false');
            });
            
            event.target.classList.remove('bg-white', 'dark:bg-vago-card-dark', 'border', 'border-gray-200', 'dark:border-gray-700', 'text-gray-600', 'dark:text-gray-300', ...hoverClasses);
            event.target.classList.add('bg-vago-pink', 'text-white', 'shadow-md', 'active-btn');
            event.target.setAttribute('aria-selected', 'true');
        } else {
            // Si no hay event (inicialización), activar el botón "Todo"
            const allBtn = document.querySelector('button[onclick*="filterMenu(\'all\'"]');
            if (allBtn) {
                document.querySelectorAll('.cat-btn').forEach(btn => {
                    btn.classList.remove('bg-vago-pink', 'text-white', 'shadow-md', 'active-btn');
                    btn.classList.add('bg-white', 'dark:bg-vago-card-dark', 'border', 'border-gray-200', 'dark:border-gray-700', 'text-gray-600', 'dark:text-gray-300');
                    btn.setAttribute('aria-selected', 'false');
                });
                allBtn.classList.remove('bg-white', 'dark:bg-vago-card-dark', 'border', 'border-gray-200', 'dark:border-gray-700', 'text-gray-600', 'dark:text-gray-300', ...hoverClasses);
                allBtn.classList.add('bg-vago-pink', 'text-white', 'shadow-md', 'active-btn');
                allBtn.setAttribute('aria-selected', 'true');
            }
        }
        
        // Ocultar todas las secciones
        document.querySelectorAll('.menu-section').forEach(section => {
            section.classList.add('hidden');
        });
        
        // Mostrar la sección seleccionada
        if (category === 'all') {
            const allSection = document.getElementById('section-all');
            if (allSection) {
                allSection.classList.remove('hidden');
            }
            // Renderizar todos los productos en la sección "Todos"
            renderAllProducts();
        } else {
            const section = document.getElementById(`section-${category}`);
            if (section) {
                section.classList.remove('hidden');
            }
        }
        
        // Scroll suave al inicio del contenido
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
        console.error('Error en filterMenu:', error);
    }
}

function renderAllProducts() {
    try {
        const container = document.getElementById('all-grid');
        if (!container) return;
        
        container.innerHTML = '';
        
        // Combinar todos los productos
        const allProducts = [...menu.burgers, ...menu.pizzas, ...menu.milas, ...menu.snacks];
        
        allProducts.forEach(item => {
            const card = document.createElement('div');
            card.className = 'bg-white dark:bg-vago-card-dark border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden flex flex-col group hover:border-vago-pink dark:hover:border-vago-pink transition-colors shadow-sm dark:shadow-none';
            
            const imgContainer = document.createElement('div');
            imgContainer.className = 'relative h-40 bg-gray-100 dark:bg-gray-900 overflow-hidden';
            
            // Determinar imagen según categoría
            let imgUrl = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600';
            if (item.category === 'pizzas') {
                imgUrl = 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600';
            } else if (item.category === 'milas') {
                imgUrl = 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=600';
            } else if (item.category === 'snacks') {
                imgUrl = item.img || 'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=600';
            } else {
                imgUrl = item.img || imgUrl;
            }
            
            const img = document.createElement('img');
            img.src = escapeHtml(imgUrl);
            img.alt = escapeHtml(item.name);
            img.className = 'w-full h-full object-cover opacity-100 dark:opacity-80 group-hover:scale-110 transition duration-700';
            img.loading = 'lazy';
            imgContainer.appendChild(img);
            
            if (item.price) {
                const priceBadge = document.createElement('span');
                priceBadge.className = 'absolute bottom-2 left-2 bg-black/70 text-white font-bold px-2 py-1 rounded text-sm';
                priceBadge.textContent = '$' + item.price.toLocaleString();
                imgContainer.appendChild(priceBadge);
            }
            
            const content = document.createElement('div');
            content.className = 'p-4 flex-1 flex flex-col';
            
            const title = document.createElement('h4');
            title.className = 'font-handwritten text-xl text-vago-pink mb-1 leading-none';
            title.textContent = escapeHtml(item.name);
            content.appendChild(title);
            
            const desc = document.createElement('p');
            desc.className = 'text-gray-600 dark:text-gray-400 text-xs mb-4 flex-1 leading-snug';
            desc.textContent = escapeHtml(item.desc);
            content.appendChild(desc);
            
            const btn = document.createElement('button');
            btn.className = 'w-full bg-gray-900 dark:bg-vago-pink text-white dark:text-white font-black text-xs py-2 rounded uppercase hover:opacity-90 transition';
            btn.textContent = 'Agregar';
            btn.setAttribute('onclick', `addToCartFromProduct(${item.id})`);
            btn.setAttribute('aria-label', `Agregar ${escapeHtml(item.name)} al carrito`);
            content.appendChild(btn);
            
            card.appendChild(imgContainer);
            card.appendChild(content);
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error en renderAllProducts:', error);
    }
}

// ============================================
// RENDERIZADO DE PRODUCTOS (SEGURO)
// ============================================

function renderCards(items, containerId, imgUrl) {
    try {
        const container = document.getElementById(containerId);
        if (!container || !Array.isArray(items)) return;
        
        container.innerHTML = '';
        
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'bg-white dark:bg-vago-card-dark border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden flex flex-col group hover:border-vago-pink dark:hover:border-vago-pink transition-colors shadow-sm dark:shadow-none';
            
            const imgContainer = document.createElement('div');
            imgContainer.className = 'relative h-40 bg-gray-100 dark:bg-gray-900 overflow-hidden';
            
            const img = document.createElement('img');
            img.src = escapeHtml(imgUrl);
            img.alt = escapeHtml(item.name);
            img.className = 'w-full h-full object-cover opacity-100 dark:opacity-80 group-hover:scale-110 transition duration-700';
            img.loading = 'lazy';
            imgContainer.appendChild(img);
            
            if (item.price) {
                const priceBadge = document.createElement('span');
                priceBadge.className = 'absolute bottom-2 left-2 bg-black/70 text-white font-bold px-2 py-1 rounded text-sm';
                priceBadge.textContent = '$' + item.price.toLocaleString();
                imgContainer.appendChild(priceBadge);
            }
            
            const content = document.createElement('div');
            content.className = 'p-4 flex-1 flex flex-col';
            
            const title = document.createElement('h4');
            title.className = 'font-handwritten text-xl text-vago-pink mb-1 leading-none';
            title.textContent = escapeHtml(item.name);
            content.appendChild(title);
            
            const desc = document.createElement('p');
            desc.className = 'text-gray-600 dark:text-gray-400 text-xs mb-4 flex-1 leading-snug';
            desc.textContent = escapeHtml(item.desc);
            content.appendChild(desc);
            
            const btn = document.createElement('button');
            btn.className = 'w-full bg-gray-900 dark:bg-vago-pink text-white dark:text-white font-black text-xs py-2 rounded uppercase hover:opacity-90 transition';
            btn.textContent = 'Agregar';
            btn.setAttribute('onclick', `addToCartFromProduct(${item.id})`);
            btn.setAttribute('aria-label', `Agregar ${escapeHtml(item.name)} al carrito`);
            content.appendChild(btn);
            
            card.appendChild(imgContainer);
            card.appendChild(content);
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error en renderCards:', error);
    }
}

function renderList(items, containerId) {
    try {
        const container = document.getElementById(containerId);
        if (!container || !Array.isArray(items)) return;
        
        container.innerHTML = '';
        
        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'flex items-center justify-between bg-white dark:bg-vago-card-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-vago-green dark:hover:border-vago-pink transition shadow-sm dark:shadow-none group';
            
            const leftDiv = document.createElement('div');
            const title = document.createElement('h4');
            title.className = 'font-handwritten text-lg text-gray-800 dark:text-white group-hover:text-vago-green dark:group-hover:text-vago-pink transition';
            title.textContent = escapeHtml(item.name);
            leftDiv.appendChild(title);
            
            const desc = document.createElement('p');
            desc.className = 'text-xs text-gray-500 dark:text-gray-400';
            desc.textContent = escapeHtml(item.desc);
            leftDiv.appendChild(desc);
            
            const rightDiv = document.createElement('div');
            rightDiv.className = 'text-right flex flex-col items-end gap-2';
            
            const price = document.createElement('p');
            price.className = 'font-bold text-vago-pink mb-0 leading-none';
            price.textContent = '$' + item.price.toLocaleString();
            rightDiv.appendChild(price);
            
            const btn = document.createElement('button');
            btn.className = 'bg-gray-100 dark:bg-transparent text-gray-800 dark:text-vago-pink text-xs px-3 py-1 rounded border border-gray-200 dark:border-vago-pink/50 hover:bg-vago-green dark:hover:bg-vago-pink hover:text-white dark:hover:text-white hover:border-transparent transition font-bold';
            btn.textContent = '+';
            btn.setAttribute('onclick', `addToCartFromProduct(${item.id})`);
            btn.setAttribute('aria-label', `Agregar ${escapeHtml(item.name)} al carrito`);
            rightDiv.appendChild(btn);
            
            itemDiv.appendChild(leftDiv);
            itemDiv.appendChild(rightDiv);
            container.appendChild(itemDiv);
        });
    } catch (error) {
        console.error('Error en renderList:', error);
    }
}

// Función helper para agregar al carrito desde los productos
function addToCartFromProduct(productId) {
    if (typeof addToCart === 'function') {
        const product = products.find(p => p.id === productId);
        if (product) {
            addToCart(product, product.price, []);
        }
    }
}

// ============================================
// INICIALIZACIÓN DE LA APLICACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    try {
        // Actualizar nombre de marca en el sitio
        const brandLogo = document.getElementById('brand-logo');
        const brandNav = document.getElementById('brand-name-nav');
        if (brandLogo) brandLogo.textContent = CONFIG.brandName;
        if (brandNav) brandNav.textContent = CONFIG.brandName;
        
        // Renderizar productos en sus respectivas secciones
        renderCards(menu.burgers, 'burgers-grid', 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600');
        renderCards(menu.pizzas, 'pizzas-grid', 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600');
        renderCards(menu.milas, 'milas-grid', 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=600');
        renderList(menu.snacks, 'snacks-list');
        
        // Renderizar sección "Todos" por defecto
        renderAllProducts();
        
        // Asegurar que solo la sección "Todos" esté visible al inicio
        filterMenu('all', null);
    } catch (error) {
        console.error('Error en inicialización:', error);
    }
});

// Exportar funciones para pruebas (sin afectar al navegador)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CONFIG,
        menu,
        products,
        escapeHtml,
        toggleTheme,
        enterApp,
        goBackHome,
        scrollToSection,
        renderCards,
        renderList,
    };
}

