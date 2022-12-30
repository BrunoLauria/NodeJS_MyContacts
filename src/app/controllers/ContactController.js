class ContactController {
  index(request, response) {
    // Listar todos os registros
    response.send('Send from Contacts Controller');
  }

  show() {
    // Obter UM registro
  }

  store() {
    // Criar um registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

//  Singleton
module.exports = new ContactController();
