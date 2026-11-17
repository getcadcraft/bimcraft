---
title: Tvar stěny: připojení, profil, sklon a otvory
summary: Změňte tvar stěny nad a pod jejím půdorysem. Horní hrana může sledovat střechu, podlahu nebo strop, stěna může mít vlastní obrys viděný z boku, může být nakloněná, nebo může mít otvor bez dveří a oken. Dělá se to ve Vlastnostech, v pohledu nebo řezu, na pohledu na líc stěny nebo ve 3D. Každá změna je jeden krok zpět.
keywords: připojit, připojit nahoře, připojit v patě, střecha, deska, strop, štít, profil, upravit profil, obrys pohledu, schodovitý, atika, sklon, nakloněný, naklonit, šikmý, dvojitý sklon, otvor, otvor ve stěně, průchod, bez dveří, úchyty, pohled, řez, 3D, pohled na líc, zakřivená stěna, kopie
from: f558b269
---

## Co uděláte

Změňte tvar stěny nad a pod jejím půdorysem: horní hrana může sledovat střechu, podlahovou desku nebo strop, stěna může mít vlastní obrys viděný z boku, může být nakloněná a může mít otvory bez dveří nebo oken. Půdorys stěny, její rohy a osa polohy zůstanou, jak byly.

## Kde to můžete udělat

- **Vlastnosti**: se zapnutým {{ui:Kreslení}} a {{ui:Vybrat}} klikněte na jednu nakreslenou stěnu. **Vlastnosti** ukážou řádky stěny a pak **Tvar**, kde se všechno zadává.
- **Pohled nebo řez**: tužka v prohlížeči projektu ({{ui:Upravit v tomto pohledu}}) otevře pohled. Vyberte tam stěnu a táhněte za její úchyty. Viz „V pohledu nebo řezu“ níže.
- **Pohled na líc stěny**: {{ui:Stěny}} › {{ui:Upravit profil…}}, pak klikněte na stěnu v půdorysu. Funguje pro každou stěnu, i pro tu, na kterou se žádný pohled nedívá kolmo, a pro zakřivenou stěnu (zobrazenou rozvinutou).
- **Půdorys a 3D pohled**: čtyři příkazy v {{ui:Stěny}} (skupina Upravit): {{ui:Připojit horní / spodní hranu}}, {{ui:Upravit profil…}}, {{ui:Sklon}} a {{ui:Otvor ve stěně}}. Viz „V půdorysu a ve 3D“ níže.

Ať zvolíte cokoli, je to stejná změna: jeden krok v **Změnách**, a {{ui:Zpět}} ji vrátí.

Rovné i zakřivené stěny přijímají všechny nástroje tvaru. U zakřivené stěny vedou vzdálenosti podél jejího oblouku.

## Připojení horní nebo spodní hrany

- **Připojit nahoře**: vyberte střechu, podlahu nebo strop. Horní hrana stěny sleduje spodní stranu vybraného prvku, přímo nad každým rohem stěny. Pod sedlovou střechou dostane stěna šikmou horní hranu a tam, kde střecha mění rovinu (hřeben nebo nárožník), se horní hrana stěny ohne s ní.
- **Připojit v patě**: vyberte podlahu nebo strop. Patka stěny sleduje její horní plochu.
- Kde nic není nad (nebo pod) částí stěny, si tato část ponechá vlastní výšku stěny.
- Vazba zůstává: změníte-li sklon nebo přesah střechy, nebo výšku stropu, připojené stěny se řídí ve stejném kroku.
- Chcete-li vazbu uvolnit, vyberte **Vlastní výška**.

## Úprava profilu

{{ui:Upravit profil…}} otevře obrys stěny viděný z boku:

- **Horní čára**: řádky **Podél** (vzdálenost od začátku stěny) a **Výška** (nad patou stěny). Tři řádky 0 / 3000, 2500 / 4500, 5000 / 3000 vytvoří štít na 5 m stěně.
- **Spodní čára**: nechte prázdnou pro patu na úrovni podlaží, nebo zadejte řádky pro stěnu na schodovitém základu.
- {{ui:Přidat bod}} přidá řádek, **Odebrat** ho vyjme. {{ui:Použít tento profil}} ho použije; {{ui:Zpět na rovnou}} ho odstraní.

Každá čára vede podél stěny jednou, od jejího začátku ke konci. Čára, která se vrací sama do sebe, nebo horní hrana, která klesne k patě, se odmítne. Je-li zároveň připojena horní hrana, použije se nižší z obou.

## Naklonění stěny

**Sklon**: **Kolmá**, **Nakloněná** (obě líce se nakloní stejným směrem, tloušťka zůstává), nebo **Dvojitý sklon** (každý líc má vlastní úhel: stěna, která směrem nahoru ztenčuje nebo ztlušťuje). Zadejte stupně od kolmice. Kladný úhel se nakloní doleva od stěny, pohledem od jejího začátku. Stěna zůstává v patě tam, kde je nakreslena; stěny k ní připojené se s ní nenaklánějí.

## Otvory bez dveří nebo okna

{{ui:Přidat otvor}} vyřízne díru 900 širokou uprostřed stěny. Jeho řádek v **Otvory** nastavuje **Od začátku**, **Šířku**, **Parapet** (od úrovně podlaží) a **Výšku**; **Odebrat** ho vyjme. Otvor prochází celou stěnou, množství stěny ho vynechává a půdorys ukazuje mezeru tam, kde sahá do výšky řezu půdorysu. Když se začátek stěny posune podél své čáry, otvor si zachová své místo. Změna, která by ho nechala mimo stěnu, se odmítne.

## V pohledu nebo řezu

Otevřete pohled tužkou v prohlížeči projektu. Se zapnutým {{ui:Vybrat a přesunout}}:

