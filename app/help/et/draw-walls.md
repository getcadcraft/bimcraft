---
title: Seinte joonistamine
summary: Joonista seinad tasandi plaanil, klõpsates nende nurki või sisestades pikkusi; nurgad ühinevad iseenesest ja seinad salvestatakse IFC-na.
keywords: kõver, kaar, asukohajoon, joondus, sein, seinad, joonistamine, plaan, korrusplaan, ruum, nurk, ühendamine, seinatüüp, 2x6, 2x4, cmu, betoon, kõrgus, tasand, tasandid, korrus, sisestatud pikkus, ortogonaal, püüdmine
from: 8269cd4b
---

## Mida teete

Joonistad hoone seinad iga tasandi plaanil. Klõpsa kohta, kust sein algab, ja seejärel iga nurka. BimCraft ühendab nurgad sinu eest, annab igale seinale tema kihid (välisviimistlus, aluskate, karkassitalad, kipsplaat …) ja viib seina kuni ülemise tasandini. 3D-vaade näitab seinu töö käigus.

## Plaani avamine

1. Alusta uut hoonet ([Alusta uut hoonet](topic:start-a-new-building)) või ava IFC-mudel.
2. Klõpsa tööriistaribal {{ui:Joonista}}. Avaneb uus hoone, milles see on juba sisse lülitatud.
3. Tasandi plaan kuvatakse vasakul ja 3D-vaade paremal. Vali tasand plaani kohal olevast loendist või paneelil **Tasandid** oleva ümmarguse nupuga selle kõrval.
4. {{ui:Plaan}}, {{ui:Jaga}} ja {{ui:3D}} on tööriistariba reas {{ui:Vaade}} (käsud PLAN, SPLIT ja klahvid töötavad nagu varem). Kasuta {{ui:Plaan}}, kui tahad ainult plaani, {{ui:Jaga}} mõlema jaoks ja {{ui:3D}}, et plaan sulgeda. Kui aken on kitsas (või liidese suurus suur), paigutab {{ui:Jaga}} plaani 3D-vaate kohale, mitte kõrvale.

Plaan lõikab tasandi 4'-0" (1200 mm) kõrgusel selle põrandast, nagu korrusplaan teeb. Kerimine suumib, lohistamine keskmise või parema nupuga (või hoia all {{key:Space}} ja lohista) nihutab vaadet. Kui {{ui:Vali}} on sisse lülitatud, nihutab tavaline lohistamine vaadet samuti. {{key:F}}, kui kursor on plaani kohal, mahutab plaani aknasse.

## Ruumi joonistamine

1. Klõpsa {{ui:Sein}} (või vajuta {{key:W}}).
2. Vali esimeses loendis seinatüüp, näiteks **Välissein 2×6** või **Sisesein 2×4**.
3. Vali kõrgus: **Kuni ülemise tasandini** (sein järgib, kui see tasand liigub), **Kuni** kõrgema tasandini seina puhul, mis ulatub mitme tasandi üle (trepikoda, kahe korruse kõrgune ruum, kõrge fronton), või **Fikseeritud kõrgus** ja sisesta see. Selline sein kuulub tasandile, millel sa seda joonistasid. Tasandite plaanidel, mida see läbib, on sein heledam, seal olevad ruumid sulguvad selle vastu ning neil plaanidel saab seinasse klõpsates lisada uksi ja aknaid (uks seisab selle tasandi põrandal). Seina enda liigutamiseks või kuju muutmiseks mine tasandile, millelt see algab.
4. Klõpsa kohta, kust esimene sein algab.
5. Klõpsa iga nurka. Iga klõps teeb ühe seina; järgmine algab sealt, kus eelmine lõppes. Pikkus ja nurk kuvatakse kursori kõrval.
6. Klõpsa esimesele punktile uuesti, et ruum sulgeda. Olekurida ütleb, mitu seina ruumil on, ja keskjoone režiimis saab iga sein oma välise kihi ruumi välispinnale.
7. Vajuta {{key:Esc}} (või parem klõps, või topeltklõps), et peatada ilma sulgemata.

