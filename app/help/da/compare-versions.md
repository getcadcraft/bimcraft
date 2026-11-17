---
title: Sammenlign to versioner af en model
summary: Åbn to versioner af den samme IFC-model og se, hvilke elementer der er tilføjet, fjernet og ændret, matchet via deres GlobalId'er, med en CSV over hver ændring.
keywords: sammenlign, diff, forskel, versioner, revision, ændringer, ændret, tilføjet, fjernet, flyttet, globalid, guid, hvad der ændrede sig
from: cfca6971
---

## Hvad du gør

Se, hvad der er ændret mellem den model, du havde, og den, du fik tilsendt: hvilke elementer der er nye, hvilke der er væk, og hvilke der er flyttet eller har fået nye egenskabsværdier.

## Trin

1. Åbn den nyere version, klik derefter på {{ui:Tilføj en model…}} og vælg den ældre. Se [Se flere IFC-modeller sammen](topic:several-models).
2. Under {{ui:Modeller}} åbnes {{ui:Sammenlign versioner}}.
3. Vælg {{ui:Ældre version}} og {{ui:Nyere version}}.
4. Klik på {{ui:Sammenlign}}.
5. Klik på et element i en liste for at vælge det og se dets egenskaber. Klik på {{ui:Download CSV}} for at få hver ændring, egenskab for egenskab.
6. Klik på {{ui:Ryd}} for at gå tilbage til den normale visning.

## Hvad du skal se

- **Tilføjede** elementer i blåt, fra den nyere version.
- **Fjernede** elementer i rødt, fra den ældre version.
- **Ændrede** elementer i okker, fra den nyere version, hver med en besked om, hvad der ændrede sig: egenskaber, en flytning med hvor langt, eller en ny form.
- Alt, der er ens, er gennemsigtigt.

## Godt at vide

- Elementer matches på deres GlobalId. Et program, der giver elementer nye GlobalId'er ved hver eksport, får alle elementer til at se fjernet og tilføjet igen.
- Positioner sammenlignes der, hvor modellerne står i scenen. Hvis den ene version er flyttet med vilje, så ret dem først op med {{ui:Flyt}} under {{ui:Modeller}}.
- Et GlobalId, der bruges to gange i samme model, udelades af sammenligningen. [Tjek en model for almindelige problemer](topic:model-checks) finder dem.

## Næste

- [Emner og BCF-filer](topic:issues-bcf)
- [Læg mængder sammen efter egenskab](topic:quantity-totals)
