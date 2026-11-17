---
title: Prikaz in skrivanje etaž, prostorov in robov
summary: Izklopite etaže, da vidite v notranjost stavbe, prikažite sobe in prostore ter vklapljajte in izklapljajte robne črte.
keywords: etaže, nivoji, plošče, skrij, izoliraj, sobe, prostori, ifcspace, robovi, vidnost, prerez
from: b838dcc0
---

## Kaj boste naredili

Poglejte v notranjost modela IFC tako, da izklopite etaže nad tisto, ki vas zanima, nato prikažite sobe in prostore ter za čistejši videz izklopite robne črte.

## Koraki: poglejte eno etažo

1. Odprite model IFC. Glejte [Odprite model IFC in si ga oglejte v 3D](topic:open-ifc-model).
2. Poiščite seznam {{ui:Storeys}} na levi. Najvišja etaža je prva, kakor bi brali prerez od strehe navzdol.
3. Odkljukajte streho in vse etaže nad tlemi, ki jih želite.
4. Kliknite {{ui:Top}}, da pogledate navzdol na to etažo.
5. Ponovno označite etaže, da se vrnejo.

## Kaj boste videli

Vsaka etaža, ki jo odkljukate, takoj izgine z vsem, kar je na njej. Seznam prikazuje samo etaže, ki imajo kaj vidnega. Elementi, ki niso dodeljeni nobeni etaži, so zbrani pod **Ni na etaži** na dnu; lokacijski elementi in nekatero pohištvo pogosto pristanejo tam.

## Koraki: prikažite sobe in prostore

1. Kliknite {{ui:Spaces}} na orodni vrstici nad modelom. Gumb ostane pritisnjen.
2. Poglejte model: sobe in prostori se pokažejo kot bledi, prosojni volumni.
3. Kliknite prostor, da na desni preberete njegove lastnosti, na primer ime, številko in površino.
4. Ponovno kliknite {{ui:Spaces}}, da jih skrijete.

Prostori so ob odprtju modela skriti, ker bi sicer prekrivali stene in tla.

## Koraki: robovi

1. Kliknite {{ui:Edges}}, da izklopite tanke robne črte.
2. Ponovno kliknite, da jih spet vklopite.

Pri zelo velikih modelih (več kot 1.5 milijona trikotnikov) je gumb zatemnjen z opombo „Robovi so izklopljeni za zelo velike modele“. Tako se prihrani pomnilnik.

## Pogoste napake

- **Odkljukate etažo, pa še vedno vidite dele nje.** Element pripada etaži, ki mu jo je dodelil izvoznik. Visoka stena ali stopnišče pogosto pripada samo svoji spodnji etaži, zato ostane, ko je etaža nad njim skrita, ali izgine skupaj s spodnjo etažo.
- **Skrivanje etaž, da vidite v notranjost.** Prerezni kvader je pogosto hitrejši: glejte [Prerežite model IFC z ravnino prereza](topic:section-plane#a-section-box). Vrstice lahko odkljukate tudi v {{ui:Model tree}} (glejte [Orientacija v drevesu modela](topic:model-tree)).
- **Klik na prostor skozi steno.** Klik izbere najbližjo vidno površino. Skrijte etažo nad njim ali preklopite na {{ui:Top}} in nato kliknite.
- **Imena etaž so videti čudno.** BimCraft prikaže imena etaž, shranjena v datoteki. Če pišejo „Nivo 1“ ali številko, je to tisto, kar je zapisal izvoznik.
