const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('search-results');
const tools = document.querySelectorAll('.tool');

searchInput.addEventListener('input', searchTools);

function searchTools() {
  const searchTerm = searchInput.value.toLowerCase();
  searchResults.innerHTML = '';
  tools.forEach((tool) => {
    const toolName = tool.querySelector('h3').textContent.toLowerCase();
    if (toolName.includes(searchTerm)) {
      const listItem = document.createElement('li');
      listItem.textContent = toolName;
      listItem.addEventListener('click', () => {
        tool.scrollIntoView({ behavior: 'smooth' });
      });
      searchResults.appendChild(listItem);
    }
  });
}