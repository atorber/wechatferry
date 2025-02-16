import { WechatferryPuppet } from 'wechatferry/puppet'
import { WechatyBuilder } from 'wechaty'
import { useLogger } from 'wechatferry/logger'

const logger = useLogger('puppet-example')

const puppet = new WechatferryPuppet()
const bot = WechatyBuilder.build({ puppet })

bot.on('message', async (msg) => {
  try{
    logger.info(JSON.stringify(msg, null, 2))
    if (msg.text() === 'ding') { // 将逻辑表达式改为条件语句
      msg.say('dong')
    }
    if (msg.text() === 'CALL_SQLAPI') {
      const db = 'MSG0.db'
      const sql = 'select * from MSG WHERE StrTalker = \"ledongmao\" ORDER BY CreateTime DESC LIMIT 10;'
      const payload = { db, sql }
      const method = 'dbSqlQuery'
      const text = JSON.stringify({ payload, method })
      try {
        const result = await bot.puppet.messageSendText('@agent', text)
        logger.info(result)
      } catch (error) {
        logger.error(error)
      }
    }
  
    if (msg.text() === 'ALL_CONTACT') {
      const contactList = await bot.Contact.findAll()
      logger.info(JSON.stringify(contactList, null, 2))
      logger.info(`共有${contactList.length}个联系人`)
      msg.say(`共有${contactList.length}个联系人`)
    }
  } catch (error) {
    logger.error(error)
  }
})
  .start()
  .then(() => logger.info('Bot started'))
  .catch(console.error)
