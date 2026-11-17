---
title: Iz projektne datoteke v BimCraft prek IFC
summary: Nastavitve izvoza IFC, ki se najbolje odprejo v BimCraftu (različica, nabori lastnosti, osnovne količine, prostori, povezani modeli, koordinate), kako odpreti rezultat in kaj izvoz ohrani.
keywords: izvoz, izvoz ifc, rvt v ifc, pretvori, 3d, geometrija, ifc2x3, ifc4, koordinacijski pogled, referenčni pogled, pogled za prenos načrtov, nabori lastnosti, osnovne količine, prostori, IfcSpace, povezane datoteke, skupne koordinate, geodetska točka, izhodiščna točka projekta, nastavitve
from: 3efd5fc9
---

## Kaj boste naredili

Projektno datoteko pretvorite v datoteko IFC, ki jo lahko v BimCraftu vrtite, pregledujete, preverjate in urejate. BimCraft še ne bere 3D modela v datoteki `.rvt`, zato izvoz poteka v programu, ki je datoteko ustvaril (Revit); BimCraft odpre rezultat.

## Koraki

1. Odprite projekt v programu, ki ga je ustvaril. Kartica BimCraft navede izdajo, v kateri je bil shranjen.
2. Odprite 3D pogled, ki prikazuje, kar želite izvoziti.
3. Izberite **Datoteka > Izvoz > IFC**.
4. V pogovornem oknu za izvoz izberite nastavitev (ali **Spremeni nastavitve…**) z nastavitvami spodaj.
5. Izberite mapo in ime datoteke ter izvozite.
6. V BimCraftu kliknite {{ui:Izberi datoteko}} in izberite novo datoteko `.ifc`. Povezani modeli, izvoženi kot lastne datoteke, se z {{ui:Dodaj model}} odprejo v isto sceno.

## Nastavitve, ki se tukaj najbolje odprejo

| Nastavitev v izvozniku | Izberite | Zakaj |
|---|---|---|
| Različica IFC | **IFC4 Reference View** za ogled, preverjanje in izpis količin; **IFC2X3 Coordination View 2.0**, kadar drugi potrebujejo IFC2X3 | Oba se odpreta v celoti. **IFC4 Design Transfer View** se tudi odpre, z natančnejšimi oblikami, vendar je datoteka večja in počasnejša. |
| Vrsta datoteke | **IFC** (navadna) | BimCraft ne odpre `.ifczip` ali `.ifcxml`. |
| Faza / vidni elementi | Faza, ki jo mislite, in **Izvozi samo elemente, vidne v pogledu**, ko nastavite 3D pogled za to | Izpusti, kar ste namenoma skrili. |
| Nabori lastnosti | **Izvozi nabore lastnosti Revit** in **Izvozi splošne nabore lastnosti IFC** | Postanejo nabori lastnosti, ki jih BimCraft prikaže v {{ui:Lastnosti}} in jih uporabljajo {{ui:Najdi}}, {{ui:Barva}} in {{ui:Preverjanja modela}}. |
| Osnovne količine | **Izvozi osnovne količine** | {{ui:Seštevki količin}} in razpredelnice jih uporabljajo (dolžine, površine, prostornine) namesto ugibanja. |
| Prostori in površine | **Izvozi prostore v 3D pogledih** (ali možnost Prostori / Spaces) | Prostori pridejo kot prostori: kliknite {{ui:Prostori}}, da jih vidite. |
| Povezane datoteke | **Izvozi povezane datoteke kot ločene IFC** | Vsaka povezava postane svoja datoteka; odprite jih skupaj z {{ui:Dodaj model}} in se poravnajo. |
| Osnova koordinat | **Skupne koordinate** (ali geodetska točka) | Datoteka nato nosi svoj položaj na zemljevidu (IfcMapConversion), zato delujejo Meri › Lokacija, kartne plasti na terenu in oblaki točk, postavljeni po kartnih koordinatah. Izhodiščna točka projekta ohrani model blizu izhodišča, vendar brez njegovega položaja na zemljevidu. |
| Razdeli stene in stebre po nivoju | Vklopljeno, kadar količine računate po etažah | Del vsake etaže je svoj element. |

## Kaj bi morali videti

Model v 3D, z etažami iz nivojev projekta in podatki o projektu v podoknu {{ui:Datoteka}}. **Izvoženo iz** navede izvoznika.

## Kaj izvoz ohrani in česa ne

- **Ohranjeno**: geometrija, etaže, vrste elementov, imena, tipi, večina parametrov (kot nabori lastnosti), osnovne količine, če so zahtevane, prostori kot prostori ter položaj na zemljevidu s skupnimi koordinatami.
- **Ni ohranjeno**: pogledi, listi, opombe, družine kot urejljive družine, delovni nabori in možnosti zasnove. Datoteka IFC je posnetek elementov modela, ne projekt. Za liste izvozite DWG in ga odprite v 2D pogledu.

## Pogoste napake

- **Parametri manjkajo v BimCraftu.** Vklopite zgornje možnosti naborov lastnosti in izvozite znova.
- **Prostori manjkajo.** Vklopite možnost prostorov in kliknite {{ui:Prostori}}.
- **Shranjevanje kot `.ifczip`.** Izberite navaden IFC ali razpakirajte `.ifczip`.
- **Ni položaja na zemljevidu.** Izvozite s skupnimi koordinatami; preverite, ali je geodetska točka projekta nastavljena.
- **Pričakovanje, da se urejanja vrnejo.** Urejanja, ki jih shranite v BimCraftu, gredo v novo datoteko IFC, ne v projektno datoteko.
