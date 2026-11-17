---
title: Prepojte ďalšie modely na koordináciu
summary: Zobrazte iný model IFC vedľa svojho odkazom (nikdy nezlúčený), umiestnite ho podľa spoločných súradníc, mapových súradníc alebo dvoch bodov, prichytávajte sa k nemu pri kreslení a načítajte ho znova, keď sa zmení jeho súbor.
keywords: prepojenie, prepojený model, odkaz, xref, koordinácia, federácia, konštrukcia, MEP, konzultant, spoločné súradnice, zameranie, mapové súradnice, znova načítať, uvoľniť, odkaz na dokument, IfcDocumentReference
from: 3e0f1eab
---

## Čo urobíte

Kreslite voči modelu konzultanta (konštrukcia, technické zariadenia, existujúca budova) bez kopírovania čohokoľvek do svojho súboru.

**Prepojený model** sa zobrazuje v 3D pohľade a rezaný vo vašich pôdorysoch, ale nikdy sa nemení a nikdy sa neuloží do vášho modelu. Váš model si ponechá len odkaz: názov súboru a kde sa nachádza.

## Prepojenie modelu

1. V sekcii {{ui:Prepojené modely}} na ľavom paneli kliknite na {{ui:Prepojiť model…}} a vyberte súbor IFC. Zobrazí sa okamžite a jeho riadok bude mať **Zobrazené**.
2. Vyberte, kam ho umiestniť v {{ui:Umiestnenie}}:
   - **Spoločné súradnice** (na začiatku): jeho súradnice sú vaše, ako keby oba modely boli vytýčené z rovnakého počiatku.
   - **Mapové súradnice**: mapové súradnice oboch súborov ich zarovnajú. Obe musia mať prevod na mapu; BimCraft to oznámi, ak ho niektorý nemá.
   - **Podľa dvoch bodov…**: kliknite na bod na prepojenom modeli, potom na miesto vo vašom. Potom na druhú dvojicu. Odkaz sa posunie a otočí (okolo zvislej osi), aby zapadol.
3. Každá zmena odkazu a umiestnenia je jeden krok: {{key:Mod+Z}} ho vráti späť.

## Práca s ním

- Pôdorysy zobrazujú prepojený model rezaný na výške rezu podlažia ako tenké čiary a nástroj {{ui:Stena}} aj ostatné kresliace nástroje sa prichytávajú k jeho rohom a hranám.
- Vyberte jeho prvky v 3D pohľade a prečítajte si ich vlastnosti. Prepojený model nie je ten, ktorý upravujete, preto je jeho prepínač v {{ui:Modely}} vypnutý.
- **Súbor sa zmenil?** Keď prehliadač dokáže sledovať súbor (súbor otvorený cez jeho výber súborov alebo v Studio), BimCraft odkaz načíta sám niekoľko sekúnd po tom, ako sa súbor znova uloží, a oznámi to. Inak kliknite na {{ui:Načítať znova}}.
- {{ui:Uvoľniť}} ho skryje a uvoľní pamäť; odkaz zostane vo vašom modeli. {{ui:Načítať…}} ho znova zobrazí. Vyberiete súbor, pretože prehliadač nedokáže otvoriť súbor len podľa jeho názvu.
- Symbol × odstráni odkaz z vášho modelu.

## Čo by ste mali vidieť

- Vo vašom súbore IFC: IfcDocumentReference pre každý odkaz (názov súboru), prepojený s projektom, a jeho umiestnenie v sade vlastností projektu CadCraft_Links. Po opätovnom otvorení modelu sú jeho odkazy uvedené ako **Nenačítané**, kým ich nenačítate.

:::note
Kontroly kolízií, Porovnať a Nájsť môžu použiť načítaný odkaz ako ktorýkoľvek iný otvorený model: pozri [Pozrite si viac modelov IFC naraz](topic:several-models).
:::
