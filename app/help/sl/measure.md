---
title: Merjenje razdalj, površin ploskev in lokacij v 3D
summary: Merite med dvema točkama modela IFC s prilepljanjem na oglišča in robove, preberite razliko vzdolž X, Y in Z ter izmerite površino ravne ploskve.
keywords: meri, merjenje, razdalja, dolžina, kota, površina, površina ploskve, lovljenje, oglišče, rob, merilni trak, ravnilo, odmik, lokacija, zemljepisna širina, zemljepisna dolžina, lat long, koordinate, georeferenca, pretvorba v karto, EPSG, geodetski posnetek, vzhodne koordinate, severne koordinate, WGS 84, datum
from: 5f430bba
---

## Kaj boste naredili

Preverite odmik, dolžino stene ali velikost ploskve neposredno iz modela, brez odpiranja avtorskega programa.

## Koraki

1. Odprite model IFC.
2. Kliknite {{ui:Meri}} v orodni vrstici ali pritisnite {{key:M}}. Pri dnu pogleda se odpre vrstica.
3. **Razdalja:** z izbrano {{ui:Razdalja}} kliknite prvo točko, nato drugo. Blizu oglišča se kazalec prilepi nanj, blizu roba na rob; majhna oznaka ob kazalcu pove, katera. Vsak par klikov naredi eno meritev.
4. **Površina ploskve:** izberite {{ui:Površina ploskve}} in kliknite ploskev. Vsa ravna ploskev zasveti in prikaže se njena površina.
5. **Ravne črte:** držite {{key:Shift}} med izbiro druge točke ali pritisnite {{ui:Raven}} v vrstici, da ostane tako. Črta teče vzdolž tiste osi, ki je kazalcu najbližja (v tlorisnem pogledu vzdolž X ali Y tlorisa; v drugih pogledih vzdolž X, Y ali Z), oznaka kazalca pa pravi „ravno vzdolž osi“. {{key:M}} še vedno začne in ustavi merjenje.
6. Kliknite {{ui:Počisti}}, da odstranite meritve, ali {{ui:Končano}} (ali {{key:Esc}}), da prenehate meriti.

## Kaj bi morali videti

- Črta med dvema točkama z dolžino na njej, v vrstici pa dolžina s tem, kako daleč gre vzdolž X, Y in Z (v osi modela, Z navzgor), vse v enoti {{ui:Enote}}, izbrani na orodni vrstici.
- Površina ploskve v kvadratnih metrih, na ploskvi in v vrstici.
- Oznake ostanejo na svojih meritvah med vrtenjem, pomikom in povečavo.
- Med merjenjem klikanje ne izbira elementov. Prerezna ravnina ali kvader še vedno reže model, izmerite lahko tisto, kar prikazuje, vključno z ravnimi prerezi.

## Kje je točka na zemlji

Kliknite {{ui:Lokacija}} v vrstici za merjenje, nato kliknite točko na modelu (lovi se na oglišča in robove kot pri razdaljah). Vrstica prikaže:

- **zemljepisno širino in dolžino** v decimalnih stopinjah in v stopinjah, minutah in sekundah, v WGS 84 za začetek;
- **kartne koordinate** (vzhodne in severne koordinate, zapisane v enoti {{ui:Enote}}, izbrani na orodni vrstici) v kartnem sistemu modela, na primer `EPSG:28356`;
- **višino** in navpični datum, ki ga navede datoteka, ter **lastni datum** datoteke (na primer GDA94).

{{ui:Kopiraj}} da vse na odložišče v eni vrstici. Sistem, v katerem sta zemljepisna širina in dolžina, spremenite v {{ui:Nastavitve}} › {{ui:BimCraft}} › {{ui:Lokacija}}: WGS 84 (kot GPS in spletni zemljevidi), lastni datum datoteke ali drug pogost, na primer ETRS89 ali NAD83.

To zahteva georeferenciran model: tistega, izvoženega s kartnimi koordinatami (pretvorba v karto v projicirani sistem s kodo EPSG). Model, ki ima samo zemljepisno širino in dolžino mesta, dobi približen položaj, izračunan iz točke mesta in njegovega pravega severa; vrstica to pove. Ko je odprtih več modelov, vsaka točka uporabi georeferenco svojega modela.

:::note
Prehod med datumi (na primer GDA94 v WGS 84) je narejen brez mrežnih datotek, zato je dober na nekaj metrov; statusna vrstica pove, kako dober je. Same kartne koordinate so natančne.
:::

## Pogoste napake

- **„… nima georeference“.** Datoteka nima pretvorbe v karto in nima zemljepisne širine in dolžine mesta. Izvozite jo znova z nastavljenim koordinatnim sistemom (skupne koordinate / geodetska točka v avtorskem orodju).
- **Kartne koordinate, a brez zemljepisne širine in dolžine.** Datoteka imenuje svoj kartni sistem brez kode EPSG ali s kodo, ki ni na seznamu; statusna vrstica pove, katera.
- **Točka pade na ploskev, ne na oglišče.** Lovljenje gleda element pod kazalcem. Približajte se oglišču ali povečajte.
- **Površina je manjša, kot pričakujete.** Odprtine so izpuščene, ploskev, ki se ukrivi, pa je več ploskev: kliknite vsako.
- **{{key:Esc}} je ustavil merjenje.** Prvi {{key:Esc}} zavrže napol narejeno razdaljo; drugi ustavi.

## Naprej

- [Prerežite model IFC z prerezno ravnino](topic:section-plane)
- [Skrijte, izolirajte in naredite elemente prosojne](topic:hide-and-isolate)
