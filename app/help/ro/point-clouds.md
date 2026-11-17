---
title: Afișarea unui nor de puncte alături de model
summary: Deschideți o scanare laser (LAS, LAZ, E57, PLY, PCD, PTX, PTS sau XYZ) în vizualizarea 3D singură sau cu un model IFC, colorați-o, tăiați o felie subțire prin ea, măsurați până la punctele sale și trimiteți-o aplicației de desen ca să trasați liniile conform cu execuția.
keywords: nor de puncte, scanare laser, scanare, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, conform cu execuția, conform execuției, releveu, înregistrare, felie, tăiere în plan, agățare, măsurare, trasare, scanare în BIM
from: d0a3e740
---

## Ce urmează să faceți

Priviți o scanare laser a unei clădiri alături de modelul său: verificați dacă ce s-a construit corespunde proiectului, măsurați între punctele scanate și tăiați o felie subțire ca să citiți pereții, ușile și stâlpii.

## Pași

1. Deschideți norul: {{ui:Deschisă}} un fișier `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` sau `.xyz`, sau glisați-l pe pagină (vezi subiectul despre formatele de nor de puncte pentru ce aduce fiecare și ce să exportați din software-ul propriu al scanerului). Cu un model deschis, norul se alătură modelului în vizualizarea 3D; deschiderea unui nor nu închide niciodată modelul sau modificările sale nesalvate. Fără model, norul se deschide singur.
2. Bara norului apare sub bara de instrumente. Arată câte puncte se văd și câte are fișierul.
3. Alegeți {{ui:Colorare după}}: culorile proprii ale fișierului (când scanerul le-a stocat), {{ui:Înălțime}}, {{ui:Intensitate}}, {{ui:Clasă}} (clase LiDAR precum sol, vegetație și clădire) sau {{ui:O singură culoare}}. {{ui:Dimensiune}} face punctele mai mari sau mai mici.
4. Faceți clic pe {{ui:Plan}} sub {{ui:Felie}} ca să păstrați doar o bandă subțire de 1.2 m deasupra celui mai jos punct, văzută de sus: pereții, golurile ușilor și stâlpii se citesc ca un plan de etaj. {{ui:Față}} și {{ui:Lateral}} taie benzi verticale pentru fațade și secțiuni. Mutați banda cu {{ui:La}} și schimbați {{ui:Grosime}} (metri). {{ui:Dezactivat}} arată din nou întregul nor.
5. Faceți clic pe {{ui:Măsurare}} din bara de instrumente. Indicatorul se agață de punctele norului (eticheta spune „nor de puncte”), deci puteți măsura de la perete la perete în felie sau de la un element al modelului până la scanare. Un colț sau o muchie a modelului aflată la îndemână are prioritate.
6. Cu {{ui:Măsurare}} › {{ui:Locație}}, un punct al norului dă latitudinea și longitudinea sa din sistemul de coordonate propriu al norului, când fișierul indică unul.
7. {{ui:Ascundere}} ascunde norul pentru puțin timp; {{ui:Eliminare}} îl scoate. {{ui:Afișare}} › {{ui:Nor de puncte}} ascunde sau arată bara.

## Unde se așază norul

{{ui:Plasare}} din bară spune cum se aliniază norul cu modelul:

- **Coordonate ale modelului**: numerele norului sunt ale modelului (o scanare înregistrată în coordonatele proiectului).
- **Coordonate de hartă**: modelul are o conversie de hartă (IfcMapConversion), iar norul se află în același sistem proiectat: norul se plasează prin ea. Dacă cele două indică sisteme diferite, linia de stare spune asta.
- **Centrat pe model**: când niciuna nu așază norul aproape de model, mijlocul său ajunge pe mijlocul modelului, iar cel mai jos punct al său pe nivelul modelului. Alegeți altă opțiune ca să o suprascrieți.

Când fișierul nu indică unitățile, BimCraft citește metri și oferă {{ui:Unități}} în bară.

## Trasați liniile conform cu execuția

Faceți clic pe {{ui:Trasare în CadCraft}} ca să trimiteți norul aplicației de desen, într-o filă nouă. Acesta se deschide acolo sub desen, unde o felie în plan și agățarea de obiecte vă lasă să desenați pereții peste scanare. Vezi subiectul CadCraft despre norii de puncte.

## Câte puncte

O scanare poate avea sute de milioane de puncte. BimCraft citește fiecare punct o dată și păstrează o parte egală din ele pentru desen: {{ui:Afișare}} din bară stabilește câte (1, 2, 5 sau 10 milioane). Mai multe puncte cer mai multă memorie și o placă grafică mai rapidă. Numărările pe clasă LiDAR sunt din fiecare punct al fișierului.

:::note
Fișierele sunt citite pe acest calculator; nimic nu este încărcat. Se citesc LAS 1.0–1.4 și LAZ (fișiere LAZ până la 1 GB, ținute în memorie cât timp sunt citite); fișiere E57 de până la 6 milioane de puncte și 512 MB deocamdată (scanările mai mari: exportați LAS sau LAZ); PLY, PCD și PTX integral; norii text sunt `x y z`, cu coloanele de culoare (`r g b`) și de intensitate când există.
:::

## Mai multe scanări

Scanările luate din poziții diferite pot fi înregistrate într-un singur cadru, rafinate cu ICP și exportate ca un singur LAS sau E57: vezi [Înregistrarea mai multor scanări într-una](topic:register-scans).
