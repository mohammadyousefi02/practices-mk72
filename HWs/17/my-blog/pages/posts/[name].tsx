import React, { useEffect, useLayoutEffect, useState } from 'react'
import MainLayout from '../../src/layout/MainLayout/index'

import { server } from '../../config/index'
import Head from '../../node_modules/next/head'
import Link from '../../node_modules/next/link'
import { Ipost } from '../../interfaces/index'

interface Props extends Ipost {
    a:string
}

export default function Post({a,...post}:Props) {

  return (
    <>
        <Head>
            <title>{post.title}</title>
        </Head>
        <div className='flex justify-center post-div w-full'>
            <MainLayout>
                <div className='p-5'>
                    <Link href="/">← back to list</Link>
                    <h1 className='text-[38px] sm:text-[50px] font-black'>{post?.title}</h1>
                </div>
                <div dangerouslySetInnerHTML={{__html:post?.content}}></div>
            </MainLayout>
        </div>
    </>
  )
}

export async function getServerSideProps(context) {
    const {id} = context.query
    const result = await fetch(`${server}/api/posts/${id}`)
    const post:Ipost = await result.json()
    return {
        props: {
            post
        }
    }
}