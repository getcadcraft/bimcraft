---
title: Merjenje na tlorisu
summary: Kliknite dve točki na tlorisu etaže in preberite razdaljo ter razlike X in Y, dodajte še klike za tekočo vsoto in v model ne shranite ničesar.
keywords: meri, tloris, razdalja, kota, merilni trak, tekoča vsota, veriga, dx, dy, ravno, lovljenje, konci sten, osi mreže, stebri, preverjanje dolžine
from: 7235633f
---

## Kaj boste naredili

Preverite dolžino na tlorisu etaže, na primer širino sobe ali razdaljo med dvema mrežnima osema, brez dodajanja česar koli v model. Za merjenje v 3D pogledu glejte [Merjenje razdalj, površin ploskev in lokacij v 3D](topic:measure).

## Koraki

1. Pokažite tloris etaže, ki jo želite: {{ui:Tloris}} za samo tloris ali {{ui:Razdeli}}.
2. V skupini {{ui:Risanje}} kliknite {{ui:Meri}}. Če je prikazan samo tloris, lahko namesto tega pritisnete {{key:M}}.
3. Kliknite prvo točko. Točke se lovijo na stene, mrežne osi in stebre.
4. Kliknite drugo točko. Kotna črta pokaže razdaljo, statusna vrstica pa razdaljo z razlikama X in Y.
5. Za nadaljevanje kliknite tretjo točko. Vsak odsek se izmeri, skupna vsota pa se doda.
6. Držite {{key:Shift}} med klikanjem, da odsek ostane raven glede na prejšnjega.
7. Pritisnite {{key:Esc}}, da pobrišete merjenje, ali izberite drugo orodje.

## Opombe

- V model se ništa ne zapiše, kota pa izgine, ko jo pobrišete. Za kote, ki ostanejo, glejte [Sklopi sten in referenčne kote](topic:wall-assemblies).
- Ko je 3D pogled na zaslonu, {{key:M}} ostane 3D merjenje. {{key:Shift+M}} je Premakni.
- Razdalja uporablja enoto prikaza, ki ste jo izbrali v {{ui:Nastavitve}}.
