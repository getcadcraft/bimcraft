---
title: Ruudustik ja postid
summary: Paigutage ruudustikujooned nummerdatud ja tähistatud ringidega, kas vahede järgi või ükshaaval, joonistage nende järgi seinad ja postid ning vaadake neid plaanidel, vaadetel ja lõigetel.
keywords: ruudustik, ruudustikud, ruudustikujoon, telg, teljed, ring, konstruktsiooniline ruudustik, 1 2 3, A B C, post, postid, tugisammas, kinnitumine, IfcGrid, IfcColumn
from: bf99a8f7
---

## Mida teete

Paigutage hoone ruudustikule ja joonistage seejärel seinad ning paigutage postid ruudustikujoonte järgi.

## Kogu ruudustiku paigutamine

1. Lülitage sisse {{ui:Joonista}} ja valige {{ui:Versioon}} › {{ui:Ruudustik}}.
2. Klõpsake {{ui:Paiguta ruudustik…}}. Öelge, mitu **nummerdatud joont** (1, 2, 3…) ja **tähtjoont** (A, B, C…) soovite ning kui kaugel need üksteisest on. Sisestage üks vahe või mitu, eraldatuna komadega, ebaühtlaste sammude jaoks (näiteks `20', 24', 20'`). {{ui:Viimastest joontest kaugemale}} on see, kui kaugele iga joon ulatub teist liiki välimistest joontest kaugemale, ja {{ui:Pööratud (kraadides)}} pöörab kogu ruudustikku.
3. Klõpsake {{ui:Paiguta}} ja seejärel kohta, kuhu läheb esimene ristumine (1 / A). Eelvaade liigub koos hiirekursoriga.

Nummerdatud jooned lähevad plaanil üles ja on sellel laiali paigutatud; tähtjooned lähevad plaanil üle ja on sellel üles poole paigutatud. Tähed jätavad vahele I ja O, nagu jooniselgi, nii et neid ei loeta kunagi kui 1 ja 0.

## Joonista ruudustikujooni ükshaaval

Kui {{ui:Ruudustik}} on sisse lülitatud, klõpsake kohas, kus joon algab, ja kohas, kus see lõpeb. Joon saab järgmise tähise sellest joonte reast, mille suunas see kulgeb (pärast 3 tuleb 4; pärast B tuleb C). Peatamiseks vajutage {{key:Esc}}.

## Ruudustikujoone muutmine

Kui {{ui:Ruudustik}} on sisse lülitatud, klõpsake joont, et see valida. Sisestage uus {{ui:Silt}} ja vajutage {{key:Enter}}, või klõpsake {{ui:Kustuta see joon}} (või vajutage {{key:Delete}}). {{ui:Ringid}} paigutab ringid joone mõlemasse otsa, joone algusse või lõppu või ei paiguta neid üldse. Iga muudatus on üks samm: {{key:Mod+Z}} võtab selle tagasi.

## Joonistamine mööda ruudustikku

{{ui:Sein}} tööriist, {{ui:Post}} tööriist ja muud joonistustööriistad kinnituvad ruudustikujoontele ja nende ristumiskohtadele (kinnitusmärk on väike ring koos ristiga).

**Postid:** valige {{ui:Versioon}} › {{ui:Post}}, valige kuju (ristkülik või ring), mõõt ja see, kas post ulatub **kuni kõrgema korruseni** või kindla kõrguseni, seejärel klõpsake. {{ui:Igas ruudustiku ristumises}} paigutab posti igasse ristumisse, kus seda veel ei ole. Posti kuju, mõõtu või kõrguse muutmiseks klõpsake postil ja muutke paneelil {{ui:Omadused}}; {{key:Delete}} eemaldab posti. Kõrgema korruseni ulatuvad postid järgivad seda, kui selle kõrgus muutub.

## Mida peaksite nägema

- Ruudustik iga korruse plaanil, iga joone otstes ring ja selle silt.
- Ruudustikujooned joonistekomplektis: plaanidel ning vaadetel ja lõigetel seal, kus joont nähakse otsast, ring hoone kohal. Vt [Vaated, lõiked ja lehed](topic:sheets).
- IFC-failis: üks ruudustik hoone jaoks (IfcGrid, selle nummerdatud jooned ühes loendis ja tähtjooned teises) ning postid IfcColumn-idena koos mõõdu, kõrguse ja kogustega. Teised BIM-programmid kuvavad mõlemat.

:::note
Teisest programmist pärit failis olev ruudustik kuvatakse ja tööriistad kinnituvad sellele, kuid selle jooni ei saa siin muuta.
:::
