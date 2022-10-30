module.exports = (ctx) => {
  const register = () => {
    ctx.helper.uploader.register('light_picture', {
      handle,
      name: 'LightPicture图床',
      config: config
    })
  }

  const postOptions = (Url, Key, fileName, image) => {
    return {
      method: 'POST',
      url: Url + `/api/upload`,
      headers: {
        contentType: 'multipart/form-data',
        'User-Agent': 'PicGo',
        'Accept': 'application/json'
      },
      formData: {
        file: {
          value: image,
          options: {
            filename: fileName
          }
        },
        key: Key,
        ssl: 'true'
      }
    }
  }
  const handle = async (ctx) => {
    let userConfig = ctx.getConfig('picBed.light_picture')
    if (!userConfig) {
      throw new Error('Can\'t find uploader config')
    }
    const Key = userConfig.Key
    const Url = userConfig.Url
    const imgList = ctx.output
    for (let i in imgList) {
      let image = imgList[i].buffer
      if (!image && imgList[i].base64Image) {
        image = Buffer.from(imgList[i].base64Image, 'base64')
      }
      const postConfig = postOptions(Url, Key, imgList[i].fileName, image)
      let body = await ctx.request(postConfig)
      body = JSON.parse(body)
      ctx.log.info(body)
      if (body.code === 200) {
        delete imgList[i].base64Image
        delete imgList[i].buffer
        ctx.log.info(body.data.url)
        imgList[i]['imgUrl'] = body.data.url
      } else {
        ctx.emit('notification', {
          title: '上传失败',
          body: body.message
        })
        throw new Error(body.message)
      }
    }
    return ctx
  }
  const config = ctx => {
    let userConfig = ctx.getConfig('picBed.light_picture')
    if (!userConfig) {
      userConfig = {}
    }
    return [
      {
        name: 'Url',
        type: 'input',
        default: userConfig.Url,
        required: true,
        message: '服务器地址',
        alias: '服务器地址'
      },
      {
        name: 'Key',
        type: 'input',
        default: userConfig.Key,
        required: true,
        message: 'Key',
        alias: 'Key'
      }
    ]
  }
  return {
    uploader: 'light_picture',
    config: config,
    register
  }
}
