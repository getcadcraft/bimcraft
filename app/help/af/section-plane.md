---
title: Snit 'n IFC-model met 'n snitvlak
summary: Sny die 3D-model van bo, voor of kant, of hou net wat binne 'n snitboks of 'n volume van verskeie bokse met skuins vlakke is, om binne te sien; skuif die snit deur te sleep of te tik, draai dit om, en kies wat die snit wys.
keywords: snit, snitvlak, snitboks, handvatsels, sleep, marge, seleksieboks, knipboks, knip, skyf, planknip, vloerplan, aansig, binne, interieur, omdraai, verskuiwing, snitvolume, trapsnit, L-vormig, kantel, skuins snit, skuins vlak, ekstra vlak
from: 6315e71a
---

## Wat jy sal doen

Sny deur 'n IFC-model met een vlak om binne te sien: van bo vir 'n plan, of van voor of kant vir 'n snit deur die gebou.

## Stappe

1. Maak 'n IFC-model oop. Sien [Maak 'n IFC-model oop en kyk rond in 3D](topic:open-ifc-model).
2. Klik {{ui:Snit}} in die nutsbalk, of druk {{key:X}}. Die model word halfpad opgesny, en 'n balk verskyn onder die nutsbalk.
3. Kies waar om vanaf te sny: {{ui:Bo}}, {{ui:Voor}} of {{ui:Syaansig}}. Voor en Syaansig draai ook die aansig om na die snit te kyk.
4. Skuif die snit: sleep die **Verskuiwing**-skuifbalk, of tik 'n afstand in meter in die boks en druk {{key:Enter}}. Jy kan ook millimeter tik, byvoorbeeld `1200 mm`.
5. Klik {{ui:Draai om}} om die ander kant van die snit te hou.
6. Klik 'n element op die snit om sy eienskappe te sien.
7. Klik {{ui:Af}}, klik {{ui:Snit}} weer, of druk {{key:X}} om die snit weg te neem.

## 'n Snitboks

Klik {{ui:Boks}} in dieselfde balk om net wat binne 'n boks is te hou. Elk van {{ui:X}}, {{ui:Y}} en {{ui:Z}} het twee skuifbalke: waar die boks begin en waar dit eindig, in meter vanaf die model se rand. Die waardes wys langs hulle.

- {{ui:Boks rondom die keuse}} pas die boks om die elemente wat jy gekies het en zoem daarheen. Dit laat 300 mm ruimte aan elke kant; verander dit in {{ui:Instellings}} › BimCraft › {{ui:Ruimte rondom die keuse}}.
- Met elemente gekies, doen {{ui:Wys}} › {{ui:Snitboks rondom die keuse}} of {{key:Shift+X}} dieselfde in een stap, selfs wanneer geen snit aan is nie.
- **Handvatsels** op die boks skuif dit met die aanwyser: sleep 'n vierkant in die middel van 'n vlak om daardie vlak te skuif, een in die middel van 'n rand om die twee vlakke wat daar ontmoet te skuif, of een by 'n hoek om die drie te skuif. Die skuifbalke volg. In {{ui:Bo}} skuif 'n hoek die boks in plan, in {{ui:Voor}} of {{ui:Syaansig}} in aansig.
- {{ui:Hele model}} maak die boks weer oop tot die hele model.
- {{ui:Bo}}, {{ui:Voor}} of {{ui:Syaansig}} gaan terug na een vlak.

## 'n Volume van verskeie bokse, skuins vlakke en ekstra vlakke

'n Boks is nie altyd die vorm wat jy nodig het nie: 'n trapsnit, 'n L-vormige vleuel, of 'n snit langs 'n muur wat nie reghoekig op die rooster is nie.

