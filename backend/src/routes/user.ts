import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { decode, verify, sign } from 'hono/jwt'
import { signinValidation, signupValidation } from 'sshikharr-blog-clone'

const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

userRouter.post('/signup', async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  const body = await c.req.json();
  const { success } = signupValidation.safeParse(body);
  if(success === false){
    return c.json({
            message: "Incorrect Input"
        }, 411)
  }else{
    try{
    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password
      }
    })
    console.log(user);
    console.log(c.env.JWT_SECRET);
    let token;
    try {
      token = await sign({ id: user.id }, c.env.JWT_SECRET);
    } catch (jwtError) {
      console.error("Error signing JWT:", jwtError);
      return c.json({
        message: "Error generating token"
      }, 500);
    }
    console.log(token);
    return c.json({token}, 200);
  }catch(err){
    return c.json({
      message: "Couldn't create user"
    }, 400)
  }
  }
  
})

userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();
  const { success } = signinValidation.safeParse(body);
  if(success === false){
    return c.json({
            message: "Incorrect Input"
        }, 411)
  }else{
    try{
    const user = await prisma.user.findFirst({
      where:{
        email: body.email,
        password: body.password
      }
    })
    if(user===null){
      throw new Error();
    }
    const token = await sign({id: user.id}, c.env.JWT_SECRET);
    return c.json({token}, 200);
  }catch(err){
    return c.json({
      message: "Couldn't find user"
    }, 400)
  }
  }
  
})

export default userRouter 