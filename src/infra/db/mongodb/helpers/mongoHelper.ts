import { Collection, MongoClient } from 'mongodb'

class MongoHelper {
  private mongoClient: MongoClient

  async connect (url: string): Promise<void> {
    this.mongoClient = await MongoClient.connect(url)
  }

  async disconnect (): Promise<void> {
    await this.mongoClient.close()
  }

  getCollection (name: string): Collection {
    return this.mongoClient.db().collection(name)
  }
}

export = new MongoHelper()
