---
title: Abrir y exportar IFC5 alpha (archivos IFCX)
summary: Una opción de laboratorio para el formato de archivo IFC5 alpha (.ifcx): abrir un archivo con sus capas, ver lo que la lectura no pudo verificar, y exportar los modelos abiertos. El formato todavía cambia, así que leé primero.
keywords: ifc5, ifcx, alfa, buildingsmart, json, capas, esquema, laboratorio, cantidades, qto, exportar, importar
from: cffe1669
---

IFC5 alpha (archivo que termina en {{ui:.ifcx}}) es el formato de archivo que buildingSMART todavía está diseñando. No es final: los archivos, y nuestra lectura de ellos, pueden cambiar. Por eso esto es una opción de laboratorio y por eso se lee primero.

## Activarlo

1. Escogé {{ui:Configuración}}, y después la sección {{ui:IFC5 alpha (IFCX)}} de la pestaña BimCraft.
2. Marcá {{ui:IFC5 alpha (IFCX) - el formato todavía cambia; leé primero}}.

Viene desactivado por defecto. Mientras esté apagado, un archivo .ifcx se rechaza con una frase que apunta acá. {{ui:Abrir IFC5 alpha (.ifcx)…}} y el botón de exportación {{ui:IFC5 alpha}} aparecen cuando está activado.

## Abrir

- Escogé un archivo .ifcx con {{ui:Abrir un archivo o una carpeta}} (reemplaza el modelo abierto, después de la pregunta habitual sobre cambios), o
- escogé {{ui:Abrir IFC5 alpha (.ifcx)…}} y elegí varios archivos juntos: el archivo, sus capas y los archivos de esquema que importa. Con un modelo ya abierto, el archivo se **agrega al lado**; la x de la lista de modelos lo quita otra vez, que es el deshacer.

Un archivo IFCX lista nodos (una ruta, sus hijos, lo que hereda, sus atributos). Varios archivos pueden describir el mismo nodo: un archivo posterior (una capa) sobrescribe los atributos de uno anterior, y un hijo nulo quita un hijo. BimCraft los compone, y después dibuja el resultado como un pequeño modelo IFC4: proyecto, sitio, edificio, pisos y elementos con nombres, clases, propiedades, cantidades, colores y mallas.

No se descarga nada de la red. Los archivos de esquema que importa un archivo (por ejemplo `ifc@v5a.ifcx`) se usan solo si los elegiste junto con el archivo; si no, el informe lo dice y los atributos se leen sin verificación de tipo.

### El informe

Después de abrir, un informe lista lo que encontró la lectura: datos que no coinciden con su esquema, archivos de esquema no dados, atributos que no tienen significado IFC aquí. Los atributos sin correspondencia se **conservan** en el modelo, no se descartan, y se vuelven a escribir al exportar.

## Qué se convierte en qué

| En el archivo IFCX | En BimCraft |
|---|---|
| Un nodo con una clase IFC (proyecto, sitio, edificio, piso, muro …) | El elemento IFC4 correspondiente; una clase que esta lectura no conoce se convierte en un proxy de elemento de edificio |
| El nombre que el nodo tiene bajo su padre | El nombre del elemento |
| Atributos con un tipo de cantidad (Longitud, Superficie, Volumen, Masa …) | Un conjunto de cantidades IFC4 llamado `Qto_IFCX` (las cantidades IFC4 siguen siendo conjuntos `Qto_*` IFC4) |
| Otros atributos de propiedad | Un conjunto de propiedades llamado `Pset_IFCX` |
| Atributos de malla y de transformación | Los triángulos y la ubicación del elemento; las mallas invisibles no se dibujan |
| Color, opacidad, material, clasificación | Estilo de superficie, material y clasificación del elemento |

Las unidades se toman como metros, con Z hacia arriba: el alfa dice que las unidades se documentarán más adelante.

## Exportar

Escogé {{ui:IFC5 alpha}} en la barra de herramientas, leé la nota, y después {{ui:Exportar .ifcx}}. El archivo tiene nuestro propio encabezado (autor CadCraft, versión ifcx_alpha) y dice en sí mismo que es el formato alfa. Cada modelo se escribe en sus propias coordenadas de archivo, en metros, con nombres, clases, conjuntos de propiedades, cantidades (como atributos con su tipo), colores y triángulos. Las capas y la herencia se escriben aplanadas. Verificá el archivo en el programa al que lo mandes.

## Límites

- La geometría curva (curvas, superficies) no se lee: solo mallas de triángulos.
- Las puertas y ventanas dentro de un muro se colocan en el piso; el muro del que salieron no queda vinculado.
- Los nombres de conjuntos `Qto_*` de IFC4 se conservan como grupos de atributos propios (`cadcraft::qto::…`); el esquema alfa estándar tiene solo unos pocos nombres de cantidad.
- El formato puede cambiar bajo nuestros pies; un archivo hecho hoy puede no leerse mañana.
