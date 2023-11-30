
  let abrirModal = document.querySelector('[data-id="abrir1"]'); // Seleccionamos el boton que abre el modal
  let cerrarModal = document.querySelector('[data-id="cerrar1"]'); // Seleccionamos el boton que cierra el modal
  let modal = document.querySelector('[data-id="modal1"]'); // Seleccionamos el modal

  abrirModal.addEventListener('click', () => {
    modal.showModal();
  });

  cerrarModal.addEventListener('click', () => {
    modal.close();
  });


  let abrirModal2 = document.querySelector('[data-id="abrir2"]'); // Seleccionamos el boton que abre el modal
  let cerrarModal2 = document.querySelector('[data-id="cerrar2"]'); // Seleccionamos el boton que cierra el modal
  let modal2 = document.querySelector('[data-id="modal2"]'); // Seleccionamos el modal

  abrirModal2.addEventListener('click', () => {
    modal2.showModal();
  });

  cerrarModal2.addEventListener('click', () => {
    modal2.close();
  });

