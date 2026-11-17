---
title: Torud ja kanalid
summary: Joonista torude ja kanalite liinid plaanile nende keskjoonte järgi; põlved, T-liitmikud, reduktorid ja üleminekud tehakse sinu eest, liinid kuuluvad süsteemidesse ühendatud portidega IFC-failis ning need on näha plaanides, loendites ja kogustes.
keywords: toru, torud, torustik, sanitaartehnika, kanal, kanalid, kanalitööd, hvac, mep, mehaaniline, põlv, t-liitmik, reduktor, üleminek, liitmik, liitmikud, ventiil, ventiilid, sulgventiil, kuulventiil, kerventiil, tagasilöögiventiil, tõusutoru, kalle, äravool, kanalisatsioon, sademevesi, ventilatsioonitoru, külm vesi, soe vesi, jahutusvesi, küte, gaas, tulekaitse, tarneõhk, tagasiõhk, väljatõmbeõhk, välisõhk, süsteem, süsteemid, port, pordid, ühendus, ühendused, seade, seadmed, sanitaarseade, valamu, kauss, pesukauss, WC, dušš, köögivalamu, sanitaarseadme ühikud, uhc, dfu, äravoolude mõõtmine, harutoru, kollektor, õhuvool, cfm, hõõrdumine, võrdne hõõrdumine, mõõtmine, loend, kogused, nbr 5648, nbr 5688, nbr 8160, pvc liimühendus, dn
from: 85140bc5
---

## Mida sa teed

Joonista hoone torud ja kanalid nii, nagu joonistad seinu: klõpsa liini keskjoone nurki sinu määratud kõrgusel. BimCraft teeb liitmikud, paneb iga osa oma süsteemi ja ühendab need, nii et teised programmid loevad liini ühe ühendatud süsteemina.

## Joonista toru

1. Lülita sisse {{ui:Joonista}}, ava {{ui:Versioon}} ja vali {{ui:Toru}}.
2. Ribal vali **süsteem** (külm vesi, soe vesi, sanitaarne äravool, gaas…). See määrab tavapärase materjali: vesi on vask, äravoolud ja ventilatsioon PVC, küte, jahutusvesi, gaas ja tulekaitse terased. Muuda vajadusel **materjali**, **klassi** ja **suurust**. Suurused ja seinapaksused tulevad avalikest standarditest: terastoru ASME B36.10M, vasktoru ASTM B88, PVC ASTM D1785 ja PEX ASTM F876. Brasiilia projektides võib kasutada **PVC veetoru (NBR 5648)**, liimitavat PVC-d külmale veele, ning **PVC äravoolutoru (NBR 5688)**, normaalseeria või tugevdatud seeria, äravoolude ja ventilatsiooni jaoks: nende suurused on nimetatud DN-ina (DN 25, DN 100). Kui sa valid ühe neist, siis teise süsteemi valimine jääb Brasiilia torude juurde (PVC äravoolutoru sanitaarsele äravoolule pärast PVC veetoru).
3. Määra **Kõrgus**: toru keskjoone kõrgus tasandi kohal.
4. Klõpsa, kus toru algab, seejärel iga nurk. Topeltklõps või {{key:Enter}} viimasel punktil. {{key:Backspace}} võtab viimase nurga tagasi; {{key:Esc}} loobub liinist.

Toru kinnitub seinte sarnaselt ja teiste liinidega: alusta toru otsast, et sealt jätkata, või lõpeta toru joonele, et sellest haruneda. Uus liin võtab selle toru kõrguse, millele see kinnitub.

Liin, mis on alustatud või lõpetatud seadme pordil, võtab selle suuruse ja süsteemi ning jääb sellega fikseerituks: vaata [MEP-seadmed portidega](topic:mep-equipment) ja [Ühenda torud ja kanalid seadmega](topic:mep-connections).

## Määra projekti torustiku standard

