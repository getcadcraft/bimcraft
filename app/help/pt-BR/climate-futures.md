---
title: "Climas futuros: inundação, calor e incêndio florestal em 2050 e 2080"
summary: Refaça a inundação, o ano de energia e uma triagem de incêndio florestal com clima futuro (cenários SSP2-4.5 e SSP5-8.5, anos 2050 e 2080) a partir de um pacote de dados climáticos, apresentado ao lado do presente.
keywords: clima, mudança climática, futuro, 2050, 2080, ssp, cmip6, cenário, elevação do nível do mar, inundação, calor, arquivo climático, epw, morph, energyplus, incêndio florestal, queimada, clima de incêndio
from: 224ecd08
---

Os números climáticos vêm de um **pacote de dados**, não do aplicativo. Ative o complemento {{ui:Climas futuros}} em Configurações › Complementos, ou carregue um arquivo de pacote próprio no bloco {{ui:Clima futuro}}.

:::warning
O pacote que vem com o complemento é uma **amostra**: três lugares (Denver, Miami, Joanesburgo), um modelo climático, cinco anos em cada período de 20 anos. Ele serve para testar as ferramentas, **não para projeto**. O painel diz isso em negrito enquanto estiver em uso. Um pacote completo (muitos modelos, todos os anos, mais lugares) é montado com `tools/climate/build-pack.mjs` a partir dos dados NEX-GDDP-CMIP6 da NASA.
:::

## Escolher um futuro

No painel esquerdo, em {{ui:Reprodução de risco}}, escolha um **Cenário** (SSP2-4.5, o caminho do meio, ou SSP5-8.5, emissões altas) e um **Ano** (2050 significa 2041-2060, 2080 significa 2071-2090; ambos em relação a 1995-2014). O **Lugar** é o lugar do pacote mais próximo do sítio do modelo (latitude e longitude do IfcSite), ou o que você escolher. Longe de todo lugar, usam-se as mudanças médias globais do pacote, e o painel informa isso.

## Inundação, presente ao lado do futuro

Com um cenário escolhido, defina o **Tipo de inundação**: costeira (acrescenta a elevação do nível do mar), fluvial ou chuva forte (mais profunda pela mudança da chuva do dia mais chuvoso), ou ambas. Pressione Executar: a inundação roda como antes, e uma tabela mostra a inundação presente e a futura lado a lado (nível da água, ambientes que ficam molhados, a água mais funda). As premissas estão listadas abaixo dela:

- um nível costeiro sobe pela elevação total do nível do mar; ressaca e ondas não são alteradas;
- a vazão do rio sobe na mesma proporção da chuva do dia mais chuvoso, e a profundidade segue a vazão elevada a 0.6 (equação de Manning para canal largo);
- as duas partes são simplesmente somadas.

## Calor: um arquivo climático futuro

Escolha o tipo {{ui:Calor: arquivo climático futuro}}, escolha um arquivo climático `.epw` do presente e pressione {{ui:Criar o arquivo climático futuro}}. O arquivo é **transformado** mês a mês pelo método publicado de deslocamento e alongamento (Belcher, Hacker e Powell 2005): a média do mês aquece pela mudança do pacote, as tardes quentes pela mudança da máxima diária e as noites frias pela mudança da mínima diária; a umidade relativa muda pela mudança do pacote e o ponto de orvalho é recalculado. Pressão e vento permanecem como estavam. A tabela compara as temperaturas média e mais alta, as temperaturas de projeto de resfriamento de 0.4 % e de aquecimento de 99.6 %, as horas a 30 °C e a 35 °C e os graus-dia.

{{ui:Salvar o arquivo climático futuro}} o salva; {{ui:Usar na verificação de energia}} o entrega à verificação do EnergyPlus (guia Energia). O arquivo futuro é o mesmo ano típico, mais quente: ele não acrescenta novas ondas de calor.

## Ano de energia, presente ao lado do futuro

Na verificação do EnergyPlus da guia Energia (um complemento próprio, com o seu próprio mecanismo), escolha um arquivo climático do presente, depois um cenário e um ano no seu bloco {{ui:Clima futuro}}, e pressione {{ui:Simular um ano: presente e futuro}}: o ano roda no arquivo do presente e no seu futuro transformado, e o aquecimento e o resfriamento de cada ambiente são listados lado a lado.

## Exposição a incêndio florestal (apenas triagem)

Escolha o tipo {{ui:Exposição a incêndio florestal (apenas triagem)}}: a vegetação mais próxima, a inclinação que sobe dela até o edifício e a distância até ela. O resultado é uma faixa de muito baixa a extrema, presente e futura.

:::warning
**Apenas triagem.** Esta é a nossa própria escala relativa, para indicar se um sítio precisa de uma avaliação de incêndio florestal adequada; não é uma classificação normativa nem um nível de ataque de incêndio florestal. Ela multiplica um peso para a vegetação, um fator de declive (um incêndio aproximadamente dobra sua velocidade a cada 10 graus de subida, contados até 20 graus), um fator de distância (10 m dividido pela distância, no máximo 1) e a mudança do pacote no índice de clima de incêndio.
:::

## De onde vêm os números

- **Temperatura, umidade, insolação, chuva, clima de incêndio:** NASA NEX-GDDP-CMIP6, saídas diárias de modelos CMIP6 com downscaling. A saída de cada modelo está sob CC BY 4.0. A mudança do clima de incêndio é o Índice Canadense de Clima de Incêndio, calculado dia a dia a partir do clima do modelo (com umidade diária no lugar da umidade do meio-dia).
- **Elevação do nível do mar:** média global do IPCC AR6 (não local; a elevação ou o afundamento do terreno não estão incluídos), a menos que um pacote traga valores locais.
- O pacote informa sua fonte, licença e data; o painel as mostra.
