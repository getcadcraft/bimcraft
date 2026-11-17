---
title: Změna stěny, dveří nebo okna
summary: Klikněte na nakreslenou stěnu, dveře nebo okno a změňte jejich typ, velikost, výšku nebo místo ve Vlastnostech, nebo je přetáhněte v půdorysu; každá změna je jeden krok zpět.
keywords: srovnat do pravého úhlu, pravý úhel, 90, zkosení, úhel, ortogonální, velikost místnosti, vnitřní líc, vnější líc, měřit od, vzdálenost posunu, zadaná vzdálenost, zakřivená, oblouk, výška oblouku, poloměr, osa polohy, zarovnání, změna, úprava, vlastnosti, typ stěny, tloušťka, délka, výška, posun základny, horní hrana, úroveň, otočit, vnější, velikost dveří, velikost okna, parapet, vzdálenost, přesunout, úchyt, přetáhnout, změnit typ, více
from: 63052d5d
---

## Co provedete

Změňte to, co jste nakreslili: vyberte stěnu, dveře nebo okno a napište nové číslo do **Vlastností**, nebo to přetáhněte v půdorysu. Půdorys a 3D pohled se přizpůsobí, rohy se znovu spojí a dveře a okna zůstanou ve svých stěnách.

## Změna stěny

1. Se zapnutým {{ui:Kreslení}} a {{ui:Vybrat}} klikněte na stěnu v půdorysu (nebo ve 3D pohledu).
2. **Vlastnosti** zobrazí pole s čísly stěny. Změňte jedno a stiskněte {{key:Enter}}:
   - **Typ stěny**: jiný z výchozích typů. Tloušťka a vrstvy se změní s ním.
   - **Tloušťka**: libovolná tloušťka. Typ si zachová ostatní vrstvy a jeho hlavní vrstva (sloupky nebo blok) převezme rozdíl, například "Vnější 2×6, 200 mm".
   - **Měřit od**: **Osa**, **Vnitřní líc** nebo **Vnější líc**. **Délka** a **Velikost místnosti** se od něj čtou a nastavují. Vnější líc je to, co ukazují kóty půdorysu.
   - **Délka**: konec stěny se posune podél její osy. Stěna připojená na tomto konci se posune kolmo ke svému směru a zachová svůj úhel.
   - **Velikost místnosti** (je-li přes místnost rovnoběžná stěna): zadejte požadovanou velikost. Tato stěna se posune kolmo a připojené stěny se natáhnou, aby ji následovaly.
   - **Posun kolmo**: zadejte, jak daleko se stěna posune kolmo ke svému směru: prosté číslo ji posune ven, záporné dovnitř.
   - **Úhel k připojené stěně**: úhel k stěně připojené na jejím začátku. Zadejte 90 pro pravý úhel. Stěna nepřipojená k ničemu ukazuje **Směr**, ve stupních od východu.
   - {{ui:Srovnat do pravého úhlu}}: otočí stěny připojené k této zpět do pravých úhlů, podle směru, ve kterém většina jejich délky běží. Působí na celou spojenou místnost nebo rozvržení, ať vyberete kteroukoli z jejich stěn. Stěna odkloněná o více než 10 stupňů od pravého úhlu zůstane beze změny, takže stěna nastavená na 45 stupňů je v bezpečí. Jeden krok {{ui:Zpět}} to vše vrátí.
   - **Výška stěny**: **Up to the level above** (Až do úrovně nad) se řídí touto úrovní; **Až do Level 3** (a jakékoli úrovně výše) vytvoří stěnu, která prochází mezi úrovněmi; zadání výšky pak nastaví, jak daleko pod nebo nad touto úrovní je horní hrana. **Pevná výška** zachová číslo, které napíšete. **Prochází** vypisuje úrovně, kterými taková stěna prochází: v jejich půdorysech je nakreslena světleji, místnosti tam na ni přiléhají a dveře a okna do ní lze umístit z těchto půdorysů. Přesouvá se a tvaruje se na úrovni, na které začíná.
   - **Posun základny**: jak vysoko nad úrovní stěna začíná. Její horní hrana zůstane tam, kde byla.
   - **Vnější strana**: {{ui:Otočit}} dá vnější vrstvy na druhou líc.
   - **Osa polohy**: **Osa**, **Vnější líc**, **Vnitřní líc**, **Levá líc** nebo **Pravá líc**. Změna nic nepřesune. Později, až se stěna ztluští (podle typu nebo **Tloušťky**), nebo se její vnější strana otočí, osa polohy zůstane na místě a stěna se rozroste nebo otočí kolem ní. Přímá stěna, která se s ní stýká v rohu, se přizpůsobí, takže roh zůstane uzavřený. Osa polohy vybrané stěny je v půdorysu nakreslena čárkovaně. Vyberte více stěn, chcete-li ji nastavit pro všechny.
   - **Výška oblouku** (zakřivené stěny): jak daleko se střed vyklenuje od přímky. 0 ji udělá přímou; záporná hodnota ji vyklene na druhou stranu. Poloměr se ukazuje vedle.
