---
title: Editar uma família
summary: Altere os parâmetros, fórmulas e sólidos de uma família, mostre partes por um parâmetro Sim / Não, corte e una sólidos, dê conectores para tubulações e dutos, e veja o resultado desenhado a partir do IFC que será salvo.
keywords: editor de família, editar família, parâmetro, parâmetros, fórmula, fórmulas, visibilidade, sim não, sólido, sólidos, caixa, extrusão, extrudar, revolução, varredura, perfil, arco, booleana, booleanas, cortar, unir, diferença, união, alça, alças, plano de trabalho, esboço, nova família, conector, conectores, porta, portas, conector de tubo, conector de duto, ralo, água de abastecimento
from: 1ab31c10
---

## Abrir o editor

Abra uma família (o grupo **Famílias** do navegador de projeto, ou {{ui:Build}} › {{ui:Families…}}) e clique em {{ui:Edit the family}}. Para começar do zero, clique em {{ui:New family}}: dê um nome, diga o que ela é (uma porta, uma janela, mobiliário, uma louça ou outra coisa) e, no caso de porta ou janela, de qual família inicial vêm o símbolo de planta e a alça. O editor abre uma família com alguns parâmetros e um sólido.

Editar uma família inicial mantém suas alterações apenas neste modelo. Outros modelos continuam com a família inicial como está.

Nada no modelo muda até você clicar em {{ui:Save the family}}. O editor tem seus próprios desfazer e refazer (os botões de seta ao lado do nome, ou {{key:Mod+Z}} e {{key:Mod+Y}}); salvar é um passo no desfazer do modelo.

## Parâmetros

A aba {{ui:Parameters}} lista os parâmetros da família: um nome, um tipo e um padrão. Os tipos: **Comprimento** (milímetros), **Ângulo** (graus), **Número**, **Número inteiro**, **Sim / Não**, **Caneta** (1–16) e três que guardam palavras em vez de números: **Texto**, **Material** (um dos materiais do projeto) e **Preenchimento** (um preenchimento de planta). Palavras não são usadas em fórmulas; elas colorem um sólido (o seu **Material**), preenchem uma parte de símbolo ou aparecem como `{Name}` no texto de um símbolo. A caixa **Por elemento** torna o parâmetro algo que cada elemento colocado define para si, em vez do seu tamanho.

- Uma **fórmula** faz um parâmetro seguir outros, por exemplo `Width / 30` ou `if(Width > 1200, 2, 1)`. Comprimentos em fórmulas são em milímetros, ou escreva uma unidade: `3'`, `6in`, `50cm`.
- Renomear um parâmetro o renomeia em todas as fórmulas e campos que o usam. Um parâmetro ainda em uso não pode ser removido.
- O **Material** de um sólido usa a cor de um material do projeto (ou de um parâmetro Material), **Mostrado em** o oculta em níveis de detalhe mais grosseiros, e **Repetir** cria cópias: uma quantidade (um número ou um número inteiro, de 1 a 200) e o passo entre elas em x, y e z. Um sólido repetido é uma fileira de tábuas, barras ou furos; usado em um corte, as cópias são cortadas juntas.
- Uma família de porta ou janela também recebe dois nomes da sua parede: `WallThickness` e `Face` (1 ou −1, o lado para o qual a porta abre).

## Sólidos

A aba {{ui:Solids}} lista os sólidos. Adicione uma caixa, uma extrusão, uma revolução ou uma varredura:

| Sólido | O que você define |
|---|---|
| Caixa | seus dois cantos: x0 até x1, y0 até y1, z0 até z1 |
| Extrusão | um perfil em um plano de trabalho (planta, frente ou lado), onde está o plano e uma profundidade |
| Revolução | um perfil, um eixo no plano e um ângulo de até 360° |
| Varredura | um caminho de pontos e um raio (uma haste ou um trilho) |

Cada número pode ser um número digitado ou uma expressão dos parâmetros. Cada sólido tem uma cor e **Mostrado quando**: deixe vazio para mostrá-lo sempre, ou informe um parâmetro Sim / Não (ou escreva uma comparação como `Shelves >= 3`) para mostrá-lo só então. Isso é um parâmetro de visibilidade.

### Desenhar um perfil

O perfil de uma extrusão ou de uma revolução é desenhado no seu plano de trabalho, abaixo da prévia:

- Clique no papel para adicionar um ponto depois do ponto escolhido.
- Arraste um ponto para movê-lo. Os pontos se encaixam na grade; segure {{key:Shift}} para posicioná-los livremente.
- Clique em um pequeno quadrado de um segmento para adicionar um ponto ali. {{key:Shift}}+clique nele transforma esse segmento em um arco (clique de novo para o outro lado, e depois para reto).
- Clique duas vezes em um ponto para removê-lo.

Pontos vazados são definidos por parâmetros: altere-os na tabela, não arrastando.

## Booleanas

A aba {{ui:Booleans}} corta o segundo sólido do primeiro, ou une os dois. O resultado de uma booleana pode ser cortado ou unido de novo. Um sólido usado em uma booleana é desenhado apenas como parte dela.

Quando o segundo sólido é ocultado pelo seu parâmetro Sim / Não, o primeiro é mantido como está; quando o primeiro é ocultado, o resultado fica oculto.

## Símbolo em planta