1. In {{ui:Boks}}, klik {{ui:Voeg 'n boks by}}. Die snit hou nou wat binne **enige** van die bokse is, so twee bokse maak 'n trap- of L-vormige volume. Die lys daarnaast sê watter boks die skuifbalke verander ({{ui:Boks 1}}, {{ui:Boks 2}}…); {{ui:Verwyder hierdie boks}} haal die gekose een weg. 'n Volume hou tot 8 bokse.
2. Maak {{ui:Kantel en vlakke}} oop om die gekose boks te vorm:
   - Kies 'n {{ui:Kant}} en tik hoe ver dit na elke kant leun, in grade (tot 80). Die kant draai om sy middel; die ander kante bly waar die skuifbalke hulle plaas. {{ui:Reguit}} plaas dit terug.
   - {{ui:Voeg 'n vlak by}} sny die boks met nog een vlak. {{ui:Vlakke}} is die rigting waarheen die weggesnyde kant wys, in grade vanaf X na Y; {{ui:Helling}} is hoe ver dit opwaarts draai (0 vir 'n regop vlak, 90 vir 'n plat een); {{ui:Verskuiwing}} is hoe ver die vlak van die middel van die boks is, in meter. × verwyder dit. 'n Boks neem tot 6 ekstra vlakke.
3. Waar die volume deur soliede voorwerpe sny, word die snitvlakke gevul soos voorheen, ook waar twee bokse by 'n trap ontmoet.

:::tip
As die omtrek verdwyn en niks oor is nie, laat die kantels of vlakke niks binne daardie boks nie; die balk sê so. Kantel 'n kant terug of verander 'n vlak se verskuiwing.
:::

## 'n Gebou wat op sy terrein gedraai is

Baie modelle plaas die gebou in 'n hoek op die lêer se asse (ware noord, gedeelde koördinate). Wanneer die mure in 'n hoek loop, begin 'n nuwe snit reghoekig met die gebou: {{ui:Voor}}, {{ui:Syaansig}} en die boks loop langs sy eie mure, en {{ui:Reghoekig met die gebou}} in die snitbalk is aan. Klik daarop vir die model se asse, en weer om terug te gaan (die statuslyn sê met hoeveel die gebou gedraai is). Met **Instellings › BimCraft › 'n Gebou wat op sy terrein gedraai is › Soos geplaas op die terrein**, begin snitte en aansigte eerder op die model se asse. Sien [Instellings](topic:settings).

## Wat jy behoort te sien

- **Bo** hou wat onder die snit is, so jy kyk af in die vertrekke. Die verskuiwing word opwaarts gemeet vanaf die onderkant van die model.
- **Voor** hou wat agter die snit is, vanaf voor gesien; **Syaansig** hou wat anderkant is, vanaf die kant gesien. Die verskuiwing word gemeet vanaf die voor- of kant van die model.
- 'n Dun gekleurde omtrek wys waar die vlak is.
- Waar die vlak deur 'n muur, vloer of ander soliede deel sny, word die snitvlak in 'n donker kleur gevul, soos 'n getekende snit. {{ui:Vul}} in die balk skakel dit af en aan.
- Die aansigkubus in die onderregter-hoek draai die model om die snit van enige kant te sien.
- Klik kies wat jy kan sien: alles wat weggesny is, kan nie gekies word nie.

## Algemene foute

- **Niks het verander nie.** Die snit kan bo die dak of buite die model wees. Sleep die skuifbalk, of tik 'n kleiner verskuiwing.
- **Die verskuiwing het teruggespring.** 'n Afstand verby die model word na sy einde geskuif, en die statuslyn sê so.
- **'n Probleem wys net deel van my volume.** 'n Probleem (BCF) hou een boks met sy skuins kante en vlakke: die eerste boks van 'n volume. Die statuslyn sê so wanneer jy die probleem maak.
- **Die snit is hol.** {{ui:Vul}} in die balk is af: klik dit om die snitvlakke van mure, vloere en ander soliede dele te vul.
- **'n Gevulde snit lyk gespikkel of mis 'n stuk.** Vul benodig geslote soliede; 'n element waarvan die vorm in die lêer nie geslote is nie ('n enkele vel, boomblare) word nie gevul nie, eerder as om oor geverf te word. 'n Element wat uit dele in verskillende kleure bestaan ('n raam en sy glas), word gevul wanneer sy dele aaneen sluit.
- **Waar is die snitbalk?** Dit sit bo-aan die 3D-aansig wat dit sny: op die 3D-helfte in {{ui:Splits}}, en onder die tekenbalk in {{ui:Plan}} alleen. In 'n kort aansig rol dit.

## Volgende

- [Wys en verberg verdiepings, ruimtes en rande](topic:storeys-and-spaces)
- [Sien 'n DWG- of DXF-tekening in 3D](topic:dwg-in-3d) — tekeninge in 3D het dieselfde snitvlak
