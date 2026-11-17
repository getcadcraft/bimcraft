---
title: Tvary stěn, rozdělení, odsazení, natažení a zamknutí
summary: Kreslete stěny jako obdélník, mnohoúhelník, oblouk, na vybrané čáry nebo kolem obrysu. Rozdělujte je, vyjímejte z nich kusy, odsazujte je, natahujte oknem, zarovnávejte a zamykejte je k sobě, ke kótě nebo k ose mřížky. Každá změna drží stěny spojené a je jeden krok zpět.
keywords: vyměnit typ, změnit typ, přetypovat, co se pohnulo, lod, úroveň rozpracování, styl spoje, pokos, na tupo, srovnat konec, spoje stěn, další, prochází, zakázat spojení, povolit spojení, priorita vrstev, jádro, priorita, křižovatka, obdélník, pootočený obdélník, mnohoúhelník, vepsaný, opsaný, oblouk, střed, tečnový oblouk, vybrané čáry, tabulátor, obkreslit, obrys, rozdělit, rozdělit s mezerou, mezera, smazat úsek, spojit zpět, odsazení, kopie, natažení oknem, výběr oknem, natáhnout, zarovnat, zamknout, visací zámek, omezení, zamknout kótu, upravit kótu, mřížka, zamknout k ose, posunout osu mřížky, odsazení umístění, volně stojící, růst od, měřit od, osa, vnitřní líc, vnější líc, zrušit spojení, alt
from: 5b7d2f75
---

## Co uděláte

Vytvářejte a měňte stěny pomocí receptů nástroje Stěna. Každý recept končí stejně jako kreslení stěny podle jejích rohů: rohy se spojí samy, spoje se ukládají do souboru a celá změna je jeden krok v **Změnách**, který {{ui:Zpět}} vrátí. Stěny si zachovají svou identitu: stěna, kterou rozdělíte, odsadíte nebo natáhnete, je pořád táž stěna, se svými dveřmi, okny a kótami.

## Kreslení obdélníku, mnohoúhelníku nebo oblouku

Se zapnutým {{ui:Kreslení}} otevřete {{ui:Tvary}} ve skupině Kreslení (nebo zvolte tvar v seznamu **Tvar** v řádku Stěna). Řádek Stěna ukazuje typ stěny, referenci výkresu, vnější stranu a horní hranu, stejně jako u nástroje {{ui:Stěna}}. Pak klikejte, nebo zadávejte body (x,y · @dx,dy · @délka<úhel · délka podél ukazatele):

- **Obdélník**: dva protilehlé rohy. Čtyři stěny, čtyři spoje v rozích, jeden krok.
- **Pootočený obdélník**: kde první strana začíná a končí (tím se nastaví její natočení a délka), pak třetí klik pro druhou stranu.
- **Mnohoúhelník**: střed, pak roh (**Vepsaný**), nebo střed strany (**Opsaný**). Nejprve nastavte **Strany** (3 až 64).
- **Oblouk podle středu**: střed, začátek (ten nastaví poloměr), konec. **Směr**: kratší cestou, proti směru hodinových ručiček, nebo po směru. Výseč přes tři čtvrtiny kružnice se nakreslí jako dvě stěny.
- **Tečnový oblouk**: klikněte na konec stěny, pak na místo, kde oblouk končí. Oblouk vychází z konce stěny ve směru samotné stěny.

Uzavřený tvar dostane vnější stranu směřující ven. Nakreslí-li se na **Vnější líc** nebo **Vnitřní líc**, líc, na který kliknete, je ten, který zůstane na místě.

## Stěny na čarách, které už máte

- **Vybrat čáry**: klikněte na čáru a stěna na ní vznikne. Stiskněte {{key:Tab}} (nebo podržte {{key:Shift}} při kliknutí), chcete-li vzít celý řetězec čar spojených od konce ke konci. Čáry jsou kreslicí čáry tohoto zobrazení, referenční výkres a osy mřížky.
- **Obkreslit obrys**: klikněte dovnitř oblasti uzavřené těmito čarami nebo stěnami. Stěny obejdou nejmenší oblast kolem místa kliknutí.

## Nastavte před kreslením: odsazení a spojení

