---
title: Rodiny a ich veľkosti
summary: Dvere, okná a nábytok prichádzajú v rodinách. Každá veľkosť rodiny je jeden typ v súbore IFC, takže zoznam typov v BimCraft zostáva krátky, zatiaľ čo ostatné programy čítajú obyčajné typy.
keywords: rodina, rodiny, typ, typy, veľkosť, veľkosti, typ dverí, typ okna, nábytok, stôl, polica, skrinka, nová veľkosť, duplikovať, umiestniť rodinu, súbor rodiny, ccfamily, knižnica IFC, knižnica projektu, skupina, viditeľnosť, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Čo je rodina

Rodina je jeden druh veci v niekoľkých veľkostiach: jedny krídlové dvere, ktoré sa vyrábajú so šírkou 32, 36 a 42 palcov, alebo stôl, ktorý je dlhý aj krátky. V BimCraft vidíte rodinu len raz, s jej veľkosťami pod ňou, namiesto dlhého zoznamu typov.

IFC rodiny nepozná. V súbore je každá veľkosť bežný typ (typ dverí, typ okna, typ nábytku…) a rodina je skupina, ktorá uvádza svoje veľkosti. Iné BIM programy čítajú typy a skupinu tak, ako sú; BimCraft z nich rodinu obnoví.

## Kde ich nájdete

- Skupina **Rodiny** v prehliadači projektu uvádza rodiny v tomto modeli, s počtom veľkostí každej a počtom umiestnených kusov. Pod nimi sú **Štartovacie rodiny**: dvere a okná z nástrojov Dvere a Okno, a stôl, regál a spodná skrinka.
- {{ui:Build}} › {{ui:Families…}} zobrazí rovnaký zoznam v okne.
- Kliknutím na rodinu ju otvoríte: uvidíte jej veľkosti, hodnoty každej veľkosti a počet prvkov, ktoré každú používajú.

## Dvere a okná

Nástroje Dvere a Okno vypisujú rodiny daného druhu a vedľa nich **zoznam veľkostí**. Vyberte veľkosť alebo zadajte **W** a **H**: šírka a výška, ktorú žiadna veľkosť zatiaľ nemá, sa pri umiestnení dverí stane novou veľkosťou rodiny. Dvere rovnakej veľkosti zdieľajú jeden typ.

{{ui:Properties}} vybraných dverí alebo okna ukazuje ich **Rodinu** a **Veľkosť**. Vyberte inú veľkosť zo zoznamu alebo zadajte novú šírku či výšku. {{ui:Open the family}} otvorí rodinu, ktorej patria.

Rám každých dverí alebo okna nasleduje hrúbku vlastnej steny, ako aj predtým bez rodín. Typ veľkosti tiež uchováva dvere nakreslené v stene s hrúbkou 140 mm pre programy, ktoré čítajú typy.

## Nová veľkosť z tejto rodiny

1. Otvorte rodinu.
2. Pod **Nová veľkosť z tejto rodiny** zadajte jej hodnoty (Šírka, Výška a ostatné parametre rodiny) a ak chcete, aj názov. Bez názvu sa pomenuje podľa svojich hodnôt.
3. Kliknite na {{ui:Make the size}}.

Dve veľkosti nemôžu mať rovnaké hodnoty. **Premenovať** mení názov veľkosti; **Odstrániť** odoberie veľkosť, ktorú nikto nepoužíva; **Vybrať** vyberie prvky tejto veľkosti.

## Umiestnenie nábytku

1. {{ui:Build}} › {{ui:Place family}}, alebo {{ui:Place}} v okne rodiny.
2. V paneli vyberte rodinu a jej veľkosť.
3. Kliknite na pôdorys a umiestnite ho na úroveň. Stlačením {{key:R}} ho pred kliknutím otočíte o 90°. {{key:Esc}} ukončí.

{{ui:Properties}} umiestneného kusu ukazuje jeho veľkosť, miesto a uhol otočenia; {{key:Delete}} ho odstráni. Každý kus jednej veľkosti zdieľa tvar tej veľkosti, takže zmena rodiny zmení všetky.

## Veľkosti z tabuľky

{{ui:Sizes from a table…}} v okne rodiny načíta súbor CSV (čiarka, bodkočiarka alebo tabulátor). Prvý riadok pomenúva stĺpce: názov alebo popis parametra a voliteľne `Name`. Dĺžky sú v milimetroch, ak nenapíšete jednotku (`1.2 m`, `36 in`). Stĺpce Áno / Nie prijmú yes, no, true, false, 1 alebo 0 a parameter bez stĺpca si zachová predvolenú hodnotu. Každý riadok sa stane veľkosťou v jednom kroku, ktorý môžete vrátiť späť; veľkosť, ktorá tam už je, sa preskočí. Riadok, ktorý sa nedá načítať alebo ktorý rodina nedokáže nakresliť, odmietne celú tabuľku a uvedie svoj riadok. Najviac 200 riadkov a 1 MB. {{ui:Save the sizes as a table}} zapíše rovnakú tabuľku späť.

