---
title: Trepid ja piirded
summary: Joonista sirged, L-kujulised, U-kujulised ja pöördastmetega trepid, mille tõusud ja astmed arvutatakse korruste vahelisest kõrgusest, koos käsipuude ja balustritega ning trepikoja väljalõikega kohal oleval korrusel; joonista turvapiirded tekkide ja avade ümber.
keywords: spiraal, ümmargune trepp, trepp, trepid, trepiaste, trepijooks, tõus, astmik, podest, pöördtrepp, L-trepp, U-trepp, serpentiin, käsipuu, turvapiire, piire, balustrid, post, trepikoda, vaba kõrgus, tekk, rõdu
from: 16e5ace4
---

## Mida sa teed

Lisa trepid korruste vahele ja piirded kohtadesse, kus inimesed neid vajavad. Trepp arvutab ise oma astmed korruste vahelisest kõrgusest, hoiab need tavapärastes elamu piirides, paigutab käsipuud avatud külgedele ja lõikab oma trepikoja kohal olevale korrusele põrandasse.

## Joonista trepp

1. Korrusel, kust trepp algab, ava {{ui:Versioon}} ja vali {{ui:Trepp}}.
2. Vali tüüp – **Sirge**, **L-kujuline podestiga**, **U-kujuline podestiga** või **L-kujuline pöördastmetega** –, suund, kuhu see **pöördub**, selle **laius** ja kuhu **käsipuud** lähevad.
3. Klõpsa kohta, kus trepp algab: alumise astme esiserva keskel.
4. Liiguta hiirekursorit suunas, kuhu trepp läheb üles; astmed järgivad seda, koos tõusude ja astmike arvuga. See haakub seintega ja 15° sammudega; hoia {{key:Shift}} all, et see jääks risti.
5. Klõpsa. {{key:Esc}} alustab uuesti.

## Joonista spiraaltrepp

1. Ava {{ui:Versioon}}, vali {{ui:Trepp}} ja seejärel tüübiks **Spiraal**.
2. Määra **Pööre**, mis suunas see üles minnes keerdub (vasak on vastupäeva).
3. Klõpsa posti keskpunkti.
4. Klõpsa suunas, kuhu alumine aste osutab.

See algab 30" laiusena (astmest, posti servast väliskülje servani), 4½" postiga. Tõusud arvutatakse korruste vahelisest kõrgusest, vaikimisi kuni 9½". Astmed on kõnejoonel 7½" sügavused ja 12" kaugusel postist. Käsipuu jookseb välisküljel.

Jaotises **Omadused** lisab spiraaltrepp valiku **Keskpost**, mis on selle läbimõõt. Väli **Aste** mõõdetakse kõnejoonel. Selle kontrollid on spiraaltrepi märgistatud vaikeväärtused: 26" vaba laius, kõnejoonel vähemalt 6¾" astet, tõusud kuni 9½" ja käsipuud 34"–38". Need ei ole inseneriarvutus; ehitusinspektor otsustab.

## Kuidas astmed arvutatakse

Korruse põranda ja sellest ülemise korruse vaheline kõrgus jagatakse võrdseteks tõusudeks, mis ei ole kõrgemad kui 7¾", ning iga aste on 10" sügav (mõlemat saab muuta jaotises **Omadused**). Podest loetakse üheks astmeks; pöördastmed on kolm sisenurga ümber waaierjalt paigutatud astet. Muuda korruse kõrgust ja iga selle korruse trepp arvutatakse uuesti.

:::warning
7¾" tõusud, 10" astmed, 36" laius, 6'-8" vaba kõrgus ja 34"–38" käsipuud on tavapärase elamuehituse normi järgi märgistatud vaikeväärtused, mitte inseneriarvutus. **Omadused** näitab, mis on täidetud; kohaldatava otsustab ehitusinspektor.
:::

## Muuda trepp

Vali trepp (klõpsa sellel plaanil või 3D-vaates) ja muuda seda jaotises **Omadused**: tüüpi ja pööret, laiust, kõrgeimat tõusu, astme sügavust, käsipuid ja nende kõrgust ning trepikoja jaoks **Lõika kohal oleva korruse põrand**. Tõusud ja astmed, mis lõpuks saadi, on näidatud allpool.

## Trepikoda

Kui kohal olevale korrusele on põrand, lõikab trepp seda seal, kus astmed jääksid vähem kui 6'-8" vaba kõrgusega. Lõige liigub koos trepiga ja kaob, kui trepp kustutatakse.

## Joonista piire

1. Ava {{ui:Versioon}} ja vali {{ui:Käsipuu}}.
2. Vali **Turvapiire** (36" kõrge) või **Käsipuu** ning selle kõrgus.
3. Klõpsa mööda serva – tekki, rõdu, ümber trepikoja – ja topeltklõps või vajuta {{key:Enter}}, et lõpetada.

Piiretel on otstes ja nurkades postid ning balustrid, mille vahed on alla 4". Vali üks, et muuta selle tüüpi, kõrgust või seda, kui kaugel põrandast see algab.

## Joonista aed

Vali sama piiretööriista juurest **Aed**, määra selle kõrgus (alguses 1800 mm), klõpsa mööda aia joont ja vajuta {{key:Enter}}.

- Aiale tulevad postid igas otsas ja igas nurgas ning post vähemalt iga 2.4 m vahel. Paneelaias on postide vahel paneel; latiaias on kaks latti. Need mõõdud on tavalised valikud, mitte normi nõue: kohalikud eeskirjad piiravad aia kõrgust.
- See on mudelis üks element (IfcRailing nimega Fence) omaduskomplektiga {{ui:CadCraft_Fence}}: stiil, kõrgus, postid, paneelid, latid, väravad, pikkus ja paneeli pindala. Üks tagasivõtmise samm.
- Siin ei joonistata: väravaid (need paigutab CivilCraftis genereerija), pikettaedu, maastikku (aed seisab korrusel) ja üksiku posti valimist.

## Mis salvestatakse

Trepp salvestatakse IFC-trepina, mis koosneb trepijooksudest (koos nende tõusude, astmete, tõusukõrguse ja astme pikkusega), podestidest, pöördastmetest ja käsipuudest; trepikoda on ava kohal oleva korruse põrandaplaadis. Piirded on IFC-piirded oma pikkuse ning balustrite ja postide arvuga.
