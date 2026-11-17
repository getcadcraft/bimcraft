---
title: Vistas, intervalos de vista e as suas próprias folhas
summary: Encontre todas as plantas, alçados, cortes, vistas 3D, mapas e folhas no navegador do projeto, defina como é cortada cada planta e o que mostra, crie chamadas, desenhe linhas e tramas numa vista, guarde definições em modelos de vista e organize folhas próprias.
keywords: chamada, vista de chamada, vista de pormenor, planta ampliada, desenho, linhas de pormenor, linhas de desenho, trama, região de trama, região preenchida, padrão de preenchimento, planta de tetos refletida, rcp, planta de tetos, grelha de tetos, luminárias, navegador do projeto, vistas, intervalo de vista, recorte, região de recorte, escala da vista, subjacente, mostrar outro piso, meio-tom, plano de corte, altura de corte, topo, base, profundidade da vista, visibilidade, categorias, ocultar na vista, modelo de vista, modelos, folha, folhas, legenda, janela de vista, viewport, escala, organizar folhas, layout, pdf, definições de planta, navegador
from: ee1d5afe
---

## O que vai fazer

Trabalhe da forma como os projetos BIM são organizados: cada vista numa só lista, cada planta cortada onde quer, as mesmas definições para várias plantas através de um modelo, e folhas que organiza por si.

## O navegador do projeto

1. Ative {{ui:Desenhar}}. O painel esquerdo tem um {{ui:Navegador do projeto}} sob os modelos.
2. Lista:
   - **Plantas de pisos**: cada piso. Clique numa para ver a sua planta. O botão de cursor ao lado define o seu intervalo de vista (abaixo). Uma planta que segue um modelo mostra o nome do modelo.
   - **Plantas de tetos**: a planta de tetos refletida de cada piso (abaixo).
   - **Chamadas**: cada chamada com a vista em que é desenhada, e {{ui:Nova chamada}}. **Em falta** lista as chamadas cuja vista já não existe.
   - **Alçados** e **Cortes**: os quatro lados e cada linha de corte. Clique num para abrir o conjunto de desenhos em que são desenhados.
   - **Vistas 3D**: as vistas que guardou com {{ui:Vistas}}.
   - **Mapas**: clique num para o mostrar sob a planta.
   - **Folhas**: as folhas que criou, {{ui:Nova folha}}, e {{ui:Conjunto de desenhos…}} para o conjunto completo feito a partir do modelo.
   - **Modelos de vista**, com {{ui:Novo modelo}}, e **Ligações** (os modelos ligados).

## Definir o intervalo de vista de uma planta

1. Clique no botão de cursor ao lado de um piso em **Plantas de pisos**.
2. Defina as alturas, acima desse piso:
   - **Corte em**: onde a planta corta paredes, portas e janelas (1200 mm, cerca de 4 ft, a menos que o altere).
   - **Topo**: o que está acima do corte e abaixo do topo é desenhado a tracejado (um armário alto, uma viga). Deixe vazio para a altura do piso.
   - **Base** e **Profundidade abaixo da base**: o que está abaixo do corte é desenhado em linhas finas até à base, e até essa distância abaixo dela.
3. Em **Mostrado nesta planta**, desmarque o que esta planta deixa de fora: mobiliário, compartimentos, pilares e assim por diante.
4. Para deixar de fora elementos isolados: escolha-os na planta ou na vista 3D, abra a caixa de diálogo e clique em {{ui:Ocultar aqui os selecionados}}. {{ui:Mostrar todos}} repõe-nos.
5. Clique em {{ui:Usar estas definições}}.

A planta é cortada de novo de imediato, e o conjunto de desenhos e as suas folhas acompanham-na. A fatia de uma nuvem de pontos também segue a altura de corte.

## Recortar uma planta, dar-lhe uma escala, mostrar outro piso por baixo

As três estão na mesma caixa de diálogo (o botão de cursor ao lado de um piso):

- **Escala**: a escala a que a planta é impressa ({{ui:Imprimir}} na barra da planta) e a que entra numa folha. **Ajustar** escolhe a maior escala padrão que cabe.
- **Região de recorte**: clique em {{ui:Desenhar na planta…}}, depois clique num canto e no canto oposto na planta ({{key:Esc}} para). A planta fora da região fica velada no ecrã, e pode continuar a trabalhar aí; impressa, nas folhas e no conjunto de desenhos, a planta mostra apenas o que está dentro. {{ui:Limpar}} retira o recorte. {{ui:Ajustar}} ajusta à região de recorte.
- **Subjacente**: escolha outro piso. As suas paredes, elementos cortados, portas e janelas são desenhados a cinzento claro por baixo desta planta, para alinhar com o piso de baixo ou de cima. Não os pode escolher aqui, e são impressos a cinzento claro.

