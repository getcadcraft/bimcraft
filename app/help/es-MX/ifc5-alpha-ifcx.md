---
title: Abrir y exportar IFC5 alfa (archivos IFCX)
summary: Una opción de laboratorio para el formato de archivo IFC5 alfa (.ifcx): abra un archivo con sus capas, vea lo que la lectura no pudo verificar y exporte los modelos abiertos. El formato sigue cambiando, así que lea primero.
keywords: ifc5, ifcx, alfa, buildingsmart, json, capas, esquema, laboratorio, cantidades, qto, exportar, importar
from: cffe1669
---

IFC5 alfa (archivo con extensión {{ui:.ifcx}}) es el formato de archivo que buildingSMART todavía está diseñando. No es definitivo: los archivos, y nuestra interpretación de ellos, pueden cambiar. Por eso es una opción de laboratorio y por eso conviene leer primero.

## Activarla

1. Elija {{ui:Configuración}}, y después la sección {{ui:IFC5 alfa (IFCX)}} de la pestaña BimCraft.
2. Marque {{ui:IFC5 alfa (IFCX): el formato sigue cambiando; primero leer}}.

Está desactivada de forma predeterminada. Mientras esté desactivada, un archivo .ifcx se rechaza con una frase que remite a esta página. {{ui:Abrir IFC5 alfa (.ifcx)…}} y el botón de exportación {{ui:IFC5 alfa}} aparecen cuando está activada.

## Abrir

- Elija un archivo .ifcx con {{ui:Abrir un archivo o una carpeta}} (reemplaza el modelo abierto, después de la pregunta habitual sobre cambios), o
- elija {{ui:Abrir IFC5 alfa (.ifcx)…}} y seleccione varios archivos juntos: el archivo, sus capas y los archivos de esquema que importa. Con un modelo ya abierto, el archivo se **agrega junto a él**; la x de la lista de modelos lo quita de nuevo, lo que equivale a deshacer.

Un archivo IFCX enumera nodos (una ruta, sus hijos, lo que heredan y sus atributos). Varios archivos pueden describir el mismo nodo: un archivo posterior (una capa) sobrescribe los atributos de uno anterior, y un hijo nulo quita un hijo. BimCraft los compone y luego dibuja el resultado como un pequeño modelo IFC4: proyecto, sitio, edificio, niveles y elementos con nombres, clases, propiedades, cantidades, colores y mallas.

Nada se descarga de la red. Los archivos de esquema que importa un archivo (por ejemplo `ifc@v5a.ifcx`) solo se usan si los eligió junto con el archivo; de lo contrario, el informe lo indica y los atributos se leen sin verificación de tipo.

### El informe

Tras abrir, un informe enumera lo que encontró la lectura: datos que no coinciden con su esquema, archivos de esquema no proporcionados, atributos que no tienen significado IFC aquí. Los atributos sin correspondencia se **conservan** en el modelo, no se descartan, y se vuelven a escribir al exportar.

## Qué se convierte en qué

| En el archivo IFCX | En BimCraft |
|---|---|
| Un nodo con una clase IFC (proyecto, sitio, edificio, nivel, muro …) | El elemento IFC4 correspondiente; una clase que esta lectura no conoce se convierte en un proxy de elemento de edificio |
| El nombre que el nodo tiene bajo su padre | El nombre del elemento |
| Atributos con un tipo de cantidad (longitud, área, volumen, masa …) | Un conjunto de cantidades IFC4 llamado `Qto_IFCX` (las cantidades IFC4 siguen en conjuntos `Qto_*` de IFC4) |
| Otros atributos de propiedad | Un conjunto de propiedades llamado `Pset_IFCX` |
| Atributos de malla y de transformación | Los triángulos y la colocación del elemento; las mallas invisibles no se dibujan |
| Color, opacidad, material, clasificación | Estilo de superficie, material y clasificación del elemento |

Las unidades se toman como metros, con Z hacia arriba: el alfa indica que las unidades se documentarán más adelante.

## Exportar

Elija {{ui:IFC5 alfa}} en la barra de herramientas, lea la nota y luego {{ui:Exportar .ifcx}}. El archivo tiene nuestro propio encabezado (autor CadCraft, versión ifcx_alpha) y declara en sí mismo que es el formato alfa. Cada modelo se escribe en sus propias coordenadas de archivo, en metros, con nombres, clases, conjuntos de propiedades, cantidades (como atributos con su tipo), colores y triángulos. Las capas y la herencia se escriben aplanadas. Verifique el archivo en el programa al que lo envíe.

## Límites

- La geometría curva (curvas, superficies) no se lee: solo mallas de triángulos.
- Las puertas y ventanas anidadas en un muro se colocan en el nivel; el muro del que proceden no queda vinculado.
- Los nombres de conjuntos `Qto_*` de IFC4 se conservan como grupos de atributos propios (`cadcraft::qto::…`); el esquema alfa estándar tiene solo unos pocos nombres de cantidad.
- El formato puede cambiar; un archivo hecho hoy puede no leerse mañana.
