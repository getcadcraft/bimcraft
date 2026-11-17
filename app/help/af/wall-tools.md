---
title: Muurvorms, verdeel, verskuif, rek en sluit
summary: Teken mure met die muurgereedskap se resepte, as 'n reghoek, veelhoek, boog, op gekose lyne of rondom 'n omtrek; verdeel hulle, neem 'n stuk uit, verskuif, boksrek, belyn en sluit hulle aan mekaar of aan 'n maat of 'n roosterlyn. Elke verandering hou die mure verbind en is een ontdoen-stap.
keywords: ruil tipe, verander tipe, hertipeer, wat geskuif het, lod, ontwikkelingsvlak, verbindingstyl, gemiter, miter, stomp, vierkant af, muurverbindings, volgende, loop deur, verbod verbinding, laat verbinding toe, laagprioriteit, kern, prioriteit, aansluiting, reghoek, geroteerde reghoek, veelhoek, ingeskryf, omskryf, boog, middelpunt, raakboog, kies lyne, tab, traseer, omtrek, towerstaf, verdeel, verdeel met gaping, gaping, skrap segment, heraansluit, verskuiwing, kopieer, boksrek, rek, belyn, sluit, hangslot, beperking, sluit maat, redigeer maat, rooster, sluit aan by rooster, beweeg roosterlyn, plasingsverskuiwing, verbinding af, vrystaande, groei vanaf, meet vanaf, middellyn, binnevlak, buitevlak, ontkoppel, alt
from: 5b7d2f75
---

## Wat jy sal doen

Maak en verander mure met die muurgereedskap se resepte. Elkeen eindig dieselfde as om 'n muur by sy hoeke te teken: die hoeke verbind self, die verbindings word in die lêer gestoor, en die hele verandering is een stap in **Veranderinge** wat {{ui:Ontdoen}} terugneem. Die mure behou hulle identiteit: 'n muur wat jy verdeel, verskuif of rek, is steeds dieselfde muur, met sy deure, vensters en maate.

## Teken 'n reghoek, veelhoek of boog

Met {{ui:Teken}} aan, maak {{ui:Vorms}} in die Teken-groep oop (of kies 'n vorm in die Muur-ry se **Vorm**-lys). Die Muur-ry wys die muurtipe, die tekeningverwysing, die buitekant en die bo, soos vir die {{ui:Muur}}-gereedskap. Klik dan, of tik die punte (x,y · @dx,dy · @lengte<hoek · 'n lengte langs die wyser):

- **Reghoek**: twee teenoorstaande hoeke. Vier mure, vier hoekverbindings, een stap.
- **Geroteerde reghoek**: waar die eerste sy begin en eindig (dit stel sy draaiing en lengte), dan 'n derde klik vir die ander sy.
- **Veelhoek**: die middelpunt, dan 'n hoek (**Ingeskryf**) of die middel van 'n sy (**Omskryf**). Stel eers **Sye** (3 tot 64).
- **Boog, middelpunt**: die middelpunt, die begin (dit stel die radius), die einde. **Rigting**: die korter pad, linksom of regsom. 'n Sweep oor drie kwarte van 'n sirkel word as twee mure geteken.
- **Raakboog**: klik op die einde van 'n muur, dan waar die boog eindig. Die boog verlaat die muur se einde in die muur se eie rigting.

'n Geslote vorm kry sy buitekant na buite. Getekend op die **Buitevlak** of **Binnevlak**, is die vlak waarop jy klik die vlak wat bly staan.

## Mure op lyne wat jy al het

- **Kies lyne**: klik op 'n lyn en 'n muur gaan daarop. Druk {{key:Tab}} (of hou {{key:Shift}} terwyl jy klik) om die hele ketting lyne wat end-tot-end verbind is, te neem. Die lyne is hierdie aansig se tekenlyne, die traseerverwysing en die roosterlyne.
- **Traseer omtrek**: klik binne 'n gebied wat deur daardie lyne of deur mure geslote is. Die mure gaan om die kleinste gebied rondom die klik.

## Stel voor jy teken: verskuiwing en verbinding

Die Muur-ry het twee verdere velde, gebruik deur die {{ui:Muur}}-gereedskap en die vorms:

