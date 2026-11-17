---
title: Voeg 'n weergee-enjin by met 'n byvoeging
summary: Wat 'n byvoeging by die Enjin-lys van die Weergee-dialoog kan voeg, die toestemming wat dit nodig het om 'n program te laat loop, en wat Studio nagaan en vra.
keywords: byvoeging, addon, enjin, weergee-enjin, ontwikkelaar, engine.run, toestemming, program, skrip, geteken, studio, api
from: 06295376
---

'n Byvoeging (Instellings › Byvoegings) kan 'n enjin by die Enjin-lys van {{ui:Weergee}} voeg. Die volledige teks vir byvoegingskrywers is afdeling 16 van die byvoegingspesifikasie; in kort:

- Die byvoeging registreer 'n enjin met 'n id wat met sy eie begin, 'n naam, opsionele instellings en **óf** 'n program om te laat loop **óf** 'n funksie in JavaScript wat die prent teken.
- 'n Enjin wat 'n program laat loop, benodig die **`engine.run`**-toestemming, wat voor installasie en in Instellings gewys word. Dit loop net in Studio; in die blaaier verskyn dit as 'n lêer om te stoor.
- Die byvoeging noem die program ('n eenvoudige lêernaam: nooit 'n dop nie), 'n skrip wat **binne die geteekende byvoeging** is, en argumente wat uit plekhouers en eenvoudige woorde bestaan. Studio vind die program of vra jou een keer om daarna te wys.
- Die eerste keer wat 'n byvoeging 'n program laat loop, **vra Studio jou in sy eie dialoog**: watter byvoeging, watter program, en dat 'n skrip alles kan doen wat die program kan. Laat dit net toe vir 'n byvoeging wat jy vertrou. Jou antwoord word onthou vir daardie byvoeging en program.
- Die pakket (die toneel as USD en 'n instellingslêer, met die glTF-lêer wanneer die byvoeging dit vra) en die byvoeging se skrip gaan in 'n nuwe tydelike vouer, die program loop daar, en die prent kom terug gemerk met die byvoeging se enjinnaam.

:::note
Byvoegings kan net weergee-enjins byvoeg vanaf byvoegings-API 1.4. 'n Uitgewerkte voorbeeld vir 'n oopbron-opdragreël-weergeer is in sy eie bewaarplek; dit is nog nie in daardie weergeer laat loop nie.
:::
