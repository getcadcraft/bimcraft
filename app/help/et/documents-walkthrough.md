---
title: Dokumendid ja revisjonid (hoidla)
summary: Samm-sammuline läbikäik ühest tõelisest tööst: pane projekti IFC-mudelite kaust kontrolli alla, võta mudel välja, muuda, too tagasi märkusega, saada ülevaatusele, kinnita ja vabasta, vaata ajalugu ja seda, mis mudelit kasutab, mida teine inimene näeb, kui fail on lukus, ning kuidas see toimib pilvekaustadega.
keywords: hoidla, dokumendid, läbikäik, õpetus, väljavõtt, tagasitoomine, revisjon, vabastamine, lukustamine, kinnitamine, ajalugu, IFC, mudel, pilvekaust, projektikaust, kaks inimest, jagatud kaust
from: 0a753f25
---

## Mida teed

Oled Ana ja töötad Riverside Clinicu projektil koos kolleegi Benjamiga. Projekti IFC-mudelid elavad ühes kaustas, millele te mõlemad pääsete (jagatud draiv, sünkroonitud kaust või pilvekaust). Lõpuks on üks fail läinud oma esimesest koopiast vabastatud revisjonini **A**, on muudetud uuesti revisjoniks **B.1**, oled näinud, kes mida tegi, ja oled näinud, mida Ben näeb, kui sina faili hoiad.

Kõik hoitakse peidetud kaustas `.ccvault` sinu failide kõrval: serverit pole ja midagi ei laadita üles (erandiks on pilvekaust, vt viimast sammu). Iga nupu ja reegli kohta ühes kohas vaata teemat *Dokumendid: väljavõtt, revisjonid ja vabastamine*, kui sinu rakendusel see on.

## 1. Seadista projektikaust

1. Vali tervituskuval {{ui:Ava kaust}} kõrval {{ui:Dokumendid}} või menüüs **Fail** {{ui:Dokumendid…}}.
2. Vali {{ui:Vali projektikaust}} ja vali kaust, mis hoiab projekti IFC-mudeleid. (Projektikaustad töötavad Studios ja brauserites, mis oskavad kausta avada, näiteks Chrome ja Edge. Teistes brauserites paneel ütleb seda.)
3. Vali **Sina:** kõrval {{ui:Muuda}} ja kirjuta oma nimi, `Ana` (kui küsitakse, siis ka selle arvuti nimi). Paneel ütleb nüüd *Sina: Ana, arvuti …* ja su arvuti. Su nimi läheb kõigele, mida teed.
4. Vali {{ui:Alusta selles kaustas hoidlat}} ja kirjuta projekti nimi `Riverside clinic`. Paneel ütleb *Hoidla alustatud projektile Riverside clinic.*

## 2. Too fail kontrolli alla

1. Ava **Failid, mis ei ole hoidlas** ja vali {{ui:Lisa}} kõrval `models/House.ifc`.
2. See ilmub jaotisesse **Failid hoidlas** revisjonil **A.1** olekuga **Töös**. A.1 on tema esimene koopia; hoidla hoiab koopiat igast revisjonist.

## 3. Võta välja, muuda, too tagasi

1. Vali `models/House.ifc` kõrval {{ui:Ava}}. Mudel avaneb BimCraftis ja paneel sulgub, et sa seda näeksid. Ava paneel uuesti menüüst {{ui:Dokumendid}}.
2. Ava paneel uuesti ja vali {{ui:Võta välja}}. Rida ütleb nüüd **Sinule välja võetud**. Kausta `.ccvault/locks` on tehtud lukufail; keegi teine ei saa seda faili välja võtta, kuni sa selle tagasi too.
3. Muuda mudelit: liiguta seina, lisa uks. Salvestamine keeldub, kui mudel pole sinule välja võetud, ja ütleb miks; {{ui:Salvesta nimega}} töötab alati koopia puhul, mis on sinu enda.
4. Ava paneel, vali {{ui:Too tagasi}} ja kirjuta, mis muutus (`Liigutasin ust`). Paneel ütleb *Tagasi toodud revisjonina A.2*. Fail projektikaustas on nüüd mudel, mis sul avatud oli, ja lukk on kadunud. Tagasitoomine ilma muudatuseta jätab revisjoni alles.

Kui mõtled ringi, annab {{ui:Tühista väljavõtt}} faili tagasi ilma uue revisjonita.

## 4. Ülevaatus ja vabastamine

