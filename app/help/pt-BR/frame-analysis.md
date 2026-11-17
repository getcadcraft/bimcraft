---
title: Analisar o pórtico estrutural
summary: Esforços, reações e deslocamentos das vigas, pilares e contraventamentos do modelo sob hipóteses e combinações de carga que você define, mantidos no IFC. Um auxílio à análise, não uma verificação normativa.
keywords: análise, unidades, pés e polegadas, unidade de exibição, análise estrutural, verificações de dimensionamento, aproveitamento, laminado, soldado, AISC 360, EN 1993-1-1, análise de pórtico, modelo analítico, método da rigidez, cargas, hipótese de carga, combinação, carga permanente, sobrecarga, peso próprio, reações, momento fletor, cortante, força normal, flecha, forma deformada, apoios, rotulado, engastado, liberação, relatório, pdf, csv, craftscript, frame3d, vigas, pilares, barras
from: b93b58c4
---

A aba {{ui:Analysis}} à direita encontra os esforços nas vigas, pilares e contraventamentos do modelo aberto, as reações nas bases dos pilares e o quanto as barras se deformam, para as cargas que você informar.

:::warning
Trata-se de um **auxílio à análise, não uma verificação normativa**. A análise não aplica nenhuma norma de projeto: não dimensiona barras nem verifica capacidades, e não escolhe coeficientes de ponderação de cargas. Um engenheiro verifica o modelo analítico, suas cargas e apoios, e decide o que os números significam. O bloco {{ui:Design checks}} abaixo verifica perfis I de aço laminados conforme AISC 360 ou EN 1993-1-1, um auxílio até que um engenheiro o tenha revisado: veja [Verificações de dimensionamento](topic:frame-analysis#design-checks).
:::

## Como executar

1. Abra um modelo IFC e a aba {{ui:Analysis}}.
2. Selecione uma ou mais vigas, pilares ou contraventamentos na visualização, escolha um {{ui:Case}}, uma {{ui:Load}} e uma {{ui:Direction}}, digite o valor e pressione {{ui:Add load}}: kN/m para uma carga distribuída ao longo de uma barra, kN para uma carga pontual.
3. Pressione {{ui:Run analysis}}.

A tabela lista, para cada barra, a maior força normal, os cortantes, os momentos fletores, a torção e a flecha; clique no nome de uma barra para selecioná-la na visualização. Abaixo estão as reações. {{ui:On the model}} desenha a forma deformada, ou um dos esforços como diagrama ao lado de cada barra. Os resultados ficam desatualizados quando o modelo muda: execute novamente.

Cada carga e cada configuração é uma alteração na lista {{ui:Changes}}: {{ui:Undo}} a reverte, e {{ui:Save as IFC}} as mantém no arquivo (no conjunto de propriedades `CadCraft_Analysis` do projeto), de modo que, na próxima vez que o modelo for aberto aqui, as cargas continuem lá.

## Como o modelo analítico é criado

- Todo IfcBeam, IfcColumn e IfcMember cuja forma seja uma única extrusão reta vira uma barra sobre a linha do centroide da sua seção. Suas propriedades de seção vêm do perfil: perfis I, U, L e T, retângulos e tubos, círculos e tubos redondos, ou qualquer contorno fechado (então a constante de torção é uma estimativa, informada no relatório). O que for diferente disso é deixado de fora e contado.
- Em um modelo, as vigas param na face de um pilar e ficam abaixo do piso. Cada extremidade de barra é levada ao longo da sua própria linha até o eixo da barra à qual se liga, quando esse eixo está próximo (dentro de cerca do tamanho das seções), e essa barra é dividida ali. O relatório informa quantas extremidades foram movidas.
- **Bases de pilares** onde nada desce são apoios: engastados (no início) ou rotulados (fixados no lugar e contra a torção, livres para girar).
- **Extremidades de vigas** são rígidas ou rotuladas pela regra {{ui:Beam ends with no connection}}; **contraventamentos** (IfcMember) são rotulados nas duas extremidades. Selecione uma barra para dar às suas extremidades, ou à base de um pilar, uma regra própria.
- Materiais pelo nome: concreto (E = 30 GPa), madeira (E = 11 GPa), caso contrário aço (E = 200 GPa).

Se o pórtico puder se mover sem flexionar nada — um mecanismo —, a execução para e informa onde e em que sentido.

## Hipóteses, combinações, sinais e o relatório

A análise começa com **Permanente** (peso próprio), **Sobrecarga** e **Permanente + sobrecarga**; adicione hipóteses e combinações com os coeficientes que sua norma de projeto exige. N > 0 é tração; My > 0 coloca em tração o lado −z local da barra (uma viga fletida pela gravidade tem My > 0). {{ui:Report (PDF)}} e {{ui:Report (CSV)}} contêm as premissas, as seções, as hipóteses, as reações com seus somatórios, os esforços nas barras, os deslocamentos e uma envoltória. {{ui:Export as CraftScript}} grava o pórtico para a área de trabalho Script do PartCraft, onde a função de biblioteca `frame3d` o resolve em código legível.

O método é o da rigidez direta, linear e de primeira ordem, a menos que você marque Segunda ordem (P-Delta), verificado com casos de livro-texto.

**Segunda ordem (P-Delta).** Marque *Segunda ordem (P-Delta)* ao lado de Executar: cada combinação é resolvida novamente com as forças normais das barras atuando no pórtico deformado (cada barra dividida em 4 trechos, de modo que a flexão de uma barra entre suas extremidades também conta), até que as forças normais se estabilizem. A linha de resultado informa o número de passadas e o quanto o deslocamento lateral aumentou; os momentos, as flechas, as verificações de dimensionamento e o relatório passam a usar esses resultados. Acima da carga crítica elástica do pórtico, a execução para e informa isso. É elástica, com pequenas rotações, apenas por flexão, sem redução de rigidez nem cargas nocionais (não é, por si só, o método da análise direta da AISC); lajes, paredes e pisos rígidos permanecem de primeira ordem.

**Pressão de piso sobre lajes.** Para lajes de concreto (a análise lê uma laje como placa quando o material é concreto), o bloco Cargas tem {{ui:Pressure on every slab}}: digite kN/m², selecione a hipótese acima e pressione {{ui:Add to slabs}}. Ela é distribuída sobre todas as lajes encontradas pela análise, para baixo, e aparece na lista com um link Remover. É uma única pressão para todas as lajes, não uma por laje, e não é uma carga normativa: digite o valor que seu engenheiro informar.

**Frequências naturais (elementos finitos).** O bloco {{ui:Finite elements: natural frequencies}} abaixo dos resultados encontra os modos mais baixos do mesmo modelo com o motor de elementos finitos: vigas com suas liberações nas extremidades, lajes e paredes como cascas planas de quatro nós, pisos rígidos e apoios. Escolha quantos modos (3, 6, 10 ou 20) e o elemento de laje (a casca de quatro nós para lajes espessas ou finas, ou a de laje fina) e pressione {{ui:Find the frequencies}}. A tabela informa a frequência de cada modo em Hz, seu período em segundos e sua massa modal efetiva em X, Y e Z, como parcela da massa que pode se mover; {{ui:Show on the model}} desenha qualquer modo da mesma forma que a forma deformada é desenhada. A massa é a densidade do material vezes o volume: cargas não acrescentam massa, e um material sem densidade não tem massa. O relatório (PDF, CSV) traz a tabela. É apenas elástico e de pequenos deslocamentos, e nenhuma carga sísmica ou de vento é gerada aqui a partir de uma norma. Não é uma verificação normativa; seu engenheiro revisa os resultados.

**Espectro de resposta, histórico no tempo e pushover.** Mais três blocos ficam abaixo das frequências, usando o mesmo modelo de elementos finitos. A massa de todos eles é a densidade do material mais as cargas verticais para baixo das hipóteses que você marcar, cada uma multiplicada por um fator que você digita (por exemplo, Permanente com 1 e Sobrecarga com a parcela que você considera como massa).

{{ui:Response spectrum}} lê cada modo em um espectro que você informa (uma tabela de período e aceleração, ou a forma da ASCE 7 a partir de SDS, SD1 e TL; o botão {{ui:Use the Seismic block values}} copia esses valores do bloco Sísmica) e combina os modos por CQC, SRSS, pela regra de dez por cento ou por uma soma absoluta, depois compõe as direções X, Y e Z (100 % + 30 % ou SRSS). Ele informa o cortante na base, as derivas de pavimento, os esforços nas extremidades das barras e uma tabela de modos que avisa quando os modos usados carregam menos de 90 % da massa. Você pode escalar os resultados por um fator ou até um cortante na base que você digitar; o bloco nunca calcula esse cortante sozinho. Os resultados não têm sinal.

{{ui:Time history}} aplica uma aceleração do solo por superposição modal (exata para os trechos retos do registro entre os pontos) ou por integração direta (aceleração média de Newmark com amortecimento de Rayleigh). A entrada é um seno ou pulso inventado (sempre rotulado como sintético), um registro que você cola, ou um arquivo de texto que você abre (tempo e aceleração, uma aceleração por linha com um passo, ou um arquivo no estilo PEER com um cabeçalho DT=; em g ou m/s²). Ele informa o deslocamento do topo e o cortante na base em função do tempo, a deriva de cada nível e a envoltória dos esforços nas extremidades das barras. Modelos com um registro muito longo mantêm o registro somente durante a sessão.

{{ui:Pushover}} empurra o topo lateralmente em pequenos passos (padrão semelhante ao primeiro modo, ou uniforme), com rótulas plásticas nas extremidades das barras que têm seção I. Uma rótula escoa no momento plástico, que cai à medida que a força normal cresce (calculado a partir da forma desenhada, desconsiderando os arredondamentos); o endurecimento é opcional, o P-delta é opcional, e uma combinação de gravidade pode ser aplicada antes. Ele informa a curva de capacidade (cortante na base em função do deslocamento do topo), a primeira rótula e o estado e a rotação plástica de cada rótula. {{ui:Run the nonlinear time history}} executa as mesmas rótulas sob o registro do bloco Histórico no tempo, em modelos pequenos. As rótulas se formam apenas nas extremidades das barras (coloque um nó onde uma rótula deva se formar dentro de um vão); uma barra liberada nas duas extremidades não recebe nenhuma; o escoamento e a flambagem dos contraventamentos não são modelados; lajes e paredes permanecem elásticas; nenhum critério de aceitação é informado. Não é uma verificação normativa; seu engenheiro revisa os resultados. As configurações são salvas com o modelo, e o relatório traz as tabelas.

Ainda não implementado: flambagem, correção de massa ausente para o espectro de resposta, escalonamento de registros, critérios de aceitação para rótulas (a resposta dinâmica está acima), cargas de área além da pressão única em todas as lajes, excentricidades de barras, contraventamentos que resistem apenas à tração, paredes e lajes no pórtico, e verificações normativas de perfis soldados e de seções que não sejam perfis I laminados. Veja [Ainda não implementado](topic:not-built-yet).

## Unidades

As dimensões seguem a unidade escolhida na barra de ferramentas ({{ui:Units}}), como no restante do BimCraft: as posições das cargas que você digita e vê ({{ui:From}}, {{ui:To}}, {{ui:At}}), os pontos das cargas nodais e das reações, as alturas dos pisos em {{ui:Seismic}}, e as colunas de flecha e deriva (pés e polegadas mostram esses pequenos comprimentos em polegadas decimais). Altere a unidade a qualquer momento; a aba é redesenhada. As forças permanecem em kN e kN·m, e o relatório (PDF, CSV) e o arquivo CraftScript permanecem em milímetros, com a unidade indicada. Dimensões de seções, diâmetros de barras e cobrimentos no bloco {{ui:Concrete}} permanecem em milímetros, como são nomeados.

## Verificações de dimensionamento

O bloco {{ui:Design checks}} (o mesmo do DetailCraft) recebe uma {{ui:Design code}}, ASCE 7 + AISC 360 ou EN 1990 + EN 1993-1-1, e uma {{ui:Steel grade}}. Atribua a cada hipótese de carga seu tipo (permanente, sobrecarga, vento …) e {{ui:Make combinations}} grava as combinações de carga da norma com suas hipóteses; a análise então as executa como qualquer outra combinação.

Em seguida, {{ui:Check members}} verifica cada **perfil I de aço laminado** com as verificações do DetailCraft (tração, compressão com flambagem, flexão com flambagem lateral com torção, cortante, flexão com força normal, flecha; as cláusulas estão no relatório) e mostra quanto da sua capacidade ele utiliza, colorido no modelo. É um **auxílio até que um engenheiro o tenha revisado**.

**Quais barras são verificadas.** Um perfil IFC não informa se um perfil I de aço é laminado ou soldado; então o BimCraft o considera laminado apenas quando o nome do perfil (ou, na falta dele, o nome do tipo do elemento) é uma bitola das tabelas AISC W ou S, ou das tabelas EN 10365 IPE, HEA ou HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **e** a altura, a largura, a alma e a mesa no arquivo coincidem com essa bitola dentro de 1 %. Todo outro perfil I (uma viga de alma cheia, uma bitola com outro nome, uma bitola editada) é considerado soldado e volta como **não verificado**, assim como tubos, cantoneiras, perfis U e outras seções, partes esbeltas e torção. Verifique essas barras com um engenheiro.
