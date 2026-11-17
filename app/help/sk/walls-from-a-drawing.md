---
title: Steny z obkresleného výkresu
summary: Premeňte pôdorys DWG alebo DXF na steny, dvere a okná na podlaží a ponechajte výkres pod pôdorysom ako referenciu.
keywords: dwg, dxf, obkres, import pôdorysu, previesť, CAD na BIM, 2D na 3D, steny z čiar, vrstvy, bloky, dvere z blokov, podklad, referenčný výkres, pozadie, xref, kresliaca aplikácia
from: 3bf213f1
---

## Čo urobíte

Použite pôdorys, ktorý ste (alebo niekto iný) nakreslili v kresliacej aplikácii, ako začiatok modelu: jeho čiary stien sa stanú stenami, jeho bloky dverí a okien sa stanú dverami a oknami.

## Postup

1. Zapnite {{ui:Kresliť}} a vyberte úroveň, ktorú výkres zobrazuje, v zozname úrovní pôdorysu.
2. Zvoľte {{ui:Zostava}} › {{ui:Z výkresu…}}, potom {{ui:Vybrať výkres…}} a vyberte DWG alebo DXF.
3. V dialógu:
   - **Jednotky výkresu** sa berú z výkresu; ak sú zlé, vyberte iné (pôdorys nakreslený v stopách, prečítaný ako palce, je dvanásťkrát menší).
   - **Vrstvy so stenami**: zaškrtnite vrstvy, na ktorých sú čiary stien. Vrstvy, ktorých názov obsahuje „wall“, sú zaškrtnuté za vás.
   - **Čiary sú**: **obe strany každej steny** (obvyklý spôsob kreslenia pôdorysov: každý pár rovnobežných čiar najviac 600 mm od seba sa stane jednou stenou hrubou ako medzera), **osi stien**, alebo **jedna strana** so stenou naľavo alebo napravo. Pri osiach alebo jednej strane nastaví hrúbku typ steny.
   - **Typ steny** a **Výška steny**, ako pri nástroji {{ui:Stena}}.
   - **Bloky**: vyberte typ dverí alebo okna pre každý blok, ktorý je dverami alebo oknom, alebo ho vynechajte. Bloky, ktorých názov obsahuje „door“ alebo „window“, sa vyberú za vás. Každý sa umiestni do steny, na ktorej sedí, široký ako blok pozdĺž steny; dvere sa otvárajú na stranu, na ktorú je nakreslený ich smer otvárania.
   - **Kam to ide**: do vlastných súradníc výkresu, alebo s jeho ľavým dolným rohom na počiatku pôdorysu.
   - **Ponechať výkres pod pôdorysom tejto úrovne**: nechajte zaškrtnuté, aby ste výkres videli ako tenké čiary pod tým, čo vytvoríte.
4. Riadok pod voľbami hovorí, koľko stien, dverí a okien vytvorí. Kliknite na {{ui:Vytvoriť}}.

## Čo by ste mali vidieť

- Steny, dvere a okná na úrovni, spojené tam, kde sa stretajú, s miestnosťami, ktoré uzatvárajú; všetko je jeden krok, takže {{key:Mod+Z}} to vráti späť.
- Výkres ako tenké čiary pod pôdorysom. {{ui:Zostava}} › {{ui:Z výkresu…}} vypíše výkresy uložené na úrovni, každý s {{ui:Odstrániť}}; odstránenie jedného nechá steny.
- V súbore IFC je ponechaný výkres anotáciou na úrovni (jej čiary), takže ho zobrazia aj iné BIM programy.

:::note
PDF alebo sken tiež funguje: pozri [Steny zo sady plánov](topic:walls-from-plans). Oblúky sa vynechajú (BimCraft kreslí rovné steny), rovnako ako čiary vnútri blokov. Čiary bez páru pri „obe strany“ sa v dialógu spočítajú a vynechajú: nakreslite tieto steny nástrojom {{ui:Stena}}, alebo ich upravte pomocou {{ui:Upraviť}} › {{ui:Orezať / predĺžiť}} (pozri [Orezanie, predĺženie a spojenie stien](topic:trim-extend-walls)).
:::

:::tip
Obkreslené nad skenom v kresliacej aplikácii? Otvorte tu aj sken a skontrolujte steny oproti nemu: pozri [Model zo skenu](topic:model-from-a-scan).
:::
