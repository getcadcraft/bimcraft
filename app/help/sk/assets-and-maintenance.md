---
title: Údaje o podkladoch a záznam údržby v modeli
summary: Používajte odovzdaný model IFC na prevádzku budovy: výrobca, model, sériové číslo, záruka a životnosť zariadení a armatúr a záznam o vykonanej údržbe, všetko zapísané do IFC.
keywords: odovzdanie, kolaudačné rozhodnutie, kolaudácia, skutočné vyhotovenie, odovzdávací balík, podklady, register podkladov, správa budovy, fm, prevádzka, údržba, servis, záruka, sériové číslo, čiarový kód, výrobca, model, životnosť, odovzdanie, cobie, digitálny dvojček, po termíne, termín, pracovný príkaz
from: b84ac492
---

Karta {{ui:Assets}} v pravom paneli mení otvorený model IFC na záznam zariadení budovy. Všetko sa zapisuje priamo do IFC, do sád vlastností a úloh IFC, takže ho prečíta aj ďalší program, ktorý súbor otvorí. Nič sa nenahráva a nie je potrebný žiadny server: uložte IFC, aby sa zachovalo.

## Čo je zaradené

- Zariadenia a armatúry: nábytok, sanitárne armatúry, svietidlá, spotrebiče, vzduchotechnické koncovky, ventily, čerpadlá, ventilátory, kotly, nádrže, výstupy, rozvádzače, výťahy a ďalšie takéto prvky, a položky knižnice s údajmi o zariadení.
- Každý ďalší prvok, ktorý **sledujete**: vyberte ho v modeli (dvere, stenu, čerpadlo nakreslené ako obyčajný objekt) a kliknite na {{ui:Track picked}}.
- Čokoľvek, čo už má údaje o podklade alebo úlohu údržby, zapísanú tu alebo iným programom.

Čo je po termíne, je na prvom mieste, potom to, čo je splatné do 30 dní. Filtrujte podľa názvu, značky, výrobcu, modelu alebo sériového čísla, podľa úrovne, alebo zaškrtnite {{ui:Only overdue or due within 30 days}}.

## Údaje o podklade

Kliknite na podklad v zozname (alebo ho vyberte v modeli), aby sa otvorili jeho údaje: výrobca, model, referencia modelu, sériové číslo, čiarový kód, deň inštalácie, číslo záruky a jej začiatok a koniec a životnosť v rokoch. {{ui:Save the data}} ich zapíše v jednom kroku ({{key:Mod+Z}} to vráti späť). Ak chcete hodnotu odstrániť, nechajte políčko prázdne.

## Dokumenty

Pod údajmi {{ui:Documents}} sú návody, záruky, fotografie, certifikáty a výkresy prepojené s podkladom. Vyberte druh, zadajte názov (alebo ho nechajte prázdny: použije sa názov súboru) a uveďte, kde sa nachádza:

- **webová adresa** (`https://…`): dostane odkaz Otvoriť odkaz, ktorý sa otvorí na novej karte;
- alebo **názov súboru alebo cesta** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, sieťové zdieľanie): súbory ponechajte vedľa IFC, v tom istom priečinku alebo v jeho podpriečinku, aby názvy fungovali aj po odovzdaní priečinka. BimCraft zobrazí názov; súbor otvorte z priečinka.

Súbory samotné sa nikdy nenahrávajú ani nekopírujú do IFC: zapíše sa iba odkaz. Webová adresa s heslom v nej a každý odkaz, ktorý nie je webová adresa ani súbor (napríklad `javascript:`), sa odmietne. {{ui:Remove}} odstráni dokument z podkladu (jeden krok; {{key:Mod+Z}} to vráti späť).

Dokumenty, ktoré iný program pripojil k prvku, sa tiež zobrazia. Dokumenty na **type** prvku sa zobrazia pri každom prvku tohto typu a to sa uvedie; meňte ich tam, kde bol typ vytvorený.

V IFC je každý dokument referencia IFC na dokument viazaná na prvok, s jeho druhom zapísaným pri tomto spojení, v IFC4 aj IFC2X3.

## Záznam údržby

