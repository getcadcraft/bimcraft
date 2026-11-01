---
title: BimCraft'i ekraan
summary: Ülevaade igast ribast, paneelist ja nupust nende ekraanil oleva nime järgi ning sellest, kuidas ekraan iga failitüübi puhul muutub.
keywords: ekraan, paigutus, paneelid, tööriistariba, liides, ui, ekskursioon, omaduste paneel, brauser, rakendusriba
from: 2eb01ec2
---

BimCraft'i ekraanil on riba üleval ning selle all kolm ala: vasakul paneel, keskel lava ja paremal paneel {{ui:Omadused}}. Mis iga alal kuvatakse, sõltub sellest, mida avasid: IFC-mudel, projekti- või perefail, joonis või kaust.

## Rakendusriba

Peen riba üleval kuulub CadCrafti saidile, mitte BimCraftile endale. Vasakult paremale:

- CadCrafti märk: viib CadCrafti avalehele.
- Rakenduse nimi ja versioonimenüü. Sisemises versioonis näitab see, millist versiooni käitad, ning lubab vahetada välja antud versiooni.
- {{ui:Teave BimCraft'i kohta}}: rakenduse leht saidil.
- {{ui:Sätted}}: BimCraft'i enda sätted ja need, mida kõik rakendused jagavad. Vaata [BimCraft'i sätted](topic:settings).
- {{ui:Täisekraan}}: tsükkel ekraanirežiimide vahel. Vaata [Ekraanirežiimid](topic:workspace#screen-modes) allpool.
- {{ui:Paber}} ja {{ui:Mudel}}: heledad ja tumedad teemad. 3D-vaade ja 2D-joonised järgivad valitud teemat.

## Vasak paneel

Vasak paneel algab alati jaotisega **Ava fail või kaust**:

- Lohistusala {{ui:Vali fail, või lohista siia fail või kaust}}. Klõpsa seda, et valida üks fail, või lohista fail või kaust sellele (või kuhu tahes lehele).
- {{ui:Ava kaust}}: vali terve projektikaust. Vaata [Ava terve projektikaust](topic:open-project-folder).
- {{ui:Hiljuti avatud kaustad}}: ilmub Chrome'is ja Edge'is pärast kausta avamist kaustavaliku või lohistamisega. Klõpsa {{ui:Ava uuesti}} ja kausta nimel, et see uuesti avada, või väikesel × nupul, et see unustada.

Selle all ilmuvad jaotised, kui need kehtivad:

| Jaotis | Millal näidatakse | Mis selles on |
|---|---|---|
| {{ui:Muudatused}} | IFC-mudel on avatud | Sinu salvestamata muudatused, uuemad enne, koos {{ui:Võta tagasi}} ja {{ui:Salvesta IFC-na}} |
| {{ui:Fail}} | Mudel või failikaart on avatud | Faktid faili kohta: suurus, skeem või väljalase, projekt, autor, elementide arv |
| {{ui:Joonis}} | DWG või DXF on avatud | Vorming, ühikud, objektide ja kihtide arv, lehed, lingitud joonised, seadmed |
| {{ui:Kaust}} | Kaust on avatud | Failide ja mudelite arv, suurus, leitud probleemid |
| {{ui:Tagasi kausta}} | Avasid faili kaustast | Naaseb kausta aruandesse |
| {{ui:Kihid}} | Joonis on avatud | Märkeruut igale kihile, koos {{ui:Kõik sisse}} ja {{ui:Kõik välja}} |
| {{ui:Korrused}} | IFC-mudel on avatud | Märkeruut igale korrusele, ülemine korrus esimesena |
| {{ui:Elemendid}} | IFC-mudel on avatud | Mitu iga liiki elementi mudel sisaldab (30 kõige levinumat) |

## Lava

Ekraani keskosa näitab avatud faili.

- **Tühi**: „Ava hoonemudel.“ koos {{ui:Vali fail}} ja {{ui:Ava kaust}} ning lühikese kirjeldusega igast vormingust.
- **IFC-mudel**: 3D-vaade, mille ülaosas on tööriistariba. Tööriistad on rühmitatud nimede järgi nagu CadCrafti joonestusrakenduses, iga tööriista ikoon on nime kohal: {{ui:Vaade}} ({{ui:Mahuta}}, {{ui:Ülemine}}, {{ui:Esi}}, {{ui:Külg}}, {{ui:Servad}}, {{ui:Ruumid}}); {{ui:Redigeeri}} ({{ui:Võta tagasi}}, {{ui:Tee uuesti}}, {{ui:Kopeeri}}, {{ui:Kleebi}} ja {{ui:Veel}}, vaata [Kopeeri, kleebi ja dubleeri raamatukogu üksusi](topic:copy-paste)); {{ui:Mudel}} ({{ui:Ühikud}} ja {{ui:Joonista}}); {{ui:Teek}} ({{ui:Teek}}, {{ui:Seadmed}}, {{ui:Uuendused}}, {{ui:Autorid}}); {{ui:Ülevaatus}} ({{ui:Näita}}, {{ui:Lõige}}, {{ui:Kõnni}}, {{ui:Mõõda}}; vaata [Lõika IFC-mudel lõiketasandiga](topic:section-plane)); ning {{ui:Väljund}} (renderdamine, reaalajavaade, VR, eksport, värvimine ja salvestatud vaated). Kui {{ui:Joonista}} on sisse lülitatud, on selle all olev joonistusriba sama välimusega: {{ui:Vaade}} (tasand ja plaani liik), {{ui:Joonista}}, {{ui:Redigeeri}} ja {{ui:Teek}}. Vaatekuubik asub paremas alanurgas. Vaata [Ava IFC-mudel ja vaata seda 3D-s ringi](topic:open-ifc-model). {{ui:Sätted}} › {{ui:Üldine}} valib, kas nuppudel on ikoonid, sildid või mõlemad. Samuti näitab või peidab rühmanimed. Paremklõps tööriistaribal aitab korraldada tööriistu ja rühmi. Lühikeses aknas eemaldab tööriistariba ikoonide alt nimed.
- **Projekti- või perefail**: failikaart koos eelvaatepildi, projektiinfo ja lingitud failidega. Vaata [Projekti- või perefaili lugemine](topic:read-rvt-file).
- **DWG või DXF**: vahelehtede rida ({{ui:Mudel}}, siis üks iga lehe kohta, siis {{ui:Seadmed}}, kui joonisel on märgistatud seadmeid, {{ui:3D}}, {{ui:Mahuta}} ja {{ui:Prindivaade}}), joonis ning elavad X ja Y koordinaadid nurgas. Vaata [DWG- või DXF-joonise vaatamine](topic:view-dwg) ja [DWG- või DXF-joonise vaatamine 3D-s](topic:dwg-in-3d).
- **Kaust**: kausta aruanne kastiga {{ui:Alusta siit}} ning mudelite, linkide, IFC-mudelite ja joonistega tabelitega. Vaata [Ava terve projektikaust](topic:open-project-folder).

**Olekurida** lava all ütleb, mida BimCraft teeb (näiteks „Mudeli lugemine…“ või „Geomeetria koostamine: 1200 / 5400 elementi“). Kui miski ebaõnnestub, näitab see punases kirjas, mis läks valesti. Edu teated kaovad mõne sekundi pärast.

## Omaduste paneel

Parem paneel näitab:

- IFC-mudeli puhul: elementi, mida klõpsasid, koos nime, tüübi, sildi, GlobalId ja iga omaduste hulgaga. Väärtused, mida saab muuta, näevad välja nagu nupud. Vaata [Omaduste paneeli väljad](topic:properties-panel).
- Joonise puhul: kuidas liikuda, joonise lingitud joonised ja pildid ning kas iga leiti, ning loend sellest, mida **Pole veel joonistatud**.
- Failikaardi või kausta puhul: lühike märkus, mida avada järgmisena.

## Väike ekraan

Kui aken on kitsam kui sülearvuti ekraan, paigutab BimCraft oma alad kihiti: lava üleval ja paneelid all. Kerige lehte, et paneelideni jõuda. Telefonis moodustavad need ühe veeru, tahvelarvutis kaks.

## Ekraanirežiimid

Nupp {{ui:Täisekraan}} rakenduse ribal või {{key:Ctrl+Shift+F}} igal platvormil tsükleerib kolme režiimi:

1. Tavaline.
2. Täisekraan, riba on veel nähtav.
3. Täisekraan, rakenduse riba peidetud. Liiguta kursor ülemisse äärde või puuduta seal, et see tagasi tuua.

Vajuta {{key:Esc}}, et naasta tavalisse režiimi. Brauserid ilma täisekraani toeta (näiteks iPhone'is) lülituvad ainult tavalise ja peidetud ribade vahel.

## Seotud

- [Klahvid ja hiir](topic:keyboard)
- [BimCraftis avatavad ja salvestatavad failid](topic:files)
