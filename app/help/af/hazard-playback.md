---
title: Speel 'n vloed, wind of 'n aardbewing op die gebou
summary: Water wat deur die vertrekke styg, winddruk op elke verdieping, of 'n aardbewing wat die verdiepings skud, gespeel op 'n plan of 'n aansig met 'n tydskuif. Eenvoudige modelle met hul aannames gelys; nie 'n kodetoets of 'n strukturele ontwerp nie.
keywords: gevaar, vloed, wind, aardbewing, seismies, verplasing, swaai, basisskuifkrag, watervlak, klimaat, scenario, seevlak, afspeel, verdieping, periode
from: ff0d34d1
---

Die {{ui:Gevaarspeel}}-afdeling van die linkerpaneel speel 'n gevaar op die oop IFC-model. Niks in die model word verander nie.

:::warning
Dit is **eenvoudige modelle om te sien wat 'n gevaar aan hierdie uitleg doen**, nie 'n vloedstudie, 'n windkodetoets of 'n strukturele ontwerp nie. Elke resultaat lys sy aannames.
:::

## Vloed

Stel die hoogste watervlak bo die laagste vloer en die minute om te styg, te hou en te daal. Water kom 'n vertrek binne deur 'n opening waarvan die drempel dit oorskry het, en vertrekke wat deur openings onder die water met nat vertrekke verbind is, staan op dieselfde vlak (kwasi-statties). Die tabel gee wanneer elke vertrek die eerste keer nat word en hoe diep; die plan speel dit af. Tik die meeste water wat 'n vertrek mag kry, en vertrekke daarbo is waarskuwings. **Klimaattoekoms:** laai jou eie scenario-lêer (JSON of CSV met 'n jaar, 'n seevlakstyging en 'n vloedfaktor) en kies 'n jaar. Of skakel die Klimaattoekoms-byvoeging aan en kies 'n scenario en 'n jaar: die vloed loop twee keer, huidig langs toekomstig (sien "Klimaattoekoms: 2050- en 2080-vloed, hitte en veldbrand"). Die soorte Veldbrandblootstelling en Hitte: toekomstige weerlêer is in dieselfde lys.

## Wind

Die druk volg ½ρV² met die spoed wat met die hoogte styg; die krag op 'n verdieping is daardie druk maal 'n windstootfaktor, die twee drukkoëffisiënte, die breedte en die verdieping se hoogte. Jy kry skuifkrag, omkantelmoment en die swaai.

## Aardbewing

'n Skuifgebou: 'n massa per vloer (voetspoor × kilogram per vierkante meter, wat jy stel), dieselfde styfheid in elke verdieping aangepas by die eerste periode wat jy gee (een tiende van 'n sekonde per verdieping as jy dit leeg laat, en dit sê so), demping, en 'n gemaakte grondbeweging (’n puls of gefiltreerde geraas) by die piekversnelling wat jy kies. Die resultaat is elke verdieping se verplasing, die vloerversnellings en die basisskuifkrag; die aansig speel die swaai, geteken groter as wat dit is. Tik 'n verplasingsverhouding wat jy toelaat, en verdiepings daarbo is waarskuwings. Dit is elasties: niks swig of kraak nie.

## Vloerstyfheid uit die Analise-raamwerk

Vir 'n aardbewing of vir windswaai, kies **Die Analise-raamwerk** as die bron van die styfheid in plaas van 'n periode te tik. Elke vloer word op sy beurt sywaarts gedruk, die raamwerk (balke, kolomme, verstywing, vloerplate) word opgelos, en die vloere se styfheid met alles wat saamwerk, dryf die lopie aan. Die gewig is die lede se eie plus die vloerlading per vierkante meter wat jy op elke vloer se plankassie stel. Die werklike eerste periode word gewys. Dit is elasties: niks swig nie, en wringing word nie gemodelleer nie. Vir wind is die verdieping-kragte steeds die aangenome een hierbo (’n magswetprofiel, jou windstootfaktor en die vaste drukkoëffisiënte, nie 'n windkode nie); slegs die swaai kom uit die raamwerk, deur die raamwerk se volle styfheidsmatriks teen daardie kragte op te los. Die model benodig 'n IFC met 'n raamwerk wat die Analise-oortjie kan lees.

## Eenhede

Waterdieptes, vloer-tot-vloer swaai en verplasing, afstande en oppervlaktes word in die {{ui:Eenhede}} gewys wat jy gekies het. Kragte (kN), tye en versnellings behou hul eie eenhede, en 'n waarde wat jy in 'n boks tik wat in meter gemerk is, bly in meter. Dieselfde geld vir die ontruiming-, dagligte-, verwarmings- en verkoelings- en meubileringsresultate: lengtes, oppervlaktes en volumes volg jou keuse; druk, vloei, temperatuur, energie en krag word nooit omgeskakel nie.
