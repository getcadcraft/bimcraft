---
title: Rámová analýza konštrukcie
summary: Sily, reakcie a priehyby trámov, stĺpov a diagonál modelu pri zaťaženiach a kombináciách, ktoré nastavíte, uložené v IFC. Pomôcka na analýzu, nie kontrola podľa normy.
keywords: analýza, jednotky, stopy a palce, zobrazovacia jednotka, konštrukčná analýza, kontroly návrhu, využitie, valcované, zvarované, AISC 360, EN 1993-1-1, rámová analýza, analytický model, metóda tuhosti, zaťaženie, zaťažovací prípad, kombinácia, stála záťaž, úžitková záťaž, vlastná tiaž, reakcie, ohybový moment, posúvajúca sila, normálová sila, priehyb, tvar deformácie, podpory, kĺbové, vetknuté, uvoľnenie, správa, pdf, csv, craftscript, frame3d, trámy, stĺpy, prvky
from: b93b58c4
---

Karta {{ui:Analýza}} vpravo zisťuje sily v nosníkoch, stĺpoch a diagonálach otvoreného modelu, reakcie v pätách stĺpov a to, ako veľmi sa prvky ohýbajú, pre zaťaženia, ktoré zadáte.

:::warning
Je to **pomôcka na analýzu, nie kontrola podľa normy**. Analýza nepoužíva žiadnu návrhovú normu: neurčuje rozmery prvkov, neoveruje kapacity a nevolí súčinitele zaťaženia. Analytický model, zaťaženia a podpory skontroluje inžinier, ktorý rozhodne, čo čísla znamenajú. Blok {{ui:Kontroly návrhu}} pod ním kontroluje valcované oceľové I-profily podľa AISC 360 alebo EN 1993-1-1; je to pomôcka, kým ju inžinier neprekontroluje: pozri [Kontroly návrhu](topic:frame-analysis#design-checks).
:::

## Spustenie

1. Otvorte model IFC a kartu {{ui:Analýza}}.
2. V zobrazení vyberte jeden alebo viac nosníkov, stĺpov či diagonál, zvoľte {{ui:Stav}}, {{ui:Zaťaženie}} a {{ui:Smer}}, zadajte hodnotu a stlačte {{ui:Pridať zaťaženie}}: kN/m pre zaťaženie rozložené pozdĺž prvku, kN pre bodové zaťaženie.
3. Stlačte {{ui:Spustiť analýzu}}.

Tabuľka uvádza najväčšiu normálovú silu každého prvku, posúvajúce sily, ohybové momenty, krútenie a priehyb; kliknutím na názov prvku ho vyberiete v zobrazení. Nižšie sú reakcie. {{ui:Na modeli}} nakreslí tvar deformácie alebo jeden účinok ako diagram vedľa každého prvku. Výsledky zastarajú, keď sa model zmení: spustite analýzu znova.

Každé zaťaženie a nastavenie je jedna zmena v zozname {{ui:Zmeny}}: {{ui:Späť}} ju vráti a {{ui:Uložiť ako IFC}} ich uchová v súbore (sada vlastností projektu `CadCraft_Analysis`), takže keď sa model tu otvorí nabudúce, jeho zaťaženia tu stále budú.

## Ako vzniká analytický model

- Každý IfcBeam, IfcColumn a IfcMember, ktorého tvar je jedna priamková extrúzia, sa stane prvkom na osi svojho prierezu. Jeho prierezové vlastnosti pochádzajú z profilu: tvary I, U, L a T, obdĺžniky a rúry, kruhy a okrúhle rúry alebo akýkoľvek uzavretý obrys (vtedy je konštanta krútenia odhad, uvedený v správe). Čokoľvek iné sa vynechá a spočíta sa.
- V modeli nosníky končia na líci stĺpa a sú pod podlahou. Každý koniec prvku sa posunie pozdĺž vlastnej priamky na os prvku, do ktorého sa napája, ak je tá os blízko (asi v rozmere prierezov), a tento prvok sa tam rozdelí. Správa uvádza, koľko koncov sa posunulo.
- **Päty stĺpov**, pod ktorými nič nepokračuje, sú podpory: vetknuté (začiatok) alebo kĺbové (držané na mieste a proti krúteniu, voľne sa otáčajú).
- **Konce nosníkov** sú tuhé alebo kĺbové podľa pravidla {{ui:Konce nosníkov bez spoja}}; **diagonály** (IfcMember) sú kĺbovo uložené na oboch koncoch. Vyberte jeden prvok, aby jeho konce alebo päta stĺpa dostali vlastné pravidlo.
- Materiály podľa názvu: betón (E = 30 GPa), drevo (E = 11 GPa), inak oceľ (E = 200 GPa).

Ak sa rám môže pohnúť bez ohýbania čohokoľvek — mechanizmus —, výpočet sa zastaví a uvedie, kde a ktorým smerom.

## Prípady, kombinácie, znamienka a správa

Analýza začína s **Stála** (vlastná tiaž), **Úžitková** a **Stála + úžitková**; pridajte prípady a kombinácie s činiteľmi, ktoré vyžaduje vaša návrhová norma. N > 0 je ťah; My > 0 dáva do ťahu miestnu stranu −z prvku (nosník prehnutý pod gravitáciou má My > 0). {{ui:Správa (PDF)}} a {{ui:Správa (CSV)}} obsahujú predpoklady, prierezy, prípady, reakcie so svojimi súčtami, sily v prvkoch, posuny a obálku. {{ui:Exportovať ako CraftScript}} zapíše rám pre pracovný priestor Script v PartCraft, kde knižničná funkcia `frame3d` ho vyrieši v čitateľnom kóde.

Metóda je priama metóda tuhosti, lineárna a prvého rádu, pokiaľ nezaškrtnete Teória druhého rádu (P-Delta), overená na učebných príkladoch.

**Teória druhého rádu (P-Delta).** Zaškrtnite *Teória druhého rádu (P-Delta)* vedľa Spustiť: každá kombinácia sa vyrieši znova, pričom normálové sily prvkov pôsobia na deformovaný rám (každý prvok je rozrezaný na 4 časti, takže sa počíta aj ohyb prvku medzi jeho koncami), až kým sa normálové sily neustália. Riadok výsledku uvádza počet prechodov a to, o koľko sa zväčšil bočný posun; momenty, priehyby, kontroly návrhu a správa potom používajú tieto výsledky. Nad pružným kritickým zaťažením rámu sa výpočet zastaví a oznámi to. Je pružný s malým natočením, iba ohybový, bez redukcie tuhosti a bez fiktívnych zaťažení (nie samotná metóda priamej analýzy AISC); dosky, steny a tuhé podlahy zostávajú prvého rádu.

**Tlak na podlahu na doskách.** Pre betónové dosky (analýza číta dosku ako doskovú konštrukciu, keď je jej materiál betón) má blok Zaťaženia {{ui:Tlak na každú dosku}}: zadajte kN/m², vyberte prípad vyššie a stlačte {{ui:Pridať na dosky}}. Pôsobí na každú nájdenú dosku, smerom nadol, a je uvedený s odkazom Odstrániť. Je to jeden tlak pre všetky dosky, nie jeden na dosku, a nie je to normové zaťaženie: zadajte hodnotu, ktorú vám dá inžinier.

**Vlastné frekvencie (konečné prvky).** Blok {{ui:Konečné prvky: vlastné frekvencie}} pod výsledkami nájde najnižšie tvary toho istého modelu pomocou výpočtového jadra konečných prvkov: nosníky s uvoľneniami koncov, dosky a steny ako ploché štvoruzlové škrupiny, tuhé podlahy a podpory. Zvoľte počet tvarov (3, 6, 10 alebo 20) a prvok dosky (štvoruzlová škrupina pre hrubé alebo tenké dosky, alebo prvok pre tenké dosky) a stlačte {{ui:Nájsť frekvencie}}. Tabuľka uvádza frekvenciu každého tvaru v Hz, jeho periódu v sekundách a jeho efektívnu modálnu hmotnosť v smeroch X, Y a Z ako podiel hmotnosti, ktorá sa môže pohybovať. {{ui:Zobraziť na modeli}} nakreslí ľubovoľný tvar rovnako ako tvar deformácie. Hmotnosť je hustota materiálu násobená objemom: zaťaženia nepridávajú hmotnosť a materiál bez hustoty nemá žiadnu. Správa (PDF, CSV) nesie túto tabuľku. Výpočet je pružný a len pre malé pohyby a tu sa z normy nevytvára žiadne seizmické ani veterné zaťaženie. Nejde o kontrolu podľa normy; výsledky skontroluje váš inžinier.

**Spektrum odozvy, časový priebeh a pushover.** Pod frekvenciami sú ešte tri bloky, ktoré používajú ten istý model konečných prvkov. Hmotnosť pre všetky je hustota materiálu plus nadol pôsobiace zaťaženia prípadov, ktoré zaškrtnete, každé vynásobené činiteľom, ktorý zadáte (napríklad Stála 1 a Úžitková podiel, ktorý počítate ako hmotnosť).

{{ui:Spektrum odozvy}} určí každý tvar zo spektra, ktoré zadáte (tabuľka periódy a zrýchlenia alebo tvar ASCE 7 z SDS, SD1 a TL; tlačidlo {{ui:Použiť hodnoty z bloku Seizmické}} skopíruje tieto hodnoty z bloku Seizmické), a kombinuje tvary metódou CQC, SRSS, pravidlom desiatich percent alebo absolútnym súčtom, potom spája smery X, Y a Z (100 % + 30 % alebo SRSS). Dáva základnú šmykovú silu, medzipodlažné posuny, sily na koncoch prvkov a tabuľku tvarov, ktorá upozorní, keď použité tvary nesú menej než 90 % hmotnosti. Výsledky môžete škálovať činiteľom alebo na základnú šmykovú silu, ktorú zadáte; blok nikdy nevypočíta túto základnú silu sám. Výsledky nemajú znamienko.

{{ui:Časový priebeh}} spustí zemné zrýchlenie superpozíciou tvarov (presne pre priamky záznamu medzi bodmi) alebo priamou integráciou (Newmarkova priemerná zrýchlenie s Rayleighovým tlmením). Vstupom je umelý sínus alebo impulz (vždy označený ako syntetický), záznam, ktorý vložíte, alebo textový súbor, ktorý otvoríte (čas a zrýchlenie, jedno zrýchlenie na riadok s krokom, alebo súbor v štýle PEER s hlavičkou DT=; v g alebo m/s²). Dáva posun strechy a základnú šmykovú silu v čase, posun každého podlažia a obálku síl na koncoch prvkov. Modely s veľmi dlhým záznamom si ho ponechajú len pre túto reláciu.

{{ui:Pushover}} tlačí strechu do strany v malých krokoch (tvar ako prvý tvar alebo rovnomerný), s plastickými kĺbmi na koncoch prvkov s I-tvarom. Kĺb sa plasticizuje pri plastickom momente, ktorý klesá s rastúcou normálovou silou (vypočítanou z nakresleného tvaru, zaoblenia sa ignorujú); spevnenie je voliteľné, P-delta je voliteľné a kombináciu od gravitácie možno najprv aplikovať. Dáva krivku kapacity (základná šmyková sila voči posunu strechy), prvý kĺb a stav a plastické natočenie každého kĺbu. {{ui:Spustiť nelineárny časový priebeh}} spustí tie isté kĺby pod záznamom bloku Časový priebeh na malých modeloch. Kĺby vznikajú iba na koncoch prvkov (ak má kĺb vzniknúť uprostred rozpätia, dajte tam uzol); prvok uvoľnený na oboch koncoch žiadny nedostane; plastifikácia a vzpernosť diagonál sa nemodelujú; dosky a steny zostávajú pružné; kritériá prijatia sa neuvádzajú. Nejde o kontrolu podľa normy; výsledky skontroluje váš inžinier. Nastavenia sa uložia s modelom a správa nesie tabuľky.

Ešte nie je hotové: vzpernosť, korekcia chýbajúcej hmotnosti pre spektrum odozvy, škálovanie záznamov, kritériá prijatia pre kĺby (dynamická odozva je vyššie), plošné zaťaženia iné než jeden tlak na všetky dosky, excentricity prvkov, diagonály iba v ťahu, steny a dosky v rámi, kontroly návrhu podľa normy pre zvárané tvary a pre prierezy iné než valcované I-profily. Pozri [Ešte nie je hotové](topic:not-built-yet).

## Jednotky

Dĺžky sa riadia jednotkou, ktorú vyberiete na paneli nástrojov ({{ui:Jednotky}}), ako zvyšok BimCraft: polohy zaťažení, ktoré zadáte a vidíte ({{ui:Zdroj}}, {{ui:Na}}, {{ui:Pri}}), body uzlových zaťažení a reakcií, výšky podlaží v {{ui:Seizmické}} a stĺpce priehybu a posunu (stopy a palce zobrazujú tieto malé dĺžky v desatinných palcoch). Jednotku môžete kedykoľvek zmeniť; karta sa prekreslí. Sily zostávajú v kN a kN·m a správa (PDF, CSV) a súbor CraftScript zostávajú v milimetroch s uvedenou jednotkou. Rozmery prierezov, priemery prútov a krytia v bloku {{ui:Betón}} zostávajú v milimetroch, ako sú pomenované.

## Kontroly návrhu

Blok {{ui:Kontroly návrhu}} (rovnaký ako v DetailCraft) berie {{ui:Návrhová norma}}, ASCE 7 + AISC 360 alebo EN 1990 + EN 1993-1-1, a {{ui:Akosť ocele}}. Každému zaťažovaciemu prípadu dajte jeho druh (stála, úžitková, vietor …) a {{ui:Vytvoriť kombinácie}} zapíše kombinácie zaťažení normy z vašich prípadov; analýza ich potom spustí ako ktorúkoľvek inú kombináciu.

{{ui:Skontrolovať prvky}} potom kontroluje každý **valcovaný oceľový I-profil** kontrolami DetailCraft (ťah, tlak so vzperou, ohyb s bočným klopením, šmyk, ohyb s normálovou silou, priehyb; články normy sú v správe) a ukazuje, koľko zo svojej kapacity využíva, sfarbené na modeli. Je to **pomôcka, kým ju inžinier neprekontroluje**.

**Ktoré prvky sa kontrolujú.** Profil IFC nehovorí, či je oceľový I-profil valcovaný alebo zváraný, takže BimCraft ho označí za valcovaný iba vtedy, keď jeho názov profilu (inak názov typu prvku) je rozmer z tabuliek AISC W alebo S alebo z tabuliek EN 10365 IPE, HEA alebo HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **a** výška, šírka, stojina a pásnice v súbore sa zhodujú s týmto rozmerom do 1 %. Každý iný I-profil (nosník z plechov, rozmer pod iným názvom, upravený rozmer) sa berie ako zváraný a vráti sa ako **nekontrolovaný**, rovnako ako rúry, uholníky, U-profily a iné prierezy, štíhle časti a krútenie. Tieto prvky skontrolujte s inžinierom.
