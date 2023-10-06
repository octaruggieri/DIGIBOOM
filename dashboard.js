const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
      });

    //   searchBtn.addEventListener("click", () =>{
    //     sidebar.classList.remove("close");
    //   });

      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");


        if(body.classList.contains("dark")){
            modeText.innerText = "Light Mode"
        }else{
            modeText.innerText = "Dark Mode"
        }
      });




      // Obtén una lista de todos los botones "Ver Más"
var verMasButtons = document.querySelectorAll('.ver-mas-button');

// Agrega un controlador de eventos a cada botón
verMasButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Encuentra el elemento .detalle-mas correspondiente
        var detalleMas = button.nextElementSibling;

        // Verifica si los detalles están visibles o no
        if (detalleMas.style.display === 'block') {
            // Si están visibles, ocúltalos
            detalleMas.style.display = 'none';
        } else {
            // Si no están visibles, muéstralos
            detalleMas.style.display = 'block';
        }
    });
});

// Obtén todos los botones "Ver Más" y agrégalos a una lista
var verMasButtons = document.querySelectorAll('.ver-mas-button');

// Agrega un controlador de eventos a cada botón "Ver Más"
verMasButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Encuentra el elemento .image-box padre más cercano
        var imageBox = this.closest('.image-box');

        // Encuentra el elemento .detalle-mas dentro del .image-box
        var detalleMas = imageBox.querySelector('.detalle-mas');

        // Obtén el texto actual del botón
        var buttonText = this.textContent;

        // Alternar la clase "active" en el elemento .image-box
        if (imageBox.classList.contains('active')) {
            imageBox.classList.remove('active');
            detalleMas.style.maxHeight = null; // Restablece la altura máxima
            // Cambia el texto del botón a "Ver Más"
            this.textContent = 'Ver Más';
        } else {
            imageBox.classList.add('active');
            detalleMas.style.maxHeight = detalleMas.scrollHeight + 'px'; // Establece la altura máxima para mostrar todo el contenido
            // Cambia el texto del botón a "Ver Menos"
            this.textContent = 'Ver Menos';
        }
    });
});

