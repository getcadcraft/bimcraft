---
title: Üksuse vahetamine ja teegi üksuste uuendamine
summary: Asenda üks paigutatud teegi üksus teisega, säilitades selle koha ja üksuse numbri, ning kontrolli teegist uusi versioone kõigi mudelis olevate asjade kohta.
keywords: vaheta, asenda, asendus, uuenda, uuem versioon, otsi uuendusi, teek, tagasi võetud, litsentsi muutus, üksuse number
from: 8bdfe01d
---

## Mida sa teed

Muuda mõtet üksuse suhtes uuesti paigutamata ja hoia mudeli teegi üksused ajakohasena.

## Ühe üksuse vahetamine

1. Klõpsa mudelis paigutatud teegi üksust.
2. Klõpsa {{ui:Omadused}} kastis **Teegi üksus** nuppu {{ui:Vaheta üksus…}}. Avaneb vahekaart {{ui:Teek}}.
3. Leia uus üksus ja klõpsa selle kaardil.
4. Klõpsa {{ui:Vaheta … selle vastu}}.

Element säilitab oma koha, pöörde, tasandi, üksuse numbri, koguse ja märkmed. Selle tüüp, kuju ja üksuse andmed muutuvad uue üksuse omadeks. Samamoodi paigutatud üksused jagavad ühte tüüpi, nagu paigutamiselgi.

Üksus, millel on variante (vaata [Teegi üksuse variantide paigutamine ja vahetamine](topic:library-variants)), loetleb oma teised variandid vahekaardi {{ui:Teek}} ülaosas, kui sa seda vahetad: üks klõps igaühe kohta.

Kui uus üksus on teist liiki asi, näiteks valamu laua asemel, muutub elemendi IFC-klass vastavaks (siin mööbli elemendist sanitaarterminaliks), nii et muu tarkvara planeerib selle õigesti. See jääb sama elemendiks, sama GlobalId-ga, nii et lingid sellele töötavad ikka. {{key:Mod+Z}} toob vana klassi tagasi koos vana üksusega.

## Kontrolli uuendusi

1. Klõpsa tööriistaribal {{ui:Uuendused}} (või {{ui:Otsi uuendusi}} teegi üksuse kastis).
2. Loe nimekirja: iga mudelis olev teegi üksus koos oma versiooniga mudelis, viimase versiooniga ja staatusega: **Ajakohane**, **Uuem versioon**, **Tagasi võetud** või **Ei leitud**. Samuti on öeldud, mis muutus (geomeetria, andmed, litsents või parandus).
3. Klõpsa reas {{ui:Uuenda}} või {{ui:Uuenda kõiki}}.

## Mida peaksid nägema

- „Uuendatud *n* paigutust. Paigutused, üksuste numbrid, kogused ja märkmed säilivad.“
- Muudatusloendis read „Uuendatud: *üksus*“. {{key:Mod+Z}} võtab iga ühe tagasi.

## Hea teada

- Kontrollida saab ainult teegist pärit üksusi. Failidest pärit üksustel ei ole teegi ID-d.
- Kui litsents muutus, säilitab juba paigutatud koopia selle litsentsi, millega see tuli, kuni sa selle uuendad.
- **Tagasi võetud** üksust ei pakuta uuteks paigutusteks. Autoriõiguse tõttu tagasi võetud üksust ei saa üldse alla laadida; asenda see {{ui:Vaheta üksus…}} abil.
- Paigutatud variant jääb selleks variandiks, kui uuem versioon sellest üksusest seda veel sisaldab; vastasel juhul võtab see üksuse vaikevariandi.
- Kontrollimine saadab ainult üksuste ID-d ja versioonid, mitte kunagi sinu mudelit.