1. Vali {{ui:Saada ülevaatusele}}. Olek muutub **Ülevaatusel** ja fail on ainult lugemiseks.
2. Enne kinnitamist vali {{ui:Projekti sätted}} ja loetle, kes võivad kinnitada (üks nimi reale), näiteks `Ben` ja `Carla`, ning märgi reegel, et kinnitaja peab olema keegi muu kui autor. Vali {{ui:Salvesta sätted}}. Nüüd keeldub hoidla ise kõigist teistest.
3. Ben (või Carla) valib {{ui:Kinnita}} ja kirjutab kinnitaja nime. Olek muutub **Vabastatud**, revisjon muutub **A**-ks, koos reaga *kinnitas* ja nimega. Vabastatud fail on ainult lugemiseks. {{ui:Saada tagasi}} oleks selle tagastanud olekusse Töös koos põhjusega.

Kinnitaja nimi on paneelile kirjutatud nimi; see on kirje, kes kinnitas, mitte isikutõend.

## 5. Uus revisjon

1. Vabastatud failil vali {{ui:Uus revisjon}}. Hoiad seda järgmise tähe jaoks.
2. Muuda seda, seejärel {{ui:Too tagasi}}. Revisjon on **B.1**, töös. Vabasta see samamoodi ja see muutub **B**-ks. {{ui:Tühista väljavõtt}} enne esimest tagasitoomist jätab selle tasemele **A**.

Revisjonitähed käivad A, B … Z, AA, AB. Kui sinu standard jätab mõned tähed vahele, jätab projekti säte *Kasuta ASME Y14.35 järjestust* järgmiste revisjonite puhul vahele I, O, Q, S, X ja Z.

## 6. Vaata, mis juhtus

Vali faili nimi, et avada selle üksikasjad:

- **{{ui:Ajalugu}}**: iga sündmus, uuemad enne, koos sellega, kes, millises arvutis ja millal: *Tagasi toodud A.2* Analt, *Vabastatud* Benilt jne.
- **{{ui:Revisjonid}}**: revisjonitabel: iga hoitud revisjon koos kuupäeva, selle, kes tagasi tõi, märkuse ja kinnitajaga. Hoidla hoiab iga revisjoni koopiat kaustas `.ccvault/revs`.
- **{{ui:Kasutab}}**: dokumendid, millele IFC-mudel viitab.
- **{{ui:Kasutab}}**: loetleb iga hoidla mudeli, mis viitab sellele failile.

## Mudelid, mis viitavad teistele dokumentidele

IFC-mudel, mis viitab kaustas olevatele teistele dokumentidele (joonised, loendid), näitab neid jaotises **Kasutab**, ja iga neist näitab mudelit jaotises **Kasutab**. Kui tood dokumendi tagasi, näed, millised mudelid sellele viitavad.

## 7. Mida Ben näeb, kui sina faili hoiad

Nüüd võta fail uuesti välja ja palu Benil avada sama projektikaust oma arvutis ning avada paneel. Faili real näeb ta **Välja võtnud Ana** sinu arvutis **alates** kellaajast ega näe {{ui:Võta välja}} nuppu. Kui ta siiski proovib, keeldub hoidla: lukk on fail, mida süsteem ei tee kaks korda, nii et kaks inimest ei saa faili korraga hoida, isegi samal sekundil, kui kaust on Studios kettal. (Brauseris annab kaust ainult parima pingutuse, ja paneel ütleb seda jaotises **Kaust**.)

Kui Ana on ära ja Benil on fail vaja, vabastab {{ui:Katkesta väljavõtt}} selle. Ta peab kirjutama põhjuse; see läheb logisse koos sellega, kelle väljavõtt see oli. Kui projekt loetleb administraatoreid, saavad ainult nemad. Väljavõtt, mis on vanem kui aegumispiir (vaikimisi 14 päeva), on märgitud *pikka aega*. Pärast katkestamist keeldub Ana hilinenud tagasitoomine, nii et te ei saa üksteise muudatusi üle kirjutada.

## 8. Pilvekaustad

Pilvekaust on projektikaust, mida hoitakse sinu meeskonna pilvesalvestuses, nii et meeskonnal pole vaja jagatud draivi. Studios, sisse logitud oma CadCrafti kontoga, näitab paneel {{ui:Ava pilvekaust}} kõrval {{ui:Vali projektikaust}}. Vali see ja vali kaust, mis on loetletud kui töötuba / kaust. Töötuba omanik teeb kausta esimesena ja meeskonna pilvesalvestus peab olema jõus. Kõik ülalkirjeldatu töötab samamoodi; server teeb luku, mis on inimeste vahel range. Kui pole sisse logitud, ütleb paneel sisse logida. Tavalises brauseri vahekaardis pilvenuppu ei pakuta; kasuta Studiot.

## Proovi

Tee ülalkirjeldatud kaheksa sammu koopiaga tõelisest failist. Kahe inimese sammud vajavad teist inimest või kahte akent kahe nimega. Kui proovid tõelise jagatud kaustaga, loetleb Kogukonna testimise leht kontrolli, mis küsib just seda, ja võtab tulemusi vastu.
