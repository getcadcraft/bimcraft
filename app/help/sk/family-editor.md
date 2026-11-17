---
title: Úprava rodiny
summary: Upravte parametre, vzorce a telesá rodiny, zobrazujte časti podľa parametra Áno / Nie, rezajte a spájajte telesá, pridajte im konektory pre potrubia a kanály a pozrite si výsledok nakreslený z IFC, ktoré sa uloží.
keywords: editor rodiny, úprava rodiny, parameter, parametre, vzorec, vzorce, viditeľnosť, áno nie, teleso, telesá, kváder, vytlačenie, rotačné teleso, ťahanie po dráhe, profil, oblúk, booleovské operácie, rez, spojenie, rozdiel, zjednotenie, úchyt, úchyty, pracovná rovina, náčrt, nová rodina, konektor, konektory, port, porty, konektor potrubia, konektor kanála, odtok, prívod vody
from: 1ab31c10
---

## Otvorenie editora

Otvorte rodinu (skupinu **Rodiny** v prehliadači projektu alebo {{ui:Build}} › {{ui:Families…}}) a kliknite na {{ui:Edit the family}}. Ak chcete začať od nuly, kliknite na {{ui:New family}}: zadajte jej názov, povedzte, čo je (dvere, okno, nábytok, zariadenie alebo niečo iné) a pri dverách alebo oknách, z ktorej štartovacej rodiny pochádza ich symbol v pôdoryse a orientácia krídla. Editor sa otvorí na rodine s niekoľkými parametrami a jedným telesom.

Úprava štartovacej rodiny ponechá vaše zmeny len v tomto modeli. Ostatné modely ponechajú štartovaciu rodinu tak, ako je.

V modeli sa nič nezmení, kým neklikne na {{ui:Save the family}}. Editor má vlastné späť a znova (tlačidlá so šípkami vedľa názvu, alebo {{key:Mod+Z}} a {{key:Mod+Y}}); uloženie je jeden krok v späť modelu.

## Parametre

Karta {{ui:Parameters}} vypisuje parametre rodiny: názov, druh a predvolenú hodnotu. Druhy: **Dĺžka** (milimetre), **Uhol** (stupne), **Číslo**, **Celé číslo**, **Áno / Nie**, **Pero** (1–16) a tri, ktoré obsahujú slová namiesto čísel: **Text**, **Materiál** (jeden z materiálov projektu) a **Výplň** (výplň v pôdoryse). Slová sa vo vzorcoch nepoužívajú; farbia teleso (jeho **Materiál**), vyplnia časť symbolu alebo sa vytlačia ako `{Name}` v texte symbolu. Políčko **Na prvok** urobí z parametra niečo, čo každý umiestnený prvok nastavuje sám za seba namiesto svojej veľkosti.

- **Vzorec** nechá parameter sledovať iné, napríklad `Width / 30` alebo `if(Width > 1200, 2, 1)`. Dĺžky vo vzorcoch sú v milimetroch, alebo napíšte jednotku: `3'`, `6in`, `50cm`.
- Premenovanie parametra ho premenuje v každom vzorci a poli, ktoré ho používajú. Parameter, ktorý sa ešte používa, sa nedá odstrániť.
- **Materiál** telesa prevezme farbu materiálu projektu (alebo parametra Materiál), **Zobrazené pri** ho skryje pri hrubších úrovniach podrobnosti a **Opakovať** vytvára kópie: počet (číslo alebo parameter celého čísla, 1 až 200) a krok medzi nimi v x, y a z. Opakované teleso je rad dosiek, tyčí alebo otvorov; pri reze sa kópie režú spoločne.
- Rodina dverí alebo okna dostane aj dva názvy zo svojej steny: `WallThickness` a `Face` (1 alebo −1, strana, na ktorú dvere otvárajú).

## Telesá

Karta {{ui:Solids}} vypisuje telesá. Pridajte kváder, vytlačenie, rotačné teleso alebo ťahanie po dráhe:

| Teleso | Čo nastavíte |
|---|---|
| Kváder | jeho dva rohy: x0 až x1, y0 až y1, z0 až z1 |
| Vytlačenie | profil na pracovnej rovine (pôdorys, nárys alebo bokorys), kde rovina je, a hĺbku |
| Rotačné teleso | profil, os na rovine a uhol až do 360° |
| Ťahanie po dráhe | dráhu z bodov a polomer (tyč alebo zábradlie) |

