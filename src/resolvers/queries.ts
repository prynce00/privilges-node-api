import { IQueryResolvers } from '../graphql-types'
import { User } from '../models'
import { Context } from '../types'

export const queries: IQueryResolvers<Context> = {
  async getSomething() {
    return await User.findOne()
  }
}