Pod dokumentmi {{ui:Record work done}}: deň, kedy sa práca vykonala, práca, kto ju vykonal, kedy je ďalší termín a poznámky. Každý záznam je jeden krok; {{ui:Edit}} a {{ui:Delete}} ho neskôr zmenia. Ďalší termín z najnovšieho záznamu rozhoduje, či je podklad po termíne alebo čoskoro splatný.

## Ako sa to uchováva v IFC

- Výrobca a model v `Pset_ManufacturerTypeInformation`, sériové číslo, čiarový kód a deň inštalácie v `Pset_ManufacturerOccurrence`, záruka v `Pset_Warranty`, životnosť v `Pset_ServiceLife`, na samotnom prvku. Ak typ prvku už nesie výrobcu alebo model, zobrazí sa, kým nezadáte vlastný.
- Každý záznam údržby je IFC **úloha** druhu údržba, viazaná na prvok, s jeho dátumami (v IFC4 aj ako vlastné časy úlohy) a sadou `CadCraft_Maintenance` s dňom, kto ju vykonal, a dňom ďalšieho termínu.
- Hodnoty, ktoré zdieľa iný prvok, sa najprv skopírujú: zmena jedného podkladu nikdy nezmení jeho susedov.
- V starších súboroch IFC2X3 sa dátumy zapisujú ako text (RRRR-MM-DD); táto verzia chce na to samostatný záznam dátumu, ktorý BimCraft nezapisuje.

## Údaje zo senzorov

Otvorte {{ui:Sensor values}} a {{ui:Open readings (CSV)…}}, aby ste načítali merania exportované zo systému riadenia budovy, dátového zapisovača alebo tabuľky:

- **Prvý stĺpec je čas**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` alebo Unix sekundy. Čas bez pásma sa číta v časovom pásme vášho počítača. Dátumy s dňom na prvom mieste, ako `23/10/2026`, sa nečítajú (sú nejednoznačné); exportujte dátumy v ISO.
- **Každý ďalší stĺpec je jeden senzor**, označený **značkou**, **názvom** alebo **GlobalId** jeho podkladu. Hlavička, ktorá nezodpovedá žiadnemu podkladu alebo zodpovedá viacerým, sa uvedie a vynechá. Oddeľovače sú čiarky, bodkočiarky alebo tabulátory; pri bodkočiarkach alebo tabulátoroch sa číta aj desatinná čiarka (`21,5`).
- Časy alebo hodnoty, ktoré sa nedajú prečítať (slovo, jednotka napísaná v bunke), sa spočítajú a vynechajú, nikdy sa neodhadujú.

Posledné meranie sa zobrazí v stĺpci {{ui:Reading}} zoznamu a v bloku {{ui:Sensor}} podkladu, s **grafom** všetkých meraní (na telefóne sa grafy zobrazia až po klepnutí na {{ui:Show the chart}}). Nastavte na podklade **dolný a horný limit** a jednotku a kliknite na {{ui:Save the limits}}: merania mimo nich podklad označia. Zaškrtnite {{ui:Show on the model}}, aby sa každý podklad vyfarbil podľa svojho merania: modrá pod dolným limitom, zelená v rámci limitov, červená nad horným limitom a pri podkladoch bez limitov jedna modrá škála od najnižšieho po najvyššie meranie. Hodnota sa zobrazí ako popisok (až 60 popiskov, označené najprv).

**Merania zostávajú v tejto karte prehliadača**: nie sú uložené v IFC a nikam sa neodosielajú; pri ďalšom použití otvorte CSV znova. **Limity sa ukladajú do IFC** (sada `CadCraft_Sensor` na prvku: Low, High, Unit), takže ďalší človek, ktorý súbor otvorí, uvidí tie isté označenia.

## Živé merania

{{ui:Live feed}} číta hodnoty, keď vznikajú, **priamo z tohto prehliadača do vášho vlastného systému**. Nič neprechádza naším serverom a nič sa neukladá nikde okrem karty prehliadača. Pri otvorení súboru sa nič nepripája: pripojí sa až {{ui:Connect}}.

- **MQTT cez WebSockets**: adresa WebSocket poslucháča vášho brokera (`wss://broker.example.com:8884/mqtt`) a jedna alebo viac tém s `{tag}` tam, kde patrí značka podkladu, napríklad `site/{tag}/temperature` (BimCraft sa prihlási na `site/+/temperature` a z témy každej správy prečíta značku). Témy bez `{tag}` pomenúvajú senzor samy. Správa je buď holé číslo (`21.5`), alebo JSON, napríklad `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (ak sa vaše pole volá inak, nastavte {{ui:Value field in JSON}}).
- **Opýtať sa adresy (HTTP)**: webová adresa, na ktorú odpovedá váš systém riadenia budovy alebo váš malý skript, pýtaná každých niekoľko sekúnd (najmenej 5). Môže odpovedať JSON kľúčovaným značkou (`{"AHU-1": 21.5}`), JSON zoznamom (`[{"tag": "AHU-1", "value": 21.5}]`) alebo CSV s meraniami ako vyššie. Ak neodpovie, BimCraft pred ďalšou otázkou čaká dvojnásobok času, najviac päť minút.

