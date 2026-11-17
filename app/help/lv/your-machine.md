---
title: Ar ko jūsu dators renderē
summary: Iestatījumi › Renderēšana parāda grafiku, procesora kodolus un atmiņu, ko šis pārlūks ļauj lietotnei izmantot, kā arī līmeni, kas nosaka, kur renderēšana sākas.
keywords: jūsu dators, grafikas karte, gpu, webgpu, webgl, procesors, cpu, kodoli, pavedieni, atmiņa, ram, koplietota atmiņa, izolācija, pakāpe, līmenis, ātrums, lēns, renderēšanas ātrums, klēpjdators
from: 360f2375
---

Atveriet {{ui:Iestatījumi}} ({{key:Mod+,}}), paliekiet šīs lietotnes cilnē un ritiniet līdz {{ui:Renderēšana}}. {{ui:Jūsu dators}} uzskaita, ko šis pārlūks ļauj lietotnei izmantot renderēšanai. Nekas no tā neatstāj jūsu datoru.

| Rinda | Ko tā nozīmē |
|---|---|
| {{ui:Grafika}} | Grafikas karte, ko norāda pārlūks. „WebGPU“ nozīmē, ka tā var veikt renderēšanas darbu; „WebGL 2 only“ nozīmē, ka WebGPU nav: tiešraides skats un augstas kvalitātes attēli izmanto grafikas karti caur WebGL 2 (attēli ar vecāko WebGL ceļa izsekotāju, bez papildinājumiem, kam vajadzīgs WebGPU); programmatūras aizstājējs nozīmē, ka viss tiek veikts procesorā |
| {{ui:Procesors}} | Cik procesora kodolu norāda pārlūks |
| {{ui:Atmiņa}} | Aptuveni cik atmiņas ir datorā, ja to norāda pārlūks. Daži pārlūki to nedara |
| {{ui:Koplietotā atmiņa}} | Vai lapa drīkst koplietot atmiņu starp saviem darbinieku procesiem. Ja ieslēgts, katrs kodols var strādāt pie vienas ainas kopijas; ja izslēgts, katram vajag savu kopiju, tāpēc liela aina vienlaikus iederas mazākā kodolu skaitā |
| {{ui:Ātrs procesora kods}} | Vai pārlūks izpilda ātrāko WebAssembly kodu. Bez tā tiek izmantota lēnāka rezerves versija |
| {{ui:Līmenis}} | {{ui:Grafikas karte, augsts}}, {{ui:Grafikas karte, pamata}} vai {{ui:Tikai procesors}}, un zem tā iemesls |

## Līmenis

Līmenis nosaka, kur sākas renderēšana, lai klēpjdators ar iebūvētu grafikas mikroshēmu vai bez grafikas kartes vispār paliktu atsaucīgs. Iebūvēta vai tālruņa grafikas mikroshēma, kā arī 4 GB atmiņas vai mazāk nekad nesaņem {{ui:Grafikas karte, augsts}}.

:::note
Pārlūki atšķiras. Tas pats dators vienā pārlūkā var rādīt WebGPU, bet citā — „WebGL 2 only“. Linux lielākajā daļā pārlūku WebGPU vēl nav.
:::
