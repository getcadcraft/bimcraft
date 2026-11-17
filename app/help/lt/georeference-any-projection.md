---
title: Georeferencija su bet kuria projekcija
summary: Nurodykite BimCraft, kokioje žemėlapio sistemoje yra modelio koordinatės — iš viso EPSG sąrašo, bet kurios UTM zonos arba jūsų pačių apibrėžtos projekcijos — ir naudokite ją Vietai, žemėlapio sluoksniams ir taškų debesims.
keywords: projekcija, koordinačių sistema, crs, epsg, utm, utm zona, asmeninė projekcija, proj4, proj eilutė, prj, wkt, georeferencija, georeferencavimas, žemėlapio konvertavimas, ifcprojectedcrs, mano projekcijos, platuma, ilguma, rytai, šiaurė, lambert, gauss-kruger, valstijos plokštumos koordinatės, nacionalinis tinklelis
from: 6894c1f2
---

Kai kurie planai nubraižyti žemėlapio sistemoje, kurios nėra trumpame sąraše: UTM zonoje, nacionaliniame tinklelyje arba projekcijoje, kurią kažkas užrašė kaip tekstinį apibrėžimą. {{ui:Matuoti}} › {{ui:Koordinačių sistema…}} leidžia nurodyti, kurią sistemą naudoja modelis.

## Pasirinkite modeliui sistemą

1. Atidarykite modelį, pasirinkite {{ui:Matuoti}}, tada {{ui:Koordinačių sistema…}}.
2. Įveskite paieškos laukelyje. Veikia bet kuris iš šių:
   - EPSG numeris: `32633` arba `EPSG:2277`;
   - UTM zona: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - žodžiai iš pavadinimo: `lambert 93`, `mga zone 56`, `texas central`;
   - projekcijos apibrėžimas: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, neprivaloma su pavadinimu priekyje (`Mano tinklelis = +proj=…`);
   - `.prj` failo tekstas arba naudokite {{ui:Įkelti .prj failą…}}.
3. Pasirinkite rezultatą, tada {{ui:Naudoti šią sistemą}}.

Pasirinkimas įrašomas modelyje (projekto savybių rinkinyje `CadCraft_CRS`), todėl jis vėl atsidaro kartu su modeliu. Išsaugokite modelį, kad pasirinkimas liktų. {{ui:Nuimti nuo modelio}} grąžina prie to, ką nurodo failas.

Jei jūsų apibrėžimas duoda tas pačias koordinates kaip kokia nors sąraše esanti EPSG sistema, BimCraft apie tai praneša ir naudoja tą kodą; kai kelios sąraše esančios sistemos turi tą pačią matematiką, jos įvardijamos kartu.

## Mano projekcijos

Apibrėžimą, kurį įklijuojate, arba `.prj`, kurį įkėlėte, galite įrašyti su {{ui:Įrašyti į Mano projekcijas}}. Sąrašas laikomas šiame įrenginyje (šioje naršyklėje) ir pasiūlomas kitą kartą atidarius pasirinkiklį.

## Kas ją naudoja

- {{ui:Matuoti}} › {{ui:Vieta}} paverčia pasirinktą tašką platuma ir ilguma per modelio sistemą. Anksčiau sustodavo su pastaba, kai failas nurodydavo savo žemėlapio sistemą be EPSG kodo; dabar, įrašius pasirinkimą, pateikiamas atsakymas.
- Žemėlapio sluoksniai po modeliu naudoja tą pačią sistemą. Taškų debesis ar reljefo failas kitoje sistemoje siūlomas modelio sistemai (žr. žemiau).
- {{ui:Parametrai}} › {{ui:BimCraft}} › {{ui:Vieta}} › {{ui:Pasirinkti kitą sistemą…}} nustato, ką {{ui:Vieta}} dar rodo: platumą ir ilgumą bet kurioje sąraše esančioje geografinėje sistemoje arba rytines ir šiaurines koordinates bet kurioje projekcinėje sistemoje, be paties modelio sistemos.

## Modelis, kurio dar nėra žemėlapyje

Jei faile nėra žemėlapio konvertavimo, pasirinkus sistemą atsidaro {{ui:Padėkite šį modelį žemėlapyje}}. Jį taip pat galite atidaryti iš {{ui:Matuoti}} › {{ui:Žemėlapio pradžios taškas…}}.

