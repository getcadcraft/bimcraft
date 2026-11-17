---
title: Composições de parede e cotas de referência
summary: Crie seus próprios tipos de parede camada por camada, com um núcleo explícito, mantenha uma biblioteca de materiais do projeto e cote até faces e linhas de centro que continuam ligadas quando a parede muda.
keywords: lod, nível de desenvolvimento, lod 200, lod 300, genérica, composição de parede, tipo de parede, camadas, núcleo, face do núcleo, linha de centro do núcleo, câmara de ar, membrana, manta de proteção, biblioteca de materiais, materiais, espessura, cota de referência, cota, associativa, linha de localização, revestimento externo, montante, gesso acartonado
from: 4ea8fbf5
---

## O que você vai fazer

Criar um tipo de parede que corresponda à parede que você vai construir: revestimento externo, fechamento, um núcleo com montantes de 5½ polegadas e gesso acartonado, ou alvenaria, uma câmara de ar e uma parede de madeira. Marque quais camadas são o núcleo, para que uma cota ou uma linha de localização mantenha o núcleo enquanto os acabamentos ao redor mudam. Depois cote as paredes até as faces e linhas de centro que você pretende.

## Criar um tipo de parede

1. Comece uma edificação ou abra um modelo IFC, ative {{ui:Draw}} e escolha a ferramenta {{ui:Wall}}.
2. Escolha um modelo inicial em {{ui:Wall type}} e abra {{ui:Wall assemblies…}}. Um modelo inicial abre como uma cópia; dê um nome ao novo tipo.
3. As camadas vão do exterior, no topo da lista, ao interior, na base. Escolha o material de cada camada, digite a espessura (unidades do projeto, ou valores explícitos como `12.7 mm` ou `1/2"`), escolha sua função (acabamento, substrato, estrutura, isolamento, membrana) e marque as camadas **Núcleo**. O núcleo deve ser um grupo contínuo.
4. {{ui:Add layer}} adiciona uma camada, {{ui:Add cavity}} adiciona uma câmara de ar com sua ventilação (não especificada, não ventilada, ventilada), {{ui:Add membrane}} adiciona uma camada sem espessura nominal, como uma manta de proteção (house wrap). As setas movem a camada para fora ou para dentro.
5. A prévia desenha as camadas em escala, com o núcleo sublinhado, numeradas como as linhas, e cota cada camada, o núcleo e o total. {{ui:Save type}}.

O novo tipo fica na lista da ferramenta {{ui:Wall}} e em **Propriedades** de uma parede selecionada. Salvar um tipo que você editou altera todas as paredes que o usam; {{ui:Duplicate type}} cria um tipo separado e o atribui apenas às paredes selecionadas. Cada salvamento é um único passo de desfazer, junto com as paredes que ele move, as portas e janelas nelas e as cotas que dependem delas.

Uma câmara de ar adiciona largura. Uma membrana não adiciona nenhuma: ela permanece no tipo para que uma tabela possa encontrá-la depois, e não conta para a espessura da parede nem do núcleo. Uma câmara de ar ou uma membrana nunca é contada como material sólido. Em um arquivo salvo como IFC2X3, uma membrana fica registrada no tipo, mas fica de fora das suas camadas físicas de material.

## Marcar um tipo com seu nível de desenvolvimento (LOD)

Um tipo pode indicar o quanto está desenvolvido. No editor, **Nível de desenvolvimento (LOD)** oferece a escala fixa 100, 200, 300, 350, 400 e 500, ou **Não definido**. Uma parede genérica ("Parede 230 genérica") é LOD 100 ou 200; uma composição específica com suas camadas reais ("230 tijolo de barro, rebocada dos dois lados") é LOD 300 ou mais. A marcação é definida por você: o BimCraft não a calcula, e os modelos iniciais não têm nenhuma.

