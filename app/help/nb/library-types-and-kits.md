---
title: Symboler, typer og eiendeler, prosjektmaler og Quick Kits
summary: Biblioteket har tre slags elementer (symboler, typer, eiendeler). Legg en type til prosjektet ditt, start fra en delt prosjektmal, legg til en Quick Kit, og del dine egne via bibliotekets opplastingsside.
keywords: bibliotek, symboler, typer, eiendeler, type, veggtype, gulvtype, takype, himlingstype, prosjektmal, mal, quick kit, sett, dele, last opp, versjon, endringslogg, LOD, klassifisering, lisens, erfaringer fra praksis
from: e13b0e67
---

## Formål

Finn det du trenger i biblioteket etter hva det er, legg en type til prosjektet du tegner, start et nytt prosjekt fra en mal noen har delt, og del dine egne maler, typer og sett.

## De tre typene bibliotekselementer

- **Symboler** er tegnekonvensjoner: bare 2D, tegnet i annoteringsstørrelse, gruppert etter fagområde.
- **Typer** sier hva et element består av: lagene med sin virkelige tykkelse, utviklingsnivået (LOD) og klassifiseringskoden. En type legges til prosjektet, den tegnes ikke.
- **Eiendeler** er fysiske objekter som dører, vinduer, møbler, armaturer og utstyr, med en planvisning og en 3D-kropp i virkelig størrelse.

I fanen {{ui:Bibliotek}} velger du {{ui:Bibliotek}} og bruker **Elementtype** for å vise Alt, Symboler, Typer eller Eiendeler.

## Legg en type til prosjektet

1. Velg **Typer** under Elementtype og åpne en.
2. Sjekk oppbygningen, LOD og klassifiseringen under bildet, og velg deretter {{ui:Legg til i dette prosjektet}}.
3. Den legges til som en vegg-, gulv-, tak- eller himlingstype du kan tegne med. Finnes det allerede en type med det navnet, legges den nye til som en kopi, og din beholder seg uendret. Ett Angre fjerner den.

## Prosjektmaler og Quick Kits

Velg {{ui:Sett}} for å se hva folk har delt.

- **En prosjektmal** er en IFC-fil med nivåer, rutenett, typer og innstillinger. {{ui:Lagre i mine maler}} legger den under Ny bygning, under **Start fra**.
- **En Quick Kit** er en liste over bibliotekselementer. {{ui:Vis elementene i settet}} lister dem som kort du kan plassere.
- Hvert sett har en versjon og en endringslogg, nyeste først. En versjon som starter med 0, er til diskusjon; 1.0.0 er bare for det eieren av linjen har tatt i bruk.

## Del egne

- **En prosjektmal:** {{ui:Lagre som mal}}, kryss av for {{ui:Lag også en fil å dele i biblioteket}}, legg til hva den inneholder, og en versjon. Du får en `.json`-fil.
- **En Quick Kit:** i {{ui:Sett}} velger du {{ui:Lag en Quick Kit fra dette prosjektet}}. Den lister bibliotekselementene prosjektet bruker.
- **En type:** i {{ui:Typepakker}} krysser du av for én type og velger {{ui:Lagre som bibliotekselement…}}.

Last opp filen på bibliotekets opplastingsside. Den går gjennom samme gjennomgang som alle elementer, og du velger lisensen der: hvert element oppgir sin lisens. Elementene må oppgi LOD, en IFC-klasse og en klassifiseringskode (en kode, ikke bare et navn).

## Erfaringer fra praksis

På hvert bibliotekselements side kan innloggede medlemmer legge til et notat: brukt i et ekte prosjekt, prøvd i et eksempelprosjekt, eller funnet et problem. Si hvilken type prosjekt med noen få ord, og utelat kundenavn. Et notat er offentlig og er ikke en anmeldelse: det endrer ikke elementet.

## Greit å vite

- Ingenting sendes fra appen. Filene lages på datamaskinen din, og du laster dem opp selv.
- Et sett laget av en mal beholder IFC-teksten nøyaktig slik den ble lagret. Sjekk den for alt privat før du laster opp.
- CadCraft viser symboler og eiendeler i fanen Bibliotek; typer og maler er for BimCraft-prosjekter.
