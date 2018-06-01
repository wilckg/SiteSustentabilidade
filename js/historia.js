var app = angular.module('app', []);

app.controller('HomeController', function($scope) {
  
  $scope.dates = [
    1965,1968,1970,1972,1975,1979,1980,1985,1987,1990,1992,1994,1995,1996,1997,2000,2002,2004,2005,2006,2007,2009,2010
  ];
  
  $scope.goal_real_estate = false;
  
  for (x in $scope.dates) {
      if($scope.dates[x]== 1968){
        $scope.goal_real_1_1968 = true;
      }else if($scope.dates[x]== 1972){
        $scope.goal_real_2_1972 = true; 
      }else if($scope.dates[x]== 1979){
        $scope.goal_real_3_1979 = true; 
      }else if($scope.dates[x]== 1980){
        $scope.goal_real_4_1980 = true; 
      }else if($scope.dates[x]== 1987){
        $scope.goal_real_5_1987 = true; 
      }else if($scope.dates[x]== 1992){
        $scope.goal_real_6_1992 = true; 
      }else if($scope.dates[x]== 1994){
        $scope.goal_real_7_1994 = true; 
      }else if($scope.dates[x]== 1996){
        $scope.goal_real_8_1996 = true;
      }else if($scope.dates[x]== 1997){
        $scope.goal_real_9_1997 = true; 
      }else if($scope.dates[x]== 2000){
        $scope.goal_real_10_2000 = true; 
      }else if($scope.dates[x]== 2002){
        $scope.goal_real_11_2002 = true; 
      }else if($scope.dates[x]== 2004){
        $scope.goal_real_12_2004 = true; 
      }else if($scope.dates[x]== 2006){
        $scope.goal_real_13_2006 = true; 
      }else if($scope.dates[x]== 2007){
        $scope.goal_real_14_2007 = true; 
      }else if($scope.dates[x]== 2009){
        $scope.goal_real_15_2009 = true; 
      }
  }
  
});
$(document).ready(function(e) {
  var viewport =Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  console.log(viewport);

  
  $('a').click(function(e){
    e.preventDefault()
  })

  $('.goal_wrap').click(function(){
    var diff = $(this).parent()[0].offsetLeft;
    $('.date .goal_wrap').removeClass('active bounce');
    $(this).addClass('active bounce');
    console.log(diff);
    console.log((viewport - diff));
TweenLite.to($('.date').parent(), 1, {x:((viewport*0.5) - diff), onComplete:function(){
        console.log('success');
        /*TweenLite.to($('.timeline'), 1, {top:"50%"});*/
      }});  
  });
  
  $('.goal_real_1').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
	document.getElementById('campo').innerHTML = "";
	document.getElementById('campo1').innerHTML = "";
	$(".titulo").append("Criação do Clube de Roma");
	$(".texto").append("A criação do Clube de Roma, em 1968, reuniu pessoas em cargos de relativa importância em seus respectivos países e visa promover um crescimento económico estável e sustentável da humanidade. O Clube de Roma tem, entre seus membros principais cientistas, inclusive alguns prémios Nobel, economistas, políticos, chefes de estado e até mesmo associações internacionais.");
    $(this).css('background-image', 'url(img/2.jpg)');
}).fadeTo('slow', 4);

	});
  
$('.goal_real_2').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
	document.getElementById('campo').innerHTML = "";
	document.getElementById('campo1').innerHTML = "";
	$(".titulo").append("Conferência sobre o Ambiente Humano das Nações Unidas (Estocolmo)");
	$(".texto").append("O Clube de Roma publicou o relatório Os limites do crescimento, preparada a seu pedido por uma equipa de pesquisadores do Massachusetts Institute of Technology. Este relatório apresenta os resultados da simulação em computador, da evolução da população humana com base na exploração dos recursos naturais, com projecções para 2100. Mostra que, devido à prossecução do crescimento económico durante o século XXI é de prever uma redução drástica da população devido à poluição, a perda de terras aráveis e da escassez de recursos energéticos.Em 16 de Junho de 1972 inicia-se a Conferência sobre o Ambiente Humano das Nações Unidas (Estocolmo). É a primeira Cimeira da Terra. Ocorre pela primeira vez a nível mundial a preocupação com as questões ambientais globais.");
    $(this).css('background-image', 'url(img/3.jpg)');
}).fadeTo('slow', 1);

  });  
  
