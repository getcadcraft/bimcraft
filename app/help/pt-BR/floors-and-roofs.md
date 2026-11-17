---
title: Ambientes, pisos, forros e coberturas
summary: Os ambientes aparecem conforme as paredes os fecham; dê a um ambiente ou a todo o edifício um piso e um forro, e coloque um telhado de quatro águas ou de duas águas sobre as paredes. Todos acompanham quando as paredes são movidas.
keywords: ambiente, ambientes, espaço, área, perímetro, piso, laje, contrapiso, forro, cobertura, telhado de quatro águas, telhado de duas águas, inclinação, projeção, beiral, cumeeira, vale, 6/12
from: 1fb1813c
---

## O que você vai fazer

Finalize a envoltória do edifício. Os ambientes surgem sozinhos a partir das paredes; pisos, forros e a cobertura levam um clique cada. Como são obtidos a partir das paredes, acompanham quando as paredes são movidas.

## Ambientes

Todo espaço fechado por paredes desenhadas é um ambiente. Ele aparece assim que a última parede o fecha, com um número (101, 102 … no primeiro nível, 201 … no seguinte) e um nome (**Ambiente 1**, **Ambiente 2** …), e sua área aparece no meio dele na planta.

- Com {{ui:Select}} ativo, clique dentro de um ambiente para selecioná-lo. Em **Propriedades**, altere o **Nome** (por exemplo `Cozinha`) e o **Número**; a área e o perímetro são exibidos.
- Exclua uma parede entre dois ambientes e eles se tornam um só; desenhe uma parede atravessando um ambiente e ele se torna dois. Um ambiente mantém seu nome e número enquanto as paredes ao redor são movidas.
- Um ambiente não pode ser excluído isoladamente: ele é o espaço que as paredes formam.

As áreas são medidas dentro das faces das paredes. Os ambientes são salvos como espaços IFC, com área de piso, perímetro, altura e volume, para que as tabelas os leiam (veja [Somar quantidades, listar elementos e criar tabelas de espaços](topic:quantity-totals)).

## Pisos

1. Clique em {{ui:Floor}}.
2. Escolha **Este ambiente** ou **Todo o edifício**, o **Tipo** (piso de madeira ou laje de concreto) e a espessura.
3. Aponte dentro de um ambiente (ou em qualquer ponto dentro do edifício). O que o piso cobriria fica destacado, com sua área.
4. Clique. O topo do piso fica no nível do pavimento; ele desce pela sua espessura. Um piso de todo o edifício alcança as faces externas das paredes.

## Forros

1. Clique em {{ui:Ceiling}}.
2. Escolha **Este ambiente** ou **Todo o edifício**, e a **Altura** acima do piso.
3. Aponte dentro e clique.
4. Para vê-lo por baixo, com sua grade e as luminárias sobre ele, mude a planta para a planta de forro: veja [Vistas, intervalos de visualização e suas próprias folhas](topic:views-and-sheets).

## Uma cobertura

1. No nível cujas paredes sustentam a cobertura, clique em {{ui:Roof}}.
2. Digite a **Inclinação** como uma elevação sobre 12 (`6/12`) ou em graus (`30`), e a **Projeção**.
3. Escolha as **Extremidades**: **Telhado de quatro águas** (todos os lados inclinam), **Empenas nos lados curtos** ou **Empenas nos lados longos** (um edifício de quatro lados), ou **Telhado de uma água**.
4. Aponte dentro do edifício: o beiral e a cumeeira aparecem na planta. Clique.

A cobertura fica sobre as paredes, no nível acima delas, e sua face inferior encontra a face externa das paredes. As empenas são preenchidas com uma parede de empena da mesma espessura da parede abaixo. Um edifício em forma de L, T ou U recebe um telhado de quatro águas cujas abas se encontram em vales.

## Alterar

Selecione um piso, forro ou cobertura (na visualização 3D, na árvore do modelo, ou uma cobertura clicando dentro do seu contorno no nível acima) e altere-o em **Propriedades**: o tipo do piso, a espessura e a altura do topo acima do nível; a altura, a espessura e o **Padrão** do forro (a grade que uma planta de forro desenha sobre ele: nenhum, 600 × 600, 600 × 1200, 2' × 2' ou 2' × 4'); a inclinação, a projeção, as extremidades e a espessura da cobertura. Cada alteração é uma única etapa de desfazer.

## Dar a um piso, forro ou cobertura um tipo com camadas

Um piso, um forro e uma cobertura podem receber um **tipo**, como uma parede: uma composição nomeada de camadas, cada uma com seu material e sua espessura real.

- **Ao posicioná-lo.** As ferramentas Piso, Forro, Cobertura e Desenhar piso têm uma lista **Tipo** na sua linha. **Sem tipo** posiciona como antes, com sua própria espessura. Um tipo o posiciona com a mesma espessura da soma de suas camadas.
- **Depois.** Selecione o piso, o forro ou a cobertura e escolha **Tipo** em Propriedades. O elemento continua o mesmo: seu lugar, seu ambiente e seus dados são mantidos, e nada é desenhado de novo. Só mudam seu tipo, sua espessura e seu material. É assim que um elemento de fase de esboço se torna um elemento desenvolvido: troque seu tipo genérico por um tipo real.
- **Editar o tipo…** abre o editor de tipos naquele tipo: camadas de cima para baixo, o núcleo, a função de cada camada e a etiqueta LOD do tipo. Salvar altera todos os elementos do tipo em uma única etapa, e uma única ação de Desfazer a reverte. Alterar um tipo inicial salva uma cópia como seu próprio tipo.
- Enquanto um elemento tiver um tipo, sua **Espessura** é a do tipo e não pode ser digitada. Escolha outro tipo, ou **Sem tipo**, para alterá-la.

Os tipos iniciais são um tipo **genérico** para cada um (uma camada do material genérico, com etiqueta LOD 200) e dois tipos com camadas (com etiqueta LOD 300): um piso de barrotes de madeira e um piso de concreto com contrapiso; uma cobertura de madeira e uma cobertura plana de concreto; um forro de gesso acartonado e um forro suspenso de placas. São valores iniciais, não construções testadas: confira as camadas antes de confiar nelas.

A tabela **Camadas: área e volume** lista cada camada de cada tipo em uso; veja [Tabelas, cotas e PDF](topic:plan-schedules-and-pdf). Tipos de piso, cobertura e forro passam de um projeto a outro em um pacote de tipos ou como item da biblioteca; veja [Pacotes de tipos](topic:type-packs).

## Vale saber

- Mover, adicionar ou excluir paredes faz com que os ambientes, pisos, forros e a cobertura sobre elas sejam refeitos.
- Uma cobertura se adapta a qualquer contorno. Para dar a cada parede sua própria inclinação, empena ou água, um cintamento elevado, friso e forro do beiral, ou para desenhar um único plano de cobertura, veja [Coberturas: uma inclinação para cada parede, empenas, águas e planos de cobertura](topic:roofs).
- {{key:Delete}} exclui o piso, forro ou cobertura selecionado.
