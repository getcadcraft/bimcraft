---
title: Perekonnad ja nende mõõdud
summary: Uksed, aknad ja mööbel tulevad perekondadena. Perekonna iga mõõt on IFC-failis üks tüüp, nii et tüüpide loend jääb BimCraftis lühikeseks, samal ajal kui teised programmid loevad lihtsaid tüüpe.
keywords: perekond, perekonnad, tüüp, tüübid, mõõt, mõõdud, ukse tüüp, akna tüüp, mööbel, laud, riiul, kapp, uus mõõt, dubleeri, paiguta perekond, perekonnafail, ccfamily, ifc-teek, projektiteek, rühm, nähtavus, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Mis on perekond

Perekond on ühte liiki asi mitmes mõõdus: üks ühe poolega uks, mis tuleb laiusega 32, 36 ja 42 tolli, või laud, mis tuleb pikana ja lühikesena. BimCraftis näete perekonda ühe korra, koos selle mõõtudega selle all, mitte pikka tüüpide loendit.

IFC-s perekondi pole. Faili sees on iga mõõt tavaline tüüp (ukse tüüp, akna tüüp, mööblitüüp…) ja perekond on rühm, mis loetleb oma mõõdud. Teised BIM-programmid loevad tüübid ja rühma nii, nagu need on; BimCraft loeb perekonna neist tagasi.

## Kust neid leida

- Projektisirvija rühm **Families** loetleb selle mudeli perekonnad, koos sellega, mitu mõõtu igal on ja mitu on paigutatud. Nende all on **Starter families**: ukse- ja aknatööriistade uksed ja aknad ning laud, riiulimoodul ja alumine kapp.
- {{ui:Build}} › {{ui:Perekonnad…}} näitab sama loendit aknas.
- Klõpsake perekonnal, et seda avada: tema mõõdud, iga mõõdu väärtused ja mitu elementi igat kasutab.

## Uksed ja aknad

Ukse- ja akna tööriistad loetlevad selle liigi perekondi ning nende kõrval **mõõdu loendi**. Valige mõõt või sisestage **W** ja **H**: laius ja kõrgus, mida ühelgi mõõdul veel pole, saab uueks perekonna mõõduks, kui paigutate ukse. Sama mõõduga uksed jagavad ühte tüüpi.

Jaotises {{ui:Properties}} näitab valitud uks või aken oma **Family** ja **Size**. Valige loendist teine mõõt või sisestage uus laius või kõrgus. {{ui:Ava perekond}} avab perekonna, kuhu see kuulub.

Iga ukse või akna raam järgib oma seina paksust nagu varem perekondadega. Mõõdu tüüp hoiab ka ukse joonistatuna 140 mm seinas, programmide jaoks, mis tüüpe loevad.

## Uus mõõt sellest perekonnast

1. Avage perekond.
2. Jaotises **New size from this family** sisestage selle väärtused (Width, Height ja perekonna muud parameetrid) ja, kui soovite, nimi. Ilma nimeta nimetatakse see väärtuste järgi.
3. Klõpsake {{ui:Koosta mõõt}}.

Kahel mõõdul ei või olla samu väärtusi. **Rename** muudab mõõdu nime; **Remove** eemaldab mõõdu, mida keegi ei kasuta; **Select** valib selle mõõdu elemendid.

## Mööbli paigutamine

1. {{ui:Build}} › {{ui:Paiguta perekond}} või {{ui:Place}} perekonna aknas.
2. Ribal valige perekond ja selle mõõt.
3. Klõpsake plaanil, et paigutada see korrusele. Vajutage {{key:R}}, et pöörata seda 90° enne klõpsamist. {{key:Esc}} lõpetab.

Paigutatud eseme jaotis {{ui:Properties}} näitab selle mõõtu, asukohta ja pöördenurka; {{key:Delete}} eemaldab selle. Iga ühe mõõdu tükk jagab selle mõõdu kuju, nii et perekonna muutmine muudab neid kõiki.

## Mõõdud tabelist

{{ui:Suurused tabelist…}} perekonna aknas loeb CSV-faili (koma, semikoolon või tabulaator). Esimene rida nimetab veerud: parameetri nime või sildi ja vajadusel `Name`. Pikkused on millimeetrites, kui te ei kirjuta ühikut (`1.2 m`, `36 in`), jaatus/eitus-veerud võtavad väärtused yes, no, true, false, 1 või 0 ning parameeter ilma veeruta jääb oma vaikeväärtusele. Iga rida muutub mõõduks ühes sammus, mida saate tagasi võtta; mõõt, mis on juba olemas, jäetakse vahele. Üks rida, mida ei saa lugeda või mida perekond ei suuda joonistada, lükkab tervikliku tabeli tagasi ja nimetab oma rea. Kõige rohkem 200 rida ja 1 MB. {{ui:Salvesta suurused tabelina}} kirjutab sama tabeli tagasi välja.

