---
title: "Standaardbeleide: stel waarmee 'n nuwe gebou begin"
summary: Sê een keer watter muurtipe, vlakke, eerste blad, LOD-etikette, eenhede en gereedskap 'n nuwe gebou mee begin, vir metriese en imperiale projekte, en deel die beleide regoor die kantoor as 'n klein lêer.
keywords: standaard, standaarde, standaardbeleide, beleid, kantoorstandaard, kantoorstandaarde, sjabloon, nuwe gebou, eerste muurtipe, metriese muur, messelwerk, LOD, ontwikkelingsvlak, eerste blad, papier, skaal, vlakke, vlakhoogte, vlaknaam, muurgereedskap, eenhede, deel, uitvoer, invoer, json
from: 42379aa5
---

## Wat jy gaan doen

Sê vir BimCraft waarmee 'n nuwe gebou moet begin, sodat niemand in die kantoor dieselfde dinge elke keer hoef te verander nie. Dit is 'n byvoeging: dit is af totdat jy dit aanskakel, en 'n beleid wat jy nie stel nie, laat BimCraft se eie standaard presies soos dit is.

:::note
Dit is standaarde vir **nuwe** geboue en **nuwe** dinge. 'n Projek wat jy reeds begin het, word nie verander nie.
:::

## Stappe

1. Maak Instellings oop, gaan na {{ui:Add-ons}} en skakel {{ui:Default Policies}} aan.
2. Maak in Instellings die **BimCraft**-oortjie oop en kies {{ui:Default Policies}} in die lys aan die linkerkant.
3. Stel die beleide wat jy wil hê. Elkeen begin op **BimCraft se eie**, met wat dit is in hakies. 'n Beleid met 'n **Metries**- en 'n **Imperiaal**-blokkie neem een waarde vir elke soort projek; vul net die wat jy nodig het in.
4. Daar is geen Stoor-knoppie nie: elke verandering word gestoor soos jy dit maak. 'n Waarde wat nie gebruik kan word nie, word in woorde geweier en die ou een bly.
5. Klik {{ui:New building}}. Die dialoog word gevul uit jou beleide, en elke waarde wat 'n beleid stel, sê **uit jou Standaardbeleide** langs dit. Jy kan steeds enige van hulle verander voor {{ui:Create}}.

## Die beleide

- **Eenhede van 'n nuwe gebou**: die eenhede skakel na hierdie een op Skep.
- **Aantal vlakke**, **Vlaknaam** en **Vlakhoogte**. In 'n naam tel `{n}` 1, 2, 3; `{n0}` tel 0, 1, 2; `{nn}` en `{nn0}` doen dieselfde met twee syfers. So gee `Verdieping {nn0}` Verdieping 00, Verdieping 01, Verdieping 02.
- **Eerste muurtipe**: wat die Muur-gereedskap eerste teken. 'n Metriese kantoor kan begin met Buitemessel 300 mm terwyl imperiale projekte Buite 2×6 hou.
- **LOD-etiket op die beginmuurtipes**: die ontwikkelingsvlak (LOD 100 tot 500) wat die nege beginnertipes wys oral waar 'n tipe gelys word. Sien [Bou muursamestellings](topic:wall-assemblies).
- **LOD van 'n nuut gemaakte muurtipe**: die etiket waarmee 'n nuwe tipe in die tipe-redigeerder begin. Jy kan dit daar verander.
- **Eerste blad**: sy papier, skaal, bladnommer en naam (gebruik `{level}` vir die laagste vlak se naam), of geen eerste blad nie.
- **Annotasiegroottes op papier** (Instellings › Globaal › Standaardbeleide): die kantoor se hoogtes, in millimeter soos gedruk, vir notas, maatteks, etikette, vertrekname, letters van die roosterbelletjies, aansigtitels en skedule-teks. 'n Nuwe gebou neem hulle op Skep en hou hulle in sy lêer. Sien [Teken op volle grootte, annoteer volgens skaal](topic:annotation-sizes).
- **Gereedskap wat aktief is na Skep**: Kies, soos BimCraft op sy eie doen, of Muur, sodat die eerste twee klikke op die plan reeds 'n muur teken.

## Skedule-uitleg: die kantoorstandaard

In **Instellings › Globaal › Standaardbeleide**, onder **Skedule-uitleg (die kantoorstandaard)**, stel hoe elke skedule gegroepeer word, of dit subtotale en 'n totaal het, sy titel en die kapitaalgebruik van sy kolomopskrifte. Elke skedule wat nie sy eie stel nie, neem hulle, wie dit ook opstel. Sien [Lê 'n skedule uit, stoor en voer dit uit](topic:schedule-layouts).

## Deel dit regoor die kantoor

1. Maak in Instellings die **Globaal**-oortjie oop en kies {{ui:Default Policies}}.
2. Tik die **Kantoornaam** as jy wil. Dit word in die lêer geskryf.
3. Klik {{ui:Save to a file}}. Jy kry 'n klein lêer wat met `.ccdefaults.json` eindig.
4. Op 'n ander rekenaar, skakel die byvoeging aan, maak dieselfde plek oop en klik {{ui:Load from a file}}. Die lêer se beleide vervang die op daardie rekenaar.

Die Globaal-oortjie het ook die **Eenheidstelsel van 'n nuwe projek**, wat geld vir elke app wat die byvoeging het, en {{ui:Reset every policy}}. {{ui:Reset to BimCraft's own defaults}} op die BimCraft-oortjie maak net BimCraft se eie leeg.

## Goed om te weet

- Die lêer is gewone, oop JSON: 'n lys van beleidnaam en waardes. 'n Beleid wat die lêer noem en wat hierdie weergawe nie ken nie, word uitgelaat en in die boodskap genoem; die res laai steeds.
- Beleide word in hierdie blaaier bewaar, vir elke CadCraft-app op hierdie rekenaar. Hulle word nie in die gebouwe lêer gestoor nie, en word nie tussen rekenaars gesinkroniseer nie: gebruik die lêer.
- Die LOD-etiket op 'n beginnertipe kom uit die beleid op hierdie rekenaar. 'n Tipe wat jy as 'n kopie van 'n beginner maak, dra sy etiket in die gebouwe lêer.
- BimCraft het geen presisie-instelling nie, so daar is hier geen presisiebeleid nie.
- 'n Gebou wat uit 'n sjabloon begin is, bring die sjabloon se eie vlakke en blaaie. Die muurtipe- en eenhedebeleid geld steeds.
- Skakel die byvoeging af en alles is weer BimCraft se eie. Jou beleide word bewaar vir wanneer jy dit weer aanskakel.
