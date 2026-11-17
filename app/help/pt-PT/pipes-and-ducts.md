---
title: Tubos e condutas
summary: Desenhe troços de tubo e de conduta na planta pelos seus eixos; os cotovelos, tês, reduções e transições são feitos para si, os troços pertencem a sistemas com portas ligadas no ficheiro IFC, e aparecem nas plantas, nos mapas e na medição.
keywords: tubo, tubos, tubagem, canalização, conduta, condutas, rede de condutas, AVAC, MEP, mecânica, cotovelo, tê, redução, transição, acessório, acessórios, válvula, válvulas, válvula de cunha, válvula de esfera, válvula de globo, válvula de retenção, coluna, declive, drenagem, sanitário, pluvial, ventilação, água fria, água quente, água arrefecida, aquecimento, gás, proteção contra incêndio, insuflação, retorno de ar, extração, sistema, sistemas, porta, portas, conector, conectores, aparelho, aparelhos, aparelho sanitário, lavatório, lava-loiça, sanita, base de duche, tanque de lavandaria, unidades de aparelho, uhc, dfu, dimensionar drenagens, dimensionamento de drenagens, coletor predial, ramal, coletor, caudal de ar, cfm, atrito, atrito constante, dimensionamento, mapa, medição, nbr, nbr 5648, nbr 5688, nbr 8160, pvc soldável, esgoto, dn
from: 85140bc5
---

## O que vai fazer

Desenhe os tubos e as condutas de um edifício como desenha paredes: clique nos cantos do eixo de um troço, à altura que definir. O BimCraft faz os acessórios, coloca cada peça no seu sistema e liga-as, para que outros programas leiam o troço como um só sistema ligado.

## Desenhar um tubo

1. Ative {{ui:Desenhar}}, abra {{ui:Compilação}} e escolha {{ui:Tubo}}.
2. Na barra, escolha o **sistema** (água fria, água quente, drenagem sanitária, gás…). Ele define um material habitual: cobre para água, PVC para drenagens e ventilações, aço para aquecimento, água arrefecida, gás e proteção contra incêndio. Altere o **material**, a **classe** e o **diâmetro**, se precisar. Os diâmetros e as paredes vêm de normas públicas: tubo de aço ASME B36.10M, tubo de cobre ASTM B88, PVC ASTM D1785 e PEX ASTM F876. Os projetos brasileiros podem usar **PVC water pipe (NBR 5648)**, o PVC de colagem a solvente para água fria, e **PVC drain pipe (NBR 5688)**, série normal ou reforçada, para drenagens e ventilações: os seus diâmetros são designados por DN (DN 25, DN 100). Depois de escolher um deles, a escolha de outro sistema mantém-se nos tubos brasileiros (tubo de PVC para esgoto numa drenagem sanitária depois de tubo de PVC para água).
3. Defina **Altura**: a altura do eixo do tubo acima do nível.
4. Clique onde o tubo começa, depois em cada canto. Faça duplo clique, ou prima {{key:Enter}}, no último ponto. {{key:Backspace}} retira o último canto; {{key:Esc}} descarta o troço.

O tubo ajusta-se às paredes e aos outros troços: comece na extremidade de um tubo para continuar a partir dele, ou termine na linha de um tubo para derivar dele. Um novo troço toma a altura do tubo a que se ajusta.

Um troço começado ou terminado na porta de uma peça de equipamento toma o seu diâmetro e o seu sistema, e fica fixo a ela: ver [Equipamento MEP com portas](topic:mep-equipment) e [Ligar tubos e condutas a equipamento](topic:mep-connections).

## Definir a norma de canalização do projeto

