---
title: Muuda seina, ust või akent
summary: Klõpsa joonistatud seinal, uksel või aknal ja muuda selle tüüpi, suurust, kõrgust või asukohta omadustes või lohista plaanil; iga muudatus on üks tagasivõtmise samm.
keywords: joonda risti, ruut, 90, täisnurk, kaldu, nurk, orto, ruumi suurus, sisepind, välispind, mõõda alates, nihke kaugus, sisestatud kaugus, kumer, kaar, kaare kõrgus, raadius, asukohajoon, joondus, muuda, omadused, seinatüüp, paksus, pikkus, kõrgus, alusnihe, ülaosa, tasand, pööra, väline, ukse suurus, akna suurus, alussill, kaugus, nihuta, haarang, lohista, muuda tüüpi, mitu
from: 63052d5d
---

## Mida teed

Muuda seda, mida joonistasid: vali sein, uks või aken ja sisesta uus number **Omadustes** või lohista plaanil. Plaan ja 3D-vaade järgivad, nurgad liituvad uuesti ja uksed ning aknad jäävad oma seintesse.

## Seina muutmine

1. Kui {{ui:Joonista}} ja {{ui:Vali}} on sisse lülitatud, klõpsa seinal plaanil (või 3D-vaates).
2. **Omadused** näitab kasti seina numbritega. Muuda ühte ja vajuta {{key:Enter}}:
   - **Seinatüüp**: mõni teine algtüüp. Paksus ja kihid muutuvad selle järgi.
   - **Paksus**: mis tahes paksus. Tüüp säilitab oma muud kihid ja põhikiht (vardad või plokk) võtab vahe, nt „Väline 2×6, 200 mm“.
   - **Mõõda alates**: **Telgjoon**, **Sisepind** või **Välispind**. **Pikkus** ja **Ruumi suurus** loetakse ja seatakse sellest lähtuvalt. Välispind on see, mida plaani mõõtmed näitavad.
   - **Pikkus**: seina ots liigub mööda oma joont. Sellel otsas ühendatud sein liigub iseendaga risti ja säilitab oma nurga.
   - **Ruumi suurus** (kui ruumi üle on paralleelne sein): sisesta soovitud suurus. See sein liigub risti ja ühendatud seinad venivad järele.
   - **Nihuta risti**: sisesta, kui kaugele seina iseendaga risti nihutada: tavaline number nihutab välja, miinusmärgiga number sisse.
   - **Nurk ühendatud seinani**: nurk seina ja selle alguses ühendatud seina vahel. Sisesta 90, et see seada risti. Seinal, mis ei ole kuhugi ühendatud, on **Suund**, kraadides ida suunast.
   - {{ui:Joonda risti}}: pöörab selle seinaga ühendatud seinad tagasi täisnurkadesse, selle suuna järgi, mille suunas nende enamik pikkusest kulgeb. See töötab terve ühendatud ruumi või paigutuse kohta, olenemata sellest, millise seina valid. Seinad, mis on täisnurgast rohkem kui 10 kraadi kaugel, jäävad nagu on, nii et 45 kraadi seatud sein on kindel. Üks {{ui:Võta tagasi}} võtab kõik tagasi.
   - **Seina kõrgus**: **Kuni järgmise tasandini** järgib seda tasandit; **Kuni tasandini 3** (ja ükskõik millisest kõrgemal) teeb seina, mis kulgeb läbi vahepealsete tasandite, ja kõrguse sisestamine määrab, kui palju selle tasandi alla või peale ulatub ülaosa. **Fikseeritud kõrgus** säilitab sinu sisestatud numbri. **Kulgeb läbi** loetleb tasandid, mida selline sein läbib: seda joonistatakse nendes plaanides heledamalt, ruumid seal sulguvad selle vastu ning uksi ja aknaid saab nendes plaanides seina panna. Seda liigutatakse ja kujundatakse tasandil, kus see algab.
   - **Alusnihe**: kui kaugel tasandist seina algus on. Selle ülaosa jääb sinna, kus see oli.
   - **Väline**: {{ui:Pööra}} paneb välised kihid teisele pinnale.
   - **Asukohajoon**: **Telgjoon**, **Välispind**, **Sisepind**, **Vasak pind** või **Parem pind**. Muutmine ei liiguta midagi. Hiljem, kui sein muutub paksemaks (tüübi või **Paksuse** järgi) või selle väline pool pööratakse, jääb asukohajoon paika ja sein kasvab või pöördub selle ümber. Sirge sein, mis selle juures nurgas kohtub, järgib seda, nii et nurk jääb suletuks. Valitud seina asukohajoon on plaanil katkendjoonena. Mitme seina valimisel seatakse see kõigile.
   - **Kaare kõrgus** (kumerad seinad): kui kaugele keskpunkt kaldub sirgjoonest. 0 teeb sirgeks; negatiivne väärtus kaldub teise poole. Raadius näidatakse selle kõrval.
