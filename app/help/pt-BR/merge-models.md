---
title: Mesclar as edições de duas pessoas em um modelo
summary: Deixe o git, o Fossil ou o Mercurial mesclarem duas cópias editadas do mesmo modelo IFC objeto por objeto, para que duas pessoas possam desenhar no mesmo edifício e juntar o trabalho.
keywords: mesclar, git, fossil, mercurial, controle de versão, conflito, três vias, cadcraft merge, gitattributes, ifc, globalid, equipe, duas cópias, ramificações
from: 50733df8
---

Duas pessoas pegam uma cópia do mesmo edifício: uma desenha a ala leste e a outra, a ala oeste. Depois as cópias precisam virar uma só. Se elas tocaram objetos diferentes, um programa pode fazer isso no lugar de uma pessoa.

## Como funciona

Toda parede, porta, nível, ambiente e conjunto de propriedades em um arquivo IFC tem um GlobalId que nunca muda. A mesclagem procura os objetos por esse id, não pelo número que o arquivo lhes dá (`#123`), porque os números mudam quando um programa salva. As partes ligadas a um objeto que não têm id próprio (posicionamentos, formas, unidades) são comparadas pelo que contêm.

As duas cópias precisam ser da mesma versão IFC (2x3, 4 ou 4.3). A mesclagem mantém o seu arquivo como está, com sua ordem e seus números, e acrescenta o que é novo; assim, um git diff da mesclagem mostra apenas o que ela alterou.

## Configurar

O git precisa de duas linhas, uma vez por repositório:

```
# .gitattributes
*.ifc merge=cadcraft

# uma vez, em cada computador
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Sem o git, execute `cadcraft merge <base> <ours> <theirs>`. O Fossil e o Mercurial recebem os mesmos três arquivos na configuração de ferramenta de mesclagem deles. Nada é enviado; tudo roda no seu computador.

## As regras

- Um atributo alterado de um só lado é aceito. A mesma alteração nos dois lados é aceita uma vez.
- O mesmo atributo alterado de duas formas (o mesmo nível renomeado de duas formas) é um **conflito**: o seu lado permanece e o relatório lista os dois. Abra o resultado e corrija à mão.
- Uma lista de itens (as paredes de um nível, as propriedades de um conjunto) é mesclada como um conjunto: o que qualquer lado acrescentou é mantido e o que qualquer lado removeu é removido. Duas pessoas que acrescentam paredes ao mesmo nível não entram em conflito.
- Um objeto acrescentado de qualquer lado é mantido, com sua forma e suas propriedades. Removido de um lado e sem alteração do outro: removido. Removido de um lado e alterado do outro: removido, e informado no relatório.
- A data e o autor do arquivo, e o histórico de propriedade de cada objeto, permanecem os seus.

A geometria é mesclada inteira: a forma de uma parede vem de um lado só, nunca misturada ponto a ponto. Arquivos IFC e IFCX compactados não são mesclados. Depois de uma mesclagem, abra o resultado no BimCraft e veja o painel de {{ui:Problemas}} antes de salvar.
