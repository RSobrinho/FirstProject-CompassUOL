import { RequestHandler } from 'express'
import User from './../models/usersModel'

// ideias para implementar
// criar um usuario administrador, que pode fazer getAllUsers, getUsersById, getUsersByName, deleteUserById, deleteUserByName, e ai vai indo, porem somente o admin tem possibilidade de fazer isso

// o usuario normal só vai ter possibilidade de criar a conta dele (POST) e fazer login (tbm POST, mas com o intuito de enviar informaçõesw pro backend, validar as informações passadas, e logar definitivamente)

// fazer uma classe user, e dai o admin vai herdar dela, podendo fazer algumas coisas a mais

// obs, vou fazer isso dai de cima caso me sobre tempo

// nesse post aqui, vai ter um argumento a mais que o mano pode passar, que se for satisfeito com o backend, ele cria uma conta de adminstrador, com acessos a mais. Tipo um: admin: senhamtofortesetamaluco. E valida, se houver esse tal argumento, com a senha correta, é um ademir
export const signUpUser: RequestHandler = async (req, res) => {
  // validar as quinhentas e 50 informacoes do usuario, que nao vou fazer agora, vou criar um middleware validador, pq ai da pra usar no signInUser tbm
  // criptografar o password do mano e colar no bd (middleware tbm)

  try {
    const newUser = await User.create(req.body)

    res.status(200).json({
      status: 'success',
      message: 'User created successfully'
    })

  } catch (err) {
    res.status(400).json({
      status: 'failed', 
      message: `User creation failed: ${err}`
    })
  }

}

export const signInUser: RequestHandler = async (req, res) => {
  // criptografar dnv o password dele, e comparar com o que esta no bd (olha só, middlware tbm XD)
  // validar as informacoes e logar, e logando, ele tera acesso a modificar os eventos se quiser

  // logo, vou ter que verificar se o usuario esta ou nao logado , para poder modificar seus eventos

  // tambem verificar os eventos atrelados somente ao usuario tal, crl isso ta afundando mto rapido :0. Pq um usuario 1 nao pode mecher nos eventos do usuario 43

  try {
    // isso daqui, so dps de criptografar para o hash correspondente ao password
    const user = await User.findOne({ email: req.body.email, password: req.body.password });

    if(!user) {
      throw new Error('User not found')
    }

    res.status(200).json({
      status: 'success',
      message: 'User logged successfully'
    })

  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err
    })
  }
}
