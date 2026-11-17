---
title: Otvaranje cijelog projektnog foldera
summary: Usmjerite BimCraft na projektni folder da odmah vidite svaki model, njegove sigurnosne kopije i veze, a okvir Počnite ovdje predloži koju datoteku da otvorite.
keywords: folder, direktorij, projektni folder, mrežni disk, server, počnite ovdje, koja datoteka, sigurnosne kopije, veze, xrefs, nedavni folderi, prevlačenje foldera
from: 16fbdce2
---

## Šta ćete uraditi

Otvorite cijeli projektni folder, kao onaj koji ste dobili za posao, i pustite BimCraft da ga razvrsta: koji modeli su tu, koje kopije su sigurnosne, šta se na šta veže, koje datoteke su oštećene i koju datoteku najvjerovatnije želite da otvorite.

Čitaju se samo nekoliko kilobajta koje svaka kartica modela treba, pa su folder na mrežnom disku ili sinhronizovani oblak u redu.

## Koraci

:::chromium
1. Kliknite {{ui:Otvori folder}} lijevo (ili u sredini praznog ekrana).
2. Odaberite projektni folder u prozoru koji se otvori i kliknite **Odaberi** (ili **Otpremi** ili **Otvori**, zavisno od sistema).
3. Kliknite **Pregled datoteka** kada pregledač pita „Dozvoliti sajtu da pregleda datoteke?“. Ovo samo dozvoljava kartici da čita folder; ništa se ne otprema.
4. Sačekajte dok statusni red broji: „Popis foldera: … datoteka“, pa zatim „Provjera Revit datoteka: … od …“.
:::

:::firefox
1. Kliknite {{ui:Otvori folder}} lijevo (ili u sredini praznog ekrana).
2. Odaberite projektni folder u prozoru koji se otvori i potvrdite. Firefox može tražiti potvrdu da stranica može čitati datoteke foldera; one i dalje ostaju na vašem računaru.
3. Sačekajte dok statusni red ne kaže „Čitanje foldera: … datoteka“, pa zatim „Provjera Revit datoteka: … od …“.
:::

:::safari
1. Kliknite {{ui:Otvori folder}} lijevo (ili u sredini praznog ekrana).
2. Odaberite projektni folder u prozoru koji se otvori i kliknite **Otpremi**. Uprkos riječi, ništa ne napušta vaš Mac: datoteke se samo predaju kartici.
3. Sačekajte dok statusni red ne kaže „Čitanje foldera: … datoteka“, pa zatim „Provjera Revit datoteka: … od …“.
:::

Takođe možete **prevući folder** iz {{pick:mac=Finder|windows=File Explorer|linux=vaš upravitelj datoteka}} na stranicu. Prevučeni folder se otvara bez upita za dozvolu u svakom pregledaču.

## Šta treba da vidite

Izvještaj o folderu se popunjava u sredini:

- Naziv foldera, broj modela, CAD crteža, IFC modela i datoteka, i ukupnu veličinu.
- Crvene ili žute napomene ako su neke datoteke nepotpune ili neke povezane datoteke nedostaju u folderu.
- Okvir {{ui:Počnite ovdje}}: datoteku koju BimCraft predlaže da otvorite, sa razlozima.
- **Modeli**: jedan red po modelu, sa sigurnosnim kopijama grupisanim ispod njega.
- **Povezane i referencirane datoteke**, **IFC modeli**, **CAD crteži** i **Odložene**, kada ih folder ima.

Lijevo, panel {{ui:Folder}} sažima sve; **Problemi** kaže „Nema“ kada je svaka kopija ispravna.

## Korištenje okvira Počnite ovdje

Okvir navodi jednu datoteku i kaže zašto, na primjer:

- „Najnoviji sačuvani rad u ovom folderu (3. mart 2025.)."
- „*Consultant.rvt* je povezan u druge modele, pa je pozadina, a ne datoteka za uređivanje.“
- „*Tower.rvt* izgleda kao očigledan izbor, ali je oštećen; njegova posljednja ispravna kopija je iz …“
- „Ovo je centralni model: u Revit-u ga otvorite sa „Create New Local“ i radite u lokalnoj kopiji.“

1. Pročitajte razloge.
2. Kliknite {{ui:Otvori njenu karticu}} da pročitate karticu te datoteke, ili {{ui:Prikaži je na listi}} da nađete njen red u **Modeli**.
3. Provjerite sa onim ko je posljednji radio na projektu prije nego što se oslonite na nju. Okvir to također kaže: to je najbolje nagađanje na osnovu naziva, datuma i veza.

## Otvaranje datoteka iz izvještaja

1. Kliknite na naziv modela da otvorite njegovu karticu. Kartica provjerava svaku vezu u odnosu na folder.
2. Kliknite {{ui:Nazad na}} i naziv foldera na vrhu kartice (ili {{ui:Nazad na folder}} lijevo) da se vratite.
3. Kliknite bilo koju IFC datoteku pod **IFC modeli** da je otvorite u 3D.
4. Kliknite bilo koji DWG ili DXF pod **CAD crteži** da ga otvorite u 2D. Njegovi povezani crteži i slike automatski se pronalaze u folderu.

## Ponovno otvaranje foldera kasnije

:::chromium
Folderi koje ste otvorili sa {{ui:Otvori folder}} ili prevlačenjem navedeni su pod {{ui:Nedavni folderi}} lijevo. Kliknite {{ui:Ponovo otvori}} i naziv foldera da ga ponovo otvorite bez biranja. Nakon ponovnog pokretanja pregledača, Chrome ili Edge pitaju još jednom; izaberite „Allow on every visit“ da prestane da pita. Lista se čuva samo u ovom pregledaču, nikada se ne šalje nigdje. Kliknite × da zaboravite folder.
:::

:::firefox safari
Ovaj pregledač ne pamti foldere između posjeta. Ponovo odaberite folder sa {{ui:Otvori folder}}, ili ga prevucite.
:::

## Česte greške

- **Odabir prevelikog foldera.** Preko 20.000 datoteka: „Ovaj folder ima više od 20.000 datoteka. Odaberite manji folder, na primjer jedan projekat.“ Odaberite projektni folder, a ne cijeli disk.
- **Odabir roditeljskog foldera za više projekata.** Okvir {{ui:Počnite ovdje}} tada bira između projekata. Odaberite jedan projekat.
- **Čini se da Revit-ove sopstvene foldere BimCraft ignoriše.** Folderi `*_backup`, `*_log` i `Revit_temp` su pomoćni i navedeni su pod **Odložene**, a ne čitaju se.
- **Očekivanje da se model otvori u 3D sa svoje kartice.** Projektna datoteka je samo kartica. Otvorite njen IFC izvoz.
- **Telefoni i tableti.** Mnogi mobilni pregledači uopšte ne mogu birati foldere. Koristite računar.

Vidite [Provjera foldera za oštećene kopije, nedostajuće veze i ostatke](topic:check-folder-health) i [Izvještaj o folderu: uloge, statusi i veze](topic:folder-roles).
