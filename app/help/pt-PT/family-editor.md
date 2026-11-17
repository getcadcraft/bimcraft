---
title: Editar uma família
summary: Alterar os parâmetros, fórmulas e sólidos de uma família, mostrar peças por um parâmetro Sim / Não, cortar e unir sólidos, dar-lhe conectores para tubagens e condutas, e ver o resultado desenhado a partir do IFC que vai guardar.
keywords: editor de famílias, editar família, parâmetro, parâmetros, fórmula, fórmulas, visibilidade, sim não, sólido, sólidos, caixa, extrusão, extrudir, revolução, varrimento, perfil, arco, booleana, booleanas, cortar, unir, diferença, união, puxador, puxadores, plano de trabalho, esboço, nova família, conector, conectores, porta, portas, conector de tubagem, conector de conduta, ralo, abastecimento de água
from: 1ab31c10
---

## Abrir o editor

Abra uma família (o grupo **Famílias** do navegador do projeto, ou {{ui:Build}} › {{ui:Families…}}) e clique em {{ui:Edit the family}}. Para começar do zero, clique em {{ui:New family}}: dê-lhe um nome, indique o que é (uma porta, uma janela, mobiliário, um equipamento fixo ou outra coisa) e, para uma porta ou janela, de que família inicial vêm o seu símbolo de planta e o seu sentido de abertura. O editor abre numa família com alguns parâmetros e um sólido.

Editar uma família inicial mantém as suas alterações apenas neste modelo. Os outros modelos mantêm a família inicial tal como está.

Nada no modelo muda até clicar em {{ui:Save the family}}. O editor tem a sua própria anulação e refazer (os botões de seta ao lado do nome, ou {{key:Mod+Z}} e {{key:Mod+Y}}); guardar é um único passo na anulação do modelo.

## Parâmetros

O separador {{ui:Parameters}} lista os parâmetros da família: um nome, um tipo e um valor predefinido. Os tipos são **Comprimento** (milímetros), **Ângulo** (graus), **Número**, **Número inteiro**, **Sim / Não**, **Caneta** (1–16), e três que guardam palavras em vez de números: **Texto**, **Material** (um dos materiais do projeto) e **Preenchimento** (um preenchimento de planta). As palavras não são usadas em fórmulas; colorem um sólido (o seu **Material**), preenchem uma parte de um símbolo ou aparecem impressas como `{Name}` no texto de um símbolo. A caixa **Por elemento** torna o parâmetro uma coisa que cada elemento colocado define para si, em vez de fazer parte do tamanho.

- Uma **fórmula** faz um parâmetro seguir outros, por exemplo `Width / 30` ou `if(Width > 1200, 2, 1)`. Os comprimentos nas fórmulas são milímetros, ou escreva uma unidade: `3'`, `6in`, `50cm`.
- Mudar o nome de um parâmetro muda-o em todas as fórmulas e campos que o usam. Um parâmetro ainda em uso não pode ser removido.
- O **Material** de um sólido toma a cor de um material do projeto (ou de um parâmetro Material), **Mostrado em** oculta-o nos níveis de detalhe mais grosseiros, e **Repetir** cria cópias: uma contagem (um número ou um parâmetro de número inteiro, de 1 a 200) e o passo entre elas em x, y e z. Um sólido repetido é uma fila de tábuas, barras ou furos; usado num corte, as cópias cortam em conjunto.
- Uma família de porta ou janela recebe também dois nomes da sua parede: `WallThickness` e `Face` (1 ou −1, o lado para onde a porta abre).

## Sólidos

O separador {{ui:Solids}} lista os sólidos. Adicione uma caixa, uma extrusão, uma revolução ou um varrimento:

| Sólido | O que define |
|---|---|
| Caixa | os seus dois cantos: x0 a x1, y0 a y1, z0 a z1 |
| Extrusão | um perfil num plano de trabalho (planta, alçado frontal ou lateral), onde está o plano e uma profundidade |
| Revolução | um perfil, um eixo no plano e um ângulo até 360° |
| Varrimento | um caminho de pontos e um raio (uma vara ou um corrimão) |

