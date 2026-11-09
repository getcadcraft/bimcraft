---
title: Novidades da 0.8 e da 0.8.1
summary: BimCraft engade persoas que camiñan polo edificio, acústica de cuartos que pode escoitar, reprodución de inundación, vento e terremoto, unha vista do ciclo de vida de cincuenta anos, comprobacións contra un IDS, etiquetas e cuadros, Mover, Alinear e Distribuír, imaxes baixo a planta, muros a partir dunha escaneadura, debuxos de paneis, solar, sistemas split e VRF, dimensionamento de tubaxes e cables, comprobacións de formigón e sísmicas, calquera proxección de mapa, unha opción de motor de render e desfacer en Studio; a 0.8.1 corrixe as ferramentas en gris do deseño de cinta.
keywords: novidades, o que hai de novo, notas da versión, rexistro de cambios, cambios, 0.8, 0.8.1, versión, novas funcións, evacuación, persoas, colas, acústica, reverberación, resposta ao impulso, inundación, vento, terremoto, perigo, ciclo de vida, vida útil, ids, etiquetas, cuadros, mover, alinear, distribuír, imaxe, fondo, escaneadura a muros, emprazamento desde civilcraft, debuxos de paneis, estrutura, solar, fv, split, vrf, fan coil, dimensionamento de tubaxes, bandexa de cables, iluminancia, formigón, sísmico, comparar escaneadura, epsg, proxección, documentos, carbono, custo, energyplus, motor de render, abrir en, usd, glb, unreal, desfacer, complementos, pcf, símbolos, plantas, calcar, plumas, cinta, navegador de proxecto, deseño
from: 87b03056
---

Isto é o que cambiou en BimCraft 0.8 (2026-11-01) e 0.8.1 (2026-11-02), comparado coa 0.7. BimCraft xa pode responder preguntas sobre un edificio e probalo, con persoas, son, auga, vento e terremotos, e debuxalo con máis ferramentas; a 0.8.1 é unha versión de correccións.

## Novidades

### Probar o edificio

- **Persoas no edificio.** A sección {{ui:Persoas no edificio}} do panel da esquerda fai pasar unha evacuación ou as chegadas dun día normal polos seus cuartos, portas e escaleiras. Ve as colas onde o edificio se estreita, o camiño máis longo ata unha saída desde cada cuarto e canto tarda a última persoa. Marque {{ui:Pechada}} nunha porta para ver que cambia, e marque {{ui:Mostrar as persoas na vista 3D}} para ver os camiñantes. Os resultados van a Problemas. É un modelo grosso de multitudes para decisións de deseño, non un certificado de seguridade contra incendios. Vexa [Facer pasar persoas polo edificio](topic:people-in-the-building).
- **Acústica de cuartos, e escoitala.** A sección {{ui:Acústica de cuartos}} dá o tempo de reverberación de cada cuarto por banda de oitava (Sabine e Eyring) a partir do seu tamaño e dos acabados que escolla, e, cun obxectivo propio, indica canta absorción cumpriría ese obxectivo. {{ui:Reproducir neste cuarto}} reproduce unha voz, unha palmada, notas punteadas ou o seu propio ficheiro de son a través dunha resposta ao impulso calculada para o cuarto. Os valores de absorción son valores publicados típicos para que os substitúa. Vexa [Acústica de cuartos](topic:room-acoustics).
- **Reprodución de inundación, vento e terremoto.** {{ui:Reprodución de perigo}} reproduce a auga subindo polos cuartos, a presión do vento en cada piso e un terremoto que sacode os pisos, nunha planta ou nun alzado cunha barra de tempo. Modelos sinxelos coas súas hipóteses no panel; non é unha comprobación de código. Vexa [Reproducir unha inundación, vento ou un terremoto](topic:hazard-playback).
- **O que se desgasta en cincuenta anos.** {{ui:Vista do ciclo de vida}} lista as xanelas, portas, acabados e cuberta, cada un cunha vida útil, os anos en que se substitúen e, cando escribe un custo por unidade, o custo por ano e o seu valor actual. {{ui:Gardar o programa (CSV)}} o escribe. As vidas útiles son cifras de planificación. Vexa [Ver o que se desgasta en cincuenta anos](topic:life-cycle-view).
- **Comprobacións de formigón e sísmicas.** Os bloques {{ui:Elementos de formigón}} e {{ui:Cargas sísmicas}} da pestana {{ui:Análise}} comprobán vigas e piares de formigón segundo ACI 318-19 e calculan forzas laterais equivalentes segundo ASCE 7-22 en pisos rixidos, con deriva por piso. Para que un enxeñeiro o comprobe. Vexa [Comprobar elementos de formigón e calcular cargas sísmicas](topic:concrete-and-seismic).

