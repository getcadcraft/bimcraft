---
title: Späť naprieč aplikáciami v CadCraft Studio
summary: V Studiu BimCraft hlási Studiu každý dokončený krok, takže Studio môže vrátiť späť váš posledný krok v tom okne, v ktorom ste naposledy pracovali.
keywords: späť, studio, naprieč aplikáciami, späť v projekte, história, denník, okno
from: c66dd0c1
---

## Čo to robí

V CadCraft Studio každé okno aplikácie oznámi Studiu, keď je krok dokončený (nakreslená stena, sada stien prijatá zo skenu). Studio uchováva tieto kroky v poradí, v akom ste pracovali, a môže požiadať okno, ktoré vytvorilo najnovší krok, aby ho vrátilo späť pomocou vlastného vrátenia späť tohto okna. Ctrl+Z vnútri BimCraft zostáva vlastné pre BimCraft a je tiež oznámené Studiu.

## Čo treba vedieť

- Studio požiada okno o vrátenie späť iba vtedy, keď je jeho zoznam krokov presne taký, aký ho krok zanechal. Po uložení (ktoré spustí nový zoznam zmien) alebo po prepnutí modelu, ktorý upravujete, BimCraft odpovie, že zoznam sa zmenil, a Studio toto okno preskočí. Nič sa nevynucuje.
- Vrátenie účinkov jednej aplikácie v inej aplikácii ešte nie je hotové.
- Mimo Studia sa nič nemení.
- Položka ponuky Studia, ktorá žiada vrátenie späť, prichádza so zostavou Studia; dovtedy sa kroky hlásia, ale žiadna položka ponuky ich nepoužíva.

## Ďalej

- [Pracovať naživo s ostatnými](topic:work-live)