- **Verskuiwing**: die mure word hierdie ver geteken van die lyn waarop jy klik: + na sy linkerkant, − na sy regterkant, gesien soos jy teken.
- **Verbind**: ontmerk om vrystaande mure te teken. Hulle eindes kry **Verbod verbinding** en bly vry waar hulle ook al gaan (sien [Verander 'n muur](topic:change-a-wall-or-door)).

## Verdeel, neem 'n stuk uit, heraansluit

Maak {{ui:Mure}} in die Wysig-groep oop.

- **Verdeel**: klik op 'n muur waar dit gesny moet word, of tik die afstand vanaf sy begin. Naby 'n muur wat dit kruis, val die snit op die plek waar hulle ontmoet. Die twee dele het dieselfde tipe en bly end-tot-end verbind. **Gaping** laat 'n spasie van daardie lengte in die middel van die snit. **Vrye eindes** gee die snit-eindes Verbod verbinding in plaas daarvan (Instellings › BimCraft › Mure › **Wanneer 'n muur verdeel word** stel watter een vooraf gemerk is). 'n Deur of venster gaan saam met die deel waarin dit staan; 'n snit daardeur word geweier.
- **Skrap segment**: klik waar die stuk begin en waar dit eindig. 'n Deur in die stuk gaan saam daarmee.
- **Heraansluit**: klik op die twee dele van een muur (in lyn, dieselfde tipe). Hulle word weer een muur, die eerste een wat jy geklik het, met die deure van albei.

## Verbindingstyl, Verbod verbinding, laagprioriteit

Maak {{ui:Mure}} in die Wysig-groep oop.

- **Verbindingstyl**: klik op 'n hoek waar twee reguit mure eindig. Elke klik gaan na die volgende styl: **Gemiter** (albei eindes gesny op die lyn van die binne- na die buitehoek, waarmee elke hoek begin), **Stomp** (een muur loop deur tot by die buitevlak van die ander, wat teen sy sy stop) en **Vierkant af** (soos stomp, en die muur wat deurloop eindig vierkant; by 'n regte hoek lyk dit soos stomp). **Volgende**, of {{key:Tab}}, maak die ander muur die een wat deurloop. Die **Styl**-lys in die balk wys die hoek wat jy laas geklik het. Dieselfde twee keuses is in **Eienskappe** van een muur: **Verbindingstyl by begin / by einde** en **Loop deur**. Elke verandering is een stap in **Veranderinge**. Die plan, die 3D-liggaam, die vertrekke en die hoeveelhede volg.
- By 'n T loop die muur waarvan die sy ontmoet altyd deur. Waar twee mure kruis, sê 'n klik (of **Deurlopend waar dit kruis** in Eienskappe) watter een van die twee deurlopend is; dit bepaal watter muur se lae deur die kruising geteken word.
- Die styl hoort by die verbinding: dit bly wanneer die mure beweeg en gaan slegs weg wanneer die verbinding gaan (die muur word geskrap, by daardie einde verdeel, of die einde kry Verbod verbinding). 'n Hoek met 'n geboë muur, of waar drie of meer mure ontmoet, behou die gemiter. 'n Hoek skerper as omtrent 30 grade, of platter as omtrent 150, val ook terug na die gemiter.
- **Verbod verbinding**: klik naby 'n muurende. Daardie einde word vrygestel: dit verbind niks, waar die muur ook al gaan, totdat jy weer daarop klik. Vrye eindes word met 'n kruis gemerk terwyl die gereedskap aan is. Dieselfde skakelaar is **Verbind by begin / Verbind by einde** in Eienskappe.
- **Laagprioriteit**: waar mure met lae ontmoet, sny die sterker laag die swakker, sodat kerne by kerne verbind en 'n afwerking teen die sterker laag stop. Elke laag het 'n prioriteit van 0 tot 999; by verstek kom dit van die laag se funksie (struktuur 800, onderlaag 600, isolasie 400, membraan 300, afwerking 200, 'n holte 100). {{ui:Laagprioriteit}} maak die muursamestelling oop, waar die **Prioriteit**-kolom 'n laag se eie getal stel. Lae van gelyke prioriteit stop teen mekaar, en 'n lyn word net tussen verskillende materiale geteken. Jy sien dit op plans met **Medium** of **Fyn** detail, by hoeke, T-verbindings en kruisings van twee reguit mure; Instellings › BimCraft › Mure › **Maak muurlae skoon waar mure ontmoet** skakel dit af. Dit verander net wat binne die mure geteken word: die mure se omtrekke en hoeveelhede bly soos die verbindingstyl hulle gee.

## Verwissel die tipe van baie mure

Om van skets-planne na werkstekeninge te gaan, is meestal 'n tipeverandering: 'n generiese muur word die spesifieke opbou. Jy teken niks weer nie.

1. Kies die mure (een, of baie met {{key:Ctrl}} of {{key:Shift}}).
2. In Eienskappe, druk **Ruil tipe…** onder Muurtipe (of maak {{ui:Mure}} in die Wysig-groep oop en kies {{ui:Ruil tipe}}, wat dieselfde lys oopmaak). Die lys open binne Eienskappe, in die gekose mure se eie blok. Dit is nie 'n dialoog nie en bedek niks: die plan, die 3D-aansig en die keuse werk steeds terwyl dit oop is, en dit volg die mure wat jy kies.
3. Die lys wys elke muurtipe met sy dikte en sy LOD-merker, byvoorbeeld "Wall 230 generic, LOD 200" en "230 clay brick, plastered both sides, LOD 300". Die tipes wat die gekose mure nou het, is gemerk. Tik in **Soek** om dit te beperk: 'n naam, 'n dikte, of `lod 300`.
4. Klik op 'n tipe. Elke gekose muur verander daarna in een stap, so een {{ui:Ontdoen}} neem die hele ruil terug. Die klein x maak die lys toe.

Elke muur hou sy liniggeeflyn. 'n Muur op sy middellyn groei na beide kante; 'n muur waarvan die liniggeeflyn 'n vlak is, hou daardie vlak en groei na die ander kant, en die mure wat daaraan verbind is, volg by die hoeke. Mure wat aan 'n geruilde muur gesluit is, volg dit ook. Deure en vensters bly in hulle mure en word weer gesny vir die nuwe dikte.

Na die ruil wys die lys **Wat geskuif het**: hoeveel mure verander het en na wat, die dikte en LOD voor en na, die mure wat sywaarts geskuif het om hulle liniggeeflyn te hou, die verbonde mure wat gevolg het, die deure en vensters wat weer gehuisves is, en elke vertrek wie se oppervlakte verander het, met sy oppervlakte voor en na. Die statusbalk sê dieselfde in een lyn. Die verslag sê net vir jou; dit stop nooit 'n ruil nie. 'n Tipe kies in **Eienskappe › Muurtipe** doen dieselfde ruil en gee dieselfde verslag.

Twee dinge stop 'n ruil, en dan word niks verander nie: 'n deur of venster wat nie meer in sy muur pas nie ('n muur word korter waar 'n hoek volg; maak eers die deur smaller of skuif dit weg van die hoek), en 'n sluiting wat die ruil sou breek ('n muur wat deur sy middellyn aan 'n roosterlyn gesluit is terwyl sy liniggeeflyn 'n vlak is; sluit dit oop of plaas sy liniggeeflyn terug op die middellyn).

