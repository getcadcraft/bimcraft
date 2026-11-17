---
title: Prikaz i skrivanje etaža, prostora i bridova
summary: Isključite etaže da vidite unutrašnjost zgrade, prikažite sobe i prostore te uključite i isključite linije bridova.
keywords: etaže, razine, podovi, sakrij, izoliraj, sobe, prostori, ifcspace, bridovi, vidljivost, presjek
from: b838dcc0
---

## Što ćete napraviti

Pogledajte unutrašnjost IFC modela tako da isključite etaže iznad one koja vas zanima, zatim prikažete sobe i prostore te isključite linije bridova radi čišćeg prikaza.

## Koraci: pogled na jednu etažu

1. Otvorite IFC model. Vidi [Otvaranje IFC modela i razgledavanje u 3D](topic:open-ifc-model).
2. Pronađite popis {{ui:Etaže}} lijevo. Najviša etaža je prva, kao kad čitate presjek odozgo prema dolje.
3. Odznačite krov i svaku etažu iznad poda koji želite.
4. Kliknite {{ui:Gore}} da pogledate prema dolje na taj pod.
5. Ponovno označite etaže da ih vratite.

## Što biste trebali vidjeti

Svaka etaža koju odznačite odmah nestaje sa svime što je na njoj. Popis prikazuje samo etaže koje sadrže nešto vidljivo. Elementi koji nisu dodijeljeni nijednoj etaži grupirani su na dnu kao **Nije na etaži**; elementi lokacije i neki namještaj često završe tamo.

## Koraci: prikaz soba i prostora

1. Kliknite {{ui:Prostori}} na alatnoj traci iznad modela. Gumb ostaje pritisnut.
2. Pogledajte model: sobe i prostori pojavljuju se kao blijedi, prozirni volumeni.
3. Kliknite prostor da s desne strane pročitate njegova svojstva, kao što su naziv, broj i površina.
4. Ponovno kliknite {{ui:Prostori}} da ih sakrijete.

Prostori se sakrivaju kad se model otvori jer bi inače prekrivali zidove i podove.

## Koraci: bridovi

1. Kliknite {{ui:Bridovi}} da isključite tanke linije bridova.
2. Ponovno kliknite da ih uključite.

Na vrlo velikim modelima (više od 1.5 milijuna trokuta) gumb je zasivljen s opisom „Bridovi su isključeni za vrlo velike modele“. To štedi memoriju.

## Česte greške

- **Odznačite etažu, a i dalje vidite dijelove nje.** Element pripada etaži koju mu je dodijelio program izvoznik. Visok zid ili stubište često pripada samo svojoj baznoj etaži, pa ostaje kad je etaža iznad skrivena ili nestaje s etažom ispod.
- **Skrivanje etaža da vidite unutrašnjost.** Kutija presjeka je često brža: vidi [Rez IFC modela ravninom presjeka](topic:section-plane#a-section-box). Također možete odznačiti retke u {{ui:Stablo modela}} (vidi [Snalaženje u stablu modela](topic:model-tree)).
- **Klik na prostor kroz zid.** Klik bira najbližu vidljivu površinu. Sakrijte etažu iznad ili pređite na {{ui:Gore}}, pa kliknite.
- **Nazivi etaža izgledaju čudno.** BimCraft prikazuje nazive etaža spremljene u datoteci. Ako glase „Level 1“ ili broj, to je ono što je izvoznik zapisao.
