---
title: Åbn og eksportér IFC5 alpha (IFCX-filer)
summary: En eksperimentel indstilling til IFC5 alpha-filformatet (.ifcx): åbn en fil med dens lag, se hvad læsningen ikke kunne kontrollere, og eksportér de åbne modeller. Formatet ændrer sig stadig, så læs først.
keywords: ifc5, ifcx, alpha, buildingsmart, json, lag, skema, eksperimentel, mængder, qto, eksport, import
from: cffe1669
---

IFC5 alpha (filendelse {{ui:.ifcx}}) er det filformat, buildingSMART stadig er ved at designe. Det er ikke endeligt: filerne, og vores læsning af dem, kan ændre sig. Derfor er dette en eksperimentel indstilling, og læsning kommer først.

## Slå den til

1. Vælg {{ui:Indstillinger}}, og derefter afsnittet {{ui:IFC5 alpha (IFCX)}} på fanen BimCraft.
2. Sæt kryds i {{ui:IFC5 alpha (IFCX) – formatet er stadig under ændring; læs først}}.

Den er slået fra som standard. Mens den er fra, afvises en .ifcx-fil med en sætning, der henviser hertil. {{ui:Åbn IFC5 alpha (.ifcx)…}} og eksportknappen {{ui:IFC5 alpha}} vises, når den er til.

## Åbn

- Vælg en .ifcx-fil med {{ui:Åbn en fil eller mappe}} (den erstatter den åbne model, efter det sædvanlige spørgsmål om redigeringer), eller
- vælg {{ui:Åbn IFC5 alpha (.ifcx)…}} og vælg flere filer samtidig: filen, dens lag og de skemafiler, den importerer. Er der allerede en model åben, **føjes filen til ved siden af den**; krydset i modellisten fjerner den igen, og det er fortrydelsen.

En IFCX-fil lister noder (en sti, dens børn, hvad den arver, og dens attributter). Flere filer kan beskrive den samme node: en senere fil (et lag) overskriver attributterne fra en tidligere, og et tomt (null) barn fjerner et barn. BimCraft sammensætter dem og tegner resultatet som en lille IFC4-model: projekt, område, bygning, etager og elementer med navne, klasser, egenskaber, mængder, farver og net.

Intet hentes fra netværket. Skemafilerne, en fil importerer (for eksempel `ifc@v5a.ifcx`), bruges kun, hvis du valgte dem sammen med filen; ellers siger rapporten det, og attributterne læses uden typekontrol.

### Rapporten

Efter åbning lister en rapport, hvad læsningen fandt: data, der ikke passer til sit skema, skemafiler, der ikke er angivet, og attributter, der ikke har nogen IFC-betydning her. Attributter uden tilknytning **beholdes** i modellen, de fjernes ikke, og de skrives tilbage ved eksport.

## Hvad bliver til hvad

| I IFCX-filen | I BimCraft |
|---|---|
| En node med en IFC-klasse (projekt, område, bygning, etage, væg …) | Det tilsvarende IFC4-element; en klasse, som denne læsning ikke kender, bliver et proxy-bygningselement |
| Navnet, noden har under sin forælder | Elementets navn |
| Attributter med en mængdetype (Length, Area, Volume, Mass …) | Et IFC4-mængdesæt kaldet `Qto_IFCX` (IFC4-mængder forbliver IFC4 `Qto_*`-sæt) |
| Andre egenskabsattributter | Et egenskabssæt kaldet `Pset_IFCX` |
| Net- og transformationsattributter | Elementets trekanter og placering; usynlige net tegnes ikke |
| Farve, opacitet, materiale, klassifikation | Overfladestil, materiale og klassifikation for elementet |

Enheder tages som meter, med Z opad: alfaen siger, at enhederne dokumenteres senere.

## Eksport

Vælg {{ui:IFC5 alpha}} på værktøjslinjen, læs noten, og klik derefter på {{ui:Eksportér .ifcx}}. Filen har vores egen header (forfatter CadCraft, version ifcx_alpha) og siger selv, at det er alfa-formatet. Hver model skrives i sine egne filkoordinater, i meter, med navne, klasser, egenskabssæt, mængder (som attributter med deres type), farver og trekanter. Lag og arv skrives flade. Kontrollér filen i det program, du sender den til.

## Begrænsninger

- Krum geometri (kurver, flader) læses ikke: kun trekantnet.
- Døre og vinduer indlejret i en væg placeres på etagen; væggen, de kom fra, er ikke knyttet til dem.
- IFC4 `Qto_*`-sætnavne bevares som attributgrupper af vores eget (`cadcraft::qto::…`); det standardiserede alfa-skema har kun få mængdenavne.
- Formatet kan ændre sig under os; en fil, der laves i dag, kan måske ikke læses i morgen.