Každé číslo môže byť napísané číslo alebo výraz z parametrov. Každé teleso má farbu a **Zobrazené keď**: nechajte ho prázdne, ak ho chcete zobrazovať vždy, alebo uveďte parameter Áno / Nie (alebo porovnanie ako `Shelves >= 3`), aby sa zobrazilo len vtedy. Je to parameter viditeľnosti.

### Kreslenie profilu

Profil vytlačenia alebo rotačného telesa sa kreslí na pracovnej rovine pod náhľadom:

- Kliknutím na papier pridáte bod za vybraný bod.
- Potiahnutím bodu ho presuniete. Body sa prichytávajú k mriežke; držte {{key:Shift}}, aby ste ich umiestnili voľne.
- Kliknutím na malý štvorček na úseku pridáte bod. {{key:Shift}}+kliknutie urobí z úseku oblúk (opätovným kliknutím na druhú stranu, potom rovný).
- Dvojitým kliknutím na bod ho odstránite.

Dutné body nastavujú parametre: menia sa v tabuľke, nie potiahnutím.

## Booleovské operácie

Karta {{ui:Booleans}} vyreže druhé teleso z prvého alebo ich spojí. Výsledok booleovskej operácie sa dá znova vyrezať alebo spojiť. Teleso použité v booleovskej operácii sa kreslí len ako jej súčasť.

Ak je druhé teleso skryté svojím parametrom Áno / Nie, prvé sa ponechá tak, ako je; ak je skryté prvé, výsledok je skrytý.

## Symbol v pôdoryse

Karta {{ui:Plan symbol}} kreslí to, čo pôdorys zobrazuje pre túto rodinu namiesto rezu jej telies: čiary, obdĺžniky, kružnice, oblúky, mnohouholníky a text, v osiach rodiny. Každá časť má **pero** (1–16, výraz alebo parameter Pero), **výplň** (žiadna, plná, diagonálna, krížová, betón, izolácia, zemina alebo parameter Výplň), výraz **zobrazené podľa**, **rozsah rezu** v milimetroch nad svojou základňou (časť sa kreslí plnou hrúbkou, keď je rez pôdorysom v nej, tenko pod ním a prerušovane nad ním: skrinka nad rezom sa zobrazí prerušovane), úroveň podrobnosti a opakovanie. Text môže pomenovať parametre ako `{Name}`. **Pôdorys zobrazuje: Rez telies** ponechá pôdorys rezom telies, zatiaľ čo symbol zostane v rodine. Ostatné programy čítajú symbol ako pôdorysnú stopu rodiny (čiary a tvary; text zostáva v BimCraft).

## Rodiny vnútri

Karta {{ui:Families inside}} vloží do tejto rodiny inú rodinu: nohu v stole, úchyt na dverách. Vyberte rodinu, potom kam patrí (x, y, z), o koľko sa otáča (iba štvrtinové otočenia: 0, 90, 180, 270), kedy sa zobrazuje a hodnoty, ktoré dostane, jednu na riadok ako `Height = Height - 40`. Uloženie vnútornej rodiny znova nakreslí túto; rodinu, ktorú drží iná, nemožno zmazať; rodina nemôže obsahovať sama seba ani cez inú a vnorovanie sa zastaví na štyroch úrovniach.

## Úchyty

Úchyt je bod alebo hrana, ktorú potiahnete na zmenu parametra. Na karte {{ui:Hotspots}} pridajte jeden, vyberte os, pozdĺž ktorej ťahá, a číselný parameter, ktorý mení, a zapíšte jeho polohu rovnakými výrazmi ako telesá. V náhľade vyberte **Úchyty** pod rukoväťami, aby ste ich mohli ťahať. Na umiestnenom prvku v pôdoryse (vyberte ho pomocou {{ui:Select}}) sa úchyty x a y zobrazujú ako úchopy: potiahnite jeden a prvok nadobudne veľkosť, ktorá tam úchyt umiestni, cez všetky vzorce medzi nimi; jedno späť ho vráti. Úchyt nemôže meniť riadený parameter, Áno / Nie ani slovo.

