---
title: Paredes a partir de um conjunto de plantas (PDF ou digitalização)
summary: Transformar as páginas de um PDF, ou um desenho digitalizado, em paredes, portas e janelas, com um nível por cada página e a página mantida por baixo de cada planta.
keywords: pdf, plantas, conjunto de plantas, digitalização, desenho digitalizado, tiff, traçado, paredes a partir de um pdf, paredes a partir de uma digitalização, níveis, páginas, escala, portas, janelas, abertura, peitoril, subjacente
from: b70d9db7
---

## O que se faz

Começar um modelo a partir das plantas que tem em papel: um PDF (desenhado como linhas, ou uma digitalização dentro de um PDF) ou uma digitalização (PNG, JPEG, TIFF com uma ou várias páginas). Cada página torna-se as paredes, portas e janelas de um nível.

## Passos

1. Ative {{ui:Desenhar}}. Escolha {{ui:Compilação}} › {{ui:A partir de um desenho…}}, depois {{ui:Escolher um desenho…}} e escolha o PDF ou a digitalização.
2. **Páginas e níveis.** Cada página aparece com o que é (**trabalho de linhas**, ou **uma imagem (traçada)**) e o nível para onde vai: um dos níveis que tem, **um novo nível acima dos outros**, ou **deixar esta página de fora**. As páginas são associadas aos seus níveis por ordem; altere qualquer uma delas.
3. **Escala.** Para um PDF, indique como foi desenhado (**1 : 100**, **1 : 50**…). Para tudo o resto, ou quando não sabe, escolha **a partir de uma distância que conheço**: clique nas duas extremidades de uma cota ou de uma barra de escala na pré-visualização e depois escreva a distância real. Todas as páginas usam a mesma escala.
4. Escolha o **tipo de parede** e a **altura de um novo nível**. Deixe **Manter cada página por baixo da planta do seu nível** marcado para ver cada página como linhas finas por baixo da sua planta.
5. A linha por baixo das escolhas indica quantas paredes, portas e janelas vai criar, e em quantos níveis. Clique em {{ui:Criá-las}}.

## Como lê uma página

- **As paredes** vêm de pares de linhas paralelas com até 600 mm de distância (as duas faces de uma parede); a parede tem a espessura do intervalo. As hachuras e as letras ficam de fora.
- **Portas e janelas.** Um vão numa parede (500 a 2600 mm) com um arco de abertura desenhado ao lado é uma porta, articulada numa extremidade do vão e abrindo para o lado do arco. Um vão ou uma parede com linhas de peitoril é uma janela. Um vão sem nenhum dos dois é uma porta até 1300 mm e uma janela acima disso.
- **Uma digitalização** é primeiro endireitada, quando foi digitalizada torta (a caixa de diálogo indica-o), passada a preto e branco, limpa de manchas e traçada; uma **página de PDF que é uma imagem** é primeiro desenhada e depois tratada da mesma forma. O traçado encontra o centro de cada traço e ajusta-lhe linhas retas e arcos; não usa rede nem modelo treinado.
- **Os compartimentos** surgem sozinhos a partir dos circuitos fechados que as paredes formam. Quando o PDF tem texto, um compartimento toma o nome da letra que está dentro dele (a maior; uma cota, uma escala ou um número de folha não é um nome). Uma digitalização não tem texto, pelo que os seus compartimentos mantêm os nomes que o programa lhes dá.
- **Tudo o que é lido da página fica marcado como não verificado**: cada parede, porta, janela e compartimento tem uma caixa tracejada e um "?" na planta até o verificar. Escolha o que já verificou e use {{ui:Ferramentas}} › {{ui:Marcar como verificado}}. Veja [Marcar elementos como verificados ou verificados em obra](topic:verification).

## O que se deve ver

- As paredes, portas, janelas e compartimentos de cada nível, e os novos níveis, tudo num só passo: {{key:Mod+Z}} desfaz tudo.
- Cada página como linhas finas por baixo da planta do seu nível, listada em {{ui:Compilação}} › {{ui:A partir de um desenho…}} com {{ui:Remover}}.

:::note
Isto é o que as linhas deram, com a precisão da página. Uma digitalização pode perder uma parede ténue, juntar duas paredes muito próximas, ou encontrar uma parede numa mancha; um arco de abertura que o desenho não mostra transforma um vão numa porta simples. Verifique cada nível contra a página antes de confiar nele, e corrija o que estiver errado com as ferramentas {{ui:Parede}}, {{ui:Porta}} e {{ui:Janela}}.
:::