Nurgad ühinevad iseenesest: kaks seina kohtuvad nurgalõikena, sein, mis lõppeb teise seina peal, peatub selle pinnal (T-ühendus) ning kolm või enam seina ühes punktis jagavad nurka. Ristuvad seinad jäävad nii, nagu nad on.

Terve ruum korraga: ava {{ui:Kujud}} ristkülikule, pööratud ristkülikule, hulknurgale, kaartele, valitud joontele või ümber kontuuri asetatud seintele (vaata [Seinakujud, lõikamine, nihutamine, venitamine ja lukustamine](topic:wall-tools)).

## Joonistusviite valimine

Vali enne esimest klõpsu **Keskjoon**, **Sisepind** või **Välispind**. Kui pind on valitud, kirjeldavad sinu klõpsud ja sisestatud pikkused seda pinda. BimCraft nihutab seina keskjoont poole kogupaksusest võrra ja ühendab järjestikused nurgad. Vali **Väline vasakul** või **Väline paremal** sõltuvalt joonistamise suunast. Suletud kontuuri puhul, mis on joonistatud vastupäeva, on väline pool paremal; päripäeva, vasakul. Sisepinna režiimis jääb seina keha joone välisküljele; välispinna režiimis teisele poolele. Pinnast joonistamisel säilitab valitud väline pool ahela sulgemisel. Keskjoonel võtavad seinad, mis ei sulge ruumi, valitud välise poole; ruumi sulgemine seab iga seina välise poole ruumi välisküljele iseenesest, olenemata joonistamise suunast.

Seinatüübi, viite või välise poole muutmine lõpetab praeguse ahela. Lühikese pöörde läheduses lõigatakse pikad nurgalõiked otstega ruudukujuliseks.

Joonistamise ajal saab tühja ruumi kohal olev otspunkt joonduda horisontaalselt või vertikaalselt seina otspunkti või varasema nurgaga. Katkendjuhik ühendab selle punkti püüdva kursoriga. Shift hoiab joonistussuuna risti; joondus peatub siis selle suuna piires. Lähedased otspunktid, keskpunktid ja seinte lõikepunktid on kaugemast joondusest tähtsamad.

## Asukohajoon

Kui **Viide** on **Välispind** või **Sisepind**, säilitab sein selle pinna oma asukohajoonena. Kui sein hiljem paksemaks muutub või selle väline pool pööratakse, jääb see pind paigale ja sein kasvab või pöördub selle ümber. Sirgjooneline sein, mis kohtub selle nurgas, järgib seda, nii et nurk jääb suletuks. Asukohajoont saab hiljem muuta paneelil **Omadused**: vaata [Seina, ukse või akna muutmine](topic:change-a-wall-or-door).

## Kõvera seina joonistamine

1. Klõpsa {{ui:Sein}} ja vali valikureal **Kuju** loendist **Kõver**.
2. Klõpsa kohta, kust sein algab, seejärel kohta, kus see lõpeb.
3. Klõpsa punktil selle kaarel. Või sisesta kaare kõrgus ja vajuta {{key:Enter}}.
4. Ahel jätkub seina lõpust. Vajuta {{key:Esc}}, et see lõpetada.

Kõver sein ühendub oma otstes olevate seintega (nurga- ja T-ühendused töötavad), moodustab ruume ning hoiab uksi ja aknaid oma kaare kaupa. Need jäävad sirgeteks üksusteks, risti seinaga oma keskpunktis, ning nende kaugus mõõdetakse mööda kaart. Sein võib pöörduda kuni kolm veerandringi. See püüab end oma otstele ja kaare keskpunktile.

Kõverate seinte jaoks veel valmimata: {{ui:Lõika / pikenda}} ja {{ui:Nurk}}, karkass, automaatsed plaanimõõtmed ning püüdmine mööda kaart. Vaata [Mis on veel tegemata](topic:not-built-yet).

## Pikkuse sisestamine klõpsamise asemel

Pärast esimest klõpsu sisesta ja vajuta {{key:Enter}}:

