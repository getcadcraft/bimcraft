---
title: Zobrazenie výkresu DWG alebo DXF
summary: Otvorte DWG alebo DXF, pohybujte sa v priestore modelu a na listoch, čítajte súradnice a zistite, čo ešte nie je nakreslené.
keywords: dynamické bloky, stavy viditeľnosti, dwg, dxf, cad, výkres, 2d, zobrazenie, prehliadač, posun, zväčšenie, priestor modelu, priestor papiera, rozloženie, súradnice, otvoriť dwg
from: 4db3122a
---

## Čo urobíte

Otvoríte výkres CAD, uvidíte ho v 3D alebo 2D, pohybujete sa v ňom, prepínate medzi priestorom modelu a jeho listami a čítate súradnice. BimCraft zobrazuje výkresy DWG a DXF; neupravuje ich ani neukladá. Ak ho chcete zmeniť, kliknite na {{ui:Upraviť v CadCraft}} a výkres sa otvorí v kresliacej aplikácii CadCraft na novej karte.

## Kroky

1. Kliknite na {{ui:Vybrať súbor}}, alebo pretiahnite výkres na stránku.
2. Vyberte súbor `.dwg` alebo `.dxf`.
3. Počkajte, kým stavový riadok ukazuje "Čítanie výkresu…". Veľké výkresy potrebujú pár sekúnd. Potom ukáže, ako dlho čítanie trvalo, "vykresľovanie…", kým sa kreslí prvý obraz, a ako dlho to trvalo.
4. Výkres sa otvorí v 3D, najrýchlejšom spôsobe zobrazenia veľkého výkresu (pozri [Zobrazenie výkresu DWG alebo DXF v 3D](topic:dwg-in-3d)). Kliknite na {{ui:Model}} pre plochý 2D pohľad. Ak chcete výkresy vždy otvárať v 2D, nastavte {{ui:Nastavenia}} › {{ui:BimCraft}} › **Výkresy sa otvárajú v** na {{ui:Model (2D)}}. Výkres bez ničoho v priestore modelu alebo prehliadač, ktorý 3D nezobrazí, sa otvorí v 2D.
5. Pozrite sa na karty nad výkresom: najprv {{ui:Model}}, potom jedna karta na každý list, v poradí výkresu.
6. Kliknite na kartu listu, aby ste videli ten list: papier s modelom zobrazeným cez jeho výrezy.
7. Kliknite na {{ui:Model}}, aby ste sa vrátili do priestoru modelu.
8. Presuňte ukazovateľ nad výkres a čítajte súradnice X a Y v rohu.

## Čo by ste mali vidieť

- Výkres prispôsobený oknu. Farby sledujú výkres; biele čiary (farba 7) sa kreslia farbou atramentu motívu a bledé farby sa na svetlom motíve stmavia, aby zostali čitateľné.
- Panel {{ui:Výkres}} vľavo: súbor, veľkosť, formát (napríklad "AutoCAD 2018 (AC1032)"), jednotky, počty entít a hladín, počet listov a prepojené výkresy a zariadenia, ak nejaké sú.
- Zoznam {{ui:Hladiny}} vľavo.
- Vpravo: ako sa pohybovať, prepojené výkresy a obrázky a **Ešte nie je nakreslené**.

## Pohyb

:::mouse
| Na | Urobte toto |
|---|---|
| Posun | Potiahnite ľubovoľným tlačidlom myši |
| Zväčšenie | Posuňte koliesko; bod pod ukazovateľom ostane na mieste |
| Prispôsobiť | Dvakrát kliknite, stlačte {{key:F}}, alebo kliknite na {{ui:Prispôsobiť}} |
:::

:::mac mouse
Na touchpade posúvanie dvoma prstami **zväčšuje**, neposúva. Stiahnutie prstov (pinch) tiež zväčšuje. Na posun kliknite a potiahnite.
:::

