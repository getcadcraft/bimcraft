---
title: Paredes a partir de um desenho traçado
summary: Transformar uma planta DWG ou DXF em paredes, portas e janelas num piso, e manter o desenho por baixo da planta como referência.
keywords: dwg, dxf, traçado, traçar, importar planta, converter, cad para bim, 2d para 3d, paredes a partir de linhas, camadas, blocos, portas a partir de blocos, subjacente, desenho de referência, fundo, xref, aplicação de desenho
from: 3bf213f1
---

## O que se faz

Usar uma planta que desenhou (ou que outra pessoa desenhou) na aplicação de desenho como ponto de partida do modelo: as suas linhas de parede tornam-se paredes, e os seus blocos de portas e janelas tornam-se portas e janelas.

## Passos

1. Ative {{ui:Desenhar}} e escolha o nível que o desenho mostra na lista de níveis da planta.
2. Escolha {{ui:Compilação}} › {{ui:A partir de um desenho…}}, depois {{ui:Escolher um desenho…}} e escolha o DWG ou DXF.
3. Na caixa de diálogo:
   - As **Unidades do desenho** vêm do próprio desenho; escolha outras se estiverem erradas (uma planta desenhada em pés e lida como polegadas fica doze vezes pequena).
   - **Camadas com as paredes**: marque as camadas em que estão as linhas de parede. As camadas cujos nomes contêm "wall" (parede) ficam marcadas por si.
   - **As linhas são**: **as duas faces de cada parede** (a forma habitual de desenhar plantas: cada par de linhas paralelas com até 600 mm de distância torna-se uma parede com a espessura do intervalo), **os eixos das paredes**, ou **uma face** com a parede à sua esquerda ou direita. Com eixos ou uma face, o tipo de parede define a espessura.
   - **Tipo de parede** e **Altura da parede**, como na ferramenta {{ui:Parede}}.
   - **Blocos**: escolha um tipo de porta ou janela para cada bloco que seja uma porta ou janela, ou deixe-o de fora. Os blocos cujos nomes contêm "door" (porta) ou "window" (janela) ficam escolhidos por si. Cada um é colocado na parede onde assenta, tão largo como o bloco ao longo da parede; uma porta abre para o lado para onde o seu arco de abertura está desenhado.
   - **Onde fica**: nas coordenadas do próprio desenho, ou com o canto inferior esquerdo na origem da planta.
   - **Manter o desenho por baixo da planta deste nível**: deixe marcado para ver o desenho como linhas finas por baixo do que criar.
4. A linha por baixo das escolhas indica quantas paredes, portas e janelas vai criar. Clique em {{ui:Criá-las}}.

## O que se deve ver

- As paredes, portas e janelas no nível, ligadas onde se encontram, com os compartimentos que fecham; tudo é um só passo, pelo que {{key:Mod+Z}} desfaz tudo.
- O desenho como linhas finas por baixo da planta. {{ui:Compilação}} › {{ui:A partir de um desenho…}} lista os desenhos guardados no nível, cada um com {{ui:Remover}}; remover um deles deixa as paredes.
- No ficheiro IFC, o desenho guardado é uma anotação do nível (as suas linhas), para que outros programas BIM também o mostrem.

:::note
Um PDF ou uma digitalização também funcionam: veja [Paredes a partir de um conjunto de plantas](topic:walls-from-plans). Os arcos ficam de fora (o BimCraft desenha paredes retas), e também as linhas dentro de blocos. As linhas sem par em "duas faces" são contadas na caixa de diálogo e deixadas de fora: desenhe essas paredes com a ferramenta {{ui:Parede}}, ou arrume-as com {{ui:Modificar}} › {{ui:Aparar / prolongar}} (veja [Aparar, prolongar e ligar paredes](topic:trim-extend-walls)).
:::

:::tip
Traçou sobre uma digitalização na aplicação de desenho? Abra aqui também a digitalização e verifique as paredes contra ela: veja [Modelo a partir de uma digitalização](topic:model-from-a-scan).
:::
