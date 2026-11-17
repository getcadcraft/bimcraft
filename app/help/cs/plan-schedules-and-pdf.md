---
title: Rozpisy, kóty a PDF půdorysu
summary: Rozpisy dveří, oken, stěn a místností, které se mění při kreslení, kóty na půdorysu a půdorys podlaží uložený jako PDF v normalizovaném měřítku.
keywords: rozpis, rozpis dveří, rozpis oken, rozpis stěn, rozpis místností, množství, odečet množství, plocha, csv, tabulkový procesor, kóty, kóta, tisk, pdf, vykreslení, měřítko, 1/4", 1:50, list
from: d97cd16e
---

## Co uděláte

Zjistěte, kolik vyjde budova, kterou kreslíte: kolik dveří a oken jaké velikosti, kolik stěny jakého typu, jak velká je která místnost. Kóty dejte na půdorys a uložte ho jako PDF k tisku nebo odeslání.

## Rozpisy

Při zapnutém {{ui:Kreslení}} zobrazuje **Rozpisy** v levém panelu vždy jednu tabulku:

- **Dveře** a **Okna**: každé podle své značky (D1, D2 … a W1 …, přiřazené při umisťování), typu, šířky, výšky (a parapetu), úrovně a stěny, ve které je.
- **Stěny podle typu**: pro každý typ stěny počet stěn, jejich tloušťku, celkovou délku a plochu stran jako **Hrubá plocha**, **Odpočty** a **Čistá plocha**, se součtem.
- **Místnosti**: číslo, název, úroveň, plocha a obvod, se součtem plochy.
- **Podlahy**: každá podlaha s úrovní, druhem a tloušťkou, a její hrubou plochou, odpočty a čistou plochou.
- **Povrchové úpravy**: každá vrstva povrchové úpravy typů stěn (podle materiálu a strany stěny) a stropy, s počtem ploch a hrubou, odpočtovou a čistou hodnotou.
- **Typy stěn: data pro odečet množství**: co bylo zadáno jednou u každého typu stěny (jednotka, malta, sazba), s počtem stěn, jejich délkou a čistou plochou a sazbou krát změřené množství. Viz [Skladby stěn](topic:wall-assemblies).

- **Povrchové úpravy podle místnosti**, **Povrchové úpravy podle stěny**, **Povrchové úpravy podle zóny** a **Množství povrchových úprav**: čím je pokrytá každá místnost, s plochami, počty dlaždic včetně řezů a objemy podkladu. Viz [Povrchové úpravy místností a rozpisy povrchových úprav](topic:room-finishes).
- Vaše vlastní **sestavy**: rozpis, který jste seskupili, sečetli a uložili pod názvem. Viz [Uspořádání, uložení a export rozpisu](topic:schedule-layouts).

Tabulky se mění s každou úpravou. Kliknutím na řádek nebo na jednotlivé číslo vyberete prvky, ze kterých pochází. {{ui:Stáhnout CSV}} uloží tabulku pro otevření v tabulkovém procesoru; pod ním jsou **Stáhnout Excel** a **Kopírovat pro Google Sheets**. **Povrchové úpravy místností** a **Specifikace** ([Zpracování specifikace z modelu](topic:specification)) se otevírají ze stejného místa.

## Plocha a objem každé vrstvy

V seznamu rozpisů zvolte **Vrstvy: plocha a objem**. Má jeden řádek pro každou vrstvu každého typu stěny, podlahy, střechy a stropu v použití: prvek, typ a jeho LOD, vrstvu (počítanou od vnější strany stěny, od horní strany podlahy, střechy nebo stropu), její materiál a funkci, tloušťku, počet prvků, **čistou plochu** a **objem**.

- Plocha je čistá plocha prvků daného typu, měřená přesně jako v **Stěnách podle typu**, **Podlahách** a **Povrchových úpravách**, podle metody měření projektu. Střecha se měří na sklonu; žádná metoda měření nemá pravidlo pro střechy.
- Objem je ta plocha krát vlastní tloušťka vrstvy.
- Podlaha, střecha nebo strop bez typu je jeden řádek: jedna vrstva vlastní tloušťky.
- Vzduchová dutina je uvedena s plochou a vynechá se z celkového objemu. Membrána má plochu a nemá objem.

Kliknutím na řádek vyberete jeho prvky. {{ui:Stáhnout CSV}} uloží tabulku.

## Jak se měří plochy

Každá plocha jsou tři čísla, která se sečtou: hrubá minus odpočty je čistá. Pravidlo je napsáno nad každou z těchto tabulek a je to jedno pravidlo: rozpisy, množství uložená v souboru IFC i odečet předaný do TakeoffCraft ho používají všechny.

