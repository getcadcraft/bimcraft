---
title: Paleta e simboleve
summary: Gjej simbole elektrike dhe hidraulike sipas emrit ose figurës, shëno me yll ato që përdor dhe vendosi në plan me një klik.
keywords: paleta e simboleve, butoni i simboleve në shirit, muri ndjek, simbole, simbole elektrike, simbole hidraulike, plan hidraulik, WC, tualet, lavaman, lavello, vaskë, dush, kullues dyshemeje, pastrues, rubinet me gomë, bojler, valvul, valvul me portë, ujë i ftohtë, ujë i nxehtë, shkarkim, ventilim, stili i linjës, të preferuarat, kërkim
from: 67f20bc0
---

## Çfarë do të bësh

Hap një panel që liston simbolet elektrike dhe ato të planit hidraulik me figurat dhe emrat e tyre, gjej atë që të duhet dhe vendose në plan. Asgjë këtu nuk kërkon internet: simbolet vijnë me aplikacionin.

## Hape dhe vendos një simbol

1. Hap një model dhe hap {{ui:Ndërtimi}} › {{ui:Paleta e simboleve}} (komanda e shkruar: SYMBOLS). I njëjti buton është në menynë Mjete të shiritit Vizato dhe si **Simbolet** te grupi **Bibliotekë** i shiritit.
2. Zgjidh një grup: **Elektrik** ose **Hidraulik**, ose **Të gjitha grupet**. Shkruaj te kutia e kërkimit për ta ngushtuar listën. Mund të kërkosh sipas emrit ose shkurtesës (WC, CW, HB).
3. Kliko një simbol. Plani është gati ta vendosë.
   - Një simbol **elektrik** nis mjetin Elektrik me atë pajisje të zgjedhur, pra gjithçka te [Plani elektrik](topic:electrical-plan) vlen: kliko planin, një hap zhbërjeje.
   - Një simbol **hidraulik** nis mjetin e simboleve të planit. Kliko planin. Një pajisje që qëndron në mur (tualet, lavaman, vaskë, lavaman muri, rubinet me gomë) ngjitet te faqja më e afërt e murit, me shpinën nga muri; kullat, valvulat, bojleri dhe stilet e linjave shkojnë aty ku kliko.
4. Shtyp {{key:R}} për ta rrotulluar simbolin 90 gradë ({{key:Shift}}+{{key:R}} e rrotullon në drejtim tjetër), ose shkruaj një kënd te **Rrotullimi** në shiritin e opsioneve. Shtyp {{key:Esc}} për të ndalur.

Një pajisje ose rubinet me gomë që është ngjitur te një faqe muri e mban mend atë mur: kur muri lëviz, simboli lëviz me të (e njëjta faqe, e njëjta largësi përgjatë murit) në të njëjtin hap zhbërjeje. Nëse fshin murin, simboli mbetet aty ku ishte dhe **Problemet** liston "humbi murin e vet"; zhvendose ose fshije. Simbolet e vendosura larg mureve nuk lidhen me asgjë.

Çdo simbol që vendos është një hap zhbërjeje. Një simbol i vendosur është një shënim plani në skedarin IFC, me etiketën e vet (WC1, WC2, ...). Zgjidhe për të ndryshuar etiketën ose rrotullimin te **Vetitë**, ose shtyp {{key:Delete}}.

## Çfarë ka grupi hidraulik

Pajisje (tualet, urinal, lavaman, vaskë, dush, lavello kuzhine, lavaman i vetëm), një kullues dyshemeje, pastrues dyshemeje dhe muri, një rubinet me gomë, një hidrant muri, një bojler, valvula (me portë, me glob, sferike, kontrolli, me flutur, reduktuese të presionit) dhe stile linjash me shkurtesat e tyre: ujë i ftohtë (CW), ujë i nxehtë (HW), kthim i ujit të nxehtë (HWR), shkarkim (W), ventilim (V), kullim shiu (SD) dhe gaz (G). Vizatimet përshtaten me planin, kështu që ruajnë madhësinë e tyre në fletën e printuar. Një stil linje është një segment i shkurtër që tregon stilin në plan; vizato tubat e vërtetë me mjetet e tubave.

:::note
Këto janë konventa të zakonshme të planeve hidraulike, të hartuara nga ne; nuk janë të certifikuara sipas ISO 4067-1 ose ASME Y32.4. U krahasuan me legjenda publike vizatimesh dhe manuale trajnimi (lista është në shënimin e burimeve të grupit, që tregon ku përputhemi dhe ku ndryshojmë), nuk u kopjuan nga asnjë produkt, dhe janë falas për përdorim (Apache-2.0). Grupet e vizatimeve ndryshojnë, kështu që kontrollo legjendën e projektit tënd. Janë simbole plani, jo projektim hidraulik: nuk përmasojnë tubat dhe nuk kontrollojnë kodet.
:::

## Të preferuarat dhe tastiera

- Kliko yllin te një simbol (ose shtyp {{key:F}} mbi të) për ta mbajtur si të preferuar. Të preferuarat listohen të parat dhe mbeten në këtë shfletues. **Vetëm të preferuarat** shfaq vetëm ato.
- {{key:Down}} nga kutia e kërkimit kalon te simbolet; tastet me shigjeta, {{key:Home}} dhe {{key:End}} lëvizin ndërmjet tyre; {{key:Enter}} zgjedh atë të fokusuar; {{key:Esc}} mbyll paletën.
- Në telefon paleta është një fletë në fund të ekranit; largohet kur zgjedh një simbol, që të shohësh planin. Hape përsëri nga menyja Ndërtimi ose nga butoni **Paleta** në shiritin e opsioneve.

:::tip
Nëse një skedar përdor një grup simbolesh që ky version nuk e ka, plani shfaq një kuadrat aty ku ishte simboli dhe **Problemet** e liston.
:::

## Lidh një element të vendosur me një simbol

Një pajisje drite nga Biblioteka është element 3D, por një skemë elektrike e shfaq si simbolin e vet. E vendos **një herë** dhe e lidh:

1. Zgjidh Ndërtimi › **Lidhja e simbolit** (ose shkruaj SYMBOLLINK). Një seksion Lidhja e simbolit hapet në panelin e majtë.
2. Zgjidh elementet e vendosur në plan ose në 3D. Seksioni thotë sa janë zgjedhur dhe me çfarë janë lidhur.
3. Zgjidh **Simbolin** (nga çdo grup simbolesh: Elektrik, Hidraulik) dhe zgjidh **Lido**.

Elementi mbetet një element, dhe çdo tabelë e numëron një herë:

- **3D** shfaq gjithmonë trupin e tij.
- Një **plan** shfaq formën e tij të planit, si më parë.
- Një plan ku **Kjo pamje shfaq elementet e lidhur si** është vendosur në **Simbolin e tyre (një plan shërbimesh)** shfaq simbolin në vendin e tij. Një klik mbi simbolin zgjedh elementin. Zgjedhja mbahet për atë pamje (plani i dyshemesë së nivelit, plani i tavanit të tij, ose një thirrje) në skedar.

**Rrotullo simbolin 90°** e rrotullon simbolin përkundrejt elementit të vet. **Hiq lidhjen** e heq lidhjen; elementi mbetet. Tabela **Simbolet e lidhura** liston çdo element të lidhur një herë, me katin dhe dhomën ku ndodhet.

Nuk është ndërtuar: zgjedhja e një pamjeje në një fletë është zgjedhja e planit të nivelit që shfaq; pajisjet e vendosura me mjetin Elektrik janë simbole në çdo plan, si më parë.
