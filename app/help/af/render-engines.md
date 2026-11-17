---
title: Kies watter program die prent teken
summary: Die Enjin-keuse in die Weergee-dialoog: ons eie twee enjins, ander programme in CadCraft Studio, en wat die web in plaas daarvan doen.
keywords: weergee, enjin, weergeer, weergee-enjin, inprop, plug-in, studio, buite-program, geteken deur, reeks, byvoegingsenjin
from: 44a1ef5e
---

{{ui:Weergee}} het 'n **Enjin**-keuse bo Modus. Ons eie twee enjins is altyd daar en werk oral; byvoegings kan meer byvoeg, en in CadCraft Studio hou die lys ook die programme wat die toneel oorneem.

| Enjin | Wat dit doen | Waar |
|---|---|---|
| Ingebou: Vinnig | Die vinnige stilbeeld: daglig, sagte skaduwees, glas- en metaalvoorkoms, in sekondes | Die blaaier en Studio |
| Ingebou: Padvolger | Lig wat tussen oppervlakke terugkaats op jou grafiese kaart of verwerker, die renderreeks en die ander rekenaars op jou netwerk | Die blaaier en Studio |
| 'n Byvoeging se enjin | Dit teken die prent en gee dit terug: sien [Teken die prent met 'n ander program](topic:render-other-program) | Die blaaier (’n enjin in JavaScript geskryf) of Studio (’n enjin wat ’n program laat loop) |
| 'n Program wat die toneel oorneem | Studio sit die toneel in sy vouer en hou dit in pas | Studio |
| Maak oop in … | Stoor die toneel en maak dit oop in 'n program; niks kom terug nie: sien [Maak die toneel oop in 'n ander program](topic:render-open-in) | Die web stoor die lêer |

## Hoe die keuse werk

- Om Vinnig of die Padvolger te kies, verander Modus saam daarmee, en omgekeerd. Niks anders in die dialoog verander vir mense wat nooit 'n ander enjin gebruik nie.
- 'n Enjin wat nie beskikbaar is nie, bly in die lys met die rede ("nie gevind nie", "benodig 'n nuwer weergawe"); jy kan dit nie kies nie. In die blaaier wys 'n enjin wat net in Studio loop "stoor 'n lêer": {{ui:Weergee}} stoor dan die toneel en sy instellings in 'n lêer wat jy na daardie program neem.
- Die keuse word saam met die lêer se weergee-instellings gestoor, en die enjin wat jy laas gekies het, is die beginenjin vir lêers wat geen eie keuse het nie.
- 'n Prent van 'n ander program sê watter program dit geteken het en sy weergawe, in die dialoog en in die renderreeks. Die beloftes op die [Weergee](topic:render)-bladsy dek net **ons eie** enjins: 'n ander program belig, toon en monster op sy eie manier, so twee prente van een toneel is eenders in kamera, son, lampe en blootstelling, nie pixel vir pixel nie.

## Wat elke enjin kry

Die toneel gaan na 'n ander program as 'n **pakket**: die model as 'n USD-lêer (dieselfde lêer wat [Stoor as USD](topic:usd) skryf), en 'n instellingslêer wat dit bevat wat 'n USD-invoerder nie betroubaar kan hanteer nie: die presiese materiaalwaardes, die lampe wat aan is met hul krag en ligprofiele, die son, die lug, die blootstelling en die kamera soos die dialoog dit sou teken. Niks word êrens opgelaai nie.

## Die renderreeks

'n Prent vir 'n ander program kan soos ons eie in [die renderreeks](topic:render#the-render-queue) wag; sy taak onthou vir watter enjin dit is.
