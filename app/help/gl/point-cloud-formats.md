---
title: Formatos de nube de puntos: que se abre e que exportar
summary: Que ficheiros de escaneo láser se abren na vista 3D, cales son formato propio do fabricante do escáner e que exportar desde o software do escáner para que o escaneo se abra aquí.
keywords: nube de puntos, escaneo láser, escaneo, formatos, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, exportar, non se abre, non se le
from: 1e985f01
---

## Que se abre aquí

Ábrao con {{ui:Open}} ou arrastrándoos á páxina (consulte o tema sobre como mostrar unha nube de puntos xunto ao modelo):

| Formato | Extensión | Que se le |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: puntos, cores, intensidade, clases LiDAR, o sistema de coordenadas. LAZ ata 1 GB. |
| E57 | `.e57` | Cada escaneo do ficheiro, colocado segundo a súa pose; cores, ou intensidade cando o ficheiro non ten cores. As imaxes do ficheiro quedan fóra (indícao). Ata 6 millóns de puntos e 512 MB por agora: exporte os escaneos máis grandes como LAS ou LAZ. |
| PLY | `.ply` | Texto e binario (ambas ordes de bytes): os vértices x y z, cores e intensidade. As caras quedan fóra (indícao). |
| PCD | `.pcd` | Texto e binario: x y z, cores empaquetadas ou separadas, intensidade. Os ficheiros PCD comprimidos aínda non se len: gárdeos como binario ou texto. |
| PTX | `.ptx` | Un ou varios escaneos, cada un colocado pola súa propia transformación; os puntos que o escáner non medeu quedan fóra. En metros. |
| PTS, XYZ | `.pts`, `.xyz` | Texto: x y z, con intensidade e cores cando as columnas están. |

## Ficheiros que só le o software do escáner

Algúns ficheiros de escaneo son formato propio do fabricante do escáner, sen descrición publicada nin lector aberto. BimCraft non os pode ler, e ao abrir un mostra unha tarxeta que indica o que é e o que facer. Exporte o escaneo desde o software do fabricante como E57 ou LAS (ou PTX, PTS) e despois abra o ficheiro exportado.

| Ficheiro | Extensión | Exportar desde |
|---|---|---|
| Proxecto ReCap | `.rcp` | ReCap: abra o proxecto e expórtao. O proxecto só apunta aos seus escaneos, así que copiar só o `.rcp` non dá puntos. |
| Escaneo ReCap | `.rcs` | ReCap: abra o proxecto ao que pertence o escaneo e expórtao. |
| Escaneo FARO | `.fls` | FARO SCENE. |
| Escaneo Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Escaneo Trimble | `.tzf` | Trimble RealWorks ou Trimble Business Center. |
| Escaneo Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Cando a exportación pida un formato, LAS ou LAZ mantén todo o que BimCraft mostra (cores, intensidade, clases e o sistema de coordenadas) no ficheiro máis pequeno.
:::

## Por que estes ficheiros non se len

Eses formatos non están publicados, e a única forma de lelos é a biblioteca de software de cada fabricante, baixo as súas propias condicións. BimCraft só le formatos que pode ler co seu propio código no seu computador, así que un escaneo nunca ten que enviarse a ningún lugar para abrirse.
