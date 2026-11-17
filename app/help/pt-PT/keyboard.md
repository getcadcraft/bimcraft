---
title: Teclas e rato
summary: Todas as ações de teclado, rato, trackpad e toque no BimCraft, agrupadas pelo que está a ver.
keywords: teclado, atalhos, teclas de atalho, teclas, rato, trackpad, toque, orbitar, deslocar, zoom, ocultar, isolar, ver através, anular, refazer, copiar, colar, duplicar, guardar, ajustar, ver para impressão, escape, definições, desenhar, parede, porta, janela, planta
from: 5c6eedce
---

O BimCraft tem poucos atalhos. A maior parte do trabalho faz-se com o rato e os painéis. Os atalhos escritos com {{key:Mod}} usam Command num Mac e Ctrl nos restantes sistemas. Ver [Teclas, ratos e trackpads](common:keys) para saber como as teclas são escritas nesta ajuda.

## Em todo o lado

| Tecla | O que faz |
|---|---|
| {{key:Ctrl+Shift+F}} | Alterna os modos de ecrã: normal, ecrã inteiro, ecrã inteiro com as barras ocultas. Ctrl em todas as plataformas, incluindo um Mac |
| {{key:Esc}} | Sai do ecrã inteiro |
| {{key:Mod+,}} | Abre {{ui:Settings}}. Ver [Definições do BimCraft](topic:settings) |
| {{key:Tab}} | Move entre botões, caixas de verificação e valores. Todos os controlos são acessíveis pelo teclado |

## Vista 3D (modelos IFC)

| Tecla ou ação | O que faz |
|---|---|
| {{key:F}} | Ajusta todo o modelo, vista em três quartos (igual a {{ui:Fit}}) |
| {{key:Esc}} | Limpa a seleção, ou para de colocar ou colar |
| Clique | Seleciona o elemento sob o cursor; clicar no fundo vazio limpa a seleção |
| {{key:Mod}}+clique ou {{key:Shift}}+clique | Acrescenta um elemento à seleção, ou retira-o |
| {{key:H}} | Oculta os elementos selecionados. Ver [Ocultar, isolar e ver através de elementos](topic:hide-and-isolate) |
| {{key:I}} | Mostra apenas os elementos selecionados (isolar) |
| {{key:T}} | Mostra os elementos selecionados, com tudo o resto transparente |
| {{key:Shift+H}} | Volta a mostrar todos os elementos |
| {{ui:Walk}} | Depois, {{key:W}} {{key:A}} {{key:S}} {{key:D}} ou as setas caminham; {{key:Shift}} corre; arrastar olha à volta; {{key:Esc}} para. Ver [Caminhar por um modelo](topic:walk) |
| {{key:M}} | Mede distâncias e áreas de faces. Ver [Medir distâncias, áreas de faces e localizações em 3D](topic:measure) |
| Arrastar com o botão esquerdo | Orbitar |
| Arrastar com o botão direito | Deslocar |
| {{key:Shift}} ou {{key:Mod}} e arrastar com o botão esquerdo | Deslocar (útil num trackpad) |
| Rodar a roda do rato, ou arrastar com o botão do meio | Zoom |
| Deslocamento com dois dedos ou pinça num trackpad | Zoom |
| Um dedo (toque) | Orbitar; um toque seleciona |
| Dois dedos (toque) | Pinçar para fazer zoom, deslocar juntos para deslocar a vista |

| {{key:X}} | Plano de corte ligado e desligado. Ver [Cortar um modelo IFC com um plano de corte](topic:section-plane) |
| {{key:Shift+X}} | Caixa de corte à volta dos elementos selecionados, com o compartimento definido nas Definições |

Não há teclas para {{ui:Top}}, {{ui:Front}} e {{ui:Side}}; use os botões.

## Editar

Os mesmos comandos estão na barra de ferramentas: {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}} e o menu {{ui:More}}, que mostra cada tecla. Funcionam na vista 3D de um modelo IFC, mas não enquanto escreve num campo. Ver [Copiar, colar e duplicar itens da biblioteca](topic:copy-paste).

| Tecla | O que faz |
|---|---|
| {{key:Mod+Z}} | Anula a última alteração |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Refaz o que Anular retirou |
| {{key:Mod+C}} | Copia os elementos selecionados (os nomes e propriedades também vão para a área de transferência como texto) |
| {{key:Mod+X}} | Corta os elementos selecionados: copia-os e depois elimina-os |
| {{key:Mod+V}} | Cola o que copiou: segue o cursor; clique onde deve ficar |
| {{key:Mod+Shift+V}} | Colar no mesmo sítio: onde estava um corte, ou ao lado dos originais depois de uma cópia |
| {{key:Mod+D}} | Duplicar: copia os elementos selecionados e começa a colá-los |
| {{key:Delete}} | Elimina os elementos selecionados, com as suas partes e vãos. Ver [Eliminar, cortar, copiar e colar elementos de construção](topic:edit-elements) |
| {{key:Mod+A}} | Seleciona todos os elementos visíveis |
| {{key:Esc}} | Não seleciona nada |

