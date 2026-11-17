---
title: Kreslení stěn
summary: Kreslete stěny na půdorysu podlaží klikáním na rohy nebo zadáváním délek; rohy se spojují samy a stěny se ukládají jako IFC.
keywords: zakřivená, oblouk, umisťovací čára, zarovnání, stěna, stěny, kreslení, půdorys, půdorys podlaží, místnost, roh, spojení, typ stěny, 2x6, 2x4, cmu, beton, výška, podlaží, úroveň, zadaná délka, ortogonální, přichycení
from: 8269cd4b
---

## Co uděláte

Nakreslete stěny budovy na půdorysu každého podlaží. Klikněte, kde stěna začíná, a potom na každý roh; BimCraft rohy spojí sám, každé stěně přidá její vrstvy (obložení, opláštění, sloupky, sádrokarton …) a vede ji až do podlaží nad ní. Ve 3D zobrazení stěny vidíte hned, jak je kreslíte.

## Otevření půdorysu

1. Začněte novou budovu ([Založení nové budovy](topic:start-a-new-building)) nebo otevřete model IFC.
2. Klikněte na {{ui:Kreslení}} na panelu nástrojů. Otevře se nová budova, ve které je kreslení už zapnuto.
3. Půdorys podlaží se zobrazí vlevo a 3D zobrazení vpravo. Podlaží vyberte v seznamu nahoře nad půdorysem, nebo kulatým tlačítkem vedle něj v panelu **Podlaží**.
4. {{ui:Půdorys}}, {{ui:Rozdělit}} a {{ui:3D}} jsou nástroje v řádku {{ui:Pohled}} na panelu nástrojů (příkazy PLAN, SPLIT a klávesy fungují jako dřív). Použijte {{ui:Půdorys}} pro samotný půdorys, {{ui:Rozdělit}} pro obojí a {{ui:3D}} pro zavření půdorysu. Když je okno úzké (nebo je velikost rozhraní velká), {{ui:Rozdělit}} zobrazí půdorys nad 3D zobrazením místo vedle něj.

Půdorys řeže podlaží ve výšce 4'-0" (1200 mm) nad jeho podlahou, jako to dělá půdorys podlaží. Zoomujete kolečkem myši, posouváte táhnutím prostředním nebo pravým tlačítkem (nebo podržením {{key:Space}} a tažením); když je zapnutý {{ui:Vybrat}}, posune se i obyčejné tažení. {{key:F}} s kurzorem nad půdorysem půdorys přizpůsobí zobrazení.

## Kreslení místnosti

1. Klikněte na {{ui:Stěna}} (nebo stiskněte {{key:W}}).
2. V prvním seznamu vyberte typ stěny, například **Vnější 2×6** nebo **Vnitřní 2×4**.
3. Vyberte její výšku: **Až do podlaží nad** (stěna se posune, pokud se to podlaží posune), **Až do** podlaží výše u stěny, která prochází několika podlažími (schodišťová hala, dvoupodlažní místnost, vysoký štít), nebo **Pevná výška** a zadejte ji. Taková stěna patří k podlaží, na kterém jste ji nakreslili; půdorysy podlaží, kterými prochází, ji ukazují světleji, místnosti tam se o ni opírají a z těchto půdorysů můžete klikem vložit do ní dveře a okna (dveře stojí na podlaze daného podlaží). Chcete-li stěnu samotnou přesunout nebo tvarovat, přejděte do podlaží, na kterém začíná.
4. Klikněte, kde první stěna začíná.
5. Klikněte na každý roh. Každé kliknutí vytvoří stěnu; další začíná tam, kde skončila předchozí. Délka a úhel se zobrazí vedle kurzoru.
6. Klikněte znovu na první bod a místnost uzavřete. Stavový řádek ukáže, kolik stěn místnost má; v režimu osy dostane každá stěna vnější vrstvu na vnější straně místnosti.
7. Stiskněte {{key:Esc}} (nebo klikněte pravým tlačítkem, nebo dvakrát klikněte), čímž kreslení ukončíte bez uzavření.

