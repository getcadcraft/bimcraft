---
title: Líkanlínur og líkantexti: teiknað í líkaninu, á vinnuplaninu
summary: Líkanlína er lína, fjöllína eða bogi sem er í líkaninu og birtist í hverri sýn sem sér hana. Líkantexti er þrívíður texti með raunverulegri dýpt. Hvort tveggja er teiknað á vinnuplanið.
keywords: líkanlína, líkantexti, þrívíður texti, letur, skilti, skiltagerð, lína í 3D, bogi, fjöllína, vinnuplan, útdreginn texti, leturgerð, dýpt, smáatriðislína, teikningarlína, skýring, IfcAnnotation
from: fc9cccb5
---

## Hvað þú gerir

Teiknaðu línur og letur sem eru hluti af líkaninu, ekki af einni sýn.

## Skref

1. Stilltu vinnuplanið fyrst (sjá **Vinnuplanið**). Láréttur flötur er teiknaður á grunnmyndinni; lóðréttur flötur í Work Plane Viewer.
2. Fyrir línu velurðu **Líkanlína** í valmyndinni **Smíð** og velur **Lína**, **Fjöllína** eða **Bogi (þrír punktar)**:
   - lína er tveir smellir;
   - fjöllína er einn smellur fyrir hvern punkt, síðan Enter eða tvísmellur. Smellur á fyrsta punktinn lokar henni;
   - bogi er þrír smellir: byrjun hans, punktur sem hann fer um, og endi hans.
3. Fyrir texta velurðu **Líkantexti**. Sláðu inn orðin, stilltu hástafahæð og dýpt, smelltu síðan þar sem textinn byrjar (vinstri endi grunnlínunnar).
4. Veldu línu eða texta til að sjá hann í **Eiginleikar**. Orð, hæð og dýpt texta má breyta þar. Eyða eyðir honum.

## Hvar þær birtast

- Líkanlína birtist á grunnmynd hæðar sinnar, í 3D-sýninni, í uppréttu- og sniðspjaldinu og í Work Plane Viewer þegar hún liggur á vinnuplaninu. Teikningarlína (Skýring, Lína) tilheyrir aðeins einni sýn.
- Líkantexti er fast rúmfræði: hann birtist alls staðar þar sem líkanið birtist, á grunnmynd, í 3D, í uppréttum og sniðum, og á blöðum.
- Líkanlínur eru ekki teiknaðar á prentuðum blöðum ennþá. Líkantexti er það.

## Letrið

Líkantexti notar sama letur og blöðin og PDF-skrárnar: Liberation Sans, undir SIL Open Font License. Stafur sem letrið hefur ekki er teiknaður sem spurningarmerki og þér er sagt hvaða stafur það er. Það er eitt letur og ein þykkt. Stafir eru bilaðir eftir breiddum letursins sjálfs, án kerning.

## Í IFC-skránni

- Líkanlína er IfcAnnotation með hlutartegundina ModelLine. Lögun hennar er þrívíð ferill: fjöllína, eða afskorinn hringur fyrir boga.
- Líkantexti er IfcBuildingElementProxy með hlutartegundina ModelText. Lögun hans er einn útdreginn fastur hlutur fyrir hvern stafbút, með götum í stöfum eins og O og B. Magntölur hans eru flatarmál flatar og rúmmál (flatarmál flatar sinnum dýpt).

## Gott að vita

- Hvaða stærð sem er er gerð eins og þú biður um. Aðeins lína án lengdar, bogi þar sem punktarnir þrír liggja á einni línu, eða texti án stafa er hafnað, því ekkert er til að búa til.
- Hver lína, og hver texti eða breyting á honum, er eitt skref sem hægt er að afturkalla.
