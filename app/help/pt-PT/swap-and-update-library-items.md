---
title: Trocar um item colocado e atualizar itens da biblioteca
summary: Substitua um item da biblioteca colocado por outro, mantendo o seu lugar e número de item, e verifique em Biblioteca se há versões mais recentes de tudo o que está no modelo.
keywords: trocar, substituir, substituto, atualizar, versão mais recente, procurar atualizações, biblioteca, retirado, alteração de licença, número de item
from: 8bdfe01d
---

## O que vai fazer

Mude de ideias sobre um item sem o voltar a mover, e mantenha atuais os itens da biblioteca de um modelo.

## Trocar um item

1. Clique num item da biblioteca colocado no modelo.
2. Em {{ui:Properties}}, clique em {{ui:Swap item…}} na caixa **Item da biblioteca**. O separador {{ui:Library}} abre-se.
3. Encontre o novo item e clique no seu cartão.
4. Clique em {{ui:Swap … to this}}.

O elemento mantém o seu lugar, orientação, piso, número de item, quantidade e notas. O seu tipo, forma e dados do item passam a ser os do novo item. Os itens colocados da mesma forma partilham um tipo, como quando os coloca.

Um item que tem variantes (veja [Colocar e trocar um item da biblioteca que tem variantes](topic:library-variants)) lista as suas outras variantes no topo do separador {{ui:Library}} quando o troca: um clique em cada uma.

Quando o novo item é de outro tipo, por exemplo um lava-loiça no lugar de uma mesa, a classe IFC do elemento muda para corresponder (aqui, de elemento de mobiliário para terminal sanitário), para que outro software o organize corretamente. Continua a ser o mesmo elemento, com o mesmo GlobalId, por isso as ligações a ele continuam a funcionar. {{key:Mod+Z}} repõe a classe antiga com o item antigo.

## Procurar atualizações

1. Clique em {{ui:Updates}} na barra de ferramentas (ou em {{ui:Check for updates}} na caixa de um item da biblioteca).
2. Leia a lista: cada item da Biblioteca no modelo, com a sua versão no modelo, a versão mais recente e um estado: **Atualizado**, **Versão mais recente**, **Retirado** ou **Não encontrado**. Também indica o que mudou (geometria, dados, licença ou uma correção).
3. Clique em {{ui:Update}} numa linha, ou em {{ui:Update all}}.

## O que deve ver

- "Atualizados *n* posicionamentos. Posições, números de item, quantidades e notas são mantidos."
- Linhas "Atualizado: *item*" na lista de alterações. {{key:Mod+Z}} anula cada uma.

## Bom saber

- Só se podem verificar itens que vieram da Biblioteca. Os itens vindos de ficheiros não trazem um id da biblioteca.
- Quando uma licença mudou, a cópia que já colocou mantém a licença com que veio até a atualizar.
- Um item **Retirado** não é oferecido para novas colocações. Um item retirado por motivos de direitos de autor não pode ser transferido de todo; substitua-o com {{ui:Swap item…}}.
- Uma variante colocada mantém-se essa variante quando a versão mais recente do item ainda a inclui; caso contrário, toma a variante predefinida do item.
- A verificação envia apenas os ids e as versões dos itens, nunca o seu modelo.
