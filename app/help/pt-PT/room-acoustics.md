---
title: Verificar a reverberação de um compartimento e ouvi-lo
summary: Tempo de reverberação por banda de oitava de cada compartimento (Sabine e Eyring) a partir da sua dimensão e dos acabamentos, de um objetivo próprio, e de uma voz, palmas ou música reproduzidas através de uma resposta ao impulso calculada para o compartimento.
keywords: acústica, reverberação, tempo de reverberação, rt60, sabine, eyring, absorção, eco, som, ouvir, resposta ao impulso, fala, sala de aula, escritório, alcatifa, placa de teto, ruído
from: 16996cbb
---

A secção {{ui:Room acoustics}} do painel esquerdo calcula durante quanto tempo o som persiste em cada compartimento. Lê a área do pavimento, a altura, as paredes, as portas e as janelas de cada compartimento a partir do modelo IFC aberto. Nenhum elemento do modelo é alterado.

## Escolher os acabamentos

Quando o modelo indica o que cobre uma superfície, o compartimento lê essa informação: a camada interior do tipo de cada parede (gesso, reboco, tijolo, betão e bloco são reconhecidos), o tipo de piso (madeira ou betão) e se um teto é de placas. A etiqueta ao lado de cada escolha indica se vem do modelo, de uma predefinição ou da sua escolha; escolha outro acabamento para a substituir. O que o modelo não indica fica com a predefinição. Os coeficientes são **valores típicos publicados**; substitua-os pelos dados de ensaio de um produto quando os tiver. Escreva um **objetivo** (o tempo de reverberação de médias frequências mais longo que deseja) e qualquer compartimento que o ultrapasse fica com um aviso, com a absorção que o faria descer.

## Ler a tabela

A reverberação é apresentada de 125 Hz a 4 kHz. Sabine aplica-se a compartimentos vivos e Eyring a compartimentos mortos; a linha marcada *Usado* usa Eyring quando a absorção média é superior a 0.2. A absorção do ar está incluída (encurta as bandas agudas em compartimentos grandes). É um modelo estatístico: assume que o som se espalha de forma uniforme, pelo que compartimentos longos ou planos e compartimentos muito pequenos são apenas uma orientação aproximada, e o mobiliário, as pessoas e as portas abertas não são contabilizados.

## Ouvir

{{ui:Play it in this room}} reproduz uma voz (gerada aqui), palmas, notas dedilhadas ou **um ficheiro de som seu** (fica no seu computador) através de uma resposta ao impulso calculada para o compartimento: o som direto, as primeiras reflexões de uma caixa desse tamanho e uma cauda que se extingue ao tempo de reverberação próprio do compartimento em cada banda. {{ui:Play it dry}} reproduz o mesmo som, ao mesmo nível, sem o compartimento. Pode guardar a resposta ao impulso ou o som do compartimento em ficheiros WAV. Soa a um compartimento desse tamanho e acabamento, não a nenhum compartimento real.

## Pessoas e mobiliário

Escreva o número de **pessoas neste compartimento** para somar a respetiva absorção. O mobiliário que o modelo contém (sofás, camas, cadeiras, mesas, guarda-roupas, identificados pelo nome) acrescenta a sua própria. Os valores são aproximações de planeamento, arredondadas; substitua-os por medições num compartimento que seja importante.

## Fonte e ouvinte

Em {{ui:Source and listener}}, prima {{ui:Place the source}} ou {{ui:Place the listener}} e clique na planta do compartimento. O som que reproduz passa a ouvir-se a partir desse ponto: o som direto chega após a distância, e a parte reverberante fica ao nível dessa distância. Limpe ambos para voltar à caixa de distância.

## Absorção irregular e modos do compartimento

Em {{ui:Uneven absorption (box room)}}, escreva o compartimento como uma caixa e escolha os acabamentos do piso, do teto e das paredes. A tabela acrescenta Fitzroy e Arau-Puchades a Sabine e Eyring: tratam separadamente os três pares de superfícies opostas, pelo que um compartimento com alcatifa e teto duro não é lido como demasiado curto. Quando os pares diferem muito, uma nota indica em qual confiar. Abaixo da tabela, **Modos do compartimento** lista as ondas estacionárias mais baixas da caixa e a frequência abaixo da qual o compartimento tem modos próprios em vez de um campo sonoro uniforme. São previsões para um compartimento em forma de caixa, uma ajuda ao projeto e não uma medição.

## Unidades

As áreas, alturas, volumes e distâncias dos compartimentos são apresentados nas {{ui:Units}} que escolheu (pés quadrados e cúbicos, polegadas, milímetros, centímetros ou metros). O cálculo em si mantém-se em SI; só a apresentação muda. Os tempos (segundos), as frequências e os níveis não mudam.
