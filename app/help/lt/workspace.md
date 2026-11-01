---
title: BimCraft ekranas
summary: Kiekvienos juostos, skydelio ir mygtuko apžvalga pagal ekrane rodomą pavadinimą ir tai, kaip ekranas keičiasi kiekvienam failo tipui.
keywords: ekranas, išdėstymas, skydeliai, įrankių juosta, sąsaja, ui, apžvalga, savybių skydelis, naršyklė, programos juosta
from: 2eb01ec2
---

BimCraft ekrane viršuje yra juosta, o po ja – trys sritys: skydelis kairėje, scena viduryje ir {{ui:Savybės}} skydelis dešinėje. Kas rodoma kiekvienoje srityje, priklauso nuo to, ką atidarėte: IFC modelio, projekto ar šeimos failo, brėžinio ar aplanko.

## Programos juosta

Plona juosta viršuje priklauso CadCraft svetainei, o ne pačiam BimCraft. Iš kairės į dešinę:

- CadCraft ženklas: veda į CadCraft pradžios puslapį.
- Programos pavadinimas ir versijų meniu. Darbuotojų versijoje rodoma, kurią versiją naudojate, ir leidžiama perjungti į išleistą versiją.
- {{ui:Apie BimCraft}}: programos puslapis svetainėje.
- {{ui:Parametrai}}: BimCraft savieji parametrai ir visų programų bendri. Žr. [BimCraft parametrai](topic:settings).
- {{ui:Visas ekranas}}: perjungia ekrano režimus. Žr. toliau [Ekrano režimai](topic:workspace#screen-modes).
- {{ui:Popierius}} ir {{ui:Modelis}}: šviesi ir tamsi temos. 3D vaizdas ir 2D brėžiniai seka jūsų pasirinktą temą.

## Kairysis skydelis

Kairysis skydelis visada prasideda **Atidaryti failą ar aplanką**:

- Įmetimo sritis {{ui:Pasirinkite failą arba įmeskite čia failą ar aplanką}}. Spustelėkite ją, kad pasirinktumėte vieną failą, arba įmeskite ant jos failą ar aplanką (arba bet kur puslapyje).
- {{ui:Atidaryti aplanką}}: pasirinkite visą projekto aplanką. Žr. [Atidaryti visą projekto aplanką](topic:open-project-folder).
- {{ui:Naujausi aplankai}}: atsiranda Chrome ir Edge naršyklėse, kai atidarote aplanką aplanko parinkikliu arba jį įmetę. Spustelėkite {{ui:Atidaryti iš naujo}} ir aplanko pavadinimą, kad vėl jį atidarytumėte, arba mažą × , kad jį pamirštumėte.

Po juo atsiranda sekcijos, kai jos taikomos:

| Sekcija | Kada rodoma | Kas joje |
|---|---|---|
| {{ui:Pakeitimai}} | Atidarytas IFC modelis | Neįrašyti pakeitimai, naujausi pirmi, su {{ui:Anuliuoti}} ir {{ui:Įrašyti kaip IFC}} |
| {{ui:Failas}} | Atidarytas modelis arba failo kortelė | Failo duomenys: dydis, schema ar leidimas, projektas, autorius, elementų skaičius |
| {{ui:Brėžinys}} | Atidarytas DWG ar DXF | Formatas, vienetai, objektų ir sluoksnių skaičiai, lapai, susieti brėžiniai, įranga |
| {{ui:Aplankas}} | Atidarytas aplankas | Failų ir modelių skaičiai, dydis, rastos problemos |
| {{ui:Atgal į aplanką}} | Atidarėte failą iš aplanko | Grįžtama į aplanko ataskaitą |
| {{ui:Sluoksniai}} | Atidarytas brėžinys | Žymės langelis kiekvienam sluoksniui, su {{ui:Visi įjungti}} ir {{ui:Visi išjungti}} |
| {{ui:Aukštai}} | Atidarytas IFC modelis | Žymės langelis kiekvienam aukštui, viršutinis aukštas pirmas |
| {{ui:Elementai}} | Atidarytas IFC modelis | Kiek kiekvienos rūšies elementų turi modelis (30 dažniausių) |

## Scena

Ekrano viduryje rodomas atidarytas failas.

- **Tuščia**: „Atidarykite pastato modelį.“ su {{ui:Pasirinkti failą}} ir {{ui:Atidaryti aplanką}}, bei trumpu kiekvieno formato aprašymu.
- **IFC modelis**: 3D vaizdas su įrankių juosta viršuje, pagal pavadintas grupes kaip CadCraft braižymo programos, kiekvieno įrankio piktograma virš jo pavadinimo: {{ui:Vaizdas}} ({{ui:Tilpti}}, {{ui:Viršus}}, {{ui:Priekis}}, {{ui:Iš šono}}, {{ui:Kraštinės}}, {{ui:Erdvės}}); {{ui:Redaguoti}} ({{ui:Anuliuoti}}, {{ui:Perdaryti}}, {{ui:Kopijuoti}}, {{ui:Įklijuoti}} ir {{ui:Daugiau}}, žr. [Kopijuoti, įklijuoti ir dubliuoti bibliotekos elementus](topic:copy-paste)); {{ui:Modelis}} ({{ui:Vienetai}} ir {{ui:Braižymas}}); {{ui:Biblioteka}} ({{ui:Biblioteka}}, {{ui:Įranga}}, {{ui:Atnaujinimai}}, {{ui:Nuopelnai}}); {{ui:Peržiūra}} ({{ui:Rodyti}}, {{ui:Pjūvis}}, {{ui:Vaikščioti}}, {{ui:Matuoti}}; žr. [Pjauti IFC modelį pjūvio plokštuma](topic:section-plane)); ir {{ui:Išvestis}} (atvaizdavimas, gyvasis vaizdas, VR, eksportai, dažymas ir įrašyti vaizdai). Įjungus {{ui:Braižymas}}, žemiau esanti braižymo juosta atrodo panašiai: {{ui:Vaizdas}} (lygis ir plano rūšis), {{ui:Braižymas}}, {{ui:Redaguoti}} ir {{ui:Biblioteka}}. Vaizdo kubas yra apatiniame dešiniajame kampe. Žr. [Atidaryti IFC modelį ir apžvelgti 3D](topic:open-ifc-model). {{ui:Parametrai}}, {{ui:Bendra}} pasirenka, ar šiuose mygtukuose rodyti piktogramas, pavadinimus ar abu, rodyti ar slėpti grupių pavadinimus; dešiniuoju pelės mygtuku spustelėkite įrankių juostą, kad išdėstytumėte jos įrankius ir grupes. Žemame lange įrankių juosta nebeberodo pavadinimų po piktogramomis.
- **Projekto ar šeimos failas**: failo kortelė su peržiūros paveikslėliu, projekto informacija ir susietais failais. Žr. [Skaityti projekto ar šeimos failą](topic:read-rvt-file).
- **DWG ar DXF**: skirtukų eilė ({{ui:Modelis}}, tada po vieną kiekvienam lapui, tada {{ui:Įranga}}, kai brėžinyje yra pažymėta įranga, {{ui:3D}}, {{ui:Tilpti}} ir {{ui:Spausdinimo vaizdas}}), brėžinys ir tiesioginės X ir Y koordinatės kampe. Žr. [Peržiūrėti DWG ar DXF brėžinį](topic:view-dwg) ir [Pažiūrėti DWG ar DXF brėžinį 3D](topic:dwg-in-3d).
- **Aplankas**: aplanko ataskaita su langeliu {{ui:Pradėkite čia}} ir modelių, nuorodų, IFC modelių bei brėžinių lentelėmis. Žr. [Atidaryti visą projekto aplanką](topic:open-project-folder).

**Būsenos eilutė** scenos apačioje rodo, ką daro BimCraft („Skaitomas modelis…“, „Kuriama geometrija: 1200 iš 5400 elementų“), o kai kas nors nepavyksta – raudonai, kas nepavyko. Pranešimai apie sėkmę po kelių sekundžių išblunka.

## Savybių skydelis

Dešinysis skydelis rodo:

- IFC modeliui: spustelėtą elementą su jo pavadinimu, tipu, žyma, GlobalId ir visais savybių rinkiniais. Reikšmės, kurias galima keisti, atrodo kaip mygtukai. Žr. [Savybių skydelio laukai](topic:properties-panel).
- Brėžiniui: kaip judėti po brėžinį, brėžinio susietus brėžinius ir paveikslėlius bei ar kiekvienas rastas, ir sąrašą to, kas dar **Dar nenubraižyta**.
- Failo kortelei ar aplankui: trumpa pastaba, ką atidaryti toliau.

## Mažame ekrane

Kai langas siauresnis nei nešiojamojo kompiuterio ekranas, BimCraft sudeda sritis į eilę: scena viršuje, po ja skydeliai. Slinkite puslapį, kad pasiektumėte skydelius. Telefone jie sudaro vieną stulpelį, planšetėje – du.

## Ekrano režimai

Mygtukas {{ui:Visas ekranas}} programos juostoje arba {{key:Ctrl+Shift+F}} visose platformose perjungia tris režimus:

1. Įprastas.
2. Visas ekranas, juostos vis dar rodomos.
3. Visas ekranas su paslėpta programos juosta. Perkelkite žymeklį į viršutinį kraštą arba palieskite ten, kad ji vėl atsirastų.

Spauskite {{key:Esc}}, kad grįžtumėte į įprastą režimą. Naršyklės be viso ekrano palaikymo (pavyzdžiui, iPhone) perjungia tik tarp įprasto režimo ir paslėptų juostų.

## Susiję

- [Klavišai ir pelė](topic:keyboard)
- [Failai, kuriuos BimCraft atidaro ir įrašo](topic:files)
