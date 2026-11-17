---
title: Mudeli jooned ja mudeli tekst: joonistatud mudelisse, töötasapinnale
summary: Mudeli joon on joon, murdjoon või kaar, mis elab mudelis ja mida näeb igas vaates, mis seda näeb. Mudeli tekst on 3D-kiri tegeliku sügavusega. Mõlemad joonistatakse töötasapinnale.
keywords: mudeli joon, mudeli tekst, 3D-tekst, kiri, silt, joon 3D-s, kaar, murdjoon, töötasapind, väljapressitud tekst, font, sügavus, detailjoon, joonistusjoon, annotatsioon, IfcAnnotation
from: fc9cccb5
---

## Mida sa teed

Joonista jooni ja kirju, mis on osa mudelist, mitte ühest vaatest.

## Sammud

1. Määra kõigepealt töötasapind (vt **Töötasapind**). Korrusel asuvat tasapinda joonistatakse plaanil; püstist tasapinda töötasapinna vaatajas.
2. Joone jaoks vali menüüst **Versioon** {{ui:Mudeli joon}} ja vali **Joon**, **Murdjoon** või **Kaar (kolm punkti)**:
   - joon on kaks klõpsu;
   - murdjoon on klõps iga punkti jaoks, siis {{key:Enter}} või topeltklõps. Klõps esimesel punktil sulgeb selle;
   - kaar on kolm klõpsu: algus, punkt, millest see läbib, ja lõpp.
3. Teksti jaoks vali {{ui:Mudeli tekst}}. Sisesta sõnad, määra suurtähtede kõrgus ja sügavus ning klõpsa kohta, kus tekst algab (teksti algusjoone vasak ots).
4. Vali joon või tekst, et seda näha menüüs {{ui:Omadused}}. Sõnu, kõrgust ja sügavust saab seal muuta. **Kustuta** eemaldab selle.

## Kus need näha on

- Mudeli joon ilmub oma korruse plaanil, 3D-vaates, fassaadi- ja lõikepaneelil ning töötasapinna vaatajas, kui see asub töötasapinnal. Joonistusjoon (menüüst {{ui:Annoteeri}}, {{ui:Joon}}) kuulub ainult ühele vaatele.
- Mudeli tekst on tahkjas geomeetria: ta näidatakse kõikjal, kus mudel näidatakse, plaanil, 3D-s, fassaadides ja lõigetes ning lehtedel.
- Mudeli jooni veel trükilehtedel ei joonistata. Mudeli teksti joonistatakse.

## Font

Mudeli tekst kasutab sama fonti mis lehed ja PDF-id: Liberation Sans, SIL Open Font License all. Kui fondil puudub mõni täht, joonistatakse see küsimärgina ja sulle öeldakse, milline. Fonte on üks ja kaal on üks. Tähed on vahedega fondi enda laiuste järgi, ilma kerningita.

## IFC-failis

- Mudeli joon on IfcAnnotation objektitüübiga ModelLine. Selle kuju on 3D-kõver: murdjoon või lõigatud ring kaare jaoks.
- Mudeli tekst on IfcBuildingElementProxy objektitüübiga ModelText. Selle kuju on iga tähetüki kohta üks väljapressitud tahkis, tähtedel nagu O ja B on augud. Selle kogused on pinnaala ja maht (pinnaala korda sügavus).

## Hea teada

- Iga suurus tehakse nii, nagu palud. Keeldutakse ainult joonest, millel pole pikkust, kaarest, mille kolm punkti on ühel joonel, või tekstist ilma tähtedeta, sest pole midagi teha.
- Iga joon ning iga tekst või muudatus sellele on üks samm, mille saab Võta tagasi abil tagasi võtta.
