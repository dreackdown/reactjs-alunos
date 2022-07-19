import './App.css';

import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import logoCadastro from './assets/clipboard-data.svg'


function App() {

  const baseUrl = 'https://localhost:44311/api/alunos';

  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  const [alunoSelecionado, setAlunoSelecionado] = useState({
    id: '',
    nome: '',
    email: '',
    idade: ''
  })

  const openCLoseModal = () => {
    setModal(!modal);
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setAlunoSelecionado({
      ...alunoSelecionado, [name]: value
    })
    console.log(alunoSelecionado);
  }

  const pedidoGet = async () => {
    let response = await axios.get(baseUrl)
    setData(response.data);
  }

  const pedidoPost = async () => {
    delete alunoSelecionado.id;
    alunoSelecionado.idade = parseInt(alunoSelecionado.idade);
    let response = await axios.post(baseUrl, alunoSelecionado);
    setData(data.concat(response.data));
    openCLoseModal();
  }

  useEffect(() => {
    pedidoGet();
  }, [])

  return (
    <div className="aluno-container">
      <br />
      <h3>Cadastro de Alunos</h3>

      <header>
        <img src={logoCadastro} alt="Cadastro" />
        <button className="btn btn-success" onClick={() => openCLoseModal()}>Incluir Novo Aluno</button>
      </header>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Operação</th>
          </tr>
        </thead>
        <tbody>
          {data.map(aluno => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>{aluno.idade}</td>
              <td>
                <button className="btn btn-primary">Editar</button>{' '}
                <button className="btn btn-danger">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={modal}>
        <ModalHeader>Incluir Alunos</ModalHeader>

        <ModalBody>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="nome"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="idade">Idade:</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="idade"
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>

        <ModalFooter>
          <button className="btn btn-primary" onClick={() => pedidoPost()}>Incluir</button>
          <button className="btn btn-danger" onClick={() => openCLoseModal()}>Cancelar</button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
