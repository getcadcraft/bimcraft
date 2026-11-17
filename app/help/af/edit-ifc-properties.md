---
title: Verander IFC-eienskappe en stoor 'n gewysigde kopie
summary: Verander 'n element se naam, etiket, beskrywing of eienskapswaarde, ontdoen, en laai 'n nuwe IFC-lêer af terwyl die oorspronklike bly soos dit was.
keywords: wysig, verander, eienskappe, parameters, etiket, naam, hernoem, merk, stoor as, aflaai, ontdoen, kopieer, ifc, skryf
from: f8035d62
---

## Wat jy sal doen

Korrigeer data in 'n IFC-model: hernoem 'n element, herstel sy etiket, verander 'n eienskapswaarde. Stoor dan 'n nuwe IFC-lêer met jou veranderinge. Die lêer wat jy oopgemaak het, word nooit aangeraak nie.

## Wat jy kan verander

| Veld | Wysigbaar |
|---|---|
| Naam, Voorwerptipe, Etiket, Beskrywing | Ja |
| Enkel eienskapswaardes (teks, getalle, Ja/Nee) | Ja |
| Tipe-eienskappe (stelle gemerk "(tipe)") | Ja, en die verandering geld vir elke element van daardie tipe |
| Tipe, GlobalId, Lyn | Nee |
| Hoeveelhede (lengtes, oppervlaktes, volumes, tellings) | Nee |
| Lyste, opsommings en ander multi-deel waardes | Nee |
| Geometrie, posisie, byvoeg of skrap van elemente | Nee |

## Stappe

1. Maak 'n IFC-model oop en klik die element wat jy wil verander.
2. In die {{ui:Eienskappe}}-paneel, klik die waarde wat jy wil verander. Dit word 'n teksblokkie. 'n Leë waarde wys as *leeg*.
3. Tik die nuwe waarde.
4. Druk {{key:Enter}}, of klik êrens anders, om dit te hou. Druk {{key:Esc}} om te kanselleer.
5. Kyk na die waarde: dit is nou vet met 'n blou balkie langs, wat 'n gewysigde waarde aandui.
6. Kyk na die {{ui:Veranderinge}}-afdeling aan die linkerkant: die verandering word gelys as *element*: *veld*, ou waarde na nuwe waarde.
7. Herhaal vir ander waardes of ander elemente.
8. Klik {{ui:Stoor as IFC}} (dit wys hoeveel veranderinge wag, byvoorbeeld "Stoor as IFC (3)"), of druk {{key:Mod+S}}.
9. Vind "*oorspronklike naam* (gewysig).ifc" in jou aflaaivouer.

## Wat jy behoort te sien

Die statuslyn sê "Gestoor *naam* (gewysig).ifc met *n* veranderinge (… grepe). Jou oorspronklike lêer is onveranderd." Die {{ui:Veranderinge}}-lys leeg, gereed vir die volgende ronde.

## Soorte waardes

- **Teks**: alles wat jy tik, word soos dit is behou. Om Naam, Voorwerptipe, Etiket of Beskrywing leeg te maak, verwyder die waarde.
- **Getalle**: tik 'n kaal getal, soos `2.4` of `1200`, in die lêer se eie eenhede. Geen eenheidsimbole nie. Enigiets anders wys "Gebruik 'n getal."
- **Heelgetalle** (tellings, heelgetalle): "Gebruik 'n heelgetal." as jy 'n desimaal tik.
- **Ja/Nee**: die waarde word 'n keuselys met Ja en Nee.

Elke waarde hou sy IFC-tipe, so 'n getal bly 'n getal, en ander programme lees dit korrek.

## Ontdoen

1. Klik {{ui:Ontdoen}} in die {{ui:Veranderinge}}-afdeling, of druk {{key:Mod+Z}} terwyl jy nie in 'n veld tik nie.
2. Herhaal om meer te ontdoen. Elke ontdoening verwyder die nuutste verandering.

Jy kan nie verder as 'n stoor ontdoen nie: na stoor begin die lys weer. Die gestoorde lêer hou alles.

## Waarom jou wysiging net een element verander

Uitvoerders spaar ruimte deur data te deel. Een eienskapstel kan deur twintig deure gedeel word, en een waarde ("Brandgradering: 60 min") kan in negentig stelle gelys wees. As BimCraft net die gedeelde waarde verander het, sou elke element wat dit deel, ook verander.

So BimCraft kopieer voordat dit skryf:

- As die eienskapstel wat jy wysig met ander elemente gedeel word, kry jou element sy eie kopie van die stel, en net die kopie verander.
- As die waarde met ander stelle gedeel word, kry jou stel sy eie kopie van die waarde.

Die bure hou hul ou data. Dit heet *kopieer-by-skryf*. Dit voeg 'n paar klein inskrywings by die lêer, wat elke IFC-program normaal lees.

**Tipe-eienskappe is die doelbewuste uitsondering.** 'n Stel gemerk "(tipe)" behoort aan die element se tipe, en in IFC lees elke element van daardie tipe dit van daar af. Die verandering daarvan verander die tipe, so elke element van die tipe wys die nuwe waarde. Die {{ui:Veranderinge}}-lys merk sulke wysigings met "(tipe)". Sien [Verander 'n tipe-eienskap vir elke element van 'n tipe](topic:type-vs-instance).

## Waarskuwings voordat jy werk verloor

- As jy 'n ander lêer oopmaak terwyl jy ongestoorde veranderinge het, vra dit "Jy het *n* ongestoorde veranderinge aan *lêer*. Verwerp dit?" Klik Kanselleer om aan die werk te bly, en stoor dan.
- Om die oortjie met ongestoorde veranderinge toe te maak of te herlaai, vra die blaaier of jy wil weggaan.

## Algemene foute

- **Eenhede tik.** `2400 mm` word geweier. Tik `2400`.
- **'n Tipe-eienskap verander terwyl jy een element bedoel het.** Soek na die "(tipe)"-nota voordat jy tik. As jy wil hê een element moet verskil, verander 'n instansie-eienskap of sy Etiket of Naam.
- **Verwag dat die oorspronklike lêer verander.** Stoor laai altyd 'n nuwe lêer af. Vervang die oorspronklike self as dit is wat jy wil hê, en hou 'n kopie.
- **{{key:Mod+S}} druk sonder veranderinge.** BimCraft stoor net as daar iets is om te stoor; anders kan die blaaier se eie "Stoor bladsy" oopmaak. Maak dit toe.
- **Twee keer stoor en twee klein lêers verwag.** Elke stoor hou elke wysiging sedert jy die model oopgemaak het.
- **Verwag dat wysigings terug in 'n projeklêer gaan.** BimCraft skryf net IFC. Bring die gewysigde IFC in jou outeurprogram in soos jy enige IFC invoer.
