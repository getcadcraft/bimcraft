---
title: Menus, teclas e rato
summary: Escolha um estilo de menus que corresponda à forma como já trabalha, atribua a qualquer comando a sua própria tecla, mova comandos entre menus e defina o que a roda e cada botão do rato fazem.
keywords: estilo de menus, menus, barra de menus, friso, linha de comandos, atalhos de teclado, teclas de atalho, teclas, personalizar, reatribuir, rato, roda, inverter, sentido do zoom, botão do meio, deslocar, orbitar, teclas de duas letras, exportar, importar, mudar, familiar
from: a424e836
---

Os comandos do BimCraft são os mesmos, seja qual for a forma como lhes chega. Um **estilo de menus** decide apenas onde ficam no ecrã, como se chamam e que teclas os executam, para que possa manter os hábitos que já tem. Escolha um em {{ui:Definições}} ({{key:Mod+,}}) › BimCraft › {{ui:Menus, teclas e rato}}; a alteração é imediata e este navegador a memoriza.

## Os cinco estilos

| Estilo | O que obtém |
|---|---|
| {{ui:CadCraft}} | A barra de ferramentas e as teclas próprias do BimCraft ({{key:W}} parede, {{key:D}} porta, {{key:N}} janela, {{key:X}} corte, {{key:F}} ajustar). O ponto de partida. |
| {{ui:Projeto de habitação}} | Uma barra de menus (Ficheiro, Editar, Compilação, Biblioteca, 3D, CAD, Ferramentas, Vista) sobre uma linha de ferramentas de construção, à semelhança da forma como os programas de projeto residencial as organizam. As mesmas teclas simples, mais {{key:Mod+L}} para a biblioteca, {{key:F9}} para a vista 3D, {{key:F10}} para a planta e {{key:F11}} para ambas. |
| {{ui:Friso BIM}} | Separadores de botões grandes (Arquitetura, Inserir, Anotar, Modificar, Vista, Saída) com um menu Ficheiro e botões rápidos à direita. Teclas de duas letras: {{key:W}} e depois {{key:A}} para uma parede, {{key:D}} {{key:R}} porta, {{key:W}} {{key:N}} janela, {{key:S}} {{key:C}} corte, {{key:Z}} {{key:F}} ajustar. O botão do meio desloca a vista; {{key:Shift}} e o botão do meio orbitam. |
| {{ui:Desenho clássico}} | Um friso pequeno e uma linha de comandos, para quem escreve comandos: WALL, DOOR, WINDOW, ROOF, U (anular), ZOOM, SECTION, PLOT, INSERT, HELP. Escreva em qualquer ponto e as letras vão para a linha de comandos; {{key:Enter}} executa, {{key:Enter}} sem nada escrito repete o último comando, {{key:Esc}} limpa-a. |
| {{ui:Visualizador}} | Para abrir e verificar modelos em vez de os desenhar: menus {{ui:Ficheiro}}, {{ui:Vista}}, {{ui:Mostrar}}, {{ui:Verificar}} e {{ui:Editar}} sobre uma linha de ferramentas de visualização (ajustar, topo, frente, lado, corte, medir, ocultar, isolar, transparente, mostrar tudo, caminhar). As ferramentas de construção aguardam num menu {{ui:Modelo}} no fim. As mesmas teclas do estilo próprio do BimCraft. |

Os menus e os frisos aparecem assim que um modelo estiver aberto ou começar um edifício novo; antes disso, o painel da esquerda abre ficheiros e inicia edifícios.

:::tip
Uma tecla que pertence ao esquema próprio do BimCraft mas não ao estilo escolhido não faz nada, e a linha de estado indica para onde foi o seu comando ("No Friso BIM, Corte é SC"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as setas mantêm sempre o seu significado, e uma ferramenta em curso mantém as suas próprias teclas: {{key:R}} e {{key:Tab}} ao colocar, {{key:W}} {{key:A}} {{key:S}} {{key:D}} ao caminhar, {{key:H}} com as ferramentas de porta e janela, números enquanto escreve um comprimento.
:::

## Personalizar

1. Escolha o estilo mais próximo do que pretende e clique em {{ui:Personalizar…}}.
2. Em {{ui:Teclas e menus}}, encontre um comando (a caixa de pesquisa ajuda). Clique em {{ui:Adicionar uma tecla}} e prima a tecla, ou duas teclas seguidas para uma tecla de duas letras. Clique numa tecla para a retirar.
3. Com uma barra de menus ou um friso, {{ui:Onde fica}} move o comando para outro menu ou painel, ou para {{ui:Só teclas}}.
4. Em {{ui:Rato}}, defina a roda, os botões que deslocam a planta e o que cada botão faz nas vistas 3D.
5. Atribua-lhe um nome e clique em {{ui:Guardar}}.

Guardar um estilo incorporado cria a sua própria cópia ("O meu Projeto de habitação"); o estilo incorporado nunca muda. Uma tecla atribuída a dois comandos, ou uma que executaria algo antes de se poder escrever uma tecla de duas letras, aparece a vermelho e tem de ser corrigida antes de poder guardar.

## Rato

- **Roda do rato**: {{ui:Rodar para cima aproxima}} (o ponto de partida) ou {{ui:Rodar para cima afasta}}, e a velocidade. Um gesto de pinça no painel tátil aproxima sempre no sentido em que os dedos se movem.
- **Deslocar a planta e os desenhos com**: qualquer um dos botões esquerdo, do meio e direito. {{key:Space}} e arrastar também deslocam; um arrasto com o botão esquerdo desloca apenas onde um clique não selecionaria nem desenharia.
- **Arrastar nas vistas 3D**: {{ui:Próprio de cada vista}} mantém os botões do BimCraft (o esquerdo orbita, o direito desloca). Ou defina cada botão para orbitar, deslocar, aproximar ou nada; {{key:Shift}} com o botão troca orbitar e deslocar. Um clique sem arrasto continua a selecionar.

## Levar consigo

{{ui:Exportar}} guarda o estilo em uso num pequeno ficheiro `.ccinput.json`; {{ui:Importar…}} acrescenta um, de outro computador ou de um colega. Um ficheiro importado só pode apontar para os comandos do próprio BimCraft: tudo o resto (um comando que esta versão não tem, uma tecla que aqui não funciona) fica de fora e é contado na linha de estado. {{ui:Eliminar este estilo}} remove um dos seus.

:::note
Estas definições ficam neste navegador. {{ui:Utilizar este estilo em todas as aplicações}} sob as fichas de estilo faz com que todas as aplicações abram no estilo correspondente (a sua própria barra de ferramentas, uma barra de menus, um friso ou Desenho clássico; {{ui:Visualizador}} é exclusivo do BimCraft e não tem correspondência noutras aplicações), com as alterações que fez em cada uma; uma aplicação sem estilo correspondente mantém o seu. Escolher outro estilo numa aplicação altera apenas essa aplicação.
:::

Relacionados: [Teclado e rato](topic:keyboard) · [Definições do BimCraft](topic:settings) · [Vir de outros programas BIM e de desenho](topic:coming-from)
