---
title: Shaqada ka dhex-dhexaysa labo barnaamij oo BIM ah
summary: U dir moodel barnaamij BIM ah oo kale IFC-ka oo BimCraft dhexda ku jira, ku hay GlobalIds-keeda, kooxaha sifooyinkiisa iyo kala-soocidda, dejiso labada barnaamij si ay u isticmaalaan isla sifooyinka, oo ogow waxa dib u soo noqday.
keywords: ifc, round trip, interoperability, globalid, guid, kooxaha sifooyinka, psets, kala-soocidda, halbeegyada la wadaago, khariidadda sifooyinka, translator, bcf, isku-duwidda, isdhaafsiga
from: 9f224176
---

## Waxa aad samayn doontid

Moodel u gudbi barnaamij BIM ah oo kale barnaamij BIM ah oo kale, tusaale ahaan Revit ilaa Archicad iyo dib, adigoo maraya IFC, BimCraft dhexda ku jira si uu u hubiyo, wax ugu daro oo uu u sheego waxa badbaaday. Faylka barnaamijkiiba ma akhrisano: wax walba IFC ayuu u safraa.

## Waxa BimCraft hayaa

Markaad moodel BimCraft ku beddesho oo aad riixdo {{ui:Save as IFC}}, wax kasta oo aanad beddelin ayaa dib loo qoraa sidii ay ahayd. Sidaas darteed:

- **GlobalIds** way isku mid ahaanayaan, barnaamijka kale wuxuu walax kasta ku isku xidhi karaa midka uu u diray.
- **Kooxaha sifooyinka** iyo qiimayaashooda way sii jiraan, marka laga reebo qiimayaasha aad beddeshay.
- **Kala-soocidda** way ku xiran tahay walxahooda.

## Labada barnaamijba u dejiso isla sifooyinka

1. Ku fur moodelka BimCraft (iyo bundle-ka mashruuca, haddii aad leedahay: kooxaha sifooyinkiisa waa lagu daraa).
2. Dhinaca bidix ee panel-ka, fur {{ui:Between two BIM programs}}.
3. Hoosta **Khariidadda sifooyinka**, soo deji waxa barnaamij kasta u baahan yahay:
   - {{ui:Shared parameters}}: fayl halbeegyada la wadaago. Revit-ka, ku rar Manage › Shared Parameters oo ku dar halbeegyada qaybaha u baahan.
   - {{ui:IFC export property sets}}: fayl kooxda sifooyinka ee user-defined. Dejinta dhoofinta IFC ee Revit, dooro hoosta user-defined property sets, si IFC-ga la dhoofiyo uu ku qaado isla kooxda iyo magacyada sifooyinka.
   - {{ui:Mapping table (CSV)}}: sifo kasta oo leh kooxdeeda IFC iyo magaceeda, nooceeda, iyo magacyada u dhigma barnaamij kasta. Faylasha khariidadda ee Archicad ma aha qaab la daabaco, sidaas darteed IFC translator-keeda iyo property manager-keeda ku dejiso gacanta, miiskan ka soo qaadatay.
   - {{ui:Mapping file}}: khariidadda oo dhan hal fayl, si ay mashruuca ula socoto.

Kooxaha caadiga ah (Pset_ iyo Qto_) ayaa laga reebay faylka halbeegyada la wadaago: labada barnaamijba xogtooda ayay ka qoraan.

## Moodelka u dir oo soo celi

1. Ka dhoofi IFC barnaamijka koowaad iyada oo GlobalIds la hayo (Revit: "Store the IFC GUID in an element parameter after export" waa la shiidaa).
2. Ku fur BimCraft, hubi ({{ui:Model checks}}, {{ui:Clash check}}), ku dar dhibaatooyin ({{ui:Issues}}, BCF), beddel qiimayaasha haddii aad u baahan tahay, kadibna {{ui:Save as IFC}}.
3. Ku fur IFC-ga la kaydiyay barnaamijka labaad, ka shaqee, kadibna ka dhoofi IFC iyada oo GlobalIds la hayo (translator-ka Archicad: "Global Unique Identifiers: Keep existing").
4. Dib BimCraft, ku fur moodelka la diray, kadibna ku dar kii soo laabtay (**Ku dar moodel** hoosta Models).
5. Hoosta {{ui:Between two BIM programs}}, dooro **Baxay** iyo **Soo laabtay**, kadibna guji {{ui:Make the report}}.

## Akhri warbixinta

- **Walxaha**: intee ka soo laabatay GlobalId isku mid ah, intee ka maqan, iyo intee cusub. Walxaha leh GlobalId cusub waxay muuqdaan hal maqan iyo hal cusub: barnaamijka kale ma uu hayn.
- **Fasalka IFC ee la beddelay**: walxaha soo laabtay nooc kale oo walax ah.
- **Qiimayaasha sifooyinka la kaydiyay**: qaybta qiimayaasha soo laabtay isla sidii ay ahaayeen. Liiska hoose wuxuu muujinayaa sifooyinka leh qiimayaasha ugu badan ee la beddelay ama maqan.
- **Kala-soocidda**: la kaydiyay, la beddelay (isla nidaam, koodh kale) ama maqan.

{{ui:Download the report (CSV)}} wuxuu siinayaa sifo kasta oo leh tirooyinkeeda. Si aad u aragto walxaha dhaqaaqay ama qaabkooda beddelay, isticmaal {{ui:Compare versions}} isla laba moodel oo kale.

:::note
BimCraft ma shaqeeyo labadaba barnaamijba. Qaabeynta barnaamijkiiba ayaa go'aamisa qiimaha qaabka uu u socdo, warbixinta ayaa muujinaysa waxa dhab ahaan soo laabtay, sidaas darteed isku day qaabayn, dib u dhoof oo isbarbardhig.
:::

## Dhibaatooyinka BCF ayaa u safra

Dhibaatooyinka aad ka keento BimCraft waxay u dhoofaan BCF ({{ui:Issues}}), kuwaas oo labada barnaamijba akhriyi karaan qalabkooda BCF, si su'aal ku saabsan walax u gaarto qofka ka shaqeeya barnaamijka kale oo muuqaalkiisa.

Eeg sidoo kale [Fur bundle mashruuc](topic:open-project-bundle), [Mashruuca faylka ka Bimcraft ilaa IFC](topic:rvt-to-ifc) iyo [Barbardhig labo nooc oo moodel](topic:compare-versions).