Toru ribal on esimene loend mudeli **torustiku standard**: **US (IPC, tollides)** või **Brasiilia (ABNT, DN)**. See salvestatakse mudelisse, nii et igaüks, kes faili avab, alustab liine samamoodi. **US** korral alustab uus liin veega vasest või äravoolul PVC Schedule 40-ga, tollides, rahvusvahelise torustikunormi (IPC) kallega. **Brasiilia** korral algab külm vesi PVC liimitava DN 25-na, sanitaar- ja sademeveeäravoolud ja ventilatsioon PVC kanalisatsioonitoruna DN 100-na NBR 8160 kaldega ning soe vesi vasest. See kehtib ka liinile, mis algab seadme ühenduselt või seadme pordilt. Juba joonistatud torud säilitavad oma materjali ja tabelid; materjalide loend jääb avatuks, nii et saad ikka tahtlikult joonistada ühe Brasiilia liini US-mudelis. Fail ilma valikuta käitub nagu varem: uus liin järgib kasutusel olevat materjali.

## Joonista kanal

1. Vali {{ui:Kanal}}. Vali süsteem (tarneõhk, tagasiõhk, väljatõmbeõhk või välisõhk) ja kuju: ümmargune, ristkülikukujuline või lame ovaal.
2. Sisesta laius ja kõrgus (ümmarguse kanali laius on tema läbimõõt) ning **Kõrgus** keskjoone kõrguse jaoks.
3. Et seda mõõta õhuvoolu järgi, sisesta **Õhuvool** ja **Hõõrdumine** ning klõpsa {{ui:Määra mõõt}}. Kanal mõõdetakse võrdse hõõrdumise meetodil, mis on kirjeldatud ASHRAE käsiraamatu kanalite projekteerimise peatükis, ja ümardatakse ülespoole laos oleva suuruseni, nii et hõõrdumine jääb sisestatud määra juurde või alla selle. Kui määra ei ole sisestatud, kasutatakse 0.08 in. veesammast 100 ft kohta (0.8 Pa/m). Ristkülikukujuline kanal säilitab sinu sisestatud kõrguse ja saab laiuse; BimCraft teatab sellest, kui küljed on suhtega rohkem kui 4:1.
4. Klõpsa nurki nagu toru puhul.

## Sanitaarseadmed

{{ui:Versioon}} › {{ui:Paiguta perekond}} pakub viit seadet, millest alustada, igaüks äravoolu ja külma vee ühendusega: **WC**, **pesukauss**, **köögivalamu**, **dušialus** ja **pesunõu**. Nende esikülg on sulle vastu, kui sa neid paigutad, ja tagakülg toetub seinale. Nende äravoolud on NBR 8160 väikseima sanitaarseadme äravoolu suurusel (DN 100 WC-le, DN 50 köögivalamule, DN 40 teistele); vesi on DN 20. Muuda nende suurusi või redigeeri neid nagu iga perekonda: vaata [Perekonnad ja nende suurused](topic:families).

Perekond märgib, milline seade ta on, väljal {{ui:Sanitaarseade}} perekonnaredaktori vahekaardil {{ui:Ühendused}}. Selle äravool loetakse siis sanitaarseadme ühikutes: 6 UHC WC-le, 1 pesukausile, 3 köögivalamule või pesunõule, 2 dušile (NBR 8160), või IPC tabeli 709.1 äravoolu sanitaarseadme ühikud.

## Seadme ühendusest

Perekonnast paigutatud elemendid, millel on ühendusi (kausi äravool ja kraan, õhuterminali kael: vaata [Muuda perekonda](topic:family-editor)), näitavad oma vabu ühendusi punktidena, kui {{ui:Toru}} või {{ui:Kanal}} on sisse lülitatud, ja kursor kinnitub nende külge.

- **Alusta ühendusest**: liin võtab süsteemi ja suuruse (riba materjali toru, mis vastab ühenduse suurusele või on sellest veidi suurem; ümmargune kanal selle läbimõõduga). Kui ühendus on allapoole või ülespoole, nagu kausi all olev äravool, läheb liin esmalt otse alla või üles kõrguseni väljal **Kõrgus** ja siis edasi sinu klõpsude järgi.
- **Lõpeta ühenduse peal**: liin läheb alla või üles selle peale ja lõpeb seal.

Liin on IFC-failis elemendiga ühendatud, nii et teised programmid näevad seadet selle süsteemi osana. Hiljem paigutatud element, millel on ühendus liini lõpus, on samuti sellega ühendatud. Liin, mis on ühendusest eemale teisaldatud, ei ole enam selle külge ühendatud.

## Liitmikud, mis tehakse sinu eest