## Iga elemendi seadistus

Parameeter, mis on redaktoris märgitud **Per element** (jah/ei-parameeter, mis lisab ristlati, sildi või materjali), ei ole osa mõõdust: kaks sama mõõdu ust võivad erineda. Valige element ja **Properties** näitab need parameetrid; muutke üks ja see element joonistatakse uuesti oma kujuga (mööbel ja seadmed saavad oma kuju, uksed ja aknad tehakse oma seintes uuesti). Seadke kõik tagasi vaikeväärtustele ja see läheb tagasi oma mõõdu kujule.

## Detailsusaste

{{ui:Build}} › {{ui:Perekonnad…}} › **Detail level** määrab iga mudeli perekonna kohta, mis salvestatakse tahkekehadesse ja joonistatakse plaanisümbolitesse: **Fine** säilitab kõik, **Medium** ja **Coarse** jätavad välja osad, mille redaktor märgib peenemaks (väiksemad failid, kiiremad vaated). **Automatic** salvestab kõik ja laseb lehe vaatel valida mõõtkava järgi: 1:50 ja suuremad peen, 1:100 keskmine, 1:200 ja väiksemad jäme. Üks samm, mida saab tagasi võtta.

## Perekonna dubleerimine

Te ei pea alustama tühjalt. {{ui:Dubleeri}} kopeerib perekonna koos parameetrite, tahkekehade ja mõõtudega uue nime all. Muutke koopiat redaktoris; algne jääb samaks.

## Perekonnafailid

- {{ui:Salvesta perekonnafail}} salvestab `.ccfamily.json`: perekonna parameetrid, tahkekehad ja mõõdud. Avage see teises mudelis {{ui:Ava perekonnafail…}} rühmast Families.
- {{ui:Salvesta IFC-na}} salvestab perekonna väikese IFC-failina: tema mõõtude tüübid ja rühm, mis on deklareeritud IFC projektiteegi kaudu. Teised programmid avavad selle tüüpide kogumina; BimCraft avab selle uuesti perekonnana.

Siin avatud perekonnafail loetakse andmetena ja kontrollitakse enne, kui midagi kirjutatakse. Perekond, mille võti on mudelis juba olemas, tuleb sisse eraldi perekonnana. Perekond, mis hoiab teisi (vt redaktori abi jaotist Sees olevad perekonnad), toob need kaasa: fail loetleb need ja mudel säilitab need, mis tal juba on.

## Perekonnad teegis

Avage {{ui:Perekonnad…}} ja valige {{ui:Teegist…}}, et näha perekondi, mida on teegis jagatud. {{ui:Lisa sellesse projekti}} loeb ühe neist nagu perekonnafaili: BimCraft kontrollib iga välja enne, kui midagi loob; perekond tuleb sisse oma perekonnana ja avaneb redaktoris. Lisamine on üks tagasivõtmise samm. Oma perekonna jagamiseks kasutage {{ui:Salvesta kõik teegina}} ja saatke fail teeki (teegi töötajad avaldavad perekonnafaili käsuga ja iga perekond on oma kirje oma mõõtudega). Kui teek pole kättesaadav, ütleb loend seda ega muutu miski.

## Teiste programmide tüübid

Teiste programmide tüübid kuvatakse samuti rühmas Families, rühmitatult oletuse järgi: nende elementide nimede osa enne esimest koolonit või tüübinimed, mis erinevad ainult oma numbrite poolest. Perekonna aken ütleb, millist oletust kasutati. Need on loetletud ja nende elemente saab valida, kuid siin neid ei redigeerita: neil pole perekonna retsepti.

:::note
Algsed uksed ja aknad joonistatakse täpselt nii, nagu need olid enne perekondi. Enne perekondi tehtud failid avanevad muutmata: nende uksed ja aknad kuvatakse oma perekonna all kasutuses olevate mõõtudega ning liiguvad oma mõõdule esimesel muutmisel.
:::

Vt ka [Perekonna redigeerimine](topic:family-editor) ja [Uksed ja aknad](topic:doors-and-windows).
