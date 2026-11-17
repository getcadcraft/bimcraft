---
title: Yfirfara líkanið í VR-heyrnartóli
summary: Gakktu um IFC-líkanið í fullri stærð í VR-heyrnartóli: stökktu um, snúðu, mældu, skerðu það opið, settu BCF-atriði með mynd, sjáðu það sem borðplötulíkan og hittu hina í lifandi lotu.
keywords: vr, sýndarveruleiki, heyrnartól, webxr, xr, sökkt, quest, oculus, vive, index, pico, ganga í gegn, gönguferð, flytja sig, hönnunaryfirferð, samhæfing, yfirferð, mæla, snið, skurður, vandamál, atriði, bcf, borðplata, skalalíkan, viðvera, lifandi, saman
from: 8994b36d
---

{{ui:VR}} á tækjastikunni setur þig inn í líkanið með VR-heyrnartóli, í fullri stærð. Þú stendur þar sem myndavél þrívíddarsýnarinnar er, á gólfinu fyrir neðan hana, og snýrð í sömu átt. Heyrnartólið sýnir það sem þrívíddarsýnin sýnir: faldar hæðir, frumefni og líkön haldast falin, og málaðar efnisgerðir fylgja með. Ekkert er hlaðið upp: vafrinn teiknar það á þessari tölvu (eða í vafra heyrnartólsins sjálfs).

## Það sem þú þarft

- Heyrnartól sem vafrinn getur stýrt (WebXR): vafri sjálfstæðs heyrnartóls, eða Chrome eða Edge á PC með tengt heyrnartól.
- IFC-líkan opið, á öruggri síðu (https), eins og hún er á þessari síðu.

Þegar ekkert heyrnartól er til er {{ui:VR}} grátt og segir hvers vegna.

## Byrja

1. Stilltu þrívíddarsýnina þar sem þú vilt byrja: í herbergi, eða utan við og horfandi á bygginguna.
2. Smelltu á {{ui:VR}} á tækjastikunni.
3. Settu heyrnartólið á.

Valmyndin er aftan á vinstri hendinni. Bentu á hana með hægri stýrinu og togaðu í gikkinn til að velja hnapp. (Með aðeins annarri hendi svífur valmyndin fyrir framan þar sem þú byrjaðir.)

## Ganga um

- **Stökk:** í {{ui:Move}} bentu á gólf og togaðu í gikkinn; þú lendir þar. Eða ýttu stýripinnanum fram til að miða, og slepptu til að stökkva. Þú getur aðeins lent á gólfum, plötum og jörð (fleti sem snúa upp), aldrei á vegg.
- **Snúningur:** ýttu stýripinnanum til vinstri eða hægri: þú snýst um 30° í hvert skipti.
- **Ganga:** á leiksvæðinu þínu, gakktu einfaldlega.

## Mæla

Veldu {{ui:Measure}}, togaðu síðan í gikkinn á tveimur punktum. Fjarlægðin birtist á milli þeirra, í metrum. Punktur nálægt horni smellur að horninu.

## Skera það opið

Veldu {{ui:Section}} og togaðu í gikkinn á fleti:

- á vegg (eða því sem er ekki gólf): allt milli þín og flatarins er skorið burt, svo þú sérð inn. Þetta virkar best utan frá, eða yfir herbergi;
- á gólfi, að ofan: grunnmyndarskurður 1,2 m yfir því gólfi, svo veggirnir sýni neðri hlutann sinn.

{{ui:Clear}} tekur skurðinn og mælingarnar af. Ef [sniðflötur](topic:section-plane) sker líkanið þegar þú byrjar, byrjar heyrnartólið með honum.

## Setja vandamál

Veldu {{ui:Issue}} og togaðu í gikkinn þar sem vandamálið er. Númeruð nál merkir það, og vandamálið fer í flipann {{ui:Issues}} sem BCF-efni, með mynd af því sem þú sást og myndavélinni þar sem þú stóðst, í hnitum líkansins sjálfs. Vistaðu þau með hinum [atriðunum](topic:issues-bcf) þínum sem BCF-skrá; önnur samhæfingarforrit opna þau í sömu sýn.

Bættu athugasemd við vandamál eftir að þú ferð úr VR, í flipanum {{ui:Issues}}: innsláttur í heyrnartólinu er ekki smíðaður enn.

## Sjá það sem borðplötulíkan

{{ui:Table top}} minnkar líkanið svo það passi á borð fyrir framan þig; gakktu í kringum það, eða snúðu því með stýripinnanum. {{ui:Full size}} setur þig aftur þangað sem þú varst.

## Með öðrum, í beinni

Í [lifandi lotu](topic:work-live) sér hver í VR hina sem höfuð og tvær hendur í sínum lit, með nafni sínu, og punkt þar sem hver bendir. Breytingar sem einhver gerir berast í heyrnartólið þitt innan skamms. Fólk við skrifborðin er ekki sýnt í heyrnartólinu enn.

## Fara

Veldu {{ui:Leave VR}} (eða taktu heyrnartólið af og ljúktu þar). Þrívíddarsýnin á skjánum færist þangað sem höfuðið var.

:::note
Prófað með hermi fyrir heyrnartól, ekki enn á hverju heyrnartóli. Stórt líkan getur valdið hikstum í heyrnartólinu: feldu hæðir eða líkön sem þú þarft ekki fyrst ([fela og einangra](topic:hide-and-isolate)).
:::