A primeira lista da barra do tubo é a **norma de canalização** do modelo: **EUA (IPC, polegadas)** ou **Brasil (ABNT, DN)**. Fica guardada no modelo, para que todos os que abrirem o ficheiro comecem os troços da mesma maneira. Em **EUA**, um novo troço começa em cobre (água) ou PVC Schedule 40 (drenagens), em polegadas, com o declive do International Plumbing Code. Em **Brasil**, a água fria começa como PVC soldável DN 25, as drenagens sanitárias e pluviais e as ventilações como PVC esgoto DN 100, com o declive da NBR 8160, e a água quente em cobre. A norma também se aplica a um troço começado no conector de um aparelho ou numa porta de equipamento. Os tubos já desenhados mantêm o seu material e as suas próprias tabelas; a lista de materiais continua aberta, por isso ainda pode desenhar de propósito um troço brasileiro num modelo americano. Um ficheiro sem escolha comporta-se como antes: um novo troço segue o material em uso.

## Desenhar uma conduta

1. Escolha {{ui:Conduta}}. Escolha o sistema (insuflação, retorno, extração ou ar exterior) e a forma: redonda, retangular ou oval achatada.
2. Escreva a largura e a altura (a largura de uma conduta redonda é o seu diâmetro), e **Altura** para a altura do eixo.
3. Para a dimensionar a partir do caudal de ar, escreva o **Caudal de ar** e a taxa de **Atrito** e clique em {{ui:Dimensionar}}. A conduta é dimensionada por atrito constante, o método do capítulo de projeto de condutas do ASHRAE Handbook, e arredondada para o diâmetro disponível mais próximo, de modo que o atrito fique igual ou abaixo da taxa escrita. Sem taxa escrita, usa 0.08 in. de coluna de água por 100 ft (0.8 Pa/m). Uma conduta retangular mantém a altura escrita e recebe uma largura; o BimCraft avisa quando os seus lados têm mais de 4 para 1.
4. Clique nos cantos como num tubo.

## Aparelhos sanitários

{{ui:Compilação}} › {{ui:Colocar família}} oferece cinco aparelhos para começar, cada um com uma drenagem e um conector de água fria: uma **Sanita**, um **Lavatório**, um **Lava-loiça de cozinha**, uma **Base de duche** e um **Tanque de lavandaria**. A sua frente fica voltada para si ao colocá-los, e as costas ficam contra a parede. As suas drenagens estão no menor diâmetro de drenagem de aparelho da NBR 8160 (DN 100 para a sanita, DN 50 para o lava-loiça de cozinha, DN 40 para os restantes); a água é DN 20. Altere os seus diâmetros, ou edite-os, como qualquer família: ver [Famílias e os seus diâmetros](topic:families).

Uma família indica qual aparelho é em {{ui:Aparelho sanitário}} no separador {{ui:Conectores}} do editor de famílias. A sua drenagem é então contada em unidades de aparelho: 6 UHC para uma sanita, 1 para um lavatório, 3 para um lava-loiça de cozinha ou um tanque de lavandaria, 2 para uma base de duche (NBR 8160), ou as unidades de drenagem de aparelho da Tabela 709.1 do IPC.

## A partir do conector de um aparelho

Elementos colocados a partir de uma família com conectores (a drenagem e a torneira de um lavatório, o pescoço de um terminal de ar: ver [Editar uma família](topic:family-editor)) mostram os seus conectores livres como pontos enquanto {{ui:Tubo}} ou {{ui:Conduta}} estiver ativo, e o ponteiro ajusta-se a eles.

- **Começar num conector**: o troço toma o sistema e o diâmetro do conector (o tubo do material da barra no diâmetro do conector ou logo acima; uma conduta redonda do seu diâmetro). Quando o conector aponta para baixo ou para cima, como uma drenagem sob um lavatório, o troço vai primeiro em linha reta para baixo ou para cima até à altura em **Altura**, e depois continua com os seus cliques.
- **Terminar num conector**: o troço desce ou sobe até ele e termina aí.

O troço fica ligado ao elemento no ficheiro IFC, para que outros programas vejam o aparelho como parte do seu sistema. Um elemento colocado depois, com um conector na extremidade de um troço, fica também ligado a ele. Um troço afastado de um conector deixa de estar ligado a ele.

## Os acessórios, feitos para si

