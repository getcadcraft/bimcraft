---
title: Too oma objektid ja perekonnafailid teeki
summary: Loe perekonnafaile (.rfa) ning IFC-, DWG-, DXF-, glTF- või OBJ-faile vahekaardil Teek, paiguta need nagu iga teegi üksus ning hoia neid kaustas Minu objektid, privaatses loendis, mida näed ainult sina.
keywords: rfa, perekond, perekonnad, perekondade teek, oma objektid, minu objektid, privaatsed objektid, privaatne teek, impordi objektid, tootja sisu, bim-objektid, ifc-objekt, gltf, obj, dwg-plokk, hoia, lülita, migreeri
from: 886261f8
---

## Mida sa teed

Too BimCraftisse objektid, mis sul juba on: Revitist pärit perekonnateek, tootja IFC- või DWG-allalaadimine, võrk mõnelt teiselt modelleerijalt. Loed faili vahekaardil {{ui:Teek}}, paigutad objekti oma mudelisse korraliku IFC-elemendina ja kui tahad seda hiljem uuesti, hoiad seda kaustas {{ui:Minu objektid}}.

## Sammud

1. Ava IFC-mudel või alusta uut hoonet.
2. Klõpsa vahekaarti {{ui:Teek}} kõrval, mis asub {{ui:Omadused}} kõrval.
3. Klõpsa {{ui:Failid…}}, seejärel {{ui:Vali fail…}}. Vali üks või mitu faili korraga: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` või `.csv`. Või klõpsa {{ui:Vali kaust…}}, et lugeda terve kaust ja selle sees olevad kaustad (kuni 200 faili korraga).
4. Klõpsa kaarti, et näha, mida loeti: plaanieelvaadet, nime, tootjat ja mudelit, mõõtmeid ja märkmeid.
5. Klõpsa {{ui:Paiguta plaanile}} või {{ui:Paiguta mudelisse}}, et see paigutada.
6. Kui tahad seda uuesti kasutada teistes projektides, klõpsa {{ui:Hoia minu objektides}}. Kui on loetud mitu faili, hoiab {{ui:Hoia kõik minu objektides}} need kõik ühe klõpsuga.
7. Hiljem leiad need, kui klõpsad vahekaardil Teek {{ui:Minu objektid}}. Neid paigutatakse, vahetatakse ja uuendatakse nagu iga teegi üksust.

Faile loetakse selles vahekaardis. Midagi ei laadita üles enne, kui valid {{ui:Hoia minu objektides}}.

## Mida igast failitüübist loetakse

| Fail | Mida saad |
|---|---|
| IFC | Iga elemendi tüüp objektina oma tegeliku 3D-kujuga, IFC-klassi ja omadusehulkadega |
| glTF, GLB, OBJ | Üks objekt oma tegeliku 3D-kujuga võrguna. Määra enne ühikud ja üles-suund. |
| DWG, DXF | Iga plokk objektina oma plaanijoonise ja atribuutidega |
| Perekonnafail (`.rfa`) | Perekonna nimi, kategooria, tootja, mudel, parameetrid ja tüübid. **Mitte selle 3D-kuju:** perekonna laiuse, sügavuse ja kõrguse kast on selle asemel. |
| CSV | Üks objekt rea kohta: nimi, mõõtmed ja andmed, joonistatud kastina |

## Perekonnafailid ja nende 3D-kuju

`.rfa`-faili 3D-kuju on salvestatud dokumenteerimata vormingus, seega BimCraft loeb perekonna andmeid ega oleta selle geomeetriat. Kaart ütleb seda: „Geomeetriat ei loetud sellest perekonnast; kast on selle asemel.“

Et tuua perekond sisse tegeliku kujuga, ekspordi see programmist, mis selle tegi (Revit):

1. Ava perekond või projekt, kuhu see on paigutatud.
2. Vali **Fail > Ekspordi > IFC**. Vaata [millised ekspordiseaded avanevad siin parimalt](topic:rvt-to-ifc).
3. BimCraftis loe `.ifc`-fail sisse nupuga {{ui:Failid…}}. Iga perekonnatüüp tuleb oma objektina koos kuju ja omadusehulkadega.

Paljud tootjad pakuvad perekonnafaili kõrval IFC- või DWG-allalaadimist. Need loetakse otse.

## Perekonnatüübid

Mitme tüübiga perekond tuleb ühe üksusena valikuga {{ui:Variant}}, üks variant tüübi kohta. Iga variant sisaldab tüüpide vahel erinevaid väärtusi ja oma kasti, kui tüübil on laius ja sügavus. Ühe tüübiga perekond on tavaline üksus, mis on täidetud selle tüübi väärtustega.

Mõned perekonnad hoiavad oma tüüpe tüübikataloogis: sama nimega `.txt`-fail perekonnafaili kõrval. Vali mõlemad korraga või vali kaust ja kataloogi read saavad variantideks.

## Perekonna andmed tegelikul kujul

Kui kaust sisaldab perekonnafaili ja sama nimega IFC-, glTF- või OBJ-faili (`Chair.rfa` ja `Chair.ifc`), vali mõlemad korraga või vali kaust. BimCraft teeb ühe üksuse: perekonnafail annab nime, tootja, mudeli, parameetrid ja tüübid ning teine fail annab tegeliku 3D-kuju. Märkmed ütlevad, millisest failist kuju tuli. Üks kuju kasutatakse kõigi tüüpide jaoks.

Kui perekonnafailis on salvestatud pilt, näitavad üksuse detailid seda pilti plaanijoonise all. Pilt kuvatakse ainult seal; seda ei hoita üksusega koos.

## Minu objektid

{{ui:Minu objektid}} on sinu enda privaatne loend teegis. Ainult sina näed, mis selles on: see ei ole avalikus teegis, otsingus ega näidata sinu meeskonnale. See järgib sinu kontot, nii et samad objektid on teises arvutis olemas, kui logid teeki sisse.

- Objekti hoidmiseks pead olema teeki sisse logitud. Vt [logi teeki sisse](topic:library-credits).
- Objekti hoidmine saadab selle ühe objekti sinu kontole. Seni jääb see sinu arvutisse.
- {{ui:Eemalda minu objektidest}} võtab objekti loendist välja. Joonistesse juba paigutatud koopiad jäävad alles.
- Et jagada objekti kõigiga, laadi see hoopis avalikku teeki, valitud litsentsi all.

:::note
Minu objektid on testimisel ja võib olla sinu kontol veel avamata. Kui allikas puudub või seal on „Minu objektid pole selle konto jaoks veel avatud“, saad ikka oma faile lugeda ja paigutada nupuga {{ui:Failid…}}; need salvestatakse sinu mudeli sisse.
:::

## Levinumad vead

- **Oodata perekonna tegelikku kuju `.rfa`-failist.** Loetakse ainult selle andmed. Kuju saamiseks ekspordi IFC.
- **Kaks üksust, kus oodati ühte.** Perekond ja selle kujufail ühenduvad ainult siis, kui nimed ühtivad täpselt, lõpu erinevust välja arvatud, ja nad asuvad samas kaustas.
- **Võrk tuleb tuhat korda liiga suurena või lamades.** Määra {{ui:Faili ühikud}} ja {{ui:Võrgu üles-telg}} jaotises {{ui:Failid…}} enne faili valimist.
- **„Perekonna andmed puuduvad“ failil.** See on projekt (`.rvt` teise lõpuga salvestatud) või perekonnamall, mitte perekond. Vt [Loe projekti- või perekonnafaili](topic:read-rvt-file).
- **Sisu hoidmine, mida ei tohi salvestada.** Mõned tasulised teegid ei luba koopiaid väljaspool oma teenust. Kontrolli tingimusi sisu puhul, mille sa ise ei tehnud.
