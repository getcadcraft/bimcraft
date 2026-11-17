---
title: Võrgus ja võrguta
summary: Mida BimCraft saidilt laadib, kuidas Salvesta võrguks teeb IFC-mudelid ja DWG-joonised avatavaks ilma ühenduseta ning miks avatud faile kunagi üles ei laadita.
keywords: võrguta, võrgus, internet, ühendus, ilma võrguta, lennurežiim, objektikülastus, salvesta võrguks, valmis võrguta, üleslaadimine, privaatsus, wasm, webassembly, IFC-mootor, dwg, pilv
from: 39e5c7eb
---

BimCraft loeb sinu faile brauseri vahekaardil. Avamine, vaatamine, muutmine ja salvestamine ei saada faile kunagi kuhugi, nii võrgus kui ka võrguta. [Töötamine võrguta](common:offline) selgitab võrguvälja koopiaid kõigis rakendustes; see lehekülg käsitleb seda, mis on BimCraftile eriline.

## Mida BimCraft saidilt laadib

| Osa | Kui laadib ilma võrguvälja koopiata | Suurus |
|---|---|---|
| Rakendus ise koos 3D-vaataja ja IFC-mootori koodiga | Kui avad BimCrafti | Mitu megabaiti |
| IFC-mootori WebAssembly-osa | Esimene IFC-fail, mille avad vahekaardil: „IFC-mootori käivitamine…“ | Umbes 1,6 MB |

DWG- ja DXF-joonised, projekti- ja perekonnafailid ning kaustad ei vaja midagi lisaks: nende lugejad on rakenduse osa.

## Salvesta BimCrafti võrguvälja kasutamiseks

1. Ava BimCraft, kui oled võrgus.
2. Klõpsa ülal rakenduse ribal nuppu {{ui:Salvesta võrguks}}.
3. Jälgi, kuidas nupp loeb: „Salvestan 40 / 212“, näiteks. BimCrafti koopia on umbes 11 MB, sest see sisaldab IFC-mootorit.
4. Oota, kuni ilmub {{ui:Valmis ka võrguta}}.

Kui seal on {{ui:Valmis ka võrguta}}, avanevad IFC-mudelid, DWG- ja DXF-joonised, projektifailid, kaustad ja see abi ühenduseta. Sa ei pea IFC-d ega DWG-d enne avama, et lugejaid „soojendada“.

Uuendamiseks või eemaldamiseks klõpsa {{ui:Valmis ka võrguta}} ja vali {{ui:Salvesta uuesti (võta uusim versioon)}} või {{ui:Eemalda võrguvälise koopia}}.

## Mida nupp ütleb

| Nupp | Tähendab |
|---|---|
| {{ui:Salvesta võrguks}} | Selles brauseris pole veel võrguvälja koopiat. Klõpsa, et salvestada |
| „Salvestan *n* / *m*“ | Salvestamine; hoia vahekaart avatuna, kuni see lõpeb |
| {{ui:Valmis ka võrguta}} | Salvestatud. Hiirega peale minnes näed, millal; klõpsa menüü jaoks |
| {{ui:Salvestamine ebaõnnestus}} | Mõned failid ei laadinud alla. Kontrolli ühendust ja klõpsa, et proovida uuesti. Viimane hea koopia, kui see on olemas, jääb alles |
| {{ui:Võrguta kasutamine pole saadaval}} | See aken ei saa hoida võrguvälja koopiat (privaatne aken või hallatud arvuti). Vt [Töötamine võrguta](common:offline) |

:::offline
Sa oled võrguühenduseta.

- Kui nupp ütleb {{ui:Valmis ka võrguta}}, avaneb iga failitüüp nagu tavaliselt.
- Kui ei ütle, töötab ainult see, mida see vahekaart on juba laadinud: lugeja, mida selles vahekaardis pole käivitatud, ei saa alata ja selle tüübi faili avamine näitab brauseri viga olekuribal. Ära laadi vahekaarti uuesti, kuni oled jälle võrgus.
:::

## Mis ei vaja ühendust

Kui BimCraft on vahekaardil avatud, need töötavad võrguta ka ilma salvestatud koopiata:

- Projekti- ja perekonnafailide lugemine ning kaustade kontrollimine.
- Elementide valimine, omaduste lugemine ja IFC-väärtuste muutmine juba avatud mudelis.
- {{ui:Salvesta IFC-na}} ja {{ui:Laadi CSV alla}}: mõlemad on allalaadimised, mis tehakse vahekaardil.

## Mis pole veel saadaval

- **Pilvesalvestus.** Failid salvestatakse ainult sinu arvutisse.

Vt [Kuhu sinu failid lähevad](common:your-files).