Rohy se spojují samy: dvě stěny se stýkají na pokos, stěna končící na jiné se zastaví u jejího líce (T spoj) a tři nebo více stěn v jednom bodě sdílí roh. Stěny, které se kříží, zůstanou beze změny.

Celou místnost najednou: otevřete {{ui:Tvary}} pro obdélník, pootočený obdélník, mnohoúhelník, oblouky, stěny na vybraných čarách nebo kolem obrysu (viz [Tvary stěn, rozdělení, odsazení, natažení a zamknutí](topic:wall-tools)).

## Volba vztažné hrany

Před prvním kliknutím vyberte **Osa stěny**, **Vnitřní líc** nebo **Vnější líc**. Když je vybrán líc, vaše kliknutí a zadané délky popisují tento líc; BimCraft posune osu stěny o polovinu celkové tloušťky a spojí navazující rohy. Vyberte **Vnější vlevo** nebo **Vnější vpravo** vzhledem ke směru kreslení. U uzavřeného obrysu kresleného proti směru hodinových ručiček je vnější strana vpravo; po směru hodinových ručiček vlevo. U **Vnitřní líc** leží tělo stěny na vnější straně vaší čáry; u **Vnější líc** na druhé straně. Kreslení podle líce zachová vámi zvolenou vnější stranu, i když smyčku uzavřete. Na ose se stěny, které neuzavírají místnost, řídí zvolenou vnější stranou; uzavření místnosti nastaví vnější stranu každé stěny na vnější stranu místnosti samo, bez ohledu na to, kterým směrem jste kreslili.

Změna typu stěny, vztažné hrany nebo vnější strany ukončí aktuální řetěz. Poblíž obráceného rohu se dlouhé pokosy zkrátí tím, že zůstanou rovné konce.

Při kreslení se koncový bod v prázdném prostoru může zarovnat vodorovně nebo svisle s koncovým bodem stěny nebo s dřívějším rohem. Přerušovaná pomocná čára spojí tento bod s přichyceným kurzorem. {{key:Shift}} udrží směr kreslení kolmý; zarovnání pak platí jen podél tohoto směru. Blízké koncové body, středy a průsečíky stěn mají přednost před vzdáleným zarovnáním.

## Umisťovací čára

Když je **Vztažná hrana** nastavena na **Vnější líc** nebo **Vnitřní líc**, stěna si tento líc drží jako umisťovací čáru. Později, když se stěna ztloustne nebo se její vnější strana obrátí, líc zůstane na místě a stěna kolem něj naroste nebo se otočí. Přímá stěna, která se na něj napojuje v rohu, ho bude následovat, takže roh zůstane uzavřený. Umisťovací čáru můžete změnit později v {{ui:Vlastnosti}}: viz [Změna stěny, dveří nebo okna](topic:change-a-wall-or-door).

## Kreslení zakřivené stěny

1. Klikněte na {{ui:Stěna}} a potom v řádku voleb v seznamu **Tvar** vyberte **Zakřivená**.
2. Klikněte, kde stěna začíná, a potom, kde končí.
3. Klikněte na bod na jejím oblouku. Nebo zadejte výšku oblouku a stiskněte {{key:Enter}}.
4. Řetěz pokračuje od konce stěny. Ukončíte ho stiskem {{key:Esc}}.

Zakřivená stěna se napojuje na stěny na svých koncích (fungují rohové a T spoje), vytváří místnosti a drží dveře a okna podél svého oblouku. Ty zůstávají přímými prvky, kolmými ke stěně uprostřed, a jejich vzdálenost se měří podél oblouku. Stěna se může otočit nejvýš o tři čtvrtiny kruhu. Přichytí se ke svým koncům a ke středu oblouku.

Ještě není hotovo u zakřivených stěn: {{ui:Oříznout / prodloužit}} a {{ui:Roh}}, konstrukce, automatické kóty půdorysu a přichycení podél oblouku. Viz [Co ještě není hotovo](topic:not-built-yet).

## Zadání délky místo klikání

