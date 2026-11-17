---
title: Comparar uma digitalização com o modelo e o cronograma 4D
summary: Avalie cada elemento do modelo contra uma nuvem de pontos aberta (construído, parcialmente, faltando, não alcançado), veja o percentual construído, colorir o modelo por ele e, com um cronograma 4D carregado, liste o que está atrasado ou adiantado no dia 4D.
keywords: digitalização, nuvem de pontos, progresso, percentual concluído, construído, faltando, atrasado, adiantado, 4D, progresso da obra, desvio, como construído, varredura a laser, drone, comparar
from: 6fdc9003
---

Abra um IFC, abra uma nuvem de pontos ao lado dele (veja [Nuvens de pontos](topic:point-clouds)) e posicione-a sobre o modelo. A seção {{ui:Comparar a digitalização com o modelo}} aparece no painel direito enquanto uma nuvem está aberta.

## O que faz

Clique em {{ui:Comparar}}. Cada elemento do modelo é avaliado pela sua superfície, porque é isso que um scanner enxerga. As seis faces da caixa dele são divididas em células de cerca de 20 cm; uma célula conta quando um ponto da digitalização está dentro da sua {{ui:Tolerância}} (50 mm no início) em relação à face. Vale a maior face grande, então uma parede digitalizada de um lado não é penalizada pelo outro lado.

- **Construído**: pelo menos 40 % da superfície é vista.
- **Parcialmente**: de 10 % a 40 %.
- **Faltando**: menos que isso, mas a digitalização alcança o elemento (pontos a até 1.5 m dele).
- **Não alcançado**: a digitalização nunca passou por ali, então nada é dito sobre ele.

Para elementos construídos e parcialmente construídos, também informa o desvio médio dos pontos da digitalização em relação à superfície do modelo, e diz se o elemento está no lugar (dentro da tolerância), próximo (dentro de três vezes) ou fora (mais longe). Ele só enxerga desvios de até cinco vezes a tolerância: um elemento construído mais longe do seu lugar que isso aparece como faltando.

O resumo dá o percentual construído entre os elementos que a digitalização alcança, por contagem e por volume. Elementos parcialmente construídos são contados à parte e não são somados aos construídos.

## Contra o cronograma 4D

Com um cronograma 4D carregado (veja [Cronograma 4D](topic:4d-schedule)), o resultado também usa o dia que você definiu no controle deslizante 4D: elementos previstos até esse dia que a digitalização não mostra como construídos são **atrasados**; elementos ainda não previstos que estão construídos são **adiantados**. Os elementos atrasados são listados em {{ui:Problemas}}, e a tabela pode ser filtrada para eles. Sem cronograma, nada é dito sobre atraso ou adiantamento.

## A tabela e o modelo

Clique em uma linha para selecionar o elemento. {{ui:Colorir o modelo}} pinta os elementos de verde (construído), âmbar (parcialmente), vermelho (faltando) ou cinza (não alcançado); {{ui:Cores próprias}} os devolve às cores originais. {{ui:Salvar CSV}} grava a tabela. {{ui:Marcar os elementos correspondentes como verificados em campo}} marca como verificado em campo (LOD 500, método digitalização) cada elemento visto como construído e dentro da tolerância, em um só passo que você pode desfazer. Veja [Marcar elementos como verificados ou verificados em campo](topic:verification).

:::warning
Isto compara a caixa de cada elemento com pontos da digitalização dentro de uma tolerância. **Não é um levantamento, um quantitativo nem base para pagamento.** Um elemento escondido atrás de outro que foi digitalizado (uma parede atrás de um revestimento, uma laje sob um acabamento de piso) compartilha a superfície e pode parecer construído; um elemento curvo ou inclinado tem uma caixa maior que o corpo dele e pode parecer parcial ou faltando. Veja a lista antes de agir com base nela. Comentários de alvará e notas de progresso não fazem parte disto: ficam nas colunas onde você os mantém.
:::

Um assistente pode executar a mesma comparação com a ferramenta {{ui:Comparar a digitalização com o modelo}}; ela não altera nada no modelo.
