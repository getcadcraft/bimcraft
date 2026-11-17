---
title: Trocar um item posicionado e atualizar itens da biblioteca
summary: Substitua um item da biblioteca posicionado por outro, mantendo seu lugar e seu número de item, e verifique na Biblioteca versões mais recentes de tudo o que há no modelo.
keywords: trocar, substituir, substituto, atualizar, versão mais recente, verificar atualizações, biblioteca, retirado, mudança de licença, número do item
from: 8bdfe01d
---

## O que você vai fazer

Mude de ideia sobre um item sem movê-lo novamente, e mantenha atualizados os itens da biblioteca de um modelo.

## Trocar um item

1. Clique em um item da biblioteca posicionado no modelo.
2. Em {{ui:Propriedades}}, clique em {{ui:Trocar item…}} na caixa **Item da biblioteca**. A guia {{ui:Biblioteca}} se abre.
3. Encontre o novo item e clique no seu cartão.
4. Clique em {{ui:Trocar … por este}}.

O elemento mantém seu lugar, giro, pavimento, número de item, quantidade e notas. Seu tipo, forma e dados do item mudam para os do novo item. Itens posicionados da mesma forma compartilham um tipo, como ao posicioná-los.

Um item que tem variantes (veja [Posicionar e trocar um item da biblioteca que tem variantes](topic:library-variants)) lista suas outras variantes no topo da guia {{ui:Biblioteca}} ao ser trocado: um clique para cada uma.

Quando o novo item é outro tipo de coisa, por exemplo uma pia no lugar de uma mesa, a classe IFC do elemento muda para corresponder (aqui, de elemento de mobiliário para terminal sanitário), para que outros softwares o programem corretamente. Continua sendo o mesmo elemento, com o mesmo GlobalId, então os vínculos para ele continuam válidos. {{key:Mod+Z}} restaura a classe antiga junto com o item antigo.

## Verificar atualizações

1. Clique em {{ui:Atualizações}} na barra de ferramentas (ou em {{ui:Verificar atualizações}} na caixa de um item da biblioteca).
2. Leia a lista: cada item da Biblioteca no modelo, com sua versão no modelo, a versão mais recente e um status: **Atualizado**, **Versão mais recente**, **Retirado** ou **Não encontrado**. Ela também diz o que mudou (geometria, dados, licença ou uma correção).
3. Clique em {{ui:Atualizar}} em uma linha, ou em {{ui:Atualizar tudo}}.

## O que você deve ver

- "Atualizados *n* posicionamentos. Posições, números de itens, quantidades e notas são mantidos."
- Linhas "Atualizado: *item*" na lista de alterações. {{key:Mod+Z}} desfaz cada uma.

## Bom saber

- Só itens vindos da Biblioteca podem ser verificados. Itens de arquivos não trazem um id da biblioteca.
- Quando uma licença mudou, a cópia que você já posicionou mantém a licença com que veio até você atualizá-la.
- Um item **Retirado** não é oferecido para novos posicionamentos. Um retirado por motivos de direitos autorais não pode ser baixado; substitua-o com {{ui:Trocar item…}}.
- Uma variante posicionada continua sendo essa variante quando a versão mais recente do item ainda a tem; caso contrário, assume a variante padrão do item.
- A verificação envia apenas os ids e as versões dos itens, nunca o seu modelo.
