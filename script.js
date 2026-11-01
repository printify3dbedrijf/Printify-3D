let cart = [];

// Switchen tussen tabs
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById(`tab-${tabName}`).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Toevoegen aan winkelmand
function addToCart(title, price) {
    cart.push({ title, price });
    updateCartUI();
    alert(`${title} is toegevoegd aan je winkelmand!`);
}

// Update winkelmand weergave
function updateCartUI() {
    const cartCountEl = document.getElementById('cart-count');
    const cartItemsEl = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');

    cartCountEl.textContent = cart.length;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="empty-msg">Je winkelmandje is nog leeg.</p>';
        cartTotalEl.textContent = '€ 0,00';
        return;
    }

    let itemsHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        itemsHTML += `
            <div class="cart-item">
                <span>${item.title}</span>
                <strong>€ ${item.price.toFixed(2)}</strong>
            </div>
        `;
    });

    cartItemsEl.innerHTML = itemsHTML;
    cartTotalEl.textContent = `€ ${total.toFixed(2)}`;
}

// Bestelling verwerken via e-mail
function handleCheckout(event) {
    event.preventDefault();

    if (cart.length === 0) {
        alert('Je winkelmandje is nog leeg!');
        return;
    }

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const notes = document.getElementById('notes').value;

    let orderList = cart.map(item => `- ${item.title} (€${item.price.toFixed(2)})`).join('\n');
    let total = cart.reduce((sum, item) => sum + item.price, 0);

    let mailSubject = encodeURIComponent(`Nieuwe Bestelling Printify3D - ${name}`);
    let mailBody = encodeURIComponent(
        `Nieuwe Bestelling van ${name}\n` +
        `E-mail: ${email}\n\n` +
        `Bestelde items:\n${orderList}\n\n` +
        `Totaalbedrag: €${total.toFixed(2)}\n\n` +
        `Opmerkingen:\n${notes}`
    );

    // Opent de e-mail client van de gebruiker met alle bestelgegevens ingevuld
    window.location.href = `mailto:contact@printify3d.nl?subject=${mailSubject}&body=${mailBody}`;
}