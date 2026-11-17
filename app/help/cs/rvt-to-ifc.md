---
title: Z projektového souboru do BimCraftu přes IFC
summary: Nastavení exportu IFC, které se v BimCraftu otevírá nejlépe (verze, sady vlastností, základní množství, místnosti, propojené modely, souřadnice), jak výsledek otevřít a co export zachovává.
keywords: export, export ifc, rvt do ifc, převod, 3d, geometrie, ifc2x3, ifc4, koordinační pohled, referenční pohled, pohled pro předání návrhu, sady vlastností, základní množství, místnosti, prostory, propojené soubory, sdílené souřadnice, bod průzkumu, nastavení
from: 3efd5fc9
---

## Co budete dělat

Převeďte projektový soubor na soubor IFC, který můžete v BimCraftu otáčet, prohlížet, kontrolovat a upravovat. BimCraft zatím nečte 3D model uvnitř souboru `.rvt`, takže export probíhá v programu, který soubor vytvořil (Revit). BimCraft otevře výsledek.

## Postup

1. Otevřete projekt v programu, ve kterém vznikl. Karta BimCraftu uvádí verzi, ve které byl uložen.
2. Otevřete 3D pohled, který ukazuje to, co chcete exportovat.
3. Zvolte **Soubor > Export > IFC**.
4. V dialogu exportu zvolte nastavení (nebo **Upravit nastavení…**) s níže uvedenými volbami.
5. Zvolte složku a název souboru a exportujte.
6. V BimCraftu klikněte na {{ui:Vybrat soubor}} a zvolte nový soubor `.ifc`. Propojené modely exportované jako vlastní soubory se otevřou do stejné scény pomocí {{ui:Přidat model}}.

## Nastavení, která se zde otevírají nejlépe

| Nastavení v exportéru | Zvolte | Proč |
|---|---|---|
| Verze IFC | **IFC4 Reference View** pro prohlížení, kontrolu a odečet množství; **IFC2X3 Coordination View 2.0**, když ostatní potřebují IFC2X3 | Obě se otevřou celé. **IFC4 Design Transfer View** se také otevře, s přesnějšími tvary, ale soubor je větší a pomalejší. |
| Typ souboru | **IFC** (prostý) | BimCraft neotevírá `.ifczip` ani `.ifcxml`. |
| Fáze / viditelné prvky | Fáze, kterou myslíte, a **Exportovat jen prvky viditelné v pohledu**, když 3D pohled pro to nastavujete | Vynechá to, co jste schovali záměrně. |
| Sady vlastností | **Exportovat sady vlastností Revitu** a **Exportovat běžné sady vlastností IFC** | Stanou se sadami vlastností, které BimCraft zobrazuje v {{ui:Vlastnosti}} a které používají {{ui:Najít}}, {{ui:Barva}} a {{ui:Kontroly modelu}}. |
| Základní množství | **Exportovat základní množství** | {{ui:Součty množství}} a rozpisy je používají (délky, plochy, objemy) místo odhadu. |
| Místnosti a plochy | **Exportovat místnosti v 3D pohledech** (nebo volbu Místnosti / Prostory) | Místnosti přijdou jako prostory: klikněte na {{ui:Prostory}}, abyste je viděli. |
| Propojené soubory | **Exportovat propojené soubory jako samostatné IFC** | Každé propojení se stane vlastním souborem; otevřete je spolu pomocí {{ui:Přidat model}} a zarovnají se. |
| Základ souřadnic | **Sdílené souřadnice** (nebo bod průzkumu) | Soubor pak nese svou polohu na mapě (IfcMapConversion), takže fungují Měřit › Umístění, mapové vrstvy na terénu a mračna bodů umístěná podle mapových souřadnic. Základní bod projektu udrží model blízko počátku, ale bez jeho polohy na mapě. |
| Dělit stěny a sloupy podle úrovně | Zapnuto, když odečítáte množství podle podlaží | Část každého podlaží je vlastní prvek. |

## Co byste měli vidět

Model ve 3D, s podlažími převzatými z úrovní projektu a s informacemi o projektu v panelu {{ui:Soubor}}. **Exportováno z** uvádí exportér.

## Co export zachová a co ne

- **Zachová se**: geometrie, podlaží, druhy prvků, názvy, typy, většina parametrů (jako sady vlastností), základní množství, pokud je vyžádáte, místnosti jako prostory a mapová poloha se sdílenými souřadnicemi.
- **Nezachová se**: pohledy, listy, anotace, rodiny jako upravitelné rodiny, sdílené pracovní sady a návrhové varianty. Soubor IFC je snímek prvků modelu, ne projektu. Pro listy exportujte DWG a otevřete jej v 2D pohledu.

## Časté chyby

- **Parametry v BimCraftu chybí.** Zapněte výše uvedené volby sad vlastností a exportujte znovu.
- **Chybějí místnosti.** Zapněte volbu místností a potom klikněte na {{ui:Prostory}}.
- **Uložení jako `.ifczip`.** Zvolte prosté IFC, nebo `.ifczip` rozbalte.
- **Chybí poloha na mapě.** Exportujte se sdílenými souřadnicemi a zkontrolujte, zda je nastaven bod průzkumu projektu.
- **Očekávání, že se úpravy vrátí do projektu.** Úpravy uložené v BimCraftu jdou do nového souboru IFC, ne do projektového souboru.
