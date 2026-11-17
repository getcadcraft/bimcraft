---
title: Slanje cjevovoda u program za naprezanja ili izometriju i čitanje natrag (PCF)
summary: Zapišite dionice cjevovoda modela kao datoteku komponenti cjevovoda PCF ili pročitajte PCF datoteku iz programa za naprezanje cijevi ili izometrijskog programa te nacrtajte njezine cijevi kao dionice.
keywords: pcf, datoteka komponenti cjevovoda, naprezanje cijevi, izometrija, izometrije, izvoz, uvoz, cjevovodi, postrojenje, čelična cijev, premještanje posla, drugi softver
from: 24f91355
---

## Što ćete raditi

PCF je tekstualna datoteka koju čitaju i pišu programi za naprezanje cijevi i izometrijski programi. Za svaki cjevovod navodi njegove komponente s krajnjim točkama i promjerima.

## Izvoz

1. Odaberite alat Cijev. U retku opcija prikazuje se **Izvezi PCF**.
2. Kliknite ga. Zapisuje se svaka dionica cijevi u modelu: ravna cijev, koljena (zakret od 90 stupnjeva, inače luk), T-komadi s točkom grananja, redukcije i ventili.
3. Datoteka koristi milimetre. Promjeri su nazivni promjeri u milimetrima. Središnja točka koljena je njegov ugao, mjesto gdje se spajaju dva kraka.

PCF se zapisuje za čeličnu cijev sa sučeljenim zavarom. Dionica u drugom materijalu također se zapisuje, s ključevima čeličnih komponenti, i navodi se na ploči Problemi.

## Uvoz

1. Odaberite alat Cijev i kliknite **Uvezi PCF…**, pa odaberite datoteku.
2. Ravna cijev do koljena, lukova, ventila i prirubnica postaje jedna dionica na trenutnoj razini. Promjena dimenzije započinje novu dionicu. Grana T-komada postaje vlastita dionica koja počinje u središtu T-komada.
3. Model sam izrađuje vlastite fitinge. Redukcije i T-komadi se ne kopiraju: pojavljuju se tamo gdje se sastaju dionice različitih dimenzija ili grana.

:::note
Visine u datoteci čitaju se kao visine iznad trenutne razine. Opterećenja, učvršćenja i sama analiza naprezanja nisu u PCF datoteci i ne prenose se.
:::

## Provjera onoga što je došlo

- Ukupna duljina cijevi po cjevovodu treba odgovarati izvornoj.
- Ploča Problemi navodi, jednom za svaku stavku: koljeno čija središnja točka nije jednako udaljena od oba kraja, cijev bez duljine i promjer koji nije standardna dimenzija.

## Cjevovodi koji su već u IFC datoteci

Kad je IFC datoteka otvorena, **Izvezi PCF** zapisuje i njezine vlastite segmente cijevi, fitinge i ventile, uz dionice koje ste nacrtali. Segment dobiva krajeve od svojih priključaka ili od krajeva svog tijela. Fiting bez priključaka se izostavlja, a ploča Problemi to navodi. Možete izvoziti samo iz IFC datoteke kad model nema nacrtanih dionica.

Pri uvozu oslonci, olet, prirubnice, brtve i čepovi u datoteci se ne crtaju. Ploča Problemi navodi koliko je svakog izostavljeno, pa ništa ne nestaje nečujno.
