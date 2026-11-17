---
title: Töörežiim, dubleeritud vaated, pliiatsid paberil, Raporteeri kui ja mallid
summary: Vali, kuidas BimCraft käitub sinu töö viisi järgi, dubleeri mis tahes vaade eraldi koopiana või seotuna, hoia pliiatsi ülekirjutused failis, prindi nii, nagu näed, või läbi pliiatsitabeli, raporteeri element teise IFC-klassina ja alusta projekte oma mallidest.
keywords: töörežiim, dubleeri vaade, dubleeri, kopeeri vaade, sõltuv vaade, seotud vaade, oma koopia, vaate koopia, pliiatsi ülekirjutused, pliiatsid, joonejämedus, prindi nii nagu näed, pliiatsitabel, plottimisstiil, ctb, mustvalge, halltoon, raporteeri kui, ifc klass, klassifitseeri ümber, eeldefineeritud tüüp, üldmudel, plaat teena, sein paneelina, katus rambina, projekti mall, mall, uus mallist, salvesta mallina, kontori standard
from: 231d98b0
---

## Mida sa teed

Seadista BimCraft sinu töö viisi järgi, dubleeri vaateid, prindi need nii, nagu ootad, loenda elemente nende tegeliku olemuse järgi ja alusta iga projekti oma kontori mallist.

## Vali töörežiim

1. Ava {{ui:Sätted}} ja vahekaart {{ui:BimCraft}}. Leia {{ui:Töörežiim}}.
2. Vali üks:
   - {{ui:Iga vaade omaette}} (esimene valik): dubleeritud vaade kopeerib oma märgistused ja need jäävad selle vaate omaks; lehed prinditakse nii, nagu ekraan näitab.
   - {{ui:Ühised märgistused ja pliiatsitabelid}}: dubleeritud vaated jagavad märgistusi; printimine käib läbi pliiatsitabeli.
3. Valiku all on neli asja, mida see seab. Muuda ükskõik millist neist eraldi; siis on režiimi nimi {{ui:Kohandatud}}.

Töörežiim jääb selles brauseris alles, nagu töötsooni paigutus. Mall viib selle uutesse mudelitesse.

## Dubleeri vaade

1. Projektibrauseris on igal korrusplaanil, laeplaanil, väljakutsel, fassaadil ja lõikel nupp {{ui:Dubleeri}} (kaks lehte).
2. Nimeta koopia ja vali, kuidas see käitub:
   - {{ui:Oma koopia}}: selle joonistus, mõõtmed, lõige, peidetud elemendid ja pliiatsid kopeeritakse ja jäävad selle omaks. Kummagi vaate muutmine ei muuda kunagi teist, nii et välja antud lehel olev vaade jääb sellisena, nagu see välja anti.
   - {{ui:Seotud}}: see näitab sama vaadet ühe märgistuste ja sätete komplektiga.
3. Koopia on loetletud jaotises {{ui:Dubleeritud vaated}}. Klõpsa sellel, et see avada; riba plaani kohal ütleb, et see on koopia, ja {{ui:Üles}} viib tagasi selle vaate juurde.
4. Selle liugurinupp avab selle sätted: nimi, {{ui:Vaatevahemik}} (oma koopial on oma), {{ui:Muuda oma koopiaks}} seotud koopia puhul ja {{ui:Kustuta}}.

Fassaadide ja lõigete koopiad lähevad sinu enda lehtedele samamoodi nagu vaated, millest need tulid. Dubleerimine on üks tagasivõtmise samm ning koopiad salvestatakse IFC-sse väljakutsete kõrvale.

## Pliiatsid hoitakse vaatega ja prinditakse nii, nagu näed

