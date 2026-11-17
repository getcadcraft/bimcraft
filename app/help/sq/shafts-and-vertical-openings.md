---
title: Shakte dhe hapje përmes dyshemeve
summary: Një shakt është një kontur i vetëm që pret çdo dysheme, tavan dhe çati mes dy niveleve. Një hapje vertikale pret një prej tyre. Hapja e murit pret një mur.
keywords: shakt, shakt ashensori, shakt lifti, hapje shkalle, ngritës shkalle, hapje vertikale, hapje dyshemeje, hapje tavani, hapje çatie, hapje dritareje çatie, vrimë në dysheme, hapje muri, IfcOpeningElement, zbritje, sipërfaqe neto
from: 8e9e1641
---

## Çfarë do të bëni

Prisni një shakt ashensori përmes një ndërtese me një skicë të vetme, prisni një vrimë në një dysheme dhe lexoni çfarë u hoq nga sipërfaqet.

## Ku janë veglat

- Paraqitjet me shirit: {{ui:Arkitekturë}} › **Hapje** › {{ui:Shakt}}, {{ui:Hapje vertikale}} dhe {{ui:Hapje muri}}.
- Paraqitja klasike: shiriti Vizato › menuja {{ui:Dhomat}} (Shakt, Hapje vertikale) dhe › menuja {{ui:Muret}} (Hapje muri).

## Një shakt

1. Hapni planin e nivelit ku fillon shakti. Zgjidhni {{ui:Shakt}}.
2. Në rresht zgjidhni {{ui:Niveli bazë}} dhe {{ui:Niveli i sipërm}}, dhe zhvendosjet nëse ai fillon ose mbaron mbi ose nën ta.
3. Klikoni cepat e konturit. Klikoni përsëri cepin e parë, bëni dy klikime ose shtypni {{key:Enter}} për ta përfunduar.
4. Çdo dysheme, tavan dhe çati mes dy lartësive pritet. Rreshti i statusit thotë sa janë.

Shakti është një gjë e vetme. Zgjidhni konturin e tij në çdo nivel që kalon: **Vetitë** kanë emrin, nivelet dhe zhvendosjet e tij, çfarë pret dhe sipërfaqen e hequr. Ndryshojeni dhe çdo hapje ndjek. Fshijeni dhe çdo hapje shkon. Secila është një hap i vetëm zhbërjeje.

Ai vazhdon të presë: një dysheme e bërë më vonë mes niveleve të tij pritet pa u kërkuar, dhe një dysheme që fshini lirohet.

Dyshemeja mbi të cilën qëndron shakti nuk pritet (maja e saj është baza). Jepni bazës një zhvendosje negative për ta prerë edhe atë. Jepni majës një zhvendosje pozitive për të kaluar përmes çatisë.

## Një hapje vertikale

1. Zgjidhni {{ui:Hapje vertikale}}. Në rresht zgjidhni çfarë të pritet: dyshemenë, tavanin ose çatinë.
2. Klikoni cepat e konturit dhe përfundoni si më sipër.
3. Dyshemeja, tavani ose çatia e këtij niveli nën kontur pritet. Ajo i përket vetëm këtij elementi: fshini dyshemenë dhe hapja shkon me të.

## Një hapje muri

{{ui:Hapje muri}} është vegla e [Formësimi i murit](topic:wall-shape): klikoni një mur në plan, ose dy cepa në faqen e tij në 3D.

## Sasitë

Sipas rregullit të matjes për dyshemetë, sipërfaqja neto e një elementi është sipërfaqja e tij bruto minus çfarë është prerë prej tij. Një shakt ose një hapje vertikale është një zbritje në çdo dysheme dhe tavan që pret; tabelat e Dyshemeve dhe të Përfundimeve dhe sasitë IFC tregojnë të njëjtat numra. Në një çati zbritja është sipërfaqja e sipërfaqes së çatisë: sipërfaqja e planit e ndarë me kosinusin e pjerrësisë.

Një kontur që del mbi skaj zbret vetëm pjesën që shtrihet mbi elementin.

## Nëse nuk pritet asgjë

Një shakt pa asgjë në rrugën e vet bëhet akoma dhe e thotë këtë: do të presë çfarë të ndërtohet atje më vonë. Një hapje vertikale ka nevojë për diçka nën të; pa asgjë atje, rreshti i statusit e thotë këtë dhe asgjë nuk bëhet.

## Në IFC

Çdo prerje është një IfcOpeningElement me IfcRelVoidsElement te elementi që pret, kështu që çdo program IFC e shfaq vrimën. Një çati pritet faqe për faqe. Vetë shakti është një IfcGroup e hapjeve të tij.

## Ende jo të ndërtuara

- Konturet e lakuara.
- Muret e një shakti: vizatojini me veglën Mur.
- Modifikimi i konturit duke tërhequr cepat e tij (ndryshojeni te Vetitë, ose fshijeni dhe skicojeni sërish).
- Vetitë e vetë një dysheme të vizatuar tregojnë sipërfaqen e saj minus vetëm hapjet e veta; tabelat dhe sasitë IFC përfshijnë ato të shaktit.

Shih gjithashtu [Dhomat dhe ndarësit e dhomave](topic:rooms-and-separators).
