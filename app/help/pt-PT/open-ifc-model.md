---
title: Abrir um modelo IFC e observá-lo em 3D
summary: Abra um ficheiro IFC, oriente-se em torno do modelo, desloque a vista (pan) e faça zoom, e use Ajustar, Superior, Frontal e Lado para se orientar.
keywords: ifc, 3d, orbitar, pan, zoom, ajustar, vista superior, vista frontal, vista lateral, navegar, cubo de vistas, câmara
from: 68b460dd
---

## O que vai fazer

Abra um modelo IFC, mova-se à volta dele em 3D e salte para as vistas padrão. Cerca de cinco minutos.

Precisa de um ficheiro `.ifc`. A maioria dos programas BIM exporta um; no Revit é **Ficheiro > Exportar > IFC**. Veja [Obter um ficheiro de projeto em 3D através de IFC](topic:rvt-to-ifc).

## Passos

1. Clique em {{ui:Escolher um ficheiro}} (ou na área de arrastar no canto superior esquerdo).
2. Escolha o seu ficheiro `.ifc` e confirme.
3. Aguarde que a linha de estado termine. Mostra « A iniciar o motor IFC… » da primeira vez, depois « A ler o modelo… » e « A construir a geometria: … de … elementos ».
4. Observe o modelo: abre numa vista de três quartos, ajustado ao ecrã.
5. Clique em {{ui:Superior}} na barra de ferramentas acima do modelo para olhar diretamente para baixo.
6. Clique em {{ui:Frontal}} para ver a frente, depois em {{ui:Lado}} para ver de lado.
7. Clique em {{ui:Ajustar}}, ou prima {{key:F}}, para voltar à vista de três quartos do modelo inteiro.

## O que deve ver

- O modelo ao centro, com arestas escuras e finas para um aspeto de desenho.
- O painel {{ui:Ficheiro}} à esquerda: o nome do ficheiro, o tamanho, o esquema IFC (por exemplo IFC2X3 ou IFC4), o nome do projeto, a fase, o programa a partir do qual foi exportado, o autor, a data de exportação, e as contagens de elementos e triângulos.
- As listas {{ui:Pisos}} e {{ui:Elementos}} por baixo.
- A linha de estado: « Aberto *nome do ficheiro*: *n* elementos em *s* s ».

## Deslocar-se

:::mouse
| Para | Faça isto |
|---|---|
| Orbitar | Arraste com o botão esquerdo |
| Deslocar a vista | Arraste com o botão direito, ou mantenha {{key:Shift}} (ou {{key:Mod}}) premida e arraste com o botão esquerdo |
| Zoom | Desloque a roda, ou arraste com o botão do meio |
| Ver tudo | Prima {{key:F}} ou clique em {{ui:Ajustar}} |
:::

:::mac mouse
Num trackpad: arraste com um dedo premido para orbitar; mantenha {{key:Shift}} ou {{key:Mod}} premida e arraste para deslocar a vista; desloque com dois dedos ou faça pinça para fazer zoom. Um clique com dois dedos é um clique com o botão direito, e pode arrastar com ele para deslocar a vista, mas {{key:Shift}} e arrastar é mais fácil.
:::

:::touch
| Para | Faça isto |
|---|---|
| Orbitar | Arraste com um dedo |
| Zoom | Faça pinça com dois dedos |
| Deslocar a vista | Mova dois dedos em conjunto |
| Ver tudo | Toque em {{ui:Ajustar}} |
:::

Orbitar roda sempre em torno de um ponto no meio do modelo. Deslocar a vista move esse ponto, por isso, depois de uma deslocação longa, a órbita pode parecer descentrada: clique em {{ui:Ajustar}} para a repor.

## Sombreado, arestas ou arame

Três pequenos botões logo acima do cubo de vistas escolhem como o modelo é desenhado: {{ui:Sombreado}}, {{ui:Sombreado com arestas}} (o predefinido) e {{ui:Arame}}. São também comandos (Vista nos menus e na lista Personalizar), por isso podem ter teclas próprias. {{ui:Planta}}, {{ui:Dividir}} e {{ui:3D}} estão na linha {{ui:Vista}} da barra de ferramentas.

## Erros comuns

- **Esperar vistas com nome.** O BimCraft tem quatro vistas fixas ({{ui:Ajustar}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Lado}}), o cubo de vistas no canto inferior direito e órbita livre. Não guarda vistas.
- **Procurar plantas e cortes.** Não há plantas 2D nem caixas de corte nesta versão. Corte o modelo com um único plano de {{ui:Corte}} ([Cortar um modelo IFC com um plano de corte](topic:section-plane)), ou desligue pisos: [Mostrar e ocultar pisos, espaços e arestas](topic:storeys-and-spaces).
- **Abrir um ficheiro de projeto e esperar 3D.** Um ficheiro de projeto abre como uma ficha de ficheiro. Exporte primeiro para IFC.
- **Abrir um `.ifczip`.** Descomprima-o, ou exporte um `.ifc` simples.
- **Um modelo muito grande torna o separador lento ou faz com que falhe.** Veja [Navegadores, dispositivos e memória](topic:platforms).

## Seguinte

[Escolher um elemento e ler as suas propriedades](topic:inspect-element).
