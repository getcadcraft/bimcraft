---
title: Predvajajte poplavo, veter ali potres na stavbi
summary: Voda, ki se dviguje skozi sobe, tlak vetra na vsaki etaži ali potres, ki trese etaže, predvajano na tlorisu ali pogledu z drsnikom časa. Preprosti modeli z navedenimi predpostavkami; ne gre za preverjanje predpisov ali konstrukcijsko zasnovo.
keywords: nevarnost, poplava, veter, potres, potresno, medetažni zamik, zibanje, bazna strižna sila, višina vode, podnebje, scenarij, dvig morske gladine, predvajanje, etaža, nihajni čas
from: ff0d34d1
---

Razdelek {{ui:Hazard playback}} levega podokna predvaja nevarnost na odprtem modelu IFC. Nič v modelu se ne spremeni.

:::warning
To so **preprosti modeli, s katerimi vidite, kaj nevarnost naredi tej zasnovi**, ne študija poplav, ne preverjanje vetrnih predpisov in ne konstrukcijska zasnova. Vsak rezultat navaja svoje predpostavke.
:::

## Poplava

Nastavite najvišjo gladino vode nad najnižjo etažo ter minute dviga, zadrževanja in upadanja. Voda vstopi v sobo skozi odprtino, katere prag je prešla, sobe, povezane z mokrimi sobami z odprtinami pod gladino vode, pa so na isti ravni (kvazistatično). Tabela navaja, kdaj se vsaka soba prvič namoči in kako globoko; tloris to predvaja. Vpišite največ vode, ki jo soba sme imeti; sobe, ki jo presežejo, so opozorila. **Podnebne prihodnosti:** naložite svojo datoteko scenarija (JSON ali CSV z letom, dvigom morske gladine in faktorjem poplav) in izberite leto. Ali pa vklopite dodatek Podnebne prihodnosti ter izberite scenarij in leto: poplava se izvede dvakrat, sedanjost ob prihodnosti (glejte temo o podnebnih prihodnostih: poplave, vročina in požari za leti 2050 in 2080). Vrsti Izpostavljenost požaru in Vremenska datoteka: prihodnja vročina sta v istem seznamu.

## Veter

Tlak sledi ½ρV², hitrost pa narašča z višino; sila na etaži je ta tlak, pomnožen z faktorjem sunkov, z obema koeficientoma tlaka, širino in višino etaže. Dobite strig, prevrnilni moment in zibanje.

## Potres

Strižni model stavbe: masa na etažo (tloris × kilogrami na kvadratni meter, ki jih nastavite), enaka togost v vsaki etaži, prilagojena prvemu nihajnemu času, ki ga podate (če pustite prazno, je to desetinka sekunde na etažo, in to navede), dušenje in izbrano gibanje tal (impulz ali filtriran šum) pri največjem pospešku, ki ga izberete. Rezultat je medetažni zamik vsake etaže, pospeški plošč in bazna strižna sila; višina predvaja zibanje, narisano večje, kot je v resnici. Vpišite dovoljeni medetažni zamik in etaže čez njega so opozorila. Gre za elastični model: nič ne popusti in ne poči.

## Togost etaž iz analitičnega okvirja

Za potres ali zibanje zaradi vetra izberite **Analitični okvir** kot vir togosti namesto vpisa nihajnega časa. Vsaka etaža se po vrsti potisne vstran, okvir (nosilci, stebri, zavetja, plošče) se reši, togost etaž pri skupnem delovanju vseh delov pa poganja izračun. Teža je lastna teža elementov plus obtežba plošče na kvadratni meter, ki jo nastavite na tlorisu vsake etaže. Prikazan je dejanski prvi nihajni čas. Gre za elastični model: nič ne popusti, torzija pa ni modelirana. Pri vetru so sile na etažah še vedno predpostavljene (potenčni profil, vaš faktor sunkov in fiksni koeficienti tlaka, ne vetrni predpis); iz okvirja prihaja le zibanje, z reševanjem celotne matrike togosti okvirja proti tem silam. Model potrebuje IFC z okvirjem, ki ga zavihek Analiza lahko prebere.

## Enote

Globine vode, zibanje in zamik po etažah, razdalje in površine so prikazani v {{ui:Units}}, ki ste jo izbrali. Sile (kN), časi in pospeški ohranijo svoje enote, vrednost, ki jo vpišete v polje z oznako v metrih, pa ostane v metrih. Enako velja za rezultate evakuacije, dnevne svetlobe, ogrevanja in hlajenja ter opremljanja: dolžine, površine in prostornine sledijo vaši izbiri; tlak, pretok, temperatura, energija in moč se nikoli ne pretvarjajo.
