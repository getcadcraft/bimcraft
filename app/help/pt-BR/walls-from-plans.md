---
title: Paredes a partir de um conjunto de plantas (PDF ou digitalização)
summary: Transforme as páginas de um PDF, ou de um desenho digitalizado, em paredes, portas e janelas, um nível por página, com a página mantida sob cada planta.
keywords: pdf, plantas, conjunto de plantas, digitalização, desenho digitalizado, tiff, traçar, paredes a partir de um pdf, paredes a partir de uma digitalização, níveis, páginas, escala, portas, janelas, sentido de abertura, peitoril, subjacente
from: b70d9db7
---

## O que você vai fazer

Comece um modelo a partir das plantas que você tem no papel: um PDF (desenhado como linhas, ou uma digitalização dentro de um PDF) ou uma digitalização (PNG, JPEG, TIFF com uma ou várias páginas). Cada página vira as paredes, portas e janelas de um nível.

## Passos

1. Ative {{ui:Draw}}. Escolha {{ui:Build}} › {{ui:From a drawing…}}, depois {{ui:Choose a drawing…}} e escolha o PDF ou a digitalização.
2. **Páginas e níveis.** Cada página aparece listada com o que é (**desenho de linhas**, ou **uma imagem (traçada)**) e o nível para onde vai: um dos níveis que você tem, **um novo nível acima dos outros**, ou **deixar esta página de fora**. As páginas são associadas aos seus níveis em ordem; altere qualquer uma delas.
3. **Escala.** Para um PDF, informe como ele foi desenhado (**1 : 100**, **1 : 50**…). Para qualquer outro caso, ou quando você não sabe, escolha **a partir de uma distância que eu conheço**: clique nas duas extremidades de uma cota ou de uma barra de escala na prévia, depois digite a distância real. Todas as páginas usam essa única escala.
4. Escolha o **tipo de parede** e a **altura de um novo nível**. Deixe **Manter cada página sob a planta do seu nível** marcado para ver cada página como linhas finas sob a sua planta.
5. A linha sob as opções diz quantas paredes, portas e janelas serão criadas, e em quantos níveis. Clique em {{ui:Make them}}.

## Como ele lê uma página

- **Paredes** vêm de pares de linhas paralelas com até 600 mm de distância (as duas faces de uma parede); a parede tem a espessura do vão. Hachuras e textos ficam de fora.
- **Portas e janelas.** Um vão em uma parede (500 a 2600 mm) com um arco de abertura desenhado ao lado é uma porta, articulada em uma extremidade do vão e abrindo para o lado do arco. Um vão, ou uma parede, com linhas de peitoril nele é uma janela. Um vão sem nenhum dos dois é uma porta até 1300 mm e uma janela acima disso.
- **Uma digitalização** é primeiro endireitada se foi digitalizada torta (a caixa de diálogo avisa), tornada preto e branco, limpa de manchas e traçada; uma **página de PDF que é uma imagem** é primeiro desenhada e depois tratada da mesma forma. O traçado encontra o centro de cada traço e ajusta linhas retas e arcos a ele, e não usa rede nem modelo treinado.
- **Ambientes** seguem sozinhos dos laços fechados que as paredes formam. Quando o PDF tem texto, um ambiente recebe seu nome a partir do texto dentro dele (o maior; uma cota, uma escala ou um número de folha não é um nome). Uma digitalização não tem texto, então seus ambientes mantêm os nomes que o programa lhes dá.
- **Tudo o que é lido da página é marcado como não verificado**: cada parede, porta, janela e ambiente tem uma caixa tracejada e um "?" na planta até você conferir. Selecione o que você conferiu e use {{ui:Tools}} › {{ui:Mark as checked}}. Veja [Marcar elementos como conferidos ou verificados em campo](topic:verification).

## O que você deve ver

- As paredes, portas, janelas e ambientes de cada nível, e quaisquer níveis novos, tudo como um só passo: {{key:Mod+Z}} desfaz tudo.
- Cada página como linhas finas sob a planta do seu nível, listada em {{ui:Build}} › {{ui:From a drawing…}} com {{ui:Remove}}.

:::note
Isto é o que as linhas deram, na precisão da página. Uma digitalização pode perder uma parede fraca, unir duas paredes muito próximas, ou encontrar uma parede em uma mancha; um sentido de abertura que o desenho não mostra transforma um vão em uma porta simples. Confira cada nível com a página antes de confiar nele, e corrija o que estiver errado com as ferramentas {{ui:Wall}}, {{ui:Door}} e {{ui:Window}}.
:::
