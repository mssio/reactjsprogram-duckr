export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Mario Suharja',
        avatar: 'https://pbs.twimg.com/profile_images/698480433/57155393.jpg',
        uid: 'mssio',
      })
    }, 2000)
  })
}
