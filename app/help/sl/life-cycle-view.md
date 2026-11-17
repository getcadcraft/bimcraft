---
title: Oglejte si, kaj se v petdesetih letih obrablja
summary: Okna, vrata, obdelave in streha iz modela, njihova življenjska doba, leta zamenjave ter strošek po letih in njegova sedanja vrednost, ko vpišete strošek na enoto.
keywords: življenjski cikel, življenjskega cikla, življenjska doba, zamenjava, vzdrževanje, strošek, sedanja vrednost, diskontna stopnja, inflacija, 50 let, okna, barva, streha, obdelave, celotna življenjska doba
from: 1b849545
---

Razdelek {{ui:Pogled življenjskega cikla}} v levi plošči navaja, kaj ima model, kar se obrablja, in kdaj se to zamenja v obdobju študije (sprva 50 let). Nič v modelu se ne spremeni.

## Kako ga brati

Vsak del prikazuje količino (izmerjeno iz modela: površina oken, zunanja in notranja vrata, zaključna obdelava zunanjih sten, notranja barva, zaključna obdelava tal in stropa, tlorisna površina strehe, stopnice), **življenjsko dobo v letih** in **strošek na enoto**. Del se zamenja ob koncu svoje življenjske dobe, ob dvakratniku in tako naprej, dokler je to pred koncem študije; tako se 30-letno okno v 50-letni študiji zamenja enkrat, v 30. letu. Življenjske dobe so tipične načrtovalske vrednosti: spremenite jih na svoje izdelke in podnebje. Strošek ni predpostavljen; vpišite ga, da vidite denar po letih, skupni znesek in njegovo sedanjo vrednost. Če želite, dodajte diskontno stopnjo in stopnjo inflacije.

{{ui:Shrani razpored (CSV)}} zapiše komponente in leta. Navedeni so tudi cevi, zračni kanali, ožičenje in oprema (glejte spodaj).

## Cevi, zračni kanali, ožičenje in oprema

- **Cevi in zračni kanali** so metri vsakega načrtovanega poteka. **Oprema** (črpalke, ventilatorji, ventili, terminali, armature, izhodi, stikala, plošče in druge stvari, ki jih sledi zavihek Sredstva) se šteje po vrsti, vsaka vrsta z načrtovalsko življenjsko dobo. Element, čigar lastna *življenjska doba* je nastavljena na zavihku Sredstva, je svoja vrstica s to življenjsko dobo; če ima datum namestitve, se začne s svojo starostjo: črpalka, stara 16 let, z 10-letno življenjsko dobo, je zdaj na vrsti, nato na vsakih deset let.
- **Ožičenje** je **ocena**: razdalja na tlorisu od plošče vzdolž naprav vsakega tokokroga, najprej najbližja, pomnožena z 1.25 zaradi poti. Model ne riše kablov, zato to preverite z lastnimi predizmerami.
- Življenjske dobe so načrtovalske vrednosti za pregled, ne vir.

## Ogljik na zamenjavo

Označite {{ui:Vključi vgrajeni ogljik vsake zamenjave}}. Novo okno, vrata, stopnišče, streha, cev ali kos opreme se šteje po ogljiku, ki ga nosijo elementi modela te vrste (faktorji zavihka Ogljik, na enoto). Del brez elementa ali faktorja, na primer barva, obdelave in ožičenje, pokaže pomišljaj in je naveden. Konec življenjske dobe starega dela in delo zamenjave se ne štejeta.
