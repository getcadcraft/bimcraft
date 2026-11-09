---
title: Coordenadas en BimCraft
summary: Onde está traballando: a posición do punteiro na planta e na vista 3D, o nivel no que está, a orixe do proxecto e o punto de levantamento do emprazamento.
keywords: coordenadas, onde estou, posición, punteiro, lectura, x y z, nivel, piso, orixe do proxecto, orixe, punto base, punto de levantamento, emprazamento, coordenadas do mapa, leste, norte, xeorreferencia, unidades, localización
from: 84df5245
---

## O que vai facer

Coñeza de un vistazo onde está dentro dun modelo: en que nivel está debuxando, a que distancia está o punteiro da orixe do proxecto e onde está o punto de levantamento do emprazamento.

## Onde se mostran os números

- **Sobre a vista 3D** (abaixo á dereita, xunto ao cubo de vista): mova o punteiro sobre o modelo. A caixa mostra o nivel no que está o punto e en canto se eleva sobre o piso dese nivel, despois as súas **X, Y e Z**. Sobre o espazo baleiro, le o punto no piso do nivel máis baixo.
- **Na planta** (abaixo á dereita, mentres {{ui:Debuxar}} está activado): o nivel que mostra a planta e a altura do seu piso, e as **X e Y** do punteiro mentres está sobre a planta.
- Cando o ficheiro ten unha conversión de mapa (foi exportado con coordenadas de mapa), as dúas caixas engaden as **coordenadas leste e norte** na cuadrícula do mapa, nas {{ui:Unidades}} que escolleu (sempre coas unidades escritas ao lado; os pés e polgadas mostranse como pés decimais). Un debuxo (DWG ou DXF) conserva as súas propias unidades: a súa lectura do punteiro indica cales son, e nunca se converte.

Cada X, Y e Z mídese desde a **orixe do proxecto**, nas {{ui:Unidades}} escollidas na barra de ferramentas (pés e polgadas, polgadas, pés decimais, milímetros, centímetros ou metros). A Y positiva apunta ao norte do modelo, que non sempre é o norte verdadeiro. As coordenadas leste e norte do mapa seguen a mesma elección (os pés e polgadas mostranse como pés decimais); cando a unidade propia do sistema de mapa é distinta da que escolleu, indícase entre parénteses despois dos números, por exemplo *(US survey feet)*, para que un topógrafo vexa en que está escrito o propio sistema.

## Os dous marcadores

- **Orixe do proxecto** (un círculo vermello cunha cruz): o punto 0, 0, 0 desde o que se mide cada coordenada do modelo.
- **Punto de levantamento** (un círculo azul cun triángulo): o punto de referencia do emprazamento, aquel para o que se dan a latitude, a lonxitude e a elevación, ou as coordenadas do mapa. Na vista 3D, sinale nel para ler onde está.

Cando o emprazamento está sobre a orixe do proxecto, como nun edificio novo debuxado en BimCraft, un marcador mostra os dous. Prema o botón da mira en calquera das caixas para ocultar ou mostrar os marcadores; BimCraft lembra a súa elección neste navegador.

## O que debe ver

- Os números cambian segundo se move o punteiro, e a caixa da planta nomea o nivel que escolleu na lista de niveis.
- Os marcadores quedan no seu sitio mentres orbita, se desprazate e fai zoom na vista.

:::tip
Para ler a latitude e a lonxitude dun punto, use {{ui:Medir}} › {{ui:Localización}}: vexa [Medir distancias, superficies de caras e localizacións en 3D](topic:measure).
:::

:::touch
Nunha pantalla táctil, a caixa 3D non mostra nada ata que use un rato ou unha caneta: un dedo move a vista.
:::
