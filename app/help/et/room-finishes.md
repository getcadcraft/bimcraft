---
title: Ruumi viimistlused ja viimistluste loendid
summary: Ütle, mis katab iga ruumi põranda, seinad ja lae, lisa tsoone nagu plaaditud pritsiala ning saa viimistluste loendid ruumi, seina ja tsooni järgi koos pindalade, plaatide arvu (koos lõigetega) ja alusmaterjali mahtudega.
keywords: viimistlus, viimistlused, viimistluste loend, ruumi viimistlused, põrandaviimistlus, seinaviimistlus, laeviimistlus, plintus, plaat, plaadid, lõigatud plaadid, plaatide arv, raie, alusmaterjal, tasanduskiht, aluslaud, krohv, tsoon, pritsiala, seinaosa, märgruum, siseruum, kogused
from: 8c30498c
---

## Mida sa teed

Ütle BimCraftile üks kord, millega iga ruum on viimistletud. Viimistluste loendid annavad siis pindalad, tellitavad plaadid ja alusmaterjali mahud ning muutuvad koos mudeliga.

## Sammud

1. Lülita {{ui:Joonista}} sisse, ava vasakpoolses paneelis **Loendid** ja klikki **Ruumi viimistlused**.
2. Jaotises **Viimistlustüübid** klikki **Lisa viimistlustüüp**. Anna sellele nimi, liik (Plaat, Leht, Kiht või Paneel) ja paksus. Plaadi puhul anna plaadi pikkus ja laius, vuuk ning raievaru protsentides. Kui viimistluse all on midagi (tasanduskiht, aluslaud, krohvikiht), nimeta see jaotises **Alusmaterjal** ja anna selle paksus.
3. Jaotises **Ruumid** vali iga ruumi põranda-, seina- ja laeviimistlus. Kui ruumil on plintus, sisesta selle nimi ja kõrgus.
4. Jaotises **Tsoonid** klikki **Lisa tsoon** ruumi osa jaoks, mis saab teise viimistluse:
   - **seina** tsoon on riba kahe kõrguse vahel põrandast (plaaditud pritsiala 0-st 1200-ni, seinaosa). See kehtib ruumi igal seinal või vali mudelis selle ruumi seinad ja klikki nuppu **Sees**, et tsoon jääks ainult nendele;
   - **põranda** või **lae** tsoon on ala, mille sisestad. See võetakse ruumi enda viimistlusest välja.
5. Klikki **Salvesta**. See on üks Võta tagasi samm. Pikkused sisestatakse projekti ühikutes.

## Loendid

Neli kirjet liitub loendite nimekirjaga:

- **Viimistlused ruumi järgi**: iga ruum oma põranda-, seina- ja laeviimistlusega, nende pindalad ning plintus oma pikkusega.
- **Viimistlused seina järgi**: iga seinalõik ruumi küljel ja riba, mida viimistlus katab, koos pikkuse, brutopindala, mahaarvamiste, netopindala ning plaatide puhul täisplaatide, lõigatud plaatide ja tellitavate plaatide arvuga.
- **Viimistlused tsooni järgi**: iga tsoon oma viimistluse, netopindala, plaatide ja alusmaterjali mahuga.
- **Viimistluste kogused**: üks rida iga viimistluse kohta: netopindala, täis- ja lõigatud plaadid, tellitavad plaadid, alusmaterjal ja selle maht ning viimistluse enda maht.

Rühmita, summeeri, salvesta ja ekspordi neid nagu iga teist loendit: vt [Loendi paigutamine, salvestamine ja eksport](topic:schedule-layouts). Klikki arvul, et valida, millest see tuleb: seina mahaarvamised valivad selle uksed ja aknad.

## Kuidas viimistlusi mõõdetakse

- **Seinad**: iga seinalõik ruumi küljel, selle pikkus mööda ruumi korrutatuna kõrgusega, mida viimistlus katab, miinus iga ukse ja akna osa selle kõrguse sees. Ruumist madalam sein viimistletakse oma ülemise servani. Projekti mõõtmismeetod otsustab, millised avad on mahaarvamiseks liiga väikesed ([Loendid](topic:plan-schedules-and-pdf)).
- **Põrandad ja laed**: ruum seinapindade sees, miinus selles olevad saared.
- **Plintus**: ruumi seinte pikkus miinus uste laius.
- **Plaadid**: paigutatud ruudustikuna pinna ühest nurgast, plaatide vahel üks vuuk. Pinna sees täielikult olev plaat on täisplaat; osaliselt pinna sees olev plaat (servas, ava ümber) on lõigatud plaat. Tellitavad plaadid on täisplaadid pluss lõigatud plaadid pluss raievaru, ümardatuna üles. Iga lõigatud plaat loetakse uueks plaadiks: lõikejääke ei kasutata uuesti.
- **Alusmaterjali maht**: netopindala korrutatud alusmaterjali paksusega.
- Arv, mis on märgitud **≈**, arvutatakse pindalast, mitte ei paigutata plaat-plaadi haaval: see on pind, millest on välja võetud sisestatud tsoon, või väga suur pind.

## Hea teada

- Viimistlused hoitakse hoone failis (projekti omadusehulk `CadCraft_Finishes`). Igale viimistlusega ruumile lisatakse ka standardne IFC omadusehulk `Pset_SpaceCoveringRequirements`, nii et teised programmid loevad nimed.
- Plaadipaigutus algab nurgast. Ruumi keskele tsentreeritud paigutust, mustrit (kalakont, tellissidemega) ja lõikejääkide taaskasutust ei arvutata.
- Kaareline sein ja ruumi piir, mis ei ole sein (ruumieraldaja), on loetletud kui **Muu piir** oma pikkusega ja ilma avadeta.
- Varem olemas olnud kirje **Viimistlused** loetleb seinatüüpide viimistluskihid; **Kihid: pindala ja maht** loetleb iga kihilise tüübi iga kihi. Siin olevad ruumi viimistlused rakendatakse ruumile nende peale.
- Assistent saab viimistlusi sinu eest seada käsuga `finishes_set`: vt [Lase AI-assistendil mudeliga töötada](topic:assistants).
