---
title: Paredes a partir de um desenho traçado
summary: Transforme uma planta em DWG ou DXF em paredes, portas e janelas em um nível, e mantenha o desenho sob a planta como referência.
keywords: dwg, dxf, traçar, traçado, importar planta, converter, de CAD para BIM, 2D para 3D, paredes a partir de linhas, camadas, blocos, portas a partir de blocos, subjacente, desenho de referência, plano de fundo, xref, aplicativo de desenho
from: 3bf213f1
---

## O que você vai fazer

Use uma planta que você (ou outra pessoa) desenhou no aplicativo de desenho como início do modelo: suas linhas de parede viram paredes, e seus blocos de porta e janela viram portas e janelas.

## Passos

1. Ative {{ui:Draw}} e escolha o nível que o desenho mostra na lista de níveis da planta.
2. Escolha {{ui:Build}} › {{ui:From a drawing…}}, depois {{ui:Choose a drawing…}} e escolha o DWG ou DXF.
3. Na caixa de diálogo:
   - **Unidades do desenho** vêm do desenho; escolha outras se estiverem erradas (uma planta desenhada em pés, lida como polegadas, fica doze vezes menor).
   - **Camadas com as paredes**: marque as camadas em que estão as linhas de parede. Camadas cujos nomes dizem "wall" já vêm marcadas para você.
   - **As linhas são**: **as duas faces de cada parede** (o modo usual de desenhar plantas: cada par de linhas paralelas com até 600 mm de distância vira uma parede tão espessa quanto o vão), **as linhas de centro das paredes**, ou **uma face**, com a parede à sua esquerda ou à direita. Com linhas de centro ou uma face, o tipo de parede define a espessura.
   - **Tipo de parede** e **Altura da parede**, como na ferramenta {{ui:Wall}}.
   - **Blocos**: escolha um tipo de porta ou janela para cada bloco que é uma porta ou uma janela, ou deixe-o de fora. Blocos cujos nomes dizem "door" ou "window" são escolhidos para você. Cada um é colocado na parede onde está, com a largura do bloco ao longo da parede; uma porta abre para o lado em que seu arco de abertura é desenhado.
   - **Onde fica**: nas coordenadas próprias do desenho, ou com seu canto inferior esquerdo na origem da planta.
   - **Manter o desenho sob a planta deste nível**: deixe marcado para ver o desenho como linhas finas sob o que você criar.
4. A linha sob as opções diz quantas paredes, portas e janelas serão criadas. Clique em {{ui:Make them}}.

## O que você deve ver

- As paredes, portas e janelas do nível, unidas onde se encontram, com os ambientes que elas fecham; tudo é um só passo, então {{key:Mod+Z}} desfaz.
- O desenho como linhas finas sob a planta. {{ui:Build}} › {{ui:From a drawing…}} lista os desenhos guardados no nível, cada um com {{ui:Remove}}; remover um deixa as paredes.
- No arquivo IFC, o desenho guardado é uma anotação do nível (suas linhas), para que outros programas BIM também o mostrem.

:::note
Um PDF ou uma digitalização também funciona: veja [Paredes a partir de um conjunto de plantas](topic:walls-from-plans). Arcos ficam de fora (o BimCraft desenha paredes retas), e também as linhas dentro de blocos. Linhas sem par em "as duas faces" são contadas na caixa de diálogo e ficam de fora: desenhe essas paredes com a ferramenta {{ui:Wall}}, ou ajuste-as com {{ui:Modify}} › {{ui:Trim / extend}} (veja [Aparar, estender e unir paredes](topic:trim-extend-walls)).
:::

:::tip
Traçou sobre uma digitalização no aplicativo de desenho? Abra a digitalização aqui também e confira as paredes com ela: veja [Modelo a partir de uma digitalização](topic:model-from-a-scan).
:::
