---
title: Sklypo žemės paviršius, pamatinė aikštelė ir danga
summary: Įkelkite žemės paviršių į modelį iš geodezinės nuotraukos taškų, horizontalių, LAS / LAZ skenavimo, GeoTIFF, LandXML paviršiaus (CivilCraft) ar kelių taškinių aukščių žymų; įpjaukite namo pamatinę aikštelę su jos nuolydžiais ir iškasa / užpylimu; uždėkite privažiavimus, takus ir terasas ant jos; perduokite CivilCraft kaip LandXML.
keywords: reljefas, žemės paviršius, sklypas, topografija, geodezinė nuotrauka, taškai, PNEZD, horizontalės, LAS, LAZ, LiDAR, GeoTIFF, DEM, aukštis, taškinė aukščio žyma, nuolydis, vertikalusis planavimas, aikštelė, pamatinė aikštelė, iškasa, užpylimas, žemės darbai, išeigos linija, šlaitas, privažiavimas, takas, terasa, danga, LandXML, CivilCraft
from: 208298d6
---

## Ką darysite

Pastatykite namą jo vietoje. Žemės paviršius tampa modelio dalimi: rodomas 3D vaizde, pjaunamas pjūviuose ir fasaduose, o planuose rodomos horizontalės. Į jį įpjaunama namo pamatinė aikštelė, privažiavimai ir takai jį seka, o pamatai žemėja kartu su juo.

## Įkelkite žemės paviršių

1. Atidarykite {{ui:Versija}} ir pasirinkite {{ui:Reljefas}}.
2. Arba:
   - **Atidaryti geodezinės nuotraukos failą…**: geodezinių taškų (PNEZD, PENZD arba paprasta rytų koordinatė, šiaurės koordinatė ir aukštis; atskirti kableliu, tabuliacija ar tarpu), horizontalių DXF ar DWG formatu (polilinijos su savo aukščiu, 3D polilinijos), LAS ar LAZ skenavimo (paliekami žemės taškai, sumažinti maždaug iki vieno taško kvadratiniam metrui), GeoTIFF ar ASCII aukščių tinklelio, arba **LandXML** paviršiaus, kurį eksportuoja CivilCraft (jo taškai ir trikampiai išlaikomi; kai faile yra keli paviršiai, BimCraft klausia, kuris yra žemės paviršius; jo vienetai imami iš failo). Pirmiausia pasirinkite failo vienetus (LandXML nurodo savus).
   - Arba įveskite **Taškinė aukščio žyma** (matuojama nuo šio aukšto grindų, todėl `-1'` reiškia pėdą žemiau jų) ir spustelėkite taškus plane, pakeiskite aukštį ir spustelėkite daugiau taškų, tada **Sukurti žemės paviršių**. Pradžiai pakanka trijų taškų.

Geodezinės koordinatės toli nuo modelio (valstybinė plokštuma, UTM) perkeliamos ant namo, o aukščiai nustatomi taip, kad žemės paviršius prie namo būtų maždaug 8" žemiau pirmojo aukšto. **Pakelti žemės paviršių** savybėse pataiso tai bet kokia verte.

## Pamatinė aikštelė

1. Pasirinkite {{ui:Pamatinė aikštelė}}.
2. Nustatykite **Paraštę** aplink namą, kiek **aikštelė yra žemiau grindų** (8" po plokšte, daugiau po sanitarine erdve) ir **Nuolydžius** iki esamo žemės paviršiaus (`2:1` = dvi pėdos į išorę kiekvienai pėdai aukštyn ar žemyn).
3. Spustelėkite namo viduje ir spragtelėkite.

Žemės paviršius išlyginamas po namu ir iki paraštės, tada kyla į šlaitą (iškasa) ir leidžiasi į žemesnę pusę (užpylimas), kol susilygina su esamu paviršiumi. **Savybėse** žemės paviršiui ir aikštelei rodomi iškasos ir užpylimo tūriai. Perkėlus sienas, aikštelė jas seka.

## Privažiavimai, takai ir terasos

Pasirinkite {{ui:Danga}}, pasirinkite **Takas**, **Privažiavimas** arba **Terasa** ir spustelėkite kampus. Spustelėkite pirmą kampą dar kartą, du kartus spustelėkite arba paspauskite {{key:Enter}}, kad baigtumėte. Danga seka baigtą nuolydį; jos rūšį ar storį keiskite **Savybėse**.

## Pamatai seka žemės paviršių

Kai žemės paviršius yra modelyje, cokolio sienos ir šliaužiamosios erdvės pamatai jį seka: palei kiekvieną sieną pamatas išlieka savo gylyje po išoriniu žemės paviršiumi ir žingsniuoja po visus 8" laiptelius, kur žemė krinta (žr. [Pamatai po sienomis](topic:foundations)).

## Perduokite CivilCraft

**LandXML CivilCraft** (Reljefo eilutėje arba žemės paviršiaus **Savybėse**) atsisiunčia esamą žemės paviršių ir baigtą nuolydį kaip LandXML failą. Atidarykite jį CivilCraft tikram vertikaliam planavimui, drenažui ir žemės darbams.

## Verta žinoti

- Žemės paviršiui reikia IFC4 modelio, kaip ir kiekvienam naujam pastatui.
- Horizontalės rodomos žemės lygio plane, su intervalu, nustatytu žemės paviršiaus **Savybėse**; kiekviena penkta yra storesnė.
- Žemės paviršius įrašomas kaip IFC reljefo elementas (uždarasis trikampių paviršius, kad pjūviai jį pjautų); aikštelė ir danga įrašomos kartu su juo. Norėdami pradėti iš naujo, ištrinkite žemės paviršių: kartu dings ir jo aikštelė bei danga.
