---
title: Základy pod stenami
summary: Jedným kliknutím dajte budove dosku na terene, podzákladové múry s doskou, podpodlažný priestor alebo suterén; základové pätky sa určujú podľa stien a počtu podlaží a základ sa prispôsobí, keď sa steny posunú.
keywords: základ, základová pätka, doska na terene, zosilnený okraj, monolitická doska, podzákladový múr, podpodlažie, podpodlažný priestor, suterén, múr suterénu, premŕzanie, betón, šírka pätky
from: c0e20172
---

## Čo urobíte

Dajte budove základ, ktorý zodpovedá jej stenám. BimCraft sleduje vonkajšiu stranu stien, určuje rozmery pätiek podľa typu steny a počtu podlaží, ktoré na nich stoja, a pri každej zmene stien základ vytvorí znova.

## Umiestnenie základu

1. Na podlaží, ktorého steny na ňom stoja (zvyčajne na prvom), otvorte {{ui:Zostava}} a vyberte {{ui:Základy}}.
2. Vyberte druh:
   - **Doska na terene**: 4" betónová doska, ktorej horná hrana je podlaha, so zosilneným okrajom pod stenami.
   - **Podzákladové múry a doska**: múry základu až po podlahu na pätkách, s doskou vnútri.
   - **Podpodlažie**: múry základu, ktoré končia pod konštrukciou podlahy, na pätkách, bez dosky.
   - **Suterén**: múry základu na celú výšku na pätkách, so suterénnou doskou pod konštrukciou podlahy.
3. Ukážte vnútri budovy: pätky sa zobrazia prerušovane s ich rozmermi. Kliknite.

Kliknutie na budovu, ktorá už má základ, ho vyberie, takže ho môžete zmeniť namiesto pridania druhého.

## Zmena

Vyberte základ (kliknite vnútri budovy s {{ui:Základy}} alebo kliknite na ktorúkoľvek jeho časť v 3D zobrazení či v strome modelu) a zmeňte ho vo **Vlastnostiach**: druh, šírku a hĺbku pätky, to, ako hlboko je spodok pätky, hrúbku steny, ako ďaleko pod podlahou múry končia, výšku suterénu a hrúbku dosky. Každá zmena je jeden krok späť.

Veľkosti označené **auto** pochádzajú zo stien: pätky široké 12", 15" alebo 23" pre jedno, dve alebo tri podlažia na doske alebo podzákladových múroch; 18", 22" alebo 27" nad podpodlažím alebo suterénom; a o 4" širšie pod murovanými alebo betónovými stenami. Zadajte veľkosť, ak chcete vlastnú; zadajte `0`, aby sa vrátila na auto.

:::warning
Automatické veľkosti sú označené predvolené hodnoty pre typické ľahké rodinné domy, nie výpočet. Projektant alebo inžinier skontroluje pätky, hĺbky a steny vzhľadom na pôdu, hĺbku premŕzania a zaťaženia.
:::

## Čo sa ukladá

Základ sa uloží ako zostava prvkov IFC („Základy“) zložená z pätky (alebo zosilneného okraja dosky), múru základu a dosky podľa toho, čo jeho druh vyžaduje, všetko z betónu, každé s množstvami: dĺžkami, šírkami, výškami, plochami a objemami, pripravené na výkazy výmer.

## Dobré vedieť

- Posunutie, pridanie alebo zmazanie stien vytvorí základ pod nimi znova; nakreslenie stien na podlaží nad ním rozšíri pätky dole pre ďalšie podlažie.
- {{key:Delete}} odstráni vybraný základ so všetkými jeho časťami.
- Keď je terén lokality v modeli (pozri [Terén lokality, stavebná plocha a spevnené plochy](topic:terrain)), podzákladové múry a pätky podpodlažia sa s ním zlievajú po krokoch 8".
- Pätky pod vnútornými stenami ešte nie sú hotové.