### Comprobar e informar

- **Comprobar contra un IDS.** Cargue o ficheiro `.ids` que lle deu un cliente e vexa en Problemas cada elemento que non cumpre, antes de entregar o IFC. Abra {{ui:Comprobar contra un IDS}} baixo {{ui:Comprobacións do modelo}}. Vexa [Comprobar un modelo contra o IDS dun cliente](topic:check-against-ids).
- **Etiquetas e cuadros.** Defina as súas propias etiquetas, asígnaas a moitos elementos á vez e faga cuadros cuxas columnas, filtros e grupos as lean; as etiquetas gárdanse no IFC. Vexa [Etiquetas e cuadros](topic:tags-and-schedules).
- **Documentos do modelo.** {{ui:Documentos do modelo}} enche unha plantilla de especificación a partir do IFC aberto e gárdaa como PDF, documento Word ou Markdown. Vexa [Documentos do modelo](topic:documents-from-the-model).
- **Comparar unha escaneadura co modelo.** Con unha nube de puntos aberta, {{ui:Comparar}} xulga cada elemento como construído, parcialmente construído, ausente ou non alcanzado, e mostra a porcentaxe construída. Vexa [Comparar unha escaneadura co modelo](topic:compare-scan-with-model).
- **Carbono e custo.** O panel de carbono suma o carbono incorporado a partir dunha táboa de factores que pode editar, e o panel de custo reparte os prezos segundo o cronograma 4D. Os factores que traen BimCraft son xenéricos e están marcados como non comprobados. Vexa [Carbono incorporado e custo](topic:embodied-carbon-and-5d-cost).
- **Calquera proxección de mapa.** {{ui:Medir}} › {{ui:Sistema de coordenadas…}} acepta un número EPSG, unha zona UTM, un nome ou a súa propia definición de proxección. Vexa [Xeorreferenciar con calquera proxección](topic:georeference-any-projection).

### Debuxar e editar