| Kus | Mida BimCraft teeb |
|---|---|
| Liin pöördub | Põlve. Terastoru ASME B16.9 pika raadiusega (1.5 × suurus), muu toru ühe välisläbimõõduga, ümmargune kanal 1.5 läbimõõduga, ristkülikukujuline kanal ühe laiusega (või ühe kõrgusega üles või alla pööramisel) |
| Liin lõpeb teise liini joonel | T-liitmik; teine liin lõigatakse seal |
| Kaks liini kohtuvad otsast otsa erinevates suurustes | Reduktor (torud) või üleminek (kanalid) |
| Kaks sama suurusega liini kohtuvad otsast otsa nurga all | Põlve |

Kui sa liini muudad, teisaldad või kustutad, tehakse igal tasandil iga liitmik uuesti. Kui haru on liiga lühike liitmikele, mis on selle otstes, teatab BimCraft sellest ega muuda midagi: liiguta nurka kaugemale.

:::note
Liitmikud ja ventiilid on üldised: joonistatud toru või kanali suuruse järgi, mitte tootja kataloogi järgi. Pistik-, pressi- ja soonliitmikud, ventiilikorpused ja seadmed on tootjate endi mõõtudega; kontrolli neid oma tarnijaga enne tellimist.
:::

## Tõusutorud

Joonistades kirjuta uus kõrgus väljale **Kõrgus** ja vajuta {{key:Enter}}: liin läheb viimase nurga juures otse üles või alla, igas otsas põlvega. Tõusutoru võib minna üles ülemisele tasandile. Iga tasand näitab liini osi, mida selle vaatevahemik ulatub, ja tõusutorul on **UP** või **DN**.

## Äravoolud ja nende kalle

Sanitaar- ja sademeveeäravoolud algavad väikseimast kaldest, mida rahvusvaheline torustikunorm lubab nende suuruse jaoks: 1/4 in. ft kohta kuni 2-1/2 in., 1/8 in. ft kohta 3–6 in., 1/16 in. ft kohta alates 8 in. Brasiilia PVC äravoolutoru algab NBR 8160 kaldest: 2 % kuni DN 75, 1 % alates DN 100. Sisesta muu kalle ribale või omadustesse: `1/4"/ft`, `2 %` või `1:50`. Liin langeb oma algpunktist, seega joonista äravoolud selles suunas, kuhu nad voolavad. Plaan näitab langust ja noolt. Omadused hoiatavad, kui äravool on lamedam kui normi miinimum.

## Mõõda äravoolud sanitaarseadme ühikute järgi

Vali sanitaarne äravool: omadustes näitab **Sanitaarseadme ühikud**, kui palju see kannab ja kui väikese suuruse see vajab. Arvestatakse iga sanitaarseadet, mille äravoolu ühendus on selle liini peal, samuti iga äravoolu, mis sinna voolab: joonista äravoolud selles suunas, kuhu nad voolavad, iga üks lõppedes äravoolul, kuhu see voolab.

- Brasiilia PVC äravoolutorus äravoolud arvestavad **UHC**-d ja järgivad NBR 8160; teised arvestavad **DFU**-d ja järgivad rahvusvahelist torustikunormi.
- **Äravool**: **Haru** mõõdetakse normi harude tabelist; **Hoone äravool** mõõdetakse kalde järgi tabelist, nii et selle **Kalle** on tähtis.
- Äravool ei ole kunagi väiksem kui sanitaarseadmete äravoolud, mida see teenindab (WC vajab DN 100 või 3 in.), ega väiksem kui temasse voolav äravool. NBR 8160 järgi on hoone äravool vähemalt DN 100.

{{ui:Määra äravoolude mõõdud}} teeb iga mudeli sanitaarse äravoolu, mis on oma sanitaarseadme ühikute jaoks liiga väike, selle vajatud suuruseks, ühe sammuna, mida saad tagasi võtta. Äravool, mis on joonistatud suuremaks kui vaja, jääb nii nagu on. Kui äravool kannab rohkem kui tema toru suurim suurus suudab tema kaldel, teatab BimCraft sellest: anna sellele järsem kalle või teine toru.

:::note
Tabelid on horisontaalsete äravoolude omad. Püstikuid, ventilatsiooni ja sademeveeäravoole siin ei mõõdeta: kontrolli neid ja kogu projekti nõuete järgi, mis projekti suhtes kehtivad.
:::

## Ventiilid

