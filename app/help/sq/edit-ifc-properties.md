---
title: Ndrysho vetitë IFC dhe ruaj një kopje të ndryshuar
summary: Ndrysho emrin, etiketën, përshkrimin ose një vlerë vetie të një elementi, zhbëje, dhe shkarko një skedar të ri IFC ndërsa origjinali mbetet siç ishte.
keywords: ndrysho, vetitë, parametrat, etiketa, emri, riemërto, shenjë, ruaj si, shkarko, zhbëj, kopjo, ifc, shkruaj
from: f8035d62
---

## Çfarë do të bësh

Korrigjo të dhënat e një modeli IFC: riemëro një element, rregullo etiketën e tij, ndrysho një vlerë vetie. Pastaj ruaj një skedar të ri IFC me ndryshimet e tua. Skedari që hape nuk preket kurrë.

## Çfarë mund të ndryshosh

| Fusha | E ndryshueshme |
|---|---|
| Emri, Lloji i objektit, Etiketa, Përshkrimi | Po |
| Vlerat e vetive të thjeshta (tekst, numra, Po/Jo) | Po |
| Vetitë e tipit (grupet e shënuara "(type)") | Po, dhe ndryshimi zbatohet për çdo element të atij tipi |
| Lloji, GlobalId, Rreshti | Jo |
| Sasitë (gjatësi, sipërfaqe, vëllime, numërime) | Jo |
| Listat, enumerimet dhe vlerat me shumë pjesë | Jo |
| Gjeometria, pozicioni, shtimi ose fshirja e elementeve | Jo |

## Hapat

1. Hap një model IFC dhe kliko elementin që do të ndryshosh.
2. Te paneli {{ui:Vetitë}}, kliko vlerën që do të ndryshosh. Ajo bëhet një kuti teksti. Një vlerë bosh shfaqet si *bosh*.
3. Shkruaj vlerën e re.
4. Shtyp {{key:Enter}}, ose kliko diku tjetër, për ta mbajtur. Shtyp {{key:Esc}} për ta anuluar.
5. Shiko vlerën: tani është me shkronja të trasha me një shirit blu pranë saj, që shënon një vlerë të ndryshuar.
6. Shiko seksionin {{ui:Ndryshimet}} në të majtë: ndryshimi listohet si *element*: *fusha*, vlera e vjetër në vlerën e re.
7. Përsërit për vlera ose elemente të tjera.
8. Kliko {{ui:Ruaj si IFC}} (shfaq sa ndryshime presin, për shembull "Ruaj si IFC (3)"), ose shtyp {{key:Mod+S}}.
9. Gjej "*emri origjinal* (edited).ifc" në dosjen e shkarkimeve.

## Çfarë duhet të shohësh

Rreshti i statusit thotë "U ruajt *emri* (edited).ifc me *n* ndryshime (… bajt). Skedari origjinal nuk është ndryshuar." Lista {{ui:Ndryshimet}} zbrazet, gati për raundin tjetër.

## Llojet e vlerave

- **Tekst**: çdo gjë që shkruan mbahet ashtu siç është. Pastrimi i Emrit, Llojit të objektit, Etiketës ose Përshkrimit heq vlerën.
- **Numra**: shkruaj një numër të thjeshtë, si `2.4` ose `1200`, në njësitë e vetë skedarit. Pa simbole njësish. Çdo gjë tjetër shfaq "Përdor një numër."
- **Numra të plotë** (numërime, numra të plotë): "Përdor një numër të plotë." nëse shkruan një decimal.
- **Po/Jo**: vlera bëhet një menu me Po dhe Jo.

Çdo vlerë e mban llojin e vet IFC, kështu që një numër mbetet numër dhe programet e tjera e lexojnë saktë.

## Zhbërja

1. Kliko {{ui:Zhbëj}} te seksioni {{ui:Ndryshimet}}, ose shtyp {{key:Mod+Z}} ndërsa nuk shkruan në një fushë.
2. Përsërit për të zhbërë më shumë. Çdo zhbërje heq ndryshimin më të ri.

Nuk mund të zhbësh përtej një ruajtjeje: pas ruajtjes, lista fillon përsëri. Skedari i ruajtur mban gjithçka.

## Pse ndryshimi yt prek vetëm një element

Eksportuesit kursejnë hapësirë duke ndarë të dhëna. Një grup vetish mund të ndahet nga njëzet dyer, dhe një vlerë ("Klasa e zjarrit: 60 min") mund të listohet në nëntëdhjetë grupe. Nëse BimCraft thjesht ndryshonte vlerën e përbashkët, çdo element që e ndan do të ndryshonte gjithashtu.

Prandaj BimCraft kopjon përpara se të shkruajë:

- Nëse grupi i vetive që ndryshon ndahet me elemente të tjerë, elementi yt merr kopjen e vet të grupit, dhe vetëm kopja ndryshon.
- Nëse vlera ndahet me grupe të tjera, grupi yt merr kopjen e vet të vlerës.

Fqinjët mbajnë të dhënat e vjetra. Kjo quhet *copy-on-write* (kopjo kur shkruan). Shton disa hyrje të vogla në skedar, që çdo program IFC i lexon normalisht.

**Vetitë e tipit janë përjashtimi me qëllim.** Një grup i shënuar "(type)" i përket tipit të elementit, dhe në IFC çdo element i atij tipi e lexon nga aty. Ndryshimi i tij ndryshon tipin, kështu që çdo element i tipit shfaq vlerën e re. Lista {{ui:Ndryshimet}} i shënon këto ndryshime me "(type)". Shih [Ndrysho një veti tipi për çdo element të një tipi](topic:type-vs-instance).

## Paralajmërime përpara se të humbasësh punë

- Hapja e një skedari tjetër ndërkohë që ke ndryshime të paruajtura pyet "Ke *n* ndryshime të paruajtura te *skedari*. T'i hedh?" Kliko Anulo për të vazhduar punën, pastaj ruaj.
- Mbyllja ose rifreskimi i skedës me ndryshime të paruajtura bën shfletuesin të pyesë nëse do të largohet.

## Gabimet e zakonshme

- **Shkrimi i njësive.** `2400 mm` refuzohet. Shkruaj `2400`.
- **Ndryshimi i një vetie tipi kur donte një element.** Kërko shënimin "(type)" para se të shkruash. Nëse do që një element të ndryshojë, ndrysho një veti instance, ose Etiketën ose Emrin e tij.
- **Pritja që skedari origjinal të ndryshojë.** Ruajtja shkarkon gjithmonë një skedar të ri. Zëvendëso origjinalin vetë nëse kjo do, dhe mbaj një kopje.
- **Shtypja e {{key:Mod+S}} pa ndryshime.** BimCraft ruan vetëm kur ka çfarë të ruajë; ndryshe mund të hapet "Ruaj faqen" e shfletuesit. Mbylle.
- **Ruajtja dy herë dhe pritja e dy skedarëve të vegjël.** Çdo ruajtje mban çdo ndryshim që nga hapja e modelit.
- **Pritja që ndryshimet të kthehen në një skedar projekti.** BimCraft shkruan vetëm IFC. Sill IFC-në e ndryshuar në programin tënd të hartimit ashtu si importon çdo IFC.
