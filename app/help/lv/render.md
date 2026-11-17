---
title: Attēla renderēšana no modeļa
summary: Izveidojiet dienas gaismas attēlu no 3D skata: debesis, saule jūsu vietas platuma grādā, mīkstas ēnas, stikla logi; ar WebGPU ceļu izsekots attēls grafikas kartē ar debesīm, kameru, gaismu sajaukšanu, krāsu korekciju, miglu un renderēšanas rindu.
keywords: renderēt, iestatījums, iestatījumi, ainas iestatījums, interjers, eksterjers, griezuma skats, nakts, viens klikšķis, renderēšana, ceļu izsekošana, staru izsekošana, globālais apgaismojums, atspulgi, refrakcija, augsta kvalitāte, foto, fotoreālistisks, reālistisks, attēls, bilde, png, statisks, debesis, saule, dienas gaisma, ēnas, mīkstas ēnas, apkārtējās aizsegšanas ēnas, stikls, logi, metāls, materiāli, ekspozīcija, spilgtums, apmācies, krēsla, studija, prezentācija, vizualizācija, webgpu, trokšņu samazināšana, fiziskas debesis, hdri, ies, lauka dziļums, panorāma, baltās krāsas balanss, gaismas sajaukšana, renderēšanas elementi, exr, 16 bitu png, migla, kaustikas, renderēšanas rinda
from: beb74cc7
---

{{ui:Renderēt}} rīkjoslā izveido attēlu no 3D skata, kas izskatās pēc dienas gaismas: debesis, saule tur, kur to novieto vietas platums, mīkstas ēnas, gaisma no visām debesīm, kas tumšo stūrus, un krāsas, kas var izskatīties pēc stikla vai metāla. Modelis un fails netiek mainīti.

## Renderēt skatu

