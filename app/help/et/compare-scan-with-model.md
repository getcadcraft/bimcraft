---
title: Skannimise võrdlus mudeli ja 4D-graafikuga
summary: Hinda iga mudeli elementi avatud punktipilve järgi (ehitatud, osaliselt, puudub, ei jõutud), vaata ehitatuse protsenti, värvi mudel selle järgi ja kui 4D-graafik on laaditud, loetle, mis on 4D-päeval graafikust maas või ees.
keywords: skannimine, punktipilv, edenemine, täitumise protsent, ehitatud, puudub, graafikust maas, graafikust ees, 4D, objekti edenemine, kõrvalekalle, tegelikult ehitatud, laserskannimine, droon, võrdlus
from: 6fdc9003
---

Ava IFC, ava punktipilv selle kõrvale (vaata [Punktipilved](topic:point-clouds)) ja aseta see mudelile. Jaotis {{ui:Võrdle skannimist mudeliga}} ilmub paremasse paneeli, kui pilv on avatud.

## Mida see teeb

Vajuta {{ui:Võrdle}}. Iga mudeli element hinnatakse oma pinna järgi, sest just seda skanner näeb. Tema kasti kuus tahku jagatakse umbes 20 cm lahtriteks; lahter loetakse, kui skannipunkt jääb tahust sinu {{ui:Taluvus}} piiresse (algselt 50 mm). Loetakse parim suur tahk, nii et ühelt poolt skannitud sein ei kaota punkte teise poole pärast.

- **Ehitatud**: vähemalt 40 % pinnast on nähtav.
- **Osaliselt**: 10 % kuni 40 %.
- **Puudub**: vähem kui see, kuid skanner jõuab elemendini (punktid 1,5 m raadiuses).
- **Ei jõutud**: skanner pole sinna kunagi jõudnud, seega sellest ei öelda midagi.

Ehitatud ja osaliselt ehitatud elementidele antakse ka skannipunktide keskmine kaugus mudeli pinnast ja öeldakse, kas element on oma kohal (taluvuse piires), lähedal (kolmekordse taluvuse piires) või kaugel (kaugemal). Kõrvalekaldeid nähakse ainult kuni viiekordse taluvuseni: oma kohast kaugemale ehitatud element loetakse puuduvaks.

Kokkuvõte annab ehitatuse protsendi elementide seas, mida skanner jõuab, arvuna ja mahuna. Osaliselt ehitatud elemente loetakse eraldi ega lisata ehitatud hulka.

## Võrdlus 4D-graafikuga

Kui 4D-graafik on laaditud (vaata [4D-graafik](topic:4d-schedule)), kasutab tulemus ka päeva, mille oled 4D-liugurilt valinud: elemendid, mis on sel päevaks tähtajaks ja mida skann ei näita ehitatuna, on **graafikust maas**; elemendid, mis pole veel tähtajaks jõudnud, aga on ehitatud, on **ees**. Graafikust maas olevad elemendid on loetletud {{ui:Probleemid}} all ja tabelit saab nende järgi filtreerida. Graafikuta ei öelda maas või ees kohta midagi.

## Tabel ja mudel

Klõpsa reale, et element valida. {{ui:Värvi mudel}} värvib elemendid roheliseks (ehitatud), kollaseks (osaliselt), punaseks (puudub) või halliks (ei jõutud); {{ui:Oma värvid}} paneb need tagasi. {{ui:Salvesta CSV}} kirjutab tabeli. Käsk Märgi vastavad elemendid objektil kontrollituks märgib kõik skannitud ehitatud ja taluvuses olevad elemendid objektil kontrollituks (LOD 500, meetod skannimine) ühe sammuga, mida saab tagasi võtta. Vaata [Märgi elemendid kontrollituks või objektil kontrollituks](topic:verification).

:::warning
Võrdlus paneb iga elemendi kasti kokku skannipunktidega taluvuse piires. See **ei ole mõõdistus, koguste arvestus ega maksmise alus**. Element, mis on peidetud skannitud elemendi taha (sein vooderduse taga, plaat põrandaviimistluse all), jagab oma pinda ja võib tunduda ehitatuna; kumer või kaldus element on oma kehast suurem kast ja võib tunduda osalise või puuduvana. Vaata nimekirja enne, kui selle põhjal tegutsed. Lubade kommentaarid ja edenemise märkmed ei kuulu siia: need jäävad veergudesse, kuhu neid hoiad.
:::

Assistent saab sama võrdluse teha tööriistaga {{ui:Võrdle skannimist mudeliga}}; see ei muuda mudelit midagi.