Řádek Stěna má ještě dvě pole, která používá nástroj {{ui:Stěna}} a tvary:

- **Odsazení**: stěny se nakreslí v této vzdálenosti od čáry, na kterou kliknete: + vlevo od ní, − vpravo, pohledem, jak kreslíte.
- **Spojení**: zrušte zaškrtnutí, chcete-li kreslit volně stojící stěny. Jejich konce dostanou **Zakázat spojení** a zůstanou volné, ať jsou kdekoli (viz [Změna stěny](topic:change-a-wall-or-door)).

## Rozdělení, vyjmutí kusu, opětovné spojení

Otevřete {{ui:Stěny}} ve skupině Upravit.

- **Rozdělit**: klikněte na stěnu tam, kde má být přeříznuta, nebo zadejte vzdálenost od jejího začátku. V blízkosti stěny, která ji protíná, se řez přichytí k místu, kde se stýkají. Obě části mají stejný typ a zůstávají spojené konec na konec. **Mezera** nechá mezeru o dané délce vycentrovanou na řezu. **Volné konce** místo toho dá koncům řezu **Zakázat spojení** (Nastavení › BimCraft › Stěny › **Při rozdělení stěny** určuje, která možnost je zaškrtnutá na začátku). Dveře nebo okno patří k části, ve které stojí; řez jimi se odmítne.
- **Smazat úsek**: klikněte, kde kus začíná, a kde končí. Dveře v něm jdou s ním.
- **Spojit zpět**: klikněte na obě části jedné stěny (v přímce, stejný typ). Znovu se stanou jednou stěnou, s prvním kliknutím jako základem, a se dveřmi obou částí.

## Styl spoje, zakázání spojení, priorita vrstev

Otevřete {{ui:Stěny}} ve skupině Upravit.

- **Styl spoje**: klikněte na roh, kde se setkávají dvě rovné stěny. Každé kliknutí přepne na další styl: **Pokos** (oba konce seříznuty podle čáry od vnitřního k vnějšímu rohu, tak začíná každý roh), **Na tupo** (jedna stěna prochází až k vnějšímu líci druhé, která se opře o její bok), a **Srovnat konec** (jako na tupo, a stěna, která prochází, končí rovně; v pravém úhlu vypadá jako na tupo). **Další**, nebo {{key:Tab}}, udělá druhou stěnu tou, která prochází. Seznam **Styl** v liště ukazuje roh, na který jste naposledy klikli. Stejné dvě volby jsou ve **Vlastnostech** jedné stěny jako **Styl spoje na začátku / na konci** a **Prochází**. Každá změna je jeden krok v **Změnách**. Půdorys, 3D těleso, místnosti a množství se řídí podle toho.
- Na T vždy prochází ta stěna, na jejíž bok se naráží. Kde se dvě stěny kříží, klikem (nebo volbou **Ve křížení spojitá** ve Vlastnostech) určíte, která z obou je spojitá. To rozhodne, která vrstva stěny se kreslí přes křížení.
- Styl patří spoji: zůstane, když se stěny pohnou, a zmizí jen tehdy, když spoj zanikne (stěna se smaže, rozdělí se na tom konci, nebo konec dostane **Zakázat spojení**). Roh se zakřivenou stěnou, nebo tam, kde se schází tři a více stěn, zůstává pokosem. Roh ostřejší než asi 30 stupňů, nebo plošší než asi 150 stupňů, se také vrátí k pokosu.
- **Zakázat spojení**: klikněte blízko konce stěny. Ten konec se uvolní: nespojí se s ničím, ať stěna jde kamkoli, dokud na něj znovu neklikněte. Volné konce se označují křížkem, dokud je nástroj zapnutý. Stejný přepínač je ve Vlastnostech jako **Spojit na začátku / Spojit na konci**.
- **Priorita vrstev**: kde se setkávají stěny s vrstvami, silnější vrstva přeruší slabší. Jádra se tak spojují s jádry a povrch se opře o silnější vrstvu. Každá vrstva má prioritu od 0 do 999. Ve výchozím nastavení vychází z funkce vrstvy (konstrukce 800, podklad 600, izolace 400, membrána 300, povrch 200, dutina 100). {{ui:Priorita vrstev}} otevře skladbu stěny, kde sloupec **Priorita** nastavuje vlastní číslo vrstvy. Vrstvy se stejnou prioritou se opírají jedna o druhou a čára se kreslí jen mezi různými materiály. Vidíte to v půdorysech s podrobností **Střední** nebo **Jemná**, v rozích, na T spojích a v křižovatkách dvou rovných stěn. Nastavení › BimCraft › Stěny › **Čistit vrstvy stěn tam, kde se stěny setkávají** to vypne. Mění to jen to, co je kresleno uvnitř stěn: obrysy stěn a jejich množství zůstávají tak, jak je dává styl spoje.

