---
title: Udviklingsniveau (LOD) og milepælskontrol
summary: Giv elementer et udviklingsniveau, se hvor det kommer fra, kontrollér modellen mod det LOD en milepæl kræver, og ret manglende tags og unavngivne rum. Alle kontroller giver kun råd; intet blokeres.
keywords: lod, udviklingsniveau, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, milepæl, milepælstabel, modelkontrol, manglende tags, unavngivne rum, generisk tidligt, IFC-klasse, klassifikation
from: 2091c79b
---

## Hvad du gør

Angiv hvor langt hvert element er udviklet, og kontrollér derefter hele modellen mod det, en projektmilepæl kræver.

## Trin

1. Vælg et element (eller flere) og åbn {{ui:Properties}}. Find {{ui:Level of development}}.
2. Vælg et niveau fra listen. Hvert niveau er navngivet efter, hvad det betyder, og hvert niveau omfatter dem under sig. Ét fortryd-trin dækker hele valget.
3. Se hvor niveauet kommer fra: dette element, dets type eller et mærke for feltverificeret måling.
4. Åbn {{ui:Model checks}} til venstre, og klik derefter på {{ui:LOD milestones}}. Vælg milepælen og tabellen (startabellen eller din egen CSV- eller JSON-fil, indlæst med {{ui:Load}}).
5. Klik på {{ui:Check the model}}. Totalerne og en linje for hver tabelrække viser, hvad der har nået sit niveau, og hvad der ikke har; fundene vises også i listen over problemer.
6. Under {{ui:Missing tags and unnamed rooms}} klikker du på {{ui:Find them}}, redigerer forslagene, hvis du vil, og klikker på {{ui:Apply}}.

## Hvad du skal se

- Niveauet du valgte på elementet, med dets IFC-klasse og klassifikationskoder ved siden af.
- Totaler og rækker for milepælen. En tabel ændrer aldrig, hvad et niveau betyder: skalaen er fast, og en tabel angiver kun, hvilket niveau en milepæl kræver.
- "Generisk tidligt": råd om at holde elementer generiske ved en tidlig milepæl. Det er kun et råd.

## Godt at vide

- Intet her blokerer dig. En model under det niveau, en milepæl kræver, vises på listen, men afvises ikke.
- De tre dele af et niveau (geometri, information, dokumentation) kan hver angives; et mærke viser opfyldt, under eller ikke angivet.
