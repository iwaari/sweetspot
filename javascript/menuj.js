const menuItems = [
  { name: "Classic Croissant", description: "A light, buttery croissant with crisp layers.", image: "../css/menu/classic.jfif", category: "croissants" },
  { name: "Almond Croissant", description: "Croissant filled with sweet almond cream and almonddd.", image: "../css/menu/almond.jfif", category: "croissants" },
  { name: "Chocolate Croissant", description: "A buttery croissant with a rich chocolate center.", image: "../css/menu/choc.jfif", category: "croissants" },
  { name: "Salted Caramel Cookie", description: "A cookie with a smooth caramel filling and a crispy top.", image: "../css/menu/caramelc.jfif", category: "cookies" },
  { name: "Raspberry Cookie", description: "A cookie with a sweet raspberry filling.", image: "../css/menu/raspc.jfif", category: "cookies" },
  { name: "Blueberry Cookie", description: "A cookie filled with blueberry jam.", image: "../css/menu/chipc.jfif", category: "cookies" },
  { name: "Choko Cookie", description: "A crispy cookie with a smooth custard filling.", image: "../css/menu/chocc.jfif", category: "cookies" },
  { name: "Apple-pie Cookie", description: "A cookie filled with cinnamon-spiced apples.", image: "../css/menu/raspc.jfif", category: "cookies" }
];

function displayMenu(category = 'all') {
  const menuContainer = document.getElementById('menuContainer');
  menuContainer.innerHTML = ''; 

  const filteredItems = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);

  filteredItems.forEach(item => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-lg-3 col-md-6 col-sm-12 mb-4';

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.className = 'card-img-top';

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = item.name;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = item.description;

    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);
    colDiv.appendChild(cardDiv);

    menuContainer.appendChild(colDiv);
  });
}

document.getElementById('menuFilter').addEventListener('change', (event) => {
  displayMenu(event.target.value);
});

document.addEventListener('DOMContentLoaded', () => displayMenu());
