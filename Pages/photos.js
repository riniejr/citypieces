 const grid = document.getElementById("grid");

//console.log(grid);

// Work on arrays & tags

grid.innerHTML =  `<img src="../Photos\Sunflower.jpg" alt="Sunflower">`;

const imgArray = [
    {
        src: '../Photos\Sunflower.jpg'
        alt: "Sunflower",
        tags: ["sunflower", "photo", "flower"]
    }, 
    {   
        src: 'Photos\Ducks.jpg'
        alt: "A mother duck and her ducklings swimming in the Licking River",
        tags: ["Covington", "photo", "duck"]
    }
    {
        src: '../Photos\Sunflower.jpg'
        alt: "Sunflower",
        tags: ["sunflower", "photo", "flower"]
    }, 
    {   
        src: '../Photos\Sunflower.jpg'
        alt: "Sunflower",
        tags: ["sunflower", "photo", "flower"]
    }
    {   
        src: '../Photos\Sunflower.jpg'
        alt: "Sunflower",
        tags: ["sunflower", "photo", "flower"]
    }, 
    {   
        src: '../Photos\Sunflower.jpg'
        alt: "Sunflower",
        tags: ["sunflower", "photo", "flower"]
    }
];



imgArray.map((img) => {
   imgHTML += `<img src=${img.src} alt=${img.alt}>`;
   //temperate literal
});

grid.innerHTML = imgHTML;

//filter array with textbox for tags element
