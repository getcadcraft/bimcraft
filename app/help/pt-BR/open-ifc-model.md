---
title: Abra um modelo IFC e observe em 3D
summary: Abra um arquivo IFC, gire em órbita, faça pan e zoom, e use Ajustar, Superior, Frontal e Lateral para se situar.
keywords: ifc, 3d, órbita, pan, zoom, ajustar, vista superior, vista frontal, vista lateral, navegar, cubo de vista, câmera
from: 68b460dd
---

## O que você vai fazer

Abra um modelo IFC, movimente-se em torno dele em 3D e vá às vistas padrão. Cerca de cinco minutos.

Você precisa de um arquivo `.ifc`. A maioria dos programas BIM exporta um; no Revit é **Arquivo > Exportar > IFC**. Veja [Levar um arquivo de projeto para 3D via IFC](topic:rvt-to-ifc).

## Passos

1. Clique em {{ui:Choose a file}} (ou na área de soltar no canto superior esquerdo).
2. Escolha o seu arquivo `.ifc` e confirme.
3. Aguarde a linha de status terminar. Ela mostra "Iniciando o motor IFC…" na primeira vez, depois "Lendo o modelo…" e "Construindo a geometria: … de … elementos".
4. Observe o modelo: ele abre em uma vista de três quartos, ajustado à tela.
5. Clique em {{ui:Top}} na barra de ferramentas acima do modelo para olhar direto para baixo.
6. Clique em {{ui:Front}} para ver a frente, depois em {{ui:Side}} para ver de lado.
7. Clique em {{ui:Fit}}, ou pressione {{key:F}}, para voltar à vista de três quartos do modelo inteiro.

## O que você deve ver

- O modelo no meio, com arestas escuras e finas para um aspecto de desenho.
- O painel {{ui:File}} à esquerda: o nome do arquivo, o tamanho, o esquema IFC (por exemplo IFC2X3 ou IFC4), o nome do projeto, a fase, o programa de onde foi exportado, o autor, a data de exportação, e as contagens de elementos e triângulos.
- As listas {{ui:Storeys}} e {{ui:Elements}} abaixo dele.
- A linha de status: "Aberto *nome do arquivo*: *n* elementos em *s* s".

## Movimentar-se

:::mouse
| Para | Faça isto |
|---|---|
| Orbitar | Arraste com o botão esquerdo |
| Deslocar (pan) | Arraste com o botão direito, ou mantenha {{key:Shift}} (ou {{key:Mod}}) e arraste com o botão esquerdo |
| Zoom | Role a roda, ou arraste com o botão do meio |
| Ver tudo | Pressione {{key:F}} ou clique em {{ui:Fit}} |
:::

:::mac mouse
No trackpad: arraste com um dedo pressionado para orbitar; mantenha {{key:Shift}} ou {{key:Mod}} e arraste para deslocar; role com dois dedos ou aperte para dar zoom. Um clique com dois dedos é um clique com o botão direito, e você pode arrastar com ele para deslocar, mas {{key:Shift}} e arrastar é mais fácil.
:::

:::touch
| Para | Faça isto |
|---|---|
| Orbitar | Arraste com um dedo |
| Zoom | Aperte com dois dedos |
| Deslocar | Mova dois dedos juntos |
| Ver tudo | Toque em {{ui:Fit}} |
:::

A órbita sempre gira em torno de um ponto no meio do modelo. Deslocar move esse ponto, então, depois de um deslocamento longo, a órbita pode parecer descentralizada: clique em {{ui:Fit}} para redefini-la.

## Sombreado, arestas ou estrutura de arame

Três pequenos botões logo acima do cubo de vista escolhem como o modelo é desenhado: {{ui:Shaded}}, {{ui:Shaded with edges}} (o padrão) e {{ui:Wireframe}}. Eles também são comandos (Vista nos menus e na lista Personalizar), então podem ter teclas próprias. {{ui:Plan}}, {{ui:Split}} e {{ui:3D}} ficam na linha {{ui:View}} da barra de ferramentas.

## Erros comuns

- **Esperar vistas nomeadas.** O BimCraft tem quatro vistas fixas ({{ui:Fit}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}), o cubo de vista no canto inferior direito e órbita livre. Ele não salva vistas.
- **Procurar plantas e cortes.** Não há plantas 2D nem caixas de corte nesta versão. Corte o modelo com um único plano de {{ui:Section}} ([Cortar um modelo IFC com um plano de corte](topic:section-plane)), ou desligue pavimentos: [Exibir e ocultar pavimentos, espaços e arestas](topic:storeys-and-spaces).
- **Abrir um arquivo de projeto e esperar 3D.** Um arquivo de projeto abre como um cartão de arquivo. Exporte IFC primeiro.
- **Abrir um `.ifczip`.** Descompacte-o, ou exporte um `.ifc` simples.
- **Um modelo muito grande deixa a aba lenta ou a faz travar.** Veja [Navegadores, dispositivos e memória](topic:platforms).

## Próximo

[Escolha um elemento e leia as suas propriedades](topic:inspect-element).
