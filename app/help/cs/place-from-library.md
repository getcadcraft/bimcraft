---
title: Umístění zařízení a nábytku z knihovny
summary: Najděte položku v knihovně, v souboru nebo v otevřeném výkresu, umístěte ji na podlaží modelu IFC s průhledným náhledem, otočte ji, přichyťte ke stěně a uložte.
keywords: přesun, otočení, otáčení, tažení, knihovna, librarycraft, umístění, vložení, zařízení, nábytek, blok, rodina, položka, katalog, obsah, kcl, csv, gltf, obj, rfa, dwg, typ ifc
from: 3dad5d4b
---

## Co uděláte

Vložte položku z knihovny do modelu IFC: dřez, pracovní stůl, židli. BimCraft ji zapíše jako správný prvek IFC s typem, takže všechny kopie stejné položky sdílejí jednu sadu geometrie a jejich data, číslo položky a licence jdou s ní.

## Postup

1. Otevřete model IFC.
2. Klikněte na záložku {{ui:Knihovna}} vedle {{ui:Vlastnosti}} vpravo, nebo na {{ui:Knihovna}} v panelu nástrojů nad modelem.
3. Vyberte zdroj:
   - **Vestavěné symboly**: obecné symboly instalací pro půdorysy, které jsou součástí BimCraft pod licencí Apache-2.0 a fungují offline. Před stavbou zkontrolujte jejich rozměry. Pro elektrotechnické půdorysné symboly a prvky IFC použijte **Sestavení › Elektroinstalace**.
   - **Knihovna**: knihovna CadCraft na tomto webu. Veřejné položky nevyžadují přihlášení.
   - **Tento soubor**: bloky otevřeného výkresu DWG nebo DXF. Dynamický blok se stavy viditelnosti se nabídne jednou pro každý stav, pojmenovaný „Dřez: dvojitá mísa“, každý nakreslený jen s objekty daného stavu.
   - **Soubory…**: soubor DWG, DXF, IFC, glTF/GLB, OBJ, RFA nebo CSV na vašem počítači. Čte se na této záložce; nic se nenahrává.
   - **Další zdroje**: jiná knihovna, která mluví stejným formátem zdroje. Její adresu přidáte jednou; uchová se v tomto prohlížeči.
4. Hledejte nebo vyberte kategorii a klikněte na kartu. Karta ukazuje náhled půdorysu, název, výrobce a model, licenci a verzi.
5. Klikněte na {{ui:Umístit do půdorysu}} (v zobrazení {{ui:Půdorys}}) nebo {{ui:Umístit do modelu}} (v pohledu {{ui:3D}}). V {{ui:Rozdělit}}, kde se zobrazuje půdorys i pohled 3D, je tlačítko dělené: jeho hlavní akcí je {{ui:Umístit do půdorysu}} a šipka na jeho pravém konci otevře nabídku s {{ui:Umístit do modelu}}. Nebo přetáhněte kartu, případně obrázek v podrobnostech položky, na půdorys nebo pohled 3D: položka se umístí tam, kde ji pustíte. Perem nebo prstem podržte kartu chvíli a pak táhněte.
6. Vyberte podlaží na liště umisťování. V pohledu 3D se podlaží nad ním během umisťování skryjí a pohled se otočí shora; v půdorysu už půdorys to podlaží ukazuje. Když zvolíte {{ui:Umístit do modelu}} jen z půdorysu, vedle něj se otevře pohled 3D.
7. Přesuňte kurzor nad model: průhledný kvádr ukáže, kam položka půjde.
8. Stiskněte {{key:R}} pro otočení o 90°. Stiskněte {{key:Tab}} (nebo {{ui:Přichytávání ke stěně}}), aby se její zadní strana přiložila k nejbližší stěně a byla obrácena do místnosti.
9. Klikněte pro umístění. Nebo zadejte pozici do **X, Y (mm)**, například `1200, 3400`, a stiskněte {{key:Enter}}.

Světlo nebo cokoli zavěšeného shora: nastavte **Uchycení** na **U stropu**. Horní hrana položky pak sedí na spodní straně stropu nad místem (nebo ve výšce úrovně, kde strop není). Když je v zobrazení půdorysu stropní půdorys, **Uchycení** začíná na **U stropu**.

10. Odpovězte na jednu otázku: **číslo položky** (vyplní se další volné číslo), množství a poznámku. Stiskněte {{key:Enter}}.
11. Umístěte další, nebo stiskněte {{key:Esc}} a skončete.
12. Klikněte na {{ui:Uložit jako IFC}} a stáhněte upravenou kopii.

## Půdorys nebo model

Tlačítko umístění v Knihovně sleduje zobrazení, ve kterém jste, a změní se, jakmile změníte zobrazení (tlačítka {{ui:Půdorys}}, {{ui:Rozdělit}} a {{ui:3D}}, klávesnice, otevření souboru). Půdorys ukazuje jedno tlačítko, {{ui:Umístit do půdorysu}}; 3D ukazuje jedno tlačítko, {{ui:Umístit do modelu}}; Rozdělit ukazuje dělené tlačítko, s {{ui:Umístit do půdorysu}} jako hlavní akcí a {{ui:Umístit do modelu}} v nabídce. Oba způsoby používají stejnou lištu umisťování a zapisují stejný prvek IFC: kurzor funguje v zobrazení půdorysu u jednoho a v pohledu 3D u druhého. Stiskněte {{key:Esc}} kdykoli, kdy chcete skončit.

