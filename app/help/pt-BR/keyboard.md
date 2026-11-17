---
title: Teclas e mouse
summary: Cada ação de tecla, mouse, trackpad e toque no BimCraft, agrupada pelo que você está vendo.
keywords: teclado, atalhos, teclas de atalho, teclas, mouse, trackpad, toque, órbita, pan, zoom, ocultar, isolar, transparente, desfazer, refazer, copiar, colar, duplicar, salvar, ajustar, imprimir vista, escape, configurações, desenhar, parede, porta, janela, planta
from: 5c6eedce
---

BimCraft tem poucos atalhos. A maior parte do trabalho é feita com o mouse e os painéis. Atalhos escritos com {{key:Mod}} usam Command no Mac e Ctrl nos demais. Veja [Teclas, mouses e trackpads](common:keys) para saber como as teclas são escritas neste guia.

## Em todo lugar

| Tecla | O que faz |
|---|---|
| {{key:Ctrl+Shift+F}} | Alterna os modos de tela: normal, tela cheia, tela cheia com as barras ocultas. Ctrl em todas as plataformas, inclusive no Mac |
| {{key:Esc}} | Sai da tela cheia |
| {{key:Mod+,}} | Abre {{ui:Configurações}}. Veja [Configurações do BimCraft](topic:settings) |
| {{key:Tab}} | Move entre botões, caixas de seleção e valores. Todo controle pode ser acessado pelo teclado |

## Vista 3D (modelos IFC)

| Tecla ou ação | O que faz |
|---|---|
| {{key:F}} | Ajusta o modelo inteiro, em vista três quartos (igual a {{ui:Ajustar}}) |
| {{key:Esc}} | Limpa a seleção, ou para de posicionar ou colar |
| Clique | Seleciona o elemento sob o ponteiro; clique no fundo vazio para limpar |
| {{key:Mod}}+clique ou {{key:Shift}}+clique | Adiciona um elemento à seleção, ou o retira |
| {{key:H}} | Oculta os elementos selecionados. Veja [Ocultar, isolar e deixar elementos transparentes](topic:hide-and-isolate) |
| {{key:I}} | Mostra somente os elementos selecionados (isolar) |
| {{key:T}} | Mostra os elementos selecionados e deixa todo o resto transparente |
| {{key:Shift+H}} | Mostra de novo todos os elementos |
| {{ui:Caminhar}} | Depois, {{key:W}} {{key:A}} {{key:S}} {{key:D}} ou as setas caminham, {{key:Shift}} corre, arrastar olha ao redor, {{key:Esc}} para. Veja [Caminhar pelo modelo](topic:walk) |
| {{key:M}} | Mede distâncias e áreas de faces. Veja [Medir distâncias, áreas de faces e localizações em 3D](topic:measure) |
| Arrastar com o botão esquerdo | Órbita |
| Arrastar com o botão direito | Pan |
| {{key:Shift}} ou {{key:Mod}} e arrastar com o botão esquerdo | Pan (útil no trackpad) |
| Role a roda do mouse, ou arraste com o botão do meio | Zoom |
| Rolagem com dois dedos ou pinça no trackpad | Zoom |
| Um dedo (toque) | Órbita; um toque seleciona |
| Dois dedos (toque) | Pinça para dar zoom, mover juntos para fazer pan |

| {{key:X}} | Plano de corte ligado e desligado. Veja [Cortar um modelo IFC com um plano de corte](topic:section-plane) |
| {{key:Shift+X}} | Caixa de corte ao redor dos elementos selecionados, com a folga definida em Configurações |

Não há teclas para {{ui:Superior}}, {{ui:Frontal}} e {{ui:Lateral}}; use os botões.

## Editar

Os mesmos comandos estão na barra de ferramentas: {{ui:Desfazer}}, {{ui:Refazer}}, {{ui:Copiar}}, {{ui:Colar}} e o menu {{ui:Mais}}, que mostra cada tecla. Eles funcionam na vista 3D de um modelo IFC, não enquanto você digita em um campo. Veja [Copiar, colar e duplicar itens da biblioteca](topic:copy-paste).

| Tecla | O que faz |
|---|---|
| {{key:Mod+Z}} | Desfaz a última alteração |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Refaz o que Desfazer desfez |
| {{key:Mod+C}} | Copia os elementos selecionados (seus nomes e propriedades também vão para a área de transferência como texto) |
| {{key:Mod+X}} | Recorta os elementos selecionados: copia e depois os exclui |
| {{key:Mod+V}} | Cola o que você copiou: segue o ponteiro; clique onde deve ir |
| {{key:Mod+Shift+V}} | Colar no mesmo local: de onde veio um recorte, ou ao lado dos originais depois de uma cópia |
| {{key:Mod+D}} | Duplicar: copia os elementos selecionados e começa a colá-los |
| {{key:Delete}} | Exclui os elementos selecionados, com suas partes e aberturas. Veja [Excluir, recortar, copiar e colar elementos da construção](topic:edit-elements) |
| {{key:Mod+A}} | Seleciona todos os elementos exibidos |
| {{key:Esc}} | Limpa a seleção |

