---
title: Klassifikatsioonikoodid (Uniclass, OmniClass, UniFormat)
summary: Anna igale elemendile ja tüübile klassifikatsioonikood, vali, milliseid süsteeme projekt kasutab, otsi rakendusega kaasas olevaid Uniclass-tabeleid, laadi oma kontori litsentseeritud tabelid ja näita koode loendites. Koodid kirjutatakse IFC-faili teistele programmidele.
keywords: klassifikatsioon, klassifitseerimine, kood, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabel, elemendi kood, tüübi kood, vaikekood, IfcClassification, IfcClassificationReference, cobie, loendi veerg, csv, litsents, license
from: 222b94cd
---

## Mida sa teed

Pane klassifikatsioonikood seintele, põrandatele, katustele, ustele, akendele ja kõigele muule mudelis, kuni kolmes süsteemis kõrvuti: Uniclass, OmniClass ja UniFormat. Teised erialad ja tarkvara toetuvad koodile, mitte nimele, seega salvestatakse koodid IFC-faili klassifikatsiooniviidetena, mida iga BIM-programm loeb.

## Anna elemendile kood

1. Vali element (või mitu) ja ava **Omadused**. Ava jaotis {{ui:Klassifikatsioon}}.
2. Kirjuta kood selle süsteemi kasti ja vajuta Enter. Kui koodiloend on laaditud, kirjuta koodi või mõni sõna ("kardinaseina") ja vali vastete seast: koodi pealkiri täidetakse sinu eest.
3. {{ui:Kehtib}} näitab, kuhu kood läheb: **See element** või **Selle tüüp (iga sama tüübi element)**. Seinatüübi koodi loevad kõik selle tüübi seinad, ka need, mille joonistad hiljem.
4. {{ui:Tühjenda}} eemaldab koodi.

Iga koodi all ütleb jaotis, kust see pärineb: määratud sellele elemendile, tüübist või projekti vaikeväärtusena selle klassi jaoks. Elemendi enda kood alistab alati tüübi oma ja tüübi kood vaikekoodi. Kui on valitud mitu elementi, tähendab kast "varieerub", et neil pole ühist koodi; selle sisestamine annab koodi kõigile. Iga muudatus on üks tagasivõtmise samm.

Koodi saab alati sisestada, olenemata sellest, kas loend on laaditud või mitte. Kui kood ei näe välja nagu selle süsteemi kood või pole laaditud loendis, ütleb vihje seda ja kood jääb nii, nagu sisestasid.

## Vali projekti süsteemid

Ava mudelariba **Andmed** ja vali {{ui:Klassifikatsioon}} (või {{ui:Projekti klassifikatsioon…}} jaotises Omadused).

- Märgi süsteemid, mida see projekt kasutab. Omadused näitavad siis ainult neid.
- **Uniclass**: tabelid Elemendid/ funktsioonid (EF), Süsteemid (Ss) ja Tooted (Pr) tulevad rakendusega kaasa. Need on © NBS, litsentsitud Creative Commons Attribution-NoDerivatives 4.0 all ning edastatakse muutmata. Dialoog näitab iga tabeli väljaannet ja päeva, mil see loeti. Need ei ole uusimad tabelid: kirjastaja avaldab uued igal kvartalil oma saidil.
- **OmniClass** ja **UniFormat**: rakendusega kaasas ei ole koodiloendit, sest nende kirjastaja ei luba tabeleid edastada ilma litsentsita. Kirjuta mis tahes kood või laadi oma kontori litsentseeritud tabel.
- {{ui:Laadi tabel (CSV)…}} loeb sinu kontori tabeli CSV-failist, millel on koodiveerg ja pealkirjaveerg (päisereaga nimega Code, Number või Identifier ning Title, Name või Description leitakse automaatselt; ilma selleta kasutatakse esimest kahte veergu). Tabel jääb sellesse brauserisse ega panda projektifaili. Faili salvestatakse ainult sinu määratud koodid. Uuema Uniclass-tabeli saad laadida samamoodi.
- {{ui:Anna elementidele klassi järgi vaikimisi kood}} annab igale seinale, põrandale, katusele, ukse, akna, trepi, rambi, posti, talale ja mööblitükile alguskoodi Uniclassi tabelist Elemendid/ funktsioonid, kui sellel endal koodi pole. Hiljem joonistatud elemendid saavad selle samuti.
- {{ui:Näita koode loendites veergudena}} lisab iga süsteemi kohta ühe veeru loenditele Uksed, Aknad, Seinad tüübi järgi ja Ruumid ning nende CSV-le. Mitme elemendi rida näitab "varieerub", kui nende koodid erinevad.

## Hea teada

- Vaikekoodid on CadCrafti enda algvalik, mitte kirjastaja oma, ja neid pole praktik kontrollinud. Kontrolli neid oma projekti standardi vastu.
- Failis on vaikeklassifikatsioon tavaline klassifikatsioon, märgitud seoseni nimega "CadCraft default", ja see kaob kohe, kui element või tema tüüp saab oma koodi.
- Koodid, mis imporditud failil juba on, loetakse ja näidatakse, olenemata sellest, mis nimetust teine programm süsteemile andis. Muu süsteemi koodid (kontori enda) loetletakse ja jäetakse puutumata.
- Koodid loetakse uuesti, kui fail avatakse uuesti, siin või teises programmis. Need kantakse ka IFC5 alfa (IFCX) ekspordi sisse, kui see laborivalik on sisse lülitatud, välja arvatud katusele määratud kood.
- Pole veel ehitatud: puu tabeli sirvimiseks tasemete kaupa, koodid tasemetel ja ruumidel projekti vaikeväärtustena ning koodi kontrollimine faili nimetatud väljaande vastu.
