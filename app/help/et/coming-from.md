---
title: Tulemine teistest BIM- ja joonistusprogrammidest
summary: Kuidas töölaua BIM-koostamise ja DWG-failide vaatamise harjumused vastavad BimCraftile ning erinevused, mis inimesi segadusse ajavad.
keywords: üleminek, migreerimine, tuttav, töölaua bim, perekond, parameetrid, projektibrauser, omaduste paneel, vaatekuup, xref, kihihaldur, erinevused, võrdlus
from: 2de629af
---

Kui oled Revitiga harjunud, tundub enamik BimCrafti sõnades tuttav, aga ulatuselt võõras. Kõige olulisem erinevus: **see versioon loeb ja kontrollib mudeleid ning muudab IFC-andmeid. See ei koosta veel nii nagu Revit.** Seinu ei saa joonistada, perekondi paigutada, vaateid ega lehti teha ega projektifaili salvestada. Seevastu saad avada peaaegu iga hoonefaili igas arvutis brauseriga, näha, mis selles on, kontrollida terve projektikausta ja parandada andmeid IFC-mudelis.

## Harjumused ja vasted

| Kui oled harjunud | BimCraftis |
|---|---|
| `.rvt` avamine Revitis mudeli vaatamiseks | BimCraft avab `.rvt` faili kaardina: versioon, projektiinfo, lingid, eelvaade. 3D-mudeli jaoks ekspordi IFC ja ava see. [Loe projekti- või perekonnafaili](topic:read-rvt-file) |
| Faili salvestusversiooni kontrollimine enne avamist | Kaart kirjutab ülaossa „salvestatud Revitis …“, ilma faili uuendamata või puutumata |
| Projektibrauser | Vaadete ja lehtede brauserit ei ole. IFC-mudelil on {{ui:Korrused}} ja {{ui:Elemendid}} loendid; joonisel on lehevahelehed |
| Omaduste paneel | Paremal asuv {{ui:Omadused}} paneel valitud elemendi jaoks. IFC-omadushulgad parameetrirühmade asemel |
| Eksemplari- ja tüübiparameetrid | Eksemplari omadushulgad ja hulgad, mis on märgitud „(tüüp)“. Tüübi muudatus kehtib kõigile selle tüübi elementidele, nagu Revitis. [Muuda tüübi omadust kõigil tüübi elementidel](topic:type-vs-instance) |
| Muuda tüüpi | Dialoogi ei ole: klõpsa väärtusel „(tüüp)“ hulgas ja kirjuta |
| Mitme elemendi valimine, filtrid, Vali kõik eksemplarid | Üks element korraga. Veel ei ole loodud |
| Vaatekuup ja navigeerimisratas | Vaatekuup paremas alanurgas, neli nuppu ({{ui:Mahuta}}, {{ui:Ülemine}}, {{ui:Esi}}, {{ui:Külg}}) ja vaba orbiit. Navigeerimisratast ei ole |
| Shift ja keskmise nupuga lohistamine orbiidiks, keskmisega lohistamine nihutamiseks | Vasakuga lohistamine on orbiit, paremaga (või {{key:Shift}} ja lohistamine) nihutamine, rattaga suumimine. Stiil {{ui:BIM-riba}} vahetab keskmise nupuga lohistamise nihutamiseks ja {{key:Shift}} koos keskmise nupuga orbiidiks. [Menüüd, klahvid ja hiir](topic:menus-keys-and-mouse) |
| Plaanid, lõiked, lõikekastid | Korraga üks {{ui:Lõige}} tasand ({{key:X}}); lõikekasti ega 2D-plaane ei ole. [Lõika IFC-mudel lõiketasandiga](topic:section-plane) |
| Peitmine vaates, eraldamine, nähtavus/graafika | {{ui:Korrused}} sisse ja välja, {{ui:Ruumid}} ja {{ui:Servad}}. Elementide kaupa peitmist veel ei ole |
| Ruumid | IFC-ruumid, algul peidetud. Klõpsa {{ui:Ruumid}} |
| Salvesta, Salvesta nimega, sünkroonimine keskfailiga | {{ui:Salvesta IFC-na}} laadib alla uue IFC-faili. Algfail ei muutu. Keskfaili ega koostööd ei ole |
| Tagasivõtmine klahviga {{key:Mod+Z}} | Töötab IFC-muudatustel kuni salvestamiseni. [Muuda IFC-omadusi ja salvesta muudetud koopia](topic:edit-ifc-properties) |
| Linkide haldus | Ava projektikaust: iga link kontrollitakse ja märgitakse **In this folder**, **Same name found**, **Library file** või **Not in this folder**. [Ava terve projektikaust](topic:open-project-folder) |
| Audit või faili avamine, et näha, kas see on rikutud | Kausta raport kontrollib iga koopiat ja varukoopiat, kas need on katkised, sekunditega. [Kontrolli kausta kahjustatud koopiate suhtes](topic:check-folder-health) |
| Õige faili valimine segasest kaustast | Kast {{ui:Alusta siit}} soovitab ühe koos põhjustega |

