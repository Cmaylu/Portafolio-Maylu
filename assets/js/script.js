$(document).ready(function () {

    //evento para hacer zoom en img
    $('.col-md-32 img').on('mouseenter', function () {
        $(this).addClass('zoom');
    });

    $('.col-md-32 img').on('mouseleave', function () {
        $(this).removeClass('zoom');
    });




    //boton que muestre mensaje al completar form

   


    var modal = document.getElementById('myModal');
    var link = document.querySelector('a[href="contacto.html"]');
    var span = document.getElementsByClassName('close');


    // abrir modal y cerrar modal

    function abrirModal(e) {
        e.preventDefault();
        fetch('contacto.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('modalBody').innerHTML = data;
                modal.style.display = 'block';
    
                const closeBtn = document.querySelector('.close-btn');
                closeBtn.addEventListener('click', cerrarModal);
            });
    }
    


})


