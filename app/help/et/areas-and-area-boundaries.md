---
title: Pindalad ja pindala piirid
summary: Mõõda brutoehitis- või renditavat pinda piirjoonte sees, mille joonistad või võtad seintest, ja loetle pindalad loendis.
keywords: pindala, pindalad, pindala piir, pindala skeem, brutoehitisepindala, brutopõrandapind, GFA, renditav pind, pindalaplaan, pindalade loend, seinte valimine, pole suletud
from: c79f96d2
---

## Mida teed

Joonista pindala skeemi piirid, paiguta pindalad nende sisse ja loe kogusummad.

## Kus on tööriistad

- Lindi paigutus: {{ui:Arhitektuur}} › **Ruum ja pindala** › {{ui:Pindala}} ja {{ui:Pindala piir}}.
- Klassikaline paigutus: joonistusriba › {{ui:Ruumid}} menüü.

## Sammud

1. Vali {{ui:Pindala piir}}. Real vali {{ui:Skeem}}: Brutoehitis või Renditav. Igal skeemil on oma piirid.
2. Vali, kuidas joont teha, jaotises {{ui:Koosta viisil}}:
   - **Joonista**: klõpsa punkt punkti järel.
   - **Vali seinad: telgjoon**: klõpsa seinal, selle telgjoon on piir.
   - **Vali seinad: klõpsatud pind**: klõpsa seinal soovitud küljel; see pind on piir. Brutoehitispinna jaoks klõpsa välisseinte välisküljel.
3. Vali {{ui:Pindala}}. Vali sama skeem, sisesta soovi korral nimi, number või tüüp ja klõpsa piirjoonte sees.
4. Pindala mõõdetakse kohe. Vali see, et muuta nime, numbrit või tüüpi omadustes.

## Mis mille järel tuleb

- Seinte valimisega tehtud piir järgib seina: kui liigutad seina, mõõdetakse pindala samas sammus uuesti.
- Joonistatud piir jääb sinna, kuhu joonistasid.
- Nurgas kokku jooksvate seinte pinnad kohtuvad seal ka, nii et neli valitud seina sulgevad pindala ilma lünkadeta.
- Pindala piirid on plaanil nähtavad, kui käes on ruumi- või pindalatööriist, nii et need ei seguneks plaaniga muul ajal.

## Kui piirid ei sulgu

Pindala jääb ikka paika. See ütleb **Pole suletud** ja ei mõõda midagi, kuni piirid ümberringi ei sulgu. See on soovitus: midagi ei keelata.

## Loend

Vasakpaneel › {{ui:Loendid}} › **Pindalad**: skeem, number, nimi, tüüp, tasand, pindala ja ümbermõõt, koos kogusummaga. Klõps real valib pindala. {{ui:Laadi CSV alla}} annab sama tabeli.

## IFC-s

Pindala on IfcSpace ilma kehata: PredefinedType GFA brutoehitise skeemi jaoks, USERDEFINED koos ObjectType Rentable renditava jaoks. Sellel on GrossFloorArea ja GrossPerimeter ning netopindala puudub, nii et seda ei aeta ruumiga segi. Piir on IfcVirtualElement.

## Pole veel tehtud

- Oma skeemid (ainult Brutoehitis ja Renditav).
- Värvitäited pindalatüübi järgi.
- Reeglid, mis paigutavad piiri sinu eest, nt „klaasjooneni“.

Vt ka [Ruumid ja ruumieraldajad](topic:rooms-and-separators), [Ruumi ja pindala sildid](topic:room-and-area-tags).
