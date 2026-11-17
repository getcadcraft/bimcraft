---
title: Stillingar BimCraft
summary: Veldu hvort rými sjást, hvort jaðrar eru teiknaðir og í hvaða sýn líkan opnast, og byrjaðu að setja inn með Smella að vegg kveikt.
keywords: stillingar, eiginleikar, valkostir, rými, ifcspace, jaðrar, línur, afköst, stórt líkan, opnunarsýn, myndavél, efsta sýn, smella að vegg, smellun
from: 4416e64f
---

Opnaðu {{ui:Stillingar}} með tannhjólinu í forritastikunni eða {{key:Mod+,}}. Fyrsti flipinn, {{ui:BimCraft}}, geymir stillingarnar sem tilheyra þessu forriti; {{ui:Almennt}} geymir þær sem öll CadCraft-forrit deila (þema, tækjastika, spjöld). Stillingar BimCraft gilda aðeins í forritinu: þú breytir þeim hér og vafrinn man þær. {{ui:Endurstilla stillingar BimCraft}} neðst í glugganum færir þær, og þær sameiginlegu, aftur í upphafsgildi.

## Valmyndir, lyklar og mús

Valmyndarstíllinn (eigin tækjastika BimCraft, valmyndastika í húsateikningu, BIM-borði eða skipanalína teikningar), þínir eigin lyklar og valmyndir, og hvað hjólið og músarhnapparnir gera. Sjá [Valmyndir, lyklar og mús](topic:menus-keys-and-mouse).

## Þegar líkan opnast

- **Sýna rými og svæði** (slökkt í upphafi): rými eru gegnsæir kassar sem geta hulið veggina á bak við þau, þess vegna byrja þau falin. Hnappurinn {{ui:Rými}} fyrir ofan líkanið kveikir og slekkur á þeim samt fyrir opna líkanið.
- **Jaðrar**: {{ui:Jaðrar á}} (upphafsgildið) teiknar jaðarlínurnar sem gefa teiknistílinn. {{ui:Aðeins lítil líkön}} teiknar þær aðeins fyrir líkön með undir 300,000 þríhyrninga, sem heldur stórum líkönum fljótari í snúningi. {{ui:Jaðrar af}} byrjar hvert líkan án þeirra. Hnappurinn {{ui:Brúnir}} kveikir og slekkur þær enn á opna líkaninu. Yfir 1.5 milljón þríhyrninga eru jaðrar alltaf slökktir.

## Teikningar opnast í

Hvernig DWG- eða DXF-teikning birtist fyrst: {{ui:3D (hraðast)}} (upphafsgildið) teiknar jafnvel stóra teikningu hratt, eða {{ui:Líkan (2D)}} opnar flata líkansvæðið. Flipar fyrir ofan teikninguna skipta á milli {{ui:Líkan}}, blaðanna og {{ui:3D}} hvenær sem er. Teikning án neins í líkansvæðinu, eða vafri sem getur ekki sýnt 3D, opnast alltaf í 2D.

## Opnunarsýn

Myndavélin sem líkan opnast með: {{ui:Passa}} (upphafsgildið, allt líkanið séð úr horni), {{ui:Ofan}}, {{ui:Framan}} eða {{ui:Hlið}}. Hnapparnir fyrir ofan líkanið breyta sýninni hvenær sem er.

**Bygging snúin á lóðinni**: mörg líkön koma með byggingu í horni miðað við ása skrárinnar (á mælingu eða sameiginlegum hnitum). {{ui:Hornrétt á bygginguna}} (upphafsgildið) sýnir slíka byggingu hornrétta: {{ui:Passa}}, {{ui:Ofan}}, {{ui:Framan}}, {{ui:Hlið}}, fletir útsýniskubbsins og sérhvert nýtt snið fylgja veggjum hennar, og áttavitinn á útsýniskubbnum vísar enn á norður líkansins. {{ui:Eins og hún stendur á lóðinni}} heldur ásum skrárinnar. Bygging sem veggir liggja meðfram ásunum lítur eins út hvorn veginn sem er.

## Setja inn hluti úr bókasafni

**Byrjaðu með Smella að vegg kveikt** (slökkt í upphafi): þegar innsetning eða líming hlutar úr bókasafni hefst smellur bakhlið hans að næsta vegg og snýr að rýminu. {{key:Tab}} eða {{ui:Smella að vegg}} í innsetningarstikunni slekkur á því í augnablikinu. Hæð án veggja byrjar án þess.

## Sniðkassi

{{ui:Svigrúm í kringum valið}} er hversu mikið rými {{ui:Sniðkassi utan um valið}} skilur eftir á öllum hliðum valinna hluta, í millimetrum: 300 í upphafi, allt að 5000. Sjá [Skera IFC-líkan með sniðfleti](topic:section-plane).

## Staðsetning

{{ui:Breiddar- og lengdargráða í}} velur kerfið sem {{ui:Mæla}} › {{ui:Staðsetning}} gefur breiddar- og lengdargráður í: WGS 84 (EPSG:4326, upphafsgildið, eins og GPS og vefkort nota), {{ui:Eigin viðmiðunarflötur skrárinnar}}, eða eitt af ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 og CGCS2000. Kortakerfi og viðmiðunarflötur skrárinnar eru alltaf líka sýnd. Sjá [Mæla vegalengdir, flatarmál fleta og staðsetningar í 3D](topic:measure).

## Hornvísir

Hvað er í neðra hægra horni 3D-sýna (IFC-líkan, og teikning sem er skipt yfir í 3D): {{ui:Útsýniskubbur}} (upphafsgildið), {{ui:Áskerfistákn}} (lítið X, Y og Z) eða {{ui:Ekkert}}. Breytingin verður strax. 2D-teikningasýnin sýnir aldrei neitt slíkt.

Á útsýniskubbnum smellirðu á flöt, brún eða horn til að líta frá þeirri hlið, dregur kubbinn til að snúast um hann, dregur hringinn til að snúa við og smellir á húsið fyrir upphafssýnina.

## Nafnið þitt á vandamálum

Með innskráningu bera vandamál nafn aðgangsins þíns og BimCraft biður ekki um neitt: þessi hluti sýnir {{ui:Frá aðgangi þínum (<name>)}}. {{ui:Nota annað nafn}} opnar reit fyrir annað nafn, sem gildir þar til þú velur {{ui:Nota nafn aðgangsins míns}}. Án innskráningar biður eyðublað vandamálsins um nafn eins og áður. Sjá [Vandamál og BCF-skrár](topic:issues-bcf).

## Aðstoðarmenn

**Leyfa gervigreindaraðstoðarmönnum og skriftum að nota BimCraft** (slökkt í upphafi) leyfir aðstoðarmanni á tölvunni þinni að ná í opna líkanið í gegnum CadCraft Studio: **Lesa** finnur hluti og les eiginleika þeirra, **Breyta sýn** einangrar, felur og sýnir þá. **Virkni** sýnir köllin hans. Sjá [Leyfðu gervigreindaraðstoðarmanni að vinna með líkanið þitt](topic:assistants).

:::note
Hinar stillingarnar gilda þegar líkan opnast eða innsetning hefst. Líkan sem er þegar opið heldur útliti sínu þar til þú notar hnappana á tækjastikunni eða opnar það aftur.
:::

## Tengt

- [Afrita, líma og tvöfalda hluti úr bókasafni](topic:copy-paste)
- [Setja búnað og húsgögn inn úr bókasafni](topic:place-from-library)
- [Skjár BimCraft](topic:workspace)
- [Leyfðu gervigreindaraðstoðarmanni að vinna með líkanið þitt](topic:assistants)
