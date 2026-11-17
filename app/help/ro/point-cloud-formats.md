---
title: Formate de nor de puncte: ce se deschide și ce se exportă
summary: Ce fișiere de scanare laser se deschid în vizualizarea 3D, care sunt formatul propriu al unui producător de scanere și ce să exportați din software-ul scanerului ca scanarea să se deschidă aici.
keywords: nor de puncte, scanare laser, scanare, formate, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, export, nu se poate deschide, nu este citit
from: 1e985f01
---

## Ce se deschide aici

Deschideți-le cu {{ui:Deschisă}} sau prin glisare pe pagină (vezi subiectul despre afișarea unui nor de puncte alături de model):

| Format | Extensie | Ce se citește |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: puncte, culori, intensitate, clase LiDAR, sistemul de coordonate. LAZ până la 1 GB. |
| E57 | `.e57` | Fiecare scanare din fișier, plasată după poziția sa; culori, sau intensitate când fișierul nu are culori. Imaginile din fișier sunt lăsate afară (se spune). Până la 6 milioane de puncte și 512 MB deocamdată: exportați scanările mai mari ca LAS sau LAZ. |
| PLY | `.ply` | Text și binar (ambele ordini de octeți): x, y, z ale vârfurilor, culori și intensitate. Fețele sunt lăsate afară (se spune). |
| PCD | `.pcd` | Text și binar: x y z, culori împachetate sau separate, intensitate. Fișierele PCD comprimate nu se citesc încă: salvați-le binar sau text. |
| PTX | `.ptx` | Una sau mai multe scanări, fiecare plasată prin propria transformare; punctele pe care scanerul nu le-a măsurat sunt lăsate afară. Metri. |
| PTS, XYZ | `.pts`, `.xyz` | Text: x y z, cu intensitate și culori când coloanele există. |

## Fișiere pe care le citește doar software-ul scanerului

Unele fișiere de scanare sunt formatul propriu al unui producător de scanere, fără descriere publicată și fără cititor deschis. BimCraft nu le poate citi, iar deschiderea unuia afișează un card care spune ce este și ce de făcut. Exportați scanarea din software-ul producătorului ca E57 sau LAS (sau PTX, PTS), apoi deschideți fișierul exportat.

| Fișier | Extensie | Exportați din |
|---|---|---|
| Proiect ReCap | `.rcp` | ReCap: deschideți proiectul și exportați-l. Proiectul doar indică scanările sale, deci copierea doar a `.rcp` nu dă niciun punct. |
| Scanare ReCap | `.rcs` | ReCap: deschideți proiectul căruia îi aparține scanarea și exportați-l. |
| Scanare FARO | `.fls` | FARO SCENE. |
| Scanare Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Scanare Trimble | `.tzf` | Trimble RealWorks sau Trimble Business Center. |
| Scanare Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Când exportul cere un format, LAS sau LAZ păstrează tot ce arată BimCraft (culori, intensitate, clase și sistemul de coordonate) în cel mai mic fișier.
:::

## De ce aceste fișiere nu sunt citite

Aceste formate nu sunt publicate, iar singura cale de a le citi este biblioteca software proprie a fiecărui producător, sub termenii săi. BimCraft citește doar formatele pe care le poate citi cu propriul cod pe calculator, deci o scanare nu trebuie trimisă nicăieri ca să se deschidă.
