---
title: Weergaven, weergavebereiken en uw eigen bladen
summary: Vind elke plattegrond, gevel, doorsnede, 3D-weergave, staat en blad in de projectbrowser, stel in hoe elke plattegrond wordt doorgesneden en wat die toont, maak detailaanduidingen, teken lijnen en arceringen in één weergave, bewaar instellingen in weergavesjablonen en rangschik uw eigen bladen.
keywords: detailaanduiding, detailweergave, vergrote plattegrond, tekenen, detaillijnen, tekenlijnen, arcering, arceringsgebied, gevuld gebied, vulpatroon, gereflecteerd plafondplan, rcp, plafondplan, plafondraster, lichtarmaturen, projectbrowser, weergaven, weergavebereik, bijsnijden, bijsnijdgebied, bijsnijdweergave, weergaveschaal, onderlegger, ander niveau tonen, halftoon, snijvlak, snijhoogte, boven, onder, weergavediepte, zichtbaarheid, categorieën, verbergen in weergave, weergavesjabloon, sjablonen, blad, bladen, titelblok, viewport, schaal, bladen rangschikken, indeling, pdf, instellingen plattegrondweergave, browser
from: ee1d5afe
---

## Wat u gaat doen

Werk zoals BIM-projecten zijn georganiseerd: elke weergave in één lijst, elke plattegrond gesneden waar u wilt, dezelfde instellingen voor meerdere plattegronden via een sjabloon, en bladen die u zelf indeelt.

## De projectbrowser

1. Zet {{ui:Tekenen}} aan. Het linkerpaneel heeft een {{ui:Projectbrowser}} onder de modellen.
2. Hij toont:
   - **Verdiepingsplattegronden**: elk niveau. Klik er een aan om de plattegrond te zien. De schuifknop ernaast stelt het weergavebereik in (hieronder). Een plattegrond die een sjabloon volgt, toont de naam van het sjabloon.
   - **Plafondplattegronden**: het gereflecteerde plafondplan van elk niveau (hieronder).
   - **Detailaanduidingen**: elke detailaanduiding met de weergave waarop hij staat, en {{ui:Nieuwe detailaanduiding}}. **Ontbrekend** somt detailaanduidingen op waarvan de weergave is verdwenen.
   - **Gevels** en **Doorsneden**: de vier zijden en elke snijlijn. Klik er een aan om de tekenset te openen waarin ze staan.
   - **3D-weergaven**: de weergaven die u hebt opgeslagen met {{ui:Weergaven}}.
   - **Staten**: klik er een aan om die onder de plattegrond te tonen.
   - **Bladen**: de bladen die u hebt gemaakt, {{ui:Nieuw blad}}, en {{ui:Tekenset…}} voor de hele set die uit het model is gemaakt.
   - **Weergavesjablonen**, met {{ui:Nieuw sjabloon}}, en **Koppelingen** (de gekoppelde modellen).

## Het weergavebereik van een plattegrond instellen

1. Klik op de schuifknop naast een niveau onder **Verdiepingsplattegronden**.
2. Stel de hoogten in, boven dat niveau:
   - **Snijden op**: waar de plattegrond door muren, deuren en ramen snijdt (1200 mm, ongeveer 4 ft, tenzij u dat wijzigt).
   - **Bovenkant**: dingen boven de snede en onder de bovenkant worden gestippeld getekend (een hoge kast, een balk). Laat leeg voor de hoogte van het niveau.
   - **Onderkant** en **Diepte onder de onderkant**: dingen lager dan de snede worden getekend in dunne lijnen tot de onderkant, en zo ver eronder.
3. Schakel onder **Getoond in deze plattegrond** uit wat deze plattegrond weglaat: meubilair, ruimten, kolommen enzovoort.
4. Om losse elementen weg te laten: selecteer ze in de plattegrond of de 3D-weergave, open het dialoogvenster en klik op {{ui:De selectie hier verbergen}}. {{ui:Alles tonen}} brengt ze terug.
5. Klik op {{ui:Deze instellingen gebruiken}}.

De plattegrond wordt meteen opnieuw gesneden, en de tekenset en uw bladen volgen dat. Ook de doorsnede van een puntenwolk volgt de snijhoogte.

## Een plattegrond bijsnijden, een schaal geven, een ander niveau eronder tonen

Alle drie staan in hetzelfde dialoogvenster (de schuifknop naast een niveau):

- **Schaal**: de schaal waarin de plattegrond wordt afgedrukt ({{ui:Afdrukken}} op de balk van de plattegrond) en waarop hij op een blad komt. {{ui:Passend}} kiest de grootste standaardschaal die past.
- **Bijsnijdgebied**: klik op {{ui:Op de plattegrond tekenen…}}, klik dan op één hoek en de tegenoverliggende hoek op de plattegrond ({{key:Esc}} stopt). De plattegrond buiten het gebied wordt op het scherm gemaskeerd, en u kunt er nog steeds werken. Afgedrukt, op bladen en in de tekenset toont de plattegrond alleen wat binnen het gebied ligt. {{ui:Wissen}} verwijdert het bijsnijden. {{ui:Passend}} past op het bijgesneden gebied.
- **Onderlegger**: kies een ander niveau. De muren, gesneden elementen, deuren en ramen daarvan worden lichtgetekend onder deze plattegrond, om dingen uit te lijnen met het niveau eronder of erboven. Ze kunnen hier niet worden geselecteerd, en ze worden lichtgrijs afgedrukt.

