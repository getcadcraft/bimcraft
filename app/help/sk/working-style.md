---
title: Pracovný štýl, duplikované pohľady, perá na papieri, Hlásiť ako a šablóny
summary: Vyberte, ako sa BimCraft správa podľa vášho spôsobu práce, duplikujte ľubovoľný pohľad ako vlastnú kópiu alebo prepojený, ponechajte prepísania pier v súbore a tlačte tak, ako je zobrazené, alebo cez tabuľku pier, nahláste prvok ako inú triedu IFC a začínajte projekty z vlastných šablón.
keywords: pracovný štýl, duplikovať pohľad, duplikovať, kopírovať pohľad, závislý pohľad, prepojený pohľad, vlastná kópia, kópia pohľadu, prepísanie pier, perá, hrúbky čiar, tlačiť tak, ako je zobrazené, tabuľka pier, štýl vykreslenia, ctb, monochromatický, stupne šedej, hlásiť ako, trieda ifc, preklasifikovať, preddefinovaný typ, generický model, doska ako cesta, stena ako panel, strecha ako rampa, šablóna projektu, šablóna, nový zo šablóny, uložiť ako šablónu, firemný štandard
from: 231d98b0
---

## Čo urobíte

Nastavíte BimCraft podľa svojho spôsobu práce, duplikujete pohľady, budete ich tlačiť tak, ako očakávate, počítať prvky ako to, čím naozaj sú, a každý projekt začnete zo šablóny vašej kancelárie.

## Vyberte pracovný štýl

1. Otvorte {{ui:Nastavenia}} a kartu {{ui:BimCraft}}. Nájdite {{ui:Pracovný štýl}}.
2. Vyberte jedno:
   - {{ui:Každý pohľad vlastný}} (prvá voľba): duplikovaný pohľad skopíruje svoje anotácie a zostanú jeho vlastné; listy sa tlačia tak, ako ich zobrazuje obrazovka.
   - {{ui:Spoločné anotácie a tabuľky pier}}: duplikované pohľady zdieľajú anotácie; tlač ide cez tabuľku pier.
3. Pod voľbou sú štyri veci, ktoré nastavuje. Zmeňte ktorúkoľvek samostatne; štýl potom ukazuje {{ui:Vlastný}}.

Pracovný štýl sa uchováva v tomto prehliadači, podobne ako rozloženie pracovného priestoru. Šablóna ho prenesie do nových modelov.

## Duplikovanie pohľadu

1. V {{ui:Prehliadač projektu}} má každý pôdorys podlažia, pôdorys stropu, výnos, pohľad a rez tlačidlo {{ui:Duplikovať}} (dva listy).
2. Pomenujte kópiu a vyberte, ako sa bude správať:
   - {{ui:Vlastná kópia}}: jej kreslenie, kóty, orez, skryté prvky a perá sa skopírujú a zostanú jej vlastné. Úprava ktoréhokoľvek pohľadu nikdy nezmení druhý, takže pohľad na vydanom liste zostane taký, aký bol vydaný.
   - {{ui:Prepojené}}: zobrazuje ten istý pohľad s jednou sadou anotácií a nastavení.
3. Kópia sa uvedie pod {{ui:Duplikované pohľady}}. Kliknutím ju otvoríte; lišta nad pôdorysom hovorí, že ide o kópiu, s tlačidlom {{ui:Hore}} späť na jej pohľad.
4. Jej tlačidlo s posuvníkom otvorí nastavenia: názov, {{ui:Rozsah pohľadu}} (vlastná kópia má svoj vlastný), {{ui:Vytvoriť vlastnú kópiu}} pre prepojený pohľad a {{ui:Zmazať}}.

Kópie pohľadov a rezov idú na vaše vlastné listy ako pohľady, z ktorých pochádzajú. Duplikovanie sa dá vrátiť späť jedným krokom a kópie sa ukladajú do IFC vedľa výnosov.

## Perá uložené s pohľadom a tlačené tak, ako sú zobrazené

