//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=100; timeIni=100; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=8;
var score=0; scoreMax=3; scoreInc=3; scoreDec=2;
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#DAAFE0"; colorButton="#C0C0C0"; colorText="#000000"; colorSele="#C840A3";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡FELICIDADES, PUDISTE LOGRARLO!"; messageTime="El tiempo está corriendo :O"; messageError="Lo siento, no lo lograste:'("; messageErrorG="Lo siento, no lo lograste:'("; messageAttempts="Ya no te quedan más intentos:("; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#ABD361";borderError="#FF0000"; borderAttempts="#942E96";
var wordsGame="Q1JVQ0lHUkFNQUE="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Qw==","QQ==","Tg==","QQ==","Ug==","SQ==","QQ==","Uw==","","","","","Qg==","","RQ=="],["QQ==","Tg==","RA==","QQ==","TA==","VQ==","Qw==","SQ==","QQ==","","","Qw==","QQ==","","WA=="],["Uw==","","","","","","","","","","","QQ==","TA==","","VA=="],["VA==","","Rw==","QQ==","TA==","SQ==","Qw==","SQ==","QQ==","","","Tg==","RQ==","","Ug=="],["SQ==","","","","","","","","","","","VA==","QQ==","","RQ=="],["TA==","","Tg==","QQ==","Vg==","QQ==","Ug==","Ug==","QQ==","","","QQ==","Ug==","","TQ=="],["TA==","","","","","","","","","","","Qg==","RQ==","","QQ=="],["QQ==","Uw==","VA==","VQ==","Ug==","SQ==","QQ==","Uw==","","","","Ug==","Uw==","","RA=="],["WQ==","","","","","","","","","","","SQ==","","","VQ=="],["TA==","","","","TQ==","VQ==","Ug==","Qw==","SQ==","QQ==","","QQ==","","","Ug=="],["RQ==","","Vg==","QQ==","TA==","RQ==","Tg==","Qw==","SQ==","QQ==","","","","","QQ=="],["Tw==","","","","","UA==","QQ==","SQ==","Uw==","Vg==","QQ==","Uw==","Qw==","Tw==",""],["Tg==","","TA==","QQ==","Ug==","SQ==","Tw==","Sg==","QQ==","","","","","",""],["","","","","","","","","","TQ==","QQ==","RA==","Ug==","SQ==","RA=="],["Qw==","QQ==","VA==","QQ==","TA==","VQ==","w5E=","QQ==","Uw==","","","","","",""]];
var x1=[3,4,1,3,3,1,1,1,3,10,13,12,5,1,3,5,6,15];
var y1=[1,1,2,4,6,15,1,8,11,14,1,2,1,1,13,10,12,1];
var x2=[3,4,9,9,9,9,1,8,10,15,13,12,5,8,9,10,14,15];
var y2=[2,2,2,4,6,15,13,8,11,14,8,10,2,1,13,10,12,11];
var imaCW=["","","CRUCIGRAMAA_resources/media/Andalucia.jpg","CRUCIGRAMAA_resources/media/galicia.jpg","CRUCIGRAMAA_resources/media/navarra.jpg","CRUCIGRAMAA_resources/media/catalu__a.jpg","CRUCIGRAMAA_resources/media/castilla_y_leon.jpg","CRUCIGRAMAA_resources/media/asturias.jpg","CRUCIGRAMAA_resources/media/valencia.jpg","CRUCIGRAMAA_resources/media/madrid.jpg","CRUCIGRAMAA_resources/media/istockphoto-1139484843-170667a.jpg","CRUCIGRAMAA_resources/media/cantabria.jpg","","CRUCIGRAMAA_resources/media/islas_canarias.jpg","CRUCIGRAMAA_resources/media/mapa-de-la-rioja-ilustraci__n-detallada-y-precisa-del-168876993.jpg","CRUCIGRAMAA_resources/media/murcia.jpg","CRUCIGRAMAA_resources/media/pais_vasco.jpg","CRUCIGRAMAA_resources/media/75eec9b48ad680f4f6fabda11082dc20.jpg"];
var audioCW=["","","","","","","","","","","","","","","","","",""];
var defCW=["","","","","","","","","","","","","","","","","",""];
var altCW=["","","","","","","","","","","","","","","","","",""];
var colNum=15;
var rowNum=15;