3. Každá změna je jeden krok v **Změnách**; {{ui:Zpět}} ji vrátí.

## Přetažení stěny v půdorysu

Když je vybrána jedna stěna, zobrazí tři úchyty: čtverec na každém konci a kruh uprostřed.

- Přetáhněte konec, chcete-li stěnu prodloužit, zkrátit nebo ji natočit. Přichytí se jako nástroj Stěna a přichytí se kolmo ke stěně připojené na jejím druhém konci, jste-li do 3 stupňů; {{key:Shift}} ji udrží na osách půdorysu.
- Stěny připojené na konci, který přetahujete, zachovají svůj úhel: jejich konce se posouvají podél svých vlastních přímek, aby se setkaly s novou přímkou stěny, takže nic není nakloněné. Podržte {{key:Mod}} pro volné přetažení (konec připojené stěny jde s vaším a ta stěna se natočí), nebo {{key:Alt}}, chcete-li u této stěny přerušit spoje.
- Přetáhněte střed, chcete-li přesunout celou stěnu kolmo ke svému směru, ať přetahujete jakkoli. Její rohy se posouvají podél připojených stěn, takže ty si zachovají svůj úhel.
- Podržte {{key:Mod}} při přetahování středu pro volný posun, když úhel opravdu chcete přerušit. {{ui:Srovnat do pravého úhlu}} ho vrátí.
- Zatímco držíte úchyt, napište vzdálenost a stiskněte {{key:Enter}} (nebo pusťte): stěna půjde přesně o tuto vzdálenost, tím směrem, kterým jste táhli. {{key:Esc}} posun zruší.
- Vybraná zakřivená stěna ukazuje úchyty na koncích a kulatý úchyt uprostřed oblouku. Přetažením kulatého úchytu ji ohnete.
- Dveře a okna zůstávají ve stěně. Stěna, která je příliš krátká na to, co drží, se odmítne se zprávou "Do té stěny se to nevejde."

## Změna dveří nebo okna

1. Klikněte na dveře nebo okno v půdorysu.
2. Ve **Vlastnostech**: **Typ** (jiné dveře nebo okno stejného druhu), **Šířka**, **Výška**, **Parapet** (okna), **Od začátku** a **Od konce** (vzdálenost od každého konce líce stěny k jeho hraně), **Závěsy** {{ui:Otočit}} (dveře s jedním křídlem a okna otevíravá; posuvné, zasouvací, stodolní a skládací dveře místo toho uvádějí **Otevírá se do**; pevná, zavěšená a obrazová okna a dvoukřídlé dveře nic nemají), a **Směr otevírání** (dveře) nebo **Strana rámu** (okna) {{ui:Otočit}}.
3. Nebo jej přetáhněte podél stěny, nebo na jinou stěnu: viz [Dveře a okna](topic:doors-and-windows).

## Změna více prvků najednou

Vyberte více stěn (nebo více dveří, nebo více oken) s {{key:Shift}}+klik nebo {{key:Mod}}+klik. **Vlastnosti** nabídnou, co mají společné: **Změnit typ…**, výšku, velikost. Jedna změna nastaví všechny a jeden krok {{ui:Zpět}} vrátí celou změnu.

## Dobré vědět

- Čísla se zobrazují v {{ui:Jednotky}} zvolených na panelu nástrojů.
- Stěny, dveře a okna z jiných programů ukazují svá data IFC ve **Vlastnostech** jako dříve, bez tohoto pole.
