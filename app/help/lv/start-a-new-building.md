---
title: Jaunas ēkas sākšana
summary: Izveidojiet tukšu ēkas modeli ar tā līmeņiem, zīmējiet sienas, ievietojiet vienumus no bibliotēkas un saglabājiet to kā IFC.
keywords: jauns, jauna ēka, tukšs, sākt no nulles, veidne, līmeņi, stāvi, grīdas, izveidot, modelis
from: 546b8ae8
---

## Ko jūs izdarīsiet

Sākt ēkas modeli no nulles, nevis atvērt esošu. BimCraft izveido tukšu IFC modeli ar projektu, vietu, ēku un tās līmeņiem. Līmeņos varat novietot aprīkojumu un mēbeles no bibliotēkas un saglabāt to kā IFC failu.

:::note
Sienas tagad var zīmēt: skatiet [Zīmēt sienas](topic:draw-walls). Durvis, logi, grīdas un jumti tiek veidoti nākamie.
:::

## Soļi

1. Noklikšķiniet uz {{ui:Jauna ēka}} zem **Atvērt failu vai mapi** vai sākumlapā.
2. Ierakstiet **Ēkas nosaukumu**.
3. Izvēlieties, cik **Līmeņu** tai ir (no 1 līdz 200).
4. Ierakstiet **Līmeņa augstumu**, no grīdas līdz grīdai: piemēram, `10'-0"`, `10'6"` vai `3000 mm`. Vienkāršs skaitlis ASV nozīmē pēdas, citur milimetri.
5. Noklikšķiniet uz {{ui:Izveidot}}. Līmeņi tiek sakrauti no 0, katrs viena līmeņa augstumu virs iepriekšējā, un tie nosaukti Līmenis 1, Līmenis 2 un tā tālāk. Tie parādās modeļa kokā, un Līmeņa 1 plāns atveras blakus 3D skatam ar ieslēgtu {{ui:Zīmēšana}}.
6. Zīmējiet sienas: skatiet [Zīmēt sienas](topic:draw-walls). Pārdēvējiet līmeņus vai mainiet to augstumus **Līmeņu** panelī.
7. Novietojiet vienumus: skatiet [Novietot aprīkojumu un mēbeles no bibliotēkas](topic:place-from-library). Novietošanas joslā ir uzskaitīts katrs līmenis.
8. Noklikšķiniet uz {{ui:Saglabāt kā IFC}}. Fails tiek nosaukts pēc ēkas, piemēram, `Smith's house.ifc`.

## Labi zināt

- Modelis tiek saglabāts milimetros, kā IFC4. Citas BIM programmas to atver.
- **Stāvi** kreisajā panelī uzskaita tikai tos līmeņus, kuros kaut kas ir. Modeļa kokā ir uzskaitīti visi.
- Līdz saglabāšanai jaunā ēka skaitās nesaglabāts darbs. BimCraft jautā, pirms atverat citu failu vai aizejat, un glabā kopiju šajā pārlūkprogrammā, ja cilne aizveras.
