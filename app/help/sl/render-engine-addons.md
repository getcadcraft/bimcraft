---
title: Dodajanje upodobitvenega pogona z dodatkom
summary: Kaj lahko dodatek doda na seznam pogonov v pogovornem oknu Upodobitev, dovoljenje, ki ga potrebuje za zagon programa, ter kaj Studio preveri in vpraša.
keywords: dodatek, addon, pogon, upodobitveni pogon, razvijalec, engine.run, dovoljenje, program, skript, podpisan, studio, api
from: 06295376
---

Dodatek (Nastavitve › Dodatki) lahko doda pogon na seznam pogonov v {{ui:Upodobitev}}. Celotno besedilo za avtorje dodatkov je v 16. poglavju specifikacije dodatkov; na kratko:

- Dodatek registrira pogon z identifikatorjem, ki se začne z njegovim lastnim, z imenom, neobveznimi nastavitvami in **bodisi** programom za zagon **bodisi** funkcijo v JavaScriptu, ki nariše sliko.
- Pogon, ki zažene program, potrebuje dovoljenje **`engine.run`**, ki je prikazano pred namestitvijo in v Nastavitvah. Deluje samo v Studiu; v brskalniku se prikaže kot datoteka za shranjevanje.
- Dodatek navede program (samo ime datoteke, nikoli lupine), skript, ki je **v podpisanem dodatku**, in argumente iz nadomestkov in navadnih besed. Studio poišče program ali vas enkrat prosi, da ga poiščete.
- Ko dodatek prvič zažene program, **Studio vas vpraša v svojem pogovornem oknu**: kateri dodatek, kateri program in da lahko skript počne vse, kar lahko počne program. Dovolite le dodatku, ki mu zaupate. Vaš odgovor se shrani za ta dodatek in ta program.
- Paket (prizor kot USD in datoteka z nastavitvami, po potrebi z datoteko glTF, če to zahteva dodatek) ter skript dodatka se shranita v novo začasno mapo, program se zažene tam, slika pa se vrne, označena z imenom pogona iz dodatka.

:::note
Dodatki lahko dodajo upodobitvene pogone samo od API-ja dodatkov 1.4. Delovni primer za odprtokodni upodabljalnik z ukazno vrstico je v njegovem lastnem repozitoriju; v tem upodabljalniku še ni bil zagnan.
:::
