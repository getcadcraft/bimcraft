---
title: Teken die prent met 'n ander program
summary: Ons eie padvolger teken die Weergee-prent; 'n ander program kan dit net teken deur 'n weergee-byvoeging in CadCraft Studio. Wat oorgedra word, en waarom sommige programme nooit aangebied word nie.
keywords: weergee, enjin, buite-program, byvoegingsenjin, studio, agtergrond, reeks, usd, gltf, geteken deur, blender, gpl
from: 652b413c
---

Die prent in {{ui:Weergee}} word geteken deur **ons eie enjins**: Vinnig en die Padvolger, in die blaaier en in CadCraft Studio. 'n Ander program kan dit net teken wanneer 'n **weergee-enjin-byvoeging** dit bring: sien [Voeg 'n weergee-enjin by met 'n byvoeging](topic:render-engine-addons). Om die toneel na 'n ander program te neem en daar aan te hou werk, gebruik [Maak die toneel oop in 'n ander program](topic:render-open-in) of [Stuur die toneel na 'n speletjie-enjin](topic:render-unreal).

## Teken 'n prent met 'n byvoeging se enjin

1. Skakel die byvoeging aan in Instellings › Byvoegings. Die enjin verskyn in die Enjin-lys van {{ui:Weergee}}.
2. Kies dit. Sy eie instellings verskyn onder die Enjin-lys.
3. Klik {{ui:Weergee}}. In Studio, die eerste keer wat 'n byvoeging 'n program laat loop, vra Studio jou in sy eie dialoog. Vordering wys terwyl dit teken; {{ui:Stop}} beëindig dit. Die prent verskyn gemerk met die enjin wat dit geteken het.

'n Enjin wat in JavaScript geskryf is, loop ook in die blaaier. 'n Enjin wat 'n program op hierdie rekenaar laat loop, loop net in Studio; in die blaaier verskyn dit as 'n lêer om te stoor.

## Wat oorgedra word

Die enjin kry 'n **pakket**: die model as 'n USD-lêer (en 'n glTF-lêer wanneer dit een vra), en 'n instellingslêer met die presiese materiaalwaardes, die son en die lug, elke lamp wat aan is met sy krag en ligprofiel, die kamera en die blootstelling. Elke program belig, toon en monster op sy eie manier, so prente is eenders in kamera, son, lampe en blootstelling, nie pixel vir pixel nie.

## Programme CadCraft nooit laat loop nie

CadCraft begin nooit 'n program onder die GNU GPL-lisensie nie, en lys nooit een as 'n enjin of 'n Maak oop in-teiken nie. Blender is een van hulle, so dit is nie in die Enjin-lys nie. 'n USD- of glTF-lêer wat vanaf {{ui:Weergee}} gestoor is, maak steeds daarin oop soos in enige program wat daardie lêers lees.

:::note
Panorama- en stereokameras en 'n lugprent (die lug se kleure word eerder gebruik) word nie na 'n ander program oorgedra nie. Niks wat in 'n ander program gedoen word, kom terug na die model nie.
:::