## Nastavenie na každom prvku

Parameter označený **Na prvok** v editore (Áno / Nie, ktoré pridá priečku, štítok alebo materiál) nie je súčasťou veľkosti: dve dvere jednej veľkosti sa môžu líšiť. Vyberte prvok a **Vlastnosti** zobrazia tieto parametre; zmeňte jeden a prvok sa nakreslí znova so svojím vlastným tvarom (nábytok a zariadenia dostanú vlastný tvar, dvere a okná sa vytvoria znova vo svojich stenách). Ak ich všetky nastavíte späť na predvolené hodnoty, vráti sa k tvaru svojej veľkosti.

## Úroveň podrobnosti

{{ui:Build}} › {{ui:Families…}} › **Úroveň podrobnosti** nastaví pre každú rodinu v modeli, čo sa uloží v telesách a nakreslí v symboloch v pôdoryse: **Jemná** ponechá všetko, **Stredná** a **Hrubá** vynechajú časti, ktoré editor označuje ako jemnejšie (menšie súbory, rýchlejšie zobrazenia). **Automatická** uloží všetko a nechá pohľad listu vybrať podľa mierky: 1:50 a väčšia jemná, 1:100 stredná, 1:200 a menšia hrubá. Je to jeden krok, ktorý môžete vrátiť späť.

## Duplikovanie rodiny

Nemusíte začínať od nuly. {{ui:Duplicate}} skopíruje rodinu s jej parametrami, telesami a veľkosťami pod novým názvom. Kópiu upravte v editore; pôvodná rodina zostane nezmenená.

## Súbory rodín

- {{ui:Save the family file}} uloží súbor `.ccfamily.json`: parametre, telesá a veľkosti rodiny. Otvorte ho v inom modeli pomocou {{ui:Open a family file…}} v skupine Rodiny.
- {{ui:Save as IFC}} uloží rodinu ako malý súbor IFC: typy jej veľkostí a jej skupinu, deklarované knižnicou projektu IFC. Ostatné programy ho otvoria ako súbor typov; BimCraft ho otvorí znova ako rodinu.

Súbor rodiny otvorený tu sa číta ako údaje a pred zápisom sa skontroluje. Rodina, ktorej kľúč už je v modeli, sa pridá ako samostatná rodina. Rodina, ktorá obsahuje ďalšie rodiny (pozri Rodiny vnútri v pomocníkovi editora), ich prinesie so sebou: súbor ich uvádza a model si ponechá tie, ktoré už má.

## Rodiny v Knižnici

Otvorte {{ui:Families…}} a zvoľte {{ui:From the Library…}}, aby ste videli rodiny zdieľané v Knižnici. {{ui:Add to this project}} načíta jednu ako súbor rodiny: BimCraft skontroluje každé pole pred tým, než čokoľvek vytvorí, rodina sa pridá ako vlastná rodina a otvorí sa v editore. Pridanie je jeden krok, ktorý môžete vrátiť späť. Ak chcete zdieľať vlastnú rodinu, použite {{ui:Save all as a library}} a pošlite súbor do Knižnice (zamestnanci Knižnice publikujú súbor rodiny príkazom a každá rodina je samostatná položka so svojimi veľkosťami). Ak sa k Knižnici nedá dostať, zoznam to uvedie a nič sa nezmení.

## Typy iných programov

Typy vytvorené inými programami sa tiež zobrazujú v skupine Rodiny, zoskupené odhadom: podľa časti názvu prvkov pred prvou dvojbodkou, inak podľa názvov typov, ktoré sa líšia len číslami. Okno rodiny uvádza, aký odhad použilo. Sú vypísané a môžete vybrať ich prvky, ale tu sa neupravujú: nemajú recept rodiny.

:::note
Štartovacie dvere a okná sa kreslia presne tak, ako pred zavedením rodín. Súbory vytvorené pred rodinami sa otvoria nezmenené: ich dvere a okná sa zobrazia pod svojou rodinou s používanými veľkosťami a pri prvej zmene sa presunú na vlastnú veľkosť.
:::

Pozri aj [Úprava rodiny](topic:family-editor) a [Dvere a okná](topic:doors-and-windows).
