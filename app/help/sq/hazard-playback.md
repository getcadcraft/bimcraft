---
title: Luaj një përmbytje, erë ose tërmet mbi ndërtesën
summary: Uji që ngrihet nëpër dhoma, presioni i erës mbi çdo kat, ose një tërmet që tund katet, luajtur në një planimetri ose fasadë me rrëshqitës kohor. Modele të thjeshta me supozimet e tyre të listuara; jo kontroll kodi ose projektim strukturor.
keywords: rrezik, përmbytje, erë, tërmet, sizmik, zhvendosje ndërkatore, lëkundje, prerje bazë, nivel uji, klimë, skenar, nivel deti, luajtje, kat, periudhë
from: ff0d34d1
---

Seksioni {{ui:Luajtja e rrezikut}} i panelit të majtë luan një rrezik mbi modelin IFC të hapur. Asgjë në model nuk ndryshohet.

:::warning
Këto janë **modele të thjeshta për të parë se çfarë bën një rrezik me këtë shtrirje**, jo një studim përmbytjeje, kontroll kodi për erën ose projektim strukturor. Çdo rezultat liston supozimet e tij.
:::

## Përmbytja

Vendos nivelin më të lartë të ujit mbi katin më të ulët dhe minutat për t'u ngritur, për t'u mbajtur dhe për t'u ulur. Uji hyn në një dhomë përmes një hapjeje, pragu i së cilës e ka kaluar uji, dhe dhomat e lidhura me dhoma të lagura përmes hapjeve nën nivelin e ujit qëndrojnë në të njëjtin nivel (kuazi-statike). Tabela jep kur lagen çdo dhomë për herë të parë dhe sa thellë; planimetria e luan atë. Shkruaj sasinë më të madhe ujë që një dhomë mund ta marrë, dhe dhomat mbi të janë paralajmërime. **Të ardhmet klimatike:** ngarko skedarin tënd të skenarit (JSON ose CSV me një vit, një ngritje të nivelit të detit dhe një faktor përmbytjeje) dhe zgjidh një vit. Ose ndiz shtojcën Të ardhmet klimatike dhe zgjidh një skenar dhe një vit: përmbytja bëhet dy herë, e tashmja krah për krah me të ardhmen (shih "Të ardhmet klimatike: përmbytja, nxehtësia dhe zjarri i pyjeve në 2050 dhe 2080"). Llojet Ekspozimi ndaj zjarrit të pyjeve dhe Nxehtësia: skedar i motit të ardhshëm gjenden në të njëjtën listë.

## Era

Presioni ndjek ½ρV², me shpejtësinë që rritet me lartësinë; forca mbi një kat është ai presion shumëzuar me një faktor rrufeje, dy koeficientët e presionit, gjerësinë dhe lartësinë e katit. Merr prerjen, momentin përmbysës dhe lëkundjen.

## Tërmeti

Një ndërtesë prerjeje: një masë për çdo kat (sipërfaqja e bazës × kilogramë për metër katror, që vendos ti), e njëjta ngurtësi në çdo kat e përshtatur me periudhën e parë që jep (një e dhjeta e sekondës për kat nëse e lë bosh, dhe e thotë këtë), amortizim, dhe një lëvizje tokësore e modeluar (një impuls ose zhurmë e filtruar) me nxitimin maksimal që zgjedh. Rezultati është zhvendosja ndërkatore e secilit kat, nxitimet e dyshemeve dhe prerja bazë; fasada luan lëkundjen, e vizatuar më e madhe se sa është. Shkruaj një raport zhvendosjeje që lejon, dhe katet mbi të janë paralajmërime. Është elastike: asgjë nuk jep dhe nuk plasaritet.

## Ngurtësia e kateve nga Kuadri i analizës

Për një tërmet ose për lëkundje nga era, zgjidh **Kuadri i analizës** si burim të ngurtësisë në vend që të shkruash një periudhë. Çdo dysheme shtyhet anash me radhë, kuadri (trarë, kolona, lidhje, soleta) zgjidhet, dhe ngurtësia e dyshemeve me gjithçka që punon bashkë e drejton ekzekutimin. Pesha është e anëtarëve vetë, plus ngarkesa e dyshemesë për metër katror që vendos te kutia e planimetrisë së secilës dysheme. Shfaqet periudha e vërtetë e parë. Është elastike: asgjë nuk jep, dhe rrotullimi nuk modelohet. Për erën, forcat e kateve janë ende ato të supozuara më sipër (një profil ligji-fuqie, faktori yt i rrufeje dhe koeficientët fiks të presionit, jo një kod ere); vetëm lëkundja vjen nga kuadri, duke zgjidhur matricën e plotë të ngurtësisë së kuadrit kundrejt këtyre forcave. Modeli kërkon një IFC me një kuadër që skeda Analiza mund ta lexojë.

## Njësitë

Thellësitë e ujit, lëkundja dhe zhvendosja kat për kat, distancat dhe sipërfaqet shfaqen në {{ui:Njësitë}} që zgjodhe. Forcat (kN), kohët dhe nxitimet mbajnë njësitë e tyre, dhe një vlerë që shkruan në një kuti të etiketuar në metra mbetet në metra. E njëjta gjë vlen për rezultatet e evakuimit, dritës ditore, ngrohjes dhe ftohjes dhe mobilimit: gjatësitë, sipërfaqet dhe vëllimet ndjekin zgjedhjen tënde; presioni, rrjedha, temperatura, energjia dhe fuqia nuk konvertohen kurrë.
