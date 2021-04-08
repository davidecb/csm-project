
export const ADD_MODEL = 'ADD_MODEL'
export const UPDATE_MODEL = 'UPDATE_MODEL'
export const DELETE_MODEL = 'DELETE_MODEL'


export const addModel = (model) => ({
  type: ADD_MODEL,
  payload: model
})

export const updateModel = (model) => ({
  type: UPDATE_MODEL,
  payload: model
})

export const deleteModel = (model) => ({
  type: DELETE_MODEL,
  payload: model
})