A marcação aparece ao lado do nome do tipo na lista de tipos da ferramenta {{ui:Wall}}, em **Propriedades** de uma parede e na lista de [Trocar tipo](topic:wall-tools); o relatório depois de uma troca diz se o nível subiu ou desceu. Para vê-la na tabela **Paredes por tipo** e no CSV dela, marque **Mostrar o LOD de cada tipo de parede na tabela de paredes** em Configurações › BimCraft › Paredes: uma última coluna, LOD, é acrescentada. Ela é salva no arquivo IFC com o tipo (no conjunto de propriedades `CadCraft_WallType` do tipo, como a propriedade `LOD` e dentro do registro do tipo), então continua lá quando você abrir o arquivo de novo. Por enquanto a marcação vale só para tipos de parede, não para elementos isolados nem para outros tipos de elemento.

## Paredes genéricas para a fase de esboço

A lista de tipos da ferramenta {{ui:Wall}} começa com duas paredes **genéricas**: **Parede genérica 200 mm (externa)** e **Parede genérica 100 mm (interna)**. Cada uma é uma camada do material genérico, marcada como LOD 200. Use-as quando você sabe onde as paredes vão e ainda não sabe do que elas são feitas.

Uma parede cujo tipo está marcado como **LOD 100** ou **LOD 200** é desenhada em todas as plantas como **uma única faixa hachurada**, em todos os níveis de detalhe: sem camadas, sem linhas de camada. Isso vale para as paredes genéricas e para qualquer tipo seu que você marque como LOD 100 ou 200. A própria parede está completa: tem sua espessura, suas portas e janelas, seus ambientes e suas quantidades.

Para desenvolvê-la, troque o tipo (Editar › Paredes › **Trocar tipo**, ou Tipo em Propriedades). A parede nunca é desenhada de novo: a mesma parede recebe o novo tipo, e o relatório diz o que se moveu. Um tipo marcado como LOD 300 ou superior é desenhado com suas camadas, como antes.

Para desenhar cada parede pelas suas camadas, qualquer que seja a marcação: Configurações › BimCraft › Paredes, desmarque **Desenhar paredes de um tipo LOD 100 ou LOD 200 como uma única faixa hachurada**.

Os modelos iniciais de portas e janelas também são tipos genéricos (um tamanho e uma forma de abrir, não um produto). Com **Mostrar o LOD de cada tipo de parede na tabela de paredes** ativado, as tabelas de Portas e Janelas mostram LOD 200 para eles.

## Dar a um tipo seus dados de levantamento de quantitativos

No editor de tipo de parede, **Dados de levantamento de quantitativos** registra o que um orçamentista precisa saber sobre a parede, uma vez para o tipo: a **unidade** com que ela é construída (um tijolo ou um bloco: seu nome, comprimento, altura e largura), a **argamassa** (nome e espessura da junta) e um **preço unitário** com seu código de moeda (três letras, como USD, EUR ou ZAR) e a base dele: um metro quadrado ou pé quadrado de área líquida de parede, um metro ou pé de comprimento de parede, ou cada parede. Tudo é opcional.

Esses dados são salvos com o tipo no arquivo. Cada parede do tipo então informa os dados: {{ui:Schedules}} › **Tipos de parede: dados de levantamento de quantitativos** lista a unidade, a argamassa, o preço unitário e o preço unitário vezes a quantidade medida, e o levantamento enviado ao TakeoffCraft leva esses dados no item desse tipo de parede. Altere-os no tipo e todas as paredes acompanham.

Três campos a mais servem para contar tijolos ou blocos e argamassa:

- **Perda em unidades, %** é somada ao número de unidades. Deixe vazio para usar o valor do método de medição do projeto, ou nenhum se o método não tiver um. Digite 0 para não ter perda, qualquer que seja o método.
- **Argamassa extra, %** é para rebaixos ou furos que recebem argamassa. É somada ao volume de argamassa. Deixe vazio para nenhum.
- **Camadas construídas com esta unidade**: marque cada camada que é um pano deste tijolo ou bloco. Uma parede de cavidade tem dois. Com nenhuma marcada, contam-se as camadas do núcleo.

