---
title: Composições de parede e cotas de referência
summary: Construir os seus próprios tipos de parede camada a camada, com um núcleo explícito, manter uma biblioteca de materiais do projeto e cotar até faces e eixos que se mantêm ligados quando a parede muda.
keywords: lod, nível de desenvolvimento, lod 200, lod 300, genérica, composição de parede, tipo de parede, camadas, núcleo, face do núcleo, eixo do núcleo, caixa de ar, membrana, membrana de envolvimento, biblioteca de materiais, materiais, espessura, cota de referência, cota, associativa, linha de localização, revestimento exterior, montante, gesso cartonado
from: 4ea8fbf5
---

## O que se faz

Criar um tipo de parede que corresponde à parede que vai construir: revestimento exterior, revestimento, núcleo com montantes de 5½ polegadas e gesso cartonado, ou tijolo, uma caixa de ar e uma parede de estrutura de madeira. Marque quais as camadas que são o núcleo, para que uma cota ou uma linha de localização possa manter o núcleo enquanto os acabamentos à volta mudam. Depois cote as paredes até às faces e eixos que pretende.

## Criar um tipo de parede

1. Comece um edifício ou abra um modelo IFC, ative {{ui:Desenhar}} e escolha a ferramenta {{ui:Parede}}.
2. Escolha um modelo de partida em {{ui:Tipo de parede}} e abra {{ui:Composições de parede…}}. Um modelo de partida abre como cópia; dê um nome ao novo tipo.
3. As camadas vão do exterior, no topo da lista, ao interior, em baixo. Escolha o material de cada camada, escreva a sua espessura (as unidades do projeto, ou valores explícitos como `12.7 mm` ou `1/2"`), escolha a sua função (acabamento, suporte, estrutura, isolamento, membrana) e marque as camadas de **Núcleo**. O núcleo tem de ser um grupo contínuo.
4. {{ui:Adicionar camada}} acrescenta uma camada, {{ui:Adicionar caixa de ar}} acrescenta uma caixa de ar com a sua ventilação (não especificada, não ventilada, ventilada), {{ui:Adicionar membrana}} acrescenta uma camada sem espessura nominal, como a membrana de envolvimento (house wrap). As setas movem uma camada para fora ou para dentro.
5. A pré-visualização desenha as camadas à escala, com o núcleo sublinhado, numeradas como as linhas, e cota cada camada, o núcleo e o total. {{ui:Guardar tipo}}.

O novo tipo fica na lista da ferramenta Parede e em **Propriedades** de uma parede selecionada. Guardar um tipo que editou altera todas as paredes que o usam; {{ui:Duplicar tipo}} cria um tipo separado e aplica-o apenas às paredes selecionadas. Cada gravação é um passo de {{ui:Anular}}, juntamente com as paredes que move, as portas e janelas nelas e as cotas que dependem delas.

Uma caixa de ar acrescenta espessura. Uma membrana não acrescenta nenhuma: fica no tipo para que um mapa a possa encontrar mais tarde, e não conta para a espessura da parede nem do núcleo. Uma caixa de ar ou uma membrana nunca são contadas como material maciço. Num ficheiro guardado em IFC2X3, uma membrana fica registada no tipo, mas não aparece nas suas camadas de material físico.

## Marcar um tipo com o seu nível de desenvolvimento (LOD)

Um tipo pode indicar o seu grau de desenvolvimento. No editor, **Nível de desenvolvimento (LOD)** oferece a escala fixa 100, 200, 300, 350, 400 e 500, ou **Não definido**. Uma parede genérica ("Parede 230 genérica") é LOD 100 ou 200; uma composição específica com as suas camadas reais ("230 tijolo de argila, rebocada nos dois lados") é LOD 300 ou superior. A marcação é definida por si: o BimCraft não a calcula, e os modelos de partida não têm nenhuma.

