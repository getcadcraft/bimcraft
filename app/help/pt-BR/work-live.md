---
title: Trabalhar em um modelo juntos com Live TeamWork
summary: O que muda no BimCraft enquanto você está em uma sessão Live TeamWork pelo CadCraft Studio: as edições de todos no mesmo modelo IFC, o seu próprio desfazer e a entrada por um navegador na mesma rede.
keywords: live, live teamwork, studio live, juntos, colaborar, sessão, compartilhar live, participar, ifc, propriedades, renomear, cursor, ponteiro, ver uns aos outros, nomes, cor, seleção, desfazer, anfitrião
from: 32061b72
---

## O que você vai aprender

O que acontece com um modelo IFC quando várias pessoas o editam ao mesmo tempo. O CadCraft Studio inicia e entra na sessão Live TeamWork (Compartilhar, Participar); esta página trata do próprio modelo.

## Todos editam ao mesmo tempo

O modelo do anfitrião chega a todos que entram. Renomeie elementos, altere os valores das propriedades, posicione, troque ou remova itens da biblioteca e elementos como de costume. As suas próprias edições aparecem imediatamente; as dos outros aparecem logo depois que eles as fazem. Quando uma edição muda o que você vê (um elemento posicionado ou removido), o BimCraft redesenha o modelo e mantém a sua vista.

- **Duas pessoas alteram um elemento:** vale a alteração mais recente na mesma linha do modelo. Um conjunto de propriedades compartilhado por vários elementos é copiado para o elemento que você edita, como sempre, para que os outros mantenham os seus valores.
- **Um elemento que alguém acabou de remover** não pode mais ser editado: a sua edição é desfeita, e a barra de status informa o motivo.
- As novas linhas de cada pessoa no modelo recebem números próprios, então duas pessoas nunca criam o mesmo número.

## Ver uns aos outros

Cada pessoa na sessão tem uma cor própria. Na vista 3D, você vê o ponteiro de cada pessoa como uma seta na cor dela, com o nome ao lado, sobre o elemento para o qual ela aponta, e uma caixa tracejada na cor dela ao redor de cada elemento que ela selecionou.

Ponteiros, nomes e seleções existem apenas durante a sessão: nunca são salvos no arquivo e nunca entram no desfazer de ninguém. Eles deslizam até onde cada pessoa está, então continuam suaves mesmo em uma conexão lenta.

## O desfazer vale só para o seu trabalho

{{ui:Desfazer}} desfaz a sua última edição e deixa as dos outros intactas. Quando alguém alterou a mesma coisa depois, nada é desfeito e a barra de status informa quem.

## Participar por um navegador

Um colega sem o Studio pode escanear, com um celular, tablet ou computador na mesma rede, a imagem abaixo do código do anfitrião. O BimCraft abre no navegador e abre o modelo do anfitrião assim que ele deixar você entrar. Um link de convite permite que alguém participe por outra rede: o anfitrião precisa de uma licença de usuário do Team Cloud Plan para o aplicativo; todos os outros entram sem custo, e o link só funciona enquanto a sessão do anfitrião estiver aberta.

## Quando a sessão termina

Só o anfitrião salva o modelo. Todos os outros mantêm uma cópia não salva: use Salvar como IFC se quiserem guardá-la.

:::note
Só o primeiro modelo da cena é compartilhado. Abrir outro arquivo durante uma sessão deixa a sessão nessa janela.
:::
