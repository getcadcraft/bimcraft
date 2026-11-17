---
title: Smazání, vyjmutí, kopírování a vložení stavebních prvků
summary: Vyberte stěny, dveře, nábytek nebo cokoli dalšího v modelu IFC; smažte je, vyjměte je, nebo je zkopírujte a vložte tam, kam kliknete, na stejné místo, nebo do jiného podlaží.
keywords: smazat, odebrat, vyjmout, kopírovat, vložit, duplikovat, přesunout, vybrat vše, vybrat všechny, stavební prvek, stěna, dveře, okno, schodiště, otvor, zpět
from: d9eec37f
---

## Co provedete

Změníte obsah modelu IFC: odstraníte prvky, které nechcete, zkopírujete stěnu nebo sadu nábytku na jiné místo, nebo přesunete prvky vyjmutím a vložením. Každou změnu lze vzít zpět jedním krokem a uložení zapíše nový soubor, takže původní soubor zůstane beze změny.

## Postup

1. Otevřete model IFC. Viz [Otevřete model IFC a prohlédněte si ho ve 3D](topic:open-ifc-model).
2. Vyberte, co chcete změnit: klikněte na prvek, podržte {{key:Mod}} nebo {{key:Shift}} a klikněte pro výběr dalších prvků, nebo stiskněte {{key:Mod+A}} ({{ui:Více}}, {{ui:Vybrat vše}}) pro výběr všech zobrazených prvků.
3. Poté:
   - **Smazání:** stiskněte {{key:Delete}}, nebo {{ui:Více}}, {{ui:Smazat}}.
   - **Kopírování:** stiskněte {{key:Mod+C}} nebo klikněte na {{ui:Kopírovat}}.
   - **Vyjmutí:** stiskněte {{key:Mod+X}}, nebo {{ui:Více}}, {{ui:Vyjmout}}. Prvky zmizí a můžete je vložit.
4. Pro vložení stiskněte {{key:Mod+V}} nebo klikněte na {{ui:Vložit}}. Průhledný kvádr o velikosti zkopírovaného prvku se pohybuje za kurzorem v podlaží zvoleném na liště umístění. Stiskněte {{key:R}} pro otočení o 90° a potom klikněte na místo, kam má prvek patřit. Každé kliknutí vloží další kopii; pro ukončení stiskněte {{key:Esc}}.
5. Nebo stiskněte {{key:Mod+Shift+V}} ({{ui:Více}}, {{ui:Vložit na stejné místo}}): po vyjmutí se prvky vrátí přesně tam, kde byly; po kopírování se kopie objeví hned vedle originálů.
6. Klikněte na {{ui:Uložit jako IFC}} a stáhněte upravený model.

## Co patří k prvku

- **Části:** schodiště zahrnuje všechna svá ramena, závěsná stěna všechny své panely a cokoli, co se skládá z částí, si je bere všechny s sebou.
- **Otvory:** stěna zahrnuje otvory, které jsou v ní vyříznuty. Smazání dveří nebo okna odstraní i otvor, který vyplňovaly, takže se stěna uzavře, jako tomu je v autorském programu. Smazání stěny nakreslené v BimCraft smaže také její dveře a okna a zbylé stěny se znovu spojí. Smazání stěny ze souboru vytvořeného jinde ponechá její dveře a okna na místě.
- **Data:** kopie má stejný typ, materiály, sady vlastností a množství jako originál, a nové GlobalId. Pozdější změna hodnoty na kopii původní prvek neovlivní.
- **Položky knihovny** si zachovají svá data z knihovny; kopie dostane další volné číslo položky a vyjmutá položka vložená zpět si ponechá své vlastní.

## Co uvidíte

- "Smazáno: …" nebo "Vloženo: …" v seznamu {{ui:Změny}}. {{key:Mod+Z}} vezme poslední změnu zpět; {{key:Mod+Y}} ji vrátí.
- Po smazání stavový řádek ukáže, kolik částí a otvorů bylo smazáno také.
- Vložené prvky jsou vybrané, takže můžete znovu vložit na stejné místo a vytvořit řadu, nebo je smazat.

## Dobré vědět

- Kopie používají stejnou geometrii jako originál (IFC umožňuje, aby prvky geometrii sdílely), takže soubor výrazně nenaroste.
- Stavební prvky se vkládají do modelu, ze kterého byly zkopírovány, ve stejné kartě. Chcete-li použít umístěné položky knihovny v jiném modelu, kopírujte je po jedné: viz [Kopírování, vložení a duplikování položek knihovny](topic:copy-paste).
- Podlaží, prostory, budovy a pozemek nelze smazat ani kopírovat. Vyberte místo toho prvky, které jsou v nich. Místnost nakreslená v BimCraft vznikne ze stěn, které ji obklopují: smazáním stěny spojíte dvě místnosti.
- Stěny, dveře a okna nakreslené vlastními nástroji BimCraftu pro stěny, dveře a okna zatím nelze kopírovat, vyjmout ani duplikovat; stavový řádek to uvede. Nakreslete je znovu. Smazání funguje.
- Kopírování také uloží názvy a vlastnosti zkopírovaných prvků jako text do schránky, abyste je mohli vložit do tabulky nebo e-mailu.

## Časté chyby

- **{{ui:Smazat}} je šedé.** Nic není vybráno, nebo jsou vybrána jen podlaží nebo prostory. Najeďte na něj kurzorem a přečtete si důvod.
- **Vložení hlásí, že prvky pocházejí z jiného modelu.** Od kopírování jste otevřeli jiný model. Znovu otevřete první model a zkopírujte je tam.
- **Vložená kopie je v jiném podlaží.** O tom, kam kopie půjde, rozhoduje {{ui:Podlaží}} na liště umístění; před kliknutím vyberte podlaží.

## Související

- [Skrytí, izolace a průhled prvků](topic:hide-and-isolate)
- [Klávesy a myš](topic:keyboard#edit)
