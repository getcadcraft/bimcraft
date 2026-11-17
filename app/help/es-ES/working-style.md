---
title: Estilo de trabajo, vistas duplicadas, plumas en papel, Informar como y plantillas
summary: Elija cómo se comporta BimCraft según su forma de trabajar, duplique cualquier vista como copia propia o vinculada, conserve las modificaciones de plumas en el archivo e imprima tal como se ve o mediante una tabla de plumas, informe un elemento como otra clase IFC e inicie proyectos a partir de sus propias plantillas.
keywords: estilo de trabajo, duplicar vista, duplicar, copiar vista, vista dependiente, vista vinculada, copia propia, copia de vista, modificaciones de plumas, plumas, grosores de línea, imprimir como se muestra, tabla de plumas, estilo de trazado, ctb, monocromo, escala de grises, informar como, clase IFC, reclasificar, tipo predefinido, modelo genérico, losa como carretera, muro como panel, cubierta como rampa, plantilla de proyecto, plantilla, nuevo desde plantilla, guardar como plantilla, estándar de la oficina
from: 231d98b0
---

## Qué hará

Configure BimCraft según su forma de trabajar, duplique vistas, imprímalas como espera, cuente los elementos como lo que realmente son y empiece cada proyecto con la plantilla de su oficina.

## Elegir un estilo de trabajo

1. Abra {{ui:Configuración}} y la pestaña {{ui:BimCraft}}. Busque {{ui:Estilo de trabajo}}.
2. Elija una opción:
   - {{ui:Cada vista la suya}} (la primera opción): una vista duplicada copia sus anotaciones y siguen siendo de esa vista; las hojas se imprimen tal como se ve en pantalla.
   - {{ui:Anotaciones y tablas de plumas compartidas}}: las vistas duplicadas comparten sus anotaciones; la impresión pasa por una tabla de plumas.
3. Debajo de la opción están las cuatro cosas que configura. Cambie cualquiera de ellas por separado; el estilo pasará entonces a mostrar {{ui:Personalizado}}.

El estilo de trabajo se guarda en este navegador, igual que la disposición del espacio de trabajo. Una plantilla lo traslada a los modelos nuevos.

## Duplicar una vista

1. En el {{ui:Navegador del proyecto}}, cada planta, plano de techos, llamada, alzado y sección tiene un botón {{ui:Duplicar}} (dos hojas).
2. Asigne un nombre a la copia y elija su comportamiento:
   - {{ui:Copia propia}}: su delineación, cotas, recorte, elementos ocultos y plumas se copian y siguen siendo suyos. Editar cualquiera de las dos vistas nunca cambia la otra, así que una vista en una hoja emitida se mantiene como se emitió.
   - {{ui:Vinculado}}: muestra la misma vista con un único conjunto de anotaciones y ajustes.
3. La copia aparece en {{ui:Vistas duplicadas}}. Haga clic en ella para abrirla; la barra sobre la planta indica que es una copia, con {{ui:Subir}} para volver a su vista.
4. Su botón de deslizador abre sus ajustes: el nombre, {{ui:Rango de vista}} (una copia propia tiene el suyo), {{ui:Hacer copia propia}} para una vinculada, y {{ui:Eliminar}}.

Las copias de alzados y secciones se colocan en sus propias hojas, como las vistas de las que proceden. Duplicar es un solo paso de deshacer, y las copias se guardan en el IFC junto a las llamadas.

## Plumas guardadas con la vista e impresas tal como se muestran

1. Active {{ui:Dibujo}} y elija {{ui:Plumas}}.
2. {{ui:Para}} muestra ahora todas las categorías: muros, puertas y ventanas, losas, cubiertas, pilares, escaleras, mobiliario y el resto, además de delineación y cotas.
3. {{ui:Aplicar}} guarda la pluma en el IFC con la vista mostrada: una planta, un plano de techos, una llamada o una vista duplicada. Las plumas creadas antes de la versión 0.9 se guardaban en el navegador; {{ui:Conservar estas en el archivo}} las traslada.
4. Las hojas y el PDF dibujan cada pluma tal como se ve en pantalla.

Para imprimir en cambio mediante una tabla de plumas, establezca {{ui:Imprimir}} en la fila Plumas en {{ui:Mediante una tabla de plumas}}, y luego elija una tabla (color, monocromo, escala de grises) o {{ui:Editar tabla de plumas…}}: cada color recibe el color, el grosor y la trama con que se imprime. La tabla es el archivo de estilos de trazado de CadCraft, así que {{ui:Importar…}} acepta una tabla creada en la aplicación CadCraft y {{ui:Exportar}} devuelve una. El modelo conserva su elección; si no hay ninguna, decide el estilo de trabajo.

## Informar un elemento como otra clase

Una losa dibujada como carretera, un muro usado como panel o una cubierta con forma de rampa: conserve la herramienta con la que lo dibujó e infórmelo como lo que es.

1. Seleccione el elemento y abra {{ui:Propiedades}}. Abra {{ui:Informar como}}.
2. Escriba en el cuadro de búsqueda para encontrar una clase que se ajuste a la forma, elíjala y elija su tipo predefinido. Para un tipo propio, elija USERDEFINED y asígnele un nombre.
3. {{ui:Aplicar}} (un solo paso de deshacer). {{ui:Borrar}} lo vuelve a informar como se dibujó.

Sigue editándolo con la herramienta con que se dibujó. El IFC guardado lo escribe con la clase informada, así que otros programas, el cálculo de mediciones de {{ui:Cantidades}}, Buscar, Color por, las comprobaciones del modelo y {{ui:Problemas}} lo cuentan como esa clase. Las tablas dejan fuera de la tabla de muros un muro informado como panel, y {{ui:Elementos por clase informada}} los enumera todos. Funciona en archivos IFC4 e IFC2X3; la lista ofrece solo las clases que admite la versión IFC del archivo. Las puertas, ventanas, escaleras, habitaciones y niveles mantienen su propia clase.

## Guardar un proyecto como plantilla y empezar a partir de ella

1. Con un proyecto abierto, haga clic en {{ui:Guardar como plantilla}} junto a {{ui:Guardar}}.
2. Asígnele un nombre. Marque {{ui:También descargar el archivo de plantilla}} para compartirla como archivo IFC, y {{ui:Empezar los nuevos modelos con ella}} para hacerla su predeterminada.
3. Una plantilla conserva los niveles, las plantillas de vista y los ajustes de vista, las vistas duplicadas y las llamadas, la delineación, las plumas y la tabla de plumas, las etiquetas, las familias y los tipos, las hojas, los tamaños de hoja, los cajetines y el estilo de trabajo. Los muros, suelos, puertas y demás elementos del modelo se excluyen.
4. Haga clic en {{ui:Edificio nuevo}} y elíjala en {{ui:Empezar desde}}, o elija {{ui:Un archivo de plantilla…}} para una que le hayan enviado. El proyecto nuevo tiene su propio nombre y su propia identidad de proyecto; lo demás es como lo tiene la plantilla.

:::note
Las plantillas se guardan en este navegador. Las plantillas de equipo compartidas a través de CadCraft Studio todavía no están disponibles: envíe en su lugar el archivo de plantilla.
:::
