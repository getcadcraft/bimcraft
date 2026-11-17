---
title: Izberite element in preberite njegove lastnosti
summary: Kliknite kateri koli element v 3D modelu, da ga označite, in preberite njegovo ime, tip, oznako, GlobalId, nabore lastnosti in količine.
keywords: lastnosti, izbor, izberi, klik, element, parametri, nabori lastnosti, pset, količine, globalid, guid, tip, pregled
from: 43b80aa8
---

## Kaj boste naredili

Izberite elemente v modelu IFC in preberite vse, kar datoteka pove o njih: atribute, nabore lastnosti, lastnosti tipa in količine.

## Koraki

1. Odprite model IFC.
2. Kliknite element, na primer vrata. Kliknite brez vlečenja: vlečenje za več kot nekaj slikovnih pik kroži namesto izbire.
3. Glejte element: označen je modro.
4. Glejte podokno {{ui:Properties}} na desni. Na vrhu sta vrsta elementa (na primer „Door“ ali „WallStandardCase“) in njegovo ime.
5. Preberite prvi blok: **Ime**, **Tip**, **Vrsta objekta**, **Oznaka**, **Opis**, **GlobalId** in **Vrstica**.
6. Pomaknite se navzdol do naborov lastnosti. Prvi trije so odprti; kliknite ime katerega koli drugega nabora, da ga odprete.
7. Kliknite drug element, da preklopite nanj.
8. Pritisnite {{key:Esc}} ali kliknite prazno ozadje, da počistite izbor.

## Kaj boste videli

- Označen element in njegovi podatki na desni.
- Nabori lastnosti po abecedi. Nabori, ki prihajajo iz **tipa** elementa, imajo za imenom „ (tip)“ in opombo „Lastnost tipa: sprememba tukaj velja za vsak element tega tipa.“
- Nabori količin (na primer dolžine, površine in prostornine) so našteti med drugimi nabori. Količine so samo za branje.
- Vrednosti, ki jih lahko spremenite, izgledajo kot gumbi. [Spremenite lastnosti IFC in shranite urejeno kopijo](topic:edit-ifc-properties) pokaže, kako.

[Polja podokna Lastnosti](topic:properties-panel) razloži vsako polje.

## Dostop do skritih elementov

1. Da dosežete nekaj znotraj stavbe, odznačite etaže nad njim v seznamu {{ui:Storeys}}.
2. Da dosežete steno za prostornino sobe, izklopite {{ui:Spaces}}.
3. Kliknite element.

## Pogoste napake

- **Vlečenje med klikom.** BimCraft to obravnava kot vrtenje in ne izbere. Držite miško pri miru.
- **Pričakovanje enot ob številkah.** Vrednosti so prikazane tako, kot so shranjene v datoteki, zaokrožene na štiri decimalke, brez simbola enote. Dolžine v metričnem izvozu so običajno milimetri ali metri; preverite nastavitve izvoznika.
- **Iskanje parametra po znanem imenu.** Izvozniki preimenujejo in razvrstijo parametre v nabore lastnosti IFC, kot je `Pset_WallCommon`. Preglejte vsak nabor; parametri po meri pogosto sedijo v naboru, ki nosi ime programa izvoznika ali vašega podjetja.
- **Pričakovanje iskalnega polja.** Za izbor kliknite element; {{key:Mod}}+klik ali {{key:Shift}}+klik izbere več, {{key:Mod+A}} pa izbere vsak prikazan element. Seznam {{ui:Elements}} na levi samo šteje elemente po vrsti; ni klikljiv.
- **Izbiranje na kartici projektne datoteke.** Kartica datoteke nima elementov za izbiro: „Lastnosti elementa potrebujejo 3D model. Odprite izvoz IFC te datoteke, da jih vidite.“
