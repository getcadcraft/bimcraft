---
title: Estima les càrregues de calefacció i refrigeració
summary: La pèrdua de calor de cada sala, la seva calefacció durant un any segons els graus-dia i el seu pic de refrigeració, a partir del que la limita al model i del valor U de cada element, amb totes les dades a la vista. Una eina de disseny, no un càlcul de conformitat.
keywords: energia, calefacció, refrigeració, pèrdua de calor, càrrega de calor, càrrega de refrigeració, valor u, transmitància tèrmica, graus-dia, hdd, ventilació, renovacions d'aire, guanys interns, guany solar, lambda, conductivitat, aïllament, disseny inicial, anàlisi, sales, espais
from: ec312d20
---

A la pestanya {{ui:Llum natural}}, després de {{ui:Calcula}}, obriu {{ui:Càrregues de calefacció i refrigeració}} i feu clic a {{ui:Calcula les càrregues}}. Cada sala obté la seva **pèrdua de calor** en un dia de disseny fred, la seva **calefacció durant un any** i el seu **pic de refrigeració** en un de calorós. No es puja res; no canvia res al model tret que escriviu un valor U.

:::warning
Això és **una eina de disseny, no un càlcul de conformitat**: una estimació en règim estacionari amb totes les dades a la pantalla. **No** és el mètode ISO 52016-1, ni una simulació, ni un certificat energètic; no dimensiona caldères, bombes de calor ni refredadors. Comproveu els resultats, i dimensioneu els equips, amb un enginyer.
:::

## Què limita cada sala

BimCraft ho troba al mateix model, de manera que funciona qualsevol IFC de qualsevol programa (no cal les fronteres d'espai que alguns programes exporten). Des de cada tros de la superfície pròpia de cada sala, mira directament cap enfora:

- el primer mur, finestra, porta, forjat, coberta, revestiment, mur-cortina o biga que troba **limita** aquell tros;
- just després d'aquest element, o **una altra sala** (comptada com a veïna, a la mateixa temperatura: sense pèrdua), o **res** (exterior), o, sota un forjat del nivell més baix, **el terreny**;
- una porta oberta cap a una altra sala compta com a veïna; un tros que no troba res (dins de 1.5 m lateralment o cap avall, 8 m cap amunt) es llista sota la sala i es deixa de banda.

Les finestres i les portes prenen la seva mida de l'IFC (amplada total × alçada) des del mur on són. Feu clic a una sala de la taula per veure cada element que la limita, amb la seva àrea, el seu valor U i d'on ve el valor U.

## Valors U

Per a cada element, BimCraft utilitza, en aquest ordre:

1. **El valor U propi de l'IFC** — el `ThermalTransmittance` del conjunt de propietats comuns de l'element (per exemple `Pset_WallCommon`) o del seu tipus. La majoria de programes de disseny el poden escriure.
2. **Les seves capes de material** — 1 ÷ (resistència superficial interior + el gruix de cada capa ÷ la seva conductivitat λ + resistència superficial exterior), amb les resistències superficials habituals (0.13 i 0.04 m²K/W per a murs; 0.10 cap amunt, 0.17 cap avall a l'interior). Conductivitats típiques per començar (llana mineral 0.035, maó 0.77, formigó 1.4…); sota {{ui:Conductivitat dels materials}} escriviu la del fabricant, i tots els valors U d'aquelles capes se n'actualitzen.
3. **Un valor típic** (murs 0.3, cobertes 0.2, forjats 0.25, finestres 1.4, portes 1.6 W/m²K), marcat com a tal — escriviu el vostre.

Un valor U escrit al detall d'una sala es desa al conjunt de propietats comuns de l'element com a `ThermalTransmittance` (un sol pas; {{key:Mod+Z}} el desfà). Si diversos elements comparteixen aquell conjunt (un tipus de mur, per exemple), canvien tots junts, i la línia d'estat diu quants.

## Calefacció

- **Pèrdua de calor** = Σ U × A × (interior − exterior) per tot el que dona a l'exterior + Σ U × A × (interior − terreny) per als forjats sobre el terreny + 0.335 × renovacions d'aire per hora × el volum de la sala × (interior − exterior). 0.335 Wh per m³ per kelvin és la densitat de l'aire (1.2 kg/m³) multiplicada per la seva capacitat calorífica (1005 J/kgK).
- **Calefacció durant un any** = (la pèrdua de la sala per grau cap a l'exterior, a través de l'envolupant i de l'aire, més la seva pèrdua pel terreny escalada a la mateixa diferència) × els **graus-dia** × 24 ÷ 1000, en kWh. Escriviu els graus-dia del lloc, o {{ui:Llegeix els graus-dia d'un CSV…}} (una fila per dia o per mes; se suma l'últim nombre de cada fila). Useu els graus-dia a la temperatura base que utilitzi la vostra font: aquesta base ja té en compte la calor gratuïta de les persones, els llums i el sol.

## Refrigeració

El **pic de refrigeració** = la calor a través de l'envolupant i de l'aire a la temperatura de disseny d'estiu + les persones (superfície per persona × calor per persona) + la il·luminació i els equips per m² de superfície + **el sol**: el pic de {{ui:El sol a través de les finestres en una data}} per a aquesta sala. Calculeu primer el sol, en un dia calorós; fins llavors el sol compta 0 i la secció ho indica. El pic de cada part se suma encara que es produeixin a hores diferents, cosa que ho sobreestima una mica.

## Què deixa fora

- Els mètodes mensual i horari de l'ISO 52016-1 (una norma de pagament), la calor emmagatzemada a la massa de l'edifici, els ponts tèrmics, el rendiment dels sistemes de calefacció i refrigeració, i els fitxers climàtics.
- Les sales veïnes es prenen a la mateixa temperatura; els espais no calefactats no es modelen.

Vegeu també [Estima la llum natural de cada sala](topic:daylight-factor).
