// script.js

// Función para agregar el valor presionado al display
function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  // Función para borrar el contenido del display
  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
  
  // Función para calcular el resultado de la operación
  function calculateResult() {
    const display = document.getElementById('display');
    try {
      // Evaluar la expresión con eval (solo para uso controlado)
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }