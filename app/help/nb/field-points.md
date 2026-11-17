---
title: Punkter for utsetting og kontroll av innmålte punkter
summary: Nummerer stedene et mannskap setter ut fra den åpne modellen — søylesentre, veggender, ankerbolter, hylser og ethvert element du velger — skriv dem til en totalstasjon, og les mannskapets innmålte punkter tilbake for å se hva som avviker.
keywords: utsettingspunkter, utsetting, sette ut, totalstasjon, oppmåling, punktfil, csv, txt, pnezd, penzd, xyz, nord, øst, høyde, innmålt, kontroll, toleranse, avvik, ankerbolter, søylesenter, veggender, hylser, oppmålingskoordinater, kartomregning
from: acea9606
---

Fanen {{ui:Punkter}} til høyre lager punktene et mannskap setter ut på byggeplassen fra den åpne modellen, og kontrollerer punktene de måler etterpå.

## Lag punktene

1. Åpne en IFC-modell og fanen {{ui:Punkter}}.
2. Kryss av for hva som skal settes ut: **søylesentre** (foten av hver søyles senterlinje), **veggender** (begge ender av hver veggs akse, ved bunnen), **ankerbolter**, **hylser** (elementer der navnet eller typen sier hylse), og de **valgte elementene** (hvert ved sitt plasseringspunkt — velg dem i visningen først).
3. Velg første nummer og et prefiks, koordinatene, enhetene, kolonnene og filen:
   - **Modell**: filens egne koordinater. **Oppmålingsnett**: kartnettet til modellens georeferanse (vises bare når IFC-filen har en kartomregning), i meter eller enheten du velger.
   - Kolonner **PNEZD** (punkt, nord, øst, høyde, beskrivelse), **PENZD** eller **XYZ**; **CSV** (komma) eller **TXT** (tabulator).
4. Trykk {{ui:Lag punkter}}: listen viser dem, og visningen merker dem blått. {{ui:Last ned punktene}} skriver filen.

Punktene kommer i fast rekkefølge — etter type, og deretter i rader over planen — så når de lages på nytt fra samme modell, gir de de samme tallene. Filen er den CivilCraft åpner, og den CadCraft skriver med EXPORTPOINTS: ett punkt per linje, tre desimaler, og en beskrivelse i anførselstegn når den inneholder et komma.

## Kontroller de innmålte punktene

Når mannskapet sender tilbake det de målte, velg en **toleranse** i millimeter og hvordan punktene skal kobles — etter **punktnummer** (de beholdt nummerene dine) eller etter **nærmeste måling** — og trykk {{ui:Les innmålte punkter…}}. Les filen i samme enheter og koordinater som du skrev den.

Hvert prosjektert punkt er da **innenfor** toleransen, **utenfor** den, **ikke målt**, og enhver måling ingen ba om er **ekstra**. Tabellen gir avvikene i enheten du velger i verktøylinjen, fot vist som desimale tommer (innmålt minus prosjektert: øst, nord, høyde og avstanden i plan). Visningen merker hvert punkt grønt eller rødt med en linje til målingen, og grått når det ikke ble målt. {{ui:Rapport (CSV)}} skriver hele sammenligningen.

Ingenting her endrer modellen. Ikke bygget ennå: utsetting fra dekkekanter, rutenettskjæringer eller åpninger laget for deg, og sending av punkter direkte til et instrument — bruk filen.
