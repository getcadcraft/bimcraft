---
title: Paleta symbolov
summary: Nájdite elektrické a inštalatérske symboly podľa názvu alebo obrázka, označte hviezdičkou tie, ktoré používate, a umiestnite ich na pôdorys jedným kliknutím.
keywords: paleta symbolov, tlačidlo panela symbolov, stena nasleduje, symboly, elektrické symboly, inštalatérske symboly, inštalatérsky pôdorys, záchod, splachovací záchod, umývadlo, drez, vaňa, sprcha, podlahová vpusť, čistiaci otvor, vonkajší kohútik, hydrant, ohrievač vody, ventil, hradiaci ventil, studená voda, teplá voda, odpad, odvetranie, štýl čiary, obľúbené, hľadanie
from: 67f20bc0
---

## Čo urobíte

Otvorte jeden panel, ktorý vypisuje elektrické symboly a symboly inštalatérskeho pôdorysu s ich obrázkami a názvami, nájdite ten, ktorý chcete, a umiestnite ho na pôdorys. Nič tu nevyžaduje internet: symboly sú súčasťou aplikácie.

## Otvorenie a umiestnenie symbolu

1. Otvorte model a otvorte {{ui:Zostava}} › {{ui:Paleta symbolov}} (napísaný príkaz: SYMBOLS). To isté tlačidlo je v ponuke Nástroje na paneli {{ui:Kresliť}} a ako **Symboly** v skupine {{ui:Knižnica}} na paneli nástrojov.
2. Vyberte sadu: **Elektrické** alebo **Inštalatérske**, alebo **Všetky sady**. Do vyhľadávacieho poľa píšte, aby ste zúžili zoznam. Hľadať môžete podľa názvu alebo skratky (WC, CW, HB).
3. Kliknite na symbol. Pôdorys je pripravený na jeho umiestnenie.
   - **Elektrický** symbol spustí elektrický nástroj s vybraným zariadením, takže platí všetko z [Elektrický pôdorys](topic:electrical-plan): kliknite na pôdorys, jeden krok späť.
   - **Inštalatérsky** symbol spustí nástroj symbolov pôdorysu. Kliknite na pôdorys. Zariadenie na stene (záchod, umývadlo, vaňa, drez, vonkajší kohútik) sa prichytí k najbližšej ploche steny chrbtom k stene; odtoky, ventily, ohrievač vody a štýly čiar idú tam, kam kliknete.
4. Stlačte {{key:R}}, aby ste symbol otočili o 90 stupňov ({{key:Shift}}+{{key:R}} ho otočí opačným smerom), alebo zadajte uhol do poľa **Otočenie** na paneli možností. Stlačením {{key:Esc}} ukončíte.

Zariadenie alebo vonkajší kohútik, ktorý sa prichytil k ploche steny, si zapamätá túto stenu: keď sa stena pohne, symbol sa pohne s ňou (rovnaká plocha, rovnaká vzdialenosť pozdĺž steny) v tom istom kroku späť. Ak stenu zmažete, symbol zostane na mieste a Problémy vypíšu "stratil stenu"; presuňte ho alebo ho zmažte. Symboly umiestnené mimo stien nie sú na nič viazané.

Každý symbol, ktorý umiestnite, je jeden krok späť. Umiestnený symbol je anotácia pôdorysu v súbore IFC s jeho značkou (WC1, WC2, ...). Vyberte ho, ak chcete zmeniť jeho značku alebo otočenie vo **Vlastnostiach**, alebo stlačte {{key:Delete}}.

## Čo obsahuje inštalatérska sada