- **Stěna**: hrubá plocha je jedna strana stěny, její délka podle osy krát výška (skutečná plocha u stěny s tvarovaným vrchem nebo spodkem). Každé dveře, okno a jiný otvor se odečtou, šířka krát výška, každý jednou.
- **Podlaha nebo strop**: hrubá plocha je plocha uvnitř jejich obrysu. Každý otvor a výřez uvnitř se odečte jednou.
- **Povrchová úprava stěny**: každá vrstva povrchové úpravy typu stěny pokrývá jednu stranu stěny, měřenou jako stěna, se stejně odečtenými otvory. Povrchová úprava je vrstva stěny: je uvedena v **Povrchových úpravách** a nepřičítá se k ploše stěny, takže stěna s dveřmi se nikdy nepočítá dvakrát.

To je **výchozí nastavení CadCraft**: každý otvor se odečte, bez ohledu na velikost; délky stěn jsou podle osy; ostění se neměří. Používá to každý projekt, dokud nezvolíte jinou metodu.

## Volba metody měření

Nad rozpisem **Metoda měření** vypisuje metody, které jsou součástí BimCraft, a **Načíst soubor metody** načte metodu vaší kanceláře. Volba se uloží do souboru IFC jako jeden krok zpět a řídí tři věci najednou: rozpisy, čistá množství uložená v souboru a odečet předaný do TakeoffCraft. Pravidlo nad každou tabulkou pak začíná metodou, jejím zdrojem, datem, kdy byl zdroj přečten, a slovy **Nekontrolováno rozpočtářem**.

Metoda je malý soubor údajů, ne programový kód. Pro každé množství uvádí:

- **nejmenší odečtený otvor**: například otvor 0.5 m² nebo menší zůstává v ploše stěny;
- **jak se měří styky stěn**: podle osy; nebo u stěny, která končí na jiné, měřené k líci této stěny; nebo u každého konce stěny, který se stýká s jinou stěnou, měřené k bližší ploše;
- **zda se měří ostění** u povrchové úpravy (vtahy povrchové úpravy do otvorů), jako plocha, nebo jako délka, je-li mělké. Hloubka ostění se bere jako polovina tloušťky stěny;
- **co uvádí o zdivu**: jak se měří a jaké případné rezervy na odpad nebo maltu uvádí.

Metody, které jsou součástí BimCraft:

| Metoda | Stěny: nejmenší odečtený otvor | Povrchové úpravy stěn | Stropy | Zdivo |
|---|---|---|---|---|
| CadCraft default | každý otvor | každý otvor | každý výřez | bez rezerv |
| RICS NRM 2 (Spojené království), 2. vydání 2021 | 0.5 m² nebo méně zůstává | 1 m² nebo méně zůstává | 1 m² nebo méně zůstává | podle plochy; bez uvedených procent |
| AAQS Standard Method for Africa 2015 | 0.5 m² nebo méně zůstává | 0.5 m² nebo méně zůstává | 0.5 m² nebo méně zůstává | podle plochy; měřeno čistě, 0 % odpadu |
| IS 1200 (Indie), 1976, zdivo | 0.1 m² nebo méně zůstává | výchozí (viz níže) | výchozí | podle objemu |
| BIA Technical Note 10 (Spojené státy), 2009 | každý otvor | výchozí | výchozí | 5 % odpadu u jednotek, 15 % u malty |

Před použitím metody si přečtěte tato omezení:

- **Žádný rozpočtář nebyl kteroukoli z nich zkontrolován.** Každá byla vytvořena přečtením uvedeného zdroje a zápisem jejích čísel s klauzulí, ze které pocházejí. Jste-li rozpočtář a můžete některou ověřit, tvůrci aplikace by se rádi dozvěděli.
- Pokud pravidlo nešlo přečíst ze zdroje, metoda u něj uvede **nepotvrzeno** a použije se výchozí nastavení CadCraft. Žádná metoda dodávaná s BimCraft nemá potvrzené pravidlo pro styky stěn, ostění ani podlahy, takže se tyto měří výchozím způsobem u všech.
- IS 1200 odečítá otvory v omítce ve třech pásmech. Soubor metody zatím pásma neumí držet, takže povrchové úpravy stěn používají pod touto metodou výchozí nastavení a pravidlo to uvádí.
- Jihoafrický standardní systém měření stavebních prací **není** mezi nimi: jeho text nebyl možné přečíst. Metoda AAQS pro Afriku uvádí, že vychází z vydání tohoto systému z roku 1991, ale je to jiný dokument.
- BIA Technical Note 10 je odhadová poznámka oboru, ne standardní metoda měření.
- Otvor přesně nejmenší velikosti se řídí vlastními slovy metody („nepřesahující“, „menší než“). Velikosti do 2 dílů z 10 000 od ní se počítají jako přesně ona.
- Podle metody se čistá plocha boční strany stěny a čistá plocha podlahy nebo stropu v souboru řídí metodou a sada množství to uvádí. Hrubé plochy a objemy v souboru zůstávají tak, jak byly nakresleny.

