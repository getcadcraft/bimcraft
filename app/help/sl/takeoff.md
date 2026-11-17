---
title: Količine v TakeoffCraft
summary: En klik pošlje količine modela v TakeoffCraft — stene po tipu, strehe po nagnjeni površini, slemena, poševne grebene in žlebove, temelje, vrata in okna, omarice, električne naprave, tlorisno površino in rezalni seznam lesa — označene na tlorisu vsake etaže, s sestavami paketov za stroke na postavkah.
keywords: predizmera, količinska predizmera, ocena, ocenjevanje, seznam materialov, kosovnica, takeoffcraft, količine, površina stene, površina strehe, kvadrati, temelj, beton, kubični metri, rezalni seznam, les, paket za stroko, sestava
from: c5a745af
---

## Kaj boste naredili

Model spremenite v seznam materialov in oceno v TakeoffCraft. BimCraft nariše tloris vsake etaže v standardnem merilu, označi vsako količino na njem in predizmero vstavi v PDF. TakeoffCraft oznake izmeri sam, zato lahko vsako številko preverite na listu.

## Pošljite

1. Kliknite {{ui:Takeoff}} v vrstici modela (poleg {{ui:Sheets}}).
2. TakeoffCraft se odpre v novem zavihku s tlorisi. Ko vas vpraša, izberite odpiranje predizmere, ki jo je našel v PDF-ju.
3. Dodajte svoje cene v tabelo količin TakeoffCraft; sestave že navajajo materiale.

:::note
Če TakeoffCraft tukaj ni na voljo, gumb prenese PDF. Pozneje ga odprite v TakeoffCraft: najde predizmero v njem.
:::

## Kaj se meri

- **Stene** po tipu in višini: njihove osrednje črte kot odseki, z višino stene na postavki, tako da TakeoffCraft poda dolžino in površino stene. Vsak odsek nosi vrata in okna stene, tako da jih TakeoffCraft enkrat odšteje od površine stene po istem pravilu kot razpredelnice BimCraft: oboje se ujema pri bruto, odbitkih in neto. Podatki za predizmero tipa stene (enota, malta, stopnja; glejte [Sestave sten](topic:wall-assemblies)) pridejo kot ena cenjena vrstica na postavki tega tipa. Pri načinu merjenja, ki ni privzeti (glejte [Izberite način merjenja](topic:plan-schedules-and-pdf#choose-a-measurement-method)), predizmera nosi način, vsak odsek nosi, kar stiki odvzamejo z njegove površine stene, TakeoffCraft pa meri po istem načinu in ga poimenuje. Tip, katerega enota ima dolžino in višino, preda dve komponenti s količinami: enote za naročilo in volumen malte, cenjeni, kadar je stopnja tipa na enoto, na 1000 enot ali na m³ malte. Število, ki pade točno na celo število, je lahko v TakeoffCraft za eno enoto večje, ker predaja zaokroži položaje na listu.
- **Strehe**: vsaka ravnina strehe kot površina z njenim naklonom (TakeoffCraft poda nagnjeno površino), slemena, poševni grebeni in žlebovi (poševni vzdolž svojega naklona), napušči in čelni robovi.
- **Temelji**: temeljne stope in temeljni zidovi kot odseki okrog njihovih sredin, plošče kot površine z debelino, tako da beton pride ven po prostornini.
- **Vrata in okna**, števno po tipu, z okenskim okvirjem.
- **Spodnje omarice** po dolžini njihovih čel.
- **Električne naprave**, števno po vrsti.
- **Tlorisna površina** vsake etaže iz njenih prostorov.
- **Rezalni seznam lesa** iz ogrodja, števno na lastnem listu (ena pika na kos).

Kjer ima paket za stroko ustrezno sestavo — zunanje in notranje stene, plošče, temelje, temeljne zidove, strešno kritino, sleme in poševni greben, žlebove, napušče, notranja vrata, okenske okvirje, spodnje omarice, izhode, stikala, svetilke, priključne škatle in razdelilno ploščo —, postavka pride z materiali in formulami. Paketi prihajajo brez cen in jih ocenjevalec še ni pregledal.

:::tip
Tlorisi se ob vsakem kliku naredijo iz modela na novo, zato po spremembi preprosto znova kliknite {{ui:Takeoff}}.
:::