A marcação aparece ao lado do nome do tipo na lista de tipos da ferramenta Parede, em **Propriedades** de uma parede e na lista de [Trocar tipo](topic:wall-tools); o relatório após uma troca indica se o nível subiu ou desceu. Para a ver no mapa **Paredes por tipo** e no seu CSV, marque **Mostrar o LOD de cada tipo de parede no mapa de paredes** em Definições › BimCraft › Paredes: é acrescentada uma última coluna, LOD. É guardada no ficheiro IFC com o tipo (no conjunto de propriedades `CadCraft_WallType`, como a propriedade `LOD` e dentro do registo do tipo), pelo que fica disponível quando abrir o ficheiro de novo. Por agora, a marcação aplica-se apenas aos tipos de parede, e não a elementos individuais nem a outros tipos de elemento.

## Paredes genéricas para a fase de esboço

A lista de tipos da ferramenta Parede começa com duas paredes **genéricas**: **Parede genérica 200 mm (exterior)** e **Parede genérica 100 mm (interior)**. Cada uma é uma camada do material genérico, marcada LOD 200. Use-as quando souber onde ficam as paredes, mas ainda não souber do que são feitas.

Uma parede cujo tipo esteja marcado **LOD 100** ou **LOD 200** é desenhada em todas as plantas como **uma única faixa com trama**, em todos os níveis de detalhe: sem camadas, sem linhas de camada. Isto é verdade para as paredes genéricas e para qualquer tipo próprio que marque com LOD 100 ou 200. A parede em si está completa: tem a sua espessura, as suas portas e janelas, os seus compartimentos e as suas quantidades.

Para a desenvolver, troque o seu tipo (Editar › Paredes › **Trocar tipo**, ou Tipo em Propriedades). A parede nunca é desenhada de novo: a mesma parede passa a ter o novo tipo, e o relatório indica o que se moveu. Um tipo marcado LOD 300 ou superior é desenhado com as suas camadas, como antes.

Para desenhar todas as paredes pelas suas camadas, independentemente da marcação: Definições › BimCraft › Paredes, desmarque **Desenhar paredes de tipo LOD 100 ou LOD 200 como uma única faixa com trama**.

As portas e janelas de partida são também tipos genéricos (uma dimensão e um modo de abertura, não um produto). Com **Mostrar o LOD de cada tipo de parede no mapa de paredes** ativo, os mapas de Portas e Janelas mostram LOD 200 para elas.

## Dar ao tipo os seus dados de medição

No editor do tipo de parede, **Dados de medição** regista o que um orçamentista precisa de saber sobre a parede, uma só vez para o tipo: a **unidade** com que é construída (um tijolo ou um bloco: o seu nome, comprimento, altura e largura), a **argamassa** (nome e espessura da junta) e um **preço unitário** com o seu código de moeda (três letras, como USD, EUR ou ZAR) e a base de cálculo: por metro quadrado ou pé quadrado de área líquida de parede, por metro ou pé de comprimento de parede, ou por parede. Tudo isto é opcional.

Fica guardado com o tipo no ficheiro. Cada parede do tipo passa então a apresentá-lo: {{ui:Mapas}} › **Tipos de parede: dados de medição** lista a unidade, a argamassa, o preço unitário e o preço unitário vezes a quantidade medida, e a medição enviada ao TakeoffCraft transporta esses dados no artigo desse tipo de parede. Altere-o no tipo e todas as paredes acompanham a alteração.

Três campos adicionais servem para contar tijolos ou blocos e argamassa:

- **Desperdício em unidades, %** é somado ao número de unidades. Deixe vazio para usar o valor do método de medição do projeto, ou nenhum se o método não tiver nenhum. Escreva 0 para não ter desperdício, seja qual for o método.
- **Argamassa extra, %** destina-se a furos ou perfurações que levam argamassa. É somado ao volume de argamassa. Deixe vazio se não houver.
- **Camadas construídas com esta unidade**: marque cada camada que é uma folha deste tijolo ou bloco. Uma parede de caixa de ar tem duas. Sem nenhuma marcada, contam-se as camadas do núcleo.

