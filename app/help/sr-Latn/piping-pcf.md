---
title: Pošaljite cevovod programu za naprezanje ili izometriju, i vratite ga (PCF)
summary: Upišite deonice cevovoda modela kao PCF datoteku sa komponentama cevovoda, ili pročitajte PCF datoteku iz programa za naprezanje cevi ili izometrije i nacrtajte njenu cev kao deonice.
keywords: pcf, datoteka komponenti cevovoda, naprezanje cevi, izometrija, izometrije, izvoz, uvoz, cevovod, postrojenje, čelična cev, premeštanje posla, drugi softver
from: 24f91355
---

## Šta ćete uraditi

PCF je obična tekstualna datoteka koju čitaju i pišu programi za naprezanje cevi i izometriju. Navodi komponente svakog cevovoda s njihovim krajnjim tačkama i prečnicima.

## Izvoz

1. Izaberite alat Cev. Traka s opcijama prikazuje **Izvezi PCF**.
2. Kliknite na nju. Svaka deonica cevi u modelu se upisuje: ravna cev, kolena (skretanje od 90 stepeni, inače luk), T-komadi s tačkom grananja, redukcije i ventili.
3. Datoteka koristi milimetre. Prečnici su nazivni, u milimetrima. Središnja tačka kolena je njegov ugao, gde se njegova dva kraka sastaju.

PCF se piše za čeličnu cev za sučeono zavarivanje. Deonica u drugom materijalu takođe se upisuje, s ključevima komponenti čelika, i beleži se u panelu Problemi.

## Uvoz

1. Izaberite alat Cev i kliknite **Uvezi PCF…**, pa izaberite datoteku.
2. Ravna cev do kolena, krivina, ventila i prirubnica postaje jedna deonica na tekućem nivou. Promena dimenzije počinje novu deonicu. Grana T-komada postaje sopstvena deonica koja počinje u središtu T-komada.
3. Model sam pravi svoje fitinge. Redukcije i T-komadi se ne kopiraju: pojavljuju se tamo gde se deonice različitih dimenzija ili grana sastaju.

:::note
Visine u datoteci čitaju se kao visine iznad tekućeg nivoa. Opterećenja, oslonci i sama analiza naprezanja nisu u PCF datoteci i ne prenose se.
:::

## Proverite šta je preneto

- Ukupna dužina cevi po cevovodu treba da se poklapa s izvornom.
- Panel Problemi navodi, po jednom, kolena čija središnja tačka nije na istoj udaljenosti od oba kraja, cev bez dužine i otvor koji nije standardna dimenzija.

## Cevovod koji je već u IFC datoteci

Kada je IFC datoteka otvorena, **Izvezi PCF** takođe upisuje sopstvene segmente cevi, fitinge i ventile, pored deonica koje ste nacrtali. Segment dobija krajeve iz svojih priključaka, ili iz krajeva svog tela. Fiting bez priključaka se izostavlja, a panel Problemi to kaže. Možete izvoziti samo iz IFC-a kada model nema nacrtane deonice.

Pri uvozu oslonci, olets, prirubnice, zaptivke i kape iz datoteke se ne crtaju. Panel Problemi navodi koliko je svakog izostavljeno, pa ništa ne nestaje bez traga.
