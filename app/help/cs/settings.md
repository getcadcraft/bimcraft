---
title: Nastavení BimCraft
summary: Zvolte, zda se místnosti a prostory zobrazují, zda se kreslí hrany a v jakém pohledu se model otevře, a začněte umisťovat s přichytáváním ke stěně zapnutým.
keywords: nastavení, předvolby, možnosti, prostory, místnosti, ifcspace, hrany, čáry, výkon, velký model, pohled při otevření, kamera, pohled shora, přichytávání ke stěně, uchopení
from: 4416e64f
---

Otevřete {{ui:Nastavení}} ozubeným kolem v liště aplikace nebo klávesou {{key:Mod+,}}. První karta, {{ui:BimCraft}}, obsahuje nastavení patřící této aplikaci; {{ui:Obecné}} obsahuje nastavení, které sdílejí všechny aplikace CadCraft (motiv, panel nástrojů, panely). Nastavení BimCraft platí jen v aplikaci: měníte je zde a tento prohlížeč si je pamatuje. {{ui:Obnovit nastavení BimCraft}} ve spodní části dialogu je vrátí, spolu se sdílenými, na začátek.

## Nabídky, klávesy a myš

Styl nabídek (vlastní panel nástrojů BimCraft, nabídková lišta pro návrh interiéru, pás BIM nebo příkazový řádek kreslení), vaše vlastní klávesy a nabídky a to, co dělají kolečko myši a tlačítka. Viz [Nabídky, klávesy a myš](topic:menus-keys-and-mouse).

## Při otevření modelu

- **Zobrazit místnosti a prostory** (na začátku vypnuto): místnosti a prostory jsou průhledné boxy, které mohou skrývat stěny za nimi, proto na začátku zůstávají skryté. Tlačítko {{ui:Prostory}} nad modelem je stále zapíná a vypíná pro otevřený model.
- **Hrany**: {{ui:Hrany zapnuty}} (výchozí) kreslí hrany, které dávají vzhled výkresu. {{ui:Jen malé modely}} je kreslí jen u modelů s méně než 300,000 trojúhelníky, což udrží velké modely rychlejšími při přepínání. {{ui:Hrany vypnuty}} spustí každý model bez nich. Tlačítko {{ui:Hrany}} stále přepíná hrany pro otevřený model. Nad 1.5 milionu trojúhelníků jsou hrany vždy vypnuty.

## Výkresy se otevírají v

Jak se výkres DWG nebo DXF nejprve zobrazí: {{ui:3D (nejrychlejší)}} (výchozí) vykreslí rychle i velký výkres, nebo {{ui:Model (2D)}} otevře plochý pohled na prostor modelu. Karty nad výkresem přepínají mezi {{ui:Model}}, listy a {{ui:3D}} kdykoli. Výkres bez čehokoli v prostoru modelu nebo prohlížeč, který 3D nezvládne, se vždy otevře ve 2D.

## Pohled při otevření

Kamera, se kterou se model otevře: {{ui:Přizpůsobit}} (výchozí, celý model z rohu), {{ui:Shora}}, {{ui:Zepředu}} nebo {{ui:Z boku}}. Tlačítka nad modelem změní pohled kdykoli.

**Budova natočená na pozemku**: mnoho modelů přichází s budovou pod úhlem k osám souboru (u geodetických nebo sdílených souřadnic). {{ui:Kolmo k budově}} (výchozí) zobrazí takovou budovu kolmo: {{ui:Přizpůsobit}}, {{ui:Shora}}, {{ui:Zepředu}}, {{ui:Z boku}}, stěny kostky pohledu i každý nový řez se řídí jejími stěnami a kompas kostky stále ukazuje na sever modelu. {{ui:Tak, jak je umístěna na pozemku}} zachová osy souboru. Budova, jejíž stěny leží podél os, vypadá v obou případech stejně.

## Umisťování položek knihovny

**Začít se zapnutým přichytáváním ke stěně** (na začátku vypnuto): při umisťování nebo vkládání položky knihovny se její zadní strana přichytí k nejbližší stěně a otočí se do místnosti. {{key:Tab}} nebo {{ui:Přichytávání ke stěně}} na liště umisťování jej vypne pro daný okamžik. Podlaží bez stěn začne bez něj.

## Řezový kvádr

{{ui:Rezerva kolem výběru}} je prostor, který {{ui:Řezový kvádr kolem výběru}} ponechá na každé straně vybraných prvků, v milimetrech: na začátku 300, nejvýše 5000. Viz [Řez modelu IFC rovinou řezu](topic:section-plane).

## Poloha

{{ui:Zeměpisná šířka a délka v}} vybírá soustavu, ve které {{ui:Měřit}} › {{ui:Poloha}} udává zeměpisnou šířku a délku: WGS 84 (EPSG:4326, výchozí, jak používají GPS a webové mapy), {{ui:Vlastní datum souboru}}, nebo jednu z ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 a CGCS2000. Vlastní mapová soustava a datum souboru se zobrazují vždy také. Viz [Měření vzdáleností, ploch a poloh v 3D](topic:measure).

## Indikátor v rohu

Co je v pravém dolním rohu 3D pohledů (model IFC a výkres přepnutý do 3D): {{ui:Kostka pohledu}} (výchozí), {{ui:Ikona os}} (malé X, Y a Z) nebo {{ui:Žádné}}. Změna se projeví okamžitě. Pohled 2D výkresu nikdy žádný nezobrazuje.

Na kostce pohledu klikněte na stěnu, hranu nebo roh, abyste se podívali z dané strany, přetažením kostky budete obíhat, přetažením prstence se otočíte a kliknutím na domeček se vrátíte k výchozímu pohledu.

## Vaše jméno u problémů

Po přihlášení nesou problémy jméno vašeho účtu a BimCraft nic nepožaduje: tato část ukazuje {{ui:Z vašeho účtu (<name>)}}. {{ui:Použít jiné jméno}} otevře pole pro jiné jméno, které platí, dokud nezvolíte {{ui:Použít jméno mého účtu}}. Po odhlášení formulář problému, jako dříve, požádá o jméno. Viz [Problémy a soubory BCF](topic:issues-bcf).

## Asistenti

**Povolit AI asistentům a skriptům používat BimCraft** (na začátku vypnuto) umožní asistentovi na vašem počítači dosáhnout na otevřený model přes CadCraft Studio: **Číst** najde prvky a přečte jejich vlastnosti, **Změnit pohled** je izoluje, skryje a zobrazí. **Aktivita** vypíše jeho volání. Viz [Nechte AI asistenta pracovat s vaším modelem](topic:assistants).

:::note
Ostatní nastavení se projeví při otevření modelu nebo při zahájení umisťování. Model, který je už otevřený, si zachová svůj vzhled, dokud nepoužijete tlačítka na liště nebo jej neotevřete znovu.
:::

## Související

- [Kopírování, vkládání a duplikace položek knihovny](topic:copy-paste)
- [Umístění zařízení a nábytku z knihovny](topic:place-from-library)
- [Obrazovka BimCraft](topic:workspace)
- [Nechte AI asistenta pracovat s vaším modelem](topic:assistants)
