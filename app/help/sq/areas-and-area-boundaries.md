---
title: Sipërfaqet dhe kufijtë e sipërfaqeve
summary: Mat sipërfaqen bruto të ndërtesës ose sipërfaqen me qira brenda vijave kufi që vizaton ose i merr nga muret, dhe listo sipërfaqet në një tabelë.
keywords: sipërfaqe, kufi sipërfaqeje, skemë sipërfaqeje, sipërfaqe bruto e ndërtesës, sipërfaqe bruto e dyshemesë, GFA, me qira, plan sipërfaqesh, tabelë sipërfaqesh, zgjidh muret, nuk është e mbyllur
from: c79f96d2
---

## Çfarë do të bësh

Vizato kufijtë e një skeme sipërfaqesh, vendos sipërfaqet brenda tyre dhe lexo totalet.

## Ku janë veglat

- Paraqitjet me shirit: {{ui:Arkitekturë}} › **Dhomë & Sipërfaqe** › {{ui:Sipërfaqja}} dhe {{ui:Kufi sipërfaqeje}}.
- Paraqitja klasike: shiriti Vizato › menuja {{ui:Dhomat}}.

## Hapat

1. Zgjidh {{ui:Kufi sipërfaqeje}}. Në rresht zgjidh {{ui:Skema}}: **Bruto e ndërtesës** ose **Me qira**. Çdo skemë ka kufijtë e vet.
2. Zgjidh mënyrën e krijimit të vijave te {{ui:Bëje me}}:
   - **Vizato**: kliko pikë pas pike.
   - **Zgjidh muret: vija qendrore**: kliko një mur, dhe vija e tij qendrore është një kufi.
   - **Zgjidh muret: ana e klikuar**: kliko një mur në anën që dëshiron; ajo anë është kufiri. Për sipërfaqen bruto të ndërtesës kliko jashtë mureve të jashtëm.
3. Zgjidh {{ui:Sipërfaqja}}. Zgjidh të njëjtën skemë, shkruaj një emër, numër ose lloj nëse dëshiron, dhe kliko brenda kufijve.
4. Sipërfaqja matet menjëherë. Zgjidhe për të ndryshuar emrin, numrin ose llojin te **Vetitë**.

## Çfarë ndjek çfarë

- Një kufi i bërë duke zgjedhur një mur ndjek atë mur: lëviz murin dhe sipërfaqja matet përsëri në të njëjtin hap.
- Një kufi që vizatove qëndron aty ku e vizatove.
- Anët e mureve që takohen në një cep takohen edhe atje, kështu që katër mure të zgjedhur mbyllin një sipërfaqe pa hapësira.
- Kufijtë e sipërfaqeve shfaqen në planimetri ndërsa një mjet dhome ose sipërfaqeje është në dorë, kështu që nuk e mbushin planimetrinë pjesën tjetër të kohës.

## Nëse kufijtë nuk mbyllen

Sipërfaqja vendoset ende. Shfaq **Nuk është e mbyllur** dhe nuk mat asgjë derisa kufijtë të mbyllen rreth saj. Kjo është këshillë: asgjë nuk refuzohet.

## Tabela

Panel i majtë › {{ui:Tabelat}} › **Sipërfaqet**: skema, numri, emri, lloji, niveli, sipërfaqja dhe perimetri, me një total. Një klik mbi një rresht zgjedh sipërfaqen. {{ui:Shkarko CSV}} jep të njëjtën tabelë.

## Në IFC

Një sipërfaqe është një IfcSpace pa trup: PredefinedType GFA për skemën bruto të ndërtesës, USERDEFINED me ObjectType Rentable për sipërfaqen me qira. Mban GrossFloorArea dhe GrossPerimeter, dhe asnjë sipërfaqe neto, kështu që nuk ngatërrohet me një dhomë. Një kufi është një IfcVirtualElement.

## Të pandërtuara akoma

- Skema të tua (vetëm Bruto e ndërtesës dhe Me qira).
- Mbushje me ngjyra sipas llojit të sipërfaqes.
- Rregulla që vendosin kufirin për ty, si "deri te linja e xhamit".

Shih edhe [Dhomat dhe ndarësit e dhomave](topic:rooms-and-separators), [Etiketat e dhomave dhe sipërfaqeve](topic:room-and-area-tags).
