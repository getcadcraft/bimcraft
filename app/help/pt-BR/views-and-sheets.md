---
title: Vistas, intervalos de vista e suas próprias folhas
summary: Encontre cada planta, elevação, corte, vista 3D, tabela e folha no navegador de projeto, defina como cada planta é cortada e o que ela mostra, crie chamadas, desenhe linhas e hachuras em uma vista, mantenha as configurações em modelos de vista e organize suas próprias folhas.
keywords: chamada, vista de chamada, vista de detalhe, planta ampliada, desenho, linhas de detalhe, linhas de desenho, hachura, região de hachura, região preenchida, padrão de preenchimento, planta de forro refletido, rcp, planta de forro, grade do forro, luminárias, navegador de projeto, vistas, intervalo de vista, recorte, região de recorte, vista de recorte, escala da vista, plano de fundo, mostrar outro pavimento, meio-tom, plano de corte, altura de corte, topo, base, profundidade da vista, visibilidade, categorias, ocultar na vista, modelo de vista, modelos, folha, folhas, legenda, viewport, escala, organizar folhas, layout, pdf, configurações de vista da planta, navegador
from: ee1d5afe
---

## O que você vai fazer

Trabalhe do jeito como os projetos BIM são organizados: cada vista em uma única lista, cada planta cortada onde você quiser, as mesmas configurações para várias plantas por meio de um modelo, e folhas que você mesmo organiza.

## O navegador de projeto

1. Ative {{ui:Desenhar}}. O painel à esquerda tem um {{ui:Navegador de projeto}} abaixo dos modelos.
2. Ele lista:
   - **Plantas baixas**: cada nível. Clique em um para ver sua planta. O botão ao lado define o intervalo de vista dela (abaixo). Uma planta que segue um modelo mostra o nome desse modelo.
   - **Plantas de forro**: a planta de forro refletido de cada nível (abaixo).
   - **Chamadas**: cada chamada com a vista em que é desenhada, e {{ui:Nova chamada}}. **Ausentes** lista as chamadas cuja vista não existe mais.
   - **Elevações** e **Cortes**: os quatro lados e cada linha de corte. Clique em um para abrir o conjunto de desenhos em que são desenhados.
   - **Vistas 3D**: as vistas que você salvou com {{ui:Vistas}}.
   - **Tabelas**: clique em uma para exibi-la abaixo da planta.
   - **Folhas**: as folhas que você criou, {{ui:Nova folha}}, e {{ui:Conjunto de desenhos…}} para o conjunto inteiro gerado a partir do modelo.
   - **Modelos de vista**, com {{ui:Novo modelo}}, e **Vínculos** (os modelos vinculados).

## Definir o intervalo de vista de uma planta

1. Clique no botão ao lado de um nível em **Plantas baixas**.
2. Defina as alturas, acima desse nível:
   - **Corte em**: onde a planta corta paredes, portas e janelas (1200 mm, cerca de 4 ft, a menos que você altere).
   - **Topo**: os elementos acima do corte e abaixo do topo são desenhados tracejados (um armário alto, uma viga). Deixe em branco para usar a altura do nível.
   - **Base** e **Profundidade abaixo da base**: os elementos mais baixos que o corte são desenhados em linhas finas até a base, e até essa profundidade abaixo dela.
3. Em **Exibido nesta planta**, desmarque o que esta planta deixa de fora: mobiliário, ambientes, pilares e assim por diante.
4. Para deixar de fora elementos isolados: selecione-os na planta ou na vista 3D, abra a caixa de diálogo e clique em {{ui:Ocultar os selecionados aqui}}. {{ui:Mostrar todos}} os traz de volta.
5. Clique em {{ui:Usar estas configurações}}.

A planta é cortada de novo imediatamente, e o conjunto de desenhos e suas folhas a acompanham. A fatia de uma nuvem de pontos também segue a altura de corte.

## Recortar uma planta, dar-lhe uma escala e mostrar outro nível por baixo

Os três estão na mesma caixa de diálogo (o botão ao lado de um nível):