Een weergavesjabloon bevat de schaal met de hoogten en categorieën. Het bijsnijdgebied en de onderlegger horen altijd bij die ene plattegrond.

## Het plafondplan van een niveau

Elk niveau heeft een gereflecteerd plafondplan naast zijn vloerplattegrond: de plattegrond gezien van onderen, om plafonds in te delen en wat eraan hangt.

1. Klik op het niveau onder **Plafondplattegronden** in de browser, of kies {{ui:Plafondplattegrond}} naast het niveau op de balk van de plattegrond.
2. De muren worden gesneden op 2300 mm (ongeveer 7'-6"). Wat boven die snede en onder de hoogte van het niveau ligt, wordt getekend: plafonds met hun raster en een hoogtelabel (`CLG 2438`), lampen, balken. Deuren, ramen en wat onder de snede ligt, worden weggelaten.
3. Om een plafond te maken, gebruikt u {{ui:Plafond}} zoals op de vloerplattegrond, selecteert u het en kiest u het **Patroon** in Eigenschappen. Zie [Ruimten, vloeren, plafonds en daken](topic:floors-and-roofs).
4. Om er een lamp aan te hangen, plaatst u het item uit de bibliotheek terwijl het plafondplan wordt getoond: het komt bij **Aan het plafond**. Zie [Apparatuur en meubilair uit de bibliotheek plaatsen](topic:place-from-library).
5. De schuifknop naast een plafondplan stelt de snede en bovenkant, schaal, categorieën, bijsnijdgebied en onderlegger in, zoals bij een vloerplattegrond. Plafondplattegronden nemen geen weergavesjabloon.

Het wordt op dezelfde manier getekend als de vloerplattegrond (een gereflecteerde plattegrond, geen spiegelbeeld). Een plafond dat lager ligt dan de snede wordt niet getekend: verlaag de snede voor het plafondplan van dat niveau. Plafondplattegronden komen op uw eigen bladen zoals plattegronden; de tekenset voegt ze zelf niet toe.

## Een detailaanduiding maken

Een detailaanduiding toont een deel van een plattegrond groter, op zijn eigen schaal, als eigen weergave: een keuken, een trap, een muurhoek.

1. Toon de plattegrond, het plafondplan of de detailaanduiding waartoe hij behoort.
2. Kies {{ui:Annoteren}} › {{ui:Detailaanduiding}} op de balk van de plattegrond (of {{ui:Nieuwe detailaanduiding}} in de browser), klik dan op één hoek van het gebied en de tegenoverliggende hoek. {{key:Esc}} stopt.
3. De detailaanduiding wordt gemaakt op 1:20 (1/2" = 1'-0" in voet en inch). Het kader en een rond label worden op de plattegrond getekend.
4. Klik op het label met {{ui:Selecteren}}, of op de detailaanduiding in de browser, om hem te openen: de plattegrond toont alleen dat gebied, op de schaal van de detailaanduiding. De balk zegt {{ui:Detailaanduiding:}} en zijn naam; {{ui:Omhoog}} gaat terug naar de weergave waarop hij staat.
5. De schuifknop naast de detailaanduiding (in de browser of op de balk) hernoemt hem, verandert zijn schaal, tekent zijn kader opnieuw of verwijdert hem.

Een detailaanduiding toont wat zijn weergave toont: dezelfde snede, dezelfde categorieën, de plafonds van een plafondplan. Een detailaanduiding van een detailaanduiding werkt op dezelfde manier. Zet een detailaanduiding op een blad zoals een plattegrond; het label zegt dan waar hij staat (`1 / A-501`: de eerste weergave op blad A-501). {{ui:Afdrukken}} in een detailaanduiding drukt alleen dat gebied af, op zijn schaal.

Een detailaanduiding verwijderen verwijdert ook de detailaanduidingen die erin zijn getekend, en de lijnen en arceringen erin (u wordt eerst gevraagd). Als het niveau waarop een detailaanduiding staat wordt verwijderd, blijft de detailaanduiding onder **Ontbrekend** staan tot u hem verwijdert, en de bladen waarop hij staat melden hem als ontbrekend.

## Lijnen en arceringen tekenen in één weergave

Tekenen is 2D-werk dat bij één weergave hoort: notities in lijnen, een gearceerd vlak van beton of grond, een gevuld gebied. Het staat nooit in de 3D-weergave en nooit in een andere plattegrond.

1. Toon de vloerplattegrond, het plafondplan of de detailaanduiding waarin u wilt tekenen.
2. Kies uit {{ui:Annoteren}} op de balk van de plattegrond:
   - {{ui:Regel}}: klik waar het begint en waar het eindigt. De volgende lijn begint waar de vorige eindigde; {{key:Enter}} begint opnieuw.
   - {{ui:Polylijn}}: klik de punten; {{key:Enter}} of een dubbelklik beëindigt hem, een klik op het eerste punt sluit hem.
   - {{ui:Rechthoek}}: twee tegenoverliggende hoeken.
   - {{ui:Arceringsgebied}}: kies het **Patroon** (Vol, Diagonaal, Kruisarcering, Beton, Isolatie, Aarde) en de schaal ervan op de balk, klik dan de hoeken; {{key:Enter}}, een dubbelklik of een klik op de eerste hoek sluit het. Met {{ui:Een ruimte vullen}} aangevinkt, arceert één klik in een ruimte de omtrek ervan.
3. Punten snappen zoals bij muren; {{key:Shift}} houdt een lijn haaks, en u kunt een lengte typen zoals bij muren. {{key:Backspace}} neemt het laatste punt terug.

Kies een lijn of arcering met {{ui:Selecteren}} op de plattegrond. Eigenschappen wijzigt het patroon en de schaal van een arcering en heeft {{ui:Verplaatsen…}} (klik het punt waarvandaan, dan waarheen het gaat). {{key:Delete}} verwijdert hem. Elke lijn, arcering en wijziging is één stap.

Lijnen en arceringen worden met de plattegrond afgedrukt, gaan met hem mee op uw bladen en zitten in de tekenset. Schakel **Annotaties** in het weergavebereik uit om ze bij die weergave weg te laten.

## De instellingen bewaren in een weergavesjabloon

1. Klik op {{ui:Nieuw sjabloon}} in de browser, of op {{ui:Opslaan als sjabloon…}} in het weergavebereik van een plattegrond (die plattegrond gebruikt het dan).
2. Geef het een naam, stel de hoogten en categorieën in, en klik op {{ui:Sjabloon opslaan}}.
3. Kies in het weergavebereik van elke plattegrond het sjabloon. De plattegrond neemt zijn hoogten en categorieën over; wijzig het sjabloon om elke plattegrond die het gebruikt te wijzigen. Elementen die u één voor één hebt verborgen, blijven verborgen in hun eigen plattegrond.
4. Klik op een sjabloon in de browser om het te wijzigen, te hernoemen of te verwijderen. Bij verwijderen houden zijn plattegronden hun instellingen als eigen instellingen.

## Een eigen blad indelen

1. Klik op {{ui:Nieuw blad}}. Typ het nummer en de titel en kies het papier.
2. Klik op {{ui:Toevoegen}} naast een plattegrond, plafondplan, detailaanduiding, gevel, doorsnede of staat. Hij komt in het midden van het blad.
3. Sleep hem naar de juiste plek. Met hem geselecteerd kiest u een **Schaal**, of laat u hem op de eigen schaal van de plattegrond (als die er een heeft), anders op de schaal die een derde van het blad vult. {{ui:Blad loshalen}} verwijdert hem.
4. Klik op {{ui:Het blad opslaan}}. Het blad wordt vermeld onder **Bladen**; klik erop om het later te wijzigen.
5. {{ui:Downloaden als PDF}} slaat dat blad op als één pagina.

## Wat u zou moeten zien

- Plattegronden gesneden op uw hoogten, met wat boven de snede ligt gestippeld en wat u hebt uitgeschakeld weggelaten.
- Een bijgesneden plattegrond die op het scherm buiten zijn gebied is gemaskeerd, en op papier is gesneden tot het gebied, op de schaal die u hebt opgegeven.
- Een plafondplan met de plafondroosters en hoogtelabels, en de lampen aan het plafond.
- Detailaanduidingen met hun kader en label op de plattegrond, elk geopend op de eigen schaal.
- Lijnen en arceringen alleen in de weergave waarin u ze hebt getekend.
- Uw bladen worden elke keer dat u ze opent opnieuw uit het model getekend, zodat ze altijd overeenkomen. Een weergave waarvan het niveau of de doorsnedelijn is verwijderd, wordt gemeld, niet getekend.
- Elke wijziging hier is één stap: {{key:Mod+Z}} neemt hem terug.

:::note
Dit alles wordt in het IFC-bestand bewaard als eigenschapsets die andere programma's ongemoeid laten: het weergavebereik en het plafondplan van elk niveau op het niveau zelf, de sjablonen, detailaanduidingen en uw bladen op het project. Lijnen en arceringen zijn IFC-annotaties in hun niveau, dus andere programma's zien ze als 2D-curven en gearceerde vlakken (hun eigen tekening van elk patroon), maar niet bij welke weergave ze horen.
:::

:::tip
Andere BIM-programma's noemen de snede een view range of cut plane, sjablonen view templates of view settings, tekenlijnen detail lines en arceringsgebieden filled regions. De ideeën zijn hetzelfde; de weergave-instellingen gaan niet met hen mee.
:::
