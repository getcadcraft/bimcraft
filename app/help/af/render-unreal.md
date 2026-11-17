---
title: Stuur die toneel na 'n speletjie-enjin
summary: Studio kan die toneel in 'n Unreal Engine-projek skryf en dit elke keer stuur in pas hou; jou eie wysigings lewe in 'n laag wat CadCraft nooit skryf nie. Die inprop wat dit oopmaak, is nog nie vrygestel nie.
keywords: unreal, unreal engine, speletjie-enjin, skakel, stuur, USD-toneel, projek, lewendig, cine-kamera, film-renderreeks
from: 154d55ef
---

In CadCraft Studio kan die Enjin-lys 'n **skakel** na 'n Unreal Engine-projek hou. Net een rigting: van CadCraft na Unreal.

## Stuur die toneel

1. Kies die Unreal-inskrywing in die Enjin-lys. Die eerste keer vra Studio jou om jou projek se vouer te kies (die een met die `.uproject`-lêer); dit onthou dit.
2. Klik {{ui:Stuur}}. Studio skryf `CadCraft/<file name>/` binne die projek: die toneel as 'n USD-lêer, die instellingslêer, ligprofiele, en twee klein laaglêers.
3. Verander die model, stoor en stuur weer. Net die toneel en die instellingslêer word vervang.

## Jou eie wysigings is veilig

Die verhoog wat Unreal oopmaak, is 'n klein wortellaag wat een keer gemaak word, met twee lae onder dit: **joune** bo-op (`<name>.user.usda`, eers leeg, nooit deur CadCraft herskryf nie) en CadCraft se toneel daaronder. Wysigings wat jy in jou eie laag stoor, bly wanneer die toneel weer gestuur word. Ligte en ander akteurs wat jy in die Unreal-vlak plaas, is buite die verhoog en word ook nie aangeraak nie.

## Sonder Studio

In die blaaier, of op 'n rekenaar waar Studio nie Unreal vind nie, kies **Unreal-projekvouer (.zip)** in die Enjin-lys en klik {{ui:Weergee}}. Dit stoor dieselfde vouer as 'n zip: pak dit uit in jou projek se `CadCraft`-vouer. Laat **Sluit die verhoogslêers in** die eerste keer aan; skakel dit af vir latere stoor, sodat die zip net die toneel en die instellingslêer bevat en jou eie laag nooit vervang word nie.

:::note
Die Unreal-inprop wat die verhoog oopmaak, die son, lampe, kameras en blootstelling toepas, elke stuur volg en 'n kamera weergee, is **nog nie vrygestel nie** en is nog nie in Unreal laat loop nie. Totdat dit is, sit Stuur die lêers in die projek en Unreal se eie USD-gereedskap kan dit oopmaak. Windows is die eerste stelsel; macOS volg.
:::
