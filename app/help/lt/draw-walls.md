---
title: Sienų braižymas
summary: Braižykite sienas kiekvieno lygio plane spustelėdami kampus arba įvesdami ilgius; kampai susijungia patys, o sienos įrašomos kaip IFC.
keywords: lenkta siena, lankas, vietos linija, lygiavimas, siena, sienos, braižymas, planas, aukšto planas, patalpa, kampas, sujungimas, sienos tipas, 2x6, 2x4, cmu, betonas, aukštis, lygis, lygiai, aukštas, įvestas ilgis, ortogonalumas, prilipimas
from: 8269cd4b
---

## Ką darysite

Nubraižykite pastato sienas ant kiekvieno lygio plano. Spustelėkite, kur siena prasideda, o paskui — kiekvieną kampą. BimCraft pats sujungia kampus, kiekvienai sienai priskiria sluoksnius (apkalą, apšiltinimą, stovus, gipso plokštes …) ir ją pratęsia iki aukščiau esančio lygio. 3D vaizde sienos rodomos tuo pat metu, kaip braižote.

## Atidaryti planą

1. Pradėkite naują pastatą ([Pradėti naują pastatą](topic:start-a-new-building)) arba atidarykite IFC modelį.
2. Įrankių juostoje spustelėkite {{ui:Braižymas}}. Naujas pastatas atsidaro su jau įjungtu braižymu.
3. Lygio planas rodomas kairėje, o 3D vaizdas — dešinėje. Lygį pasirinkite plano viršuje esančiame sąraše arba šalia jo esančiu apvaliu mygtuku skydelyje **Lygiai**.
4. {{ui:Planas}}, {{ui:Skaidyti}} ir {{ui:3D}} yra įrankiai įrankių juostos eilutėje {{ui:Vaizdas}} (komandos PLAN, SPLIT ir klavišai veikia kaip anksčiau). Naudokite {{ui:Planas}}, kad matytumėte tik planą, {{ui:Skaidyti}} — abu vaizdus, {{ui:3D}} — uždaryti planą. Kai langas siauras (arba sąsajos dydis didelis), {{ui:Skaidyti}} planą rodo virš 3D vaizdo, o ne šalia jo.

Planas pjauna lygį 4'-0" (1200 mm) virš jo grindų, kaip ir aukšto planas. Ritinkite ratuką, kad keistumėte mastelį; vilkite vidurine arba dešiniąja pelės klavišu (arba laikydami {{key:Space}} ir vilkdami), kad slinktumėte; kai įjungtas {{ui:Pasirinkti}}, paprastas vilkimas taip pat slenka. {{key:F}}, kai žymeklis yra virš plano, pritaiko planą ekrane.

## Nubraižyti patalpą

1. Spustelėkite {{ui:Siena}} (arba paspauskite {{key:W}}).
2. Pirmajame sąraše pasirinkite sienos tipą, pavyzdžiui **Išorinė 2×6** arba **Vidinė 2×4**.
3. Pasirinkite jos aukštį: **Iki aukščiau esančio lygio** (siena seka, jei tas lygis pajuda), **Iki** aukštesnio lygio sienai, einančiai per kelis lygius (laiptinė, dvigubo aukščio patalpa, aukštas frontonas), arba **Fiksuotas aukštis** ir įveskite jį. Tokia siena priklauso lygiui, ant kurio ją nubraižėte; lygių, per kuriuos ji eina, planuose ji rodoma šviesiau, patalpos prie jos užsidaro, o iš tų planų į ją galite spustelėti duris ir langus (durys stovi ant to lygio grindų). Norėdami perkelti arba pertvarkyti pačią sieną, eikite į lygį, iš kurio ji prasideda.
4. Spustelėkite, kur prasideda pirmoji siena.
5. Spustelėkite kiekvieną kampą. Kiekvienas spustelėjimas sukuria sieną; kita prasideda ten, kur baigėsi ankstesnė. Šalia žymeklio rodomas ilgis ir kampas.
6. Dar kartą spustelėkite pirmą tašką, kad uždarytumėte patalpą. Būsenos eilutėje nurodoma, kiek sienų turi patalpa, o ašinės linijos režime kiekviena siena gauna savo išorinį sluoksnį patalpos išorėje.
7. Paspauskite {{key:Esc}} (arba spustelėkite dešiniuoju klavišu, arba dukart spustelėkite), kad baigtumėte nieko neuždarę.

