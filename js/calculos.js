     
        function leerNumero() {
            num = parseInt(
                prompt("Porfi, escribe un número")
            );
            return num;
        }

        function mostrarResultados() {
            document.getElementById('td21').innerHTML = n;
            document.getElementById('td22').innerHTML = factorial(n);
        }

        function mostrarResultados(op,n,m=0) {
            switch (op) {
                case "multiplo":
                    document.getElementById("td11").innerHTML = n;
                    document.getElementById("td12").innerHTML = m;
                    document.getElementById("td13").innerHTML =  multiplosDeHasta(n,m)
                break;
                case 'factorial':
                    document.getElementById('td21').innerHTML = n;
                    document.getElementById('td22').innerHTML = factorial(n);
                break;            
                default:
            }
                   
            
        }

        function factorial(n) {
            var factorial = 1;
            for ( i=1; i <= n; i++ ) {
                factorial = factorial * i;
            }

            return factorial;
        }
        function multiplosDeHasta(n,m){
            mensaje ="Los múltiplos de "
            +  n  +
             " hasta "
             +  m  +
             " son: ";

            multiplo = 0;
            //for (i=1; multiplo < m ; i ++) {
              //  multiplo = n*i;
              //  mensaje = mensaje + multiplo + " ";
            //}
            //inicialización de la variable con while
            i=1;
             while( multiplo < m ){
                 multiplo= n* i;
                 mensaje = mensaje + multiplo + "";
                 //incremento
                 i++;
                 }
             
        return mensaje;
        }

        function mostrarMultiplos(n,m){
        document.getElementById("td11").innerHTML = n;
        document.getElementById("td12").innerHTML = m;
        document.getElementById("td13").innerHTML =  multiplosDeHasta(n,m); 
        
        } 
        

function sumar(s1,s2){
    var suma = s1 + s2;
    return suma;
}

function multiplicar(f1, f2){
    var producto = f1*f2;
    return producto;    
}
        