Cada número pode ser um número escrito ou uma expressão dos parâmetros. Cada sólido tem uma cor e **Visível quando**: deixe vazio para o mostrar sempre, ou indique um parâmetro Sim / Não (ou escreva uma comparação como `Shelves >= 3`) para o mostrar só nesse caso. Isto é um parâmetro de visibilidade.

### Desenhar um perfil

O perfil de uma extrusão ou de uma revolução é desenhado no seu plano de trabalho, por baixo da pré-visualização:

- Clique no papel para acrescentar um ponto depois do escolhido.
- Arraste um ponto para o mover. Os pontos ajustam-se à grelha; mantenha a tecla {{key:Shift}} premida para os colocar livremente.
- Clique num pequeno quadrado num segmento para acrescentar um ponto aí. {{key:Shift}}+clique nesse quadrado torna o segmento um arco (clique de novo para o outro sentido, e depois para reta).
- Duplo clique num ponto para o remover.

Os pontos ocos são definidos por parâmetros: altere-os na tabela, não os arrastando.

## Booleanas

O separador {{ui:Booleans}} corta o segundo sólido ao primeiro, ou une-os. O resultado de uma booleana pode ser cortado ou unido de novo. Um sólido usado numa booleana é desenhado apenas como parte dela.

Quando o segundo sólido está oculto pelo seu parâmetro Sim / Não, o primeiro mantém-se como está; quando o primeiro está oculto, o resultado fica oculto.

## Símbolo em planta

O separador {{ui:Plan symbol}} desenha o que a planta mostra para esta família, em vez do corte dos seus sólidos: linhas, retângulos, círculos, arcos, polígonos e texto, nos próprios eixos da família. Cada parte tem uma **caneta** (1–16, uma expressão ou um parâmetro Caneta), um **preenchimento** (nenhum, sólido, diagonal, cruzado, betão, isolamento, terra, ou um parâmetro Preenchimento), uma expressão de **mostrado por**, um **intervalo de corte** em milímetros acima da sua base (desenhada com peso total quando o corte da planta está dentro dele, fina abaixo e tracejada acima: um armário acima do corte mostra-se tracejado), um nível de detalhe e uma repetição. O texto pode indicar parâmetros como `{Name}`. **A planta mostra: O corte dos sólidos** mantém a planta a cortar os sólidos, enquanto o símbolo fica na família. Outros programas leem o símbolo como a pegada da família (linhas e formas; o texto fica no BimCraft).

## Famílias incluídas

O separador {{ui:Families inside}} coloca outra família dentro desta: uma perna numa mesa, um puxador numa porta. Escolha a família e depois onde fica (x, y, z), quanto está rodada (só quartos de volta: 0, 90, 180, 270), quando é mostrada, e os valores que recebe, um por linha, como `Height = Height - 40`. Guardar a família interior volta a desenhar esta; uma família contida por outra não pode ser eliminada; uma família não se pode conter a si própria, nem através de outra, e o aninhamento para nos quatro níveis.

## Hotspots

Um hotspot é um ponto ou uma aresta que arrasta para alterar um parâmetro. No separador {{ui:Hotspots}} adicione um, escolha o eixo ao longo do qual arrasta e o parâmetro de número que altera, e escreva a sua posição com as mesmas expressões dos sólidos. Na pré-visualização, escolha **Hotspots** por baixo dos puxadores para os arrastar. Num elemento colocado na planta (escolha-o com {{ui:Select}}), os hotspots x e y aparecem como pegas: arraste uma e o elemento toma o tamanho que coloca o hotspot aí, passando por quaisquer fórmulas entre eles; uma anulação repõe-no. Um hotspot não pode alterar um parâmetro calculado por fórmula, um Sim / Não ou uma palavra.

