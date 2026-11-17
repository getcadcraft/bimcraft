---
title: Trabalhar num modelo em conjunto com o Live TeamWork
summary: O que muda no BimCraft enquanto está numa sessão Live TeamWork a partir do CadCraft Studio: as edições de cada pessoa no mesmo modelo IFC, a sua própria anulação e a entrada a partir de um navegador na mesma rede.
keywords: live, live teamwork, studio live, em conjunto, colaborar, sessão, partilhar live, juntar-se, ifc, propriedades, mudar o nome, cursor, ponteiro, ver uns aos outros, nomes, cor, seleção, anular, anfitrião
from: 32061b72
---

## O que vai aprender

O que acontece a um modelo IFC enquanto várias pessoas o editam ao mesmo tempo. O CadCraft Studio inicia e une-se à sessão Live TeamWork (Partilhar, Juntar-se); esta página trata do próprio modelo.

## Todos editam ao mesmo tempo

O modelo do anfitrião chega a todos os que se juntam. Mudar o nome dos elementos, alterar os valores das suas propriedades, colocar, trocar ou remover itens da biblioteca e elementos como de costume. As suas próprias edições aparecem de imediato; as dos outros aparecem um pouco depois de as fazerem. Quando uma edição altera o que vê (um elemento colocado ou removido), o BimCraft redesenha o modelo e mantém a sua vista.

- **Duas pessoas alteram o mesmo elemento:** prevalece a alteração posterior na mesma linha do modelo. Um conjunto de propriedades partilhado por vários elementos é copiado para o elemento que está a editar, como sempre, para que os outros mantenham os seus valores.
- **Um elemento que alguém acabou de remover** já não pode ser editado: a sua edição é anulada e a barra de estado indica o motivo.
- As novas linhas de cada pessoa no modelo recebem números próprios, para que duas pessoas nunca obtenham o mesmo.

## Ver os outros

Cada pessoa na sessão tem uma cor própria. Na vista 3D vê o ponteiro de cada pessoa como uma seta na sua cor, com o nome ao lado, sobre o elemento que está a apontar, e uma caixa a tracejado na mesma cor em redor de cada elemento que selecionou.

Os ponteiros, os nomes e as seleções existem apenas durante a sessão: nunca são guardados no ficheiro nem entram na anulação de ninguém. Deslizam até onde cada pessoa se encontra, para que se mantenham fluidos também numa ligação lenta.

## Anular anula o seu próprio trabalho

{{ui:Anular}} anula a sua última edição e deixa as dos outros intactas. Quando alguém alterou a mesma coisa depois, nada é anulado e a barra de estado indica quem o fez.

## Juntar-se a partir de um navegador

Um colega sem o Studio pode ler, com um telemóvel, tablet ou computador na mesma rede, a imagem sob o código do anfitrião. O BimCraft abre no navegador e abre o modelo do anfitrião assim que este o deixar entrar. Uma ligação de convite permite juntar-se a partir de outra rede: o anfitrião precisa de um lugar do Team Cloud Plan para a aplicação, todos os outros entram gratuitamente, e a ligação só funciona enquanto a sessão do anfitrião estiver aberta.

## Quando a sessão termina

Só o anfitrião guarda o modelo. Todos os outros mantêm uma cópia não guardada: use Guardar como IFC se quiser conservá-la.

:::note
Só o primeiro modelo da cena é partilhado. Abrir outro ficheiro durante uma sessão deixa a sessão na respetiva janela.
:::
