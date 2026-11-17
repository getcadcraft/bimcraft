---
title: Dimenzování potrubí a vzduchovodů, kontrola naplnění kabelů a osvětlení
summary: Kontrolujte dimenze přívodního potrubí a vzduchovodů s tlakovou ztrátou, veďte kabely kabelovými žlaby a trubkami a sledujte jejich naplnění, a počítejte osvětlenost v místnostech ze souborů IES nebo EULUMDAT. Výchozí hodnoty jsou označeny; zadejte hodnoty normy, která platí.
keywords: dimenzování, dimenzování potrubí, dimenzování vzduchovodů, tlaková ztráta, jednotky armatur, odběr, hunter, hazen-williams, rychlost, tření, stejné tření, tlak ventilátoru, klapka, kritická cesta, kabelový žlab, trubka, naplnění, rozpis kabelů, ies, ldt, eulumdat, fotometrie, osvětlenost, lux, rovnoměrnost, výpočet osvětlení, hustota výkonu, mep, výpočty, problémy
from: 9cb90815
---

## Co provedete

Nakreslete potrubí, vzduchovody, kabelové žlaby a trubky jako obvykle, pak otevřete panel **Výpočty**. Každá karta čte model, zobrazí tabulku a vypíše, co je špatně, jako Problémy v panelu ⚠. Když by velikost opravila Problém, **Použít velikosti** změní trasy jedním krokem zpět.

Jsou to pomůcky pro kreslení. Každá výchozí hodnota je na obrazovce označena a žádná z nich není tabulkou předpisu: zadejte čísla z normy, podle níž navrhujete, a výsledek nechte zkontrolovat inženýrem, který za něj ručí.

## Potrubí

1. Zvolte klíč **systému** (studená voda je `cw`, teplá `hw`).
2. Nastavte nejvyšší rychlost a, chcete-li kontrolovat tlak, tlak na zdroji a nejmenší tlak, který armatura potřebuje.
3. Klikněte na {{ui:Kontrolovat}}.

Každé potrubí nese odběr jednotek armatur pod ním. Odběr vychází z křivky jednotek armatur oproti průtoku, jak ji popsal Hunter. **Vestavěná křivka je příklad, ne tabulka předpisu**; Problémy to uvádějí, dokud nezadáte vlastní. Tření je podle Hazen–Williamse, tvarovky mají součinitele ztrát a stoupání stojí 9.8 kPa na metr. Jednotky armatury vycházejí z jejího druhu nebo z čísla, které nastavíte nástrojem asistenta `loads_set`.

## Vzduchovody

Nastavte systém, míru tření (stejné tření) nebo rychlost a případné ztráty chladiče, filtru nebo tlumiče. Koncové prvky berou svůj průtok vzduchu z `loads_set` na difuzoru. Tabulka ukazuje rychlost a tření u každého kusu, **tlak ventilátoru** na kritické cestě a tlak, který musí zachytit klapka každého dalšího koncového prvku. Ztráty tvarovek používají zaokrouhlené výchozí součinitele, ne databázi tvarovek.

## Kabelové žlaby a trubky

Kreslete je nástrojem Potrubí vzduchu: systémy **Kabelový žlab** a **Trubka** se uloží jako nosiče kabelů, takže je ostatní programy načtou jako žlaby a trubky. Na kartě Kabely vložte seznam kabelů (označení, vnější průměr v mm, počet, od, do). `from` a `to` jsou označení zařízení nebo bod `x,y,z` v milimetrech. Kabely sledují nejkratší souvislou trasu žlaby a trubkami; každá trasa ukazuje své naplnění oproti mezím, které zadáte, a rozpis se ukládá jako CSV s délkou, která zahrnuje procentuální rezervu, a s konci.

## Osvětlení

Přiřaďte každému svítidlu jeho soubor IES (LM-63) nebo EULUMDAT nástrojem asistenta `photometry_set`. Zadejte cílové hodnoty, rozestup sítě a výšku pracovní roviny. Výsledkem je pouze **přímá** osvětlenost: žádné vzájemné odrazy a žádné stíny, takže je v místnosti dolní odhad.

## Požární sprinklery

Doplněk **Požární sprinklery** má vlastní kartu; viz jeho nápověda.
