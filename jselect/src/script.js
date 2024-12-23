document.addEventListener('DOMContentLoaded', () => {
    const pluginInfoSection = document.getElementById('plugin-info');
    
    // Example of fetching plugin data from GitHub API
    fetch('https://api.github.com/repos/leandrolopes13/jselect')
        .then(response => response.json())
        .then(data => {
            const pluginName = document.createElement('h2');
            pluginName.textContent = data.name;
            pluginInfoSection.appendChild(pluginName);

            const pluginDescription = document.createElement('p');
            pluginDescription.textContent = data.description;
            pluginInfoSection.appendChild(pluginDescription);
        })
        .catch(error => {
            console.error('Error fetching plugin data:', error);
        });

    // Event listener for a button click
    const button = document.getElementById('some-button');
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});