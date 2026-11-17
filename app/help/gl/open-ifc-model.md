---
title: Abrir un modelo IFC e mirar en 3D
summary: Abra un ficheiro IFC, oriéntese, faga órbita, desprace e faga zoom, e use Axustar, Superior, Fronte e Lateral para orientarse.
keywords: ifc, 3d, orbitar, desprazar, zoom, axustar, vista superior, vista fronte, vista lateral, navegar, cubo de vista, cámara
from: 68b460dd
---

## Que vai facer

Abra un modelo IFC, muévase por el en 3D e vaia ás vistas estándar. Uns cinco minutos.

Precisa un ficheiro `.ifc`. A maioría dos programas BIM exportan un; en Revit é **Ficheiro > Exportar > IFC**. Véxase [Levar un ficheiro de proxecto a 3D mediante IFC](topic:rvt-to-ifc).

## Pasos

1. Prema {{ui:Escoller un ficheiro}} (ou a zona de soltar arriba á esquerda).
2. Escolla o seu ficheiro `.ifc` e confirme.
3. Agarde a que remate a liña de estado. Mostra «Iniciando o motor IFC…» a primeira vez, logo «Lendo o modelo…» e «Construíndo a xeometría: … de … elementos».
4. Mire o modelo: ábrese nunha vista de tres cuartos, axustado á pantalla.
5. Prema {{ui:Superior}} na barra de ferramentas sobre o modelo para mirar directamente de arriba.
6. Prema {{ui:Fronte}} para mirar a fronte, e logo {{ui:Lateral}} para mirar desde o lado.
7. Prema {{ui:Axustar}}, ou {{key:F}}, para volver á vista de tres cuartos de todo o modelo.

## Que debe ver

- O modelo no centro, con bordos escuros finos para un aspecto de debuxo.
- O panel {{ui:Ficheiro}} á esquerda: o nome do ficheiro, o tamaño, o esquema IFC (por exemplo IFC2X3 ou IFC4), o nome do proxecto, a fase, o programa desde o que se exportou, o autor, a data de exportación e os contadores de elementos e triángulos.
- As listas {{ui:Pisos}} e {{ui:Elementos}} debaixo del.
- A liña de estado: «Aberto *nome do ficheiro*: *n* elementos en *s* s».

## Moverse

:::mouse
| Para | Faga isto |
|---|---|
| Orbitar | Arrastre co botón esquerdo |
| Desprazar | Arrastre co botón dereito, ou manteña {{key:Shift}} (ou {{key:Mod}}) e arrastre co botón esquerdo |
| Zoom | Mova a roda, ou arrastre co botón central |
| Ver todo | Prema {{key:F}} ou {{ui:Axustar}} |
:::

:::mac mouse
Nun trackpad: arrastre cun dedo premido para orbitar; manteña {{key:Shift}} ou {{key:Mod}} e arrastre para desprazar; desprace con dous dedos ou pince para facer zoom. Un clic con dous dedos é un clic dereito, e pode arrastrar con el para desprazar, pero {{key:Shift}} e arrastrar é máis cómodo.
:::

:::touch
| Para | Faga isto |
|---|---|
| Orbitar | Arrastre cun dedo |
| Zoom | Pince con dous dedos |
| Desprazar | Mova dous dedos xuntos |
| Ver todo | Toque {{ui:Axustar}} |
:::

Orbitar sempre xira arredor dun punto no centro do modelo. Desprazar move ese punto, así que despois dun desprazamento longo a órbita pode parecer descentrada: prema {{ui:Axustar}} para restablecela.

## Sombreado, arestas ou alámbrico

Tres botóns pequenos xusto enriba do cubo de vista escollen como se debuxa o modelo: {{ui:Sombreado}}, {{ui:Sombreado con arestas}} (o predeterminado) e {{ui:Alámbrico}}. Tamén son comandos (Vista nos menús e na lista Personalizar), así que poden ter teclas propias. {{ui:Planta}}, {{ui:Dividir}} e {{ui:3D}} están na fila {{ui:Vista}} da barra de ferramentas.

## Erros habituais

- **Esperar vistas con nome.** BimCraft ten catro vistas fixas ({{ui:Axustar}}, {{ui:Superior}}, {{ui:Fronte}}, {{ui:Lateral}}), o cubo de vista na esquina inferior dereita e órbita libre. Non garda vistas.
- **Buscar plantas e seccións.** Nesta versión non hai plantas 2D nin caixas de seccións. Corte o modelo cun único plano de {{ui:Sección}} ([Cortar un modelo IFC cun plano de sección](topic:section-plane)), ou apague os pisos: [Amosar e ocultar pisos, espazos e arestas](topic:storeys-and-spaces).
- **Abrir un ficheiro de proxecto e esperar 3D.** Un ficheiro de proxecto ábrese como unha tarxeta de ficheiro. Exporte IFC primeiro.
- **Abrir un `.ifczip`.** Descomprímao, ou exporte un `.ifc` simple.
- **Un modelo moi grande fai lenta ou bloquea a pestana.** Véxase [Navegadores, dispositivos e memoria](topic:platforms).

## Seguinte

[Escoller un elemento e ler as súas propiedades](topic:inspect-element).
