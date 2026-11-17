---
title: Reproduzir uma inundação, vento ou terremoto no edifício
summary: Água subindo pelos ambientes, pressão do vento em cada pavimento ou um terremoto sacudindo os pavimentos, reproduzidos em uma planta ou elevação com um controle de tempo. Modelos simples, com suas premissas listadas; não são uma verificação de norma nem um projeto estrutural.
keywords: risco, inundação, vento, terremoto, sísmico, deriva, deslocamento lateral, cortante na base, nível da água, clima, cenário, nível do mar, reprodução, pavimento, período
from: ff0d34d1
---

A seção {{ui:Reprodução de risco}} do painel esquerdo reproduz um risco no modelo IFC aberto. Nada no modelo é alterado.

:::warning
Estes são **modelos simples para ver o que um risco faz com este layout**, não um estudo de inundação, uma verificação de norma de vento nem um projeto estrutural. Cada resultado lista suas premissas.
:::

## Inundação

Defina o nível mais alto da água acima do piso mais baixo e os minutos para subir, manter e baixar. A água entra em um ambiente por uma abertura cuja soleira ela já ultrapassou, e ambientes ligados a áreas molhadas por aberturas abaixo da água ficam no mesmo nível (quase estático). A tabela mostra quando cada ambiente fica molhado pela primeira vez e a que profundidade; a planta reproduz isso. Digite a quantidade máxima de água que um ambiente pode receber, e os ambientes acima dela são avisos. **Futuros climáticos:** carregue seu próprio arquivo de cenário (JSON ou CSV com um ano, uma elevação do nível do mar e um fator de inundação) e escolha um ano. Ou ative o complemento Futuros climáticos e escolha um cenário e um ano: a inundação roda duas vezes, atual lado a lado com o futuro (veja "Futuros climáticos: inundação, calor e incêndio florestal em 2050 e 2080"). Os tipos Exposição a incêndio florestal e Calor: arquivo de clima futuro ficam na mesma lista.

## Vento

A pressão segue ½ρV², com a velocidade aumentando com a altura; a força em um pavimento é essa pressão multiplicada por um fator de rajada, pelos dois coeficientes de pressão, pela largura e pela altura do pavimento. Você obtém o cisalhamento, o momento de tombamento e o deslocamento lateral.

## Terremoto

Um edifício de cisalhamento: uma massa por pavimento (área de projeção × quilogramas por metro quadrado, que você define), a mesma rigidez em cada pavimento ajustada ao primeiro período que você informar (um décimo de segundo por pavimento se deixar em branco, e isso é dito), amortecimento, e um movimento do solo simulado (um pulso ou ruído filtrado) na aceleração de pico que você escolher. O resultado é a deriva de cada pavimento, as acelerações dos pisos e a cortante na base; a elevação reproduz o deslocamento lateral, desenhado maior do que é. Digite uma razão de deriva permitida, e os pavimentos acima dela são avisos. É elástico: nada cede nem trinca.

## Rigidez dos pisos a partir do quadro de análise

Para um terremoto ou para o deslocamento lateral pelo vento, escolha **O quadro de análise** como fonte da rigidez em vez de digitar um período. Cada piso é empurrado lateralmente em sequência, o pórtico (vigas, pilares, contraventamentos, lajes) é resolvido, e a rigidez dos pisos com tudo trabalhando em conjunto conduz a simulação. O peso são os próprios elementos mais a carga de piso por metro quadrado que você define na caixa da planta de cada piso. O primeiro período real é mostrado. É elástico: nada cede, e a torção não é modelada. Para o vento, as forças por pavimento continuam sendo as premissas acima (um perfil de lei de potência, seu fator de rajada e os coeficientes de pressão fixos, não uma norma de vento); só o deslocamento lateral vem do pórtico, resolvendo a matriz de rigidez completa do pórtico contra essas forças. O modelo precisa de um IFC com um pórtico que a aba Análise consiga ler.

## Unidades

Profundidades de água, deslocamento lateral e deriva por pavimento, distâncias e áreas são mostrados na {{ui:Unidades}} que você escolheu. Forças (kN), tempos e acelerações mantêm suas próprias unidades, e um valor digitado em uma caixa rotulada em metros permanece em metros. O mesmo vale para os resultados de evacuação, luz natural, aquecimento e resfriamento e mobiliação: comprimentos, áreas e volumes seguem a sua escolha; pressão, vazão, temperatura, energia e potência nunca são convertidas.
