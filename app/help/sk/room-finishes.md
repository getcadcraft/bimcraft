---
title: Povrchové úpravy miestností a tabuľky povrchových úprav
summary: Určte, čím sú obložené podlaha, steny a strop každej miestnosti, pridajte zóny, napríklad obkladaný pás za umývadlom, a získajte tabuľky povrchových úprav podľa miestnosti, steny a zóny s plochami, počtom obkladačiek vrátane rezov a objemami podkladu.
keywords: povrchová úprava, povrchové úpravy, tabuľka povrchových úprav, povrchové úpravy miestností, úprava podlahy, úprava steny, úprava stropu, soklová lišta, obkladačka, obkladačky, rezané obkladačky, počet obkladačiek, odpad, podklad, poter, podkladová doska, omietka, zóna, pás za umývadlom, obkladový pás, mokrý priestor, interiér, výkazy
from: 8c30498c
---

## Čo urobíte

Raz povedzte BimCraft, čím je obložená každá miestnosť. Tabuľky povrchových úprav potom uvádzajú plochy, obkladačky na objednanie a objemy podkladu a menia sa s modelom.

## Postup

1. Zapnite {{ui:Kresliť}}, v ľavom paneli otvorte **Tabuľky** a kliknite na **Povrchové úpravy miestností**.
2. V časti **Typy úprav** kliknite na **Pridať typ úpravy**. Zadajte názov, druh (Obklad, Plech, Náter alebo Doska) a hrúbku. Pri obkladačke zadajte dĺžku a šírku obkladačky, škáru a rezervu na odpad v percentách. Ak je pod úpravou niečo (poter, podkladová doska, vrstva omietky), pomenujte to v časti **Podklad** a zadajte jeho hrúbku.
3. V časti **Miestnosti** zvoľte úpravu podlahy, steny a stropu každej miestnosti. Ak má miestnosť soklovú lištu, zadajte jej názov a výšku.
4. V časti **Zóny** kliknite na **Pridať zónu** pre časť miestnosti, ktorá dostane inú úpravu:
   - zóna **steny** je pás medzi dvoma výškami nad podlahou (obkladaný pás za umývadlom od 0 do 1200, obkladový pás). Je na každej stene miestnosti, alebo vyberte steny tejto miestnosti v modeli a kliknite na tlačidlo **Zapnúť**, aby zostala len na nich;
   - zóna **podlahy** alebo **stropu** je plocha, ktorú zadáte. Odpočíta sa od vlastnej úpravy miestnosti.
5. Kliknite na **Uložiť**. Je to jeden krok v Späť. Dĺžky zadávajte v jednotkách projektu.

## Tabuľky

Do zoznamu Tabuliek pribudnú štyri položky:

- **Povrchové úpravy podľa miestnosti**: každá miestnosť s úpravou podlahy, steny a stropu, ich plochy a soklová lišta s dĺžkou.
- **Povrchové úpravy podľa steny**: každý úsek steny na strane miestnosti a pás, ktorý ho úprava pokrýva, s dĺžkou, hrubou plochou, odpočtami, čistou plochou a pri obkladačkách celými obkladačkami, rezanými obkladačkami a obkladačkami na objednanie.
- **Povrchové úpravy podľa zóny**: každá zóna s jej úpravou, čistou plochou, obkladačkami a objemom podkladu.
- **Množstvá úprav**: jeden riadok na úpravu: čistá plocha, celé a rezané obkladačky, obkladačky na objednanie, podklad a jeho objem a vlastný objem úpravy.

Zoskupenie, súčty, uloženie a export ako pri každej tabuľke: pozrite [Rozloženie, uloženie a export tabuľky](topic:schedule-layouts). Kliknutím na číslo vyberiete, odkiaľ pochádza: odpočty steny vyberú jej dvere a okná.

## Ako sa merajú úpravy

- **Steny**: každý úsek steny na strane miestnosti, jeho dĺžka pozdĺž miestnosti krát výška, ktorú úprava pokrýva, mínus časť každých dverí a okien v tejto výške. Stena nižšia ako miestnosť je upravená po svoju vlastnú hornú hranu. Metóda merania projektu rozhoduje, ktoré otvory sú príliš malé na odpočet ([Tabuľky](topic:plan-schedules-and-pdf)).
- **Podlahy a stropy**: miestnosť vnútri stien, mínus ostrovčeky v nej.
- **Soklová lišta**: dĺžka stien miestnosti mínus šírka jej dverí.
- **Obkladačky**: kladú sa ako mriežka od jedného rohu plochy, s jednou škárou medzi obkladačkami. Obkladačka celá na ploche je celá obkladačka; obkladačka čiastočne na nej (na okraji, okolo otvoru) je rezaná obkladačka. Obkladačky na objednanie sú celé plus rezané, plus rezerva na odpad, zaokrúhlené nahor. Každá rezaná obkladačka sa počíta ako nová: odrezky sa nepoužívajú znova.
- **Objem podkladu**: čistá plocha krát hrúbka podkladu.
- Počet označený **≈** sa vypočíta z plochy namiesto kladenia obkladačku po obkladačke: plocha, z ktorej je odrezaná zadaná zóna, alebo veľmi veľká plocha.

## Dobre vedieť

- Úpravy sa uchovávajú v súbore budovy (sada vlastností `CadCraft_Finishes` na projekte). Každá miestnosť s úpravou dostane aj štandardnú sadu vlastností IFC `Pset_SpaceCoveringRequirements`, aby názvy čítali aj iné programy.
- Kladenie obkladačiek sa začína v rohu. Rozloženie vycentrované na miestnosť, vzor (rybia kosť, tehlová väzba) a opätovné použitie odrezkov sa nepočítajú.
- Zakrivená stena a hranica miestnosti, ktorá nie je stenou (oddeľovač miestností), sa uvádza ako **Iná hranica** s dĺžkou a bez otvorov.
- Položka **Úpravy**, ktorá tu bola predtým, uvádza vrstvy úprav typov stien; **Vrstvy: plocha a objem** uvádza každú vrstvu každého vrstveného typu. Povrchové úpravy miestností sú to, čo sa na miestnosť nanáša navrch.
- Asistent môže úpravy nastaviť za vás príkazom `finishes_set`: pozrite [Nechajte AI asistenta pracovať s vaším modelom](topic:assistants).