O preço unitário também pode ser por unidade encomendada, por 1000 unidades encomendadas ou por m³ de argamassa. Quando a unidade tem comprimento e altura, **Tipos de parede: dados de levantamento de quantitativos** mostra as unidades por m² (ou ft²) de um pano, as unidades encomendadas e o volume de argamassa; as fórmulas estão em [Tijolos, blocos e argamassa](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Um tipo tem uma só unidade: dois panos de unidades diferentes (um pano externo de tijolo e um pano interno de bloco) ainda não podem ser contados em um mesmo tipo.

## Manter o núcleo fixo

Em **Propriedades**, defina a **Linha de localização** de uma parede como uma face do núcleo ou a linha de centro do núcleo. Quando você adicionar ou engrossar um acabamento depois, essa linha permanece onde está e a parede cresce ao redor dela; as paredes que se encontram com ela em um canto acompanham, então cantos retos continuam fechados.

## Materiais do projeto

{{ui:Material library…}} lista os materiais do projeto: nome, categoria, a espessura com que uma camada começa, cor de exibição, padrão de hachura de corte e notas. A biblioteca é salva no IFC com o projeto. Escolher um material para uma camada dá a essa camada a espessura padrão do material, que você pode alterar depois; editar a biblioteca mais tarde nunca redimensiona paredes que você já desenhou. Você também pode criar um material a partir da lista de materiais da camada com {{ui:+ New material…}}.

## Cotas de referência

{{ui:Annotate}} › {{ui:Reference dimension}}: escolha horizontal, vertical ou alinhada, e uma referência: a face externa ou interna acabada, a face externa ou interna do núcleo, a linha de centro da parede ou a linha de centro do núcleo. Escolha a primeira parede, troque a referência se quiser, escolha a segunda e clique onde fica a linha de cota. Duas referências em uma parede medem sua espessura total ou a do núcleo. {{ui:Reference dimensions…}} lista as cotas da vista, incluindo as que perderam uma parede, com Propriedades, Revincular referências e Excluir.

### Cotar a planta inteira por regras

{{ui:Annotate}} › {{ui:Dimension the plan…}} cota o exterior da planta do piso que você está vendo: a dimensão total em cada direção, uma linha de cotas ao longo de cada borda externa (extremidades de paredes, paredes que encontram a borda, e as portas e janelas nela), com as linhas posicionadas livres do edifício. Marque o que quiser, leia a contagem e depois clique em {{ui:Add the dimensions}}. São cotas de referência comuns, então acompanham as paredes quando elas se movem, e você pode selecionar, mover ou excluir qualquer uma delas; o conjunto inteiro é um passo de desfazer, e executá-la de novo não cria nenhuma duplicata.

Ela cota só o exterior: ambientes dentro do edifício, paredes curvas e paredes que não são perpendiculares à planta ficam para as ferramentas manuais, e linhas de eixo não são paredes, então cotas entre eixos não são feitas aqui. Seu assistente conectado pode fazer o mesmo com `plan_dimension`.

A cota fica presa às paredes, não a um ponto na tela: quando uma parede se move ou seu tipo muda, o valor acompanha. Se uma parede for excluída, a cota indica que não está resolvida e não mostra número, até você revinculá-la ou desfazer. A caixa de comprimento também aceita coordenadas da planta, como `10',12'`, para uma linha de cota em um lugar exato.

As cotas são para paredes que o BimCraft desenhou, em vistas de planta. Ainda não implementado: cotas em cortes e elevações, cotas para portas, janelas e outros componentes, e camadas de montagem desenhadas na planta e no corte; veja [O que ainda não está implementado](topic:not-built-yet).

## Veja também

[Desenhar paredes](topic:draw-walls), [Alterar uma parede, porta ou janela](topic:change-a-wall-or-door), [Propriedades](topic:properties-panel).
