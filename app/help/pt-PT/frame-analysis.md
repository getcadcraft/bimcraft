---
title: Analisar a estrutura reticulada
summary: Esforços, reações e deslocamentos das vigas, pilares e contraventamentos do modelo, sob hipóteses de carga e combinações que define, mantidos no IFC. Um auxiliar de análise, não uma verificação normativa.
keywords: análise, unidades, pés e polegadas, unidade de visualização, análise estrutural, verificações de dimensionamento, utilização, laminado, soldado, AISC 360, EN 1993-1-1, análise de estrutura reticulada, modelo analítico, método da rigidez, cargas, caso de carga, combinação, carga permanente, sobrecarga, peso próprio, peso do elemento, reações, momento fletor, esforço transverso, esforço normal, flecha, deformada, apoios, rotulado, encastrado, libertação, relatório, pdf, csv, craftscript, frame3d, vigas, pilares, barras
from: b93b58c4
---

O separador {{ui:Análise}} à direita encontra os esforços nas vigas, pilares e contraventamentos do modelo aberto, as reações nos pés dos pilares e a flexão das barras, para as cargas que lhe indicar.

:::warning
É um **auxiliar de análise, não uma verificação normativa**. A análise não aplica nenhuma norma de dimensionamento: não dimensiona barras nem verifica capacidades, e não escolhe coeficientes de carga. Um engenheiro verifica o modelo analítico, as suas cargas e apoios, e decide o que os números significam. O bloco {{ui:Verificações de dimensionamento}}, por baixo dele, verifica perfis de aço laminados em I segundo AISC 360 ou EN 1993-1-1, sendo um auxiliar até um engenheiro o ter revisto: veja [Verificações de dimensionamento](topic:frame-analysis#design-checks).
:::

## Executar

1. Abra um modelo IFC e o separador {{ui:Análise}}.
2. Selecione uma ou mais vigas, pilares ou contraventamentos na vista, escolha um {{ui:Caso}}, uma {{ui:Carga}} e uma {{ui:Direção}}, escreva o valor e clique em {{ui:Adicionar carga}}: kN/m para uma carga distribuída ao longo de uma barra, kN para uma carga pontual.
3. Clique em {{ui:Executar a análise}}.

A tabela lista o esforço normal máximo, os esforços transversos, os momentos fletores, a torção e a flecha de cada barra; clique no nome de uma barra para a selecionar na vista. Por baixo estão as reações. {{ui:No modelo}} desenha a deformada, ou uma ação como diagrama junto a cada barra. Os resultados ficam desatualizados quando o modelo muda: execute de novo.

Cada carga e cada definição é uma alteração na lista {{ui:Alterações}}: {{ui:Anular}} desfaz a alteração, e {{ui:Guardar como IFC}} mantém-nas no ficheiro (o conjunto de propriedades `CadCraft_Analysis` do projeto), para que, na próxima vez que o modelo for aberto aqui, as cargas ainda lá estejam.

## Como é feito o modelo analítico

- Cada IfcBeam, IfcColumn e IfcMember cuja forma é uma única extrusão reta torna-se uma barra no eixo do centroide da sua secção. As propriedades da secção vêm do perfil: perfis em I, U, L e T, retângulos e tubos, círculos e tubos redondos, ou qualquer contorno fechado (nesse caso, a constante de torção é uma estimativa, indicada no relatório). Tudo o resto fica de fora e é contado.
- Num modelo, as vigas param na face de um pilar e assentam abaixo do pavimento. Cada extremidade de barra é prolongada ao longo da sua própria linha até ao eixo da barra em que se encastra, quando esse eixo está próximo (a cerca do tamanho das secções), e essa barra é dividida aí. O relatório indica quantas extremidades foram movidas.
- Os **pés dos pilares** sem nada por baixo são apoios: encastrados (o início) ou rotulados (fixos no lugar e contra a torção, livres para rodar).
- As **extremidades das vigas** são rígidas ou rotuladas pela regra {{ui:Extremidades de vigas sem ligação}}; os **contraventamentos** (IfcMember) são rotulados nas duas extremidades. Selecione uma barra para dar às suas extremidades, ou ao pé de um pilar, uma regra própria.
- Materiais pelo nome: betão (E = 30 GPa), madeira (E = 11 GPa), caso contrário aço (E = 200 GPa).

Se a estrutura se puder mover sem fletir nada (um mecanismo), a execução para e indica onde e em que sentido.

## Hipóteses, combinações, sinais e relatório

A análise começa com **Permanente** (peso próprio), **Sobrecarga** e **Permanente + sobrecarga**; acrescente hipóteses e combinações com os coeficientes que a sua norma de dimensionamento exige. N > 0 é tração; My > 0 põe em tração o lado −z local da barra (uma viga que cede sob a gravidade tem My > 0). {{ui:Relatório (PDF)}} e {{ui:Relatório (CSV)}} contêm as hipóteses, as secções, os casos, as reações com as suas somas, os esforços nas barras, os deslocamentos e uma envolvente. {{ui:Exportar como CraftScript}} escreve a estrutura para o espaço de Script do PartCraft, onde a função de biblioteca `frame3d` a resolve em código legível.

O método é o da rigidez direta, linear e de primeira ordem, a menos que marque *Segunda ordem (P-Delta)*, verificado contra casos de manual.

**Segunda ordem (P-Delta).** Marque *Segunda ordem (P-Delta)* ao lado de Executar: cada combinação é resolvida de novo, com os esforços axiais das barras a atuar sobre a estrutura deformada (cada barra dividida em 4 partes, para que a flexão entre as suas extremidades também conte), até os esforços axiais estabilizarem. A linha de resultado indica o número de passagens e quanto cresceu o balanço; os momentos, as flechas, as verificações de dimensionamento e o relatório passam então a usar estes resultados. Acima da carga crítica elástica da estrutura, a execução para e indica-o. É elástica, com pequenas rotações, apenas de flexão, sem redução de rigidez nem cargas nocionais (não é, por si só, o método de análise direta da AISC); lajes, paredes e pisos rígidos ficam em primeira ordem.

**Pressão de pavimento sobre lajes.** Para lajes de betão (a análise lê uma laje como placa quando o seu material é betão), o bloco de Cargas tem {{ui:Pressão em todas as lajes}}: escreva kN/m², escolha o caso acima e clique em {{ui:Adicionar às lajes}}. A pressão é distribuída por todas as lajes que a análise encontrou, para baixo, e listada com uma ligação Remover. É uma só pressão para todas as lajes, não uma por laje, e não é uma carga normativa: escreva o valor que o seu engenheiro lhe indicar.

**Frequências naturais (elementos finitos).** O bloco {{ui:Elementos finitos: frequências naturais}}, sob os resultados, encontra os modos mais baixos do mesmo modelo com o motor de elementos finitos: vigas com as suas libertações nas extremidades, lajes e paredes como cascas planas de quatro nós, pisos rígidos e apoios. Escolha quantos modos (3, 6, 10 ou 20) e o elemento de laje (a casca de quatro nós para lajes grossas ou finas, ou o de laje fina) e clique em {{ui:Calcular as frequências}}. A tabela dá a frequência de cada modo em Hz, o seu período em segundos e a sua massa modal efetiva segundo X, Y e Z, como parte da massa que pode mover-se; {{ui:Mostrar no modelo}} desenha qualquer modo da forma como a deformada é desenhada. A massa é a densidade do material vezes o volume: as cargas não acrescentam massa, e um material sem densidade não tem nenhuma. O relatório (PDF, CSV) contém a tabela. É apenas elástica e de pequenos movimentos, e não é aqui gerada nenhuma carga sísmica ou de vento a partir de uma norma. Não é uma verificação normativa; o seu engenheiro revê os resultados.

**Espetro de resposta, histórico no tempo e pushover.** Três blocos adicionais ficam por baixo das frequências, usando o mesmo modelo de elementos finitos. A massa para todos eles é a densidade do material mais as cargas descendentes dos casos que marcar, cada uma multiplicada por um fator que escreve (por exemplo, Permanente a 1 e Sobrecarga na parte que conta como massa).

{{ui:Espetro de resposta}} lê cada modo a partir de um espetro que indica (uma tabela de período e aceleração, ou a forma ASCE 7 a partir de SDS, SD1 e TL; o botão {{ui:Usar os valores do bloco Sismo}} copia esses valores do bloco Sismo) e combina os modos por CQC, SRSS, pela regra dos dez por cento ou por uma soma absoluta, depois junta as direções X, Y e Z (100 % + 30 % ou SRSS). Dá o esforço transverso na base, os deslocamentos entre pisos, os esforços nas extremidades das barras e uma tabela de modos que avisa quando os modos usados levam menos de 90 % da massa. Pode escalar os resultados por um fator ou até um esforço transverso na base que escreva; o bloco nunca calcula esse esforço por si. Os resultados não têm sinal.

{{ui:Histórico no tempo}} aplica uma aceleração do solo por sobreposição modal (exata para as retas do registo entre pontos) ou por integração direta (aceleração média de Newmark com amortecimento de Rayleigh). A entrada é um seno ou pulso inventado (sempre identificado como sintético), um registo que cola, ou um ficheiro de texto que abre (tempo e aceleração, uma aceleração por linha com um passo, ou um ficheiro de estilo PEER com um cabeçalho DT=; em g ou m/s²). Dá o deslocamento da cobertura e o esforço transverso na base em função do tempo, o deslocamento entre pisos de cada nível e a envolvente dos esforços nas extremidades das barras. Modelos com um registo muito longo guardam-no apenas durante a sessão.

{{ui:Pushover}} empurra a cobertura lateralmente em pequenos passos (padrão como o do primeiro modo, ou uniforme), com rótulas plásticas nas extremidades das barras que têm perfil em I. Uma rótula cede ao momento plástico, que diminui à medida que o esforço axial cresce (calculado a partir da forma desenhada, desprezando os arredondamentos); o endurecimento é opcional, o P-delta é opcional, e pode aplicar-se primeiro uma combinação de gravidade. Dá a curva de capacidade (esforço transverso na base em função do deslocamento da cobertura), a primeira rótula, e o estado e a rotação plástica de cada rótula. {{ui:Executar o histórico no tempo não linear}} executa as mesmas rótulas sob o registo do bloco Histórico no tempo, em modelos pequenos. As rótulas formam-se apenas nas extremidades das barras (coloque um nó onde uma deva formar-se a meio de um vão); uma barra libertada nas duas extremidades não tem nenhuma, e o cedimento e a encurvadura dos contraventamentos não são modelados; lajes e paredes permanecem elásticas; não são indicados critérios de aceitação. Não é uma verificação normativa; o seu engenheiro revê os resultados. As definições são guardadas com o modelo, e o relatório contém as tabelas.

Ainda não implementado: encurvadura, uma correção de massa em falta para o espetro de resposta, escala de registos, critérios de aceitação para as rótulas (a resposta dinâmica existe, acima), cargas de área além da pressão única em todas as lajes, excentricidades de barras, contraventamentos só à tração, paredes e lajes na estrutura, e verificações normativas de perfis soldados e de secções que não sejam perfis em I laminados. Veja [Ainda não implementado](topic:not-built-yet).

## Unidades

As dimensões seguem a unidade que escolher na barra de ferramentas ({{ui:Unidades}}), como o resto do BimCraft: as posições das cargas que escreve e vê ({{ui:Origem}}, {{ui:Para}}, {{ui:Em}}), os pontos das cargas nodais e das reações, as alturas dos pisos em {{ui:Sismo}}, e as colunas de flecha e de deslocamento entre pisos (pés e polegadas mostram estes comprimentos pequenos em polegadas decimais). Altere a unidade a qualquer momento; o separador é redesenhado. As forças ficam em kN e kN·m, e o relatório (PDF, CSV) e o ficheiro CraftScript ficam em milímetros, com a unidade indicada. As dimensões das secções, os diâmetros dos varões e os recobrimentos no bloco {{ui:Betão}} ficam em milímetros, como o nome indica.

## Verificações de dimensionamento

O bloco {{ui:Verificações de dimensionamento}} (igual ao do DetailCraft) recebe uma {{ui:Norma de dimensionamento}}, ASCE 7 + AISC 360 ou EN 1990 + EN 1993-1-1, e uma {{ui:Classe do aço}}. Atribua a cada hipótese de carga o seu tipo (permanente, sobrecarga, vento …); {{ui:Criar combinações}} escreve as combinações de cargas da norma a partir das suas hipóteses, e a análise depois as executa como qualquer outra combinação.

{{ui:Verificar barras}} verifica então cada **perfil de aço laminado em I** com as verificações do DetailCraft (tração, compressão com encurvadura, flexão com derrubamento lateral, esforço transverso, flexão com esforço axial, flecha; as cláusulas estão no relatório), mostra quanto da sua capacidade é utilizada, colorido no modelo. É um **auxiliar até um engenheiro o ter revisto**.

**Quais as barras verificadas.** Um perfil IFC não diz se um perfil em I de aço é laminado ou soldado, por isso o BimCraft só o considera laminado quando o nome do seu perfil (ou, na falta dele, o nome do tipo do elemento) é uma medida das tabelas AISC W ou S ou das tabelas EN 10365 IPE, HEA ou HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **e** a altura, a largura, a alma e o banzo no ficheiro correspondem a essa medida dentro de 1 %. Todos os outros perfis em I (uma viga de alma cheia, uma medida com outro nome, uma medida editada) são tratados como soldados e voltam **não verificados**, tal como os tubos, as cantoneiras, os perfis em U e outras secções, as partes esbeltas e a torção. Verifique essas barras com um engenheiro.
