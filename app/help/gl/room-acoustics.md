---
title: Comprobe a reverberación dun cuarto e escóitea
summary: Tempo de reverberación por banda de oitava para cada cuarto (Sabine e Eyring) a partir do seu tamaño e dos acabados, un obxectivo propio, e unha voz, unha palmada ou música reproducidas a través dunha resposta impulsional calculada do cuarto.
keywords: acústica, reverberación, tempo de reverberación, rt60, sabine, eyring, absorción, eco, son, escoitar, resposta impulsional, fala, aula, oficina, moqueta, placa de teito, ruído
from: 16996cbb
---

A sección {{ui:Room acoustics}} do panel esquerdo calcula canto tempo perdura o son en cada cuarto. Le a superficie, a altura, os muros, as portas e as xanelas de cada cuarto desde o modelo IFC aberto. Non se cambia nada no modelo.

## Escolla os acabados

Cando o modelo indica o que cobre unha superficie, o cuarto lé esa información: a capa interior do tipo de cada muro (xeso, revoco, ladrillo, formigón e bloque están recoñecidos), o tipo de chan (madeira ou formigón) e se un teito é de placas. A etiqueta xunto a cada opción indica se o dato procede do modelo, é un valor predeterminado ou é unha escolla súa; escolla outro acabado para substituílo. Calquera cousa que o modelo non indique queda no valor predeterminado. Os coeficientes son **valores publicados típicos**; substitúaos polos datos de ensaio dun produto cando os teña. Escriba un **obxectivo** (a reverberación de frecuencia media máis longa que desexa) e calquera cuarto que o supere mostrará un aviso, coa absorción que o reduciría.

## Lea a táboa

A reverberación móstrase de 125 Hz a 4 kHz. Sabine adécuase ás salas con reverberación e Eyring ás salas apagadas; a liña marcada *Usado* toma Eyring cando a absorción media é superior a 0,2. Inclúese a absorción do aire (acurta as bandas agudas en salas grandes). É un modelo estatístico: supón que o son se reparte por igual, así que as salas longas ou planas e as moi pequenas son unha guía aproximada, e non se contan o mobiliario, as persoas nin as portas abertas.

## Escoite

{{ui:Play it in this room}} reproduce unha voz (feita aquí), unha palmada, notas punteadas ou **o seu propio ficheiro de son** (queda no seu ordenador) a través dunha resposta impulsional calculada para o cuarto: o son directo, as primeiras reflexións dunha caixa dese tamaño e unha cola que se apaga co tempo de reverberación propio do cuarto en cada banda. {{ui:Play it dry}} reproduce o mesmo son ao mesmo nivel, sen o cuarto. Pode gardar a resposta impulsional ou o son do cuarto como ficheiros WAV. Soa como un cuarto dese tamaño e acabado, non como ningún cuarto real.

## Persoas e mobiliario

Escriba o número de **persoas neste cuarto** para engadir a súa absorción. O mobiliario que contén o modelo (sofás, camas, cadeiras, mesas, armarios, recoñecidos polo nome) engade a súa propia. As cifras son valores aproximados de planificación, redondeados; substitúaos por medicións nun cuarto importante.

## Fonte e oínte

En {{ui:Source and listener}}, prema en {{ui:Place the source}} ou {{ui:Place the listener}} e prema na planta do cuarto. O son que reproduce escóitase desde ese punto: o son directo chega despois da distancia, e a parte reverberante está ao nivel correspondente a esa distancia. Limpe os dous para volver á caixa de distancia.

## Absorción desigual e modos do cuarto

En {{ui:Uneven absorption (box room)}}, escriba o cuarto como unha caixa e escolla os acabados do chan, do teito e das paredes. A táboa engade Fitzroy e Arau-Puchades a Sabine e Eyring: tratan por separado os tres pares de superficies opostas, así que un cuarto con moqueta e teito duro non se lé demasiado curto. Cando os pares difiren moito, unha nota indica en cal confiar. Debaixo da táboa, **Modos do cuarto** lista as ondas estacionarias máis baixas da caixa e a frecuencia por debaixo da cal o cuarto ten modos separados en lugar dun campo sonoro uniforme. Son predicións para un cuarto en caixa, unha axuda ao deseño e non unha medición.

## Unidades

As superficies, alturas, volumes e distancias do cuarto móstranse nas {{ui:Units}} que escolleu (pés e polgadas cadrados e cúbicos, polgadas, milímetros, centímetros ou metros). O cálculo en si mantense en SI; só cambia a visualización. Os tempos (segundos), as frecuencias e os niveis non cambian.
