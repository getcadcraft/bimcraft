---
title: Problēmas un BCF faili
summary: Saglabājiet modeļa skatu kā problēmu — kameru, atlasītos elementus, paslēptos un griezumu — kopīgojiet to kā BCF failu ar citiem koordinācijas rīkiem un atveriet to BCF failus, lai redzētu to problēmas.
keywords: bcf, bcfzip, problēma, problēmas, tēma, skatpunkts, sadursmju atskaite, koordinācija, komentārs, momentuzņēmums, atvērt bcf, saglabāt bcf, eksportēt, importēt
from: 2a6cf201
---

## Ko jūs darīsiet

Norādiet uz problēmu modelī un saglabājiet skatu, kas to parāda, pēc tam nododiet to tālāk BCF failā — formātā, ko citi koordinācijas rīki lasa un raksta.

## Soļi

1. Atveriet IFC modeli un iestatiet skatu: orbitējiet ap to, atlasiet iesaistītos elementus, paslēpiet to, kas traucē, sagrieziet to ar griezuma plakni vai kārbu.
2. Noklikšķiniet uz cilnes {{ui:Problēmas}} pa labi, pēc tam uz {{ui:Jauna problēma no šā skata}}.
3. Ierakstiet nosaukumu un, ja vēlaties, komentāru; izvēlieties statusu; norādiet savu vārdu vai e-pastu (ja esat pierakstījies, jūsu konta vārds tiek aizpildīts automātiski; skatiet [BimCraft iestatījumi](topic:settings#your-name-on-issues)). Noklikšķiniet uz {{ui:Izveidot problēmu}}.
4. Noklikšķiniet uz {{ui:Rādīt}} problēmai, lai atjaunotu tās skatu.
5. Noklikšķiniet uz {{ui:Saglabāt BCF}}, lai lejupielādētu visas problēmas kā vienu `.bcf` failu.
6. Lai redzētu problēmas, ko izveidojis kāds cits, noklikšķiniet uz {{ui:Atvērt BCF…}} un izvēlieties viņa `.bcf` vai `.bcfzip` failu.

## Ko jūs redzēsiet

- Katra problēma sarakstā ar sava skata attēlu, nosaukumu, statusu, autoru un datumu.
- {{ui:Rādīt}} atjauno kameru, atlasītos elementus, to, kas bija paslēpts (vai vienīgie rādītie elementi), un griezumu. Elementi tiek atrasti pēc to GlobalId visos atvērtajos modeļos; statusa rindā tiek norādīts, ja daži nav atrodami.
- Griezuma plakne vai kārba no cita rīka tiek rādīta, ja tā sakrīt ar modeļa asīm; sasvērtās vai papildu plaknes atgriežas kā griezuma tilpums (līdz 6 plaknēm). Problēma saglabā pirmo kārbu no vairāku kārbu tilpuma.

## Noderīga informācija

- Fails ir BCF 2.1 un glabā skatu modeļa paša koordinātēs, lai citi rīki novietotu kameru tajā pašā vietā.
- Problēmas paliek šajā cilnē, līdz tās saglabājat. Atverot citu modeli, saraksts paliek; atveriet modeli, uz kuru attiecas problēmas, pirms tās rādāt.
- Cita rīka paralēlo (ortogonālo) kameru rāda ar šī skatītāja perspektīvas kameru, attālinātu tā, lai tā pati modeļa daļa aizpildītu skatu.

## Biežākās kļūdas

- **Rādīt pārvietoja kameru neparastā vietā.** Problēma tika izveidota citā modelī vai ar citām koordinātēm. Vispirms atveriet pareizo modeli.
- **Fails neatveras.** Tas nav BCF zip fails vai ir bojāts; statusa rindā ir norādīts iemesls.

## Tālāk

- [Paslēpt, izolēt un redzēt caur elementiem](topic:hide-and-isolate)
- [Sagriezt IFC modeli ar griezuma plakni](topic:section-plane)