$('.goal_real_3').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
	document.getElementById('campo').innerHTML = "";
	document.getElementById('campo1').innerHTML = "";
	$(".titulo").append("Princípio responsabilidade");
	$(".texto").append("Em 1979 o filósofo Hans Jonas exprime a sua preocupação no livro Princípio responsabilidade.");
    $(this).css('background-image', 'url(img/4.jpg)');
}).fadeTo('slow', 1);
	
  });

$('.goal_real_4').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
	document.getElementById('campo').innerHTML = "";
	document.getElementById('campo1').innerHTML = "";
	$(".titulo").append("A Estratégia Global para a conservação");
	$(".texto").append('Em 1980, A União Internacional para a Conservação da Natureza publicou um relatório intitulado "A Estratégia Global para a conservação", onde surge pela primeira vez o conceito de" desenvolvimento sustentável ".');
    $(this).css('background-image', 'url(img/5.jpg)');
}).fadeTo('slow', 1);

  });

$('.goal_real_5').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
	document.getElementById('campo').innerHTML = "";
	document.getElementById('campo1').innerHTML = "";
	$(".titulo").append("O Relatório Brundtland (Our Common Future)");
	$(".texto").append("O Relatório Brundtland, Our Common Future, preparado pela Comissão Mundial sobre Meio Ambiente e Desenvolvimento em 1987, onde foi pela primeira vez formalizado o conceito de desenvolvimento sustentável.");
    $(this).css('background-image', 'url(img/6.jpg)');
}).fadeTo('slow', 1);

  });

$('.goal_real_6').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
	document.getElementById('campo').innerHTML = "";
	document.getElementById('campo1').innerHTML = "";
	$(".titulo").append("<p style='color:#000000;'>Segunda Cimeira da Terra<br> Nascimento da Agenda 21</p>");
	$(".texto").append('<p style="color:#000000;">De 3 a 14 de Junho de 1992, realizou-se a Conferência das Nações Unidas sobre o Ambiente e Desenvolvimento (segunda "Cimeira da Terra"), onde nasce a Agenda 21, e são aprovadas a Convenção sobre Alterações Climáticas, Convenção sobre Diversidade Biológica (Declaração do Rio), bem como a Declaração de Princípios sobre Florestas.</p>');
    $(this).css('background-image', 'url(img/7.jpg)');
}).fadeTo('slow', 1);

  });

$('.goal_real_7').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{	document.getElementById('campo').innerHTML = "";
	document.getElementById('campo1').innerHTML = "";
	$(".titulo").append("<p style='color:black;'>V Programa Acção Ambiente da União Europeia<br> Primeira Conferência sobre Cidades Europeias Sustentáveis</p>");
	$(".texto").append("<p style='color:black;'>Em 1994 acontece o V Programa Acção Ambiente da União Europeia: Rumo a um desenvolvimento sustentável. Apresentação da nova estratégia da UE em matéria de ambiente e as acções a serem tomadas para alcançar um desenvolvimento sustentável para o período 1992-2000.<br><br>27 de maio de 1994 - Primeira Conferência sobre Cidades Europeias Sustentáveis. Aalborg (Dinamarca), de onde surgiu a Carta de Aalborg.</p>");
    $(this).css('background-image', 'url(img/8.jpg)');
}).fadeTo('slow', 1);

  });

$('.goal_real_8').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
	document.getElementById('campo').innerHTML = "";
	document.getElementById('campo1').innerHTML = "";
	$(".titulo").append("Segunda Conferência sobre Cidades Europeias Sustentáveis");
	$(".texto").append("8 de Outubro de 1996 - Segunda Conferência sobre Cidades Europeias Sustentáveis. Plano de Acção de Lisboa: da Carta à acção.");
    $(this).css('background-image', 'url(img/9.jpg)');
}).fadeTo('slow', 1);

  });

$('.goal_real_9').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
	document.getElementById('campo').innerHTML = "";
	document.getElementById('campo1').innerHTML = "";
	$(".titulo").append("<p style='color:#000000;'>3ª Conferência das Nações Unidas sobre as Alterações Climáticas</p>");
	$(".texto").append("<p style='color:#000000;'>1997 - 3 ª Conferência das Nações Unidas sobre as Alterações Climáticas, em Quioto, onde se estabelece o Protocolo de Quioto.</p>");
    $(this).css('background-image', 'url(img/10.jpg)');
}).fadeTo('slow', 1);

  });

