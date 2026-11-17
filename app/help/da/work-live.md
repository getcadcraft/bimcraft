---
title: Arbejd på én model sammen med Live TeamWork
summary: Hvad der ændrer sig i BimCraft, når du er i en Live TeamWork-session fra CadCraft Studio: alles redigeringer i den samme IFC-model, din egen fortryd og tilslutning fra en browser på samme netværk.
keywords: live, live teamwork, studio live, sammen, samarbejd, session, del live, deltag, ifc, egenskaber, omdøb, markør, pointer, se hinanden, navne, farve, valg, fortryd, vært
from: 32061b72
---

## Hvad du lærer

Hvad der sker med en IFC-model, når flere personer redigerer den samtidig. CadCraft Studio starter og deltager i Live TeamWork-sessionen (Del, Deltag); denne side handler om selve modellen.

## Alle redigerer samtidig

Værtens model kommer til alle, der deltager. Omdøb elementer, ændr deres egenskabsværdier, placér, udskift eller fjern bibliotekselementer og elementer som vanligt. Dine egne redigeringer vises med det samme; andres vises kort efter, at de har foretaget dem. Når en redigering ændrer det, du ser (et element placeres eller fjernes), tegner BimCraft modellen igen og bevarer din visning.

- **To personer ændrer ét element:** den senere ændring af samme linje i modellen vinder. Et egenskabssæt, som flere elementer deler, kopieres for det element, du redigerer, som altid, så de andre beholder deres værdier.
- **Et element, som nogen lige har fjernet,** kan ikke redigeres længere: din redigering tages tilbage, og statuslinjen forklarer hvorfor.
- Hver persons nye linjer i modellen får egne numre, så to personer aldrig får det samme nummer.

## Se hinanden

Alle i sessionen har deres egen farve. I 3D-visningen ser du hver persons markør som en pil i deres farve med deres navn ved siden af, på det element, de peger på, og en stiplet boks i deres farve rundt om hvert element, de har valgt.

Markører, navne og valg gælder kun for sessionen: de gemmes aldrig i filen og kommer aldrig i nogens fortryd. De glider hen til, hvor hver person er, så de også forbliver glatte på en langsom forbindelse.

## Fortryd fortryder dit eget arbejde

{{ui:Fortryd}} fortryder din egen sidste redigering og lader alles andres være. Hvis nogen har ændret det samme siden da, fortrydes intet, og statuslinjen siger, hvem.

## Deltag fra en browser

En holdkammerat uden Studio kan scanne billedet under værtens kode med en telefon, tablet eller computer på samme netværk. BimCraft åbner i browseren og åbner værtens model, når værten lukker dig ind. Et invitationslink gør det muligt at deltage fra et andet netværk: værten skal have en plads i Team Cloud Plan til appen, alle andre deltager gratis, og linket virker kun, mens værtens session er åben.

## Når sessionen slutter

Kun værten gemmer modellen. Alle andre beholder en ikke-gemt kopi: Gem som IFC, hvis du vil beholde den.

:::note
Kun den første model i scenen deles. Hvis du åbner en anden fil under en session, forlader du sessionen i det vindue.
:::
