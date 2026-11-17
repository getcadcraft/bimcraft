---
title: Forma de trabajo, vistas duplicadas, plumillas en papel, Reportar como y plantillas
summary: Elija cómo se comporta BimCraft según su forma de trabajo, duplique cualquier vista como copia propia o vinculada, guarde las modificaciones de plumillas en el archivo e imprima tal como se ve o mediante una tabla de plumillas, reporte un elemento como otra clase IFC e inicie proyectos desde sus propias plantillas.
keywords: forma de trabajo, duplicar vista, duplicar, copiar vista, vista dependiente, vista vinculada, copia propia, copia de vista, modificaciones de plumillas, plumillas, grosores de línea, imprimir tal como se ve, tabla de plumillas, estilo de trazado, ctb, monocromo, escala de grises, reportar como, clase ifc, reclasificar, tipo predefinido, modelo genérico, losa como carretera, muro como panel, techo como rampa, plantilla de proyecto, plantilla, nuevo desde plantilla, guardar como plantilla, estándar de la oficina
from: 231d98b0
---

## Lo que hará

Configure BimCraft según su forma de trabajo, duplique vistas, imprímalas como espera, cuente los elementos como lo que realmente son e inicie cada proyecto desde la plantilla de su oficina.

## Elegir una forma de trabajo

1. Abra {{ui:Configuración}} y la pestaña {{ui:BimCraft}}. Busque {{ui:Forma de trabajo}}.
2. Elija una opción:
   - {{ui:Cada vista la suya}} (la primera opción): una vista duplicada copia sus anotaciones y estas siguen siendo de esa vista; las hojas se imprimen como se muestran en pantalla.
   - {{ui:Anotaciones compartidas y tablas de plumillas}}: las vistas duplicadas comparten sus anotaciones; la impresión pasa por una tabla de plumillas.
3. Debajo de la elección están las cuatro cosas que configura. Cambie cualquiera por separado; entonces la forma de trabajo aparece como {{ui:Personalizada}}.

La forma de trabajo se guarda en este navegador, igual que la disposición del espacio de trabajo. Una plantilla la lleva a los modelos nuevos.

## Duplicar una vista

1. En el {{ui:Navegador del proyecto}}, cada planta, planta de techo, llamada, alzado y sección tiene un botón {{ui:Duplicar}} (con el icono de dos hojas).
2. Asigne un nombre a la copia y elija cómo se comporta:
   - {{ui:Copia propia}}: su dibujo, cotas, recorte, elementos ocultos y plumillas se copian y siguen siendo propios. Editar cualquiera de las dos vistas nunca cambia la otra, así que una vista en una hoja emitida se queda como se emitió.
   - {{ui:Vinculada}}: muestra la misma vista con un solo juego de anotaciones y configuración.
3. La copia aparece en {{ui:Vistas duplicadas}}. Haga clic en ella para abrirla; la barra sobre la planta indica que es una copia, con {{ui:Subir}} para volver a su vista.
4. Su botón de control deslizante abre su configuración: el nombre, {{ui:Rango de vista}} (una copia propia tiene el suyo), {{ui:Hacerla copia propia}} para una vinculada, y {{ui:Eliminar}}.

Las copias de alzados y secciones se colocan en sus propias hojas, igual que las vistas de las que vienen. Duplicar es un solo paso de deshacer, y las copias se guardan en el IFC junto con las llamadas.

## Plumillas guardadas con la vista e impresas tal como se ven

1. Active {{ui:Dibujo}} y elija {{ui:Plumillas}}.
2. {{ui:Para}} ahora lista todas las categorías: muros, puertas y ventanas, losas, techos, columnas, escaleras, mobiliario y el resto, además de dibujo y cotas.
3. {{ui:Aplicar}} guarda la plumilla en el IFC con la vista que se muestra: una planta, una planta de techo, una llamada o una vista duplicada. Las plumillas hechas antes de la versión 0.9 se guardaban en el navegador; {{ui:Guardarlas en el archivo}} las mueve.
4. Las hojas y el PDF dibujan cada plumilla tal como se ve en pantalla.

Para imprimir mediante una tabla de plumillas, cambie {{ui:Imprimir}} en la fila Plumillas a {{ui:Con una tabla de plumillas}}, y luego elija una tabla (color, monocromo, escala de grises) o {{ui:Editar la tabla…}}: cada color recibe el color, el grosor y la trama con que se imprime. La tabla es el archivo de estilo de trazado de CadCraft, así que {{ui:Importar…}} acepta una tabla hecha en la aplicación CadCraft y {{ui:Exportar}} devuelve una. El modelo conserva su elección; si no hay ninguna, decide la forma de trabajo.

## Reportar un elemento como otra clase

Una losa dibujada como carretera, un muro usado como panel o un techo con forma de rampa: conserve la herramienta con la que lo dibujó y repórtelo como lo que realmente es.

1. Seleccione el elemento y abra {{ui:Propiedades}}. Abra {{ui:Reportar como}}.
2. Escriba en el cuadro de búsqueda para encontrar una clase que se ajuste a la forma, elíjala junto con su tipo predefinido. Para un tipo propio, elija USERDEFINED y asígnele un nombre.
3. {{ui:Aplicar}} (un paso de deshacer). {{ui:Borrar}} lo reporta de nuevo como se dibujó.

Sigue editándolo con la herramienta con que se dibujó. El IFC guardado lo escribe con la clase reportada, así que otros programas, la cuantificación de {{ui:Cantidades}}, Buscar, Colorear por, las verificaciones del modelo y {{ui:Problemas}} lo cuentan como esa clase. Las tablas de planificación excluyen de la lista de muros a un muro reportado como panel, y {{ui:Elementos por clase reportada}} los enumera todos. Funciona en archivos IFC4 e IFC2X3; la lista ofrece solo las clases que admite la versión IFC del archivo. Las puertas, ventanas, escaleras, espacios y niveles conservan su propia clase.

## Guardar un proyecto como plantilla e iniciar desde ella

1. Con un proyecto abierto, haga clic en {{ui:Guardar como plantilla}} junto a {{ui:Guardar}}.
2. Asígnele un nombre. Marque {{ui:Descargar también el archivo de plantilla}} para compartirla como archivo IFC, y {{ui:Empezar los modelos nuevos con ella}} para hacerla su predeterminada.
3. Una plantilla conserva los niveles, las plantillas de vista y la configuración de vistas, las vistas duplicadas y las llamadas, el dibujo, las plumillas y la tabla de plumillas, las etiquetas, las familias y los tipos, las hojas, los tamaños de hoja, los cajetines y la forma de trabajo. Los muros, las losas, las puertas y los demás elementos del modelo no se incluyen.
4. Haga clic en {{ui:Edificio nuevo}} y elíjalo en {{ui:Empezar con}}, o elija {{ui:Un archivo de plantilla…}} para una que le hayan enviado. El proyecto nuevo recibe su propio nombre y su propia identidad de proyecto; todo lo demás es como lo tiene la plantilla.

:::note
Las plantillas se guardan en este navegador. Las plantillas de equipo compartidas mediante CadCraft Studio aún no están disponibles: envíe el archivo de plantilla en su lugar.
:::
