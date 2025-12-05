// ============================================
// CARRITO
// ============================================

let cart = [];
let currentSelection = null;

function toggleCart() {
    try {
        const sidebar = document.getElementById('cart-sidebar');
        const overlay = document.getElementById('cart-overlay');
        if (!sidebar || !overlay) return;
        
        const isOpen = sidebar.classList.contains('cart-open');
        sidebar.classList.toggle('cart-open');
        overlay.classList.toggle('overlay-visible');
        
        // Actualizar atributos ARIA
        sidebar.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
        overlay.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
        
        if (!isOpen) renderCartItems();
    } catch (error) {
        console.error('Error en toggleCart:', error);
    }
}

function addToCart(product, finalPrice, extras) {
    try {
        if (!product || typeof finalPrice !== 'number' || !Array.isArray(extras)) return;
        
        const existingItem = cart.find(item => 
            item.id === product.id && 
            JSON.stringify(item.extras) === JSON.stringify(extras)
        );
        
        if (existingItem) {
            existingItem.qty++;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: finalPrice,
                basePrice: product.price,
                extras: extras,
                img: product.img,
                qty: 1
            });
        }
        updateCartUI();
    } catch (error) {
        console.error('Error en addToCart:', error);
    }
}

function updateQty(index, change) {
    try {
        if (!cart[index] || typeof index !== 'number') return;
        if (cart[index].qty + change > 0) {
            cart[index].qty += change;
        } else {
            cart.splice(index, 1);
        }
        updateCartUI();
        renderCartItems();
    } catch (error) {
        console.error('Error en updateQty:', error);
    }
}

function removeFromCart(index) {
    try {
        if (typeof index !== 'number' || !cart[index]) return;
        cart.splice(index, 1);
        updateCartUI();
        renderCartItems();
    } catch (error) {
        console.error('Error en removeFromCart:', error);
    }
}

function updateCartUI() {
    try {
        const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        const count = cart.reduce((sum, item) => sum + item.qty, 0);
        
        const cartTotalEl = document.getElementById('cart-total');
        const floatTotalEl = document.getElementById('float-total');
        
        if (cartTotalEl) cartTotalEl.textContent = `$${total.toLocaleString()}`;
        if (floatTotalEl) floatTotalEl.textContent = `$${total.toLocaleString()}`;
        
        ['nav-cart-count', 'float-count'].forEach(id => {
            const badge = document.getElementById(id);
            if (badge) {
                badge.textContent = count;
                if (count > 0) {
                    badge.classList.remove('scale-0');
                    badge.classList.add('scale-110');
                    setTimeout(() => badge.classList.remove('scale-110'), 200);
                } else {
                    badge.classList.add('scale-0');
                }
            }
        });
        
        const iconBg = document.getElementById('cart-icon-bg');
        if (iconBg) {
            if (count > 0) iconBg.classList.add('pulse-icon');
            else iconBg.classList.remove('pulse-icon');
        }
        
        const floatBtn = document.getElementById('floating-cart-btn');
        if (floatBtn) {
            if (count > 0) floatBtn.classList.remove('hidden');
            else floatBtn.classList.add('hidden');
        }
    } catch (error) {
        console.error('Error en updateCartUI:', error);
    }
}

