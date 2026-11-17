---
title: Projectfasen, van programma van eisen tot instructies op de bouwplaats
summary: Begin met een programma van eisen met streefoppervlakten en zie tijdens het tekenen of ze gehaald worden, vergelijk conceptvarianten daarmee, koppel specificaties en constructiedetails aan de types waartoe ze horen, beoordeel werkplaatstekeningen en leg bouwplaatsinstructies vast bij de elementen die ze wijzigen.
keywords: programma van eisen, ruimtestaat, streefoppervlakte, voldaan, tekort, ruimten, conceptvarianten, varianten, massastudie, budget, specificatie, spec, detail, constructiedetail, type, werkplaatstekening, beoordelen, goedkeuren, opnieuw indienen, bouwplaatsinstructie, revisie, oorzaak, veld, fase
from: 0a49b852
---

## Wat u gaat doen

Werk de fasen van een project af in één paneel: schrijf het programma van eisen van de opdrachtgever als ruimten met streefoppervlakten, vergelijk conceptvarianten daarmee, houd de specificatie en de constructiedetails bij de types waartoe ze horen, beoordeel werkplaatstekeningen zodra ze van de uitvoerders terugkomen, en leg bouwplaatsinstructies vast bij de elementen die ze wijzigen.

## Stappen

1. Open in het linkerpaneel **Projectfasen** en daarna **Programma van eisen**.
2. Plak de ruimten, één per regel: `Woonkamer; 1; 30` betekent één ruimte van 30 m². Het aantal mag worden weggelaten. Kies **De ruimten toevoegen**. Vul de opdrachtgever, de locatie, het budget, de tolerantie en de planning in en kies daarna **Programma van eisen opslaan**.
3. Teken wanden. Elke ruimte die de wanden vormen en die de naam heeft van een ruimte uit het programma van eisen (een getal erachter, zoals "Slaapkamer 2", wordt genegeerd), wordt geteld. De **Ruimtestaat** toont **Voldaan**, **Tekort**, **Over** of **Niet getekend**, met het verschil in m².
4. Om op deze manier een nieuw project te beginnen, kiest u **Nieuw project starten vanuit een programma van eisen**. Er wordt een nieuw model geopend, op basis van een van uw opgeslagen sjablonen als u er een kiest, en het programma van eisen wordt als eerste stap toegevoegd.
5. Open **Varianten tegen het programma van eisen**. Elke massastudie-variant die in het model is bewaard, wordt op dezelfde schaal getekend met haar bruto-oppervlak, wat het programma van eisen vraagt en hoeveel ruimten uit het programma erin passen. **Programma hier stapelen** plaatst de ruimten op de verdiepingen van de variant, de laagste eerst, en meldt wat niet past. Kosten komen alleen uit de prijslijst van het project; zonder passende regel staat er "Geen tarief".
6. Open **Types, specificaties en details**. Elk wand-, deur-, raam- en vloertype toont of het specificatietekst heeft, welke details eraan gekoppeld zijn, en waar de specificatie, de staten en de bladen niet overeenkomen. **Detail koppelen** voegt een DetailCraft- of CadCraft-bestand, een adres of een blad van dit model toe.
7. Open **Werkplaatstekeningen**. Selecteer de elementen die een werkplaatstekening in het model beslaat en kies daarna **Ontvangen**. Gebruik **Goedkeuren**, **Zoals aangegeven** of **Herzien** met de naam en de opmerking van de beoordelaar. **Opnieuw ingediend** maakt de volgende revisie van hetzelfde record en behoudt de beoordelingsgeschiedenis. De status wordt ook op elk element vastgelegd.
8. Open **Bouwplaatsinstructies**. Selecteer de elementen, geef de oorzaak en wat die voor kosten en tijd betekent in uw eigen woorden, en kies **Vastleggen**. Nadat een issue is vastgelegd, zegt **De wijzigingen sinds dit issue toelichten** welke gewijzigde elementen een instructie dekken en welke zijn gewijzigd zonder dat er iets is vastgelegd.

## Goed om te weten

- Elke stap is met één keer **Ongedaan maken** terug te draaien. Er wordt niets geweigerd: een programma van eisen dat niet gehaald wordt, een type dat niet overeenkomt met zijn tekst, of een werkplaatstekening die te laat is, is een waarschuwing of opmerking in **Problemen**.
- De ruimten uit het programma van eisen zijn ruimten zonder wanden. Ze hebben een streefwaarde, geen getekend oppervlak, dus ruimtestaten en COBie tellen ze nooit als getekende ruimten.
- Een indeling stapelt ruimten alleen op oppervlak op verdiepingen. Er worden geen wanden getekend.
- De tekst van de specificatie wordt geschreven in **Documenten** vanuit het model. Hier wordt die alleen vergeleken met de eigen maten van het model: er wordt nooit een artikel van een norm voor u geschreven.
- Werkplaatstekeningen en bouwplaatsinstructies zijn registraties in dezelfde geschiedenis als het paneel **Issues en revisies**, dus beide panelen tonen ze.
- De status van een werkplaatstekening is een eigenschap van elk element (`CadCraft_ShopDrawing`), en een bouwplaatsinstructie is `CadCraft_SiteInstruction`, zodat **Zoeken** en **Kleur op eigenschap** ze kunnen gebruiken.
- Op de bouwplaats gecontroleerde markeringen (fase 7) staan in **Eigenschappen** onder **Verificatie**.
