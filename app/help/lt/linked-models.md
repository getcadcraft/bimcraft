---
title: Kitų modelių susiejimas koordinavimui
summary: Rodykite kitą IFC modelį šalia savojo pagal nuorodą (niekada nesujungtą), išdėstykite jį pagal bendras koordinates, žemėlapio koordinates arba du taškus, prisikabinkite prie jo braižydami ir įkelkite iš naujo, kai pasikeičia jo failas.
keywords: susiejimas, susietas modelis, nuoroda, xref, koordinavimas, federacija, konstrukcijos, MEP, konsultantas, bendros koordinatės, geodezija, žemėlapio koordinatės, įkelti iš naujo, iškelti, dokumento nuoroda, IfcDocumentReference
from: 3e0f1eab
---

## Ką darysite

Braižykite prie konsultanto modelio (konstrukcijų, inžinerinių sistemų, esamo pastato), nieko nekopijuodami į savo failą.

**Susietas modelis** rodomas 3D vaizde ir pjaunamas jūsų planuose, bet niekada nekeičiamas ir niekada neįrašomas į jūsų modelį. Jūsų modelis saugo tik nuorodą: failo pavadinimą ir jo vietą.

## Susieti modelį

1. Kairiojo skydelio skyriuje {{ui:Susieti modeliai}} spustelėkite {{ui:Susieti modelį…}} ir pasirinkite IFC failą. Jis iš karto rodomas, o jo eilutėje parašyta **Rodoma**.
2. Pasirinkite, kur jis bus, skiltyje {{ui:Išdėstymas}}:
   - **Bendros koordinatės** (pradžiai): jo koordinatės yra jūsų, kaip tada, kai abu modeliai buvo išmatuoti nuo tos pačios pradžios.
   - **Žemėlapio koordinatės**: abiejų failų žemėlapio koordinatės sulygiuoja juos (abiem reikia žemėlapio konvertavimo; BimCraft apie tai praneša, kai jo nėra).
   - **Pagal du taškus…**: spustelėkite tašką susietame modelyje, paskui vietą jūsų modelyje; tada antrą porą. Nuoroda perkeliama ir pasukama (apie vertikalę), kad tilptų.
3. Kiekvienas susiejimo ir išdėstymo pakeitimas yra vienas žingsnis: {{key:Mod+Z}} jį atšaukia.

## Dirbti su juo

- Planuose susietas modelis rodomas pjūvyje lygio pjūvio aukštyje plonomis linijomis, o įrankis {{ui:Siena}} ir kiti braižymo įrankiai prisikabina prie jo kampų ir kraštų.
- Pasirinkite jo elementus 3D vaizde, kad perskaitytumėte savybes. Susietas modelis niekada nėra tas, kurį redaguojate, todėl jo perjungiklis {{ui:Modeliai}} yra išjungtas.
- **Failas pasikeitė?** Kai naršyklė gali stebėti failą (failas atidarytas per jos failų parinkiklį arba programoje Studio), BimCraft pats įkelia nuorodą iš naujo praėjus kelioms sekundėms po to, kai failas vėl įrašomas, ir apie tai praneša. Kitu atveju spustelėkite {{ui:Įkelti iš naujo}}.
- {{ui:Iškelti}} jį paslepia ir atlaisvina atmintį; nuoroda lieka jūsų modelyje. {{ui:Įkelti…}} parodo jį vėl (failą pasirenkate jūs: naršyklė negali pati atidaryti failo pagal jo pavadinimą).
- × pašalina nuorodą iš jūsų modelio.

## Ko turėtumėte matyti

- Jūsų IFC faile: IfcDocumentReference kiekvienai nuorodai (failo pavadinimas), susietas su projektu, ir jos vieta projekto savybių rinkinyje CadCraft_Links. Vėl atidarius modelį, jo nuorodos rodomos kaip **Neįkelta**, kol jų neįkelsite.

:::note
Susidūrimų patikros, Palyginimas ir Paieška gali naudoti įkeltą nuorodą kaip bet kurį kitą atidarytą modelį: žr. [Kelių IFC modelių peržiūra kartu](topic:several-models).
:::