A aba {{ui:Plan symbol}} desenha o que a planta mostra para esta família, em vez do corte dos seus sólidos: linhas, retângulos, círculos, arcos, polígonos e textos, nos eixos da própria família. Cada parte tem uma **caneta** (1–16, uma expressão ou um parâmetro Caneta), um **preenchimento** (nenhum, sólido, diagonal, cruzado, concreto, isolamento, terra, ou um parâmetro Preenchimento), uma expressão **mostrado por**, uma **faixa de corte** em milímetros acima da sua base (desenhada com peso total quando o corte da planta está dentro dela, fina abaixo e tracejada acima: um armário acima do corte aparece tracejado), um nível de detalhe e uma repetição. O texto pode citar parâmetros como `{Name}`. **A planta mostra: O corte dos sólidos** mantém a planta cortando os sólidos enquanto o símbolo permanece na família. Outros programas leem o símbolo como a pegada da família (linhas e formas; o texto fica no BimCraft).

## Famílias internas

A aba {{ui:Families inside}} coloca outra família dentro desta: uma perna em uma mesa, uma maçaneta em uma porta. Escolha a família e depois onde ela fica (x, y, z), quanto está girada (só quartos de volta: 0, 90, 180, 270), quando é mostrada e os valores que recebe, um por linha, como `Height = Height - 40`. Ao salvar a família interna, esta é desenhada de novo; uma família mantida por outra não pode ser excluída; uma família não pode conter a si mesma, nem mesmo por meio de outra, e o aninhamento para em quatro níveis.

## Pontos de controle

Um ponto de controle é um ponto ou uma aresta que você arrasta para alterar um parâmetro. Na aba {{ui:Hotspots}} adicione um, escolha o eixo em que ele arrasta e o parâmetro numérico que ele altera, e escreva sua posição com as mesmas expressões dos sólidos. Na prévia, escolha **Hotspots** abaixo das alças para arrastá-los. Em um elemento colocado na planta (selecione-o com {{ui:Select}}), os pontos de controle x e y aparecem como grips: arraste um e o elemento assume o tamanho que põe o ponto de controle ali, passando por quaisquer fórmulas entre eles; um Desfazer o devolve. Um ponto de controle não pode alterar um parâmetro dirigido, um Sim / Não ou uma palavra.

Na vista 3D, os mesmos pontos de controle aparecem como grips no elemento selecionado, e os de subir e descer (eixo z) também aparecem, o que a planta não consegue desenhar. Selecione o elemento, arraste um grip ao longo do seu eixo e solte: o elemento assume o tamanho que põe o ponto de controle ali, como um único passo de desfazer. Os grips ficam ocultos enquanto a caixa de corte está ligada, pois ela usa os mesmos grips.

## Conectores

Famílias colocadas sobre um piso (mobiliário, louças e outras) têm a aba {{ui:Connectors}}: os pontos onde uma tubulação ou um duto se conecta ao elemento, como a torneira e o ralo de um lavatório. Clique em {{ui:Add a connector}} e defina:

- **Tipo**: tubulação ou duto, e seu **Sistema** (água fria, esgoto sanitário, ar de insuflamento…).
- **x**, **y** e **z**: onde ele fica, nos eixos da própria família. Como os números de um sólido, cada um pode ser um número ou uma fórmula dos parâmetros, então o conector se move com o tamanho.
- **Sentido de saída**: a direção em que a tubulação ou o duto sai dele, ao longo de um dos eixos da família (um ralo sob um lavatório fica **Para baixo**).
- **Tamanho (mm)**: o diâmetro nominal da tubulação (DN) ou o diâmetro do duto redondo.
- **Fluxo**: **Entrada** para um conector que é alimentado (uma torneira), **Saída** para um que drena.

A prévia desenha cada conector como um anel com uma seta indicando a saída. Portas e janelas não têm conectores.

Para uma peça hidráulica, escolha qual ela é em **Peça hidráulica** (bacia sanitária, lavatório, pia de cozinha, chuveiro, tanque). As louças iniciais já indicam isso.

Cada elemento colocado a partir da família recebe seus conectores como portas no arquivo IFC, e eles são refeitos quando o elemento muda de tamanho ou quando a família é salva. Programas que leem sistemas IFC veem onde cada tubulação ou duto pertence.

## A prévia e suas alças

A prévia é a família escrita como IFC, pelo mesmo código que a salva no modelo, e desenhada de volta. O que você vê é o que outros programas recebem. Abaixo dela, **Tamanho mostrado** define os valores dos parâmetros que a prévia usa.

**As alças** são pontos na prévia: **O tamanho** mostra uma alça para Largura, Profundidade e Altura; **O sólido escolhido** mostra uma em cada face do sólido que você selecionou. Arraste uma alça:

- em uma face definida por um parâmetro, o tamanho mostrado muda (as fórmulas da família são mantidas);
- em uma face definida por um número digitado, o número muda.

## Salvar

{{ui:Save the family}} verifica a família, desenha de novo cada um dos seus tamanhos e refaz cada um dos seus elementos, como um único passo que você pode desfazer. Se um tamanho não puder ser desenhado com a alteração (por exemplo, um sólido ficaria sem largura naquele tamanho), nada é salvo e o editor informa qual tamanho foi.

Se outra pessoa salvou a mesma família enquanto o seu editor estava aberto (em uma sessão Live do TeamWork, ou em outra janela), {{ui:Save the family}} recusa e avisa, em vez de substituir a alteração dela pela sua. Feche o editor, abra a família de novo para ver a alteração dela e refaça a sua.

:::note
A geometria é salva como sólidos próprios do IFC: extrusões, revoluções, discos varridos e resultados de booleanas. Nada é convertido em uma lista de triângulos, então os arquivos ficam pequenos e outros programas leem as formas como formas. Perfis com arcos são salvos com arcos no IFC4; o IFC2X3 não tem segmentos de arco em um perfil, então ali os arcos são salvos como pequenos trechos retos.
:::

Veja também [Famílias e seus tamanhos](topic:families).
