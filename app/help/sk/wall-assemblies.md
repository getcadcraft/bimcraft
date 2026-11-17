---
title: Skladby stien a referenčné kóty
summary: Vytvárajte vlastné typy stien vrstvu po vrstve s výslovným jadrom, udržiavajte knižnicu materiálov projektu a kótujte na líce a osi, ktoré zostanú pripojené, keď sa stena zmení.
keywords: lod, úroveň rozpracovanosti, lod 200, lod 300, všeobecný, skladba steny, typ steny, vrstvy, jadro, líc jadra, os jadra, dutina, vzduchová medzera, fólia, difúzna fólia, knižnica materiálov, materiály, hrúbka, referenčná kóta, kóta, asociatívny, referenčná čiara, obklad, stojka, sadrokartón
from: 4ea8fbf5
---

## Čo urobíte

Vytvorte typ steny, ktorý zodpovedá stene, ktorú budete stavať: obklad, opláštenie, jadro zo stojok 5½ palca a sadrokartón, alebo murivo, vzduchovú medzeru a stenu s drevenou konštrukciou. Označte, ktoré vrstvy sú jadro, aby kóta alebo referenčná čiara mohla držať jadro, kým sa okolité povrchy menia. Potom kótujte steny na líce a osi, ktoré myslíte.

## Vytvorenie typu steny

1. Začnite budovu alebo otvorte model IFC, zapnite {{ui:Kresliť}} a vyberte nástroj {{ui:Stena}}.
2. Vyberte štartovací typ v {{ui:Typ steny}} a otvorte {{ui:Skladby stien…}}. Štartovací typ sa otvorí ako kópia; novému typu dajte názov.
3. Vrstvy idú od exteriéru hore v zozname po interiér dole. Pri každej vrstve vyberte materiál, zadajte jej hrúbku (jednotky projektu alebo výslovné hodnoty, napríklad `12.7 mm` alebo `1/2"`), zvoľte jej funkciu (povrchová úprava, podklad, konštrukcia, izolácia, fólia) a označte vrstvy **Jadro**. Jadro musí byť jedna súvislá skupina.
4. {{ui:Pridať vrstvu}} pridá vrstvu, {{ui:Pridať dutinu}} pridá vzduchovú medzeru s jej vetraním (neurčené, nevetrané, vetrané) a {{ui:Pridať fóliu}} pridá vrstvu bez menovitej hrúbky, napríklad difúznu fóliu. Šípky posúvajú vrstvu smerom von alebo dovnútra.
5. Náhľad vykreslí vrstvy v mierke s podčiarknutým jadrom, očíslované ako riadky, a okótuje každú vrstvu, jadro a celkovú hrúbku. {{ui:Uložiť typ}}.

Nový typ je v zozname nástroja Stena a vo **Vlastnostiach** vybranej steny. Uloženie upraveného typu zmení každú stenu, ktorá ho používa; {{ui:Duplikovať typ}} vytvorí samostatný typ a priradí ho len vybraným stenám. Každé uloženie je jeden krok späť spolu so stenami, ktoré presúva, dverami a oknami v nich a kótami, ktoré od nich závisia.

Dutina pridá šírku. Fólia žiadnu nepridá: zostáva v type, aby ju tabuľka mohla neskôr nájsť, a nepočíta sa do hrúbky steny ani jadra. Dutina ani fólia sa nikdy nepočítajú ako plný materiál. V súbore uloženom ako IFC2X3 je fólia zachovaná v zázname typu, ale vynechaná z jeho fyzických materiálových vrstiev.

## Označenie typu úrovňou rozpracovanosti (LOD)

Typ môže uviesť, ako je rozpracovaný. V editore **Úroveň rozpracovanosti (LOD)** ponúka pevnú škálu 100, 200, 300, 350, 400 a 500, alebo **Nenastavené**. Všeobecná stena („Stena 230 všeobecná“) je LOD 100 alebo 200; konkrétna skladba so skutočnými vrstvami („230 pálené tehly, omietnuté z oboch strán“) je LOD 300 alebo viac. Označenie nastavujete vy: BimCraft ho nevypočítava a štartovacie typy ho nemajú.

