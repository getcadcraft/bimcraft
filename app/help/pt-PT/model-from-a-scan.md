---
title: Modelar a partir de uma digitalização
summary: Um percurso breve desde uma digitalização a laser até às paredes: abrir a nuvem de pontos ao lado de um novo edifício, alinhá-la com um nível e traçar as suas paredes na planta.
keywords: digitalização, digitalização a laser, nuvem de pontos, as-built, edifício existente, levantamento, traçar, digitalização para BIM, modelo a partir de digitalização, fatia, alinhar, esquadria, LAS, LAZ, E57, PLY, PCD
from: ce3b9b37
---

## O que vai fazer

Desenhe um edifício existente a partir da sua digitalização a laser: paredes onde a digitalização as mostra, no nível certo, em esquadria entre si.

## Passos

1. **Um edifício para desenhar.** {{ui:Ficheiro}} › {{ui:Novo edifício}}, com tantos níveis quantos os que o edifício tem (pode acrescentar níveis mais tarde, veja [O terreno, o edifício nele e os seus níveis](topic:site-building-and-levels)). {{ui:Desenhar}} fica ativo.
2. **A digitalização.** {{ui:Mostrar}} › {{ui:Nuvem de pontos}} e escolha o ficheiro (LAS, LAZ, E57, PLY, PCD, PTX ou XYZ: veja [Mostrar uma nuvem de pontos ao lado do modelo](topic:point-clouds)). A nuvem aparece na vista 3D, e a planta mostra a sua **fatia**: os pontos digitalizados a 1200 mm (4 pés) acima do nível, como pontos. Essa é a altura em que paredes, portas e janelas se leem melhor.
3. **Alinhar com o nível.** Abra o menu {{ui:Digitalização}} da barra do modelo e clique em {{ui:Alinhar o seu pavimento com este nível}}: a nuvem sobe ou desce até o pavimento digitalizado assentar no nível indicado. Verifique que agora a fatia atravessa as paredes.
4. **Em esquadria com o edifício.** {{ui:Digitalização}} › {{ui:Pô-la em esquadria com o edifício}} roda a nuvem para que as paredes da sua fatia fiquem alinhadas pelos eixos da planta, de modo que as paredes que desenhar premindo {{key:Shift}} fiquem alinhadas com a digitalização. Roda em torno do ponto médio das paredes que encontrou, para que árvores ou a parede de um vizinho apanhadas na fatia não afastem a digitalização. Alinhe primeiro o pavimento: assim a fatia atravessa as paredes.
5. **Traçar as paredes.** Escolha {{ui:Parede}} e clique ao longo dos pontos: a ferramenta faz snap aos pontos digitalizados (a marca de snap é um pequeno losango), bem como às paredes que já desenhou. Uma parede é desenhada pelo seu eixo; clique no meio das duas filas de pontos que uma parede deixa; escreva a sua espessura escolhendo primeiro o tipo de parede. Depois acrescente as portas e janelas onde a fatia mostra os vãos.
6. **O nível seguinte.** Escolha o nível acima na lista de níveis da planta: a fatia segue a altura de corte do nível. Volte a alinhar o pavimento com esse nível apenas se os pavimentos da digitalização não coincidirem com os seus níveis.

## O que deve ver

- A fatia muda ao mudar de nível, e uma fatia mais espessa ({{ui:Digitalização}} › {{ui:Espessura da fatia}}) mostra mais pontos onde a digitalização é fina.
- {{ui:Digitalização}} › {{ui:Anular o alinhamento}} devolve a nuvem à posição em que foi colocada ao abrir. O alinhamento move a nuvem apenas na vista: não é guardado no ficheiro IFC, e as paredes que desenhou mantêm-se no sítio. O alinhamento acompanha a nuvem quando muda {{ui:Colocar}} ou {{ui:Unidades}}, ou quando abre outro modelo.
- {{ui:Digitalização}} › {{ui:Mostrar a fatia na planta}} oculta ou mostra os pontos.

:::tip
Digitalizações grandes: a planta desenha até 60,000 pontos da fatia e a vista 3D alguns milhões da nuvem completa, ambos escolhidos de forma uniforme ao longo da digitalização, para que um ficheiro grande continue rápido. Para traçar na aplicação de desenho, use a barra da nuvem {{ui:Traçar no CadCraft}}.
:::
