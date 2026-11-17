---
title: Deschiderea scenei într-un alt program
summary: Salvați scena ca fișier USD sau glTF pentru orice program care le citește sau deschideți-o din Studio într-un program de pe acest calculator.
keywords: deschidere în, usd, gltf, glb, export, program de randare, archviz, studio, usdview, trimitere, predare, pachet, dosar unreal
from: 0a6559ee
---

Alegeți o intrare **Deschidere în** din lista Motor a {{ui:Randare}} pentru a duce scena la alt program. Nimic nu revine în model.

## Un fișier pentru orice program

- **Fișier USD** salvează scena ca `.usdc` (sau `.usdz` când modelul are imagini): [același fișier ca Salvare ca USD](topic:usd), cu materiale, lămpi și camere. Păstrează instanțierea și valorile exacte ale materialelor. Majoritatea programelor de randare, motoarelor de jocuri și vizualizatoarelor citesc USD.
- **Fișier glTF (.glb)** salvează fișierul glTF 2.0, mai ușor, cu materiale, texturi și lămpi; vezi [Trimiterea modelului către un program de randare](topic:model-for-rendering) pentru ce conține și ce lasă afară.
- **Dosar de proiect Unreal (.zip)** salvează dosarul pe care îl scrie [Trimiterea scenei către un motor de joc](topic:render-unreal), pentru un proiect pe orice calculator.

Toate trei funcționează în browser și în Studio.

## În Studio: deschiderea într-un program

Studio listează programele pe care le găsește pe acest calculator și care pot deschide scena: usdview, dacă este în calea de căutare, și programul calculatorului pentru tipul fișierului. Alegeți unul, alegeți USD sau glTF acolo unde citește ambele, și faceți clic pe {{ui:Randare}}. Studio scrie pachetul într-un dosar nou din Documente (`CadCraft hand-off`; nimic nu este suprascris, fiecare trimitere are dosarul ei) și pornește programul pe el, apoi spune unde sunt fișierele.

| Program | Citește cel mai bine |
|---|---|
| usdview | USD |
| Programul calculatorului | Ce are calculatorul pentru tipul de fișier |

Studio pornește doar programele din această listă fixă; nu rulează nimic ce cere pagina pe nume și nu pornește niciodată un program sub licența GNU GPL (vezi [Desenarea imaginii cu alt program](topic:render-other-program#programs-cadcraft-never-runs)). Orice program care citește USD sau glTF deschide fișierul din **Un fișier pentru orice program** de mai sus.

:::note
Twinmotion, Enscape și alte programe de vizualizare nu sunt în listă: CadCraft nu a fost verificat cu ele și nu face nicio afirmație despre ele. Un fișier glTF sau USD de aici este calea de intrare; vezi notele despre [programele de randare de tip plug-in](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