| Onde | O que o BimCraft faz |
|---|---|
| Um troço muda de direção | Um cotovelo. Tubo de aço no raio longo da ASME B16.9 (1.5 × o diâmetro), outro tubo a um diâmetro exterior, conduta redonda a 1.5 diâmetros, conduta retangular a uma largura (ou a uma altura numa mudança para cima ou para baixo) |
| Um troço termina na linha de outro troço | Um tê; o outro troço é dividido aí |
| Dois troços se encontram topo a topo, com diâmetros diferentes | Uma redução (tubos) ou uma transição (condutas) |
| Dois troços do mesmo diâmetro se encontram topo a topo, num ângulo | Um cotovelo |

Quando altera, move ou elimina um troço, cada acessório desse nível é refeito. Se uma perna for curta demais para os acessórios nas suas extremidades, o BimCraft avisa e não altera nada: afaste mais o canto.

:::note
Os acessórios e as válvulas são genéricos: desenhados a partir do diâmetro do tubo ou da conduta, e não do catálogo de um fabricante. Acessórios de encaixe, de pressão e ranhurados, corpos de válvulas e equipamentos têm diâmetros próprios dos fabricantes; verifique-os com o seu fornecedor antes de encomendar.
:::

## Colunas

Ao desenhar, escreva uma nova altura em **Altura** e prima {{key:Enter}}: o troço sobe ou desce em linha reta no último canto, com um cotovelo em cada extremidade. Uma coluna pode subir para o nível de cima. Cada nível mostra as partes de um troço que o seu intervalo de vista alcança, com **UP** ou **DN** na coluna.

## Drenagens e o seu declive

As drenagens sanitárias e pluviais começam com o menor declive que o International Plumbing Code permite para o seu diâmetro: 1/4 in. por ft até 2-1/2 in., 1/8 in. por ft dos 3 aos 6 in., 1/16 in. por ft a partir de 8 in. O tubo de PVC para esgoto brasileiro começa com o declive da NBR 8160: 2 % até DN 75, 1 % a partir de DN 100. Escreva outro declive na barra ou em Propriedades: `1/4"/ft`, `2 %` ou `1:50`. O troço desce a partir do seu primeiro ponto, por isso desenhe as drenagens no sentido em que escoam. A planta mostra a queda e uma seta. Propriedades avisa quando uma drenagem é mais plana do que o mínimo da norma.

## Dimensionar as drenagens por unidades de aparelho

Escolha uma drenagem sanitária: **Unidades de aparelho** em Propriedades indica quantas transporta e o menor diâmetro de que precisa. Conta cada aparelho sanitário cujo conector de drenagem está no troço, e também cada drenagem que nele escoa: desenhe as drenagens no sentido em que escoam, cada uma terminando na drenagem em que escoa.

- Drenagens em tubo de PVC para esgoto brasileiro contam **UHC** e seguem a NBR 8160; as outras contam **DFU** e seguem o International Plumbing Code.
- **Drenagem**: um **Ramal** é dimensionado pela tabela do código para ramais de aparelhos; um **Coletor predial** pela sua tabela, segundo o declive, por isso o seu **Declive** importa.
- Uma drenagem nunca é menor do que as drenagens dos aparelhos que serve (uma sanita precisa de DN 100, ou 3 in.), nem do que uma drenagem que nela escoa. Na NBR 8160, um coletor predial é pelo menos DN 100.

{{ui:Dimensionar as drenagens}} faz de cada drenagem sanitária do modelo que é pequena demais para as suas unidades de aparelho o diâmetro de que precisa, como um único passo que pode anular. Uma drenagem desenhada maior do que precisa fica como está. Quando uma drenagem transporta mais do que o maior diâmetro do seu tubo pode transportar no seu declive, o BimCraft avisa: dê-lhe um declive mais acentuado ou outro tubo.

:::note
As tabelas são as de drenagens horizontais. Colunas, ventilações e drenagens pluviais não são dimensionadas aqui: verifique-as, e todo o projeto, contra a norma que se aplica ao projeto.
:::

## Válvulas

