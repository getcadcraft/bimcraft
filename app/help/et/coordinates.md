---
title: Koordinaadid BimCraftis
summary: Kus sa töötad: kursori asukoht plaanil ja 3D-vaates, tasand, millel oled, projekti nullpunkt ja saidi mõõdistuspunkt.
keywords: koordinaadid, kus ma olen, asukoht, kursor, näit, x y z, tasand, korrus, projekti nullpunkt, nullpunkt, baaspunkt, mõõdistuspunkt, sait, kaardikoordinaadid, idakoordinaadid, põhjakoordinaadid, georefereerimine, ühikud, asukoht
from: 84df5245
---

## Mida sa teed

Leia mudelis kohe üles, millisel tasandil joonistad, kui kaugel kursor on projekti nullpunktist ja kus asub saidi mõõdistuspunkt.

## Kus arvud kuvatakse

- **3D-vaates** (paremal all, vaatekuubi kõrval): liiguta kursor mudeli kohale. Kast näitab tasandit, millel punkt asub, ja kui kõrgel see on selle tasandi põrandast, seejärel selle **X, Y ja Z**. Tühja ruumi kohal näitab ta punkti madalaima tasandi põrandal.
- **Plaanil** (paremal all, kui {{ui:Joonista}} on sisse lülitatud): tasand, mida plaan näitab, ja selle põranda kõrgus, ning kursori **X ja Y**, kui ta on plaani kohal.
- Kui failil on kaardi teisendus (see on eksporditud kaardikoordinaatidega), lisavad mõlemad kastid **idakoordinaadid ja põhjakoordinaadid** kaardivõrgus valitud {{ui:Ühikud}}es (ühik on alati arvu kõrval kirjas; jalad ja tollid kuvatakse kümnendjalgadena). Joonis (DWG või DXF) säilitab oma ühikud: selle kursorinäit nimetab need ning neid ei teisendata kunagi.

Iga X, Y ja Z mõõdetakse **projekti nullpunktist** tööriistaribal valitud {{ui:Ühikud}}es (jalad ja tollid, tollid, kümnendjalad, millimeetrid, sentimeetrid või meetrid). Positiivne Y osutab mudeli põhja poole, mis ei ole alati tõeline põhi. Kaardi idakoordinaadid ja põhjakoordinaadid järgivad sama valikut (jalad ja tollid kuvatakse kümnendjalgadena). Kui kaardisüsteemi enda ühik erineb valitud ühikust, nimetatakse see arvude järel sulgudes, näiteks *(USA mõõdistusjalad)*, et mõõdistaja näeks, mis ühikus süsteem ise on kirjas.

## Kaks markerit

- **Projekti nullpunkt** (punane ring ristiga): punkt 0, 0, 0, millest kõik mudeli koordinaadid on mõõdetud.
- **Mõõdistuspunkt** (sinine ring kolmnurgaga): saidi viitepunkt, millele on antud selle laiuskraad, pikkuskraad ja kõrgus või kaardikoordinaadid. 3D-vaates osuta sellele, et näha, kus see asub.

Kui sait asub projekti nullpunktil, nagu siin joonistatud uues hoones, näitab üks marker mõlemat. Klõpsa kummagi kasti ristikujulisel nupul, et markerid peita või näidata. BimCraft jätab su valiku selles brauseris meelde.

## Mida sa peaksid nägema

- Arvud muutuvad kursori liikudes ning plaani kast nimetab tasandi, mille valisid tasandite loendist.
- Markerid jäävad paigale, kui sa 3D-vaadet pöörad, nihutad ja suumid.

:::tip
Punkti laiuskraadi ja pikkuskraadi lugemiseks kasuta {{ui:Mõõda}} › {{ui:Asukoht}}: vaata [Mõõda kaugusi, tahkude pindalu ja asukohti 3D-s](topic:measure).
:::

:::touch
Puuteekraanil ei näita 3D-kast midagi enne, kui kasutad hiirt või pliiatsit. Sõrm hoopis liigutab vaadet.
:::
