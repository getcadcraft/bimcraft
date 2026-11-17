---
title: Slanje cijevi programu za naprezanje ili izometriju i vraćanje (PCF)
summary: Zapišite dionice cijevi modela kao PCF datoteku komponenti cjevovoda ili pročitajte PCF datoteku iz programa za naprezanje cijevi ili izometrije i nacrtajte njene cijevi kao dionice.
keywords: pcf, datoteka komponenti cjevovoda, naprezanje cijevi, izometrija, izometrije, izvoz, uvoz, cjevovod, postrojenje, čelična cijev, premještanje posla, drugi softver
from: 24f91355
---

## Šta ćete raditi

PCF je obična tekstualna datoteka koju programi za naprezanje cijevi i izometriju čitaju i pišu. Navodi komponente svakog cjevovoda s njihovim krajnjim tačkama i unutrašnjim prečnicima.

## Izvoz

1. Izaberite alat Cijev. Traka opcija prikazuje **Izvezi PCF**.
2. Kliknite na nju. Zapisuje se svaka dionica cijevi u modelu: prava cijev, koljena (skretanje od 90 stepeni, inače luk), T-komadi s tačkom grananja, redukcije i ventili.
3. Datoteka koristi milimetre. Unutrašnji prečnici su nazivni prečnici u milimetrima. Središnja tačka koljena je njegov ugao, tamo gdje se dva kraka spajaju.

PCF se piše za čeličnu sučeono zavarenu cijev. Dionica u drugom materijalu također se zapisuje, s ključevima čeličnih komponenti, i navodi se u panelu Problemi.

## Uvoz

1. Izaberite alat Cijev i kliknite **Uvezi PCF…**, zatim izaberite datoteku.
2. Prava cijev kroz koljena, luke, ventile i prirubnice postaje jedna dionica na trenutnom nivou. Promjena dimenzije počinje novu dionicu. Grana T-komada postaje sopstvena dionica koja počinje u središtu T-komada.
3. Model postavlja vlastite fitinge. Redukcije i T-komadi se ne kopiraju: pojavljuju se tamo gdje se spajaju dionice različitih dimenzija ili grana.

:::note
Visine u datoteci čitaju se kao visine iznad trenutnog nivoa. Opterećenja, oslonci i sama analiza naprezanja nisu u PCF datoteci i ne prenose se.
:::

## Provjera šta je preneseno

- Ukupna dužina cijevi po cjevovodu treba da se poklapa s izvorom.
- Panel Problemi navodi, po jednom, koljeno čija središnja tačka nije na istoj udaljenosti od oba kraja, cijev bez dužine i unutrašnji prečnik koji nije standardna dimenzija.

## Cijevi koje su već u IFC datoteci

Kad je IFC datoteka otvorena, **Izvezi PCF** također zapisuje njene vlastite segmente cijevi, fitinge i ventile, pored dionica koje ste nacrtali. Segment dobija krajeve iz svojih priključnih tačaka ili s krajeva svog tijela. Fiting bez priključnih tačaka je izostavljen, a panel Problemi to navodi. Možete izvoziti samo iz IFC-a kad model nema nacrtanih dionica.

Pri uvozu, oslonci, olet-i, prirubnice, brtve i čepovi iz datoteke se ne crtaju. Panel Problemi navodi koliko je svakog izostavljeno, pa ništa ne nestaje nevidljivo.