## Změna typu mnoha stěn

Přechod od náčrtových půdorysů k výkresům pro výrobu je hlavně změna typu: obecná stěna se stane konkrétní skladbou. Nic se nepřekresluje.

1. Vyberte stěny (jednu, nebo více s {{key:Ctrl}} nebo {{key:Shift}}).
2. Ve Vlastnostech stiskněte **Vyměnit typ…** pod Typ stěny (nebo otevřete {{ui:Stěny}} ve skupině Upravit a zvolte {{ui:Vyměnit typ}}, což otevře stejný seznam). Seznam se otevře uvnitř Vlastností, v bloku vybraných stěn. Není to dialog a nic nezakrývá: půdorys, 3D pohled i výběr dál fungují, zatímco je otevřený, a seznam sleduje stěny, které vyberete.
3. Seznam ukazuje každý typ stěny s její tloušťkou a značkou LOD, například „Wall 230 generic, LOD 200“ a „230 clay brick, plastered both sides, LOD 300“. Typy, které vybrané stěny mají nyní, jsou označeny. Do **Hledat** napište název, tloušťku, nebo `lod 300`, chcete-li seznam zúžit.
4. Klikněte na typ. Každá vybraná stěna se změní na něj v jednom kroku, takže jeden {{ui:Zpět}} vrátí celou výměnu zpět. Malé x seznam zavře.

Každá stěna si zachová svou osu polohy. Stěna na své ose poroste na obě strany. Stěna, jejíž osa polohy je líc, si ten líc ponechá a roste na druhou stranu; stěny k ní připojené se řídí v rozích. Zámky stěn, které jsou zamknuté k vyměněné stěně, ji také následují. Dveře a okna zůstávají ve svých stěnách a jsou znovu vyříznuty pro novou tloušťku.

Po výměně seznam ukazuje **Co se pohnulo**: kolik stěn se změnilo a na co, tloušťku a LOD před a po, stěny, které se kvůli zachování osy polohy posunuly do strany, připojené stěny, které se řídily, dveře a okna znovu hostovaná a každou místnost, jejíž plocha se změnila, s plochou před a po. Stavový řádek říká totéž v jedné řádce. Hlášení jen informuje; výměnu nikdy nezastaví. Výběr typu v **Vlastnosti › Typ stěny** provede stejnou výměnu a dá stejné hlášení.

Dvě věci výměnu zastaví a pak se nezmění vůbec nic: dveře nebo okno, které by se do stěny už nevešly (stěna se zkrátí tam, kde se připojuje roh; nejprve dveře zúžte, nebo je posuňte od rohu), a zámek, který by výměna porušila (stěna zamknutá k ose mřížky svou osou, zatímco její osa polohy je líc; odemkněte ji, nebo vraťte osu polohy na osu).

Asistent připojený k BimCraft umí tutéž výměnu (nástroje `wall_types_list` a `walls_swap_type`) a dostane stejné hlášení.

Značku LOD typu nastavíte v editoru skladby stěny: viz [Skladby stěn](topic:wall-assemblies).

## Odsazení a natažení oknem

- **Odsazení**: klikněte na stěnu, pak na stranu, na kterou ji přesunout, nebo zadejte vzdálenost. Stěna se posune kolmo sama k sobě a stěny k ní připojené se natáhnou. Zaškrtněte **Kopírovat**, chcete-li místo toho rovnoběžnou kopii (není spojena s původní).
- **Natažení oknem**: klikněte na dva rohy obdélníku, pak na bod, ze kterého se má přesouvat, a na bod, kam se má přesunout. Každý konec stěny uvnitř obdélníku se přesune; stěna celá uvnitř se přesune a přijdou i stěny, které do ní naráží. Stěny, které obdélník protínají, se natáhnou.

