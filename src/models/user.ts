import { Document, model, Schema } from 'mongoose'

import { IUser } from '../graphql-types'

export interface UserDocument extends Document {
  id: string
  email: string
  name: string
  //other: document
  json: () => IUser
}

const user = new Schema({
  email: {
    type: String
    // ref: 'String Model'
  },
  id: {
    type: String
  },
  name: {
    type: String
  }
})

// methods

// user.methods.someMethod = async function (
//   this: UserDocument,
//   type: string
// ): Promise<void> {
//   await this.save()
// }

user.methods.json = function (this: UserDocument): IUser {
  const { id, email, name } = this

  return {
    email,
    id,
    name
  }
}

export const User = model<UserDocument>('User', user)
