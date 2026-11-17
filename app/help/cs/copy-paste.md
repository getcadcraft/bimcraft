---
title: Kopírování, vkládání a duplikování položek knihovny
summary: Zkopírujte umístěnou položku knihovny a vložte ji tam, kam kliknete, na stejné místo vedle originálu nebo do jiného modelu; vlastnosti jiného prvku zkopírujte jako text; zpět a znovu.
keywords: kopírovat, vložit, duplikovat, schránka, vložit na stejné místo, vyjmout, smazat, vybrat vše, zpět, znovu, nabídka úprav, více, položka knihovny, umístění, opakovat, pole
from: 6ac15931
---

## Co provedete

Vytvořte další kopie položky, kterou jste už umístili: druhý pracovní stůl, řadu dřezů. Tato stránka se týká **umístěných položek knihovny**, tedy prvků, které BimCraft zapsal do modelu. Jednu z nich lze vložit do libovolného modelu, i v jiné kartě. Stěny, dveře a všechny ostatní prvky se kopírují, vyjímají, vkládají a mažou stejným způsobem v rámci svého modelu: viz [Smazání, vyjmutí, kopírování a vložení stavebních prvků](topic:edit-elements).

Příkazy jsou na panelu nástrojů nad modelem: {{ui:Zpět}}, {{ui:Znovu}}, {{ui:Kopírovat}}, {{ui:Vložit}} a {{ui:Více}}, což je nabídka s {{ui:Vyjmout}}, {{ui:Kopírovat}}, {{ui:Vložit}}, {{ui:Vložit na stejné místo}}, {{ui:Duplikovat}}, {{ui:Smazat}}, {{ui:Vybrat vše}} a {{ui:Zrušit výběr}}. Příkaz, který teď nelze provést, je zešedlý; najetím na něj zjistíte důvod, nebo na něj kliknete a stavový řádek vysvětlí, proč nefunguje.

## Postup

1. Otevřete model IFC s položkou knihovny, nebo ji nejprve umístěte. Viz [Umístění zařízení a nábytku z knihovny](topic:place-from-library).
2. Klikněte na položku ve 3D zobrazení. Její vlastnosti ukážou pole **Položka knihovny**.
3. Klikněte na {{ui:Kopírovat}} nebo stiskněte {{key:Mod+C}}.
4. Klikněte na {{ui:Vložit}} nebo stiskněte {{key:Mod+V}}. Otevře se lišta umísťování a za ukazatelem se pohybuje průhledné pole, natočené jako originál.
5. Stiskněte {{key:R}} pro otočení o 90°, {{key:Tab}} pro přichycení zadní strany ke stěně, nebo zadejte X a Y do lišty umísťování.
6. Klikněte tam, kam má kopie jít. Každým kliknutím umístíte další kopii; zastavíte stiskem {{key:Esc}}.
7. Klikněte na {{ui:Uložit jako IFC}}, abyste stáhli upravenou kopii modelu.

## Vložit na stejné místo

{{ui:Více}}, {{ui:Vložit na stejné místo}} nebo {{key:Mod+Shift+V}} vloží bez klikání, na stejné X a Y a se stejným natočením:

- **Do stejného modelu, na stejné podlaží**: dvě položky přesně na jednom místě by nebyly k užitku, takže kopie půjde hned vedle originálu, o šířku položky plus 100 mm podél její vlastní šířky. Opětovným vložením na stejné místo z nové kopie vytvoříte řadu.
- **Na jiné podlaží nebo do jiného modelu**: přesně stejné X, Y a natočení. BimCraft použije podlaží se stejným názvem; pokud žádné takové není, to nejbližší podle výšky. Stavový řádek uvede, které bylo použito.

## Duplikovat

{{ui:Více}}, {{ui:Duplikovat}} nebo {{key:Mod+D}} zkopíruje vybranou položku a hned zahájí její vkládání: jeden krok místo dvou.

## Do jiného modelu nebo jiné karty

Co zkopírujete, zůstává v tomto prohlížeči, takže můžete otevřít jiný model IFC nebo BimCraft v jiné kartě a vložit tam. Druhý model potřebuje samotnou položku knihovny: BimCraft ji má, pokud byla položka na této kartě umístěna, vyměněna nebo aktualizována. Položku umístěnou v dřívější relaci lze znovu vložit jen do jejího vlastního modelu; v jiném modelu ji umístěte z karty {{ui:Knihovna}}.

## Co byste měli vidět

- Kopii v modelu, vybranou, se stejnou položkou knihovny, licencí, daty zařízení, množstvím a poznámkou jako originál, a **další volné číslo položky**. Číslo změníte ve Vlastnostech pod `CadCraft_Placement`.
- "Umístěno: *položka* (položka *n*)" v seznamu změn. {{key:Mod+Z}} ji vrátí zpět; {{key:Mod+Y}} ji obnoví.

## Dobré vědět

- Kopie sdílejí typ originálu, takže všechny používají jednu sadu geometrie, jako když umístíte stejnou položku dvakrát.
- {{ui:Zpět}} a {{ui:Znovu}} pokrývají každou změnu: upravené hodnoty, umístění, vložení, výměny a aktualizace. Znovu vrátí umístění na stejné místo; nová změna vymaže to, co šlo znovu provést.
- Ve 2D pohledu výkresu není co vybrat, takže není co kopírovat. Pro úpravu výkresu použijte {{ui:Upravit v CadCraft}}, pokud se zobrazuje.

## Časté chyby

- **{{ui:Vložit}} hlásí, že prvky pocházejí z jiného modelu.** Naposledy jste zkopírovali prvek budovy, nebo více prvků; ty se vkládají jen do svého vlastního modelu. Vyberte jednu umístěnou položku knihovny a zkopírujte ji.
- **{{ui:Vložit}} hlásí, že kopie pochází z jiného modelu bez své položky knihovny.** Jednou umístěte položku z karty {{ui:Knihovna}} v této kartě, pak ji zkopírujte a vložte.
- **{{key:Mod+C}} místo toho kopíruje text stránky.** Na stránce byl vybrán text. Nejprve klikněte na model.

## Související

- [Klávesy a myš](topic:keyboard#edit)
- [Nastavení BimCraftu](topic:settings)