| Sisend | Joonistab |
|---|---|
| `12'6"` või `3810` | sellise pikkusega seina kursori näidatud suunas |
| `12'6"<90` | sellise pikkusega seina selles nurgas (kraadid, vastupäeva paremalt) |
| `@3000,0` | punkti, mis on nii kaugel viimasest, risti ja üles |
| `1200,3400` | selle punktini plaanil |

Kui seinatööriist on sisse lülitatud ja sa kirjutad arvu, läheb see otse kasti {{ui:Pikkus}}. Jalgade ja tollidega on lihtne arv tollid; millimeetrites on see millimeetrid. Ühiku saab alati kirjutada: `3.5 m`, `10 ft`, `6 1/2"`.

## Püüdmised

- Seinte otsad, nende pinnanurgad ja seinte keskpunktid püüavad kursorit, kui see on nende lähedal (ruut, kolmnurk).
- Kursor püüab seina keskjoont või kumbagi pinda (rist).
- Viimasest punktist hoiab suund iga 15° juures, kui on lähedal; hoia all {{key:Shift}}, et see jääks 0°, 90°, 180° või 270° juurde.
- Vabad suunad ümardavad pikkuse 1/2" (või 10 mm) täpsusele.

## Muutmine, tagasivõtmine, kustutamine

- Iga sein on üks samm loendis **Muudatused**: {{ui:Võta tagasi}} ja {{ui:Tee uuesti}} võtavad seinad tagasi ja panevad need uuesti paika.
- Kui {{ui:Vali}} on sisse lülitatud, klõpsa plaanil seinal, et see valida; 3D-vaade ja **Omadused** järgivad. {{key:Delete}} kustutab valitud seinad ning seinad, millega need olid ühendatud, koristatakse uuesti.

## Tasandid

Paneel **Tasandid** loetleb iga tasandi koos kõrgusmärgi ja kõrgusega.

- Sisesta uus nimi, kõrgusmärk või kõrgus ja vajuta {{key:Enter}}. Tasandi kõrguse (või kõrgusmärgi) muutmine nihutab kõiki selle kohal olevaid tasandeid sama palju ning tasandini ulatuvad seinad järgivad.
- {{ui:Lisa tasand ülale}} lisab ülemise tasandi kohale uue tasandi, sama kõrge.
- {{ui:Lisa tasand allapoole}} lisab madalaima tasandi alla (keldri), sama kõrge kui see: selle kõrgusmärk on negatiivne, kui madalaim tasand on 0, ega ükski teine tasand ei liigu. {{ui:Võta tagasi}} eemaldab selle uuesti.
- {{ui:Kopeeri see tasand…}} joonistab uuesti selle, mis on sinu vaadatavale tasandile, teisele tasandile või uuele tasandile ülal: selle seinad koos nende uste ja akendega, põrandad ja laed (mitte katused). Tasandini ulatuvad seinad ulatuvad uue tasandi kohal olevale tasandile; ruumid ilmuvad iseenesest. Üks {{ui:Võta tagasi}} võtab kõik tagasi. Kui teisel tasandil on juba seinu, lisatakse koopia nende juurde.
- {{ui:Ühikud}} tööriistaribal valib ühikud (jalad ja tollid, tollid, detsimaaljalad, millimeetrid, sentimeetrid või meetrid), mida kõik joonistustööriistad näitavad ja loevad.

## Salvestamine

Klõpsa {{ui:Salvesta IFC-na}}. Iga sein on IFC-sein oma keskjoone, ühendatud kuju, tüübi ja kihtidega, `Pset_WallCommon` ning baaskogustega (pikkus, kõrgus, pindalad ja mahud), nii et teised BIM-programmid saavad selle avada ja loendisse võtta.

## Hea teada

- Seinad joonistatakse keskjoonele. Paksus tuleb seinatüübist.
- Plaanil on siin joonistatud seinad täidetud ning kõik muu (teegi üksused, teistest programmidest pärit mudelid) lõigatakse sama tasandiga, ja lõike alla jääv on õhukeste joontena.
- Teiste programmide tehtud seinad on plaanil nähtavad, kuid neid ei saa veel nende tööriistadega muuta.
