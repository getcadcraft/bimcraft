---
title: Kontroleer 'n model teen 'n kliënt se IDS
summary: Laai die .ids-lêer wat jy ontvang het en sien elke element wat nie daaraan voldoen nie onder Probleme, voordat jy die IFC lewer.
keywords: ids, afleweringspesifikasie van inligting, buildingsmart, vereistes, lewering, kontrole, validering, qa, eir, bep, eienskap, klassifikasie, materiaal, aankoop
from: 7b960222
---

## Wat jy gaan doen

'n IDS (Information Delivery Specification, 'n buildingSMART-standaard) is die lys van wat 'n IFC moet bevat: watter klasse, watter eienskappe met watter waardes, klassifikasies, materiale, en waar dinge hoort. Kliënte en openbare aankope stuur een saam met die opdrag. BimCraft toets die oop IFC-model daarteen en lys elke element wat tekortskiet.

## Stappe

1. Maak 'n IFC-model oop.
2. Kies {{ui:Kontroleer teen 'n IDS}} in die linkerpaneel, onder {{ui:Modelkontroles}}, of kies {{ui:Kontroleer teen IDS…}} uit die kieslys van jou kieslysstyl.
3. Klik op {{ui:Laai 'n .ids-lêer…}} en kies die lêer. Niks word opgelaai nie.
4. Lees die resultaat: elke spesifikasie met {{ui:Slaag}} of {{ui:Faal}} en hoeveel elemente dit van toepassing is.
5. Maak Probleme oop ({{key:Ctrl+Shift+M}}) en klik op 'n mislukking om die element te kies en daarheen te zoem.

## Wat jy moet sien

- Een waarskuwing per element en vereiste wat dit mis, met die spesifikasie se naam, wat die IDS vra en wat die element het.
- 'n Vereiste spesifikasie waarvoor niks in die model pas nie, is een waarskuwing op sy eie.
- Die toetsverslag (in Probleme) begin met die IDS: sy titel, weergawe, skrywer en elke spesifikasie se tellings van toepaslike, geslaagde en mislukte elemente.

## Goed om te weet

- Die IFC hou slegs 'n verwysing na die IDS (sy naam, titel, weergawe en 'n hasj), nie die IDS self nie: 'n kliënt se IDS kan vertroulik wees, en die IFC gaan na ander mense. Die IDS bly in hierdie blaaier langs die model, dus as jy die gestoorde IFC hier weer oopmaak, word dit weer getoets. Om die IDS te laai of te vergeet is een stap wat jy kan ontdoen.
- Oop op 'n ander rekenaar of in 'n ander blaaier wys Probleme 'n nota dat die IDS nie gevind is nie: laai dit weer om weer te toets.
- Om die IDS saam met die IFC te stuur, skakel {{ui:Hou die IDS binne die IFC}} aan in Instellings, op die BimCraft-oortjie, voordat jy dit laai.
- Elke wysiging, ontdoen en herdoen word 'n oomblik later weer getoets.
- Waardes word op die IDS-manier vergelyk: teks presies (hoofletters tel), getalle in SI-eenhede met 'n klein toleransie (lengtes in meter, so 'n model in millimeter word eers omgeskakel).
- 'n Spesifikasie wat vir 'n ander IFC-weergawe geskryf is (sê IFC2X3 wanneer die model IFC4 is), word steeds getoets; die resultaat sê dit.
- As die IDS-lêer foute het wat 'n IDS-oudit sou aandui, lys die dialoog hulle; die spesifikasies waarin hulle is, faal.
- Jy kan 'n mislukking met 'n rede aanvaar, soos enige probleem. Dit bly aanvaar solank die element se waardes dieselfde bly.

- Patrone in die IDS word as die hele waarde gelees. 'n `^` aan die begin en 'n `$` aan die einde word ook as "die hele waarde" geneem, soos die meeste IDS-lêers dit bedoel.

## Volgende

- [Kontroleer 'n model vir algemene probleme](topic:model-checks)
- [Verander 'n muur of deur](topic:change-a-wall-or-door)
