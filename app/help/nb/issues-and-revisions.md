---
title: Saker, revisjoner og tegningens endringslogg
summary: Registrer hvert sett med ark du leverer ut, se hva som er endret siden på hvert ark og element, og hold byggeinstrukser, verkstedtegninger og lenkede modeller knyttet til saken de hører til.
keywords: sak, utgitt sett, innsendt sett, innsending, revisjon, revisjoner, hva som er endret, siden utgivelse, endringslogg, tegningsregister, oversendelse, byggeinstruks, verkstedtegning, lenket modell, anbud, byggefase, øyeblikksbilde, sammenlign
from: 4c732832
---

## Formål

Registrer en sak: hvilke ark som ble sendt ut, når, til hvilket formål, hver med sin revisjon. Senere kan du spørre hva som er endret siden den saken. Hold byggeinstrukser og returnerte verkstedtegninger knyttet til saken.

## Steg

1. I venstre panel åpner du **Saker og revisjoner**.
2. Velg **Registrer en sak**. Revisjonen foreslås (A, deretter B; en nummerert revisjon som P1 teller opp). Velg hva saken utstedes for, hvem den går til, datoen og arkene. Når prosjektfasen er satt, følger formålet den. Når tillatelsespakken har en liste over støttedokumenter, blir arkene knyttet til listen krysset av for deg.
3. La **Lagre også en kopi av modellen slik den ble utgitt** være avkrysset for å beholde modellen akkurat slik den ble sendt ut. Kopien lastes ned; navnet, størrelsen og SHA-256 lagres sammen med saken.
4. Velg **Registrer denne saken**. Et ark som er endret siden det sist ble utgitt, får den nye revisjonen. Et ark som ikke er endret, beholder revisjonen sin. Tegningshodet på hvert ark viser revisjonen.
5. For å se hva som er endret, velg **Endringer siden** ved siden av en sak. Hvert ark viser Lik eller Endret, med elementene som er lagt til, endret og fjernet på det. Klikk på et antall for å velge disse elementene.
6. Velg **Legg til en post** for en byggeinstruks, en verkstedtegning, et markeringssett, en lenket modell eller et notat. Velg saken det gjelder. En fil du velger, registreres med navn, størrelse og SHA-256; filen blir liggende der den er.
7. **Tegningens endringslogg** viser én rad for hvert ark og én kolonne for hver sak. **Last ned endringsloggen (CSV)** lagrer den med sakene og postene.
8. **Lagre sakshistorikken** skriver en `.issues.json`-fil. MarkupCraft, TakeoffCraft og DetailCraft leser den med **Les en sakshistorikk**.

## Greit å vite

- Historikken lagres inne i IFC-filen (egenskapssettet `CadCraft_Issues` på prosjektet). Andre programmer ignorerer den.
- Et ark regnes som endret når sitt eget oppsett er endret, eller når et element det viser er endret: en plan viser sitt nivå, en fasade eller et snitt hele modellen, og en dør- eller vindusliste sine dører eller vinduer.
- Et element regnes som endret når en egenskap, plassering, størrelse eller form er endret.
- For å se nøyaktig hvilken egenskap som er endret, åpne den lagrede kopien av den utgitte modellen med **Sammenlign versjoner**.
- Å fjerne en sak beholder postene, men uten sak. Hvert steg er én **Angre**.
- En modell med mer enn 60 000 elementer lagrer ikke en post for hvert element i saken. Ark sammenlignes likevel.

## Ikke bygget ennå

- Ark lagres ikke som PDF sammen med saken.
- En revisjonssky tegnes ikke på BimCrafts egne ark. Registrer skyer i MarkupCraft mot saken.
