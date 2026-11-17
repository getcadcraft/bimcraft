---
title: Comprova la calefacció i la refrigeració amb EnergyPlus
summary: Escriviu el model com a fitxer d'EnergyPlus, o executeu-hi EnergyPlus versió 26.2.0 al navegador, i compareu-ne les càrregues de disseny amb l'ajuda ràpida de calefacció i refrigeració. Una segona opinió per al disseny inicial, no un càlcul de compliment.
keywords: energyplus, simulació energètica, dia de disseny, càrrega de calefacció, càrrega de refrigeració, fitxer meteorològic, epw, idf, massa tèrmica, energia anual, simula
from: b82a5bf2
---

## Què hi fareu

El panell **Comprova amb EnergyPlus** escriu el model obert com a fitxer d'entrada d'EnergyPlus (un IDF): una zona per cada sala, els murs, els forjats, les cobertes i les finestres amb els seus valors U, les renovacions d'aire i la calefacció i refrigeració ideals. Sempre podeu **desar aquest fitxer** i executar-lo al vostre EnergyPlus.

Si també configureu el motor, el panell pot simular a l'instant i llista les càrregues de disseny de calefacció i refrigeració d'EnergyPlus al costat de les de l'ajuda ràpida, sala per sala.

Això és una ajuda de disseny. Els codis energètics, la certificació i els permisos necessiten una eina aprovada i les dades climàtiques que exigeix, i el resultat ha de ser revisat per la persona que en respon.

## Configura el motor

BimCraft no porta EnergyPlus. És una compilació WebAssembly gran (uns 6 MB comprimits, més un fitxer de dades de 4.6 MB), així que l'heu d'allotjar vosaltres mateixos i escriure'n l'adreça al panell. La pàgina el carrega només quan premeu un botó de simulació, mai a l'inici. L'adreça ha de ser https, una ruta d'aquest lloc o localhost.

## Dies de disseny o un any

- **Simula dies de disseny** no necessita fitxer meteorològic. Executa un dia d'hivern fred sense sol i un dia d'estiu calorós i clar, amb les temperatures de les entrades de calefacció i refrigeració de la pestanya Llum natural, i informa de la càrrega de cada sala en watts.
- **Simula un any** necessita un fitxer meteorològic en format EPW que trieu. Hi afegeix persones, llums i equips a partir de les mateixes entrades (sempre actius, ja que no s'inventa cap horari) i informa de l'energia de calefacció i refrigeració de cada sala en kWh. Els fitxers meteorològics tenen les seves pròpies llicències, així que useu-ne només un que tingueu permís d'usar.

## Massa tèrmica

Marqueu **Dona massa tèrmica als murs amb capes conegudes** i els murs, les cobertes i els forjats les capes de material dels quals són conegudes s'escriuen capa per capa, amb la densitat i la calor específica preses d'una taula curta de valors típics pel nom del material. Les capes es prenen primer des de fora, en l'ordre en què les llista el fitxer. Els elements sense capes es mantenen amb el seu valor U i sense massa.

## Llegir la comparació

Els dos mètodes responen preguntes lleugerament diferents. L'ajuda ràpida manté cada element; el fitxer d'EnergyPlus fa la mitjana dels valors U de cada sala per tipus de superfície. Una diferència de més del 15 % en la calefacció de disseny d'una sala es llista com una nota al panell ⚠, amb totes dues xifres. La refrigeració difereix més per disseny: l'ajuda ràpida calcula un pic a partir del sol en una data, mentre que EnergyPlus dimensiona amb el seu propi dia de disseny.
