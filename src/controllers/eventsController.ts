import { RequestHandler } from 'express'
import { writeFile, readFileSync } from 'fs'

const events = JSON.parse(
  readFileSync(`${__dirname}/../data/data.json`, 'utf-8')
);

export const getAllEvents: RequestHandler = (req, res) => {
  res.status(200).json({
    events
  })
}

export const createEvent: RequestHandler = (req, res) => {
  // aqui preciso verificar o tipo que me foi enviado de cada prop do json, e se nao bater retornar um not allowed (405 ou 500 sla), mas por enquanto vou deixar sem validacao de type pro createEvent

  const nextId = events.length + 1
  const createdObj = {
    _id: nextId,
    description: req.body.description,
    dateTime: req.body.dateTime,
    createdAt: req.body.createdAt
  }

  writeFile(`${__dirname}/../data/data.json`, JSON.stringify(createdObj), (err) => {
    console.log('File updated successfully');
    console.log(createdObj)
    res.status(200).json({
      status: 'success',
      createdObj
    })
  })


}

export const getEventById: RequestHandler = (req, res) => {
  // const id = parseInt(req.params.id)
  // const event = events.find(event => event._id === id)

  // if (!event) {
  //   return res.status(404).json({
  //     status: 'failed',
  //     message: 'Event not found'
  //   })
  // }
  res.status(200).json({
    cara: 'nada'
  })
}
