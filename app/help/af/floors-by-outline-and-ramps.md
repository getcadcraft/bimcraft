---
title: Vloere van enige vorm, openings en hellingbane
summary: Teken 'n vloer of blad volgens sy omlyning ('n balkon, 'n uitkraging, 'n landing), sny openings daarin, en teken hellingbane met hul landings.
keywords: vloer, blad, omlyning, balkon, uitkraging, landing, dek, vloeropening, gat, skag, leegte, hellingbaan, helling, toeganklike hellingbaan, rolstoelhellingbaan, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Wat jy gaan doen

Maak vloere wat nie vertrekke volg nie, soos 'n balkon buite die mure, en teken hellingbane tussen vlakke.

## Teken 'n vloer volgens sy omlyning

1. Skakel {{ui:Teken}} aan, kies die vlak, en kies dan {{ui:Bou}} › {{ui:Vloer volgens omlyning}}.
2. In die ry onder die gereedskap kies die soort (betonblad of houtvloer), sy gebruik (vloer of landing), sy dikte en hoe ver sy bo-kant bo die vlak is (0 = gelyk met die vloer van die vlak; 'n negatiewe waarde stel dit laer).
3. Klik die hoeke. Die gereedskap pak aan by mure, roosterlyne en hul kruisings; hou {{key:Shift}} vas om 'n rand reg te hou. Die lengte van elke rand en die oppervlakte wys soos jy werk. {{key:Backspace}} neem die laaste hoek terug.
4. Klik die eerste hoek weer, dubbelklik, of druk {{key:Enter}} om klaar te maak.

## Sny 'n opening

Klik die vloer (in die 3D-aansig, of sy omlyning op die plan), en klik dan in {{ui:Eienskappe}} op {{ui:Voeg 'n opening by}}. Klik die hoeke van die opening binne die vloer en voltooi soos hierbo. Die vloer se {{ui:Eienskappe}} lys sy openings, elk met {{ui:Skrap}}, en sy oppervlakte daarsonder.

## Teken 'n hellingbaan

1. Kies {{ui:Bou}} › {{ui:Hellingbaan}}. Stel sy breedte, en of dit **na die vlak bo** gaan of **op 'n styging** wat jy tik.
2. Kies hoe dit gestel word: **volgens helling** (1:12 om mee te begin; die hellingbaan is so lank as wat die styging vereis) of **volgens lengte** (jou tweede klik stel die lengte, en die helling volg).
3. Klik die voet van die hellingbaan (die middel van sy onderste rand), en klik dan die rigting op. Die voorskou wys sy lengte, sy lope en sy helling.

'n Styging van meer as 30 duim (760 mm) word in lope verdeel met 'n 5-voet (1525 mm) landing tussen hulle. Dit is algemene beplanningswaardes, nie jou kode nie: kontroleer die reëls waar jy bou. 'n Hellingbaan steiler as 1:12 word in sy {{ui:Eienskappe}} gemerk.

## Wat jy behoort te sien

- Elke vloer, opening en hellingbaan is een stap: {{key:Mod+Z}} neem dit terug.
- Op die plan: 'n getekende vloer se omlyning ('n opening word gekruis geteken), en 'n hellingbaan se omlyning, lope, landings en 'n pyl op met sy helling.
- Eienskappe vir 'n getekende vloer (soort, gebruik, dikte, bo-kant, oppervlakte, openings) en vir 'n hellingbaan (breedte, bo-kant, styging, helling of lengte); {{key:Delete}} verwyder enige een.
- 'n Hellingbaan na die vlak bo volg daardie vlak wanneer sy hoogte verander.
- In die IFC-lêer: 'n getekende vloer is 'n blad (IfcSlab, 'n vloer of 'n landing) met sy openings uitgesny (IfcOpeningElement); 'n hellingbaan is 'n IfcRamp, gemaak van skuins lope (IfcRampFlight) en landingblaaie, met sy helling en breedte.

:::note
Vloere wat so getekend is, bly waar jy hulle geteken het. Vloere wat met {{ui:Vloer}} gemaak is, volg die vertrekke wanneer die mure beweeg: sien [Vertrekke, vloere, plafonne en dakke](topic:floors-and-roofs).
:::