- **Escala**: a escala em que a planta é impressa ({{ui:Imprimir}} na barra da planta) e com que entra em uma folha. **Ajustar** escolhe a maior escala padrão que caiba.
- **Região de recorte**: clique em {{ui:Desenhar na planta…}}, depois clique em um canto e no canto oposto na planta ({{key:Esc}} encerra). A planta fora da região fica velada na tela, e você ainda pode trabalhar ali; impressa, nas folhas e no conjunto de desenhos, a planta mostra apenas o que está dentro. {{ui:Limpar}} remove o recorte. {{ui:Ajustar}} ajusta ao recorte.
- **Plano de fundo**: escolha outro nível. Suas paredes, elementos cortados, portas e janelas são desenhados em tom claro sob esta planta, para alinhar as coisas com o nível abaixo ou acima. Não é possível selecioná-los aqui, e eles são impressos em cinza claro.

Um modelo de vista leva a escala junto com as alturas e as categorias. A região de recorte e o plano de fundo pertencem sempre a uma única planta.

## A planta de forro de um nível

Todo nível tem uma planta de forro refletido ao lado da sua planta baixa: a planta vista de baixo, para organizar os forros e o que fica suspenso neles.

1. Clique no nível em **Plantas de forro** no navegador, ou escolha {{ui:Planta de forro}} ao lado do nível na barra da planta.
2. As paredes são cortadas em 2300 mm (cerca de 7'-6"). É desenhado o que fica acima desse corte e abaixo da altura do nível: forros com sua grade e uma etiqueta de altura (`CLG 2438`), luminárias, vigas. Portas, janelas e o que fica abaixo do corte são deixados de fora.
3. Para criar um forro, use {{ui:Forro}} como na planta baixa, depois selecione-o e escolha seu **Padrão** em Propriedades. Veja [Ambientes, pisos, forros e telhados](topic:floors-and-roofs).
4. Para pendurar uma luminária nele, posicione o item da biblioteca enquanto a planta de forro estiver exibida: ele vai para **No forro**. Veja [Posicionar equipamentos e mobiliário a partir da biblioteca](topic:place-from-library).
5. O botão ao lado de uma planta de forro define o corte e o topo, a escala, as categorias, a região de recorte e o plano de fundo, como em uma planta baixa. Plantas de forro não usam modelo de vista.

Ela é desenhada na mesma orientação da planta baixa (uma planta refletida, não uma imagem espelhada). Um forro mais baixo que o corte não é desenhado: baixe o corte para a planta de forro desse nível. As plantas de forro vão para as suas próprias folhas como as plantas; o conjunto de desenhos não as adiciona sozinho.

## Criar uma chamada

Uma chamada mostra uma parte de uma planta ampliada, na própria escala, como uma vista própria: uma cozinha, uma escada, um canto de parede.

1. Mostre a planta, a planta de forro ou a chamada a que ela pertence.
2. Escolha {{ui:Anotar}} › {{ui:Chamada}} na barra da planta (ou {{ui:Nova chamada}} no navegador), depois clique em um canto da área e no canto oposto. {{key:Esc}} encerra.
3. A chamada é criada em 1:20 (1/2" = 1'-0" em pés e polegadas). Seu retângulo e uma etiqueta redonda são desenhados na planta.
4. Clique na etiqueta com {{ui:Selecionar}}, ou na chamada no navegador, para abri-la: a planta mostra apenas essa área, na escala da chamada. A barra diz {{ui:Chamada:}} e o nome dela; {{ui:Acima}} volta para a vista em que ela é desenhada.
5. O botão ao lado dela (no navegador ou na barra) a renomeia, altera a escala, desenha o retângulo de novo ou a exclui.

Uma chamada mostra o que a vista dela mostra: o mesmo corte, as mesmas categorias, os forros de uma planta de forro. Uma chamada de uma chamada funciona do mesmo modo. Coloque uma chamada em uma folha como uma planta; a etiqueta então indica onde ela está (`1 / A-501`: a primeira vista na folha A-501). {{ui:Imprimir}} em uma chamada imprime apenas essa área, na escala dela.

Excluir uma chamada também exclui as chamadas desenhadas dentro dela, e as linhas e hachuras desenhadas nelas (você é perguntado antes). Se o nível em que uma chamada é desenhada for excluído, a chamada permanece em **Ausentes** até que você a exclua, e as folhas em que ela está a informam como ausente.

## Desenhar linhas e hachuras em uma vista

O desenho é um trabalho 2D que pertence a uma única vista: anotações em linhas, uma área hachurada de concreto ou terra, uma região preenchida. Nunca está na vista 3D e nunca em outra planta.

1. Mostre a planta baixa, a planta de forro ou a chamada em que quer desenhar.
2. Escolha em {{ui:Anotar}} na barra da planta:
   - {{ui:Linha}}: clique onde ela começa e onde termina. A próxima linha começa onde a última terminou; {{key:Enter}} recomeça.
   - {{ui:Polilinha}}: clique em seus pontos; {{key:Enter}} ou um duplo clique a encerra, e um clique no primeiro ponto a fecha.
   - {{ui:Retângulo}}: dois cantos opostos.
   - {{ui:Região de hachura}}: escolha o **Padrão** (Sólido, Diagonal, Cruzado, Concreto, Isolamento, Terra) e a escala dele na barra, depois clique nos cantos; {{key:Enter}}, um duplo clique ou um clique no primeiro canto a fecham. Com {{ui:Preencher um ambiente}} marcado, um clique em um ambiente hachura o contorno dele.
3. Os pontos se encaixam como nas paredes; {{key:Shift}} mantém a linha em esquadro, e você pode digitar um comprimento como nas paredes. {{key:Backspace}} desfaz o último ponto.

Selecione uma linha ou uma hachura com {{ui:Selecionar}} na planta. Propriedades altera o padrão e a escala de uma hachura e tem {{ui:Mover…}} (clique no ponto de origem e depois no destino). {{key:Delete}} a exclui. Cada linha, hachura e alteração é um passo.

Linhas e hachuras são impressas com a planta, vão para as suas folhas junto com ela e estão no conjunto de desenhos. Desmarque **Anotações** no intervalo de vista para deixá-las de fora dessa vista.

## Manter as configurações em um modelo de vista

1. Clique em {{ui:Novo modelo}} no navegador, ou em {{ui:Salvar como modelo…}} no intervalo de vista de uma planta (essa planta então passa a usá-lo).
2. Dê-lhe um nome, defina as alturas e as categorias, e clique em {{ui:Salvar o modelo}}.
3. No intervalo de vista de qualquer planta, escolha o modelo. A planta assume as alturas e as categorias dele; altere o modelo para mudar todas as plantas que o usam. Os elementos que você ocultou um a um continuam ocultos na própria planta.
4. Clique em um modelo no navegador para alterá-lo, renomeá-lo ou excluí-lo. Ao excluir um, suas plantas ficam com as configurações dele como próprias.

## Organizar uma folha própria

1. Clique em {{ui:Nova folha}}. Digite o número e o título dela e escolha o papel.
2. Clique em {{ui:Adicionar}} ao lado de uma planta, planta de forro, chamada, elevação, corte ou tabela. Ela cai no meio da folha.
3. Arraste-a para onde deve ir. Com ela selecionada, escolha uma **Escala**, ou deixe a escala própria da planta (quando ela tem uma); caso contrário, a escala que cabe em um terço da folha. {{ui:Retirar da folha}} a remove.
4. Clique em {{ui:Salvar a folha}}. Ela aparece listada em **Folhas**; clique nela para alterá-la depois.
5. {{ui:Baixar como PDF}} salva essa folha como uma página.

## O que você deve ver

- Plantas cortadas nas suas alturas, com o que está acima do corte tracejado e o que você desmarcou deixado de fora.
- Uma planta recortada, velada fora da sua região na tela e cortada a ela no papel, na escala que você definiu.
- Uma planta de forro com as grades dos forros e as etiquetas de altura, e as luminárias no forro.
- Chamadas com seu retângulo e etiqueta na planta, cada uma abrindo na própria escala.
- Linhas e hachuras somente na vista em que você as desenhou.
- Suas folhas são desenhadas de novo a partir do modelo sempre que você as abre, por isso sempre correspondem a ele. Uma vista cujo nível ou linha de corte foi excluído é informada, e não desenhada.
- Cada alteração aqui é um passo: {{key:Mod+Z}} a desfaz.

:::note
Tudo isso é mantido no arquivo IFC como conjuntos de propriedades que outros programas ignoram: o intervalo de vista e a planta de forro de cada nível no próprio nível, e os modelos, chamadas e suas folhas no projeto. Linhas e hachuras são anotações IFC no seu nível, de modo que outros programas as veem como curvas 2D e áreas hachuradas (o próprio desenho de cada padrão), embora não saibam a qual vista pertencem.
:::

:::tip
Outros programas BIM chamam o corte de intervalo de vista ou plano de corte, os modelos de vista de configurações de vista, as linhas de desenho de linhas de detalhe, e as regiões de hachura de regiões preenchidas. As ideias são as mesmas; as configurações de vista não são levadas a eles.
:::