- **Mover, Alinear e Distribuír.** Baixo {{ui:Compilación}}; {{key:Shift+M}} inicia Mover (o {{key:M}} simple segue sendo Medir). Mover copia mentres avanza con {{key:C}}, cada paso é un desfacer, e viaxa nunha sesión de Live TeamWork. Vexa [Mover, copiar, alinear e distribuír](topic:move-align-distribute).
- **Imaxes baixo a planta.** {{ui:Compilación}} › {{ui:Imaxe}} coloca un PNG, JPEG ou WebP baixo a planta dun nivel ou nun plano vertical. Estableza a escala con dous puntos, e mova, xire, esvaeza e bloquee. Unha zona copiada en MarkupCraft pégase á escala da súa folla. Vexa [Poñer unha imaxe baixo a planta](topic:pictures-as-backgrounds).
- **Muros a partir dunha escaneadura.** Con unha escaneadura aberta, os muros, as portas e os cuartos aparecen como propostas que conserva ou rexeita unha a unha, nun só paso de desfacer. Só se atopan muros en dúas direccións perpendiculares. Vexa [Converter unha escaneadura en muros](topic:scan-to-walls).
- **Calcar, plumas e esbozar escaleira.** {{ui:Calcar}} amosa outro nivel en trazos baixo a planta, {{ui:Plumas}} dá aos muros, portas e xanelas o seu propio grosor de liña nunha soa vista, e {{ui:Esbozar escaleira}} converte unha liña de paso nunha escaleira. Ábrese unha malla Wavefront OBJ. Vexa [Calcar un nivel, plumas e unha escaleira a partir dun esbozo](topic:trace-pens-stairs-obj).
- **Edificios arredor dun enderezo.** Os edificios e a parcela que atopou Enderezo a emprazamento de CivilCraft chegan como suxestións; marque os que quere engadir. Vexa [Comezar desde o emprazamento de CivilCraft](topic:site-from-civilcraft).
- **Debuxos de paneis.** {{ui:Compilación}} › {{ui:Debuxos de paneis}} enmarca muros, pisos e cubertas en madeira ou aceiro lixeiro, e garda unha lista de corte como CSV e os planos de taller como PDF. Son valores de partida, non un deseño estrutural. Vexa [Debuxos de paneis](topic:panel-drawings).
- **Paleta de símbolos e plantas.** {{ui:Compilación}} › {{ui:Paleta de símbolos}} atopa símbolos eléctricos e de fontanería polo nome; a orixe {{ui:Plantas}} da {{ui:Biblioteca}} lista uns 400 elementos de planta con símbolos de planta. Vexa [Paleta de símbolos](topic:symbol-palette) e [Colocar un elemento de planta](topic:plant-list).

### Tubaxes, condutos e enerxía

- **Split, VRF e fan coils.** Unidades interiores e exteriores cos seus enlaces, e liñas de conexión dimensionadas a partir dunha táboa de valores de exemplo típicos que pode cambiar. Vexa [Split, VRF e fan coils](topic:split-vrf-fan-coils).
- **Cálculos.** O panel de cálculos comproba o dimensionamento das tubaxes de subministración e dos condutos coa caída de presión, encamiña cables por bandexas e condutos e amosa o seu enchemento, e calcula a iluminancia a partir de ficheiros IES ou EULUMDAT. Os valores predeterminados están etiquetados; escriba os valores do seu código. Vexa [Cálculos de tubaxes, condutos, cables e luz](topic:mep-calculations).
- **Ficheiros PCF.** A ferramenta Tubaxe, **Exportar PCF**, escribe os tramos para programas de tensión de tubaxes e isométricos, e un ficheiro PCF que se le de novo debuxa a súa tubaxe. Vexa [Ficheiros de compoñentes de tubaxe](topic:piping-pcf).
- **Solar fotovoltaico.** Coloque conxuntos sobre cubertas ou no chan, sombreéos a partir do modelo, estime a enerxía anual, comprobe as cadeas e faga datos dun esquema unifilar. O módulo inicial e as perdas son xenéricos. Vexa [Solar fotovoltaico](topic:solar-pv).
- **Ficheiro de EnergyPlus.** O panel Comprobar con EnergyPlus escribe o modelo como un IDF para executalo no seu propio EnergyPlus. Executalo no navegador precisa unha compilación que aloxe vostede e cuxo enderezo escriba; BimCraft non a inclúe. Vexa [Comprobar a calefacción e a refrixeración con EnergyPlus](topic:check-with-energyplus).

### Imaxes e ficheiros

- **Escoller o motor de render.** {{ui:Render}} ten unha opción {{ui:Motor}}. Os nosos dous motores integrados (Rápido e Trazador de camiño) seguen sendo os predeterminados. **Abrir en** garda a escena como ficheiro USD ou glTF, e unha carpeta de proxecto Unreal como .zip; en CadCraft Studio un complemento pode engadir un motor. O complemento de Unreal que abre o proxecto aínda non se publicou. Vexa [Escoller que programa debuxa a imaxe](topic:render-engines).
- **Desfacer en Studio.** Dentro de CadCraft Studio, BimCraft comunica a Studio cada paso acabado para que Studio poida desfacer o seu último paso na xanela que usou por último. Vexa [Desfacer entre aplicacións](topic:undo-across-apps).
- **Complementos no seu ficheiro.** Un IFC rexistra que complementos escribiron nel, e ofrece os que lle faltan ao abrilo. Vexa [Complementos no seu ficheiro](topic:add-ons-in-your-file).

