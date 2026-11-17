---
title: Symboler, typer og aktiver, projektskabeloner og Quick Kits
summary: Biblioteket har tre slags emner (Symboler, Typer, Aktiver). Tilføj en type til dit projekt, start fra en delt projektskabelon, tilføj et Quick Kit, og del dine egne via bibliotekets uploadside.
keywords: bibliotek, symboler, typer, aktiver, type, vægtype, gulvtype, taktype, loftstype, projektskabelon, skabelon, quick kit, sæt, del, upload, version, ændringslog, LOD, klassifikation, licens, noter fra praksis
from: e13b0e67
---

## Hvad du gør

Find det, du har brug for i biblioteket efter, hvad det er, tilføj en type til det projekt, du tegner, start et nyt projekt ud fra en skabelon, som nogen har delt, og del dine egne skabeloner, typer og sæt.

## De tre slags biblioteksemner

- **Symboler** er tegnekonventioner: kun 2D, tegnet i annoteringsstørrelse, grupperet efter fag.
- **Typer** beskriver, hvad et element er lavet af: dets lag med deres rigtige tykkelse, dets udviklingsniveau (LOD) og dets klassifikationskode. En type tilføjes til projektet og tegnes ikke.
- **Aktiver** er fysiske objekter som døre, vinduer, møbler, sanitet og udstyr, med en planvisning og en 3D-krop i rigtig størrelse.

I fanen {{ui:Library}} vælger du {{ui:Library}} og bruger **Type af emne** til at vise Alt, Symboler, Typer eller Aktiver.

## Tilføj en type til dit projekt

1. Vælg **Typer** under Type af emne, og åbn en.
2. Tjek dens opbygning, LOD og klassifikation under billedet, og vælg derefter {{ui:Add to this project}}.
3. Den tilføjes som en væg-, gulv-, tag- eller loftstype, du kan tegne med. Hvis en type med det navn allerede findes, tilføjes den nye som en kopi, og din bliver, som den var. Ét Fortryd fjerner den igen.

## Projektskabeloner og Quick Kits

Vælg {{ui:Kits}} for at se, hvad folk har delt.

- **En projektskabelon** er en IFC-fil med niveauer, akser, typer og indstillinger. {{ui:Save to my templates}} lægger den under Ny bygning under Start fra.
- **Et Quick Kit** er en liste over biblioteksemner. {{ui:Show the kit's items}} viser dem som kort, du kan placere.
- Hvert sæt har en version og en ændringslog, nyeste først. En version, der begynder med 0, er til diskussion; 1.0.0 er kun til det, ejeren af linjen har godkendt.

## Del dine egne

- **En projektskabelon:** {{ui:Save as template}}, sæt kryds ved {{ui:Also make a file to share in the Library}}, tilføj hvad den indeholder og en version. Du får en `.json`-fil.
- **Et Quick Kit:** under {{ui:Kits}} vælger du {{ui:Make a Quick Kit from this project}}. Det lister de biblioteksemner, projektet bruger.
- **En type:** under {{ui:Type packs}} sætter du kryds ved én type og vælger {{ui:Save as a Library item…}}.

Upload filen på bibliotekets uploadside. Den går gennem den samme gennemgang som alle andre emner, og du vælger licensen dér: hvert emne angiver sin licens. Emner skal have deres LOD, en IFC-klasse og en klassifikationskode (en kode, ikke kun et navn).

## Noter fra praksis

På ethvert biblioteksemnes side kan medlemmer, der er logget ind, tilføje en note: brugt i et rigtigt projekt, afprøvet i et eksempelprojekt, eller fundet et problem. Skriv med få ord, hvilken type projekt det er, og udelad kundenavne. En note er offentlig og er ikke en anmeldelse: den ændrer ikke emnet.

## Godt at vide

- Intet sendes fra appen. Filerne laves på din computer, og du uploader dem selv.
- Et sæt lavet ud fra en skabelon bærer IFC-teksten præcis, som den blev gemt. Tjek den for private oplysninger, før du uploader.
- CadCraft viser Symboler og Aktiver i sin fane Bibliotek; Typer og skabeloner er til BimCraft-projekter.
