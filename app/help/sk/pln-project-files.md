---
title: Otvoriť projektové súbory .pln a .pla
summary: Čo BimCraft dnes robí so súbormi .pln, .pla, .tpl a .bpn a ako z nich exportovať IFC a DWG, aby sa model a výkresy tu otvorili.
keywords: pln, pla, tpl, bpn, projektový súbor, archív, šablóna, záloha, export ifc, export dwg, prekladač, zóny, rozloženia
from: 41fb921d
---

## Čo urobíte

Dostanete projekt uložený ako `.pln` (projekt), `.pla` (archív s jeho knižnicou), `.tpl` (šablóna) alebo `.bpn` (záloha) do BimCraft. Sú to vlastné súbory programu Archicad.

## Čo sa dnes otvorí

- **Samotné projektové súbory sa zatiaľ neotvoria.** Ich formát nie je zverejnený a BimCraft ho zatiaľ nečíta. Keď ho otvoríte, BimCraft to oznámi a odkáže sem.
- **BimCraft kontroluje prvé bajty súboru.** Projekty Archicadu od verzie 17 začínajú rovnakou krátkou signatúrou, takže BimCraft s istotou dokáže povedať, že súbor je projekt Archicadu. Súbor s názvom z Archicadu, ktorý tak nezačína, bol pravdepodobne premenovaný, je poškodený alebo pochádza zo staršej verzie. Signatúra nerozlíši projekt, archív a šablónu.
- **Export IFC sa otvorí celý**: model v 3D, podlažia, zóny ako priestory, údaje prvkov, sady vlastností a klasifikácie, so všetkými nástrojmi BimCraft.
- **Export DWG sa otvorí** v 2D zobrazení, s jeho hladinami a rozloženiami, a v {{ui:3D}}. Na úpravu použite {{ui:Edit in CadCraft}}.

Alebo prineste celý projekt ako jeden zip, s jeho pohľadmi, rozloženiami a skupinami vlastností: pozri [Otvoriť balík projektu](topic:open-project-bundle).

## Export IFC (model)

1. Otvorte projekt v Archicade.
2. Zvoľte **File > Save As** a ako typ súboru vyberte **IFC**.
3. Vyberte prekladač IFC (Archicadov názov pre súbor nastavení exportu IFC). Pre BimCraft sa hodí **IFC4 Reference View** alebo **IFC2X3 Coordination View 2.0**. IFC4X3 sa tiež otvorí.
4. Vyberte, čo sa exportuje: celý projekt alebo iba prvky viditeľné na podlažiach, ktoré si prezeráte.
5. Uložte, potom v BimCraft kliknite na {{ui:Choose a file}} a vyberte súbor `.ifc`.

Pred exportom skontrolujte tieto nastavenia prekladača:

- **Zóny**: exportujte ich, aby miestnosti prišli ako priestory. Kliknutím na {{ui:Spaces}} v BimCraft ich zobrazíte.
- **Vlastnosti a klasifikácie**: exportujte ich, aby sa zobrazili v {{ui:Properties}} a dali sa použiť v {{ui:Find}}, {{ui:Color}} a {{ui:Quantity totals}}.
- **Obyčajný `.ifc`**, nie `.ifczip` ani `.ifcxml`. BimCraft otvorí iba obyčajný `.ifc`.

## Export DWG (výkresy)

1. Otvorte pôdorys, rez alebo rozloženie, ktoré chcete.
2. Zvoľte **File > Save As** a ako typ súboru vyberte **DWG**.
3. Vyberte prekladač DXF-DWG a uložte.
4. Pre celú sadu listov uložte rozloženia z Layout Book alebo ich publikujte ako DWG.
5. Otvorte `.dwg` v BimCraft. Výkresy prepojené exportom sa otvoria spolu s ním, keď sú v rovnakom priečinku; pozri [Prepojené výkresy a obrázky](topic:dwg-linked-files).

## Riešenie problémov

- **„… je projekt Archicadu: jeho prvé bajty to hovoria.“** Exportujte IFC alebo DWG podľa postupu vyššie a otvorte tento súbor.
- **„… má názov ako súbor Archicadu, ale nezačína ako on.“** Skontrolujte, odkiaľ súbor pochádza: môže ísť o iný typ súboru s novým názvom (skúste ho otvoriť pod jeho skutočnou príponou), o kópiu, ktorá sa nedokončila, alebo o projekt zo verzie pred 17. Ak môžete, otvorte ho v Archicade a potom exportujte IFC alebo DWG.
- **Model sa otvorí bez miestností.** Zóny sa neexportovali. Zapnite ich v prekladači IFC a exportujte znova.
- **Otvory nie sú vyrezané.** BimCraft to uvádza v časti **Zatiaľ nevykreslené** v paneli {{ui:File}}. Exportujte znova; ak to pretrváva, otvorte model v programe, ktorý ho vytvoril, a skontrolujte tam otvory.
- **Text v DWG vyzerá inak.** Export môže zachovať písma, ktoré BimCraft nemá; BimCraft kreslí text jednoduchým bezpätkovým písmom.

Pozri tiež [Získanie projektového súboru do 3D cez IFC](topic:rvt-to-ifc) a [Čo BimCraft číta z každého formátu](topic:file-formats).
