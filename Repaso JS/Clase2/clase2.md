# Clase 2
1. si tenemos dos strings (Que son numeros) y usamos otra operacion distintas a '+' 
    va a tratarlo como numero (-, *, /).
1. Si para castear a int o float en lugar de usar ParseInt() o parsefloat usar Number() si le pasas un     
    booleano te lo pasa a 1 (true) o 0 (false).
1. Podemos hacer un document.write("a text") para escribir en el documento
1. Parametros y argumentos Diferencias, parametro es la representacion simbolica de un valor en la definicion de la funcion, el argumento es el valor con el que invocamos a la funcion. 
1. Si estamos concadenando strings y luego hacemos + num1 + num2 (siendo num1 y num2 enteros), los va a concadenar a pesar de que son numeros. // con num1 = 2 y num2 = 4
    ej: console.log("la suma total es: " + num1 + num2 )  // la suma total es: 24.
    Solucion hacer (num1 + num2)
1. impractico lo de arriba por eso usamos plantillas literales literal templates.
1. callback es la funcion que se pasa como argumento a otra funcion. 
1. operacion seria un callback entonces, sumar,restar,etc son funciones.
1. Arrow functions:
    1. Sin las llaves cuando hacemos una unica linea y a la lvez retornamos. 
    1. Si tiene un unico parametro podemos quitarle los parentensis. de los parametros.

1. Call backs:
    1. Es una funcion que se pasa como argumento a otra funcion
    ```
    let multiplicar = (num1, num2) => num1 *num2;
    let dividir = (num1, num2) => num1/num2;
    let calculadora = (num1, num2, operacion) => operacion(num1, num2)
    ```
    1. Aca 🔝 el callback es "operacion", multiplcar y diviidir son funciones. 
1.     