'n Assistent wat aan BimCraft gekoppel is, kan dieselfde ruil doen (gereedskap `wall_types_list` en `walls_swap_type`) en kry dieselfde verslag terug.

Die LOD-merker van 'n tipe word in die muursamestellingredigeerder gestel: sien [Muursamestellings](topic:wall-assemblies).

## Verskuiwing en boksrek

- **Verskuiwing**: klik op 'n muur, dan op die kant waarheen dit geskuif moet word, of tik die afstand. Die muur skuif vierkant na homself toe en die mure wat daaraan verbind is, rek. Merk **Kopieer** vir 'n parallelle kopie in plaas daarvan (dit is nie aan die oorspronklike verbind nie).
- **Boksrek**: klik op twee hoeke van 'n boks, dan op 'n punt om vanaf te beweeg en 'n punt om na toe te beweeg. Elke muurende binne die boks beweeg; 'n muur wat heeltemal binne is, beweeg, en die mure wat daarin stoot, kom ook saam; mure wat die boks kruis, rek.

## Wysig 'n maat en sluit dit

Kies 'n verwysingsmaat (Annoteer › {{ui:Verwysingsmaat}}) en tik sy waarde in **Eienskappe**: die muur van sy tweede verwysing skuif vierkant na homself toe, die eerste verwysing hou vas en die verbonde mure volg. Merk **Sluit hierdie maat** om die waarde te hou: wanneer die een of ander muur later beweeg, volg die ander een. 'n Gesluite waarde kan nie oorgetik word totdat jy dit ontmerk nie.

