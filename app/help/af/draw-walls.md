---
title: Teken mure
summary: Teken mure op die plan van 'n vlak deur op hul hoeke te klik of lengtes te tik; hoeke sluit self aan, en die mure word as IFC gestoor.
keywords: geboë, boog, liggingslyn, verantwoording, muur, mure, teken, plan, vloerplan, vertrek, hoek, aansluit, muurtipe, 2x6, 2x4, cmu, beton, hoogte, vlak, vlakke, verdieping, getikte lengte, ortogonaal, vasvang
from: 8269cd4b
---

## Wat jy sal doen

Teken die mure van 'n gebou op 'n plan van elke vlak. Klik waar 'n muur begin en dan op elke hoek; BimCraft verbind die hoeke vir jou, gee elke muur sy lae (buitebekleding, bekledingsplaat, stutte, gipsbord …) en bou dit op tot by die vlak daarbo. Die 3D-aansig wys die mure soos jy werk.

## Maak die plan oop

1. Begin 'n nuwe gebou ([Begin 'n nuwe gebou](topic:start-a-new-building)) of maak 'n IFC-model oop.
2. Klik {{ui:Teken}} in die nutsbalk. 'n Nuwe gebou open reeds met dit aan.
3. Die plan van 'n vlak wys links en die 3D-aansig regs. Kies die vlak in die lys bo-aan die plan, of met die ronde knoppie langs dit in die **Vlakke**-paneel.
4. {{ui:Plan}}, {{ui:Splits}} en {{ui:3D}} is gereedskap in die {{ui:Aansig}}-ry van die nutsbalk (die opdragte PLAN, SPLIT en die sleutels werk soos voorheen). Gebruik {{ui:Plan}} vir die plan alleen, {{ui:Splits}} vir albei, en {{ui:3D}} om die plan toe te maak. Wanneer die venster smal is (of die koppelvlakgrootte groot), plaas {{ui:Splits}} die plan bo die 3D-aansig in plaas van langs dit.

Die plan sny die vlak 4'-0" (1200 mm) bo sy vloer, soos 'n vloerplan doen. Rol om te zoem, sleep met die middel- of regterknoppie (of hou {{key:Space}} vas en sleep) om te pan; met {{ui:Kies}} aan, pan 'n gewone sleep ook. {{key:F}} met die wyser oor die plan pas dit in.

## Teken 'n vertrek