Armatúry (splachovací záchod, pisoár, umývadlo, vaňa, sprcha, kuchynský drez, jednoduchý drez), podlahová vpusť, podlahové a stenové čistiace otvory, vonkajší kohútik, nástenný hydrant, ohrievač vody, ventily (hradiaci, regulačný, guľový, spätný, klapkový, redukčný) a štýly čiar s ich skratkami: studená voda (CW), teplá voda (HW), vratná teplá voda (HWR), odpad (W), odvetranie (V), dažďová kanalizácia (SD) a plyn (G). Výkresy sa škálujú spolu s pôdorysom, takže si na vytlačenom liste zachovajú veľkosť. Štýl čiary je krátky úsek, ktorý ukazuje štýl na pôdoryse; skutočné trasy potrubí kreslite nástrojmi potrubí.

:::note
Ide o bežné konvencie inštalatérskeho pôdorysu, nakreslené nami; nie sú certifikované podľa ISO 4067-1 ani ASME Y32.4. Porovnali sa s verejne dostupnými legendami výkresov a školiacimi príručkami (zoznam je v poznámke o zdrojoch sady, ktorá uvádza, kde sa zhodujeme a kde sa líšime), nie sú skopírované z nijakého produktu a možno ich používať bezplatne (Apache-2.0). Sady výkresov sa líšia, preto skontrolujte legendu vášho projektu. Sú to symboly pôdorysu, nie inštalatérsky návrh: neurčujú veľkosti potrubí ani nekontrolujú predpisy.
:::

## Obľúbené a klávesnica

- Kliknite na hviezdičku pri symbole (alebo stlačte {{key:F}} na ňom), aby ste si ho ponechali ako obľúbený. Obľúbené sa zobrazujú ako prvé a zostávajú v tomto prehliadači. **Len obľúbené** zobrazí iba ich.
- {{key:Down}} z vyhľadávacieho poľa presunie do symbolov; klávesy so šípkami, {{key:Home}} a {{key:End}} sa pohybujú medzi nimi; {{key:Enter}} vyberie zamerané; {{key:Esc}} zatvorí paletu.
- Na telefóne je paleta listom v dolnej časti obrazovky; keď vyberiete symbol, ustúpi, aby ste videli pôdorys. Otvorte ju znova z ponuky Zostava alebo tlačidlom **Paleta** na paneli možností.

:::tip
Ak súbor používa sadu symbolov, ktorú táto verzia nemá, pôdorys na mieste symbolu zobrazí rámček a Problémy ho vypíšu.
:::

## Prepojenie umiestneného prvku so symbolom

Svetelné teleso z knižnice je 3D prvok, ale elektrický návrh ho zobrazuje ako svoj symbol. Umiestnite ho **raz** a prepojte ho:

1. Vyberte Zostava › **Prepojenie so symbolom** (alebo napíšte SYMBOLLINK). V ľavom paneli sa otvorí sekcia Prepojenie so symbolom.
2. Vyberte umiestnené prvky na pôdoryse alebo v 3D. Sekcia uvádza, koľko je vybraných a s čím sú prepojené.
3. Vyberte **Symbol** (z ktorejkoľvek sady symbolov: Elektrické, Inštalatérske) a zvoľte **Prepojiť**.

Prvok zostáva jedným prvkom a každá tabuľka ho počíta raz:

- **3D** vždy zobrazuje jeho teleso.
- **Pôdorys** zobrazuje jeho pôdorysný tvar ako predtým.
- Pôdorys, ktorého **Tento pohľad zobrazuje prepojené prvky ako** je nastavený na **Ich symbol (rozvodový návrh)**, zobrazuje na ich mieste symbol. Kliknutie na symbol vyberie prvok. Voľba sa uchováva pre ten pohľad (pôdorys úrovne, jej strop alebo detail) v súbore.

**Otočiť symbol o 90°** otočí symbol voči jeho prvku. **Odstrániť prepojenie** zruší prepojenie; prvok zostane. Tabuľka **Prepojené symboly** vypíše každý prepojený prvok raz s jeho úrovňou a miestnosťou, v ktorej stojí.

Ešte nie je hotové: voľba pohľadu na liste je voľbou pôdorysu úrovne, ktorý zobrazuje; zariadenia umiestnené elektrickým nástrojom sú symboly v každom pôdoryse ako predtým.
