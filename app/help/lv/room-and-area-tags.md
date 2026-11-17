---
title: Telpu un laukumu atzīmes
summary: Uzlieciet atzīmi ar numuru, nosaukumu un laukumu uz telpas vai laukuma. Atzīme seko tai, un tās izmērs ir atkarīgs no augstuma uz papīra.
keywords: atzīme, telpas atzīme, laukuma atzīme, atzīmēt telpu, atzīmēt laukumu, atzīmēt visu, atzīmēt neatzīmētās, etiķete, teksta augstums, augstums uz papīra, anotācija
from: 67059d8a
---

## Ko jūs darīsiet

Atzīmējiet telpas un laukumus pa vienam vai visus uzreiz un pārvietojiet atzīmi uz vietu, kur tā labi nolasāma.

## Kur atrodas rīki

- Lentes izkārtojumi: {{ui:Arhitektūra}} › **Telpa un laukums** › {{ui:Atzīmēt telpu}} un {{ui:Atzīmēt laukumu}}.
- Klasiskais izkārtojums: zīmēšanas josla › izvēlne {{ui:Telpas}}.
- Atlasīta telpa vai laukums: Rekvizīti › {{ui:Pievienot atzīmi}}.

## Soļi

1. Izvēlieties {{ui:Atzīmēt telpu}} un noklikšķiniet telpā, kur atzīmei jāatrodas.
2. Vai nospiediet {{ui:Atzīmēt visas neatzīmētās}} joslā: katra šajā līmenī esoša telpa, kurai nav atzīmes, saņem vienu savā vidū. Tas ir viens atsaukšanas solis.
3. Lai pārvietotu atzīmi, atlasiet to ar {{ui:Atlasīt}} un velciet. Rekvizīti ir {{ui:Novietot atpakaļ vidū}}.
4. {{ui:Atzīmēt laukumu}} darbojas tāpat laukumiem.

## Ko dara atzīme

- Tā parāda numuru, nosaukumu un laukumu jūsu attēlojuma mērvienībās.
- Tā seko savai telpai: pārdēvējiet telpu vai pārvietojiet sienu, un atzīmes teksts un vieta mainās tajā pašā solī.
- Tās izmērs uz papīra ir noteikts ar {{ui:Teksta augstums uz papīra}}, milimetros (sākumam 2.5). Skata mērogā 1:50 2.5 mm atzīme modelī ir 125 mm augsta; pie 1:100 tā ir 250 mm.
- Telpai ar atzīmi tiek rādīta atzīme, nevis tās vienkāršā etiķete.
- Kad tās telpa vai laukums ir pazudis, atzīme pazūd kopā ar to. Atsaukšana atjauno abus.

## IFC

Atzīme ir IfcAnnotation (ObjectType ROOMTAG vai AREATAG) ar tekstu kā teksta literāli un GlobalId no tā elementa, ko tā nosauc. Teksts failā dod laukumu kvadrātmetros.

## Vēl nav izveidots

- Jūsu pašu atzīmju formas un norādes līnija.
- Atzīmes uz durvīm, logiem un sienām ir atsevišķs rīks (skatiet lapu atzīmju stilus).

Skatiet arī [Telpas un telpu atdalītāji](topic:rooms-and-separators).
