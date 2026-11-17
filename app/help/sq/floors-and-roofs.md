---
title: Dhoma, dysheme, tavane dhe çati
summary: Dhomat shfaqen sapo muret t'i mbyllin; i jep një dhome ose gjithë ndërtesës një dysheme dhe një tavan, dhe vendos mbi muret një çati me katër ujëra ose me fronton. Të gjitha ndjekin kur lëvizin muret.
keywords: dhomë, dhoma, hapësirë, sipërfaqe, perimetër, dysheme, pllakë, nëndysheme, tavan, çati, çati me katër ujëra, çati me fronton, pjerrësi, zgjatim, strehë, kulm, luginë, 6/12
from: 1fb1813c
---

## Çfarë do të bësh

Përfundo kornizën e ndërtesës. Dhomat dalin vetvetiu nga muret; dyshemetë, tavanet dhe çatia kërkojnë nga një klikim secila. Meqenëse gjenden nga muret, ndjekin kur lëvizin muret.

## Dhomat

Çdo hapësirë e mbyllur nga muret e vizatuar është një dhomë. Shfaqet sapo mbyll muri i fundit, me një numër (101, 102 … në katin e parë, 201 … në katin tjetër) dhe një emër (**Dhoma 1**, **Dhoma 2** …), dhe sipërfaqja e saj shfaqet në mes të planit.

- Me {{ui:Përzgjidh}} aktiv, kliko brenda një dhome për ta zgjedhur. Te **Vetitë** ndrysho **Emrin** (për shembull `Kuzhina`) dhe **Numrin**; sipërfaqja dhe perimetri i saj shfaqen.
- Fshi një mur mes dy dhomave dhe ato bëhen një; vizato një mur përmes një dhome dhe ajo bëhet dy. Një dhomë mban emrin dhe numrin e saj ndërsa muret përreth lëvizin.
- Një dhomë nuk mund të fshihet vetëm: është hapësira që krijojnë muret.

Sipërfaqet matin brenda faqeve të mureve. Dhomat ruhen si hapësira IFC me sipërfaqen e dyshemesë, perimetrin, lartësinë dhe vëllimin e tyre, kështu që tabelat i lexojnë (shih [Mblidh sasitë, listo elementët dhe nxirr në tabela hapësirat](topic:quantity-totals)).

## Dyshemetë

1. Kliko {{ui:Dysheme}}.
2. Zgjidh **Kjo dhomë** ose **Gjithë ndërtesa**, **Llojin** (dysheme druri ose pllakë betoni) dhe trashësinë e saj.
3. Shëno brenda një dhome (ose kudo brenda ndërtesës). Ajo që do të mbulonte dyshemeja theksohet me sipërfaqen e saj.
4. Kliko. Pjesa e sipërme e dyshemesë është dyshemeja e nivelit; zbret me trashësinë e saj. Dyshemeja e gjithë ndërtesës arrin deri te faqet e jashtme të mureve.

## Tavanet

1. Kliko {{ui:Tavan}}.
2. Zgjidh **Kjo dhomë** ose **Gjithë ndërtesa**, dhe **Lartësinë** e tij mbi dyshemenë.
3. Shëno brenda dhe kliko.
4. Për ta parë nga poshtë, me rrjetën e tij dhe dritat mbi të, kalo planin te plani i tavanit: shih [Pamjet, intervalet e pamjes dhe fletët e tua](topic:views-and-sheets).

## Një çati

1. Te niveli ku muret mbajnë çatinë, kliko {{ui:Çati}}.
2. Shkruaj **Pjerrësinë** si ngritje mbi 12 (`6/12`) ose në gradë (`30`), dhe **Zgjatimin**.
3. Zgjidh **Skajet**: **Çati me katër ujëra** (çdo anë pjerret), **Fronton në anët e shkurtra** ose **Fronton në anët e gjata** (ndërtesë me katër anë), ose **Njëujore**.
4. Shëno brenda ndërtesës: strehët dhe kulmi shfaqen në plan. Kliko.

