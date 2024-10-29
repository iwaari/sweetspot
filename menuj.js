const croissants = [
    {
      name: "Classic Croissant",
      description: "A light, buttery croissant with crisp layers.",
      image: "css/menu/classic.jfif"
    },
    {
      name: "Almond Croissant",
      description: "Filled with sweet almond cream and topped with toasted almonds.",
      image: "css/menu/almond.jfif"
    },
    {
      name: "Chocolate Croissant",
      description: "A buttery croissant with a rich chocolate center.",
      image: "css/menu/choc.jfif"
    },
    {
      name: "Caramel Croissant",
      description: "A croissant with a smooth caramel filling and a crispy top.",
      image: "css/menu/caramelc.jfif"
    },
    {
      name: "Raspberry Croissant",
      description: "A croissant with a sweet raspberry filling.",
      image: "css/menu/raspc.jfif"
    },
    {
      name: "Blueberry Croissant",
      description: "A croissant filled with blueberry jam.",
      image: "css/menu/chipc.jfif"
    },
    {
      name: "Custard Croissant",
      description: "A flaky croissant with a smooth custard filling.",
      image: "css/menu/chocc.jfif"
    },
    {
      name: "Apple Croissant",
      description: "A croissant filled with cinnamon-spiced apples.",
      image: "css/menu/raspc.jfif"
    }
  ];
  
  // Function to dynamically generate menu items
  function displayMenu() {
    const menuContainer = document.getElementById('menuContainer');
  
    croissants.forEach(croissant => {
      // Create a column for each croissant
      const colDiv = document.createElement('div');
      colDiv.className = 'col-lg-3 col-md-6 col-sm-12 mb-4';
  
      // Create the card element
      const cardDiv = document.createElement('div');
      cardDiv.className = 'card';
  
      // Create image element
      const img = document.createElement('img');
      img.src = croissant.image;
      img.alt = croissant.name;
      img.className = 'card-img-top';
  
      // Create card body
      const cardBodyDiv = document.createElement('div');
      cardBodyDiv.className = 'card-body';
  
      // Create card title (croissant name)
      const cardTitle = document.createElement('h5');
      cardTitle.className = 'card-title';
      cardTitle.textContent = croissant.name;
  
      // Create card text (croissant description)
      const cardText = document.createElement('p');
      cardText.className = 'card-text';
      cardText.textContent = croissant.description;
  
      // Append card elements together
      cardBodyDiv.appendChild(cardTitle);
      cardBodyDiv.appendChild(cardText);
      cardDiv.appendChild(img);
      cardDiv.appendChild(cardBodyDiv);
      colDiv.appendChild(cardDiv);
  
      // Append to the menu container
      menuContainer.appendChild(colDiv);
    });
  }
  
  // Call the function to display the menu when the DOM content is fully loaded
  document.addEventListener('DOMContentLoaded', displayMenu);