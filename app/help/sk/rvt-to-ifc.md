---
title: Z projektového súboru do BimCraft cez IFC
summary: Nastavenia exportu IFC, ktoré sa v BimCraft najlepšie otvoria (verzia, sady vlastností, základné množstvá, miestnosti, prepojené modely, súradnice), ako výsledok otvoriť a čo export zachováva.
keywords: export, export IFC, rvt do IFC, previesť, 3D, geometria, IFC2X3, IFC4, koordinačný pohľad, referenčný pohľad, pohľad na prenos návrhu, sady vlastností, základné množstvá, miestnosti, priestory, prepojené súbory, zdieľané súradnice, bod prieskumu, nastavenia
from: 3efd5fc9
---

## Čo urobíte

Projektový súbor premeníte na súbor IFC, ktorý môžete obiehať, kontrolovať, overovať a upravovať v BimCraft. BimCraft zatiaľ nečíta 3D model vo vnútri súboru `.rvt`, takže export sa robí v programe, ktorý súbor vytvoril (Revit); BimCraft výsledok otvorí.

## Postup

1. Otvorte projekt v programe, ktorý ho vytvoril. Karta BimCraft uvádza verziu, v ktorej bol uložený.
2. Otvorte 3D pohľad, ktorý ukazuje to, čo chcete exportovať.
3. Zvoľte **Súbor > Exportovať > IFC**.
4. V dialógovom okne exportu zvoľte nastavenie (alebo **Upraviť nastavenie…**) s nižšie uvedenými hodnotami.
5. Zvoľte priečinok a názov súboru a exportujte.
6. V BimCraft kliknite na {{ui:Vybrať súbor}} a zvoľte nový súbor `.ifc`. Prepojené modely exportované ako vlastné súbory sa otvoria do tej istej scény cez {{ui:Pridať model}}.

## Nastavenia, ktoré sa v BimCraft najlepšie otvoria

| Nastavenie v exportéri | Zvoľte | Prečo |
|---|---|---|
| Verzia IFC | **IFC4 Reference View** na prezeranie, kontrolu a výkazy; **IFC2X3 Coordination View 2.0**, keď iní potrebujú IFC2X3 | Obidve sa otvoria úplne. **IFC4 Design Transfer View** sa tiež otvorí, s presnejšími tvarmi, ale súbor je väčší a pomalší. |
| Typ súboru | **IFC** (obyčajný) | BimCraft neotvára `.ifczip` ani `.ifcxml`. |
| Fáza / viditeľné prvky | Fáza, ktorú myslíte, a **Exportovať len prvky viditeľné v pohľade**, keď 3D pohľad na to nastavujete | Vynechá to, čo ste zámerne skryli. |
| Sady vlastností | **Exportovať sady vlastností Revit** a **Exportovať bežné sady vlastností IFC** | Stanú sa sadami vlastností, ktoré BimCraft zobrazuje v {{ui:Vlastnosti}} a ktoré používajú {{ui:Hľadať}}, {{ui:Farba}} a {{ui:Kontroly modelu}}. |
| Základné množstvá | **Exportovať základné množstvá** | {{ui:Súčty množstiev}} a tabuľky ich používajú (dĺžky, plochy, objemy) namiesto odhadovania. |
| Miestnosti a plochy | **Exportovať miestnosti v 3D pohľadoch** (alebo možnosť Miestnosti / Priestory) | Miestnosti prídu ako priestory: kliknite na {{ui:Priestory}}, aby ste ich videli. |
| Prepojené súbory | **Exportovať prepojené súbory ako samostatné IFC** | Každé prepojenie sa stane vlastným súborom; otvorte ich spolu cez {{ui:Pridať model}} a zarovnajú sa. |
| Základ súradníc | **Zdieľané súradnice** (alebo bod prieskumu) | Súbor potom nesie svoje miesto na mape (IfcMapConversion), takže fungujú Merať › Umiestnenie, mapové vrstvy na zemi a mračná bodov umiestnené podľa mapových súradníc. Základný bod projektu udrží model blízko počiatku, ale bez jeho miesta na mape. |
| Rozdeliť steny a stĺpy podľa podlažia | Zapnuté, keď beriete množstvá podľa podlažia | Časť každého podlažia je vlastný prvok. |

## Čo by ste mali vidieť

Model v 3D, podlažia zobrazené podľa úrovní projektu a informácie o projekte v paneli {{ui:Súbor}}. **Exportované z** uvádza exportér.

## Čo export zachová a čo nie

- **Zachová sa**: geometria, podlažia, druhy prvkov, názvy, typy, väčšina parametrov (ako sady vlastností), základné množstvá, ak sa žiadajú, miestnosti ako priestory a miesto na mape pri zdieľaných súradniciach.
- **Nezachová sa**: pohľady, listy, poznámky, rodiny ako upraviteľné rodiny, pracovné sady a možnosti návrhu. Súbor IFC je snímka prvkov modelu, nie projektu. Pre listy exportujte DWG a otvorte ho v 2D pohľade.

## Časté chyby

- **Parametre v BimCraft chýbajú.** Zapnite vyššie uvedené možnosti sád vlastností a exportujte znova.
- **Chýbajú miestnosti.** Zapnite možnosť miestností a potom kliknite na {{ui:Priestory}}.
- **Uloženie ako `.ifczip`.** Zvoľte obyčajné IFC alebo rozbaľte `.ifczip`.
- **Žiadne miesto na mape.** Exportujte so zdieľanými súradnicami a skontrolujte, či je nastavený bod prieskumu projektu.
- **Očakávanie, že sa úpravy vrátia do projektu.** Úpravy, ktoré uložíte v BimCraft, idú do nového súboru IFC, nie do projektového súboru.
