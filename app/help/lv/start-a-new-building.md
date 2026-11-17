---
title: Jaunas ēkas sākšana
summary: Izveidojiet tukšu ēkas modeli ar tās līmeņiem, zīmējiet sienas, novietojiet vienumus no bibliotēkas un saglabājiet to kā IFC.
keywords: jauns, jauna ēka, tukšs, tukša, sākt no nulles, sagatave, līmeņi, stāvi, grīdas, izveidot, modelis
from: 68786865
---

## Ko jūs darīsiet

Sāciet ēkas modeli no nulles, nevis atverot esošu. BimCraft izveido tukšu IFC modeli ar projektu, zemesgabalu, ēku un tās līmeņiem. Līmeņos varat novietot iekārtas un mēbeles no bibliotēkas un saglabāt to kā IFC failu.

:::note
Sienas var zīmēt jau tagad: skatiet [Sienu zīmēšana](topic:draw-walls). Durvis, logi, grīdas un jumti tiek veidoti nākamie.
:::

## Soļi

1. Noklikšķiniet uz {{ui:Jauna ēka}} zem **Atvērt failu vai mapi** vai sākuma lapā.
2. Ierakstiet **Ēkas nosaukums**.
3. Izvēlieties, cik **Līmeņu** tai ir (no 1 līdz 200).
4. Ierakstiet **Līmeņa augstumu**, no grīdas līdz grīdai: piemēram, `10'-0"`, `10'6"` vai `3000 mm`. Vienkāršs skaitlis ASV nozīmē pēdas, citur — milimetrus.
5. Visi lauki jau ir aizpildīti, tāpēc varat tos atstāt kā ir. Zemāk esošajā lodziņā norādīts, ar ko sākat: mērvienības, **Sienas tipu**, ko vispirms zīmē sienu rīks (varat izvēlēties citu no saraksta, ja vēlaties), un pirmo lapu.
6. Noklikšķiniet uz {{ui:Izveidot}}. Līmeņi tiek sakrauti no 0, katrs par vienu līmeņa augstumu augstāk par iepriekšējo, un tie nosaukti Līmenis 1, Līmenis 2 un tā tālāk. Tie parādās modeļa kokā, un Līmeņa 1 plāns atveras blakus 3D skatam ar ieslēgtu {{ui:Zīmēšana}}.
7. Zīmējiet sienas: noklikšķiniet uz {{ui:Siena}} un divus punktus. Skatiet [Sienu zīmēšana](topic:draw-walls). Pārdēvējiet līmeņus vai mainiet to augstumus panelī **Līmeņi**.
8. Novietojiet vienumus: skatiet [Aprīkojuma un mēbeļu novietošana no bibliotēkas](topic:place-from-library). Novietošanas joslā ir uzskaitīts katrs līmenis.
9. Noklikšķiniet uz {{ui:Saglabāt kā IFC}}. Fails tiek nosaukts pēc ēkas, piemēram, `Ozolu māja.ifc`.

## Noderīgi zināt

- Modelis tiek saglabāts milimetros kā IFC4. Citas BIM programmas to atver.
- Jaunai ēkai ir viena lapa, **A-101**, kurā ir zemākā līmeņa plāns: A3 mērogā 1:100, ja strādājat metriskajās vienībās, citādi Tabloid mērogā 1/8" = 1'-0". Tā ir tukša līdz pirmajai sienai un tad rāda plānu, kā to zīmējat. Atveriet to zem **Lapas** projekta pārlūkā, lai mainītu tās papīru, mērogu vai virsrakstu, pievienotu skatus vai to dzēstu. Ēka, kas sākta no sagataves, saņem sagataves lapas.
- Lai mainītu to, ar ko sākas katra jauna ēka (sienu tipu metriskiem projektiem, līmeņus, pirmo lapu, aktīvo rīku pēc Izveidot), skatiet [Noklusējuma politikas](topic:default-policies).
- Pirms pirmās sienas nekas nav jāiestata. Sienu tipu, līmeņu augstumus, mērvienības un lapu var mainīt vēlāk.
- **Stāvi** kreisajā panelī uzskaita tikai līmeņus, kuros kaut kas ir; modeļa koks uzskaita visus.
- Līdz saglabāšanai jaunā ēka tiek uzskatīta par nesaglabātu darbu. BimCraft pajautā, pirms atverat citu failu vai aizejat, un glabā kopiju šajā pārlūkprogrammā, ja cilne aizveras.
