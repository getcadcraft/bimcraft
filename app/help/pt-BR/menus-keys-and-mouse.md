---
title: Menus, teclas e mouse
summary: Escolha um estilo de menu que combine com a forma como você já trabalha, atribua uma tecla própria a qualquer comando, mova comandos entre menus e defina o que a roda e cada botão do mouse fazem.
keywords: estilo de menu, menus, barra de menus, faixa de opções, linha de comando, atalhos de teclado, teclas de atalho, teclas, personalizar, redefinir atalho, mouse, roda, inverter, sentido do zoom, botão do meio, pan, órbita, teclas de duas letras, exportar, importar, troca, familiar
from: a424e836
---

Os comandos do BimCraft são os mesmos, seja qual for o caminho para chegar até eles. Um **estilo de menu** define apenas onde eles ficam na tela, como são chamados ali e quais teclas os executam, para que você mantenha os hábitos que já tem. Escolha um em {{ui:Configurações}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Menus, teclas e mouse}}; a mudança é imediata e este navegador a guarda.

## Os cinco estilos

| Estilo | O que você obtém |
|---|---|
| {{ui:CadCraft}} | A barra de ferramentas e as teclas próprias do BimCraft ({{key:W}} parede, {{key:D}} porta, {{key:N}} janela, {{key:X}} corte, {{key:F}} ajustar). O início. |
| {{ui:Projeto residencial}} | Uma barra de menus (Arquivo, Editar, Build, Biblioteca, 3D, CAD, Ferramentas, Vista) sobre uma linha de ferramentas de construção, do jeito como os programas de projeto residencial as organizam. As mesmas teclas simples, mais {{key:Mod+L}} para a biblioteca, {{key:F9}} para a vista 3D, {{key:F10}} para a planta e {{key:F11}} para as duas. |
| {{ui:Faixa BIM}} | Abas de botões grandes (Arquitetura, Inserir, Anotar, Modificar, Vista, Saída), com um menu Arquivo e botões rápidos à direita. Teclas de duas letras: {{key:W}} depois {{key:A}} para parede, {{key:D}} {{key:R}} porta, {{key:W}} {{key:N}} janela, {{key:S}} {{key:C}} corte, {{key:Z}} {{key:F}} ajustar. O botão do meio faz pan; {{key:Shift}} e o botão do meio fazem órbita. |
| {{ui:Desenho clássico}} | Uma pequena faixa de opções e uma linha de comando, para quem digita comandos: WALL, DOOR, WINDOW, ROOF, U (desfazer), ZOOM, SECTION, PLOT, INSERT, HELP. Comece a digitar em qualquer lugar e as letras vão para a linha de comando; {{key:Enter}} executa, {{key:Enter}} sem nada repete o último comando, {{key:Esc}} limpa. |
| {{ui:Visualizador}} | Para abrir e verificar modelos, em vez de desenhá-los: menus {{ui:Arquivo}}, {{ui:Vista}}, {{ui:Exibir}}, {{ui:Verificar}} e {{ui:Editar}} sobre uma linha de ferramentas de visualização (ajustar, superior, frontal, lateral, corte, medir, ocultar, isolar, transparente, exibir tudo, caminhar). As ferramentas de construção ficam em um menu {{ui:Modelo}} no final. As mesmas teclas do estilo próprio do BimCraft. |

Os menus e a faixa de opções aparecem assim que um modelo está aberto ou você começa um novo edifício; antes disso, o painel à esquerda abre arquivos e inicia edifícios.

:::tip
Uma tecla que pertence ao layout próprio do BimCraft, mas não ao estilo escolhido, não faz nada, e a linha de status informa para onde foi o comando (\"Em Faixa BIM, Corte é SC\"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as setas sempre mantêm o seu significado, e uma ferramenta em uso mantém as próprias teclas: {{key:R}} e {{key:Tab}} ao posicionar, {{key:W}} {{key:A}} {{key:S}} {{key:D}} ao caminhar, {{key:H}} com as ferramentas de porta e janela, números ao digitar um comprimento.
:::

## Faça do seu jeito

1. Escolha o estilo mais próximo do que você quer e clique em {{ui:Personalizar…}}.
2. Em {{ui:Teclas e menus}}, encontre um comando (a caixa de busca ajuda). Clique em {{ui:Adicionar uma tecla}} e pressione a tecla, ou duas teclas em sequência para uma tecla de duas letras. Clique em uma tecla para removê-la.
3. Com uma barra de menus ou uma faixa de opções, {{ui:Onde fica}} move o comando para outro menu ou painel, ou para {{ui:Somente teclas}}.
4. Em {{ui:Mouse}}, defina a roda, os botões que fazem pan na planta e o que cada botão faz nas vistas 3D.
5. Dê um nome e clique em {{ui:Salvar}}.

Salvar um estilo interno cria a sua própria cópia (\"Meu Projeto residencial\"); o estilo interno nunca muda. Uma tecla atribuída a dois comandos, ou uma tecla que executaria antes que uma tecla de duas letras pudesse ser digitada, aparece em vermelho e precisa ser corrigida antes que você possa salvar.

## Mouse

- **Roda do mouse**: {{ui:Rolar para cima aproxima}} (o padrão) ou {{ui:Rolar para cima afasta}}, e a velocidade. Um pinçamento no trackpad sempre dá zoom no sentido em que os dedos se movem.
- **Fazer pan na planta e nos desenhos com**: qualquer um dos botões esquerdo, do meio e direito. {{key:Space}} e arrastar também fazem pan; um arrasto com o botão esquerdo faz pan somente onde um clique não selecionaria nem desenharia.
- **Arrastar nas vistas 3D**: {{ui:Próprio de cada vista}} mantém os botões do BimCraft (esquerdo orbita, direito faz pan). Ou defina cada botão como órbita, pan, zoom ou nenhum; {{key:Shift}} com o botão troca órbita e pan. Um clique sem arrastar ainda seleciona.

## Leve com você

{{ui:Exportar}} salva o estilo em uso como um pequeno arquivo `.ccinput.json`; {{ui:Importar…}} adiciona um, de outro computador ou de um colega. Um arquivo importado só pode apontar para comandos do próprio BimCraft: o que for diferente (um comando que esta versão não tem, uma tecla que não funciona aqui) é deixado de fora e contado na linha de status. {{ui:Excluir este estilo}} remove um dos seus.

:::note
Essas configurações ficam neste navegador. {{ui:Usar este estilo em todos os apps}}, sob os cartões de estilo, faz com que todo app abra no estilo correspondente (a própria barra de ferramentas, uma barra de menus, uma faixa de opções ou Desenho clássico; {{ui:Visualizador}} é exclusivo do BimCraft e não tem correspondência nos outros), com as alterações que você fez em cada app. Um app sem estilo correspondente mantém o seu. Escolher outro estilo em um app muda apenas esse app.
:::

Relacionados: [Teclado e mouse](topic:keyboard) · [Configurações do BimCraft](topic:settings) · [Vindo de outros programas de BIM e de desenho](topic:coming-from)
