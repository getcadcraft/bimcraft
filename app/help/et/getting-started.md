---
title: Alustamine BimCraftiga
summary: Mida BimCraft praegu teeb, kuidas avada esimene mudel, vaadata seda 3D-s, muuta üht väärtust ja salvestada koopia.
keywords: alustamine, esimene käivitus, ava, ifc, rvt, dwg, kiirjuhend, sissejuhatus, vaataja, bim
from: fc2dea19
---

BimCraft on CadCraft-perekonna hoonemudeli rakendus. Selles versioonis ta **avab, loeb ja kontrollib** hoonefaile ning **muudab andmeid IFC-mudelites**. Ta ei joonista ega modelleeri veel uusi elemente. Mõtle sellele kui mudelivaatajale ja kontrollijale, mis lubab ka IFC-faili nimesid, silte ja omaduste väärtusi parandada.

Avatavad failid:

| Fail | Mida saad |
|---|---|
| IFC (`.ifc`) | Täielik mudel 3D-s: pööramine, korrused, elementide omadused ning nimede ja omaduste väärtuste muutmine |
| Projekti- ja perefailid (`.rvt`, `.rfa`, `.rte`, `.rft`) | Failikaart: väljalase, milles see salvestati, projektiinfo, eelvaatepilt ja lingitud failid. 3D-d ei ole. |
| DWG ja DXF | Joonis 2D-s: mudeliruum ja iga leht, kihid, lingitud joonised, prindivaade ning toitlustusjooniste märgistatud seadmete loend |
| Projektikaust | Aruanne iga mudeli kohta kaustas: varukoopiad, lingid, vigased koopiad ning soovitus, millise failiga alustada |

Kõik toimub sinu brauseris, sinu arvutis. **Midagi ei laadita üles.** Vaata üksikasjade kohta [BimCraftis avatavad ja salvestatavad failid](topic:files).

## Ava BimCraft

1. Ava BimCraft praeguses brauseris. Chrome, Edge, Firefox ja Safari töötavad kõik. [Brauserid, seadmed ja mälu](topic:platforms) loetleb erinevused.
2. Oota tühja ekraani, millel on tekst „Ava hoonemudel.“

:::note
BimCraft töötab brauseris ning lauaarvutil CadCraft Studio sees koos teiste rakendustega. Pilvesalvestus ei ole veel saadaval: avad failid oma arvutist ja salvestad koopiad tagasi sinna.
:::

## Ava esimene mudel

Kiireim viis näha, mida BimCraft teeb, on IFC-fail.

1. Klõpsa keskel ekraanil {{ui:Vali fail}}.
2. Vali `.ifc`-fail rakendusest {{pick:mac=Finder|windows=Failihaldur|linux=sinu failihaldur}} ja kinnita.
3. Oota, kuni ekraani all olev olekurida ütleb „IFC-mootori käivitamine…“, seejärel „Geomeetria koostamine“.

Peaksid nägema mudelit 3D-s keskel, vasakul paneeli {{ui:Fail}} ja loendit {{ui:Korrused}} ning paremal tühja paneeli {{ui:Omadused}}. Olekurida lõpeb sõnaga „Avatud“ ja elementide arvuga.

:::tip
Saad faili lohistada ka otse lehele rakendusest {{pick:mac=Finder|windows=Failihaldur|linux=sinu failihaldur}}. Lohistamise ajal ekraan näitab „Lohista avamiseks“.
:::

:::offline
IFC-mootor laaditakse saidilt esimest korda, kui avad IFC-mudeli, välja arvatud juhul, kui BimCraft on salvestatud võrguta kasutamiseks. DWG- ja DXF-joonised, projektifailid ja kaustad ei vaja midagi lisaks, sest nende lugejad on rakenduse osa. Kui rakenduse ribal olev nupp ütleb {{ui:Valmis ka võrguta}}, avaneb kõik ka võrguta. Kui mitte, ei avane IFC-mudelid enne ühenduse taastamist, välja arvatud juhul, kui üks on sellel vahelehel juba avatud. Vaata [Võrgus ja võrguühenduseta](topic:online-offline).
:::

:::online
Lähed kuhugi ilma ühenduseta? Klõpsa rakenduse ribal {{ui:Salvesta võrguks}} ja oota {{ui:Valmis ka võrguta}}. Salvestatud koopia (umbes 11 MB) sisaldab IFC-mootorit. Vaata [Töö võrguühenduseta](common:offline).
:::

## Vaata ringi

:::mouse
1. Lohista vasaku hiireklahviga, et mudelit ümber pöörata.
2. Keri ratast, et suumida.
3. Lohista parema hiireklahviga, et nihutada. Mac-i puuteplaadil hoia selle asemel all {{key:Shift}} ja lohista.
4. Vajuta {{key:F}} või klõpsa {{ui:Mahuta}}, et näha kogu mudelit uuesti.
:::

:::touch
1. Lohista ühe sõrmega, et pöörata.
2. Nipista kahe sõrmega, et suumida, ja liiguta kahte sõrme koos, et nihutada.
3. Puuduta {{ui:Mahuta}}, et näha kogu mudelit uuesti.
:::

## Tee üks päris asi: paranda silt

1. Klõpsa mudelis seinal, uksel või mõnel muul elemendil. See muutub siniseks ning selle omadused ilmuvad paremale.
2. Paneelis {{ui:Omadused}} klõpsa väärtusel rea **Silt** kõrval.
3. Sisesta uus silt ja vajuta {{key:Enter}}.
4. Vaata vasakul avanenud jaotist {{ui:Muudatused}}: sinu muudatus on loetletud vana ja uue väärtusega.

## Salvesta koopia

1. Klõpsa jaotises {{ui:Muudatused}} nuppu {{ui:Salvesta IFC-na}} või vajuta {{key:Mod+S}}.
2. Leia uus fail oma allalaadimiste kaustast. Sellele on lisatud algse nime järel „(edited)“, näiteks `Clinic (edited).ifc`.

Sinu algfaili ei muudeta kunagi. [Muuda IFC omadusi ja salvesta muudetud koopia](topic:edit-ifc-properties) selgitab muutmist põhjalikult.

## Mida edasi teha

- [BimCraft'i ekraan](topic:workspace): iga paneel nime järgi.
- [Tulek teistest BIM- ja joonestusprogrammidest](topic:coming-from): mis tundub erinev, kui oled harjunud Revitiga.
- [Ava terve projektikaust](topic:open-project-folder): suuna BimCraft projektikaustale ja lase tal failid sorteerida.
- [Vaata DWG- või DXF-joonist](topic:view-dwg): lehed, kihid ja prindivaade.
