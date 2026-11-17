---
title: Opna .pln- og .pla-verkefnaskrár
summary: Hvað BimCraft gerir við .pln-, .pla-, .tpl- og .bpn-skrár eins og er, og hvernig flytja á út IFC og DWG úr þeim svo líkanið og teikningarnar opnist hér.
keywords: pln, pla, tpl, bpn, verkefnaskrá, safnskrá, sniðmát, öryggisafrit, ifc-útflutningur, dwg-útflutningur, þýðandi, svæði, útlit
from: 41fb921d
---

## Hvað þú gerir

Kemur verkefni sem er vistað sem `.pln` (verkefni), `.pla` (safn með sínu bókasafni), `.tpl` (sniðmát) eða `.bpn` (öryggisafrit) inn í BimCraft. Þetta eru eigin skrár Archicad.

## Hvað opnast núna

- **Verkefnaskrárnar sjálfar opnast ekki enn.** Sniðið þeirra er ekki birt og BimCraft les það ekki enn. Þegar þú opnar eina segir BimCraft það og vísar hingað.
- **BimCraft athugar fyrstu bæti skrárinnar.** Archicad-verkefni frá útgáfu 17 og síðar byrja á sama stutta auðkenni, svo BimCraft getur sagt þér með vissu að skrá sé Archicad-verkefni. Skrá með Archicad-nafni sem byrjar ekki þannig hefur líklega verið endurnefnd, er skemmd eða kemur úr eldri útgáfu. Auðkennið greinir ekki verkefni, safn og sniðmát að.
- **IFC-útflutningur opnast að fullu**: líkanið í 3D, hæðir, svæði sem rými, eigindi hluta, eiginleikasöfn og flokkanir, með öllum verkfærum BimCraft.
- **DWG-útflutningur opnast** í 2D-sýninni, með lögum sínum og útlitum, og í {{ui:3D}}. Til að breyta honum, notaðu {{ui:Breyta í CadCraft}}.

Eða taktu allt verkefnið inn sem eina zip-skrá, með sýnum sínum, útlitum og eiginleikahópum: sjá [Opna verkefnapakka](topic:open-project-bundle).

## Flytja út IFC (líkanið)

1. Opnaðu verkefnið í Archicad.
2. Veldu **File > Save As** og veldu **IFC** sem skráartegund.
3. Veldu IFC-þýðanda (heiti Archicad á safni af IFC-útflutningsstillingum). Einn fyrir **IFC4 Reference View** eða **IFC2X3 Coordination View 2.0** hentar BimCraft. IFC4X3 opnast líka.
4. Veldu hvað skal flytja út: allt verkefnið, eða aðeins hlutina sem sjást á hæðunum sem þú ert að skoða.
5. Vistaðu, smelltu síðan á {{ui:Veldu skrá}} í BimCraft og veldu `.ifc`-skrána.

Athugaðu þetta í stillingum þýðandans áður en þú flytur út:

- **Svæði**: fluttu þau út, svo herbergi berist sem rými. Smelltu á {{ui:Rými}} í BimCraft til að sjá þau.
- **Eiginleikar og flokkanir**: fluttu þau út, svo þau birtist í {{ui:Eiginleikar}} og megi nota í {{ui:Leita}}, {{ui:Litur}} og {{ui:Magnsummur}}.
- **Venjuleg `.ifc`**, ekki `.ifczip` eða `.ifcxml`. BimCraft opnar aðeins venjulega `.ifc`.

## Flytja út DWG (teikningarnar)

1. Opnaðu grunnmyndina, sniðið eða útlitið sem þú vilt.
2. Veldu **File > Save As** og veldu **DWG** sem skráartegund.
3. Veldu DXF-DWG-þýðanda og vistaðu.
4. Fyrir heilt sett af blöðum, vistaðu útlitin úr Layout Book, eða gefðu þau út sem DWG.
5. Opnaðu `.dwg`-skrána í BimCraft. Teikningar sem tengdar eru með útflutningnum opnast með henni þegar þær eru í sömu möppu; sjá [Tengdar teikningar og myndir](topic:dwg-linked-files).

## Úrlausn vandamála

- **"… er Archicad-verkefni: fyrstu bæti þess segja það."** Flyttu út IFC eða DWG eins og lýst er hér að ofan og opnaðu þá skrá.
- **"… heitir eins og Archicad-skrá en byrjar ekki eins og ein slík."** Athugaðu hvaðan skráin kom: hún gæti verið önnur tegund skráar með nýju nafni (prófaðu að opna hana undir réttri endingu), afrit sem kláraðist ekki, eða verkefni frá útgáfu fyrir 17. Opnaðu hana í Archicad ef þú getur, og flyttu síðan út IFC eða DWG.
- **Líkanið opnast án herbergja.** Svæðin voru ekki flutt út. Kveiktu á þeim í IFC-þýðandanum og fluttu út aftur.
- **Göt eru ekki skorin.** BimCraft segir það undir **Ekki teiknað enn** í {{ui:Skrá}}-spjaldinu. Flyttu út aftur; ef það heldur áfram, opnaðu líkanið í forritinu sem bjó það til og athugaðu götin þar.
- **Texti á DWG-teikningunni lítur öðruvísi út.** Útflutningurinn gæti haldið leturgerðum sem BimCraft hefur ekki; BimCraft teiknar texta með einföldu letri án serifa.

Sjá einnig [Flytja verkefnaskrá yfir í 3D um IFC](topic:rvt-to-ifc) og [Hvað BimCraft les úr hverju sniði](topic:file-formats).
