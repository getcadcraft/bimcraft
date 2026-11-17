---
title: Darba stils, dublētie skati, pildspalvas uz papīra, Ziņot kā un veidnes
summary: Izvēlieties, kā BimCraft darbojas jūsu darba veidam, dublējiet jebkuru skatu kā atsevišķu kopiju vai saistītu skatu, glabājiet pildspalvu pārrakstus failā un drukājiet kā redzams vai caur pildspalvu tabulu, ziņojiet elementu kā citu IFC klasi un sāciet projektus no savām veidnēm.
keywords: darba stils, dublēt skatu, dublēt, kopēt skatu, atkarīgs skats, saistīts skats, patstāvīga kopija, skata kopija, pildspalvu pārrakstīšana, pildspalvas, līniju biezums, drukāt kā redzams, pildspalvu tabula, drukas stils, ctb, monohroms, pelēkskala, ziņot kā, ifc klase, pārklasificēt, prognozētais tips, vispārīgs modelis, plāksne kā ceļš, siena kā panelis, jumts kā rampa, projekta veidne, veidne, jauns no veidnes, saglabāt kā veidni, biroja standarts
from: 231d98b0
---

## Ko jūs darīsiet

Iestatiet BimCraft savam darba veidam, dublējiet skatus, drukājiet tos, kā sagaidāt, skaitiet elementus kā tie patiesībā ir un sāciet katru projektu no sava biroja veidnes.

## Izvēlieties darba stilu

1. Atveriet {{ui:Iestatījumi}} un cilni {{ui:BimCraft}}. Atrodiet {{ui:Darba stils}}.
2. Izvēlieties vienu:
   - {{ui:Katram skatam savs}} (pirmā izvēle): dublēts skats kopē savas anotācijas, un tās paliek šim skatam; lapas tiek drukātas tā, kā tās redzamas ekrānā.
   - {{ui:Kopīgas anotācijas un pildspalvu tabulas}}: dublētie skati kopīgo anotācijas; drukāšana notiek caur pildspalvu tabulu.
3. Zem izvēles ir četras lietas, ko tā iestata. Mainiet jebkuru no tām atsevišķi; tad stils tiek rādīts kā {{ui:Pielāgots}}.

Darba stils tiek glabāts šajā pārlūkā, tāpat kā darba vietas izkārtojums. Veidne to pārnes uz jauniem modeļiem.

## Dublēt skatu

1. Projektu pārlūkā {{ui:Projektu pārlūks}} katram stāvu plānam, griestu plānam, izsaukumam, fasādei un griezumam ir poga {{ui:Dublēt}} (divas lapas).
2. Piešķiriet kopijai nosaukumu un izvēlieties, kā tā darbosies:
   - {{ui:Patstāvīga kopija}}: tās zīmējumi, izmēri, apgriezums, paslēptie elementi un pildspalvas tiek kopēti un paliek tikai tās. Rediģējot jebkuru skatu, otrs nekad nemainās, tāpēc skats izdotā lapā paliek tāds, kāds tas tika izdots.
   - {{ui:Saistīts}}: tas rāda to pašu skatu ar vienu anotāciju un iestatījumu kopu.
3. Kopija ir uzskaitīta sadaļā {{ui:Dublētie skati}}. Noklikšķiniet uz tās, lai to atvērtu; josla virs plāna norāda, ka tā ir kopija, un ar {{ui:Augšup}} var atgriezties pie sava skata.
4. Tās slīdņa poga atver tās iestatījumus: nosaukumu, {{ui:Skata diapazons}} (patstāvīgai kopijai ir savs), {{ui:Padarīt par patstāvīgu kopiju}} saistītai kopijai un {{ui:Dzēst}}.

Fasāžu un griezumu kopijas tiek novietotas uz jūsu lapām, tāpat kā skati, no kuriem tās radušās. Dublēšana ir viens atsaukšanas solis, un kopijas tiek glabātas IFC kopā ar izsaukumiem.

## Pildspalvas, kas glabājas kopā ar skatu, un drukāšana kā redzams

