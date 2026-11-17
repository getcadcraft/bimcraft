---
title: Kliendipakett, etapiaruanded ja variantide võrdlus
summary: Koosta mudelist kliendipakett või etapiaruanne, võrdle hoitud mahulisi variante pinna ja kulu järgi, vaata korruste pindu, jooniseid koos revisjonidega ja väljaannete ajalugu. Iga arv säilitab elemendid, millest ta tuleb.
keywords: kliendipakett, esitlus, etapiaruanne, aruanne, variantide võrdlus, variandid, võrdle variante, pind ja kulu, kulu variandi kohta, hinda pole, mahuline, korruste pinnad, jooniste loend, väljaannete ajalugu, arvud, seotud arvud
from: f6679bf5
---

## Mida sa teed

Koosta kliendipakett või etapiaruanne mudelist sellisena, nagu ta praegu on, ja võrdle hoitud mahulisi variante kõrvuti pinna ja kulu järgi.

## Sammud

1. Ava vasakpoolsel paneelil **Kliendipakett ja etapiaruanne**.
2. Vali kliendipaketi või etapiaruande kõrval **Ava dokumentides**. Dokument ilmub mudelist Dokumentidesse, kus saad oma teksti muuta.
3. Eelvaates klõpsa arvul, et valida selle taga olevad elemendid.
4. Vali **Koosta pakett**. Salvestatakse üks zip-fail: dokument PDF-ina, pilt 3D-vaatest ja `figures.csv`, mis loetleb iga arvu koos tema elementide GlobalId-dega.

## Väljad

Neid saab kasutada igas dokumendis.

| Väli | Mida see prindib |
|---|---|
| `{{stage}}` | Projekti etapp joonise üksikasjadest. |
| `{{options}}` | Hoitud mahulised variandid kõrvuti: korrused, kõrgus, jalajälg, brutopind, ümbrispind ja kulu. |
| `{{areas}}` | Pind korruse kaupa ruumidest. |
| `{{sheets}}` | Lehed koos revisjoniga, mis neil on, ja ajaga, millal viimati väljastati. |
| `{{issues}}` | Väljaannete ajalugu ja joonise muudatuste logi. |
| `{{changes}}` | Mis on muutunud alates viimasest väljaandest, lehe kaupa. |

## Kuidas variante hinnatakse

Kulu tuleb ainult sinu projekti hinnatabelist (Energia/Kulu, 5D kulu). Midagi ei hinnata sinu eest.

- Hinnarida hindab varianti ainult siis, kui tema klassid nimetavad `IfcBuildingElementProxy`.
- Korruse pinda hindab rida, mille sõnad nimetavad variandi kasutust, näiteks kontor. Ilma selleta kasutatakse rida sõnadega brutopind või hoone maht. Rida m² kohta kasutab brutopinda. Rida m³ kohta kasutab mahtu.
- Ümbrispinda (ümbermõõt korda kõrgus) hindab rida sõnaga ümbrispind või fassaad.
- Variant ilma sobiva reata näitab **Hind puudub**. Kogusumma näidatakse ainult siis, kui igal nõutud osal on hind.

## Hea teada

- Hoia variante ruumiprogrammi mahuliste variantide loendis nupuga **Hoia variandina**. Vaata mahuliste variantide peatükki.
- PDF ei saa elemente valida. BimCraftist väljaspool kannab `figures.csv` iga arvu seost tema elementidega.

## Pole veel valmis

- Lehti ja joonistatud vaateid ei paigutata dokumendi sisse. Pakett sisaldab ainult pilti 3D-vaatest.
