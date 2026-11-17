---
title: Prikaži i sakrij spratove, prostorije i ivice
summary: Isključi spratove da vidiš unutrašnjost zgrade, prikaži sobe i prostorije, i uključuj i isključuj linije ivica.
keywords: spratovi, nivoi, podovi, sakrij, izoluj, sobe, prostorije, ifcspace, ivice, vidljivost, presjek
from: b838dcc0
---

## Šta ćeš uraditi

Pogledaj unutrašnjost IFC modela tako što isključuješ spratove iznad onog koji te zanima, zatim prikaži sobe i prostorije, i isključi linije ivica za čišći izgled.

## Koraci: pogledaj jedan sprat

1. Otvori IFC model. Vidi [Otvori IFC model i pogledaj ga u 3D](topic:open-ifc-model).
2. Nađi listu {{ui:Spratovi}} lijevo. Najviši sprat je prvi, kao kad čitaš presjek odozgo prema dolje.
3. Odznači krov i svaki sprat iznad sprata koji želiš.
4. Klikni {{ui:Gore}} da pogledaš dolje na taj sprat.
5. Ponovo označi spratove da ih vratiš.

## Šta bi trebao vidjeti

Svaki sprat koji odznačiš nestane odmah, sa svime što je na njemu. Lista prikazuje samo spratove koji imaju nešto vidljivo. Elementi koji nisu dodijeljeni nijednom spratu grupišu se kao **Nije na spratu** na dnu; elementi lokacije i neki namještaj često završe tu.

## Koraci: prikaži sobe i prostorije

1. Klikni {{ui:Prostorije}} na traci iznad modela. Dugme ostaje pritisnuto.
2. Pogledaj model: sobe i prostorije se pojavljuju kao blijedi, prozirni volumeni.
3. Klikni prostoriju da s desne strane pročitaš njena svojstva, kao naziv, broj i površinu.
4. Ponovo klikni {{ui:Prostorije}} da ih sakriješ.

Prostorije se sakrivaju kada se model otvori, jer bi inače prekrile zidove i podove.

## Koraci: ivice

1. Klikni {{ui:Ivice}} da isključiš tanke linije ivica.
2. Klikni ponovo da ih vratiš.

Na veoma velikim modelima (preko 1.5 miliona trouglova) dugme je zasivljeno sa opisom "Ivice su isključene za veoma velike modele". To štedi memoriju.

## Česte greške

- **Odznačiš sprat, a još vidiš dijelove njega.** Element pripada spratu kojem ga je izvozni program dodijelio. Visoki zid ili stepenice često pripadaju samo spratu na kojem počinju, pa ostaju kad se sprat iznad sakrije, ili nestaju sa spratom ispod.
- **Skrivanje spratova da vidiš unutra.** Kutija presjeka je često brža: vidi [Presijeci IFC model ravninom presjeka](topic:section-plane#a-section-box). Možeš i odznačiti redove u {{ui:Stablo modela}} (vidi [Snađi se u stablu modela](topic:model-tree)).
- **Klik na prostoriju kroz zid.** Klik bira najbližu vidljivu površinu. Sakrij sprat iznad ili pređi na {{ui:Gore}}, pa klikni.
- **Nazivi spratova izgledaju čudno.** BimCraft prikazuje nazive spratova sačuvane u datoteci. Ako glase "Nivo 1" ili broj, to je ono što je izvoznik upisao.
