import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { decode, verify, sign } from 'hono/jwt'
import { blogCreate, blogUpdate } from 'sshikharr-blog-clone'


const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
  Variables: {
    userId: string
  }
}>()

blogRouter.use('/*', async(c, next)=>{
  const authHeader = c.req.header('Authorization')
  if(!authHeader){
    return c.json({
      message: "Not Authorized"
    }, 401)
  }
  const token = authHeader.split(' ')[1];
  try{
    const decode = await verify(token, c.env.JWT_SECRET);
  if(!decode){
    return c.json({
      message: "Not Authorized"
    }, 401)
  }
  const stringValue: string = `${decode.id}`;
  c.set('userId', stringValue);
    await next();
  }catch(err){
    c.json({
        message: "You are not logged in"
    })
  }
  
})

blogRouter.post('/*', async (c) => { 

    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

    const body = await c.req.json();
    const { success } = blogCreate.safeParse(body);
    if(success===false){
        return c.json({
            message: "Incorrect Input"
        }, 411)
    }else{
        try{
        const id: string = c.get('userId');
        const blog = await prisma.post.create({
            data:{
              title: body.title,
              content: body.content,
              authorId: id
            }
        })
        return c.json({blog}, 200)
    }catch(err){
        return c.json({
            message: "Couldn't create blog"
        }, 400)
    }
    }
})

blogRouter.put('/*', async(c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

    const body = await c.req.json();
    const { success } = blogUpdate.safeParse(body);
    if(success===false){
        return c.json({
            message: "Incorrect Input"
        }, 411)
    }else{
        try{
        const id: string = c.get('userId');
        const blog = await prisma.post.update({
            where:{
              id: body.id,
              authorId: id
            },
            data:{
                title: body.title,
                content: body.content
            }
        })
        return c.json({blog}, 200)
    }catch(err){
        return c.json({
            message: "Couldn't update blog"
        }, 400)
    }
    }
    
})

blogRouter.get('/get/:id', async (c) => {
     const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const id = c.req.param('id')
  try{
    const blog = await prisma.post.findUnique({
        where:{id: id},
        select: {
          id: true,
          title: true,
          content: true,
          author:{
            select:{
              name: true
            }
          }
        }
    })
    return c.json({blog}, 200)
  }catch(err){
    return c.json({
            message: "Couldn't find blog"
        }, 400)
  }
})

blogRouter.get('/bulk', async(c) => {
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  try{
    const blog = await prisma.post.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author:{
          select:{
            name: true
          }
        }
      }
    });
    return c.json({blog}, 200)
  }catch(err){
    return c.json({
            message: "Couldn't find blogs"
        }, 400)
  }
})

export default blogRouter