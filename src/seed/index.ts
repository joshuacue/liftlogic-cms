import type { Payload } from 'payload'

export const seed = async (payload: Payload): Promise<void> => {
  try {
    // await payload.create({
    //   collection: 'users',
    //   data: {
    //     email: 'joshuacuenzall@gmail.com',
    //     name: 'Josh',
    //     password: 'Dookie@01',
    //     roles: ['admin'],
    //   },
    // })

    // await payload.create({
    //   collection: 'users',
    //   data: {
    //     email: 'rex@liftlogic.com',
    //     name: 'Rex',
    //     password: 'passwordrex',
    //     roles: ['admin'],
    //   },
    // })
    console.log('INIT')
  }
  catch(_err) {
    payload.logger.error('Seed failed')
  }
}
