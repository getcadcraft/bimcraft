---
title: Combinar as edições de duas pessoas num modelo
summary: Deixe o git, o Fossil ou o Mercurial combinar duas cópias editadas do mesmo modelo IFC, objeto a objeto, para que duas pessoas possam desenhar o mesmo edifício e juntar o trabalho.
keywords: combinar, merge, git, fossil, mercurial, controlo de versões, conflito, três vias, cadcraft merge, gitattributes, ifc, globalid, equipa, duas cópias, ramos
from: 50733df8
---

Duas pessoas tiram uma cópia do mesmo edifício: uma desenha a ala este e a outra a ala oeste, e mais tarde as cópias têm de passar a ser uma só. Se tocaram em objetos diferentes, um programa pode fazê-lo em vez de uma pessoa.

## O que o torna possível

Cada parede, porta, piso, compartimento e conjunto de propriedades num ficheiro IFC tem um GlobalId que nunca muda. A combinação procura os objetos por esse identificador, e não pelo número que o ficheiro lhes dá (`#123`), porque os números mudam quando um programa guarda. As partes ligadas a um objeto que não têm identificador próprio (posicionamentos, formas, unidades) são comparadas pelo seu conteúdo.

Ambas as cópias têm de ser da mesma versão do IFC (2x3, 4 ou 4.3). A combinação mantém o seu ficheiro tal como está, a sua ordem e os seus números, e acrescenta o que é novo; por isso, um diff do git da combinação mostra apenas o que a combinação alterou.

## Configurar

O git precisa de duas linhas, uma vez por repositório:

```
# .gitattributes
*.ifc merge=cadcraft

# uma vez, em cada computador
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sem git, execute `cadcraft merge <base> <ours> <theirs>`. O Fossil e o Mercurial recebem os mesmos três ficheiros na sua própria definição de ferramenta de combinação. Nada é enviado; tudo corre no seu computador.

## As regras

- Um atributo alterado de um só lado é aceite. A mesma alteração dos dois lados é aceite uma vez.
- O mesmo atributo alterado de duas formas (o mesmo piso renomeado de duas maneiras) é um **conflito**: o seu lado mantém-se e o relatório lista ambos. Abra o resultado e corrija-o à mão.
- Uma lista de coisas (as paredes de um piso, as propriedades de um conjunto) combina-se como um conjunto: o que qualquer dos lados acrescentou é mantido, e o que qualquer dos lados removeu é removido. Duas pessoas que acrescentam cada uma paredes ao mesmo piso não entram em conflito.
- Um objeto acrescentado de qualquer lado é mantido, com a sua forma e propriedades. Removido de um lado e intacto do outro: removido. Removido de um lado e alterado do outro: removido, e comunicado no relatório.
- A data e o autor do ficheiro, e o histórico de proprietário de cada objeto, mantêm-se os seus.

A geometria é combinada por inteiro: a forma de uma parede vem de um dos lados, nunca misturada ponto a ponto. Os ficheiros IFC comprimidos (zip) e IFCX não são combinados. Depois de uma combinação, abra o resultado no BimCraft e veja o painel de Problemas antes de guardar.
