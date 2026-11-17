---
title: Ruaj pamjet dhe ecjet
summary: Mbani kamerat e modelit me emër, kthehuni tek ato, luajini njëra pas tjetrës, dhe regjistroni një ecje nëpër ndërtesë për ta luajtur më vonë.
keywords: pamje, pamje të ruajtura, kamerë, kamera, pikëpamje, skenë, skena, turne, prezantim, ecje, ecje nëpër, fluturim nëpër, regjistro, luaj, rrugë, animacion
from: 3af19a36
---

{{ui:Pamjet}} në shirit mban kamerat e pamjes 3D në skedarin e modelit, që ju dhe kushdo t'i dërgoni të mund të ktheheni direkt tek ato.

## Ruaj një pamje

1. Vendosni pamjen 3D: rrotullojeni, zmadhoni, fshihni atë që nuk doni.
2. Klikoni {{ui:Pamjet}}, shkruani një emër (ose mbajeni atë që ofrohet) dhe klikoni {{ui:Ruaj pamjen}} ose shtypni {{key:Enter}}.

Ruajtja me një emër që është tashmë në listë përditëson atë pamje. Klikoni emrin e një pamjeje për t'u kthyer tek ajo; kamera lëviz atje me butësi.

Shigjetat ndryshojnë rendin, lapsi riemërton, koshi fshin. Çdo ndryshim është një hap, kështu {{key:Ctrl+Z}} e zhbën.

## Luaj pamjet

{{ui:Luaj pamjet}} lëviz nga një pamje në tjetrën sipas rendit të listës, duke u ndalur një çast në çdo pamje. {{key:Esc}} ose {{ui:Ndalo}} e mbyll.

## Regjistro një ecje

1. Ndizni [Ecje](topic:walk) dhe filloni të ecni brenda ndërtesës.
2. Te {{ui:Pamjet}}, klikoni {{ui:Regjistro një ecje}}.
3. Ecni me {{key:W}} {{key:A}} {{key:S}} {{key:D}} dhe shikoni përreth me miun.
4. Klikoni {{ui:Ndalo regjistrimin}}. Ecja ruhet si "Walk 1", me gjatësinë e saj.

Klikoni një ecje për ta luajtur ashtu siç e keni ecur. {{key:Esc}} e ndal.

## Render i një ecjeje si video

Klikoni ikonën e filmit pranë një ecjeje. Dialogu i videos vizaton çdo kornizë të ecjes me cilësimet e Renderimit që keni zgjedhur së fundi, me madhësinë, shpejtësinë e kornizave dhe cilësinë që zgjidhni këtu. Ruajeni si video WebM ose MP4, ose si ZIP me një imazh për kornizë. Kornizat duan aq kohë sa imazhet, kështu filloni me {{ui:Shpejt}}.

## Narro një ecje

Klikoni ikonën e flluskës së fjalës pranë një ecjeje. Shkruani një rresht për çdo gjë që thuhet, dhe filloni çdo rresht me kohën kur fillon (`12`, `0:12` ose `1:02.5`); një rresht pa kohë vjen pas rreshtit mbi të, pas kohës që duhet për ta thënë. Zgjidhni gjuhën, në gjuhën e klientit nëse ai është ai që do ta shikojë. {{ui:Pamja paraprake}} luan fjalët me zërin e këtij kompjuteri dhe i shfaq si nëntitra; e njëjta gjë ndodh sa herë luhet ecja. {{ui:Ruaj me shëtitjen}} e mban narracionin në IFC bashkë me ecjen.

Asistenti juaj i lidhur mund ta shkruajë narracionin për ju: kërkojini të shikojë ecjen dhe pamjet e ruajtura, dhe ai i vendos rreshtat në gjuhën që emëroni, si një hap zhbërjeje.

Videoja e renderuar nuk ka zë të vet, sepse një shfletues nuk mund ta regjistrojë zërin e vet. Ruani nëntitrat (`.srt` ose `.vtt`) dhe shtojini videos në lojtarin ose redaktuesin tuaj të videos. Cilat zëra mund të zgjidhni varet nga kompjuteri; një gjuhë pa zë të instaluar merr akoma nëntitrat.

## Në skedar

Pamjet dhe ecjet ruhen në IFC si grupi i vetive `CadCraft_Views` te projekti: IFC i thjeshtë që programet e tjera e injorojnë. Janë në koordinatat e modelit të parë, kështu përshtaten akoma pasi modeli ringarkohet ose shtohet një model tjetër.

:::tip
Për të renderuar një imazh nga një pamje e ruajtur, shkoni te pamja, pastaj klikoni [Renderim](topic:render).
:::
