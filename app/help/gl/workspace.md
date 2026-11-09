---
title: A pantalla de BimCraft
summary: Un percorrido por cada barra, panel e botón polo seu nome na pantalla, e como cambia a pantalla segundo o tipo de ficheiro.
keywords: pantalla, deseño, paneis, barra de ferramentas, interface, ui, percorrido, panel de propiedades, navegador, barra da aplicación
from: 2eb01ec2
---

A pantalla de BimCraft ten unha barra arriba e tres áreas debaixo: un panel á esquerda, o escenario no medio e o panel {{ui:Propiedades}} á dereita. O que aparece en cada área depende do que abriu: un modelo IFC, un ficheiro de proxecto ou de familia, un debuxo ou un cartafol.

## A barra da aplicación

A fina barra arriba pertence ao sitio de CadCraft, non ao propio BimCraft. De esquerda a dereita:

- A marca de CadCraft: leva á páxina de inicio de CadCraft.
- O nome da aplicación e un menú de versión. Na versión interna mostra que compilación está a executar e permite cambiar a unha versión publicada.
- {{ui:Sobre BimCraft}}: a páxina da aplicación no sitio.
- {{ui:Configuración}}: as configuracións propias de BimCraft e as que comparten todas as aplicacións. Vexa [Configuración de BimCraft](topic:settings).
- {{ui:Pantalla completa}}: alterna os modos de pantalla. Vexa [Modos de pantalla](topic:workspace#screen-modes) máis abaixo.
- {{ui:Papel}} e {{ui:Modelo}}: os temas claro e escuro. A vista 3D e os debuxos 2D seguen o tema que escolla.

## O panel da esquerda

O panel da esquerda comeza sempre con **Abrir un ficheiro ou cartafol**:

- A zona para soltar, {{ui:Escolla un ficheiro, ou solte aquí un ficheiro ou cartafol}}. Prema nela para escoller un ficheiro, ou solte un ficheiro ou cartafol sobre ela (ou en calquera parte da páxina).
- {{ui:Abrir un cartafol}}: escolla un cartafol de proxecto completo. Vexa [Abrir un cartafol de proxecto completo](topic:open-project-folder).
- {{ui:Cartafoles recentes}}: aparece en Chrome e Edge despois de abrir un cartafol co selector de cartafoles ou soltándoo. Prema {{ui:Reabrir}} e o nome do cartafol para abrilo de novo, ou o pequeno × para esquecelo.

Debaixo, aparecen seccións segundo corresponda:

| Sección | Cando aparece | Que contén |
|---|---|---|
| {{ui:Cambios}} | Está aberto un modelo IFC | As súas edicións sen gardar, a máis recente primeiro, con {{ui:Desfacer}} e {{ui:Gardar como IFC}} |
| {{ui:Ficheiro}} | Está aberto un modelo ou unha ficha do ficheiro | Datos do ficheiro: tamaño, esquema ou versión, proxecto, autor, número de elementos |
| {{ui:Debuxo}} | Está aberto un DWG ou DXF | Formato, unidades, número de entidades e capas, follas, debuxos ligados, equipos |
| {{ui:Cartafol}} | Está aberto un cartafol | Número de ficheiros e modelos, tamaño, problemas atopados |
| {{ui:Volver ao cartafol}} | Abriu un ficheiro dun cartafol | Volve ao informe do cartafol |
| {{ui:Capas}} | Está aberto un debuxo | Unha caixa de selección por capa, con {{ui:Todas activas}} e {{ui:Todas desactivadas}} |
| {{ui:Pisos}} | Está aberto un modelo IFC | Unha caixa de selección por piso, o piso máis alto primeiro |
| {{ui:Elementos}} | Está aberto un modelo IFC | Cantos elementos de cada tipo ten o modelo (os 30 máis comúns) |

## O escenario

O medio da pantalla mostra o ficheiro aberto.

- **Baleiro**: «Abrir un modelo de edificio.» con {{ui:Escoller un ficheiro}} e {{ui:Abrir un cartafol}}, e unha breve descrición de cada formato.
- **Modelo IFC**: a vista 3D cunha barra de ferramentas arriba, en grupos con nome, como os do programa de debuxo de CadCraft, cun icona de cada ferramenta enriba do seu nome: {{ui:Vista}} ({{ui:Axustar}}, {{ui:Superior}}, {{ui:Fronte}}, {{ui:Lateral}}, {{ui:Arestas}}, {{ui:Espazos}}); {{ui:Editar}} ({{ui:Desfacer}}, {{ui:Refacer}}, {{ui:Copiar}}, {{ui:Pegar}} e {{ui:Máis}}, vexa [Copiar, pegar e duplicar elementos da biblioteca](topic:copy-paste)); {{ui:Modelo}} ({{ui:Unidades}} e {{ui:Debuxar}}); {{ui:Biblioteca}} ({{ui:Biblioteca}}, {{ui:Equipamento}}, {{ui:Actualizacións}}, {{ui:Créditos}}); {{ui:Revisión}} ({{ui:Mostrar}}, {{ui:Sección}}, {{ui:Camiñar}}, {{ui:Medir}}; vexa [Cortar un modelo IFC cun plano de corte](topic:section-plane)); e {{ui:Saída}} (render, vista en directo, RV, exportacións, pintura e vistas gardadas). Con {{ui:Debuxar}} activado, a barra de debuxo debaixo ten o mesmo aspecto: {{ui:Vista}} (o nivel e o tipo de planta), {{ui:Debuxar}}, {{ui:Editar}} e {{ui:Biblioteca}}. Un cubo de vista atópase na esquina inferior dereita. Vexa [Abrir un modelo IFC e mirar en 3D](topic:open-ifc-model). {{ui:Configuración}}, {{ui:Xeral}} escolle iconas, etiquetas ou ambas nestes botóns, mostra ou oculta os nomes dos grupos, e prema co botón dereito na barra para dispor as súas ferramentas e grupos. Nunha xanela curta, a barra quita os nomes debaixo das iconas.
- **Ficheiro de proxecto ou de familia**: a ficha do ficheiro, coa imaxe de vista previa, información do proxecto e ficheiros ligados. Vexa [Ler un ficheiro de proxecto ou de familia](topic:read-rvt-file).
- **DWG ou DXF**: unha fila de pestanas ({{ui:Modelo}}, despois unha por folla, despois {{ui:Equipamento}} cando o debuxo ten equipos etiquetados, {{ui:3D}}, {{ui:Axustar}} e {{ui:Vista de impresión}}), o debuxo, e as coordenadas X e Y en directo nunha esquina. Vexa [Ver un debuxo DWG ou DXF](topic:view-dwg) e [Ver un debuxo DWG ou DXF en 3D](topic:dwg-in-3d).
- **Cartafol**: o informe do cartafol, coa caixa {{ui:Comece aquí}} e táboas de modelos, ligazóns, modelos IFC e debuxos. Vexa [Abrir un cartafol de proxecto completo](topic:open-project-folder).

A **liña de estado** na parte inferior do escenario indica o que está a facer BimCraft («Lendo o modelo…», «Construíndo a xeometría: 1200 de 5400 elementos») e o que saíu mal, en vermello, cando algo falla. As mensaxes de éxito esvaécense ao cabo de uns segundos.

## O panel de propiedades

O panel da dereita mostra:

- Para un modelo IFC: o elemento que prememos, co seu nome, tipo, etiqueta, GlobalId e cada conxunto de propiedades. Os valores que pode cambiar parecen botóns. Vexa [Campos do panel de propiedades](topic:properties-panel).
- Para un debuxo: como moverse pola vista, os debuxos ligados e as imaxes do debuxo e se se atopou cada un, e unha lista do que está en **Aínda non debuxado**.
- Para unha ficha do ficheiro ou un cartafol: unha breve nota sobre que abrir a continuación.

## Nunha pantalla pequena

Cando a xanela é máis estreita que a pantalla dun portátil, BimCraft apila as súas áreas: o escenario enriba, e os paneis debaixo. Desprace a páxina para chegar aos paneis. Nun teléfono forman unha soa columna; nunha tableta, dúas.

## Modos de pantalla

O botón {{ui:Pantalla completa}} da barra da aplicación, ou {{key:Ctrl+Shift+F}} en todas as plataformas, alterna tres modos:

1. Normal.
2. Pantalla completa, coas barras aínda visibles.
3. Pantalla completa coa barra da aplicación oculta. Mova o punteiro ata o bordo superior, ou toque alí, para facela volver.

Prema {{key:Esc}} para volver ao normal. Os navegadores sen compatibilidade con pantalla completa (como no iPhone) alternan só entre o normal e as barras ocultas.

## Relacionado

- [Teclas e rato](topic:keyboard)
- [Ficheiros que BimCraft abre e garda](topic:files)
