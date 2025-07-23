self.onmessage = function (event) {
  console.log('WORKER recebeu: ', event.data);

  // self.postMessage('Olá para você também.');

  switch (event.data) {
    case 'FAVOR': {
      self.postMessage('Sim, posso fazer um favor com certeza.');
      break;
    }
    case 'FALA_OI': {
      self.postMessage('OK. OI!');
      break;
    }
    case 'FECHAR': {
      self.postMessage('Tá bom, vou fechar');
      self.close();
      break;
    }
    default:
      self.postMessage('Mensagem desconhecida');
  }
};
