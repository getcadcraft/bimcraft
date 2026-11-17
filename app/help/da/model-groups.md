---
title: Modelgrupper
summary: Gør udvalgte elementer til én navngivet gruppe, placér gruppen igen et andet sted, og ændr én kopi for at ændre dem alle.
keywords: gruppe, modelgruppe, gruppering, opløs gruppe, instans, kopi, gentag, typisk enhed, fag, lejlighed, redigér gruppe, IfcGroup
from: 121c5027
---

## Hvad du gør

Gruppér et typisk fag, placér det flere gange, og ændr alle kopierne ved at ændre én.

## Hvor værktøjet er

- Båndlayouts: {{ui:Arkitektur}} › **Model** › {{ui:Modelgruppe}}.
- Klassisk layout: værktøjslinjen {{ui:Tegn}} › menuen {{ui:Rum}} › Modelgruppe.

## Trin

1. Med Vælg vælger du elementerne: klik på ét, og Ctrl+klik eller Shift+klik på de andre.
2. Vælg {{ui:Modelgruppe}}. De bliver med det samme til en gruppe. Skriv et {{ui:Gruppenavn}} i rækken først for at navngive den, eller skriv et navn bagefter for at omdøbe den.
3. Tryk {{ui:Placér en til}} og klik, hvor kopien skal stå: dens nederste venstre hjørne går til klikket.
4. Ændr en hvilken som helst kopi: flyt en vægende, ændr størrelsen på en dør, slet en søjle. Alle andre kopier af gruppen ændres i samme trin, og ét Fortryd tager det hele tilbage.
5. Mens {{ui:Modelgruppe}} er aktiv, vælger et klik på et element hele dets gruppe.

## Andre ting du kan gøre

- {{ui:Tilføj de valgte}}: tilføj flere elementer til den gruppe, du valgte sidst.
- {{ui:Opløs gruppe}}: denne kopi bliver til almindelige elementer igen. De andre kopier forbliver en gruppe.
- Flyt en hel kopi med Flyt: den er samme gruppe på et nyt sted; de andre flyttes ikke.
- Slet elementerne i en kopi, og kopien er væk.

## Hvad en gruppe kan indeholde

Vægge med deres døre og vinduer, søjler og tegnede gulve kan placeres igen og holdes ens. En gruppe må også have andre elementer, men så kan den ikke placeres igen endnu; rækken siger hvorfor.

Kopier flyttes, men de drejes eller spejles ikke.

## I IFC

En gruppe er en IfcGroup med en IfcRelAssignsToGroup til sine medlemmer, som forbliver almindelige vægge, søjler og gulve. Hver kopi af én gruppe har samme definitions-id.

## Ikke lavet endnu

- At dreje eller spejle en kopi.
- Trapper, tage, rumgulve og biblioteksemner i en gruppe, der placeres igen.
- En vægs profil, skråning og vægåbninger overføres ikke til kopier.
- Grupper inde i grupper.

Se også [Flyt, justér og fordel](topic:move-align-distribute).
