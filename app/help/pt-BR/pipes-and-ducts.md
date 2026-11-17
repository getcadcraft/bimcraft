---
title: Tubulações e dutos
summary: Desenhe trechos de tubulação e de duto na planta pela sua linha central; as curvas, tês, reduções e transições são feitos para você, os trechos pertencem a sistemas com portas conectadas no arquivo IFC, e aparecem nas plantas, nas tabelas e no levantamento de quantitativos.
keywords: tubulação, tubulações, tubo, tubos, instalações hidráulicas, duto, dutos, rede de dutos, hvac, mep, mecânica, curva, tê, redução, transição, conexão, conexões, válvula, válvulas, válvula gaveta, válvula esfera, válvula globo, válvula de retenção, prumada, declividade, ralo, esgoto sanitário, águas pluviais, ventilação, água fria, água quente, água gelada, aquecimento, gás, proteção contra incêndio, ar de insuflamento, ar de retorno, exaustão, sistema, sistemas, porta, portas, conector, conectores, aparelho sanitário, lavatório, pia, bacia sanitária, chuveiro, tanque, unidades de aparelho, uhc, dfu, dimensionar os esgotos, dimensionamento de esgoto, ramal, coletor, vazão de ar, cfm, perda de carga, perda de carga constante, dimensionamento, tabela, levantamento de quantitativos, nbr, nbr 5648, nbr 5688, nbr 8160, pvc soldável, esgoto, dn
from: 85140bc5
---

## O que você vai fazer

Desenhe as tubulações e os dutos de um edifício do mesmo jeito que desenha paredes: clique nos cantos da linha central de um trecho, na altura que você definiu. O BimCraft faz as conexões, põe cada peça no seu sistema e as conecta, para que outros programas leiam o trecho como um único sistema conectado.

## Desenhar uma tubulação

1. Ative {{ui:Desenhar}}, abra {{ui:Build}} e escolha {{ui:Tubulação}}.
2. Na barra, escolha o **sistema** (água fria, água quente, esgoto sanitário, gás…). Ele define um material usual: cobre para água, PVC para esgoto e ventilação, aço para aquecimento, água gelada, gás e proteção contra incêndio. Altere o **material**, a **classe** e o **diâmetro** se precisar. Diâmetros e paredes vêm de normas públicas: tubo de aço ASME B36.10M, tubo de cobre ASTM B88, PVC ASTM D1785 e PEX ASTM F876. Projetos brasileiros podem usar **tubo de PVC para água (NBR 5648)**, o PVC soldável para água fria, e **tubo de PVC para esgoto (NBR 5688)**, série normal ou reforçada, para esgotos e ventilações: seus diâmetros são nomeados por DN (DN 25, DN 100). Depois de escolher um deles, mudar de sistema mantém os tubos brasileiros (tubo de PVC para esgoto em um esgoto sanitário, depois de tubo de PVC para água).
3. Defina **Altura**: a altura da linha central do tubo acima do nível.
4. Clique onde o tubo começa e em cada canto. Dê duplo clique, ou pressione {{key:Enter}}, no último ponto. {{key:Backspace}} desfaz o último canto; {{key:Esc}} descarta o trecho.

O tubo se encaixa como as paredes, e também nos outros trechos: comece na extremidade de um tubo para continuar a partir dele, ou termine na linha de um tubo para ramificar. Um novo trecho assume a altura do tubo ao qual se encaixa.

Um trecho iniciado ou terminado na porta de um equipamento assume o diâmetro e o sistema dele e fica preso a ele: veja [Equipamentos MEP com portas](topic:mep-equipment) e [Conectar tubulações e dutos a equipamentos](topic:mep-connections).

## Definir o padrão de instalações hidráulicas do projeto