$('.goal_real_10').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
	document.getElementById('campo').innerHTML = "";
	document.getElementById('campo1').innerHTML = "";
	$(".titulo").append("Cimeira do Milénio<br>Terceira Conferência Europeia sobre Cidades Sustentáveis");
	$(".texto").append("8 de Setembro de 2000 - Após os três dias da Cimeira do Milénio de líderes mundiais na sede das Nações Unidas, a Assembleia Geral aprovou a Declaração do Milênio.<br><br>2000 - Terceira Conferência Europeia sobre Cidades Sustentáveis.");
    $(this).css('background-image', 'url(img/11.jpg)');
}).fadeTo('slow', 1);

  });

$('.goal_real_11').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
	document.getElementById('campo').innerHTML = "";
	document.getElementById('campo1').innerHTML = "";
	$(".titulo").append("<p style='color:#000000;'> Conferência Mundial sobre o Desenvolvimento Sustentável (Rio + 10)</p>");
	$(".texto").append("<p style='color:#000000;'>De 26 a 4 de Setembro de 2002 - Conferência Mundial sobre o Desenvolvimento Sustentável (Rio + 10), em Joanesburgo, onde reafirmou o desenvolvimento sustentável como o elemento central da agenda internacional e se deu um novo impulso à acção mundial para combater a pobreza assim como a protecção do ambiente.</p>");
    $(this).css('background-image', 'url(img/12.jpg)');
}).fadeTo('slow', 1);

  });

$('.goal_real_12').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
	document.getElementById('campo').innerHTML = "";
	document.getElementById('campo1').innerHTML = "";
	$(".titulo").append(" Conferência sobre Diversidade Biológica<br>  Conferência Aalborg +10");
	$(".texto").append("Fevereiro de 2004 - A sétima reunião ministerial da Conferência sobre Diversidade Biológica foi celebrado com a Declaração Kuala Lumpur, que gerou descontentamento entre os países pobres e não satisfez plenamente as nações ricas.<br><br>2004 - Conferência Aalborg +10 - Inspiração para o futuro. Apelo a todos os governos locais e regionais da Europa para participar na assinatura do compromisso de Aalborg e fazerem parte da Campanha Europeia das Cidades Sustentáveis e Cidades.");
    $(this).css('background-image', 'url(img/13.jpg)');
}).fadeTo('slow', 1);

  });

$('.goal_real_13').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{	
	document.getElementById('campo').innerHTML = "";
	document.getElementById('campo1').innerHTML = "";
	$(".titulo").append("<p style='color:#000000;'> Sexto Programa de Acção Ambiental para o Ambiente da União Europeia</p>");
	$(".texto").append("<p style='color:#000000;'>11 de Janeiro de 2006 - Comunicação da Comissão Europeia ao Parlamento Europeu sobre a Estratégia temática sobre o ambiente urbano. É uma das sete estratégias do Sexto Programa de Acção Ambiental para o Ambiente da União Europeia, desenvolvido com o objectivo de contribuir para uma melhor qualidade de vida através de uma abordagem integrada e centrada nas zonas urbanas e para tornar possível um elevado nível de qualidade de vida e bem-estar social para os cidadãos, proporcionando um ambiente em que níveis da poluição não têm efeitos adversos sobre a saúde humana e o ambiente assim como promover o desenvolvimento urbano sustentável</p>");
    $(this).css('background-image', 'url(img/14.jpg)');
}).fadeTo('slow', 1);

  });
  
$('.goal_real_14').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{	
	document.getElementById('campo').innerHTML = "";
	document.getElementById('campo1').innerHTML = "";
	$(".titulo").append("Carta de Leipzig<br> ");
	$(".texto").append("2007 - Carta de Leipzig sobre as cidades europeias sustentáveis.<br><br>2007 - Cimeira de Bali, com o intuito de criar um sucessor do Protocolo de Quioto, com metas mais ambiciosas e mais exigente no que diz respeito às alterações climáticas.");
    $(this).css('background-image', 'url(img/15.jpg)');
}).fadeTo('slow', 1);

  });  
  
$('.goal_real_15').click(function(){
    console.log('goal click');
$('body').fadeTo('ease', 0.3, function()
{
	document.getElementById('campo').innerHTML = "";
	document.getElementById('campo1').innerHTML = "";
	$(".titulo").append("<p style='color:#000000;'>Declaração de Gaia</p>");
	$(".texto").append("<p style='color:#000000;'>Julho de 2009 - Declaração de Gaia, que implanta o Condomínio da Terra no I Fórum Internacional do Condomínio da Terra.</p>");
    $(this).css('background-image', 'url(img/16.jpg)');
}).fadeTo('slow', 1);

  });
    $(".titulo").append("<p style='color:#000000;'>História do Desenvolvimento Sustentável</p>");
});