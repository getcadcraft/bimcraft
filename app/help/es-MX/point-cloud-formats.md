---
title: "Formatos de nube de puntos: qué se abre y qué exportar"
summary: Qué archivos de escaneo láser se abren en la vista 3D, cuáles son formato propio de un fabricante de escáneres y qué exportar del software del escáner para que el escaneo se abra aquí.
keywords: nube de puntos, escaneo láser, escaneo, formatos, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, exportar, no se puede abrir, no se lee
from: 1e985f01
---

## Qué se abre aquí

Ábralos con {{ui:Abierta}} o arrastrándolos a la página (consulte el tema sobre cómo mostrar una nube de puntos junto al modelo):

| Formato | Extensión | Qué se lee |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: puntos, colores, intensidad, clases LiDAR y el sistema de coordenadas. LAZ de hasta 1 GB. |
| E57 | `.e57` | Cada escaneo del archivo, colocado según su pose; colores, o intensidad cuando el archivo no tiene colores. Las imágenes del archivo se omiten (se indica). Hasta 6 millones de puntos y 512 MB por ahora: exporte los escaneos más grandes como LAS o LAZ. |
| PLY | `.ply` | Texto y binario (ambos órdenes de bytes): las coordenadas x y z de los vértices, colores e intensidad. Las caras se omiten (se indica). |
| PCD | `.pcd` | Texto y binario: x, y, z, colores empaquetados o separados, e intensidad. Los archivos PCD comprimidos todavía no se leen: guárdelos como binario o como texto. |
| PTX | `.ptx` | Uno o más escaneos, cada uno colocado con su propia transformación; los puntos que el escáner no midió se omiten. En metros. |
| PTS, XYZ | `.pts`, `.xyz` | Texto: x, y, z, con intensidad y colores cuando las columnas están presentes. |

## Archivos que solo lee el software del escáner

Algunos archivos de escaneo son formato propio de un fabricante de escáneres, sin descripción publicada ni lector abierto. BimCraft no puede leerlos, y al abrir uno aparece una tarjeta que indica qué es y qué hacer. Exporte el escaneo desde el software del fabricante como E57 o LAS (o PTX, PTS), y luego abra el archivo exportado.

| Archivo | Extensión | Exportar desde |
|---|---|---|
| Proyecto de ReCap | `.rcp` | ReCap: abra el proyecto y expórtelo. El proyecto solo apunta a sus escaneos, así que copiar únicamente el `.rcp` no da puntos. |
| Escaneo de ReCap | `.rcs` | ReCap: abra el proyecto al que pertenece el escaneo y expórtelo. |
| Escaneo FARO | `.fls` | FARO SCENE. |
| Escaneo Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Escaneo Trimble | `.tzf` | Trimble RealWorks o Trimble Business Center. |
| Escaneo Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Cuando la exportación pida un formato, LAS o LAZ conserva todo lo que BimCraft muestra (colores, intensidad, clases y el sistema de coordenadas) en el archivo más pequeño.
:::

## Por qué no se leen estos archivos

Esos formatos no están publicados, y la única forma de leerlos es con la biblioteca de software de cada fabricante, bajo sus propias condiciones. BimCraft solo lee los formatos que puede leer con su propio código en su equipo, así que un escaneo nunca tiene que enviarse a ningún lugar para abrirse.
