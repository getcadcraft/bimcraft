---
title: Maak 'n IFC-model oop en kyk rond in 3D
summary: Maak 'n IFC-lêer oop, wentel, pan en zoem, en gebruik Pas, Bo, Voor en Syaansig om jou oriëntasie te kry.
keywords: ifc, 3d, wentel, pan, zoem, pas, bo-aansig, voor-aansig, syaansig, navigeer, aansigkubus, kamera
from: 68b460dd
---

## Wat jy sal doen

Maak 'n IFC-model oop, beweeg rondom dit in 3D en spring na die standaard aansigte. Ongeveer vyf minute.

Jy het 'n `.ifc`-lêer nodig. Die meeste BIM-programme voer een uit; in Revit is dit **File > Export > IFC**. Sien [Kry 'n projeklêer in 3D deur IFC](topic:rvt-to-ifc).

## Stappe

1. Klik {{ui:Choose a file}} (of die sleepgebied links bo).
2. Kies jou `.ifc`-lêer en bevestig.
3. Wag tot die statuslyn klaar is. Dit wys "Begin die IFC-enjin…" die eerste keer, dan "Lees die model…" en "Bou geometrie: … van … elemente".
4. Kyk na die model: dit maak oop in 'n driekwart-aansig, op die skerm gepas.
5. Klik {{ui:Bo}} in die nutsbalk bo die model om reguit af te kyk.
6. Klik {{ui:Voor}} om na die voorkant te kyk, en dan {{ui:Syaansig}} om van die kant af te kyk.
7. Klik {{ui:Pas}}, of druk {{key:F}}, om terug te gaan na die driekwart-aansig van die hele model.

## Wat jy behoort te sien

- Die model in die middel, met dun donker rande vir 'n tekeningagtige voorkoms.
- Die {{ui:File}}-paneel links: die lêernaam, grootte, IFC-skema (byvoorbeeld IFC2X3 of IFC4), projeknaam, fase, die program waarvan dit uitgevoer is, outeur, uitvoerdatum, en tellings van elemente en driehoeke.
- Die lyste {{ui:Storeys}} en {{ui:Elements}} daaronder.
- Die statuslyn: "Oopgemaak *lêernaam*: *n* elemente in *s* s".

## Rondbeweeg

:::mouse
| Om | Doen dit |
|---|---|
| Wentel | Sleep met die linkerknoppie |
| Pan | Sleep met die regterknoppie, of hou {{key:Shift}} (of {{key:Mod}}) vas en sleep met die linkerknoppie |
| Zoem | Rol die wiel, of sleep met die middelknoppie |
| Sien alles | Druk {{key:F}} of klik {{ui:Pas}} |
:::

:::mac mouse
Op 'n sleepblad: sleep met een vinger ingedruk om te wentel; hou {{key:Shift}} of {{key:Mod}} vas en sleep om te pan; rol met twee vingers of knyp om te zoem. 'n Klik met twee vingers is 'n regterklik, en jy kan daarmee sleep om te pan, maar {{key:Shift}} en sleep is makliker.
:::

:::touch
| Om | Doen dit |
|---|---|
| Wentel | Sleep met een vinger |
| Zoem | Knyp met twee vingers |
| Pan | Beweeg twee vingers saam |
| Sien alles | Tik {{ui:Pas}} |
:::

Wentel draai altyd om 'n punt in die middel van die model. Pan skuif daardie punt, so na 'n lang pan kan die wenteling skeef voel: klik {{ui:Pas}} om dit terug te stel.

## Geskakeer, rande of draadraamwerk

Drie klein knoppies net bo die aansigkubus kies hoe die model geteken word: {{ui:Geskakeer}}, {{ui:Geskakeer met rande}} (die standaard) en {{ui:Draadraamwerk}}. Hulle is ook opdragte ({{ui:View}} in die kieslyste en die Pasmaak-lys), so hulle kan sleutels van hul eie hê. {{ui:Plan}}, {{ui:Split}} en {{ui:3D}} is in die {{ui:View}}-ry van die nutsbalk.

## Algemene foute

- **Verwag benoemde aansigte.** BimCraft het vier vaste aansigte ({{ui:Pas}}, {{ui:Bo}}, {{ui:Voor}}, {{ui:Syaansig}}), die aansigkubus in die onderste regterhoek en vrye wenteling. Dit stoor nie aansigte nie.
- **Soek na planne en snitte.** Daar is nie 2D-planne of snitblokke in hierdie weergawe nie. Sny die model met een {{ui:Snit}}-vlak ([Sny 'n IFC-model met 'n snitvlak](topic:section-plane)), of skakel verdiepings af: [Wys en versteek verdiepings, ruimtes en rande](topic:storeys-and-spaces).
- **'n Projeklêer oopmaak en 3D verwag.** 'n Projeklêer maak oop as 'n lêerkaart. Voer eers IFC uit.
- **'n `.ifczip` oopmaak.** Pak dit uit, of voer gewone `.ifc` uit.
- **'n Baie groot model maak die oortjie stadig of laat dit ineenstort.** Sien [Blaaiers, toestelle en geheue](topic:platforms).

## Volgende

[Kies 'n element en lees sy eienskappe](topic:inspect-element).
