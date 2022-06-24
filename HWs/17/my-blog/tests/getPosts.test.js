const mongoose = require('mongoose')
const mockingoose = require("mockingoose");
const PostModel = require("../models/postModel");
const { createMocks } = require("node-mocks-http")

const getPosts = require("../pages/api/posts/index")


let req;
let res;

describe('posts test',()=>{
    describe('get posts',()=>{
        beforeEach(async()=>{
            mockingoose(PostModel).toReturn([
                { title:'test1' },
                { title:'test2' }
            ],'find');
            const obj = createMocks({
                method: 'GET',
              });
              req = obj.req
              res = obj.res
        })
        it('should return all posts',async()=>{
            await getPosts(req,res)
            const firstItem = JSON.parse(res._getData())[0]
             expect(firstItem.title).toBe('test1')
        })
        it('should return 200 status',async()=>{
            await getPosts(req,res)
            expect(res._getStatusCode()).toBe(200);
        })
    })
   
})

