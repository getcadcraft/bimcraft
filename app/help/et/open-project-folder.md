---
title: Kogu projektikausta avamine
summary: Osuta BimCraftile projektikaustale, et näha kõiki mudeleid, nende varukoopiaid ja linke korraga, ning lase kastil Alusta siit soovitada, millist faili avada.
keywords: kaust, kataloog, projektikaust, võrgukettad, server, alusta siit, millist faili, varukoopiad, lingid, välisviited, hiljutised kaustad, lohista kaust
from: 16fbdce2
---

## Mida sa teed

Avad kogu projektikausta, nagu see sulle mõne töö jaoks anti, ja lased BimCraftil selle korda teha: milliseid mudeleid seal on, millised koopiad on varukoopiad, mis millega on lingitud, millised failid on katki ja millist faili sa tõenäoliselt avada tahad.

Loetakse ainult need paar kilobaiti, mida iga mudelikaart vajab, nii et kaust võrgukettal või sünkroonitud pilvekaust sobib.

## Sammud

:::chromium
1. Klõpsa vasakul {{ui:Ava kaust}} (või tühja ekraani keskel).
2. Vali avanevas aknas projektikaust ja klõpsa **Vali** (või **Lae üles** või **Ava**, sõltuvalt süsteemist).
3. Kui brauser küsib „Kas lubada saidil faile vaadata?“, klõpsa **Vaata faile**. See lubab vahelehel ainult kausta lugeda; midagi ei laadita üles.
4. Oota, kuni olekurida loeb: „Kausta loetlemine: … faili“, seejärel „Revit-failide kontrollimine: … / …“.
:::

:::firefox
1. Klõpsa vasakul {{ui:Ava kaust}} (või tühja ekraani keskel).
2. Vali avanevas aknas projektikaust ja kinnita. Firefox võib paluda kinnitada, et leht tohib kausta faile lugeda; need jäävad siiski sinu arvutisse.
3. Oota, kuni olekurida ütleb „Kausta lugemine: … faili“, seejärel „Revit-failide kontrollimine: … / …“.
:::

:::safari
1. Klõpsa vasakul {{ui:Ava kaust}} (või tühja ekraani keskel).
2. Vali avanevas aknas projektikaust ja klõpsa **Lae üles**. Sõnast hoolimata ei lahku midagi sinu Macist: failid antakse ainult vahelehele üle.
3. Oota, kuni olekurida ütleb „Kausta lugemine: … faili“, seejärel „Revit-failide kontrollimine: … / …“.
:::

Võid ka **lohistada kausta** rakendusest {{pick:mac=Finder|windows=Failihaldur|linux=sinu failihaldur}} lehele. Lohistatud kaust avaneb igas brauseris ilma loa küsimata.

## Mida peaksid nägema

Kaustaraport täidab keskosa:

- Kausta nimi, mudelite, CAD-jooniste, IFC-mudelite ja failide arv ning kogumaht.
- Punased või kollased märkused, kui mõned failid on puudulikud või mõned lingitud failid puuduvad kaustast.
- Kast {{ui:Alusta siit}}: fail, mida BimCraft soovitab avada, koos põhjustega.
- **Mudelid**: üks rida mudeli kohta, varukoopiad on selle all rühmitatud.
- **Lingitud ja viidatud failid**, **IFC-mudelid**, **CAD-joonised** ja **Kõrvale pandud**, kui kaustas on neid.

Vasakul kokkuvõtab paneel {{ui:Kaust}} asja; **Probleemid** ütleb „Pole“, kui iga koopia on terve.

## Kasuta kasti Alusta siit

Kast nimetab ühe faili ja ütleb, miks, näiteks:

- „Uusim salvestatud töö selles kaustas (3. märts 2025).“
- „*Consultant.rvt* on lingitud teistesse mudelitesse, seega on see taust, mitte fail, mida muuta.“
- „*Tower.rvt* näib ilmse valikuna, kuid on katki; selle viimane hea koopia on …“
- „See on keskmudel: Revitis ava see nupuga „Create New Local“ ja tööta kohalikus koopias.“

1. Loe põhjendused.
2. Klõpsa {{ui:Ava selle kaart}}, et lugeda selle faili kaarti, või {{ui:Näita loendis}}, et leida selle rida jaotisest **Mudelid**.
3. Enne kui sellele toetud, küsi, kes projektiga viimati töötas. Kast ütleb seda ka: see on oletus nimede, kuupäevade ja linkide põhjal.

## Failide avamine raportist

1. Klõpsa mudeli nimel, et avada selle kaart. Kaart kontrollib iga linki kausta suhtes.
2. Klõpsa {{ui:Tagasi}} ja kaustanime kaardi ülaosas (või {{ui:Tagasi kausta}} vasakul), et naasta.
3. Klõpsa mõnel IFC-failil jaotises **IFC-mudelid**, et avada see 3D-vaates.
4. Klõpsa mõnel DWG- või DXF-failil jaotises **CAD-joonised**, et avada see 2D-vaates. Selle lingitud joonised ja pildid leitakse kaustast automaatselt.

## Kausta uuesti avamine hiljem

:::chromium
Kaustad, mille avasid nupuga {{ui:Ava kaust}} või lohistamisega, on vasakul loetletud jaotises {{ui:Hiljuti avatud kaustad}}. Klõpsa kaustanimel ja nupul {{ui:Ava uuesti}}, et see avada ilma seda uuesti valimata. Pärast brauseri taaskäivitamist küsivad Chrome või Edge veel korra; vali „Luba igal külastusel“, et küsimine lõpetada. Loend hoitakse ainult selles brauseris, seda ei saadeta kuhugi. Klõpsa ×, et kaust unustada.
:::

:::firefox safari
See brauser ei mäleta kaustu külastuste vahel. Vali kaust uuesti nupuga {{ui:Ava kaust}} või lohista see sisse.
:::

## Levinud vead

- **Liiga suure kausta valimine.** Üle 20,000 faili: „Selles kaustas on rohkem kui 20,000 faili. Vali väiksem kaust, näiteks üks projekt.“ Vali projektikaust, mitte kogu ketas.
- **Mitme projekti ülemkausta valimine.** Kast {{ui:Alusta siit}} valib siis projektide vahel. Vali üks projekt.
- **Reviti enda kaustad näivad ignoreeritud.** `*_backup`, `*_log` ja `Revit_temp` kaustad on korrashoiu kaustad ja need on loetletud jaotises **Kõrvale pandud**, neid ei loeta.
- **Mudeli avamise ootamine 3D-s oma kaardilt.** Projektifail on ainult kaart. Ava selle IFC eksport.
- **Telefonid ja tahvelarvutid.** Paljud mobiilibrauserid ei saa kaustu üldse valida. Kasuta arvutit.

Vt [Kontrolli kausta katkiste koopiate, puuduvate linkide ja jäänuste suhtes](topic:check-folder-health) ja [Kaustaraport: rollid, olekud ja lingid](topic:folder-roles).
