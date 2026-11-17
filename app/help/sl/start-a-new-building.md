---
title: Začnite novo stavbo
summary: Naredite prazen model stavbe z njenimi nivoji, narišite njene zidove, postavite elemente iz knjižnice in ga shranite kot IFC.
keywords: novo, nova stavba, prazno, prazen, začni od začetka, predloga, nivoji, etaže, plošče, ustvari, model
from: 68786865
---

## Kaj boste naredili

Začnite model stavbe iz nič namesto odpiranja obstoječega. BimCraft naredi prazen model IFC s projektom, lokacijo, stavbo in njenimi nivoji. Na nivojih lahko postavite opremo in pohištvo iz knjižnice ter ga shranite kot datoteko IFC.

:::note
Zidove lahko risete že zdaj: glejte [Risanje zidov](topic:draw-walls). Vrata, okna, plošče in strehe so naslednja na vrsti.
:::

## Koraki

1. Kliknite {{ui:New building}} pod **Odpri datoteko ali mapo** ali na začetni strani.
2. Vnesite **Ime stavbe**.
3. Izberite, koliko **Nivojev** ima (1 do 200).
4. Vnesite **Višino nivoja**, od tal do tal: na primer `10'-0"`, `10'6"` ali `3000 mm`. Navadna številka pomeni čevlje v ZDA, drugod milimetre.
5. Vsa polja so že izpolnjena, zato jih lahko pustite, kot so. Pod njimi polje pove, s čim začnete: enote, **Vrsto zidu**, ki ga orodje Zid nariše najprej (če želite, izberite drugo s seznama), in prvi list.
6. Kliknite {{ui:Create}}. Nivoji so zloženi od 0 navzgor, vsak za eno višino nivoja više od prejšnjega, in poimenovani Nivo 1, Nivo 2 itd. Prikažejo se v drevesu modela, tloris Nivoja 1 pa se odpre poleg 3D pogleda z vklopljenim {{ui:Draw}}.
7. Narišite zidove: kliknite {{ui:Wall}} in dve točki. Glejte [Risanje zidov](topic:draw-walls). Nivoje preimenujete ali spremenite njihove višine na podoknu **Nivoji**.
8. Postavite elemente: glejte [Postavitev opreme in pohištva iz knjižnice](topic:place-from-library). Vrstica za postavljanje našteje vse nivoje.
9. Kliknite {{ui:Save as IFC}}. Datoteka dobi ime po stavbi, na primer `Smith's house.ifc`.

## Dobro je vedeti

- Model se shrani v milimetrih, kot IFC4. Drugi programi za BIM ga odprejo.
- Nova stavba ima en list, **A-101**, s tlorisom najnižjega nivoja: A3 v merilu 1:100, če delate z metričnimi enotami, sicer Tabloid pri 1/8" = 1'-0". Dokler ni prvega zidu, je prazen, nato prikazuje tloris, kakor ga rišete. Odprite ga pod **Listi** v brskalniku projekta, če želite spremeniti papir, merilo ali glavo, dodati poglede ali ga izbrisati. Stavba, začeta iz predloge, namesto tega prinese liste predloge.
- Če želite spremeniti, s čim začne vsaka nova stavba (vrsto zidu za metrične projekte, nivoje, prvi list, orodje, ki je aktivno po Ustvari), glejte [Privzeta pravila](topic:default-policies).
- Pred prvim zidom ni treba ničesar nastaviti. Vrsto zidu, višine nivojev, enote in list lahko spremenite pozneje.
- **Etaže** v levem podoknu naštejejo samo nivoje, na katerih je kaj, drevo modela pa jih našteje vse.
- Dokler ne shranite, šteje nova stavba kot neshranjeno delo. BimCraft vpraša, preden odprete drugo datoteko ali zapustite stran, in hrani kopijo v tem brskalniku, če se zavihek zapre.
