---
title: Polja podokna Lastnosti
summary: Kaj pomeni vsako polje v podoknu Lastnosti ter v podoknih Datoteka, Risba in Mapa in katera lahko spremenite.
keywords: lastnosti, polja, atributi, globalid, guid, kopiraj, kopiraj vrednost, kopiraj vse, csv, odložišče, serijska številka, oznaka, vrsta objekta, vrstica, express id, nabor lastnosti, pset, količine, shema, podokno datoteke
from: fe55b435
---

## Element IFC

Na vrhu podokna {{ui:Lastnosti}} je vrsta elementa brez predpone "Ifc" (na primer "Door", "WallStandardCase", "FurnishingElement") in njegovo ime ali "Brez imena".

| Polje | Pomen | Urejanje |
|---|---|---|
| Name | Ime elementa, pogosto ime družine in tipa iz izvoznika | Da |
| Type | Ime tipa elementa, kadar ga ima | Ne |
| Object type | Prosto besedilo o vrsti, ki ga nekateri izvozniki izpolnijo | Da |
| Tag | Oznaka ali znak elementa; mnogi izvozniki sem zapišejo ID elementa | Da |
| Description | Prosto besedilo | Da |
| GlobalId | Trajni 22-znakovni IFC identifikator elementa, enak v vsakem izvozu istega elementa | Ne |
| Line | Številka vrstice elementa (`#1234`) v tej datoteki IFC. Spreminja se med izvozi | Ne |

Spodaj so **nabori lastnosti**, razvrščeni po imenu:

- Vsak nabor se odpre in zapre, ko kliknete njegovo ime. Prvi trije so odprti.
- Nabor, označen z "(type)", pripada tipu elementa: "Lastnost tipa: sprememba tukaj velja za vsak element tega tipa."
- Nabori količin (dolžine, površine, prostornine, števila, teže) so samo za branje.
- Seznami in naštete vrednosti so prikazani, samo za branje.
- Vrednosti Da/Ne se prikažejo kot **Da** ali **Ne**.
- Števila so za prikaz zaokrožena na štiri decimalke. Dolžine (lastnost dolžine ali dolžina količine) se prikažejo v enoti, izbrani v {{ui:Enote}} na orodni vrstici, z oznako enote ob njih. Novo vrednost lahko vpišete v tej enoti ali z drugo oznako enote (2.4 m, 8'-0"): BimCraft zapiše nazaj lastno število datoteke. Druga števila se prikažejo tako, kot jih ima datoteka.
- Prazna vrednost se prikaže kot *empty*. Urejena vrednost je krepko natisnjena z modro črto ob sebi.

## Kopiranje vrednosti

Vsaka vrednost v {{ui:Lastnosti}} ima ob sebi majhen gumb za kopiranje: kliknite ga, da vrednost, točno kot je prikazana, daste na odložišče, na primer GlobalId, serijsko številko ali katero koli vrednost nabora lastnosti. Kopiranje nikoli ne začne urejanja.

Na vrhu {{ui:Kopiraj vse}} kopira vse vrednosti elementa kot besedilo, nabor za naborom, {{ui:Kopiraj kot CSV}} pa kopira vrstice skupine, lastnosti in vrednosti, ki jih prilepite v preglednico. Prazne vrednosti ostanejo, da ima vsako polje svojo vrstico. To deluje enako za element drugega odprtega modela; kadar je odprtih več modelov, se CSV začne s stolpcem Model, ki navaja ime njegove datoteke.

## Podokno Datoteka (IFC)

| Polje | Pomen |
|---|---|
| Datoteka, Velikost | Datoteka, ki ste jo odprli, in njena velikost |
| Schema | Različica IFC, na primer IFC2X3 ali IFC4 |
| Project | Ime projekta in dolgo ime |
| Phase | Faza projekta, če jo je izvoznik zapisal |
| Exported from | Izvozni program iz glave datoteke |
| Author | Avtor v glavi datoteke |
| Exported | Datum in čas iz glave datoteke |
| Elements | Koliko elementov z obliko je bilo narisanih |
| Triangles | Koliko trikotnikov tvorijo njihove oblike; mera, kako težak je model |

## Podokno Datoteka (projektne in družinske datoteke)

| Polje | Pomen |
|---|---|
| Kind | Projekt, predloga projekta, družina ali predloga družine |
| Saved in | Izdaja, ki je nazadnje shranila datoteko |
| Build | Natančna gradnja te izdaje |
| Read | Koliko datoteke je BimCraft prebral, glede na njeno velikost |

## Podokno Risba (DWG in DXF)

| Polje | Pomen |
|---|---|
| Format | Izdaja, v kateri je bila risba shranjena, s kodo formata, na primer AC1032 |
| Units | Vstavitvene enote risbe, kadar so nastavljene |
| Entities | Koliko objektov je bilo prebranih |
| Layers | Koliko slojev |
| Sheets | Koliko listov (postavitev) ali None |
| Linked drawings | Koliko njenih povezanih risb je bilo najdenih in naloženih |
| Equipment | Koliko označenih opremskih enot je na listih |

## Podokno Mapa

| Polje | Pomen |
|---|---|
| Folder, Files, Size | Mapa, ki ste jo odprli, koliko datotek vsebuje in njihova skupna velikost |
| Models | Projektne in družinske datoteke, vsaka s svojimi varnostnimi kopijami, štete enkrat |
| CAD drawings, IFC models | Koliko jih je vsake vrste |
| Problems | Koliko kopij modelov je nepopolnih ali neberljivih, ali None |
