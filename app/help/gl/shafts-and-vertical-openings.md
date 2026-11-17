---
title: Pozos e ocos a través dos pisos
summary: Un pozo é un único contorno que corta cada piso, teito e cuberta entre dous niveis. Un oco vertical corta un deles. Oco de muro corta un muro.
keywords: pozo, pozo de ascensor, pozo de escaleira, oco de escaleira, montante, oco vertical, oco de piso, oco de teito, oco de cuberta, oco de claraboia, buraco no piso, oco de muro, IfcOpeningElement, dedución, superficie neta
from: 8e9e1641
---

## Que vai facer

Cortar un pozo de ascensor a través dun edificio cun único debuxo, cortar un buratro nun piso e ler o que se quitou das superficies.

## Onde están as ferramentas

- Disposicións de cinta: {{ui:Arquitectura}} › **Oco** › {{ui:Pozo}}, {{ui:Oco vertical}} e {{ui:Oco de muro}}.
- Disposición clásica: a barra Debuxar › menú {{ui:Cuartos}} (Pozo, Oco vertical) e › menú {{ui:Muros}} (Oco de muro).

## Un pozo

1. Abra a planta do nivel onde comeza o pozo. Escolla {{ui:Pozo}}.
2. Na fila escolla o {{ui:Nivel base}} e o {{ui:Nivel superior}}, e os desfases se comeza ou remata por riba ou por baixo deles.
3. Faga clic nas esquinas do contorno. Faga clic de novo na primeira esquina, faga dobre clic ou prema {{key:Enter}} para rematar.
4. Córtase cada piso, teito e cuberta entre as dúas alturas. A liña de estado indica cantos.

Un pozo é unha soa cousa. Escolla o seu contorno en calquera nivel que atravesse: Propiedades ten o seu nome, niveis e desfases, o que corta e a superficie quitada. Se o cambia, todos os ocos seguen o cambio. Se o elimina, desaparecen todos os ocos. Cada un é un paso de Desfacer.

Segue cortando: un piso feito máis tarde entre os seus niveis córtase sen que llo pidan, e un piso que elimine déixase en paz.

O piso sobre o que se apoia o pozo non se corta (o seu teito é a base). Dé á base un desfase negativo para cortala tamén. Dé ao teito un desfase positivo para atravesar a cuberta.

## Un oco vertical

1. Escolla {{ui:Oco vertical}}. Na fila escolla o que cortar: o piso, o teito ou a cuberta.
2. Faga clic nas esquinas do contorno e remate como arriba.
3. Córtase o piso, o teito ou a cuberta deste nivel baixo o contorno. Pertence a ese único elemento: se elimina o piso, o oco vai con el.

## Un oco de muro

{{ui:Oco de muro}} é a ferramenta de [Dar forma a un muro](topic:wall-shape): faga clic nun muro na planta, ou en dúas esquinas da súa cara en 3D.

## Cantidades

Segundo a regra de medición para pisos, a superficie neta dun elemento é a súa superficie bruta menos o que se corta del. Un pozo ou un oco vertical é unha dedución en cada piso e teito que corta; os cuadros de Pisos e acabados e as cantidades IFC amosan os mesmos números. Nunha cuberta a dedución é a superficie da cuberta: a superficie en planta dividida polo coseno da pendente.

Un contorno que sobresae do bordo deduce só a parte que está sobre o elemento.

## Se non se corta nada

Un pozo sen nada no seu camiño faise igualmente e informa diso: cortará o que se constrúa alí máis tarde. Un oco vertical necesita algo debaixo; sen nada aí, a liña de estado dío e non se crea nada.

## No IFC

Cada corte é un IfcOpeningElement cun IfcRelVoidsElement ao elemento que corta, polo que calquera programa IFC amosa o buratro. Unha cuberta córtase cara a cara. O propio pozo é un IfcGroup dos seus ocos.

## Aínda non dispoñible

- Contornos curvos.
- Os muros dun pozo: debúxeos coa ferramenta Muro.
- Editar o contorno arrastrando as súas esquinas (cámbieo en Propiedades, ou elimínoo e debúxeo de novo).
- As propias propiedades dun piso debuxado amosan só a súa superficie menos os seus propios ocos; os cuadros e as cantidades IFC inclúen os do pozo.

Consulte tamén [Cuartos e separadores de cuarto](topic:rooms-and-separators).
