---
title: Lesa verkefnis- eða fjölskylduskrá
summary: Opna .rvt-, .rfa-, .rte- eða .rft-skrá og lesa útgáfu hennar, samvinnustillingu, verkefnaupplýsingar, fjölskyldubreytur, tengingar og forskoðunarmynd, án forritsins sem bjó hana til.
keywords: rvt, rfa, rte, rft, verkefnaskrá, fjölskylda, útgáfa, smíð, hvaða útgáfa, samvinna, miðlægt líkan, verkefnaupplýsingar, forskoðun, smámynd, tengingar
from: df3600e1
---

## Hvað þú gerir

Finndu út hvað er í verkefnis- eða fjölskylduskrá án þess að opna hana í Revit: hvaða útgáfa vistaði hana, hvort hún er samvinnuvædd, verkefnaupplýsingarnar og hvað hún tengist. Gagnlegt þegar skrá berst frá einhverjum öðrum og þú þarft að vita í hvaða útgáfu á að opna hana.

## Skref

1. Smelltu á {{ui:Veldu skrá}}.
2. Veldu `.rvt`-, `.rfa`-, `.rte`- eða `.rft`-skrá.
3. Bíddu augnablik. Stöðulínan segir „Les skrána…“ og síðan „Opnað *skráarheiti*“.
4. Líttu efst á spjaldið: forskoðunarmyndina sem er vistuð í skránni, tegund skrárinnar og útgáfuna sem hún var vistuð í, og heiti verkefnisins.
5. Skrunaðu niður til að lesa hluta spjaldsins.

## Það sem þú átt að sjá

Spjaldið í miðjunni, með þessum hlutum þegar skráin geymir þá:

| Hluti | Hvað hann segir þér |
|---|---|
| Skrá | Skráarheiti, stærð, tegund (verkefni, verkefnasniðmát, fjölskylda eða fjölskyldusniðmát), útgáfan og smíðin sem hún var vistuð í, samvinnuvinnsla, slóð miðlæga líkansins, hvar hún var síðast vistuð, hver vistaði hana, tungumálsstilling og skjals-GUID |
| Verkefnaupplýsingar | Eigin reitir verkefnisins, svo sem heiti, númer, verkkaupi, heimilisfang og staða. Reitir sem enn eru á sjálfgefnum gildum nýs verkefnis eru skildir eftir. |
| Fjölskylda, Fjölskylda: … | Fyrir fjölskyldu: nafn hennar, flokkur, útgáfa, síðasta uppfærsla og breytur hennar, hópur eftir hópi |
| Tengdar og tilvísaðar skrár | Hvert tengt líkan, CAD-tenging, mynd og lykiltafla sem skráin vísar á, með vistaðri slóð |

Vinstra megin endurtekur {{ui:Skrá}}-spjaldið helstu staðreyndir og bætir við **Lesið**: hversu mikið af skránni BimCraft las í raun, yfirleitt um 40 KB af skrá sem er mörg megabæti að stærð. Hægra megin segir {{ui:Eiginleikar}}-spjaldið að eiginleikar hluta þurfi 3D-líkanið.

## Af hverju ekkert 3D

3D-líkanið og hlutirnir inni í verkefnaskrá eru geymdir á óskjalfestu sniði. BimCraft les aðeins þá hluta skráarinnar sem eru skjalfestir eða auðlesanlegir: skráarupplýsingarnar, verkefnaupplýsingar, fjölskyldugögn, tengilistann og forskoðunarmyndina. Það giskar ekki á restina. Til að sjá líkanið í 3D og lesa eiginleika hluta, fluttu út IFC úr forritinu sem bjó skrána til. Sjá [Flytja verkefnaskrá yfir í 3D um IFC](topic:rvt-to-ifc).

## Algeng mistök

- **Að búast við 3D.** Sjá að ofan.
- **Tenglar sýna aðeins vistuðu slóðina.** Skrá sem er opnuð ein og sér getur ekki athugað hvort tenglar hennar séu til. Opnaðu möppuna sem hún er í í staðinn, og BimCraft merkir hvern tengil sem fundinn eða ekki: [Opna heila verkefnamöppu](topic:open-project-folder).
- **„Þessi skrá er ófullkomin…“** Skráin var skorin af meðan hún var afrituð, hlaðin upp eða samstillt. Skrá á skýjadrifi sem er enn „aðeins á netinu“ gerir þetta líka. BimCraft opnar hana samt og sýnir aðeins það sem náðist: gulbrúna tilkynningu efst á spjaldinu, hluta **Endurheimt úr þessari skrá** sem listar þá hluta sem hvert bæti þeirra er í skránni, og **Ekki í skránni** fyrir restina. Ekkert er fyllt inn fyrir vantandi hluta, svo útgáfan, forskoðunarmyndin eða verkefnaupplýsingarnar geta vantað þegar þær voru geymdar eftir skurðinn. Ef jafnvel efnisskrá skráarinnar var skorin af, er ekkert hægt að opna. Afritaðu upprunalegu skrána aftur og opnaðu hana aftur fyrir alla skrána.
- **„Engin forskoðunarmynd í þessari skrá“.** Sumar skrár eru vistaðar án hennar. Það er eðlilegt.
- **Opna öryggisafrit óvart.** Skrár sem heita eins og `Tower.0004.rvt` eru númeruð öryggisafrit. Að opna möppuna raðar þeim með líkaninu sínu.
