---
title: Nastavenia BimCraft
summary: Vyberte, či sa miestnosti a priestory zobrazujú, či sa kreslia hrany a v akom pohľade sa model otvorí, a začnite umiestňovanie so zapnutým prichytením k stene.
keywords: nastavenia, predvoľby, možnosti, priestory, miestnosti, ifcspace, hrany, čiary, výkon, veľký model, pohľad pri otvorení, kamera, pohľad zhora, prichytenie k stene, prichytávanie
from: 4416e64f
---

Nastavenia otvoríte ozubeným kolieskom na paneli aplikácie alebo klávesmi {{key:Mod+,}}. Prvá karta, {{ui:BimCraft}}, obsahuje nastavenia patriace tejto aplikácii; {{ui:Všeobecné}} obsahuje nastavenia, ktoré zdieľajú všetky aplikácie CadCraft (motív, panel nástrojov, panely). Nastavenia BimCraft platia len v tejto aplikácii: meníte ich tu a tento prehliadač si ich pamätá. {{ui:Obnoviť nastavenia BimCraft}} v spodnej časti dialógového okna ich vráti, spolu so zdieľanými, na začiatočné hodnoty.

## Ponuky, klávesy a myš

Štýl ponuky (vlastný panel nástrojov BimCraft, ponuková lišta pre návrh interiérov, pásová lišta BIM alebo príkazový riadok na kreslenie), vaše vlastné klávesy a ponuky a to, čo robia koliesko a tlačidlá myši. Pozri [Ponuky, klávesy a myš](topic:menus-keys-and-mouse).

## Keď sa model otvorí

- **Zobraziť miestnosti a priestory** (na začiatku vypnuté): miestnosti a priestory sú priehľadné škatule, ktoré môžu skrývať múry za nimi, preto na začiatku zostávajú skryté. Tlačidlo {{ui:Priestory}} nad modelom ich stále zapína a vypína pre otvorený model.
- **Hrany**: {{ui:Hrany zapnuté}} (na začiatku) kreslí čiary hrán, ktoré dodávajú výkresový vzhľad. {{ui:Iba malé modely}} ich kreslí len pri modeloch s menej ako 300,000 trojuholníkmi, čo udržuje veľké modely rýchlejšie na prepínanie. {{ui:Hrany vypnuté}} otvorí každý model bez nich. Tlačidlo {{ui:Hrany}} ich stále prepína pre otvorený model. Nad 1.5 milióna trojuholníkov sú hrany vždy vypnuté.

## Výkresy sa otvárajú v

Ako sa výkres DWG alebo DXF zobrazí najprv: {{ui:3D (najrýchlejšie)}} (na začiatku) kreslí aj veľký výkres rýchlo, alebo {{ui:Model (2D)}} otvorí plochý pohľad na priestor modelu. Karty nad výkresom prepínajú kedykoľvek medzi {{ui:Model}}, listami a {{ui:3D}}. Výkres bez ničoho v priestore modelu alebo prehliadač, ktorý nedokáže zobraziť 3D, sa vždy otvorí v 2D.

## Pohľad pri otvorení

Kamera, s ktorou sa model otvorí: {{ui:Prispôsobiť}} (na začiatku, celý model z rohu), {{ui:Zhora}}, {{ui:Spredu}} alebo {{ui:Bok}}. Tlačidlá nad modelom menia pohľad kedykoľvek.

**Budova natočená na pozemku**: mnohé modely prichádzajú s budovou pootočenou voči osiam súboru (pri geodetických alebo zdieľaných súradniciach). {{ui:Kolmo na budovu}} (na začiatku) zobrazí takú budovu kolmo: {{ui:Prispôsobiť}}, {{ui:Zhora}}, {{ui:Spredu}}, {{ui:Bok}}, steny kocky pohľadov a každý nový rez sa riadia podľa jej múrov, a kompas kocky stále ukazuje na sever modelu. {{ui:Ako je umiestnená na pozemku}} ponechá osi súboru. Budova, ktorej múry ležia pozdĺž osí, vyzerá v oboch prípadoch rovnako.

## Umiestňovanie položiek knižnice

**Začnite so zapnutým prichytením k stene** (na začiatku vypnuté): keď sa začne umiestňovanie alebo vkladanie položky knižnice, jej zadná strana sa prichytí k najbližšiemu múru a bude smerovať do miestnosti. {{key:Tab}} alebo tlačidlo {{ui:Prichytenie k stene}} na lište umiestňovania ho na chvíľu vypne. Podlažie bez múrov začne bez neho.

## Rezný box

{{ui:Rezerva okolo výberu}} je, koľko priestoru nechá {{ui:Rezný box okolo výberu}} na každej strane vybraných prvkov, v milimetroch: na začiatku 300, najviac 5000. Pozri [Rez modelu IFC rezovou rovinou](topic:section-plane).

## Poloha

{{ui:Zemepisná šírka a dĺžka v}} určuje systém, v ktorom {{ui:Merať}} › {{ui:Poloha}} uvádza zemepisné šírky a dĺžky: WGS 84 (EPSG:4326, na začiatku, ako ho používajú GPS a webové mapy), {{ui:Vlastný datum súboru}}, alebo jeden z ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 a CGCS2000. Vlastný mapový systém a datum súboru sa vždy zobrazia tiež. Pozri [Meranie vzdialeností, plôch a polôh v 3D](topic:measure).

## Indikátor rohu

Čo je v pravom dolnom rohu 3D pohľadov (model IFC a výkres prepnutý do 3D): {{ui:Kocka pohľadov}} (na začiatku), {{ui:Ikona osí}} (malé X, Y a Z) alebo {{ui:Žiadne}}. Zmena nastane hneď. 2D pohľad na výkres žiadny nezobrazuje.

Na kocke pohľadov kliknite na stenu, hranu alebo roh, aby ste sa pozreli z tejto strany, potiahnite kocku na obiehanie, potiahnite prstenec na otočenie a kliknutím na domček sa vrátite k začiatočnému pohľadu.

## Vaše meno pri problémoch

Po prihlásení nesú problémy meno vášho účtu a BimCraft nič nepýta: táto časť zobrazuje {{ui:Z vášho účtu (<name>)}}. {{ui:Použiť iné meno}} otvorí pole pre iné meno, ktoré platí, kým nezvolíte {{ui:Použiť meno môjho účtu}}. Ak ste odhlásení, formulár problému pýta meno ako predtým. Pozri [Problémy a súbory BCF](topic:issues-bcf).

## Asistenti

**Nechať AI asistentov a skripty používať BimCraft** (na začiatku vypnuté) umožní asistentovi vo vašom počítači dosiahnuť otvorený model cez CadCraft Studio: **Čítať** nájde prvky a prečíta ich vlastnosti, **Zmeniť pohľad** ich izoluje, skryje a zobrazí. **Aktivita** vypíše jeho volania. Pozri [Nechajte AI asistenta pracovať s vaším modelom](topic:assistants).

:::note
Ostatné nastavenia sa uplatnia, keď sa model otvorí alebo keď začne umiestňovanie. Model, ktorý je už otvorený, si zachová svoj vzhľad, kým nepoužijete tlačidlá panela nástrojov alebo ho neotvoríte znova.
:::

## Súvisiace

- [Kopírovanie, vkladanie a duplikovanie položiek knižnice](topic:copy-paste)
- [Umiestnenie zariadení a nábytku z knižnice](topic:place-from-library)
- [Obrazovka BimCraft](topic:workspace)
- [Nechajte AI asistenta pracovať s vaším modelom](topic:assistants)
