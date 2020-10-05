const { SALT_ROUNDS, TOKEN_SECRET } = process.env

import { AuthenticationError } from 'apollo-server-express'
import { compare, hash } from 'bcrypt'
import { Request } from 'express'
import { and, rule, shield } from 'graphql-shield'
import { sign, verify } from 'jsonwebtoken'

import { Context } from './types'

// export const createToken = (user: UserDocument): string =>
//   sign(
//     {
//       userId: user.id
//     },
//     TOKEN_SECRET as string
//   )

// export const signPassword = (password: string): Promise<string> =>
//   hash(password, Number(SALT_ROUNDS))

// export const verifyPassword = (
//   user: UserDocument,
//   password: string
// ): Promise<boolean> => compare(password, user.password)

// export const getUser = async (req: Request): Promise<UserDocument | null> => {
//   const auth = req.get('authorization')

//   if (!auth) {
//     return null
//   }

//   const token = auth.substr(7)

//   if (!token) {
//     throw new AuthenticationError('Invalid token')
//   }

//   const data = verify(token, TOKEN_SECRET as string)

//   const id = get(data, 'userId')

//   if (!id) {
//     throw new AuthenticationError('Invalid token')
//   }

//   const user = await User.findById(id)
//     .select('+password')
//     .populate(userPopulate)

//   if (!user) {
//     throw new AuthenticationError('User not found')
//   }

//   return user
// }

// const isAuthenticated = rule()((root, args, { user }) => user !== null)

export default shield(
  {
    Mutation: {
      // MutationName: AuthenticationName
    },
    Query: {
      // QueryName: AuthenticationName
    }
  },
  {
    allowExternalErrors: true
  }
)
