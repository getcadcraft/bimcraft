---
title: Verificar elementos de concreto e criar cargas sísmicas
summary: Configure as barras de vigas e pilares de concreto do modelo aberto, verifique-os pela ACI 318-19, gere forças laterais equivalentes pela ASCE 7-22 em pisos rígidos e veja a deriva entre pavimentos. Um auxílio para um engenheiro verificar.
keywords: concreto, concreto armado, ACI 318, ACI 318-19, armadura, viga, pilar, cisalhamento, estribos, sísmico, terremoto, força lateral equivalente, ELF, ASCE 7-22, deriva, deriva entre pavimentos, pisos, diafragma rígido, peso do pavimento, utilização, estrutural, engenheiro, análise
from: 2f342e72
---

Os blocos {{ui:Elementos de concreto}} e {{ui:Cargas sísmicas}} na guia {{ui:Análise}} verificam as vigas e os pilares de concreto armado do IFC aberto, e geram as forças horizontais de um terremoto sobre os pisos do seu pórtico. São os mesmos blocos do DetailCraft, executados depois da análise da guia {{ui:Análise}}, e salvos no IFC junto com as outras configurações de análise.

:::warning
Os resultados são **para verificação por um engenheiro**: um auxílio até que um engenheiro o tenha revisado. As verificações de concreto usam esforços de primeira ordem (um pilar em um pórtico que você chama de sem deslocamento é dimensionado pelo momento amplificado), sem amplificação por deslocamento, sem dimensionamento à torção, sem detalhamento sísmico (capítulo 18 da ACI) e sem detalhamento de estribos. As cargas sísmicas deixam de fora o fator de redundância, o efeito sísmico vertical, a amplificação por torção e os efeitos P-delta. **As cargas de vento não foram implementadas**: os capítulos de vento da norma não estão nas páginas de referência do projeto.
:::

## O que o BimCraft lê

A análise lê as vigas, pilares e contraventamentos do modelo com os seus perfis (veja [Analisar o pórtico estrutural](topic:frame-analysis)). O bloco {{ui:Elementos de concreto}} lista todas as seções que eles usam. Clique em {{ui:Configurar como concreto…}} em uma seção que é de concreto: o BimCraft obtém um retângulo a partir da área e da rigidez do perfil (a largura b e a altura h, que você pode então alterar). Assim, uma seção que não é próxima de um retângulo (um perfil de aço laminado) gera um tamanho que você precisa corrigir, ou fica como está.

Uma seção configurada como concreto, e qualquer elemento cujo material se chame concreto, é analisada como concreto: E = 4700 √f′c, 2400 kg/m³, e por padrão com **seções fissuradas** (pilares 0.70 Ig, vigas 0.35 Ig; ACI 318-19 Tabela 6.6.3.1.1(a)). Escolha {{ui:Seções brutas}} para desligar isso. Sem essas configurações, o modelo é analisado exatamente como antes.

## Barras, combinações, verificação

Informe o cobrimento, as barras superiores, inferiores e laterais (ou uma gaiola de pilar) e os estribos de cada seção, defina f′c, fy, fyt, K e se o pórtico é com ou sem deslocamento lateral (sway ou non-sway). Informe o tipo de cada caso de carga, clique em {{ui:Criar combinações}} (ASCE 7 §5.3.1) e depois em {{ui:Verificar concreto}}: cada elemento recebe uma utilização, colorida no modelo. Elementos acima da capacidade, e uma deriva entre pavimentos acima do limite, são listados em {{ui:Problemas}} com a cláusula deles; clique em um para selecionar o elemento.

## Pisos e cargas sísmicas

No bloco {{ui:Cargas sísmicas}}, {{ui:Encontrar pavimentos}} pega os níveis onde duas ou mais vigas se encontram; cada um vira um diafragma rígido. {{ui:Tirar os pesos dos casos}} lê o peso sísmico de cada piso a partir dos casos aos quais você dá um fator. Preencha SDS, SD1, S1, R, Ie, Cd, TL, o sistema e a categoria de risco, depois clique em {{ui:Gerar casos sísmicos}} (ASCE 7-22 12.8: período, cortante na base, distribuição pelos pisos, torção acidental de 5 %). As forças por pavimento e a verificação de deriva (12.12) aparecem depois de uma execução. O mesmo período e a mesma rigidez por pavimento alimentam o terremoto em [Reproduza uma enchente, vento ou terremoto](topic:hazard-playback) quando você escolhe o pórtico da análise como fonte.

Lajes e paredes de concreto viram placas na análise, e o bloco {{ui:Armadura de lajes}} calcula o aço que elas precisam por metro. Os detalhes de cada verificação estão no tópico do DetailCraft com o mesmo nome.
