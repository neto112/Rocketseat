var media, n1, n2, n3 ;
n1= prompt ("Informe a 1 nota: ");
n1= eval (n1);

n2= prompt ("Informe a 2 nota: ");
n2= eval (n2);

n3= prompt ("Informe a 3 nota: ");
n3= eval (n3);

media = (n1 + n2 + n3)/3 ;

if ( media >= 6 ) 
{
    console.log ("Aprovado");
} 
else 
{
    if (media <= 5) 
    {
        console.log ("Reprovado");
    } 
    else 
    {
        console.log ("Recuperação");
    }
    }