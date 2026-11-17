---
title: "Kliimatulevikud: 2050 ja 2080 üleujutus, kuumus ja metsatulekahju"
summary: Käivita üleujutus, energia-aasta ja metsatulekahju sõeluuring uuesti tuleviku kliimaga (stsenaariumid SSP2-4.5 ja SSP5-8.5, aastad 2050 ja 2080) kliimaandmepaketist, esitatuna praeguse kõrvale.
keywords: kliima, kliimamuutus, tulevik, 2050, 2080, ssp, cmip6, stsenaarium, merepinna tõus, üleujutus, kuumus, ilmafail, epw, morf, energyplus, metsatulekahju, põlemine, tuleilm
from: 224ecd08
---

Kliimaarvud tulevad **andmepaketist**, mitte rakendusest. Lülita sisse lisandmoodul {{ui:Kliimatulevikud}} jaotises Sätted › Lisandmoodulid või laadi oma pakettfail plokis {{ui:Kliimatulevik}}.

:::warning
Lisandmooduliga kaasas olev pakett on **näidis**: kolm kohta (Denver, Miami, Johannesburg), üks kliimamudel ja viis aastat igas 20-aastases perioodis. See on olemas tööriistade proovimiseks, **mitte projekteerimiseks**. Paneel ütleb seda kasutamise ajal paksus kirjas. Täispakett (palju mudeleid, kõik aastad, rohkem kohti) koostatakse skriptiga `tools/climate/build-pack.mjs` NASA NEX-GDDP-CMIP6 andmetest.
:::

## Vali tulevik

Vasakpoolse paneeli {{ui:Ohu esitus}} all vali **Stsenaarium** (SSP2-4.5, keskmine tee, või SSP5-8.5, suur heitkogus) ja **Aasta** (2050 tähendab 2041-2060, 2080 tähendab 2071-2090; mõlemad võrreldes perioodiga 1995-2014). **Koht** on paketi koht, mis on mudeli asukohale kõige lähemal (IfcSite laiuskraad ja pikkuskraad), või see, mille valid. Kui oled kõigist kohtadest kaugel, kasutatakse paketi globaalseid keskmisi muutusi ja paneel ütleb seda.

## Üleujutus, praegune kõrvuti tulevikuga

Kui stsenaarium on valitud, määra **Üleujutuse tüüp**: rannikuäärne (lisab merepinna tõusu), jõgi või rajusadu (sügavam märja päeva sademete muutuse võrra) või mõlemad. Vajuta Käivita: üleujutus mängitakse nagu varem ning tabel näitab praegust ja tulevast üleujutust kõrvuti (veetase, märjaks saavad ruumid, sügavaim vesi). Eeldused on selle all loetletud:

- rannikutase tõuseb terve merepinna tõusu võrra; tormipaisu ja laineid ei muudeta;
- jõevool tõuseb üks-ühele märja päeva sademetega ning sügavus järgib voolu astmel 0.6 (Manningi valem laia kanali jaoks);
- kaks osa lihtsalt liidetakse.

## Kuumus: tuleviku ilmafail

Vali liik {{ui:Kuumus: tulevikuilma fail}}, vali praeguse päeva `.epw` ilmafail ja vajuta {{ui:Koosta tulevikuilma fail}}. Fail **morfitakse** kuu kaupa avaldatud nihke ja venituse meetodiga (Belcher, Hacker ja Powell 2005): kuu keskmine soojeneb paketi muutuse võrra, kuumad pärastlõunad päevase maksimumi muutuse võrra ja külmad ööd päevase miinimumi muutuse võrra; suhteline õhuniiskus liigub paketi muutuse võrra ning kastepunkt arvutatakse uuesti. Rõhk ja tuul jäävad samaks. Tabel võrdleb keskmist ja kõige kuumemat temperatuuri, 0.4 % jahutuse ja 99.6 % küttepiiri projekteerimistemperatuure, tunde 30 °C ja 35 °C juures ning kraadpäevi.

{{ui:Salvesta tulevikuilma fail}} salvestab faili; {{ui:Kasuta seda energiakontrollis}} annab selle EnergyPlusi kontrollile (vahekaart Energia). Tulevikufail on sama tüüpiline aasta, soojem: see ei lisa uusi kuumalaineid.

## Energia-aasta, praegune kõrvuti tulevikuga

Vahekaardi Energia EnergyPlusi kontrollis (eraldi lisandmoodul, sinu enda mootoriga) vali praegune ilmafail, seejärel stsenaarium ja aasta selle plokis {{ui:Kliimatulevik}} ning vajuta {{ui:Simuleeri aastat: praegune ja tulevik}}. Aasta jookseb praeguse faili ja selle morfitud tuleviku peal ning iga ruumi küte ja jahutus on loetletud kõrvuti.

## Metsatulekahju ohustatus (ainult sõeluuring)

Vali liik {{ui:Metsatulekahju ohustatus (ainult sõeluuring)}}: lähim taimkate, nõlva tõus sellest hoonesse ja kaugus sellesse. Tulemus on riba väga madalast kuni äärmuslikuni, praegune ja tulevik.

:::warning
**Ainult sõeluuring.** See on meie enda suhteline skaala, mis näitab, kas koht vajab korralikku tulekahjuhinnangut; see ei ole normipõhine hinnang ega põlemisrünnaku tase. See korrutab taimkatte kaaluga, nõlvakoefitsiendiga (tuli kiireneb umbes kahekordselt iga 10 kraadi kohta ülespoole, arvestatuna kuni 20 kraadini), kaugustegurit (10 m jagatud kaugusega, kõige rohkem 1) ja paketi muutusega tulekahju ilmaindeksis.
:::

## Kust arvud pärinevad

- **Temperatuur, niiskus, päikesepaiste, sademed, tulekahju ilm:** NASA NEX-GDDP-CMIP6, päevased allskaleeritud CMIP6 mudeli väljundid. Iga mudeli väljund on litsentsitud CC BY 4.0 all. Tulekahju ilma muutus on Kanada tulekahju ilmaindeks, arvutatud päev päeva haaval mudeli ilmast (päevase niiskusega keskpäevase niiskuse asemel).
- **Merepinna tõus:** IPCC AR6 globaalne keskmine (mitte kohalik; maa tõus või vajumine ei sisaldu selles), kui pakett ei kanna kohalikke arve.
- Pakett nimetab oma allika, litsentsi ja kuupäeva; paneel näitab neid.