A primeira lista da barra de tubulação é o **padrão hidráulico** do modelo: **US (IPC, polegadas)** ou **Brasil (ABNT, DN)**. Ele é salvo no modelo, então todos que abrirem o arquivo começam os trechos do mesmo jeito. Com **US**, um novo trecho começa em cobre (água) ou PVC Schedule 40 (esgoto), em polegadas, com a declividade do International Plumbing Code. Com **Brasil**, a água fria começa como PVC soldável DN 25, os esgotos sanitários e pluviais e as ventilações como PVC esgoto DN 100, com a declividade da NBR 8160, e a água quente em cobre. Vale também para um trecho iniciado no conector de um aparelho ou na porta de um equipamento. Tubos já desenhados mantêm o seu material e as suas próprias tabelas; a lista de materiais continua aberta, então você ainda pode desenhar um trecho brasileiro em um modelo US de propósito. Um arquivo sem escolha se comporta como antes: um novo trecho segue o material em uso.

## Desenhar um duto

1. Escolha {{ui:Duto}}. Escolha o sistema (insuflamento, retorno, exaustão ou ar externo) e a forma: circular, retangular ou oval achatada.
2. Digite a largura e a altura (a largura de um duto circular é o seu diâmetro), e **Altura** para a altura da linha central.
3. Para dimensionar pela vazão, digite a **Vazão de ar** e a **Perda de carga unitária** e clique em {{ui:Dimensionar}}. O duto é dimensionado por perda de carga constante, o método do capítulo de dutos do ASHRAE Handbook, e arredondado para um tamanho disponível, de modo que a perda de carga fica igual ou abaixo da taxa que você digitou. Sem taxa digitada, usa 0.08 in. de coluna d'água por 100 ft (0.8 Pa/m). Um duto retangular mantém a altura que você digitou e recebe uma largura; o BimCraft avisa quando seus lados passam de 4 para 1.
4. Clique nos cantos como para um tubo.

## Aparelhos sanitários

{{ui:Build}} › {{ui:Colocar família}} oferece cinco aparelhos para começar, cada um com um ralo e um conector de água fria: uma **Bacia sanitária**, um **Lavatório**, uma **Pia de cozinha**, uma **Base de chuveiro** e um **Tanque**. Suas frentes ficam voltadas para você ao posicioná-los, e a parte traseira encosta na parede. Seus ralos ficam no menor diâmetro de ralo de aparelho da NBR 8160 (DN 100 para a bacia sanitária, DN 50 para a pia de cozinha, DN 40 para os demais); a água é DN 20. Altere os diâmetros, ou edite-os, como qualquer família: veja [Famílias e suas dimensões](topic:families).

Uma família diz qual aparelho ela é em {{ui:Aparelho sanitário}} na aba {{ui:Conectores}} do editor de famílias. Seu ralo passa então a ser contado em unidades de aparelho: 6 UHC para uma bacia sanitária, 1 para um lavatório, 3 para uma pia de cozinha ou um tanque, 2 para um chuveiro (NBR 8160), ou as unidades de descarga de aparelho da Tabela 709.1 do IPC.

## A partir do conector de um aparelho

Elementos posicionados a partir de uma família com conectores (o ralo e a torneira de um lavatório, o pescoço de um terminal de ar: veja [Editar uma família](topic:family-editor)) mostram seus conectores livres como pontos enquanto {{ui:Tubulação}} ou {{ui:Duto}} está ativo, e o ponteiro se encaixa neles.

- **Começar em um conector**: o trecho assume o sistema e o diâmetro dele (o tubo do material da barra, no diâmetro do conector ou logo acima; um duto circular, do diâmetro dele). Quando o conector aponta para baixo ou para cima, como um ralo sob um lavatório, o trecho primeiro desce ou sobe reto até a altura em **Altura**, e depois segue nos seus cliques.
- **Terminar em um conector**: o trecho desce ou sobe até ele e termina ali.

O trecho fica conectado ao elemento no arquivo IFC, para que outros programas vejam o aparelho como parte do seu sistema. Um elemento posicionado depois, com um conector na extremidade de um trecho, também fica conectado a ele. Um trecho afastado de um conector deixa de estar conectado a ele.

## As conexões, feitas para você