## Úprava kóty a její zamknutí

Vyberte referenční kótu (Kótování › {{ui:Referenční kóta}}) a zadejte její hodnotu ve **Vlastnostech**. Stěna její druhé reference se posune kolmo sama k sobě, první reference drží a připojené stěny se řídí. Zaškrtněte **Zamknout tuto kótu**, chcete-li hodnotu udržet: když se později pohne kterákoli ze stěn, ta druhá se řídí. Zamčenou hodnotu nelze přepsat, dokud ji neodškrtnete.

## Zarovnání a zamknutí

**Zarovnat a zamknout**: klikněte na líc stěny (nebo na osu, poblíž středu stěny), nebo na osu mřížky, pak na líc stěny, který se má přivést na tu čáru. Stěna se kolmo přesune na ni. Nejprve zaškrtněte **Zamknout**, chcete-li je udržet v zarovnání: v půdorysu se zobrazí visací zámek a když se jedna stěna pohne, druhá ji následuje. **Vlastnosti** stěny vypisují její **Zámky**, každý s **Odemknout**.

## Zamknutí stěn k osám mřížky

Vyberte stěnu, která běží podél osy mřížky, nebo jejíž konec na ní sedí, a ve **Vlastnostech** vyberte osu mřížky v **Zamknout k ose**. Pak vyberte osu mřížky nástrojem {{ui:Mřížka}} a zadejte vzdálenost do **Posunout o**: osa se kolmo posune k sobě samé a zamknuté stěny ji následují i se svými spojenými stěnami, v jednom kroku. Stěnu zamknutou k ose mřížky nelze sama odsunout (posuňte osu, nebo stěnu odemkněte). Osa natočená tak, že zamknutá stěna na ní nemůže zůstat kolmá, se odmítne. Přejmenování osy zámek zachová; smazání osy zámek odstraní.

## Délka: který konec drží a co měří

- **Růst od** (Vlastnosti jedné stěny): **Začátek drží** (pohne se konec), **Konec drží** (pohne se začátek), nebo **Střed drží** (oba konce se posunou o polovinu). Když zadáváte délku, půdorys označí bod, který drží. Stěna připojená na konci, který se pohybuje, se kolmo posune sama k sobě a zachová svůj úhel.
- **Měřit od** (vedle **Kót** v půdorysu, ve Vlastnostech a v Nastavení › BimCraft › Stěny): osa, vnitřní líc, nebo vnější líc. Pole Délka a kóty stěn v půdorysu čtou totéž, takže souhlasí. Výchozí je osa.
- Chcete-li pohnout stěnou volně, bez jejích spojů (spoje se přeruší, stěna si zachová svou identitu), podržte {{key:Alt}} a táhněte za její prostřední úchyt.

## Dobré vědět

- Tyto recepty jsou ze specifikace nástroje Stěna (strany 4 až 9). Styl spoje a priorita vrstev jsou navrženy pro rovné stěny. Priorita vrstev se ukazuje jen v půdorysu (ne v řezech, pohledech nebo 3D, kde je stěna jedním tělesem), ne v uzlech tří a více stěn, a membrány se nepřenášejí.
- Styl spoje se ukládá do jeho záznamu v souboru IFC (název `IfcRelConnectsPathElements`, například `CadCraft join L butt 1`), takže jej ostatní programy stále čtou a starší soubor se otevře s pokosy.
- Zámky a spoje se ukládají do souboru IFC (zámky jako `CadCraft_WallHolds` na projektu, spoje jako `IfcRelConnectsPathElements`), takže zůstanou, když soubor znovu otevřete.
- Zakřivené stěny lze rozdělit, znovu spojit a vyjmout z nich kus; neodsazují se a nezamykají.
- Viz také [Kreslení stěn](topic:draw-walls), [Změna stěny, dveří nebo okna](topic:change-a-wall-or-door) a [Tvar stěny](topic:wall-shape).
