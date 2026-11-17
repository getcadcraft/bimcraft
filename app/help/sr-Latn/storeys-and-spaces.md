---
title: Prikaži i sakrij spratove, prostore i ivice
summary: Isključite spratove da vidite unutrašnjost zgrade, prikažite sobe i prostore, i uključite ili isključite linije ivica.
keywords: spratovi, nivoi, podovi, sakrij, izoluj, sobe, prostori, ifcspace, ivice, vidljivost, presek
from: b838dcc0
---

## Šta ćete uraditi

Pogledajte unutrašnjost IFC modela tako što ćete isključiti spratove iznad onog koji vas zanima, zatim prikazati sobe i prostore, i isključiti linije ivica za čistiji izgled.

## Koraci: pogledajte jedan sprat

1. Otvorite IFC model. Pogledajte [Otvorite IFC model i pogledajte ga u 3D](topic:open-ifc-model).
2. Pronađite listu {{ui:Spratovi}} sleva. Najviši sprat je prvi, kao kad čitate presek od krova naniže.
3. Uklonite oznaku sa krova i sa svakog sprata iznad sprata koji želite.
4. Kliknite {{ui:Gore}} da pogledate dole na taj sprat.
5. Ponovo označite spratove da ih vratite.

## Šta treba da vidite

Svaki sprat sa kojeg uklonite oznaku nestaje odmah, sa svime što je na njemu. Lista prikazuje samo spratove koji sadrže nešto vidljivo. Elementi koji nisu dodeljeni nijednom spratu grupišu se kao **Nije na spratu** na dnu; elementi lokacije i neki nameštaj često tu završe.

## Koraci: prikaži sobe i prostore

1. Kliknite {{ui:Prostori}} na traci iznad modela. Dugme ostaje pritisnuto.
2. Pogledajte model: sobe i prostori se pojavljuju kao blede, providne zapremine.
3. Kliknite prostor da pročitate njegova svojstva, kao što su naziv, broj i površina, desno.
4. Kliknite {{ui:Prostori}} ponovo da ih sakrijete.

Prostori su sakriveni kad se model otvori, jer bi inače prekrivali zidove i podove.

## Koraci: ivice

1. Kliknite {{ui:Ivice}} da isključite tanke linije ivica.
2. Kliknite ponovo da ih vratite.

Na vrlo velikim modelima (preko 1.5 miliona trouglova) dugme je zasivljeno uz napomenu „Ivice su isključene za vrlo velike modele“. Ovo štedi memoriju.

## Česte greške

- **Uklonite oznaku sa sprata, a i dalje vidite delove njega.** Element pripada spratu kojem ga je izvozni program dodelio. Visok zid ili stepenište često pripada samo svom osnovnom spratu, pa ostaje kad se sprat iznad sakrije, ili nestaje sa spratom ispod.
- **Sakrivanje spratova da biste videli unutrašnjost.** Presečni okvir je često brži: pogledajte [Presecite IFC model ravni preseka](topic:section-plane#a-section-box). Možete i ukloniti oznake redova u {{ui:Stablo modela}} (pogledajte [Snađite se u stablu modela](topic:model-tree)).
- **Klik na prostor kroz zid.** Klik bira najbližu vidljivu površinu. Sakrijte sprat iznad ili pređite na {{ui:Gore}}, pa kliknite.
- **Nazivi spratova izgledaju čudno.** BimCraft prikazuje nazive spratova sačuvane u datoteci. Ako glase „Nivo 1“ ili broj, to je ono što je izvoznik upisao.
