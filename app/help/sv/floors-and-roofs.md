---
title: Rum, golv, innertak och tak
summary: Rum uppstår när väggarna sluter dem; ge ett rum eller hela byggnaden ett golv och ett innertak, och lägg ett valmat eller sadeltak på väggarna. Allt följer med när väggarna flyttas.
keywords: rum, utrymme, yta, area, omkrets, golv, bjälklag, undergolv, innertak, tak, valmat tak, sadeltak, taklutning, utsprång, takfot, nock, ränna, 6/12
from: 1fb1813c
---

## Vad du gör

Slutför byggnadens skal. Rum skapas av sig själva från väggarna; golv, innertak och taket tar ett klick vardera. Eftersom de hämtas från väggarna följer de med när väggarna flyttas.

## Rum

Varje utrymme som omslutits av ritade väggar är ett rum. Det visas så snart den sista väggen sluter det, med ett nummer (101, 102 … på första våningsplanet, 201 … på nästa) och ett namn (**Rum 1**, **Rum 2** …), och dess area visas mitt i rummet i planen.

- Med {{ui:Markera}} på klickar du inuti ett rum för att markera det. Under **Egenskaper** ändrar du dess **Namn** (till exempel `Kök`) och **Nummer**; dess area och omkrets visas.
- Tar du bort en vägg mellan två rum blir de ett; ritar du en vägg över ett rum blir det två. Ett rum behåller sitt namn och nummer när väggarna runt om flyttas.
- Ett rum kan inte tas bort på egen hand: det är det utrymme väggarna bildar.

Areor mäts innanför väggarnas ytor. Rum sparas som IFC-utrymmen med sin golvarea, omkrets, höjd och volym, så att förteckningarna läser dem (se [Lägg ihop mängder, lista element och förteckna utrymmen](topic:quantity-totals)).

## Golv

1. Klicka på {{ui:Golv}}.
2. Välj **Det här rummet** eller **Hela byggnaden**, **Slag** (trägolv eller betongbjälklag) och tjocklek.
3. Peka inuti ett rum (eller var som helst inuti byggnaden). Det som golvet skulle täcka markeras med sin area.
4. Klicka. Golvets översida är nivåns golv; det går ner med sin tjocklek. Ett golv för hela byggnaden når till väggarnas yttre ytor.

## Innertak

1. Klicka på {{ui:Innertak}}.
2. Välj **Det här rummet** eller **Hela byggnaden**, och dess **Höjd** över golvet.
3. Peka inuti och klicka.
4. För att se det underifrån, med dess rutnät och ljusen på det, byt planen till dess takplan: se [Vyer, vyintervall och egna blad](topic:views-and-sheets).

## Ett tak

1. Klicka på {{ui:Tak}} på den nivå vars väggar bär taket.
2. Skriv **Taklutning** som stigning per 12 (`6/12`) eller i grader (`30`), och **Utsprång**.
3. Välj **Ändar**: **Valmat tak** (alla sidor lutar), **Gavlar på de korta sidorna** eller **Gavlar på de långa sidorna** (en byggnad med fyra sidor), eller **Pulpettak**.
4. Peka inuti byggnaden: takfoten och nocken visas i planen. Klicka.

Taket sitter ovanpå väggarna, på nivån över dem, och dess undersida möter väggarnas yttre yta. Gavelspetsar fylls med en gavelvägg lika tjock som väggen under. En byggnad i L-, T- eller U-form får ett valmat tak vars vingar möts i rännor.

## Ändra dem

Markera ett golv, innertak eller tak (i 3D-vyn, i modellträdet, eller ett tak genom att klicka inuti dess kontur på nivån ovanför) och ändra det under **Egenskaper**: ett golvs slag, tjocklek och hur högt dess översida ligger över nivån; ett innertaks höjd, tjocklek och **Mönster** (rutnätet som en takplan ritar på det: inget, 600 × 600, 600 × 1200, 2' × 2' eller 2' × 4'); ett taks taklutning, utsprång, ändar och tjocklek. Varje ändring är ett ångra-steg.

## Ge ett golv, innertak eller tak en typ med lager

Ett golv, ett innertak och ett tak kan få en **typ**, precis som en vägg: en namngiven uppbyggnad av lager, där varje lager har sitt material och sin verkliga tjocklek.

- **När du placerar det.** Verktygen Golv, Innertak, Tak och Rita golv har en lista **Typ** på sin rad. **Ingen typ** placerar det som förut, med sin egen tjocklek. En typ placerar det lika tjockt som typens lager tillsammans.
- **Senare.** Markera golvet, innertaket eller taket och välj **Typ** under Egenskaper. Elementet förblir samma element: dess plats, rum och data behålls och inget ritas om. Endast dess typ, tjocklek och material ändras. Så blir ett element från skissstadiet ett utvecklat: byt dess generiska typ mot en riktig.
- **Redigera typen…** öppnar typredigeraren för den typen: lager från **överst** och nedåt, kärnan, varje lagers funktion och typens LOD-märkning. Att spara ändrar alla element av typen i ett steg, och ett Ångra tar tillbaka det. Ändrar du en startertyp sparas en kopia som din egen typ.
- Så länge ett element har en typ kan dess **Tjocklek** inte skrivas in, eftersom den är typens. Välj en annan typ, eller **Ingen typ**, för att ändra den.

Startertyperna är en **generisk** typ för var och en (ett lager av det generiska materialet, märkt LOD 200) och två lagrade typer (märkta LOD 300): ett trädbjälklag och ett betonggolv med avjämning; ett trätak och ett platt betongtak; ett innertak av gipsskivor och ett undertak av plattor. De är startvärden, inte testade konstruktioner: kontrollera lagren innan du litar på dem.

Förteckningen **Lager: area och volym** listar varje lager för varje typ i bruk; se [Förteckningar, mått och PDF](topic:plan-schedules-and-pdf). Golv-, tak- och innertakstyper följer med mellan projekt i ett typpaket eller som ett biblioteksobjekt; se [Typpaket](topic:type-packs).

## Bra att veta

- Att flytta, lägga till eller ta bort väggar gör om rummen, golven, innertaken och taket över dem.
- Ett tak passar valfri kontur. För att ge varje vägg sin egen taklutning, gavel eller pulpettak, en höjd takplatta, takbräda och soffit, eller för att rita ett enskilt takplan, se [Tak: en taklutning för varje vägg, gavlar, pulpettak och takplan](topic:roofs).
- {{key:Delete}} tar bort ett markerat golv, innertak eller tak.
