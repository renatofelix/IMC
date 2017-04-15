//alert("Carregando script num arquivo externo.");

function calcular() {
  var peso = document.formulario.peso.value;
  var altura = document.formulario.altura.value;
  var sexo = document.formulario.sexo.value;
  var imc;
  var situacao;
   imc = peso / (Math.pow(altura,2));
   if(imc < 17)
   {
     situacao = "Muito abaixo do peso";
   }
   else if(imc >=17 && imc <= 18.49 )
   {
     situacao = "Abaixo do peso";
   }
   else if(imc >=18.5 && imc <= 24.99 )
   {
     situacao = "Peso normal";
   }
   else if(imc >=25 && imc <= 29.99 )
   {
     situacao = "Acima do peso";
   }
   else if(imc >=30 && imc <= 34.99)
   {
     situacao = "Obesidade I";
   }
   else if(imc >=35 && imc <= 39.99 )
   {
     situacao = "Obesidade II (severa)";
   }
   else if(imc > 40 )
   {
     situacao = "Obesidade III (mórbida)";
   }
   alert(situacao);

}