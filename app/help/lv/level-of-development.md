---
title: Attīstības līmenis (LOD) un posmu pārbaudes
summary: Piešķiriet elementiem attīstības līmeni, skatiet, no kurienes tas nāk, pārbaudiet modeli pret LOD, ko pieprasa posms, un labojiet trūkstošās birkas un nenosauktās telpas. Katra pārbaude tikai iesaka; neko nebloķē.
keywords: LOD, attīstības līmenis, LOD 100, LOD 200, LOD 300, LOD 350, LOD 400, LOD 500, posms, posmu tabula, modeļa pārbaudes, trūkstošās birkas, nenosauktās telpas, vispārīgs agrīnā posmā, IFC klase, klasifikācija
from: 2091c79b
---

## Ko jūs darīsiet

Norādiet, cik tālu attīstīts ir katrs elements, un pēc tam pārbaudiet visu modeli pret to, ko pieprasa projekta posms.

## Soļi

1. Atlasiet elementu (vai vairākus) un atveriet {{ui:Properties}}. Atrodiet {{ui:Level of development}}.
2. Izvēlieties līmeni no saraksta. Katrs līmenis nosaukts pēc tā nozīmes, un katrs ietver zemākos. Viens atsaukšanas solis attiecas uz visu atlasi.
3. Skatiet, no kurienes līmenis nāk: no šā elementa, tā tipa vai lauka pārbaudītas atzīmes.
4. Lai pārbaudītu modeli, kreisajā pusē atveriet {{ui:Modeļa pārbaudes}}, pēc tam {{ui:LOD posmi}}. Izvēlieties posmu un tabulu (sākuma tabulu vai savu CSV vai JSON failu, izmantojot pogu {{ui:Load}}).
5. Noklikšķiniet uz {{ui:Pārbaudīt modeli}}. Kopsummas un rindas katrai tabulas rindai parāda, kas ir sasniedzis savu līmeni un kas nav; konstatējumi parādās arī sarakstā Problēmu saraksts.
6. Sadaļā {{ui:Trūkstošās birkas un nenosauktās telpas}} noklikšķiniet uz {{ui:Atrast tās}}, ja vēlaties, labojiet priekšlikumus un noklikšķiniet uz {{ui:Lietot}}.

## Ko jums vajadzētu redzēt

- Elementam izvēlēto līmeni un blakus tam IFC klasi un klasifikācijas kodus.
- Posma kopsummas un rindas. Tabula nekad nemaina līmeņa nozīmi: skala ir fiksēta, tabula tikai norāda, kāds līmenis posmam nepieciešams.
- „Agrīnā posmā vispārīgs”: ieteikums saglabāt elementus vispārīgus agrīnā posmā. Tas ir tikai ieteikums.

## Noderīga informācija

- Šeit nekas netraucē darbu. Modelis, kas ir zemāk par posmam pieprasīto līmeni, tiek tikai uzskaitīts, nevis noraidīts.
- Līmeņa trīs daļas (ģeometriju, informāciju, dokumentāciju) var iestatīt katru atsevišķi; atzīme parāda, vai ir izpildīts, zemāk par prasību vai nav norādīts.
