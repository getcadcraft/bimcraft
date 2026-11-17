---
title: Jekleni cevni odseki in listi odsekov
summary: Jekleni cevni vod razrežite na odseke, ki niso daljši od izbrane dolžine, in na montažne vare, ki jih postavite, oštevilčite jih in prenesite list za vsak odsek (3D pogled, dolžine rezov, fitingi, vari, kosovnik) kot PDF in CSV; kanali dobijo seznam rezanja ravnih kosov.
keywords: odsek, odseki, list odseka, izometrija, izdelava, predizdelava, montažni var, delavniški var, stikovni var, dolžina reza, seznam rezanja, kosovnik, jeklena cev, razred 40, številka voda, seznam rezanja kanalov, kosi kanalov
from: 539f51de
---

## Kaj boste naredili

Jekleni cevni vod spremenite v kose, ki jih delavnica zvari in monter vgradi: odseke, ki niso daljši od dolžine, ki jo izberete, razdeljene tam, kjer postavite montažne vare, vsak s svojim listom.

Samo **jeklena cev s stikovnim varom** se reže na odseke (dimenzije cevi ASME B36.10M, kolena po dolgem polmeru ASME B16.9). Baker, PVC in spoji PEX niso stikovni vari, zato njihovi vodi nimajo odsekov.

## Rezanje voda na odseke

1. Izberite jekleni cevni vod. V Lastnostih označite **Razreži na odseke**.
2. **Najdaljši odsek**: največja dolžina osrednje črte, ki jo lahko ima en odsek (za začetek 6 m, približno 20 ft).
3. **Številka voda**: del številke vsakega odseka. Novi odsečni vod dobi naslednjo prosto številko svojega sistema.

Odseki so oštevilčeni vzdolž voda od njegove prve točke: `CHW-12-S01`, `CHW-12-S02` … (sistem, številka voda, odsek). Odsek raste po kosih; kos, ki bi ga naredil predolgega, začne naslednji odsek, ravna dolžina, daljša od odseka, pa se prereže tam, kjer je odsek poln.

## Postavitev montažnih varov

1. Odprite {{ui:Zgradba}} in izberite {{ui:Montažni var}}.
2. Kliknite na cev z odseki, kjer naj bo montažni var. Znotraj ravne dolžine se cev tam prereže; znotraj fitinga ali ventila se var premakne na bližnji spoj.

Lastnosti navajajo montažne vare voda, vsakega z gumbom {{ui:Odstrani}}. Vsaka sprememba je en korak {{ui:Razveljavi}}.

## Listi odsekov

V Lastnostih odsečnega voda:

- {{ui:Listi odsekov (PDF)}}: ena stran za vsak odsek. Levo je odsek v izometričnem pogledu pod 30°: njegovi ravni deli so oštevilčeni, delavniški vari so pike, montažni vari so označeni s FW, prikazana pa je tudi severna smer tlorisa. Desno so številka odseka, dimenzija, razred in dolžina, nato njegove **dolžine rezov**, **fitingi**, **vari** (delavniški stikovni var na vsakem spoju znotraj odseka, montažni var tam, kjer se stakne z naslednjim odsekom) in njegov **kosovnik** s težo cevi (ASME B36.10M, teža za cev z gladkima koncema).
- {{ui:Seznam odsekov (CSV)}}: enako, blok za vsak odsek.

:::note
Dolžine rezov so od konca do konca, kakor so narisane: nič se ne odšteje za korensko režo ali dodatek za var. Kolena so po dolgem polmeru B16.9; T-kosi, redukcije in ventili so splošni, dimenzionirani glede na cev, ne po B16.9 ali proizvajalcu, in list to pove. Teže fitingov niso navedene. Pomožno orodje za načrtovanje in usklajevanje, ki ga dimenzionira inženir.
:::

## V datoteki IFC

Vsak del odsečnega voda nosi **CadCraft_Spool** z njegovim SpoolId, vodom, številko odseka v vodu ter mestom, kjer se začne in konča vzdolž voda. Vod ohrani svoja pravila (najdaljši odsek, montažni vari, številka voda) v svojem nizu, zato se odseki ob ponovnem odprtju datoteke vrnejo enaki.

## Kanali: seznam rezanja

Odprite {{ui:Zgradba}} in kliknite {{ui:Seznam krojenja kanalov}}: CSV ravnih kosov kanala po sistemu, obliki in dimenziji; vsaka ravna dolžina je razrezana na kose dolžine **Dolžina kosa** v vrstici Zračni kanal (za začetek 1500 mm, približno 5 ft), in to, kar ostane. Samo dolžine: brez šivov, debelin pločevine ali priključkov.
