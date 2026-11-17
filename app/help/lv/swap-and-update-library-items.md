---
title: Novietota vienuma aizstāšana un bibliotēkas vienumu atjaunināšana
summary: Aizstājiet vienu novietotu bibliotēkas vienumu ar citu, saglabājot tā vietu un vienuma numuru, un pārbaudiet bibliotēkā jaunākas versijas visam modelī.
keywords: aizstāt, nomainīt, aizvietot, atjaunināt, jaunāka versija, pārbaudīt atjauninājumus, bibliotēka, atsaukts, licences maiņa, vienuma numurs
from: 8bdfe01d
---

## Ko jūs darīsiet

Mainiet domas par vienumu, to vēlreiz nepārvietojot, un uzturiet modeļa bibliotēkas vienumus aktuālus.

## Aizstājiet vienu vienumu

1. Modelī noklikšķiniet uz novietota bibliotēkas vienuma.
2. Logā {{ui:Rekvizīti}} lodziņā **Bibliotēkas vienums** noklikšķiniet uz {{ui:Aizstāt vienumu…}}. Atveras cilne {{ui:Bibliotēka}}.
3. Atrodiet jauno vienumu un noklikšķiniet uz tā kartītes.
4. Noklikšķiniet uz {{ui:Aizstāt … ar šo}}.

Elements saglabā savu vietu, pagriezienu, stāvu, vienuma numuru, daudzumu un piezīmes. Tā tips, forma un vienuma dati mainās uz jaunā vienuma. Vienumi, kas novietoti vienādi, dalās vienā tipā, tāpat kā novietojot tos.

Vienums ar variantiem (skatiet [Bibliotēkas vienuma ar variantiem novietošana un aizstāšana](topic:library-variants)) aizstāšanas brīdī cilnes {{ui:Bibliotēka}} augšdaļā uzskaita savus citus variantus: katrs ar vienu klikšķi.

Ja jaunais vienums ir cita veida lieta, piemēram, izlietne galda vietā, elementa IFC klase mainās, lai atbilstu (šajā gadījumā no mēbeļu elementa uz sanitārās iekārtas termināli), tāpēc cita programmatūra to pareizi iekļauj specifikācijā. Tas paliek tas pats elements ar to pašu GlobalId, tāpēc saites uz to joprojām darbojas. {{key:Mod+Z}} atgriež veco klasi kopā ar veco vienumu.

## Pārbaudiet atjauninājumus

1. Noklikšķiniet uz {{ui:Atjauninājumi}} rīkjoslā (vai uz {{ui:Pārbaudīt atjauninājumus}} bibliotēkas vienuma lodziņā).
2. Izlasiet sarakstu: katram modeļa bibliotēkas vienumam tā versija modelī, jaunākā versija un statuss: **Aktuāls**, **Jaunāka versija**, **Atsaukts** vai **Nav atrasts**. Tur norādīts arī, kas mainījies (ģeometrija, dati, licence vai labojums).
3. Noklikšķiniet uz {{ui:Atjaunināt}} rindā vai uz {{ui:Atjaunināt visu}}.

## Ko vajadzētu redzēt

- "Atjaunoti *n* novietojumi. Vietas, vienumu numuri, daudzumi un piezīmes tiek saglabātas."
- Izmaiņu sarakstā rindas "Atjaunots: *vienums*". {{key:Mod+Z}} atsauc katru no tām.

## Noderīgi zināt

- Pārbaudīt var tikai vienumus, kas nākuši no bibliotēkas. Failu vienumi nenes bibliotēkas identifikatoru.
- Ja licence ir mainījusies, jau novietotā kopija saglabā licenci, ar kuru tā tika ienesta, līdz to atjaunināt.
- **Atsaukts** vienums jauniem novietojumiem netiek piedāvāts. Vienumu, kas atsaukts autortiesību dēļ, nevar lejupielādēt vispār; aizstājiet to ar {{ui:Aizstāt vienumu…}}.
- Novietots variants paliek tas pats variants, ja jaunākajai vienuma versijai tas vēl ir; citādi tas pāriet uz vienuma noklusējuma variantu.
- Pārbaudē tiek sūtīti tikai vienumu identifikatori un versijas, nekad jūsu modelis.
