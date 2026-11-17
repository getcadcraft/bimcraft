---
title: Shëtit njerëzit nëpër ndërtesë
summary: Një evakuim ose hyrjet e zakonshme të një dite përmes dhomave, dyerve dhe shkallëve të tua, me radhë aty ku ndërtesa ngushtohet, shëtitja më e gjatë drejt një dalje nga çdo dhomë, dhe gjetjet si Problemet. Një model i përafërt turmash për vendime projektimi, jo një certifikatë sigurie zjarri.
keywords: njerëz, evakuim, dalje, shpëtim, largësi udhëtimi, radhë, turmë, rrjedhë, gjerësi dere, shkallë, hyrje, pengesë, simulim, banorë, këmbësor, çfarë nëse, derë e bllokuar
from: 84aa8920
---

Seksioni {{ui:Njerëzit në ndërtesë}} i panelit të majtë shëtit njerëz nëpër dhomat, dyert dhe shkallët e modelit IFC të hapur. Asgjë në model nuk ndryshohet dhe asgjë nuk ngarkohet.

:::warning
Kjo është **një mjet projektimi, jo një certifikatë sigurie zjarri**. Ai nuk njeh zjarrin, tymin, panikun, ndryshimet në lëvizshmëri, as atë që kërkon një kod prej teje. Kufijtë janë të tutë: shëtitja më e gjatë drejt daljes dhe koha e disponueshme janë numra që ti shkruan, asnjë nuk supozohet.
:::

## Nisja

1. Hap një model me dhoma dhe dyer të mbyllura. Një derë me një dhomë vetëm në njërën anë është një dalje; një derë mes dy dhomave i lidh; një shkallë lidh dhomat në skajet e saj.
2. Zgjidh **Evakuim** (të gjithë ecin drejt një daljeje), **Hyrje** (të gjithë hyjnë dhe ecin drejt një dhome) ose **Shkëmbim** (njerëzit në dhoma largohen ndërsa po aq hyjnë), dhe sipërfaqen e dyshemesë për person. Dhomat që emërohen si korridor, shkallë, lobi ose tualet nuk mbajnë askënd.
3. Kliko {{ui:Nis}}. Fiton kohën kur del personi i fundit (dhe kur dalin gjysma dhe nëntë në dhjetë), radhën te çdo derë dhe shkallë, dhomën me shëtitjen më të gjatë, dhe një plan që e luan nisjen.

## Çfarë nëse

Shëno {{ui:Mbyllur}} te një derë në tabelë dhe nise sërish: njerëzit gjejnë rrugë tjetër, ose dhomat pa asnjë rrugë dalje listohen si gabime. Një derë dy herë më e gjerë boshatis një dhomë shumë më shpejt; tabela tregon ku janë radhët.

## Si funksionon

Çdo dhomë është një rrjetë, kështu që njerëzit ecin rreth këndeve, jo nëpër mure. Shpejtësia bie kur dhoma mbushet (S = 1.4 (1 − 0.266 D) m/s, D në persona për m²). Një derë lë të kalojnë 1.3 persona në sekondë për çdo metër gjerësie, minus 150 mm nga secila anë; një shkallë 1.0 dhe ecja më ngadalë. Njerëzit presin në radhë sipas rendit të ardhjes. Një numër nisjeje përsërit saktë të njëjtën nisje.

Asistenti mund ta bëjë të njëjtën gjë: kërko një evakuim, ose shëtitjen më të gjatë drejt daljes nga çdo dhomë.

## Njerëzit në çdo dhomë

Hap {{ui:Njerëzit në çdo dhomë}} për të shkruar një numër për çdo dhomë. Një kuti bosh përdor shifrën e sipërfaqes së dyshemesë (shfaqet me gri); 0 boshatis një dhomë. Numrat e tua përdoren për nisjen dhe mbahen në këtë shfletues.

## Rrjedha kundërshtare te dyert

Te **Shkëmbim**, njerëzit që dalin dhe ata që hyjnë takohen te të njëjtat dyer. Kur një derë kalon dikë në drejtim të kundërt pranë fundit të radhës, ajo mban një pjesë të shpejtësisë së saj (0.8 këtu; një supozim, sepse vlerat e botuara ndryshojnë), dhe tabela numëron ndryshimet e drejtimit. Një derë që ndryshon shpesh drejtim listohet në Problemet si shënim.

## Shkallët dhe pllatformat

Çdo pllatformë e një shkalle i kushton një ecësi një sekondë për t'u kthyer (një supozim). Një shkallë e drejtë nuk ka asnjë; një shkallë L ose U ka një. Shpejtësia e shkallës vjen ende nga gjerësia e rreshtit të saj të shkallëve.

## Në pamjen 3D

Shëno {{ui:Shfaq njerëzit në pamjen 3D}} dhe ecësit shfaqen si figura në model, me ngjyra sipas asaj që bëjnë, dhe lëvizin ndërsa luan nisjen. Asgjë nuk i shtohet modelit.
