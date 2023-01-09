import { getDefaultDocumentNode } from './structure';
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET!

export default defineConfig({
  basePath: "/studio",
  name: 'Alireza_Content_Studio',
  title: 'Alireza Content Studio',
  projectId,
  dataset,
  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode,
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
