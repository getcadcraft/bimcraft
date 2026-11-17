---
title: "Kardinseinasüsteemid: klaasseinad ruudustikul vahepostidega"
summary: Joonista kardinseinasüsteem nagu sein või aseta see pinnale, seejärel määra selle ruudustiku jooned ja vahepostid. See salvestatakse IfcCurtainWall'ina koos paneelide ja vahepostidega.
keywords: kardinseinasüsteem, kardinsein, kardinseina ruudustik, vahepost, klaasistus, vitriin, klaassein, paneel, klaasipaneel, pinna järgi, pind, mass, ruudustiku joon, vahe, profiil, rist-vahepost, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Mida teed

Teed klaasseina paneelidest, mis on paigutatud vahepostide vahele, muudad selle ruudustiku jooni ja valid, millistel joontel on vahepost.

## Sammud

1. Lülita **Joonista** sisse ja ava menüü **Ehitus** (lindi paigutuses: vahekaart Arhitektuur).
2. Vali **Kardinseinasüsteem**. Selle reas määra ülemine serv (korrus kohal või kõrgus), joon iga nii-palju mööda seda, joon iga nii-palju üles (jäta tühjaks, kui ei soovi), kas sellel on vahepostid, ja vaheposti profiil.
3. Klõpsa kohas, kus see algab ja lõpeb, nagu seina joonistamisel. Shift hoiab selle ristkülikulisena.
4. Ruudustiku muutmiseks vali **Kardinsein ruudustik** ja klõpsa süsteemil:
   - **Lisa joon**: vertikaalne joon läheb sinna, kuhu klõpsad. Horisontaalse joone puhul sisesta kõigepealt kõrgus väljale **Kõrgusel**.
   - **Teisalda joon**: klõpsa joonel, seejärel kohal, kuhu see läheb.
   - **Eemalda joon**: klõpsa joonel.
   - **Määra vahega**: sisesta vahe väljale **Iga**, seejärel klõpsa süsteemil.
5. Vahepostide muutmiseks vali **Vahepost**, vali, millele see mõjub (klõpsatav vertikaalne joon, kõrgusel olev horisontaalne joon, äärepiir või kõik jooned), vali **Paiguta vahepostid** või **Eemalda vahepostid** ja profiil, seejärel klõpsa süsteemil.
6. Vali süsteem, et näha kogu selle infot jaotises **Omadused**: iga ruudustiku joon koos asukohaga, linnuke selle vahepostile ja nupp selle eemaldamiseks; vahe; äärepiir; profiil; paneeli paksus.

## Pinna järgi

**Pinna järgi** teeb kardinseinasüsteemi tasasele pinnale, mille klõpsad 3D-vaates. Selle rea ruudustiku ja vahepostide seaded on samad.

- See töötab mis tahes tasasel pinnal mis tahes elemendil, mida 3D-vaade näitab: mass, sein, põrand, katuse tasand, post, paigutatud üksus. Pind võib olla vertikaalne, kaldu või horisontaalne.
- Süsteem võtab pinna kontuuri. Viilkatus või muu kummaline kuju lõikab paneelid ja vahepostid selle järgi.
- Selle asemel saab teha seina, mööda vertikaalse pinna jalamit ja kõrguseni, mis on pinna kõrgus. Siin seisab sein alati vertikaalselt, seega kaldu või horisontaalne pind seda ei võta.
- See ei tee katust. BimCraftis arvutatakse katus korruse kontuuri ja kalde järgi, mitte ühe pinna järgi.
- Kõver pind on palju väikeseid tasaseid pindu: üks klõps võtab ühe neist.
- Pind, millel on avad: süsteem katab pinna välist kontuuri.

## Kuidas mõõdetakse

- **Brutopindala** on süsteemi kontuur.
- **Klaasipindala** on paneelid nagu need on tehtud: iga paneel kaotab poole ruudustiku vahepostilaiusest sellel küljel, kus on ruudustiku vahepost, ja terve laiuse äärepiiri vahepostil.
- Vertikaalne vahepost läheb äärest äärde läbi. Horisontaalne vahepost peatub iga vertikaalse vahepostiga ja äärepiiri juures. Äärepiiri vahepostid asuvad kontuuri sees; kui kaks kohtuvad, läheb läbi see, mis on vertikaalsem. Liitekohad lõigatakse ristnurga all, mitte viilu.
- **Loendid** sisaldab loendit **Kardinseinasüsteemid** nende arvudega, kui mudelis on vähemalt üks süsteem.

## IFC-failis

IfcCurtainWall oma korrusel, mis koosneb ühest IfcPlate'ist (kardinseina paneel) iga paneeli kohta ja ühest IfcMember'ist (vahepost) iga vahepostitüki kohta, igaühel oma kuju, materjal ja põhikogused.

## Hea teada

- Iga suurus tehakse nii, nagu palud. Keeldutakse ainult kontuurist, millel pole pindala, sest pole midagi teha.
- Seinana joonistatud süsteem säilitab kõrguse, millega see joonistati. Kui hiljem korrust liigutad, määra selle kõrgus omadustes uuesti.
- Teisalda-tööriist ei teisalda veel kardinseinasüsteemi. Kustuta see ja joonista uuesti või muuda ruudustikku kohapeal.
- {{ui:Võta tagasi}} võtab tagasi iga sammu: terve süsteemi, ühe ruudustiku muudatuse, ühe vahepostimuudatuse.
