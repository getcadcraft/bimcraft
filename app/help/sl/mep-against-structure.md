---
title: Preverite cevi in zračne kanale glede na konstrukcijo
summary: Zaženite pripravljene nabore kolizij cevi in zračnih kanalov z zidovi, ploščami, nosilci in stebri, poiščite odseke, ki so bližje konstrukciji, kot dovoljujeta njihova izolacija in reža, ter navedite odprtine, ki jih odseki potrebujejo skozi zidove in plošče, kot CSV in BCF.
keywords: mep, kolizija, preverjanje kolizij, koordinacija, konstrukcija, zidovi, plošče, nosilci, stebri, odmik, mehka kolizija, izolacija, reža, odprtina, odprtine, prebod, puša, jedro, delo gradbenika, bcf, csv
from: 2d597f01
---

## Kaj boste naredili

Poskrbite, da napeljave ustrezajo stavbi: kaj zadene konstrukcijo, kaj poteka preblizu nje in kje morajo zidovi in plošče imeti luknje. Odprite {{ui:Preverjanje kolizij}} v levem podoknu; razdelek **Cevi in zračni kanali glede na konstrukcijo** je pod običajnim preverjanjem.

## Trde kolizije

Seznama nizov zdaj ponujata tudi **Cevi in zračni kanali**, **Zidovi**, **Plošče in strehe**, **Nosilci**, **Stebri** in **Konstrukcija** (vse štiri), s številom elementov v vsakem. Kliknite {{ui:Cevi in zračni kanali × konstrukcija}}, da izberete prvi in zadnji nabor, in zaženete preverjanje; ali izberite poljuben par sami in kliknite {{ui:Zaženi}}. Glejte [Preverjanje kolizij](topic:clash-check).

## Odmiki

Nekatere napeljave potrebujejo prostor okoli sebe: svojo izolacijo ter prostor za delo ali pušo.

1. Odseku cevi ali zračnega kanala v Lastnostih dodelite debelino **izolacije** (zanjo ni nič narisano).
2. V Preverjanju kolizij vnesite **režo okoli cevi in zračnih kanalov** (mm).
3. Kliknite {{ui:Preveri odmike}}: vsak del, ki je bližje zidu, plošči, nosilcu ali stebru, kot znaša njegova izolacija plus reža, je naveden z razdaljo, ki jo ima, in razdaljo, ki jo želi. Kliknite vrstico, da vidite obe.

Del, ki poteka skozi zid ali ploščo, je odprtina, ne odmik, in je tam naveden namesto tega.

## Potrebne odprtine

Kliknite {{ui:Potrebne odprtine}}. Kjer središčna črta odseka poteka skozi zid ali ploščo, BimCraft navede odprtino, ki jo potrebuje: okroglo za okrogle cevi ali zračne kanale, sicer pravokotno, tako veliko kot zunanja velikost odseka plus dvakratna izolacija plus dvakratna reža, središčno tam, kjer odsek seka element. Kliknite vrstico, da vidite odsek in zid ali ploščo.

- {{ui:Odprtine kot CSV}}: ena vrstica na odprtino z odsekom, njegovo velikostjo in izolacijo, velikostjo odprtine, elementom, skozi katerega poteka, in njegovim GlobalId, etažo, koordinatami X, Y in Z središča ter tem, za koliko odsek gre skozi.
- {{ui:Odprtine kot zadeve BCF}}: ena zadeva na odprtino s kamero, ki je usmerjena vanjo, z izbranima odsekom in elementom, za program statika.

:::note
Nič se ne izreže: odprtine so seznam za ljudi, ki jih dimenzionirajo. Režo vnesete sami; noben predpis ne določa, kako velika mora biti odprtina. Nosilci in stebri so kolizije, ne odprtine: ali sme cev skozi enega, odloča statik.
:::
