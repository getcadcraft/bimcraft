---
title: La pantalla de BimCraft
summary: Opa barra, panel ha botón tour, ne pantalla nombre ndive, ha archivo tipo ojeporúva pantalla mba'éichapa ojemoambue.
keywords: pantalla, diseño, paneles, barra de herramientas, interfaz, ui, recorrido, panel de propiedades, navegador, barra de aplicación
from: 2eb01ec2
---

BimCraft pantalla ári barra oĩ ha abajo mbohapy zona: izquierda panel, escenario mbytepe ha {{ui:Propiedades}} panel ryepý-pe. Opa zona-pe mba'e ojehechaukáva oabri archivo-gui oñemoĩ: IFC modelo, proyecto térã familia archivo, plano térã carpeta.

## Aplicación barra

Ryepý barra CadCraft sitio-pe oĩ, BimCraft ndaha'éi. Izquierda gui derecha:

- CadCraft marca: CadCraft inicio páginá-pe ohupa.
- Aplicación nombre ha versión menú. Personal versión-pe build ohechauka, ha versión liberada ojeporu ikatu.
- {{ui:Acerca de BimCraft}}: aplicación páginá sitio-pe.
- {{ui:Configuración}}: BimCraft configuración ha opa aplicación ojeporúva. Ehecha [BimCraft settings](topic:settings).
- {{ui:Pantalla completa}}: pantalla modo ojemoambue. Ehecha [Screen modes](topic:workspace#screen-modes) ári.
- {{ui:Paper}} ha {{ui:Model}}: tema claro ha oscuro. 3D vista ha 2D planos ojeporu tema ojehechaukáva.

## Izquierda panel

Izquierda panel oñepyrũ **Abrir un archivo o carpeta**-gui:

- Mbojere zona, {{ui:Elegir un archivo, o suelte aquí un archivo o una carpeta}}. Oprimi peteĩ archivo elegí térã archivo carpeta mbojere (térã páginá ryepý-pe).
- {{ui:Abrir una carpeta}}: proyecto carpeta opa. Ehecha [Open a whole project folder](topic:open-project-folder).
- {{ui:Carpetas recientes}}: Chrome ha Edge-pe oñemoĩ, carpeta-pe elegí térã mbojere rire. Oprimi {{ui:Reabrir}} ha carpeta nombre oabri jey, térã × ohupytyrõ oñemboguejy.

Ko'ape, apartado oñemoĩ ojeporu jave:

| Apartado | Mboyve ohechauka | Mba'épa oĩ |
|---|---|---|
| {{ui:Cambios}} | IFC modelo oabri | Ne guardá ndaha'éi ñemoambue, pyahu ryepý, {{ui:Deshacer}} ha {{ui:Guardar como IFC}} |
| {{ui:Archivo}} | Modelo térã archivo ficha oabri | Archivo mba'e: tamaño, esquema térã versión, proyecto, autor, elementos cantidad |
| {{ui:Plano}} | DWG térã DXF oabri | Formato, unidades, entidad ha capa cantidad, hojas, vinculado planos, equipo |
| {{ui:Carpeta}} | Carpeta oabri | Archivo ha modelo cantidad, tamaño, problema ojehu |
| {{ui:Volver a la carpeta}} | Carpeta-gui archivo oabri | Carpeta informe-pe ho'a |
| {{ui:Capas}} | Plano oabri | Capa cada marca, {{ui:Todas activadas}} ha {{ui:Todas desactivadas}} |
| {{ui:Pisos}} | IFC modelo oabri | Piso cada marca, ryepý piso primero |
| {{ui:Elementos}} | IFC modelo oabri | Modelo ojuehe elemento tipo cantidad (30 común) |

## Escenario

Pantalla mbytepe oabri archivo ohechauka.

- **Vacío**: "Open a building model." {{ui:Elegir un archivo}} ha {{ui:Abrir una carpeta}} ndive, opa formato descripción.
- **IFC modelo**: 3D vista ryepý barra ndive, grupo nombrado CadCraft dibujo aplicación-gui ramo, herramienta ícono nombre ári: {{ui:Vista}} ({{ui:Ajustar}}, {{ui:Arriba}}, {{ui:Frente}}, {{ui:Lateral}}, {{ui:Bordes}}, {{ui:Espacios}}); {{ui:Editar}} ({{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}}, {{ui:Pegar}} ha {{ui:Más}}, ehecha [Copy, paste and duplicate library items](topic:copy-paste)); {{ui:Modelo}} ({{ui:Unidades}} ha {{ui:Dibujar}}); {{ui:Biblioteca}} ({{ui:Biblioteca}}, {{ui:Equipos}}, {{ui:Actualizaciones}}, {{ui:Créditos}}); {{ui:Revisión}} ({{ui:Mostrar}}, {{ui:Sección}}, {{ui:Recorrer}}, {{ui:Medir}}; ehecha [Cut an IFC model with a section plane](topic:section-plane)); ha {{ui:Salida}} (render, vista en vivo, VR, exportaciones, pintura ha vistas guardadas). {{ui:Dibujar}} oñemboguejy jave, pe barra Dibujar ipahaite mismo aspecto: {{ui:Vista}} (nivel ha plano clase), {{ui:Dibujar}}, {{ui:Editar}} ha {{ui:Biblioteca}}. Vista cubo abajo derecha oĩ. Ehecha [Open an IFC model and look around in 3D](topic:open-ifc-model). {{ui:Configuración}}, {{ui:General}} íconos, etiquetas o ambos elegí, grupo nombre mostrar térã ocultá, herramienta barra ojerovia mouse derecho ojuehe. Ventana kyre'ỹ-pe barra nombre íconos ipahaite ndojehechaukái.
- **Proyecto o familia archivo**: archivo ficha, vista previa imagen, proyecto información ha vinculado archivos. Ehecha [Read a project or family file](topic:read-rvt-file).
- **DWG o DXF**: pestaña fila ({{ui:Modelo}}, hoja cada, {{ui:Equipos}} plano etiqueta equipo oĩ jave, {{ui:3D}}, {{ui:Ajustar}} ha {{ui:Vista de impresión}}), plano, ha X ha Y coordenadas esquina-pe. Ehecha [View a DWG or DXF drawing](topic:view-dwg) ha [See a DWG or DXF drawing in 3D](topic:dwg-in-3d).
- **Carpeta**: carpeta informe, {{ui:Empezar aquí}} caja ha modelos, vinculado, IFC modelos ha planos tabla ndive. Ehecha [Open a whole project folder](topic:open-project-folder).

**Línea estado** escenario ipahaite ohechauka BimCraft mba'e ojapo ("Reading the model…", "Building geometry: 1200 of 5400 elements") ha mba'e ojehu, pytũ-pe, peteĩ mba'e ndojapói jave. Mba'e ojeguahẽ ojehecha rire peteĩ segundo ryepý-pe ndoikói.

## Propiedades panel

Ryepý panel ohechauka:

- IFC modelo-pe: ne clic elemento, nombre, tipo, etiqueta, GlobalId ha opa propiedad conjunto. Ojemoambue ikatu valor botón-icha. Ehecha [Properties panel fields](topic:properties-panel).
- Plano-pe: mba'éichapa oñemoĩ, plano vinculado ha imagen, ojejuhu térã ndojejuhúi, ha **Todavía no dibujado** lista.
- Archivo ficha térã carpeta-pe: ha'e mba'e oabri ha'e rire ojehechaukáva.

## Pyhy'ỹ pantalla-pe

Pantalla laptop-gui mikýva jave BimCraft zona omoĩ: escenario ári, panel abajo. Panel ojehecha pe página ojuehe. Celular-pe peteĩ kolumna; tableta-pe mokõi.

## Pantalla modo

{{ui:Pantalla completa}} botón aplicación barra-pe, térã {{key:Ctrl+Shift+F}} opa plataforma-pe, mbohapy modo ojemoambue:

1. Normal.
2. Pantalla completa, barra oĩ.
3. Pantalla completa aplicación barra ocultá. Mouse ryepý borde-pe emoĩ térã tap, ha oho ojeporu.

{{key:Esc}} oprimi normal-pe jevy. Pantalla completa ndojeporúi navegador (iPhone-pe ichagua) normal ha ocultá barra-pe ndojemoambue.

## Ambue

- [Keys and mouse](topic:keyboard)
- [Files BimCraft opens and saves](topic:files)
