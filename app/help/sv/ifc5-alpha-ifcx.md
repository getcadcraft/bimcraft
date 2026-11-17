---
title: Öppna och exportera IFC5 alpha (IFCX-filer)
summary: Ett labbalternativ för filformatet IFC5 alpha (.ifcx): öppna en fil med dess lager, se vad läsningen inte kunde kontrollera och exportera de öppna modellerna. Formatet ändras fortfarande, så läs först.
keywords: ifc5, ifcx, alfa, buildingsmart, json, lager, schema, labb, kvantiteter, qto, export, import
from: cffe1669
---

IFC5 alpha (filändelse {{ui:.ifcx}}) är filformatet som buildingSMART fortfarande utvecklar. Det är inte slutgiltigt: filerna, och vår tolkning av dem, kan ändras. Därför är detta ett labbalternativ och läsning kommer först.

## Slå på det

1. Välj {{ui:Inställningar}}, och sedan avsnittet {{ui:IFC5 alpha (IFCX)}} på fliken BimCraft.
2. Bocka i {{ui:IFC5 alpha (IFCX) – formatet ändras fortfarande; läs först}}.

Det är avstängt som standard. Medan det är avstängt avvisas en .ifcx-fil med en mening som pekar hit. {{ui:Öppna IFC5 alpha (.ifcx)…}} och exportknappen {{ui:IFC5 alpha}} visas när det är på.

## Öppna

- Välj en .ifcx-fil med {{ui:Öppna en fil eller mapp}} (den ersätter den öppna modellen, efter den vanliga frågan om ändringar), eller
- välj {{ui:Öppna IFC5 alpha (.ifcx)…}} och markera flera filer tillsammans: filen, dess lager och de schemafiler den importerar. Om en modell redan är öppen läggs filen **bredvid den**; krysset i modelllistan tar bort den igen, vilket är ångra.

En IFCX-fil listar noder (en sökväg, dess barn, vad den ärver och sina attribut). Flera filer kan beskriva samma nod: en senare fil (ett lager) åsidosätter attributen i en tidigare, och ett null-barn tar bort ett barn. BimCraft sammansätter dem och ritar resultatet som en liten IFC4-modell: projekt, tomt, byggnad, våningsplan och element med namn, klasser, egenskaper, kvantiteter, färger och nät.

Inget hämtas från nätverket. Schemafiler som en fil importerar (till exempel `ifc@v5a.ifcx`) används endast om du valde dem tillsammans med filen; annars anger rapporten det, och attributen läses utan typkontroll.

### Rapporten

Efter öppning listar en rapport vad läsningen hittade: data som inte stämmer med sitt schema, schemafiler som inte angavs, attribut som saknar IFC-betydelse här. Attribut utan mappning **behålls** i modellen, släpps inte, och skrivs tillbaka vid export.

## Vad blir vad

| I IFCX-filen | I BimCraft |
|---|---|
| En nod med en IFC-klass (projekt, tomt, byggnad, våningsplan, vägg …) | Motsvarande IFC4-element; en klass som den här läsningen inte känner igen blir ett byggnadselement-proxy |
| Namnet noden har under sin förälder | Elementnamnet |
| Attribut med en kvantitetstyp (Length, Area, Volume, Mass …) | En IFC4-kvantitetsuppsättning som heter `Qto_IFCX` (IFC4-kvantiteter förblir IFC4-uppsättningar `Qto_*`) |
| Andra egenskapsattribut | En egenskapsuppsättning som heter `Pset_IFCX` |
| Nät- och transformeringsattribut | Elementets trianglar och placering; osynliga nät ritas inte |
| Färg, opacitet, material, klassificering | Elementets ytstil, material och klassificering |

Enheter tas som meter, med Z uppåt: alfan säger att enheterna dokumenteras senare.

## Export

Välj {{ui:IFC5 alpha}} på verktygsfältet, läs noten och klicka sedan på {{ui:Exportera .ifcx}}. Filen har vår egen rubrik (författare CadCraft, version ifcx_alpha) och anger själv att den är alfaformatet. Varje modell skrivs i sina egna filkoordinater, i meter, med namn, klasser, egenskapsuppsättningar, kvantiteter (som attribut med sin typ), färger och trianglar. Lager och arv skrivs plattade. Kontrollera filen i programmet du skickar den till.

## Begränsningar

- Krökt geometri (kurvor, ytor) läses inte: endast triangelnät.
- Dörrar och fönster som sitter i en vägg placeras på våningsplanet; väggen de kom från är inte länkad.
- IFC4-uppsättningsnamn `Qto_*` behålls som attributgrupper av vårt eget slag (`cadcraft::qto::…`); standardens alfaschema har bara några få kvantitetsnamn.
- Formatet kan ändras under oss; en fil som görs idag kanske inte läses i morgon.
