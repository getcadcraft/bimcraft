---
title: Paiguta ja vaheta teegi elementi, millel on variandid
summary: Mõned teegi elemendid tulevad mitmes suuruses või valikus. Vali variant enne paigutamist, vaata, milline variant paigutatud element on, vaheta see ühe klõpsuga teise varianti ja säilita see elemendi uuendamisel.
keywords: variant, variandid, suurused, valikud, konfiguratsioon, teek, librarycraft, paiguta, vaheta, konfiguraator, perekond, tüüp, uuendus, pordid
from: c05f0af3
---

## Mida teed

Paiguta teegi element soovitud suuruses või valikus ja muuda oma meelt hiljem ilma uuesti paigutamata. Element, millel on variandid, on teegis üks element (üks nimi, üks litsents, üks versioon) koos tabeliga variantidest, milles see tuleb: näiteks montaažiplaat suuruses Väike, Keskmine ja Suur või sama plaat ilma aukudeta.

## Vali variant ja paiguta

1. Ava vahekaart {{ui:Library}} ja klõpsa elemendi kaarti.
2. Nime all loetleb valik {{ui:Variant}} iga varianti koos suurusega. Elemendi vaikevariant on valitud esimesena.
3. Vali üks. Plaan, suurus ja 3D-keha rida järgivad sinu valikut.
4. Klõpsa {{ui:Place in plan}} (või 3D-vaates {{ui:Place in model}}) ja paiguta see nagu iga elemendi: vaata [Paiguta seadmed ja mööbel teegist](topic:place-from-library).

Paigutatud element saab nime elemendi ja variandi järgi, näiteks *Kinnitusplaat — Suur*, nii et {{ui:Equipment}} loend ja puu eristavad neid. Iga variant on oma IFC-tüüp: sama variandi kahekordne paigutamine jagab ühte tüüpi, erinev variant saab oma.

## Vaata, milline variant paigutatud element on

Vali element. Jaotises {{ui:Properties}} on kastis **Teegi element** rida **Variant**. IFC hoiab seda `CadCraft_LibraryItem`-is: `Variant` (variandi id), `VariantName` ja `VariantValues` (valikuväärtused tekstina), et teised programmid saaksid seda lugeda.

## Vaheta teise variandi vastu

1. Vali paigutatud element ja klõpsa kastis **Teegi element** {{ui:Swap item…}}. Vahekaart {{ui:Library}} avaneb.
2. Ülal loetleb **Teised variandid elemendile** *elemendi nimi* iga variandi koos suurusega. Paigutatud variant on märgitud ja seda ei saa valida.
3. Klõpsa soovitud variandil {{ui:Swap to …}}.

Element säilitab oma koha, pöörde, korruse, elemendi numbri, koguse ja märkmed; selle tüüp, kuju ja andmed muutuvad teiseks variandiks. {{key:Mod+Z}} toob esimese tagasi. Saad ikka valida ka mõne muu elemendi allolevast loendist, nagu varem: vaata [Vaheta paigutatud element ja uuenda teegi elemente](topic:swap-and-update-library-items).

## Kopeerimine, kleepimine ja uuendused

- Paigutatud variandi koopia on sama variant: selles mudelis ja teises mudelis, mis on avatud samas brauseri vahekaardis, käskudega {{ui:Copy}} ja {{ui:Paste}}.
- **Uuendused** säilitavad variandi: kui elemendi uuem versioon seda varianti veel sisaldab, saab paigutus selle variandi uuest versioonist. Kui uues versioonis seda varianti enam ei ole, võtab paigutus elemendi vaikevariandi.

## Hea teada

- Ainult mõnel teegi elemendil on variante. Kaardid seda ei ütle; näed valikut {{ui:Variant}}, kui avad ühe.
- Element võib loetleda variandi kohta **pordid** (ühenduspunktid torude ja kanalite jaoks). Vahekaart Teek näitab, mitu neid variandil on. Neid veel **ei kirjutata** IFC-sse, kui paigutad elemendi teegi vahekaardilt.
- Variant, millel pole 3D-keha, paigutatakse vahekasti asemel, nagu iga 2D-sümbol.
- Valiku suurused on millimeetrites, nagu teek need kirjutab.
