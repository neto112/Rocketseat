/* ### Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou
    fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9
    F = C * 9/5 + 32

*/

function fahrenheit(celsius) 
{
    let TemperaturaC = celsius;
    let fahrenheit = TemperaturaC * 9 / 5 + 32;
        console.log (fahrenheit);
}


function celsius(fahrenheit)
{
    let fTemp = fahrenheit;
    let celsius = (fTemp - 32) * 5/9;
        console.log(celsius);
}
fahrenheit(16);
celsius(56);
