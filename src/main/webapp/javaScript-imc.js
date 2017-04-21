//alert("Carregando script num arquivo externo.");

function calcular() {
  var peso = document.formulario.peso.value;
  var altura = document.formulario.altura.value;
  var sexo = document.formulario.sexo.value;
  var imc;
  var situacao;
   imc = peso / (Math.pow(altura,2));
   if(imc < 19.1 && sexo == "mulher")
   {
     situacao = "Abaixo do peso";
   }
   else if(imc < 20.7 && sexo == "homem")
   {
     situacao = "Abaixo do peso";
   }
   else if(imc >=19.1 && imc <= 25.8 && sexo == "mulher")
   {
     situacao = "No peso normal";
   }
   else if(imc >=20.7 && imc <= 26.4 && sexo == "homem")
   {
     situacao = "No peso normal";
   }
   else if(imc >=25.8 && imc <= 27.3 && sexo == "mulher")
   {
     situacao = "Marginalmente acima do peso";
   }
   else if(imc >=26.4 && imc <= 27.8 && sexo == "homem")
   {
     situacao = "Marginalmente acima do peso";
   }
   else if(imc >=27.3 && imc <= 32.3 && sexo == "mulher")
   {
     situacao = "Acima do peso ideal";
   }
   else if(imc >=27.8 && imc <= 31.1 && sexo == "homem")
   {
     situacao = "Acima do peso ideal";
   }
   else if(imc > 32.3 && sexo == "mulher")
   {
     situacao = "Obeso";
   }
   else if(imc > 31.1 && sexo == "homem")
   {
     situacao = "Obeso";
   }

   alert(situacao);

}