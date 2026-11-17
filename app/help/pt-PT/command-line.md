---
title: A linha de comandos na barra de estado
summary: Num esquema com linha de comandos, basta escrever em qualquer sítio para as letras aparecerem na linha em baixo. Lista o que corresponde, guarda o histórico e nunca tapa o desenho.
keywords: linha de comandos, escrever em qualquer sítio, comando escrito, barra de estado, histórico, teclas de seta, enter, espaço, WALL, DOOR, esquema Duncan, esquema Rhino, atalho, teclas, localizador de comandos
from: d583b52d
---

## O que vai fazer

Executar as ferramentas escrevendo os seus nomes, sem clicar primeiro numa caixa.

## Passos

1. Escolha um esquema que tenha linha de comandos: abra {{ui:Definições}}, escolha {{ui:Global}}, depois {{ui:Esquema}}, e escolha **Duncan** (ou **Rhino**). A linha fica na barra de estado, na parte inferior da janela.
2. Com o ponteiro em qualquer ponto e sem nenhuma caixa em uso, escreva `wall`. As letras aparecem na linha de comandos e uma lista por cima mostra os comandos que correspondem.
3. Prima {{key:Enter}}. A ferramenta Parede começa.
4. Clique na linha de comandos (ou volte a premir uma tecla). Com a linha vazia, a lista mostra os comandos que escreveu antes. {{key:Up}} e {{key:Down}} percorrem-nos; {{key:Enter}} executa o que está mostrado.

## O que pode escrever

- Uma palavra de comando do estilo de menu em uso, quando o estilo as tem (`WALL`, `WA`, `DOOR` no estilo Desenho).
- A tecla de um comando, como palavra: `W` seguido de {{key:Enter}} ou {{key:Space}} é Parede, `D` é Porta.
- O nome de um comando, com ou sem espaços: `split wall`, `wallrectangle`.
- O início de uma palavra ou de um nome, quando só um comando começa assim.
- Qualquer outra coisa abre o localizador de comandos com o que escreveu.

## Bom saber

- {{key:Esc}} esvazia a linha e devolve as teclas ao desenho.
- Nestes esquemas, uma única letra já não inicia uma ferramenta por si só: fica na linha à espera de {{key:Enter}} ou {{key:Space}}. As teclas com {{key:Ctrl}}, as teclas de função, {{key:Delete}} e {{key:Esc}} funcionam como antes. Nos outros esquemas nada muda.
- Enquanto uma ferramenta de desenho está a correr, os algarismos ficam com a ferramenta (um comprimento escrito).
- Escrever numa caixa, numa caixa de diálogo ou nas Definições fica nesse sítio.
- O histórico fica guardado neste computador, com 50 comandos por cada aplicação.
