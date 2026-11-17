---
title: Shranjevanje pogledov in sprehodov
summary: Shranite kamerne poglede modela po imenu, se vrnite k njim, jih predvajajte enega za drugim in posnemite sprehod skozi stavbo za predvajanje.
keywords: pogledi, shranjeni pogledi, kamera, kamere, gledišče, prizor, prizori, ogled, predstavitev, sprehod, sprehod skozi, leteči ogled, snemanje, predvajanje, pot, animacija
from: 3af19a36
---

{{ui:Pogledi}} na orodni vrstici hrani kamere 3D pogleda v datoteki modela, da lahko vi in kdorkoli, mu jo pošljete, takoj pridete do njih.

## Shranite pogled

1. Nastavite 3D pogled: zavrtite, povečajte, skrijte, kar ne želite.
2. Kliknite {{ui:Pogledi}}, vpišite ime (ali obdržite ponujenega) in kliknite {{ui:Shrani pogled}} ali pritisnite {{key:Enter}}.

Shranjevanje z imenom, ki je že na seznamu, posodobi ta pogled. Kliknite ime pogleda, da se vrnete k njemu; kamera se tja gladko premakne.

Puščice spremenijo vrstni red, svinčnik preimenuje, koš izbriše. Vsaka sprememba je en korak, zato {{key:Ctrl+Z}} razveljavi.

## Predvajajte poglede

{{ui:Predvajaj poglede}} se premakne od enega pogleda do naslednjega po vrstnem redu seznama in se za trenutek ustavi pri vsakem. {{key:Esc}} ali {{ui:Ustavi}} konča.

## Posnemite sprehod

1. Vklopite [Sprehod](topic:walk) in začnite hoditi po stavbi.
2. V {{ui:Pogledi}} kliknite {{ui:Posnemi sprehod}}.
3. Hodite s {{key:W}} {{key:A}} {{key:S}} {{key:D}} in se z miško ozirajte naokoli.
4. Kliknite {{ui:Ustavi snemanje}}. Sprehod je shranjen kot „Sprehod 1“, z njegovo dolžino.

Kliknite sprehod, da ga predvajate tako, kot ste hodili. {{key:Esc}} ga ustavi.

## Upodobite sprehod kot video

Kliknite ikono filma ob sprehodu. Pogovorno okno za video nariše vsak posnetek sprehoda z zadnjimi nastavitvami upodobitve, z velikostjo, hitrostjo sličic in kakovostjo, ki jih izberete tukaj. Shranite kot video WebM ali MP4 ali kot ZIP z eno sliko na sličico. Sličice trajajo toliko časa kot slike, zato začnite z {{ui:Hitro}}.

## Pripovedujte sprehod

Kliknite ikono govornega mehurčka ob sprehodu. Napišite eno vrstico za vsako izrečeno stvar in začnite vrstico s časom, kdaj se začne (`12`, `0:12` ali `1:02.5`); vrstica brez časa sledi vrstici nad njo po času, ki ga potrebuje za izgovor. Izberite jezik, po možnosti jezik gledalcev, če vemo, kdo bo gledal. {{ui:Predogled}} predvaja besede z glasom tega računalnika in jih prikaže kot podnapise; enako se zgodi, kadarkoli se sprehod predvaja. {{ui:Shrani s sprehodom}} shrani pripoved v IFC s sprehodom.

Vaš lastni povezani pomočnik lahko napiše pripoved namesto vas: prosite ga, naj pogleda sprehod in shranjene poglede, in nastavi vrstice v jeziku, ki ga navedete, kot en korak razveljavitve.

Upodobljeni video nima lastnega zvoka, ker brskalnik ne more posneti lastnega glasu. Shranite podnapise (`.srt` ali `.vtt`) in jih dodajte videu v predvajalniku ali urejevalniku videa. Glasove, ki jih lahko izberete, določa računalnik: jezik brez nameščenega glasu vseeno dobi podnapise.

## V datoteki

Pogledi in sprehodi so v IFC shranjeni kot nabor lastnosti `CadCraft_Views` na projektu: navaden IFC, ki ga drugi programi prezrejo. So v koordinatah prvega modela, zato se še ujemajo, ko je model ponovno naložen ali je dodan drug model.

:::tip
Za upodobitev slike iz shranjenega pogleda pojdite na pogled, nato kliknite [Upodobi](topic:render).
:::
