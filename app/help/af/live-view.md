---
title: Die lewe-aansig
summary: 'n Paneel langs die model wat dit in die regtydse voorkoms wys, met son, skaduwees en weerkaatsligte, en wat elke verandering wat jy maak volg; loop daardeur en stel die tyd van die dag en die maand.
keywords: lewe-aansig, regtyd, regtydweergawe, deurloop, loop, loop deur, eerstepersoon, aanbieding, kliënt, tweede skerm, tweede venster, monitor, tyd van die dag, son, seisoen, maand, skaduwees, omgewingsokklusie, weerkaatsings, weerkaatsligte, globale verligting, webgpu, webgl
from: ea5c02bf
---

Die lewe-aansig wys die model in die regtydvoorkoms: die lug en die son vanaf jou terrein se plek en datum, die son se skaduwees, die verf en materiale wat jy aan die elemente gegee het, lampe, en lig wat van mure en vloere weerkaats word. Dit volg wat jy doen: draai die 3D-aansig en dit draai ook, verander die model en dit wys die verandering 'n oomblik later. Niks word opgelaai nie.

Dit teken dieselfde toneel, verf, lampe en son as [Weergee 'n prent](topic:render). Vir 'n klaar prent gebruik daardie een.

## Maak dit oop

1. Maak 'n model oop en kies {{ui:Lewe-aansig}} in die nutsbalk. Die paneel gaan oop oor die program, onderaan regs.
2. Sleep sy titelbalk om dit te skuif, en trek sy hoek om dit groter te maak.
3. {{ui:Lewe-aansig in 'n nuwe venster}} (die knoppie daarnaas) of {{ui:Nuwe venster}} in die paneel skuif dit na 'n eie venster, vir 'n tweede skerm. As jou blaaier opspringvensters blokkeer, open dit as die paneel.
4. {{ui:Maak toe}} sluit dit.

## Die kontroles

| Beheer | Wat dit doen |
|---|---|
| {{ui:Volg die aansig}} | Aan: die lewe-aansig kyk waarheen die 3D-aansig kyk. Loop skakel dit af |
| {{ui:Loop}} | Loop deur die model (hieronder) |
| {{ui:Swaartekrag}} | Tydens loop: staan op vloere en klim trappe. Af: vlieg |
| {{ui:Tyd}} | Die uur van die dag. Die son beweeg as jy sleep |
| {{ui:Maand}} | Die maand, sodat jy die son in winter en somer kan sien |
| {{ui:Kwaliteit}} | {{ui:Vir hierdie rekenaar}}, of {{ui:Laag}}, {{ui:Medium}} of {{ui:Hoog}} |

Die reël onderaan sê wat die aansig teken (WebGPU of WebGL 2), die kwaliteit, en die weerkaatsligte.

## Loop deur die model

1. Draai die 3D-aansig na waar jy wil staan en kies {{ui:Loop}}. Jy staan op die vloer onder die aansig se oogpunt, 1.6 m hoog.
2. Klik die lewe-aansig, en gebruik dan {{key:W}} {{key:A}} {{key:S}} {{key:D}} of die pyltjiesleutels. Hou {{key:Shift}} ingedruk om te hardloop. Sleep om rond te kyk.
3. Trappe tot 40 cm word opgeklim; enigiets hoër is 'n muur. Mure stop jou, en jy gly langs hulle.
4. Met {{ui:Swaartekrag}} af vlieg jy: {{key:E}} gaan op, {{key:Q}} af.
5. {{key:Esc}} stop loop.

## Weerkaatsligte

Lig wat van 'n sonbeskene muur na die vloer weerkaats, en die donkerder binnekant van 'n vertrek, word op elke verwerkerkern op die agtergrond uitgewerk. Terwyl dit werk, sê die onderste reël {{ui:Weerkaatsligte: 40 %}}. Wanneer dit gereed is, neem die aansig dit op. Na 'n verandering begin dit weer.

:::note
Dit is 'n benadering vir 'n lewe-aansig, nie 'n weergegee prent nie: klein besonderhede tussen die punte kry die weerkaatsligte van die punte naby hulle.
:::

:::note
Blaaiers verskil. Waar die blaaier WebGPU het, gebruik die lewe-aansig dit; elders gebruik dit WebGL 2 en lyk dit dieselfde. Met nie een nie, sê die paneel so.
:::
