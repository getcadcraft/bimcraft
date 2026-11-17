---
title: Sasitë te TakeoffCraft
summary: Një klik dërgon sasitë e modelit te TakeoffCraft — muret sipas tipit, çatitë sipas sipërfaqes me pjerrësi, kulmet, brinjët e jashtme dhe të brendshme, themelet, dyert dhe dritaret, kabinetet, pajisjet elektrike, sipërfaqja e dyshemesë dhe lista e prerjes së drurit — të shënuara në një plan të çdo niveli, me montimet e paketave të profesioneve mbi elementet.
keywords: llogaritje sasish, sasi, parashikim, parashikim kostosh, listë materialesh, listë e materialeve, takeoffcraft, sasi, sipërfaqe muri, sipërfaqe çatie, katrorë, themel, beton, jardë kub, listë prerjesh, dru, paketë profesionale, montim
from: c5a745af
---

## Çfarë do të bësh

Ktheje modelin në një listë materialesh dhe parashikim në TakeoffCraft. BimCraft vizaton një plan të çdo niveli në një shkallë standarde, shënon çdo sasi mbi të, dhe e vendos llogaritjen brenda PDF-së. TakeoffCraft i mat vetë shenjat, kështu që çdo numër mund të kontrollohet në fletë.

## Dërgoje

1. Kliko {{ui:Llogaritje sasish}} në shiritin e modelit (pranë {{ui:Fletët}}).
2. TakeoffCraft hapet në një skedë të re me planet. Kur pyet, zgjidh të hapësh llogaritjen që gjeti në PDF.
3. Shto çmimet e tua në tabelën e sasive të TakeoffCraft; montimet tashmë listojnë materialet.

:::note
Kur TakeoffCraft nuk është i disponueshëm këtu, butoni shkarkon PDF-në. Hape më vonë në TakeoffCraft: ai e gjen llogaritjen brenda saj.
:::

## Çfarë matet

- **Muret** sipas tipit dhe lartësisë: vijat e tyre qendrore si segmente, me lartësinë e murit te elementi, kështu që TakeoffCraft jep gjatësinë dhe sipërfaqen e murit. Çdo segment mban dyert dhe dritaret e murit, kështu që TakeoffCraft i heq një herë nga sipërfaqja e murit, sipas së njëjtës rregull si tabelat e BimCraft: të dyja përputhen për bruto, zbritje dhe neto. Të dhënat e llogaritjes për një tip muri (njësia, morteri, norma; shih [Montimet e mureve](topic:wall-assemblies)) vijnë si një rresht i çmuar mbi elementin e atij tipi. Nën një metodë matjeje tjetër nga ajo e parazgjedhur (shih [Zgjidh një metodë matjeje](topic:plan-schedules-and-pdf#choose-a-measurement-method)), llogaritja mban metodën, çdo segment mban atë që kryqëzimet heqin nga faqja e murit, dhe TakeoffCraft mat me të njëjtën metodë dhe e emërton. Një tip, njësia e të cilit ka gjatësi dhe lartësi, jep dy përbërës me sasi: njësitë për t'u porositur dhe vëllimin e mortarit, të çmuar kur norma e tipit është për njësi, për 1000 njësi ose për m³ mortar. Një numërim që bie saktë në një numër të plotë mund të jetë një njësi më shumë në TakeoffCraft, sepse transferimi rrumbullakos pozicionet në fletë.
- **Çatitë**: çdo plan çatie si sipërfaqe me pjerrësinë e vet (TakeoffCraft jep sipërfaqen e pjerrët), kulmet, brinjët e jashtme dhe të brendshme (ato përgjatë pjerrësisë së tyre), strehët dhe skajet anësore.
- **Themelet**: themelet dhe muret e themelit si segmente rreth mesit të tyre, pllakat si sipërfaqe me trashësinë e tyre, kështu që betoni del sipas vëllimit.
- **Dyert dhe dritaret** të numëruara sipas tipit, me kornizat e dritareve.
- **Kabinetet bazë** sipas gjatësisë së përparëseve të tyre.
- **Pajisjet elektrike** të numëruara sipas llojit.
- **Sipërfaqja e dyshemesë** e çdo niveli, nga dhomat e tij.
- **Lista e prerjes së drurit** nga skeleti, e numëruar në një fletë të vetën (një pikë për copë).

Aty ku një paketë profesioni ka një montim të përputhshëm — muret e jashtme dhe të brendshme, pllakat, themelet, muret e themelit, shingle-t e çatisë, kapaku i kulmit dhe i brinjëve, brinjët e brendshme, strehët, dyert e brendshme, kornizat e dritareve, kabinetet bazë, prizat, çelësat, dritat, kutitë e lidhjes dhe paneli — elementi vjen me materialet dhe formulat e veta. Paketat vijnë pa çmime dhe nuk janë shqyrtuar ende nga një parashikues.

:::tip
Planet bëhen nga modeli çdo herë që klikon, kështu që pas një ndryshimi thjesht kliko {{ui:Llogaritje sasish}} përsëri.
:::