1. Iestatiet 3D skatu, kā vēlaties attēlu: orbitējiet un tuviniet, paslēpiet stāvus vai elementus, kurus nevēlaties, un iestatiet [griezumu](topic:section-plane), ja attēlam jārāda griezums.
2. Noklikšķiniet {{ui:Renderēt}} rīkjoslā.
3. Izvēlieties {{ui:Aina}}, ja nospiestā nav tā, ko vēlaties (skatiet [Ainu iestatījumi](topic:render#scene-presets-a-good-picture-in-one-click)), izvēlieties {{ui:Izmērs}}, tad noklikšķiniet {{ui:Renderēt}} dialogā.

   Attēls aizpildās renderēšanas laikā un ar katru kārtu kļūst gludāks. {{ui:Apturēt}} (vai {{key:Esc}}) beidz to agrāk un saglabā līdz šim paveikto attēlu.

4. Noklikšķiniet {{ui:Saglabāt}}, lai lejupielādētu to kā PNG, vai {{ui:Saglabāt kā}} citam formātam (skatiet [Attēla saglabāšana](topic:render#save-the-picture)). To nosauc pēc modeļa faila.

:::tip
Sāciet ar {{ui:Melnraksts}} pie {{ui:Skata izmērs}}, lai pārbaudītu kameru, tad renderējiet {{ui:Labs}} vai {{ui:Labākais}} lielākā izmērā galīgajam attēlam.
:::

## Ainu iestatījumi: labs attēls ar vienu klikšķi

Dialoga augšā ir četras {{ui:Aina}} pogas. Katra iestata debesis, spilgtumu, zemi, malu līnijas, kvalitāti un sauli ar vienu klikšķi, tāpēc nav jāmācās nekas pirms pirmā attēla. Noklikšķiniet vienu, tad {{ui:Renderēt}}.

| Aina | Ko iestata | Izmantojiet to |
|---|---|---|
| {{ui:Ārpuse}} | Skaidras debesis, modeļa pašas saule, zeme ieslēgta | Ēka no ārpuses |
| {{ui:Iekšpuse}} | Apmācies debess (vienmērīga gaisma, bez stingriem saules laukumiem), par pusi stopa spilgtāks | Skats no telpas iekšpuses |
| {{ui:Griezuma skats}} | Balta studija, bez zemes, malu līnijas ātrajā renderēšanā | Modelis, ko nogriež griezums |
| {{ui:Nakts}} | Saule lejā (pusnakts vidusziemā vietas puslodē), par vienu stopu spilgtāks | Lampas, kas apgaismo modeli. Bez lampām attēls ir tumšs |

- {{ui:Izvēlēties šim skatam}} izvēlas jūsu vietā: {{ui:Griezuma skats}}, kad griezuma nogriezums ir ieslēgts, {{ui:Iekšpuse}}, kad kamera atrodas modeļa iekšpusē, citādi {{ui:Ārpuse}}. Pirmo reizi atverot dialogu, tas sākas šādi pats.
- Katrs iestatījums paliek zemāk un to var mainīt. Kad maināt vienu, ko aina iestata, neviena poga nav nospiesta, un līnija zem pogām saka, ka iestatījumi ir jūsu pašu. Noklikšķiniet ainu vēlreiz, lai atjaunotu tās vērtības.
- Aina nemaina dzinēju, režīmu, izmēru, materiālus, kameru vai lampas.

:::note
Ainas dod tās pašas vērtības ModelCraft un BimCraft. Gatavā attēla izskats atkarīgs no jūsu modeļa un grafikas kartes.
:::

## Kas redzams attēlā

Tas, ko 3D skats rāda cietu: paslēptie un caurspīdīgie elementi, paslēptie stāvi un paslēptie modeļi tiek izlaisti, un telpas rādās tikai tad, kad {{ui:Telpas}} ir ieslēgtas. Griezuma plakne vai griezuma kaste nogriež attēlu tāpat kā skatu. Elementi rādās savās krāsās: krāsošana pēc īpašības (cilne {{ui:Krāsa}}) netiek izmantota.

## Iestatījumi

| Iestatījums | Ko tas dara |
|---|---|
| {{ui:Izmērs}} | Skata izmērs, divreiz skata izmērs, Full HD, 4K vai kvadrāts |
| {{ui:Forma}} | {{ui:Ātrais}} vai {{ui:Augsta kvalitāte (ceļa izsekošana)}} (zemāk) ar savu {{ui:Laika ierobežojums}} |
| {{ui:Kvalitāte}} | Cik kārtu (augstā kvalitātē: paraugu) tiek vidēts: {{ui:Melnraksts}} 16, {{ui:Labs}} 64, {{ui:Labākais}} 256. Vairāk kārtu nozīmē gludākas ēnas un malas un ilgāku laiku |
| {{ui:Debesis}} | {{ui:Skaidras debesis}}, {{ui:Apmācies}}, {{ui:Krēsla}} vai {{ui:Balta studija}} (vienkāršs balts fons) |
| {{ui:Saule}} | 21. jūnijs plkst. 15:00 platuma grādā, ko fails dod savai vietai (IfcSite), pagriezts pret modeļa patieso ziemeļu virzienu. Atzīmējiet {{ui:Šim attēlam izmantot citu datumu un laiku}}, lai izvēlētos citu laiku |
| {{ui:Spilgtums}} | Gaišāks vai tumšāks, soļos (stopos) |
| {{ui:Zeme zem modeļa}} | Zeme modeļa zemākajā punktā, kas uztver ēnas un izplūst horizontē |
| {{ui:Zīmēt malas}} | Zīmē elementu malas plāni pāri attēlam |

Kad saule ir zem horizonta izvēlētajā laikā, tas ir nakts: debesis kļūst tumšas un modeļa lampas to apgaismo.

## Lampas

Katrs gaismeklis modelī ir lampa attēlā: gaismekļi IFC failā (IfcLightFixture vai elements, kas tipizēts kā gaismeklis), tostarp tie, ko jūs novietojat no bibliotēkas. Katra apgaismo no tieši zem gaismekļa. Kad failā ir norādīta gaismekļa jauda, tā spilgtums seko no tās; citādi tas ir 800 lūmeni, silti balts.

Dialogs uzskaita lampas zem {{ui:Lampas}}: atzīmējiet vienu, lai to izslēgtu, vai ierakstiet tās spilgtumu lūmenos. Šīs izmaiņas tiek saglabātas IFC (gaismekļa `CadCraft_Light` īpašību kopā, kur tās var mainīt arī Rekvizītos), un {{key:Ctrl+Z}} tās atsauc.

Kad fails nesaka neko par to, kur atrodas tā vieta, saule tiek novietota 40° ziemeļu platumā, un dialogs to saka. Laiks ir vietas pulksteņa laiks, aprēķināts no tās garuma grāda, tāpēc tas var būt par stundu nobīdīts tur, kur pulksteņi ir iestatīti citādi.

Šie iestatījumi tiek saglabāti šajā pārlūkprogrammā nākamajam attēlam. Tie netiek saglabāti IFC failā.

## Stikls un citi materiāli

Zem {{ui:Materiāli}} katrai krāsai ekrānā ir izskats: {{ui:Matēts}}, {{ui:Satīns}}, {{ui:Spīdīgs}}, {{ui:Metāls}}, {{ui:Pulēts metāls}}, {{ui:Stikls}} vai {{ui:Apledojis stikls}}. Krāsas, ko IFC fails padara caurspīdīgas (piemēram, logu stiklojums), sākas kā {{ui:Stikls}}.

:::note
Režīmā {{ui:Ātrais}} stikls un metāls atspoguļo debesis, nevis pārējo modeli, un gaisma nelūst caur stiklu. Režīms {{ui:Augsta kvalitāte (ceļa izsekošana)}} zemāk dara abus.
:::

## Augsta kvalitāte

Izvēlieties {{ui:Forma}} › {{ui:Augsta kvalitāte (ceļa izsekošana)}} attēlam, kas seko gaismai tā, kā to redz kamera:

- gaisma atstarojas starp virsmām, tāpēc telpa, kas apgaismota caur logu vai ar lampu, ir apgaismota visapkārt, un krāsas izplūst uz kaimiņiem;
- stikls ir īsts stikls: gaisma lūst caur to, un tas atspoguļo modeli;
- metāls un pulētas virsmas atspoguļo pārējo modeli;
- gaismas paneļi apgaismo kā paneļi, ar mīkstām ēnām.

Tas ir daudz lēnāks nekā {{ui:Ātrais}}: katrā kārtā tiek izsekota gaisma katram pikselim no jauna. Attēls sākas graudains un kļūst skaidrs, kad paraugi uzkrājas, tāpēc sāciet mazi ({{ui:Skata izmērs}}, {{ui:Melnraksts}}) un izvēlieties {{ui:Laika ierobežojums}}: kad tas beidzas, līdz šim paveiktais attēls tiek saglabāts. {{ui:Apturēt}} to arī saglabā. Pirmā kārta gaida, kamēr pārlūks sagatavo ceļu izsekotāju.

Kur pārlūkā ir WebGPU, ceļu izsekotājs ir CadCraft pats un darbojas grafikas kartē; līnija zem attēla to saka. Pēc {{ui:Apturēt}} vai laika ierobežojuma {{ui:Turpināt}} turpina ar to pašu attēlu, līdz tam ir visi paraugi; mainot iestatījumu vai nospiežot {{ui:Renderēt}} vēlreiz, sākas no jauna. Bez WebGPU attēls tiek izsekots ar WebGL (līnija to saka), un {{ui:Turpināt}} netiek piedāvāts.

:::linux
Firefox un lielākā daļa Chrome iestatījumu Linux vēl nav ar WebGPU, tāpēc augsta kvalitāte tur izmanto WebGL.
:::

Šajā režīmā malas netiek zīmētas, tekstūras rāda savu krāsu un raupjumu, bet ne reljefu, un griezums tiek veikts uz modeļa, pirms attēls sākas.

{{ui:Trokšņu samazināšana (notīra graudiņus pēc paraugiem)}} pēc noklusējuma ir ieslēgta: kad attēls ir gatavs vai apturēts, atlikušos graudiņus notīra neironu tīkls, kas tam izveidots (Intel Open Image Denoise publicētais tīkls, palaists jūsu datorā: grafikas kartē, citādi procesorā). {{ui:Rādīt}} › {{ui:Attēls pirms trokšņu samazināšanas}} rāda to, kā tas renderēts.

## Debesis un gaismas profili grafikas kartē

Ar WebGPU augsta kvalitāte ir vēl divas debesis:

- {{ui:Fiziskas debesis}} aprēķina dienas gaismu no saules augstuma: dziļi zila virs galvas, bāla josla horizontā un saule, kas kļūst siltāka un blāvāka, kad ir zema. {{ui:Miglainība}} iet no ļoti skaidras dienas (2) līdz miglainai (10).
- {{ui:Debesu attēls (HDRI)}} apgaismo modeli ar panorāmas attēlu no reālas vietas. {{ui:Izvēlieties attēlu…}} paņem equirectangular `.hdr` vai `.exr` failu; {{ui:Pagriezt}} to pagriež ap modeli, un {{ui:Attēla spilgtums}} padara to gaišāku vai tumšāku. Attēlam ir sava saule, tāpēc modeļa saule netiek pieskaitīta. Tas tiek saglabāts tikai tik ilgi, cik lapa ir atvērta: pēc atkārtotas atvēršanas izvēlieties to vēlreiz.

Katra lampa sarakstā {{ui:Lampas}} var saņemt ražotāja gaismas profilu: {{ui:IES profils…}} nolasa IES (LM-63) failu, un lampa tad met gaismu tā, kā to dara šis gaismeklis (šaurs lejupvērsts gaismeklis, sienas apgaismotājs). Katra lampa ar šo nosaukumu izmanto to, un lampa paliek ar savu spilgtumu. Noklikšķiniet profila nosaukumu, lai pārtrauktu to izmantot.

Skaidrs stikla logs palīdz debesu gaismai atrast ceļu uz telpu.

Režīms {{ui:Ātrais}} un WebGL ceļu izsekotājs rāda {{ui:Fiziskas debesis}} un {{ui:Debesu attēls (HDRI)}} kā skaidras debesis un ignorē gaismas profilus.

## Kamera

{{ui:Kamera}} iestata attēlu kā fotogrāfiju:

- {{ui:Ekspozīcija}}: paturiet {{ui:Spilgtuma slīdnis}} vai izvēlieties {{ui:Kameras iestatījumi}} un iestatiet {{ui:Diafragma (f-numurs)}}, {{ui:Slēdža ātrums}} un {{ui:ISO}} kā uz kameras; blakus tiem EV ir parastā ekspozīcijas vērtība. f/16 pie 1/100 s un ISO 100 atbilst saulainai dienai; tumšākai ainai vajag platāku diafragmu, lēnāku slēdzi vai augstāku ISO. Tas darbojas visos režīmos.
- {{ui:Lauka dziļums}} aizmiglo to, kas ir tuvāk vai tālāk par {{ui:Fokusa attālums (m)}}, kā to darītu objektīvs ar šo f-numuru (atstājiet tukšu, lai fokusētos uz to, kas ir skata vidū); {{ui:Diafragmas forma}} dod izplūdušiem spīdumiem apļveida vai lāpstiņu formu.
- {{ui:Divpunktu perspektīva (vertikālās līnijas paliek vertikālas)}} izlīdzina kameru un nobīda attēlu, kā to dara arhitektūras tilt-shift objektīvs, tāpēc sienas nesliecas, kad skatāties uz augšu vai uz leju uz ēku.
- {{ui:Baltās krāsas balanss}} nosaka, kura gaismas krāsa rādās kā balta: zemāka (piemēram, 3000 K) siltai lampu gaismai, augstāka ēnai un apmācītām dienām.
- {{ui:Projekcija}}: {{ui:360° panorāma}} veido 2:1 attēlu no visa apkārt kamerai panorāmu skatītājiem; {{ui:360° stereo panorāma}} sakrauj kreisās un labās acs panorāmu austiņām; {{ui:Kuba karte (6 virsmas)}} veido sešus kvadrātveida skatus 3 × 2 režģī. Platums nāk no {{ui:Izmērs}}.

Projekcija, lauka dziļums, divpunktu perspektīva un baltās krāsas balanss prasa ceļu izsekotāju grafikas kartē (WebGPU), tāpēc tie rādās tikai {{ui:Augsta kvalitāte (ceļa izsekošana)}}.

## Pabeidziet attēlu

{{ui:Attēls}} krāso augstas kvalitātes attēlu kā fotogrāfiju, un katra vadība maina gatavo attēlu uzreiz, bez jaunas renderēšanas:

- {{ui:Izskats (skata pārveidošana)}}: {{ui:ACES filmiskais}} (attēls kā iepriekš), {{ui:AgX}} (mīkstāks, saglabā krāsu ļoti spilgtā gaismā), {{ui:Filmiskais}} (maiga filmas līkne) vai {{ui:Standarta}} (vienkāršs, spilgtā gaisma nogriežas līdz baltam).
- {{ui:Kontrasts}} un {{ui:Gaismas laukumu saspiešana}} (atgriež detaļas ļoti spilgtās vietās).
- {{ui:Mirdzums}} (maiga spīduma aura ap spilgtu gaismu), {{ui:Atspulgs}} ar {{ui:Atspulgu svītras}} (zvaigžņu stari no spilgtākajiem punktiem) un {{ui:Vinjete}} (tumšāki stūri).
- {{ui:Krāsu tabula (.cube)…}} pielieto krāsu korekciju no `.cube` faila ar savu {{ui:Krāsu tabulas stiprums}}; tāpat kā debesu attēls, tā tiek saglabāta tikai tik ilgi, cik lapa ir atvērta.

## Attēla saglabāšana

{{ui:Saglabāt kā}} blakus {{ui:Saglabāt}} izvēlas failu: {{ui:PNG}}, {{ui:JPEG}} vai {{ui:WebP}} kopīgošanai (JPEG un WebP tikai tur, kur pārlūks tos var rakstīt), un pēc augstas kvalitātes renderēšanas grafikas kartē arī:

- {{ui:PNG, 16 bitu}}: krāsotais attēls ar smalkākiem soļiem starp toņiem, drukai vai turpmākai apstrādei.
- {{ui:EXR, visi slāņi (32 bitu peldošais punkts)}}: attēls kā renderēts (lineāra gaisma, bez krāsošanas) ar katru renderēšanas elementu un gaismu grupu kā atsevišķu slāni, kompozīcijas programmām.
- {{ui:Renderēšanas fails (.ccrender, vēlāk vēlreiz labošanai)}}: viss, kas dialogam vajadzīgs, lai vēlreiz sajauktu un krāsotu attēlu. {{ui:Atvērt renderēšanas failu…}} atgriež to ar tā sajaukumu un krāsojumu, bez renderēšanas.

## Sajauciet gaismas pēc renderēšanas

Ieslēdziet {{ui:Gaismas sajaukšana (mainiet katras gaismas krāsu un spilgtumu pēc renderēšanas)}} pirms nospiežat {{ui:Renderēt}}. Kad attēls ir gatavs (vai apturēts), {{ui:Sajaukt attēlu}} uzskaita tā gaismas grupās: debesis, saule un lampas pēc nosaukuma (katra lampa ar vienādu nosaukumu ir viena grupa). Izslēdziet grupu, piešķiriet tai krāsu vai padariet to gaišāku vai tumšāku, un attēls mainās uzreiz, bez jaunas renderēšanas. {{ui:Saglabāt sajaukumu}} saglabā sajaukumu ar nosaukumu, ko vēlāk izvēlēties; {{ui:Kā renderēts}} atgriež attēlu tādu, kāds tas tika veidots. {{ui:Saglabāt}} saglabā sajaukto attēlu.

{{ui:Renderēšanas elementi (albedo, normāles, dziļums, difūzā, spīduma, caurlaidība, emisija, ID)}} saglabā arī attēla daļas. {{ui:Rādīt}} pārslēdz skatu uz vienu no tām: virsmu krāsas (albedo), normāles, dziļumu, difūzo, spīduma un caurlaidīgo gaismu (katru tiešo un netiešo), to, kas spīd, un debesis, kā arī krāsu katram objektam vai materiālam maskām.

Abi saglabā papildu slāņus grafikas kartē. Lielos izmēros grafikas kartei var nepietikt vietas; dialogs to saka, un mazāks izmērs strādā.

## Migla, dūmi, troksnis un kaustikas

Tie atrodas {{ui:Migla, dūmi un troksnis}} un darbojas {{ui:Augsta kvalitāte (ceļa izsekošana)}} režīmā grafikas kartē; citi dzinēji tos izlaiž.

- {{ui:Migla un dūmaka}} piepilda gaisu līdz augstumam ar miglu, ko apgaismo saule, debesis un lampas. {{ui:Cik tālu var redzēt, metros}} nosaka, cik biezs tas ir (apmēram 100 m ir viegla dūmaka, 20 m biezs migla), {{ui:Miglas augstums virs zemes, metros}} ir, kur tā beidzas, un {{ui:Gaismas stari}} ir, cik lielā mērā migla spīd uz gaismas pusi. Saules gaisma atstāj miglu tās augšā, tāpēc, kur saule iekļūst caur logu vai starp ēkām, to redzat kā gaismas starus.
- {{ui:Dūmi vai mākonis}} pievieno vienu tilpumu ar dūmiem vai mākoni, kas apgaismots kā migla. {{ui:Veids}} ir {{ui:Mākonis}}, {{ui:Dūmu stabs}} vai {{ui:No tilpuma faila (.ccvol)}}, CadCraft pašu režģa formāts. {{ui:Detalizācija}} un {{ui:Variācija}} maina izveidotu mākoni vai stabu; {{ui:Garākās malas izmērs metros (0 = modeļa izmērs)}}, {{ui:Pārvietot X (m)}}, {{ui:Pārvietot Y (m)}}, {{ui:Pārvietot Z (m)}} un {{ui:Pagriezt}} to novieto (tas sākas modeļa vidū); {{ui:Biezums}} padara to blīvāku, {{ui:Uzspīdums uz priekšu}} padara to gaišāku virzienā uz gaismu, un {{ui:Krāsa}} to iekrāso. Tilpuma fails tiek saglabāts tikai tik ilgi, cik lapa ir atvērta, tāpat kā debesu attēls.
- {{ui:Apturēt agrāk, kur attēls ir tīrs (adaptīvā izlase)}} nedod vairāk paraugu pikseļiem, kas jau nostabilizējušies. {{ui:Pieļaujamais troksnis}} ir, cik daudz graudiņu paliek, kad pikselis apstājas. Līnija zem attēla saka, cik paraugu katrs pikselis vidēji saņēma.
- {{ui:Kaustikas (gaisma, ko lūst stikls vai atstaro spoguļi)}} izseko gaismu no lampām un saules, tāpēc spilgtais plankums zem stikla bumbas vai spoguļa gaismas uz sienas iznāk tīrs, nevis graudains. Tās ir izslēgtas, kamēr ir ieslēgta migla, dūmi, gaismas sajaukšana vai renderēšanas elementi, un tās ir paredzētas attēliem, nevis 360° attēliem.

## Renderēšanas rinda

{{ui:Renderēšanas rinda}} dialogā: {{ui:Pievienot šo attēlu rindai}} saglabā attēla iestatījumus un skatu, un {{ui:Sākt rindu}} renderē, kas gaida, vienu pēc otra, šajā datorā. Aizverot lapu, rinda paliek; atveriet to pašu modeli, lai turpinātu. {{ui:Saglabāt}} lejupielādē gatavo; {{ui:Noņemt}} un {{ui:Notīrīt pabeigtos}} sakopj sarakstu. Rinda renderē augstā kvalitātē, tāpēc tai vajag WebGPU.

## Cik ilgi tas aizņem

Attēls tiek veidots jūsu datorā ar tā grafikas karti; nekas netiek augšupielādēts. Laiks aug ar kārtām un pikseļiem: {{ui:Labākais}} ir 16 reizes vairāk kārtu nekā {{ui:Melnraksts}}, un 4K attēls ir apmēram četras reizes vairāk pikseļu nekā Full HD. Lieli modeļi aizņem vairāk laika katrā kārtā.
