// Sample tool data with images
const tools = [
    { name: "Hammer", category: "Hand Tools", location: "Garage", image: "hammer.png" },
    { name: "Screwdriver", category: "Hand Tools", location: "Toolbox", image: "screwdriver.png" },
    { name: "Drill", category: "Power Tools", location: "Workshop", image: "drill.png" },
    { name: "Saw", category: "Power Tools", location: "Workshop", image: "saw.png" },
    { name: "Wrench", category: "Hand Tools", location: "Garage", image: "wrench.png" },
    { name: "Pliers", category: "Hand Tools", location: "Toolbox", image: "pliers.png" },
];

// Function to display tools
function displayTools(tools) {
    const toolList = document.getElementById('toolList');
    toolList.innerHTML = '';

    tools.forEach(tool => {
        const toolItem = document.createElement('div');
        toolItem.classList.add('tool-item');
        toolItem.innerHTML = `
            <img class="tool-image" src="${tool.image}" alt="${tool.name}">
            <h3>${tool.name}</h3>
            <p>Category: ${tool.category}</p>
            <p>Location: ${tool.location}</p>
        `;
        toolList.appendChild(toolItem);
    });
}

// Initial display of all tools
displayTools(tools);
