---
title: Gólf af hvaða lögun sem er, göt og rampar
summary: Teiknaðu gólf eða plötu eftir útlínu (svalir, útskaga, lendingu), skerðu göt í það og teiknaðu rampa með lendingum þeirra.
keywords: gólf, plata, útlína, svalir, útskagi, lending, pallur, gólfgat, gat, skaft, tóm, rampur, halli, aðgengilegur rampur, hjólastólarampur, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Hvað þú gerir

Búðu til gólf sem fylgja ekki rýmum, til dæmis svalir utan veggjanna, og teiknaðu rampa milli kóta.

## Teiknaðu gólf eftir útlínu

1. Kveiktu á {{ui:Teikna}}, veldu kótann, og síðan {{ui:Smíð}} › {{ui:Gólf eftir útlínu}}.
2. Í röðinni undir verkfærunum velurðu gerðina (steypta plötu eða timburgólf), notkun hennar (gólf eða lendingu), þykkt hennar og hvar efri brún hennar er yfir kótanum (0 = í sömu hæð og gólf kótans; neikvætt gildi setur hana neðar).
3. Smelltu á hornin. Verkfærið smellur á veggi, ásalínur og skurðpunkt þeirra; haltu {{key:Shift}} inni til að halda jaðri ferhyrndum. Lengd hvers jaðars og flatarmál birtast eftir því sem þú ferð. {{key:Backspace}} tekur síðasta hornið til baka.
4. Smelltu aftur á fyrsta hornið, tvísmelltu, eða ýttu á {{key:Enter}} til að ljúka.

## Skerðu gat

Smelltu á gólfið (í 3D-sýninni, eða útlínu þess á grunnmyndinni), smelltu síðan í {{ui:Eiginleikar}} á {{ui:Bæta við gati}} og smelltu á hornin á gatinu inni í gólfinu, og ljúktu eins og að ofan. Eiginleikar gólfsins telja upp göt þess, hvert með {{ui:Eyða}}, og flatarmál þess án þeirra.

## Teiknaðu rampa

1. Veldu {{ui:Smíð}} › {{ui:Rampa}}. Stilltu breidd hans, og hvort hann fer **upp á kótann fyrir ofan** eða **upp um hæð** sem þú skrifar.
2. Veldu hvernig hann er settur: **eftir halla** (1:12 í upphafi; rampurinn er eins langur og hæðin krefst) eða **eftir lengd** (annar smellurinn þinn setur lengdina og hallinn fylgir).
3. Smelltu á fót rampsins (miðju neðri brúnarinnar), smelltu síðan á leiðina upp. Forskoðunin sýnir lengd hans, rampahluta og halla.

Hækkun yfir 30 tommur (760 mm) er skipt í rampahluta með 5 feta (1525 mm) lendingu á milli þeirra. Þetta eru algeng viðmiðunargildi fyrir skipulag, ekki reglur þínar: athugaðu reglurnar þar sem þú byggir. Rampur brattari en 1:12 er merktur í **Eiginleikum** hans.

## Hvað þú ættir að sjá

- Sérhvert gólf, göt og rampur er eitt skref: {{key:Mod+Z}} tekur það til baka.
- Á grunnmyndinni: útlína teiknaðs gólfs (gat er krossað), og útlína ramps, rampahlutar, lendingar og ör upp með hallanum.
- Eiginleikar teiknaðs gólfs (gerð, notkun, þykkt, efri brún, flatarmál, göt) og ramps (breidd, efri brún, hækkun, halli eða lengd); {{key:Delete}} fjarlægir hvort sem er.
- Rampur upp á kótann fyrir ofan fylgir þeim kóta þegar hæð hans breytist.
- Í IFC-skránni: teiknað gólf er plata (IfcSlab, gólf eða lending) með götum sínum skornum út (IfcOpeningElement); rampur er IfcRamp úr hallandi rampahlutum (IfcRampFlight) og lendingarplötum, með halla sínum og breidd.

:::note
Gólf teiknuð á þennan hátt haldast þar sem þú teiknaðir þau. Gólf sem gerð eru með {{ui:Gólf}} fylgja rýmum þegar veggirnir færast: sjá [Herbergi, gólf, loft og þök](topic:floors-and-roofs).
:::
