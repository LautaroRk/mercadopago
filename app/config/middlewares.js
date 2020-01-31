/*
 * middleware
 *
 * @param { object } req
 * @param { object } res
 * @param { method } next
 *
 *
 * */
function MainMiddleware(req, res, next) {
  console.log(req.url);
  //res.status(500).send('Something broke!');
  next();
};

export default MainMiddleware
