import createError from 'http-errors'

/**
 * Makes sure there is a session active.
 *
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
export async function loggedIn (req, res, next) {
  try {
    console.log('Loggad in')
    next()
  } catch (error) {
    next(createError(404, error.message))
  }
}