Kampai susijungia patys: dvi sienos susitinka įstrižai (mitre), siena, kuri baigiasi ant kitos, sustoja prie jos paviršiaus (T jungtis), o trys ar daugiau sienų viename taške dalijasi kampu. Kertančios sienos paliekamos kaip yra.

Visą patalpą iš karto: atidarykite {{ui:Figūros}} — stačiakampiui, pasuktam stačiakampiui, daugiakampiui, lankams, sienoms palei pasirinktas linijas arba aplink kontūrą (žr. [Sienų formos, skaidymas, poslinkis, tempimas ir užrakinimas](topic:wall-tools)).

## Pasirinkti braižymo atskaitą

Prieš pirmą spustelėjimą pasirinkite **Ašinė linija**, **Vidinis paviršius** arba **Išorinis paviršius**. Kai pasirinktas paviršius, jūsų spustelėjimai ir įvesti ilgiai nusako tą paviršių; BimCraft perkelia sienos ašinę liniją per pusę bendro storio ir sujungia gretimus kampus. Pasirinkite **Išorė kairėje** arba **Išorė dešinėje**, atsižvelgdami į braižymo kryptį. Uždaram kontūre, nubraižytame prieš laikrodžio rodyklę, išorė yra dešinėje; pagal laikrodžio rodyklę — kairėje. Su **Vidinis paviršius** sienos korpusas eina į išorinę jūsų linijos pusę; su **Išorinis paviršius** — į kitą pusę. Braižant pagal paviršius, pasirinkta išorės pusė išlieka, kai uždarote kontūrą. Ašinėje linijoje sienos, kurios neuždaro patalpos, įgauna jūsų pasirinktą išorės pusę; uždarius patalpą, kiekvienos sienos išorė pati nustatoma į patalpos išorę, nepriklausomai nuo to, kokia kryptimi braižėte.

Pakeitus sienos tipą, atskaitą ar išorės pusę, esama grandinė baigiasi. Arti grįžtamojo kampo ilgos įstrižos jungtys apribojamos palikus statmenus galus.

Braižant, tuščioje erdvėje esantis galinis taškas gali lygiuotis horizontaliai arba vertikaliai su sienos galiniu tašku arba ankstesniu kampu. Punktyrinė linija jungia tą tašką su prilipusiu žymekliu. {{key:Shift}} išlaiko braižymo kryptį statmeną; tada lygiavimas sustoja tos krypties linkme. Artimi galiniai taškai, vidurio taškai ir sienų susikirtimai turi pirmenybę prieš tolimą lygiavimą.

## Vietos linija

Kai **Atskaita** nustatyta į **Išorinis paviršius** arba **Vidinis paviršius**, siena išlaiko tą paviršių kaip savo vietos liniją. Vėliau, jei siena storėja arba jos išorė apverčiama, tas paviršius lieka vietoje, o siena didėja arba apsiverčia aplink jį. Tiesi siena, kuri su juo susitinka kampe, seka paskui, todėl kampas vis tiek užsidaro. Vietos liniją vėliau galite pakeisti skydelyje **Savybės**: žr. [Pakeisti sieną, duris ar langą](topic:change-a-wall-or-door).

## Nubraižyti lenktą sieną

1. Spustelėkite {{ui:Siena}}, tada parinkčių eilutės sąraše **Forma** pasirinkite **Lenkta**.
2. Spustelėkite, kur siena prasideda, o paskui — kur ji baigiasi.
3. Spustelėkite tašką ant jos lanko. Arba įveskite lanko aukštį ir paspauskite {{key:Enter}}.
4. Grandinė tęsiasi nuo sienos galo. Paspauskite {{key:Esc}}, kad ją baigtumėte.

Lenkta siena jungiasi prie sienų savo galuose (veikia kampų ir T jungtys), sudaro patalpas ir laiko duris bei langus palei savo lanką. Jie lieka tiesiais vienetais, statmenais sienai per vidurį, o jų atstumas matuojamas palei lanką. Siena gali pasisukti daugiausia per tris ketvirčius apskritimo. Ji prisitraukia prie savo galų ir prie lanko vidurio.

Dar neįgyvendinta lenktoms sienoms: {{ui:Apkirpti / pratęsti}} ir {{ui:Kampas}}, karkasas, automatiniai plano matmenys ir prilipimas palei lanką. Žr. [Kas dar neįgyvendinta](topic:not-built-yet).

## Įvesti ilgį vietoj spustelėjimo

Po pirmo spustelėjimo įveskite ir paspauskite {{key:Enter}}:

