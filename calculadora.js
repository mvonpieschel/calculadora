let operador;
      let numero1;
      
      function agregarNumero(numero) {
        document.getElementById('resultado').value += numero;
      }
      
      function operacion(op) {
        operador = op;
        numero1 = parseFloat(document.getElementById('resultado').value);
        document.getElementById('resultado').value = '';
      }
      
      function limpiar() {
        document.getElementById('resultado').value = '';
      }
      
      function calcular() {
        const numero2 = parseFloat(document.getElementById('resultado').value);
        let resultado;
        
        switch (operador) {
          case '+':
            resultado = numero1 + numero2;
            break;
          case '-':
            resultado = numero1 - numero2;
            break;
          case '*':
            resultado = numero1 * numero2;
            break;
          case '/':
            resultado = numero1 / numero2;
            break;
        }
        
        document.getElementById('resultado').value = resultado;
      }