Každé meranie ide k podkladu, ktorého značku, názov alebo GlobalId nesie, presne ako stĺpec CSV; názvy, ktoré nezodpovedajú žiadnemu podkladu, sa uvedú. Merania sa pripoja k {{ui:Sensor values}}: zoznam, grafy, limity a farby v modeli fungujú rovnako.

**Vaše heslo alebo token** sa zadá pre jedno pripojenie: odovzdá sa pripojeniu a políčko sa vyprázdni; nikdy sa neuloží v tomto prehliadači ani v IFC. Token ide ako štandardná hlavička `Authorization: Bearer` a žiadne cookies sa neposielajú.

{{ui:Keep these settings in the IFC}} zapíše adresu, témy, pole hodnoty a to, ako často sa pýtať, do modelu (sada `CadCraft_Feed` na projekte; pre heslo pole nie je), takže ďalší človek, ktorý súbor otvorí, zadá len svoje prihlásenie a klikne na {{ui:Connect}}. Heslo ani kľúč nedávajte priamo do adresy: adresa s menom a heslom sa odmietne.

:::note
**Čo váš broker alebo adresa potrebuje.** Stránka v prehliadači sa môže spojiť len so serverom, ktorý to dovoľuje:
- Stránka je zabezpečená (https), takže prehliadač sa pripája len na adresy `wss://` a `https://` — okrem vášho počítača (`localhost`), kde `ws://` a `http://` fungujú na testovanie.
- HTTP adresa musí povoliť požiadavky z tejto stránky (CORS: hlavička `Access-Control-Allow-Origin` a `Authorization` medzi povolenými hlavičkami, ak používate token).
- Väčšina brokerov (Mosquitto, EMQX, HiveMQ a ďalšie) ponúka poslucháča WebSocket; často je vypnutý, kým ho nezapnete. BimCraft používa MQTT 3.1.1.
:::

**Keď je BimCraft zatvorený, upozornenia nefungujú**: limity označia podklad len vtedy, keď je model otvorený a pripojený je zdroj dát. Sledovanie budovy nonstop vyžaduje server, ktorý BimCraft neprevádzkuje.

## Tabuľka COBie

**COBie** je tabuľka na odovzdanie, ktorú si mnohí vlastníci a tímy správy budov vyžadujú (zverejnená Národným štandardom BIM v USA; BS 1192-4 vo Veľkej Británii). Otvorte {{ui:COBie spreadsheet}} na karte:

- {{ui:Save as COBie (.xlsx)}} zapíše listy COBie 2.4 — Contact, Facility, Floor, Space, Type, Component, System, Job, Document a Attribute — z modelu a údajov o podkladoch: budovu, jej úrovne a miestnosti (plochy z množstiev modelu), každý podklad ako komponent s jeho sériovým číslom, dňom inštalácie, začiatkom záruky, značkou a čiarovým kódom, jeho typ s výrobcom, modelom, životnosťou a dĺžkou záruky, systémy, do ktorých patrí, záznam údržby ako úlohy a prepojené dokumenty. Každý komponent nesie IFC GlobalId prvku. Do stĺpca „created by“ v COBie zadajte svoju e-mailovú adresu alebo ho nechajte prázdny (vtedy sa zapíše n/a). Hodnoty, ktoré model nemá, sa píšu **n/a**; stĺpce kategórií nesú triedu IFC, nie kód OmniClass.
- {{ui:Read a COBie spreadsheet…}} ju načíta späť, z BimCraft alebo iného programu, a **najprv vypíše každú zmenu**: ktorý podklad, ktorá hodnota, z čoho na čo, a nové dokumenty. {{ui:Apply}} ich zapíše všetky v jednom kroku ({{key:Mod+Z}} to vráti späť). Riadky sa párujú podľa GlobalId, potom podľa názvu komponentu. Riadky, ktoré nezodpovedajú ničomu v modeli, sa uvedú, ale nepridajú sa.

