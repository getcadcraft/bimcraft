---
title: Chegando desde outros programas BIM e de debuxo
summary: Como os hábitos do BIM de escritorio e da visualización de DWG se corresponden con BimCraft, e as diferenzas que fan tropezar a xente.
keywords: cambio, migrar, familiar, bim de escritorio, familia, parámetros, navegador de proxecto, paleta de propiedades, cubo de vista, xref, xestor de capas, diferenzas, comparar
from: 2de629af
---

Se coñece Revit, a maior parte de BimCraft resultaralle familiar nos termos e descoñecida no alcance. A diferenza máis importante: **esta versión le e inspecciona modelos e edita datos IFC. Aínda non crea modelos como Revit.** Non pode debuxar muros, colocar familias, crear vistas ou follas, nin gardar un ficheiro de proxecto. O que si pode facer é abrir case calquera ficheiro de edificio en calquera ordenador cun navegador, ver o que contén, comprobar unha carpeta de proxecto completa e corrixir os datos dun modelo IFC.

## Hábitos equivalentes

| Se está afeito a | En BimCraft |
|---|---|
| Abrir un `.rvt` en Revit para ver o modelo | BimCraft abre o `.rvt` como unha ficha de ficheiro: versión, información do proxecto, ligazóns, vista previa. Para o modelo 3D, exporte IFC e ábrao. [Ler un ficheiro de proxecto ou familia](topic:read-rvt-file) |
| Comprobar en que versión se gardou un ficheiro antes de abrilo | A ficha indica «gardado en Revit …» na parte superior, sen actualizar nin tocar o ficheiro |
| O navegador de proxecto | Non hai navegador de vistas e follas. Un modelo IFC ten as listas {{ui:Pisos}} e {{ui:Elementos}}; un debuxo ten lapelas de folla |
| A paleta de propiedades | O panel {{ui:Propiedades}} á dereita, para o elemento que prema. Conxuntos de propiedades IFC en lugar de grupos de parámetros |
| Parámetros de exemplar e de tipo | Conxuntos de propiedades de exemplar, e conxuntos marcados «(tipo)». Un cambio de tipo aplícase a todos os elementos do tipo, como en Revit. [Cambiar unha propiedade de tipo para todos os elementos dun tipo](topic:type-vs-instance) |
| Editar tipo | Sen diálogo: prema un valor nun conxunto «(tipo)» e escriba |
| Seleccionar moitos elementos, filtros, Seleccionar todos os exemplares | Un elemento de cada vez. Aínda non está dispoñible |
| O cubo de vista e a roda de navegación | Un cubo de vista na esquina inferior dereita, catro botóns ({{ui:Axustar}}, {{ui:Superior}}, {{ui:Fronte}}, {{ui:Lateral}}) e órbita libre. Non hai roda de navegación |
| Maiús e arrastrar co botón central para orbitar, arrastrar co botón central para desprazar | Arrastrar co botón esquerdo orbita, arrastrar co dereito (ou {{key:Shift}} e arrastrar) despraza, a roda fai zoom. O estilo de menú {{ui:Cinta BIM}} pasa a desprazar arrastrando co botón central, e a orbitar con {{key:Shift}} e o botón central. [Menús, teclas e rato](topic:menus-keys-and-mouse) |
| Planos de planta, seccións, caixas de sección | Un plano de {{ui:Sección}} de cada vez ({{key:X}}); sen caixa de sección nin planos 2D. [Cortar un modelo IFC cun plano de sección](topic:section-plane) |
| Ocultar na vista, illar, visibilidade e gráficos | {{ui:Pisos}} activados e desactivados, {{ui:Espazos}} e {{ui:Arestas}}. Aínda non hai ocultación por elemento |
| Cuartos | Espazos IFC, ocultos ao principio. Prema {{ui:Espazos}} |
| Gardar, Gardar como, sincronizar co central | {{ui:Gardar como IFC}} descarga un novo ficheiro IFC. O orixinal nunca cambia. Sen central, sen traballo compartido |
| Desfacer con {{key:Mod+Z}} | Funciona nas edicións IFC ata que garde. [Cambiar propiedades IFC e gardar unha copia editada](topic:edit-ifc-properties) |
| Xestionar ligazóns | Abra a carpeta do proxecto: cada ligazón compróbase e márcase **Nesta carpeta**, **Atopouse o mesmo nome**, **Ficheiro da biblioteca** ou **Non está nesta carpeta**. [Abrir unha carpeta de proxecto completa](topic:open-project-folder) |
| Auditar, ou abrir un ficheiro para ver se está danado | O informe da carpeta comproba cada copia e copia de seguranza para ver se están cortadas, en segundos. [Comprobar unha carpeta para detectar copias danadas](topic:check-folder-health) |
| Escoller o ficheiro correcto dunha carpeta desordenada | A caixa {{ui:Comece aquí}} suxire un, con motivos |

