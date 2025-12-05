# Plantilla de Restaurante - Pedidos Online

Plantilla genérica y reutilizable para restaurantes con sistema de pedidos online integrado con WhatsApp. Incluye tema dark/light y diseño moderno.

## 🚀 Características

- **Tema Dark/Light**: Sistema de cambio de tema manual
- **Carrito de compras**: Funcionalidad completa de carrito
- **Integración WhatsApp**: Pedidos directos por WhatsApp
- **Diseño responsive**: Optimizado para móviles y desktop
- **Accesibilidad**: Cumple con estándares WCAG básicos
- **Nombre configurable**: El nombre de marca se actualiza automáticamente

## 📁 Estructura del Proyecto

```
plantilla-restaurante/
├── index.html          # HTML principal
├── css/
│   ├── tailwind.css    # Tailwind compilado (NO editar directamente)
│   └── styles.css      # Estilos personalizados adicionales
├── js/
│   ├── app.js          # Config, productos, utils, navegación, render
│   └── cart.js         # Lógica del carrito (depende de app.js)
├── src/
│   └── input.css       # Archivo fuente de Tailwind (@tailwind directives)
├── tailwind.config.js  # Configuración de Tailwind
└── package.json        # Dependencias y scripts
```

## 🛠 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Compilar Tailwind CSS:
```bash
npm run build-css
```

3. Para desarrollo con watch (recompila automáticamente):
```bash
npm run watch-css
```

## ⚙️ Configuración

### Cambiar nombre de la marca

Editar en `js/app.js`:
```javascript
const CONFIG = {
    brandName: 'TU MARCA', // ← Se actualiza automáticamente en el sitio
    whatsappNumber: '5491112345678',
    // ...
};
```

### Cambiar número de WhatsApp

Editar en `js/app.js`:
```javascript
const CONFIG = {
    brandName: 'Restaurante',
    whatsappNumber: '5491112345678', // ← Cambiar aquí
    whatsappMessage: {
        header: '*🔥 PEDIDO WEB 🔥*',
        footer: '\n\n📍 _Dirección:_ \n💳 _Pago:_'
    }
};
```

### Agregar/Modificar productos

Editar el objeto `menu` en `js/app.js`:
```javascript
const menu = {
    burgers: [
        { id: 1, name: "Clásica", price: 17000, desc: "...", category: "burgers", img: "..." },
        // ...
    ],
    pizzas: [...],
    milas: [...],
    snacks: [...]
};
```

## 📦 Deploy

Para producción:
1. Ejecutar `npm run build-css` para compilar Tailwind
2. Subir todos los archivos EXCEPTO:
   - `node_modules/`
   - `src/` (solo necesario para desarrollo)
   - `.git/`
   - Archivos de configuración de desarrollo

## 🎨 Personalización

### Colores

Editar en `tailwind.config.js`:
```javascript
colors: {
    'vago-pink': '#FF69B4',    // Color principal (rosa)
    'vago-green': '#009944',   // Color secundario (verde)
    'vago-dark': '#0a0a0a',    // Fondo oscuro
    'vago-cream': '#f8f5f2',   // Fondo claro
    // ...
}
```

**Nota:** Los nombres de variables incluyen "vago" por compatibilidad. Puedes renombrarlas si lo deseas, pero deberás actualizar todas las referencias en el HTML y CSS.

### Fuentes

Las fuentes se importan en `src/input.css` y se configuran en `tailwind.config.js`.

## 📝 Notas Importantes

- **NUNCA edites directamente** `css/tailwind.css` (es generado automáticamente)
- **Siempre edita** `src/input.css` para cambios en Tailwind
- **Recompila** Tailwind después de cambios en `tailwind.config.js` o `src/input.css`

## 🔧 Tecnologías

- HTML5
- Tailwind CSS 3.4.0
- JavaScript Vanilla
- Font Awesome 6.4.0
- Google Fonts

---

Desarrollado por Faith Web