1. Vali {{ui:Ventiil}} ja tüüp: sulg-, kuul-, kera- või tagasilöögiventiil.
2. Klõpsa toru peal, kuhu see läheb. Toru lõigatakse selle ümber ja ventiil ühendatakse mõlema poolega.

Liini omadused loetlevad selle ventiile, igaüks koos nupuga {{ui:Eemalda}}.

Rohkem ventiilitüüpe, filter, kanalite klapid, sinu enda torude spetsifikatsioonid ja tootjate perekonnad: vaata [Torude spetsifikatsioonid, ventiilid, klapid ja tootjate perekonnad](topic:pipe-specs).

## Muuda liini

Vali mis tahes liini osa plaanil või 3D-vaates. Omadustes:

- **Süsteem**, **Materjal**, **Klass** ja **Suurus** (torud), või **Kuju**, **Laius**, **Kõrgus** (kanalid).
- **Kõrgus tasandist** teisaldab kogu liini üles või alla.
- **Soojustus**: selle paksus, mida hoitakse kontrolli ja avade loendi jaoks (selle jaoks ei joonistata midagi): vaata [Kontrolli torusid ja kanaleid konstruktsiooni suhtes](topic:mep-against-structure).
- Terasest toru: **Lõika spoolideks**: vaata [Terastorude spoolid ja spoolilehed](topic:pipe-spools).
- **Kalle** (torud).
- **Vool** koos {{ui:Määra mõõt}}-ga: vee puhul väikseim suurus, mis hoiab vee kiirusel 8 ft/s (2.4 m/s), või 5 ft/s (1.5 m/s) sooja vee puhul; 3 m/s Brasiilia PVC veetoru puhul (NBR 5626). Kanalite puhul joonistatud kanali kiirus ja hõõrdumise määr. Sanitaarseid äravoole mõõdetakse nende sanitaarseadme ühikute järgi: vaata allpool **Mõõda äravoolud sanitaarseadme ühikute järgi**.

Iga muudatus on üks {{ui:Võta tagasi}} samm. {{key:Delete}} eemaldab kogu liini.

## Plaanid

- Torud, mis on väiksemad kui 150 mm (umbes 6 in.), joonistatakse ühe joonena keskjoonel; suuremad torud ja kõik kanalid kahe joonena oma laiusel.
- Igal süsteemil on oma värv; plaani PDF prindib need mustvalgelt.
- Iga liin on märgistatud oma suuruse ja süsteemiga (näiteks `2" CW` või `16×10 SA`).
- Plaani vaatevahemik otsustab, milliseid liine see näitab, ja {{ui:Selles plaanis näidatud}} võib jätta välja **Torud** või **Kanalid**: vaata [Vaated, vaatevahemikud ja sinu enda lehed](topic:views-and-sheets).

## Loendid ja kogused

{{ui:Loendid}} paneel lisab **Torud** (süsteemi, materjali ja suuruse järgi, koos pikkustega), **Kanalid** (süsteemi, kuju ja suuruse järgi, koos pikkuste ja välispinnaga) ja **Liitmikud ja ventiilid** (liigi ja suuruse järgi, loendatud). Klõpsa reale, et valida, mida see loetleb; {{ui:Laadi CSV alla}} laadib selle alla.

{{ui:Koguste arvestus}} viib liinid TakeoffCraftile: toru ja kanal suuruse järgi plaanile joonistatud liinidena (kaldega äravoolud mõõdetakse mööda nende kallet), liitmikud ja ventiilid loendatakse seal, kus nad on: vaata [Saada mudeli kogused TakeoffCraftile](topic:takeoff). Püstikud jäetakse sellest lehest välja, sest plaanil neid ei saa mõõta; torude loendis on nende pikkus.

## IFC-failis

Iga liin on koost, mis hoiab oma osi: toru- ja kanalisegmendid, liitmikud ja ventiilid, igaüks oma tüübi, materjali, süsteemi värvi ja portidega. Puutuvad pordid on ühendatud ning iga osa kuulub oma jaotussüsteemi (IFC2X3 failid saavad sama kui voolusegmendid, liitmikud ja kontrollerid süsteemis). Teised programmid, mis loevad IFC süsteeme, näevad iga süsteemi kohta ühte ühendatud liini. Liini enda definitsioon hoitakse selle juures, nii et BimCraft teeb selle uuesti samamoodi, kui sa seda muudad.
