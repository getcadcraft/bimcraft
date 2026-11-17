---
title: Reproduzir uma inundação, vento ou sismo no edifício
summary: Água a subir pelos compartimentos, pressão do vento em cada piso ou um sismo a abanar os pisos, reproduzidos numa planta ou num alçado com uma barra de tempo. Modelos simples com as suas pressuposições listadas; não é uma verificação regulamentar nem um dimensionamento estrutural.
keywords: perigo, inundação, vento, sismo, sísmico, deriva, balanço, esforço transverso na base, nível da água, clima, cenário, nível do mar, reprodução, piso, período
from: ff0d34d1
---

A secção {{ui:Reprodução de perigos}} do painel esquerdo reproduz um perigo no modelo IFC aberto. Nada no modelo é alterado.

:::warning
Estes são **modelos simples para ver o que um perigo faz a esta disposição**, e não um estudo de inundações, uma verificação de vento segundo a regulamentação nem um dimensionamento estrutural. Cada resultado lista as suas pressuposições.
:::

## Inundação

Defina o nível máximo da água acima do piso mais baixo e os minutos para subir, manter e descer. A água entra num compartimento por uma abertura cuja soleira já tenha ultrapassado, e os compartimentos ligados a compartimentos molhados por aberturas abaixo do nível da água ficam ao mesmo nível (quase-estático). A tabela indica quando cada compartimento fica molhado pela primeira vez e a que profundidade; a planta reproduz essa evolução. Escreva a quantidade máxima de água que um compartimento pode receber: os compartimentos que a excedam ficam assinalados como avisos. **Futuros climáticos:** carregue o seu próprio ficheiro de cenário (JSON ou CSV com um ano, uma subida do nível do mar e um fator de inundação) e escolha um ano. Ou ative o suplemento Futuros climáticos e escolha um cenário e um ano: a inundação corre duas vezes, a atual lado a lado com a futura (veja "Futuros climáticos: inundação, calor e incêndio florestal em 2050 e 2080"). Os tipos Exposição a incêndio florestal e Calor: ficheiro meteorológico futuro estão na mesma lista.

## Vento

A pressão segue ½ρV², com a velocidade a subir em altura; a força sobre um piso é essa pressão vezes um fator de rajada, os dois coeficientes de pressão, a largura e a altura do piso. Obtém o esforço transverso, o momento de derrubamento e o balanço.

## Sismo

Um edifício de corte: uma massa por piso (área de implantação × quilogramas por metro quadrado, que define), a mesma rigidez em cada piso ajustada ao primeiro período que indicar (uma décima de segundo por piso se deixar o campo em branco, e o programa indica-o), amortecimento e um movimento do solo simulado (um impulso ou ruído filtrado) à aceleração de pico que escolher. O resultado é a deriva de cada piso, as acelerações dos pisos e o esforço transverso na base; o alçado reproduz o balanço, desenhado maior do que é. Escreva a taxa de deriva que admite: os pisos que a excedam ficam assinalados como avisos. Trata-se de um modelo elástico: nada cede nem fissura.

## Rigidez dos pisos a partir do quadro de análise

Para um sismo ou para o balanço devido ao vento, escolha **O quadro de análise** como origem da rigidez em vez de escrever um período. Cada piso é empurrado lateralmente à vez, o quadro (vigas, pilares, contraventamentos, lajes) é resolvido, e a rigidez dos pisos, com tudo a trabalhar em conjunto, conduz a simulação. O peso são os próprios elementos do quadro mais a carga de piso por metro quadrado que define na caixa da planta de cada piso. É mostrado o primeiro período real. Trata-se de um modelo elástico: nada cede, e a torção não é modelada. No caso do vento, as forças por piso continuam a ser as supostas acima (um perfil de lei de potência, o seu fator de rajada e os coeficientes de pressão fixos, e não uma norma de vento); só o balanço vem do quadro, resolvendo a matriz de rigidez completa do quadro para essas forças. O modelo precisa de um IFC com um quadro que o separador Análise consiga ler.

## Unidades

As alturas de água, o balanço e a deriva por piso, as distâncias e as áreas são mostrados nas {{ui:Unidades}} que escolheu. As forças (kN), os tempos e as acelerações mantêm as suas próprias unidades, e um valor que escreva numa caixa com indicação em metros fica em metros. O mesmo vale para os resultados de evacuação, luz natural, aquecimento e arrefecimento e mobília: comprimentos, áreas e volumes seguem a sua escolha; pressão, caudal, temperatura, energia e potência nunca são convertidos.