:::touch
Potiahnutím jedným prstom posúvate. Zväčšenie stiahnutím prstov pre výkresy zatiaľ nie je hotové: klepnite na {{ui:Prispôsobiť}}, aby ste videli celý list, a na zväčšenie použite myš alebo touchpad.
:::

## Dynamické bloky

Dynamický blok sa kreslí tak, ako ho výkres zobrazuje: každý umiestnený blok v stave viditeľnosti, v akom bol výkres uložený ("Pôdorys" alebo "Pohľad spredu", "Jedna miska" alebo "Dve misky"). Vpravo **Dynamické bloky** vypíše každý umiestnený v priestore modelu: koľko ich je umiestnených, stavy, ktoré zobrazujú, a každý stav, ktorý blok má. V {{ui:3D}} kliknite na umiestnený blok, aby ste vo Vlastnostiach videli **Dynamický blok**, **Zobrazený stav** a **Ostatné stavy**. BimCraft stavy neprepína.

## Ešte nie je nakreslené

Niektoré druhy objektov sa v tomto zostavení nekreslia. Počítajú sa pod **Ešte nie je nakreslené** vpravo ("Tieto časti výkresu sa zatiaľ preskakujú, nie sú odhadnuté."), aby ste vedeli, že niečo chýba. Čiary, lomené čiary, oblúky, kružnice, elipsy, spliny, šráfovania a plné výplne, text a viacriadkový text, bloky s atribútmi, kóty, vynášacie čiary a viacnásobné vynášacie čiary, tabuľky, obrázky a výrezy sa kreslia. Plochy 3D, polyface siete a polygónové siete sa kreslia ako ich hrany pohľadom zhora; prepnite na {{ui:3D}}, aby ste ich videli ako plochy.

Binárny DXF sa neotvorí: BimCraft to oznámi. Uložte ho znova ako ASCII DXF alebo ako DWG z programu, ktorý ho vytvoril.

## Časté chyby

- **Výkres vyzerá prázdny.** Niektoré hladiny môžu byť vypnuté alebo zmrazené priamo vo výkrese; v {{ui:Hladiny}} sú spočiatku nezaškrtnuté. Kliknite na {{ui:Všetky zapnúť}}. Ak stav hovorí "*name* je prázdny výkres: neobsahuje čiary, text ani bloky.", v ňom nie je nič.
- **List zobrazuje prázdny rámček.** List sa môže spoliehať na prepojené výkresy. Pozri [Nájdenie prepojených výkresov a obrázkov](topic:dwg-linked-files).
- **Text vyzerá trochu inak.** BimCraft kreslí text úzkym bezpätkovým písmom, nie vlastnými písmami výkresu, takže text môže byť o niečo širší alebo užší ako v programe, ktorý ho vytvoril.
- **"*name* sa nepodarilo načítať. Môže byť poškodený alebo uložený vo formáte, ktorý čítač ešte nespracúva."** Hranatá zátvorka na konci hlásenia uvádza kód formátu súboru. Uložte ho z programu, ktorý ho vytvoril, ako staršie DWG alebo ako DXF, a skúste to znova.
- **Očakávate meranie, kreslenie alebo úpravy?** BimCraft výkresy iba zobrazuje. Kliknite na {{ui:Upraviť v CadCraft}}, aby sa ten istý súbor otvoril v kresliacej aplikácii CadCraft, ktorá ho upraví a uloží kópiu ako DWG alebo DXF. Váš pôvodný súbor sa nezmení a prepojené výkresy zostanú v BimCraft. Tlačidlo sa zobrazí iba tam, kde je CadCraft pre vás otvorený.

## Ďalej

- [Zobrazenie výkresu DWG alebo DXF v 3D](topic:dwg-in-3d)
- [Práca s hladinami a listami výkresu](topic:dwg-layers-sheets)
- [Kontrola výkresu v zobrazení pre tlač](topic:print-view)
