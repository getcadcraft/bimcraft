---
title: Kontrollo ngrohjen dhe ftohjen me EnergyPlus
summary: Shkruani modelin si skedar EnergyPlus, ose ekzekutoni EnergyPlus versioni 26.2.0 mbi të në shfletues, dhe krahasoni ngarkesat e projektimit me ndihmësin e shpejtë të ngrohjes dhe ftohjes. Një mendim i dytë për projektimin e hershëm, jo një llogaritje përputhshmërie.
keywords: energyplus, simulim energjie, ditë projektimi, ngarkesë ngrohjeje, ngarkesë ftohjeje, skedar moti, epw, idf, masë termike, energji vjetore, simulo
from: b82a5bf2
---

## Çfarë do të bëni

Paneli **Kontrollo me EnergyPlus** shkruan modelin e hapur si skedar hyrës EnergyPlus (një IDF): një zonë për dhomë, muret, dyshemetë, çatitë dhe dritaret me vlerat e tyre U, ndërrimin e ajrit dhe ngrohjen dhe ftohjen ideale. Mund ta **ruani atë skedar** kurdoherë dhe ta ekzekutoni në EnergyPlus-in tuaj.

Nëse konfiguroni edhe motorin, paneli mund të simulojë menjëherë, dhe liston ngrohjen dhe ftohjen e projektimit të EnergyPlus-it pranë asaj të ndihmësit të shpejtë, dhomë për dhomë.

Kjo është një ndihmë projektimi. Kodet e energjisë, certifikimi dhe lejet kërkojnë një mjet të miratuar dhe të dhënat e klimës që ai kërkon, dhe rezultati duhet shqyrtuar nga personi që përgjigjet për të.

## Konfiguro motorin

BimCraft nuk e përmban EnergyPlus-in. Është një ndërtim i madh WebAssembly (rreth 6 MB i ngjeshur, plus një skedar të dhënash 4.6 MB), kështu që e strehoni vetë dhe e shkruani adresën e tij në panel. Faqja e ngarkon atë vetëm kur shtypni një buton simulimi, kurrë në nisje. Adresa duhet të jetë https, një shteg në këtë sajt ose localhost.

## Ditë projektimi ose një vit

- **Simulo ditë projektimi** nuk ka nevojë për skedar moti. Ekzekuton një ditë të ftohtë dimri pa diell dhe një ditë të nxehtë e të pastër vere me temperaturat nga hyrjet e ngrohjes dhe ftohjes të skedës Dritë ditore, dhe raporton ngarkesën e çdo dhome në vat.
- **Simulo një vit** kërkon një skedar moti në formatin EPW që zgjidhni. Shton persona, drita dhe pajisje nga të njëjtat hyrje (gjithmonë aktive, sepse nuk shpikët asnjë orar), dhe raporton energjinë e ngrohjes dhe ftohjes të çdo dhome në kWh. Skedarët e motit kanë licencat e tyre, ndaj përdorni një që keni të drejtë ta përdorni.

## Masa termike

Shëno **Jep mure me shtresa të njohura masë termike**, dhe muret, çatitë dhe dyshemetë me shtresa materiali të njohura shkruhen shtresë pas shtrese, me dendësinë dhe nxehtësinë specifike të marra nga një tabelë e shkurtër vlerash tipike sipas emrit të materialit. Shtresat merren nga jashtë e para, në renditjen që lista e skedarit i jep. Elementët pa shtresa mbeten me vlerën e tyre U dhe pa masë.

## Leximi i krahasimit

Dy metodat i japin përgjigje paksa të ndryshme. Ndihmësi i shpejtë mban çdo element; skedari EnergyPlus mesatarizon vlerat U të çdo dhome sipas llojit të sipërfaqes. Një ndryshim mbi 15 % në ngrohjen e projektimit të një dhome listohet si shënim në panelin ⚠, me të dyja shifrat. Ftohja ndryshon më shumë sipas projektimit: ndihmësi i shpejtë llogarit një kulm nga dielli në një datë të vetme, ndërsa EnergyPlus e dimensionon sipas ditës së vet të projektimit.
