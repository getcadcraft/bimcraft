---
title: Caurulu un gaisa vadu savienošana ar iekārtām
summary: Sāciet vai beidziet caurulī vai gaisa vadu pieslēgvietā, lai tā pārņemtu pieslēgvietas izmēru un sistēmu un paliktu tai piestiprināta, un pēc tam pārbaudiet savienojumus — atvērtas pieslēgvietas, izmēru un sistēmu neatbilstības un posmus bez avota.
keywords: mep, savienot, savienojums, savienojumi, pieslēgvieta, pieslēgvietas, atvērta pieslēgvieta, izmēru neatbilstība, sistēmas neatbilstība, avots, pārbaudīt savienojumus, fiksēts, sekot, pārvietot iekārtu, ifcrelconnectsports, koordinācija
from: 29144fb0
---

## Ko darīsiet

Savienojiet posmus ar iekārtām, lai modelis būtu viena savienota sistēma: sūkņa izeja ar cauruli, kas no tā iziet, difuzora kakls ar tā atzara gaisa vadu. Pēc tam ļaujiet BimCraft uzskaitīt to, kas nav savienots.

## Zīmēt no pieslēgvietas

1. Izvēlieties {{ui:Caurule}} vai {{ui:Gaisa vads}}.
2. Pārvietojiet rādītāju uz iekārtas pieslēgvietu (mazajiem apļiem; atvērta pieslēgvieta ir attēlota brīdinājuma krāsā). Rādītājs tai piesaistās un norāda **uz pieslēgvietas**.
3. Noklikšķiniet: posms sākas pieslēgvietas augstumā un **pārņem tās izmēru un sistēmu** (caurule pārņem arī sistēmas parasto materiālu). Statusa rindā rādīts, ko tas pārņēma.
4. Zīmējiet tālāk kā parasti. Posma beigas uz citas pieslēgvietas fiksē arī to galu.

Posma gals uz pieslēgvietas ir **fiksēts**: pārvietojot vai pagriežot iekārtu (īpašībās), posma gals pārvietojas kopā ar to; rediģējot posmu, šis gals paliek pieslēgvietā. Pārējie posma stūri paliek savās vietās, tāpēc pēc lielas pārvietošanas pirmais posma segments var atrauties no pieslēgvietas leņķī: pārvietojiet arī nākamo stūri.

## Pārbaudīt savienojumus

Atveriet {{ui:Būvējums}} un noklikšķiniet uz {{ui:Pārbaudīt savienojumus}}. Saraksts zem joslas rāda:

| Rindiņa | Ko tā nozīmē |
|---|---|
| Pieslēgvieta nav savienota | Iekārtai ir savienojums, uz kuru nekas nav zīmēts |
| Nekas galā | Posms beidzas gaisā |
| Savienotas pieslēgvietas ar dažādiem izmēriem | Posms vienā izmērā saskaras ar pieslēgvietu vai posmu citā izmērā bez reducētāja (caurules nominālais izmērs, gaisa vada forma un malas) |
| Savienotas pieslēgvietas ar dažādām sistēmām | Piemēram, nosūces gaisa vads uz padeves difuzora |
| Caurule savienota ar gaisa vadu | Divi dažādu veidu savienojumi saskaras |
| Tīklā nav iekārtas, kas to apgādā | Nekam, ar ko posms savienots, pat tālāk pa ceļu, nav izejas. Notekas, lietus ūdens un ventilācija šādi netiek pārbaudītas: to ūdens nāk no sanitārajām ierīcēm |
| Fiksēts pie iekārtas pieslēgvietas, kas modelī vairs nav | Iekārta ir dzēsta; uzzīmējiet galu no jauna vai dzēsiet posmu |

Kļūdas ir pirmās. Noklikšķiniet uz rindiņas, lai izvēlētos to, ko tā nosauc. {{ui:Aizvērt}} paslēpj sarakstu. Pārbaude nolasa modeli tā, kā tas zīmēts: tā pārbauda savienojumus un izmērus, nekad plūsmas, spiedienus vai līdzsvarošanu.