- **Profil**: klikněte na stěnu, která je k pohledu čelem. Její horní a spodní čáry zmodrají, s čtvercovým úchytem na každém bodě a tečkou uprostřed každého úseku.
  - Tažením čtverečku posunete ten bod (dva koncové body se pohybují jen nahoru a dolů).
  - Tažením tečky posunete celý úsek nahoru nebo dolů.
  - Dvojklikem na čáru (nebo pravým klikem) přidáte bod tam. {{ui:Přidat bod (nahoře)}} a {{ui:Přidat bod (dole)}} přidají bod doprostřed nejdelšího úseku.
  - Klikněte na čtvereček a stiskněte {{key:Delete}} (nebo na něj klikněte pravým tlačítkem) a bod odstraníte. {{ui:Zpět na rovnou}} odstraní profil.
  - Když je vybrán bod, zadejte jeho **Podél** a **Výška** do pásu pod panelem nástrojů.
- **Připojení**: pás má seznamy **Připojit nahoře** a **Připojit v patě** pro vybranou stěnu. Nebo použijte nástroj {{ui:Připojit nahoře}} nebo {{ui:Připojit v patě}}: klikněte na stěnu nebo stěny, pak na střechu, podlahu nebo strop, zobrazené jako čárkované rámečky. Všechny vybrané stěny se připojí v jednom kroku.
- **Otvory ve stěně**: s nástrojem {{ui:Otvor ve stěně}} přetáhněte obdélník na líci stěny. Zpět v {{ui:Vybrat a přesunout}} přetáhněte otvor, chcete-li jej posunout, nebo přetáhněte jeden z jeho osmi úchytů, chcete-li změnit velikost. Do pásu zadejte **Od začátku**, **Šířku**, **Parapet** a **Výšku**, nebo stiskněte {{key:Delete}}, chcete-li otvor odstranit.
- **Sklon**: stěnu, podél které pohled míří (vidí se z čela, jako řez skrz ni, nebo v pohledu z jejího čela), lze také kliknout. Přetažením kulaté rukojeti nahoře stěnu nakloníte, nebo zvolte **Kolmá**, **Nakloněná** nebo **Dvojitý sklon** v pásu a zadejte úhly.

Velikosti se přichytávají k 10 mm; pro cokoli jemnějšího zadejte hodnotu. Zakřivenou stěnu lze upravit v pohledu, dokud se v zobrazení táhne jedním směrem. Její vlastní pohled na líc vždy funguje.

## V půdorysu a ve 3D

Otevřete {{ui:Stěny}} ve skupině Upravit:

- {{ui:Připojit horní / spodní hranu}}: zvolte **Připojit nahoře** nebo **Připojit v patě** v řádku nástroje. Klikněte na stěnu nebo stěny (v půdorysu nebo ve 3D pohledu), pak na to, k čemu se připojí. Ve 3D klikněte na samotnou střechu, podlahu nebo strop; v půdorysu klikněte na bod pod ním. Je-li jich tam více, seznam se zeptá, který.
- {{ui:Upravit profil…}}: v půdorysu klikněte na stěnu, aby se otevřel její pohled na líc. Ve 3D klikněte na stěnu: její body profilu dostanou úchyty; táhněte jeden v rovině stěny.
- {{ui:Sklon}}: klikněte na stěnu (půdorys nebo 3D) a zadejte, jak moc se naklání.
- {{ui:Otvor ve stěně}}: v půdorysu klikněte na stěnu, kam otvor patří; jeho **Šířka**, **Výška** a **Parapet** jsou v řádku nástroje. Ve 3D klikněte na jeden roh na líci stěny, pak na protější roh. Je-li ve 3D vybrána stěna, její otvory mají úchyty: rohy mění velikost, střed se posouvá.

Úchyty ve 3D jsou úchyty samotného 3D pohledu, takže čekají, dokud řezný box zobrazuje své úchyty.

## V půdorysu

Nakloněná stěna se kreslí tam, kde ji půdorys řeže (1200 nad podlažím, pokud pohled neříká jinak). Její obrys se posune o tolik, kolik se v dané výšce nakloní, a dvojitý sklon je tam širší nebo užší. Její obrys u podlahy se kreslí tenkými čarami toho, co leží pod řezem. Rohy, úchyty a kóty stěny zůstávají v její patě.

## Kopie

{{ui:Kopírovat toto podlaží…}} a Přesunout s možností **Kopírovat** vezmou s sebou profil stěny, sklon a otvory ve stěně. Stěna připojená k podlaze nebo stropu je připojena ke zkopírované podlaze nebo stropu nového podlaží. Připojení ke střeše se při kopírování podlaží nekopíruje, protože střechy se nekopírují. Kopie na stejném podlaží zůstává připojena ke stejné střeše, podlaze nebo stropu.

## V souboru

Tvarovaná stěna se zapisuje jako těleso z plošek (IfcFacetedBrep), které jiné programy čtou tak, jak je nakresleno. Její nastavení jsou na stěně (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Otvor je IfcOpeningElement ve stěně bez výplně.

## Ještě není hotovo

- Profil s převisy nebo dírami v obrysu (pro díry použijte otvory).
- Ve 3D: přidávání nebo odebírání bodů profilu a sklon úchytem (použijte pohled na líc stěny, pohled nebo řez, nebo hodnoty zadejte).
- {{ui:Odsazení}} s Kopírovat zapnutým nekopíruje tvar ani otvory ve stěně (Přesunout s možností Kopírovat ano).
- Vrstvy nakloněné stěny se nekreslí na půdorysech Střední a Jemné podrobnosti (její obrys ano).
- Otvory, které nejsou obdélníky.