Kui avad mudeleid peamiselt kontrollimiseks, nagu mudelikontrolli või IFC-vaatamise programmis, vali menüü stiil {{ui:Vaataja}}: vaatamis- ja kontrollitööriistad tulevad esimesena ning ehitamise tööriistad ootavad ühes menüüs. Vaata [Menüüd, klahvid ja hiir](topic:menus-keys-and-mouse).

## DWG-failide vaatamisest

Kui avad DWG-faile AutoCADis või DWG-vaatajas:

| Kui oled harjunud | BimCraftis |
|---|---|
| Mudeli ja paigutuse sakid all | Sakid joonise kohal: {{ui:Mudel}} ja üks iga lehe kohta |
| ZOOM Extents, topeltklõps ratta peal | Topeltklõps, {{key:F}} või {{ui:Mahuta}} |
| Nihutamine keskmise nupuga | Lohista ükskõik millise nupuga |
| Kihihaldur | Nimekiri {{ui:Kihid}}: märgi näitamiseks, eemalda peitmiseks, {{ui:Kõik sisse}} ja {{ui:Kõik välja}} |
| Xrefi haldur | **Seotud joonised** paremal, koos **Shown** või **Not found** ja {{ui:Lisa seotud joonised…}} |
| Prindieelvaade | {{ui:Prindivaade}} või {{key:P}}: must valgel, joonte paksustega. Ei prindi |
| Plokkide atribuutide andmete väljavõte | {{ui:Seadmed}} sakk märgistatud toidupakkumise jooniste jaoks, koos {{ui:Laadi CSV alla}} |
| Mõõtmine, joonistamine, muutmine, salvestamine nimega | BimCraftis ei ole. Joonistab ja muudab CadCraft-i joonistusrakendus |

## Erinevused, mis ajavad segadusse

- **See töötab brauseris ja brauser hoiab sinu faile hoolikalt.** BimCraft saab lugeda ainult faile ja kaustu, mille sa talle annad, valides need või lohistades. Ta ei saa faili ise avada ega selle üle salvestada. Iga salvestus on allalaadimine.
- **Midagi ei laadita üles.** Sõna „upload“ mõnede brauserite kaustadialoogides on brauseri enda sõnastus. Failid jäävad sinu arvutisse.
- **Mudelivorming on IFC.** Projektifail avaneb kaardina, sest selle 3D-sisu pole dokumenteeritud. Mudelid jõuavad BimCraftisse IFC kaudu.
- **Muudatused on kopeeri-kirjuta-tüüpi.** Ühe elemendi väärtuse muutmine ei muuda naabreid, isegi kui eksportija jagas seda väärtust nende vahel. Tüübi omadused on tahtlik erand.
- **Ei mingit projekti ega vaateid.** BimCraft näitab korraga ühte faili ja pärast sulgemist ei mäleta sellest midagi, välja arvatud Chrome'i ja Edge'i viimaste kaustade nimed.
- **Mac-klahvid.** Kus Revit kasutab Windowsi kiirklahve Ctrl, kasutab BimCraft {{key:Mod}}: Macis Command.
- **Hiirega harjumused.** Orbiit on vasak nupp, mitte Shift ja keskmine nupp, kui sa ei vali stiili {{ui:BIM-riba}} või ei seadista nuppe ise jaotises [Menüüd, klahvid ja hiir](topic:menus-keys-and-mouse).

Vaata [Mis veel pole valmis](topic:not-built-yet), et teada, mida täna selle asemel kasutada.
