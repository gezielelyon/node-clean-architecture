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

  map (collection: any): any {
    const { _id, ...collectionWithoutId } = collection

    return Object.assign({}, collectionWithoutId, { id: String(_id) })
  }
}

export = new MongoHelper()
