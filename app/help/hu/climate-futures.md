---
title: "Éghajlati jövőkép: árvíz, hőség és erdőtűz 2050-ben és 2080-ban"
summary: Futtassa újra az árvíz-, az energiaéves és az erdőtűz-szűrő vizsgálatot jövőbeli éghajlattal (SSP2-4.5 és SSP5-8.5 forgatókönyvek, 2050 és 2080 évek) egy éghajlati adatcsomagból, a jelen és a jövő egymás mellett megjelenítésével.
keywords: éghajlat, éghajlatváltozás, jövő, 2050, 2080, ssp, cmip6, forgatókönyv, tengerszint-emelkedés, árvíz, hőség, időjárási fájl, epw, morfing, energyplus, erdőtűz, tűzveszélyes időjárás
from: 224ecd08
---

Az éghajlati adatok egy **adatcsomagból** származnak, nem magából az alkalmazásból. Kapcsolja be a {{ui:Éghajlati jövőképek}} bővítményt a Beállítások › Bővítmények menüben, vagy töltsön be saját csomagfájlt az {{ui:Éghajlati jövőkép}} blokkban.

:::warning
A bővítménnyel érkező csomag **minta**: három hely (Denver, Miami, Johannesburg), egy klímamodell, és 20 éves időszakonként öt év. Arra való, hogy kipróbálja az eszközöket, **nem tervezéshez**. A panel használat közben félkövéren jelzi ezt. Teljes csomag (sok modell, minden év, több hely) a `tools/climate/build-pack.mjs` segítségével készül a NASA NEX-GDDP-CMIP6 adataiból.
:::

## Jövő kiválasztása

A bal oldali panel {{ui:Veszélyhelyzet lejátszása}} részében válasszon egy **Forgatókönyvet** (SSP2-4.5, a középút, vagy SSP5-8.5, magas kibocsátás), és egy **Évet** (2050 a 2041-2060 időszakot, 2080 a 2071-2090 időszakot jelenti; mindkettő az 1995-2014 időszakhoz képest). A **Hely** a csomagban lévő, a modell telkéhez (IfcSite szélességi és hosszúsági foka) legközelebbi hely, vagy az, amelyet Ön választ. Bármely helytől távol a csomag globális átlagos változásait használja, és a panel ezt jelzi.

## Árvíz, jelen és jövő egymás mellett

Ha forgatókönyvet választott, állítsa be az **Árvíz típusát**: part menti (hozzáadja a tengerszint-emelkedést), folyó vagy heves eső (mélyebb a legcsapadékosabb nap esőjének változásával), vagy mindkettő. Nyomja meg a Futtatást: az árvíz a szokásos módon lejátszódik, és egy táblázat jelen és jövő árvizét egymás mellett mutatja (vízszint, elázó helyiségek, legmélyebb víz). A feltevések alatta találhatók:

- a part menti szint a teljes tengerszint-emelkedéssel nő; a vihar- és a hullámhatás nem változik;
- a folyó vízhozama egy-az-egyhez követi a legcsapadékosabb napi csapadékot, a mélység pedig a vízhozam 0,6-os hatványát követi (Manning-egyenlet széles mederre);
- a két részt egyszerűen összeadjuk.

## Hő: jövőbeli időjárási fájl

Válassza a {{ui:Hő: jövőbeli időjárási fájl}} típust, válasszon egy mai `.epw` időjárási fájlt, és nyomja meg a {{ui:A jövőbeli időjárási fájl elkészítése}} gombot. A fájl a közzétett eltolási és nyújtási módszerrel (Belcher, Hacker és Powell 2005) **morfolódik** havonként: a havi átlag a csomag változásával melegszik, a forró délutánok a napi maximum változásával, a hideg éjszakák a napi minimum változásával; a relatív páratartalom a csomag változásával mozdul el, a harmatpontot pedig újra kiszámítjuk. A nyomás és a szél változatlan marad. A táblázat összehasonlítja az átlagos és a legmelegebb hőmérsékletet, a 0,4%-os hűtési és a 99,6%-os fűtési tervezési hőmérsékletet, a 30 °C-os és a 35 °C-os órákat, valamint a foknapokat.

A {{ui:A jövőbeli időjárási fájl mentése}} elmenti; a {{ui:Használat az energetikai vizsgálatban}} átadja az EnergyPlus-vizsgálatnak (Energia fül). A jövőbeli fájl ugyanaz a tipikus év, melegebben: nem ad hozzá új hőhullámokat.

## Energiaév, jelen és jövő egymás mellett

Az Energia fülön lévő EnergyPlus-vizsgálatban (saját bővítményként, saját motorral) válasszon egy mai időjárási fájlt, majd egy forgatókönyvet és egy évet a {{ui:Éghajlati jövőkép}} blokkjában, és nyomja meg a {{ui:Egy év szimulálása: jelen és jövő}} gombot. Az év a mai fájlon és annak morfolt jövőbeli változatán fut, és helyiségenként a fűtés és a hűtés egymás mellett jelenik meg.

## Erdőtűz-kitettség (csak szűrés)

Válassza a {{ui:Erdőtűz-kitettség (csak szűrés)}} típust: a legközelebbi növényzet, a növényzettől az épületig tartó lejtés és a távolság. Az eredmény a nagyon alacsonytól a szélsőségesig terjedő sáv, jelen és jövő szerint.

:::warning
**Csak szűrés.** Ez a saját, relatív skálánk, amellyel eldönthető, hogy egy telek igényel-e megfelelő tűzveszély-értékelést. Nem építési előírási besorolás és nem bozóttűz-támadási szint. A növényzet súlyát, egy lejtőtényezőt (a tűz nagyjából kétszeresére gyorsul minden 10 fokos felfelé lejtésnél, legfeljebb 20 fokig számolva), egy távolságtényezőt (10 m osztva a távolsággal, legfeljebb 1) és a csomag tűzi időjárási indexének változását szorozza össze.
:::

## Honnan származnak a számok

- **Hőmérséklet, páratartalom, napsütés, csapadék, tűzi időjárás:** NASA NEX-GDDP-CMIP6, napi léptékre leskálázott CMIP6 modellkimenetek. Minden modell kimenete CC BY 4.0 alatt áll. A tűzi időjárás változása a kanadai tűzi időjárási index (Canadian Fire Weather Index), amelyet napról napra számítottak ki a modell időjárásából (délben mért páratartalom helyett a napi páratartalommal).
- **Tengerszint-emelkedés:** az IPCC AR6 globális átlaga (nem helyi; a süllyedő vagy emelkedő szárazföld nincs benne), hacsak az adatcsomag nem tartalmaz helyi adatokat.
- Az adatcsomag megnevezi forrását, licencét és dátumát; a panel ezeket megjeleníti.
