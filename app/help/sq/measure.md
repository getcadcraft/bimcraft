---
title: Mas distancat, sipërfaqet e fytyrave dhe vendndodhjet në 3D
summary: Mas midis dy pikave të një modeli IFC me kapje te kthesat dhe skajet, lexo ndryshimin përgjatë X, Y dhe Z, dhe mas sipërfaqen e një fytyre të sheshtë.
keywords: mas, matje, distancë, gjatësi, përmasë, sipërfaqe, sipërfaqe fytyre, kapje, kthesë, skaj, shirit, vizore, hapësirë e lirë, vendndodhje, gjerësi gjeografike, gjatësi gjeografike, lat long, koordinata, georeferencë, konvertim hartës, EPSG, rilevim, eastings, northings, WGS 84, datum
from: 5f430bba
---

## Çfarë do të bësh

Kontrollo një hapësirë të lirë, gjatësinë e një muri ose madhësinë e një fytyre direkt nga modeli, pa hapur programin e projektimit.

## Hapat

1. Hap një model IFC.
2. Kliko {{ui:Mas}} në shiritin e veglave, ose shtyp {{key:M}}. Hapet një shirit në fund të pamjes.
3. **Një distancë:** me {{ui:Distanca}} të zgjedhur, kliko pikën e parë, pastaj të dytën. Pranë një kthese treguesi kapet te ajo, pranë një skaji kapet te skaji; etiketa e vogël te treguesi thotë cili. Çdo çift klikimesh bën një matje.
4. **Sipërfaqja e një fytyre:** zgjidh {{ui:Sipërfaqja e fytyrës}} dhe kliko një fytyrë. E gjithë fytyra e sheshtë ndriçohet dhe shfaqet sipërfaqja e saj.
5. **Vija të drejta:** mbaj {{key:Shift}} ndërsa zgjedh pikën e dytë, ose shtyp {{ui:Drejt}} në shirit për ta mbajtur të ndezur. Vija atëherë shkon përgjatë boshtit ku treguesi është më afër (në një pamje nga lart, përgjatë X ose Y të planit; në pamje të tjera përgjatë X, Y ose Z), dhe etiketa e treguesit thotë "drejt përgjatë një boshti". {{key:M}} ende fillon dhe ndal Mas.
6. Kliko {{ui:Pastro}} për të hequr matjet, ose {{ui:U krye}} (ose {{key:Esc}}) për të ndaluar matjen.

## Çfarë duhet të shohësh

- Një vijë midis dy pikave me gjatësinë e saj mbi të, dhe në shirit gjatësinë me sa shkon përgjatë X, Y dhe Z (në boshtet e modelit, Z lart), të gjitha në {{ui:Njësitë}} të zgjedhura në shiritin e veglave.
- Sipërfaqja e një fytyre në metra katrorë, mbi fytyrën dhe në shirit.
- Etiketat qëndrojnë mbi matjet e tyre ndërsa rrotullon, lëviz dhe zmadhon.
- Ndërsa mat, klikimet nuk zgjedhin elemente. Një plan ose kuti prerjeje ende e pret modelin, dhe mund të matësh atë që shfaq, duke përfshirë fytyrat e prera.

## Ku është një pikë në tokë

Kliko {{ui:Vendndodhja}} në shiritin e matjes, pastaj kliko një pikë në model (kapet te kthesat dhe skajet si distancat). Shiriti shfaq:

- **gjerësinë dhe gjatësinë gjeografike**, në gradë dhjetore dhe në gradë, minuta dhe sekonda, në WGS 84 si fillim;
- **koordinatat e hartës** (lindore dhe veriore, të shkruara në {{ui:Njësitë}} të zgjedhura në shiritin e veglave) në sistemin e hartës së vetë modelit, për shembull `EPSG:28356`;
- **lartësinë** dhe datumin vertikal që emëron skedari, dhe **datumin e vet** të skedarit (për shembull GDA94).

{{ui:Kopjo}} i vendos të gjitha në kujtesën e ndërmjetme, në një rresht. Ndrysho sistemin në të cilin janë gjerësia dhe gjatësia te {{ui:Cilësimet}} › BimCraft › {{ui:Vendndodhja}}: WGS 84 (si GPS dhe hartat në web), datumi i vetë skedarit, ose një tjetër i zakonshëm si ETRS89 ose NAD83.

Kjo kërkon një model të georeferuar: një të eksportuar me koordinata hartës (një konvertim hartës në një sistem të projektuar me kod EPSG). Një model që ka vetëm gjerësi dhe gjatësi gjeografike të vendit merr një pozicion të përafërt, të llogaritur nga pika e vendit dhe veriu i vërtetë, dhe shiriti e thotë këtë. Me disa modele të hapura, çdo pikë përdor georeferencën e modelit të vet.

:::note
Kalimi midis datumeve (për shembull GDA94 në WGS 84) bëhet pa skedarë rrjete, prandaj është i saktë deri në disa metra; rreshti i statusit thotë sa i saktë është. Vetë koordinatat e hartës janë të sakta.
:::

## Gabime të zakonshme

- **"…nuk ka georeferencë".** Skedari nuk ka konvertim hartës dhe as gjerësi e gjatësi gjeografike të vendit. Eksportoje përsëri me sistemin e koordinatave të caktuar (koordinatat e përbashkëta / pika e rilevimit në mjetin e projektimit).
- **Koordinatat e hartës, por pa gjerësi dhe gjatësi gjeografike.** Skedari e emëron sistemin e hartës pa kod EPSG, ose me një kod që nuk është në listë; rreshti i statusit thotë cili.

- **Pika bie mbi fytyrë, jo mbi kthesë.** Kapja shikon elementin nën treguesin. Afrohu më shumë te kthesa, ose zmadho.
- **Sipërfaqja është më e vogël se sa pritet.** Hapjet nuk përfshihen, dhe një fytyrë që përkulet është disa fytyra: kliko secilën.
- **{{key:Esc}} ndaloi matjen.** {{key:Esc}} i parë heq një distancë gjysmë të bërë; i dyti ndalon.

## Më tej

- [Pritni një model IFC me një plan prerjeje](topic:section-plane)
- [Fshih, izolo dhe shiko përmes elementeve](topic:hide-and-isolate)
