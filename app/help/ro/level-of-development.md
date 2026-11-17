---
title: Nivelul de dezvoltare (LOD) și verificări la etape
summary: Acordați elementelor un nivel de dezvoltare, vedeți de unde provine, verificați modelul față de nivelul cerut de o etapă și corectați etichetele lipsă și camerele fără nume. Fiecare verificare oferă recomandări; nimic nu este blocat.
keywords: lod, nivel de dezvoltare, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, etapă, tabel de etape, verificări ale modelului, etichete lipsă, camere fără nume, generic la început, clasă IFC, clasificare
from: 2091c79b
---

## Ce veți face

Indicați cât de dezvoltat este fiecare element, apoi verificați întregul model față de ce cere o etapă a proiectului.

## Pași

1. Alegeți un element (sau mai multe) și deschideți {{ui:Properties}}. Găsiți {{ui:Level of development}}.
2. Alegeți un nivel din listă. Fiecare nivel este denumit după ce înseamnă și include nivelurile de sub el. O singură operație de Anulare acoperă întreaga alegere.
3. Citiți de unde provine nivelul: din acest element, din tipul său sau dintr-un marcaj verificat pe teren.
4. Pentru a verifica modelul, deschideți {{ui:Model checks}} din stânga, apoi {{ui:LOD milestones}}. Alegeți etapa și tabelul (tabelul de pornire sau propriul fișier CSV ori JSON, încărcat cu {{ui:Load}}).
5. Faceți clic pe {{ui:Check the model}}. Totalurile și câte un rând pentru fiecare rând din tabel arată ce a atins nivelul cerut și ce nu; constatările apar și în lista Probleme.
6. La {{ui:Missing tags and unnamed rooms}}, faceți clic pe {{ui:Find them}}, editați propunerile dacă doriți și faceți clic pe {{ui:Apply}}.

## Ce ar trebui să vedeți

- Nivelul ales pentru element, cu clasa sa IFC și codurile de clasificare alăturate.
- Totaluri și rânduri pentru etapă. Un tabel nu schimbă niciodată sensul unui nivel: scara este fixă, iar tabelul arată doar ce nivel cere o etapă.
- „Generic la început”: recomandarea de a păstra elementele generice la o etapă timpurie. Este doar o recomandare.

## Bine de știut

- Nimic de aici nu blochează. Un model sub nivelul cerut de o etapă este listat, nu refuzat.
- Cele trei părți ale unui nivel (geometrie, informație, documentație) pot fi setate separat; un marcaj arată îndeplinit, sub nivel sau nespecificat.