3. Iga muudatus on üks samm jaotises **Muudatused**; {{ui:Võta tagasi}} võtab selle tagasi.

## Lohista sein plaanil

Kui üks sein on valitud, näitab see kolme haaret: ruut igas otsas ja ring keskel.

- Lohista ots, et sein pikemaks, lühemaks või pööraks. See haakub nagu seinatööriist ja kinnitub risti teise otsa ühendatud seina suhtes, kui oled 3 kraadi piires; {{key:Shift}} hoiab selle plaani telgedel.
- Seinad, mis on ühendatud otsaga, mida lohistad, säilitavad oma nurga: nende otsad libisevad mööda oma jooni, et kohtuda seina uue joonega, nii et midagi ei jää kaldu. Hoia all {{key:Mod}}, et lohistada vabalt (ühendatud seina ots tuleb sinu järel ja see sein pöördub), või {{key:Alt}}, et katkestada selle seina ühendused.
- Lohista keskelt, et liigutada kogu sein iseendaga risti, sõltumata lohistamise suunast. Selle nurgad libisevad mööda ühendatud seinu, nii et need säilitavad oma nurga.
- Hoia keskelt lohistades all {{key:Mod}}, et liigutada vabalt, kui tahad nurga katkestada. {{ui:Joonda risti}} toob selle tagasi.
- Haarde all hoides sisesta kaugus ja vajuta {{key:Enter}} (või lase lahti): sein läheb täpselt nii kaugele, nagu lohistasid. {{key:Esc}} katkestab liigutuse.
- Valitud kumer sein näitab haardeid otstes ja ümmargust haaret kaare keskel. Lohista ümmargust haaret, et seda painutada.
- Uksed ja aknad jäävad seina. Sein, mis on liiga lühike selle hoitavate jaoks, keeldub teatega „See ei mahu sellesse seina.“

## Ukse või akna muutmine

1. Klõpsa uksel või aknal plaanil.
2. **Omadustes**: **Tüüp** (sama liigi teine uks või aken), **Laius**, **Kõrgus**, **Alussill** (aknad), **Algusest** ja **Lõpust** (kaugus seina pinna mõlemast otsast selle servani), **Hingede pool** {{ui:Pööra}} (ühelehelised uksed ja kaarakende; liugu-, varju-, kuur- ja harmooniuksed ütlevad selle asemel **Avaneb**; fikseeritud, riputatud ja pildiaknad ning topeltuksed seda ei oma), ja **Avaneb suunda** (uksed) või **Raami pool** (aknad) {{ui:Pööra}}.
3. Või lohista seda mööda seina või teisele seinale: vt [Uksed ja aknad](topic:doors-and-windows).

## Mitme korraga muutmine

Vali mitu seina (või mitu ust või akent) klõpsuga koos {{key:Shift}} või {{key:Mod}} all. **Omadused** pakuvad seda, mida nad jagavad: **Muuda tüüpi…**, kõrgus, suurus. Üks muudatus seab kõik ja üks {{ui:Võta tagasi}} võtab kogu muudatuse tagasi.

## Hea teada

- Numbrid kuvatakse tööriistaribal valitud {{ui:Ühikud}} järgi.
- Seinad, uksed ja aknad teistest programmidest näitavad oma IFC andmeid **Omadustes** nagu varem, ilma selle kastita.
