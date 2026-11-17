---
title: Medir distancias, áreas das caras e localizacións en 3D
summary: Medir entre dous puntos dun modelo IFC con axuste ás esquinas e aos bordos, ler a diferenza en X, Y e Z, e medir a área dunha cara plana.
keywords: medir, medición, distancia, lonxitude, cota, área, área da cara, axuste, esquina, bordo, cinta, regra, espazo libre, localización, latitude, lonxitude xeográfica, coordenadas, xeorreferencia, conversión de mapa, EPSG, levantamento, este, norte, WGS 84, datum
from: 5f430bba
---

## O que vai facer

Comprobar un espazo libre, a lonxitude dun muro ou o tamaño dunha cara directamente do modelo, sen abrir o programa de deseño.

## Pasos

1. Abra un modelo IFC.
2. Prema en {{ui:Measure}} na barra de ferramentas, ou en {{key:M}}. Abre unha barra na parte inferior da vista.
3. **Unha distancia:** con {{ui:Distance}} escollida, prema no primeiro punto e logo no segundo. Preto dunha esquina o punteiro axústase a ela; preto dun bordo, ao bordo. A pequena etiqueta xunto ao punteiro indica cal. Cada par de premas fai unha medición.
4. **A área dunha cara:** escolla {{ui:Face area}} e prema nunha cara. Iluminase toda a cara plana e mostra a súa área.
5. **Liñas rectas:** manteña {{key:Shift}} mentres escolle o segundo punto, ou prema en {{ui:Straight}} na barra para mantela. A liña segue entón o eixe ao que o punteiro está máis próximo (nunha vista en planta, segundo X ou Y da planta; noutras vistas, segundo X, Y ou Z), e a etiqueta do punteiro di «recta segundo un eixe». {{key:M}} segue iniciando e deténdo Medir.
6. Prema en {{ui:Clear}} para retirar as medicións, ou en {{ui:Done}} (ou {{key:Esc}}) para deixar de medir.

## Que debe ver

- Unha liña entre os dous puntos coa súa lonxitude enriba, e na barra a lonxitude co avance en X, Y e Z (nos eixes do modelo, Z cara arriba), todo na {{ui:Units}} escollida na barra de ferramentas.
- A área dunha cara en metros cadrados, sobre a cara e na barra.
- As etiquetas permanecen nas súas medicións mentres orbita, desprazase e amplía.
- Mentres mide, os clics non seleccionan elementos. Un plano ou unha caixa de corte segue cortando o modelo, e pode medir o que mostra, incluídas as caras cortadas.

## Onde está un punto na terra

Prema en {{ui:Location}} na barra de medición e logo nun punto do modelo (axústase a esquinas e bordos, como nas distancias). A barra mostra:

- a **latitude e lonxitude**, en graos decimais e en graos, minutos e segundos, en WGS 84 para comezar;
- as **coordenadas de mapa** (este e norte, escritas na {{ui:Units}} escollida na barra de ferramentas) no sistema de mapa propio do modelo, por exemplo `EPSG:28356`;
- a **altura** e o datum vertical que indica o ficheiro, e o **datum propio** do ficheiro (por exemplo GDA94).

{{ui:Copy}} copia todo nunha soa liña ao portapapeis. Cambie o sistema da latitude e lonxitude en {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Location}}: WGS 84 (como GPS e os mapas web), o datum propio do ficheiro, ou outro común como ETRS89 ou NAD83.

Isto precisa un modelo xeorreferenciado: un exportado con coordenadas de mapa (unha conversión de mapa a un sistema proxectado cun código EPSG). Un modelo que só ten latitude e lonxitude do emprazamento obtén unha posición aproximada, calculada a partir do punto do emprazamento e do seu norte verdadeiro, e a barra díao. Con varios modelos abertos, cada punto usa a xeorreferencia do seu propio modelo.

:::note
Pasar entre datums (por exemplo de GDA94 a WGS 84) faise sen ficheiros de rede, así que é boa a uns poucos metros; a liña de estado indica a calidade. As coordenadas de mapa en si son exactas.
:::

## Erros frecuentes

- **"…non ten xeorreferencia".** O ficheiro non ten conversión de mapa nin latitude e lonxitude do emprazamento. Expórteo de novo con o seu sistema de coordenadas definido (coordenadas compartidas / punto de levantamento na ferramenta de deseño).
- **Coordenadas de mapa pero sen latitude e lonxitude.** O ficheiro nomea o seu sistema de mapa sen código EPSG, ou cun que non está na lista; a liña de estado indica cal.
- **O punto cae na cara, non na esquina.** O axuste mira o elemento baixo o punteiro. Achegue o punteiro á esquina, ou amplíe.
- **A área é menor do esperado.** Os ocos non se contan, e unha cara que se dobra son varias caras: prema en cada unha.
- **{{key:Esc}} deixou de medir.** A primeira {{key:Esc}} descarta unha distancia a medias; a segunda detén a medición.

## Seguinte

- [Cortar un modelo IFC cun plano de corte](topic:section-plane)
- [Ocultar, illar e ver a través dos elementos](topic:hide-and-isolate)
