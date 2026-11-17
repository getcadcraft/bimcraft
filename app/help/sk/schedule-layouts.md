---
title: Rozloženie, uloženie a export tabuľky
summary: Zoskupte tabuľku, pridajte jej medzisúčty a súčty, pridajte stĺpec čítaný z vlastnosti, uložte ju ako nastavenie v súbore a exportujte ako zošit tabuľkového procesora (.xlsx), ako text na prilepenie do online tabuľky alebo ako CSV. Kancelárska norma doplní to, čo tabuľka neuvádza.
keywords: rozloženie tabuľky, zoskupiť podľa, medzisúčet, súčet, nadpisy, kancelárska norma, predvolené pravidlá, nastavenie, tabuľka dverí podľa podlažia, požiarna odolnosť, kovanie, xlsx, zošit, online tabuľka, prilepiť, csv, export, tabuľkový procesor, prvky, výber z tabuľky, číslo
from: 95dfd801
---

## Čo urobíte

Obyčajnú tabuľku premeníte na tú, ktorú vaša kancelária vydáva: zoskupenú podľa podlažia, typu alebo miestnosti, s medzisúčtami a súčtom, so stĺpcami, ktoré potrebujete, pod vlastným názvom. Potom ju pošlete do tabuľkového procesora. Každý riadok a každé číslo stále vie, z ktorých prvkov pochádza.

## Postup

1. Zapnite {{ui:Kresliť}} a v ľavom paneli otvorte **Tabuľky**. Vyberte tabuľku, napríklad **Dvere**.
2. Nad tabuľkou zvoľte **Zoskupiť podľa** (stĺpec tabuľky, napríklad Podlažie alebo Typ, alebo **Bez zoskupenia**) a **Súčty** (**Bez súčtov**, **Jeden súčet** alebo **Medzisúčty a celkový súčet**). **Podľa nastavenia** nechá voľbu na uložené nastavenie alebo na kancelársku normu.
3. Ak chcete pridať stĺpec, ktorý sa číta z prvkov, zadajte pod tabuľku názov vlastnosti alebo značky (napríklad `FireRating`, `Pset_DoorCommon.FireRating` alebo názov značky, napríklad `Ironmongery`) a kliknite na **Pridať stĺpec**. BimCraft číta najprv sady vlastností samotného prvku, potom jeho typu. Keď prvok ešte nemá hodnotu, povie to; stĺpec sa vyplní sám, akonáhle sa hodnota nastaví.
4. Zadajte názov (napríklad "Tabuľka dverí podľa podlažia") a kliknite na **Uložiť ako nastavenie**. Nastavenie sa uloží v súbore budovy a pridá sa do zoznamu Tabuliek pod svojím názvom. Sleduje každú zmenu modelu. **Odstrániť toto nastavenie** ho zruší. Obidve sú jeden krok v Späť.

## Kliknutím na číslo vyberiete, odkiaľ pochádza

Kliknite na ľubovoľný riadok alebo na ľubovoľné jedno číslo a vyberte prvky za ním v pôdoryse aj v 3D:

- riadok vyberie prvky tohto riadka;
- medzisúčet alebo súčet vyberie všetko, čo sčítava, a nadpis skupiny vyberie svoju skupinu;
- číslo, ktoré má vlastné prvky, vyberie tie: **Odpočty** typu steny vyberú jej dvere a okná, plocha steny miestnosti jej steny.

Rovnaké platí pre dokument vytvorený z modelu: v náhľade kliknite na číslo tabuľky.

## Export

- **Stiahnuť Excel** uloží zošit .xlsx. Dĺžky, plochy, objemy a počty sú skutočné čísla v jednotke, ktorú stĺpec zobrazuje (stopy a palce zostávajú text). Druhý hárok, **Prvky**, uvádza pre každý riadok GlobalId prvkov, z ktorých pochádza.
- **Kopírovať pre Google Sheets** dá tabuľku do schránky ako text oddelený tabulátormi. V Google Sheet kliknite na bunku A1 a prilepte. **Otvoriť nový Google Sheet** otvorí `sheets.new`, Googleovu vlastnú adresu pre prázdnu tabuľku, vo vašom vlastnom účte Google. BimCraft sa do Google neprihlasuje a nič tam neposiela: prilepenie je na vás.
- **Stiahnuť CSV** uloží tabuľku tak, ako je rozložená na obrazovke.

## Kancelárska norma

Kancelária môže raz povedať, ako sú jej tabuľky rozložené. Zapnite doplnok **Predvolené pravidlá** ([Predvolené pravidlá](topic:default-policies)) a nastavte v **Nastavenia › Globálne › Predvolené pravidlá › Rozloženie tabuliek (kancelárska norma)**:

| Pravidlo | Čo robí |
|---|---|
| Zoskupovať tabuľky podľa | Podlažie, Typ, Miestnosť alebo bez zoskupenia, pre každú tabuľku, ktorá má taký stĺpec |
| Súčty v tabuľkách | Žiadne súčty, jeden súčet na konci, alebo medzisúčet pod každou skupinou a celkový súčet |
| Názov tabuľky | Vzor, napríklad `{project}: {schedule}` |
| Nadpisy stĺpcov | Ako je napísané, VEĽKÝMI PÍSMENAMI alebo S veľkými začiatočnými písmenami |

Norma platí pre každú tabuľku, bez ohľadu na to, kto ju nastavil: obyčajné tabuľky v paneli, uložené nastavenie, tabuľku, ktorú nastaví asistent, exporty a tabuľky v dokumente. Nastavenie, ktoré uvádza vlastné zoskupenie, súčty alebo názov, si ich ponechá; norma doplní zvyšok. Panel uvádza, ktoré časti nastavila kancelárska norma. Pravidlá sa prenášajú v súbore Predvolené pravidlá spolu s ostatnými.

## Dobre vedieť

- Nastavenie uvádza svoju zdrojovú tabuľku a svoje stĺpce; čísla neobsahuje. Čísla sa čítajú z modelu zakaždým.
- Zoznamy, ktoré nie sú riadkami prvkov (zostavy stien a legenda materiálov), tu nemajú rozloženie ani export.
- Asistent to všetko urobí za vás: pozrite [Nechajte AI asistenta pracovať s vaším modelom](topic:assistants).