Se abre modelos sobre todo para revisalos, como nun programa de comprobación ou visualización de IFC, escolla o estilo de menú {{ui:Visor}}: as ferramentas de visualización e comprobación van primeiro e as de construción agrúpanse nun menú. Consulte [Menús, teclas e rato](topic:menus-keys-and-mouse).

## Desde a visualización de ficheiros DWG

Se abre DWG en AutoCAD ou nun visor de DWG:

| Se está afeito a | En BimCraft |
|---|---|
| Lapelas de modelo e de disposición abaixo | Lapelas enriba do debuxo: {{ui:Modelo}} e unha por folla |
| ZOOM Extents, dobre clic na roda | Dobre clic, {{key:F}} ou {{ui:Axustar}} |
| Desprazar co botón central | Arrastrar con calquera botón |
| O xestor de capas | A lista {{ui:Capas}}: marque para amosar, desmarque para ocultar, {{ui:Todas activas}} e {{ui:Todas desactivadas}} |
| O xestor de xrefs | **Debuxos ligados** á dereita, con **Amosado** ou **Non atopado**, e {{ui:Engadir debuxos ligados…}} |
| Vista previa de impresión | {{ui:Vista de impresión}} ou {{key:P}}: negro sobre branco con grosores de liña. Non imprime |
| Extracción de datos dos atributos de bloque | A pestana {{ui:Equipamento}} para debuxos de servizos de restauración etiquetados, con {{ui:Descargar CSV}} |
| Medir, debuxar, editar, gardar como | Non está en BimCraft. A aplicación de debuxo CadCraft debuxa e edita |

## Diferenzas que fan tropezar

- **Funciona no navegador, e o navegador é coidadoso cos seus ficheiros.** BimCraft só pode ler os ficheiros e cartafoles que lle entregue, escolléndoos ou arrastrándoos. Non pode abrir un ficheiro por si só, nin pode sobrescribir un. Cada gardado é unha descarga.
- **Non se envía nada.** A palabra «upload» nalgúns diálogos de cartafoles dos navegadores é o texto propio do navegador. Os ficheiros quedan no seu ordenador.
- **IFC é o formato de modelo.** Un ficheiro de proxecto ábrese como unha ficha porque o seu contido 3D non está documentado. Trate IFC como a vía por onde os modelos chegan a BimCraft.
- **As edicións son copia en escritura.** Cambiar o valor dun elemento nunca cambia os seus veciños, aínda cando o exportador compartiu ese valor entre eles. As propiedades de tipo son a excepción intencionada.
- **Sen proxecto, sen vistas.** BimCraft amosa un ficheiro de cada vez e non garda nada del despois de pechar a lapela, salvo os nomes das carpetas recentes en Chrome e Edge.
- **Teclas de Mac.** Onde os atallos de Windows de Revit usan Ctrl, os de BimCraft usan {{key:Mod}}: Command nun Mac.
- **Os seus hábitos co rato.** A órbita é o botón esquerdo, e non {{key:Shift}} e o botón central, a menos que escolla o estilo de menú {{ui:Cinta BIM}} ou configure os botóns vostede mesmo en [Menús, teclas e rato](topic:menus-keys-and-mouse).

Consulte [O que aínda non está implementado](topic:not-built-yet) para saber que usar no seu lugar hoxe.
