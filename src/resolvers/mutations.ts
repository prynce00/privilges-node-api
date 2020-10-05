import { Context } from '../types'
import { IMutationResolvers } from './../graphql-types'

export const mutations: IMutationResolvers<Context> = {
  doDomethingByParam(root, { params }) {
    return true
  }
}