Po prvním kliknutí napište a stiskněte {{key:Enter}}:

| Napíšete | Nakreslí |
|---|---|
| `12'6"` nebo `3810` | stěnu této délky ve směru, který ukazuje kurzor |
| `12'6"<90` | tuto délku pod tímto úhlem (ve stupních, proti směru hodinových ručiček od pravé strany) |
| `@3000,0` | do bodu tak daleko od posledního, vodorovně a nahoru |
| `1200,3400` | do tohoto bodu na půdorysu |

Napíšete-li číslo při zapnutém nástroji Stěna, jde rovnou do pole {{ui:Délka}}. Ve stopách a palcích je prosté číslo v palcích; v milimetrech v milimetrech. Jednotku můžete vždy napsat: `3.5 m`, `10 ft`, `6 1/2"`.

## Přichycení

- Koncové body stěn, rohy jejich líců a středy stěn se přichytí, když je kurzor blízko (čtverec, trojúhelník).
- Kurzor se přichytí na osu stěny nebo na kterýkoli líc (kříž).
- Od posledního bodu směr drží po každých 15°, když je blízko; podržte {{key:Shift}}, aby zůstal na 0°, 90°, 180° nebo 270°.
- Volné směry zaokrouhlí délku na 1/2" (nebo 10 mm).

## Změna, zpět a smazání

- Každá stěna je jeden krok v {{ui:Změny}}: {{ui:Zpět}} a {{ui:Znovu}} stěny vezmou zpět a vrátí.
- Když je zapnutý {{ui:Vybrat}}, klikněte na stěnu v půdorysu, aby se vybrala; 3D zobrazení a **Vlastnosti** ji budou sledovat. {{key:Delete}} smaže vybrané stěny a stěny, na které se napojovaly, se znovu vyčistí.

## Podlaží

Panel **Podlaží** vypisuje každé podlaží s jeho kótou a výškou.

- Napište nový název, kótu nebo výšku a stiskněte {{key:Enter}}. Změna výšky (nebo kóty) podlaží posune podlaží nad ním o stejnou hodnotu a stěny, které až do něj vedou, se posunou s ním.
- {{ui:Přidat podlaží nahoru}} přidá podlaží nad nejvyšší, stejně vysoké.
- {{ui:Přidat úroveň pod}} přidá podlaží pod nejnižší (suterén), stejně vysoké jako ono: jeho kóta je záporná, když je nejnižší podlaží ve výšce 0, a žádné jiné podlaží se nepohne. {{ui:Zpět}} ho odebere.
- {{ui:Kopírovat toto podlaží…}} znovu nakreslí, co je na podlaží, na které se díváte, na jiné podlaží nebo na nové nad ním: jeho stěny s dveřmi a okny, podlahy a stropy (ne střechy). Stěny, které vedly až do podlaží nad, vedou až do podlaží nad novým; místnosti se objeví samy. Jeden krok {{ui:Zpět}} vezme všechno zpět. Pokud už má druhé podlaží stěny, kopie se k nim přidá.
- {{ui:Jednotky}} na panelu nástrojů vybere jednotky (stopy a palce, palce, desetinné stopy, milimetry, centimetry nebo metry) pro všechno, co nástroje kreslení zobrazují a čtou.

## Uložení

Klikněte na {{ui:Uložit jako IFC}}. Každá stěna je stěna IFC se svou osou, svým spojeným tvarem, typem a vrstvami, `Pset_WallCommon` a základními množstvími (délka, výška, plochy a objemy), takže ji otevřou i jiné BIM programy a zařadí ji do rozpisu.

## Dobré vědět

- Stěny se kreslí na jejich ose. Tloušťka pochází z typu stěny.
- Půdorys zobrazuje stěny nakreslené zde vyplněné a vše ostatní (položky knihovny, modely z jiných programů) řezané stejnou rovinou, s tím, co leží pod řezem, v tenkých čarách.
- Stěny vytvořené jinými programy se v půdorysu zobrazí, ale tyto nástroje je zatím nejdou měnit.