Tabuľka sa považuje za nedôveryhodnú: vzorce sa nikdy nečítajú ani nespúšťajú (číta sa len hodnota naposledy uložená v bunke). Hodnota, ktorá by spôsobila koniec záruky pred jej začiatkom, a odkaz na dokument, ktorý nie je webová adresa ani názov súboru, sa vynechajú a spočítajú; veľmi veľké zošity sa odmietnu. Úlohy COBie sú plánované práce typu, takže sa zapíšu, ale nečítajú sa späť. V tabuľke, ktorú zapisuje BimCraft, je text, ktorý by ju mohol pomýliť so vzorcom (začína `=`, `+`, `-` alebo `@`), označený ako text.

Zošit kontrolujeme v našich testoch voči nezávislému čítaču tabuliek; neprešiel validátorom COBie. Ak ho prijímajúci tím spustí, povedzte nám, čo hovorí.

## Odovzdávacie dokumenty

Papiere, ktoré sa s dokončenou budovou odovzdávajú vlastníkovi, patria projektu, nie jednému podkladu. Na karte {{ui:Assets}} otvorte {{ui:Handover documents}}:

1. {{ui:Add a document}}, vyberte jeho druh (kolaudačné rozhodnutie, certifikát o užívaní, záruka, návod, výkresy skutočného vyhotovenia, iné) a zadajte jeho názov, dátum vydania, vydavateľa a referenčné číslo.
2. Uveďte, kde je: webová adresa, názov súboru uložený vedľa IFC, alebo {{ui:Attach a file}}.
3. {{ui:Add to the list}}. {{ui:Edit}} a {{ui:Remove}} zmenia zoznam; každé je jeden krok, ktorý môžete vrátiť späť.

{{ui:Build the handover package}} stiahne jeden zip: titulnú stranu so zoznamom každého dokumentu, rovnaký zoznam ako tabuľka, zošit COBie (dokumenty sú na jeho liste Document ako riadky o Facility), model a každý pripojený súbor. Kolaudačné rozhodnutie alebo certifikát o užívaní, ktorý ešte nie je v zozname, sa na titulnej strane uvedie; balík sa zostaví aj tak.

Modelom v balíku je **model skutočného vyhotovenia**: uvádza, ktoré prvky boli zamerané na stavbe. S ním je v priečinku `as-built`: vyhlásenie, zoznam každého prvku s jeho stavom overenia, súbor výkresov tak, ako je teraz, ako jedno PDF (výkresy skutočného vyhotovenia), a zmenový záznam výkresov, keď model vydal sady. Pozri [Označte prvky ako skontrolované alebo overené na stavbe](topic:verification).

- V súbore IFC je každý dokument IfcDocumentInformation viazaný na projekt (IfcRelAssociatesDocument), s jeho názvom, referenciou, dátumom, vydavateľom a miestom, aby ho iné programy vypísali.
- Pripojený súbor sa zaznamená podľa názvu, veľkosti a SHA-256. Ak chcete samotný súbor uchovať s projektom, použite {{ui:Save the project as a bundle}} (.ccbundle obsahuje model a pripojené súbory; po otvorení sa vrátia, každý overený podľa svojho záznamu). Bežné uloženie sa spýta, čo chcete.
- Samotný súbor .ifc uchováva záznam, nie súbor: po jeho otvorení použite {{ui:Attach the file again}}. Rovnaký súbor sa rozpozná; iný súbor nahradí záznam.

## CSV

{{ui:CSV}} uloží každý podklad s jeho údajmi, každý záznam údržby a každý dokument, po jednom riadku, pre tabuľku alebo iný program údržby.

:::note
Ešte nie je hotové: hostovaná služba, ktorá uchováva merania a posiela upozornenia, keď je BimCraft zatvorený, a čítanie úloh COBie späť. Pozri [Ešte nie je hotové](topic:not-built-yet).
:::
