---
title: Küte- ja jahutuskoormuste hindamine
summary: Iga ruumi soojuskadu, tema küte aasta jooksul kraadpäevade järgi ja jahutuse tipp, mudeli piirete ja iga elemendi U-väärtuse järgi, kõik sisendid nähtaval. Projekteerimisabivahend, mitte vastavusarvutus.
keywords: energia, küte, jahutus, soojuskadu, soojuskoormus, jahutuskoormus, U-väärtus, soojusläbivuskoefitsient, kraadpäevad, hdd, ventilatsioon, õhuvahetus, sisemised soojusvood, päikesesoojus, lambda, soojusjuhtivus, soojustus, esialgne projekteerimine, analüüs, ruumid
from: ec312d20
---

Vahekaardil {{ui:Päevavalgus}} avage pärast {{ui:Arvuta}} jaotis {{ui:Küttekoormused ja jahutuskoormused}} ja klõpsake {{ui:Arvuta koormused}}. Iga ruum saab oma **soojuskao** külmal projekteerimispäeval, oma **küte aasta jooksul** ja oma **jahutuse tipu** kuumal päeval. Midagi ei laadita üles; mudelis midagi ei muutu, kui just ei sisesta U-väärtust.

:::warning
See on **projekteerimisabivahend, mitte vastavusarvutus**: püsiseisundi hinnang, kus kõik sisendid on ekraanil. See **ei ole** ISO 52016-1 meetod, mitte simulatsioon ega energiasertifikaat; see ei dimensioneeri katlaid, soojuspumpasid ega jahutusmasinaid. Kontrollige tulemusi ja dimensioneerige seadmed inseneriga.
:::

## Mis piirab iga ruumi

BimCraft leiab piirded mudelist endast, nii et iga programmi IFC töötab (ta ei vaja ruumipiire, mida mõned programmid eksportivad). Iga ruumi pinna iga osa juurest vaadatakse otse välja:

- esimene sein, aken, uks, põrand, katus, kate, kardinaselt või tala, millega see kohtub, **piirab** seda osa;
- vahetult pärast seda elementi on kas **teine ruum** (loetakse naaberruumiks samal temperatuuril: kadu ei ole), **mitte midagi** (väljas) või, madalaima korruse põranda all, **pinnas**;
- avatud uks teise ruumi on naaberruum; osa, mis ei kohta midagi (1.5 m külgsuunas või allapoole, 8 m ülespoole piires), on loetletud ruumi all ja jäetakse välja.

Aknad ja uksed võtavad oma mõõdud IFC-st (kogulaius × kõrgus) seinast, millesse nad on paigutatud. Klõpsake tabelis ruumil, et näha iga seda piiravat elementi koos pindala, U-väärtuse ja selle allikaga.

## U-väärtused

Iga elemendi jaoks kasutab BimCraft järjekorras:

1. **IFC enda U-väärtus** — `ThermalTransmittance` elemendi ühises omaduste komplektis (näiteks `Pset_WallCommon`) või selle tüübis. Enamik projekteerimisprogramme suudab selle kirjutada.
2. **Selle materjalikihid** — 1 ÷ (sisemine pinnatakistus + iga kihi paksus ÷ selle soojusjuhtivus λ + väline pinnatakistus), tavaliste pinnatakistustega (seinte puhul 0.13 ja 0.04 m²K/W; lage üles 0.10 ja sisemisel allapoole 0.17). Alustuseks tüüpilised soojusjuhtivused (mineraalvill 0.035, tellis 0.77, betoon 1.4…); {{ui:Materjalide soojusjuhtivus}} all sisestage tootja väärtus ja kõik nendest kihtidest tulenevad U-väärtused järgivad seda.
3. **Tüüpiline väärtus** (seinad 0.3, katused 0.2, põrandad 0.25, aknad 1.4, uksed 1.6 W/m²K), märgitud sellisena — sisestage oma.

Ruumi üksikasjades sisestatud U-väärtus kirjutatakse elemendi ühisesse omaduste komplekti `ThermalTransmittance`-ina (üks samm; {{key:Mod+Z}} võtab selle tagasi). Kui mitu elementi jagavad seda komplekti (näiteks üks seinatüüp), muutuvad need kõik koos ning olekurida ütleb, mitu neid on.

## Küte

- **Soojuskadu** = Σ U × A × (sise − väline) kõige jaoks, mis on väljas, + Σ U × A × (sise − pinnas) maapinnal olevate põrandate jaoks + 0.335 × õhuvahetus tunnis × ruumi maht × (sise − väline). 0.335 Wh m³ kohta kelvini kohta on õhu tihedus (1.2 kg/m³) korrutatud selle soojusmahtuvusega (1005 J/kgK).
- **Küte aasta jooksul** = (ruumi kadu kraadi kohta väljapoole läbi konstruktsiooni ja õhu, pluss selle pinnaskadu, skaleeritud sama vahega) × **kraadpäevad** × 24 ÷ 1000, kWh-des. Sisestage paiga kraadpäevad või kasutage {{ui:Loe kraadpäevad CSV-st…}} (üks rida päeva või kuu kohta; iga rea viimane number liidetakse kokku). Kasutage kraadpäevi selle baastemperatuuri järgi, mida teie allikas kasutab: see baas arvestab juba inimeste, valgustite ja päikese tasuta soojust.

## Jahutus

**Jahutuse tipp** = läbi konstruktsiooni ja õhu soojus suvisel projekteerimistemperatuuril + inimesed (põrand inimese kohta × soojus inimese kohta) + valgustus ja seadmed põrandaruutmeetri kohta + **päike**: selle ruumi tipp jaotisest {{ui:Päike läbi akende kuupäeval}}. Arvutage päike esmalt kuuma päeva kohta; kuni selleni loetakse päikest nulliks ja jaotis ütleb seda. Iga osa tipud liidetakse kokku isegi siis, kui need langevad erinevatele tundidele, mis veidi ülehindab.

## Mida see välja jätab

- ISO 52016-1 igakuine ja tunnipõhine meetod (tasuline standard), hoone massi salvestatud soojus, soojussillad, küte- ja jahutussüsteemide toimimine ning kliimafailid.
- Üksteise kõrval olevad ruumid võetakse samal temperatuuril; küttimata ruume ei modelleerita.

Vt ka [Hinnake päevavalgust igas ruumis](topic:daylight-factor).
