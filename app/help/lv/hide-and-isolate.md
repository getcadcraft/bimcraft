---
title: Paslēpt, izolēt un padarīt caurspīdīgus elementus
summary: Atlasiet vairākus elementus, paslēpiet tos, rādiet tikai tos vai rādiet tos kopā ar pārējiem caurspīdīgiem, un pēc tam atgrieziet visu.
keywords: paslēpt, izolēt, caurspīdīgs, caurspīdīgums, spoks, rentgens, rādīt visu, atkal rādīt, vairāku atlase, vairāku izvēle, ctrl klikšķis, shift klikšķis, redzamība
from: 97e98b8c
---

## Ko jūs darīsiet

Notīriet skatu līdz tam, uz ko skatāties: paslēpiet elementus, kas traucē, rādiet tikai tos, ko izvēlējāties, vai turiet pārējo ekrānā kā vāju kontūru, lai joprojām zinātu, kur atrodaties.

## Soļi

1. Atveriet IFC modeli. Skatiet [IFC modeļa atvēršana un apskate 3D](topic:open-ifc-model).
2. Noklikšķiniet uz elementa, lai to atlasītu. Lai atlasītu vairākus, turiet {{key:Mod}} vai {{key:Shift}} un noklikšķiniet uz katra. Noklikšķinot uz jau atlasīta elementa šādā veidā, tas tiek atlaists.
3. Atveriet {{ui:Rādīt}} rīkjoslā un izvēlieties, ko darīt, vai nospiediet tā taustiņu:
   - {{ui:Paslēpt}} ({{key:H}}) paslēpj atlasītos elementus.
   - {{ui:Izolēt}} ({{key:I}}) rāda tikai atlasītos elementus.
   - {{ui:Caurspīdīgs}} ({{key:T}}) rāda atlasītos elementus tādus, kādi tie ir, bet visu pārējo caurspīdīgu.
4. Noklikšķiniet uz {{ui:Rādīt visu}} tajā pašā izvēlnē vai nospiediet {{key:Shift+H}}, lai atkal parādītu visus elementus.
5. Lai nogrieztu visu ap atlasītajiem elementiem, tā vietā noklikšķiniet uz {{ui:Griezuma kaste ap atlasi}} tajā pašā izvēlnē vai nospiediet {{key:Shift+X}}. Skatiet [IFC modeļa griešana ar griezuma plakni](topic:section-plane).

## Ko jūs redzēsiet

- Ja atlasīti vairāki elementi, {{ui:Rekvizīti}} parāda, cik, un uzskaita tos pēc klases. Noklikšķiniet uz viena, lai redzētu tā rekvizītus.
- Paslēptus elementus nevar atlasīt: klikšķis trāpa tam, kas atrodas aiz tiem.
- Caurspīdīgus elementus arī nevar atlasīt, tātad varat noklikšķināt tieši cauri sienām uz to, ko izolējāt.
- Malas paslēpjas kopā ar elementu un kļūst vājas kopā ar to.
- Paslēpšana, izolēšana un caurspīdīgums paliek tādi, kādi ir, kamēr rediģējat, ievietojat bibliotēkas vienumus vai griežat modeli ar griezuma plakni. Atverot citu modeli, viss atkal tiek rādīts.

## Biežākās kļūdas

- **Izvēlnes vienumi ir pelēki.** Nekas nav atlasīts. Vispirms noklikšķiniet uz elementa; norādiet uz vienumu, lai izlasītu, kāpēc tas nevar darboties.
- **Izolēšana parādīja sienu, kuru biju paslēpis.** Izolēšana rāda tieši to, ko izvēlējāties, neatkarīgi no tā, vai tas bija paslēpts.
- **Trūkst viss stāvs.** Tas ir saraksts {{ui:Stāvi}}, nevis {{ui:Rādīt visu}}: atzīmējiet stāvu vēlreiz.

## Tālāk

- [Stāvu, telpu un malu rādīšana un paslēpšana](topic:storeys-and-spaces)
- [IFC modeļa griešana ar griezuma plakni](topic:section-plane)
