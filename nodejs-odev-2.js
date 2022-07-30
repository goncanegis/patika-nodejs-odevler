const posts = [
  {
    title: 'Blog post 1',
    date: '2020-01-01',
    content: 'This is the first blog post',
  },
  {
    title: 'Blog post 2',
    date: '2020-01-02',
    content: 'This is the second blog post',
  },
  {
    title: 'Blog post 3',
    date: '2020-01-03',
    content: 'This is the third blog post',
  },
]

const listPosts = () => {
  posts.map((post) => {
    console.log(`${post.title} - ${post.date} - ${post.content}`)
  })
}

const addPost = (newPost) => {
  const promise1 = new Promise((resolve, reject) => {
    posts.push(newPost)
    resolve(posts)
    reject('bir hata olustu')
  })

  return promise1
}

async function showPosts() {
  try {
    await addPost({
      title: 'Blog post 4',
      date: '2020-01-04',
      content: 'This is the fourth blog post',
    })
    listPosts()
  } catch (error) {
    console.log(error)
  }
}

showPosts()
