---
title: Pregled modela v VR naglavniku
summary: Hodite po modelu IFC v polni velikosti v VR naglavniku: skakajte, obračajte se, merite, ga prerežite, postavite zadeve BCF s sliko, si ga oglejte kot model na mizi in srečajte druge v seji v živo.
keywords: vr, virtualna resničnost, naglavnik, webxr, xr, poglobljeno, quest, oculus, vive, index, pico, sprehod, teleport, pregled zasnove, usklajevanje, pregled, meri, prerez, odreži, zadeva, zadeve, bcf, model na mizi, model v merilu, prisotnost, avatarji, v živo, skupaj
from: 8994b36d
---

{{ui:VR}} na orodni vrstici vas postavi v model z VR naglavnikom, v polni velikosti. Stojite tam, kjer je kamera 3D pogleda, na tleh pod njo, obrnjeni v isto smer. Naglavnik prikazuje, kar prikazuje 3D pogled: skrite etaže, elementi in modeli ostanejo skriti, poslikani materiali pa ostanejo. Nič se ne naloži: brskalnik riše na tem računalniku (ali v brskalniku naglavnika).

## Kaj potrebujete

- Naglavnik, ki ga brskalnik lahko upravlja (WebXR): samostojni brskalnik naglavnika ali Chrome ali Edge na računalniku s priključenim naglavnikom.
- Odprt model IFC na varni strani (https), kot je ta stran.

Ko naglavnika ni, je {{ui:VR}} zatemnjen in pove, zakaj.

## Začetek

1. Nastavite 3D pogled tja, kjer želite začeti: v sobi ali zunaj, gledajoč stavbo.
2. Kliknite {{ui:VR}} na orodni vrstici.
3. Nadenite naglavnik.

Meni je na hrbtni strani leve roke. Usmerite ga z desnim krmilnikom in pritisnite sprožilec, da izberete gumb. (Z eno roko meni lebdi pred mestom, kjer ste začeli.)

## Premikanje

- **Skok:** v {{ui:Premakni}} usmerite v tla in pritisnite sprožilec; pristanete tam. Ali potisnite palico naprej, da ciljate, in jo spustite, da skočite. Pristanete lahko samo na tleh, ploščah in terenu (površine, obrnjene navzgor), nikoli na steni.
- **Obračanje:** potisnite palico levo ali desno: vsakič se obrnete za 30°.
- **Hoja:** v svojem prostoru za igro preprosto hodite.

## Merjenje

Izberite {{ui:Meri}}, nato pritisnite sprožilec na dveh točkah. Razdalja se prikaže med njima, v metrih. Točka blizu vogala se prilepi na vogal.

## Prerez

Izberite {{ui:Prerez}} in pritisnite sprožilec na površini:

- na steni (ali čemerkoli, kar ni tla): vse med vami in to površino je odrezano, da lahko vidite noter. To najbolje deluje od zunaj ali čez sobo;
- na tleh, od zgoraj: tloris prerez 1.2 m nad temi tlemi, tako da stene kažejo svoj spodnji del.

{{ui:Počisti}} odstrani prerez in meritve. Če [ravnina prereza](topic:section-plane) prereže model, ko začnete, se naglavnik začne z njo.

## Postavite zadevo

Izberite {{ui:Zadeva}} in pritisnite sprožilec tam, kjer je težava. Oštevilčen zatič jo označi, zadeva pa se postavi na zavihek {{ui:Zadeve}} kot tema BCF, s sliko tega, kar ste videli, in kamero, kjer ste stali, v lastnih koordinatah modela. Shranite jih skupaj z ostalimi [zadevami](topic:issues-bcf) kot datoteko BCF; drugi usklajevalni orodji jih odprejo v istem pogledu.

Dodajte komentar zadevi, ko zapustite VR, na zavihku Zadeve: pisanje v naglavniku še ni izdelano.

## Oglejte si ga kot namizni model

{{ui:Namizni model}} skrči model, da se prilega mizi pred vami; hodite okoli nje ali jo zavrtite s palico. {{ui:Polna velikost}} vas vrne tja, kjer ste bili.

## Skupaj z drugimi, v živo

V [seji v živo](topic:work-live) vsak v VR vidi druge kot glavo in dve roki v svoji barvi, z imenom, in piko, kamor kdo kaže. Urejanja, ki jih kdo naredi, dosežejo vaš naglavnik v trenutku. Ljudje za mizo še niso prikazani v naglavniku.

## Zapustite

Izberite {{ui:Zapusti VR}} (ali snemite naglavnik in končajte tam). 3D pogled na zaslonu se premakne tja, kjer je bila vaša glava.

:::note
Preizkušeno z emulatorjem naglavnika, še ne na vsakem naglavniku. Velik model lahko naglavnik zatakne: najprej skrijte etaže ali modele, ki jih ne potrebujete ([skrij in izoliraj](topic:hide-and-isolate)).
:::
