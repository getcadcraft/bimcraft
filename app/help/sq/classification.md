---
title: Kodet e klasifikimit (Uniclass, OmniClass, UniFormat)
summary: Jepni një kod klasifikimi çdo elementi dhe tipi, zgjidhni cilat sisteme përdor një projekt, kërkoni tabelat Uniclass që vijnë me aplikacionin, ngarkoni tabelat e licencuara të zyrës suaj, dhe shfaqni kodet në tabela. Kodet shkruhen në skedarin IFC për softuerë të tjerë.
keywords: klasifikim, klasifiko, kod, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabelë, kod elementi, kod tipi, kod parazgjedhje, IfcClassification, IfcClassificationReference, cobie, kolonë tabele, csv, licencë, license
from: 222b94cd
---

## Çfarë do të bëni

Vendosni një kod klasifikimi te muret, dyshemetë, çatitë, dyert, dritaret dhe çdo gjë tjetër në model, në deri tre sisteme njëkohësisht: Uniclass, OmniClass dhe UniFormat. Disiplina të tjera dhe softuerë të tjerë mbështeten te kodi, jo te emri, ndaj kodet ruhen në skedarin IFC si referenca klasifikimi që çdo program BIM i lexon.

## Jepni një kod elementit

1. Zgjidhni një element (ose disa) dhe hapni **Vetitë**. Hapni seksionin {{ui:Classification}}.
2. Shkruani kodin në kutinë e sistemit të tij dhe shtypni Enter. Me një listë kodesh të ngarkuar, shkruani një pjesë të kodit ose disa fjalë ("curtain wall") dhe zgjidhni nga përputhjet: titulli i kodit plotësohet për ju.
3. {{ui:Applies to}} thotë ku shkon kodi: **Ky element**, ose **Tipi i tij (çdo element i tipit)**. Një kod te një tip muri lexohet nga çdo mur i atij tipi, edhe ata që do të vizatoni më vonë.
4. {{ui:Clear}} heq një kod.

Nën çdo kod seksioni thotë nga vjen: i vendosur te ky element, nga tipi i tij, ose parazgjedhja e projektit për klasën e tij. Kodi i vetë elementit fiton gjithmonë mbi atë të tipit, dhe ai i tipit mbi parazgjedhjen. Kur janë zgjedhur disa elementë, një kuti që thotë "varies" (ndryshon) do të thotë se nuk ndajnë një kod të vetëm; shkrimi i një kodi ia jep të gjithëve. Çdo ndryshim është një hap zhbërjeje.

Një kod mund të shkruhet gjithmonë, qoftë ose jo i ngarkuar një listë. Nëse nuk duket si kod i atij sistemi, ose nuk është në listën e ngarkuar, një ndihmë e thotë këtë dhe kodi mbahet ashtu siç e shkruat.

## Zgjidhni sistemet e projektit

Hapni **Të dhënat** në shiritin e modelit dhe zgjidhni {{ui:Classification}} (ose {{ui:Project classification…}} në seksionin Vetitë).

- Shënoni sistemet që përdor ky projekt. Vetitë atëherë shfaq vetëm ato.
- **Uniclass**: tabelat Elementet/ funksionet (EF), Sistemet (Ss) dhe Produktet (Pr) vijnë me aplikacionin. Janë © NBS, të licencuara Creative Commons Attribution-NoDerivatives 4.0, dhe kalohen të pandryshuara. Dialogu shfaq edicionin e çdo tabele dhe ditën kur u lexua. Nuk janë tabelat më të reja: botuesi nxjerr të reja çdo tremujor në faqen e vet.
- **OmniClass** dhe **UniFormat**: asnjë listë kodesh nuk vjen me aplikacionin, sepse botuesi i tyre nuk lejon që tabelat të kalohen pa licencë. Shkruani çdo kod, ose ngarkoni tabelën e licencuar të zyrës suaj.
- {{ui:Load a table (CSV)…}} lexon tabelën e zyrës suaj nga një skedar CSV me një kolonë kodi dhe një kolonë titulli (një rresht kokë me emrin Code, Number ose Identifier dhe Title, Name ose Description gjendet vetë; pa të përdoren dy kolonat e para). Tabela mbetet në këtë shfletues dhe nuk futet kurrë në skedarin e projektit. Në skedar ruhen vetëm kodet që caktoni. Mund të ngarkoni një tabelë Uniclass më të re në të njëjtën mënyrë.
- {{ui:Give elements a default code by their class}} i jep çdo muri, dysheme, çatie, dere, dritareje, shkalle, rampe, kolone, trau dhe mobiljeje një kod fillestar Uniclass nga tabela Elementet/ funksionet kur nuk ka të vetin. Elementët që vizatoni më pas e marrin gjithashtu.
- {{ui:Show the codes as columns in the schedules}} shton një kolonë për çdo sistem te tabelat Dyert, Dritaret, Muret sipas tipit dhe Dhomat, dhe te CSV-ja e tyre. Një rresht me disa elemente shfaq "varies" (ndryshon) kur kodet e tyre ndryshojnë.

## Gjëra të dobishme

- Kodet parazgjedhje janë zgjedhja fillestare e vetë CadCraft, jo e botuesit, dhe nuk janë kontrolluar nga një praktik. Kontrollojini me standardin e projektit tuaj.
- Në skedar një parazgjedhje është një klasifikim i vërtetë, i shënuar me emrin e lidhjes "CadCraft default", dhe largohet sapo elementi ose tipi i tij merr një kod të vetin.
- Kodet që një skedar i importuar ka tashmë lexohen dhe shfaqen, me çfarëdo drejtshkrimi që përdori programi tjetër për emrin e sistemit. Kodet e çdo sistemi tjetër (të zyrës) listohen dhe lihen ashtu.
- Kodet lexohen përsëri kur skedari hapet sërish, këtu ose në një program tjetër. Ato merren edhe në eksportin IFC5 alpha (IFCX) kur ai opsion laboratori është aktiv, me përjashtim të një kodi të vendosur në një çati.
- Nuk është ndërtuar: një pemë për shfletimin e një tabele nivel pas niveli, kode te nivelet dhe dhomat si parazgjedhje projekti, dhe kontrolli i një kodi kundrejt edicionit të përmendur në skedar.