## Belyn en sluit

**Belyn en sluit**: klik op 'n muurvlak (of die middellyn, naby die middel van die muur) of 'n roosterlyn, dan op die vlak van die muur wat na daardie lyn gebring moet word. Die muur skuif vierkant daarop. Merk **Sluit** eerste om hulle in lyn te hou: 'n hangslot wys op die plan, en wanneer een muur beweeg, volg die ander een. **Eienskappe** van 'n muur lys sy **Sluitings**, elk met **Ontsluit**.

## Sluit mure aan roosterlyne

Kies 'n muur wat langs 'n roosterlyn loop, of wie se einde daarop sit, en kies die roosterlyn in **Eienskappe** › **Sluit aan by rooster**. Kies dan die roosterlyn met die {{ui:Rooster}}-gereedskap en tik 'n afstand in **Skuif met**: die lyn skuif vierkant na homself toe en die mure wat daaraan gesluit is, volg, saam met hulle verbonde mure, in een stap. 'n Muur wat aan 'n roosterlyn gesluit is, kan nie self daarvan af geskuif word nie (skuif die lyn, of ontsluit die muur); 'n roosterlyn wat so gedraai word dat 'n gesluite muur nie vierkant daarop kan bly nie, word geweier. As jy die lyn hernoem, bly die sluiting; as jy hom skrap, word die sluiting verwyder.

## Lengte: watter kant hou, en wat dit meet

- **Groei vanaf** (Eienskappe van een muur): **Begin hou** (die einde beweeg), **Einde hou** (die begin beweeg) of **Middel hou** (albei eindes beweeg elk die helfte). Terwyl jy die Lengte tik, merk die plan die punt wat hou. Die muur wat by die eind verbind is wat beweeg, beweeg vierkant na homself toe en hou sy hoek.
- **Meet vanaf** (langs Afmetings op die plan, in Eienskappe, en in Instellings › BimCraft › Mure): die middellyn, die binnevlak of die buitevlak. Die Lengte-veld en die plan se muurmaate lees dieselfde een, so hulle stem ooreen. Dit begin op die middellyn.
- Om 'n muur vry van sy verbindings te skuif (hulle breek, die muur behou sy identiteit), hou {{key:Alt}} terwyl jy sy middelhandvatsel sleep.

## Goed om te weet

- Hierdie resepte is die muurgereedskap se spesifikasie (bladsye 4 tot 9). Verbindingstyl en laagprioriteit is vir reguit mure gebou; laagprioriteit wys net op die plan (nie in snitte, aansigte of 3D nie, waar 'n muur een liggaam is), nie by knope van drie mure of meer nie, en membrane word nie meegevoer nie.
- 'n Verbinding se styl word in sy rekord in die IFC-lêer gestoor (die naam van die `IfcRelConnectsPathElements`, byvoorbeeld `CadCraft join L butt 1`), sodat ander programme die verbinding steeds lees en 'n ouer lêer met gemiters oopmaak.
- Die sluitings en die verbindings word in die IFC-lêer gestoor (die sluitings as `CadCraft_WallHolds` op die projek, die verbindings as `IfcRelConnectsPathElements`), so hulle is daar wanneer jy die lêer weer oopmaak.
- Geboë mure kan verdeel, heraansluit en 'n stuk uitgeneem word; hulle word nie verskuif of gesluit nie.
- Sien ook [Teken mure](topic:draw-walls), [Verander 'n muur, deur of venster](topic:change-a-wall-or-door) en [Vorm 'n muur](topic:wall-shape).
