// Functie om te wisselen tussen de tabbladen (Shop en Updates)
function switchTab(tabName) {
    // Haal alle tab-knoppen en inhoud-schermen weg
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(btn => btn.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    // Zet de juiste actieve tab aan
    if (tabName === 'shop') {
        document.getElementById('shop-section').classList.add('active');
        buttons[0].classList.add('active');
    } else if (tabName === 'updates') {
        document.getElementById('updates-section').classList.add('active');
        buttons[1].classList.add('active');
    }
}

// Voorbeeld producten en updates inladen
const products = [
    { name: "3D Geprinte Dino Sleutelhanger", price: "€4,99", desc: "Supergave flexibele dinosaurus voor aan je tas of sleutelbos." },
    { name: "Fidget Toy Kubus", price: "€7,50", desc: "Ideaal om mee te friemelen tijdens school of huiswerk." },
    { name: "Shark Telefoonhouder", price: "€9,99", desc: "Handige en unieke standaard voor je mobiele telefoon." }
];

const updates = [
    { title: "Nieuwe kleuren binnen!", text: "We hebben prachtige nieuwe filamenten binnengekregen, waaronder glans-paars en regenboog!" },
    { title: "Snelle levering", text: "Alle orders worden binnen 48 uur geprint en verzonden." }
];

// Automatisch vullen van producten en updates in de app
window.onload = function() {
    const productContainer = document.getElementById('product-container');
    products.forEach(p => {
        productContainer.innerHTML += `
            <div class="product-card">
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <div class="price">${p.price}</div>
            </div>
        `;
    });

    const updatesContainer = document.getElementById('updates-container');
    updates.forEach(u => {
        updatesContainer.innerHTML += `
            <div class="update-card" style="margin-top: 10px;">
                <h3>${u.title}</h3>
                <p>${u.text}</p>
            </div>
        `;
    });
};