1. Lülita {{ui:Joonista}} sisse ja vali {{ui:Pliiatsid}}.
2. {{ui:Kellele}} loetleb nüüd iga kategooria: seinad, uksed ja aknad, plaadid, katused, postid, trepid, mööbel ja ülejäänud ning joonistus ja mõõtmed.
3. {{ui:Rakenda}} hoiab pliiatsi IFC-s koos vaatega, mida näidatakse: plaan, laeplaan, väljakutse või dubleeritud vaade. Enne versiooni 0.9 tehtud pliiatsid hoiti brauseris; {{ui:Hoia need failis}} viib need faili.
4. Lehed ja PDF joonistavad iga pliiatsi nii, nagu ekraan seda näitab.

Pliiatsitabeli kaudu printimiseks määra pliiatsite real väljal {{ui:Prindi}} väärtuseks {{ui:Pliiatsitabeli kaudu}}, siis vali tabel (värviline, mustvalge, halltoon) või {{ui:Muuda pliiatsitabelit…}}: iga värv saab värvi, joone paksuse ja rasterdamisega, millega see prinditakse. Tabel on CadCraft'i plottimisstiili fail, nii et {{ui:Impordi…}} võtab vastu CadCraft-rakenduses tehtud tabeli ja {{ui:Ekspordi}} annab tabeli tagasi. Mudel hoiab oma valiku; kui valikut pole, otsustab töörežiim.

## Raporteeri element teise klassina

Plaat, joonistatud teena; sein, kasutatud paneelina; katus, kujundatud rambina: hoia tööriist, millega joonistasid, ja raporteeri element sellisena, nagu ta on.

1. Vali element ja ava {{ui:Omadused}}. Ava {{ui:Raporteeri kui}}.
2. Kirjuta otsingukasti, et leida klass, mis sobib kujuga, vali see ja selle eeldefineeritud tüüp. Enda tüübi jaoks vali USERDEFINED ja anna sellele nimi.
3. {{ui:Rakenda}} (üks tagasivõtmise samm). {{ui:Tühjenda}} raporteerib elemendi uuesti sellisena, nagu see joonistati.

Sa muudad seda endiselt tööriistaga, millega joonistasid. Salvestatud IFC kirjutab selle raporteeritud klassina, nii et teised programmid, {{ui:Kogused}} koguste arvestus, Otsi, Värvi järgi, mudelikontrollid ja {{ui:Probleemid}} loevad seda selle klassina. Loendid jätavad paneelina raporteeritud seina seinte loendist välja ja {{ui:Elemendid raporteeritud klassi järgi}} loetleb kõik sellised. See töötab IFC4 ja IFC2X3 failides; loend pakub ainult neid klasse, mida faili IFC-versioon toetab. Uksed, aknad, trepid, ruumid ja tasandid säilitavad oma klassi.

## Salvesta projekt mallina ja alusta sellest

1. Kui projekt on avatud, klõpsa {{ui:Salvesta}} kõrval nuppu {{ui:Salvesta mallina}}.
2. Anna nimi. Märgi {{ui:Lae mallifail ka alla}}, et jagada seda IFC-failina, ja {{ui:Alusta uusi mudeleid sellest}}, et teha see oma vaikemalliks.
3. Mall hoiab korrused, vaatemallid ja vaate sätted, dubleeritud vaated ja väljakutsed, joonistuse, pliiatsid ja pliiatsitabeli, sildid, perekonnad ja tüübid, lehed, lehesuurused, tiitliplokid ning töörežiimi. Seinad, põrandad, uksed ja kõik muud mudeli elemendid jäetakse välja.
4. Klõpsa {{ui:Uus hoone}} ja vali see jaotises {{ui:Alusta}}, või vali {{ui:Mallifail…}} selle jaoks, mis sulle saadeti. Uuel projektil on oma nimi ja oma projektiidentiteet; kõik muu on nii, nagu mallis.

:::note
Mallid hoitakse selles brauseris. Meeskonna mallid, mida jagatakse CadCraft Studio kaudu, pole veel valmis: saada selle asemel mallifail.
:::
