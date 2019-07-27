'use strict';

const collapsibleTriggers = document.querySelectorAll('.collapsible__trigger');

function updateCollapsible(event) {
  const currentCollapsible = event.currentTarget.parentElement;

  // Compruebo si está abierto
  if (currentCollapsible.classList.contains('collapsable--open')) {
    // Si está abierto, lo puedo cerrar
    currentCollapsible.classList.remove('collapsable--open');
  } else {
    // Si está cerrado:
      // Los cierro todos
    for (const item of collapsibleTriggers) {
      item.parentElement.classList.remove('collapsable--open');
    }
    // Abro el correcto
    currentCollapsible.classList.add('collapsable--open');
  }
  
}

for (const item of collapsibleTriggers) {
  item.addEventListener('click', updateCollapsible);
}