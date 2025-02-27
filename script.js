document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById("searchBar");
    const content = document.getElementById("content");

    // Cargar el contenido del PDF convertido en HTML
    fetch("contenido.html")
        .then(response => response.text())
        .then(data => {
            content.innerHTML = data;
        });

    // Filtrar contenido al escribir en la barra de búsqueda
    searchBar.addEventListener("input", function() {
        let filter = searchBar.value.toLowerCase();
        let paragraphs = content.getElementsByTagName("p");

        for (let p of paragraphs) {
            let text = p.textContent || p.innerText;
            p.style.display = text.toLowerCase().includes(filter) ? "" : "none";
        }
    });
});