### En todas as aplicacións

- **Conecte a súa IA.** O seu propio asistente pode manexar BimCraft a través da conexión de Studio e responder preguntas sobre o modelo, como cales cuartos están baixo unha superficie dada. Studio non ten IA propia. Vexa [Deixe que un asistente de IA traballe co seu modelo](topic:assistants).
- **Filas da barra de ferramentas.** {{ui:Configuración}} › {{ui:Xeral}} › {{ui:Filas da barra de ferramentas}} ofrece Envolver, 2 filas ou 1 fila; Envolver segue sendo o predeterminado.
- **Dispositivos de entrada.** A configuración de trackpad, lapis, rato 3D, controlador e MIDI compártese por todas as aplicacións.
- **Problemas e Live.** O panel de avisos e as sesións Live funcionan como antes, cos novos controis de enriba alimentando Problemas.
- **Idiomas.** 54 idiomas, dez deles novos. Os que non son o inglés son borradores automáticos aínda non revisados por un falante nativo; os temas de axuda son en gran parte en inglés.

## Corrixido en 0.8.1

- **Deseño de cinta + Navegador de proxecto.** Inserir › Importar CAD, Inserir › Imaxe e Xestionar › Unidades do proxecto dicían «Non construído aínda en BimCraft». Imaxe agora abre a ferramenta Imaxe, Importar CAD abre {{ui:Compilación}} › {{ui:Desde un debuxo…}} (DWG, DXF, PDF ou unha escaneadura), e Unidades do proxecto abre {{ui:Configuración}} › {{ui:Global}} › {{ui:Unidades}}. Mover e Alinear executan as ferramentas Mover e Alinear, Nivel abre {{ui:Engadir niveis…}}, Fases abre a sección de fases de reforma e Materiais abre a biblioteca de materiais.
- **Sección de clases DWG.** Líase como o tipo equivocado; corrixido en BimCraft e nas outras aplicacións que len DWG.
- **Idioma en tempo de execución.** Studio e as edicións empaquetadas poden cambiar de idioma sen reiniciar. Aínda non se probou en todas as plataformas; diga se o idioma non cambia.
- **Script de paquete Archicad.** `archicad_bundle.py`, unha descarga separada, agora atopa a ruta de Archicad, vixía a carpeta durante ata 20 segundos e volve tentar xunto ao paquete.

## Non está nesta versión todavía

- **Axudas de seguridade e deseño.** Persoas no edificio non ten un límite de distancia de percorrido dun código de edificación (vostede escribe o límite) e non se comprobou a man nunha planta real. As cifras de acústica, ciclo de vida e perigo son valores de planificación, non unha comprobación de código.
- **Futuros climáticos e EnergyPlus.** Non hai futuros climáticos integrados: pode cargar un ficheiro de escenario para a execución de inundación. A execución de EnergyPlus no navegador non forma parte desta versión.
- **Deseño de cinta.** A Medición de materiais segue como «Non construído» porque BimCraft non ten lista de cantidades de materiais, e 54 ferramentas máis en gris da cinta aínda non teñen unha ferramenta de BimCraft detrás.
- **Sinatura e plataformas.** Os instaladores de Windows e o .dmg de macOS non están asinados, así que SmartScreen mostra {{ui:Máis información}}, despois {{ui:Executar igualmente}}, e macOS precisa clic dereito e despois {{ui:Aberta}}. O compilado para iPad e iPhone non se reconstruíu para a 0.8.1.
- **Probas en páxinas reais.** Algunhas probas antigas do navegador de BimCraft aínda fallan na nosa páxina de probas, como antes da 0.8.1.

Todo o demais está en [O que aínda non está construído](topic:not-built-yet). Os cambios anteriores están en [Novidades da 0.7](topic:whats-new-0-7).
