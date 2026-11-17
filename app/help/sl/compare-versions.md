---
title: Primerjajte dve različici modela
summary: Odprite dve različici istega modela IFC in preverite, kateri elementi so bili dodani, odstranjeni in spremenjeni, ujemajoč se po GlobalId, s CSV-jem z vsako spremembo.
keywords: primerjava, razlika, različice, revizija, spremembe, dodano, odstranjeno, premaknjeno, spremenjeno, globalid, guid, kaj se je spremenilo
from: cfca6971
---

## Kaj boste naredili

Preverite, kaj se je spremenilo med modelom, ki ste ga imeli, in tistim, ki vam je bil poslan: kateri elementi so novi, kateri so izginili, kateri so se premaknili ali dobili nove vrednosti lastnosti.

## Koraki

1. Odprite novejšo različico, nato kliknite {{ui:Dodaj model …}} in izberite starejšo. Glejte [Hkraten ogled več modelov IFC](topic:several-models).
2. V {{ui:Modeli}} odprite {{ui:Primerjava različic}}.
3. Izberite {{ui:Starejša različica}} in {{ui:Novejša različica}}.
4. Kliknite {{ui:Primerjaj}}.
5. Kliknite element na seznamu, da ga izberete in vidite njegove lastnosti. Kliknite {{ui:Prenesi CSV}} za vsako spremembo, lastnost za lastnostjo.
6. Kliknite {{ui:Počisti}}, da se vrnete v običajni pogled.

## Kaj bi morali videti

- **Dodani** elementi so modri, iz novejše različice.
- **Odstranjeni** elementi so rdeči, iz starejše različice.
- **Spremenjeni** elementi so oker, iz novejše različice, vsak pove, kaj se je spremenilo: lastnosti, premik in za koliko, ali nova oblika.
- Vse, kar je enako, je prosojno.

## Dobro je vedeti

- Elementi se ujemajo po svojem GlobalId. Program, ki elementom ob vsakem izvozu da nove GlobalId, naredi, da je videti, kot da je vsak element odstranjen in znova dodan.
- Položaji se primerjajo tam, kjer modela ležita v prizoru. Če je bila ena različica premaknjena namenoma, ju najprej poravnajte z {{ui:Premakni}} v {{ui:Modeli}}.
- GlobalId, ki se v enem modelu pojavi dvakrat, je iz primerjave izpuščen. [Preverite model glede pogostih težav](topic:model-checks) jih najde.

## Naslednje

- [Zadeve in datoteke BCF](topic:issues-bcf)
- [Seštevanje količin po lastnosti](topic:quantity-totals)
