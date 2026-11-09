---
title: Primeiros pasos con BimCraft
summary: Que fai BimCraft hoxe, como abrir o primeiro modelo, velo en 3D, cambiar un valor e gardar unha copia.
keywords: comezar, primeira vez, abrir, ifc, rvt, dwg, inicio rápido, introdución, visor, bim
from: fc2dea19
---

BimCraft é a aplicación de modelos de edificio da familia CadCraft. Nesta versión **abre, le e inspecciona** ficheiros de edificios, e **edita os datos dos modelos IFC**. Aínda non debuxa nin modela elementos novos. Considérea un visor e comprobador de modelos que tamén permite corrixir nomes, etiquetas e valores de propiedades nun ficheiro IFC.

O que abre:

| Ficheiro | O que obtén |
|---|---|
| IFC (`.ifc`) | O modelo completo en 3D: órbita, pisos, propiedades dos elementos e edición de nomes e valores de propiedades |
| Ficheiros de proxecto e de familia (`.rvt`, `.rfa`, `.rte`, `.rft`) | Unha ficha do ficheiro: a versión na que se gardou, a información do proxecto, a imaxe de vista previa e os ficheiros ligados. Sen 3D. |
| DWG e DXF | O debuxo en 2D: espazo do modelo e cada folla, capas, debuxos ligados, vista de impresión, e un cuadro de equipos para debuxos de hostalaría etiquetados |
| Un cartafol de proxecto | Un informe de cada modelo do cartafol: copias de seguridade, ligazóns, copias danadas, e unha suxestión de que ficheiro abrir primeiro |

Todo sucede no seu navegador, no seu computador. **Non se sube nada.** Vexa [Ficheiros que BimCraft abre e garda](topic:files) para os detalles.

## Abrir BimCraft

1. Abra BimCraft nun navegador actual. Chrome, Edge, Firefox e Safari funcionan todos; [Navegadores, dispositivos e memoria](topic:platforms) lista as diferenzas.
2. Espere pola pantalla baleira que di «Abrir un modelo de edificio.»

:::note
BimCraft funciona no navegador, e no escritorio dentro de CadCraft Studio, xunto ás outras aplicacións. O gardado na nube aínda non está dispoñible: abre ficheiros desde o seu computador e garda copias de volta nel.
:::

## Abrir o primeiro modelo

A forma máis rápida de ver o que fai BimCraft é un ficheiro IFC.

1. Prema {{ui:Escoller un ficheiro}} no centro da pantalla.
2. Escolla un ficheiro `.ifc` en {{pick:mac=Finder|windows=File Explorer|linux=o xestor de ficheiros}} e confírmeo.
3. Espere mentres a liña de estado ao pé da pantalla di «Iniciando o motor IFC…», e despois «Construíndo a xeometría».

Deberá ver o modelo en 3D no centro, un panel {{ui:Ficheiro}} e unha lista de {{ui:Pisos}} á esquerda, e un panel {{ui:Propiedades}} baleiro á dereita. A liña de estado remata con «Aberto» e o número de elementos.

:::tip
Tamén pode arrastrar un ficheiro desde {{pick:mac=Finder|windows=File Explorer|linux=o xestor de ficheiros}} directamente á páxina. A pantalla mostra «Solte para abrir» mentres arrastra.
:::

:::offline
O motor IFC carga desde o sitio a primeira vez que abre un modelo IFC, a menos que BimCraft se gardase para uso sen conexión. Os debuxos DWG e DXF, os ficheiros de proxecto e os cartafoles non necesitan nada máis: os seus lectores forman parte da aplicación. Se o botón da barra da aplicación di {{ui:Listo sen conexión}}, todo se abre sen conexión. Se non, os modelos IFC non se abrirán ata que se reconecte, salvo que xa se abrise un nesta pestana. Vexa [En liña e sen conexión](topic:online-offline).
:::

:::online
Vai a un lugar sen conexión? Prema {{ui:Gardar para usar sen conexión}} na barra da aplicación e espere a {{ui:Listo sen conexión}}. A copia gardada (uns 11 MB) inclúe o motor IFC. Vexa [Traballar sen conexión](common:offline).
:::

## Mirar ao redor

:::mouse
1. Arrastre co botón esquerdo do rato para orbitar ao redor do modelo.
2. Desprace a roda para facer zoom.
3. Arrastre co botón dereito do rato para desprazarse. Nun trackpad de Mac, manteña premido {{key:Shift}} e arrastre.
4. Prema {{key:F}} ou {{ui:Axustar}} para ver de novo o modelo completo.
:::

:::touch
1. Arrastre cun dedo para orbitar.
2. Pelisque con dous dedos para facer zoom, e mova dous dedos xuntos para desprazarse.
3. Toque {{ui:Axustar}} para ver de novo o modelo completo.
:::

## Faga unha cousa real: corrixir unha etiqueta

1. Prema nun muro, unha porta ou calquera elemento do modelo. Ponse en azul, e as súas propiedades aparecen á dereita.
2. No panel {{ui:Propiedades}}, prema o valor xunto a **Etiqueta**.
3. Escriba a nova etiqueta e prema {{key:Enter}}.
4. Vexa a sección {{ui:Cambios}} que se abriu á esquerda: o seu cambio aparece cos valores antigo e novo.

## Gardar unha copia

1. Prema {{ui:Gardar como IFC}} na sección {{ui:Cambios}}, ou prema {{key:Mod+S}}.
2. Atope o ficheiro novo na súa carpeta de descargas. Leva o nome do orixinal con «(edited)» engadido, por exemplo `Clinic (edited).ifc`.

O seu ficheiro orixinal non se cambia nunca. [Cambiar propiedades IFC e gardar unha copia editada](topic:edit-ifc-properties) explica a edición en detalle.

## Onde ir despois

- [A pantalla de BimCraft](topic:workspace): cada panel polo seu nome.
- [Vindo doutros programas BIM e de debuxo](topic:coming-from): o que resulta distinto se usa Revit.
- [Abrir un cartafol de proxecto completo](topic:open-project-folder): apunte BimCraft a un cartafol de proxecto e deixe que ordene os ficheiros.
- [Ver un debuxo DWG ou DXF](topic:view-dwg): follas, capas e vista de impresión.
