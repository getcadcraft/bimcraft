---
title: "Futuros climáticos: inundação, calor e incêndio florestal em 2050 e 2080"
summary: Executar de novo a inundação, o ano energético e uma triagem de incêndio florestal com clima futuro (cenários SSP2-4.5 e SSP5-8.5, anos 2050 e 2080) a partir de um pacote de dados climáticos, apresentado ao lado do presente.
keywords: clima, alterações climáticas, futuro, 2050, 2080, ssp, cmip6, cenário, subida do nível do mar, inundação, calor, ficheiro meteorológico, epw, morph, energyplus, incêndio florestal, incêndio rural, meteorologia de incêndio
from: 224ecd08
---

Os números climáticos vêm de um **pacote de dados**, e não da aplicação. Ative o suplemento {{ui:Futuros climáticos}} em Definições › Suplementos, ou carregue um ficheiro de pacote próprio no bloco {{ui:Clima futuro}}.

:::warning
O pacote que vem com o suplemento é uma **amostra**: três locais (Denver, Miami, Joanesburgo), um modelo climático e cinco anos em cada período de 20 anos. Serve para experimentar as ferramentas, **não para projeto**. O painel diz isto a negrito enquanto estiver em uso. Um pacote completo (muitos modelos, todos os anos, mais locais) é criado com `tools/climate/build-pack.mjs` a partir dos dados NEX-GDDP-CMIP6 da NASA.
:::

## Escolher um futuro

No painel da esquerda, em {{ui:Reprodução de perigos}}, escolha um **Cenário** (SSP2-4.5, o caminho do meio, ou SSP5-8.5, emissões elevadas) e um **Ano** (2050 significa 2041-2060, 2080 significa 2071-2090; ambos em relação a 1995-2014). O **Local** é o local do pacote mais próximo do sítio do modelo (latitude e longitude do IfcSite), ou o que escolher. Longe de todos os locais, usam-se as alterações médias globais do pacote, e o painel indica-o.

## Inundação, presente ao lado do futuro

Com um cenário escolhido, defina o **Tipo de inundação**: costeira (acrescenta a subida do nível do mar), fluvial ou chuva forte (mais profunda pela variação da chuva do dia mais chuvoso), ou ambas. Prima Executar: a inundação é reproduzida como antes, e uma tabela mostra a inundação atual e a futura lado a lado (nível da água, compartimentos que ficam molhados, água mais funda). Os pressupostos estão listados por baixo:

- um nível costeiro sobe pela subida total do nível do mar; a maré de tempestade e as ondas não são alteradas;
- o caudal do rio sobe um para um com a precipitação do dia mais chuvoso, e a profundidade segue o caudal elevado a 0.6 (equação de Manning para um canal largo);
- as duas partes são simplesmente somadas.

## Calor: um ficheiro meteorológico futuro

Escolha o tipo {{ui:Calor: ficheiro meteorológico futuro}}, escolha um ficheiro meteorológico `.epw` atual e prima {{ui:Criar o ficheiro meteorológico futuro}}. O ficheiro é transformado (morph) mês a mês com o método publicado de deslocamento e esticamento (Belcher, Hacker e Powell 2005): a média do mês aquece pela variação do pacote, as tardes quentes pela variação do máximo diário e as noites frias pela variação do mínimo diário; a humidade relativa muda pela variação do pacote, e o ponto de orvalho é recalculado. A pressão e o vento mantêm-se como estavam. A tabela compara as temperaturas médias e máximas, as temperaturas de projeto de arrefecimento a 0.4 % e de aquecimento a 99.6 %, as horas a 30 °C e a 35 °C e os graus-dia.

{{ui:Guardar o ficheiro meteorológico futuro}} guarda-o; {{ui:Usar na verificação de energia}} passa-o à verificação EnergyPlus (separador Energia). O ficheiro futuro é o mesmo ano típico, mais quente: não acrescenta novas ondas de calor.

## Ano energético, presente ao lado do futuro

No separador Energia, na verificação EnergyPlus (um suplemento próprio, com o motor configurado), escolha um ficheiro meteorológico atual, depois um cenário e um ano no bloco {{ui:Clima futuro}}, e prima {{ui:Simular um ano: presente e futuro}}: o ano é executado no ficheiro atual e no seu futuro transformado, e o aquecimento e o arrefecimento de cada compartimento são listados lado a lado.

## Exposição a incêndio florestal (apenas triagem)

Escolha o tipo {{ui:Exposição a incêndio florestal (apenas triagem)}}: a vegetação mais próxima, a inclinação desde ela até ao edifício e a distância até ela. O resultado é uma faixa que vai de muito baixa a extrema, atual e futura.

:::warning
**Apenas triagem.** Esta é a nossa própria escala relativa, para indicar se um local precisa de uma avaliação de incêndio florestal adequada, e não uma classificação regulamentar nem um nível de ataque de incêndio rural. Multiplica um peso para a vegetação, um fator de declive (um incêndio quase duplica a velocidade por cada 10 graus de subida, contados até 20 graus), um fator de distância (10 m a dividir pela distância, no máximo 1) e a variação do pacote no índice de meteorologia de incêndio.
:::

## De onde vêm os números

- **Temperatura, humidade, insolação, precipitação, meteorologia de incêndio:** NASA NEX-GDDP-CMIP6, saída diária dos modelos CMIP6, regionalizada por downscaling. A saída de cada modelo está sob CC BY 4.0. A variação da meteorologia de incêndio é o Canadian Fire Weather Index, calculado dia a dia a partir do tempo do modelo (com a humidade diária em vez da humidade do meio-dia).
- **Subida do nível do mar:** média global do IPCC AR6 (não local; a subida ou o afundamento do terreno não está incluído), a não ser que um pacote traga valores locais.
- O pacote indica a sua fonte, licença e data; o painel mostra-as.
