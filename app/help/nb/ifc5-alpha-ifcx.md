---
title: Åpne og eksporter IFC5 alfa (IFCX-filer)
summary: Et eksperimentelt alternativ for filformatet IFC5 alfa (.ifcx): åpne en fil med lagene, se hva lesingen ikke kunne kontrollere, og eksporter de åpne modellene. Formatet endrer seg fortsatt, så les først.
keywords: ifc5, ifcx, alfa, buildingsmart, json, lag, skjema, lab, mengder, qto, eksport, import
from: cffe1669
---

IFC5 alfa (filendelsen {{ui:.ifcx}}) er filformatet buildingSMART fortsatt utformer. Det er ikke endelig: filene, og vår tolkning av dem, kan endre seg. Derfor er dette et eksperimentelt alternativ, og derfor kommer lesing først.

## Slå det på

1. Velg {{ui:Innstillinger}}, og deretter delen {{ui:IFC5 alfa (IFCX)}} i BimCraft-fanen.
2. Kryss av for {{ui:IFC5 alfa (IFCX) – formatet endrer seg fortsatt; les først}}.

Det er av som standard. Mens det er av, avvises en .ifcx-fil med en setning som peker hit. {{ui:Åpne IFC5 alfa (.ifcx)…}} og eksportknappen {{ui:IFC5 alpha}} vises når det er på.

## Åpne

- Velg en .ifcx-fil med {{ui:Åpne en fil eller mappe}} (den erstatter den åpne modellen, etter det vanlige spørsmålet om endringer), eller
- velg {{ui:Åpne IFC5 alfa (.ifcx)…}} og velg flere filer samtidig: filen, lagene og skjemafilene den importerer. Når en modell allerede er åpen, legges filen **ved siden av den**. Krysset i modellisten fjerner den igjen, og det er angring.

En IFCX-fil lister noder (en sti, dens barn, det den arver og dens attributter). Flere filer kan beskrive samme node: en senere fil (et lag) overstyrer attributtene til en tidligere, og et null-barn fjerner et barn. BimCraft setter dem sammen og tegner resultatet som en liten IFC4-modell: prosjekt, sted, bygning, etasjer og elementer med navn, klasser, egenskaper, mengder, farger og masker.

Ingenting hentes fra nettverket. Skjemafilene en fil importerer (for eksempel `ifc@v5a.ifcx`) brukes bare hvis du valgte dem sammen med filen. Ellers sier rapporten det, og attributtene leses uten typekontroll.

### Rapporten

Etter åpning lister en rapport det lesingen fant: data som ikke stemmer med skjemaet sitt, skjemafiler som ikke ble oppgitt, og attributter uten IFC-betydning her. Attributter uten en tilordning **beholdes** i modellen, de fjernes ikke, og de skrives tilbake ved eksport.

## Hva blir hva

| I IFCX-filen | I BimCraft |
|---|---|
| En node med en IFC-klasse (prosjekt, sted, bygning, etasje, vegg …) | Det tilsvarende IFC4-elementet. En klasse denne lesingen ikke kjenner, blir et proxy-bygningselement |
| Navnet noden har under sin forelder | Elementnavnet |
| Attributter med en mengdetype (Length, Area, Volume, Mass …) | Et IFC4-mengdesett kalt `Qto_IFCX` (IFC4-mengder forblir IFC4 `Qto_*`-sett) |
| Andre egenskapsattributter | Et egenskapssett kalt `Pset_IFCX` |
| Mesh- og transformasjonsattributter | Elementets trekanter og plassering. Usynlige masker tegnes ikke |
| Farge, opasitet, materiale, klassifisering | Overflatestil, materiale og klassifisering for elementet |

Enhetene tas som meter, med Z opp: alfaen sier at enhetene vil bli dokumentert senere.

## Eksport

Velg {{ui:IFC5 alpha}} på verktøylinjen, les merknaden, og klikk deretter på {{ui:Eksporter .ifcx}}. Filen har vår egen topptekst (forfatter CadCraft, versjon ifcx_alpha) og sier selv at det er alfaformatet. Hver modell skrives i sine egne filkoordinater, i meter, med navn, klasser, egenskapssett, mengder (som attributter med sin type), farger og trekanter. Lag og arv skrives flatet ut. Kontroller filen i programmet du sender den til.

## Begrensninger

- Buede geometrier (kurver, flater) leses ikke: bare trekantmasker.
- Dører og vinduer innfelt i en vegg plasseres på etasjen. Veggen de kom fra er ikke koblet.
- Navnene på IFC4 `Qto_*`-sett beholdes som attributtgrupper av vår egen (`cadcraft::qto::…`). Alfaens standardskjema har bare noen få mengdenavn.
- Formatet kan endre seg underveis. En fil laget i dag leses kanskje ikke i morgen.