1. Ieslēdziet {{ui:Zīmēšana}} un izvēlieties {{ui:Pildspalvas}}.
2. {{ui:Priekš}} tagad uzskaita katru kategoriju: sienas, durvis un logus, plāksnes, jumtus, kolonnas, kāpnes, mēbeles un pārējo, kā arī zīmējumus un izmērus.
3. {{ui:Lietot}} saglabā pildspalvu IFC kopā ar skatu, kas tiek rādīts: plānu, griestu plānu, izsaukumu vai dublētu skatu. Pildspalvas, kas izveidotas pirms 0.9, tika glabātas pārlūkā; {{ui:Saglabāt šos failā}} tās pārvieto.
4. Lapas un PDF zīmē katru pildspalvu tā, kā tā redzama ekrānā.

Lai drukātu caur pildspalvu tabulu, iestatiet {{ui:Drukāt}} rindā {{ui:Pildspalvas}} uz {{ui:Caur pildspalvu tabulu}}, pēc tam izvēlieties tabulu (krāsu, monohromu vai pelēkskalas) vai {{ui:Rediģēt pildspalvu tabulu…}}: katrai krāsai tiek piešķirta krāsa, biezums un rastrēšana, ar kādu tā tiek drukāta. Tabula ir CadCraft drukas stila fails, tāpēc {{ui:Importēt…}} pieņem tabulu, kas izveidota CadCraft lietotnē, un {{ui:Eksportēt}} atgriež tabulu. Modelis saglabā savu izvēli; ja izvēles nav, lemj darba stils.

## Ziņot elementu kā citu klasi

Plāksne, zīmēta kā ceļš, siena, izmantota kā panelis, vai jumts, veidots kā rampa: paturiet rīku, ar kuru to zīmējāt, un ziņojiet to kā to, kas tas patiesībā ir.

1. Atlasiet elementu un atveriet {{ui:Rekvizīti}}. Atveriet {{ui:Ziņot kā}}.
2. Meklēšanas laukā ierakstiet, lai atrastu klasi, kas atbilst formai; atlasiet to un tās iepriekš noteikto tipu. Savam tipam izvēlieties USERDEFINED un piešķiriet tam nosaukumu.
3. {{ui:Lietot}} (viens atsaukšanas solis). {{ui:Notīrīt}} ziņo to atkal kā zīmētu.

Joprojām rediģējat to ar rīku, ar kuru tas zīmēts. Saglabātais IFC to raksta kā ziņoto klasi, tāpēc citas programmas, {{ui:Daudzumi}} apjomu aprēķins, meklēšana, Krāsot pēc, modeļu pārbaudes un {{ui:Problēmas}} to skaita kā šo klasi. Specifikācijas no sienu specifikācijas izslēdz sienu, kas ziņota kā panelis, un {{ui:Elementi pēc ziņotās klases}} uzskaita katru no tiem. Tas darbojas IFC4 un IFC2X3 failos; sarakstā ir tikai tās klases, ko ietver faila IFC versija. Durvis, logi, kāpnes, telpas un līmeņi paturē savu klasi.

## Saglabāt projektu kā veidni un sākt no tās

1. Ar atvērtu projektu noklikšķiniet uz {{ui:Saglabāt kā veidni}} blakus {{ui:Saglabāt}}.
2. Piešķiriet nosaukumu. Atzīmējiet {{ui:Lejupielādēt arī veidnes failu}}, lai kopīgotu to kā IFC failu, un {{ui:Sākt jaunus modeļus no tās}}, lai padarītu to par savu noklusējumu.
3. Veidnē saglabājas līmeņi, skatu veidnes un skatu iestatījumi, dublētie skati un izsaukumi, zīmējumi, pildspalvas un pildspalvu tabula, birkas, ģimenes un tipi, lapas, lapu izmēri, titulblokki un darba stils. Sienas, grīdas, durvis un visi pārējie modeļa elementi netiek iekļauti.
4. Noklikšķiniet uz {{ui:Jauna ēka}} un izvēlieties to laukā {{ui:Sākt no}}, vai izvēlieties {{ui:Veidnes fails…}} veidnei, ko saņēmāt. Jaunajam projektam ir savs nosaukums un sava projekta identitāte; viss pārējais ir tāds, kāds tas ir veidnē.

:::note
Veidnes tiek glabātas šajā pārlūkā. Kopīgās komandu veidnes, ko kopīgo caur CadCraft Studio, vēl nav izveidotas: tā vietā nosūtiet veidnes failu.
:::