1. Nurodykite modelio pradžios tašką kaip rytines ir šiaurines koordinates sistemoje arba įveskite platumą ir ilgumą bei pasirinkite {{ui:Konvertuoti į rytines ir šiaurines koordinates}}.
2. Nurodykite pasukimą iki šiaurės krypties tinklelyje (laipsniais, prieš laikrodžio rodyklę; 0 reiškia, kad modelio Y ašis rodo į tinklelio šiaurę) ir pradžios taško aukštį.
3. Mastelis pradedamas nuo modelio ir žemėlapio vienetų skirtumo (0.001 milimetrų modeliui metrų tinklelyje). Keiskite tik tada, kai tai kombinuotas žemės–tinklelio koeficientas.
4. Pasirinkite {{ui:Padėti žemėlapyje}}. Vienas atšaukimo žingsnis įrašo IfcProjectedCRS ir IfcMapConversion (IFC4). Pats modelis nejuda.

IFC2X3 faile tų subjektų nėra. BimCraft įrašo tuos pačius skaičius, kaip tai leidžia tas standartas: buildingSMART savybių rinkinius `ePSet_MapConversion` ir `ePSet_ProjectedCRS` projekte, vietos platumą ir ilgumą bei tikrąją šiaurę. Dialogas tai nurodo. Išsaugokite modelį, kad jis išliktų.

## Modelis, jau esantis žemėlapyje

Kai failas jau pats save patalpina žemėlapyje ir pasirenkate kitą sistemą, BimCraft klausia:

- {{ui:Keisti tik tai, ką rodo Vieta}} palieka failo georeferenciją ir naudoja jūsų pasirinkimą {{ui:Vietai}}, žemėlapio sluoksniams ir taškų debesims (modelio skaičiai tada skaitomi kaip esantys naujoje sistemoje).
- {{ui:Perkelti modelį į šią sistemą}} perrašo georeferenciją: pradžios taškas perkeliamas per projekciją (rytinės ir šiaurinės koordinatės, aukštis, pasukimas ir mastelis), o IfcProjectedCRS (pavadinimas, datumas, projekcija, zona, vienetas) perrašomas, todėl išsaugotas IFC nurodo naują sistemą. Vieta Žemėje lieka ta pati: pradžios taškas išlaiko savo platumą ir ilgumą. Elementai modelyje niekada nesikeičia; keičiasi tik georeferencija.

Dialogas prieš jūsų pasirinkimą rodo senąjį ir naująjį pradžios tašką. Perkėlus į vieną ir atgal, pradžios taškas grįžta į vieno milimetro tikslumą.

## Taškų debesys ir reljefas kitoje sistemoje

Debesis ar matavimų failas turi savo sistemą (LAS, LAZ, E57, GeoTIFF) arba jos neturi. Kai ji skiriasi nuo modelio, BimCraft siūlo {{ui:Perprojektuoti į modelio sistemą}}. Taškai perkeliami paketais (kai jų daug — darbiniame procese, kad puslapis liktų naudojamas), jūsų kompiuteryje esantis failas nekeičiamas, o būsenos eilutė nurodo, kas buvo padaryta. Norėdami grįžti prie savo sistemos, atidarykite failą iš naujo. Jau atidarytam debesiui tą patį atlieka {{ui:Perprojektuoti į modelį…}} debesies juostoje.

Jei failas nenurodo sistemos, BimCraft klausia: {{ui:Kokioje sistemoje yra šis failas?}} Pasirinkite ją su {{ui:Pasirinkti sistemą…}}, ir atsakymas įsimenamas tam failui šiame įrenginyje. {{ui:Palikti savo failo sistemą}} palieka taškus, kaip jie yra.

## Kai kas apytikslė

Problemos išvardijamos dialoge ir Problemų skydelyje, niekada tyliai:

- Vieta, esanti už ploto, kuriam sistema skirta: skaičiai veikia, bet iškraipymas auga.
- Datumų poslinkiai, kuriems reikia tinklelio failo (NADCON, NTv2 ir pan.), nėra prieinami. Sistemos kitame datume perkeliamos be tinklelio poslinkiu, kurį nurodo EPSG registras, ir rezultatas yra apytikslis iki nurodyto tikslumo, kurį pranešimas pateikia metrais.
- Taškas, kurio negalima projektuoti, praleidžiamas ir suskaičiuojamas; failas, viršijantis dydžio ribą, atmetamas, o riba nurodoma.

:::tip
Žemėlapio koordinatėms reikia žemėlapio konvertavimo. Failas be jo dedamas į žemėlapį su {{ui:Žemėlapio pradžios taškas…}}.
:::

:::note
Perkėlimas tarp datumų be tinklelio failo tikslus iki kelių metrų; Vietos rezultate nurodoma, kiek, kai katalogas tai žino.
:::
