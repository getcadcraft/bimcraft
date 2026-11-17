---
title: Punktu mākoņu formāti: kas atveras un ko eksportēt
summary: Kuri lāzerskenēšanas faili atveras 3D skatā, kuri ir skenera ražotāja paša formāts un ko eksportēt no skenera programmatūras, lai skenējums šeit atvērtos.
keywords: punktu mākonis, lāzerskenēšana, skenējums, formāti, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, eksports, nevar atvērt, nav nolasīts
from: 1e985f01
---

## Ko šeit var atvērt

Atveriet šos ar {{ui:Atvērta}} vai ievelkot tos lapā (skatiet tēmu par punktu mākoņa rādīšanu blakus modelim):

| Formāts | Paplašinājums | Ko nolasa |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punkti, krāsas, intensitāte, LiDAR klases, koordinātu sistēma. LAZ līdz 1 GB. |
| E57 | `.e57` | Katrs skenējums failā, katrs novietots pēc savas pozas; krāsas vai intensitāte, ja failā nav krāsu. Attēli failā netiek ņemti vērā (par to tiek paziņots). Pašlaik līdz 6 miljoniem punktu un 512 MB: lielākus skenējumus eksportējiet kā LAS vai LAZ. |
| PLY | `.ply` | Teksts un binārs (abas baitu secības): virsotņu x y z, krāsas un intensitāte. Virsmas netiek ņemtas vērā (par to tiek paziņots). |
| PCD | `.pcd` | Teksts un binārs: x y z, saliktas vai atsevišķas krāsas, intensitāte. Saspiesti PCD faili vēl netiek nolasīti: saglabājiet tos kā binārus vai teksta failus. |
| PTX | `.ptx` | Viens vai vairāki skenējumi, katrs novietots ar savu transformāciju; punkti, ko skeneris nenomērīja, netiek ņemti vērā. Metri. |
| PTS, XYZ | `.pts`, `.xyz` | Teksts: x y z, ar intensitāti un krāsām, ja šīs kolonnas ir. |

## Faili, ko nolasa tikai skenera programmatūra

Daži skenēšanas faili ir skenera ražotāja paša formāts bez publicēta apraksta un bez atvērta lasītāja. BimCraft tos nevar nolasīt, un, tos atverot, parādās kartīte, kas paskaidro, kas tas ir un ko darīt. Eksportējiet skenējumu no ražotāja programmatūras kā E57 vai LAS (vai PTX, PTS) un tad atveriet eksportēto failu.

| Fails | Paplašinājums | Eksportējiet no |
|---|---|---|
| ReCap projekts | `.rcp` | ReCap: atveriet projektu un eksportējiet to. Projekts tikai norāda uz saviem skenējumiem, tāpēc viens pats `.rcp` punktus nedod. |
| ReCap skenējums | `.rcs` | ReCap: atveriet projektu, kuram skenējums pieder, un eksportējiet to. |
| FARO skenējums | `.fls` | FARO SCENE. |
| Leica skenējums | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble skenējums | `.tzf` | Trimble RealWorks vai Trimble Business Center. |
| Z+F skenējums | `.zfs` | Z+F LaserControl. |

:::tip
Kad eksports prasa formātu, LAS vai LAZ saglabā visu, ko BimCraft rāda (krāsas, intensitāti, klases un koordinātu sistēmu), mazākā failā.
:::

## Kāpēc šie faili netiek nolasīti

Šie formāti nav publicēti, un vienīgais veids, kā tos nolasīt, ir katra ražotāja pašu programmatūras bibliotēka saskaņā ar tās noteikumiem. BimCraft nolasa tikai formātus, ko var nolasīt ar savu kodu jūsu datorā, tāpēc skenējums nekad nav jānosūta, lai to atvērtu.
