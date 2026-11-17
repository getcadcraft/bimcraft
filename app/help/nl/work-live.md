---
title: Samen aan één model werken met Live TeamWork
summary: Wat er in BimCraft verandert terwijl u in een Live TeamWork-sessie vanuit CadCraft Studio zit: ieders bewerkingen aan hetzelfde IFC-model, uw eigen ongedaan maken, en deelnemen vanuit een browser op hetzelfde netwerk.
keywords: live, live teamwork, studio live, samen, samenwerken, sessie, live delen, deelnemen, ifc, eigenschappen, hernoemen, cursor, aanwijzer, elkaar zien, namen, kleur, selectie, ongedaan maken, host
from: 32061b72
---

## Wat u leert

Wat er met een IFC-model gebeurt terwijl meerdere personen het tegelijk bewerken. CadCraft Studio start en neemt deel aan de Live TeamWork-sessie (Delen, Deelnemen); deze pagina gaat over het model zelf.

## Iedereen bewerkt tegelijk

Het model van de host komt bij iedereen die deelneemt. Hernoem elementen, wijzig hun eigenschapswaarden, plaats, wissel of verwijder bibliotheekitems en elementen zoals gewoonlijk. Uw eigen bewerkingen zijn meteen zichtbaar; die van anderen verschijnen even nadat ze die hebben gemaakt. Wanneer een bewerking verandert wat u ziet (een element geplaatst of verwijderd), tekent BimCraft het model opnieuw en behoudt uw weergave.

- **Twee personen wijzigen één element:** de latere wijziging op dezelfde regel van het model wint. Een eigenschapsset die door meerdere elementen wordt gedeeld, wordt zoals altijd gekopieerd voor het element dat u bewerkt, zodat de andere elementen hun waarden behouden.
- **Een element dat iemand net heeft verwijderd** kan niet meer worden bewerkt: uw bewerking wordt teruggedraaid en de statusbalk zegt waarom.
- Elke persoon krijgt eigen nummers voor de nieuwe lijnen in het model, zodat twee personen nooit hetzelfde nummer krijgen.

## Elkaar zien

Iedereen in de sessie heeft een eigen kleur. In de 3D-weergave ziet u de aanwijzer van elke persoon als pijl in hun kleur, met hun naam ernaast, op het element waarnaar ze wijzen, en een gestreept kader in hun kleur rond elk element dat ze hebben geselecteerd.

Aanwijzers, namen en selecties gelden alleen voor de sessie: ze worden nooit in het bestand opgeslagen en komen nooit in iemands ongedaan maken terecht. Ze glijden naar de plek waar elke persoon is, zodat ze ook bij een trage verbinding soepel blijven.

## Ongedaan maken draait uw eigen werk terug

{{ui:Ongedaan maken}} draait uw eigen laatste bewerking terug en laat die van anderen met rust. Als iemand sindsdien hetzelfde heeft gewijzigd, wordt niets teruggedraaid en de statusbalk zegt wie dat is.

## Deelnemen vanuit een browser

Een teamgenoot zonder Studio kan met een telefoon, tablet of computer op hetzelfde netwerk de afbeelding onder de code van de host scannen. BimCraft opent in de browser en opent het model van de host zodra de host u toelaat. Met een uitnodigingslink kan iemand deelnemen vanuit een ander netwerk: de host heeft een Team Cloud Plan-plaats voor de app nodig, iedereen anders doet gratis mee, en de link werkt alleen zolang de sessie van de host open is.

## Wanneer de sessie eindigt

Alleen de host slaat het model op. Iedereen anders houdt een niet-opgeslagen kopie: gebruik Opslaan als IFC als u die wilt bewaren.

:::note
Alleen het eerste model in de scène wordt gedeeld. Een ander bestand openen tijdens een sessie verlaat de sessie in dat venster.
:::