Çatia qëndron mbi muret, në nivelin mbi ta, dhe pjesa e saj e poshtme takon faqen e jashtme të mureve. Skajet me fronton mbushen me një mur fronton aq të trashë sa muri poshtë. Një ndërtesë në formë L, T ose U merr një çati me katër ujëra, krahët e së cilës takohen në lugina.

## Ndryshoji ato

Zgjidh një dysheme, tavan ose çati (në pamjen 3D, në pemën e modelit, ose një çati duke klikuar brenda konturit të saj në nivelin sipër) dhe ndryshoje te **Vetitë**: llojin, trashësinë dhe sa lart është maja e saj mbi nivelin; për një tavan, lartësinë, trashësinë dhe **Modelin** (rrjeta që vizaton plani i tavanit mbi të: asnjë, 600 × 600, 600 × 1200, 2' × 2' ose 2' × 4'); për një çati, pjerrësinë, zgjatimin, skajet dhe trashësinë. Çdo ndryshim është një hap Zhbërje.

## Jepi një dysheme, tavani ose çatie një lloj me shtresa

Një dysheme, një tavan dhe një çati mund të marrin një **lloj**, si muri: një ndërtim me emër i përbërë nga shtresa, secila me materialin e vet dhe trashësinë e vërtetë.

- **Kur e vendos.** Mjetet Dysheme, Tavan, Çati dhe Vizato dysheme kanë një listë **Lloji** në rreshtin e tyre. **Pa lloj** e vendos si më parë, me trashësinë e vet. Një lloj e vendos aq të trashë sa shtresat e llojit së bashku.
- **Më vonë.** Zgjidh dyshemenë, tavanin ose çatinë dhe zgjidh **Lloji** te Vetitë. Elementi mbetet i njëjti element: vendi, dhoma dhe të dhënat e tij ruhen dhe asgjë nuk vizatohet përsëri. Ndryshojnë vetëm llojin, trashësinë dhe materialin. Kështu një element i fazës së skicës bëhet i zhvilluar: zëvendëso llojin e tij të përgjithshëm me një lloj real.
- **Redakto llojin…** hap redaktuesin e llojit për atë lloj: shtresat nga **lart** poshtë, bërthama, funksioni i çdo shtrese dhe etiketa LOD e llojit. Ruajtja ndryshon çdo element të llojit në një hap, dhe një Zhbëj e kthen mbrapsht. Ndryshimi i një lloji fillestar ruan një kopje si lloji yt.
- Ndërsa një element ka lloj, **Trashësia** e tij është ajo e llojit dhe nuk mund të shkruhet. Zgjidh një lloj tjetër, ose **Pa lloj**, për ta ndryshuar.

Llojet fillestare janë një lloj **i përgjithshëm** për secilën (një shtresë e materialit të përgjithshëm, e etiketuar LOD 200) dhe dy të shtresuara (të etiketuara LOD 300): një dysheme me trarë druri dhe një dysheme betoni me shtrat llaçi; një çati druri dhe një çati e sheshtë betoni; një tavan me pllaka gipsi dhe një tavan i pezulluar me pllaka. Janë vlera fillestare, jo ndërtime të testuara: kontrollo shtresat para se të mbështetesh mbi to.

Tabela **Shtresat: sipërfaqe dhe vëllim** liston çdo shtresë të çdo lloji në përdorim; shih [Tabelat, dimensionet dhe PDF](topic:plan-schedules-and-pdf). Llojet e dyshemesë, çatisë dhe tavanit udhëtojnë midis projekteve në një paketë llojesh ose si artikull Biblioteke; shih [Paketat e llojeve](topic:type-packs).

## Gjëra të dobishme

- Lëvizja, shtimi ose fshirja e mureve i bën përsëri dhomat, dyshemetë, tavanet dhe çatinë mbi to.
- Një çati përshtatet me çdo kontur. Për t'i dhënë çdo muri pjerrësinë, frontonin ose skajin e vet njëujor, një pllakë të ngritur, fasciën dhe softitin, ose për të vizatuar një plan të vetëm çatie, shih [Çatitë: pjerrësi për çdo mur, fronton, çati njëujore dhe plane çatie](topic:roofs).
- {{key:Delete}} fshin një dysheme, tavan ose çati të zgjedhur.
