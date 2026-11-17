---
title: Ver um desenho DWG ou DXF em 3D
summary: Mude o espaço modelo de um desenho para 3D para ver alturas, espessuras, faces 3D, malhas e blocos, orbitar à sua volta, clicar num objeto para ver as suas propriedades, e ver o que ainda não está desenhado.
keywords: 3d, dwg, dxf, desenho, espaço modelo, orbitar, secção, corte, recorte, escolher, selecionar, propriedades, atributos, identificador, cota de altura, espessura, extrusão, 3dface, polyface, malha, polilinha 3D, blocos, vistas, perspetiva, paralela, extensão, acis, sólidos
from: a0c6cd17
---

## O que vai fazer

Veja o espaço modelo de um desenho em 3D. As linhas e polilinhas ficam às suas alturas reais, os objetos com espessura erguem-se como paredes, e as faces 3D, malhas e blocos 3D aparecem como superfícies à volta das quais pode orbitar. As folhas continuam 2D.

## Passos

1. Abra um DWG ou DXF. Ver [Ver um desenho DWG ou DXF](topic:view-dwg). Abre-se em 3D, a não ser que {{ui:Definições}} › {{ui:BimCraft}} › **Os desenhos abrem em** indique {{ui:Modelo (2D)}}.
2. A partir de 2D, clique em {{ui:3D}} na barra acima do desenho, ou prima {{key:3}}.
3. Aguarde um momento na primeira vez: a barra de estado indica "A construir o desenho em 3D…" e, depois, quantas linhas e faces mostra.
4. Oriente, desloque e amplie (ver a tabela abaixo).
5. Clique numa vista na segunda barra: {{ui:Iso}}, {{ui:Superior}}, {{ui:Inferior}}, {{ui:Frontal}}, {{ui:Posterior}}, {{ui:Esquerda}} ou {{ui:Direita}}.
6. Clique em {{ui:Perspetiva}} para alternar entre uma vista em perspetiva e uma vista paralela.
7. Clique em {{ui:Extensão}} ou prima {{key:F}} para ver o desenho inteiro outra vez.
8. Clique outra vez em {{ui:3D}}, prima {{key:3}}, ou clique em {{ui:Modelo}} ou num separador de folha para voltar a 2D.

## O que deve ver

- Espaço modelo em 3D, Z para cima, nas cores do próprio desenho. As faces são um tom mais claras do que as suas arestas.
- As camadas que desligar em {{ui:Camadas}} desaparecem também da vista 3D.
- À direita: o número de linhas e faces, o tamanho do desenho em X, Y e Z, **Só na vista 2D** e **Ainda não desenhado**.

## Cortar com um plano de corte

Clique em {{ui:Corte}} na barra 3D, ou prima {{key:X}}. A barra por baixo funciona como nos modelos IFC (ver [Cortar um modelo IFC com um plano de corte](topic:section-plane)): corte a partir de {{ui:Superior}}, {{ui:Frontal}} ou {{ui:Lado}}, arraste ou escreva o deslocamento — aqui, nas unidades do próprio desenho — e {{ui:Inverter}} para manter o outro lado. O que o plano corta não pode ser escolhido. Voltar a 2D retira o corte.

## Ver as propriedades de um objeto

Clique num objeto na vista 3D. Ele fica com a cor de seleção e {{ui:Propriedades}} mostra o que o ficheiro diz sobre ele: o seu tipo, camada, cor, tipo de linha e identificador, e depois os seus dados próprios, como o início, o fim e o comprimento de uma linha, o centro e o raio de um círculo, os cantos de uma face 3D, ou o bloco, o ponto de inserção, a escala, a rotação e os valores de atributo de uma referência de bloco.

- Uma referência de bloco é escolhida no seu todo, e também os blocos aninhados nela.
- Um clique a poucos píxeis de uma linha escolhe a linha.
- Mantenha {{key:Mod}} premido e clique para escolher mais objetos, ou para retirar um; {{ui:Propriedades}} conta-os então por tipo.
- {{key:Esc}}, ou um clique em espaço vazio, limpa a seleção.
- Os objetos em camadas que desligou não podem ser escolhidos.

## Movimentar-se

:::mouse
| Para | Ação |
|---|---|
| Orbitar | Arraste com o botão do meio, ou com o botão esquerdo |
| Deslocar | Arraste com o botão direito, ou mantenha {{key:Shift}} premido e arraste |
| Ampliar | Desloque a roda; amplia em direção ao que está sob o cursor |
| Ver tudo | {{ui:Extensão}} ou {{key:F}} |
| Olhar de um lado | Clique numa face, aresta ou canto do cubo de vistas no canto inferior direito |
:::

O cubo de vistas pode ser trocado por um ícone de eixos, ou ocultado, em {{ui:Definições}}. Ver [Definições do BimCraft](topic:settings).

:::mac mouse
Num trackpad, deslize com dois dedos para orbitar, mantenha {{key:Shift}} premido e deslize para deslocar, e use o gesto de pinça para ampliar.
:::

:::touch
Arraste com um dedo para orbitar. Com dois dedos, faça pinça para ampliar, e mova-os juntos para deslocar.
:::

## O que é desenhado em 3D

| No desenho | Em 3D |
|---|---|
| Linhas, polilinhas 3D | Às suas alturas reais |
| Polilinhas, círculos, arcos, elipses | No seu próprio plano, à sua cota, inclinados quando o desenho os inclina |
| Espessura em linhas, polilinhas, círculos e arcos | Paredes com essa altura; os círculos ficam fechados em cima e em baixo |
| Faces 3D, malhas polyface, malhas de polígonos | Superfícies sombreadas com as suas arestas visíveis |
| Blocos | Colocados, rodados e escalados em 3D, incluindo os blocos aninhados |
| Tramas | Os seus contornos |
| Traçado 2D simples | Plano, onde foi desenhado |

## Só na vista 2D

Texto, texto de várias linhas e os atributos visíveis dos blocos são desenhados em 3D, no seu próprio plano e à sua altura, e um clique neles escolhe-os. As polilinhas largas mostram a sua largura como uma faixa plana. As chamadas de multilinha, as imagens e os padrões de trama contam em **Só na vista 2D**: veja-os no separador {{ui:Modelo}} ou nas folhas.

## Ainda não desenhado

Sólidos e superfícies guardados como corpos ACIS (sólidos 3D, corpos, regiões e superfícies) e malhas de subdivisão são listados em **Ainda não desenhado**, com o número de cada um. São ignorados, não adivinhados.

## Erros comuns

- **Tudo parece plano.** O desenho é 2D: as suas linhas não têm altura. Clique em {{ui:Frontal}} para verificar; um desenho plano aparece como uma linha.
- **Um modelo sólido não mostra nada.** Os sólidos feitos com um modelador de sólidos são corpos ACIS, listados em **Ainda não desenhado**. Exporte o modelo como IFC ou como faces 3D a partir do programa que o fez.
- **O desenho é um pequeno aglomerado no meio.** Algo longe no espaço modelo, como uma cópia antiga de uma planta, torna a extensão grande. Amplie com a roda onde quer ver.

## A seguir

- [Trabalhar com camadas e folhas](topic:dwg-layers-sheets)
- [Cortar um modelo IFC com um plano de corte](topic:section-plane)
