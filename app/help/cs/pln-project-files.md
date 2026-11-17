---
title: Otevření projektových souborů .pln a .pla
summary: Co BimCraft dnes dělá se soubory .pln, .pla, .tpl a .bpn a jak z nich exportovat IFC a DWG, aby se model a výkresy zde otevřely.
keywords: pln, pla, tpl, bpn, projektový soubor, archiv, šablona, záloha, export ifc, export dwg, překladač, zóny, rozvržení
from: 41fb921d
---

## Co uděláte

Přenesete projekt uložený jako `.pln` (projekt), `.pla` (archiv s knihovnou), `.tpl` (šablona) nebo `.bpn` (záloha) do BimCraftu. Jde o vlastní soubory Archicadu.

## Co se dnes otevře

- **Samotné projektové soubory se zatím neotevřou.** Jejich formát není zveřejněn a BimCraft ho zatím nečte. Když soubor otevřete, BimCraft to oznámí a odkáže sem.
- **BimCraft kontroluje první bajty souboru.** Projekty Archicadu od verze 17 začínají stejnou krátkou signaturou, takže BimCraft dokáže s jistotou poznat, že soubor je projekt Archicadu. Soubor s názvem Archicadu, který takto nezačíná, byl pravděpodobně přejmenován, je poškozený nebo pochází ze starší verze. Signatura nerozliší projekt, archiv a šablonu.
- **Export IFC se otevře celý**: model ve 3D, podlaží, zóny jako prostory, data prvků, sady vlastností a klasifikace, se všemi nástroji BimCraftu.
- **Export DWG se otevře** v 2D pohledu, s vrstvami a rozvrženími, a v {{ui:3D}}. Pro úpravy použijte {{ui:Upravit v CadCraft}}.

Nebo přeneste celý projekt jako jeden zip, s pohledy, rozvrženími a skupinami vlastností: viz [Otevření balíčku projektu](topic:open-project-bundle).

## Export IFC (model)

1. Otevřete projekt v Archicadu.
2. Zvolte **Soubor > Uložit jako** a jako typ souboru vyberte **IFC**.
3. Vyberte překladač IFC (Archicadem používaný název pro sadu nastavení exportu IFC). Pro BimCraft se hodí **IFC4 Reference View** nebo **IFC2X3 Coordination View 2.0**. IFC4X3 se také otevře.
4. Vyberte, co se má exportovat: celý projekt, nebo jen prvky viditelné na podlažích, která si prohlížíte.
5. Uložte, pak v BimCraftu klikněte na {{ui:Vybrat soubor}} a vyberte soubor `.ifc`.

Před exportem zkontrolujte v nastavení překladače:

- **Zóny**: exportujte je, aby se místnosti načetly jako prostory. Klikněte na {{ui:Prostory}} v BimCraftu a zobrazte je.
- **Vlastnosti a klasifikace**: exportujte je, aby se zobrazily v {{ui:Vlastnosti}} a daly se použít v {{ui:Najít}}, {{ui:Barva}} a {{ui:Součty množství}}.
- **Prostý `.ifc`**, ne `.ifczip` ani `.ifcxml`. BimCraft otevírá pouze prostý `.ifc`.

## Export DWG (výkresy)

1. Otevřete půdorys, řez nebo rozvržení, které chcete.
2. Zvolte **Soubor > Uložit jako** a jako typ souboru vyberte **DWG**.
3. Vyberte překladač DXF-DWG a uložte.
4. Pro celou sadu listů uložte rozvržení z Knihy rozvržení, nebo je publikujte jako DWG.
5. Otevřete `.dwg` v BimCraftu. Výkresy připojené exportem se otevřou spolu s ním, pokud jsou ve stejné složce; viz [Propojené výkresy a obrázky](topic:dwg-linked-files).

## Řešení potíží

- **"… je projekt Archicadu: jeho první bajty to říkají."** Exportujte IFC nebo DWG, jak je uvedeno výše, a otevřete tento soubor.
- **"… má název jako soubor Archicadu, ale nezačíná jako on."** Zkontrolujte, odkud soubor pochází: může jít o jiný typ souboru s novým názvem (zkuste ho otevřít pod jeho skutečnou příponou), o kopii, která se nedokončila, nebo o projekt z verze starší než 17. Pokud můžete, otevřete ho v Archicadu a pak exportujte IFC nebo DWG.
- **Model se otevře bez místností.** Zóny se neexportovaly. Zapněte je v překladači IFC a exportujte znovu.
- **Otvory nejsou vyříznuty.** BimCraft to uvádí pod **Zatím nevykresleno** v panelu {{ui:Soubor}}. Exportujte znovu; pokud to přetrvá, otevřete model v programu, který ho vytvořil, a otvory tam zkontrolujte.
- **Text na DWG vypadá jinak.** Export může zachovat písma, která BimCraft nemá; BimCraft kreslí text prostým bezpatkovým písmem.

Viz také [Získání projektového souboru do 3D přes IFC](topic:rvt-to-ifc) a [Co BimCraft čte z jednotlivých formátů](topic:file-formats).
