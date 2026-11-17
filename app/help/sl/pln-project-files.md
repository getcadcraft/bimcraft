---
title: Odprite projektne datoteke .pln in .pla
summary: Kaj BimCraft danes naredi z datotekami .pln, .pla, .tpl in .bpn ter kako iz njih izvozite IFC in DWG, da se model in risbe tukaj odprejo.
keywords: pln, pla, tpl, bpn, projektna datoteka, arhiv, predloga, varnostna kopija, izvoz ifc, izvoz dwg, prevajalnik, cone, postavitve
from: 41fb921d
---

## Kaj boste naredili

V BimCraft spravite projekt, shranjen kot `.pln` (projekt), `.pla` (arhiv z njegovo knjižnico), `.tpl` (predloga) ali `.bpn` (varnostna kopija). To so lastne datoteke programa Archicad.

## Kaj se danes odpre

- **Projektne datoteke same se še ne odprejo.** Njihov format ni objavljen, BimCraft ga zato še ne bere. Ko odprete eno, BimCraft to sporoči in vas napoti sem.
- **BimCraft preveri prve bajte datoteke.** Projekti Archicada od različice 17 naprej se začnejo z istim kratkim podpisom, zato BimCraft z gotovostjo prepozna, da je datoteka projekt Archicada. Datoteka z imenom Archicada, ki se tako ne začne, je verjetno preimenovana, poškodovana ali iz starejše različice. Podpis ne loči projekta, arhiva in predloge.
- **Izvoz IFC se odpre v celoti**: model v 3D, etaže, cone kot prostori, podatki o elementih, nabori lastnosti in klasifikacije, z vsemi orodji BimCraft.
- **Izvoz DWG se odpre** v 2D pogledu z njegovimi sloji in postavitvami ter v {{ui:3D}}. Za urejanje uporabite {{ui:Uredi v CadCraft}}.

Ali pa prenesite celoten projekt kot en zip z njegovimi pogledi, postavitvami in skupinami lastnosti: glejte [Odprite paket projekta](topic:open-project-bundle).

## Izvoz IFC (model)

1. Odprite projekt v Archicadu.
2. Izberite **File > Save As** in za vrsto datoteke izberite **IFC**.
3. Izberite prevajalnik IFC (Archicadovo ime za nabor nastavitev izvoza IFC). Za BimCraft je primeren **IFC4 Reference View** ali **IFC2X3 Coordination View 2.0**. Odpre se tudi IFC4X3.
4. Izberite, kaj izvozite: ves projekt ali samo elemente, vidne na etažah, ki jih gledate.
5. Shranite, nato v BimCraftu kliknite {{ui:Izberi datoteko}} in izberite datoteko `.ifc`.

Pred izvozom preverite te nastavitve prevajalnika:

- **Cone**: izvozite jih, da sobe pridejo kot prostori. Kliknite {{ui:Prostori}} v BimCraftu, da jih vidite.
- **Lastnosti in klasifikacije**: izvozite jih, da se prikažejo v {{ui:Lastnosti}} in da jih je mogoče uporabiti v {{ui:Najdi}}, {{ui:Barva}} in {{ui:Seštevki količin}}.
- **Navadna datoteka `.ifc`**, ne `.ifczip` ali `.ifcxml`. BimCraft odpre samo navadne `.ifc`.

## Izvoz DWG (risbe)

1. Odprite tloris, prerez ali postavitev, ki jo želite.
2. Izberite **File > Save As** in za vrsto datoteke izberite **DWG**.
3. Izberite prevajalnik DXF-DWG in shranite.
4. Za celoten komplet listov shranite postavitve iz Layout Book ali jih objavite kot DWG.
5. Odprite `.dwg` v BimCraftu. Risbe, povezane z izvozom, se odprejo skupaj z njo, če so v isti mapi; glejte [Povezane risbe in slike](topic:dwg-linked-files).

## Odpravljanje težav

- **"… je projekt Archicada: prvi bajti to povedo."** Izvozite IFC ali DWG, kot je opisano zgoraj, in odprite to datoteko.
- **"… ima ime kot datoteka Archicada, vendar se tako ne začne."** Preverite, od kod datoteka prihaja: morda je druga vrsta datoteke z novim imenom (poskusite jo odpreti pod njeno pravo končnico), kopija, ki se ni dokončala, ali projekt iz različice pred 17. Če lahko, jo odprite v Archicadu in nato izvozite IFC ali DWG.
- **Model se odpre brez sob.** Cone niso bile izvožene. Vklopite jih v prevajalniku IFC in izvozite znova.
- **Odprtine niso izrezane.** BimCraft to sporoči pod **Še ni narisano** v podoknu {{ui:Datoteka}}. Izvozite znova; če se težava ponovi, odprite model v programu, ki ga je ustvaril, in odprtine preverite tam.
- **Besedilo v DWG je videti drugače.** Izvoz morda ohrani pisave, ki jih BimCraft nima; BimCraft riše besedilo v preprosti pisavi brez serifov.

Glejte tudi [Pridobite datoteko projekta v 3D prek IFC](topic:rvt-to-ifc) in [Kaj BimCraft bere iz posameznega formata](topic:file-formats).
