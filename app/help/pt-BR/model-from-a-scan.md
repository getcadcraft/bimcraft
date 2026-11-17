---
title: Modelar a partir de uma varredura
summary: Um roteiro curto, da varredura a laser até as paredes: abra a nuvem de pontos ao lado de uma nova edificação, alinhe-a a um nível e trace as paredes na planta.
keywords: varredura, varredura a laser, nuvem de pontos, como construído, edificação existente, levantamento, traçar, da varredura ao BIM, modelo a partir de varredura, fatia, alinhar, esquadro, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## O que você vai fazer

Desenhe uma edificação existente a partir da sua varredura a laser: paredes onde a varredura as mostra, no pavimento certo, em esquadro umas com as outras.

## Passos

1. **Uma edificação para desenhar.** {{ui:File}} › {{ui:New building}}, com tantos pavimentos quantos a edificação tiver (você pode adicionar pavimentos depois, veja [O terreno, a edificação sobre ele e seus níveis](topic:site-building-and-levels)). {{ui:Draw}} fica ativado.
2. **A varredura.** {{ui:Show}} › {{ui:Point cloud}} e escolha o arquivo (LAS, LAZ, E57, PLY, PCD, PTX ou XYZ: veja [Exibir uma nuvem de pontos ao lado do modelo](topic:point-clouds)). A nuvem aparece na vista 3D, e a planta mostra a sua **fatia**: os pontos da varredura 1200 mm (4 pés) acima do nível, como pontos. Essa é a altura em que paredes, portas e janelas são mais bem lidas.
3. **Alinhe a nuvem ao nível.** Abra o menu {{ui:Scan}} da barra do modelo e clique em {{ui:Align its floor to this level}}: a nuvem sobe ou desce até que o piso que ela escaneou fique sobre o nível exibido. Confira se a fatia agora corta as paredes.
4. **Em esquadro com a edificação.** {{ui:Scan}} › {{ui:Turn it square to the building}} gira a nuvem para que as paredes na sua fatia fiquem alinhadas aos eixos da planta, de modo que as paredes que você desenhar com {{key:Shift}} pressionado fiquem alinhadas à varredura. Ela gira em torno do centro das paredes encontradas, então árvores ou a parede de um vizinho apanhadas pela fatia não desviam a varredura. Alinhe o piso primeiro: assim a fatia corta as paredes.
5. **Trace as paredes.** Escolha {{ui:Wall}} e clique ao longo dos pontos: a ferramenta faz snap nos pontos escaneados (a marca de snap é um pequeno losango), assim como nas paredes que você já desenhou. Uma parede é desenhada pela linha central; clique no meio das duas fileiras de pontos que uma parede deixa. Digite a espessura escolhendo antes o tipo de parede. Depois adicione as portas e janelas onde a fatia mostrar as falhas.
6. **O próximo pavimento.** Escolha o pavimento acima na lista de níveis da planta: a fatia acompanha a altura de corte do nível. Alinhe o piso a esse nível de novo somente se os pisos da varredura não estiverem onde estão os seus níveis.

## O que você deve ver

- A fatia muda quando você muda de nível, e uma fatia mais espessa ({{ui:Scan}} › {{ui:Slice thickness}}) mostra mais pontos onde a varredura está rala.
- {{ui:Scan}} › {{ui:Undo the alignment}} devolve a nuvem à posição em que estava quando foi aberta. Alinhar move a nuvem apenas na vista: ela não é salva no arquivo IFC, e as paredes que você desenhou permanecem onde estão. O alinhamento acompanha a nuvem quando você muda {{ui:Place}} ou {{ui:Units}}, ou abre outro modelo.
- {{ui:Scan}} › {{ui:Show the slice on the plan}} oculta ou mostra os pontos.

:::tip
Varreduras grandes: a planta desenha até 60.000 pontos da fatia, e a vista 3D, alguns milhões da nuvem inteira, ambos escolhidos de forma uniforme ao longo da varredura, para que um arquivo grande continue rápido. Para traçar no aplicativo de desenho, use {{ui:Trace in CadCraft}} na barra da nuvem.
:::
