---
title: Estrutura de paredes, pisos e coberturas
summary: Gere montantes, travessas, vergas, barrotes, caibros ou tesouras a partir do modelo e mantenha-os com ele; são refeitos quando as paredes, aberturas, pisos ou a cobertura mudam, e a tabela Madeira é a lista de corte.
keywords: TJI, viga I, tabela de vãos de barrotes, carregar uma tabela, estrutura, montante, travessa, verga, montante de vão, montante de apoio, travessa de vão, montante curto, peitoril, blocagem, canto, canto califórnia, junção em T, barrote, barrote de borda, barrote de cinta, caibro, caibro de espigão, caibro de vale, caibro curto, cumeeira, barrote de forro, linha de amarração, tesoura, madeira, lista de corte, board feet, 2x4, 2x6, espaçamento, entre eixos
from: 76d0ffb5
---

## O que você vai fazer

Estruture o edifício a partir do que você desenhou. O BimCraft dispõe os montantes, as travessas e as vergas nas paredes, os barrotes nos pisos e os caibros (ou tesouras) na cobertura; dimensiona-os a partir de tabelas padrão rotuladas; mantém-os com o modelo; e os refaz sempre que o que eles estruturam muda. A tabela **Madeira** é a lista de corte.

## Estruturar

1. Em um nível, abra {{ui:Build}} e escolha {{ui:Framing}}.
2. Escolha o **espaçamento** (16" ou 24" entre eixos; 400 ou 600 mm), os **cantos** (três montantes ou califórnia), **Caibros** ou **Tesouras** para coberturas, e se as paredes recebem uma fiada de **blocagem** na meia altura. Para pisos, escolha **Madeira serrada** ou **TJI (preliminar)** e defina a direção dos barrotes como automática, eixo X ou eixo Y da planta.
3. Clique em **Estruturar todas as paredes**, ou clique em uma parede, em um piso ou em uma cobertura (no nível em que a cobertura se apoia) para estruturar apenas ele.

Desligue **Mostrar estrutura** para ocultar todas as peças de estrutura, como uma camada; **Transparente** oculta as paredes, os pisos e as coberturas que estão estruturados, para que você veja somente a estrutura.

## O que você recebe

- **Paredes**: uma travessa inferior (cortada nas portas), uma dupla travessa superior, montantes no traçado a partir do início da parede, montantes de vão e de apoio e uma verga em cada porta e janela, montantes curtos acima das vergas e abaixo das janelas, um peitoril bruto sob as janelas, cantos onde as paredes se encontram (a parede que passa leva os montantes do canto), dois montantes de reforço onde outra parede se encontra em T, e blocagem entre os montantes.
- **Pisos**: barrotes na direção curta do piso por padrão, ou ao longo do eixo da planta que você escolher; barrotes de borda ao redor da borda, e vigas de abertura e vergas duplas ao redor de uma caixa de escada, com os barrotes que a atravessam cortados curtos (barrotes de cauda). O modo TJI escolhe a menor série e a menor altura listadas que alcançam o vão livre medido no espaçamento escolhido.
- **Coberturas**: caibros comuns em esquadro em cada beiral, caibros curtos onde espigões e vales os cortam, caibros de espigão e de vale, cumeeiras, barrotes de forro sobre as travessas e linhas de amarração; ou tesouras simples no espaçamento, uma peça cada.

## Alterar

Selecione qualquer peça de estrutura na visualização 3D ou na árvore do modelo. **Propriedades** mostra sua estrutura: altere o espaçamento, o tipo e a direção dos barrotes do piso, os cantos, a blocagem ou a estrutura da cobertura. Mover paredes, portas e janelas, ou alterar o piso ou a cobertura, refaz a estrutura automaticamente.

Para manter uma peça que você posicionou de propósito quando a estrutura for refeita, selecione-a e escolha **Manter esta peça quando a estrutura for refeita**. Uma peça mantida permanece onde está; quando a estrutura ao redor muda, ela é marcada para que você a confira.

