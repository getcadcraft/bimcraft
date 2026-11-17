---
title: Estruturar paredes, pisos e coberturas
summary: Gere montantes, soleiras, vergas, vigotas, varedos ou asnas a partir do modelo e mantenha-os com ele; são refeitos quando as paredes, as aberturas, os pisos ou a cobertura mudam, e o mapa Madeira é a lista de corte.
keywords: TJI, viga I, tabela de vãos de vigotas, carregar uma tabela, estrutura, montante, soleira, soleira superior, verga, montante principal, montante secundário, vigota de remate, montante curto, peitoril, travamento, canto, canto californiano, encontro em T, vigota, vigota de bordo, vigota de cinta, varedo, varedo de espigão, varedo de rincão, varedo curto, cumeeira, vigota de teto, linha de travamento, asna, madeira, lista de corte, board feet, 2x4, 2x6, espaçamento, entre eixos
from: 76d0ffb5
---

## O que vai fazer

Estruture o edifício a partir do que desenhou. O BimCraft dispõe os montantes, as soleiras e as vergas nas paredes, as vigotas nos pisos e os varedos (ou as asnas) na cobertura; dimensiona-os a partir de tabelas predefinidas identificadas como tal, mantém-nos com o modelo e refaz-os sempre que aquilo que estruturam muda. O mapa **Madeira** é a lista de corte.

## Estruturar

1. Num nível, abra {{ui:Compilação}} e escolha {{ui:Estrutura}}.
2. Escolha o **espaçamento** (16" ou 24" entre eixos; 400 ou 600 mm), os **cantos** (três montantes ou californiano), **Varedos** ou **Asnas** para as coberturas, e se as paredes recebem uma fiada de **travamento** a meia altura. Para os pisos, escolha **Madeira serrada** ou **TJI (preliminar)** e defina a direção das vigotas como automática, X da planta ou Y da planta.
3. Clique em **Estruturar todas as paredes**, ou clique numa parede, num piso ou numa cobertura (no nível onde assenta a cobertura) para estruturar apenas esse elemento.

Desative **Mostrar a estrutura** para ocultar todas as peças da estrutura, como se fosse uma camada; **Transparente** oculta as paredes, os pisos e as coberturas que estão estruturados, para que possa ver apenas a estrutura.

## O que obtém

- **Paredes**: uma soleira inferior (cortada nas portas), uma soleira superior dupla, montantes na disposição a partir do início da parede, montantes principais e secundários e uma verga em cada porta e janela, montantes curtos acima das vergas e sob as janelas, um peitoril em bruto sob as janelas, cantos onde as paredes se encontram (a parede que passa leva os montantes de canto), dois montantes de apoio onde outra parede entra em T, e travamentos entre montantes.
- **Pisos**: vigotas no sentido curto do piso por defeito, ou ao longo do eixo da planta que escolher; vigotas de bordo à volta da borda, e vigotas de remate duplas e vergas à volta de um poço de escada, com as vigotas que o atravessam cortadas curtas (vigotas de cauda). O modo TJI escolhe a série e a altura mais pequenas listadas que alcançam o vão livre medido, com o espaçamento escolhido.
- **Coberturas**: varedos comuns, perpendiculares a cada beirado; varedos secundários onde espigões e rincões os cortam; varedos de espigão e de rincão; cumeeiras; vigotas de teto sobre as soleiras e linhas de travamento; ou asnas simples no espaçamento, uma peça cada.

## Alterar

Selecione qualquer peça da estrutura na vista 3D ou na árvore do modelo. **Propriedades** mostra a sua estrutura: altere o espaçamento, o tipo e a direção das vigotas do piso, os cantos, o travamento ou a estrutura da cobertura. Mover paredes, portas e janelas, ou alterar o piso ou a cobertura, refaz a estrutura automaticamente.

Para manter uma peça que colocou de propósito quando a estrutura for refeita, selecione-a e escolha **Manter esta peça quando a estrutura for refeita**. Uma peça mantida fica onde está; quando a estrutura à volta dela muda, fica assinalada para que possa verificá-la.