Quando há texto selecionado na página, {{key:Mod+C}} copia esse texto como habitualmente.

## Vista em planta (Desenhar)

Estas ações funcionam com {{ui:Draw}} ativo e enquanto não escreve num campo. Ver [Desenhar paredes](topic:draw-walls) e [Portas e janelas](topic:doors-and-windows).

| Tecla ou ação | O que faz |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:W}} | {{ui:Wall}} |
| {{key:D}} | {{ui:Door}} |
| {{key:N}} | {{ui:Window}} |
| {{key:H}} | Com {{ui:Door}} ou {{ui:Window}}: dobradiças na outra extremidade |
| {{key:Shift}} enquanto desenha uma parede | Mantém-na a 0°, 90°, 180° ou 270° |
| Algarismos e as marcas de pé e polegada (`'` e `"`) | Começa a escrever um comprimento na caixa {{ui:Length}}; {{key:Enter}} usa-o |
| {{key:Enter}}, {{key:Esc}}, clique com o botão direito ou duplo clique | Termina a parede que está a desenhar; {{key:Esc}} outra vez volta a {{ui:Select}} |
| {{key:Delete}} | Elimina as paredes, portas e janelas selecionadas; as paredes que sobram voltam a ligar-se |
| {{key:F}} com o cursor sobre a planta | Ajusta a planta |
| Rodar a roda do rato | Zoom em torno do cursor |
| Arrastar com o botão do meio ou direito, ou {{key:Space}} e arrastar | Desloca a vista; com {{ui:Select}} ativo, um arrastar simples também desloca |
| Arrastar uma porta ou janela com {{ui:Select}} | Move-a ao longo da parede, ou para outra parede |
| Dois dedos (toque) | Pinçar para fazer zoom, deslocar juntos para deslocar a vista |

## Colocar e colar itens da biblioteca

| Tecla | O que faz |
|---|---|
| {{key:R}} | Roda o item 90° |
| {{key:Tab}} | Ativa e desativa o encaixe na parede: a parte de trás do item fica encostada à parede mais próxima |
| {{key:Enter}} em **X, Y (mm)** | Coloca na posição escrita |
| {{key:Esc}} | Para de colocar ou colar |

## Editar valores IFC

| Tecla | O que faz |
|---|---|
| {{key:Enter}} | Mantém o valor escrito |
| {{key:Esc}} | Cancela e repõe o valor anterior |
| Clique noutro sítio | Mantém o valor escrito |
| {{key:Mod+Z}} | Anula a última alteração. Só enquanto tiver alterações por guardar e não estiver a escrever num campo |
| {{key:Mod+Y}} | Refaz o que Anular retirou |
| {{key:Mod+S}} | Guarda como IFC. Só enquanto tiver alterações por guardar; caso contrário, abre-se o comando de guardar do próprio navegador |

Para editar só com o teclado: prima {{key:Tab}} até um valor ficar realçado e, depois, prima {{key:Enter}} para começar a escrever.

## Desenhos 2D (DWG e DXF)

| Tecla ou ação | O que faz |
|---|---|
| {{key:F}} | Ajusta o desenho ou a folha |
| {{key:P}} | Liga e desliga a vista para impressão |
| Duplo clique | Ajusta |
| Arrastar com qualquer botão | Desloca |
| Rodar a roda do rato | Zoom no cursor |
| Deslocamento com dois dedos ou pinça num trackpad | Zoom no cursor. O deslocamento com dois dedos não desloca |
| Um dedo (toque) | Desloca. O zoom por pinça ainda não está implementado para desenhos |

## Desenhos em 3D

| Tecla ou ação | O que faz |
|---|---|
| {{key:3}} | 3D ligado e desligado (também na vista 2D) |
| {{key:F}} | Extensões: o desenho inteiro |
| Arrastar com o botão do meio ou esquerdo | Orbitar |
| Arrastar com o botão direito, ou {{key:Shift}} e arrastar | Deslocar |
| Rodar a roda do rato | Zoom em direção ao que está sob o cursor |
| Deslizar com dois dedos num trackpad | Orbitar; com {{key:Shift}}, deslocar |
| Pinça num trackpad | Zoom |
| Um dedo (toque) | Orbitar |
| Dois dedos (toque) | Pinçar para fazer zoom, deslocar juntos para deslocar a vista |

{{key:F}}, {{key:P}} e {{key:3}} não fazem nada enquanto escreve num campo, enquanto o mapa de equipamento está visível, ou quando mantém {{key:Mod}} ou {{key:Alt}} premida.

## Ficheiros

| Ação | O que faz |
|---|---|
| Arrastar um ficheiro para a página | Abre-o |
| Arrastar uma pasta para a página | Abre-a como pasta de projeto, sem pedido de autorização |
