---
title: Ruimten, vloeren, plafonds en daken
summary: Ruimten ontstaan zodra de wanden ze sluiten; geef een ruimte of het hele gebouw een vloer en een plafond, en zet een walmdak of zadeldak op de wanden. Alles volgt wanneer de wanden verschuiven.
keywords: ruimte, ruimten, space, oppervlakte, omtrek, vloer, vloerplaat, onderlaag, plafond, dak, walmdak, zadeldak, dakhelling, overstek, dakrand, nok, dakdal, 6/12
from: 1fb1813c
---

## Wat u gaat doen

Maak de schil van het gebouw af. Ruimten ontstaan vanzelf uit de wanden; vloeren, plafonds en het dak kosten elk één klik. Omdat ze uit de wanden worden afgeleid, volgen ze wanneer de wanden verschuiven.

## Ruimten

Elke ruimte die door getekende wanden is omsloten, is een ruimte. Ze verschijnt zodra de laatste wand haar sluit, met een nummer (101, 102 … op de eerste verdieping, 201 … op de volgende) en een naam (**Ruimte 1**, **Ruimte 2** …), en haar oppervlakte staat in het midden op de plattegrond.

- Met {{ui:Selecteren}} aan klikt u in een ruimte om die te selecteren. Wijzig in **Eigenschappen** de **Naam** (bijvoorbeeld `Keuken`) en het **Nummer**; de oppervlakte en de omtrek worden getoond.
- Verwijdert u een wand tussen twee ruimten, dan worden ze één ruimte; tekent u een wand dwars door een ruimte, dan worden het er twee. Een ruimte behoudt haar naam en nummer terwijl de omringende wanden verschuiven.
- Een ruimte kan niet op zichzelf worden verwijderd: zij is de ruimte die de wanden vormen.

Oppervlakten worden gemeten binnen de wandvlakken. Ruimten worden opgeslagen als IFC-ruimten met hun vloeroppervlakte, omtrek, hoogte en volume, zodat de staten ze kunnen lezen (zie [Hoeveelheden optellen, elementen opsommen en ruimten in staten zetten](topic:quantity-totals)).

## Vloeren

1. Klik op {{ui:Vloer}}.
2. Kies **Deze ruimte** of **Het hele gebouw**, het **Soort** (houten vloer of betonvloerplaat) en de dikte.
3. Wijs binnen een ruimte (of ergens binnen het gebouw). Wat de vloer zou bedekken, wordt gemarkeerd met de oppervlakte.
4. Klik. De bovenkant van de vloer is de vloer van de verdieping; de vloer gaat omlaag met zijn dikte. Een vloer voor het hele gebouw reikt tot de buitenvlakken van de wanden.

## Plafonds

1. Klik op {{ui:Plafond}}.
2. Kies **Deze ruimte** of **Het hele gebouw**, en de **Hoogte** boven de vloer.
3. Wijs binnen de ruimte en klik.
4. Om het van onderen te zien, met het raster en de lampen erop, zet u de plattegrond over naar het plafondplan: zie [Weergaven, weergavebereiken en uw eigen bladen](topic:views-and-sheets).

## Een dak

1. Klik op de verdieping waarvan de wanden het dak dragen op {{ui:Dak}}.
2. Typ de **Dakhelling** als een stijging over 12 (`6/12`) of in graden (`30`), en het **Overstek**.
3. Kies de **Uiteinden**: **Walmdak** (elke zijde loopt schuin af), **Puntgevels aan de korte zijden** of **Puntgevels aan de lange zijden** (een gebouw met vier zijden), of **Lessenaarsdak**.
4. Wijs binnen het gebouw: de dakrand en de nok verschijnen op de plattegrond. Klik.

Het dak ligt bovenop de wanden, op de verdieping erboven, en de onderkant sluit aan op de buitenvlakken van de wanden. Puntgevels worden opgevuld met een puntgevelwand die even dik is als de wand eronder. Een gebouw in L-, T- of U-vorm krijgt een walmdak waarvan de vleugels in dakdalen samenkomen.

## Wijzigen

Selecteer een vloer, plafond of dak (in de 3D-weergave, in de modelboom, of een dak door binnen de omtrek ervan op de verdieping erboven te klikken) en wijzig het in **Eigenschappen**: het soort van een vloer, de dikte en hoe ver de bovenkant boven de verdieping ligt; de hoogte, dikte en het **Patroon** van een plafond (het raster dat een plafondplan erop tekent: geen, 600 × 600, 600 × 1200, 2' × 2' of 2' × 4'); de dakhelling, het overstek, de uiteinden en de dikte van een dak. Elke wijziging is één stap die u ongedaan kunt maken.

## Een vloer, plafond of dak een type met lagen geven

Een vloer, een plafond en een dak kunnen een **type** krijgen, zoals een wand dat kan: een benoemde opbouw van lagen, elk met zijn materiaal en zijn werkelijke dikte.

- **Bij het plaatsen.** De gereedschappen Vloer, Plafond, Dak en Vloer tekenen hebben een lijst **Type** in hun rij. **Geen type** plaatst het zoals voorheen, met de eigen dikte. Een type plaatst het zo dik als de lagen van het type samen.
- **Achteraf.** Selecteer de vloer, het plafond of het dak en kies **Type** in Eigenschappen. Het element blijft hetzelfde element: plaats, ruimte en gegevens blijven behouden en er wordt niets opnieuw getekend. Alleen het type, de dikte en het materiaal veranderen. Zo wordt een element uit de schetsfase een uitgewerkt element: wissel het generieke type voor een echt type.
- **Het type bewerken…** opent de typeneditor voor dat type: de lagen van **boven** naar beneden, de kern, de functie van elke laag en de LOD-tag van het type. Opslaan wijzigt in één stap elk element van het type, en één keer ongedaan maken draait het terug. Wijzigt u een startertype, dan wordt een kopie opgeslagen als uw eigen type.
- Zolang een element een type heeft, is de **Dikte** die van het type en kan die niet worden ingetypt. Kies een ander type of **Geen type** om de dikte te wijzigen.

De startertypes zijn één **generiek** type per soort (één laag van het generieke materiaal, getagd LOD 200) en twee gelaagde typen (getagd LOD 300): een houten vloer op balken en een betonvloer met dekvloer; een houten dak en een betonnen plat dak; een gipsplaatplafond en een verlaagd tegelplafond. Het zijn beginwaarden, geen beproefde constructies: controleer de lagen voordat u erop vertrouwt.

De staat **Lagen: oppervlakte en volume** toont elke laag van elk type dat in gebruik is; zie [Staten, maatvoering en PDF](topic:plan-schedules-and-pdf). Vloer-, dak- en plafondtypen reizen tussen projecten mee in een typepakket of als bibliotheekitem; zie [Typepakketten](topic:type-packs).

## Goed om te weten

- Wanden verplaatsen, toevoegen of verwijderen maakt de ruimten, vloeren, plafonds en het dak erboven opnieuw.
- Een dak past op elke omtrek. Om elke wand een eigen helling, puntgevel of lessenaarseinde te geven, een verhoogde bovenregel, windveer en overstekplafond, of om één dakvlak te tekenen, zie [Daken: een helling per wand, puntgevels, lessenaarsdaken en dakvlakken](topic:roofs).
- {{key:Delete}} verwijdert een geselecteerde vloer, plafond of dak.
