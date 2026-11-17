---
title: List opp kildehenvisninger for biblioteket og logg inn på biblioteket
summary: Se hvert bibliotekselement som er brukt i en modell, med lisens og kildehenvisning, kopier kildehenvisningene eller last dem ned sammen med listen, og logg inn for å se teamets elementer.
keywords: kildehenvisning, kreditering, lisens, cc by, cc0, opphavsrett, teambibliotek, logg inn, koble til, nøkkel, utstyrsliste, csv
from: 81971658
---

## Formål

Gi kreditering der en lisens krever det, og nå teamets egne bibliotekselementer.

## Bibliotekskreditering

1. Åpne modellen.
2. Klikk {{ui:Kildehenvisninger}} på verktøylinjen.
3. Les listen: hvert brukt element, versjonen, lisensen, kildehenvisningen og elementnumrene det er plassert som.
4. Klikk {{ui:Kopier kildehenvisninger}} for å kopiere kildehenvisningslinjene, eller {{ui:CSV med listen}} for et regneark med alle plasseringene og deres kreditering.

Lisensen og kildehenvisningen vises også i {{ui:Egenskaper}} når du velger et plassert element, og de lagres i IFC-filen (`CadCraft_LibraryItem`), så de følger med filen.

## Utstyrslisten for en modell

Klikk {{ui:Utstyr}} på verktøylinjen. Listen bygges fra de plasserte bibliotekselementene: elementnummer, mengde, navn, produsent, modell, elektriske og rørleggerdata, gruppert etter etasje. Den lastes ned som samme CSV som en tegnings liste gir.

## Logg inn på biblioteket

1. I fanen {{ui:Bibliotek}} velger du **Bibliotek**.
2. Klikk {{ui:Logg inn på biblioteket}}. Et lite vindu åpnes på denne siden.
3. Logg inn hvis du blir bedt om det, og klikk deretter **Koble til**. Vinduet gir BimCraft en bibliotekssnøkkel, og du kan lukke det.

## Resultat

- «Logget inn på biblioteket» øverst i Bibliotek-listen. Teamets elementer vises ved siden av de offentlige.
- Elementer du plasserer, registreres som brukt, slik at biblioteket kan si fra når de endres.

## Greit å vite

- Snøkkelen lagres bare i denne fanen og utløper når du lukker den. {{ui:Glem innlogging}} fjerner den tidligere.
- Kontoens sikkerhetsside lister snøkkelen som "BimCraft library (browser)"; tilbakekall den der.
- Ingenting om modellen din sendes: bare hvilke bibliotekselementer du har plassert.
