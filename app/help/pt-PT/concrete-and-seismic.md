---
title: Verificar elementos de betão e criar ações sísmicas
summary: Configurar as armaduras das vigas e pilares de betão do modelo IFC aberto, verificá-los segundo a ACI 318-19, calcular forças laterais equivalentes segundo a ASCE 7-22 em pisos rígidos e ver o deslocamento entre pisos. Um apoio para verificação por um engenheiro.
keywords: betão, betão armado, ACI 318, ACI 318-19, armadura, viga, pilar, esforço transverso, cintas, sísmico, sismo, força lateral equivalente, ELF, ASCE 7-22, deslocamento, deslocamento entre pisos, pisos, diafragma rígido, peso do piso, taxa de utilização, estrutural, engenheiro, análise
from: 2f342e72
---

Os blocos {{ui:Elementos de betão}} e {{ui:Ações sísmicas}} no separador {{ui:Análise}} verificam as vigas e pilares de betão armado do IFC aberto, e calculam as forças horizontais de um sismo nos pisos do seu pórtico. São os mesmos blocos do DetailCraft, executados após a análise do separador {{ui:Análise}}, e guardados no IFC com as restantes definições de análise.

:::warning
Os resultados são **para verificação por um engenheiro**: um apoio até que alguém o tenha revisto. As verificações do betão usam esforços de primeira ordem (um pilar num pórtico que indica como contraventado é dimensionado para o seu momento amplificado), sem amplificação por deslocamento lateral, sem dimensionamento à torção, sem pormenorização sísmica (capítulo 18 da ACI) e sem pormenorização das cintas. As ações sísmicas deixam de fora o fator de redundância, o efeito sísmico vertical, a amplificação por torção e os efeitos P-delta. **As ações do vento ainda não estão implementadas: os capítulos de vento da norma não estão nas páginas de referência do projeto.**
:::

## O que o BimCraft lê

A análise lê as vigas, pilares e contraventamentos do modelo com os seus perfis (ver [Analisar o pórtico estrutural](topic:frame-analysis)). O bloco {{ui:Elementos de betão}} lista todas as secções que usam. Clique em {{ui:Configurar como betão…}} numa secção que seja de betão: o BimCraft obtém um retângulo a partir da área e da rigidez do perfil (a largura b e a altura h, que depois pode alterar). Assim, uma secção que não esteja perto de um retângulo (um perfil de aço laminado) dá uma dimensão que tem de corrigir, ou fica sem alteração.

Uma secção configurada como betão, e qualquer elemento cujo material se chame betão, é analisada como betão: E = 4700 √f′c, 2400 kg/m³, e por predefinição com **secções fissuradas** (pilares 0.70 Ig, vigas 0.35 Ig; ACI 318-19, Tabela 6.6.3.1.1(a)). Escolha {{ui:Secções brutas}} para desativar isto. Sem estas definições, o modelo é analisado exatamente como antes.

## Armaduras, combinações, verificação

Indique o recobrimento, as armaduras superiores, inferiores e laterais (ou uma gaiola de pilar) e as cintas de cada secção, defina f′c, fy, fyt, K e contraventado ou não contraventado. Indique o tipo de cada caso de carga, clique em {{ui:Criar combinações}} (ASCE 7 §5.3.1) e depois em {{ui:Verificar betão}}: cada elemento recebe uma taxa de utilização, colorida no modelo. Os elementos acima da capacidade, e um deslocamento entre pisos acima do limite, são listados em {{ui:Problemas}} com a sua cláusula; clique num para selecionar o elemento.

## Pisos e ações sísmicas

No bloco {{ui:Ações sísmicas}}, {{ui:Encontrar pisos}} identifica os níveis onde se encontram duas ou mais vigas; cada um torna-se um diafragma rígido. {{ui:Tomar os pesos dos casos}} lê o peso sísmico de cada piso a partir dos casos a que atribuiu um fator. Preencha SDS, SD1, S1, R, Ie, Cd, TL, o sistema e a categoria de risco, e depois clique em {{ui:Criar casos sísmicos}} (ASCE 7-22 12.8: período, esforço transverso na base, distribuição pelos pisos, torção acidental de 5 %). As forças por piso e a verificação do deslocamento (12.12) aparecem após uma execução. O mesmo período e a mesma rigidez de piso alimentam o sismo em [Reproduzir uma cheia, vento ou sismo](topic:hazard-playback), quando escolher o pórtico da análise como fonte.

As lajes e paredes de betão tornam-se placas na análise, e o bloco {{ui:Armadura de lajes}} calcula o aço de que precisam por metro. Os pormenores de cada verificação estão no tópico do DetailCraft com o mesmo nome.