| Onde | O que o BimCraft faz |
|---|---|
| Um trecho faz uma curva | Uma curva. Tubo de aço no raio longo da ASME B16.9 (1.5 × o diâmetro), outros tubos a um diâmetro externo, duto circular a 1.5 diâmetros, duto retangular a uma largura (ou a uma altura, para uma curva para cima ou para baixo) |
| Um trecho termina na linha de outro trecho | Um tê; o outro trecho é dividido ali |
| Dois trechos se encontram ponta a ponta em diâmetros diferentes | Uma redução (tubulações) ou uma transição (dutos) |
| Dois trechos do mesmo diâmetro se encontram ponta a ponta em ângulo | Uma curva |

Quando você altera, move ou apaga um trecho, todas as conexões daquele nível são refeitas. Se um trecho for curto demais para as conexões nas suas extremidades, o BimCraft avisa e não muda nada: afaste mais o canto.

:::note
As conexões e válvulas são genéricas: desenhadas a partir do diâmetro do tubo ou do duto, não do catálogo de um fabricante. Conexões de bolsa, de pressão e ranhuradas, corpos de válvulas e equipamentos têm dimensões próprias de cada fabricante; confira-as com o seu fornecedor antes de encomendar.
:::

## Prumadas

Ao desenhar, digite uma nova altura em **Altura** e pressione {{key:Enter}}: o trecho sobe ou desce reto no último canto, com uma curva em cada extremidade. Uma prumada pode subir até o nível acima. Cada nível mostra as partes de um trecho que a faixa de visualização alcança, com **UP** ou **DN** na prumada.

## Esgotos e a sua declividade

Os esgotos sanitários e pluviais começam com a menor declividade que o International Plumbing Code permite para o seu diâmetro: 1/4 in. por ft até 2-1/2 in., 1/8 in. por ft de 3 a 6 in., 1/16 in. por ft a partir de 8 in. O tubo de PVC para esgoto brasileiro começa com a declividade da NBR 8160: 2 % até DN 75, 1 % a partir de DN 100. Digite outra declividade na barra ou em Propriedades: `1/4"/ft`, `2 %` ou `1:50`. O trecho cai a partir do seu primeiro ponto, então desenhe os esgotos no sentido em que escoam. A planta mostra a queda e uma seta. Propriedades avisa quando um esgoto é mais plano que o mínimo do código.

## Dimensionar os esgotos por unidades de aparelho

Escolha um esgoto sanitário: **Unidades de aparelho** em Propriedades informa quantas ele transporta e o menor diâmetro que elas exigem. Cada aparelho sanitário cujo conector de ralo está no trecho é contado, e também cada esgoto que nele desemboca: desenhe os esgotos no sentido em que escoam, cada um terminando no esgoto para o qual escoa.

- Os esgotos em tubo de PVC para esgoto brasileiro contam **UHC** e seguem a NBR 8160; os outros contam **DFU** e seguem o International Plumbing Code.
- **Esgoto**: um **Ramal** é dimensionado pela tabela do código para ramais de aparelhos; um **Coletor predial** pela sua tabela, conforme a declividade, por isso a **Declividade** importa.
- Um esgoto nunca é menor que os ralos dos aparelhos que atende (uma bacia sanitária precisa de DN 100, ou 3 in.), nem menor que um esgoto que nele desemboca. Pela NBR 8160, um coletor predial é DN 100 no mínimo.

{{ui:Dimensionar os esgotos}} faz de cada esgoto sanitário do modelo que for pequeno demais para as suas unidades de aparelho o diâmetro de que ele precisa, como uma etapa que você pode desfazer. Um esgoto desenhado maior do que precisa fica como está. Quando um esgoto transporta mais do que o maior diâmetro do seu tubo suporta na sua declividade, o BimCraft avisa: dê a ele uma declividade maior ou outro tubo.

:::note
As tabelas são as de esgotos horizontais. Prumadas, ventilações e águas pluviais não são dimensionadas aqui: confira-as, e o projeto inteiro, com o código aplicável ao projeto.
:::

## Válvulas