function renderCartItems() {
    try {
        const container = document.getElementById('cart-items-list');
        if (!container) return;
        
        if (cart.length === 0) {
            // Crear mensaje de carrito vacío de forma segura
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'flex flex-col items-center justify-center h-64 text-center opacity-40';
            
            const icon = document.createElement('i');
            icon.className = 'fas fa-shopping-bag text-6xl mb-4 text-gray-300';
            icon.setAttribute('aria-hidden', 'true');
            emptyDiv.appendChild(icon);
            
            const title = document.createElement('h4');
            title.className = 'font-bold text-gray-500';
            title.textContent = 'Carrito vacío';
            emptyDiv.appendChild(title);
            
            const message = document.createElement('p');
            message.className = 'text-xs text-gray-400 mt-2';
            message.textContent = '¡Elegí algo rico del menú!';
            emptyDiv.appendChild(message);
            
            container.innerHTML = '';
            container.appendChild(emptyDiv);
            return;
        }
        
        // Usar createElement para seguridad
        container.innerHTML = '';
        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'bg-white dark:bg-vago-card-dark p-3 rounded-xl border border-gray-100 dark:border-gray-800 flex gap-3 items-center shadow-sm';
            
            const img = document.createElement('img');
            img.src = escapeHtml(item.img);
            img.alt = escapeHtml(item.name);
            img.className = 'h-14 w-14 rounded-lg object-cover';
            itemDiv.appendChild(img);
            
            const content = document.createElement('div');
            content.className = 'flex-1';
            
            const header = document.createElement('div');
            header.className = 'flex justify-between items-start';
            
            const title = document.createElement('h4');
            title.className = 'font-bold text-gray-800 dark:text-white text-sm leading-tight';
            title.textContent = escapeHtml(item.name);
            header.appendChild(title);
            
            const removeBtn = document.createElement('button');
            removeBtn.className = 'text-gray-300 hover:text-red-500';
            removeBtn.setAttribute('onclick', `removeFromCart(${index})`);
            removeBtn.setAttribute('aria-label', `Eliminar ${escapeHtml(item.name)}`);
            
            const trashIcon = document.createElement('i');
            trashIcon.className = 'fas fa-trash-alt text-xs';
            trashIcon.setAttribute('aria-hidden', 'true');
            removeBtn.appendChild(trashIcon);
            
            header.appendChild(removeBtn);
            content.appendChild(header);
            
            if (item.extras && item.extras.length > 0) {
                const extras = document.createElement('div');
                extras.className = 'text-[10px] text-gray-500 mb-2';
                extras.textContent = '+ ' + item.extras.map(e => escapeHtml(e)).join(', ');
                content.appendChild(extras);
            }
            
            const footer = document.createElement('div');
            footer.className = 'flex justify-between items-center';
            
            const qtyControls = document.createElement('div');
            qtyControls.className = 'flex items-center gap-2 bg-gray-50 dark:bg-gray-800 rounded-lg px-2 py-1';
            
            const minusBtn = document.createElement('button');
            minusBtn.className = 'text-gray-500 hover:text-black dark:hover:text-white font-bold text-xs';
            minusBtn.setAttribute('onclick', `updateQty(${index}, -1)`);
            minusBtn.setAttribute('aria-label', 'Reducir cantidad');
            minusBtn.textContent = '-';
            qtyControls.appendChild(minusBtn);
            
            const qty = document.createElement('span');
            qty.className = 'text-xs font-black w-4 text-center text-gray-800 dark:text-white';
            qty.textContent = item.qty;
            qtyControls.appendChild(qty);
            
            const plusBtn = document.createElement('button');
            plusBtn.className = 'text-gray-500 hover:text-black dark:hover:text-white font-bold text-xs';
            plusBtn.setAttribute('onclick', `updateQty(${index}, 1)`);
            plusBtn.setAttribute('aria-label', 'Aumentar cantidad');
            plusBtn.textContent = '+';
            qtyControls.appendChild(plusBtn);
            
            footer.appendChild(qtyControls);
            
            const price = document.createElement('div');
            price.className = 'font-black text-vago-pink text-sm';
            price.textContent = '$' + (item.price * item.qty).toLocaleString();
            footer.appendChild(price);
            
            content.appendChild(footer);
            itemDiv.appendChild(content);
            container.appendChild(itemDiv);
        });
    } catch (error) {
        console.error('Error en renderCartItems:', error);
    }
}

function checkout() {
    try {
        if (cart.length === 0) return;
        
        let msg = CONFIG.whatsappMessage.header + '\n\n';
        cart.forEach(item => {
            const sub = item.price * item.qty;
            msg += `▪️ ${item.qty}x ${item.name} ($${sub.toLocaleString()})\n`;
            if (item.extras && item.extras.length > 0) {
                msg += `   _Extras: ${item.extras.join(' + ')}_\n`;
            }
        });
        msg += `\n*TOTAL: ${document.getElementById('cart-total')?.textContent || '$0'}*`;
        msg += CONFIG.whatsappMessage.footer;
        
        const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
        
        // Cerrar carrito después de enviar
        toggleCart();
    } catch (error) {
        console.error('Error en checkout:', error);
        alert('Error al abrir WhatsApp. Por favor, intenta nuevamente.');
    }
}

