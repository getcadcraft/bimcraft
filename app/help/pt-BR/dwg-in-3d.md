---
title: Ver um desenho DWG ou DXF em 3D
summary: Mude o espaço modelo de um desenho para 3D para ver elevações, espessuras, faces 3D, malhas e blocos, orbitar em volta dele, clicar em um objeto para ver as suas propriedades, e ver o que ainda não é desenhado.
keywords: 3d, dwg, dxf, desenho, espaço modelo, orbitar, corte, recorte, selecionar, selecionar, propriedades, atributos, identificador, elevação, espessura, extrusão, 3dface, polyface, malha, polilinha 3d, blocos, vistas, perspectiva, paralela, extensão, acis, sólidos
from: a0c6cd17
---

## O que você vai fazer

Olhe o espaço modelo de um desenho em 3D. Linhas e polilinhas ficam na sua altura real, objetos com espessura se erguem como paredes, e faces 3D, malhas e blocos 3D aparecem como superfícies em que você pode orbitar. As folhas continuam em 2D.

## Passos

1. Abra um DWG ou DXF. Veja [Ver um desenho DWG ou DXF](topic:view-dwg). Ele abre em 3D, a menos que {{ui:Settings}} › {{ui:BimCraft}} › **Desenhos abrem em** esteja em {{ui:Model (2D)}}.
2. Em 2D, clique em {{ui:3D}} na barra acima do desenho, ou pressione {{key:3}}.
3. Espere um pouco na primeira vez: a linha de status mostra "Criando o desenho em 3D…", e depois quantas linhas e faces ele mostra.
4. Oriente, faça pan e zoom (veja a tabela abaixo).
5. Clique em uma vista na segunda barra: {{ui:Iso}}, {{ui:Top}}, {{ui:Bottom}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}} ou {{ui:Right}}.
6. Clique em {{ui:Perspective}} para alternar entre uma vista em perspectiva e uma vista paralela.
7. Clique em {{ui:Extents}} ou pressione {{key:F}} para ver o desenho inteiro de novo.
8. Clique em {{ui:3D}} novamente, pressione {{key:3}}, ou clique em {{ui:Model}} ou em uma guia de folha para voltar a 2D.

## O que você deve ver

- Espaço modelo em 3D, Z para cima, nas cores do próprio desenho. As faces são um tom mais claro que as suas arestas.
- Camadas que você desliga em {{ui:Layers}} também desaparecem da vista 3D.
- À direita: o número de linhas e faces, o tamanho do desenho em X, Y e Z, **Somente na vista 2D** e **Ainda não desenhado**.

## Cortar com um plano de corte

Clique em {{ui:Section}} na barra 3D, ou pressione {{key:X}}. A barra abaixo dele funciona como nos modelos IFC (veja [Cortar um modelo IFC com um plano de corte](topic:section-plane)): corte a partir de {{ui:Top}}, {{ui:Front}} ou {{ui:Side}}, arraste ou digite o deslocamento — aqui nas unidades do próprio desenho — e {{ui:Flip}} para manter o outro lado. O que o plano recorta não pode ser selecionado. Voltar a 2D remove o corte.

## Ver as propriedades de um objeto

Clique em um objeto na vista 3D. Ele assume a cor de seleção e {{ui:Properties}} mostra o que o arquivo diz sobre ele: o seu tipo, camada, cor, tipo de linha e identificador, depois os seus próprios dados, como o início, o fim e o comprimento de uma linha, o centro e o raio de um círculo, os cantos de uma face 3D, ou o bloco de uma referência de bloco, o ponto de inserção, a escala, a rotação e os valores dos atributos.

- Uma referência de bloco é selecionada como um todo, assim como os blocos aninhados nela.
- Um clique a alguns pixels de uma linha seleciona a linha.
- Segure {{key:Mod}} e clique para selecionar mais objetos, ou para retirar um deles; {{ui:Properties}} então os conta por tipo.
- {{key:Esc}}, ou um clique em um espaço vazio, limpa a seleção.
- Objetos em camadas que você desligou não podem ser selecionados.

## Movimentar-se

:::mouse
| Para | Como fazer |
|---|---|
| Orbitar | Arraste com o botão do meio, ou com o botão esquerdo |
| Fazer pan | Arraste com o botão direito, ou segure {{key:Shift}} e arraste |
| Dar zoom | Role a roda; o zoom vai na direção do que está sob o ponteiro |
| Ver tudo | {{ui:Extents}} ou {{key:F}} |
| Olhar de um lado | Clique em uma face, aresta ou canto do cubo de vista no canto inferior direito |
:::

O cubo de vista pode ser trocado por um ícone de eixos, ou ocultado, em {{ui:Settings}}. Veja [Configurações do BimCraft](topic:settings).

:::mac mouse
Em um trackpad, deslize com dois dedos para orbitar, segure {{key:Shift}} e deslize para fazer pan, e pince para dar zoom.
:::

:::touch
Arraste com um dedo para orbitar. Pince com dois dedos para dar zoom, e mova-os juntos para fazer pan.
:::

## O que é desenhado em 3D

| No desenho | Em 3D |
|---|---|
| Linhas, polilinhas 3D | Na sua altura real |
| Polilinhas, círculos, arcos, elipses | No seu próprio plano, na sua elevação, inclinados quando o desenho os inclina |
| Espessura em linhas, polilinhas, círculos e arcos | Paredes com essa altura; círculos são fechados em cima e embaixo |
| Faces 3D, malhas polyface, malhas de polígonos | Superfícies sombreadas com as suas arestas visíveis |
| Blocos | Posicionados, girados e escalados em 3D, blocos aninhados também |
| Hachuras | Os seus contornos |
| Linhas 2D simples | Planas, onde foram desenhadas |

## Somente na vista 2D

Texto, texto de múltiplas linhas e os atributos visíveis de blocos são desenhados em 3D, no seu próprio plano e na sua própria altura, e um clique neles os seleciona. Polilinhas largas mostram a sua largura como uma faixa plana. Linhas de chamada múltiplas, imagens e padrões de hachura são contados em **Somente na vista 2D**: veja-os na guia {{ui:Model}} ou nas folhas.

## Ainda não desenhado

Sólidos e superfícies armazenados como corpos ACIS (sólidos 3D, corpos, regiões e superfícies) e malhas de subdivisão são listados em **Ainda não desenhado**, com quantos há. Eles são ignorados, não são estimados.

## Erros comuns

- **Tudo parece plano.** O desenho é 2D: as suas linhas não têm altura. Clique em {{ui:Front}} para verificar; um desenho plano aparece como uma linha.
- **Um modelo sólido não mostra nada.** Sólidos feitos com um modelador de sólidos são corpos ACIS, listados em **Ainda não desenhado**. Exporte o modelo como IFC ou como faces 3D a partir do programa que o criou.
- **O desenho é um pequeno aglomerado no meio.** Algo distante no espaço modelo, como uma cópia antiga de uma planta, deixa a extensão grande. Dê zoom com a roda onde quer olhar.

## Próximos passos

- [Trabalhar com camadas e folhas](topic:dwg-layers-sheets)
- [Cortar um modelo IFC com um plano de corte](topic:section-plane)
