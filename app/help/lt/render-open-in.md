---
title: Atidarykite sceną kitoje programoje
summary: Įrašykite sceną kaip USD arba glTF failą bet kuriai programai, kuri juos skaito, arba atidarykite ją iš Studio programoje šiame kompiuteryje.
keywords: atidaryti naudojant, usd, gltf, glb, eksportas, atvaizdavimo programa, archviz, studio, usdview, siųsti, perdavimas, paketas, Unreal aplankas
from: 0a6559ee
---

Pasirinkite įrašą **Atidaryti naudojant …** variklių sąraše, esančiame {{ui:Atvaizduoti}}, kad nuvestumėte sceną į kitą programą. Į modelį nieko negrįžta.

## Failas bet kuriai programai

- **USD failas** įrašo sceną kaip `.usdc` (arba `.usdz`, kai modelis turi paveikslėlių): [tas pats failas kaip Įrašyti kaip USD](topic:usd), su medžiagomis, šviestuvais ir kameromis. Išlaiko egzemplioriavimą ir tikslias medžiagų reikšmes. Dauguma atvaizdavimo programų, žaidimų variklių ir peržiūros programų skaito USD.
- **glTF failas (.glb)** įrašo lengvesnį glTF 2.0 failą su medžiagomis, tekstūromis ir šviestuvais; žr. [Siųsti modelį atvaizdavimo programai](topic:model-for-rendering), kas į jį patenka ir kas paliekama.
- **Unreal projekto aplankas (.zip)** įrašo aplanką, kurį rašo [Siųsti sceną žaidimų varikliui](topic:render-unreal), skirtą projektui bet kuriame kompiuteryje.

Visi trys veikia naršyklėje ir Studio.

## Studio: atidaryti programoje

Studio išvardija programas, kurias randa šiame kompiuteryje ir kurios gali atidaryti sceną: usdview, jei jis yra jūsų paieškos kelyje, ir kompiuterio pačią programą tam failo tipui. Pasirinkite vieną, pasirinkite USD arba glTF, kur programa skaito abu, ir spustelėkite {{ui:Atvaizduoti}}. Studio įrašo paketą į naują aplanką Dokumentuose (`CadCraft hand-off`; nieko neperrašoma, kiekvienas siuntimas gauna savo aplanką) ir paleidžia programą jame, tada parodo, kur yra failai.

| Programa | Geriausiai skaito |
|---|---|
| usdview | USD |
| Kompiuterio pačios programa | Ką kompiuteris turi tam failo tipui |

Studio paleidžia tik programas iš šio fiksuoto sąrašo; ji nevykdo nieko, ko puslapis prašo vardu, ir niekada nepaleidžia programos pagal GNU GPL licenciją (žr. [Piešti vaizdą kita programa](topic:render-other-program#programs-cadcraft-never-runs)). Bet kuri programa, skaitanti USD ar glTF, atidaro failą iš **Failas bet kuriai programai** skyriaus aukščiau.

:::note
Twinmotion, Enscape ir kitų vizualizacijos programų sąraše nėra: CadCraft jų nebandė ir apie jas nieko netvirtina. USD arba glTF failas iš čia yra kelias į jas; žr. pastabas apie [atvaizdavimo papildinius](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
