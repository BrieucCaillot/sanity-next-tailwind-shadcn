import { type SchemaTypeDefinition } from 'sanity'

import author from './schemas/documents/author'
import blockContent from './schemas/documents/blockContent'
import category from './schemas/documents/category'
import post from './schemas/documents/post'

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [post, author, category, blockContent],
}