O preço unitário também pode ser por unidade a encomendar, por 1000 unidades a encomendar ou por m³ de argamassa. Quando a unidade tem comprimento e altura, **Tipos de parede: dados de medição** mostra as unidades por m² (ou ft²) de uma folha, as unidades a encomendar e o volume de argamassa; as fórmulas estão em [Tijolos, blocos e argamassa](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Um tipo tem uma só unidade: duas folhas de unidades diferentes (uma folha exterior de tijolo e uma folha interior de bloco) não podem ser contadas no mesmo tipo, para já.

## Manter o núcleo fixo

Em **Propriedades**, defina a **Linha de localização** de uma parede como uma face do núcleo ou como o eixo do núcleo. Quando depois acrescentar ou engrossar um acabamento, essa linha mantém-se no lugar e a parede cresce à volta dela; as paredes que se encontram com ela num canto acompanham, por isso os cantos retos continuam fechados.

## Materiais do projeto

{{ui:Biblioteca de materiais…}} lista os materiais do projeto: nome, categoria, a espessura com que começa uma camada, cor de apresentação, padrão de trama de corte e notas. A biblioteca fica guardada no IFC com o projeto. Ao escolher um material para uma camada, essa camada recebe a espessura predefinida do material, que pode depois alterar; editar a biblioteca mais tarde nunca redimensiona paredes já desenhadas. Também pode criar um material a partir da lista de materiais da camada com {{ui:+ Novo material…}}.

## Cotas de referência

{{ui:Anotar}} › {{ui:Cota de referência}}: escolha horizontal, vertical ou alinhada, e uma referência: a face de acabamento exterior ou interior, a face do núcleo exterior ou interior, o eixo da parede ou o eixo do núcleo. Escolha a primeira parede, altere a referência se quiser, escolha a segunda e depois clique onde deve ficar a linha de cota. Duas referências numa parede medem a sua espessura total ou a do núcleo. {{ui:Cotas de referência…}} lista as cotas da vista, incluindo as que perderam uma parede, com Propriedades, Voltar a associar referências e Eliminar.

### Cotar a planta inteira por regras

{{ui:Anotar}} › {{ui:Cotar a planta…}} cota o contorno exterior da planta do piso que está a ver: a dimensão total em cada sentido e uma fila de cotas ao longo de cada aresta exterior (extremidades das paredes, paredes que tocam a aresta, e as portas e janelas nela), com as filas colocadas fora do edifício. Marque o que pretende, leia a contagem e depois {{ui:Acrescentar as cotas}}. São cotas de referência normais, pelo que acompanham as paredes quando estas se movem, e pode escolher, mover ou eliminar qualquer uma delas; o conjunto inteiro é um passo de {{ui:Anular}}, e voltar a executá-lo não cria cotas repetidas.

Cota apenas o exterior: os compartimentos interiores, as paredes curvas e as paredes que não são perpendiculares à planta ficam para as ferramentas manuais, e as linhas de grelha não são paredes, pelo que as cotas entre grelhas não são criadas aqui. O seu assistente ligado pode fazer o mesmo com `plan_dimension`.

A cota fica associada às paredes, e não a um ponto do ecrã: quando uma parede se move ou o seu tipo muda, o valor acompanha-a. Se uma parede for eliminada, a cota indica que não está resolvida e não mostra número, até a voltar a associar ou anular. A caixa de comprimento também aceita coordenadas da planta, como `10',12'`, para uma linha de cota num local exato.

As cotas são para paredes que o BimCraft desenhou, em vistas de planta. Ainda não implementado: cotas em cortes e alçados, em portas, janelas e outros componentes, e camadas de composições desenhadas na planta e no corte; veja [O que ainda não está implementado](topic:not-built-yet).

## Ver também

[Desenhar paredes](topic:draw-walls), [Alterar uma parede, porta ou janela](topic:change-a-wall-or-door), [Propriedades](topic:properties-panel).