1. Zapnite {{ui:Kresliť}} a vyberte {{ui:Perá}}.
2. {{ui:Pre}} teraz uvádza každú kategóriu: steny, dvere a okná, dosky, strechy, stĺpy, schodiská, nábytok a ostatné, a kreslenie a kóty.
3. {{ui:Použiť}} ponechá pero v IFC so zobrazeným pohľadom: pôdorys, pôdorys stropu, výnos alebo duplikovaný pohľad. Perá vytvorené pred verziou 0.9 boli uložené v prehliadači; {{ui:Ponechať tieto v súbore}} ich presunie.
4. Listy a PDF kreslia každé pero tak, ako ho zobrazuje obrazovka.

Ak chcete tlačiť cez tabuľku pier, nastavte v riadku Perá položku {{ui:Tlačiť}} na {{ui:Cez tabuľku pier}}, potom vyberte tabuľku (farebná, monochromatická, stupne šedej) alebo {{ui:Upraviť tabuľku pier…}}: každá farba dostane farbu, hrúbku a rastrovanie, s ktorými sa tlačí. Tabuľka je súbor štýlu vykreslenia CadCraft, takže {{ui:Importovať…}} prijme tabuľku vytvorenú v CadCraft a {{ui:Exportovať}} ju vráti späť. Model si ponecháva svoju voľbu; ak žiadnu nemá, rozhoduje pracovný štýl.

## Nahláste prvok ako inú triedu

Doska nakreslená ako cesta, stena použitá ako panel, strecha tvarovaná ako rampa: ponechajte nástroj, ktorým ste ho nakreslili, a nahláste ho ako to, čím naozaj je.

1. Vyberte prvok a otvorte {{ui:Vlastnosti}}. Otvorte {{ui:Hlásiť ako}}.
2. Napíšte do vyhľadávacieho poľa, aby ste našli triedu, ktorá sedí tvaru, vyberte ju a jej preddefinovaný typ. Pre vlastný typ vyberte USERDEFINED a dajte mu názov.
3. {{ui:Použiť}} (jeden krok späť). {{ui:Vymazať}} ho nahlási znova tak, ako bol nakreslený.

Prvok stále upravujete nástrojom, ktorým bol nakreslený. Uložený IFC ho zapíše ako nahlásenú triedu, takže ho iné programy, výkaz {{ui:Množstvá}}, Hľadať, Farba podľa, kontroly modelu a {{ui:Problémy}} počítajú ako túto triedu. Tabuľky vynechajú stenu nahlásenú ako panel zo zoznamu stien a {{ui:Prvky podľa hlásenej triedy}} vypíše každú takú položku. Funguje to v súboroch IFC4 a IFC2X3; zoznam ponúka iba triedy, ktoré verzia IFC súboru má. Dvere, okná, schodiská, miestnosti a úrovne si zachovávajú svoju vlastnú triedu.

## Uložte projekt ako šablónu a začnite z nej

1. Keď máte projekt otvorený, kliknite na {{ui:Uložiť ako šablónu}} vedľa {{ui:Uložiť}}.
2. Pomenujte ju. Zaškrtnite Aj stiahnuť súbor šablóny na zdieľanie ako súbor IFC a {{ui:Nové modely začínať z nej}}, aby bola vaša predvolená.
3. Šablóna uchováva podlažia, šablóny pohľadov a nastavenia pohľadov, duplikované pohľady a výnosy, kreslenie, perá a tabuľku pier, značky, rodiny a typy, listy, formáty listov, popisové polia a pracovný štýl. Steny, podlahy, dvere a každý ďalší prvok modelu sa vynechajú.
4. Kliknite na {{ui:Nová budova}} a vyberte ju pod {{ui:Začať z}}, alebo vyberte {{ui:Súbor šablóny…}} pre šablónu, ktorú ste dostali. Nový projekt dostane vlastný názov a vlastnú identitu projektu; všetko ostatné je také, ako je v šablóne.

:::note
Šablóny sa uchovávajú v tomto prehliadači. Zdieľanie tímových šablón cez CadCraft Studio ešte nie je hotové: namiesto toho pošlite súbor šablóny.
:::
