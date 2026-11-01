---
title: Začínáme s BimCraftem
summary: Co BimCraft dnes umí, jak otevřít první model, prohlédnout si ho ve 3D, změnit jednu hodnotu a uložit kopii.
keywords: start, první spuštění, otevřít, ifc, rvt, dwg, rychlý start, úvod, prohlížeč, bim
from: fc2dea19
---

BimCraft je aplikace pro modely budov z rodiny CadCraft. V této verzi budovy **otevírá, čte a kontroluje** a **upravuje data v modelech IFC**. Nové prvky zatím nekreslí ani nemodeluje. Představte si ho jako prohlížeč modelů a kontrolní nástroj, který navíc umožňuje opravit názvy, značky a hodnoty vlastností v souboru IFC.

Co otevírá:

| Soubor | Co získáte |
|---|---|
| IFC (`.ifc`) | Celý model ve 3D: otáčení, podlaží, vlastnosti prvků a úpravy názvů a hodnot vlastností |
| Soubory projektů a rodin (`.rvt`, `.rfa`, `.rte`, `.rft`) | Kartu souboru: verzi, ve které byl uložen, informace o projektu, náhledový obrázek a propojené soubory. Žádné 3D. |
| DWG a DXF | Výkres ve 2D: prostor modelu i každý list, vrstvy, propojené výkresy, pohled na tisk a rozpis zařízení pro označené výkresy provozoven stravování |
| Složka projektu | Přehled všech modelů ve složce: zálohy, odkazy, poškozené kopie a návrh, kterým souborem začít |

Vše probíhá ve Vašem prohlížeči, na Vašem počítači. **Nic se nenahrává.** Podrobnosti najdete v tématu [Soubory, které BimCraft otevírá a ukládá](topic:files).

## Otevření BimCraftu

1. Otevřete BimCraft v aktuálním prohlížeči. Funguje Chrome, Edge, Firefox i Safari; rozdíly uvádí téma [Prohlížeče, zařízení a paměť](topic:platforms).
2. Počkejte na prázdnou obrazovku s nápisem „Otevřete model budovy.“

:::note
BimCraft běží v prohlížeči a na počítači v CadCraft Studiu spolu s ostatními aplikacemi. Ukládání do cloudu zatím není k dispozici: soubory otevíráte ze svého počítače a kopie ukládáte zpět na něj.
:::

## Otevření prvního modelu

Nejrychlejší způsob, jak zjistit, co BimCraft umí, je soubor IFC.

1. Klikněte na {{ui:Vybrat soubor}} uprostřed obrazovky.
2. Vyberte soubor `.ifc` v {{pick:mac=Finderu|windows=Průzkumníku souborů|linux=správci souborů}} a potvrďte.
3. Počkejte, až stavový řádek ve spodní části obrazovky zobrazí „Spouští se engine IFC…“ a potom „Vytváří se geometrie“.

Uprostřed uvidíte model ve 3D, vlevo panel {{ui:Soubor}} a seznam {{ui:Podlaží}} a vpravo prázdný panel {{ui:Vlastnosti}}. Stavový řádek skončí zprávou „Otevřeno“ a počtem prvků.

:::tip
Soubor můžete také přetáhnout z {{pick:mac=Finderu|windows=Průzkumníku souborů|linux=správce souborů}} přímo na stránku. Během přetahování obrazovka zobrazuje „Pusťte pro otevření“.
:::

:::offline
Engine IFC se při prvním otevření modelu IFC načte z webu, pokud BimCraft nebyl uložen pro použití offline. Výkresy DWG a DXF, soubory projektů a složky nepotřebují nic navíc: jejich čtečky jsou součástí aplikace. Pokud tlačítko v liště aplikace zobrazuje {{ui:Připraveno offline}}, otevře se offline všechno. Pokud ne, modely IFC se neotevřou, dokud se znovu nepřipojíte, nebo pokud se již nějaký neotevřel v této kartě. Viz [Online a offline](topic:online-offline).
:::

:::online
Chystáte se někam bez připojení? Klikněte v liště aplikace na {{ui:Uložit pro offline}} a počkejte na {{ui:Připraveno offline}}. Uložená kopie (asi 11 MB) obsahuje engine IFC. Viz [Práce offline](common:offline).
:::

## Rozhlédnutí

:::mouse
1. Tažením levým tlačítkem myši se otáčíte kolem modelu.
2. Kolečkem myši přibližujete a oddalujete.
3. Tažením pravým tlačítkem myši posouváte pohled. Na trackpadu Macu místo toho podržte {{key:Shift}} a táhněte.
4. Stiskem {{key:F}} nebo kliknutím na {{ui:Přizpůsobit}} znovu uvidíte celý model.
:::

:::touch
1. Tažením jedním prstem se otáčíte.
2. Dvěma prsty přibližujete (roztažením a sevřením) a posouváte pohled (společným pohybem obou prstů).
3. Klepnutím na {{ui:Přizpůsobit}} znovu uvidíte celý model.
:::

## Jedna skutečná úprava: oprava značky

1. Klikněte na stěnu, dveře nebo jiný prvek v modelu. Zmodrá a vpravo se zobrazí jeho vlastnosti.
2. V panelu {{ui:Vlastnosti}} klikněte na hodnotu vedle **Značka**.
3. Napište novou značku a stiskněte {{key:Enter}}.
4. Podívejte se na sekci {{ui:Změny}}, která se vlevo otevřela: Vaše změna je v ní uvedena se starou a novou hodnotou.

## Uložení kopie

1. Klikněte na {{ui:Uložit jako IFC}} v sekci {{ui:Změny}} nebo stiskněte {{key:Mod+S}}.
2. Nový soubor najdete ve složce stažených souborů. Jmenuje se podle originálu s doplněným textem „ (edited)“, například `Clinic (edited).ifc`.

Původní soubor se nikdy nezmění. Úpravy podrobně vysvětluje téma [Změna vlastností IFC a uložení upravené kopie](topic:edit-ifc-properties).

## Kam dál

- [Obrazovka BimCraftu](topic:workspace): každý panel jeho názvem.
- [Pokud přicházíte z jiných programů pro BIM a kreslení](topic:coming-from): co působí jinak, pokud jste zvyklí na Revit.
- [Otevření celé složky projektu](topic:open-project-folder): nasměrujte BimCraft na složku projektu a nechte ho soubory roztřídit.
- [Zobrazení výkresu DWG nebo DXF](topic:view-dwg): listy, vrstvy a pohled na tisk.