## Pisos TJI a partir de uma tabela que carregar

O BimCraft não traz tabelas de vãos dos fabricantes de vigotas (são do fabricante e mudam a cada edição). Selecione a estrutura de um piso, defina **Vigotas do piso** como **TJI (preliminar)** e escolha **Carregar uma tabela…** em **Propriedades**: um ficheiro no formato `cadcraft-tji-table`, JSON ou CSV, que criou a partir das tabelas de vãos atuais do fabricante. Indica o fabricante, o produto e a edição, e de onde vêm os números, e lista para cada caso de carga (sobrecarga, carga permanente, limite de flecha, comprimento de apoio) o maior vão livre de cada série e altura em cada espaçamento.

- O BimCraft toma o **vão livre** do piso, escolhe a altura menos profunda e, dentro dela, a série cujo vão listado o alcança para o espaçamento e o caso de carga escolhidos, e estrutura o piso com ela. Se o vão ou o espaçamento estiverem fora da tabela, o programa di-lo e não altera nada.
- As cargas, o limite de flecha, o comprimento de apoio, a tabela e a frase «Orientação de disposição preliminar; a seleção final exige as tabelas do fabricante e as cargas do projeto» são impressos no mapa Madeira, escritos no modelo com a estrutura e listados no painel **Problemas** como nota. Uma tabela marcada como exemplo diz-o num aviso.
- Com o suplemento **Regulamentos de construção** ativo, a sua regra de vigotas de piso também lê uma tabela carregada; sem tabela, as vigotas TJI ficam de fora dessa verificação, como antes.
- A tabela fica neste navegador até a limpar ou carregar outra. O ficheiro: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: polegadas, pés, psf; ou `metric`: mm, metros, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) e `rows` (`series`, `depth`, `spans`: para cada id de caso, o espaçamento e o maior vão livre, como `"16": "15-6"`). Em CSV, os mesmos dados são linhas `# chave = valor`, seguidas de `series,depth,case,spacing,span`.
- Sem tabela carregada, um layout TJI é recusado e nada muda: **Carregar uma tabela TJI: as tabelas do fabricante são dele e não estão incorporadas.** Um modelo estruturado com a tabela TJI incorporada anterior (antes desta alteração) mantém todas as vigotas que tem; Propriedades e Problemas indicam que a tabela é necessária, e o piso pode ser estruturado de novo quando carregar uma. As vigotas de madeira serrada funcionam como antes.

Isto é uma orientação de disposição. A seleção final das vigotas exige as tabelas do fabricante, as cargas do projeto e o engenheiro.

## A lista de corte

No painel **Mapas**, escolha **Madeira**: cada peça da estrutura agrupada por medida e pelo comprimento de stock que compraria (comprimentos de 2' inteiros a partir de 8'; passos de 600 mm a partir de 2400 em milímetros), com o número de peças e os board feet. **CSV** transfere-o.

:::warning
As medidas de vergas, vigotas, varedos e vigotas de teto vêm de tabelas predefinidas identificadas para uma habitação típica de um ou dois pisos, não são engenharia. **Propriedades** indica quando um vão ou uma abertura ultrapassa a sua tabela. Um projetista ou engenheiro verifica vãos, cargas e ligações.

Os layouts TJI usam apenas uma tabela que carregar, que criou a partir das tabelas atuais do fabricante; o BimCraft não traz nenhuma. A sugestão não verifica apoios, cargas pontuais, consolas, aberturas, vergas de poço de escada nem ligações, e o perfil em I do modelo é esquemático.
:::

## O que é guardado

Cada parede, piso ou cobertura estruturados é um conjunto de elementos IFC ("Framing"), composto por membros IFC (montantes, soleiras, varedos, linhas de travamento, travamentos, asnas) e vigas (vergas, vigotas, vigotas de bordo, cumeeiras), cada um com a sua medida, comprimento e board feet.
