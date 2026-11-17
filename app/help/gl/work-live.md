---
title: Traballar nun modelo xuntos con Live TeamWork
summary: Que cambia en BimCraft mentres está nunha sesión de Live TeamWork desde CadCraft Studio: as edicións de todas as persoas no mesmo modelo IFC, a súa propia desfacer e a unión desde un navegador na mesma rede.
keywords: live, live teamwork, studio live, xuntos, colaborar, sesión, compartir en directo, unirse, ifc, propiedades, renomear, cursor, punteiro, verse uns a outros, nomes, cor, selección, desfacer, anfitrión
from: 32061b72
---

## O que aprenderá

Que ocorre cun modelo IFC cando varias persoas o editan ao mesmo tempo. CadCraft Studio inicia e une a sesión de Live TeamWork (Compartir, Unirse); esta páxina trata do propio modelo.

## Todas as persoas editan ao mesmo tempo

O modelo do anfitrión chega a todas as persoas que se unen. Renomee elementos, cambie os valores das súas propiedades, coloque, cambie ou elimine elementos e pezas da biblioteca como de costume. As súas propias edicións móstranse de inmediato; as das demais persoas aparecen un momento despois de que as fagan. Cando unha edición cambia o que vostede ve (un elemento colocado ou eliminado), BimCraft volve debuxar o modelo e mantén a súa vista.

- **Dúas persoas cambian un mesmo elemento:** gaña o cambio posterior á mesma liña do modelo. Un conxunto de propiedades compartido por varios elementos cópiase para o elemento que edita, como sempre, para que os demais conserven os seus valores.
- **Un elemento que alguén acaba de eliminar** xa non se pode editar: a súa edición desfaise e a barra de estado indica o motivo.
- As novas liñas de cada persoa no modelo reciben números propios, así que dúas persoas nunca usan o mesmo.

## Ver ás demais persoas

Todas as persoas da sesión teñen unha cor propia. Na vista 3D vese o punteiro de cada persoa como unha frecha da súa cor, co seu nome ao lado, sobre o elemento que apunta, e unha caixa de liña descontinua da súa cor arredor de cada elemento que seleccionou.

Punteiros, nomes e seleccións existen só durante a sesión: nunca se gardan no ficheiro nin pasan á desfacer de ninguén. Deslízanse ata o lugar onde está cada persoa, así que tamén son suaves nunha conexión lenta.

## Desfacer desfai o seu propio traballo

{{ui:Desfacer}} desfai a súa última edición e deixa as das demais persoas tal como están. Cando alguén cambiou despois a mesma cousa, non se desfai nada e a barra de estado indica quen foi.

## Unirse desde un navegador

Un compañeiro sen Studio pode escanear a imaxe baixo o código do anfitrión cun teléfono, tableta ou ordenador na mesma rede. BimCraft ábrese no navegador e abre o modelo do anfitrión cando este lle permite entrar. Unha ligazón de convite permite unirse desde outra rede: o anfitrión necesita un posto do Team Cloud Plan para a aplicación, as demais persoas únense gratis, e a ligazón só funciona mentres a sesión do anfitrión estea aberta.

## Cando remata a sesión

Só o anfitrión garda o modelo. As demais persoas conservan unha copia sen gardar: use Gardar como IFC se quere conservala.

:::note
Só se comparte o primeiro modelo da escena. Abrir outro ficheiro durante unha sesión deixa a sesión nesa xanela.
:::
