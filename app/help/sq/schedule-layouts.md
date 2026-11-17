---
title: Përgatit, ruaj dhe eksporto një tabelë
summary: Group a schedule, give it subtotals and totals, add a column read from a property, save it as a set-up in the file, and export it as a spreadsheet workbook (.xlsx), as text to paste into an online sheet, or as CSV. The office standard fills in what a schedule does not state.
keywords: paraqitja e tabelës, grupo sipas, nëntotal, total, titujt, standardi i zyrës, politikat e parazgjedhura, konfigurim, tabela e dyerve sipas katit, vlerësimi i zjarrit, hekurari, xlsx, fletë pune, fletë online, ngjit, csv, eksport, fletë llogarish, elemente, zgjidh nga tabela, shifër
from: 95dfd801
---

## Çfarë do të bësh

Kthe një tabelë të thjeshtë në atë që zyra jote nxjerr: e grupuar sipas nivelit, tipit ose dhomës, me nëntotale dhe një total, me kolonat që të duhen, nën emrin e vet. Pastaj dërgoje në një fletë llogarish. Çdo rresht dhe çdo shifër ende di nga cilët elementë erdhi.

## Hapat

1. Ndiz {{ui:Vizato}} dhe hap **Tabelat** në panelin e majtë. Zgjidh një tabelë, për shembull **Dyert**.
2. Mbi tabelën, zgjidh **Grupo sipas** (një kolonë e tabelës, si Niveli ose Tipi, ose **Pa grupim**) dhe **Totalet** (**Pa totale**, **Një total**, ose **Nëntotale dhe një total**). **Siç është vendosur** lë zgjedhjen te konfigurimi i ruajtur ose te standardi i zyrës.
3. Për të shtuar një kolonë që lexohet nga elementët, shkruaj një emër vetie ose etikete nën tabelë (për shembull `FireRating`, `Pset_DoorCommon.FireRating` ose emri i një etikete si `Ironmongery`) dhe kliko **Shto kolonë**. BimCraft lexon fillimisht grupet e vetive të elementit, pastaj ato të tipit të tij. Kur asnjë element nuk ka ende vlerë, e thotë; kolona plotësohet vetë sapo vendoset një vlerë.
4. Shkruaj një emër (për shembull "Tabela e dyerve sipas katit") dhe kliko **Ruaj si konfigurim**. Konfigurimi mbahet në skedarin e ndërtesës dhe bashkohet me listën e Tabelave me emrin e vet. Ndjek çdo ndryshim të modelit. **Hiq këtë konfigurim** e heq përsëri. Të dyja janë një hap në Zhbëj.

## Kliko një shifër për të zgjedhur nga çfarë erdhi

Kliko çdo rresht, ose çdo shifër të vetme, për të zgjedhur elementët prapa saj në planimetri dhe në 3D:

- një rresht zgjedh elementët e atij rreshti;
- një nëntotal ose total zgjedh gjithçka që mblidh, një titull grupi zgjedh grupin e vet;
- një shifër me elementet e vet zgjedh ata: **Zbritjet** e një tipi muri zgjedhin dyert dhe dritaret e tij, sipërfaqja e murit të një dhome zgjedh muret e saj.

E njëjta gjë funksionon në një dokument të bërë nga modeli: në pamje, kliko një shifër të një tabele.

## Eksporto

- **Shkarko Excel** ruan një fletë pune .xlsx. Gjatësitë, sipërfaqet, vëllimet dhe numërimet janë numra të vërtetë në njësinë që tregon kolona (këmbët dhe inçët mbeten tekst). Një fletë e dytë, **Elementet**, liston për çdo rresht GlobalId-të e elementeve prapa tij.
- **Kopjo për Google Sheets** vendos tabelën në kujtesën tënde si tekst të ndarë me tab. Në një Google Sheet, kliko qelizën A1 dhe ngjit. **Hap një Google Sheet të ri** hap `sheets.new`, adresën e Google-it për një fletë bosh, në llogarinë tënde Google. BimCraft nuk hyn në Google dhe nuk dërgon asgjë atje: ngjitja është e jotja.
- **Shkarko CSV** ruan tabelën ashtu si është paraqitur në ekran.

## Standardi i zyrës

Një zyrë mund të thotë një herë si paraqiten tabelat e saj. Aktivizo shtojcën **Politikat e parazgjedhura** ([Politikat e parazgjedhura](topic:default-policies)) dhe vendos, te **Cilësimet › Global › Politikat e parazgjedhura › Paraqitja e tabelës (standardi i zyrës)**:

| Politika | Çfarë bën |
|---|---|
| Grupo tabelat sipas | Niveli, Tipi, Dhoma ose pa grupim, për çdo tabelë që ka një kolonë të tillë |
| Totalet në tabela | Pa totale, një total në fund, ose një nëntotal nën çdo grup dhe një total |
| Titulli i tabelës | Një model, për shembull `{project}: {schedule}` |
| Titujt e kolonave | Siç shkruhen, NË SHKRONJA TË MËDHA ose Me Shkronja Të Mëdha |

Standardi zbatohet për çdo tabelë, kushdo e konfiguron: tabelat e thjeshta në panel, një konfigurim i ruajtur, një tabelë që konfiguron një asistent, eksportet dhe tabelat në një dokument. Një konfigurim që thotë vetë grupimin, totalet ose titullin e vet i mban; standardi plotëson pjesën tjetër. Paneli tregon cilat pjesë i vendosi standardi i zyrës. Politikat udhëtojnë në skedarin e Politikave të parazgjedhura me të tjerat.

## Të mirëdijtur

- Një konfigurim emëron tabelën e tij burimore dhe kolonat e tij; nuk mban asnjë numër. Numrat lexohen nga modeli çdo herë.
- Listat që nuk janë rreshta elementësh (montimet e mureve dhe legjenda e materialeve) nuk kanë paraqitje dhe eksport këtu.
- Një asistent mund ta bëjë të gjithë këtë për ty: shih [Lëre një asistent AI të punojë me modelin tënd](topic:assistants).
