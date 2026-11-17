---
title: Deschideți un model IFC și priviți în jur în 3D
summary: Deschideți un fișier IFC, orbitați, panoramați și măriți, și folosiți Potrivire, Sus, Față și Lateral ca să vă orientați.
keywords: ifc, 3d, orbitare, panoramare, zoom, potrivire, vizualizare de sus, vedere din față, vedere laterală, navigare, viewcube, cameră
from: 68b460dd
---

## Ce veți face

Deschideți un model IFC, mișcați-vă prin el în 3D și treceți la vederile standard. Aproximativ cinci minute.

Aveți nevoie de un fișier `.ifc`. Majoritatea programelor BIM îl exportă; în Revit este **File > Export > IFC**. Vezi [Aducerea unui fișier de proiect în 3D prin IFC](topic:rvt-to-ifc).

## Pași

1. Faceți clic pe {{ui:Alegere fișier}} (sau pe zona în care trageți fișierul, din stânga sus).
2. Alegeți fișierul `.ifc` și confirmați.
3. Așteptați până se termină linia de stare. Prima dată afișează „Pornirea motorului IFC…”, apoi „Citirea modelului…” și „Construirea geometriei: … din … elemente”.
4. Priviți modelul: se deschide într-o vedere din trei sferturi, potrivită pe ecran.
5. Faceți clic pe {{ui:Sus}} din bara de instrumente de deasupra modelului ca să priviți drept în jos.
6. Faceți clic pe {{ui:Față}} ca să priviți din față, apoi pe {{ui:Lateral}} ca să priviți din lateral.
7. Faceți clic pe {{ui:Potrivire}}, sau apăsați {{key:F}}, ca să reveniți la vederea din trei sferturi a întregului model.

## Ce ar trebui să vedeți

- Modelul în mijloc, cu muchii întunecate subțiri pentru un aspect de desen.
- Panoul {{ui:Fișier}} din stânga: numele fișierului, dimensiunea, schema IFC (de exemplu IFC2X3 sau IFC4), numele proiectului, faza, programul din care a fost exportat, autorul, data exportului și numărul de elemente și de triunghiuri.
- Listele {{ui:Niveluri}} și {{ui:Elemente}} de sub el.
- Linia de stare: „Deschis *numele fișierului*: *n* elemente în *s* s”.

## Deplasarea prin model

:::mouse
| Pentru | Faceți asta |
|---|---|
| Orbitare | Trageți cu butonul stâng |
| Panoramare | Trageți cu butonul drept sau țineți {{key:Shift}} (sau {{key:Mod}}) și trageți cu butonul stâng |
| Zoom | Derulați rotița sau trageți cu butonul din mijloc |
| Vedeți tot | Apăsați {{key:F}} sau faceți clic pe {{ui:Potrivire}} |
:::

:::mac mouse
Pe trackpad: trageți cu un deget apăsat ca să orbitați; țineți {{key:Shift}} sau {{key:Mod}} și trageți ca să panoramați; derulați cu două degete sau ciupiți ca să măriți. Un clic cu două degete este un clic dreapta, iar cu el puteți trage ca să panoramați, dar {{key:Shift}} și tragerea sunt mai ușoare.
:::

:::touch
| Pentru | Faceți asta |
|---|---|
| Orbitare | Trageți cu un deget |
| Zoom | Ciupiți cu două degete |
| Panoramare | Mutați două degete împreună |
| Vedeți tot | Atingeți {{ui:Potrivire}} |
:::

Orbitarea se face întotdeauna în jurul unui punct din mijlocul modelului. Panoramarea mută acest punct, deci după o panoramare lungă orbitarea poate părea decentrată: faceți clic pe {{ui:Potrivire}} ca să o resetați.

## Umbrit, muchii sau cadru de sârmă

Trei butoane mici deasupra cubului de vizualizare aleg cum se desenează modelul: {{ui:Umbrit}}, {{ui:Umbrit cu muchii}} (implicit) și {{ui:Cadru de sârmă}}. Sunt și comenzi (Vizualizare în meniuri și în lista Personalizare), deci pot avea taste proprii. {{ui:Plan}}, {{ui:Divizare}} și {{ui:3D}} se află în rândul {{ui:Vizualizare}} din bara de instrumente.

## Greșeli frecvente

- **Așteptarea vederilor denumite.** BimCraft are patru vederi fixe ({{ui:Potrivire}}, {{ui:Sus}}, {{ui:Față}}, {{ui:Lateral}}), cubul de vizualizare din colțul din dreapta jos și orbitarea liberă. Nu salvează vederi.
- **Căutarea planurilor și secțiunilor.** Nu există planuri 2D sau casete de secțiune în această versiune. Tăiați modelul cu un singur plan de {{ui:Secțiune}} ([Tăierea unui model IFC cu un plan de secțiune](topic:section-plane)), sau opriți niveluri: [Afișare și ascundere a nivelurilor, spațiilor și muchiilor](topic:storeys-and-spaces).
- **Deschiderea unui fișier de proiect și așteptarea unei vederi 3D.** Un fișier de proiect se deschide ca un card de fișier. Exportați mai întâi IFC.
- **Deschiderea unui `.ifczip`.** Dezarhivați-l sau exportați un `.ifc` simplu.
- **Un model foarte mare face fila lentă sau o blochează.** Vezi [Browsere, dispozitive și memorie](topic:platforms).

## Continuare

[Alegeți un element și citiți proprietățile lui](topic:inspect-element).