Quando há texto selecionado na página, {{key:Mod+C}} copia esse texto como de costume.

## Vista da planta (Desenhar)

Estes funcionam com {{ui:Desenhar}} ativado e enquanto você não digita em um campo. Veja [Desenhar paredes](topic:draw-walls) e [Portas e janelas](topic:doors-and-windows).

| Tecla ou ação | O que faz |
|---|---|
| {{key:V}} | {{ui:Selecionar}} |
| {{key:W}} | {{ui:Parede}} |
| {{key:D}} | {{ui:Porta}} |
| {{key:N}} | {{ui:Janela}} |
| {{key:H}} | Com {{ui:Porta}} ou {{ui:Janela}}: as dobradiças vão para a outra extremidade |
| {{key:Shift}} enquanto desenha uma parede | Mantém a parede em 0°, 90°, 180° ou 270° |
| Dígitos e as marcas de pé e polegada (`'` e `"`) | Começa a digitar um comprimento na caixa {{ui:Comprimento}}; {{key:Enter}} o usa |
| {{key:Enter}}, {{key:Esc}}, clique com o botão direito ou clique duplo | Encerra a parede que você está desenhando; {{key:Esc}} de novo volta para {{ui:Selecionar}} |
| {{key:Delete}} | Exclui as paredes, portas e janelas selecionadas; as paredes restantes voltam a se unir |
| {{key:F}} com o ponteiro sobre a planta | Ajusta a planta |
| Role a roda do mouse | Zoom em torno do ponteiro |
| Arrastar com o botão do meio ou direito, ou {{key:Space}} e arrastar | Pan; com {{ui:Selecionar}} ativado, um arrasto simples também faz pan |
| Arrastar uma porta ou janela com {{ui:Selecionar}} | Move ao longo da parede, ou para outra parede |
| Dois dedos (toque) | Pinça para zoom, mover juntos para pan |

## Posicionar e colar itens da biblioteca

| Tecla | O que faz |
|---|---|
| {{key:R}} | Gira o item 90° |
| {{key:Tab}} | Snap de parede ligado e desligado: o fundo do item vai encostado à parede mais próxima |
| {{key:Enter}} em **X, Y (mm)** | Posiciona na posição digitada |
| {{key:Esc}} | Para de posicionar ou colar |

## Editar valores IFC

| Tecla | O que faz |
|---|---|
| {{key:Enter}} | Mantém o valor digitado |
| {{key:Esc}} | Cancela e recoloca o valor antigo |
| Clique em outro lugar | Mantém o valor digitado |
| {{key:Mod+Z}} | Desfaz a última alteração. Somente enquanto houver alterações não salvas e você não estiver digitando em um campo |
| {{key:Mod+Y}} | Refaz o que Desfazer desfez |
| {{key:Mod+S}} | Salva como IFC. Somente enquanto houver alterações não salvas; caso contrário, abre o comando de salvar do próprio navegador |

Para editar só com o teclado: pressione {{key:Tab}} até um valor ficar destacado e depois {{key:Enter}} para começar a digitar.

## Desenhos 2D (DWG e DXF)

| Tecla ou ação | O que faz |
|---|---|
| {{key:F}} | Ajusta o desenho ou a folha |
| {{key:P}} | Liga e desliga a vista de impressão |
| Clique duplo | Ajusta |
| Arrastar com qualquer botão | Pan |
| Role a roda do mouse | Zoom no ponteiro |
| Rolagem com dois dedos ou pinça no trackpad | Zoom no ponteiro. A rolagem com dois dedos não faz pan |
| Um dedo (toque) | Pan. O zoom por pinça para desenhos ainda não foi implementado |

## Desenhos em 3D

| Tecla ou ação | O que faz |
|---|---|
| {{key:3}} | 3D ligado e desligado (também na vista 2D) |
| {{key:F}} | Extensão: o desenho inteiro |
| Arrastar com o botão do meio ou esquerdo | Órbita |
| Arrastar com o botão direito, ou {{key:Shift}} e arrastar | Pan |
| Role a roda do mouse | Zoom na direção do que está sob o ponteiro |
| Deslizar com dois dedos no trackpad | Órbita; com {{key:Shift}}, pan |
| Pinça no trackpad | Zoom |
| Um dedo (toque) | Órbita |
| Dois dedos (toque) | Pinça para zoom, mover juntos para pan |

{{key:F}}, {{key:P}} e {{key:3}} não fazem nada enquanto você digita em um campo, enquanto a tabela de equipamentos está exibida, ou quando você segura {{key:Mod}} ou {{key:Alt}}.

## Arquivos

| Ação | O que faz |
|---|---|
| Arrastar um arquivo para a página | Abre o arquivo |
| Arrastar uma pasta para a página | Abre-a como pasta de projeto, sem pedido de permissão |
