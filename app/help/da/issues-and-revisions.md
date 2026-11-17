---
title: Emner, revisioner og tegningens ændringslog
summary: Registrér hvert sæt ark, du udsender, se hvad der er ændret siden på hvert ark og element, og hold byggepladsinstruktioner, værkstedstegninger og tilknyttede modeller op mod det emne, de hører til.
keywords: emne, udsendt sæt, indsendt sæt, indsendelse, revision, revisioner, hvad der ændrede sig, siden emne, ændringslog, tegningens ændringslog, tegningsregister, følgeseddel, byggepladsinstruktion, værkstedstegning, tilknyttet model, udbud, konstruktion, snapshot, sammenlign
from: 4c732832
---

## Hvad du gør

Registrér et emne: hvilke ark der blev udsendt, hvornår, til hvilket formål, hver med sin revision. Senere kan du spørge, hvad der er ændret siden det emne. Hold byggepladsinstruktioner og returnerede værkstedstegninger op mod emnet.

## Trin

1. I venstre panel åbner du **Emner og revisioner**.
2. Vælg **Registrér et emne**. Revisionen foreslås (A, derefter B; en nummereret revision som P1 tæller op). Vælg hvad det udsendes til, hvem det går til, datoen og arkene. Når din projektfase er sat, følger formålet den. Når udbudspakken har en liste over støttedokumenter, sættes der automatisk kryds i de ark, der er knyttet til listen.
3. Lad **Gem også en kopi af modellen som udsendt** være markeret, så modellen gemmes præcis, som den blev udsendt. Kopien downloades; dens navn, størrelse og SHA-256 gemmes sammen med emnet.
4. Vælg **Registrér dette emne**. Et ark, der er ændret, siden det sidst blev udsendt, får den nye revision. Et ark, der ikke er ændret, beholder sin revision. Hvert arks tegningshoved viser sin revision.
5. Vil du se, hvad der er ændret, vælger du **Ændringer siden** ved siden af et emne. Hvert ark viser Samme eller Ændret, med de elementer, der er tilføjet, ændret og fjernet på det. Klik på et tal for at vælge disse elementer.
6. Vælg **Tilføj en post** for en byggepladsinstruktion, en værkstedstegning, et markeringssæt, en tilknyttet model eller en note. Vælg det emne, den hører til. En fil, du vælger, registreres med navn, størrelse og SHA-256; filen bliver, hvor den er.
7. **Tegningens ændringslog** viser én række for hvert ark og én kolonne for hvert emne. **Download ændringsloggen (CSV)** gemmer den med emnerne og posterne.
8. **Gem emnehistorikken** skriver en `.issues.json`-fil. MarkupCraft, TakeoffCraft og DetailCraft læser den med **Læs en emnehistorik**.

## Godt at vide

- Historikken gemmes inde i IFC-filen (egenskabssæt `CadCraft_Issues` på projektet). Andre programmer ignorerer den.
- Et ark tæller som ændret, når dets egen opsætning er ændret, eller når et element, det viser, er ændret: en plan viser sit niveau, en facade eller et snit viser hele modellen, og en dør- eller vinduesliste viser sine døre eller vinduer.
- Et element tæller som ændret, når en egenskab, dets placering, størrelse eller form er ændret.
- For at se præcis hvilken egenskab der er ændret, åbner du den gemte kopi af den udsendte model med **Sammenlign versioner**.
- Fjernes et emne, beholdes dets poster uden et emne. Hvert trin er ét Fortryd.
- En model med mere end 60.000 elementer gemmer ikke en post for hvert element i emnet. Ark sammenlignes stadig.

## Ikke lavet endnu

- Ark gemmes ikke som PDF sammen med emnet.
- En revisionssky tegnes ikke på BimCrafts egne ark. Registrér skyer i MarkupCraft mod emnet.
