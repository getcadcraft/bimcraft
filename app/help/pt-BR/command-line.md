---
title: A linha de comando na barra de status
summary: Em um layout com linha de comando, digite em qualquer lugar e as letras caem na linha embaixo. Ela lista o que coincide, mantém um histórico e nunca cobre o desenho.
keywords: linha de comando, digitar em qualquer lugar, comando digitado, barra de status, histórico, teclas de seta, enter, espaço, WALL, DOOR, layout Duncan, layout Rhino, atalho, teclas, localizador de comandos
from: d583b52d
---

## O que você vai fazer

Execute ferramentas digitando os nomes delas, sem precisar clicar antes em uma caixa.

## Passos

1. Escolha um layout que tenha linha de comando: abra {{ui:Configurações}}, escolha {{ui:Geral}} e depois {{ui:Layout}}, e escolha **Duncan** (ou **Rhino**). A linha fica na barra de status na parte inferior da janela.
2. Com o ponteiro em qualquer lugar e nenhuma caixa em uso, digite `wall`. As letras aparecem na linha de comando, e uma lista acima dela mostra os comandos que coincidem.
3. Pressione {{key:Enter}}. A ferramenta Parede começa.
4. Clique na linha de comando (ou pressione uma tecla de novo). Com a linha vazia, a lista mostra os comandos que você digitou antes. {{key:Up}} e {{key:Down}} percorrem a lista; {{key:Enter}} executa o que está destacado.

## O que você pode digitar

- Uma palavra de comando do estilo de menu em uso, quando o estilo tem (`WALL`, `WA`, `DOOR` no estilo Desenho).
- A tecla de um comando, como palavra: `W` seguido de {{key:Enter}} ou {{key:Space}} é Parede, `D` é Porta.
- O nome de um comando, com ou sem espaços: `split wall`, `wallrectangle`.
- O início de uma palavra ou nome, quando só um comando começa assim.
- Qualquer outra coisa abre o localizador de comandos com o que você digitou.

## Bom saber

- {{key:Esc}} esvazia a linha e devolve as teclas ao desenho.
- Nesses layouts, uma letra sozinha não inicia mais uma ferramenta por conta própria: ela espera na linha por {{key:Enter}} ou {{key:Space}}. Teclas com {{key:Ctrl}}, as teclas de função, {{key:Delete}} e {{key:Esc}} funcionam como antes. Nos outros layouts nada muda.
- Enquanto uma ferramenta de desenho está em execução, os dígitos ficam com a ferramenta (um comprimento digitado).
- Digitar em uma caixa, em uma caixa de diálogo ou nas Configurações fica por lá.
- O histórico fica guardado neste computador, com 50 comandos para cada aplicativo.
