---
title: Razvoj gradbene mase iz študije lokacije
summary: Vzemite gradbeno maso, preučeno v pogledu lokacije CivilCraft, in jo razvijte v etaže, stene in plošče, pri čemer se ohrani lega lokacije na zemljevidu.
keywords: masa, gradbena masa, načrtovanje mas, študija lokacije, razvoj, CivilCraft, predaja, etaže, stene, plošče, tlorisni obris, georeferenca, IFC
from: 557b94d1
---

Pogled lokacije v CivilCraft lahko riše gradbene mase na parceli in jih preizkusi glede na teren, omejitve, ki jih vpišete, in sonce. **Razvij v BimCraft** tam odpre BimCraft v novem zavihku z masami; **Mase kot IFC** jih shrani kot datoteko, ki jo odprete tukaj na običajen način. Ne glede na to vsaka masa pride kot lokacija, stavba z eno etažo za vsako nadstropje in en blok (sama masa), ki nosi svoja števila.

## Razvij maso

1. Izberite maso v 3D pogledu. Lastnosti prikažejo njeno rabo, etaže in višino etaže, tlorisni obris, bruto tlorisno površino, kako sedi na pobočju in njeno parcelo.
2. Kliknite **Razvij to maso**.

V enem koraku razveljavitve dobi vsaka etaža te stavbe stene okoli tlorisnega obrisa (obris je zunanja ploskev sten; vsaka stena gre do etaže nad seboj, zgornja pa je visoka eno nadstropje) in ploščo pod celotno stavbo. Blok je zamenjan, stavba pa ohrani števila študije v nizu lastnosti `CadCraft_SiteMass`, označenih kot razvito. Strehe ni: streha je odvisna od zasnove.

## Lega lokacije

Datoteka iz CivilCraft je zapisana v dolžinski enoti projekta in, kadar je imel projekt CivilCraft koordinatni sistem, nosi to kot pretvorbo zemljevida projekta. Razvoj mase tega ne spremeni, zato stavba ostane tam, kjer jo zemljevid navaja.
