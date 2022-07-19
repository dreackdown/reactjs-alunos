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
  const [modalEdit, setModalEdit] = useState(false);

  const [alunoSelecionado, setAlunoSelecionado] = useState({
    id: '',
    nome: '',
    email: '',
    idade: ''
  })

  const selecionarAluno = (aluno, opcao) => {
    setAlunoSelecionado(aluno);
    (opcao === 'Editar') &&
      openCLoseModalEdit()
  }

  const openCLoseModal = () => {
    setModal(!modal);
  }

  const openCLoseModalEdit = () => {
    setModalEdit(!modalEdit);
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setAlunoSelecionado({
      ...alunoSelecionado, [name]: value
    })
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

  const pedidoPut = async () => {
    alunoSelecionado.idade = parseInt(alunoSelecionado.idade);
    let response = await axios.put(baseUrl + "/" + alunoSelecionado.id, alunoSelecionado);
    var dadosAuxiliar = data;
    dadosAuxiliar.map(aluno => {
      if (aluno.id === alunoSelecionado.id) {
        aluno.nome = response.nome;
        aluno.email = response.email;
        aluno.idade = response.idade;
      }
    })
    openCLoseModalEdit();
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
                <button className="btn btn-primary" onClick={() => selecionarAluno(aluno, "Editar")}>Editar</button>
                <button className="btn btn-danger" onClick={() => selecionarAluno(aluno, "Excluir")}>Excluir</button>
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

      <Modal isOpen={modalEdit}>
        <ModalHeader>Editar Aluno</ModalHeader>

        <ModalBody>
          <div className="form-group">
            <label htmlFor="id">Id:</label>
            <input type="text" className='form-control' readonly value={alunoSelecionado && alunoSelecionado.id} />
            <br />
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              className="form-control"
              name="nome"
              onChange={handleChange}
              value={alunoSelecionado && alunoSelecionado.nome}
            />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={handleChange}
              value={alunoSelecionado && alunoSelecionado.email}
            />
            <br />
            <label htmlFor="idade">Idade:</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="idade"
              onChange={handleChange}
              value={alunoSelecionado && alunoSelecionado.idade}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => pedidoPut()}>Editar</button>
          <button className="btn btn-danger" onClick={() => openCLoseModalEdit()}>Cancelar</button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