## Pisos TJI a partir de uma tabela que você carrega

O BimCraft não inclui tabelas de vãos de fabricantes de barrotes (elas pertencem ao fabricante e mudam a cada edição). Selecione a estrutura de um piso, defina **Barrotes do piso** como **TJI (preliminar)** e escolha **Carregar uma tabela…** em **Propriedades**: um arquivo no formato `cadcraft-tji-table`, JSON ou CSV, que você fez a partir das tabelas de vãos atuais do fabricante. Ele informa o fabricante, o produto, a edição e de onde vêm os números, e lista para cada hipótese de carga (sobrecarga, carga permanente, limite de flecha, comprimento de apoio) o maior vão livre de cada série e altura em cada espaçamento.

- O BimCraft usa o **vão livre** do piso, escolhe a menor altura e, dentro dela, a série cujo vão listado alcança o vão para o espaçamento e a hipótese de carga que você escolheu, e estrutura o piso com ela. Se o vão ou o espaçamento estiver fora da tabela, ele avisa e não altera nada.
- As cargas, o limite de flecha, o comprimento de apoio, a tabela e a frase "Orientação preliminar de layout; a seleção final exige as tabelas do fabricante e as cargas do projeto" são impressos na tabela Madeira, gravados no modelo com a estrutura e listados no painel **Problemas** como uma nota. Uma tabela marcada como exemplo avisa isso em um alerta.
- Com o complemento **Regulamentos de construção** ativo, sua regra de barrotes de piso também lê uma tabela carregada; sem tabela, os barrotes TJI ficam de fora dessa verificação, como antes.
- A tabela permanece neste navegador até que você a limpe ou carregue outra. O arquivo: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: polegadas, pés, psf; ou `metric`: mm, metros, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) e `rows` (`series`, `depth`, `spans`: para cada id de hipótese, o espaçamento e o maior vão livre, como `"16": "15-6"`). Em CSV, os mesmos dados são linhas `# chave = valor`, seguidas de `series,depth,case,spacing,span`.
- Sem tabela carregada, um layout TJI é recusado e nada muda: **Carregue uma tabela TJI: as tabelas do fabricante pertencem a ele e não estão embutidas.** Um modelo estruturado com a antiga tabela TJI embutida (antes desta mudança) mantém todos os barrotes que tem; Propriedades e Problemas informam que a tabela é necessária, e o piso pode ser estruturado novamente assim que você carregar uma. Barrotes de madeira serrada maciça funcionam como antes.

Isto é uma orientação de layout. A seleção final dos barrotes exige as tabelas do fabricante, as cargas do projeto e o engenheiro.

## A lista de corte

No painel de tabelas, escolha **Madeira**: cada peça de estrutura agrupada por bitola e pelo comprimento comercial que você compraria (comprimentos inteiros de 2' a partir de 8'; saltos de 600 mm a partir de 2400 em milímetros), com o número de peças e os board feet. **CSV** baixa a lista.

:::warning
As bitolas de vergas, barrotes, caibros e barrotes de forro vêm de tabelas padrão rotuladas para uma casa típica de um ou dois pavimentos, não de cálculo de engenharia. **Propriedades** informa quando um vão ou uma abertura está além da sua tabela. Um projetista ou engenheiro verifica vãos, cargas e ligações.

Os layouts TJI usam somente uma tabela que você carrega, feita a partir das tabelas atuais do fabricante; o BimCraft não traz nenhuma. A sugestão não verifica apoio, cargas pontuais, balanços, furos, vergas de caixas de escada nem ligações, e a forma I do modelo é esquemática.
:::

## O que é salvo

Cada parede, piso ou cobertura estruturada é um conjunto de elementos IFC ("Framing") formado por membros IFC (montantes, travessas, caibros, linhas de amarração, blocagem e tesouras) e vigas (vergas, barrotes, barrotes de borda e cumeeiras), cada um com sua bitola, comprimento e board feet.
