---
title: Verifique a reverberação de um ambiente e ouça-o
summary: Tempo de reverberação por banda de oitava para cada ambiente (Sabine e Eyring), a partir do seu tamanho e dos acabamentos, de uma meta sua e de uma voz, uma palma ou música reproduzida por uma resposta ao impulso calculada do ambiente.
keywords: acústica, reverberação, tempo de reverberação, rt60, sabine, eyring, absorção, eco, som, ouvir, resposta ao impulso, fala, sala de aula, escritório, carpete, forro de placas, ruído
from: 16996cbb
---

A seção {{ui:Acústica de ambientes}} do painel esquerdo calcula por quanto tempo o som permanece em cada ambiente. Ela lê a área do piso, a altura, as paredes, as portas e as janelas de cada ambiente a partir do modelo IFC aberto. Nada no modelo é alterado.

## Escolha os acabamentos

Quando o modelo informa o que cobre uma superfície, o ambiente lê essa informação: a camada interna do tipo de cada parede (gesso, reboco, tijolo, concreto e bloco são reconhecidos), o tipo de piso (madeira ou concreto) e se o forro é de placas. O rótulo ao lado de cada escolha indica se ela vem do modelo, se é um padrão ou se foi escolhida por você; escolha outro acabamento para substituí-la. O que o modelo não informa permanece no padrão. Os coeficientes são **valores típicos publicados**; substitua-os pelos dados de ensaio de um produto quando os tiver. Digite uma **meta** (o maior tempo de reverberação em frequências médias que você deseja), e qualquer ambiente acima dela será indicado como aviso, com a absorção que o trará de volta ao limite.

## Leia a tabela

A reverberação é apresentada de 125 Hz a 4 kHz. Sabine é adequado para ambientes vivos e Eyring para ambientes mortos; a linha marcada *Usado* adota Eyring quando a absorção média é superior a 0.2. A absorção do ar está incluída (ela reduz as bandas agudas em ambientes grandes). É um modelo estatístico: ele supõe que o som se espalha de modo uniforme, então ambientes longos ou achatados e ambientes muito pequenos são uma referência aproximada, e móveis, pessoas e portas abertas não são contados.

## Ouvir

{{ui:Reproduzir neste ambiente}} reproduz uma voz (feita aqui), uma palma, notas dedilhadas ou **seu próprio arquivo de som** (ele fica no seu computador) por meio de uma resposta ao impulso calculada para o ambiente: o som direto, as primeiras reflexões de uma caixa desse tamanho e uma cauda que se extingue no tempo de reverberação próprio do ambiente em cada banda. {{ui:Reproduzir seco}} reproduz o mesmo som, no mesmo nível, sem o ambiente. Você pode salvar a resposta ao impulso ou o som no ambiente como arquivos WAV. Ele soa como um ambiente desse tamanho e acabamento, não como um ambiente real qualquer.

## Pessoas e mobiliário

Digite o número de **pessoas neste ambiente** para somar a absorção delas. O mobiliário que o modelo contém (sofás, camas, cadeiras, mesas, guarda-roupas, encontrados pelo nome) soma a sua própria. Os valores são estimativas de planejamento, arredondadas; substitua-os por medições em um ambiente importante.

## Fonte e ouvinte

Em {{ui:Fonte e ouvinte}}, pressione {{ui:Colocar a fonte}} ou {{ui:Colocar o ouvinte}} e clique na planta do ambiente. O som que você reproduz passa a ser ouvido a partir desse ponto: o som direto chega após a distância, e a parte reverberante está no nível dessa distância. Limpe os dois para voltar à caixa de distância.

## Absorção irregular e modos do ambiente

Em {{ui:Absorção irregular (sala em caixa)}}, digite o ambiente como uma caixa e escolha os acabamentos de piso, forro e paredes. A tabela acrescenta Fitzroy e Arau-Puchades a Sabine e Eyring: eles tratam os três pares de superfícies opostas separadamente, de modo que um ambiente com carpete e forro duro não seja lido como curto demais. Quando os pares diferem muito, uma nota indica em qual confiar. Abaixo da tabela, **Modos do ambiente** lista as ondas estacionárias mais baixas da caixa e a frequência abaixo da qual o ambiente tem modos separados, em vez de um campo sonoro uniforme. São previsões para um ambiente em forma de caixa, um auxílio ao projeto e não uma medição.

## Unidades

Áreas, alturas, volumes e distâncias dos ambientes são exibidos nas {{ui:Unidades}} que você escolheu (pés quadrados e cúbicos, polegadas, milímetros, centímetros ou metros). O cálculo em si permanece no SI; só a exibição muda. Tempos (segundos), frequências e níveis não mudam.