Přetažení karty nemá vlastní klávesu: dělené tlačítko nebo obyčejné tlačítko dělá totéž s klávesnicí.

## Přesun nebo otočení umístěné položky

V {{ui:Kreslení}} vyberte položku v půdorysu. Na jejím vkládacím bodu se ukáže čtvercový úchyt a vedle něj kulatý úchyt.

- Přetáhněte položku nebo její čtvercový úchyt pro přesun. Přichytává se jako nástroj Stěna (konce a plochy stěn); {{key:Shift}} ji udrží kolmo k původní poloze.
- Přetáhněte kulatý úchyt pro otáčení po krocích 15°. Podržte {{key:Shift}} pro kroky 1°.
- Stiskněte {{key:R}} pro otočení o 90°.
- V **Vlastnostech** (také v pohledu 3D) zadejte **X**, **Y** a **Otočení (°)**, nebo klikněte na **Otočit o 90°**.

Každý přesun je jeden krok zpět a přenáší se v Live TeamWork. Položka si ponechá své číslo, svá data z knihovny a svou výšku nad úrovní. Ještě není hotovo: přetahování v pohledu 3D.

## Co uvidíte

- Položku v modelu, vybranou, s jejími vlastnostmi vpravo: pole **Položka knihovny** s licencí a uvedením autora a sadami `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` a u položek z označených výkresů `CadCraft_SourceAttributes`.
- „Umístěno: *položka* (položka *n*)“ v seznamu změn. {{key:Mod+Z}} to vrátí zpět.
- Stavový řádek: „Položka *položka* byla umístěna jako položka *n*.“

## Dobré vědět

- Některé položky jsou v několika velikostech nebo volbách: karta pak má výběr **Varianta** a umístí se ta, kterou vyberete. Viz [Umístění a záměna položky knihovny, která má varianty](topic:library-variants).
- Položka bez 3D tělesa (2D symbol) se umístí jako náhradní kvádr; výšku zadáte, až se zeptá.
- Další stejné: vyberte umístěnou položku a použijte {{ui:Kopírovat}} a {{ui:Vložit}}, nebo {{key:Mod+D}}. Viz [Kopírování, vložení a duplikování položek knihovny](topic:copy-paste).
- Chcete-li začínat každé umístění s přichytáváním ke stěně, zapněte **Spustit s přichytáváním ke stěně** v [nastavení BimCraft](topic:settings).
- Délky se převedou na vlastní jednotky modelu, ať jsou jakékoli.
- **Entourage** (stromy, keře, lidé, auta) je také v knihovně: hledejte „tree“, „person“ nebo „car“. Tyto položky nakreslil CadCraft (CC0) a při umístění si zachovávají barvy (kmen hnědý, listí zelené, okna auta průhledná), v BimCraft i v jiných BIM programech. Zobrazují se na [vykreslených obrázcích](topic:render).
- V souboru IFC2X3 se tělo zapíše jako fasetovaný objem; v IFC4 jako trojúhelníková síť ploch. Oba se otevřou v ostatních nástrojích IFC.
- Výkres (DWG nebo DXF) zde uložit nelze, takže položky se umisťují jen do modelů IFC. Na výkresu použijte **Tento soubor**, abyste viděli, čím by se jeho bloky staly.

## Položky ve vašem jazyce

Položka může mít svůj název, popis a typ i v dalších jazycích. Pokud je má v jazyce, na který je BimCraft nastaven (Nastavení › Obecné › Jazyk), stránka položky je ukazuje a pod nimi je název, který jí dal výrobce. **Umístit** zapíše název ve vašem jazyce do modelu, takže rozpis {{ui:Zařízení}} ho uvádí tak. Položka zůstává touž položkou: kontrola aktualizací a výměna se řídí samotnou položkou, nikdy jejím názvem. Položky bez překladu si ponechají svá slova.

## Časté chyby

- **Chybí tlačítko umístění.** Není otevřen model IFC. Nejdříve jej otevřete.
- **Průhledný náhled nesleduje kurzor.** Kurzor je mimo plochu modelu, nebo je rovina podlaží mimo zobrazení. Klikněte na {{ui:Shora}}.
- **{{ui:Přichytávání ke stěně}} hlásí, že nejsou žádné stěny.** Podlaží nemá v IFC žádné stěny (některé exporty dávají stěny na jiné podlaží). Vyberte to podlaží, nebo zadejte X a Y.
- **Položky souboru mají špatnou velikost.** Soubor nemá jednotky, nebo uvádí špatné. V {{ui:Soubory…}} zvolte jednotky a načtěte jej znovu.

:::tip
Umístění stejné položky dvakrát sdílí jeden typ IFC, takže model se čtyřiceti židlemi uloží židli jen jednou.
:::
