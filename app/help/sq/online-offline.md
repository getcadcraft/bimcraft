---
title: Në linjë dhe jashtë linje
summary: Çfarë ngarkon BimCraft nga faqja, si Ruaje për jashtë linje i bën modelet IFC dhe vizatimet DWG të hapen pa lidhje, dhe pse asgjë që hap nuk ngarkohet kurrë.
keywords: jashtë linje, në linjë, internet, lidhje, pa rrjet, modaliteti avion, vizitë në terren, ruaje për jashtë linje, gati jashtë linje, ngarkim, privatësi, wasm, webassembly, motor ifc, dwg, cloud
from: 39e5c7eb
---

BimCraft lexon skedarët e tu brenda skedës së shfletuesit. Hapja, inspektimi, redaktimi dhe ruajtja nuk i dërgojnë kurrë skedarët tu askund, në linjë ose jashtë linje. [Puna jashtë linje](common:offline) shpjegon si funksionojnë kopjet jashtë linje në çdo aplikacion; kjo faqe mbulon atë që është e veçantë për BimCraft.

## Çfarë ngarkon BimCraft nga faqja

| Pjesa | Kur ngarkohet pa një kopje jashtë linje | Madhësia |
|---|---|---|
| Vetë aplikacioni, me shikuesin 3D dhe kodin e motorit IFC | Kur hap BimCraft | Disa megabajt |
| Pjesa WebAssembly e motorit IFC | Skedari i parë IFC që hap në skedë: "Po nis motorin IFC…" | Rreth 1.6 MB |

Vizatimet DWG dhe DXF, skedarët dhe dosjet e projekteve dhe familjeve nuk kanë nevojë për asgjë tjetër: lexuesit e tyre janë pjesë e aplikacionit.

## Ruaj BimCraft për përdorim jashtë linje

1. Hap BimCraft ndërsa je në linjë.
2. Kliko {{ui:Ruaje për jashtë linje}} në shiritin e aplikacionit lart.
3. Shiko butonin të numërojë: "Po ruan 40 nga 212", për shembull. Kopja e BimCraft është rreth 11 MB, sepse përfshin motorin IFC.
4. Prit derisa të shfaqet {{ui:Gati jashtë linje}}.

Pasi të thotë {{ui:Gati jashtë linje}}, modelet IFC, vizatimet DWG dhe DXF, skedarët e projekteve, dosjet dhe kjo ndihmë hapen pa lidhje. Nuk ke nevojë të hapësh një IFC ose DWG së pari për të "ngrohur" lexuesit.

Për të përditësuar ose hequr kopjen, kliko {{ui:Gati jashtë linje}} dhe zgjidh {{ui:Ruaje përsëri (merr versionin më të ri)}} ose {{ui:Hiq kopjen jashtë linje}}.

## Çfarë do të thotë butoni

| Buton | Do të thotë |
|---|---|
| {{ui:Ruaje për jashtë linje}} | Nuk ka ende kopje jashtë linje në këtë shfletues. Kliko për të ruajtur një |
| "Po ruan *n* nga *m*" | Duke ruajtur; mbaj skedën të hapur derisa të mbarojë |
| {{ui:Gati jashtë linje}} | U ruajt. Kalo miun për të parë kur; kliko për menynë |
| {{ui:Nuk u ruajt}} | Disa skedarë nuk u shkarkuan. Kontrollo lidhjen dhe kliko për ta provuar përsëri. Kopja e fundit e mirë, nëse ka, mbahet |
| {{ui:Modaliteti jashtë linje nuk është i disponueshëm}} | Kjo dritare nuk mund të mbajë një kopje jashtë linje (një dritare private ose një kompjuter i menaxhuar). Shih [Puna jashtë linje](common:offline) |

:::offline
Je jashtë linje.

- Nëse butoni thotë {{ui:Gati jashtë linje}}, çdo lloj skedari hapet si zakonisht.
- Nëse jo, hapet vetëm ajo që kjo skedë ka ngarkuar tashmë: një lexues që nuk është ngarkuar kurrë në këtë skedë nuk mund të nisë, dhe hapja e atij lloji skedari shfaq një gabim nga shfletuesi në rreshtin e statusit. Mos e rifresko skedën derisa të jesh sërish në linjë.
:::

## Çfarë nuk kërkon kurrë lidhje

Pasi BimCraft është hapur në skedë, këto punojnë jashtë linje edhe pa një kopje të ruajtur:

- Leximi i skedarëve të projekteve dhe familjeve dhe kontrolli i dosjeve.
- Zgjedhja e elementëve, leximi i vetive dhe redaktimi i vlerave IFC në një model që është hapur tashmë.
- {{ui:Ruaj si IFC}} dhe {{ui:Shkarko CSV}}: të dyja janë shkarkime të bëra në skedë.

## Çfarë nuk është e disponueshme ende

- **Ruajtja në cloud.** Skedarët ruhen vetëm në kompjuterin tënd.

Shih [Ku shkojnë skedarët e tu](common:your-files).