Označenie sa zobrazuje vedľa názvu typu v zozname typov nástroja Stena, vo **Vlastnostiach** steny a v zozname [Vymeniť typ](topic:wall-tools); hlásenie po výmene povie, či sa úroveň zvýšila alebo znížila. Ak ho chcete vidieť v tabuľke **Steny podľa typu** a v jej CSV, zaškrtnite **Zobraziť LOD každého typu steny v tabuľke stien** v Nastavenia › BimCraft › Múry: pridá sa posledný stĺpec LOD. Uloží sa do súboru IFC spolu s typom (v sade vlastností typu `CadCraft_WallType`, ako vlastnosť `LOD` a v zázname typu), takže tam zostane, keď súbor znova otvoríte. Označenie je zatiaľ len na typoch stien, nie na jednotlivých prvkoch ani na iných druhoch prvkov.

## Všeobecné steny pre fázu náčrtu

Zoznam typov nástroja Stena začína dvoma **všeobecnými** stenami: **Všeobecná stena 200 mm (vonkajšia)** a **Všeobecná stena 100 mm (vnútorná)**. Každá je jedna vrstva všeobecného materiálu označená LOD 200. Použite ich, keď viete, kde steny majú byť, ale ešte neviete, z čoho sú.

Stena, ktorej typ je označený **LOD 100** alebo **LOD 200**, sa vo všetkých pôdorysoch kreslí ako **jeden šrafovaný pás** na každej úrovni podrobnosti: bez vrstiev a bez čiar vrstiev. Platí to pre všeobecné steny aj pre každý váš typ, ktorý označíte LOD 100 alebo 200. Samotná stena je úplná: má svoju hrúbku, dvere a okná, miestnosti a množstvá.

Ak ju chcete rozpracovať, vymeňte jej typ (Upraviť › Múry › **Vymeniť typ**, alebo Typ steny vo Vlastnostiach). Stena sa už nikdy nekreslí nanovo: tá istá stena dostane nový typ a hlásenie povie, čo sa presunulo. Typ označený LOD 300 alebo vyšším sa kreslí s vrstvami ako predtým.

Ak chcete kresliť každú stenu podľa jej vrstiev bez ohľadu na označenie: Nastavenia › BimCraft › Múry, zrušte zaškrtnutie **Kresliť steny typu LOD 100 alebo LOD 200 ako jeden šrafovaný pás**.

Štartovacie dvere a okná sú tiež všeobecné druhy (rozmer a spôsob otvárania, nie výrobok). Ak je zapnuté **Zobraziť LOD každého typu steny v tabuľke stien**, tabuľky Dvere a Okná im zobrazujú LOD 200.

## Údaje na výkaz výmer pre typ

V editore typu steny **Údaje na výkaz výmer** obsahuje to, čo rozpočtár potrebuje vedieť o stene, raz pre typ: **jednotku**, z ktorej je stena postavená (tehla alebo blok: jej názov, dĺžka, výška a šírka), **maltu** (názov a hrúbka škáry) a **sadzbu** s kódom meny (tri písmená, napríklad USD, EUR alebo ZAR) a tým, za čo sa platí: za meter štvorcový alebo stopu štvorcovú čistej plochy steny, za meter alebo stopu dĺžky steny, alebo za každú stenu. Všetko je voliteľné.

Ukladá sa spolu s typom v súbore. Každá stena typu ho potom hlási: {{ui:Tabuľky}} › **Typy stien: údaje na výkaz výmer** vypíše jednotku, maltu, sadzbu a sadzbu násobenú zmeraným množstvom, a výkaz výmer odovzdaný do TakeoffCraft nesie údaje na položke tohto typu steny. Zmeňte ho na type a každá stena nasleduje.

Tri ďalšie polia slúžia na počítanie tehál alebo blokov a malty:

- **Odpad na jednotky, %** sa pripočíta k počtu jednotiek. Nechajte ho prázdne, ak chcete použiť hodnotu metódy merania projektu, alebo žiadnu, ak metóda žiadnu nemá. Zadajte 0, ak nechcete žiadny odpad bez ohľadu na to, čo metóda hovorí.
- **Dodatočná malta, %** je pre vybrania v tehle, ktoré berú maltu. Pripočíta sa k objemu malty. Nechajte prázdne, ak žiadne nie sú.
- **Vrstvy z tejto jednotky**: zaškrtnite každú vrstvu muriva, ktorá je z tejto tehly alebo bloku. Dutinová stena má dve. Ak nie je zaškrtnutá žiadna, počítajú sa vrstvy jadra.

