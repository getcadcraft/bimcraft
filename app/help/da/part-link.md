---
title: Send et element til PartCraft og hent det tilbage
summary: Vælg en understøtning, et beslag, et gelænder eller et stykke udstyr, design det som en del i PartCraft med bygningen omkring, og accepter den nye form tilbage i modellen.
keywords: partcraft, del, send, link, element, understøtning, beslag, hegn, gelænder, udstyr, design, rundtur, accepter, ændret, dellinks
from: 4ce2f449
---

## Hvad du gør

Design ét element i bygningen som en del: send det til PartCraft, ændr det der (klip, tilføj, bor, ændr størrelse), og hent den nye form tilbage i modellen.

## Trin

1. Vælg ét element i modellen: et generisk element, udstyr, en søjle, en bjælke, et gelænder eller et møbel.
2. Vælg {{ui:Dellinks}} på værktøjslinjen og derefter {{ui:Send til PartCraft}}. PartCraft åbner i en ny fane med elementet som en del. Elementerne inden for 3 m tegnes grå ved siden af det, så du kan designe det på stedet. De kan ikke ændres der.
3. Ændr delen i PartCraft. I PartCraft vælg {{ui:Fil}} › {{ui:Eksportér}} › {{ui:Gem tilbage til BimCraft}}. Du kan gemme tilbage så ofte du vil.
4. Tilbage i BimCraft viser knappen {{ui:Dellinks}} et antal, og kortet viser elementet som {{ui:Ændret i PartCraft}} med ændringen i størrelse og volumen i ord.
5. Vælg {{ui:Vis}} for at se på det, og derefter {{ui:Accepter}} for at give elementet den nye form, eller {{ui:Behold min}} for at lade det være, som det var.

## Hvad du bør se

- At acceptere er ét trin at fortryde. Elementet beholder sin plads, GlobalId, type, materiale og egenskaber. Kun dets krop erstattes.
- Elementet får et egenskabssæt {{ui:CadCraft_PartLink}} med linket, dets status og revisionen.
- {{ui:Send igen}} åbner det samme element i PartCraft endnu en gang, på det samme link.

## Godt at vide

- Vægge, dæk, tage, døre, vinduer, trapper, ramper og zoner tegnes af bygningsværktøjerne ud fra en kontur og bygges om efter hver ændring. En krop fra et andet program ville blive skrevet over, så de afvises med en grund.
- Formen kommer tilbage som et net (en IFC-tessellation), ikke som delens features. Delens historik bliver i PartCraft.
- Hvis elementet er ændret i modellen, efter du sendte det, siger kortet det, før du accepterer: accept erstatter disse ændringer.
- Intet uploades. De to programmer er sider på samme websted og sender elementet mellem sig i denne browser. Begge skal være åbne i samme browser.
- Elementet skal lukke til et massivt legeme i PartCraft. Et element, hvis form har store åbne huller, afvises der med antallet af åbne kanter.
- For at acceptere skal modellen, der holder elementet, være den aktive.