1. Escolha {{ui:Válvula}} e o tipo: gaveta, esfera, globo ou retenção.
2. Clique em um tubo onde ela vai. O tubo é cortado em volta dela e a válvula fica conectada aos dois lados.

Propriedades do trecho lista as suas válvulas, cada uma com {{ui:Remover}}.

Mais tipos de válvula, um filtro, dampers em dutos, suas próprias especificações de tubulação e famílias de fabricantes: veja [Especificações de tubulação, válvulas, dampers e famílias de fabricantes](topic:pipe-specs).

## Alterar um trecho

Escolha qualquer parte de um trecho, na planta ou na vista 3D. Em Propriedades:

- **Sistema**, **Material**, **Classe** e **Diâmetro** (tubos), ou **Forma**, **Largura** e **Altura** (dutos).
- **Altura acima do nível** move o trecho inteiro para cima ou para baixo.
- **Isolamento**: a sua espessura, mantida para a verificação de folgas e a lista de aberturas (nada é desenhado para ele): veja [Verificar tubulações e dutos contra a estrutura](topic:mep-against-structure).
- Tubo de aço: **Cortar em spools**: veja [Spools de tubulação de aço e folhas de spool](topic:pipe-spools).
- **Declividade** (tubos).
- **Vazão** com {{ui:Dimensionar}}: para água, o menor diâmetro que mantém a água a 8 ft/s (2.4 m/s), ou 5 ft/s (1.5 m/s) para água quente; a 3 m/s para o tubo de PVC para água brasileiro (NBR 5626). Para dutos, a velocidade e a perda de carga unitária do duto como desenhado. Esgotos sanitários são dimensionados pelas unidades de aparelho: veja **Dimensionar os esgotos por unidades de aparelho** acima.

Cada alteração é uma etapa de {{ui:Desfazer}}. {{key:Delete}} apaga o trecho inteiro.

## Plantas

- Tubos menores que 150 mm (cerca de 6 in.) são desenhados como uma linha na sua linha central; tubos maiores e todos os dutos, como duas linhas na sua largura.
- Cada sistema tem a sua própria cor; o PDF da planta as imprime em preto.
- Cada trecho é rotulado com o seu diâmetro e sistema (por exemplo `2" CW` ou `16×10 SA`).
- A faixa de visualização de uma planta decide quais trechos ela mostra, e {{ui:Exibido nesta planta}} pode deixar de fora **Tubulações** ou **Dutos**: veja [Vistas, faixas de visualização e suas próprias folhas](topic:views-and-sheets).

## Tabelas e levantamento de quantitativos

O painel {{ui:Tabelas}} adiciona **Tubulações** (por sistema, material e diâmetro, com os seus comprimentos), **Dutos** (por sistema, forma e diâmetro, com comprimentos e área de superfície externa) e **Conexões e válvulas** (por tipo e diâmetro, contadas). Clique em uma linha para escolher o que ela lista; {{ui:Baixar CSV}} a baixa.

{{ui:Levantamento de quantitativos}} leva os trechos ao TakeoffCraft: tubo e duto por diâmetro, como trechos desenhados na planta (esgotos inclinados são medidos ao longo da sua declividade), e conexões e válvulas contadas onde estão: veja [Enviar as quantidades do modelo ao TakeoffCraft](topic:takeoff). As prumadas ficam de fora dessa planilha, porque uma planta não consegue medi-las; a tabela Tubulações mostra o comprimento delas.

## No arquivo IFC

Cada trecho é um conjunto que contém as suas peças: segmentos de tubo e de duto, conexões e válvulas, cada um com o seu tipo, material, uma cor para o seu sistema e as suas portas. Portas que se tocam ficam conectadas, e cada peça pertence ao seu sistema de distribuição (arquivos IFC2X3 recebem o mesmo como segmentos de fluxo, conexões e controladores em um sistema). Outros programas que leem sistemas IFC veem um trecho conectado por sistema. A definição do próprio trecho é guardada com ele, então o BimCraft o refaz do mesmo jeito quando você o altera.
