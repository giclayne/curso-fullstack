import { useState, React } from "react";
import "./Form.module.css";
const Form = ({ user }) => {
  /**Controle de inputs */
  /* 3 - Gerenciamento de dados */

  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value); // resgatar o valor do input
  };

  /**Enviar formulario */
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulario");
    console.log(name,email,bio,role)

    /**Limpando form */
    setEmail("");
    setName("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      {/**5 -envio de form */}
      {/**1 - criação de form */}
      <form /**5 */ onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            /**3 */ onChange={handleName}
            value={name}
          ></input>
        </div>
        <div>
          {/**2 - Label envolvendo input */}
          <label>
            <span>Email</span>
            {/**4 - simplificação de manipulação de state */}
            <input
              type="email"
              name="email"
              placeholder="Digite seu email"
              /*4*/ onChange={(e) => setEmail(e.target.value)}
              /**Preenche no formulario */
              value={email}
            />
          </label>
          {/**8 - textarea */}
          <label>
            <span>Bio:</span>
            <textarea
              name="bio"
              placeholder="Descricao do usuario"
              cols="30"
              rows="10"
              onChange={(e) => setBio(e.target.value)}
              value={bio}
            ></textarea>
          </label>
          <label>
            <span> Função no sistema </span>
            <select name="role" onChange={(e)=> setRole(e.target.value)} value={role}>
                <option value="user">Usuário</option>
                <option value="admin">ADM</option>
                <option value="editor">Editor</option>

            </select>
          </label>
          option
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default Form;
