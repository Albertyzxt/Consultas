const prompt = require("prompt-sync")({ sigint: true });

let consulta = [];

while (true) {
  console.log(`
    //     === Menu de Consultas Médicas ===
    //     1. Adicionar uma nova consulta
    //     2. Listar consultas
    //     3. Atualizar sua consulta
    //     4. Cancelar consulta
    //     0. Sair
    `);

  let opcao = prompt("Escolha uma opção: ");

  if (isNaN(opcao)) {
    console.log("Você deve escolher um número!");
    break;
  }

  opcao = parseInt(opcao);

  if (opcao === 0) {
    console.log("Saindo...");
    break;
  } else if (opcao === 1) {
    let paciente = prompt("Nome do paciente: ");
    while (!paciente.trim()) {
      console.log("O nome do paciente não pode estar em branco!");
      paciente = prompt("Nome do paciente: ");
    }

    let medico = prompt("Nome do médico: ");
    while (!medico.trim()) {
      console.log("O nome do médico não pode estar em branco!");
      medico = prompt("Nome do médico: ");
    }

    let data = prompt("Data da consulta: ");
    while (!data.trim()) {
      console.log("A data não pode estar em branco!");
      data = prompt("Data da consulta: ");
    }
    let hora = prompt("Horário da consulta: ");
    while (!hora.trim()) {
      console.log("O horário não pode estar em branco!");
      hora = prompt("Horário da consulta: ");
    }
    consulta.push({ paciente, medico, data, hora });
    console.log("Consulta marcada!");
  } else if (opcao === 2) {
    if (consulta.length === 0) {
      console.log("Nenhuma consulta agendada.");
      break;
    } else {
      consulta.forEach((consulta, index) => {
        console.log(
          `${index + 1}. ${consulta.paciente} - ${consulta.medico} - ${
            consulta.data
          } - ${consulta.hora}`
        );
      });
    }
  } else if (opcao === 3) {
    if (consulta.length === 0) {
      console.log("Nenhuma consulta agendada para atualizar.");
    } else {
      let busca = prompt("Digite o número da consulta que deseja atualizar: ");
      busca = parseInt(busca);

      if (busca < 1 || busca > consulta.length) {
        console.log("Número de consulta inválido.");
      } else {
        let paciente = "";
        while (!paciente.trim()) {
          paciente = prompt("Novo nome do paciente: ");
          if (!paciente.trim()) {
            console.log("O nome do paciente não pode estar em branco!");
          }
        }

        let medico = "";
        while (!medico.trim()) {
          medico = prompt("Novo nome do médico: ");
          if (!medico.trim()) {
            console.log("O nome do médico não pode estar em branco!");
          }
        }

        let data = "";
        while (!data.trim()) {
          data = prompt("Nova data da consulta: ");
          if (!data.trim()) {
            console.log("A data não pode estar em branco!");
          }
        }

        let hora = "";
        while (!hora.trim()) {
          hora = prompt("Novo horário da consulta: ");
          if (!hora.trim()) {
            console.log("O horário não pode estar em branco!");
          }
        }
        consulta[busca - 1] = { paciente, medico, data, hora };
        console.log("Consulta atualizada!");
      }
    }
  } else if (opcao === 4) {

        if (consulta.length === 0) {
            console.log("Nenhuma consulta agendada para cancelar.");
          } else {
            let busca = prompt("Digite o número da consulta que deseja cancelar: ");
            busca = parseInt(busca);
        
            if (busca < 1 || busca > consulta.length) {
              console.log("Número de consulta inválido.");
            } else {
              let confirmacao = prompt(`Tem certeza que deseja cancelar a consulta de ${consulta[busca - 1].paciente} - ${consulta[busca - 1].medico} em ${consulta[busca - 1].data} às ${consulta[busca - 1].hora}? (s/n): `);
        
              if (confirmacao.toLowerCase() === 's'|| confirmacao.toLowerCase() === 'sim') {
                consulta.splice(busca - 1, 1);
                console.log("Consulta cancelada com sucesso.");
              } else {
                console.log("Operação de cancelamento cancelada pelo usuário.");
              }
            }
        }
    } else {
        console.log("Opção Inválida!")
            break;
    }
}
