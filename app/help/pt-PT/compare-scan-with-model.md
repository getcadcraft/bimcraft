---
title: Comparar uma digitalização com o modelo e a programação 4D
summary: Avaliar cada elemento do modelo contra uma nuvem de pontos aberta (construído, parcial, em falta, não atingido), ver a percentagem construída, colorir o modelo com ela e, com uma programação 4D carregada, listar o que está atrasado ou adiantado no dia 4D.
keywords: digitalização, nuvem de pontos, progresso, percentagem concluída, construído, em falta, atrasado, adiantado, 4D, progresso em obra, desvio, como construído, digitalização a laser, drone, comparar
from: 6fdc9003
---

Abra um modelo IFC, abra uma nuvem de pontos ao lado (ver [Nuvens de pontos](topic:point-clouds)) e coloque-a sobre o modelo. A secção {{ui:Comparar a digitalização com o modelo}} aparece no painel direito enquanto uma nuvem estiver aberta.

## O que faz

Clique em {{ui:Comparar}}. Cada elemento do modelo é avaliado pela sua superfície, porque é isso que um scanner vê. As seis faces da sua caixa são divididas em células de cerca de 20 cm; uma célula conta quando um ponto da digitalização está dentro da sua {{ui:Tolerância}} (50 mm para começar) em relação à face. Conta a maior face, pelo que uma parede digitalizada de um só lado não é penalizada pelo outro.

- **Construído**: pelo menos 40 % da superfície está visível.
- **Parcial**: entre 10 % e 40 %.
- **Em falta**: menos do que isso, mas a digitalização chega ao elemento (pontos a menos de 1.5 m dele).
- **Não atingido**: a digitalização nunca lá esteve, pelo que nada se afirma sobre ele.

Para os elementos construídos e parcialmente construídos, dá também o desvio médio dos pontos da digitalização em relação à superfície do modelo, e indica se o elemento está no sítio (dentro da tolerância), perto (dentro de três vezes a tolerância) ou desviado (mais longe). Só vê desvios até cinco vezes a tolerância: um elemento construído mais longe do seu lugar do que isso aparece como em falta.

O resumo dá a percentagem construída entre os elementos que a digitalização atinge, por número e por volume. Os elementos parcialmente construídos são contados à parte e não são somados aos construídos.

## Contra a programação 4D

Com uma programação 4D carregada (ver [Programação 4D](topic:4d-schedule)), o resultado usa também o dia que definiu no cursor 4D: os elementos previstos até esse dia que a digitalização não mostra como construídos estão **atrasados face à programação**; os elementos ainda não previstos que estão construídos estão **adiantados**. Os elementos atrasados são listados em {{ui:Problemas}}, e a tabela pode ser filtrada para eles. Sem programação, nada se diz sobre atrasos ou adiantamentos.

## A tabela e o modelo

Clique numa linha para selecionar o elemento. {{ui:Colorir o modelo}} pinta os elementos de verde (construído), âmbar (parcial), vermelho (em falta) ou cinzento (não atingido); {{ui:Cores próprias}} repõe as cores. {{ui:Guardar CSV}} escreve a tabela. {{ui:Marcar os elementos correspondentes como verificados no terreno}} marca como verificado no terreno (LOD 500, método digitalização) cada elemento visto como construído e dentro da tolerância, num único passo que pode anular. Ver [Marcar elementos como verificados ou verificados no terreno](topic:verification).

:::warning
Isto compara a caixa de cada elemento com pontos da digitalização dentro de uma tolerância. **Não é um levantamento, uma medição de quantidades nem uma base para pagamento.** Um elemento escondido atrás de outro digitalizado (uma parede atrás de um revestimento, uma laje sob um acabamento de piso) partilha a sua superfície e pode ser lido como construído; um elemento curvo ou inclinado tem uma caixa maior do que o seu corpo e pode ser lido como parcial ou em falta. Veja a lista antes de agir com base nela. Os comentários de licenciamento e as notas de progresso não fazem parte disto: ficam nas colunas onde os guarda.
:::

Um assistente pode executar a mesma comparação com a ferramenta {{ui:Comparar a digitalização com o modelo}}; não altera nada no modelo.
