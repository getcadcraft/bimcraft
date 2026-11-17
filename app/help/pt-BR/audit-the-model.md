---
title: Auditar o modelo: ambientes, etiquetas, LOD, interferências e interfaces
summary: Execute verificações prontas para ambientes sem nome, etiquetas ausentes, elementos abaixo do nível de desenvolvimento que a fase do projeto exige, interferências entre disciplinas e interfaces LOD 350. Somente orientação: nada é bloqueado.
keywords: auditoria, verificação, ambiente sem nome, etiqueta ausente, marca, lod, nível de desenvolvimento, marco, fase, interferência, disciplina, coordenação, interface, lod 350, abertura, verga, passagem, bainha, tubulação, duto, problemas, relatório de verificação, consultivo
from: cc83a14d
---

## O que você vai fazer

Revise o modelo inteiro de uma vez antes de emiti-lo. A auditoria executa conjuntos de regras prontos e coloca o que encontra na lista {{ui:Problemas}} como orientação. Nada é bloqueado: você corrige um achado, ou o aceita com um motivo, como qualquer outro problema.

## Passos

1. Abra {{ui:Verificações do modelo}} › {{ui:Auditoria}} no painel esquerdo, ou {{ui:Ferramentas}} › {{ui:Auditar o modelo…}} (digitado: `AUDIT`).
2. Escolha a {{ui:Fase do projeto}}. É a mesma fase dos detalhes do desenho.
3. Marque os conjuntos de regras a executar.
4. Clique em {{ui:Executar a auditoria}}.
5. Leia a linha de cada conjunto de regras e depois {{ui:Abrir a lista de Problemas}}. Um clique em um achado seleciona o elemento dele.
6. {{ui:O relatório de verificação}} baixa o relatório: cada achado, quem aceitou o quê e por quê, e os conjuntos de regras executados.

## Os conjuntos de regras

- **Ambientes sem nome**: um ambiente sem nome, ou ainda com o nome que o programa deu a ele ("Ambiente 3").
- **Etiquetas ausentes**: uma porta ou janela sem marca, um ambiente sem número, um dispositivo elétrico sem etiqueta.
- **Elementos abaixo do LOD da fase**: cada parede, piso, forro, telhado, porta e janela cujo LOD esteja abaixo do que a fase exige. Um elemento lê a etiqueta de LOD do seu tipo; um elemento verificado em campo é LOD 500. Elementos sem etiqueta são contados em uma única nota, porque não podem ser verificados.
- **Interferências entre disciplinas**: elementos de duas disciplinas (arquitetura, estrutura, mecânica, hidráulica, elétrica, pela classe IFC) que se cruzam. Um telhado apoiado nas suas paredes não é considerado.
- **Interfaces LOD 350**: cada porta e janela está em uma abertura da sua parede, a abertura cabe dentro da parede, duas aberturas não se sobrepõem, uma abertura mais larga que o limite tem uma verga (um elemento sobre ela, ou uma nota na porta ou janela), e uma tubulação, duto ou eletrocalha que atravessa uma parede ou laje tem uma abertura ali. Os achados são contados por par de disciplinas.
- **Elementos reconhecidos que ninguém verificou**: paredes, portas, janelas e ambientes lidos de um PDF, de uma digitalização ou de um desenho que ainda não foram verificados. Veja [Marcar elementos como verificados ou conferidos em campo](topic:verification).

## O LOD de cada fase

Abra {{ui:O LOD que cada fase exige}} para ver ou alterar a tabela.

:::note
A tabela e a largura da verga são os valores iniciais do CadCraft. Não são tirados de uma norma: um projeto define o LOD por fase no seu plano de execução BIM. Ajuste-os para os seus. Um escritório pode definir a tabela para todos em Configurações › Políticas padrão › Auditoria; uma alteração na seção Auditoria é mantida neste computador.
:::

## Bom saber

- Uma verga pode ser anotada em vez de modelada: selecione a porta ou janela e preencha {{ui:Observação sobre verga}} em {{ui:Verificação}} nas Propriedades.
- Uma tubulação que passa por uma abertura real não cruza superfície e não é reportada. Uma que é modelada atravessando a parede diretamente é reportada.
- A verificação de interferências para após alguns segundos em um modelo muito grande, e informa isso. Para uma verificação completa de dois conjuntos escolhidos, use [Localizar interferências entre elementos](topic:clash-check).
- Execute a auditoria de novo depois de alterar o modelo. Achados aceitos continuam aceitos enquanto seus números não mudarem.
- Ela lê o modelo. Não substitui uma revisão de coordenação pelas pessoas responsáveis.

## Próximos passos

- [Verificar um modelo quanto a problemas comuns](topic:model-checks)
- [Localizar interferências entre elementos](topic:clash-check)
- [Marcar elementos como verificados ou conferidos em campo](topic:verification)