**Poznámky k této metodě** pod výběrem uvádějí, co každý zdroj nechává otevřené. **Otevřít zdroj** přejde na dokument.

### Vlastní metoda vaší kanceláře

Soubor metody je JSON ve formátu `cadcraft-measurement-method`. Každá hodnota v něm uvádí klauzuli, ze které pochází; hodnota bez klauzule se odmítne. Soubor se kontroluje při načtení, chybné pole se pojmenuje a z souboru, který neprojde, se nepoužije nic. Jakmile je zvolen, soubor se uloží uvnitř projektu, takže se projekt otevře stejně na jiném počítači. Jeho id je vaše vlastní prostý název (nesmí být id metody dodávané s aplikací).

## Cihly, tvárnice a malta

**Typy stěn: data pro odečet množství** počítá jednotky a maltu každého typu stěny, jehož jednotka má délku a výšku (viz [Zadání dat pro odečet množství typu](topic:wall-assemblies#give-a-type-its-takeoff-data)). Toto jsou vzorce, přesně tak, jak se počítají:

- **Jednotky na plochu jednoho líce** = 1 / ((délka jednotky + spára) × (výška jednotky + spára)). Cihla 215 × 65 mm se spárou 10 mm: 1 / (225 × 75 mm) = 59.26 na m².
- **Počet jednotek napříč líce** = (tloušťka líce + spára) / (šířka jednotky + spára), zaokrouhleno na celé číslo, nejméně 1. Líc 102.5 mm z cihel 102.5 mm je 1; stěna 215 mm ze stejných cihel je 2.
- **Jednotky** = jednotky na plochu × počet jednotek napříč × čistá plocha líce stěny, sečteno přes líce zdiva daného typu.
- **Jednotky k objednání** = jednotky × (1 + odpad % / 100), zaokrouhleno nahoru na celou jednotku. Odpad je ten, který je zadán u typu; pokud není zadán, metody, pokud ji uvádí; jinak 0 %.
- **Malta** = čistá plocha × tloušťka líce, minus objem jednotek (jednotky × délka × výška × šířka), pak plus přídavek v procentech zadaný u typu pro drážky nebo perforace, pak plus rezerva metody, pokud ji uvádí. Potřebuje šířku jednotky.

Předpokládá se: každý líc zdiva daného typu je zděn z jediné jednotky typu; líc silnější než jedna šířka jednotky se počítá jako tolik šířek jednotky, každá jako líc kladený podélně, takže řezané jednotky, zavírací kusy a speciální tvary se nepočítají zvlášť; tam, kde žádná vrstva není označena jako zděná z jednotky, se za líce berou jádrové vrstvy, a poznámka nad tabulkou to uvádí. **Částka** je sazba krát to, na co sazba platí, což může nyní být také jednotka k objednání, 1000 jednotek k objednání nebo m³ malty.

Značky jsou IFC štítky prvků: změníte-li jednu v {{ui:Vlastnosti}} (Štítek), rozpis se podle toho změní. Pro každý model IFC, nakreslený nebo ne, [Sečtení množství, výpis prvků a rozpis prostorů](topic:quantity-totals) sečte jakoukoli vlastnost.

## Kóty

Půdorys ukazuje délku každé nakreslené stěny podél její vnější plochy (vnitřní stěna: podél jedné plochy) a u stěny s dveřmi nebo okny řetězec kót od rohů ke každému otvoru. {{ui:Kóty}} na liště modelu je skryje a zase zobrazí.

## Uložení půdorysu jako PDF

1. Zobrazte požadovanou úroveň a v panelu Úrovně nastavte jednotky.
2. Klikněte na {{ui:Tisk}} na liště modelu.
3. BimCraft uloží „<file> — <level>.pdf“: půdorys černobíle v největším normalizovaném měřítku, které se vejde na stránku (1/4" = 1'-0", 1/8" = 1'-0" … na Letter v palcích a stopách; 1:50, 1:100 … na A4 v milimetrech), s vyplněnými stěnami, dveřmi, okny, názvy místností a plochami, kótami a titulním pruhem s úrovní, souborem, výškou řezu, datem a měřítkem.

PDF je kresleno čárami a textem, takže zůstává ostré při jakémkoli přiblížení a jeho text lze prohledávat.

## Dobré vědět

- Rozpisy vypisují to, co nakreslily nástroje výkresu. Dveře a okna z jiného programu se místo toho zobrazují v Součtech množství.
- Chcete-li položky oceňovat, předejte množství do TakeoffCraft: viz [Množství do TakeoffCraft](topic:takeoff). CSV ke stažení zůstává pro tabulkový procesor.
