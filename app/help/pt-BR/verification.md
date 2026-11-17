---
title: Marcar elementos como conferidos ou verificados em campo
summary: Um elemento lido de um PDF ou de um escaneamento não é verificado até que você o confira. Marque elementos como conferidos, ou como verificados em campo (LOD 500) com quem mediu, quando e como, e entregue um modelo como construído que indique qual é qual.
keywords: não verificado, verificado, conferido, verificado em campo, como construído, as-built, lod 500, encerramento, entrega, medido no local, trena, laser, escaneamento, levantamento, edifício existente, alteração, marcar como conferido, verificação, etapa 7
from: df35d908
---

## O que você vai fazer

Acompanhe o que, no modelo, alguém realmente examinou. Um elemento tem uma de três marcas, ou nenhuma:

- **Não verificado**: o programa reconheceu o elemento a partir de um PDF, de um desenho escaneado, de um desenho decalcado ou de um escaneamento de nuvem de pontos. Ninguém o conferiu ainda.
- **Conferido**: uma pessoa comparou o elemento com o desenho de onde ele veio.
- **Verificado em campo (LOD 500)**: uma pessoa mediu o elemento no local. Quem, quando e como ficam registrados com ele.
- **Sem marca**: desenhado por uma pessoa. O modelo não faz nenhuma afirmação sobre ele.

## Passos

1. Escolha um elemento ou vários (paredes, portas, janelas, ambientes, qualquer elemento).
2. Em {{ui:Propriedades}}, abra {{ui:Verificação}}.
3. Digite quem conferiu ou mediu. A data é a de hoje, a menos que você a altere.
4. Clique em {{ui:Marcar como conferido}}. Para uma medição no local, escolha como ela foi feita (trena, medidor de distância a laser, escaneamento, levantamento topográfico) e clique em {{ui:Marcar como verificado em campo (LOD 500)}}.
5. {{ui:Marcar como não verificado}} e {{ui:Remover a marca}} desfazem. Cada clique é um passo que você pode desfazer, para a seleção inteira.

Para marcar uma seleção rapidamente: {{ui:Ferramentas}} › {{ui:Marcar como conferido}} (digitado: `MARKCHECKED`) marca a seleção como conferida por você, hoje.

## O que você deve ver

- Na planta, um elemento não verificado tem uma caixa tracejada e um "?"; um elemento verificado em campo tem um visto. Desmarque {{ui:Mostrar marcas de verificação na planta}} na seção {{ui:Auditoria}} para ocultá-las.
- {{ui:Tabelas}} › {{ui:Verificação}} lista cada elemento marcado com seu nível, estado, quem, quando, como e de onde veio.
- A auditoria lista os elementos não verificados, e conta um elemento verificado em campo como LOD 500. Veja [Auditar o modelo](topic:audit-the-model).

## A partir de um escaneamento

Ao comparar um escaneamento com o modelo, {{ui:Marcar os elementos correspondentes como verificados em campo}} marca cada elemento que o escaneamento viu como construído dentro da tolerância, com o método "escaneamento" e a tolerância na nota. Veja [Comparar um escaneamento com o modelo](topic:compare-scan-with-model).

:::warning
Essa comparação associa a caixa de cada elemento a pontos do escaneamento. Não é um levantamento topográfico. Use-a para elementos que você também examinou.
:::

## O modelo como construído e o pacote de entrega

{{ui:Gerar o pacote de entrega}} na guia {{ui:Recursos}} coloca o modelo como construído no zip, com:

- uma declaração no projeto de quantos elementos estão verificados em campo, conferidos, não verificados e sem marca;
- `as-built/verified-elements.csv`: cada elemento e ambiente com seu estado, quem, quando e como;
- `as-built/as-built-drawings.pdf`: o conjunto de desenhos como está agora;
- o registro de alterações dos desenhos, quando o modelo tiver conjuntos emitidos.

Veja [Recursos e manutenção](topic:assets-and-maintenance).

## Como ele é mantido no IFC

Cada elemento marcado carrega o conjunto de propriedades `CadCraft_Verification`: State, By, On, Method, Source, Note e LevelOfDevelopment (`LOD 500` enquanto estiver verificado em campo). São propriedades de texto simples, então outros programas as listam, e Localizar, Colorir por propriedade e as tabelas de etiquetas podem usá-las. A declaração como construído é o conjunto de propriedades `CadCraft_AsBuilt` no projeto. Um elemento sem o conjunto não foi medido no local.

## Próximos passos

- [Paredes a partir de um conjunto de plantas](topic:walls-from-plans)
- [Auditar o modelo](topic:audit-the-model)
