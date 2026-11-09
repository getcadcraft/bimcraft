---
title: Začetek nove stavbe
summary: Ustvarite prazen model stavbe z nivoji, narišite stene, postavite elemente iz knjižnice in ga shranite kot IFC.
keywords: novo, nova stavba, prazno, prazen, začni od začetka, predloga, nivoji, etaže, tla, ustvari, model
from: 546b8ae8
---

## Kaj boste naredili

Model stavbe začnete iz nič namesto z odpiranjem. BimCraft ustvari prazen model IFC s projektom, lokacijo, stavbo in njenimi nivoji. Na nivoje iz knjižnice lahko postavite opremo in pohištvo ter ga shranite kot datoteko IFC.

:::note
Stene lahko zdaj rišete: glejte [Risanje sten](topic:draw-walls). Vrata, okna, tla in strehe so v pripravi.
:::

## Koraki

1. Kliknite {{ui:Nova stavba}} pod **Odprite datoteko ali mapo** ali na začetni strani.
2. Vnesite **Ime stavbe** (Building name).
3. Izberite, koliko **Nivojev** (Levels) ima (od 1 do 200).
4. Vnesite **Višino nivoja** (Level height), od tal do tal: na primer `10'-0"`, `10'6"` ali `3000 mm`. Golo število pomeni čevlje v ZDA, drugod milimetre.
5. Kliknite {{ui:Ustvari}}. Nivoji so zloženi od 0, vsak je za eno višino nivoja nad prejšnjim, poimenovani Level 1, Level 2 in tako naprej. Prikažejo se v drevesu modela, tloris Level 1 pa se odpre poleg pogleda 3D z vklopljenim {{ui:Risanje}}.
6. Narišite stene: glejte [Risanje sten](topic:draw-walls). Nivoje preimenujte ali spremenite njihove višine v okencu **Nivoji** (Levels).
7. Postavite elemente: glejte [Postavitev opreme in pohištva iz knjižnice](topic:place-from-library). Vrstica za postavljanje navede vse nivoje.
8. Kliknite {{ui:Shrani kot IFC}}. Datoteka je poimenovana po stavbi, na primer `Smith's house.ifc`.

## Dobro je vedeti

- Model se shrani v milimetrih, kot IFC4. Drugi programi za BIM ga odprejo.
- **Etaže** (Storeys) v levem okencu navedejo le nivoje, na katerih je kaj; drevo modela jih navede vse.
- Dokler ne shranite, se nova stavba šteje za neshranjeno delo. BimCraft vas vpraša, preden odprete drugo datoteko ali zapustite stran, in v tem brskalniku hrani kopijo, če se zavihek zapre.