| Įvedama | Nubraižo |
|---|---|
| `12'6"` arba `3810` | tokio ilgio sieną žymeklio rodoma kryptimi |
| `12'6"<90` | tokio ilgio sieną tokiu kampu (laipsniais, prieš laikrodžio rodyklę nuo dešinės) |
| `@3000,0` | iki taško, tiek nutolusio nuo paskutinio, skersai ir aukštyn |
| `1200,3400` | iki to taško plane |

Įvedus skaičių, kai įjungtas sienos įrankis, jis iš karto patenka į lauką {{ui:Ilgis}}. Pėdomis ir coliais paprastas skaičius reiškia colius; milimetrais — milimetrus. Vienetą visada galite įrašyti: `3.5 m`, `10 ft`, `6 1/2"`.

## Prilipimas

- Sienų galai, jų paviršių kampai ir sienų vidurio taškai prilimpa, kai žymeklis yra arti jų (kvadratas, trikampis).
- Žymeklis prilimpa prie sienos ašinės linijos arba prie bet kurio paviršiaus (kryžius).
- Nuo paskutinio taško kryptis fiksuojama kas 15°, kai ji arti; laikykite {{key:Shift}}, kad ji liktų 0°, 90°, 180° arba 270°.
- Laisvos kryptys ilgį suapvalina iki 1/2" (arba 10 mm).

## Keisti, atšaukti, naikinti

- Kiekviena siena yra vienas žingsnis skiltyje {{ui:Pakeitimai}}: {{ui:Anuliuoti}} ir {{ui:Perdaryti}} atima sienas ir vėl jas grąžina.
- Įjungus {{ui:Pasirinkti}}, spustelėkite sieną plane, kad ją pasirinktumėte; 3D vaizdas ir **Savybės** seka paskui. {{key:Delete}} naikina pasirinktas sienas, o sienos, prie kurių jos buvo prijungtos, vėl sutvarkomos.

## Lygiai

Skiltyje **Lygiai** išvardyti visi lygiai su jų aukščiu virš nulio ir aukščiu.

- Įveskite naują pavadinimą, aukštį virš nulio arba aukštį ir paspauskite {{key:Enter}}. Pakeitus lygio aukštį (arba aukštį virš nulio), aukštesni lygiai pajuda tiek pat, o iki lygio pratęstos sienos seka paskui.
- {{ui:Pridėti lygį viršuje}} prideda lygį virš viršutinio, toks pat aukštas.
- {{ui:Pridėti lygį žemiau}} prideda lygį po žemiausiu (rūsį), toks pat aukštas kaip tas: jo aukštis neigiamas, kai žemiausias lygis yra 0, ir jokie kiti lygiai nepajuda. {{ui:Anuliuoti}} jį pašalina.
- {{ui:Kopijuoti šį lygį…}} nubraižo tai, kas matoma dabartiniame lygyje, dar kartą kitame lygyje arba naujame lygyje viršuje: jo sienas su durimis ir langais, grindis bei lubas (ne stogus). Sienos, kurios buvo pratęstos iki aukščiau esančio lygio, dabar pratęsiamos iki lygio virš naujojo; patalpos atsiranda savaime. Vienas {{ui:Anuliuoti}} atšaukia visa tai. Jei kitame lygyje jau yra sienų, kopija prie jų pridedama.
- {{ui:Vienetai}} įrankių juostoje pasirenka vienetus (pėdos ir coliai, coliai, dešimtainės pėdos, milimetrai, centimetrai arba metrai) visam tam, ką braižymo įrankiai rodo ir skaito.

## Įrašymas

Spustelėkite {{ui:Įrašyti kaip IFC}}. Kiekviena siena tampa IFC siena su savo ašine linija, jungtine forma, tipu ir sluoksniais, `Pset_WallCommon` ir bazinėmis apimtimis (ilgis, aukštis, plotai ir tūriai), todėl ją atidaro kitos BIM programos ir gali sudaryti žiniaraštį.

## Verta žinoti

- Sienos braižomos pagal savo ašinę liniją. Storis priklauso nuo sienos tipo.
- Plane čia nubraižytos sienos rodomos užpildytos, o viskas kita (bibliotekos elementai, kitų programų modeliai) pjaunama ta pačia plokštuma, o tai, kas yra žemiau pjūvio, rodoma plonomis linijomis.
- Kitų programų sukurtos sienos plane rodomos, bet dar negali būti keičiamos šiais įrankiais.
