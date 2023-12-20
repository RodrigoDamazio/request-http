import { useState } from "react";
import SegTrab from '../assets/segtrab4.avif';
import projFetch from "../axios/config";
import './Colaborador.css';

const Colaborador = () => {
  const baseURL = "http://localhost:4444/api/v1/Colaborador";

  const [colab, setColab] = useState({
    usuario: '',
    senha: '',
    permissaoId: '',
    idEmpresa: '',
    nome: '',
    rg: '',
    cpf: '',
    endereco: '',
    numeroEndereco: '',
    cidade: '',
    cep: '',
  });

  const [colabs, setColabs] = useState([]);
  const [colabEditando, setColabEditando] = useState(null);

  const carregarDados = async () => {
    try {
      const resposta = await fetch(baseURL);
      if (!resposta.ok) {
        throw new Error('Erro ao carregar dados.');
      }
      const dados = await resposta.json();
      setColabs(dados);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log('Dados a serem enviados:', colab);
      if (colabEditando && colabEditando.id) {
        // Se colab tem um ID, atualiza (PUT)
        await projFetch.put(`Colaborador`, colab);
        console.log('Fazendo PUT:', colab);
      } else {
        // Senão, cria um novo (POST)
        const resposta = await projFetch.post('Colaborador', colab);
        console.log('Resposta da API (POST):', resposta.data);
      }
      // Limpar os campos após o sucesso
      setColab({
        usuario: '',
        senha: '',
        permissaoId: '',
        idEmpresa: '',
        nome: '',
        rg: '',
        cpf: '',
        endereco: '',
        numeroEndereco: '',
        cidade: '',
        cep: '',
      });
      setColabEditando(null); 
      // Recarregar dados após a submissão bem-sucedida
      carregarDados();
    } catch (erro) {
      console.error('Erro ao fazer a requisição:', erro);
    }
  };

  const handleExcluir = async (id) => {
    try {
      await projFetch.delete(`Colaborador/${id}`);
      // Recarregar dados após a exclusão bem-sucedida
      carregarDados();
    } catch (error) {
      console.error('Erro ao excluir dado:', error);
    }
  };

  const handleEditar = (colabEditar) => {
    console.log('Colab antes de editar:', colabEditar);
    setColabEditando(colabEditar)
    setColab({
      id: colabEditar.id,
      usuario: colabEditar.usuario,
      senha: colabEditar.senha,
      permissaoId: colabEditar.permissaoId,
      idEmpresa: colabEditar.idEmpresa,
      nome: colabEditar.nome,
      rg: colabEditar.rg,
      cpf: colabEditar.cpf,
      endereco: colabEditar.endereco,
      numeroEndereco: colabEditar.numeroEndereco,
      cidade: colabEditar.cidade,
      cep: colabEditar.cep,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log('Novo valor:', value);
    setColab((prevColab) => ({
      ...prevColab,
      [name]: value,
    }));
  };

  return (
  <div> 
    <div className="header">
       <div className="headline">
       <h1 className=''>Colaboradores engajados</h1>
       <h2 clasName=''>SegTrab Digital</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, aperiam,
         officiis ex sed perspiciatis non fuga sequi porro eveniet facilis suscipit 
         temporibus ut ea necessitatibus labore harum iusto, culpa et.</p>  
    </div>
    <div class="img-headline">
      <img src={SegTrab} alt=''/>
    </div>
   <div>
    <section>
        <h2 class="titulo">Venha fazer parte do nosso time</h2>   
      <div className="img-section">
        <div className="colab-list">
        <h1>Colaboradores:</h1>
        <button class="colab-list__button" 
        // eslint-disable-next-line no-undef
        onClick={() => carregarDados()}>Obter Colaboradores</button>
        <ul className="colab-list__ul" >
          <li className="colab-list__item">
          {colabs.map((colab) => (
          <li className="colab-list__item-name" key={colab.id}>
            <p>{colab.nome} </p>
            <p> {colab.endereco}</p>
            <p>{colab.cidade}</p>
            
            <button class="botao_alterar"
                    onClick={() => handleEditar(colab)}>Alterar</button>
            <button className="botao_remover" 
                    onClick={() => handleExcluir(colab.id)}>Remover</button>
          </li>
          ))}
          </li>
        </ul>
         </div> 
      </div>
        <div className="img-section">
          <form className="form" onSubmit={handleSubmit} >
            <h2 className="colab-list__title">Cadastro de Colaboradores:</h2>
            <label>
              Usuário
            <input type="text" 
                   name='usuario'
                   id='usuario'
                   value={colab.usuario}
                   onChange={handleInputChange}/>
            </label>
            <label>
              Senha
            <input type="text" 
                   name='senha'
                   id='senha'
                   value={colab.senha}
                   onChange={handleInputChange}/>
            </label>
            <label>
              PermissãoId
            <input type="number" 
                   name='permissaoId'
                   id='permissaoId'
                   value={colab.permissaoId}
                   onChange={handleInputChange}/>
            </label>
            <label>
              IdEmpresa
            <input type="number" 
                   name='idEmpresa'
                   id='idEmpresa'
                   value={colab.idEmpresa}
                   onChange={handleInputChange}/>
            </label>
            <label>
              Nome
            <input type="text" 
                   name='nome'
                   id='nome'
                   value={colab.nome}
                   onChange={handleInputChange}/>
            </label>
            <label>
              RG
            <input type="number" 
                   name='rg'
                   id='rg'
                   value={colab.rg}
                   onChange={handleInputChange}/>
            </label>
            <label>
              CPF
            <input type="number" 
                   name='cpf'
                   id='cpf'
                   value={colab.cpf}
                   onChange={handleInputChange}/>
            </label>
            <label>
              Endereço
            <input type="text" 
                   name='endereco'
                   id='endereco'
                   value={colab.endereco}
                   onChange={handleInputChange}/>
            </label>
            <label>
              Numero
            <input type="number" 
                   name='numeroEndereco'
                   id='numeroEndereco'
                   value={colab.numeroEndereco}
                   onChange={handleInputChange}/>
            </label>
            <label>
              Cidade
            <input type="text" 
                   name='cidade'
                   id='cidade'
                   value={colab.cidade}
                   onChange={handleInputChange}/>
            </label>
            <label>
              CEP
            <input type="number" 
                   name='cep'
                   id='cep'
                   value={colab.cep}
                   onChange={handleInputChange}/>
            </label>
            <button type="submit" className="button"> 
            {colabEditando ? "Atualizar Colaborador" : "Cadastrar Colaborador"}
            </button>
          </form>
        </div>
      </section>
      </div>
    </div>
  </div > 
     
  );
}

export default Colaborador