No 3D, os mesmos hotspots aparecem como pegas no elemento escolhido, e os de cima e de baixo (eixo z) aparecem também aí, o que a planta não consegue desenhar. Escolha o elemento, arraste uma pega ao longo do seu eixo e largue: o elemento toma o tamanho que coloca o hotspot aí, como um único passo de anulação. As pegas ficam ocultas enquanto a caixa de corte estiver ativa, porque usa as mesmas pegas.

## Conectores

As famílias colocadas no chão (mobiliário, equipamentos fixos e outras) têm um separador {{ui:Connectors}}: os pontos onde uma tubagem ou conduta se liga ao elemento, como na torneira e no ralo de um lavatório. Clique em {{ui:Add a connector}} e defina:

- **Tipo**: tubagem ou conduta, e o seu **Sistema** (água fria, drenagem sanitária, ar de insuflação…).
- **x**, **y** e **z**: onde está, nos próprios eixos da família. Como os números de um sólido, cada um pode ser um número ou uma fórmula dos parâmetros, para que o conector se mova com o tamanho.
- **Sentido de saída**: a direção em que uma tubagem ou conduta sai, ao longo de um dos eixos da família (um ralo por baixo de um lavatório é **Para baixo**).
- **Tamanho (mm)**: a dimensão nominal da tubagem (DN) ou o diâmetro da conduta redonda.
- **Fluxo**: **Entrada** para um conector alimentado (uma torneira), **Saída** para um que drena.

A pré-visualização desenha cada conector como um anel com uma seta no sentido de saída. As portas e janelas não têm conectores.

Para um equipamento sanitário, escolha qual é em **Equipamento sanitário** (sanita, lavatório, lava-loiça, base de duche, tanque de lavandaria). Os equipamentos iniciais já o indicam.

Todo o elemento colocado a partir da família recebe os seus conectores como portas no ficheiro IFC, e estes são refeitos quando o elemento muda de tamanho ou a família é guardada. Os programas que leem sistemas IFC veem onde pertence cada tubagem ou conduta.

## A pré-visualização e os seus puxadores

A pré-visualização é a família escrita como IFC, pelo mesmo código que a guarda no modelo, e desenhada de volta. O que vê é o que os outros programas recebem. Por baixo, **Tamanho mostrado** define os valores dos parâmetros que a pré-visualização usa.

Os **puxadores** são pontos na pré-visualização: **O tamanho** mostra um puxador para a Largura, a Profundidade e a Altura; **O sólido escolhido** mostra um em cada face do sólido selecionado. Arraste um puxador:

- numa face definida por um parâmetro, o tamanho mostrado muda (as fórmulas da família são mantidas);
- numa face definida por um número escrito, o número muda.

## Guardar

{{ui:Save the family}} verifica a família, depois desenha de novo cada um dos seus tamanhos e refaz cada elemento, como um único passo que pode anular. Se um tamanho não puder ser desenhado com a alteração (por exemplo, um sólido ficaria sem largura nesse tamanho), nada é guardado e o editor indica qual o tamanho.

Se outra pessoa guardou a mesma família enquanto o seu editor estava aberto (numa sessão Live TeamWork, ou noutra janela), {{ui:Save the family}} recusa e diz isso, em vez de substituir a alteração dela pela sua. Feche o editor, abra a família de novo para ver a alteração dela, e refaça a sua.

:::note
A geometria é guardada como sólidos próprios do IFC: extrusões, revoluções, discos varridos e resultados de booleanas. Nada é convertido numa lista de triângulos, por isso os ficheiros ficam pequenos e os outros programas podem ler as formas como formas. Os perfis com arcos são guardados com arcos em IFC4; o IFC2X3 não tem segmentos de arco num perfil, por isso aí os arcos são guardados como pequenos segmentos retos.
:::

Veja também [Famílias e os seus tamanhos](topic:families).
