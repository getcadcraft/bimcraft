---
title: Comprobar calefacción e refrixeración con EnergyPlus
summary: Escriba o modelo como ficheiro de EnergyPlus, ou execute EnergyPlus versión 26.2.0 sobre el no navegador, e compare as súas cargas de deseño coa axuda rápida de calefacción e refrixeración. Unha segunda opinión para o deseño inicial, non un cálculo de cumprimento normativo.
keywords: energyplus, simulación enerxética, día de deseño, carga de calefacción, carga de refrixeración, ficheiro meteorolóxico, epw, idf, masa térmica, enerxía anual, simular
from: b82a5bf2
---

## Que vai facer

O panel **Comprobar con EnergyPlus** escribe o modelo aberto como ficheiro de entrada de EnergyPlus (un IDF): unha zona por cuarto, os muros, chans, cubertas e xanelas cos seus valores U, as renovacións de aire e a calefacción e refrixeración ideais. Sempre pode **gardar ese ficheiro** e executalo no seu propio EnergyPlus.

Se tamén configura o motor, o panel pode simular no momento e mostra a calefacción e a refrixeración de deseño de EnergyPlus xunto ás da axuda rápida, cuarto por cuarto.

Isto é unha axuda de deseño. As normas enerxéticas, as certificacións e os permisos necesitan unha ferramenta aprobada e os datos climáticos que esta require, e o resultado debe revisalo a persoa que responde por el.

## Configurar o motor

BimCraft non inclúe EnergyPlus. É unha compilación WebAssembly grande (uns 6 MB comprimidos, máis un ficheiro de datos de 4,6 MB), así que o aloxa vostede e escribe o seu enderezo no panel. A páxina cárgao só cando preme un botón de simulación, nunca ao iniciar. O enderezo debe ser https, unha ruta deste sitio ou localhost.

## Días de deseño ou un ano

- **Simular días de deseño** non necesita ficheiro meteorolóxico. Executa un día frío de inverno sen sol e un día de verán quente e despexado, coas temperaturas das entradas de calefacción e refrixeración da pestana Luz do día, e informa da carga de cada cuarto en vatios.
- **Simular un ano** necesita un ficheiro meteorolóxico en formato EPW que escolla. Engade ocupantes, luces e equipos das mesmas entradas (sempre activos, xa que non se inventa ningún calendario) e informa da enerxía de calefacción e refrixeración de cada cuarto en kWh. Os ficheiros meteorolóxicos teñen as súas propias licenzas, así que use un que poida usar.

## Masa térmica

Marque **Dar masa térmica aos muros con capas coñecidas** e os muros, cubertas e chans cuxas capas de material se coñecen escríbense capa por capa, coa densidade e o calor específico tomados dunha pequena táboa de valores típicos segundo o nome do material. As capas tómanse primeiro desde o exterior, na orde en que o ficheiro as enumera. Os elementos sen capas quedan co seu valor U e sen masa.

## Lectura da comparación

Os dous métodos responden a preguntas un pouco distintas. A axuda rápida conserva cada elemento; o ficheiro de EnergyPlus promedia os valores U de cada cuarto por tipo de superficie. Unha diferenza superior ao 15 % na calefacción de deseño dun cuarto aparece como nota no panel ⚠, con as dúas cifras. A refrixeración difire máis por deseño: a axuda rápida calcula un pico a partir do sol nunha data, mentres que EnergyPlus dimensiona no seu propio día de deseño.
