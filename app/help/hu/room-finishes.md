---
title: Helyiségfelületek és felületkimutatások
summary: Adja meg, mivel van burkolva minden helyiség padlója, fala és mennyezete, vegyen fel zónákat, például csempézett falvédőt, és kapjon felületkimutatást helyiség, fal és zóna szerint: területekkel, csempeszámmal a vágásokkal együtt, és alapréteg-térfogatokkal.
keywords: felület, felületek, felületkimutatás, helyiségfelületek, padlóburkolat, falburkolat, mennyezeti burkolat, lábazat, csempe, csempék, vágott csempe, csempeszám, hulladék, alapréteg, aljzatbeton, alátét lemez, vakolat, zóna, falvédő, falsáv, nedves helyiség, belső tér, mennyiségek
from: 8c30498c
---

## Mit fog tenni

Egyszer közölje a BimCraft-tal, mivel burkolják az egyes helyiségeket. A felületkimutatások ezután megadják a területeket, a rendelendő csempéket és az alapréteg térfogatait, és a modellel együtt változnak.

## Lépések

1. Kapcsolja be a {{ui:Rajzolás}} funkciót, nyissa meg a bal oldali panel **Kimutatások** részét, és kattintson a **Helyiségfelületek** elemre.
2. A **Felülettípusok** alatt kattintson a **Felülettípus hozzáadása** gombra. Adjon neki nevet, típust (Csempe, Lemez, Bevonat vagy Tábla) és vastagságot. Csempénél adja meg a csempe hosszát és szélességét, a fugát és a hulladékhányadot százalékban. Ha a felület alatt valami van (aljzatbeton, alátét lemez, vakolatréteg), nevezze meg az **Alapréteg** alatt, és adja meg a vastagságát.
3. A **Helyiségek** alatt válassza ki az egyes helyiségek padló-, fal- és mennyezeti felületét. Ha a helyiségnek van lábazata, írja be a nevét és a magasságát.
4. A **Zónák** alatt kattintson a **Zóna hozzáadása** gombra a helyiség olyan részéhez, amely más felületet kap:
   - a **fal**zóna a padló feletti két magasság közötti sáv (például 0-tól 1200-ig csempézett falvédő, vagy falsáv). Ez a helyiség minden falán megjelenik; vagy jelöljön ki a modellben a helyiség falai közül, és a **Be** gombbal korlátozhatja azokra;
   - a **padló-** vagy **mennyezeti** zóna egy Ön által beírt terület. Ez kivonódik a helyiség saját felületéből.
5. Kattintson a **Mentés** gombra. Ez egyetlen visszavonási lépés. A hosszúságokat a projekt mértékegységeiben adja meg.

## A kimutatások

Négy bejegyzés kerül a Kimutatások listájába:

- **Felületek helyiségenként**: minden helyiség a padló-, fal- és mennyezeti felületével, azok területével, valamint a lábazattal és annak hosszával.
- **Felületek falanként**: a helyiség oldalán lévő falszakaszok, és az a sáv, amelyet egy felület borít, hosszal, bruttó területtel, levonásokkal, nettó területtel, valamint csempéknél egész csempékkel, vágott csempékkel és rendelendő csempékkel.
- **Felületek zónánként**: minden zóna a felületével, nettó területével, csempéivel és alapréteg-térfogatával.
- **Felületmennyiségek**: egy sor felületenként: nettó terület, egész és vágott csempék, rendelendő csempék, az alapréteg és annak térfogata, valamint a felület saját térfogata.

Csoportosítsa, összesítse, mentse és exportálja őket úgy, mint bármely kimutatást: lásd [Kimutatás elrendezése, mentése és exportálása](topic:schedule-layouts). Kattintson egy számra, és jelölje ki, honnan származik: egy fal levonásai az ajtóit és ablakait jelölik ki.

## Hogyan mérjük a felületeket

- **Falak**: a helyiség oldalán lévő minden falszakasz, a helyiség mentén mért hossza szorozva azzal a magassággal, amelyet a felület borít, mínusz minden ajtó és ablak azon része, amely e magasságon belül van. A helyiségnél alacsonyabb falat a saját tetejéig burkoljuk. A projekt mérési módszere dönti el, mely nyílások túl kicsik a levonáshoz ([Kimutatások](topic:plan-schedules-and-pdf)).
- **Padlók és mennyezetek**: a helyiség a falak belső síkjai között, mínusz a benne lévő szigetek.
- **Lábazat**: a helyiség falhossza mínusz az ajtók szélessége.
- **Csempék**: rácsként, a felület egyik sarkától kiindulva, csempék között egy fugával. A teljesen a felületen fekvő csempe egész csempe; a részben rajta lévő csempe (szélen, nyílás körül) vágott csempe. A rendelendő csempék az egész és a vágott csempék összege, plusz a hulladékhányad, felfelé kerekítve. Minden vágott csempét új csempeként számolunk: a levágott darabokat nem használjuk fel újra.
- **Alapréteg-térfogat**: a nettó terület szorozva az alapréteg vastagságával.
- A **≈** jellel jelölt számot a területből számoljuk, nem csempénként kirakva: olyan felületnél, amelyből beírt zóna van kivonva, vagy nagyon nagy felületnél.

## Érdemes tudni

- A felületek az épületfájlban maradnak (a projekt `CadCraft_Finishes` tulajdonságkészletében). Minden olyan helyiség, amelynek van felülete, megkapja a szabványos IFC-tulajdonságkészletet is, a `Pset_SpaceCoveringRequirements`-t, így más programok is olvassák a neveket.
- A csempezés egy sarokból indul. A helyiség közepére igazított kiosztás, a minta (halszálas, téglakötésű) és a levágott darabok újrahasználata nincs kiszámítva.
- A görbe falat és a nem fal határoló helyiséget (helyiségelválasztót) **Egyéb határ** néven, hosszával és nyílások nélkül sorolja fel.
- A korábbi **Felületek** bejegyzés a falak típusainak felületi rétegeit sorolja fel; a **Rétegek: terület és térfogat** minden réteget felsorol minden rétegezett típusnál. Az itt megadott helyiségfelületek ezekre rakódnak a helyiségen.
- Egy asszisztens a `finishes_set` paranccsal is beállíthat felületeket: lásd [Egy AI-asszisztens használata a modelljével](topic:assistants).