1. Klik {{ui:Muur}} (of druk {{key:W}}).
2. Kies die muurtipe in die eerste lys, byvoorbeeld **Buite 2×6** of **Binne 2×4**.
3. Kies die hoogte: **Tot by die vlak daarbo** (die muur volg as daardie vlak beweeg), **Tot** 'n vlak hoër op vir 'n muur wat deur verskeie vlakke loop ('n trapsaal, 'n dubbelhoë vertrek, 'n hoë gewel), of **Vaste hoogte** en tik dit in. So 'n muur behoort aan die vlak waarop jy dit geteken het; die planne van die vlakke wat dit deurloop, wys dit ligter, die vertrekke daar sluit daarteen, en jy kan deure en vensters daarin klik vanaf daardie planne ('n deur staan op daardie vlak se vloer). Om die muur self te skuif of te vorm, gaan na die vlak waar dit begin.
4. Klik waar die eerste muur begin.
5. Klik elke hoek. Elke klik maak 'n muur; die volgende begin waar die vorige geëindig het. Die lengte en hoek wys langs die wyser.
6. Klik die eerste punt weer om die vertrek toe te maak. Die statuslyn sê hoeveel mure die vertrek het, en in middellynmodus kry elke muur sy buitelaag aan die buitekant van die vertrek.
7. Druk {{key:Esc}} (of regsklik, of dubbelklik) om te stop sonder om toe te maak.

Hoeke sluit self aan: twee mure ontmoet by 'n skuinssnit, 'n muur wat op 'n ander eindig, stop by sy vlak (T), en drie of meer mure op een punt deel die hoek. Mure wat kruis, bly soos hulle is.

'n Hele vertrek op een slag: maak {{ui:Vorms}} oop vir 'n reghoek, 'n geroteerde reghoek, 'n veelhoek, boë, mure op gekose lyne of om 'n omtrek (sien [Muurvorms, verdeel, verskuif, rek en sluit](topic:wall-tools)).

## Kies die tekeningsverwysing

Kies **Middellyn**, **Binnevlak** of **Buitevlak** voor die eerste klik. Met 'n vlak gekies, beskryf jou kliks en getikte lengtes daardie vlak; BimCraft verskuif die muur se middellyn met die helfte van die totale dikte en verbind opeenvolgende hoeke. Kies **Buite links** of **Buite regs** relatief tot die rigting waarin jy teken. Vir 'n geslote omtrek wat teen die klok in geteken is, is die buitekant regs; met die klok mee, links. Met **Binnevlak** gaan die muur se liggaam na die buitekant van jou lyn; met **Buitevlak**, na die ander kant. Vlakteken hou jou gekose buitekant wanneer jy die lus sluit. Op die middellyn kry mure wat nie 'n vertrek sluit nie die buitekant wat jy gekies het; die sluiting van 'n vertrek stel elke muur se buitekant na die buitekant van die vertrek, hoe jy ook al geteken het.

Die verandering van die muurtipe, verwysing of buitekant beëindig die huidige ketting. Naby 'n terugkeerhoek word lang skuinssnitte afgekap deur vierkantige eindes te laat.

Tydens tekening kan 'n eindpunt oor leë ruimte horisontaal of vertikaal inlyn met 'n muur-eindpunt of 'n vroeëre hoek. 'n Stippellyn-gids verbind daardie punt met die vasgevangde wyser. {{key:Shift}} hou die tekenrigting vierkant; inlyning stop dan langs daardie rigting. Naby eindpunte, middelpunte en muurkruisings het voorrang bo verre inlyning.

## Liggingslyn

Met **Verwysing** op **Buitevlak** of **Binnevlak** hou die muur daardie vlak as sy liggingslyn. Later, as die muur dikker word of sy buitekant omgedraai word, bly daardie vlak waar dit is, en groei of draai die muur rondom dit. 'n Reguit muur wat daarby by 'n hoek aansluit, volg, sodat die hoek steeds sluit. Jy kan die liggingslyn daarna in **Eienskappe** verander: sien [Verander 'n muur, deur of venster](topic:change-a-wall-or-door).

## Teken 'n geboë muur

1. Klik {{ui:Muur}}, kies dan **Geboë** in die **Vorm**-lys van die opsiesry.
2. Klik waar die muur begin, en dan waar dit eindig.
3. Klik 'n punt op sy boog. Of tik die boogshoogte in en druk {{key:Enter}}.
4. Die ketting gaan voort vanaf die einde van die muur. Druk {{key:Esc}} om dit te beëindig.

'n Geboë muur verbind met die mure by sy eindes (hoek- en T-verbindings werk), maak vertrekke, en hou deure en vensters langs sy boog. Hulle bly reguit eenhede, vierkant met die muur by hul middelpunt, en hul afstand word langs die boog gemeet. 'n Muur kan hoogstens drie kwart van 'n sirkel draai. Dit vang by sy eindes en by die middelpunt van sy boog vas.

Nog nie gebou vir geboë mure nie: {{ui:Trek bo / verleng}} en {{ui:Hoek}}, raamwerk, outomatiese plandimensies en vasvang langs die boog. Sien [Wat nog nie gebou is nie](topic:not-built-yet).

## Tik 'n lengte in plaas van klik

Na die eerste klik, tik en druk {{key:Enter}}:

| Tik | Teken |
|---|---|
| `12'6"` of `3810` | 'n muur so lank, in die rigting wat die wyser wys |
| `12'6"<90` | so lank, teen daardie hoek (grade, teen die klok in vanaf regs) |
| `@3000,0` | na 'n punt so ver van die laaste een, oor en op |
| `1200,3400` | na daardie punt op die plan |

As die Muur-gereedskap aan is, gaan 'n getal wat jy tik direk na die {{ui:Lengte}}-blokkie. In voet en duim is 'n kaal getal duim; in millimeter is dit millimeter. Jy kan altyd die eenheid tik: `3.5 m`, `10 ft`, `6 1/2"`.

## Vangpunte

- Muur-eindpunte, hul vlakhoeke en muurmiddelpunte vang vas wanneer die wyser naby is ('n vierkant, 'n driehoek).
- Die wyser vang vas aan 'n muur se middellyn of enige vlak ('n kruis).
- Vanaf die laaste punt hou die rigting by elke 15° wanneer dit naby is; hou {{key:Shift}} vas om dit op 0°, 90°, 180° of 270° te hou.
- Vrye rigtings rond die lengte af tot 1/2" (of 10 mm).

## Verander, ontdoen, skrap

- Elke muur is een stap in **Veranderinge**: {{ui:Ontdoen}} en {{ui:Herdoen}} neem mure terug en plaas hulle weer.
- Met {{ui:Kies}} aan, klik 'n muur in die plan om dit te kies; die 3D-aansig en **Eienskappe** volg. {{key:Delete}} skrap die gekose mure, en die mure waaraan hulle verbind was, word weer opgeruim.

## Vlakke

Die **Vlakke**-paneel lys elke vlak met sy peil en hoogte.

- Tik 'n nuwe naam, peil of hoogte en druk {{key:Enter}}. As jy 'n vlak se hoogte (of peil) verander, skuif die vlakke daarbo met dieselfde bedrag, en mure wat tot 'n vlak loop, volg.
- {{ui:Voeg 'n vlak bo-op by}} voeg 'n vlak bo die boonste een by, net so hoog.
- {{ui:Voeg 'n vlak onder by}} voeg 'n vlak onder die laagste een by ('n kelder), net so hoog as daardie een: sy peil is negatief wanneer die laagste vlak op 0 is, en geen ander vlak skuif nie. {{ui:Ontdoen}} haal dit weer af.
- {{ui:Kopieer hierdie vlak…}} teken weer wat op die vlak is wat jy kyk, op 'n ander vlak of op 'n nuwe een bo-op: sy mure met hul deure en vensters, vloere en plafonne (nie dakke nie). Mure wat tot die vlak daarbo geloop het, loop tot by die vlak bo die nuwe een; vertrekke verskyn vanself. Een {{ui:Ontdoen}} haal alles terug. As die ander vlak reeds mure het, word die kopie daarby gevoeg.
- {{ui:Eenhede}} op die nutsbalk kies die eenhede (voet en duim, duim, desimale voet, millimeter, sentimeter of meter) vir alles wat die tekengereedskap wys en lees.

## Stoor

Klik {{ui:Stoor as IFC}}. Elke muur is 'n IFC-muur met sy middellyn, sy saamgevoegde vorm, sy tipe en lae, `Pset_WallCommon` en basishoeveelhede (lengte, hoogte, oppervlaktes en volumes), sodat ander BIM-programme dit kan oopmaak en skeduleer.

## Goed om te weet

- Mure word op hul middellyn geteken. Die dikte kom uit die muurtipe.
- Die plan wys mure wat hier geteken is, gevul, en al die ander (biblioteekitems, modelle van ander programme) wat deur dieselfde vlak gesny word, met wat onder die snit lê in dun lyne.
- Mure wat deur ander programme gemaak is, wys in die plan, maar kan nog nie met hierdie gereedskap verander word nie.