Sadzbu možno zadať aj za jednotku na objednanie, za 1000 jednotiek na objednanie alebo za m³ malty. Ak jednotka má dĺžku a výšku, **Typy stien: údaje na výkaz výmer** zobrazí jednotky na m² (alebo ft²) jednej vrstvy, jednotky na objednanie a objem malty; vzorce sú v [Tehly, bloky a malta](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Typ má jednu jednotku: dve vrstvy rôznych jednotiek (vonkajšia vrstva z tehál a vnútorná z blokov) sa na jednom type zatiaľ nedajú spočítať.

## Podržanie jadra

V **Vlastnostiach** nastavte pre stenu **Referenčnú čiaru** na líc jadra alebo na os jadra. Keď neskôr pridáte povrchovú úpravu alebo ju zhrubnete, táto čiara zostane, kde je, a stena narastie okolo nej; steny, ktoré sa s ňou stretávajú v rohu, nasledujú, takže rovné rohy zostanú uzavreté.

## Materiály projektu

{{ui:Knižnica materiálov…}} vypisuje materiály projektu: názov, kategóriu, hrúbku, s ktorou vrstva začína, farbu zobrazenia, vzor šrafovania rezu a poznámky. Knižnica sa ukladá do IFC spolu s projektom. Keď pre vrstvu vyberiete materiál, vrstva dostane predvolenú hrúbku materiálu, ktorú môžete potom zmeniť; neskoršia úprava knižnice nikdy nepremení steny, ktoré ste už nakreslili. Materiál môžete vytvoriť aj zo zoznamu materiálov vrstvy tlačidlom {{ui:+ Nový materiál…}}.

## Referenčné kóty

{{ui:Anotovať}} › {{ui:Referenčná kóta}}: vyberte vodorovnú, zvislú alebo zarovnanú kótu a referenciu: vonkajší alebo vnútorný povrchový líc, vonkajší alebo vnútorný líc jadra, os steny alebo os jadra. Vyberte prvú stenu, referenciu zmeňte, ak chcete, vyberte druhú stenu a potom kliknite, kam má kótovacia čiara ísť. Dve referencie na jednej stene merajú jej celkovú hrúbku alebo hrúbku jadra. {{ui:Referenčné kóty…}} vypíše kóty pohľadu, vrátane tých, ktorým sa stratila stena, s možnosťami Vlastnosti, Znova previazať referencie a Zmazať.

### Okótovanie celého pôdorysu podľa pravidiel

{{ui:Anotovať}} › {{ui:Okótovať pôdorys…}} okótuje vonkajšok pôdorysu podlažia, ktorý si prezeráte: celkový rozmer v každom smere, rad kót pozdĺž každej vonkajšej hrany (konce stien, steny, ktoré sa stretajú s hranou, a dvere a okná v nej) s radmi umiestnenými mimo budovy. Zaškrtnite, čo chcete, prečítajte si počet a potom kliknite na {{ui:Pridať kóty}}. Sú to bežné referenčné kóty, takže nasledujú steny, keď sa steny presunú, a môžete ktorúkoľvek z nich vybrať, presunúť alebo zmazať; celá sada je jeden krok späť a opätovné spustenie nevytvorí žiadnu dvakrát.

Okótuje len vonkajšok: miestnosti vnútri budovy, zakrivené steny a steny, ktoré nie sú kolmé na pôdorys, zostávajú pre ručné nástroje, a osi nie sú steny, takže kóty medzi osami sa tu nevytvárajú. Váš pripojený asistent to vie urobiť rovnako pomocou `plan_dimension`.

Kóta je pripojená k stenám, nie k bodu na obrazovke: keď sa stena presunie alebo sa zmení jej typ, hodnota nasleduje. Ak sa stena zmaže, kóta hlási, že nie je vyriešená, a nezobrazuje žiadne číslo, kým ju znova nepreviažete alebo nevrátite späť. Pole dĺžky tiež prijíma súradnice pôdorysu, napríklad `10',12'`, pre kótovaciu čiaru na presnom mieste.

Kóty sú pre steny, ktoré BimCraft nakreslil, v pohľadoch na pôdorys. Ešte nie je hotové: kóty v rezoch a pohľadoch, kóty na dvere, okná a iné komponenty a vrstvy skladieb kreslené v pôdoryse a reze; pozri [Čo ešte nie je hotové](topic:not-built-yet).

## Pozri tiež

[Kreslenie stien](topic:draw-walls), [Zmena steny, dverí alebo okna](topic:change-a-wall-or-door), [Vlastnosti](topic:properties-panel).
