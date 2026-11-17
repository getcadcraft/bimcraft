---
title: Model dintr-o scanare
summary: Un scurt ghid de la o scanare laser la pereți: deschideți un nor de puncte lângă o clădire nouă, aliniați-l cu un nivel și conturați-i pereții pe plan.
keywords: scanare, scanare laser, nor de puncte, conform execuției, clădire existentă, releveu, conturare, scanare în BIM, model dintr-o scanare, felie, aliniere, ortogonal, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Ce veți face

Desenați o clădire existentă după scanarea ei laser: pereți acolo unde îi arată scanarea, la nivelul corect, perpendiculari unii pe alții.

## Pași

1. **O clădire în care să desenați.** {{ui:Fișier}} › {{ui:Clădire nouă}}, cu atâtea niveluri câte are clădirea (puteți adăuga niveluri mai târziu, vezi [Terenul, clădirea de pe el și nivelurile sale](topic:site-building-and-levels)). {{ui:Desenare}} se activează.
2. **Scanarea.** {{ui:Afișare}} › {{ui:Nor de puncte}} și alegeți fișierul (LAS, LAZ, E57, PLY, PCD, PTX sau XYZ: vezi [Afișarea unui nor de puncte lângă model](topic:point-clouds)). Norul apare în vizualizarea 3D, iar planul arată **felia** lui: punctele scanate la 1200 mm (4 feet) deasupra nivelului, sub formă de puncte. Aceasta este înălțimea la care pereții, ușile și ferestrele se citesc cel mai bine.
3. **Aliniați-l cu nivelul.** Deschideți meniul {{ui:Scanare}} din bara modelului și faceți clic pe {{ui:Aliniere podea la acest nivel}}: norul se mută în sus sau în jos până când podeaua scanată stă pe nivelul afișat. Verificați că acum felia taie pereții.
4. **Perpendicular pe clădire.** {{ui:Scanare}} › {{ui:Aliniere la clădire}} rotește norul astfel încât pereții din felia lui să fie pe axele planului, iar pereții pe care îi desenați cu {{key:Shift}} apăsat se aliniază cu scanarea. Se rotește în jurul mijlocului pereților pe care i-a găsit, astfel încât copacii sau peretele unui vecin prins în felie nu îndepărtează scanarea de la locul ei. Aliniați întâi podeaua: felia taie apoi pereții.
5. **Conturați pereții.** Alegeți {{ui:Perete}} și faceți clic de-a lungul punctelor: instrumentul se agață de punctele scanate (marcajul de agățare este un romb mic), precum și de pereții pe care i-ați desenat. Un perete se desenează pe linia lui de mijloc, deci faceți clic pe mijlocul celor două rânduri de puncte pe care le lasă un perete; tastați grosimea lui alegând întâi tipul de perete. Apoi adăugați ușile și ferestrele acolo unde felia arată golurile.
6. **Nivelul următor.** Alegeți nivelul de deasupra din lista de niveluri a planului: felia urmează înălțimea de tăiere a nivelului. Aliniați din nou podeaua la acel nivel doar dacă etajele din scanare nu se află unde se află nivelurile.

## Ce ar trebui să vedeți

- Felia se schimbă când schimbați nivelul, iar o felie mai groasă ({{ui:Scanare}} › {{ui:Grosimea feliei}}) arată mai multe puncte acolo unde scanarea este subțire.
- {{ui:Scanare}} › {{ui:Anulare aliniere}} readuce norul la locul unde a fost plasat când s-a deschis. Alinierea mută norul doar în vizualizare: nu se salvează în fișierul IFC, iar pereții pe care i-ați desenat rămân pe loc. Alinierea merge cu norul când schimbați {{ui:Plasare}} sau {{ui:Unități}}, sau când deschideți alt model.
- {{ui:Scanare}} › {{ui:Afișare felie pe plan}} ascunde sau arată punctele.

:::tip
Scanări mari: planul desenează până la 60,000 de puncte din felie, iar vizualizarea 3D câteva milioane din tot norul, ambele alese uniform prin scanare, astfel încât un fișier mare rămâne rapid. Ca să conturați în aplicația de desenare, folosiți {{ui:Urmărire în CadCraft}} din bara norului.
:::