V 3D zobrazení sa rovnaké úchyty zobrazujú ako úchopy na vybranom prvku a zobrazujú sa tam aj tie hore a dolu (os z), ktoré pôdorys nedokáže nakresliť. Vyberte prvok, potiahnite úchop pozdĺž jeho osi a pustite: prvok nadobudne veľkosť, ktorá tam úchyt umiestni, ako jeden krok späť. Úchopy sa skryjú, keď je zapnutý rezný box, pretože používa tie isté úchopy.

## Konektory

Rodiny umiestnené na podlahe (nábytok, zariadenia a ďalšie) majú kartu {{ui:Connectors}}: body, kde sa potrubie alebo kanál pripája k prvku, ako pri batérii a odtoku umývadla. Kliknite na {{ui:Add a connector}} a nastavte:

- **Druh**: potrubie alebo kanál a jeho **Systém** (studená voda, splaškový odtok, prívodný vzduch…).
- **x**, **y** a **z**: kde sa nachádza, v osiach rodiny. Ako čísla telesa, každé môže byť číslo alebo vzorec z parametrov, takže konektor sa pohybuje s veľkosťou.
- **Smer výstupu**: smer, ktorým potrubie alebo kanál z neho vychádza, pozdĺž jednej z osí rodiny (odtok pod umývadlom ide **Dole**).
- **Veľkosť (mm)**: menovitá veľkosť potrubia (DN) alebo priemer okrúhleho kanála.
- **Prietok**: **In** pre konektor, ktorý sa napája (batéria), **Out** pre konektor, ktorý odvádza.

Náhľad kreslí každý konektor ako krúžok so šípkou smeru výstupu. Dvere a okná nemajú konektory.

Pre vodoinštalačné zariadenie vyberte, ktoré je, v **Vodoinštalačné zariadenie** (záchod, umývadlo, kuchynský drez, sprcha, práčový drez). Štartovacie zariadenia to už uvádzajú.

Každý prvok umiestnený z rodiny dostane svoje konektory ako porty v súbore IFC a vytvoria sa znova, keď sa prvok zmení veľkosťou alebo keď sa rodina uloží. Programy, ktoré čítajú systémy IFC, vidia, kam každé potrubie alebo kanál patrí.

## Náhľad a jeho rukoväte

Náhľad je rodina zapísaná ako IFC rovnakým kódom, ktorý ju ukladá do modelu, a znova nakreslená. Čo vidíte, to dostanú ostatné programy. Pod ním **Zobrazená veľkosť** nastavuje hodnoty parametrov, ktoré náhľad používa.

**Rukoväte** sú bodky v náhľade: **Veľkosť** zobrazí rukoväť pre Šírku, Hĺbku a Výšku; **Vybrané teleso** zobrazí jednu na každej stene vybraného telesa. Potiahnite rukoväť:

- na stene nastavenej parametrom sa zmení zobrazená veľkosť (vzorce rodiny sa zachovajú);
- na stene nastavenej napísaným číslom sa zmení číslo.

## Ukladanie

{{ui:Save the family}} skontroluje rodinu, potom znova nakreslí každú jej veľkosť a znova vytvorí každý jej prvok, ako jeden krok, ktorý môžete vrátiť späť. Ak sa veľkosť so zmenou nedá nakresliť (napríklad teleso by pri tejto veľkosti nemalo šírku), nič sa neuloží a editor uvedie, ktorá veľkosť.

Ak niekto iný uložil tú istú rodinu, kým bol váš editor otvorený (v relácii Live TeamWork alebo v inom okne), {{ui:Save the family}} odmietne uloženie a uvedie to, namiesto toho, aby nahradil jeho zmenu vašou. Zatvorte editor, znova otvorte rodinu, aby ste videli jeho zmenu, a vykonajte svoju znova.

:::note
Geometria sa ukladá ako vlastné telesá IFC: vytlačenia, rotačné telesá, vymetané disky a výsledky booleovských operácií. Nič sa neprevádza na zoznam trojuholníkov, takže súbory zostávajú malé a ostatné programy môžu čítať tvary ako tvary. Profily s oblúkmi sa v IFC4 ukladajú s oblúkmi; IFC2X3 nemá oblúkové segmenty v profile, takže tam sa oblúky ukladajú ako krátke rovné úseky.
:::

Pozri aj [Rodiny a ich veľkosti](topic:families).
