export async function registerUser(req, res, next) {

    res.status(201).json({
        message: "User registered successfully",
        user: req.body
    })
  //   try{
  //     throw new Error("encounter an error while registering user");
  //   }catch(err){
  //     next(err)
  //   }

  //   try{
  //     throw new Error("password is too weak");
  //   }catch(err){
  //     err.status = 400
  //     next(err)
  //   }

  //   try {
  //     // throw new Error(" username is already exists with same email");
  //     console.log(user);

  //   } catch (err) {
  //     err.status = 409;
  //     next(err);
  //   }

//   try {
//     console.log(user);
//   } catch (err) {
//     err.status = 500;
//     next(err);
//   }
}
