---
title: Příkazový řádek ve stavovém pruhu
summary: V rozvržení s příkazovým řádkem pište kamkoli a písmena se objeví v řádku dole. Řádek zobrazí shody, uchovává historii a nikdy nezakrývá výkres.
keywords: příkazový řádek, psaní kdekoli, zadaný příkaz, stavový pruh, stavový řádek, historie, šipky, enter, mezerník, WALL, DOOR, rozvržení Duncan, rozvržení Rhino, zkratka, klávesy, vyhledávání příkazů
from: d583b52d
---

## Co uděláte

Spouštějte nástroje psaním jejich názvů, aniž byste nejdřív klikali do pole.

## Postup

1. Zvolte rozvržení s příkazovým řádkem: otevřete {{ui:Nastavení}}, zvolte {{ui:Globální}}, pak {{ui:Rozložení}} a vyberte **Duncan** (nebo **Rhino**). Řádek je ve stavovém pruhu u dolního okraje okna.
2. Když je ukazatel kdekoli a žádné pole není v použití, napište `wall`. Písmena se objeví v příkazovém řádku a nad ním seznam odpovídajících příkazů.
3. Stiskněte {{key:Enter}}. Spustí se nástroj Stěna.
4. Klikněte do příkazového řádku (nebo znovu stiskněte klávesu). Když je řádek prázdný, seznam ukazuje příkazy, které jste zadali dříve. {{key:Up}} a {{key:Down}} se pohybují po seznamu; {{key:Enter}} spustí zobrazený příkaz.

## Co můžete napsat

- Název příkazu podle používaného stylu nabídky, pokud ho styl má (`WALL`, `WA`, `DOOR` ve stylu Kreslení).
- Klávesu příkazu jako slovo: `W` a pak {{key:Enter}} nebo {{key:Space}} je Stěna, `D` je Dveře.
- Název příkazu s mezerami nebo bez nich: `split wall`, `wallrectangle`.
- Začátek slova nebo názvu, pokud tak začíná jen jeden příkaz.
- Cokoli jiného otevře vyhledávání příkazů s tím, co jste napsali.

## Dobré vědět

- {{key:Esc}} vyprázdní řádek a vrátí klávesy výkresu.
- V těchto rozvrženích jediné písmeno už samo nespustí nástroj: čeká v řádku na {{key:Enter}} nebo {{key:Space}}. Klávesy s {{key:Ctrl}}, funkční klávesy, {{key:Delete}} a {{key:Esc}} fungují jako dřív. V ostatních rozvrženích se nic nemění.
- Dokud běží nástroj kreslení, číslice zůstávají u nástroje (zadaná délka).
- Psaní v poli, dialogu nebo v Nastavení tam zůstane.
- Historie se ukládá na tomto počítači, 50 příkazů pro každou aplikaci.