1. Escolha {{ui:Válvula}} e o tipo: de cunha, de esfera, de globo ou de retenção.
2. Clique num tubo onde ela vai. O tubo é cortado à volta dela e a válvula fica ligada aos dois lados.

Propriedades do troço lista as suas válvulas, cada uma com {{ui:Remover}}.

Mais tipos de válvula, um filtro, registos em condutas, as suas próprias especificações de tubagem e famílias de fabricantes: ver [Especificações de tubagem, válvulas, registos e famílias de fabricantes](topic:pipe-specs).

## Alterar um troço

Escolha qualquer parte de um troço, na planta ou na vista 3D. Em Propriedades:

- **Sistema**, **Material**, **Classe** e **Diâmetro** (tubos), ou **Forma**, **Largura**, **Altura** (condutas).
- **Altura acima do nível** move o troço inteiro para cima ou para baixo.
- **Isolamento**: a sua espessura, guardada para a verificação de folgas e a lista de aberturas (nada é desenhado para ele): ver [Verificar tubos e condutas contra a estrutura](topic:mep-against-structure).
- Tubo de aço: **Cortar em spools**: ver [Tubos de aço em spools e folhas de spool](topic:pipe-spools).
- **Declive** (tubos).
- **Caudal** com {{ui:Dimensionar}}: para água, o menor diâmetro que mantém a água a 8 ft/s (2.4 m/s), ou 5 ft/s (1.5 m/s) para água quente; a 3 m/s para o tubo brasileiro de PVC para água (NBR 5626). Para condutas, a velocidade e a taxa de atrito da conduta tal como desenhada. As drenagens sanitárias são dimensionadas pelas suas unidades de aparelho: ver **Dimensionar as drenagens por unidades de aparelho** abaixo.

Cada alteração é um passo de {{ui:Anular}}. {{key:Delete}} elimina o troço inteiro.

## Plantas

- Os tubos menores do que 150 mm (cerca de 6 in.) são desenhados como uma linha no seu eixo; os tubos maiores e todas as condutas como duas linhas à sua largura.
- Cada sistema tem a sua própria cor; a PDF da planta imprime-as a preto.
- Cada troço tem uma etiqueta com o seu diâmetro e sistema (por exemplo `2" CW` ou `16×10 SA`).
- O intervalo de vista de uma planta decide quais os troços que mostra, e {{ui:Mostrado nesta planta}} pode deixar de fora **Tubos** ou **Condutas**: ver [Vistas, intervalos de vista e as suas próprias folhas](topic:views-and-sheets).

## Mapas e medição

O painel {{ui:Mapas}} acrescenta **Tubos** (por sistema, material e diâmetro, com os seus comprimentos), **Condutas** (por sistema, forma e diâmetro, com comprimentos e a área de superfície exterior) e **Acessórios e válvulas** (por tipo e diâmetro, contados). Clique numa linha para escolher o que ela lista; {{ui:Transferir CSV}} transfere-a.

{{ui:Medição}} leva os troços para o TakeoffCraft: tubo e conduta por diâmetro, como troços desenhados na planta (as drenagens com declive são medidas ao longo do seu declive), acessórios e válvulas contados onde estão: ver [Enviar as quantidades do modelo para o TakeoffCraft](topic:takeoff). As colunas ficam de fora dessa folha, porque uma planta não as consegue medir; o mapa de Tubos tem o seu comprimento.

## No ficheiro IFC

Cada troço é um conjunto que contém as suas partes: segmentos de tubo e de conduta, acessórios e válvulas, cada um com o seu tipo, material, uma cor para o seu sistema e as suas portas. As portas que se tocam ficam ligadas, e cada parte pertence ao seu sistema de distribuição (os ficheiros IFC2X3 recebem o mesmo como segmentos de fluxo, acessórios e controladores num sistema). Outros programas que leem sistemas IFC veem um troço ligado por sistema. A definição própria do troço fica guardada com ele, para que o BimCraft o refaça da mesma maneira quando o alterar.
