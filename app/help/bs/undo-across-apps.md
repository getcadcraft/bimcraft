---
title: Poništavanje preko aplikacija u CadCraft Studiju
summary: Unutar Studija, BimCraft javlja Studiju svaki završen korak, pa Studio može poništiti vaš posljednji korak u onom prozoru u kojem ste posljednji put radili.
keywords: poništi, studio, preko aplikacija, poništavanje projekta, historija, dnevnik, prozor
from: c66dd0c1
---

## Šta radi

U CadCraft Studiju, svaki prozor aplikacije javlja Studiju kada je korak završen (nacrtan zid, prihvaćen skup zidova iz skeniranja). Studio čuva te korake redom kojim ste radili i može zamoliti prozor koji je napravio posljednji korak da ga poništi, koristeći vlastito poništavanje tog prozora. Ctrl+Z unutar BimCraft-a ostaje BimCraft-ov i također se javlja Studiju.

## Šta treba znati

- Studio traži od prozora da poništi samo kada je njegova lista poništavanja tačno onakva kakva je ostala nakon koraka. Nakon Spasi (koje pokreće novu listu promjena) ili nakon što promijenite model koji uređujete, BimCraft odgovara da se lista pomjerila i Studio preskače ovaj prozor. Ništa se ne forsira.
- Poništavanje efekata jedne aplikacije u drugoj nije izgrađeno.
- Van Studija ništa se ne mijenja.
- Stavka menija u Studiju koja traži poništavanje dolazi uz build Studija; do tada se koraci prijavljuju, ali nijedna stavka menija ih ne koristi.

## Dalje

- [Radite uživo s drugima](topic:work-live)
