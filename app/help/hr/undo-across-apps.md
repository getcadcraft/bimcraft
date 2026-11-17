---
title: Poništavanje preko aplikacija u CadCraft Studio
summary: U CadCraft Studiju BimCraft javlja Studiju svaki dovršeni korak, pa Studio može poništiti vaš posljednji korak u prozoru u kojem ste zadnje radili.
keywords: poništi, studio, preko aplikacija, poništavanje projekta, povijest, dnevnik, prozor
from: c66dd0c1
---

## Što radi

U CadCraft Studiju svaki prozor aplikacije javlja Studiju kada je korak završen (nacrtan zid, prihvaćen skup zidova iz skeniranja). Studio čuva te korake onim redom kojim ste radili i može zamoliti prozor koji je napravio posljednji korak da ga poništi, koristeći vlastito poništavanje tog prozora. Ctrl+Z unutar BimCraft-a ostaje BimCraftovo vlastito i također se javlja Studiju.

## Što trebate znati

- Studio traži od prozora poništavanje samo kada je njegov popis poništavanja točno onakav kakav je bio nakon koraka. Nakon Spremi (što pokreće novi popis promjena) ili nakon što promijenite model koji uređujete, BimCraft odgovara da se popis pomaknuo i Studio preskače ovaj prozor. Ništa se ne prisiljava.
- Poništavanje učinaka jedne aplikacije u drugoj nije izrađeno.
- Izvan Studija ništa se ne mijenja.
- Stavka izbornika Studija koja traži poništavanje dolazi s izgradnjom Studija; do tada se koraci prijavljuju, ali nijedna stavka izbornika ih ne koristi.

## Dalje

- [Radite uživo s drugima](topic:work-live)
