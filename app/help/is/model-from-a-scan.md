---
title: Líkan úr skanna
summary: Stutt leiðsögn frá leysiskanna að veggjum: opnaðu punktskýið við hlið nýrrar byggingar, jafnaðu það við hæð og teiknaðu veggina á grunnmyndina.
keywords: skanni, leysiskanni, punktský, eins og byggt, núverandi bygging, mæling, rekja, skanni í BIM, líkan úr skanna, sneið, jafna, ferningur, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Hvað þú gerir

Teiknaðu núverandi byggingu út frá leysiskanna hennar: veggi þar sem skanninn sýnir þá, á réttri hæð og í réttu horni hver við annan.

## Skref

1. **Bygging til að teikna í.** {{ui:Skrá}} › {{ui:Ný bygging}}, með eins mörgum hæðum og byggingin hefur (þú getur bætt við hæðum síðar, sjá [Lóðin, byggingin á henni og hæðir hennar](topic:site-building-and-levels)). {{ui:Teikna}} kveikir.
2. **Skanninn.** {{ui:Sýna}} › {{ui:Punktský}} og veldu skrána (LAS, LAZ, E57, PLY, PCD, PTX eða XYZ: sjá [Sýna punktský við hlið líkansins](topic:point-clouds)). Skýið birtist í 3D-sýninni og grunnmyndin sýnir **sneiðina**: skönnuðu punktana 1200 mm (4 feet) yfir hæðinni, sem punkta. Það er hæðin þar sem veggir, hurðir og gluggar sjást best.
3. **Jafnaðu það við hæðina.** Opnaðu valmyndina {{ui:Skanna}} á líkanastikunni og smelltu á {{ui:Samræma gólf þess við þennan kóta}}: skýið færist upp eða niður þar til gólfið sem var skannað liggur á þeirri hæð sem sýnd er. Athugaðu að sneiðin sker nú í gegnum veggina.
4. **Snúðu í takt við bygginguna.** {{ui:Skanna}} › {{ui:Snúa því í takt við bygginguna}} snýr skýinu þannig að veggirnir í sneiðinni liggi eftir ásum grunnmyndarinnar, svo veggir sem þú teiknar með {{key:Shift}} haldið niðri falli í takt við skannann. Það snýst um miðju veggjanna sem fundust, þannig að tré eða veggur nágrannans sem lendir í sneiðinni snýr skannanum ekki úr lagi. Jafnaðu gólfið fyrst: þá sker sneiðin í gegnum veggina.
5. **Rektu veggina.** Veldu {{ui:Veggur}} og smelltu meðfram punktunum: verkfærið smellur á skönnuðu punktana (smellumerkið er lítill tígull) sem og á veggina sem þú hefur teiknað. Veggur er teiknaður á miðlínu sinni, þannig að smelltu á miðju punktaraðanna tveggja sem veggur myndar. Sláðu inn þykkt hans með því að velja gerð veggsins fyrst. Bættu síðan við hurðum og gluggum þar sem sneiðin sýnir eyðurnar.
6. **Næsta hæð.** Veldu hæðina fyrir ofan í hæðalistanum á grunnmyndinni: sneiðin fylgir skurðarhæð hæðarinnar. Jafnaðu gólfið við þá hæð aftur aðeins ef gólf skannans eru ekki þar sem hæðirnar þínar eru.

## Það sem þú ættir að sjá

- Sneiðin breytist þegar þú skiptir um hæð, og þykkari sneið ({{ui:Skanna}} › {{ui:Þykkt sneiðar}}) sýnir fleiri punkta þar sem skanninn er grannur.
- {{ui:Skanna}} › {{ui:Afturkalla samröðunina}} setur skýið aftur þangað sem það var staðsett þegar það var opnað. Jöfnun færir skýið aðeins í sýninni: hún er ekki vistuð í IFC-skránni og veggir sem þú hefur teiknað haldast á sínum stað. Jöfnunin fylgir skýinu þegar þú breytir {{ui:Setja}} eða {{ui:Einingar}}, eða opnar annað líkan.
- {{ui:Skanna}} › {{ui:Sýna sneiðina á grunnmynd}} felur eða sýnir punktana.

:::tip
Stórir skannar: grunnmyndin teiknar allt að 60.000 punkta úr sneiðinni og 3D-sýnin nokkrar milljónir punkta úr öllu skýinu, báðar valdar jafnt yfir skannann, þannig að stór skrá helst hröð. Til að rekja í teikniforritinu í staðinn, notaðu {{ui:Rekja í CadCraft}} á skýstikunni.
:::
