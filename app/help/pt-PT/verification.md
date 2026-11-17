---
title: Marcar elementos como verificados ou verificados no local
summary: Um elemento lido de um PDF ou de uma digitalização não está verificado até o verificar. Marque elementos como verificados, ou como verificados no local (LOD 500) com quem os mediu, quando e como, e entregue um modelo como construído que indique qual é qual.
keywords: não verificado, verificado, verificado, verificado no local, como construído, as-built, lod 500, encerramento, entrega, medido no local, fita métrica, laser, digitalização, levantamento, edifício existente, alteração, marcar como verificado, verificação, fase 7
from: df35d908
---

## O que vai fazer

Acompanhe o que no modelo alguém efetivamente observou. Um elemento tem uma de três marcas, ou nenhuma:

- **Não verificado**: o programa reconheceu-o a partir de um PDF, de um desenho digitalizado, de um desenho vetorizado ou de uma digitalização de nuvem de pontos. Ninguém o verificou ainda.
- **Verificado**: uma pessoa comparou-o com o desenho de origem.
- **Verificado no local (LOD 500)**: uma pessoa mediu-o no local. Quem, quando e como ficam guardados com ele.
- **Sem marca**: desenhado por uma pessoa. O modelo não faz nenhuma afirmação sobre ele.

## Passos

1. Escolha um elemento ou vários (paredes, portas, janelas, compartimentos, qualquer elemento).
2. Em {{ui:Propriedades}}, abra {{ui:Verificação}}.
3. Escreva quem verificou ou mediu. A data é a de hoje, a menos que a altere.
4. Clique em {{ui:Marcar como verificado}}. Para uma medição no local, escolha como foi medida (fita métrica, medidor de distância a laser, digitalização, levantamento) e clique em {{ui:Marcar como verificado no local (LOD 500)}}.
5. {{ui:Marcar como não verificado}} e {{ui:Retirar a marca}} desfazem. Cada clique é um passo que pode anular, para a seleção inteira.

Para marcar uma seleção rapidamente: {{ui:Ferramentas}} › {{ui:Marcar como verificado}} (escrito: `MARKCHECKED`) marca-a como verificada por si, hoje.

## O que deve ver

- Na planta, um elemento não verificado tem uma caixa a tracejado e um "?"; um verificado no local tem um visto. Desmarque {{ui:Mostrar as marcas de verificação na planta}} na secção {{ui:Auditoria}} para as ocultar.
- {{ui:Mapas}} › {{ui:Verificação}} lista cada elemento marcado com o seu piso, estado, quem, quando, como e de onde provém.
- A auditoria lista os elementos não verificados e conta um elemento verificado no local como LOD 500. Ver [Auditar o modelo](topic:audit-the-model).

## A partir de uma digitalização

Ao comparar uma digitalização com o modelo, {{ui:Marcar os elementos correspondentes como verificados no local}} marca cada elemento que a digitalização viu como construído dentro da tolerância, com o método "scan" e a tolerância na nota. Ver [Comparar uma digitalização com o modelo](topic:compare-scan-with-model).

:::warning
Essa comparação associa a caixa de cada elemento a pontos da digitalização. Não é um levantamento. Use-a para elementos que também tenha observado.
:::

## O modelo como construído e o pacote de entrega

{{ui:Criar o pacote de entrega}} no separador {{ui:Recursos}} coloca o modelo como construído no zip, com:

- uma declaração no projeto sobre quantos elementos estão verificados no local, verificados, não verificados e sem marca;
- `as-built/verified-elements.csv`: cada elemento e compartimento com o seu estado, quem, quando e como;
- `as-built/as-built-drawings.pdf`: o conjunto de desenhos tal como está agora;
- o registo de alterações dos desenhos, quando o modelo tiver conjuntos emitidos.

Ver [Recursos e manutenção](topic:assets-and-maintenance).

## Como fica guardado no IFC

Cada elemento marcado tem o conjunto de propriedades `CadCraft_Verification`: State, By, On, Method, Source, Note e LevelOfDevelopment (`LOD 500` enquanto estiver verificado no local). São propriedades de texto simples, pelo que outros programas as listam, e Localizar, Cor por propriedade e mapas de etiquetas podem usá-las. A declaração como construído é o conjunto de propriedades `CadCraft_AsBuilt` no projeto. Um elemento sem o conjunto não foi medido no local.

## Seguinte

- [Paredes a partir de um conjunto de plantas](topic:walls-from-plans)
- [Auditar o modelo](topic:audit-the-model)