Uma vista de modelo guarda a escala com as alturas e as categorias. A região de recorte e o subjacente pertencem sempre a essa única planta.

## Plantas de tetos de um piso

Cada piso tem uma planta de tetos refletida ao lado da sua planta de piso: a planta vista de baixo, para desenhar tetos e o que neles está suspenso.

1. Clique no piso em **Plantas de tetos** no navegador, ou escolha {{ui:Planta de tetos}} ao lado do piso na barra da planta.
2. As paredes são cortadas a 2300 mm (cerca de 7'-6"). É desenhado o que está acima desse corte e abaixo da altura do piso: tetos com a sua grelha e uma etiqueta de altura (`CLG 2438`), luminárias, vigas. Portas, janelas e o que está abaixo do corte ficam de fora.
3. Para criar um teto, use {{ui:Teto}} como na planta de piso, depois escolha-o e escolha o seu **Padrão** em Propriedades. Ver [Compartimentos, lajes, tetos e coberturas](topic:floors-and-roofs).
4. Para suspender uma luminária, coloque o item da biblioteca enquanto a planta de tetos está visível: fica em **No teto**. Ver [Colocar equipamento e mobiliário da biblioteca](topic:place-from-library).
5. O botão de cursor ao lado de uma planta de tetos define o seu corte e topo, escala, categorias, região de recorte e subjacente, tal como numa planta de piso. As plantas de tetos não usam modelos de vista.

É desenhada da mesma forma que a planta de piso (uma planta refletida, não uma imagem espelhada). Um teto abaixo do corte não é desenhado: baixe o corte para a planta de tetos desse piso. As plantas de tetos vão para as suas folhas como as plantas; o conjunto de desenhos não as acrescenta por si.

## Criar uma chamada

Uma chamada mostra uma parte da planta ampliada, à sua própria escala, como uma vista própria: uma cozinha, uma escada, um canto de parede.

1. Mostre a planta, a planta de tetos ou a chamada a que pertence.
2. Escolha {{ui:Anotar}} › {{ui:Chamada}} na barra da planta (ou {{ui:Nova chamada}} no navegador), depois clique num canto da área e no canto oposto. {{key:Esc}} para.
3. A chamada é criada a 1:20 (1/2" = 1'-0" em pés e polegadas). O seu retângulo e uma etiqueta redonda são desenhados na planta.
4. Clique na etiqueta com {{ui:Selecionar}}, ou na chamada no navegador, para a abrir: a planta mostra apenas essa área, à escala da chamada. A barra diz {{ui:Chamada:}} e o seu nome; {{ui:Subir}} volta à vista em que está desenhada.
5. O botão de cursor ao lado (no navegador ou na barra) muda-lhe o nome, altera a escala, desenha o retângulo de novo ou elimina-a.

Uma chamada mostra o que a sua vista mostra: o mesmo corte, as mesmas categorias, os tetos de uma planta de tetos. Uma chamada de uma chamada funciona da mesma forma. Coloque uma chamada numa folha como uma planta; a sua etiqueta indica então onde está (`1 / A-501`: a primeira vista na folha A-501). {{ui:Imprimir}} numa chamada imprime apenas essa área, à sua escala.

Eliminar uma chamada elimina também as chamadas desenhadas dentro dela, e as linhas e tramas desenhadas nelas (é perguntado primeiro). Se o piso em que a chamada está desenhada for eliminado, a chamada fica em **Em falta** até a eliminar, e as folhas em que está indicam-na como em falta.

## Desenhar linhas e tramas numa vista

O desenho de pormenor é trabalho 2D que pertence a uma só vista: notas em linhas, uma área com trama de betão ou terra, uma região preenchida. Nunca aparece na vista 3D nem noutra planta.

1. Mostre a planta de piso, a planta de tetos ou a chamada em que quer desenhar.
2. Escolha, em {{ui:Anotar}} na barra da planta:
   - {{ui:Linha}}: clique onde começa e onde acaba. A linha seguinte começa onde a última terminou; {{key:Enter}} recomeça.
   - {{ui:Polilinha}}: clique nos seus pontos; {{key:Enter}} ou um duplo clique termina-a, e um clique no primeiro ponto fecha-a.
   - {{ui:Retângulo}}: dois cantos opostos.
   - {{ui:Região de trama}}: escolha o **Padrão** (Sólido, Diagonal, Cruzado, Betão, Isolamento, Terra) e a sua escala na barra, depois clique nos cantos; {{key:Enter}}, um duplo clique ou um clique no primeiro canto fecha-a. Com {{ui:Preencher um compartimento}} marcado, um clique num compartimento faz a trama do seu contorno.
3. Os pontos encaixam como nas paredes; {{key:Shift}} mantém uma linha em esquadria, e pode escrever um comprimento como nas paredes. {{key:Backspace}} retira o último ponto.

Escolha uma linha ou uma trama com {{ui:Selecionar}} na planta. Em Propriedades, altere o padrão e a escala de uma trama; tem {{ui:Mover…}} (clique no ponto de origem, depois no destino). {{key:Delete}} elimina-a. Cada linha, trama e alteração é um passo.

As linhas e tramas são impressas com a planta, passam para as suas folhas com ela e estão no conjunto de desenhos. Desmarque **Anotações** num intervalo de vista para as deixar de fora dessa vista.

## Guardar as definições num modelo de vista

1. Clique em {{ui:Novo modelo}} no navegador, ou em {{ui:Guardar como modelo…}} no intervalo de vista de uma planta (que passa a usá-lo).
2. Dê-lhe um nome, defina as alturas e categorias, e clique em {{ui:Guardar o modelo}}.
3. No intervalo de vista de qualquer planta, escolha o modelo. A planta toma as suas alturas e categorias; altere o modelo para alterar todas as plantas que o usam. Os elementos que ocultou um a um continuam ocultos na sua própria planta.
4. Clique num modelo no navegador para o alterar, mudar o nome ou eliminar. Ao eliminar um, as suas plantas ficam com as definições como próprias.

## Organizar uma folha própria

1. Clique em {{ui:Nova folha}}. Escreva o número e o título, e escolha o papel.
2. Clique em {{ui:Adicionar}} ao lado de uma planta, planta de tetos, chamada, alçado, corte ou mapa. Fica ao centro da folha.
3. Arraste-o para onde deve ir. Com ele selecionado, escolha uma **Escala**, ou deixe-o na escala da própria planta (quando a tem), senão a escala que cabe num terço da folha. {{ui:Retirar da folha}} remove-o.
4. Clique em {{ui:Guardar a folha}}. Fica listada em **Folhas**; clique nela para a alterar mais tarde.
5. {{ui:Transferir como PDF}} guarda essa folha como uma página.

## O que deve ver

- Plantas cortadas às suas alturas, com o que está acima do corte a tracejado e o que retirou de fora.
- Uma planta recortada, velada fora da sua região no ecrã e cortada até ela no papel, à escala que lhe deu.
- Uma planta de tetos com as grelhas dos tetos e as etiquetas de altura, e as luminárias no teto.
- Chamadas com o seu retângulo e etiqueta na planta, abrindo cada uma à sua escala.
- Linhas e tramas apenas na vista em que as desenhou.
- As suas folhas desenhadas de novo a partir do modelo sempre que as abre, por isso correspondem sempre a ele. Uma vista cujo piso ou linha de corte foi eliminado é indicada, não desenhada.
- Cada alteração aqui é um passo: {{key:Mod+Z}} anula-a.

:::note
Tudo isto fica guardado no ficheiro IFC como conjuntos de propriedades que outros programas ignoram: o intervalo de vista e a planta de tetos de cada piso no próprio piso, e os modelos, chamadas e as suas folhas no projeto. As linhas e tramas são anotações IFC no seu piso, pelo que outros programas as veem como curvas 2D e áreas com trama (o seu próprio desenho de cada padrão), mas não a que vista pertencem.
:::

:::tip
Noutros programas BIM, o corte chama-se intervalo de vista ou plano de corte, os modelos chamam-se modelos de vista ou definições de vista, as linhas de desenho chamam-se linhas de pormenor, e as regiões de trama chamam-se regiões preenchidas. As ideias são as mesmas; as definições de vista não passam para eles.
:::
