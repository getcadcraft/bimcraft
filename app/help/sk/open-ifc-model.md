---
title: Otvorenie modelu IFC a rozhliadnutie sa v 3D
summary: Otvorte súbor IFC, otáčajte, posúvajte a približujte a použite Prispôsobiť, Zhora, Spredu a Bok na orientáciu.
keywords: ifc, 3d, otáčanie, posun, zväčšenie, prispôsobiť, pohľad zhora, pohľad spredu, pohľad zboku, navigácia, viewcube, kamera
from: 68b460dd
---

## Čo urobíte

Otvorte model IFC, pohybujte sa v ňom v 3D a prejdite na štandardné pohľady. Asi päť minút.

Potrebujete súbor `.ifc`. Väčšina programov BIM ho exportuje; v Revit je to **File > Export > IFC**. Pozri [Získanie projektového súboru v 3D cez IFC](topic:rvt-to-ifc).

## Postup

1. Kliknite na {{ui:Vybrať súbor}} (alebo na oblasť na pretiahnutie vľavo hore).
2. Vyberte svoj súbor `.ifc` a potvrďte.
3. Počkajte, kým sa dokončí stavový riadok. Pri prvom otvorení zobrazí "Spúšťa sa IFC engine…", potom "Číta sa model…" a "Budovanie geometrie: … z … prvkov".
4. Pozrite sa na model: otvorí sa v pohľade na tri štvrtiny, prispôsobenom na obrazovku.
5. Kliknite na {{ui:Zhora}} na paneli nástrojov nad modelom a pozrite sa kolmo nadol.
6. Kliknite na {{ui:Spredu}}, aby ste sa pozreli spredu, a potom na {{ui:Bok}}, aby ste sa pozreli zboku.
7. Kliknite na {{ui:Prispôsobiť}} alebo stlačte {{key:F}}, aby ste sa vrátili k pohľadu na tri štvrtiny na celý model.

## Čo by ste mali vidieť

- Model v strede s tenkými tmavými hranami pre vzhľad podobný výkresu.
- Panel {{ui:Súbor}} vľavo: názov súboru, veľkosť, schému IFC (napríklad IFC2X3 alebo IFC4), názov projektu, fázu, program, z ktorého bol exportovaný, autora, dátum exportu a počty prvkov a trojuholníkov.
- Zoznamy {{ui:Podlažia}} a {{ui:Prvky}} pod ním.
- Stavový riadok: "Otvorené *názov súboru*: *n* prvkov za *s* s".

## Pohyb v priestore

:::mouse
| Čo | Postup |
|---|---|
| Otáčanie | Ťahajte ľavým tlačidlom |
| Posun | Ťahajte pravým tlačidlom alebo podržte {{key:Shift}} (alebo {{key:Mod}}) a ťahajte ľavým tlačidlom |
| Zväčšenie (zoom) | Otáčajte koliesko myši, alebo ťahajte stredným tlačidlom |
| Zobraziť všetko | Stlačte {{key:F}} alebo kliknite na {{ui:Prispôsobiť}} |
:::

:::mac mouse
Na touchpade: ťahajte jedným prstom pri stlačení na otáčanie; podržte {{key:Shift}} alebo {{key:Mod}} a ťahajte na posun; posúvajte dvoma prstami alebo štipnite na zväčšenie. Kliknutie dvoma prstami je pravé tlačidlo a môžete ním ťahať na posun, ale {{key:Shift}} a ťahanie je jednoduchšie.
:::

:::touch
| Čo | Postup |
|---|---|
| Otáčanie | Ťahajte jedným prstom |
| Zväčšenie (zoom) | Štipnite dvoma prstami |
| Posun | Pohybujte dvoma prstami spolu |
| Zobraziť všetko | Ťuknite na {{ui:Prispôsobiť}} |
:::

Otáčanie sa vždy točí okolo bodu v strede modelu. Posun ten bod premiestňuje, takže po dlhom posune môže otáčanie pôsobiť mimo stredu: kliknite na {{ui:Prispôsobiť}}, aby ste ho obnovili.

## Tieňovaný, s hranami alebo drôtený

Tri malé tlačidlá tesne nad kockou pohľadu určujú, ako sa model kreslí: {{ui:Tieňovaný}}, {{ui:Tieňovaný s hranami}} (predvolené) a {{ui:Drôtený}}. Sú to aj príkazy (Pohľad v ponukách a v zozname Prispôsobiť), takže môžu mať vlastné klávesy. {{ui:Pôdorys}}, {{ui:Rozdeliť}} a {{ui:3D}} sú v riadku {{ui:Pohľad}} na paneli nástrojov.

## Časté chyby

- **Očakávanie pomenovaných pohľadov.** BimCraft má štyri pevné pohľady ({{ui:Prispôsobiť}}, {{ui:Zhora}}, {{ui:Spredu}}, {{ui:Bok}}), kocku pohľadu v pravom dolnom rohu a voľné otáčanie. Pohľady neukladá.
- **Hľadanie pôdorysov a rezov.** V tejto zostave nie sú 2D pôdorysy ani rezné boxy. Model rozrežte jednou rovinou {{ui:Rez}} ([Rez modelu IFC rovinou rezu](topic:section-plane)) alebo vypnite podlažia: [Zobrazenie a skrytie podlaží, priestorov a hrán](topic:storeys-and-spaces).
- **Otvorenie projektového súboru a očakávanie 3D.** Projektový súbor sa otvorí ako karta súboru. Najprv exportujte IFC.
- **Otvorenie `.ifczip`.** Rozbaľte ho alebo exportujte jednoduchý `.ifc`.
- **Veľmi veľký model spomalí kartu alebo ju zhodí.** Pozri [Prehliadače, zariadenia a pamäť](topic:platforms).

## Ďalej

[Vyberte prvok a prečítajte si jeho vlastnosti](topic:inspect-element).
