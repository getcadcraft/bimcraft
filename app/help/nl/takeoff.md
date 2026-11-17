---
title: Hoeveelheden naar TakeoffCraft
summary: Met één klik sturen de hoeveelheden van het model naar TakeoffCraft: wanden per type, daken per hellend oppervlak, nokken, walmlijnen en dakdalen, funderingen, deuren en ramen, onderkasten, elektrische apparaten, vloeroppervlak en de snijlijst hout, gemarkeerd op een plattegrond van elk niveau, met de samenstellingen van de vakpakketten op de posten.
keywords: opmeten, hoeveelheidsopmeting, raming, schatting, materiaallijst, stuklijst, takeoffcraft, hoeveelheden, wandoppervlak, dakoppervlak, vierkanten, funderingsvoet, beton, cubic yards, snijlijst, hout, vakpakket, samenstelling
from: c5a745af
---

## Wat u gaat doen

Maak van het model een materiaallijst en raming in TakeoffCraft. BimCraft tekent een plattegrond van elk niveau op een standaardschaal, markeert elke hoeveelheid erop, en zet de opmeting in de PDF. TakeoffCraft meet de markeringen zelf, dus elk getal kan op het blad worden gecontroleerd.

## Verzenden

1. Klik op {{ui:Opmeten}} in de modelbalk (naast {{ui:Bladen}}).
2. TakeoffCraft opent in een nieuw tabblad met de plattegronden. Wanneer het vraagt, kies dan om de opmeting die het in de PDF heeft gevonden te openen.
3. Voeg uw prijzen toe in de hoeveelhedentabel van TakeoffCraft; de samenstellingen staan al met de materialen erin.

:::note
Wanneer TakeoffCraft hier niet beschikbaar is, downloadt de knop in plaats daarvan de PDF. Open hem later in TakeoffCraft: die vindt de opmeting erin.
:::

## Wat wordt opgemeten

- **Wanden** per type en hoogte: hun hartlijnen als lopende stukken, met de wandhoogte op het item, zodat TakeoffCraft de lengte en het wandoppervlak geeft. Elk stuk draagt de deuren en ramen van de wand, zodat TakeoffCraft die één keer van het wandoppervlak aftrekt, volgens dezelfde regel als de staten van BimCraft: beide komen overeen op bruto, aftrek en netto. De opmetingsgegevens van een wandtype (eenheid, mortel, tarief; zie [Wandsamenstellingen](topic:wall-assemblies)) komen mee als één geprijsde regel op het item van dat type. Bij een andere meetmethode dan de standaard (zie [Een meetmethode kiezen](topic:plan-schedules-and-pdf#choose-a-measurement-method)) draagt de opmeting de methode, draagt elk stuk wat de aansluitingen van zijn wandvlak aftrekken, en meet TakeoffCraft volgens dezelfde methode en noemt die. Een type waarvan de eenheid een lengte en een hoogte heeft, levert twee componenten met hoeveelheden: de eenheden om te bestellen en het mortelvolume, geprijsd wanneer het tarief per eenheid, per 1000 eenheden of per m³ mortel is. Een telling die precies op een geheel getal uitkomt, kan in TakeoffCraft één eenheid hoger zijn, omdat de overdracht posities op het blad afrondt.
- **Daken**: elk dakvlak als oppervlak met zijn helling (TakeoffCraft geeft het hellende oppervlak), nokken, walmlijnen en dakdalen (walmlijnen en dakdalen langs hun helling), dakgoten en windveren.
- **Funderingen**: funderingsvoeten en funderingsmuren als stukken rond hun middellijnen, vloerplaten als oppervlakken met hun dikte, zodat het beton via het volume uitkomt.
- **Deuren en ramen** geteld per type, met raamafwerking.
- **Onderkasten** per lengte van hun fronten.
- **Elektrische apparaten** geteld per soort.
- **Vloeroppervlak** van elk niveau, uit zijn ruimten.
- **De snijlijst hout** uit het houtskelet, geteld op een eigen blad (één stip per stuk).

Waar een vakpakket een passende samenstelling heeft (buiten- en binnenwanden, vloerplaten, funderingsvoeten, funderingsmuren, dakpannen, nok- en walafdekking, dakdalen, dakgoten, binnendeuren, raamafwerking, onderkasten, stopcontacten, schakelaars, lampen, aansluitdozen en het paneel), krijgt het item zijn materialen en formules. De pakketten komen zonder prijzen en zijn nog niet door een calculator nagekeken.

:::tip
De plattegronden worden elke keer opnieuw gemaakt van het model waarop u klikt, dus klik na een wijziging gewoon nogmaals op {{ui:Opmeten}}.
:::
