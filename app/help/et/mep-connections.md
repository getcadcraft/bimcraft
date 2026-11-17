---
title: Ühenda torud ja kanalid seadmetega
summary: Alusta või lõpeta toru või kanal pordil, et see võtaks pordi mõõdu ja süsteemi ning jääks sellega kinnitatuks, ja kontrolli seejärel ühendusi — avatud pordid, mõõdu ja süsteemi mittevastavused ning lõigud ilma allikata.
keywords: mep, ühenda, ühendus, ühendused, port, pordid, avatud port, mõõdu mittevastavus, süsteemi mittevastavus, allikas, kontrolli ühendusi, kinnitatud, järgi, teisalda seade, ifcrelconnectsports, koordineerimine
from: 29144fb0
---

## Mida teed

Ühenda lõigud seadmetega, et mudel oleks üks ühendatud süsteem: pumba väljalaskeava ja sellest lahkuv toru, difuusori kael ja selle harukanal. Seejärel lase BimCraft'il loetleda, mis pole ühendatud.

## Joonista pordilt

1. Vali {{ui:Toru}} või {{ui:Kanal}}.
2. Vii osuti seadme pordile (väikesed ringid; avatud port on joonistatud hoiatusvärviga). Osuti kinnitub sellele ja ütleb **pordil**.
3. Kliki: lõik algab pordi kõrgusel ja **võtab pordi mõõdu ja süsteemi** (toru võtab ka süsteemi tavapärase materjali). Olekuriba ütleb, mida ta võttis.
4. Joonista edasi nagu tavaliselt. Lõigu lõpetamine teisel pordil kinnitab ka selle otsa.

Lõigu ots pordil on **kinnitatud** sellele: liiguta või pööra seadet (omaduste paneelis) ja lõigu ots liigub kaasa; muuda lõiku ja see ots jääb pordile. Lõigu muud nurgad jäävad oma kohale, nii et suure nihke korral võib esimene sirge pordilt nurga all lahti tulla: liiguta ka järgmine nurk.

## Kontrolli ühendusi

Ava {{ui:Versioon}} ja kliki {{ui:Kontrolli ühendusi}}. Riba all olev loend näitab:

| Rida | Mida see tähendab |
|---|---|
| Port pole ühendatud | Seadmel on ühendus, kuhu ei ole midagi joonistatud |
| Otsas pole midagi | Lõik lõpeb õhus |
| Ühendatud pordid on erinevas mõõdus | Ühe mõõdu lõik kohtub teise mõõdu pordi või lõiguga ilma reduktorita (toru nimimõõt, kanali kuju ja küljed) |
| Ühendatud pordid on erinevas süsteemis | Näiteks tagasivoolukanal tarnedifuusoril |
| Toru on ühendatud kanaliga | Kahte eri liiki ühendust kohtuvad |
| Seda ei varusta ükski seade tema võrgus | Miski, millega lõik on ühendatud, olgu see kui kaugel tahes, ei oma väljalaskeava. Äravoolusid, sademevett ja ventilatsiooni see ei küsi: nende vesi tuleb armatuuridelt |
| Kinnitatud seadme pordile, mida mudelis enam pole | Seade kustutati; joonista ots uuesti või kustuta lõik |

Vead tulevad esimesena. Kliki reale, et valida, mida see nimetab. {{ui:Sulge}} peidab loendi. Kontroll loeb mudelit nii, nagu see on joonistatud: kontrollib ühendusi ja mõõte, mitte kunagi voole, rõhke ega tasakaalustamist.
